import {
  GiovanniVariableCatalog
} from "./chunk.NDNXLJCK.js";
import {
  h
} from "./chunk.3AZLGGEX.js";
import {
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/browse-variables/browse-variables.controller.ts
init_dirname();
init_buffer();
init_process();
var _host, _catalog, _selectVariables, selectVariables_fn, _getCatalogRepository, getCatalogRepository_fn;
var BrowseVariablesController = class {
  // TODO: fix this type, it should be VariableCatalogInterface
  constructor(host) {
    /**
     * Selects variables from the search response that are in the selectedVariableEntryIds list
     */
    __privateAdd(this, _selectVariables);
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
        __privateMethod(this, _selectVariables, selectVariables_fn).call(this, searchResponse);
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
_selectVariables = new WeakSet();
selectVariables_fn = async function(searchResponse) {
  if (!__privateGet(this, _host).selectedVariableEntryIds || __privateGet(this, _host).selectedVariables.length > 0) {
    return;
  }
  const variableEntryIds = __privateGet(this, _host).selectedVariableEntryIds.split(",");
  const variables = searchResponse.variables.filter((variable) => {
    return variableEntryIds.includes(variable.dataFieldId) || variableEntryIds.includes(
      `${variable.dataProductShortName}_${variable.dataProductVersion}_${variable.dataFieldAccessName}`
    );
  });
  const missingVariableIds = variableEntryIds.filter(
    (id) => !variables.some((variable) => variable.dataFieldId === id)
  );
  const missingVariables = await Promise.all(
    missingVariableIds.map((id) => __privateGet(this, _catalog).getVariable(id))
  );
  __privateGet(this, _host).selectedVariables = [...variables, ...missingVariables];
};
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
