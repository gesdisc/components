import {
  DB_NAME,
  TimeSeriesController,
  getDataByKey
} from "./chunk.GJIEQWA2.js";
import {
  time_series_styles_default
} from "./chunk.Y7I2RXN6.js";
import {
  TerraPlot,
  require_plotly_min
} from "./chunk.GHKFPCLA.js";
import {
  h
} from "./chunk.QB5SASDL.js";
import {
  TerraLoader
} from "./chunk.FXMM2J3O.js";
import {
  GiovanniVariableCatalog
} from "./chunk.WDABPW4H.js";
import {
  h as h2,
  s
} from "./chunk.UGTZ22DI.js";
import {
  formatDate
} from "./chunk.EZMKGB3F.js";
import {
  TerraButton
} from "./chunk.KE6KM4AP.js";
import {
  TerraIcon
} from "./chunk.JFQ72RBA.js";
import {
  TerraAlert
} from "./chunk.C26WRXGH.js";
import {
  watch
} from "./chunk.6MMTW476.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.6PUQ3DDO.js";
import {
  e,
  n,
  r
} from "./chunk.2FFSUM6T.js";
import {
  x
} from "./chunk.PQFHJHNO.js";
import {
  __decorateClass,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __toESM
} from "./chunk.6JHIJHTB.js";

