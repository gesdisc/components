import {
  option_styles_default
} from "./chunk.6RX3YL2H.js";
import {
  TerraIcon
} from "./chunk.3K2V77UJ.js";
import {
  e
} from "./chunk.XMZR4BZJ.js";
import {
  watch
} from "./chunk.IGV6JSNT.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.XCIW4BFM.js";
import {
  e as e2,
  n,
  r
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

// src/components/option/option.component.ts
init_dirname();
init_buffer();
init_process();
var TerraOption = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.isInitialized = false;
    this.current = false;
    this.selected = false;
    this.hasHover = false;
    this.value = "";
    this.disabled = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "option");
    this.setAttribute("aria-selected", "false");
  }
  handleDefaultSlotChange() {
    if (this.isInitialized) {
      customElements.whenDefined("terra-select").then(() => {
        const controller = this.closest("terra-select");
        if (controller) {
          controller.handleDefaultSlotChange();
        }
      });
    } else {
      this.isInitialized = true;
    }
  }
  handleMouseEnter() {
    this.hasHover = true;
  }
  handleMouseLeave() {
    this.hasHover = false;
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleValueChange() {
    if (typeof this.value !== "string") {
      this.value = String(this.value);
    }
    if (this.value.includes(" ")) {
      console.error(
        `Option values cannot include a space. All spaces have been replaced with underscores.`,
        this
      );
      this.value = this.value.replace(/ /g, "_");
    }
  }
  /** Returns a plain text label based on the option's content. */
  getTextLabel() {
    const nodes = this.childNodes;
    let label = "";
    [...nodes].forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (!node.hasAttribute("slot")) {
          label += node.textContent;
        }
      }
      if (node.nodeType === Node.TEXT_NODE) {
        label += node.textContent;
      }
    });
    return label.trim();
  }
  render() {
    return x`
            <div
                part="base"
                class=${e({
      option: true,
      "option--current": this.current,
      "option--disabled": this.disabled,
      "option--selected": this.selected,
      "option--hover": this.hasHover
    })}
                @mouseenter=${this.handleMouseEnter}
                @mouseleave=${this.handleMouseLeave}
            >
                <terra-icon
                    part="checked-icon"
                    class="option__check"
                    name="outline-check"
                    library="heroicons"
                    aria-hidden="true"
                ></terra-icon>
                <slot part="prefix" name="prefix" class="option__prefix"></slot>
                <slot
                    part="label"
                    class="option__label"
                    @slotchange=${this.handleDefaultSlotChange}
                ></slot>
                <slot part="suffix" name="suffix" class="option__suffix"></slot>
            </div>
        `;
  }
};
TerraOption.styles = [component_styles_default, option_styles_default];
TerraOption.dependencies = { "terra-icon": TerraIcon };
__decorateClass([
  e2(".option__label")
], TerraOption.prototype, "defaultSlot", 2);
__decorateClass([
  r()
], TerraOption.prototype, "current", 2);
__decorateClass([
  r()
], TerraOption.prototype, "selected", 2);
__decorateClass([
  r()
], TerraOption.prototype, "hasHover", 2);
__decorateClass([
  n({ reflect: true })
], TerraOption.prototype, "value", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraOption.prototype, "disabled", 2);
__decorateClass([
  watch("disabled")
], TerraOption.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("selected")
], TerraOption.prototype, "handleSelectedChange", 1);
__decorateClass([
  watch("value")
], TerraOption.prototype, "handleValueChange", 1);

export {
  TerraOption
};
