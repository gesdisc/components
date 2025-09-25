import {
  leaflet_draw_styles_default
} from "./chunk.ARB3UVS4.js";
import {
  Leaflet
} from "./chunk.C7NEKS3B.js";
import {
  leaflet_styles_default
} from "./chunk.Z2YYVPVO.js";
import {
  MapController
} from "./chunk.26Y3U5MM.js";
import {
  map_styles_default
} from "./chunk.DX5ZMKGE.js";
import {
  h
} from "./chunk.EMLDT66I.js";
import {
  o
} from "./chunk.CUQN55UX.js";
import {
  watch
} from "./chunk.ZEDYVCUT.js";
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
  __privateAdd,
  __privateMethod,
  __spreadValues,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/map/map.component.ts
init_dirname();
init_buffer();
init_process();
var _markDynamicLeafletContent, markDynamicLeafletContent_fn;
var TerraMap = class extends TerraElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _markDynamicLeafletContent);
    this.minZoom = 0;
    this.maxZoom = 23;
    this.zoom = 1;
    this.hasNavigation = false;
    this.hasCoordTracker = false;
    this.hasShapeSelector = false;
    this.value = [];
    this.map = new Leaflet();
    this._mapController = new MapController(this);
  }
  valueChanged(_oldValue, newValue) {
    var _a;
    if (newValue.length > 0) {
      (_a = this.map) == null ? void 0 : _a.setValue(this.value);
    } else if (newValue.length === 0 && this.map.isMapReady) {
      this.map.clearLayers();
    }
  }
  async connectedCallback() {
    super.connectedCallback();
  }
  async firstUpdated() {
    await this.map.initializeMap(this.mapElement, {
      zoom: this.zoom,
      minZoom: this.minZoom,
      maxZoom: this.maxZoom,
      hasCoordTracker: this.hasCoordTracker,
      hasNavigation: this.hasNavigation,
      initialValue: this.value,
      hideBoundingBoxDrawTool: this.hideBoundingBoxSelection,
      hidePointSelectionDrawTool: this.hidePointSelection
    });
    this.map.on("draw", (layer) => {
      this.emit("terra-map-change", {
        detail: __spreadValues({
          cause: "draw",
          type: "latLng" in layer ? "point" /* POINT */ : "bounds" in layer ? "bbox" /* BBOX */ : void 0
        }, layer)
      });
    });
    this.map.on(
      "clear",
      (_e) => this.emit("terra-map-change", {
        detail: {
          cause: "clear"
        }
      })
    );
    __privateMethod(this, _markDynamicLeafletContent, markDynamicLeafletContent_fn).call(this);
  }
  getDrawLayer() {
    return this.map.editableLayers.getLayers()[0];
  }
  selectTemplate() {
    var _a;
    return x`
            <select
                class="map__select form-control"
                @change=${this.map.handleShapeSelect}
            >
                <option value="">Select a Shape...</option>

                ${h(
      o((_a = this.shapes) == null ? void 0 : _a.categories, (category) => {
        return x`<optgroup label="${category.title}">
                            ${category.shapes.map((shape) => {
          return x`
                                    <option
                                        value="shape=${shape.shapefileID}/${shape.shapeID}"
                                    >
                                        ${shape.name}
                                    </option>
                                `;
        })}
                        </optgroup> `;
      })
    )}
            </select>
        `;
  }
  render() {
    return x`
            <!-- select goes here -->
            ${this.hasShapeSelector ? this.selectTemplate() : T}
            <!-- "Map goes here" -->
            <div part="map" id="map" class="map"></div>
        `;
  }
  invalidateSize() {
    this.map.map.invalidateSize();
  }
};
_markDynamicLeafletContent = new WeakSet();
markDynamicLeafletContent_fn = function() {
  var _a, _b, _c, _d;
  const parts = [
    {
      item: (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(".leaflet-draw-draw-rectangle"),
      name: "leaflet-bbox"
    },
    {
      item: (_b = this.shadowRoot) == null ? void 0 : _b.querySelector(".leaflet-draw-draw-marker"),
      name: "leaflet-point"
    },
    {
      item: (_c = this.shadowRoot) == null ? void 0 : _c.querySelector(".leaflet-draw-edit-edit"),
      name: "leaflet-edit"
    },
    {
      item: (_d = this.shadowRoot) == null ? void 0 : _d.querySelector(".leaflet-draw-edit-remove"),
      name: "leaflet-remove"
    }
  ];
  parts.forEach(({ item, name }) => {
    item == null ? void 0 : item.setAttribute("part", name);
  });
};
TerraMap.styles = [
  component_styles_default,
  leaflet_styles_default,
  leaflet_draw_styles_default,
  map_styles_default
];
__decorateClass([
  n({ attribute: "min-zoom", type: Number })
], TerraMap.prototype, "minZoom", 2);
__decorateClass([
  n({ attribute: "max-zoom", type: Number })
], TerraMap.prototype, "maxZoom", 2);
__decorateClass([
  n({ type: Number })
], TerraMap.prototype, "zoom", 2);
__decorateClass([
  n({ attribute: "has-navigation", type: Boolean })
], TerraMap.prototype, "hasNavigation", 2);
__decorateClass([
  n({ attribute: "has-coord-tracker", type: Boolean })
], TerraMap.prototype, "hasCoordTracker", 2);
__decorateClass([
  n({ attribute: "has-shape-selector", type: Boolean })
], TerraMap.prototype, "hasShapeSelector", 2);
__decorateClass([
  n({ attribute: "hide-bounding-box-selection", type: Boolean })
], TerraMap.prototype, "hideBoundingBoxSelection", 2);
__decorateClass([
  n({ attribute: "hide-point-selection", type: Boolean })
], TerraMap.prototype, "hidePointSelection", 2);
__decorateClass([
  n({ type: Array })
], TerraMap.prototype, "value", 2);
__decorateClass([
  e("#map")
], TerraMap.prototype, "mapElement", 2);
__decorateClass([
  watch("value")
], TerraMap.prototype, "valueChanged", 1);
__decorateClass([
  r()
], TerraMap.prototype, "shapes", 2);

export {
  TerraMap
};
