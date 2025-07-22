import {
  ApolloClient,
  CachePersistor_default,
  HttpLink,
  InMemoryCache,
  getGraphQLClient,
  gql,
  require_localforage
} from "./chunk.3SGYVIRQ.js";
import {
  __spreadValues,
  __toESM
} from "./chunk.6JHIJHTB.js";

// src/lib/cmr-graphql-client.ts
var import_localforage = __toESM(require_localforage(), 1);
import_localforage.default.config({
  name: "terra-cmr-cache",
  storeName: "terra-cmr-cache-store",
  description: "CMR cache for the Terra Component Library"
});
var GraphQLClientManager = class _GraphQLClientManager {
  constructor() {
    const cache = new InMemoryCache();
    const persistor = new CachePersistor_default({
      cache,
      storage: {
        getItem: async (key) => {
          return await import_localforage.default.getItem(key);
        },
        setItem: async (key, value) => {
          return await import_localforage.default.setItem(key, value);
        },
        removeItem: async (key) => {
          return await import_localforage.default.removeItem(key);
        }
      },
      debug: false
    });
    this.client = new ApolloClient({
      link: new HttpLink({
        uri: "https://graphql.earthdata.nasa.gov/api"
      }),
      cache,
      defaultOptions: {
        query: {
          fetchPolicy: "cache-first"
        }
      }
    });
    this.initializationPromise = persistor.restore().catch((error) => {
      console.error("Error restoring Apollo cache:", error);
    });
  }
  static getInstance() {
    if (!_GraphQLClientManager.instance) {
      _GraphQLClientManager.instance = new _GraphQLClientManager();
    }
    return _GraphQLClientManager.instance;
  }
  async getClient() {
    await this.initializationPromise;
    return this.client;
  }
};
async function getGraphQLClient2() {
  return await GraphQLClientManager.getInstance().getClient();
}

// src/data-services/queries.ts
var GET_CMR_SEARCH_RESULTS_ALL = gql`
    query GetCMRSearchResultsAll($keyword: String!) {
        collections(params: { keyword: $keyword }) {
            items {
                conceptId
                nativeId
                provider
                title
            }
        }
        variables(params: { keyword: $keyword }) {
            items {
                conceptId
                name
                providerId
                longName
                collections {
                    items {
                        conceptId
                    }
                }
            }
        }
    }
`;
var GET_CMR_SEARCH_RESULTS_COLLECTIONS = gql`
    query GetCMRSearchResultsCollections($keyword: String!) {
        collections(params: { keyword: $keyword }) {
            items {
                conceptId
                nativeId
                provider
                title
            }
        }
    }
`;
var GET_CMR_SEARCH_RESULTS_VARIABLES = gql`
    query GetCMRSearchResultsVariables($keyword: String!) {
        variables(params: { keyword: $keyword }) {
            items {
                conceptId
                name
                providerId
                longName
                collections {
                    items {
                        conceptId
                    }
                }
            }
        }
    }
`;
var GET_SERVICE_CAPABILITIES = gql`
    query GetServiceCapabilities($collectionEntryId: String) {
        getServiceCapabilities(input: { collectionEntryId: $collectionEntryId }) {
            conceptId
            shortName
            variableSubset
            bboxSubset
            shapeSubset
            temporalSubset
            concatenate
            reproject
            capabilitiesVersion
            outputFormats
            services {
                name
                href
                capabilities {
                    output_formats
                    subsetting {
                        temporal
                        bbox
                        variable
                        shape
                    }
                }
            }
            variables {
                name
                href
                conceptId
            }
            collection {
                granuleCount
                EntryTitle
                SpatialExtent {
                    GranuleSpatialRepresentation
                    HorizontalSpatialDomain {
                        Geometry {
                            CoordinateSystem
                            BoundingRectangles {
                                WestBoundingCoordinate
                                NorthBoundingCoordinate
                                EastBoundingCoordinate
                                SouthBoundingCoordinate
                            }
                        }
                    }
                }
                TemporalExtents {
                    EndsAtPresentFlag
                    RangeDateTimes {
                        BeginningDateTime
                        EndingDateTime
                    }
                }
            }
        }
    }
`;
var CREATE_SUBSET_JOB = gql`
    mutation CreateSubsetJob(
        $collectionConceptId: String!
        $variableConceptIds: [String]
        $boundingBox: BoundingBoxInput
        $startDate: String
        $endDate: String
        $format: String
        $labels: [String]
    ) {
        createSubsetJob(
            input: {
                collectionConceptId: $collectionConceptId
                variableConceptIds: $variableConceptIds
                boundingBox: $boundingBox
                startDate: $startDate
                endDate: $endDate
                format: $format
                labels: $labels
            }
        ) {
            jobID
            status
            message
            progress
            createdAt
            updatedAt
            dataExpiration
            request
            numInputGranules
            originalDataSize
            outputDataSize
            dataSizePercentChange
            labels
            links {
                title
                href
                rel
                type
                bbox
                temporal {
                    start
                    end
                }
            }
        }
    }
`;
var GET_SUBSET_JOBS = gql`
    query {
        getSubsetJobs {
            count
            jobs {
                jobID
                status
                message
                progress
                request
                labels
                createdAt
            }
        }
    }
`;
var GET_SUBSET_JOB_STATUS = gql`
    query GetSubsetJobStatus($jobId: String) {
        getSubsetJobStatus(jobId: $jobId) {
            jobID
            status
            message
            progress
            createdAt
            updatedAt
            dataExpiration
            request
            numInputGranules
            originalDataSize
            outputDataSize
            dataSizePercentChange
            labels
            links {
                title
                href
                rel
                type
                bbox
                temporal {
                    start
                    end
                }
            }
            errors {
                url
                message
            }
        }
    }
`;
var CANCEL_SUBSET_JOB = gql`
    query CancelSubsetJob($jobId: String) {
        cancelSubsetJob(jobId: $jobId) {
            jobID
            status
            message
        }
    }
`;