// src/components/time-series/time-series.component.ts
var import_plotly = __toESM(require_plotly_min(), 1);
var _timeSeriesController, _catalog, _fetchVariableTask, _handleQuotaError, _confirmDataPointWarning, confirmDataPointWarning_fn, _cancelDataPointWarning, cancelDataPointWarning_fn, _abortDataLoad, abortDataLoad_fn, _downloadCSV, downloadCSV_fn, _convertToCSV, convertToCSV_fn, _downloadPNG, downloadPNG_fn, _handleActiveMenuItem, handleActiveMenuItem_fn, _handleComponentLeave, handleComponentLeave_fn, _handleMenuLeave, handleMenuLeave_fn, _getVariableEntryId, getVariableEntryId_fn, _getYAxisLabel, getYAxisLabel_fn, _renderInfoPanel, renderInfoPanel_fn, _renderDownloadPanel, renderDownloadPanel_fn, _renderHelpPanel, renderHelpPanel_fn, _renderJupyterNotebookPanel, renderJupyterNotebookPanel_fn, _handleJupyterNotebookClick, handleJupyterNotebookClick_fn, _handlePlotRelayout, handlePlotRelayout_fn;
var TerraTimeSeries = class extends TerraElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _confirmDataPointWarning);
    __privateAdd(this, _cancelDataPointWarning);
    /**
     * aborts the underlying data loading task, which cancels the network request
     */
    __privateAdd(this, _abortDataLoad);
    __privateAdd(this, _downloadCSV);
    __privateAdd(this, _convertToCSV);
    __privateAdd(this, _downloadPNG);
    __privateAdd(this, _handleActiveMenuItem);
    __privateAdd(this, _handleComponentLeave);
    __privateAdd(this, _handleMenuLeave);
    __privateAdd(this, _getVariableEntryId);
    __privateAdd(this, _getYAxisLabel);
    __privateAdd(this, _renderInfoPanel);
    __privateAdd(this, _renderDownloadPanel);
    __privateAdd(this, _renderHelpPanel);
    __privateAdd(this, _renderJupyterNotebookPanel);
    __privateAdd(this, _handleJupyterNotebookClick);
    __privateAdd(this, _handlePlotRelayout);
    __privateAdd(this, _timeSeriesController, void 0);
    this.quotaExceededOpen = false;
    this.showDataPointWarning = false;
    this.estimatedDataPoints = 0;
    this.activeMenuItem = null;
    __privateAdd(this, _catalog, new GiovanniVariableCatalog());
    // @ts-expect-error
    __privateAdd(this, _fetchVariableTask, new h2(this, {
      task: async (_args, { signal }) => {
        var _a, _b, _c, _d;
        const variableEntryId = __privateMethod(this, _getVariableEntryId, getVariableEntryId_fn).call(this);
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
  handleFocus(_oldValue, newValue) {
    if (newValue === null) {
      return;
    }
    this.menu.focus();
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(
      "terra-time-series-error",
      __privateGet(this, _handleQuotaError)
    );
    __privateSet(this, _timeSeriesController, new TimeSeriesController(this, this.bearerToken));
    if (!document.getElementById("terra-jupyterlite-warmup-iframe")) {
      const iframe = document.createElement("iframe");
      iframe.id = "terra-jupyterlite-warmup-iframe";
      iframe.src = "https://gesdisc.github.io/jupyterlite/lab/index.html?path=warmup.ipynb";
      iframe.style.cssText = "width:1px; height:1px; opacity:0.01; pointer-events: none; border: 0; position: fixed; top: 0; left: 0;";
      iframe.title = "Notebook Warm-Up Frame";
      iframe.setAttribute("aria-hidden", "true");
      document.body.appendChild(iframe);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener(
      "terra-time-series-error",
      __privateGet(this, _handleQuotaError)
    );
  }
  render() {
    var _a, _b;
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
      this.catalogVariable ? x`
                              <header>
                                  <h2 class="title">
                                      ${this.catalogVariable.dataFieldLongName}
                                  </h2>

                                  <div class="toggles">
                                      <terra-button
                                          circle
                                          outline
                                          aria-expanded=${this.activeMenuItem === "information"}
                                          aria-controls="menu"
                                          aria-haspopup="true"
                                          class="toggle"
                                          @mouseenter=${__privateMethod(this, _handleActiveMenuItem, handleActiveMenuItem_fn)}
                                          data-menu-name="information"
                                      >
                                          <span class="sr-only"
                                              >Information for
                                              ${this.catalogVariable.dataFieldLongName}</span
                                          >

                                          <terra-icon
                                              name="info"
                                              font-size="1em"
                                          ></terra-icon>
                                      </terra-button>

                                      <terra-button
                                          circle
                                          outline
                                          aria-expanded=${this.activeMenuItem === "download"}
                                          aria-controls="menu"
                                          aria-haspopup="true"
                                          class="toggle"
                                          @mouseenter=${__privateMethod(this, _handleActiveMenuItem, handleActiveMenuItem_fn)}
                                          data-menu-name="download"
                                      >
                                          <span class="sr-only"
                                              >Download options for
                                              ${this.catalogVariable.dataFieldLongName}</span
                                          >

                                          <terra-icon
                                              name="outline-arrow-down-tray"
                                              library="heroicons"
                                              font-size="1.5em"
                                          ></terra-icon>
                                      </terra-button>

                                      <terra-button
                                          circle
                                          outline
                                          aria-expanded=${this.activeMenuItem === "help"}
                                          aria-controls="menu"
                                          aria-haspopup="true"
                                          class="toggle"
                                          @mouseenter=${__privateMethod(this, _handleActiveMenuItem, handleActiveMenuItem_fn)}
                                          data-menu-name="help"
                                      >
                                          <span class="sr-only"
                                              >Help link for
                                              ${this.catalogVariable.dataFieldLongName}</span
                                          >

                                          <terra-icon
                                              name="question"
                                              font-size="1em"
                                          ></terra-icon>
                                      </terra-button>

                                      <terra-button
                                          circle
                                          outline
                                          aria-expanded=${this.activeMenuItem === "jupyter"}
                                          aria-controls="menu"
                                          aria-haspopup="true"
                                          class="toggle"
                                          @mouseenter=${__privateMethod(this, _handleActiveMenuItem, handleActiveMenuItem_fn)}
                                          data-menu-name="jupyter"
                                      >
                                          <span class="sr-only"
                                              >Open in Jupyter Notebook for
                                              ${this.catalogVariable.dataFieldLongName}</span
                                          >

                                          <terra-icon
                                              name="outline-code-bracket"
                                              library="heroicons"
                                              font-size="1.5em"
                                          ></terra-icon>
                                      </terra-button>
                                  </div>

                                  <menu
                                      role="menu"
                                      id="menu"
                                      data-expanded=${this.activeMenuItem !== null}
                                      tabindex="-1"
                                      @mouseleave=${__privateMethod(this, _handleMenuLeave, handleMenuLeave_fn)}
                                  >
                                      <li
                                          role="menuitem"
                                          ?hidden=${this.activeMenuItem !== "information"}
                                      >
                                          ${__privateMethod(this, _renderInfoPanel, renderInfoPanel_fn).call(this)}
                                      </li>

                                      <li
                                          role="menuitem"
                                          ?hidden=${this.activeMenuItem !== "download"}
                                      >
                                          ${__privateMethod(this, _renderDownloadPanel, renderDownloadPanel_fn).call(this)}
                                      </li>

                                      <li
                                          role="menuitem"
                                          ?hidden=${this.activeMenuItem !== "help"}
                                      >
                                          ${__privateMethod(this, _renderHelpPanel, renderHelpPanel_fn).call(this)}
                                      </li>

                                      <li
                                          role="menuitem"
                                          ?hidden=${this.activeMenuItem !== "jupyter"}
                                      >
                                          ${__privateMethod(this, _renderJupyterNotebookPanel, renderJupyterNotebookPanel_fn).call(this)}
                                      </li>
                                  </menu>
                              </header>
                          ` : x`<div class="spacer"></div>`
    )}

                <terra-plot
                    exportparts="base:plot__base, plot-title:plot__title"
                    .data=${(_a = __privateGet(this, _timeSeriesController).lastTaskValue) != null ? _a : __privateGet(this, _timeSeriesController).emptyPlotData}
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
                <p>Plotting ${(_b = this.catalogVariable) == null ? void 0 : _b.dataFieldId}&hellip;</p>
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
_downloadCSV = new WeakSet();
downloadCSV_fn = function(_event) {
  var _a, _b;
  const controllerData = (_a = __privateGet(this, _timeSeriesController).lastTaskValue) != null ? _a : __privateGet(this, _timeSeriesController).emptyPlotData;
  let plotData = [];
  controllerData.forEach((plot, index) => {
    plotData[index] = plot;
  });
  const csvData = plotData.map((trace) => {
    return trace.x.map((x2, i) => {
      return {
        x: x2,
        y: trace.y[i]
      };
    });
  }).flat();
  const csv = __privateMethod(this, _convertToCSV, convertToCSV_fn).call(this, csvData);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  const variableName = ((_b = this.catalogVariable) == null ? void 0 : _b.dataFieldId) || "time-series-data";
  const locationStr = this.location ? `_${this.location.replace(/,/g, "_")}` : "";
  const dateRange = this.startDate && this.endDate ? `_${this.startDate.split("T")[0]}_to_${this.endDate.split("T")[0]}` : "";
  const filename = `${variableName}${locationStr}${dateRange}.csv`;
  link.setAttribute("download", filename);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
_convertToCSV = new WeakSet();
convertToCSV_fn = function(data) {
  const header = Object.keys(data[0]).join(",") + "\n";
  const rows = data.map((obj) => Object.values(obj).join(",")).join("\n");
  return header + rows;
};
_downloadPNG = new WeakSet();
downloadPNG_fn = function(_event) {
  var _a;
  (0, import_plotly.downloadImage)((_a = this.plot) == null ? void 0 : _a.base, {
    filename: this.catalogVariable.dataFieldId,
    format: "png",
    width: 1920,
    height: 1080
  });
};
_handleActiveMenuItem = new WeakSet();
handleActiveMenuItem_fn = function(event) {
  const button = event.currentTarget;
  const menuName = button.dataset.menuName;
  this.activeMenuItem = menuName;
};
_handleComponentLeave = new WeakSet();
handleComponentLeave_fn = function(event) {
  const relatedTarget = event.relatedTarget;
  if (!this.contains(relatedTarget)) {
    this.activeMenuItem = null;
  }
};
_handleMenuLeave = new WeakSet();
handleMenuLeave_fn = function(event) {
  const relatedTarget = event.relatedTarget;
  if (!this.contains(relatedTarget)) {
    this.activeMenuItem = null;
  }
};
_getVariableEntryId = new WeakSet();
getVariableEntryId_fn = function() {
  var _a;
  if (!this.variableEntryId && !(this.collection && this.variable)) {
    return;
  }
  return (_a = this.variableEntryId) != null ? _a : `${this.collection}_${this.variable}`;
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
_renderInfoPanel = new WeakSet();
renderInfoPanel_fn = function() {
  var _a;
  return x`
            <h3 class="sr-only">Information</h3>

            <dl>
                <dt>Variable Longname</dt>
                <dd>${this.catalogVariable.dataFieldLongName}</dd>

                <dt>Variable Shortname</dt>
                <dd>
                    ${(_a = this.catalogVariable.dataFieldShortName) != null ? _a : this.catalogVariable.dataFieldAccessName}
                </dd>

                <dt>Units</dt>
                <dd>
                    <code>${this.catalogVariable.dataFieldUnits}</code>
                </dd>

                <dt>Dataset Information</dt>
                <dd>
                    <a
                        href=${this.catalogVariable.dataProductDescriptionUrl}
                        rel="noopener noreffer"
                        target="_blank"
                        >${this.catalogVariable.dataProductLongName}

                        <terra-icon
                            name="outline-arrow-top-right-on-square"
                            library="heroicons"
                        ></terra-icon>
                    </a>
                </dd>

                <dt>Variable Information</dt>
                <dd>
                    <a
                        href=${this.catalogVariable.dataFieldDescriptionUrl}
                        rel="noopener noreffer"
                        target="_blank"
                        >Variable Glossary

                        <terra-icon
                            name="outline-arrow-top-right-on-square"
                            library="heroicons"
                        ></terra-icon>
                    </a>
                </dd>
            </dl>
        `;
};
_renderDownloadPanel = new WeakSet();
renderDownloadPanel_fn = function() {
  return x`
            <h3 class="sr-only">Download Options</h3>

            <p>
                This plot can be downloaded as either a
                <abbr title="Portable Network Graphic">PNG</abbr>
                image or
                <abbr title="Comma-Separated Value">CSV</abbr>
                data.
            </p>

            <terra-button outline variant="default" @click=${__privateMethod(this, _downloadPNG, downloadPNG_fn)}>
                <span class="sr-only">Download Plot Data as </span>
                PNG
                <terra-icon
                    slot="prefix"
                    name="outline-photo"
                    library="heroicons"
                    font-size="1.5em"
                ></terra-icon>
            </terra-button>

            <terra-button outline variant="default" @click=${__privateMethod(this, _downloadCSV, downloadCSV_fn)}>
                <span class="sr-only">Download Plot Data as </span>
                CSV
                <terra-icon
                    slot="prefix"
                    name="outline-document-chart-bar"
                    library="heroicons"
                    font-size="1.5em"
                ></terra-icon>
            </terra-button>
        `;
};
_renderHelpPanel = new WeakSet();
renderHelpPanel_fn = function() {
  return x`
            <h3 class="sr-only">Help Links</h3>
            <ul>
                <li>
                    <a href="https://forum.earthdata.nasa.gov/viewforum.php?f=7&DAAC=3" rel"noopener noreffer">Earthdata User Forum
                        <terra-icon
                            name="outline-arrow-top-right-on-square"
                            library="heroicons"
                        ></terra-icon>
                    </a>
                </li>
            </ul>                  
        `;
};
_renderJupyterNotebookPanel = new WeakSet();
renderJupyterNotebookPanel_fn = function() {
  return x`
            <h3 class="sr-only">Jupyter Notebook Options</h3>
            <p>Open this plot in a Jupyter Notebook to explore the data further.</p>
            <a
                href="#"
                @click=${(e2) => {
    e2.preventDefault();
    __privateMethod(this, _handleJupyterNotebookClick, handleJupyterNotebookClick_fn).call(this);
  }}
            >
                Open in Jupyter Notebook
                <terra-icon
                    name="outline-arrow-top-right-on-square"
                    library="heroicons"
                ></terra-icon>
            </a>
        `;
};
_handleJupyterNotebookClick = new WeakSet();
handleJupyterNotebookClick_fn = function() {
  const jupyterLiteUrl = "https://gesdisc.github.io/jupyterlite/lab/index.html";
  const jupyterWindow = window.open(jupyterLiteUrl, "_blank");
  if (!jupyterWindow) {
    console.error("Failed to open JupyterLite!");
    return;
  }
  getDataByKey(
    "time-series" /* TIME_SERIES */,
    __privateGet(this, _timeSeriesController).getCacheKey()
  ).then((timeSeriesData) => {
    setTimeout(() => {
      var _a;
      const notebook = [
        {
          id: "2733501b-0de4-4067-8aff-864e1b4c76cb",
          cell_type: "code",
          source: "%pip install -q terra_ui_components",
          metadata: {
            trusted: true
          },
          outputs: [],
          execution_count: null
        },
        {
          id: "870c1384-e706-48ee-ba07-fd552a949869",
          cell_type: "code",
          source: `from terra_ui_components import TerraTimeSeries
timeseries = TerraTimeSeries()

timeseries.variableEntryId = '${__privateMethod(this, _getVariableEntryId, getVariableEntryId_fn).call(this)}'
timeseries.startDate = '${this.startDate}'
timeseries.endDate = '${this.endDate}'
timeseries.location = '${this.location}'

timeseries`,
          metadata: {
            trusted: true
          },
          outputs: [],
          execution_count: null
        }
      ];
      jupyterWindow.postMessage(
        {
          type: "load-notebook",
          filename: `${encodeURIComponent((_a = __privateMethod(this, _getVariableEntryId, getVariableEntryId_fn).call(this)) != null ? _a : "plot")}.ipynb`,
          notebook,
          timeSeriesData,
          databaseName: DB_NAME,
          storeName: "time-series" /* TIME_SERIES */
        },
        "*"
      );
    }, 500);
  });
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
  "terra-alert": TerraAlert
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
  e("#menu")
], TerraTimeSeries.prototype, "menu", 2);
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
__decorateClass([
  r()
], TerraTimeSeries.prototype, "activeMenuItem", 2);
__decorateClass([
  watch("activeMenuItem")
], TerraTimeSeries.prototype, "handleFocus", 1);

export {
  TerraTimeSeries
};
