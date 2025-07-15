import {
  chip_styles_default
} from "./chunk.Y4WP4EBM.js";
import {
  e
} from "./chunk.YVSJQ4KD.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.6PUQ3DDO.js";
import {
  n
} from "./chunk.2FFSUM6T.js";
import {
  x
} from "./chunk.PQFHJHNO.js";
import {
  __decorateClass,
  __privateAdd,
  __privateGet
} from "./chunk.6JHIJHTB.js";

// src/components/chip/chip.component.ts
var _handleRemoveClick;
var TerraChip = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.size = "medium";
    __privateAdd(this, _handleRemoveClick, () => {
      this.emit("terra-remove");
      this.remove();
    });
  }
  render() {
    return x`
            <div
                class="${e({
      // Sizes
      "chip--small": this.size === "small",
      "chip--medium": this.size === "medium",
      "chip--large": this.size === "large"
    })}
                chip"
            >
                <div
                    class="${e({
      // Sizes
      "chip-content--small": this.size === "small",
      "chip-content--medium": this.size === "medium",
      "chip-content--large": this.size === "large"
    })}
                    chip-content"
                >
                    <slot part="content" class="tag__content"></slot>
                </div>
                <button class="chip-close" @click="${__privateGet(this, _handleRemoveClick)}">
                    <svg
                        class="${e({
      // Sizes
      "chip-svg--small": this.size === "small",
      "chip-svg--medium": this.size === "medium",
      "chip-svg--large": this.size === "large"
    })}
                        chip-svg"
                        focusable="false"
                        viewBox="0 0 500 500"
                        aria-hidden="true"
                    >
                        <path
                            d="M 227 56.036 H 265 V 227.037 H 436 V 265.036 H 265 V 436.036 H 227 V 265.036 H 56 V 227.037 H 227 Z"
                            style="paint-order: fill; fill-rule: nonzero; stroke-width: 0px; transform-origin: 246px 246.036px;"
                            transform="matrix(0.707107007504, 0.707107007504, -0.707107007504, 0.707107007504, -9.98393e-7, -0.000026419743)"
                        ></path>
                    </svg>
                </button>
            </div>
        `;
  }
};
_handleRemoveClick = new WeakMap();
TerraChip.styles = [component_styles_default, chip_styles_default];
__decorateClass([
  n({ reflect: true })
], TerraChip.prototype, "size", 2);

export {
  TerraChip
};