// src/data-services/harmony-data-service.ts
var FINAL_STATUSES = /* @__PURE__ */ new Set([
  "successful" /* SUCCESSFUL */,
  "failed" /* FAILED */,
  "canceled" /* CANCELED */,
  "complete_with_errors" /* COMPLETE_WITH_ERRORS */
]);
var HarmonyDataService = class {
  async searchCmr(keyword, type, options) {
    var _a, _b, _c, _d, _e, _f;
    const client = await getGraphQLClient2();
    console.log("Searching for ", keyword);
    const response = await client.query({
      query: type === "collection" ? GET_CMR_SEARCH_RESULTS_COLLECTIONS : type === "variable" ? GET_CMR_SEARCH_RESULTS_VARIABLES : GET_CMR_SEARCH_RESULTS_ALL,
      variables: {
        keyword
      },
      context: {
        fetchOptions: {
          signal: options == null ? void 0 : options.signal
        }
      }
    });
    if (response.errors) {
      throw new Error(`Failed to search CMR: ${response.errors[0].message}`);
    }
    const collections = (_c = (_b = (_a = response.data.collections) == null ? void 0 : _a.items) == null ? void 0 : _b.map((collection) => ({
      type: "collection",
      collectionConceptId: collection.conceptId,
      conceptId: collection.conceptId,
      entryId: collection.nativeId,
      provider: collection.provider,
      title: collection.title
    }))) != null ? _c : [];
    const variables = (_f = (_e = (_d = response.data.variables) == null ? void 0 : _d.items) == null ? void 0 : _e.map((variable) => {
      var _a2, _b2;
      return {
        type: "variable",
        collectionConceptId: (_b2 = (_a2 = variable.collections.items) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.conceptId,
        conceptId: variable.conceptId,
        entryId: variable.name,
        provider: variable.providerId,
        title: variable.longName
      };
    })) != null ? _f : [];
    return [...collections, ...variables];
  }
  async getCollectionWithAvailableServices(collectionEntryId, options) {
    const client = await getGraphQLClient();
    console.log(
      "Getting collection with available services for ",
      collectionEntryId
    );
    const response = await client.query({
      query: GET_SERVICE_CAPABILITIES,
      variables: {
        collectionEntryId
      },
      context: {
        headers: __spreadValues({}, (options == null ? void 0 : options.bearerToken) && {
          authorization: options.bearerToken
        }),
        fetchOptions: {
          signal: options == null ? void 0 : options.signal
        }
      }
    });
    if (response.errors) {
      throw new Error(
        `Failed to create subset job: ${response.errors[0].message}`
      );
    }
    return response.data.getServiceCapabilities;
  }
  async createSubsetJob(collectionConceptId, subsetOptions) {
    var _a;
    const client = await getGraphQLClient();
    console.log(
      "creating subset job ",
      CREATE_SUBSET_JOB,
      collectionConceptId,
      subsetOptions
    );
    const response = await client.mutate({
      mutation: CREATE_SUBSET_JOB,
      variables: {
        collectionConceptId,
        variableConceptIds: subsetOptions == null ? void 0 : subsetOptions.variableConceptIds,
        boundingBox: subsetOptions == null ? void 0 : subsetOptions.boundingBox,
        startDate: subsetOptions == null ? void 0 : subsetOptions.startDate,
        endDate: subsetOptions == null ? void 0 : subsetOptions.endDate,
        format: subsetOptions == null ? void 0 : subsetOptions.format,
        labels: subsetOptions == null ? void 0 : subsetOptions.labels
      },
      context: {
        headers: __spreadValues({}, (subsetOptions == null ? void 0 : subsetOptions.bearerToken) && {
          authorization: subsetOptions.bearerToken
        }),
        fetchOptions: {
          signal: subsetOptions == null ? void 0 : subsetOptions.signal
        }
      }
    });
    if (response.errors) {
      throw new Error(
        `Failed to create subset job: ${response.errors[0].message}`
      );
    }
    return (_a = response.data) == null ? void 0 : _a.createSubsetJob;
  }
  async getSubsetJobs(searchOptions) {
    const client = await getGraphQLClient();
    const response = await client.query({
      query: GET_SUBSET_JOBS,
      context: {
        headers: __spreadValues({}, (searchOptions == null ? void 0 : searchOptions.bearerToken) && {
          authorization: searchOptions.bearerToken
        }),
        fetchOptions: {
          signal: searchOptions == null ? void 0 : searchOptions.signal
        }
      },
      fetchPolicy: "network-only"
    });
    if (response.errors) {
      throw new Error(
        `Failed to fetch subset jobs: ${response.errors[0].message}`
      );
    }
    return response.data.getSubsetJobs;
  }
  async getSubsetJobStatus(jobId, searchOptions) {
    const client = await getGraphQLClient();
    const response = await client.query({
      query: GET_SUBSET_JOB_STATUS,
      variables: {
        jobId
      },
      context: {
        headers: __spreadValues({}, (searchOptions == null ? void 0 : searchOptions.bearerToken) && {
          authorization: searchOptions.bearerToken
        }),
        fetchOptions: {
          signal: searchOptions == null ? void 0 : searchOptions.signal
        }
      },
      fetchPolicy: "no-cache"
      //! important, we don't want to get cached results here!
    });
    if (response.errors) {
      throw new Error(
        `Failed to create subset job: ${response.errors[0].message}`
      );
    }
    return response.data.getSubsetJobStatus;
  }
  async cancelSubsetJob(jobId, options) {
    const client = await getGraphQLClient();
    const response = await client.query({
      query: CANCEL_SUBSET_JOB,
      variables: {
        jobId
      },
      context: {
        headers: __spreadValues({}, (options == null ? void 0 : options.bearerToken) && {
          authorization: options.bearerToken
        })
      },
      fetchPolicy: "no-cache"
      //! important, we don't want to get cached results here!
    });
    if (response.errors) {
      throw new Error(
        `Failed to cancel subset job: ${response.errors[0].message}`
      );
    }
    return response.data.cancelSubsetJob;
  }
};

export {
  FINAL_STATUSES,
  HarmonyDataService
};
