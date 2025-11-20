import {
  loader_default
} from "./chunk.63LSFF57.js";
import {
  login_styles_default
} from "./chunk.U7H34RG4.js";
import {
  AuthController
} from "./chunk.7D6PZR3Q.js";
import {
  icon_default
} from "./chunk.RG42OJJ4.js";
import {
  button_default
} from "./chunk.ZAVPHYZ2.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.XCIW4BFM.js";
import {
  n
} from "./chunk.ZQH2A4BE.js";
import {
  x
} from "./chunk.JQ2FCDGS.js";
import {
  __decorateClass,
  __privateAdd,
  __privateGet,
  __privateMethod,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/login/login.component.ts
init_dirname();
init_buffer();
init_process();
var _authController, _applyUserToMessage, applyUserToMessage_fn;
var TerraLogin = class extends TerraElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _applyUserToMessage);
    this.buttonLabel = "Earthdata Login";
    __privateAdd(this, _authController, new AuthController(this));
  }
  login() {
    __privateGet(this, _authController).login();
  }
  logout() {
    __privateGet(this, _authController).logout();
  }
  render() {
    var _a;
    if ((_a = __privateGet(this, _authController).state.user) == null ? void 0 : _a.uid) {
      const template = this.querySelector(
        'template[slot="logged-in"]'
      );
      return x`${template ? template.content.cloneNode(true) : x`<slot name="logged-in" .user=${__privateGet(this, _authController).state.user}
                      >${__privateMethod(this, _applyUserToMessage, applyUserToMessage_fn).call(this, this.loggedInMessage)}</slot
                  >`}`;
    }
    if (__privateGet(this, _authController).state.isLoading) {
      return x`<slot name="loading">${this.loadingMessage}</slot>`;
    }
    return x` <slot name="logged-out">${this.loggedOutMessage}</slot
            ><terra-button @click=${this.login}> ${this.buttonLabel}</terra-button>`;
  }
};
_authController = new WeakMap();
_applyUserToMessage = new WeakSet();
applyUserToMessage_fn = function(message) {
  var _a, _b, _c, _d, _e, _f;
  return (message != null ? message : "").replace("{username}", (_b = (_a = __privateGet(this, _authController).state.user) == null ? void 0 : _a.uid) != null ? _b : "").replace(
    "{first_name}",
    (_d = (_c = __privateGet(this, _authController).state.user) == null ? void 0 : _c.first_name) != null ? _d : ""
  ).replace("{last_name}", (_f = (_e = __privateGet(this, _authController).state.user) == null ? void 0 : _e.last_name) != null ? _f : "");
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
__decorateClass([
  n({ attribute: "logged-in-message" })
], TerraLogin.prototype, "loggedInMessage", 2);
__decorateClass([
  n({ attribute: "logged-out-message" })
], TerraLogin.prototype, "loggedOutMessage", 2);
__decorateClass([
  n({ attribute: "loading-message" })
], TerraLogin.prototype, "loadingMessage", 2);

export {
  TerraLogin
};
