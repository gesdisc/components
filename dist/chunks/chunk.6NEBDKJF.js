import {
  loader_default
} from "./chunk.XQ7X7Y6Z.js";
import {
  login_styles_default
} from "./chunk.PJUSGZQ3.js";
import {
  AuthController
} from "./chunk.YOKXGNSF.js";
import {
  icon_default
} from "./chunk.IVH6LMFP.js";
import {
  button_default
} from "./chunk.JAW65LDY.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.7CI746RD.js";
import {
  n
} from "./chunk.KACZXI5J.js";
import {
  x
} from "./chunk.LL3RMB25.js";
import {
  __decorateClass,
  __privateAdd,
  __privateGet,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/login/login.component.ts
init_dirname();
init_buffer();
init_process();
var _authController;
var TerraLogin = class extends TerraElement {
  constructor() {
    super(...arguments);
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
      return x`${template ? template.content.cloneNode(true) : x`<slot
                      name="logged-in"
                      .user=${__privateGet(this, _authController).state.user}
                  ></slot>`}`;
    }
    if (__privateGet(this, _authController).state.isLoading) {
      return x`<slot name="loading"></slot>`;
    }
    return x` <slot name="logged-out"></slot
            ><terra-button @click=${this.login}> ${this.buttonLabel}</terra-button>`;
  }
};
_authController = new WeakMap();
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
  TerraLogin
};
