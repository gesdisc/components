import {
  loader_styles_default
} from "./chunk.YIT2FCRS.js";
import {
  e
} from "./chunk.DVOLO45B.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.BFLNWCV5.js";
import {
  n,
  r
} from "./chunk.KACZXI5J.js";
import {
  T,
  x
} from "./chunk.LL3RMB25.js";
import {
  __decorateClass,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/loader/loader.component.ts
init_dirname();
init_buffer();
init_process();
var TerraLoader = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.variant = "large";
    this.percent = "0";
    this.indeterminate = false;
    this._currentPercent = 0;
  }
  formatPercent(percent) {
    if (parseInt(percent) > 100) {
      percent = "100";
    }
    return parseInt(percent) > 0 ? percent + "%" : "";
  }
  render() {
    this._currentPercent = parseInt(this.percent);
    return x`
            <div
                class=${e({
      loader: true,
      "loader--small": this.variant === "small",
      "loader--large": this.variant === "large",
      "loader--orbit": this.variant === "orbit"
    })}
                aria-valuenow=${this.formatPercent(this.percent)}
                role="progressbar"
                tabindex="-1"
            >
                ${this.variant === "large" || this.variant === "orbit" ? x`
                          <div
                              class="percent ${this.variant == "orbit" ? "number-14" : "number-11"}"
                          >
                              ${this.formatPercent(this.percent)}
                          </div>
                      ` : T}
                ${this.variant === "orbit" ? x`
                          <svg viewBox="0 0 160 160">
                              <circle class="planet" />

                              <!-- total length of orbit ellipse = 298.2393493652344 -->
                              <path
                                  id="orbit"
                                  d="M 53.528 96.775 C 73.584 124.975 100.654 140.601 115.393 130.137 C 132.613 117.912 119.246 79.55 105.434 60.525 C 90.233 39.587 60.506 18.543 44.962 30.114 C 29.456 41.657 38.219 75.25 53.528 96.775 Z"
                              >
                                  <animate
                                      attributeName="stroke-dashoffset"
                                      begin="-0.25s"
                                      from="300"
                                      to="0"
                                      dur="1.5s"
                                      repeatCount="indefinite"
                                  />
                              </path>

                              <circle class="moon">
                                  <animateMotion
                                      begin="0s"
                                      dur="1.5s"
                                      repeatCount="indefinite"
                                  >
                                      <mpath href="#orbit"></mpath>
                                  </animateMotion>
                              </circle>

                              <path
                                  id="mask"
                                  class="planet"
                                  d="M 130.176 80.041 C 130.176 41.552 88.321 17.697 55.544 36.652 C 40.081 45.594 30.865 62.428 30.47 80.094 L 130.176 80.041 Z"
                                  style="transform-box: fill-box; transform-origin: 49.8347% 100.62%;"
                                  transform="matrix(-0.350367, -0.936613, 0.936613, -0.350367, -0.148117, -0.20884)"
                              />
                          </svg>
                      ` : T}
                ${this.variant === "small" || this.variant === "large" ? x`
                          <svg
                              viewBox=${this.variant == "small" ? "0 0 30 30" : "0 0 52 52"}
                              aria-hidden="true"
                              style="--progress: ${this.percent}"
                              class="circular-progress ${this.indeterminate ? "indeterminate" : ""}"
                          >
                              <circle class="bg"></circle>
                              <circle class="fg"></circle>
                          </svg>
                      ` : T}
            </div>
        `;
  }
};
TerraLoader.styles = [component_styles_default, loader_styles_default];
__decorateClass([
  n({ reflect: true })
], TerraLoader.prototype, "variant", 2);
__decorateClass([
  n({ type: String })
], TerraLoader.prototype, "percent", 2);
__decorateClass([
  n({ type: Boolean })
], TerraLoader.prototype, "indeterminate", 2);
__decorateClass([
  r()
], TerraLoader.prototype, "_currentPercent", 2);

export {
  TerraLoader
};
