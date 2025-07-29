import {
  TerraIcon
} from "./chunk.3AVJ4SFR.js";
import {
  accordion_styles_default
} from "./chunk.CPHER7LT.js";
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
  __decorateClass
} from "./chunk.6JHIJHTB.js";

// src/components/accordion/accordion.component.ts
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
