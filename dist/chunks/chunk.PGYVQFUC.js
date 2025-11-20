import {
  calculateMeanGranuleSize,
  formatGranuleSize
} from "./chunk.V6GUDCWA.js";
import {
  CmrCatalog
} from "./chunk.EOF7UX34.js";
import {
  h
} from "./chunk.CTTYXXNL.js";
import {
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/data-access/data-access.controller.ts
init_dirname();
init_buffer();
init_process();
var _host, _catalog, _totalGranules, _granules, _sampling, _cloudCoverRange, _getCatalogRepository, getCatalogRepository_fn, _getCollectionEntryId, getCollectionEntryId_fn;
var DataAccessController = class {
  constructor(host) {
    __privateAdd(this, _getCatalogRepository);
    __privateAdd(this, _getCollectionEntryId);
    __privateAdd(this, _host, void 0);
    __privateAdd(this, _catalog, void 0);
    __privateAdd(this, _totalGranules, 0);
    __privateAdd(this, _granules, []);
    __privateAdd(this, _sampling, void 0);
    __privateAdd(this, _cloudCoverRange, null);
    __privateSet(this, _host, host);
    __privateSet(this, _catalog, __privateMethod(this, _getCatalogRepository, getCatalogRepository_fn).call(this));
    this.fetchGranulesTask = new h(host, {
      task: async ([
        collectionEntryId,
        startRow,
        endRow,
        sortBy,
        sortDirection,
        search,
        cloudCover
      ], { signal }) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
        console.log(
          "fetch granules",
          collectionEntryId,
          startRow,
          endRow,
          sortBy,
          sortDirection,
          search,
          cloudCover
        );
        if (!collectionEntryId) {
          return void 0;
        }
        const granules = await __privateGet(this, _catalog).getGranules(collectionEntryId, {
          signal,
          offset: startRow,
          limit: endRow - startRow,
          sortBy,
          sortDirection,
          search,
          cloudCover,
          startDate: __privateGet(this, _host).startDate,
          endDate: __privateGet(this, _host).endDate,
          location: __privateGet(this, _host).location
        });
        __privateSet(this, _granules, (_e = (_d = (_c = (_b = (_a = granules == null ? void 0 : granules.collections) == null ? void 0 : _a.items) == null ? void 0 : _b[0]) == null ? void 0 : _c.granules) == null ? void 0 : _d.items) != null ? _e : []);
        __privateSet(this, _totalGranules, (_j = (_i = (_h = (_g = (_f = granules == null ? void 0 : granules.collections) == null ? void 0 : _f.items) == null ? void 0 : _g[0]) == null ? void 0 : _h.granules) == null ? void 0 : _i.count) != null ? _j : 0);
        return __privateGet(this, _granules);
      },
      autoRun: false
    });
    new h(host, {
      task: async ([shortName, version], { signal }) => {
        var _a, _b, _c;
        const collectionEntryId = __privateMethod(this, _getCollectionEntryId, getCollectionEntryId_fn).call(this, shortName, version);
        if (!collectionEntryId) {
          return;
        }
        const sampling = await __privateGet(this, _catalog).getSamplingOfGranules(
          collectionEntryId,
          {
            signal
          }
        );
        __privateSet(this, _sampling, (_c = (_b = (_a = sampling == null ? void 0 : sampling.collections) == null ? void 0 : _a.items) == null ? void 0 : _b[0]) != null ? _c : []);
        return __privateGet(this, _sampling);
      },
      args: () => [__privateGet(this, _host).shortName, __privateGet(this, _host).version]
    });
    new h(host, {
      task: async ([shortName, version], { signal }) => {
        const collectionEntryId = __privateMethod(this, _getCollectionEntryId, getCollectionEntryId_fn).call(this, shortName, version);
        if (!collectionEntryId) {
          return;
        }
        const cloudCoverRange = await __privateGet(this, _catalog).getCloudCoverRange(
          collectionEntryId,
          {
            signal
          }
        );
        __privateSet(this, _cloudCoverRange, cloudCoverRange);
        return __privateGet(this, _cloudCoverRange);
      },
      args: () => [__privateGet(this, _host).shortName, __privateGet(this, _host).version]
    });
  }
  get granules() {
    return __privateGet(this, _granules);
  }
  get totalGranules() {
    return __privateGet(this, _totalGranules);
  }
  get sampling() {
    return __privateGet(this, _sampling);
  }
  get granuleMinDate() {
    var _a;
    if (!((_a = __privateGet(this, _sampling)) == null ? void 0 : _a.firstGranules)) {
      return null;
    }
    return __privateGet(this, _sampling).firstGranules.items[0].dataGranule.productionDateTime;
  }
  get granuleMaxDate() {
    var _a;
    if (!((_a = __privateGet(this, _sampling)) == null ? void 0 : _a.lastGranules)) {
      return null;
    }
    const granules = __privateGet(this, _sampling).lastGranules.items;
    return granules[granules.length - 1].dataGranule.productionDateTime;
  }
  get estimatedSize() {
    var _a, _b, _c;
    if (!((_a = __privateGet(this, _sampling)) == null ? void 0 : _a.firstGranules)) {
      return null;
    }
    const firstAndLastGranules = (_c = __privateGet(this, _sampling)) == null ? void 0 : _c.firstGranules.items.concat(
      (_b = __privateGet(this, _sampling)) == null ? void 0 : _b.lastGranules.items
    );
    return firstAndLastGranules ? formatGranuleSize(
      calculateMeanGranuleSize(firstAndLastGranules) * __privateGet(this, _totalGranules)
    ) : null;
  }
  get cloudCoverRange() {
    return __privateGet(this, _cloudCoverRange);
  }
  async fetchGranules({
    collectionEntryId,
    startRow,
    endRow,
    sortBy,
    sortDirection,
    search,
    cloudCover
  }) {
    return this.fetchGranulesTask.run([
      collectionEntryId,
      startRow,
      endRow,
      sortBy != null ? sortBy : "title",
      sortDirection != null ? sortDirection : "asc",
      search != null ? search : "",
      cloudCover != null ? cloudCover : { min: void 0, max: void 0 }
    ]);
  }
  render(renderFunctions) {
    return this.fetchGranulesTask.render(renderFunctions);
  }
};
_host = new WeakMap();
_catalog = new WeakMap();
_totalGranules = new WeakMap();
_granules = new WeakMap();
_sampling = new WeakMap();
_cloudCoverRange = new WeakMap();
_getCatalogRepository = new WeakSet();
getCatalogRepository_fn = function() {
  return new CmrCatalog();
};
_getCollectionEntryId = new WeakSet();
getCollectionEntryId_fn = function(shortName, version) {
  if (!shortName || !version) {
    return;
  }
  return `${shortName}_${version}`;
};

export {
  DataAccessController
};
