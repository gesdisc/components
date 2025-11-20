import {
  TerraIcon
} from "./chunk.3K2V77UJ.js";
import {
  accordion_styles_default
} from "./chunk.IG626K5S.js";
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

// src/components/accordion/accordion.component.ts
init_dirname();
init_buffer();
init_process();
var TerraAccordion = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.open = false;
    this.showArrow = true;
  }
  render() {
    return x`
            <details
                class="accordion"
                ?open=${this.open}
                @toggle=${this.handleToggle}
            >
                <summary class="accordion-summary">
                    <slot name="summary"> ${this.summary} </slot>

                    <div class="accordion-summary-right">
                        <slot name="summary-right"></slot>

                        ${this.showArrow && x`
                            <terra-icon
                                name="chevron-down-circle"
                                font-size="24px"
                            ></terra-icon>
                        `}
                    </div>
                </summary>

                <div class="accordion-content">
                    <slot></slot>
                </div>
            </details>
        `;
  }
  handleToggle(e) {
    const details = e.currentTarget;
    this.open = details.open;
    this.emit("terra-accordion-toggle", {
      detail: {
        open: this.open
      }
    });
  }
};
TerraAccordion.styles = [component_styles_default, accordion_styles_default];
TerraAccordion.dependencies = {
  "terra-icon": TerraIcon
};
__decorateClass([
  n()
], TerraAccordion.prototype, "summary", 2);
__decorateClass([
  n({ reflect: true, type: Boolean })
], TerraAccordion.prototype, "open", 2);
__decorateClass([
  n({ type: Boolean })
], TerraAccordion.prototype, "showArrow", 2);

export {
  TerraAccordion
};
