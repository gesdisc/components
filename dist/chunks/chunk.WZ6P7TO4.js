import {
  plot_styles_default
} from "./chunk.4VO545RN.js";
import {
  require_plotly_min
} from "./chunk.O7ZKAFVG.js";
import {
  watch
} from "./chunk.ZEDYVCUT.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.7CI746RD.js";
import {
  e,
  n
} from "./chunk.KACZXI5J.js";
import {
  x
} from "./chunk.LL3RMB25.js";
import {
  __decorateClass,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __spreadValues,
  __toESM,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/plot/plot.component.ts
init_dirname();
init_buffer();
init_process();
var import_plotly = __toESM(require_plotly_min(), 1);
var _resizeObserver, _handlePlotlyRelayout, handlePlotlyRelayout_fn;
var TerraPlot = class extends TerraElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _handlePlotlyRelayout);
    __privateAdd(this, _resizeObserver, void 0);
    this.layout = {};
    this.config = {};
    this.data = [];
  }
  handleDataChange() {
    this.updatePlotWithData();
  }
  firstUpdated() {
    __privateSet(this, _resizeObserver, new ResizeObserver(() => {
      import_plotly.Plots.resize(this.base);
    }));
    __privateGet(this, _resizeObserver).observe(this.base);
    if (this.data.length) {
      this.updatePlotWithData();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    __privateGet(this, _resizeObserver).disconnect();
  }
  updatePlotWithData() {
    if (!this.base) {
      return;
    }
    (0, import_plotly.newPlot)(
      this.base,
      this.data,
      __spreadValues({
        title: this.plotTitle
      }, this.layout),
      __spreadValues({ responsive: true }, this.config)
    );
    this.base.on("plotly_relayout", __privateMethod(this, _handlePlotlyRelayout, handlePlotlyRelayout_fn).bind(this));
  }
  render() {
    return x`<div part="base"></div>`;
  }
  updated() {
    var _a, _b;
    (_b = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(".gtitle")) == null ? void 0 : _b.part.add("plot-title");
  }
};
_resizeObserver = new WeakMap();
_handlePlotlyRelayout = new WeakSet();
handlePlotlyRelayout_fn = function(e2) {
  const detail = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, e2["xaxis.range[0]"] && { xAxisMin: e2["xaxis.range[0]"] }), e2["xaxis.range[1]"] && { xAxisMax: e2["xaxis.range[1]"] }), e2["yaxis.range[0]"] && { yAxisMin: e2["yaxis.range[0]"] }), e2["yaxis.range[1]"] && { yAxisMax: e2["yaxis.range[1]"] });
  if (!Object.keys(detail).length) {
    return;
  }
  this.emit("terra-plot-relayout", {
    detail
  });
};
TerraPlot.styles = [component_styles_default, plot_styles_default];
__decorateClass([
  e('[part="base"]')
], TerraPlot.prototype, "base", 2);
__decorateClass([
  n()
], TerraPlot.prototype, "plotTitle", 2);
__decorateClass([
  n()
], TerraPlot.prototype, "layout", 2);
__decorateClass([
  n()
], TerraPlot.prototype, "config", 2);
__decorateClass([
  n({ type: Array })
], TerraPlot.prototype, "data", 2);
__decorateClass([
  watch("data")
], TerraPlot.prototype, "handleDataChange", 1);

export {
  TerraPlot
};
