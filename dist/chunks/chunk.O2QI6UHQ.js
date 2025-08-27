import {
  TimeSeriesController
} from "./chunk.IFVS3ZJN.js";
import {
  time_series_styles_default
} from "./chunk.TPKJOGOH.js";
import {
  TerraPlot
} from "./chunk.VVAFTJZJ.js";
import {
  TerraPlotToolbar
} from "./chunk.PSKAH75Q.js";
import {
  AuthController
} from "./chunk.JDGLRQER.js";
import {
  h
} from "./chunk.EDY6YM3Y.js";
import {
  TerraLoader
} from "./chunk.PLVQL3FU.js";
import {
  GiovanniVariableCatalog
} from "./chunk.22DVIRSW.js";
import {
  h as h2,
  s
} from "./chunk.3AZLGGEX.js";
import {
  formatDate
} from "./chunk.TZ27CWAV.js";
import {
  TerraButton
} from "./chunk.YTHP4MLQ.js";
import {
  TerraIcon
} from "./chunk.27W4IYYI.js";
import {
  TerraAlert
} from "./chunk.ACTGB3Y2.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.DZKPT4ML.js";
import {
  e,
  n,
  r
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
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/time-series/time-series.component.ts
init_dirname();
init_buffer();
init_process();
var _timeSeriesController, _catalog, _fetchVariableTask, _handleQuotaError, _confirmDataPointWarning, confirmDataPointWarning_fn, _cancelDataPointWarning, cancelDataPointWarning_fn, _abortDataLoad, abortDataLoad_fn, _handleComponentLeave, handleComponentLeave_fn, _getYAxisLabel, getYAxisLabel_fn, _handlePlotRelayout, handlePlotRelayout_fn;
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
    this.quotaExceededOpen = false;
    this.showDataPointWarning = false;
    this.estimatedDataPoints = 0;
    __privateAdd(this, _catalog, new GiovanniVariableCatalog());
    this._authController = new AuthController(this);
    // @ts-expect-error
    __privateAdd(this, _fetchVariableTask, new h2(this, {
      task: async (_args, { signal }) => {
        var _a, _b, _c, _d;
        const variableEntryId = this.getVariableEntryId();
        console.debug("fetch variable ", variableEntryId);
        if (!variableEntryId) {
          return;
        }
        const variable = await __privateGet(this, _catalog).getVariable(variableEntryId, {
          signal
        });
        console.debug("found variable ", variable);
        if (!variable) {
          return;
        }
        this.startDate = (_b = this.startDate) != null ? _b : (_a = variable.exampleInitialStartDate) == null ? void 0 : _a.toISOString();
        this.endDate = (_d = this.endDate) != null ? _d : (_c = variable.exampleInitialEndDate) == null ? void 0 : _c.toISOString();
        this.catalogVariable = variable;
      },
      args: () => [this.variableEntryId, this.collection, this.variable]
    }));
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
                          ></terra-plot-toolbar>` : x`<div class="spacer"></div>`
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
                ?open=${__privateGet(this, _timeSeriesController).task.status === s.PENDING}
            >
                <terra-loader indeterminate></terra-loader>
                <p>Plotting ${(_c = this.catalogVariable) == null ? void 0 : _c.dataFieldId}&hellip;</p>
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
  getVariableEntryId() {
    var _a;
    if (!this.variableEntryId && !(this.collection && this.variable)) {
      return;
    }
    return (_a = this.variableEntryId) != null ? _a : `${this.collection}_${this.variable}`;
  }
};
_timeSeriesController = new WeakMap();
_catalog = new WeakMap();
_fetchVariableTask = new WeakMap();
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
  (_a = __privateGet(this, _timeSeriesController).task) == null ? void 0 : _a.abort();
};
_handleComponentLeave = new WeakSet();
handleComponentLeave_fn = function(event) {
  const relatedTarget = event.relatedTarget;
  if (!this.contains(relatedTarget)) {
  }
};
_getYAxisLabel = new WeakSet();
getYAxisLabel_fn = function() {
  if (!this.catalogVariable) {
    return;
  }
  return [
    this.catalogVariable.dataFieldLongName,
    this.catalogVariable.dataFieldUnits
  ].filter(Boolean).join(", ");
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
  n({ attribute: "bearer-token", reflect: false })
], TerraTimeSeries.prototype, "bearerToken", 2);
__decorateClass([
  e("terra-plot")
], TerraTimeSeries.prototype, "plot", 2);
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
