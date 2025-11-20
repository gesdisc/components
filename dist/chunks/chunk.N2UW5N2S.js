import {
  TimeSeriesController
} from "./chunk.YZDS3HXV.js";
import {
  time_series_styles_default
} from "./chunk.GROCJYJB.js";
import {
  getFetchVariableTask
} from "./chunk.4Q56BB6I.js";
import {
  TerraPlotToolbar
} from "./chunk.PK4JWEQ3.js";
import {
  TerraPlot
} from "./chunk.FR5ZXOSP.js";
import {
  AuthController
} from "./chunk.7D6PZR3Q.js";
import {
  h
} from "./chunk.6LTX6DHB.js";
import {
  TerraLoader
} from "./chunk.RXPDJB7X.js";
import {
  TerraButton
} from "./chunk.ZHKSN4LM.js";
import {
  formatDate
} from "./chunk.NDNVCIB3.js";
import {
  s
} from "./chunk.CTTYXXNL.js";
import {
  TerraIcon
} from "./chunk.3K2V77UJ.js";
import {
  TerraAlert
} from "./chunk.O57OGVXH.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.XCIW4BFM.js";
import {
  e,
  n,
  r
} from "./chunk.ZQH2A4BE.js";
import {
  x
} from "./chunk.JQ2FCDGS.js";
import {
  __decorateClass,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/time-series/time-series.component.ts
init_dirname();
init_buffer();
init_process();
var _timeSeriesController, _handleQuotaError, _confirmDataPointWarning, confirmDataPointWarning_fn, _cancelDataPointWarning, cancelDataPointWarning_fn, _abortDataLoad, abortDataLoad_fn, _handleComponentLeave, handleComponentLeave_fn, _getYAxisLabel, getYAxisLabel_fn, _handlePlotRelayout, handlePlotRelayout_fn;
var TerraTimeSeries = class extends TerraElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _confirmDataPointWarning);
    __privateAdd(this, _cancelDataPointWarning);
    /**
     * aborts the underlying data loading task, which cancels the network request
     */
    __privateAdd(this, _abortDataLoad);
    __privateAdd(this, _handleComponentLeave);
    __privateAdd(this, _getYAxisLabel);
    __privateAdd(this, _handlePlotRelayout);
    __privateAdd(this, _timeSeriesController, void 0);
    this.showCitation = false;
    this.quotaExceededOpen = false;
    this.showDataPointWarning = false;
    this.estimatedDataPoints = 0;
    this._authController = new AuthController(this);
    this._fetchVariableTask = getFetchVariableTask(this);
    __privateAdd(this, _handleQuotaError, (event) => {
      const { status } = event.detail;
      if (status === 429) {
        this.quotaExceededOpen = true;
      }
    });
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(
      "terra-time-series-error",
      __privateGet(this, _handleQuotaError)
    );
    __privateSet(this, _timeSeriesController, new TimeSeriesController(this));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener(
      "terra-time-series-error",
      __privateGet(this, _handleQuotaError)
    );
  }
  render() {
    var _a, _b, _c;
    return x`
            <div class="plot-container" @mouseleave=${__privateMethod(this, _handleComponentLeave, handleComponentLeave_fn)}>
                ${this.quotaExceededOpen ? x`
                          <terra-alert
                              variant="warning"
                              duration="10000"
                              open=${this.quotaExceededOpen}
                              closable
                              @terra-after-hide=${() => this.quotaExceededOpen = false}
                          >
                              <terra-icon
                                  slot="icon"
                                  name="outline-exclamation-triangle"
                                  library="heroicons"
                              ></terra-icon>
                              You've exceeded your request quota. Please
                              <a
                                  href="https://disc.gsfc.nasa.gov/information/documents?title=Contact%20Us"
                                  >contact the help desk</a
                              >
                              for further assistance.
                          </terra-alert>
                      ` : ""}
                ${h(
      this.catalogVariable ? x`<terra-plot-toolbar
                              .catalogVariable=${this.catalogVariable}
                              .plot=${this.plot}
                              .timeSeriesData=${(_a = __privateGet(this, _timeSeriesController).lastTaskValue) != null ? _a : __privateGet(this, _timeSeriesController).emptyPlotData}
                              .location=${this.location}
                              .startDate=${this.startDate}
                              .endDate=${this.endDate}
                              .cacheKey=${__privateGet(this, _timeSeriesController).getCacheKey()}
                              .variableEntryId=${this.variableEntryId}
                              .showCitation=${this.showCitation}
                          >
                              <slot name="help-links" slot="help-links"></slot>
                          </terra-plot-toolbar>` : x`<div class="spacer"></div>`
    )}

                <terra-plot
                    exportparts="base:plot__base, plot-title:plot__title"
                    .data=${(_b = __privateGet(this, _timeSeriesController).lastTaskValue) != null ? _b : __privateGet(this, _timeSeriesController).emptyPlotData}
                    .layout="${{
      xaxis: {
        title: "Time",
        showgrid: false,
        zeroline: false,
        range: (
          // manually set the range as we may adjust it when we fetch new data as a user pans/zooms the plot
          this.startDate && this.endDate ? [this.startDate, this.endDate] : void 0
        )
      },
      yaxis: {
        title: __privateMethod(this, _getYAxisLabel, getYAxisLabel_fn).call(this),
        showline: false
      },
      title: {
        text: this.catalogVariable && this.location ? `${this.catalogVariable.dataProductShortName} @ ${this.location}` : null
      }
    }}"
                    .config=${{
      displayModeBar: true,
      displaylogo: false,
      modeBarButtonsToRemove: ["toImage", "zoom2d", "resetScale2d"],
      responsive: true
    }}
                    @terra-plot-relayout=${__privateMethod(this, _handlePlotRelayout, handlePlotRelayout_fn)}
                ></terra-plot>
            </div>

            <dialog
                ?open=${__privateGet(this, _timeSeriesController).task.status === s.PENDING || this._fetchVariableTask.status === s.PENDING}
            >
                <terra-loader indeterminate></terra-loader>

                ${__privateGet(this, _timeSeriesController).task.status === s.PENDING ? x`<p>
                          Plotting ${(_c = this.catalogVariable) == null ? void 0 : _c.dataFieldId}&hellip;
                      </p>` : x`<p>Preparing plot&hellip;</p>`}

                <terra-button @click=${__privateMethod(this, _abortDataLoad, abortDataLoad_fn)}>Cancel</terra-button>
            </dialog>

            <dialog ?open=${this.showDataPointWarning} class="quota-dialog">
                <h2>This is a large request</h2>

                <p>
                    You are requesting approximately
                    ${this.estimatedDataPoints.toLocaleString()} data points.
                </p>

                <p>
                    Requesting large amounts of data may cause you to reach your
                    monthly quota limit.
                </p>

                <p>Would you still like to proceed with this request?</p>

                <div class="dialog-buttons">
                    <terra-button
                        @click=${__privateMethod(this, _cancelDataPointWarning, cancelDataPointWarning_fn)}
                        variant="default"
                    >
                        Cancel
                    </terra-button>

                    <terra-button
                        @click=${__privateMethod(this, _confirmDataPointWarning, confirmDataPointWarning_fn)}
                        variant="primary"
                    >
                        Proceed
                    </terra-button>
                </div>
            </dialog>
        `;
  }
};
_timeSeriesController = new WeakMap();
_handleQuotaError = new WeakMap();
_confirmDataPointWarning = new WeakSet();
confirmDataPointWarning_fn = function() {
  __privateGet(this, _timeSeriesController).confirmDataPointWarning();
  __privateGet(this, _timeSeriesController).task.run();
};
_cancelDataPointWarning = new WeakSet();
cancelDataPointWarning_fn = function() {
  this.showDataPointWarning = false;
};
_abortDataLoad = new WeakSet();
abortDataLoad_fn = function() {
  var _a;
  console.log("Aborting data load");
  (_a = __privateGet(this, _timeSeriesController).task) == null ? void 0 : _a.abort();
};
_handleComponentLeave = new WeakSet();
handleComponentLeave_fn = function(event) {
  var _a;
  const relatedTarget = event.relatedTarget;
  if (!this.contains(relatedTarget)) {
    (_a = this.plotToolbar) == null ? void 0 : _a.closeMenu();
  }
};
_getYAxisLabel = new WeakSet();
getYAxisLabel_fn = function() {
  if (!this.catalogVariable) {
    return;
  }
  return [this.catalogVariable.dataFieldUnits].filter(Boolean).join(", ");
};
_handlePlotRelayout = new WeakSet();
handlePlotRelayout_fn = function(e2) {
  let changed = false;
  if (e2.detail.xAxisMin) {
    this.startDate = formatDate(e2.detail.xAxisMin);
    changed = true;
  }
  if (e2.detail.xAxisMax) {
    this.endDate = formatDate(e2.detail.xAxisMax);
    changed = true;
  }
  if (changed) {
    this.dispatchEvent(
      new CustomEvent("terra-date-range-change", {
        detail: {
          startDate: this.startDate,
          endDate: this.endDate
        },
        bubbles: true,
        composed: true
      })
    );
  }
};
TerraTimeSeries.styles = [component_styles_default, time_series_styles_default];
TerraTimeSeries.dependencies = {
  "terra-plot": TerraPlot,
  "terra-loader": TerraLoader,
  "terra-icon": TerraIcon,
  "terra-button": TerraButton,
  "terra-alert": TerraAlert,
  "terra-plot-toolbar": TerraPlotToolbar
};
__decorateClass([
  n({ attribute: "variable-entry-id", reflect: true })
], TerraTimeSeries.prototype, "variableEntryId", 2);
__decorateClass([
  n({ reflect: true })
], TerraTimeSeries.prototype, "collection", 2);
__decorateClass([
  n({ reflect: true })
], TerraTimeSeries.prototype, "variable", 2);
__decorateClass([
  n({
    attribute: "start-date",
    reflect: true
  })
], TerraTimeSeries.prototype, "startDate", 2);
__decorateClass([
  n({
    attribute: "end-date",
    reflect: true
  })
], TerraTimeSeries.prototype, "endDate", 2);
__decorateClass([
  n({
    reflect: true
  })
], TerraTimeSeries.prototype, "location", 2);
__decorateClass([
  n({ type: Boolean, attribute: "show-citation" })
], TerraTimeSeries.prototype, "showCitation", 2);
__decorateClass([
  n({ attribute: "application-citation" })
], TerraTimeSeries.prototype, "applicationCitation", 2);
__decorateClass([
  n({ attribute: "bearer-token", reflect: false })
], TerraTimeSeries.prototype, "bearerToken", 2);
__decorateClass([
  e("terra-plot")
], TerraTimeSeries.prototype, "plot", 2);
__decorateClass([
  e("terra-plot-toolbar")
], TerraTimeSeries.prototype, "plotToolbar", 2);
__decorateClass([
  r()
], TerraTimeSeries.prototype, "catalogVariable", 2);
__decorateClass([
  r()
], TerraTimeSeries.prototype, "quotaExceededOpen", 2);
__decorateClass([
  r()
], TerraTimeSeries.prototype, "showDataPointWarning", 2);
__decorateClass([
  r()
], TerraTimeSeries.prototype, "estimatedDataPoints", 2);

export {
  TerraTimeSeries
};
