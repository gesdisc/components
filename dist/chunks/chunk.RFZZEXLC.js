import {
  GiovanniVariableCatalog
} from "./chunk.IIXAYWB6.js";
import {
  h,
  s
} from "./chunk.UGTZ22DI.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet
} from "./chunk.6JHIJHTB.js";

// src/components/variable-keyword-search/variable-keyword-search.controller.ts
var _apiTask;
var FetchController = class {
  constructor(host) {
    __privateAdd(this, _apiTask, void 0);
    const variableCatalog = new GiovanniVariableCatalog();
    __privateSet(this, _apiTask, new h(host, {
      task: async () => variableCatalog.getSearchKeywords(),
      args: () => []
    }));
  }
  get taskComplete() {
    return __privateGet(this, _apiTask).taskComplete;
  }
  get value() {
    return __privateGet(this, _apiTask).value;
  }
  get taskStatus() {
    const readableStatus = Object.entries(s).reduce((accumulator, [key, value]) => {
      accumulator[value] = key;
      return accumulator;
    }, {});
    return readableStatus[__privateGet(this, _apiTask).status];
  }
  render(renderFunctions) {
    return __privateGet(this, _apiTask).render(renderFunctions);
  }
};
_apiTask = new WeakMap();

export {
  FetchController
};
