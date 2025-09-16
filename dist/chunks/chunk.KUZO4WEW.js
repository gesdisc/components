import {
  TerraVariableKeywordSearch
} from "./chunk.GPKJ42WJ.js";
import {
  TerraSkeleton
} from "./chunk.LZJTFOOE.js";
import {
  getRandomIntInclusive
} from "./chunk.75PZH4W2.js";
import {
  TerraLoader
} from "./chunk.ITIO44CZ.js";
import {
  BrowseVariablesController
} from "./chunk.RMGL6GRF.js";
import {
  s
} from "./chunk.3AZLGGEX.js";
import {
  browse_variables_styles_default
} from "./chunk.I4U7LBVH.js";
import {
  TerraButton
} from "./chunk.ZF523X4K.js";
import {
  TerraIcon
} from "./chunk.JR4UGNDX.js";
import {
  watch
} from "./chunk.ZEDYVCUT.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.IZEIX7KR.js";
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
  __objRest,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __restKey,
  __spreadProps,
  __spreadValues,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/browse-variables/browse-variables.component.ts
init_dirname();
init_buffer();
init_process();
var _controller, _selectFacetField, selectFacetField_fn, _clearFacet, clearFacet_fn, _unselectFacetField, unselectFacetField_fn, _handleVariableSelection, handleVariableSelection_fn, _renderCategorySelect, renderCategorySelect_fn, _renderFacet, renderFacet_fn, _renderVariablesBrowse, renderVariablesBrowse_fn;
var TerraBrowseVariables = class extends TerraElement {
  constructor() {
    super(...arguments);
    /**
     * given a field, ex: "observations": "Model", will add the field to any existing selected facets
     * if "selectedOneFieldAtATime" is true, then we will only select that one field
     */
    __privateAdd(this, _selectFacetField);
    __privateAdd(this, _clearFacet);
    __privateAdd(this, _unselectFacetField);
    __privateAdd(this, _handleVariableSelection);
    __privateAdd(this, _renderCategorySelect);
    __privateAdd(this, _renderFacet);
    __privateAdd(this, _renderVariablesBrowse);
    this.catalog = "giovanni";
    this.selectedFacets = {};
    this.selectedVariables = [];
    this.showVariablesBrowse = false;
    __privateAdd(this, _controller, new BrowseVariablesController(this));
  }
  handleSelectedVariablesChange() {
    this.emit("terra-variables-change", {
      detail: {
        selectedVariables: this.selectedVariables
      }
    });
  }
  reset() {
    this.searchQuery = "";
    this.selectedFacets = {};
    this.showVariablesBrowse = false;
  }
  handleObservationChange() {
    var _a, _b, _c;
    const selectedObservation = (_c = (_b = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(
      'input[name="observation"]:checked'
    )) == null ? void 0 : _b.value) != null ? _c : "All";
    if (selectedObservation === "All") {
      __privateMethod(this, _clearFacet, clearFacet_fn).call(this, "observations");
    } else {
      __privateMethod(this, _selectFacetField, selectFacetField_fn).call(this, "observations", selectedObservation, true);
    }
  }
  toggleFacetSelect(event) {
    const target = event.target;
    if (!target.dataset.facet) {
      return;
    }
    __privateMethod(this, _selectFacetField, selectFacetField_fn).call(this, target.dataset.facet, target.innerText.trim());
    this.showVariablesBrowse = true;
  }
  handleSearch(e) {
    this.selectedFacets = {};
    this.searchQuery = e.detail;
    this.showVariablesBrowse = true;
  }
  render() {
    const showLoader = __privateGet(this, _controller).task.status === s.PENDING && // only show the loader when doing a fetch
    __privateGet(this, _controller).facetsByCategory;
    return x`
            <div class="container">
                <header class="search">
                    ${this.showVariablesBrowse ? x`
                              <terra-button @click=${this.reset}>
                                  <terra-icon
                                      name="solid-chevron-left"
                                      library="heroicons"
                                      font-size="1.5em"
                                  ></terra-icon>
                              </terra-button>
                          ` : T}

                    <terra-variable-keyword-search
                        @terra-search=${this.handleSearch}
                    ></terra-variable-keyword-search>
                </header>

                ${this.showVariablesBrowse ? __privateMethod(this, _renderVariablesBrowse, renderVariablesBrowse_fn).call(this) : __privateMethod(this, _renderCategorySelect, renderCategorySelect_fn).call(this)}

                <dialog ?open=${showLoader}>
                    <terra-loader indeterminate></terra-loader>
                </dialog>
            </div>
        `;
  }
};
_controller = new WeakMap();
_selectFacetField = new WeakSet();
selectFacetField_fn = function(facet, field, selectOneFieldAtATime = false) {
  const existingFields = this.selectedFacets[facet] || [];
  if (existingFields.includes(field)) {
    __privateMethod(this, _unselectFacetField, unselectFacetField_fn).call(this, facet, field);
    return;
  }
  this.selectedFacets = __spreadProps(__spreadValues({}, this.selectedFacets), {
    [facet]: selectOneFieldAtATime ? [field] : [...existingFields, field]
  });
};
_clearFacet = new WeakSet();
clearFacet_fn = function(facet) {
  const _a = this.selectedFacets, { [facet]: _ } = _a, remainingFacets = __objRest(_a, [__restKey(facet)]);
  this.selectedFacets = remainingFacets;
};
_unselectFacetField = new WeakSet();
unselectFacetField_fn = function(facet, field) {
  if (!this.selectedFacets[facet]) {
    return;
  }
  const filteredFields = this.selectedFacets[facet].filter((f) => f !== field);
  if (!filteredFields.length) {
    __privateMethod(this, _clearFacet, clearFacet_fn).call(this, facet);
    return;
  }
  this.selectedFacets = __spreadProps(__spreadValues({}, this.selectedFacets), {
    [facet]: filteredFields
  });
};
_handleVariableSelection = new WeakSet();
handleVariableSelection_fn = function(variable, checked) {
  const variableIsSelected = this.selectedVariables.find(
    (v) => v.dataFieldLongName === variable.dataFieldLongName
  );
  if (checked && !variableIsSelected) {
    this.selectedVariables = [].concat(
      this.selectedVariables,
      variable
    );
  } else if (!checked && variableIsSelected) {
    this.selectedVariables = this.selectedVariables.filter(
      (v) => v.dataFieldLongName !== variable.dataFieldLongName
    );
  }
};
_renderCategorySelect = new WeakSet();
renderCategorySelect_fn = function() {
  var _a, _b;
  const columns = [
    { title: "Research Areas", facetKey: "disciplines" },
    { title: "Measurements", facetKey: "measurements" },
    { title: "Sources", facetKey: "platformInstruments" }
  ];
  return x`
            <div class="scrollable browse-by-category">
                <aside>
                    <h3>Observations</h3>

                    ${((_a = __privateGet(this, _controller).facetsByCategory) == null ? void 0 : _a.observations.length) ? x`
                              <label>
                                  <input
                                      type="radio"
                                      name="observation"
                                      value="All"
                                      @change=${this.handleObservationChange}
                                      checked
                                  />
                                  All</label
                              >

                              ${(_b = __privateGet(this, _controller).facetsByCategory) == null ? void 0 : _b.observations.map(
    (field) => x`<label>
                                          <input
                                              type="radio"
                                              name="observation"
                                              value=${field.name}
                                              @change=${this.handleObservationChange}
                                          />
                                          ${field.name}
                                      </label>`
  )}
                          ` : x`<terra-skeleton
                              rows="4"
                              variableWidths
                          ></terra-skeleton>`}

                    <terra-button
                        variant="text"
                        size
                        @click=${() => this.showVariablesBrowse = true}
                        >View All Now</terra-button
                    >
                </aside>

                <main>
                    ${columns.map(
    (column) => {
      var _a2, _b2, _c;
      return x`
                            <div class="column">
                                <h3>${column.title}</h3>
                                <ul role="list">
                                    ${(_c = (_b2 = (_a2 = __privateGet(this, _controller).facetsByCategory) == null ? void 0 : _a2[column.facetKey]) == null ? void 0 : _b2.filter((field) => field.count > 0).map(
        (field) => x`<li
                                                    role="button"
                                                    tabindex="0"
                                                    aria-selected="false"
                                                    data-facet=${column.facetKey}
                                                    @click=${this.toggleFacetSelect}
                                                >
                                                    ${field.name}
                                                </li>`
      )) != null ? _c : x`<terra-skeleton
                                        rows=${getRandomIntInclusive(8, 12)}
                                        variableWidths
                                    ></terra-skeleton>`}
                                </ul>
                            </div>
                        `;
    }
  )}
                </main>
            </div>
        `;
};
_renderFacet = new WeakSet();
renderFacet_fn = function(facetKey, title, fields, open) {
  return x`<details ?open=${open}>
            <summary>${title}</summary>

            ${(fields != null ? fields : []).map(
    (field) => {
      var _a;
      return field.count > 0 ? x`
                          <div class="facet">
                              <label
                                  ><input
                                      type="checkbox"
                                      @change=${() => __privateMethod(this, _selectFacetField, selectFacetField_fn).call(this, facetKey, field.name)}
                                      ?checked=${(_a = this.selectedFacets[facetKey]) == null ? void 0 : _a.includes(field.name)}
                                  />
                                  ${field.name}
                                  <!-- TODO: add count back in once we aren't filtering by Cloud Giovanni Catalog (or Cloud Giovanni supports all variables)(${field.count})--></label
                              >
                          </div>
                      ` : T;
    }
  )}
        </details>`;
};
_renderVariablesBrowse = new WeakSet();
renderVariablesBrowse_fn = function() {
  const facets = [
    { title: "Observations", facetKey: "observations", open: true },
    { title: "Disciplines", facetKey: "disciplines" },
    { title: "Measurements", facetKey: "measurements" },
    { title: "Platform / Instrument", facetKey: "platformInstruments" },
    { title: "Spatial Resolutions", facetKey: "spatialResolutions" },
    { title: "Temporal Resolutions", facetKey: "temporalResolutions" },
    { title: "Wavelengths", facetKey: "wavelengths" },
    { title: "Depths", facetKey: "depths" },
    { title: "Special Features", facetKey: "specialFeatures" },
    { title: "Portal", facetKey: "portals" }
  ];
  return x`<div class="scrollable variables-container">
            <header>
                <!-- TODO: add back in once we aren't filtering by Cloud Giovanni Catalog (or Cloud Giovanni supports all variables) 
                Showing ${__privateGet(this, _controller).total} variables
                ${this.searchQuery ? `associated with '${this.searchQuery}'` : ""}-->
                <!-- Sorting and Grouping feature still needs a UI / UX feature discussion.
                <menu>
                    <li>
                        <sl-dropdown class="list-menu-dropdown">
                            <sl-button slot="trigger" caret>Sort By</sl-button>
                            <sl-menu>
                                <sl-menu-item value="aToZ">A&hellip;Z</sl-menu-item>
                                <sl-menu-item value="zToA">Z&hellip;A</sl-menu-item>
                            </sl-menu>
                        </sl-dropdown>
                    </li>
                    <li>
                        <sl-dropdown class="list-menu-dropdown">
                            <sl-button slot="trigger" caret>Group By</sl-button>
                            <sl-menu>
                                <sl-menu-item value="depths">Depths</sl-menu-item>
                                <sl-menu-item value="disciplines"
                                    >Disciplines</sl-menu-item
                                >
                                <sl-menu-item value="measurements"
                                    >Measurements</sl-menu-item
                                >
                                <sl-menu-item value="observations"
                                    >Observations</sl-menu-item
                                >
                                <sl-menu-item value="platformInstruments"
                                    >Platform Instruments</sl-menu-item
                                >
                                <sl-menu-item value="portals">Portals</sl-menu-item>
                                <sl-menu-item value="spatialResolutions"
                                    >Spatial Resolutions</sl-menu-item
                                >
                                <sl-menu-item value="specialFeatures"
                                    >Special Features</sl-menu-item
                                >
                                <sl-menu-item value="temporalResolutions"
                                    >Temporal Resolutions</sl-menu-item
                                >
                                <sl-menu-item value="wavelengths"
                                    >Wavelengths</sl-menu-item
                                >
                            </sl-menu>
                        </sl-dropdown>
                    </li>
                </menu>
                -->
            </header>

            <aside>
                <h3>Filter</h3>

                ${facets.map(
    (facet) => {
      var _a;
      return __privateMethod(this, _renderFacet, renderFacet_fn).call(this, facet.facetKey, facet.title, (_a = __privateGet(this, _controller).facetsByCategory) == null ? void 0 : _a[facet.facetKey], facet.open);
    }
  )}
            </aside>

            <main>
                <section class="group">
                    <ul class="variable-list">
                        ${__privateGet(this, _controller).variables.map((variable) => {
    const metadata = [
      variable.dataProductInstrumentShortName,
      variable.dataProductTimeInterval,
      variable.dataFieldUnits
    ].filter(Boolean).join(" \u2022 ");
    return x`
                                <li
                                    aria-selected="false"
                                    class="variable-list-item"
                                    @click=${(event) => {
      const target = event.currentTarget;
      const targetCheckbox = target.querySelector(
        'input[type="checkbox"]'
      );
      if (!targetCheckbox) {
        return;
      }
      target == null ? void 0 : target.setAttribute(
        "aria-selected",
        `${targetCheckbox.checked}`
      );
    }}
                                >
                                    <div class="variable">
                                        <label>
                                            <input
                                                data-variable=${variable}
                                                type="checkbox"
                                                @change=${(e) => {
      const input = e.currentTarget;
      __privateMethod(this, _handleVariableSelection, handleVariableSelection_fn).call(this, variable, input.checked);
    }}
                                                style="display: none;"
                                            />
                                            <strong
                                                >${variable.dataFieldLongName}</strong
                                            ><br />
                                            <span
                                                >${metadata} •
                                                [${variable.dataProductShortName}_${variable.dataProductVersion}]</span
                                            >
                                        </label>

                                        <sl-drawer contained>
                                            <h4 slot="label">
                                                <strong>Science Name</strong><br />
                                                ${variable.dataFieldLongName}
                                            </h4>
                                            <p>
                                                <strong>Spatial Resolution</strong
                                                ><br />
                                                ${variable.dataProductSpatialResolution}
                                            </p>
                                            <p>
                                                <strong>Temporal Coverage</strong
                                                ><br />
                                                ${variable.dataProductBeginDateTime}&puncsp;&ndash;&puncsp;${variable.dataProductEndDateTime}
                                            </p>
                                            <p>
                                                <strong>Region Coverage</strong><br />
                                                ${variable.dataProductWest},${variable.dataProductSouth},${variable.dataProductEast},${variable.dataProductNorth}
                                            </p>
                                            <p>
                                                <strong>Dataset</strong><br />
                                                ${variable.dataProductShortName}_${variable.dataProductVersion}
                                            </p>
                                        </sl-drawer>

                                        <terra-button
                                            @click=${(event) => {
      var _a;
      const button = event.currentTarget;
      const drawer = (_a = button.closest(".variable")) == null ? void 0 : _a.querySelector(
        "sl-drawer"
      );
      drawer.show();
    }}
                                            aria-label="View variable details."
                                            circle
                                            class="variable-details-button"
                                            outline
                                            type="button"
                                        >
                                            <slot name="label">
                                                <terra-icon
                                                    font-size="1.5em"
                                                    library="heroicons"
                                                    name="outline-information-circle"
                                                ></terra-icon>
                                            </slot>
                                        </terra-button>
                                    </div>
                                </li>
                            `;
  })}
                    </ul>
                </section>
            </main>
        </div>`;
};
TerraBrowseVariables.styles = [component_styles_default, browse_variables_styles_default];
TerraBrowseVariables.dependencies = {
  "terra-variable-keyword-search": TerraVariableKeywordSearch,
  "terra-button": TerraButton,
  "terra-skeleton": TerraSkeleton,
  "terra-icon": TerraIcon,
  "terra-loader": TerraLoader
};
__decorateClass([
  n()
], TerraBrowseVariables.prototype, "catalog", 2);
__decorateClass([
  n({ attribute: "selected-variable-entry-ids", reflect: true })
], TerraBrowseVariables.prototype, "selectedVariableEntryIds", 2);
__decorateClass([
  r()
], TerraBrowseVariables.prototype, "searchQuery", 2);
__decorateClass([
  r()
], TerraBrowseVariables.prototype, "selectedFacets", 2);
__decorateClass([
  r()
], TerraBrowseVariables.prototype, "selectedVariables", 2);
__decorateClass([
  r()
], TerraBrowseVariables.prototype, "showVariablesBrowse", 2);
__decorateClass([
  watch("selectedVariables")
], TerraBrowseVariables.prototype, "handleSelectedVariablesChange", 1);

export {
  TerraBrowseVariables
};
