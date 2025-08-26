import {
  getGraphQLClient,
  gql
} from "./chunk.KAJGV2AN.js";
import {
  __spreadProps,
  __spreadValues,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/data-services/types.ts
init_dirname();
init_buffer();
init_process();

// src/data-services/harmony-data-service.ts
init_dirname();
init_buffer();
init_process();

// src/data-services/queries.ts
init_dirname();
init_buffer();
init_process();
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
        $collectionConceptId: String
        $collectionEntryId: String
        $variableConceptIds: [String]
        $variableEntryIds: [String]
        $average: String
        $boundingBox: BoundingBoxInput
        $startDate: String
        $endDate: String
        $format: String
        $labels: [String]
    ) {
        createSubsetJob(
            input: {
                collectionConceptId: $collectionConceptId
                collectionEntryId: $collectionEntryId
                variableConceptIds: $variableConceptIds
                variableEntryIds: $variableEntryIds
                average: $average
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
var HARMONY_CONFIG = {
  baseUrl: "https://harmony.earthdata.nasa.gov",
  cmrUrl: "https://cmr.earthdata.nasa.gov/search",
  proxyUrl: "https://lpo4uv7f0h.execute-api.us-east-1.amazonaws.com/default/harmony-link-proxy"
};
var FINAL_STATUSES = /* @__PURE__ */ new Set([
  "successful" /* SUCCESSFUL */,
  "failed" /* FAILED */,
  "canceled" /* CANCELED */,
  "complete_with_errors" /* COMPLETE_WITH_ERRORS */
]);
var HarmonyDataService = class {
  async getCollectionWithAvailableServices(collectionEntryId, options) {
    var _a;
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
        headers: __spreadProps(__spreadValues({}, (options == null ? void 0 : options.bearerToken) && {
          authorization: options.bearerToken
        }), {
          "x-environment": (_a = options == null ? void 0 : options.environment) != null ? _a : "prod"
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
  async createSubsetJob(input, options) {
    var _a, _b;
    try {
      const client = await getGraphQLClient();
      const response = await client.mutate({
        mutation: CREATE_SUBSET_JOB,
        variables: {
          collectionConceptId: input.collectionConceptId,
          collectionEntryId: input.collectionEntryId,
          variableConceptIds: input.variableConceptIds,
          variableEntryIds: input.variableEntryIds,
          average: input.average,
          boundingBox: input.boundingBox,
          startDate: input.startDate,
          endDate: input.endDate,
          format: input.format,
          labels: input.labels
        },
        context: {
          headers: __spreadProps(__spreadValues({}, (options == null ? void 0 : options.bearerToken) && {
            authorization: options.bearerToken
          }), {
            "x-environment": (_a = options == null ? void 0 : options.environment) != null ? _a : "prod"
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
      return (_b = response.data) == null ? void 0 : _b.createSubsetJob;
    } catch (err) {
      console.error("createSubsetJob ERROR: ", err);
      throw err;
    }
  }
  async getSubsetJobs(searchOptions) {
    var _a;
    const client = await getGraphQLClient();
    const response = await client.query({
      query: GET_SUBSET_JOBS,
      context: {
        headers: __spreadProps(__spreadValues({}, (searchOptions == null ? void 0 : searchOptions.bearerToken) && {
          authorization: searchOptions.bearerToken
        }), {
          "x-environment": (_a = searchOptions == null ? void 0 : searchOptions.environment) != null ? _a : "prod"
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
    var _a;
    const client = await getGraphQLClient();
    const response = await client.query({
      query: GET_SUBSET_JOB_STATUS,
      variables: {
        jobId
      },
      context: {
        headers: __spreadProps(__spreadValues({}, (searchOptions == null ? void 0 : searchOptions.bearerToken) && {
          authorization: searchOptions.bearerToken
        }), {
          "x-environment": (_a = searchOptions == null ? void 0 : searchOptions.environment) != null ? _a : "prod"
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
    var _a;
    const client = await getGraphQLClient();
    const response = await client.query({
      query: CANCEL_SUBSET_JOB,
      variables: {
        jobId
      },
      context: {
        headers: __spreadProps(__spreadValues({}, (options == null ? void 0 : options.bearerToken) && {
          authorization: options.bearerToken
        }), {
          "x-environment": (_a = options == null ? void 0 : options.environment) != null ? _a : "prod"
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
  async getSubsetJobData(job, options) {
    var _a;
    const link = (_a = job.links.find((link2) => link2.rel === "data")) == null ? void 0 : _a.href;
    if (!link) {
      throw new Error("No data link found for job");
    }
    const proxyUrl = `${HARMONY_CONFIG.proxyUrl}?url=${encodeURIComponent(link)}`;
    console.log("fetching data from ", proxyUrl);
    const response = await fetch(proxyUrl, {
      headers: __spreadValues({}, (options == null ? void 0 : options.bearerToken) && {
        Authorization: `Bearer ${options == null ? void 0 : options.bearerToken}`
      }),
      signal: options == null ? void 0 : options.signal
    });
    if (!response.ok) {
      throw new Error(
        `Failed to fetch subset job link contents: ${response.statusText}`
      );
    }
    const clonedResponse = response.clone();
    const blob = await response.blob();
    const text = await clonedResponse.text();
    return { blob, text };
  }
};

export {
  FINAL_STATUSES,
  HarmonyDataService
};
