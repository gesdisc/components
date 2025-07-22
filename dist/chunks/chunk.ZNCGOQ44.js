import {
  GiovanniVariableCatalog
} from "./chunk.WDABPW4H.js";
import {
  h
} from "./chunk.UGTZ22DI.js";
import {
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet
} from "./chunk.6JHIJHTB.js";

// src/components/browse-variables/browse-variables.controller.ts
var _host, _catalog, _getCatalogRepository, getCatalogRepository_fn;
var BrowseVariablesController = class {
  constructor(host) {
    __privateAdd(this, _getCatalogRepository);
    __privateAdd(this, _host, void 0);
    __privateAdd(this, _catalog, void 0);
    __privateSet(this, _host, host);
    __privateSet(this, _catalog, __privateMethod(this, _getCatalogRepository, getCatalogRepository_fn).call(this));
    this.task = new h(host, {
      task: async ([searchQuery, selectedFacets], { signal }) => {
        const searchResponse = await __privateGet(this, _catalog).searchVariablesAndFacets(
          searchQuery,
          selectedFacets,
          {
            signal
          }
        );
        return searchResponse;
      },
      args: () => [__privateGet(this, _host).searchQuery, __privateGet(this, _host).selectedFacets]
    });
  }
  get facetsByCategory() {
    var _a;
    return (_a = this.task.value) == null ? void 0 : _a.facetsByCategory;
  }
  get variables() {
    var _a, _b;
    return (_b = (_a = this.task.value) == null ? void 0 : _a.variables) != null ? _b : [];
  }
  get total() {
    var _a, _b;
    return (_b = (_a = this.task.value) == null ? void 0 : _a.total) != null ? _b : 0;
  }
  render(renderFunctions) {
    return this.task.render(renderFunctions);
  }
};
_host = new WeakMap();
_catalog = new WeakMap();
_getCatalogRepository = new WeakSet();
getCatalogRepository_fn = function() {
  if (__privateGet(this, _host).catalog === "giovanni") {
    return new GiovanniVariableCatalog();
  }
  throw new Error(`Invalid catalog: ${__privateGet(this, _host).catalog}`);
};

export {
  BrowseVariablesController
};
