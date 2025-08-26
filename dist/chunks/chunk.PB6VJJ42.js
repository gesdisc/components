import {
  TerraIcon
} from "./chunk.6PRBTCJU.js";
import {
  accordion_styles_default
} from "./chunk.I4WNPQOC.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.BFLNWCV5.js";
import {
  n
} from "./chunk.KACZXI5J.js";
import {
  x
} from "./chunk.LL3RMB25.js";
import {
  __decorateClass,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

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
