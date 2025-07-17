import {
  getRandomIntInclusive
} from "./chunk.7PAVW6KC.js";
import {
  skeleton_default
} from "./chunk.MQSKD234.js";
import {
  skeleton_styles_default
} from "./chunk.FPSSRS2U.js";
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
  __decorateClass
} from "./chunk.6JHIJHTB.js";

// src/components/skeleton/skeleton.component.ts
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
      () => x`<sl-skeleton
                            effect=${this.effect}
                            style=${this.variableWidths ? `width: ${getRandomIntInclusive(60, 100)}%` : ""}
                        ></sl-skeleton>`
    )}
        `;
  }
};
TerraSkeleton.styles = [component_styles_default, skeleton_styles_default];
TerraSkeleton.dependencies = {
  "sl-skeleton": skeleton_default
};
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
