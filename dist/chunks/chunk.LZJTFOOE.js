import {
  getRandomIntInclusive
} from "./chunk.75PZH4W2.js";
import {
  skeleton_default
} from "./chunk.3SQ33WJL.js";
import {
  skeleton_styles_default
} from "./chunk.CJDWJPSB.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.IZEIX7KR.js";
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
