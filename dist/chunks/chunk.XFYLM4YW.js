import {
  h
} from "./chunk.UGTZ22DI.js";
import {
  getGraphQLClient,
  gql
} from "./chunk.MERDVJWH.js";
import {
  getUTCDate
} from "./chunk.EZMKGB3F.js";
import {
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __spreadProps,
  __spreadValues
} from "./chunk.6JHIJHTB.js";

// src/data-services/queries.ts
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
    ) {
        createSubsetJob(
            input: {
                collectionConceptId: $collectionConceptId
                variableConceptIds: $variableConceptIds
                boundingBox: $boundingBox
                startDate: $startDate
                endDate: $endDate
                format: $format
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
        format: subsetOptions == null ? void 0 : subsetOptions.format
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

// src/components/data-subsetter/data-subsetter.controller.ts
var JOB_STATUS_POLL_MILLIS = 1e3;
var _host, _dataService, _getDataService, getDataService_fn, _getEmptyJob, getEmptyJob_fn;
var DataSubsetterController = class {
  constructor(host) {
    __privateAdd(this, _getDataService);
    __privateAdd(this, _getEmptyJob);
    __privateAdd(this, _host, void 0);
    __privateAdd(this, _dataService, void 0);
    __privateSet(this, _host, host);
    __privateSet(this, _dataService, __privateMethod(this, _getDataService, getDataService_fn).call(this));
    this.fetchCollectionTask = new h(host, {
      task: async ([collectionEntryId], { signal }) => {
        __privateGet(this, _host).collectionWithServices = collectionEntryId ? await __privateGet(this, _dataService).getCollectionWithAvailableServices(
          collectionEntryId,
          { signal, bearerToken: __privateGet(this, _host).bearerToken }
        ) : void 0;
        return __privateGet(this, _host).collectionWithServices;
      },
      args: () => [__privateGet(this, _host).collectionEntryId]
    });
    this.jobStatusTask = new h(host, {
      task: async ([], { signal }) => {
        var _a, _b, _c, _d, _e;
        let job;
        if ((_a = this.currentJob) == null ? void 0 : _a.jobID) {
          job = await __privateGet(this, _dataService).getSubsetJobStatus(
            this.currentJob.jobID,
            { signal, bearerToken: __privateGet(this, _host).bearerToken }
          );
        } else {
          let subsetOptions = __spreadValues(__spreadValues(__spreadValues({
            variableConceptIds: __privateGet(this, _host).selectedVariables.map(
              (v) => v.conceptId
            )
          }, "w" in ((_b = __privateGet(this, _host).spatialSelection) != null ? _b : {}) && {
            boundingBox: __privateGet(this, _host).spatialSelection
          }), __privateGet(this, _host).selectedDateRange.startDate && __privateGet(this, _host).selectedDateRange.endDate && {
            startDate: getUTCDate(
              __privateGet(this, _host).selectedDateRange.startDate
            ).toISOString(),
            endDate: getUTCDate(
              __privateGet(this, _host).selectedDateRange.endDate,
              true
            ).toISOString()
          }), __privateGet(this, _host).selectedFormat && {
            format: __privateGet(this, _host).selectedFormat
          });
          console.log(
            `Creating a job for collection, ${(_c = __privateGet(this, _host).collectionWithServices) == null ? void 0 : _c.conceptId}, with subset options`,
            subsetOptions
          );
          this.currentJob = __privateMethod(this, _getEmptyJob, getEmptyJob_fn).call(this);
          job = await __privateGet(this, _dataService).createSubsetJob(
            (_e = (_d = __privateGet(this, _host).collectionWithServices) == null ? void 0 : _d.conceptId) != null ? _e : "",
            __spreadProps(__spreadValues({}, subsetOptions), {
              signal,
              bearerToken: __privateGet(this, _host).bearerToken
            })
          );
        }
        console.log("Job status: ", job);
        if (job) {
          this.currentJob = job;
        }
        if (!FINAL_STATUSES.has(this.currentJob.status)) {
          setTimeout(() => {
            this.jobStatusTask.run();
          }, JOB_STATUS_POLL_MILLIS);
        } else if (job) {
          console.log("Subset job completed ", job);
          __privateGet(this, _host).emit("terra-subset-job-complete", {
            detail: job
          });
        }
        return job;
      },
      args: () => [],
      autoRun: false
      // this task won't automatically be triggered, the component has to trigger it manually
    });
  }
  render(renderFunctions) {
    return this.jobStatusTask.render(renderFunctions);
  }
  fetchJobByID(jobID) {
    this.currentJob = {
      jobID,
      status: "fetching" /* FETCHING */,
      message: "Your job is being retrieved.",
      progress: 0,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      dataExpiration: "",
      request: "",
      numInputGranules: 0,
      links: []
    };
    this.jobStatusTask.run();
  }
  cancelCurrentJob() {
    var _a;
    if (!((_a = this.currentJob) == null ? void 0 : _a.jobID)) {
      return;
    }
    __privateGet(this, _dataService).cancelSubsetJob(this.currentJob.jobID, {
      bearerToken: __privateGet(this, _host).bearerToken
    });
  }
};
_host = new WeakMap();
_dataService = new WeakMap();
_getDataService = new WeakSet();
getDataService_fn = function() {
  return new HarmonyDataService();
};
_getEmptyJob = new WeakSet();
getEmptyJob_fn = function() {
  return {
    jobID: "",
    status: "running" /* RUNNING */,
    message: "Your job is being created and will start soon.",
    progress: 0,
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    dataExpiration: "",
    request: "",
    numInputGranules: 0,
    links: []
  };
};

export {
  DataSubsetterController
};
