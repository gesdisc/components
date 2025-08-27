import {
  h
} from "./chunk.3AZLGGEX.js";
import {
  authService
} from "./chunk.7CI746RD.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/auth/auth.controller.ts
init_dirname();
init_buffer();
init_process();
var _host;
var AuthController = class {
  constructor(host) {
    __privateAdd(this, _host, void 0);
    __privateSet(this, _host, host);
    this.task = new h(host, {
      task: async ([]) => {
        this.unsubscribe = authService.subscribe(
          (state) => {
            if (state.token) {
              __privateGet(this, _host).bearerToken = state.token;
            }
            __privateGet(this, _host).emit("terra-login", {
              detail: state
            });
            __privateGet(this, _host).requestUpdate();
          },
          // @ts-expect-error - we can't guarantee the host has a bearerToken property
          __privateGet(this, _host).bearerToken
        );
        __privateGet(this, _host).emit("terra-login", {
          detail: authService.getState()
        });
        return authService.getState();
      },
      args: () => [],
      autoRun: true
    });
  }
  get state() {
    return authService.getState();
  }
  login() {
    authService.login();
  }
  logout() {
    authService.logout();
  }
  render(renderFunctions) {
    return this.task.render(renderFunctions);
  }
  disconnectedCallback() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
};
_host = new WeakMap();

export {
  AuthController
};
