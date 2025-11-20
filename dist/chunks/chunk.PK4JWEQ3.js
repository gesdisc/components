import {
  getTimeAveragedMapNotebook
} from "./chunk.O5SW4AN4.js";
import {
  getTimeSeriesNotebook
} from "./chunk.GWAIV4QZ.js";
import {
  DB_NAME,
  getDataByKey
} from "./chunk.OUKOVVWC.js";
import {
  PlotToolbarController
} from "./chunk.4ZSHIBMI.js";
import {
  plot_toolbar_styles_default
} from "./chunk.TCH7E3IR.js";
import {
  require_plotly_min
} from "./chunk.PQBHJ7MX.js";
import {
  AuthController
} from "./chunk.7D6PZR3Q.js";
import {
  TerraMap
} from "./chunk.GOEIPUGK.js";
import {
  parseBoundingBox
} from "./chunk.6SEMGF6B.js";
import {
  h
} from "./chunk.6LTX6DHB.js";
import {
  TerraButton
} from "./chunk.ZHKSN4LM.js";
import {
  formatDate
} from "./chunk.NDNVCIB3.js";
import {
  TerraIcon
} from "./chunk.3K2V77UJ.js";
import {
  watch
} from "./chunk.IGV6JSNT.js";
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
  E,
  x
} from "./chunk.JQ2FCDGS.js";
import {
  __decorateClass,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __toESM,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/plot-toolbar/plot-toolbar.component.ts
init_dirname();
init_buffer();
init_process();
var Plotly = __toESM(require_plotly_min(), 1);
var _tooltipTimeout, _controller, _handleLocationMouseEnter, handleLocationMouseEnter_fn, _handleLocationMouseLeave, handleLocationMouseLeave_fn, _getLocationIcon, getLocationIcon_fn, _handleActiveMenuItem, handleActiveMenuItem_fn, _handleMenuLeave, handleMenuLeave_fn, _onShowOpacityChange, _onColorMapChange, _renderGeotiffPanel, renderGeotiffPanel_fn, _renderInfoPanel, renderInfoPanel_fn, _renderCitationPanel, renderCitationPanel_fn, _renderDownloadPanel, renderDownloadPanel_fn, _renderHelpPanel, renderHelpPanel_fn, _renderJupyterNotebookPanel, renderJupyterNotebookPanel_fn, _handleJupyterNotebookClick, handleJupyterNotebookClick_fn, _sendDataToJupyterNotebook, sendDataToJupyterNotebook_fn, _sendTimeSeriesDataToJupyterNotebook, sendTimeSeriesDataToJupyterNotebook_fn, _sendMapDataToJupyterNotebook, sendMapDataToJupyterNotebook_fn, _downloadPNG, downloadPNG_fn, _downloadCSV, downloadCSV_fn, _convertToCSV, convertToCSV_fn, _downloadGeotiff, downloadGeotiff_fn;
var TerraPlotToolbar = class extends TerraElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _handleLocationMouseEnter);
    __privateAdd(this, _handleLocationMouseLeave);
    __privateAdd(this, _getLocationIcon);
    __privateAdd(this, _handleActiveMenuItem);
    __privateAdd(this, _handleMenuLeave);
    __privateAdd(this, _renderGeotiffPanel);
    __privateAdd(this, _renderInfoPanel);
    __privateAdd(this, _renderCitationPanel);
    __privateAdd(this, _renderDownloadPanel);
    __privateAdd(this, _renderHelpPanel);
    __privateAdd(this, _renderJupyterNotebookPanel);
    __privateAdd(this, _handleJupyterNotebookClick);
    __privateAdd(this, _sendDataToJupyterNotebook);
    __privateAdd(this, _sendTimeSeriesDataToJupyterNotebook);
    __privateAdd(this, _sendMapDataToJupyterNotebook);
    __privateAdd(this, _downloadPNG);
    __privateAdd(this, _downloadCSV);
    __privateAdd(this, _convertToCSV);
    __privateAdd(this, _downloadGeotiff);
    this.showLocation = true;
    this.colormap = "viridis";
    this.opacity = 1;
    this.showCitation = false;
    this.activeMenuItem = null;
    this.showLocationTooltip = false;
    this.locationMapValue = [];
    __privateAdd(this, _tooltipTimeout, null);
    this.colormaps = [
      "jet",
      "hsv",
      "hot",
      "cool",
      "spring",
      "summer",
      "autumn",
      "winter",
      "bone",
      "copper",
      "greys",
      "YIGnBu",
      "greens",
      "YIOrRd",
      "bluered",
      "RdBu",
      "picnic",
      "rainbow",
      "portland",
      "blackbody",
      "earth",
      "electric",
      "viridis",
      "inferno",
      "magma",
      "plasma",
      "warm",
      "cool",
      "bathymetry",
      "cdom",
      "chlorophyll",
      "density",
      "fressurface-blue",
      "freesurface-red",
      "oxygen",
      "par",
      "phase",
      "salinity",
      "temperature",
      "turbidity",
      "velocity-blue",
      "velocity-green",
      "cubhelix"
    ];
    this.colorMapName = "density";
    this._authController = new AuthController(this);
    __privateAdd(this, _controller, new PlotToolbarController(this));
    __privateAdd(this, _onShowOpacityChange, (e2) => {
      this.opacity = parseFloat(e2.target.value);
      this.dispatchEvent(
        new CustomEvent("show-opacity-value", {
          detail: this.opacity,
          bubbles: true,
          composed: true
        })
      );
    });
    __privateAdd(this, _onColorMapChange, (e2) => {
      this.colorMapName = e2.target.value;
      this.dispatchEvent(
        new CustomEvent("show-color-map", {
          detail: this.colorMapName,
          bubbles: true,
          composed: true
        })
      );
    });
  }
  handleFocus(_oldValue, newValue) {
    if (newValue === null) {
      return;
    }
    this.menu.focus();
  }
  closeMenu() {
    this.activeMenuItem = null;
  }
  render() {
    const metadata = [
      this.catalogVariable.dataProductInstrumentShortName,
      this.catalogVariable.dataProductTimeInterval
    ].filter(Boolean).filter((value) => value.toLowerCase() !== "not applicable");
    return h(
      !this.catalogVariable ? x`<div class="spacer"></div>` : x` <header>
                      <div class="title-container">
                          <slot name="title">
                              <h2 class="title">
                                  ${this.catalogVariable.dataFieldLongName}
                              </h2>
                          </slot>
                          <slot name="subtitle">
                              <h3 class="subtitle">
                                  ${metadata.join(" \u2022 ")} •
                                  <a
                                      target="_blank"
                                      href="${this.catalogVariable.dataProductDescriptionUrl}"
                                      >[${this.catalogVariable.dataProductShortName}_${this.catalogVariable.dataProductVersion}]</a
                                  >
                                  ${this.showLocation ? x`• ${__privateMethod(this, _getLocationIcon, getLocationIcon_fn).call(this)}
                                            <span
                                                class="location-text"
                                                @mouseenter=${__privateMethod(this, _handleLocationMouseEnter, handleLocationMouseEnter_fn)}
                                                @mouseleave=${__privateMethod(this, _handleLocationMouseLeave, handleLocationMouseLeave_fn)}
                                                >${this.location.replace(
        /,/g,
        ", "
      )}</span
                                            >` : ""}
                              </h3>
                          </slot>
                      </div>

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

                          ${this.showCitation ? x`
                                    <terra-button
                                        circle
                                        outline
                                        aria-expanded=${this.activeMenuItem === "citation"}
                                        aria-controls="menu"
                                        aria-haspopup="true"
                                        class="toggle"
                                        @mouseenter=${__privateMethod(this, _handleActiveMenuItem, handleActiveMenuItem_fn)}
                                        data-menu-name="citation"
                                    >
                                        <span class="sr-only"
                                            >Citation for
                                            ${this.catalogVariable.dataFieldLongName}</span
                                        >

                                        <span
                                            style="font-weight: 500; font-size: 1.2em"
                                            >C</span
                                        >
                                    </terra-button>
                                ` : E}

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
                              outline
                              aria-expanded=${this.activeMenuItem === "jupyter"}
                              aria-controls="menu"
                              aria-haspopup="true"
                              class="toggle square-button"
                              variant="warning"
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

                          ${this.dataType == "geotiff" ? x`
                                    <terra-button
                                        circle
                                        outline
                                        aria-expanded=${this.activeMenuItem === "GeoTIFF"}
                                        aria-controls="menu"
                                        aria-haspopup="true"
                                        class="toggle"
                                        @mouseenter=${__privateMethod(this, _handleActiveMenuItem, handleActiveMenuItem_fn)}
                                        data-menu-name="GeoTIFF"
                                    >
                                        <terra-icon
                                            name="outline-cog-8-tooth"
                                            library="heroicons"
                                            font-size="1.5em"
                                        ></terra-icon>
                                    </terra-button>
                                ` : E}
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
                              ?hidden=${this.activeMenuItem !== "citation"}
                          >
                              ${__privateMethod(this, _renderCitationPanel, renderCitationPanel_fn).call(this)}
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

                          <li
                              role="menuitem"
                              ?hidden=${this.activeMenuItem !== "GeoTIFF"}
                          >
                              ${__privateMethod(this, _renderGeotiffPanel, renderGeotiffPanel_fn).call(this)}
                          </li>
                      </menu>

                      ${this.showLocationTooltip ? x`
                                <div class="location-tooltip">
                                    <terra-map
                                        .value=${this.locationMapValue}
                                        zoom="4"
                                        has-navigation="false"
                                        hide-bounding-box-selection="true"
                                        hide-point-selection="true"
                                        .staticMode=${true}
                                        style="width: 300px; height: 200px;"
                                    ></terra-map>
                                </div>
                            ` : ""}
                  </header>`
    );
  }
};
_tooltipTimeout = new WeakMap();
_controller = new WeakMap();
_handleLocationMouseEnter = new WeakSet();
handleLocationMouseEnter_fn = function() {
  if (this.location && this.location.trim()) {
    try {
      this.locationMapValue = parseBoundingBox(this.location.trim());
      __privateSet(this, _tooltipTimeout, window.setTimeout(() => {
        this.showLocationTooltip = true;
      }, 150));
    } catch (error) {
      console.warn("Failed to parse location for tooltip:", error);
      this.showLocationTooltip = false;
    }
  }
};
_handleLocationMouseLeave = new WeakSet();
handleLocationMouseLeave_fn = function() {
  if (__privateGet(this, _tooltipTimeout)) {
    clearTimeout(__privateGet(this, _tooltipTimeout));
    __privateSet(this, _tooltipTimeout, null);
  }
  this.showLocationTooltip = false;
};
_getLocationIcon = new WeakSet();
getLocationIcon_fn = function() {
  if (!this.location)
    return "";
  return x`<terra-icon
            name="outline-map-pin"
            library="heroicons"
            font-size="1em"
            class="location-icon"
            label="Point location"
        ></terra-icon>`;
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
_onShowOpacityChange = new WeakMap();
_onColorMapChange = new WeakMap();
_renderGeotiffPanel = new WeakSet();
renderGeotiffPanel_fn = function() {
  return x`
            <h3 class="sr-only">GeoTIFF Settings</h3>

            ${this.dataType === "geotiff" ? x`
                      <p>Select opacity and apply colormaps</p>

                      <label>
                          Layer opacity
                          <input
                              type="range"
                              min="0"
                              max="1"
                              step="0.01"
                              .value=${String(this.opacity)}
                              @change=${__privateGet(this, _onShowOpacityChange)}
                          />
                          <span id="opacity-output">${this.opacity.toFixed(2)}</span>
                      </label>

                      <label>
                          ColorMap:
                          <select
                              id="colormap-select"
                              @change=${__privateGet(this, _onColorMapChange)}
                          >
                              ${this.colormaps.map(
    (cm) => x` <option
                                          value="${cm}"
                                          ?selected=${cm === this.colorMapName}
                                      >
                                          ${cm}
                                      </option>`
  )}
                          </select>
                      </label>
                  ` : E}
        `;
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
_renderCitationPanel = new WeakSet();
renderCitationPanel_fn = function() {
  var _a, _b;
  const citation = (_a = __privateGet(this, _controller).collectionCitation) == null ? void 0 : _a.collectionCitations[0];
  if (!citation) {
    return x`<div class="spacer"></div>`;
  }
  return x`
            <h3 class="sr-only">Citation</h3>

            ${this.applicationCitation ? x`
                      <p>
                          Please cite both the data used and the application itself.
                      </p>
                  ` : E}

            <p>
                <strong>Data Citation</strong>
            </p>

            <p>
                ${citation == null ? void 0 : citation.creator} (${formatDate(citation == null ? void 0 : citation.releaseDate, "yyyy")}),
                ${citation == null ? void 0 : citation.title}, Edited by ${citation == null ? void 0 : citation.editor},
                ${citation == null ? void 0 : citation.releasePlace}, ${citation == null ? void 0 : citation.publisher},
                ${(_b = __privateGet(this, _controller).collectionCitation) == null ? void 0 : _b.doi.doi}
            </p>

            ${this.applicationCitation ? x`
                      <p>
                          <strong>Application Citation</strong>
                      </p>

                      <p>${this.applicationCitation}</p>
                  ` : E}
        `;
};
_renderDownloadPanel = new WeakSet();
renderDownloadPanel_fn = function() {
  return x`
            <h3 class="sr-only">Download Options</h3>

            ${this.dataType === "geotiff" ? x`
                      <p>
                          This plot can be downloaded as a
                          <abbr title="Geotiff">GeoTIFF</abbr>
                          file
                      </p>
                  ` : x`
                      <p>
                          This plot can be downloaded as either a
                          <abbr title="Portable Network Graphic">PNG</abbr>
                          image or
                          <abbr title="Comma-Separated Value">CSV</abbr>
                          data.
                      </p>
                  `}
            ${this.dataType === "geotiff" ? x`
                      <terra-button
                          outline
                          variant="default"
                          @click=${__privateMethod(this, _downloadGeotiff, downloadGeotiff_fn)}
                      >
                          <span class="sr-only">Download Plot Data as </span>
                          GeoTIFF
                          <terra-icon
                              slot="prefix"
                              name="outline-photo"
                              library="heroicons"
                              font-size="1.5em"
                          ></terra-icon>
                      </terra-button>
                  ` : x`
                      <terra-button
                          outline
                          variant="default"
                          @click=${__privateMethod(this, _downloadPNG, downloadPNG_fn)}
                      >
                          <span class="sr-only">Download Plot Data as </span>
                          PNG
                          <terra-icon
                              slot="prefix"
                              name="outline-photo"
                              library="heroicons"
                              font-size="1.5em"
                          ></terra-icon>
                      </terra-button>

                      <terra-button
                          outline
                          variant="default"
                          @click=${__privateMethod(this, _downloadCSV, downloadCSV_fn)}
                      >
                          <span class="sr-only">Download Plot Data as </span>
                          CSV
                          <terra-icon
                              slot="prefix"
                              name="outline-document-chart-bar"
                              library="heroicons"
                              font-size="1.5em"
                          ></terra-icon>
                      </terra-button>
                  `}
        `;
};
_renderHelpPanel = new WeakSet();
renderHelpPanel_fn = function() {
  return x`
            <h3 class="sr-only">Help Links</h3>
            <ul>
                <slot name="help-links"></slot>
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
  const handleMessage = (event) => {
    var _a;
    if (((_a = event.data) == null ? void 0 : _a.type) !== "jupyterlite-ready") {
      return;
    }
    console.log("JupyterLite is ready!");
    __privateMethod(this, _sendDataToJupyterNotebook, sendDataToJupyterNotebook_fn).call(this, jupyterWindow);
  };
  window.addEventListener("message", handleMessage.bind(this), { once: true });
};
_sendDataToJupyterNotebook = new WeakSet();
sendDataToJupyterNotebook_fn = function(jupyterWindow) {
  if (this.dataType === "geotiff") {
    __privateMethod(this, _sendMapDataToJupyterNotebook, sendMapDataToJupyterNotebook_fn).call(this, jupyterWindow);
  } else {
    __privateMethod(this, _sendTimeSeriesDataToJupyterNotebook, sendTimeSeriesDataToJupyterNotebook_fn).call(this, jupyterWindow);
  }
};
_sendTimeSeriesDataToJupyterNotebook = new WeakSet();
sendTimeSeriesDataToJupyterNotebook_fn = function(jupyterWindow) {
  console.log("Sending time series data to JupyterLite...");
  getDataByKey(
    "time-series" /* TIME_SERIES */,
    this.cacheKey
  ).then((timeSeriesData) => {
    setTimeout(() => {
      var _a;
      const notebook = getTimeSeriesNotebook(this);
      jupyterWindow.postMessage(
        {
          type: "load-notebook",
          filename: `${encodeURIComponent((_a = this.variableEntryId) != null ? _a : "plot")}-timeseries.ipynb`,
          notebook,
          timeSeriesData,
          databaseName: DB_NAME,
          storeName: "time-series" /* TIME_SERIES */,
          bearerToken: this.bearerToken
        },
        "*"
      );
    }, 500);
  });
};
_sendMapDataToJupyterNotebook = new WeakSet();
sendMapDataToJupyterNotebook_fn = function(jupyterWindow) {
  console.log("Sending map data to JupyterLite...");
  getDataByKey("time-average-map" /* TIME_AVERAGE_MAP */, this.cacheKey).then(
    (blob) => {
      setTimeout(() => {
        var _a;
        const notebook = getTimeAveragedMapNotebook(this);
        jupyterWindow.postMessage(
          {
            type: "load-notebook",
            filename: `${encodeURIComponent((_a = this.variableEntryId) != null ? _a : "plot")}-map.ipynb`,
            notebook,
            blob,
            databaseName: DB_NAME,
            storeName: "time-average-map" /* TIME_AVERAGE_MAP */,
            token: this.bearerToken
          },
          "*"
        );
      }, 500);
    }
  );
};
_downloadPNG = new WeakSet();
downloadPNG_fn = function(_event) {
  Plotly.downloadImage(this.plot.base, {
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
  if (!Array.isArray(this.timeSeriesData)) {
    return;
  }
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
_downloadGeotiff = new WeakSet();
downloadGeotiff_fn = function() {
  if (!this.timeSeriesData || !(this.timeSeriesData instanceof Blob)) {
    console.warn("No GeoTIFF available to download.");
    return;
  }
  const url = URL.createObjectURL(this.timeSeriesData);
  const a = document.createElement("a");
  const locationStr = `${this.location.replace(/,/g, "_")}`;
  let file_name = `${this.variableEntryId}_${this.startDate}-${this.endDate}_${locationStr}.tif`;
  a.href = url;
  a.download = `${file_name}`;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  console.log("Successfully downloaded tiff file...");
};
TerraPlotToolbar.styles = [component_styles_default, plot_toolbar_styles_default];
TerraPlotToolbar.dependencies = {
  "terra-icon": TerraIcon,
  "terra-button": TerraButton,
  "terra-map": TerraMap
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
  n({ type: Boolean, attribute: "show-location" })
], TerraPlotToolbar.prototype, "showLocation", 2);
__decorateClass([
  n({ type: String })
], TerraPlotToolbar.prototype, "colormap", 2);
__decorateClass([
  n({ type: Number })
], TerraPlotToolbar.prototype, "opacity", 2);
__decorateClass([
  n({ type: Boolean, attribute: "show-citation" })
], TerraPlotToolbar.prototype, "showCitation", 2);
__decorateClass([
  n({ attribute: "application-citation" })
], TerraPlotToolbar.prototype, "applicationCitation", 2);
__decorateClass([
  r()
], TerraPlotToolbar.prototype, "activeMenuItem", 2);
__decorateClass([
  r()
], TerraPlotToolbar.prototype, "showLocationTooltip", 2);
__decorateClass([
  r()
], TerraPlotToolbar.prototype, "locationMapValue", 2);
__decorateClass([
  r()
], TerraPlotToolbar.prototype, "colormaps", 2);
__decorateClass([
  r()
], TerraPlotToolbar.prototype, "colorMapName", 2);
__decorateClass([
  e("#menu")
], TerraPlotToolbar.prototype, "menu", 2);
__decorateClass([
  watch("activeMenuItem")
], TerraPlotToolbar.prototype, "handleFocus", 1);

export {
  TerraPlotToolbar
};
