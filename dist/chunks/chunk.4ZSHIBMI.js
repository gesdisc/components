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

// src/components/plot-toolbar/plot-toolbar.controller.ts
init_dirname();
init_buffer();
init_process();
var _fetchCollectionTask, _host, _catalog, _getCatalogRepository, getCatalogRepository_fn;
var PlotToolbarController = class {
  constructor(host) {
    __privateAdd(this, _getCatalogRepository);
    __privateAdd(this, _fetchCollectionTask, void 0);
    __privateAdd(this, _host, void 0);
    __privateAdd(this, _catalog, void 0);
    __privateSet(this, _host, host);
    __privateSet(this, _catalog, __privateMethod(this, _getCatalogRepository, getCatalogRepository_fn).call(this));
    __privateSet(this, _fetchCollectionTask, new h(host, {
      task: async ([catalogVariable], { signal }) => {
        return __privateGet(this, _catalog).getCollectionCitation(
          `${catalogVariable.dataProductShortName}_${catalogVariable.dataProductVersion}`,
          {
            signal
          }
        );
      },
      args: () => [__privateGet(this, _host).catalogVariable]
    }));
  }
  get collectionCitation() {
    return __privateGet(this, _fetchCollectionTask).value;
  }
};
_fetchCollectionTask = new WeakMap();
_host = new WeakMap();
_catalog = new WeakMap();
_getCatalogRepository = new WeakSet();
getCatalogRepository_fn = function() {
  return new CmrCatalog();
};

export {
  PlotToolbarController
};
