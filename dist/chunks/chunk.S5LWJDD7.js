import {
  HarmonyDataService
} from "./chunk.XPUSLKRS.js";
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

// src/components/data-subsetter-history/data-subsetter-history.controller.ts
init_dirname();
init_buffer();
init_process();
var JOBS_POLL_MILLIS = 3e3;
var _host, _dataService, _windowIsVisible, _jobTimeout, _getDataService, getDataService_fn, _handleVisibilityChange, handleVisibilityChange_fn;
var DataSubsetterHistoryController = class {
  constructor(host) {
    __privateAdd(this, _getDataService);
    __privateAdd(this, _handleVisibilityChange);
    __privateAdd(this, _host, void 0);
    __privateAdd(this, _dataService, void 0);
    __privateAdd(this, _windowIsVisible, true);
    __privateAdd(this, _jobTimeout, void 0);
    __privateSet(this, _host, host);
    __privateSet(this, _dataService, __privateMethod(this, _getDataService, getDataService_fn).call(this));
    this.task = new h(host, {
      task: async ([], { signal }) => {
        clearTimeout(__privateGet(this, _jobTimeout));
        const shouldFetch = __privateGet(this, _windowIsVisible) && (!__privateGet(this, _host).collapsed || !this.jobs);
        if (shouldFetch && __privateGet(this, _host).bearerToken) {
          this.jobs = await __privateGet(this, _dataService).getSubsetJobs({
            bearerToken: __privateGet(this, _host).bearerToken,
            signal,
            environment: __privateGet(this, _host).environment
          });
        }
        __privateSet(this, _jobTimeout, setTimeout(() => this.task.run(), JOBS_POLL_MILLIS));
        return this.jobs;
      },
      args: () => [__privateGet(this, _host).bearerToken]
    });
  }
  hostConnected() {
    document.addEventListener(
      "visibilitychange",
      __privateMethod(this, _handleVisibilityChange, handleVisibilityChange_fn).bind(this)
    );
  }
  hostDisconnected() {
    document.removeEventListener(
      "visibilitychange",
      __privateMethod(this, _handleVisibilityChange, handleVisibilityChange_fn).bind(this)
    );
  }
  render(renderFunctions) {
    return this.task.render(renderFunctions);
  }
};
_host = new WeakMap();
_dataService = new WeakMap();
_windowIsVisible = new WeakMap();
_jobTimeout = new WeakMap();
_getDataService = new WeakSet();
getDataService_fn = function() {
  return new HarmonyDataService();
};
_handleVisibilityChange = new WeakSet();
handleVisibilityChange_fn = function() {
  __privateSet(this, _windowIsVisible, document.visibilityState === "visible");
  this.task.run();
};

export {
  DataSubsetterHistoryController
};
