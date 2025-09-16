import {
  TerraVariableCombobox
} from "./chunk.YP7KZE5B.js";
import {
  TerraTimeSeries
} from "./chunk.ASTFWOX2.js";
import {
  getFetchVariableTask,
  getVariableEntryId
} from "./chunk.NFZX5QLA.js";
import {
  TerraDateRangeSlider
} from "./chunk.HB2DI5ME.js";
import {
  TerraSpatialPicker
} from "./chunk.P7P3PHE4.js";
import {
  data_rods_styles_default
} from "./chunk.JFG62QF5.js";
import {
  getUTCDate
} from "./chunk.VYOUAAH7.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.IZEIX7KR.js";
import {
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
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/data-rods/data-rods.component.ts
init_dirname();
init_buffer();
init_process();
var _handleDateRangeSliderChangeEvent, handleDateRangeSliderChangeEvent_fn, _handleVariableChange, handleVariableChange_fn, _handleMapChange, handleMapChange_fn, _handleTimeSeriesDateRangeChange, handleTimeSeriesDateRangeChange_fn;
var TerraDataRods = class extends TerraElement {
  constructor() {
    super(...arguments);
    /**
     * anytime the date range slider changes, update the start and end date
     */
    __privateAdd(this, _handleDateRangeSliderChangeEvent);
    __privateAdd(this, _handleVariableChange);
    __privateAdd(this, _handleMapChange);
    __privateAdd(this, _handleTimeSeriesDateRangeChange);
    this._fetchVariableTask = getFetchVariableTask(this);
  }
  render() {
    var _a;
    const minDate = this.catalogVariable ? getUTCDate(this.catalogVariable.dataProductBeginDateTime) : void 0;
    const maxDate = this.catalogVariable ? getUTCDate(this.catalogVariable.dataProductEndDateTime) : void 0;
    return x`
            <terra-variable-combobox
                exportparts="base:variable-combobox__base, combobox:variable-combobox__combobox, button:variable-combobox__button, listbox:variable-combobox__listbox"
                .value=${getVariableEntryId(this)}
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
                variable-entry-id=${getVariableEntryId(this)}
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
  if (event.detail.type === "point" /* POINT */) {
    this.location = `${event.detail.latLng.lat.toFixed(4)},${event.detail.latLng.lng.toFixed(4)}`;
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
