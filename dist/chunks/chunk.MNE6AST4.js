import {
  FINAL_STATUSES,
  HarmonyDataService
} from "./chunk.LJ4ZBVVY.js";
import {
  Fuse
} from "./chunk.QZV6EAIM.js";
import {
  GET_CMR_SEARCH_RESULTS_ALL,
  GET_CMR_SEARCH_RESULTS_COLLECTIONS,
  GET_CMR_SEARCH_RESULTS_VARIABLES
} from "./chunk.ALY47PFL.js";
import {
  ApolloClient,
  CachePersistor_default,
  HttpLink,
  InMemoryCache,
  require_localforage
} from "./chunk.3SGYVIRQ.js";
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
async function getGraphQLClient() {
  return await GraphQLClientManager.getInstance().getClient();
}

// src/metadata-catalog/cmr-catalog.ts
var CmrCatalog = class {
  async searchCmr(keyword, type, options) {
    var _a, _b, _c, _d, _e, _f;
    const client = await getGraphQLClient();
    const response = await client.query({
      query: type === "collection" ? GET_CMR_SEARCH_RESULTS_COLLECTIONS : type === "variable" ? GET_CMR_SEARCH_RESULTS_VARIABLES : GET_CMR_SEARCH_RESULTS_ALL,
      variables: {
        keyword
      },
      context: {
        fetchOptions: {
          signal: options == null ? void 0 : options.signal
        }
      },
      fetchPolicy: "network-only"
    });
    if (response.errors) {
      throw new Error(`Failed to search CMR: ${response.errors[0].message}`);
    }
    const collections = (_c = (_b = (_a = response.data.collections) == null ? void 0 : _a.items) == null ? void 0 : _b.map((collection) => ({
      type: "collection",
      collectionConceptId: collection.conceptId,
      collectionEntryId: collection.nativeId,
      conceptId: collection.conceptId,
      entryId: collection.nativeId,
      provider: collection.provider,
      title: collection.title
    }))) != null ? _c : [];
    const variables = (_f = (_e = (_d = response.data.variables) == null ? void 0 : _d.items) == null ? void 0 : _e.map((variable) => {
      var _a2, _b2, _c2, _d2;
      return {
        type: "variable",
        collectionConceptId: (_b2 = (_a2 = variable.collections.items) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.conceptId,
        collectionEntryId: (_d2 = (_c2 = variable.collections.items) == null ? void 0 : _c2[0]) == null ? void 0 : _d2.nativeId,
        conceptId: variable.conceptId,
        entryId: variable.name,
        provider: variable.providerId,
        title: variable.longName
      };
    })) != null ? _f : [];
    return [...collections, ...variables];
  }
};

// src/components/data-subsetter/data-subsetter.controller.ts
var JOB_STATUS_POLL_MILLIS = 3e3;
var _host, _dataService, _metadataCatalog, _getMetadataCatalog, getMetadataCatalog_fn, _getDataService, getDataService_fn, _getEmptyJob, getEmptyJob_fn, _buildJobLabels, buildJobLabels_fn;
var DataSubsetterController = class {
  constructor(host) {
    __privateAdd(this, _getMetadataCatalog);
    __privateAdd(this, _getDataService);
    __privateAdd(this, _getEmptyJob);
    __privateAdd(this, _buildJobLabels);
    __privateAdd(this, _host, void 0);
    __privateAdd(this, _dataService, void 0);
    __privateAdd(this, _metadataCatalog, void 0);
    __privateSet(this, _host, host);
    __privateSet(this, _dataService, __privateMethod(this, _getDataService, getDataService_fn).call(this));
    __privateSet(this, _metadataCatalog, __privateMethod(this, _getMetadataCatalog, getMetadataCatalog_fn).call(this));
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
    this.searchCmrTask = new h(host, {
      task: async ([searchQuery, searchType], { signal }) => {
        if (!searchQuery) {
          __privateGet(this, _host).collectionSearchResults = void 0;
          return __privateGet(this, _host).collectionSearchResults;
        }
        __privateGet(this, _host).collectionSearchLoading = true;
        const results = await __privateGet(this, _metadataCatalog).searchCmr(
          searchQuery,
          searchType,
          {
            signal
          }
        );
        const fuse = new Fuse(results, {
          keys: ["title", "entryId", "provider"]
        });
        __privateGet(this, _host).collectionSearchResults = fuse.search(searchQuery).map((result) => result.item);
        __privateGet(this, _host).collectionSearchLoading = false;
        return __privateGet(this, _host).collectionSearchResults;
      },
      args: () => [
        __privateGet(this, _host).collectionSearchQuery,
        __privateGet(this, _host).collectionSearchType
      ]
    });
    this.jobStatusTask = new h(host, {
      task: async ([], { signal }) => {
        var _a, _b, _c, _d, _e;
        let job;
        __privateGet(this, _host).renderHistoryPanel();
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
_metadataCatalog = new WeakMap();
_getMetadataCatalog = new WeakSet();
getMetadataCatalog_fn = function() {
  return new CmrCatalog();
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
