import {
  spatial_picker_styles_default
} from "./chunk.5UREWLES.js";
import {
  TerraMap
} from "./chunk.GOEIPUGK.js";
import {
  StringifyBoundingBox,
  parseBoundingBox
} from "./chunk.6SEMGF6B.js";
import {
  TerraInput
} from "./chunk.FUZEDMWI.js";
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
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/spatial-picker/spatial-picker.component.ts
init_dirname();
init_buffer();
init_process();
var TerraSpatialPicker = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.minZoom = 0;
    this.maxZoom = 23;
    this.zoom = 1;
    this.hasNavigation = true;
    this.hasCoordTracker = true;
    this.hasShapeSelector = false;
    this.initialValue = "";
    this.hideLabel = false;
    this.label = "Select Region";
    this.spatialConstraints = "-180, -90, 180, 90";
    this.isExpanded = false;
    this.inline = false;
    this.showMapOnFocus = false;
    this.error = "";
    this._popoverFlipped = false;
    this.ignoreClickOutside = false;
    this.boundHandleClickOutside = null;
  }
  setValue(value) {
    try {
      this.mapValue = parseBoundingBox(value);
      this.error = "";
      if (this.terraInput) {
        this.terraInput.value = value;
      }
      this._emitMapChange();
    } catch (error) {
      this.error = error instanceof Error ? error.message : "Invalid spatial area (format: LAT, LNG or LAT, LNG, LAT, LNG)";
    }
  }
  _input() {
    var _a;
    const value = ((_a = this.terraInput) == null ? void 0 : _a.value) || "";
    this.initialValue = value;
  }
  _blur() {
    var _a;
    try {
      this.mapValue = ((_a = this.terraInput) == null ? void 0 : _a.value) ? parseBoundingBox(this.terraInput.value) : [];
      this.error = "";
    } catch (error) {
      this.error = error instanceof Error ? error.message : "Invalid spatial area (format: LAT, LNG or LAT, LNG, LAT, LNG)";
    }
    this._emitMapChange();
  }
  handleClickOutside(event) {
    var _a, _b;
    if (this.ignoreClickOutside) {
      this.ignoreClickOutside = false;
      return;
    }
    if (!this.isExpanded) {
      return;
    }
    const target = event.target;
    if (this.contains(target) || ((_b = (_a = this.spatialPicker) == null ? void 0 : _a.querySelector(".spatial-picker__map-container")) == null ? void 0 : _b.contains(target))) {
      return;
    }
    this.close();
  }
  _focus() {
    if (this.showMapOnFocus) {
      this.open();
    }
  }
  _click(e2) {
    e2.stopPropagation();
    if (this.isExpanded) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * The spatial picker will either be positioned above or below the input depending on the space available
   * @returns
   */
  _checkPopoverPosition() {
    if (this.inline)
      return;
    const viewportHeight = window.innerHeight;
    const pickerRect = this.spatialPicker.getBoundingClientRect();
    const spaceBelow = viewportHeight - pickerRect.bottom;
    const spaceAbove = pickerRect.top;
    if (spaceBelow < 450 && spaceBelow < spaceAbove) {
      this._popoverFlipped = true;
    } else {
      this._popoverFlipped = false;
    }
  }
  _emitMapChange() {
    var _a;
    const layer = (_a = this.map) == null ? void 0 : _a.getDrawLayer();
    if (!layer) {
      return;
    }
    if ("getLatLng" in layer) {
      this.mapValue = layer.getLatLng();
      this.emit("terra-map-change", {
        detail: {
          type: "point" /* POINT */,
          cause: "draw",
          latLng: this.mapValue,
          geoJson: layer.toGeoJSON()
        }
      });
    } else if ("getBounds" in layer) {
      this.mapValue = layer.getBounds();
      this.emit("terra-map-change", {
        detail: {
          type: "bbox" /* BBOX */,
          cause: "draw",
          bounds: this.mapValue,
          geoJson: layer.toGeoJSON()
        }
      });
    } else {
      this.mapValue = [];
    }
  }
  open() {
    this.ignoreClickOutside = true;
    if (!this.boundHandleClickOutside) {
      this.boundHandleClickOutside = this.handleClickOutside.bind(this);
      document.addEventListener("click", this.boundHandleClickOutside);
    }
    this.isExpanded = true;
    this._checkPopoverPosition();
    setTimeout(() => {
      this.ignoreClickOutside = false;
    }, 0);
  }
  close() {
    this.isExpanded = false;
    if (this.boundHandleClickOutside) {
      document.removeEventListener("click", this.boundHandleClickOutside);
      this.boundHandleClickOutside = null;
    }
  }
  setOpen(open) {
    if (open) {
      this.open();
    } else {
      this.close();
    }
  }
  _updateURLParam(value) {
    const url = new URL(window.location.href);
    if (value) {
      url.searchParams.set("spatial", value);
    } else {
      url.searchParams.delete("spatial");
    }
    window.history.replaceState({}, "", url.toString());
  }
  _handleMapChange(event) {
    switch (event.detail.cause) {
      case "clear":
        if (this.terraInput) {
          this.terraInput.value = "";
        }
        this.spatialConstraints = "-180, -90, 180, 90";
        this._updateURLParam(null);
        break;
      case "draw":
        let stringified = "";
        if (event.detail.bounds) {
          stringified = StringifyBoundingBox(event.detail.bounds);
          if (this.terraInput) {
            this.terraInput.value = stringified;
          }
        } else if (event.detail.latLng) {
          stringified = StringifyBoundingBox(event.detail.latLng);
          if (this.terraInput) {
            this.terraInput.value = stringified;
          }
        }
        this._updateURLParam(stringified);
        this._emitMapChange();
        break;
      default:
        break;
    }
  }
  firstUpdated() {
    const urlParams = new URLSearchParams(window.location.search);
    const spatialParam = urlParams.get("spatial");
    if (spatialParam) {
      this.initialValue = spatialParam;
      this.mapValue = parseBoundingBox(spatialParam);
      if (this.terraInput) {
        this.terraInput.value = spatialParam;
      }
    } else if (this.initialValue) {
      this.mapValue = this.initialValue === "" ? [] : parseBoundingBox(this.initialValue);
    }
    window.addEventListener("resize", this._handleResize.bind(this));
    setTimeout(() => {
      this.invalidateSize();
    }, 500);
  }
  _handleResize() {
    if (this.isExpanded && !this.inline) {
      this._checkPopoverPosition();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("resize", this._handleResize.bind(this));
    if (this.boundHandleClickOutside) {
      document.removeEventListener("click", this.boundHandleClickOutside);
      this.boundHandleClickOutside = null;
    }
  }
  renderMap() {
    return x`<terra-map
            class="${this.inline ? "inline" : ""}"
            exportparts="map, leaflet-bbox, leaflet-point, leaflet-edit, leaflet-remove"
            min-zoom=${this.minZoom}
            max-zoom=${this.maxZoom}
            zoom=${this.zoom}
            ?has-coord-tracker=${this.hasCoordTracker}
            .value=${this.mapValue}
            ?has-navigation=${this.hasNavigation}
            ?has-shape-selector=${this.hasShapeSelector}
            ?hide-bounding-box-selection=${this.hideBoundingBoxSelection}
            ?hide-point-selection=${this.hidePointSelection}
            @terra-map-change=${this._handleMapChange}
        >
        </terra-map>`;
  }
  render() {
    const expanded = this.inline ? true : this.isExpanded;
    return x`
            <div class="spatial-picker">
                <terra-input
                    .label=${this.label}
                    .hideLabel=${this.hideLabel}
                    .value=${this.initialValue}
                    placeholder="${this.spatialConstraints}"
                    aria-controls="map"
                    aria-expanded=${expanded}
                    @terra-input=${this._input}
                    @terra-blur=${this._blur}
                    @terra-focus=${this._focus}
                    @click=${(e2) => {
      e2.stopPropagation();
      this._click(e2);
    }}
                >
                    <svg
                        slot="suffix"
                        class="spatial-picker__input_icon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        @click=${this._click}
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                        />
                    </svg>
                </terra-input>
                ${this.error ? x`<div class="spatial-picker__error">${this.error}</div>` : E}
                ${expanded ? x`<div
                          class="spatial-picker__map-container ${this._popoverFlipped ? "flipped" : ""}"
                          style="${this.inline ? "position: static; width: 100%;" : ""}"
                          @click=${(e2) => e2.stopPropagation()}
                      >
                          ${this.renderMap()}
                      </div>` : E}
            </div>
        `;
  }
  invalidateSize() {
    var _a;
    (_a = this.map) == null ? void 0 : _a.invalidateSize();
  }
};
TerraSpatialPicker.styles = [component_styles_default, spatial_picker_styles_default];
TerraSpatialPicker.dependencies = {
  "terra-map": TerraMap,
  "terra-input": TerraInput
};
__decorateClass([
  n({ attribute: "min-zoom", type: Number })
], TerraSpatialPicker.prototype, "minZoom", 2);
__decorateClass([
  n({ attribute: "max-zoom", type: Number })
], TerraSpatialPicker.prototype, "maxZoom", 2);
__decorateClass([
  n({ type: Number })
], TerraSpatialPicker.prototype, "zoom", 2);
__decorateClass([
  n({ attribute: "has-navigation", type: Boolean })
], TerraSpatialPicker.prototype, "hasNavigation", 2);
__decorateClass([
  n({ attribute: "has-coord-tracker", type: Boolean })
], TerraSpatialPicker.prototype, "hasCoordTracker", 2);
__decorateClass([
  n({ attribute: "has-shape-selector", type: Boolean })
], TerraSpatialPicker.prototype, "hasShapeSelector", 2);
__decorateClass([
  n({ attribute: "hide-bounding-box-selection", type: Boolean })
], TerraSpatialPicker.prototype, "hideBoundingBoxSelection", 2);
__decorateClass([
  n({ attribute: "hide-point-selection", type: Boolean })
], TerraSpatialPicker.prototype, "hidePointSelection", 2);
__decorateClass([
  n({ attribute: "initial-value" })
], TerraSpatialPicker.prototype, "initialValue", 2);
__decorateClass([
  n({ attribute: "hide-label", type: Boolean })
], TerraSpatialPicker.prototype, "hideLabel", 2);
__decorateClass([
  n()
], TerraSpatialPicker.prototype, "label", 2);
__decorateClass([
  n({ attribute: "spatial-constraints" })
], TerraSpatialPicker.prototype, "spatialConstraints", 2);
__decorateClass([
  n({ attribute: "is-expanded", type: Boolean, reflect: true })
], TerraSpatialPicker.prototype, "isExpanded", 2);
__decorateClass([
  n({ type: Boolean })
], TerraSpatialPicker.prototype, "inline", 2);
__decorateClass([
  n({ attribute: "show-map-on-focus", type: Boolean })
], TerraSpatialPicker.prototype, "showMapOnFocus", 2);
__decorateClass([
  r()
], TerraSpatialPicker.prototype, "mapValue", 2);
__decorateClass([
  r()
], TerraSpatialPicker.prototype, "error", 2);
__decorateClass([
  r()
], TerraSpatialPicker.prototype, "_popoverFlipped", 2);
__decorateClass([
  e("terra-input")
], TerraSpatialPicker.prototype, "terraInput", 2);
__decorateClass([
  e("terra-map")
], TerraSpatialPicker.prototype, "map", 2);
__decorateClass([
  e(".spatial-picker")
], TerraSpatialPicker.prototype, "spatialPicker", 2);

export {
  TerraSpatialPicker
};
