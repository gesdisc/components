import {
  slider_styles_default
} from "./chunk.7G762DDD.js";
import {
  PipsMode,
  nouislider_default
} from "./chunk.GGCARDAM.js";
import {
  mergeTooltips
} from "./chunk.4JYKIESX.js";
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
  x
} from "./chunk.JQ2FCDGS.js";
import {
  __decorateClass,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/slider/slider.component.ts
init_dirname();
init_buffer();
init_process();
var TerraSlider = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.mode = "single";
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.disabled = false;
    this.hasPips = false;
    this.hasTooltips = false;
    this.showInputs = false;
    this.label = "Slider";
    this.hideLabel = false;
    this.hasBeenManipulated = false;
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
  _getStartValues() {
    var _a, _b, _c;
    const min = Number(this.min);
    const max = Number(this.max);
    if (this.mode === "range") {
      const start = (_a = this.startValue) != null ? _a : min;
      const end = (_b = this.endValue) != null ? _b : max;
      return [start, end];
    }
    const single = (_c = this.value) != null ? _c : min;
    return [single];
  }
  renderSlider() {
    var _a;
    if (!this.slider)
      return;
    (_a = this.slider.noUiSlider) == null ? void 0 : _a.destroy();
    const min = Number(this.min);
    const max = Number(this.max);
    if (!Number.isFinite(min) || !Number.isFinite(max) || max < min) {
      nouislider_default.create(this.slider, {
        start: [0],
        range: { min: 0, max: 0 }
      });
      return;
    }
    const startValues = this._getStartValues();
    const options = {
      range: { min, max },
      start: startValues,
      step: this.step,
      connect: this.mode === "range",
      tooltips: this.hasTooltips ? this.mode === "range" ? [this.hasTooltips, this.hasTooltips] : this.hasTooltips : false,
      behaviour: "drag",
      format: this._getFormatter(),
      pips: this.hasPips ? {
        mode: PipsMode.Range,
        density: -1,
        format: this._getFormatter()
      } : void 0
    };
    nouislider_default.create(this.slider, options);
    const initialValues = this.slider.noUiSlider.get();
    if (this.mode === "range") {
      const [start, end] = Array.isArray(initialValues) ? initialValues.map(Number) : [min, max];
      this.currentStartValue = start;
      this.currentEndValue = end;
      this.hasBeenManipulated = start !== min || end !== max;
    } else {
      const [val] = Array.isArray(initialValues) ? initialValues.map(Number) : [min];
      this.currentValue = val;
      this.hasBeenManipulated = val !== min;
    }
    if (this.hasTooltips && this.mode === "range") {
      mergeTooltips(this.slider, 15, "-");
    }
    this.slider.noUiSlider.on("update", (values) => {
      if (this.mode === "range") {
        const [start, end] = values.map(Number);
        this.currentStartValue = start;
        this.currentEndValue = end;
        this.hasBeenManipulated = start !== min || end !== max;
      } else {
        const [val] = values.map(Number);
        this.currentValue = val;
        this.hasBeenManipulated = val !== min;
      }
      this.requestUpdate();
    });
    this.slider.noUiSlider.on("change", (values) => {
      if (this.mode === "range") {
        const [start, end] = values.map(Number);
        this.currentStartValue = start;
        this.currentEndValue = end;
        this.hasBeenManipulated = start !== min || end !== max;
        this.emit("terra-slider-change", {
          detail: { startValue: start, endValue: end }
        });
      } else {
        const [val] = values.map(Number);
        this.currentValue = val;
        this.hasBeenManipulated = val !== min;
        this.emit("terra-slider-change", { detail: { value: val } });
      }
      this.requestUpdate();
    });
    this.slider.noUiSlider.on("update", () => {
      this._updateInputFields();
    });
    this.slider.noUiSlider.on("change", () => {
      this._updateInputFields();
    });
    this.disabledChanged();
  }
  _updateInputFields() {
    if (!this.showInputs) {
      return;
    }
    const rawValues = this.slider.noUiSlider.get();
    const currentValues = Array.isArray(rawValues) ? rawValues : [rawValues];
    this.requestUpdate();
    setTimeout(() => {
      var _a, _b, _c;
      if (this.mode === "range") {
        const startInput = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(
          "#slider-start-input"
        );
        const endInput = (_b = this.shadowRoot) == null ? void 0 : _b.querySelector(
          "#slider-end-input"
        );
        if (startInput) {
          startInput.value = this._formatValue(Number(currentValues[0]));
        }
        if (endInput) {
          endInput.value = this._formatValue(Number(currentValues[1]));
        }
      } else {
        const valueInput = (_c = this.shadowRoot) == null ? void 0 : _c.querySelector(
          "#slider-value-input"
        );
        if (valueInput) {
          valueInput.value = this._formatValue(Number(currentValues[0]));
        }
      }
    }, 10);
  }
  _getFormatter() {
    const isIntegerStep = Number.isInteger(this.step);
    return {
      to: (value) => {
        if (isIntegerStep) {
          return Math.round(value).toString();
        } else {
          const stepStr = this.step.toString();
          const decimalPlaces = stepStr.includes(".") ? stepStr.split(".")[1].length : 0;
          return value.toFixed(decimalPlaces);
        }
      },
      from: (value) => {
        return Number(value);
      }
    };
  }
  _formatValue(value) {
    const numValue = Number(value);
    if (isNaN(numValue)) {
      return "0";
    }
    const isIntegerStep = Number.isInteger(this.step);
    if (isIntegerStep) {
      return Math.round(numValue).toString();
    } else {
      const stepStr = this.step.toString();
      const decimalPlaces = stepStr.includes(".") ? stepStr.split(".")[1].length : 0;
      return numValue.toFixed(decimalPlaces);
    }
  }
  handleClear() {
    const min = Number(this.min);
    const max = Number(this.max);
    if (this.mode === "range") {
      this.slider.noUiSlider.set([min, max]);
      this.currentStartValue = min;
      this.currentEndValue = max;
      this.hasBeenManipulated = false;
    } else {
      this.slider.noUiSlider.set([min]);
      this.currentValue = min;
      this.hasBeenManipulated = false;
    }
    this.requestUpdate();
  }
  render() {
    var _a, _b, _c;
    const containerClass = "container" + (this.hasPips ? " hasPips" : "");
    const min = Number(this.min);
    const max = Number(this.max);
    const startValue = (_a = this.currentStartValue) != null ? _a : this.mode === "range" ? min : void 0;
    const endValue = (_b = this.currentEndValue) != null ? _b : this.mode === "range" ? max : void 0;
    const singleValue = (_c = this.currentValue) != null ? _c : this.mode === "single" ? min : void 0;
    const currentRangeDisplay = this.mode === "range" ? `${this._formatValue(startValue)}\u2013${this._formatValue(endValue)}` : this._formatValue(singleValue);
    return x`
            <div class="slider">
                ${!this.hasTooltips ? x`
                          <div class="slider__header">
                              <label
                                  for="slider-control"
                                  class=${this.hideLabel ? "sr-only" : "slider__label"}
                                  >${this.label}</label
                              >
                              <div class="slider__header-right">
                                  ${this.hasBeenManipulated ? x`
                                            <button
                                                class="slider__clear"
                                                @click="${this.handleClear}"
                                                type="button"
                                            >
                                                Clear
                                            </button>
                                        ` : ""}
                                  <span class="slider__current-range"
                                      >${currentRangeDisplay}</span
                                  >
                              </div>
                          </div>
                      ` : x`
                          <label
                              for="slider-control"
                              class=${this.hideLabel ? "sr-only" : "slider__label"}
                              >${this.label}</label
                          >
                      `}
                <div class="${containerClass}">
                    <div part="slider" id="slider-control"></div>
                    ${this.showInputs ? this._renderInputFields() : ""}
                    <slot></slot>
                </div>
            </div>
        `;
  }
  _renderInputFields() {
    var _a, _b, _c, _d, _e, _f;
    if (this.mode === "range") {
      return x`
                <div class="slider-inputs">
                    <input
                        id="slider-start-input"
                        type="number"
                        .min="${this.min}"
                        .max="${this.max}"
                        .step="${this.step}"
                        .value="${this._formatValue(
        (_b = (_a = this.startValue) != null ? _a : this.min) != null ? _b : 0
      )}"
                        @change="${this._handleInputChange}"
                        @keydown="${this._handleInputKeydown}"
                    />
                    <span class="input-separator">to</span>
                    <input
                        id="slider-end-input"
                        type="number"
                        .min="${this.min}"
                        .max="${this.max}"
                        .step="${this.step}"
                        .value="${this._formatValue(
        (_d = (_c = this.endValue) != null ? _c : this.max) != null ? _d : 100
      )}"
                        @change="${this._handleInputChange}"
                        @keydown="${this._handleInputKeydown}"
                    />
                </div>
            `;
    } else {
      return x`
                <div class="slider-inputs">
                    <input
                        id="slider-value-input"
                        type="number"
                        .min="${this.min}"
                        .max="${this.max}"
                        .step="${this.step}"
                        .value="${this._formatValue((_f = (_e = this.value) != null ? _e : this.min) != null ? _f : 0)}"
                        @change="${this._handleInputChange}"
                        @keydown="${this._handleInputKeydown}"
                    />
                </div>
            `;
    }
  }
  _handleInputChange(event) {
    const input = event.target;
    const value = Number(input.value);
    const min = Number(this.min);
    const max = Number(this.max);
    const clampedValue = Math.max(min, Math.min(max, value));
    input.value = this._formatValue(clampedValue);
    if (this.mode === "range") {
      const currentValues = this.slider.noUiSlider.get();
      const newValues = [...currentValues];
      if (input.id === "slider-start-input") {
        newValues[0] = clampedValue;
      } else {
        newValues[1] = clampedValue;
      }
      this.slider.noUiSlider.set(newValues);
      this.emit("terra-slider-change", {
        detail: { startValue: newValues[0], endValue: newValues[1] }
      });
    } else {
      this.slider.noUiSlider.set([clampedValue]);
      this.emit("terra-slider-change", { detail: { value: clampedValue } });
    }
  }
  _handleInputKeydown(event) {
    if (event.key === "Enter") {
      ;
      event.target.blur();
    }
  }
};
TerraSlider.styles = [component_styles_default, slider_styles_default];
__decorateClass([
  e('[part~="slider"]')
], TerraSlider.prototype, "slider", 2);
__decorateClass([
  n({ reflect: true })
], TerraSlider.prototype, "mode", 2);
__decorateClass([
  n({ type: Number })
], TerraSlider.prototype, "min", 2);
__decorateClass([
  n({ type: Number })
], TerraSlider.prototype, "max", 2);
__decorateClass([
  n({ type: Number })
], TerraSlider.prototype, "step", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraSlider.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true, attribute: "has-pips" })
], TerraSlider.prototype, "hasPips", 2);
__decorateClass([
  n({ type: Boolean, reflect: true, attribute: "has-tooltips" })
], TerraSlider.prototype, "hasTooltips", 2);
__decorateClass([
  n({ type: Boolean, reflect: true, attribute: "show-inputs" })
], TerraSlider.prototype, "showInputs", 2);
__decorateClass([
  n({ type: Number })
], TerraSlider.prototype, "value", 2);
__decorateClass([
  n({ type: Number, attribute: "start-value" })
], TerraSlider.prototype, "startValue", 2);
__decorateClass([
  n({ type: Number, attribute: "end-value" })
], TerraSlider.prototype, "endValue", 2);
__decorateClass([
  n()
], TerraSlider.prototype, "label", 2);
__decorateClass([
  n({ attribute: "hide-label", type: Boolean })
], TerraSlider.prototype, "hideLabel", 2);
__decorateClass([
  r()
], TerraSlider.prototype, "currentStartValue", 2);
__decorateClass([
  r()
], TerraSlider.prototype, "currentEndValue", 2);
__decorateClass([
  r()
], TerraSlider.prototype, "currentValue", 2);
__decorateClass([
  r()
], TerraSlider.prototype, "hasBeenManipulated", 2);
__decorateClass([
  watch([
    "mode",
    "min",
    "max",
    "step",
    "value",
    "startValue",
    "endValue",
    "hasPips",
    "hasTooltips",
    "showInputs"
  ])
], TerraSlider.prototype, "updateSlider", 1);
__decorateClass([
  watch("disabled")
], TerraSlider.prototype, "disabledChanged", 1);

export {
  TerraSlider
};
