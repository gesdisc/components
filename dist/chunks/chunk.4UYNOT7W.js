import {
  cherryPickDocInfo
} from "./chunk.YCRGAL67.js";
import {
  h,
  s
} from "./chunk.UGTZ22DI.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet,
  __spreadValues
} from "./chunk.6JHIJHTB.js";

// src/components/variable-combobox/variable-combobox.controller.ts
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
          "https://lb.gesdisc.eosdis.nasa.gov/windmill/api/r/website/data-rods-variables",
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
