import {
  getDataByKey,
  storeDataByKey
} from "./chunk.T24K5VZW.js";
import {
  format
} from "./chunk.MHNGCUSQ.js";
import {
  FINAL_STATUSES,
  HarmonyDataService
} from "./chunk.XPUSLKRS.js";
import {
  h
} from "./chunk.3AZLGGEX.js";
import {
  formatDate
} from "./chunk.VYOUAAH7.js";
import {
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/time-average-map/time-average-map.controller.ts
init_dirname();
init_buffer();
init_process();
var REFRESH_HARMONY_DATA_INTERVAL = 2e3;
var _host, _dataService, _waitForHarmonyJob, waitForHarmonyJob_fn, _getDataService, getDataService_fn, _getEmptyJob, getEmptyJob_fn;
var TimeAvgMapController = class {
  constructor(host) {
    __privateAdd(this, _waitForHarmonyJob);
    __privateAdd(this, _getDataService);
    __privateAdd(this, _getEmptyJob);
    __privateAdd(this, _host, void 0);
    __privateAdd(this, _dataService, void 0);
    __privateSet(this, _host, host);
    __privateSet(this, _dataService, __privateMethod(this, _getDataService, getDataService_fn).call(this));
    this.jobStatusTask = new h(host, {
      task: async ([], { signal }) => {
        var _a, _b, _c, _d, _e, _f;
        let job;
        const start_date = new Date((_b = (_a = __privateGet(this, _host)) == null ? void 0 : _a.startDate) != null ? _b : Date.now());
        const end_date = new Date((_d = (_c = __privateGet(this, _host)) == null ? void 0 : _c.endDate) != null ? _d : Date.now());
        const [w, s, e, n] = (_f = (_e = __privateGet(this, _host).location) == null ? void 0 : _e.split(",")) != null ? _f : [];
        const collection = `${__privateGet(this, _host).catalogVariable.dataProductShortName}_${__privateGet(this, _host).catalogVariable.dataProductVersion}`;
        let subsetOptions = {
          collectionEntryId: `${collection}`,
          variableConceptIds: ["parameter_vars"],
          variableEntryIds: [
            `${__privateGet(this, _host).collection}_${__privateGet(this, _host).variable}`
          ],
          startDate: format(start_date, "yyyy-MM-dd") + "T00%3A00%3A00",
          endDate: format(end_date, "yyyy-MM-dd") + "T00%3A00%3A00",
          format: "text/csv",
          boundingBox: {
            w: parseFloat(w),
            s: parseFloat(s),
            e: parseFloat(e),
            n: parseFloat(n)
          },
          average: "time"
        };
        console.log(`Creating a job with options`, subsetOptions);
        this.currentJob = __privateMethod(this, _getEmptyJob, getEmptyJob_fn).call(this);
        try {
          const cacheKey = this.getCacheKey();
          const existing = await getDataByKey("time-average-map" /* TIME_AVERAGE_MAP */, cacheKey);
          if (existing) {
            console.log(
              "Returning existing map blob from cache",
              cacheKey
            );
            this.blobUrl = existing.blob;
            return existing.blob;
          }
          console.log("Calling create subset job..");
          job = await __privateGet(this, _dataService).createSubsetJob(subsetOptions, {
            signal,
            bearerToken: __privateGet(this, _host).bearerToken,
            environment: __privateGet(this, _host).environment
          });
          if (!job) {
            throw new Error("Failed to create subset job");
          }
          console.log("Waiting for harmony job..");
          const jobStatus = await __privateMethod(this, _waitForHarmonyJob, waitForHarmonyJob_fn).call(this, job, signal);
          const { blob } = await __privateGet(this, _dataService).getSubsetJobData(
            jobStatus,
            {
              signal,
              bearerToken: __privateGet(this, _host).bearerToken,
              environment: __privateGet(this, _host).environment
            }
          );
          this.blobUrl = blob;
          __privateGet(this, _host).emit("terra-time-average-map-data-change", {
            detail: {
              data: blob,
              variable: __privateGet(this, _host).catalogVariable,
              startDate: formatDate(__privateGet(this, _host).startDate),
              endDate: formatDate(__privateGet(this, _host).endDate),
              location: __privateGet(this, _host).location
            }
          });
          await storeDataByKey("time-average-map" /* TIME_AVERAGE_MAP */, cacheKey, {
            key: cacheKey,
            cachedAt: (/* @__PURE__ */ new Date()).getTime(),
            environment: __privateGet(this, _host).environment,
            blob
          });
          return blob;
        } catch (err) {
          const error_msg = `Failed to create subset job: ${err}`;
          console.error(error_msg);
          throw new Error(error_msg);
        }
      },
      args: () => [],
      autoRun: false
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
  getCacheKey() {
    var _a, _b, _c, _d, _e, _f;
    const environment = (_a = __privateGet(this, _host).environment) != null ? _a : "prod";
    const location = (_b = __privateGet(this, _host).location) != null ? _b : "";
    const collection = (_c = __privateGet(this, _host).collection) != null ? _c : "";
    const variable = (_d = __privateGet(this, _host).variable) != null ? _d : "";
    const start = (_e = __privateGet(this, _host).startDate) != null ? _e : "";
    const end = (_f = __privateGet(this, _host).endDate) != null ? _f : "";
    return `map_${collection}_${variable}_${start}_${end}_${location}_${environment}`;
  }
};
_host = new WeakMap();
_dataService = new WeakMap();
_waitForHarmonyJob = new WeakSet();
waitForHarmonyJob_fn = function(job, signal) {
  return new Promise(async (resolve) => {
    let jobStatus;
    try {
      jobStatus = await __privateGet(this, _dataService).getSubsetJobStatus(job.jobID, {
        signal,
        bearerToken: __privateGet(this, _host).bearerToken,
        environment: __privateGet(this, _host).environment
      });
      console.log("Job status", jobStatus);
    } catch (error) {
      console.error("Error checking harmony job status", error);
    }
    if (jobStatus && FINAL_STATUSES.has(jobStatus.status)) {
      console.log("Job is done", jobStatus);
      resolve(jobStatus);
    } else {
      setTimeout(async () => {
        resolve(await __privateMethod(this, _waitForHarmonyJob, waitForHarmonyJob_fn).call(this, job, signal));
      }, REFRESH_HARMONY_DATA_INTERVAL);
    }
  });
};
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
  TimeAvgMapController
};
