import {
  status_indicator_styles_default
} from "./chunk.HKL5CNLF.js";
import {
  e
} from "./chunk.XMZR4BZJ.js";
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
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/status-indicator/status-indicator.component.ts
init_dirname();
init_buffer();
init_process();
var TerraStatusIndicator = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.variant = "active";
    this.dark = false;
  }
  render() {
    return x`
            <div
                part="base"
                class="${e({
      "status-indicator": true,
      "status-indicator--active": this.variant === "active",
      "status-indicator--completed": this.variant === "completed",
      "status-indicator--testing": this.variant === "testing",
      "status-indicator--future": this.variant === "future"
    })}"
            >
                <span part="dot" class="status-indicator__dot"></span>
                <span part="label" class="status-indicator__label">
                    <slot></slot>
                </span>
            </div>
        `;
  }
};
TerraStatusIndicator.styles = [component_styles_default, status_indicator_styles_default];
__decorateClass([
  n({ reflect: true })
], TerraStatusIndicator.prototype, "variant", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraStatusIndicator.prototype, "dark", 2);

export {
  TerraStatusIndicator
};
