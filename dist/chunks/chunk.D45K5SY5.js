import {
  defaultSubsetFileMimeType,
  getFriendlyNameForMimeType
} from "./chunk.SF6MBAEP.js";
import {
  TerraSpatialPicker
} from "./chunk.SD4V763F.js";
import {
  DataSubsetterController
} from "./chunk.XFYLM4YW.js";
import {
  data_subsetter_styles_default
} from "./chunk.4DDTNGKM.js";
import {
  TerraDatePicker
} from "./chunk.YDL3OEP3.js";
import {
  TerraAccordion
} from "./chunk.7KO2VJWZ.js";
import {
  TerraIcon
} from "./chunk.V27A5DRW.js";
import {
  getBasePath
} from "./chunk.NQKBKXPW.js";
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
  T,
  x
} from "./chunk.PQFHJHNO.js";
import {
  __decorateClass,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __spreadProps,
  __spreadValues
} from "./chunk.6JHIJHTB.js";

// src/components/data-subsetter/data-subsetter.component.ts
var _controller, _renderSubsetOptions, renderSubsetOptions_fn, _renderSearchForCollection, renderSearchForCollection_fn, _renderOutputFormatSelection, renderOutputFormatSelection_fn, _renderDateRangeSelection, renderDateRangeSelection_fn, _handleStartDateChange, _handleEndDateChange, _resetDateRangeSelection, _resetFormatSelection, _getCollectionDateRange, getCollectionDateRange_fn, _renderSpatialSelection, renderSpatialSelection_fn, _handleSpatialChange, _resetSpatialSelection, _renderVariableSelection, renderVariableSelection_fn, _buildVariableTree, buildVariableTree_fn, _renderVariableTree, renderVariableTree_fn, _getAllGroupPaths, getAllGroupPaths_fn, _toggleGroupExpand, toggleGroupExpand_fn, _toggleExpandCollapseAll, toggleExpandCollapseAll_fn, _toggleVariableSelection, toggleVariableSelection_fn, _markFieldTouched, markFieldTouched_fn, _resetVariableSelection, _renderJobStatus, renderJobStatus_fn, _renderSelectedParams, renderSelectedParams_fn, _cancelJob, cancelJob_fn, _getData, getData_fn, _touchAllFields, touchAllFields_fn, _numberOfFilesFoundEstimate, numberOfFilesFoundEstimate_fn, _getDocumentationLinks, getDocumentationLinks_fn, _getDataLinks, getDataLinks_fn, _hasAtLeastOneSubsetOption, hasAtLeastOneSubsetOption_fn, _hasSpatialSubset, hasSpatialSubset_fn, _renderJobMessage, renderJobMessage_fn, _estimateJobSize, estimateJobSize_fn, _refineParameters, refineParameters_fn, _toggleDownloadMenu, toggleDownloadMenu_fn, _downloadLinksAsTxt, downloadLinksAsTxt_fn, _downloadPythonScript, downloadPythonScript_fn, _downloadEarthdataDownload, downloadEarthdataDownload_fn, _handleClickOutside, handleClickOutside_fn, _handleJupyterNotebookClick, handleJupyterNotebookClick_fn;
var TerraDataSubsetter = class extends TerraElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _renderSubsetOptions);
    __privateAdd(this, _renderSearchForCollection);
    __privateAdd(this, _renderOutputFormatSelection);
    __privateAdd(this, _renderDateRangeSelection);
    __privateAdd(this, _getCollectionDateRange);
    __privateAdd(this, _renderSpatialSelection);
    __privateAdd(this, _renderVariableSelection);
    __privateAdd(this, _buildVariableTree);
    __privateAdd(this, _renderVariableTree);
    __privateAdd(this, _getAllGroupPaths);
    __privateAdd(this, _toggleGroupExpand);
    __privateAdd(this, _toggleExpandCollapseAll);
    __privateAdd(this, _toggleVariableSelection);
    __privateAdd(this, _markFieldTouched);
    __privateAdd(this, _renderJobStatus);
    __privateAdd(this, _renderSelectedParams);
    __privateAdd(this, _cancelJob);
    __privateAdd(this, _getData);
    __privateAdd(this, _touchAllFields);
    __privateAdd(this, _numberOfFilesFoundEstimate);
    __privateAdd(this, _getDocumentationLinks);
    __privateAdd(this, _getDataLinks);
    __privateAdd(this, _hasAtLeastOneSubsetOption);
    __privateAdd(this, _hasSpatialSubset);
    __privateAdd(this, _renderJobMessage);
    __privateAdd(this, _estimateJobSize);
    __privateAdd(this, _refineParameters);
    __privateAdd(this, _toggleDownloadMenu);
    __privateAdd(this, _downloadLinksAsTxt);
    __privateAdd(this, _downloadPythonScript);
    __privateAdd(this, _downloadEarthdataDownload);
    __privateAdd(this, _handleClickOutside);
    __privateAdd(this, _handleJupyterNotebookClick);
    this.showCollectionSearch = true;
    this.selectedVariables = [];
    this.expandedVariableGroups = /* @__PURE__ */ new Set();
    this.touchedFields = /* @__PURE__ */ new Set();
    this.spatialSelection = null;
    this.selectedDateRange = {
      startDate: null,
      endDate: null
    };
    this.selectedFormat = defaultSubsetFileMimeType;
    this.cancelingGetData = false;
    this.selectedTab = "web-links";
    this.refineParameters = false;
    this.showDownloadMenu = false;
    __privateAdd(this, _controller, new DataSubsetterController(this));
    __privateAdd(this, _handleStartDateChange, (e2) => {
      __privateMethod(this, _markFieldTouched, markFieldTouched_fn).call(this, "date");
      const datePicker = e2.currentTarget;
      this.selectedDateRange = __spreadProps(__spreadValues({}, this.selectedDateRange), {
        startDate: datePicker.selectedDates.startDate
      });
    });
    __privateAdd(this, _handleEndDateChange, (e2) => {
      __privateMethod(this, _markFieldTouched, markFieldTouched_fn).call(this, "date");
      const datePicker = e2.currentTarget;
      this.selectedDateRange = __spreadProps(__spreadValues({}, this.selectedDateRange), {
        endDate: datePicker.selectedDates.startDate
      });
    });
    __privateAdd(this, _resetDateRangeSelection, () => {
      this.selectedDateRange = { startDate: null, endDate: null };
    });
    __privateAdd(this, _resetFormatSelection, () => {
      this.selectedFormat = defaultSubsetFileMimeType;
    });
    __privateAdd(this, _handleSpatialChange, (e2) => {
      var _a, _b;
      __privateMethod(this, _markFieldTouched, markFieldTouched_fn).call(this, "spatial");
      const round2 = (n2) => parseFloat(Number(n2).toFixed(2));
      if ((_a = e2.detail) == null ? void 0 : _a.bounds) {
        this.spatialSelection = {
          e: round2(e2.detail.bounds._northEast.lng),
          n: round2(e2.detail.bounds._northEast.lat),
          w: round2(e2.detail.bounds._southWest.lng),
          s: round2(e2.detail.bounds._southWest.lat)
        };
      } else if ((_b = e2.detail) == null ? void 0 : _b.latLng) {
        this.spatialSelection = e2.detail.latLng;
      } else {
        this.spatialSelection = null;
      }
    });
    __privateAdd(this, _resetSpatialSelection, () => {
      this.spatialSelection = null;
    });
    __privateAdd(this, _resetVariableSelection, () => {
      this.selectedVariables = [];
    });
  }
  firstUpdated() {
    if (this.collectionEntryId) {
      this.showCollectionSearch = false;
    }
    if (this.jobId) {
      __privateGet(this, _controller).fetchJobByID(this.jobId);
    }
    document.addEventListener("click", __privateMethod(this, _handleClickOutside, handleClickOutside_fn).bind(this));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", __privateMethod(this, _handleClickOutside, handleClickOutside_fn).bind(this));
  }
  collectionChanged() {
    const { startDate, endDate } = __privateMethod(this, _getCollectionDateRange, getCollectionDateRange_fn).call(this);
    if (startDate && endDate) {
      const end = new Date(endDate);
      const start = new Date(startDate);
      const sevenDaysAgo = new Date(end);
      sevenDaysAgo.setDate(end.getDate() - 6);
      const defaultStart = sevenDaysAgo > start ? sevenDaysAgo : start;
      this.selectedDateRange = {
        startDate: defaultStart.toISOString().slice(0, 10),
        endDate
      };
    } else {
      this.selectedDateRange = { startDate, endDate };
    }
  }
  render() {
    var _a, _b, _c;
    return x`
            <div class="container">
                <div class="header">
                    <h1>
                        <svg
                            class="download-icon"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                        </svg>
                        ${(_c = (_b = (_a = this.collectionWithServices) == null ? void 0 : _a.collection) == null ? void 0 : _b.EntryTitle) != null ? _c : x`Download Data`}
                    </h1>
                    <button class="close-btn" onclick="closeDialog()">×</button>
                </div>

                ${__privateGet(this, _controller).currentJob && !this.refineParameters ? __privateMethod(this, _renderJobStatus, renderJobStatus_fn).call(this) : __privateMethod(this, _renderSubsetOptions, renderSubsetOptions_fn).call(this)}
            </div>
        `;
  }
};
_controller = new WeakMap();
_renderSubsetOptions = new WeakSet();
renderSubsetOptions_fn = function() {
  var _a, _b, _c, _d;
  const estimates = __privateMethod(this, _estimateJobSize, estimateJobSize_fn).call(this);
  return x`
            ${estimates ? x`<div
                      class="size-info ${estimates.links >= 150 ? "warning" : "neutral"}"
                  >
                      <h2>Estimated size of results</h2>
                      <div class="size-stats">
                          ${estimates.days.toLocaleString()} days,
                          ${estimates.links.toLocaleString()} links
                      </div>
                      ${estimates.links >= 150 ? x`<div class="size-warning">
                                You are about to retrieve
                                ${estimates.links.toLocaleString()} file links from
                                the archive. You may
                                <strong>speed up the request</strong> by limiting the
                                scope of your search.
                            </div>` : T}
                  </div>` : T}
            ${this.showCollectionSearch ? x`
                      <div class="section">
                          <h2 class="section-title">
                              Select Data Collection
                              <span class="help-icon">?</span>
                          </h2>

                          ${__privateMethod(this, _renderSearchForCollection, renderSearchForCollection_fn).call(this)}
                      </div>
                  ` : T}
            ${__privateMethod(this, _hasAtLeastOneSubsetOption, hasAtLeastOneSubsetOption_fn).call(this) ? x`
                      <div class="section">
                          <h2 class="section-title">
                              Method Options
                              <span class="help-icon">?</span>
                          </h2>

                          ${((_a = this.collectionWithServices) == null ? void 0 : _a.temporalSubset) ? __privateMethod(this, _renderDateRangeSelection, renderDateRangeSelection_fn).call(this) : T}
                          ${__privateMethod(this, _hasSpatialSubset, hasSpatialSubset_fn).call(this) ? __privateMethod(this, _renderSpatialSelection, renderSpatialSelection_fn).call(this) : T}
                          ${((_b = this.collectionWithServices) == null ? void 0 : _b.variableSubset) ? __privateMethod(this, _renderVariableSelection, renderVariableSelection_fn).call(this) : T}
                      </div>
                  ` : T}
            ${((_d = (_c = this.collectionWithServices) == null ? void 0 : _c.outputFormats) == null ? void 0 : _d.length) ? x`
                      <div class="section">
                          <h2 class="section-title">
                              Output Format
                              <span class="help-icon">?</span>
                          </h2>

                          ${__privateMethod(this, _renderOutputFormatSelection, renderOutputFormatSelection_fn).call(this)}
                      </div>
                  ` : T}

            <div class="footer">
                <button class="btn btn-secondary">Reset All</button>
                <button class="btn btn-primary" @click=${__privateMethod(this, _getData, getData_fn)}>
                    Get Data
                </button>
            </div>
        `;
};
_renderSearchForCollection = new WeakSet();
renderSearchForCollection_fn = function() {
  return x`
            <terra-accordion open>
                <div slot="summary">
                    <span class="accordion-title">Data Collection:</span>
                </div>

                <div
                    slot="summary-right"
                    style="display: flex; align-items: center; gap: 10px"
                >
                    <span class="accordion-value" id="selected-collection-display"
                        >Please select a collection</span
                    >
                    <button class="reset-btn">Reset</button>
                </div>

                <!--
                        <div class="search-tabs-mini">
                            <button
                                class="search-tab-mini active"
                                onclick="switchSearchType('all')"
                            >
                                All
                            </button>
                            <button
                                class="search-tab-mini"
                                onclick="switchSearchType('collections')"
                            >
                                Collections
                            </button>
                            <button
                                class="search-tab-mini"
                                onclick="switchSearchType('variables')"
                            >
                                Variables
                            </button>
                        </div>
                        -->

                <div class="search-container-mini">
                    <input
                        type="text"
                        class="search-input-mini"
                        id="search-input"
                        placeholder="Search all types of resources"
                        onkeypress="handleSearchKeypress(event)"
                    />
                    <button class="search-button-mini" onclick="performSearch()">
                        <svg
                            class="search-icon-mini"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                            />
                        </svg>
                        Search
                    </button>
                </div>

                <!--
                        <div class="quick-links-mini">
                            <a
                                href="#"
                                class="quick-link-mini"
                                onclick="quickSearch('GPM')"
                                >GPM Precipitation</a
                            >
                            <a
                                href="#"
                                class="quick-link-mini"
                                onclick="quickSearch('MODIS')"
                                >MODIS Data</a
                            >
                            <a
                                href="#"
                                class="quick-link-mini"
                                onclick="quickSearch('Landsat')"
                                >Landsat Imagery</a
                            >
                            <a
                                href="#"
                                class="quick-link-mini"
                                onclick="quickSearch('AIRS')"
                                >Atmospheric Data</a
                            >
                        </div>
                        -->

                <div
                    id="search-results-section"
                    class="search-results-section"
                    style="display: none"
                >
                    <div class="results-header-mini">
                        <div class="results-count-mini" id="results-count">
                            Found 0 results
                        </div>
                    </div>

                    <div id="results-container-mini" class="results-container-mini">
                        <!-- Results will be populated here -->
                    </div>

                    <div id="loading-mini" class="loading-mini" style="display: none">
                        <div class="spinner-mini"></div>
                        <div>Searching NASA CMR...</div>
                    </div>

                    <div
                        id="no-results-mini"
                        class="no-results-mini"
                        style="display: none"
                    >
                        <p>
                            No results found. Try adjusting your search terms or
                            browse the quick links above.
                        </p>
                    </div>
                </div>
            </terra-accordion>
        `;
};
_renderOutputFormatSelection = new WeakSet();
renderOutputFormatSelection_fn = function() {
  return x`
            <terra-accordion>
                <div slot="summary">
                    <span class="accordion-title">File Format:</span>
                </div>

                <div
                    slot="summary-right"
                    style="display: flex; align-items: center; gap: 10px;"
                >
                    <span>${getFriendlyNameForMimeType(this.selectedFormat)}</span>

                    <button class="reset-btn" @click=${__privateGet(this, _resetFormatSelection)}>
                        Reset
                    </button>
                </div>

                <div class="accordion-content" style="margin-top: 12px;">
                    ${(() => {
    var _a;
    const uniqueFormats = Array.from(
      new Set(((_a = this.collectionWithServices) == null ? void 0 : _a.outputFormats) || [])
    );
    return uniqueFormats.map(
      (format) => x`
                                <label
                                    style="display: flex; align-items: center; gap: 8px; padding: 5px;"
                                >
                                    <input
                                        type="radio"
                                        name="output-format"
                                        value="${format}"
                                        .checked=${this.selectedFormat === format}
                                        @change=${() => this.selectedFormat = format}
                                    />
                                    ${getFriendlyNameForMimeType(format)}
                                </label>
                            `
    );
  })()}
                </div>
            </terra-accordion>
        `;
};
_renderDateRangeSelection = new WeakSet();
renderDateRangeSelection_fn = function() {
  var _a, _b;
  const { startDate: defaultStartDate, endDate: defaultEndDate } = __privateMethod(this, _getCollectionDateRange, getCollectionDateRange_fn).call(this);
  const startDate = (_a = this.selectedDateRange.startDate) != null ? _a : defaultStartDate;
  const endDate = (_b = this.selectedDateRange.endDate) != null ? _b : defaultEndDate;
  const showError = this.touchedFields.has("date") && (!this.selectedDateRange.startDate || !this.selectedDateRange.endDate);
  return x`
            <terra-accordion>
                <div slot="summary">
                    <span class="accordion-title">Refine Date Range:</span>
                </div>

                <div
                    slot="summary-right"
                    style="display: flex; align-items: center; gap: 10px;"
                >
                    ${showError ? x`<span class="accordion-value error"
                              >Please select a date range</span
                          >` : this.touchedFields.has("date") && startDate && endDate ? x`<span class="accordion-value"
                                >${startDate} to ${endDate}</span
                            >` : T}
                    <button class="reset-btn" @click=${__privateGet(this, _resetDateRangeSelection)}>
                        Reset
                    </button>
                </div>

                <div style="display: flex; gap: 16px;">
                    <terra-date-picker
                        label="Start Date"
                        allow-input
                        class="w-full"
                        .minDate=${defaultStartDate}
                        .maxDate=${endDate}
                        .defaultDate=${startDate}
                        @terra-change=${__privateGet(this, _handleStartDateChange)}
                    ></terra-date-picker>
                    <terra-date-picker
                        label="End Date"
                        allow-input
                        class="w-full"
                        .minDate=${startDate}
                        .maxDate=${defaultEndDate}
                        .defaultDate=${endDate}
                        @terra-change=${__privateGet(this, _handleEndDateChange)}
                    ></terra-date-picker>
                </div>

                <div
                    style="display: flex; gap: 16px; margin-top: 15px; color: #31708f;"
                >
                    <span
                        ><strong>Available Range:</strong> ${defaultStartDate} to
                        ${defaultEndDate}</span
                    >
                    <span
                        ><strong>Note:</strong> All dates and times are in UTC.</span
                    >
                </div>
            </terra-accordion>
        `;
};
_handleStartDateChange = new WeakMap();
_handleEndDateChange = new WeakMap();
_resetDateRangeSelection = new WeakMap();
_resetFormatSelection = new WeakMap();
_getCollectionDateRange = new WeakSet();
getCollectionDateRange_fn = function() {
  var _a, _b;
  const temporalExtents = (_b = (_a = this.collectionWithServices) == null ? void 0 : _a.collection) == null ? void 0 : _b.TemporalExtents;
  if (!temporalExtents || !temporalExtents.length)
    return {
      startDate: null,
      endDate: null
    };
  let minStart = null;
  let maxEnd = null;
  const today = /* @__PURE__ */ new Date();
  for (const temporal of temporalExtents) {
    for (const range of temporal.RangeDateTimes) {
      const start = new Date(range.BeginningDateTime);
      let end;
      if (temporal.EndsAtPresentFlag || !range.EndingDateTime) {
        end = today;
      } else {
        end = new Date(range.EndingDateTime);
      }
      if (!minStart || start < minStart)
        minStart = start;
      if (!maxEnd || end > maxEnd)
        maxEnd = end;
    }
  }
  return {
    startDate: minStart ? minStart.toISOString().slice(0, 10) : null,
    endDate: maxEnd ? maxEnd.toISOString().slice(0, 10) : null
  };
};
_renderSpatialSelection = new WeakSet();
renderSpatialSelection_fn = function() {
  var _a, _b, _c, _d, _e, _f;
  const showError = this.touchedFields.has("spatial") && !this.spatialSelection;
  let boundingRects = (_e = (_d = (_c = (_b = (_a = this.collectionWithServices) == null ? void 0 : _a.collection) == null ? void 0 : _b.SpatialExtent) == null ? void 0 : _c.HorizontalSpatialDomain) == null ? void 0 : _d.Geometry) == null ? void 0 : _e.BoundingRectangles;
  if (boundingRects && !Array.isArray(boundingRects)) {
    boundingRects = [boundingRects];
  }
  return x`
            <terra-accordion>
                <div slot="summary">
                    <span class="accordion-title">Refine Region:</span>
                </div>

                <div
                    slot="summary-right"
                    style="display: flex; align-items: center; gap: 10px;"
                >
                    ${showError ? x`<span class="accordion-value error"
                              >Please select a region</span
                          >` : this.spatialSelection && "w" in this.spatialSelection ? x`<span class="accordion-value"
                                >${this.spatialSelection.w},${this.spatialSelection.s},${this.spatialSelection.e},${this.spatialSelection.n}</span
                            >` : this.spatialSelection && "lat" in this.spatialSelection && "lng" in this.spatialSelection ? x`<span class="accordion-value"
                                  >${this.spatialSelection.lat},${this.spatialSelection.lng}</span
                              >` : T}
                    <button class="reset-btn" @click=${__privateGet(this, _resetSpatialSelection)}>
                        Reset
                    </button>
                </div>
                <div class="accordion-content">
                    <terra-spatial-picker
                        part="spatial-picker"
                        inline
                        hide-label
                        has-shape-selector
                        hide-point-selection
                        .initialValue=${(_f = this.spatialSelection) != null ? _f : ""}
                        @terra-map-change=${__privateGet(this, _handleSpatialChange)}
                    ></terra-spatial-picker>
                    ${boundingRects && Array.isArray(boundingRects) && boundingRects.length ? x`<div
                              style="display: flex; gap: 16px; margin-top: 15px; color: #31708f;"
                          >
                              ${boundingRects.map(
    (rect) => x`<div>
                                          <strong>Available Range:</strong>
                                          ${rect.WestBoundingCoordinate},
                                          ${rect.SouthBoundingCoordinate},
                                          ${rect.EastBoundingCoordinate},
                                          ${rect.NorthBoundingCoordinate}
                                      </div>`
  )}
                          </div>` : T}
                </div>
            </terra-accordion>
        `;
};
_handleSpatialChange = new WeakMap();
_resetSpatialSelection = new WeakMap();
_renderVariableSelection = new WeakSet();
renderVariableSelection_fn = function() {
  var _a;
  const variables = ((_a = this.collectionWithServices) == null ? void 0 : _a.variables) || [];
  const showError = this.touchedFields.has("variables") && this.selectedVariables.length === 0;
  const tree = __privateMethod(this, _buildVariableTree, buildVariableTree_fn).call(this, variables);
  const allGroups = __privateMethod(this, _getAllGroupPaths, getAllGroupPaths_fn).call(this, tree);
  const allExpanded = allGroups.length > 0 && allGroups.every((g) => this.expandedVariableGroups.has(g));
  return x`
            <terra-accordion>
                <div slot="summary">
                    <span class="accordion-title">Select Variables:</span>
                </div>
                <div
                    slot="summary-right"
                    style="display: flex; align-items: center; gap: 10px;"
                >
                    ${showError ? x`<span class="accordion-value error"
                              >Please select at least one variable</span
                          >` : this.selectedVariables.length ? x`<span class="accordion-value"
                                >${this.selectedVariables.length} selected</span
                            >` : T}

                    <button class="reset-btn" @click=${__privateGet(this, _resetVariableSelection)}>
                        Reset
                    </button>
                </div>
                <div class="accordion-content">
                    <button
                        class="reset-btn"
                        style="margin-bottom: 10px;"
                        @click=${() => __privateMethod(this, _toggleExpandCollapseAll, toggleExpandCollapseAll_fn).call(this, tree)}
                    >
                        ${allExpanded ? "Collapse Tree" : "Expand Tree"}
                    </button>
                    ${variables.length === 0 ? x`<p style="color: #666; font-style: italic;">
                              No variables available for this collection.
                          </p>` : __privateMethod(this, _renderVariableTree, renderVariableTree_fn).call(this, tree, [])}
                </div>
            </terra-accordion>
        `;
};
_buildVariableTree = new WeakSet();
buildVariableTree_fn = function(variables) {
  const root = {};
  for (const v of variables) {
    const parts = v.name.split("/");
    let node = root;
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (!node[part])
        node[part] = { __children: {}, __isLeaf: false };
      if (i === parts.length - 1) {
        node[part].__isLeaf = true;
        node[part].__variable = v;
      }
      node = node[part].__children;
    }
  }
  return root;
};
_renderVariableTree = new WeakSet();
renderVariableTree_fn = function(node, path) {
  return x`
            <div style="margin-left: ${path.length * 20}px;">
                ${Object.entries(node).map(([key, value]) => {
    const groupPath = [...path, key].join("/");
    if (value.__isLeaf) {
      return x`
                            <div class="option-row">
                                <label class="checkbox-option">
                                    <input
                                        type="checkbox"
                                        .checked=${this.selectedVariables.some(
        (v) => v.name === value.__variable.name
      )}
                                        @change=${(e2) => __privateMethod(this, _toggleVariableSelection, toggleVariableSelection_fn).call(this, e2, value.__variable)}
                                    />
                                    <span>${key}</span>
                                </label>
                            </div>
                        `;
    } else {
      const expanded = this.expandedVariableGroups.has(groupPath);
      return x`
                            <div class="option-row" style="align-items: flex-start;">
                                <span
                                    style="cursor: pointer; display: flex; align-items: center;"
                                    @click=${() => __privateMethod(this, _toggleGroupExpand, toggleGroupExpand_fn).call(this, groupPath)}
                                >
                                    <terra-icon
                                        library="heroicons"
                                        name="${expanded ? "outline-minus-circle" : "outline-plus-circle"}"
                                        style="margin-right: 4px;"
                                    ></terra-icon>
                                    <span style="font-weight: 500;">${key}</span>
                                </span>
                            </div>
                            ${expanded ? __privateMethod(this, _renderVariableTree, renderVariableTree_fn).call(this, value.__children, [
        ...path,
        key
      ]) : ""}
                        `;
    }
  })}
            </div>
        `;
};
_getAllGroupPaths = new WeakSet();
getAllGroupPaths_fn = function(node, path = []) {
  let groups = [];
  for (const [key, value] of Object.entries(node)) {
    if (!value.__isLeaf) {
      const groupPath = [...path, key].join("/");
      groups.push(groupPath);
      groups = groups.concat(
        __privateMethod(this, _getAllGroupPaths, getAllGroupPaths_fn).call(this, value.__children, [...path, key])
      );
    }
  }
  return groups;
};
_toggleGroupExpand = new WeakSet();
toggleGroupExpand_fn = function(groupPath) {
  const set = new Set(this.expandedVariableGroups);
  if (set.has(groupPath)) {
    set.delete(groupPath);
  } else {
    set.add(groupPath);
  }
  this.expandedVariableGroups = set;
};
_toggleExpandCollapseAll = new WeakSet();
toggleExpandCollapseAll_fn = function(tree) {
  const allGroups = __privateMethod(this, _getAllGroupPaths, getAllGroupPaths_fn).call(this, tree);
  const allExpanded = allGroups.length > 0 && allGroups.every((g) => this.expandedVariableGroups.has(g));
  if (allExpanded) {
    this.expandedVariableGroups = /* @__PURE__ */ new Set();
  } else {
    this.expandedVariableGroups = new Set(allGroups);
  }
};
_toggleVariableSelection = new WeakSet();
toggleVariableSelection_fn = function(e2, variable) {
  __privateMethod(this, _markFieldTouched, markFieldTouched_fn).call(this, "variables");
  const checked = e2.target.checked;
  if (checked) {
    if (!this.selectedVariables.some((v) => v.name === variable.name)) {
      this.selectedVariables = [...this.selectedVariables, variable];
    }
  } else {
    this.selectedVariables = this.selectedVariables.filter(
      (v) => v.name !== variable.name
    );
  }
};
_markFieldTouched = new WeakSet();
markFieldTouched_fn = function(field) {
  this.touchedFields = new Set(this.touchedFields).add(field);
};
_resetVariableSelection = new WeakMap();
_renderJobStatus = new WeakSet();
renderJobStatus_fn = function() {
  var _a, _b;
  if (!((_a = __privateGet(this, _controller).currentJob) == null ? void 0 : _a.jobID)) {
    return x`<div class="results-section" id="job-status-section">
                <h2 class="results-title">Results:</h2>

                <div class="progress-container">
                    <div class="progress-text">
                        <span class="spinner"></span>
                        <span class="status-running">Searching for data...</span>
                    </div>

                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 0%"></div>
                    </div>
                </div>

                ${__privateMethod(this, _renderJobMessage, renderJobMessage_fn).call(this)}
            </div>`;
  }
  return x`
            <div class="results-section" id="job-status-section">
                <h2 class="results-title">Results:</h2>

                ${__privateGet(this, _controller).currentJob.status !== "canceled" && __privateGet(this, _controller).currentJob.status !== "failed" ? x` <div class="progress-container">
                          <div class="progress-text">
                              ${__privateGet(this, _controller).currentJob.progress >= 100 ? x`
                                        <span class="status-complete"
                                            >✓ Search complete</span
                                        >
                                    ` : x`
                                        <span class="spinner"></span>
                                        <span class="status-running"
                                            >Searching for data...
                                            (${__privateGet(this, _controller).currentJob.progress}%)</span
                                        >
                                    `}
                          </div>

                          <div class="progress-bar">
                              <div
                                  class="progress-fill"
                                  style="width: ${__privateGet(this, _controller).currentJob.progress}%"
                              ></div>
                          </div>
                      </div>` : T}

                <div class="search-status">
                    <span class="file-count"
                        >Found ${__privateMethod(this, _numberOfFilesFoundEstimate, numberOfFilesFoundEstimate_fn).call(this)} files</span
                    >
                    out of estimated
                    <span class="estimated-total"
                        >${__privateGet(this, _controller).currentJob.numInputGranules.toLocaleString()}</span
                    >
                </div>

                ${__privateMethod(this, _renderJobMessage, renderJobMessage_fn).call(this)}
                ${((_b = __privateGet(this, _controller).currentJob.errors) == null ? void 0 : _b.length) ? x`
                          <terra-accordion>
                              <div slot="summary">
                                  <span
                                      class="accordion-title"
                                      style="color: #dc3545;"
                                      >Errors
                                      (${__privateGet(this, _controller).currentJob.errors.length})</span
                                  >
                              </div>
                              <div class="accordion-content">
                                  <ul
                                      style="color: #dc3545; font-size: 14px; padding-left: 20px;"
                                  >
                                      ${__privateGet(this, _controller).currentJob.errors.map(
    (err) => x`
                                              <li style="margin-bottom: 12px;">
                                                  <a
                                                      href="${err.url}"
                                                      target="_blank"
                                                      style="word-break: break-all; color: #dc3545; text-decoration: underline;"
                                                  >
                                                      ${err.url}
                                                  </a>
                                                  <div style="margin-top: 2px;">
                                                      ${err.message}
                                                  </div>
                                              </li>
                                          `
  )}
                                  </ul>
                              </div>
                          </terra-accordion>
                      ` : T}

                <div class="tabs">
                    <button
                        class="tab ${this.selectedTab === "web-links" ? "active" : ""}"
                        @click=${() => this.selectedTab = "web-links"}
                    >
                        Web Links
                    </button>

                    <button
                        class="tab ${this.selectedTab === "selected-params" ? "active" : ""}"
                        @click=${() => this.selectedTab = "selected-params"}
                    >
                        Selected Parameters
                    </button>
                </div>
                <div
                    id="web-links"
                    class="tab-content ${this.selectedTab === "web-links" ? "active" : ""}"
                >
                    ${__privateMethod(this, _getDocumentationLinks, getDocumentationLinks_fn).call(this).length ? x`
                              <div class="documentation-links">
                                  ${__privateMethod(this, _getDocumentationLinks, getDocumentationLinks_fn).call(this).map(
    (link) => x`
                                          <a href="${link.href}" class="doc-link"
                                              >${link.title}</a
                                          >
                                      `
  )}
                              </div>
                          ` : T}

                    <ul class="file-list">
                        ${__privateMethod(this, _getDataLinks, getDataLinks_fn).call(this).map(
    (link) => x`
                                <li class="file-item">
                                    <a
                                        href="${link.href}"
                                        class="file-link"
                                        target="_blank"
                                    >
                                        ${link.title}
                                    </a>
                                </li>
                            `
  )}
                    </ul>
                </div>

                <div
                    id="selected-params"
                    class="tab-content ${this.selectedTab === "selected-params" ? "active" : ""}"
                >
                    ${__privateMethod(this, _renderSelectedParams, renderSelectedParams_fn).call(this)}
                </div>
            </div>

            <div class="footer">
                ${__privateGet(this, _controller).currentJob.status === "successful" /* SUCCESSFUL */ || __privateGet(this, _controller).currentJob.status === "complete_with_errors" /* COMPLETE_WITH_ERRORS */ ? x`
                          <div>
                              <div
                                  class="download-dropdown ${this.showDownloadMenu ? "open" : ""}"
                              >
                                  <terra-button
                                      @click=${(e2) => __privateMethod(this, _toggleDownloadMenu, toggleDownloadMenu_fn).call(this, e2)}
                                  >
                                      Download Options
                                      <svg
                                          class="dropdown-arrow"
                                          viewBox="0 0 24 24"
                                          fill="currentColor"
                                      >
                                          <path d="M7 10l5 5 5-5z" />
                                      </svg>
                                  </terra-button>

                                  <div
                                      class="download-menu ${this.showDownloadMenu ? "open" : ""}"
                                  >
                                      <button
                                          class="download-option"
                                          @click=${(e2) => __privateMethod(this, _downloadLinksAsTxt, downloadLinksAsTxt_fn).call(this, e2)}
                                      >
                                          <svg
                                              class="file-icon"
                                              viewBox="0 0 24 24"
                                              fill="currentColor"
                                          >
                                              <path
                                                  d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
                                              />
                                          </svg>
                                          File List
                                      </button>
                                      <button
                                          class="download-option"
                                          @click=${(e2) => __privateMethod(this, _downloadPythonScript, downloadPythonScript_fn).call(this, e2)}
                                      >
                                          <svg
                                              class="file-icon"
                                              viewBox="0 0 128 128"
                                              width="16"
                                              height="16"
                                          >
                                              <path
                                                  fill="currentColor"
                                                  d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"
                                              ></path>
                                          </svg>
                                          Python Script
                                      </button>
                                      <button
                                          class="download-option"
                                          @click=${(e2) => __privateMethod(this, _downloadEarthdataDownload, downloadEarthdataDownload_fn).call(this, e2)}
                                      >
                                          <svg
                                              class="file-icon"
                                              viewBox="0 0 64 64"
                                              fill="none"
                                              width="16"
                                              height="16"
                                          >
                                              <circle
                                                  cx="32"
                                                  cy="32"
                                                  r="28"
                                                  fill="currentColor"
                                              />
                                              <path
                                                  d="M32 14v26M32 40l-9-9M32 40l9-9"
                                                  stroke="#fff"
                                                  stroke-width="4"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                  fill="none"
                                              />
                                          </svg>
                                          Earthdata Download
                                      </button>
                                  </div>
                              </div>

                              <terra-button
                                  outline
                                  @click=${() => __privateMethod(this, _handleJupyterNotebookClick, handleJupyterNotebookClick_fn).call(this)}
                                  style="margin-left: 8px;"
                              >
                                  <terra-icon
                                      name="outline-code-bracket"
                                      library="heroicons"
                                      font-size="1.5em"
                                      style="margin-right: 5px;"
                                  ></terra-icon>
                                  Open in Jupyter Notebook
                              </terra-button>
                          </div>
                      ` : T}
                ${__privateGet(this, _controller).currentJob.status === "running" ? x`<button
                          class="btn btn-success"
                          @click=${__privateMethod(this, _cancelJob, cancelJob_fn)}
                          ?disabled=${this.cancelingGetData}
                      >
                          ${this.cancelingGetData ? "Canceling..." : "Cancel request"}
                      </button>` : T}

                <div class="job-info">
                    Job ID:
                    <span class="job-id">
                        ${this.bearerToken ? x`<a
                                  href="https://harmony.earthdata.nasa.gov/jobs/${__privateGet(this, _controller).currentJob.jobID}"
                                  target="_blank"
                                  >${__privateGet(this, _controller).currentJob.jobID}</a
                              >` : __privateGet(this, _controller).currentJob.jobID}
                    </span>
                    <span class="info-icon">?</span>
                </div>
            </div>
        `;
};
_renderSelectedParams = new WeakSet();
renderSelectedParams_fn = function() {
  var _a, _b;
  const collection = (_a = this.collectionWithServices) == null ? void 0 : _a.collection;
  const variables = this.selectedVariables.length ? this.selectedVariables.map((v) => v.name) : ["All"];
  const dateRange = this.selectedDateRange.startDate && this.selectedDateRange.endDate ? `${this.selectedDateRange.startDate} to ${this.selectedDateRange.endDate}` : "\u2014";
  let spatial = "\u2014";
  if (this.spatialSelection) {
    if ("w" in this.spatialSelection) {
      spatial = `Bounding Box: ${this.spatialSelection.w}, ${this.spatialSelection.s}, ${this.spatialSelection.e}, ${this.spatialSelection.n}`;
    } else if ("lat" in this.spatialSelection && "lng" in this.spatialSelection) {
      spatial = `Point: ${this.spatialSelection.lat}, ${this.spatialSelection.lng}`;
    }
  }
  return x`
            <dl class="params-summary">
                <div>
                    <dt><strong>Dataset</strong></dt>
                    <dd>${(_b = collection == null ? void 0 : collection.EntryTitle) != null ? _b : "\u2014"}</dd>
                </div>
                <div>
                    <dt><strong>Variables</strong></dt>
                    <dd>${variables.map((v) => x`<div>${v}</div>`)}</dd>
                </div>
                <div>
                    <dt><strong>Date Range</strong></dt>
                    <dd>${dateRange}</dd>
                </div>
                <div>
                    <dt><strong>Spatial</strong></dt>
                    <dd>${spatial}</dd>
                </div>
            </dl>

            <terra-button @click=${__privateMethod(this, _refineParameters, refineParameters_fn)}
                >Refine Parameters</terra-button
            >
        `;
};
_cancelJob = new WeakSet();
cancelJob_fn = function() {
  this.cancelingGetData = true;
  __privateGet(this, _controller).cancelCurrentJob();
};
_getData = new WeakSet();
getData_fn = function() {
  this.cancelingGetData = false;
  __privateMethod(this, _touchAllFields, touchAllFields_fn).call(this);
  __privateGet(this, _controller).cancelCurrentJob();
  __privateGet(this, _controller).currentJob = null;
  __privateGet(this, _controller).jobStatusTask.run();
  setTimeout(() => {
    const el = this.renderRoot.querySelector("#job-status-section");
    el == null ? void 0 : el.scrollIntoView({ behavior: "smooth" });
  }, 100);
  this.refineParameters = false;
};
_touchAllFields = new WeakSet();
touchAllFields_fn = function() {
  this.touchedFields = /* @__PURE__ */ new Set(["variables", "spatial"]);
};
_numberOfFilesFoundEstimate = new WeakSet();
numberOfFilesFoundEstimate_fn = function() {
  return Math.floor(
    __privateGet(this, _controller).currentJob.numInputGranules * __privateGet(this, _controller).currentJob.progress / 100
  );
};
_getDocumentationLinks = new WeakSet();
getDocumentationLinks_fn = function() {
  return __privateGet(this, _controller).currentJob.links.filter(
    (link) => link.rel === "stac-catalog-json"
  );
};
_getDataLinks = new WeakSet();
getDataLinks_fn = function() {
  return __privateGet(this, _controller).currentJob.links.filter((link) => link.rel === "data");
};
_hasAtLeastOneSubsetOption = new WeakSet();
hasAtLeastOneSubsetOption_fn = function() {
  var _a, _b, _c, _d;
  return ((_a = this.collectionWithServices) == null ? void 0 : _a.bboxSubset) || ((_b = this.collectionWithServices) == null ? void 0 : _b.shapeSubset) || ((_c = this.collectionWithServices) == null ? void 0 : _c.variableSubset) || ((_d = this.collectionWithServices) == null ? void 0 : _d.temporalSubset);
};
_hasSpatialSubset = new WeakSet();
hasSpatialSubset_fn = function() {
  var _a, _b;
  return ((_a = this.collectionWithServices) == null ? void 0 : _a.bboxSubset) || ((_b = this.collectionWithServices) == null ? void 0 : _b.shapeSubset);
};
_renderJobMessage = new WeakSet();
renderJobMessage_fn = function() {
  const warningStatuses = [
    "canceled" /* CANCELED */,
    "complete_with_errors" /* COMPLETE_WITH_ERRORS */,
    "running_with_errors" /* RUNNING_WITH_ERRORS */
  ];
  const errorStatuses = ["failed" /* FAILED */];
  let type = "normal";
  if (warningStatuses.includes(__privateGet(this, _controller).currentJob.status)) {
    type = "warning";
  } else if (errorStatuses.includes(__privateGet(this, _controller).currentJob.status)) {
    type = "error";
  }
  let color, bg;
  if (type === "error") {
    color = "#dc3545";
    bg = "#f8d7da";
  } else if (type === "warning") {
    color = "#856404";
    bg = "#fff3cd";
  } else {
    color = "#555";
    bg = "#f8f9fa";
  }
  return x`
            <div
                style="
                margin: 24px 0 16px 0;
                padding: 16px 20px;
                border-radius: 6px;
                background: ${bg};
                color: ${color};
                border: 1px solid ${color}22;
            "
            >
                ${__privateGet(this, _controller).currentJob.message}
            </div>
        `;
};
_estimateJobSize = new WeakSet();
estimateJobSize_fn = function() {
  var _a, _b;
  const collection = (_a = this.collectionWithServices) == null ? void 0 : _a.collection;
  if (!collection)
    return;
  const range = __privateMethod(this, _getCollectionDateRange, getCollectionDateRange_fn).call(this);
  let startDate;
  let endDate;
  let links = (_b = collection.granuleCount) != null ? _b : 0;
  if (this.selectedDateRange.startDate && this.selectedDateRange.endDate) {
    startDate = this.selectedDateRange.startDate;
    endDate = this.selectedDateRange.endDate;
  } else {
    startDate = range.startDate;
    endDate = range.endDate;
  }
  if (!startDate || !endDate)
    return;
  const start = new Date(startDate);
  const end = new Date(endDate);
  const days = Math.floor((end.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24)) + 1;
  if (range.startDate && range.endDate) {
    const availableDaysInCollection = Math.floor(
      (new Date(range.endDate).getTime() - new Date(range.startDate).getTime()) / (1e3 * 60 * 60 * 24)
    ) + 1;
    const granulesPerDay = links / availableDaysInCollection;
    links = Math.ceil(days * granulesPerDay);
  }
  return { days, links };
};
_refineParameters = new WeakSet();
refineParameters_fn = function() {
  this.refineParameters = true;
};
_toggleDownloadMenu = new WeakSet();
toggleDownloadMenu_fn = function(event) {
  event.stopPropagation();
  this.showDownloadMenu = !this.showDownloadMenu;
};
_downloadLinksAsTxt = new WeakSet();
downloadLinksAsTxt_fn = function(event) {
  var _a;
  event.stopPropagation();
  if (!((_a = __privateGet(this, _controller).currentJob) == null ? void 0 : _a.links)) {
    return;
  }
  const dataLinks = __privateMethod(this, _getDataLinks, getDataLinks_fn).call(this);
  if (dataLinks.length === 0) {
    return;
  }
  const content = dataLinks.map((link) => link.href).join("\n");
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `subset_links_${__privateGet(this, _controller).currentJob.jobID}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  this.showDownloadMenu = false;
};
_downloadPythonScript = new WeakSet();
downloadPythonScript_fn = async function(event) {
  var _a;
  event.stopPropagation();
  if (!((_a = __privateGet(this, _controller).currentJob) == null ? void 0 : _a.links)) {
    return;
  }
  const response = await fetch(
    getBasePath("assets/data-subsetter/download_subset_files.py.txt")
  );
  if (!response.ok) {
    alert(
      "Sorry, there was a problem generating the Python script. We are investigating the issue.\nYou could try using the Jupyter Notebook in the meantime"
    );
  }
  const content = (await response.text()).replace(
    /{{jobId}}/gi,
    __privateGet(this, _controller).currentJob.jobID
  );
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `download_subset_files_${__privateGet(this, _controller).currentJob.jobID}.py`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  this.showDownloadMenu = false;
};
_downloadEarthdataDownload = new WeakSet();
downloadEarthdataDownload_fn = async function(event) {
  var _a;
  event.stopPropagation();
  if (!((_a = __privateGet(this, _controller).currentJob) == null ? void 0 : _a.links)) {
    return;
  }
  alert("Sorry, Earthdata Download is not currently supported");
  this.showDownloadMenu = false;
};
_handleClickOutside = new WeakSet();
handleClickOutside_fn = function(event) {
  if (!this.showDownloadMenu) {
    return;
  }
  const target = event.target;
  const downloadDropdown = this.renderRoot.querySelector(".download-dropdown");
  if (downloadDropdown && !downloadDropdown.contains(target)) {
    this.showDownloadMenu = false;
  }
};
_handleJupyterNotebookClick = new WeakSet();
handleJupyterNotebookClick_fn = function() {
  const jupyterLiteUrl = "https://gesdisc.github.io/jupyterlite/lab/index.html";
  const jupyterWindow = window.open(jupyterLiteUrl, "_blank");
  if (!jupyterWindow) {
    console.error("Failed to open JupyterLite!");
    return;
  }
  setTimeout(() => {
    var _a, _b;
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
        source: `from terra_ui_components import TerraDataSubsetter
subsetter = TerraDataSubsetter()

subsetter.jobId = '${(_a = __privateGet(this, _controller).currentJob) == null ? void 0 : _a.jobID}'

subsetter`,
        metadata: {
          trusted: true
        },
        outputs: [],
        execution_count: null
      }
    ];
    console.log("posting to JupyterLite ", notebook);
    jupyterWindow.postMessage(
      {
        type: "load-notebook",
        filename: `subset_${(_b = __privateGet(this, _controller).currentJob) == null ? void 0 : _b.jobID}.ipynb`,
        notebook
      },
      "*"
    );
  }, 500);
};
TerraDataSubsetter.styles = [component_styles_default, data_subsetter_styles_default];
TerraDataSubsetter.dependencies = {
  "terra-accordion": TerraAccordion,
  "terra-date-picker": TerraDatePicker,
  "terra-icon": TerraIcon,
  "terra-spatial-picker": TerraSpatialPicker
};
__decorateClass([
  n({ reflect: true, attribute: "collection-entry-id" })
], TerraDataSubsetter.prototype, "collectionEntryId", 2);
__decorateClass([
  n({ reflect: true, type: Boolean, attribute: "show-collection-search" })
], TerraDataSubsetter.prototype, "showCollectionSearch", 2);
__decorateClass([
  n({ reflect: true, attribute: "job-id" })
], TerraDataSubsetter.prototype, "jobId", 2);
__decorateClass([
  n({ attribute: "bearer-token" })
], TerraDataSubsetter.prototype, "bearerToken", 2);
__decorateClass([
  r()
], TerraDataSubsetter.prototype, "collectionWithServices", 2);
__decorateClass([
  r()
], TerraDataSubsetter.prototype, "selectedVariables", 2);
__decorateClass([
  r()
], TerraDataSubsetter.prototype, "expandedVariableGroups", 2);
__decorateClass([
  r()
], TerraDataSubsetter.prototype, "touchedFields", 2);
__decorateClass([
  r()
], TerraDataSubsetter.prototype, "spatialSelection", 2);
__decorateClass([
  r()
], TerraDataSubsetter.prototype, "selectedDateRange", 2);
__decorateClass([
  r()
], TerraDataSubsetter.prototype, "selectedFormat", 2);
__decorateClass([
  r()
], TerraDataSubsetter.prototype, "cancelingGetData", 2);
__decorateClass([
  r()
], TerraDataSubsetter.prototype, "selectedTab", 2);
__decorateClass([
  r()
], TerraDataSubsetter.prototype, "refineParameters", 2);
__decorateClass([
  r()
], TerraDataSubsetter.prototype, "showDownloadMenu", 2);
__decorateClass([
  e('[part~="spatial-picker"]')
], TerraDataSubsetter.prototype, "spatialPicker", 2);
__decorateClass([
  watch(["collectionWithServices"])
], TerraDataSubsetter.prototype, "collectionChanged", 1);

export {
  TerraDataSubsetter
};
