import {
  TerraVariableCombobox
} from "./chunk.U47NJ4KV.js";
import {
  TerraTimeSeries
} from "./chunk.RPHFLDQN.js";
import {
  TerraDateRangeSlider
} from "./chunk.YVYJWONC.js";
import {
  data_rods_styles_default
} from "./chunk.2RXDDBWK.js";
import {
  TerraSpatialPicker
} from "./chunk.4YP22UYD.js";
import {
  GiovanniVariableCatalog
} from "./chunk.WDABPW4H.js";
import {
  h
} from "./chunk.UGTZ22DI.js";
import {
  getUTCDate
} from "./chunk.EZMKGB3F.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.6PUQ3DDO.js";
import {
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
  __privateMethod
} from "./chunk.6JHIJHTB.js";

// src/components/data-rods/data-rods.component.ts
var _catalog, _fetchVariableTask, _getVariableEntryId, getVariableEntryId_fn, _handleDateRangeSliderChangeEvent, handleDateRangeSliderChangeEvent_fn, _handleVariableChange, handleVariableChange_fn, _handleMapChange, handleMapChange_fn, _handleTimeSeriesDateRangeChange, handleTimeSeriesDateRangeChange_fn;
var TerraDataRods = class extends TerraElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _getVariableEntryId);
    /**
     * anytime the date range slider changes, update the start and end date
     */
    __privateAdd(this, _handleDateRangeSliderChangeEvent);
    __privateAdd(this, _handleVariableChange);
    __privateAdd(this, _handleMapChange);
    __privateAdd(this, _handleTimeSeriesDateRangeChange);
    __privateAdd(this, _catalog, new GiovanniVariableCatalog());
    // @ts-expect-error
    __privateAdd(this, _fetchVariableTask, new h(this, {
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
  }
  render() {
    var _a;
    const minDate = this.catalogVariable ? getUTCDate(this.catalogVariable.dataProductBeginDateTime) : void 0;
    const maxDate = this.catalogVariable ? getUTCDate(this.catalogVariable.dataProductEndDateTime) : void 0;
    return x`
            <terra-variable-combobox
                exportparts="base:variable-combobox__base, combobox:variable-combobox__combobox, button:variable-combobox__button, listbox:variable-combobox__listbox"
                .value=${__privateMethod(this, _getVariableEntryId, getVariableEntryId_fn).call(this)}
                .bearerToken=${(_a = this.bearerToken) != null ? _a : null}
                .useTags=${true}
                @terra-combobox-change="${__privateMethod(this, _handleVariableChange, handleVariableChange_fn)}"
            ></terra-variable-combobox>

            <terra-spatial-picker
                initial-value=${this.location}
                exportparts="map:spatial-picker__map, leaflet-bbox:spatial-picker__leaflet-bbox, leaflet-point:spatial-picker__leaflet-point"
                label="Select Point"
                @terra-map-change=${__privateMethod(this, _handleMapChange, handleMapChange_fn)}
            ></terra-spatial-picker>

            <terra-time-series
                variable-entry-id=${__privateMethod(this, _getVariableEntryId, getVariableEntryId_fn).call(this)}
                start-date=${this.startDate}
                end-date=${this.endDate}
                location=${this.location}
                bearer-token=${this.bearerToken}
                @terra-date-range-change=${__privateMethod(this, _handleTimeSeriesDateRangeChange, handleTimeSeriesDateRangeChange_fn)}
            ></terra-time-series>

            <terra-date-range-slider
                exportparts="slider:date-range-slider__slider"
                min-date=${minDate}
                max-date=${maxDate}
                start-date=${this.startDate}
                end-date=${this.endDate}
                @terra-date-range-change="${__privateMethod(this, _handleDateRangeSliderChangeEvent, handleDateRangeSliderChangeEvent_fn)}"
            ></terra-date-range-slider>
        `;
  }
};
_catalog = new WeakMap();
_fetchVariableTask = new WeakMap();
_getVariableEntryId = new WeakSet();
getVariableEntryId_fn = function() {
  var _a;
  if (!this.variableEntryId && !(this.collection && this.variable)) {
    return;
  }
  return (_a = this.variableEntryId) != null ? _a : `${this.collection}_${this.variable}`;
};
_handleDateRangeSliderChangeEvent = new WeakSet();
handleDateRangeSliderChangeEvent_fn = function(event) {
  this.startDate = event.detail.startDate;
  this.endDate = event.detail.endDate;
};
_handleVariableChange = new WeakSet();
handleVariableChange_fn = function(event) {
  this.variableEntryId = event.detail.entryId;
};
_handleMapChange = new WeakSet();
handleMapChange_fn = function(event) {
  const type = event.detail.geoJson.geometry.type;
  if (type === "Point") {
    const { latLng } = event.detail;
    this.location = `${latLng.lat.toFixed(4)},${latLng.lng.toFixed(4)}`;
  }
};
_handleTimeSeriesDateRangeChange = new WeakSet();
handleTimeSeriesDateRangeChange_fn = function(event) {
  this.startDate = event.detail.startDate;
  this.endDate = event.detail.endDate;
};
TerraDataRods.styles = [component_styles_default, data_rods_styles_default];
TerraDataRods.dependencies = {
  "terra-time-series": TerraTimeSeries,
  "terra-date-range-slider": TerraDateRangeSlider,
  "terra-spatial-picker": TerraSpatialPicker,
  "terra-variable-combobox": TerraVariableCombobox
};
__decorateClass([
  n({ attribute: "variable-entry-id", reflect: true })
], TerraDataRods.prototype, "variableEntryId", 2);
__decorateClass([
  n({ reflect: true })
], TerraDataRods.prototype, "collection", 2);
__decorateClass([
  n({ reflect: true })
], TerraDataRods.prototype, "variable", 2);
__decorateClass([
  n({
    attribute: "start-date",
    reflect: true
  })
], TerraDataRods.prototype, "startDate", 2);
__decorateClass([
  n({
    attribute: "end-date",
    reflect: true
  })
], TerraDataRods.prototype, "endDate", 2);
__decorateClass([
  n({
    reflect: true
  })
], TerraDataRods.prototype, "location", 2);
__decorateClass([
  n({ attribute: "bearer-token", reflect: false })
], TerraDataRods.prototype, "bearerToken", 2);
__decorateClass([
  r()
], TerraDataRods.prototype, "catalogVariable", 2);

export {
  TerraDataRods
};
