import {
  getRandomIntInclusive
} from "./chunk.FTPWWTXZ.js";
import {
  skeleton_styles_default
} from "./chunk.ILZJZWX4.js";
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

// src/components/skeleton/skeleton.component.ts
init_dirname();
init_buffer();
init_process();
var TerraSkeleton = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.rows = 1;
    this.effect = "pulse";
    this.variableWidths = true;
  }
  render() {
    return x`
            ${new Array(parseInt(this.rows.toString())).fill(0).map(
      () => x` <div
                        part="base"
                        class=${`skeleton ${this.effect === "pulse" ? "skeleton--pulse" : ""} ${this.effect === "sheen" ? "skeleton--sheen" : ""}`}
                        style=${this.variableWidths ? `width: ${getRandomIntInclusive(60, 100)}%` : ""}
                    >
                        <div part="indicator" class="skeleton__indicator"></div>
                    </div>`
    )}
        `;
  }
};
TerraSkeleton.styles = [component_styles_default, skeleton_styles_default];
__decorateClass([
  n()
], TerraSkeleton.prototype, "rows", 2);
__decorateClass([
  n()
], TerraSkeleton.prototype, "effect", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraSkeleton.prototype, "variableWidths", 2);

export {
  TerraSkeleton
};
