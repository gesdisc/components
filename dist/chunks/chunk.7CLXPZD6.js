import {
  date_range_slider_styles_default
} from "./chunk.Y774OJPK.js";
import {
  PipsMode,
  nouislider_default
} from "./chunk.GGCARDAM.js";
import {
  mergeTooltips
} from "./chunk.4JYKIESX.js";
import {
  format,
  isValidDate
} from "./chunk.NDNVCIB3.js";
import {
  watch
} from "./chunk.IGV6JSNT.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.XCIW4BFM.js";
import {
  e,
  n
} from "./chunk.ZQH2A4BE.js";
import {
  x
} from "./chunk.JQ2FCDGS.js";
import {
  __decorateClass,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/date-range-slider/date-range-slider.component.ts
init_dirname();
init_buffer();
init_process();
var TerraDateRangeSlider = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.timeScale = "daily";
    this.disabled = false;
    this.hasPips = true;
  }
  updateSlider() {
    this.renderSlider();
  }
  disabledChanged() {
    var _a, _b, _c, _d;
    this.disabled ? (_b = (_a = this.slider) == null ? void 0 : _a.noUiSlider) == null ? void 0 : _b.disable() : (_d = (_c = this.slider) == null ? void 0 : _c.noUiSlider) == null ? void 0 : _d.enable();
  }
  firstUpdated() {
    this.renderSlider();
  }
  renderSlider() {
    var _a;
    if (!this.slider) {
      return;
    }
    (_a = this.slider.noUiSlider) == null ? void 0 : _a.destroy();
    if (!isValidDate(this.minDate) || !isValidDate(this.maxDate)) {
      this.renderEmptySlider();
      this.minDate && !isValidDate(this.minDate) && console.error("Invalid min date provided");
      this.maxDate && !isValidDate(this.maxDate) && console.error("Invalid max date provided");
      return;
    }
    const minDate = new Date(this.minDate);
    const maxDate = new Date(this.maxDate);
    const startDate = new Date(
      isValidDate(this.startDate) ? this.startDate : this.minDate
    );
    const endDate = new Date(
      isValidDate(this.endDate) ? this.endDate : this.maxDate
    );
    minDate.setUTCHours(0, 0, 0, 0);
    startDate.setUTCHours(0, 0, 0, 0);
    maxDate.setUTCHours(23, 59, 59, 999);
    endDate.setUTCHours(23, 59, 59, 999);
    const sliderOptions = {
      range: {
        // convert to milliseconds to define a range
        min: minDate.getTime(),
        max: maxDate.getTime()
      },
      behaviour: "drag",
      step: this._getStep(),
      start: [startDate.getTime(), endDate.getTime()],
      // defaults to either the given start/end dates or the full date range (min/max date)
      tooltips: [true, true],
      // for each handle, choose whether to show a tooltip
      connect: true,
      // whether to connect the handles with a colorized bar
      pips: {
        mode: PipsMode.Range,
        density: -1,
        format: this._getSliderFormatter()
      },
      format: this._getSliderFormatter()
    };
    nouislider_default.create(this.slider, sliderOptions);
    mergeTooltips(this.slider);
    this.slider.noUiSlider.on("change", (values) => {
      this.emit("terra-date-range-change", {
        detail: {
          startDate: this._formatDate(values[0]),
          endDate: this._formatDate(values[1])
        }
      });
    });
  }
  renderEmptySlider() {
    nouislider_default.create(this.slider, {
      start: [0, 0],
      range: {
        min: 0,
        max: 0
      }
    });
  }
  _getStep() {
    const oneMinuteMillis = 60 * 1e3;
    const oneHourMillis = 60 * oneMinuteMillis;
    const oneDayMillis = 24 * oneHourMillis;
    switch (this.timeScale) {
      case "half-hourly":
        return 30 * oneMinuteMillis;
      case "hourly":
        return oneHourMillis;
      default:
        return oneDayMillis;
    }
  }
  _getSliderFormatter() {
    return {
      to: (value) => {
        return this._formatDate(value);
      },
      from: (value) => {
        return Number(value);
      }
    };
  }
  _formatDate(date) {
    const dateFormat = this.timeScale === "daily" ? "yyyy-MM-dd" : "yyyy-MM-dd HH:mm";
    return format(new Date(date).toUTCString(), dateFormat);
  }
  render() {
    const containerClass = "container" + this.hasPips ? " hasPips" : "";
    return x`
            <div class="${containerClass}">
                <div part="slider"></div>
            </div>
        `;
  }
};
TerraDateRangeSlider.styles = [component_styles_default, date_range_slider_styles_default];
__decorateClass([
  e('[part~="slider"]')
], TerraDateRangeSlider.prototype, "slider", 2);
__decorateClass([
  n({ attribute: "time-scale" })
], TerraDateRangeSlider.prototype, "timeScale", 2);
__decorateClass([
  n({ attribute: "min-date" })
], TerraDateRangeSlider.prototype, "minDate", 2);
__decorateClass([
  n({ attribute: "max-date" })
], TerraDateRangeSlider.prototype, "maxDate", 2);
__decorateClass([
  n({ attribute: "start-date" })
], TerraDateRangeSlider.prototype, "startDate", 2);
__decorateClass([
  n({ attribute: "end-date" })
], TerraDateRangeSlider.prototype, "endDate", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraDateRangeSlider.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true, attribute: "has-pips" })
], TerraDateRangeSlider.prototype, "hasPips", 2);
__decorateClass([
  watch(["startDate", "endDate", "minDate", "maxDate"])
], TerraDateRangeSlider.prototype, "updateSlider", 1);
__decorateClass([
  watch("disabled")
], TerraDateRangeSlider.prototype, "disabledChanged", 1);

export {
  TerraDateRangeSlider
};
