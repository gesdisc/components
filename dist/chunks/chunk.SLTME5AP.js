import {
  HarmonyDataService
} from "./chunk.2HDTG4T3.js";
import {
  h
} from "./chunk.UGTZ22DI.js";
import {
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet
} from "./chunk.6JHIJHTB.js";

// src/components/data-subsetter-history/data-subsetter-history.controller.ts
var EXPANDED_JOBS_POLL_MILLIS = 3e3;
var COLLAPSED_JOBS_POLL_MILLIS = 1e4;
var _host, _dataService, _windowIsVisible, _jobTimeout, _getDataService, getDataService_fn, _handleVisibilityChange, handleVisibilityChange_fn, _poll, poll_fn;
var DataSubsetterHistoryController = class {
  constructor(host) {
    __privateAdd(this, _getDataService);
    __privateAdd(this, _handleVisibilityChange);
    __privateAdd(this, _poll);
    __privateAdd(this, _host, void 0);
    __privateAdd(this, _dataService, void 0);
    __privateAdd(this, _windowIsVisible, true);
    __privateAdd(this, _jobTimeout, void 0);
    __privateSet(this, _host, host);
    __privateSet(this, _dataService, __privateMethod(this, _getDataService, getDataService_fn).call(this));
    this.task = new h(host, {
      task: async ([], { signal }) => {
        this.jobs = await __privateGet(this, _dataService).getSubsetJobs({
          bearerToken: __privateGet(this, _host).bearerToken,
          signal
        });
        return this.jobs;
      },
      args: () => [],
      autoRun: false
    });
  }
  hostConnected() {
    document.addEventListener(
      "visibilitychange",
      __privateMethod(this, _handleVisibilityChange, handleVisibilityChange_fn).bind(this)
    );
    __privateMethod(this, _poll, poll_fn).call(this);
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
  __privateMethod(this, _poll, poll_fn).call(this);
};
_poll = new WeakSet();
poll_fn = async function() {
  clearTimeout(__privateGet(this, _jobTimeout));
  if (!__privateGet(this, _windowIsVisible)) {
    return;
  }
  await this.task.run();
  __privateSet(this, _jobTimeout, setTimeout(
    () => __privateMethod(this, _poll, poll_fn).call(this),
    !__privateGet(this, _host).collapsed ? EXPANDED_JOBS_POLL_MILLIS : COLLAPSED_JOBS_POLL_MILLIS
  ));
};

export {
  DataSubsetterHistoryController
};
