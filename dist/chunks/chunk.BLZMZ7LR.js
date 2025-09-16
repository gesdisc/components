import {
  cherryPickDocInfo
} from "./chunk.MUYS3VLW.js";
import {
  h,
  s
} from "./chunk.3AZLGGEX.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet,
  __spreadValues,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/variable-combobox/variable-combobox.controller.ts
init_dirname();
init_buffer();
init_process();
var apiError = new Error(
  "Failed to fetch the data required to make a list of searchable items."
);
var _apiTask, _bearerToken;
var FetchController = class {
  constructor(host, bearerToken) {
    __privateAdd(this, _apiTask, void 0);
    __privateAdd(this, _bearerToken, null);
    __privateSet(this, _bearerToken, bearerToken);
    __privateSet(this, _apiTask, new h(host, {
      task: async () => {
        const response = await fetch(
          "https://4nad4npjmf.execute-api.us-east-1.amazonaws.com/default/data-rods",
          {
            headers: __spreadValues({
              Accept: "application/json"
            }, __privateGet(this, _bearerToken) ? { Authorization: `Bearer: ${__privateGet(this, _bearerToken)}` } : {})
          }
        );
        if (!response.ok) {
          throw apiError;
        }
        const {
          response: { docs }
        } = await response.json();
        return cherryPickDocInfo(docs);
      },
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
_bearerToken = new WeakMap();

export {
  FetchController
};
