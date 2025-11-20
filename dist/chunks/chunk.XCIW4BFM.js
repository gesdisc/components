import {
  n,
  r
} from "./chunk.ZQH2A4BE.js";
import {
  getEnvironment
} from "./chunk.TXLDK6CN.js";
import {
  purgeGraphQLCache
} from "./chunk.JW7QSDAF.js";
import {
  i as i2
} from "./chunk.JQ2FCDGS.js";
import {
  i
} from "./chunk.C7DL2MIN.js";
import {
  __decorateClass,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __spreadValues,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/styles/component.styles.ts
init_dirname();
init_buffer();
init_process();
var component_styles_default = i`
    :host {
        box-sizing: border-box;
        display: none;
    }

    :host *,
    :host *::before,
    :host *::after {
        box-sizing: inherit;
    }

    :host {
        background-color: var(--background-color);
        color: var(--color);
    }

    [hidden] {
        display: none !important;
    }

    /* Horizon Design System Font Classes */

    /* Display Fonts */

    .display-120 {
        font-family: var(--terra-font-family--inter);
        font-size: 7.5rem; /* 120px */
        font-weight: var(--terra-font-weight-bold);
    }

    .display-100 {
        font-family: var(--terra-font-family--inter);
        font-size: 6.25rem; /* 100px */
        font-weight: var(--terra-font-weight-bold);
    }

    .display-80 {
        font-family: var(--terra-font-family--inter);
        font-size: 5rem; /* 80px */
        font-weight: var(--terra-font-weight-bold);
    }

    .display-72 {
        font-family: var(--terra-font-family--inter);
        font-size: 4.5rem; /* 72px */
        font-weight: var(--terra-font-weight-bold);
    }

    .display-60 {
        font-family: var(--terra-font-family--inter);
        font-size: 3.75rem; /* 60px */
        font-weight: var(--terra-font-weight-bold);
    }

    .display-48 {
        font-family: var(--terra-font-family--inter);
        font-size: 3rem; /* 48px */
        font-weight: var(--terra-font-weight-bold);
    }

    .display-41 {
        font-family: var(--terra-font-family--inter);
        font-size: 2.563rem; /* 41px */
        font-weight: var(--terra-font-weight-bold);
    }

    /* Heading Fonts */

    .heading-36-bold {
        font-family: var(--terra-font-family--inter);
        font-size: 2.25rem; /* 36px */
        font-weight: var(--terra-font-weight-bold);
    }

    .heading-36-light {
        font-family: var(--terra-font-family--inter);
        font-size: 2.25rem; /* 36px */
        font-weight: var(--terra-font-weight-light);
    }

    .heading-29-bold {
        font-family: var(--terra-font-family--inter);
        font-size: 1.813rem; /* 29px */
        font-weight: var(--terra-font-weight-bold);
    }

    .heading-29-light {
        font-family: var(--terra-font-family--inter);
        font-size: 1.813rem; /* 29px */
        font-weight: var(--terra-font-weight-light);
    }

    .heading-22-bold {
        font-family: var(--terra-font-family--inter);
        font-size: 1.375rem; /* 22px */
        font-weight: var(--terra-font-weight-bold);
    }

    .heading-22-light {
        font-family: var(--terra-font-family--inter);
        font-size: 1.375rem; /*22px */
        font-weight: var(--terra-font-weight-light);
    }

    .heading-18-bold {
        font-family: var(--terra-font-family--inter);
        font-size: 1.125rem; /* 18px */
        font-weight: var(--terra-font-weight-bold);
    }

    .heading-18-light {
        font-family: var(--terra-font-family--inter);
        font-size: 1.125rem; /* 18px */
        font-weight: var(--terra-font-weight-light);
    }

    .heading-16-bold {
        font-family: var(--terra-font-family--inter);
        font-size: 1rem; /* 16px */
        font-weight: var(--terra-font-weight-bold);
    }

    .heading-16-light {
        font-family: var(--terra-font-family--inter);
        font-size: 1rem; /* 16px */
        font-weight: var(--terra-font-weight-light);
    }

    .heading-14-bold {
        font-family: var(--terra-font-family--inter);
        font-size: 0.875rem; /* 14px */
        font-weight: var(--terra-font-weight-bold);
    }

    .heading-14-light {
        font-family: var(--terra-font-family--inter);
        font-size: 0.875rem; /* 14px */
        font-weight: var(--terra-font-weight-light);
    }

    .heading-12-bold {
        font-family: var(--terra-font-family--inter);
        font-size: 0.75rem; /* 12px */
        font-weight: var(--terra-font-weight-bold);
    }

    .heading-12-light {
        font-family: var(--terra-font-family--inter);
        font-size: 0.75rem; /* 12px */
        font-weight: var(--terra-font-weight-light);
    }

    .heading-11-semi-bold {
        font-family: var(--terra-font-family--inter);
        font-size: 0.688rem; /* 11px */
        font-weight: var(--terra-font-weight-semi-bold);
    }

    /* Body Fonts */

    .body-18 {
        font-family: var(--terra-font-family--public-sans);
        font-size: 1.125rem; /* 18px */
        font-weight: var(--terra-font-weight-normal);
    }

    .body-16 {
        font-family: var(--terra-font-family--public-sans);
        font-size: 1rem; /* 16px */
        font-weight: var(--terra-font-weight-normal);
    }

    .body-14 {
        font-family: var(--terra-font-family--public-sans);
        font-size: 0.875rem; /* 14px */
        font-weight: var(--terra-font-weight-normal);
    }

    .body-12 {
        font-family: var(--terra-font-family--public-sans);
        font-size: 0.75rem; /* 12px */
        font-weight: var(--terra-font-weight-normal);
    }

    .body-11 {
        font-family: var(--terra-font-family--public-sans);
        font-size: 0.688rem; /* 11px */
        font-weight: var(--terra-font-weight-normal);
    }

    /* Number & Label Fonts */

    .number-240 {
        font-family: var(--terra-font-family--dm-mono);
        font-size: 15rem; /* 240px */
        font-weight: var(--terra-font-weight-light);
    }

    .number-120 {
        font-family: var(--terra-font-family--dm-mono);
        font-size: 7.5rem; /* 120px */
        font-weight: var(--terra-font-weight-light);
    }

    .number-48 {
        font-family: var(--terra-font-family--dm-mono);
        font-size: 3rem; /* 48px */
        font-weight: var(--terra-font-weight-light);
    }

    .number-36 {
        font-family: var(--terra-font-family--dm-mono);
        font-size: 2.25rem; /* 36px */
        font-weight: var(--terra-font-weight-light);
    }

    .number-14 {
        font-family: var(--terra-font-family--dm-mono);
        font-size: 0.875rem; /* 14px */
        font-weight: 500;
    }

    .number-11 {
        font-family: var(--terra-font-family--dm-mono);
        font-size: 0.688rem; /* 11px */
        font-weight: 500;
    }

    .label-14 {
        font-family: var(--terra-font-family--dm-mono);
        font-size: 0.875rem; /* 14px */
        font-weight: var(--terra-font-weight-light);
        text-transform: uppercase;
    }

    .label-12 {
        font-family: var(--terra-font-family--dm-mono);
        font-size: 0.75rem; /* 12px */
        font-weight: var(--terra-font-weight-light);
        text-transform: uppercase;
    }

    .label-11 {
        font-family: var(--terra-font-family--dm-mono);
        font-size: 0.688rem; /* 11px */
        font-weight: var(--terra-font-weight-light);
        text-transform: uppercase;
    }

    /* Forms */

    /* Input Field */

    select,
    .input {
        font-family: var(--terra-input-font-family);
        font-size: var(--terra-input-font-size);
        color: var(--terra-input-color);
        font-weight: var(--terra-input-font-weight);
        line-height: var(--terra-input-line-height);
        background-color: var(--terra-input-background-color);
        border: var(--terra-input-border-width) solid var(--terra-input-border-color);
        border-radius: var(--terra-input-border-radius);
    }

    label,
    .input-label {
        font-family: var(--terra-input-label-font-family);
        font-size: var(--terra-input-label-font-size);
        color: var(--terra-input-label-color);
        font-weight: var(--terra-font-weight-semibold);
        line-height: var(--terra-input-label-line-height);
    }

    /* Elements */

    a {
        text-decoration: underline;
        text-decoration-color: #585858;
        text-decoration-style: dashed;
        text-decoration-thickness: 0.05em;
        text-underline-offset: 0.25rem;
        color: var(--terra-color-carbon-60);
    }

    /* UTILITY CSS */
    .sr-only {
        block-size: 1px;
        border-width: 0;
        clip: rect(0, 0, 0, 0);
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }
`;

// src/internal/terra-element.ts
init_dirname();
init_buffer();
init_process();

// src/auth/auth.service.ts
init_dirname();
init_buffer();
init_process();
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
    const url = `${AUTH_URL}/callback?code=${code}${getEnvironment() === "uat" /* UAT */ ? "&environment=uat" : ""}`;
    const response = await fetch(url);
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
      const environment = getEnvironment();
      const url = `${AUTH_URL}/user${environment === "uat" /* UAT */ ? "?environment=uat" : ""}`;
      const response = await fetch(url, {
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
    window.location.href = `${AUTH_URL}/login?redirect_uri=${window.location.href}${getEnvironment() === "uat" /* UAT */ ? "&environment=uat" : ""}`;
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

// src/internal/terra-element.ts
var _io, _observeVisibility, observeVisibility_fn, _isComponentVisible, isComponentVisible_fn;
var TerraElement = class extends i2 {
  constructor() {
    super();
    __privateAdd(this, _observeVisibility);
    /**
     * Check if the component is visible on the page
     * @returns true if the component is visible, false otherwise
     */
    __privateAdd(this, _isComponentVisible);
    this.environment = getEnvironment();
    this.isVisible = false;
    __privateAdd(this, _io, void 0);
    Object.entries(
      this.constructor.dependencies
    ).forEach(([name, component]) => {
      ;
      this.constructor.define(name, component);
    });
    document.addEventListener(
      "terra-environment-change",
      (event) => {
        purgeGraphQLCache();
        if (localStorage.getItem("terra-environment") !== event.detail.environment) {
          authService.logout();
        }
        this.environment = event.detail.environment;
      }
    );
  }
  connectedCallback() {
    super.connectedCallback();
    __privateMethod(this, _observeVisibility, observeVisibility_fn).call(this);
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback();
    (_a = __privateGet(this, _io)) == null ? void 0 : _a.disconnect();
    __privateSet(this, _io, void 0);
  }
  /**
   * Called when the component is visible on the page
   * Example: if the component is in a dialog, this will be triggered the first time the dialog opens
   */
  firstVisible() {
  }
  emit(name, options) {
    const event = new CustomEvent(name, __spreadValues({
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: {}
    }, options));
    this.dispatchEvent(event);
    return event;
  }
  /* eslint-enable */
  static define(name, elementConstructor = this, options = {}) {
    const currentlyRegisteredConstructor = customElements.get(name);
    if (!currentlyRegisteredConstructor) {
      customElements.define(
        name,
        class extends elementConstructor {
        },
        options
      );
      return;
    }
    let newVersion = " (unknown version)";
    let existingVersion = newVersion;
    if ("version" in elementConstructor && elementConstructor.version) {
      newVersion = " v" + elementConstructor.version;
    }
    if ("version" in currentlyRegisteredConstructor && currentlyRegisteredConstructor.version) {
      existingVersion = " v" + currentlyRegisteredConstructor.version;
    }
    if (newVersion && existingVersion && newVersion === existingVersion) {
      return;
    }
    console.warn(
      `Attempted to register <${name}>${newVersion}, but <${name}>${existingVersion} has already been registered.`
    );
  }
};
_io = new WeakMap();
_observeVisibility = new WeakSet();
observeVisibility_fn = function() {
  if (__privateGet(this, _io)) {
    return;
  }
  this.isVisible = __privateMethod(this, _isComponentVisible, isComponentVisible_fn).call(this);
  if (this.isVisible) {
    this.firstVisible();
    return;
  }
  __privateSet(this, _io, new IntersectionObserver(
    (entries) => {
      var _a;
      if (entries.some((e) => e.isIntersecting)) {
        (_a = __privateGet(this, _io)) == null ? void 0 : _a.disconnect();
        __privateSet(this, _io, void 0);
        this.isVisible = true;
        setTimeout(() => this.firstVisible(), 500);
      }
    },
    { root: null, threshold: 0 }
  ));
  __privateGet(this, _io).observe(this);
};
_isComponentVisible = new WeakSet();
isComponentVisible_fn = function() {
  if (!this.isConnected) {
    return false;
  }
  const rect = this.getBoundingClientRect();
  const style = getComputedStyle(this);
  return rect.width > 0 && rect.height > 0 && style.display !== "none" && style.visibility !== "hidden";
};
/* eslint-disable */
// @ts-expect-error This is auto-injected at build time.
TerraElement.version = "0.0.111";
TerraElement.dependencies = {};
__decorateClass([
  n()
], TerraElement.prototype, "dir", 2);
__decorateClass([
  n()
], TerraElement.prototype, "lang", 2);
__decorateClass([
  n()
], TerraElement.prototype, "environment", 2);
__decorateClass([
  n()
], TerraElement.prototype, "bearerToken", 2);
__decorateClass([
  r()
], TerraElement.prototype, "isVisible", 2);

export {
  component_styles_default,
  authService,
  TerraElement
};
