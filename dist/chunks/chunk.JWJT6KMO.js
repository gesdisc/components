import {
  FINAL_STATUSES,
  HarmonyDataService
} from "./chunk.2HDTG4T3.js";
import {
  h
} from "./chunk.UGTZ22DI.js";
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

// src/components/data-subsetter/data-subsetter.controller.ts
var JOB_STATUS_POLL_MILLIS = 3e3;
var _host, _dataService, _getDataService, getDataService_fn, _getEmptyJob, getEmptyJob_fn, _buildJobLabels, buildJobLabels_fn;
var DataSubsetterController = class {
  constructor(host) {
    __privateAdd(this, _getDataService);
    __privateAdd(this, _getEmptyJob);
    __privateAdd(this, _buildJobLabels);
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
          const labels = __privateMethod(this, _buildJobLabels, buildJobLabels_fn).call(this);
          let subsetOptions = __spreadProps(__spreadValues(__spreadValues(__spreadValues({
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
          }), {
            labels
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
_buildJobLabels = new WeakSet();
buildJobLabels_fn = function() {
  var _a, _b, _c, _d;
  const labels = [];
  if ((_b = (_a = __privateGet(this, _host).collectionWithServices) == null ? void 0 : _a.collection) == null ? void 0 : _b.EntryTitle) {
    labels.push(
      encodeURIComponent(
        (_d = (_c = __privateGet(this, _host).collectionWithServices) == null ? void 0 : _c.collection) == null ? void 0 : _d.EntryTitle
      )
    );
  }
  return labels;
};

export {
  DataSubsetterController
};
