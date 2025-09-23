import {
  spatial_picker_styles_default
} from "./chunk.PDR3XIUD.js";
import {
  TerraMap
} from "./chunk.75QU3SYX.js";
import {
  StringifyBoundingBox,
  parseBoundingBox
} from "./chunk.C7NEKS3B.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.7CI746RD.js";
import {
  e,
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
  }
  _blur(e2) {
    try {
      this.mapValue = this.spatialInput.value ? parseBoundingBox(this.spatialInput.value) : [];
      this.error = "";
    } catch (error) {
      this.error = error instanceof Error ? error.message : "Invalid spatial area (format: LAT, LNG or LAT, LNG, LAT, LNG)";
    }
    this._emitMapChange();
    const relatedTarget = e2.relatedTarget;
    if (!(relatedTarget == null ? void 0 : relatedTarget.closest("terra-map"))) {
      this.isExpanded = false;
    }
  }
  _focus() {
    if (this.showMapOnFocus) {
      this.isExpanded = true;
    }
  }
  _click() {
    this.isExpanded = !this.isExpanded;
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
    this.isExpanded = true;
  }
  close() {
    this.isExpanded = false;
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
        this.spatialInput.value = "";
        this.spatialConstraints = "-180, -90, 180, 90";
        this._updateURLParam(null);
        break;
      case "draw":
        let stringified = "";
        if (event.detail.type === "bbox" /* BBOX */) {
          stringified = StringifyBoundingBox(event.detail.bounds);
          this.spatialInput.value = stringified;
        } else if (event.detail.type === "point" /* POINT */) {
          stringified = StringifyBoundingBox(event.detail.latLng);
          this.spatialInput.value = stringified;
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
      this.spatialInput.value = spatialParam;
    } else if (this.initialValue) {
      this.mapValue = this.initialValue === "" ? [] : parseBoundingBox(this.initialValue);
    }
    setTimeout(() => {
      this.invalidateSize();
    }, 500);
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
                <label
                    for="spatial-picker__input"
                    class=${this.hideLabel ? "sr-only" : "spatial-picker__input_label"}
                    >${this.label}</label
                >
                <div class="spatial-picker__input_fields">
                    <input
                        id="spatial-picker__input"
                        value=${this.initialValue}
                        type="text"
                        class="spatial-picker__input form-control"
                        placeholder="${this.spatialConstraints}"
                        aria-controls="map"
                        aria-expanded=${expanded}
                        @blur=${this._blur}
                        @focus=${this._focus}
                    />
                    <terra-button
                        shape="square-left"
                        class="spatial-picker__input_icon_button"
                        @click=${this._click}
                        type="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                            />
                        </svg>
                    </terra-button>
                </div>
                ${this.error ? x`<div class="spatial-picker__error">${this.error}</div>` : T}
                ${expanded ? x`<div
                          style="${this.inline ? "position: static; width: 100%;" : ""}"
                      >
                          ${this.renderMap()}
                      </div>` : T}
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
  "terra-map": TerraMap
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
  e(".spatial-picker__input")
], TerraSpatialPicker.prototype, "spatialInput", 2);
__decorateClass([
  e("terra-map")
], TerraSpatialPicker.prototype, "map", 2);

export {
  TerraSpatialPicker
};
