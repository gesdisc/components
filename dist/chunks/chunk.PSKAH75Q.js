import {
  DB_NAME,
  getDataByKey
} from "./chunk.OEPHY277.js";
import {
  require_plotly_min
} from "./chunk.O7ZKAFVG.js";
import {
  plot_toolbar_styles_default
} from "./chunk.J4IIXP4W.js";
import {
  h
} from "./chunk.EDY6YM3Y.js";
import {
  TerraButton
} from "./chunk.YTHP4MLQ.js";
import {
  TerraIcon
} from "./chunk.27W4IYYI.js";
import {
  watch
} from "./chunk.ZEDYVCUT.js";
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
  __privateMethod,
  __toESM,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/plot-toolbar/plot-toolbar.component.ts
init_dirname();
init_buffer();
init_process();
var import_plotly = __toESM(require_plotly_min(), 1);
var _handleActiveMenuItem, handleActiveMenuItem_fn, _handleMenuLeave, handleMenuLeave_fn, _renderInfoPanel, renderInfoPanel_fn, _renderDownloadPanel, renderDownloadPanel_fn, _renderHelpPanel, renderHelpPanel_fn, _renderJupyterNotebookPanel, renderJupyterNotebookPanel_fn, _handleJupyterNotebookClick, handleJupyterNotebookClick_fn, _downloadPNG, downloadPNG_fn, _downloadCSV, downloadCSV_fn, _convertToCSV, convertToCSV_fn;
var TerraPlotToolbar = class extends TerraElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _handleActiveMenuItem);
    __privateAdd(this, _handleMenuLeave);
    __privateAdd(this, _renderInfoPanel);
    __privateAdd(this, _renderDownloadPanel);
    __privateAdd(this, _renderHelpPanel);
    __privateAdd(this, _renderJupyterNotebookPanel);
    __privateAdd(this, _handleJupyterNotebookClick);
    __privateAdd(this, _downloadPNG);
    __privateAdd(this, _downloadCSV);
    __privateAdd(this, _convertToCSV);
    this.activeMenuItem = null;
  }
  handleFocus(_oldValue, newValue) {
    if (newValue === null) {
      return;
    }
    this.menu.focus();
  }
  render() {
    return h(
      !this.catalogVariable ? x`<div class="spacer"></div>` : x` <header>
                      <slot name="title">
                          <h2 class="title">
                              ${this.catalogVariable.dataFieldLongName}
                          </h2>
                      </slot>

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

                              <terra-icon name="info" font-size="1em"></terra-icon>
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
                  </header>`
    );
  }
};
_handleActiveMenuItem = new WeakSet();
handleActiveMenuItem_fn = function(event) {
  const button = event.currentTarget;
  const menuName = button.dataset.menuName;
  this.activeMenuItem = menuName;
};
_handleMenuLeave = new WeakSet();
handleMenuLeave_fn = function(event) {
  const relatedTarget = event.relatedTarget;
  if (!this.contains(relatedTarget)) {
    this.activeMenuItem = null;
  }
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
    this.cacheKey
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

timeseries.variableEntryId = '${this.variableEntryId}'
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
          filename: `${encodeURIComponent((_a = this.variableEntryId) != null ? _a : "plot")}.ipynb`,
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
_downloadPNG = new WeakSet();
downloadPNG_fn = function(_event) {
  (0, import_plotly.downloadImage)(this.plot.base, {
    filename: this.catalogVariable.dataFieldId,
    format: "png",
    width: 1920,
    height: 1080
  });
};
_downloadCSV = new WeakSet();
downloadCSV_fn = function(_event) {
  var _a, _b;
  let plotData = [];
  (_a = this.timeSeriesData) == null ? void 0 : _a.forEach((plot, index) => {
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
TerraPlotToolbar.styles = [component_styles_default, plot_toolbar_styles_default];
TerraPlotToolbar.dependencies = {
  "terra-icon": TerraIcon,
  "terra-button": TerraButton
};
__decorateClass([
  n()
], TerraPlotToolbar.prototype, "catalogVariable", 2);
__decorateClass([
  n()
], TerraPlotToolbar.prototype, "variableEntryId", 2);
__decorateClass([
  n()
], TerraPlotToolbar.prototype, "plot", 2);
__decorateClass([
  n()
], TerraPlotToolbar.prototype, "timeSeriesData", 2);
__decorateClass([
  n()
], TerraPlotToolbar.prototype, "location", 2);
__decorateClass([
  n()
], TerraPlotToolbar.prototype, "startDate", 2);
__decorateClass([
  n()
], TerraPlotToolbar.prototype, "endDate", 2);
__decorateClass([
  n()
], TerraPlotToolbar.prototype, "cacheKey", 2);
__decorateClass([
  n()
], TerraPlotToolbar.prototype, "dataType", 2);
__decorateClass([
  r()
], TerraPlotToolbar.prototype, "activeMenuItem", 2);
__decorateClass([
  e("#menu")
], TerraPlotToolbar.prototype, "menu", 2);
__decorateClass([
  watch("activeMenuItem")
], TerraPlotToolbar.prototype, "handleFocus", 1);

export {
  TerraPlotToolbar
};
