import {
  loader_default
} from "./chunk.4JHRCMYB.js";
import {
  login_styles_default
} from "./chunk.74Y2IRDI.js";
import {
  icon_default
} from "./chunk.Q6UYTNS4.js";
import {
  h
} from "./chunk.UGTZ22DI.js";
import {
  button_default
} from "./chunk.CP7RNEMV.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.IH64XZC2.js";
import {
  n
} from "./chunk.2FFSUM6T.js";
import {
  x
} from "./chunk.PQFHJHNO.js";
import {
  __decorateClass,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __spreadValues
} from "./chunk.6JHIJHTB.js";

// src/auth/auth.service.ts
var TOKEN_KEY = "terra-token";
var AUTH_URL = "https://zed7uleqxl.execute-api.us-east-1.amazonaws.com/default/terra-earthdata-oauth";
var AuthService = class {
  constructor() {
    this.authState = {
      user: null,
      token: null,
      isLoading: false,
      error: null
    };
    this.listeners = /* @__PURE__ */ new Set();
    this.currentTask = null;
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    if (code) {
      this.setState({ isLoading: true });
      this.exchangeCodeForToken(code);
    } else {
      this.authenticate();
    }
  }
  async exchangeCodeForToken(code) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.delete("code");
    urlParams.delete("state");
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}${urlParams.size > 0 ? "?" + urlParams.toString() : ""}`
    );
    const response = await fetch(`${AUTH_URL}/callback?code=${code}`);
    const data = await response.json();
    localStorage.setItem(TOKEN_KEY, data.token);
    this.authenticate();
  }
  subscribe(listener, bearerToken) {
    this.listeners.add(listener);
    if (bearerToken) {
      this.setState({ token: bearerToken });
      this.authenticate().then(() => {
        listener(this.authState);
      });
    } else {
      listener(this.authState);
    }
    return () => {
      this.listeners.delete(listener);
    };
  }
  notifyListeners() {
    this.listeners.forEach((listener) => listener(this.authState));
  }
  setState(updates) {
    this.authState = __spreadValues(__spreadValues({}, this.authState), updates);
    this.notifyListeners();
  }
  async authenticate() {
    if (this.currentTask) {
      return this.currentTask;
    }
    this.setState({ isLoading: true, error: null });
    this.currentTask = this.getUserInfo();
    try {
      await this.currentTask;
    } finally {
      this.currentTask = null;
    }
    return this.currentTask;
  }
  async getUserInfo() {
    var _a, _b;
    if (this.authState.user) {
      return this.authState.user;
    }
    const token = (_a = this.authState.token) != null ? _a : localStorage.getItem(TOKEN_KEY);
    if (!token) {
      this.setState(this.getLoggedOutState());
      return null;
    }
    this.setState({
      token,
      isLoading: true,
      error: null
    });
    try {
      const response = await fetch(`${AUTH_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error((_b = response.statusText) != null ? _b : "Failed to get user info");
      }
      const userResponse = await response.json();
      this.setState({
        user: userResponse.user,
        token,
        isLoading: false,
        error: null
      });
      return this.authState.user;
    } catch (error) {
      console.error("Failed to get user info", error);
      localStorage.removeItem(TOKEN_KEY);
      this.setState({
        user: null,
        token,
        isLoading: false,
        error: error instanceof Error ? error.message : "Failed to get user info"
      });
      return null;
    }
  }
  getLoggedOutState() {
    return {
      user: null,
      token: null,
      isLoading: false,
      error: null
    };
  }
  login() {
    window.location.href = `${AUTH_URL}/login?redirect_uri=${window.location.href}`;
  }
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    this.setState({
      user: null,
      token: null,
      isLoading: false,
      error: null
    });
  }
  getState() {
    return this.authState;
  }
};
var authService = new AuthService();

// src/auth/auth.controller.ts
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
            __privateGet(this, _host).requestUpdate();
          },
          // @ts-expect-error - we can't guarantee the host has a bearerToken property
          __privateGet(this, _host).bearerToken
        );
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

// src/components/login/login.component.ts
var _authController, _handleLogin, handleLogin_fn;
var TerraLogin = class extends TerraElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _handleLogin);
    this.buttonLabel = "Earthdata Login";
    __privateAdd(this, _authController, new AuthController(this));
  }
  render() {
    var _a;
    if ((_a = __privateGet(this, _authController).state.user) == null ? void 0 : _a.uid) {
      return x`<slot
                name="logged-in"
                .user=${__privateGet(this, _authController).state.user}
            ></slot>`;
    }
    if (__privateGet(this, _authController).state.isLoading) {
      return x`<slot name="loading"></slot>`;
    }
    return x` <slot name="logged-out"></slot
            ><terra-button @click=${__privateMethod(this, _handleLogin, handleLogin_fn)}>
                ${this.buttonLabel}</terra-button
            >`;
  }
};
_authController = new WeakMap();
_handleLogin = new WeakSet();
handleLogin_fn = function() {
  __privateGet(this, _authController).login();
};
TerraLogin.dependencies = {
  "terra-button": button_default,
  "terra-icon": icon_default,
  "terra-loader": loader_default
};
TerraLogin.styles = [component_styles_default, login_styles_default];
__decorateClass([
  n({ attribute: "button-label" })
], TerraLogin.prototype, "buttonLabel", 2);

export {
  AuthController,
  TerraLogin
};
