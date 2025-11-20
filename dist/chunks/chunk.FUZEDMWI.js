import {
  input_styles_default
} from "./chunk.MVWWFRVV.js";
import {
  defaultValue
} from "./chunk.27OJGVH3.js";
import {
  l
} from "./chunk.ULWZSOMI.js";
import {
  form_control_styles_default
} from "./chunk.XFLICMD4.js";
import {
  FormControlController
} from "./chunk.2H52FTL7.js";
import {
  o
} from "./chunk.VORUIAGH.js";
import {
  HasSlotController
} from "./chunk.UTYLQIRH.js";
import {
  e
} from "./chunk.XMZR4BZJ.js";
import {
  watch
} from "./chunk.IGV6JSNT.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.XCIW4BFM.js";
import {
  e as e2,
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

// src/components/input/input.component.ts
init_dirname();
init_buffer();
init_process();
var TerraInput = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      value: (control) => control.value,
      defaultValue: (control) => control.defaultValue,
      setValue: (control, value) => control.value = value
    });
    this.hasSlotController = new HasSlotController(this, "help-text");
    this.hasFocus = false;
    this.type = "text";
    this.name = "";
    this.value = "";
    this.placeholder = "";
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.inputMode = "text";
    this.label = "";
    this.hideLabel = false;
    this.helpText = "";
    this.defaultValue = "";
    this.form = "";
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  handleInput() {
    this.value = this.input.value;
    this.formControlController.updateValidity();
    this.emit("terra-input");
  }
  handleChange() {
    this.value = this.input.value;
    this.formControlController.updateValidity();
    this.emit("terra-change");
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("terra-focus");
  }
  handleBlur() {
    this.hasFocus = false;
    this.formControlController.updateValidity();
    this.emit("terra-blur");
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /**
   * Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
   * the custom validation message, call this method with an empty string.
   */
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  focus(options) {
    this.input.focus(options);
  }
  blur() {
    this.input.blur();
  }
  select() {
    this.input.select();
  }
  setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
    this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }
  render() {
    const hasPrefix = this.querySelector('[slot="prefix"]') !== null;
    const hasSuffix = this.querySelector('[slot="suffix"]') !== null;
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    return x`
            <div
                class=${e({
      "form-control": true,
      "form-control--has-help-text": hasHelpText
    })}
            >
                ${this.label ? x`
                          <label
                              for="input"
                              part="form-control-label"
                              class=${this.hideLabel ? "input__label input__label--hidden" : "input__label"}
                          >
                              ${this.label}
                              ${this.required ? x`<span class="input__required-indicator"
                                        >*</span
                                    >` : ""}
                          </label>
                      ` : ""}

                <div
                    part="base"
                    class=${e({
      input: true,
      "input--disabled": this.disabled,
      "input--focused": this.hasFocus,
      "input--has-prefix": hasPrefix,
      "input--has-suffix": hasSuffix
    })}
                >
                    ${hasPrefix ? x`
                              <span part="prefix" class="input__prefix">
                                  <slot name="prefix"></slot>
                              </span>
                          ` : ""}

                    <input
                        part="input"
                        id="input"
                        class="input__control"
                        type=${this.type}
                        name=${o(this.name || void 0)}
                        ?disabled=${this.disabled}
                        ?readonly=${this.readonly}
                        ?required=${this.required}
                        placeholder=${o(this.placeholder || void 0)}
                        minlength=${o(this.minlength)}
                        maxlength=${o(this.maxlength)}
                        min=${o(this.min)}
                        max=${o(this.max)}
                        step=${o(this.step)}
                        .value=${l(this.value)}
                        autocomplete=${o(this.autocomplete)}
                        pattern=${o(this.pattern)}
                        inputmode=${o(this.inputMode)}
                        aria-describedby="help-text"
                        @input=${this.handleInput}
                        @change=${this.handleChange}
                        @invalid=${this.handleInvalid}
                        @focus=${this.handleFocus}
                        @blur=${this.handleBlur}
                    />

                    ${hasSuffix ? x`
                              <span part="suffix" class="input__suffix">
                                  <slot name="suffix"></slot>
                              </span>
                          ` : ""}
                </div>

                <div
                    aria-hidden=${hasHelpText ? "false" : "true"}
                    class="form-control__help-text"
                    id="help-text"
                    part="form-control-help-text"
                >
                    <slot name="help-text">${this.helpText}</slot>
                </div>
            </div>
        `;
  }
};
TerraInput.styles = [component_styles_default, form_control_styles_default, input_styles_default];
__decorateClass([
  e2(".input__control")
], TerraInput.prototype, "input", 2);
__decorateClass([
  r()
], TerraInput.prototype, "hasFocus", 2);
__decorateClass([
  n()
], TerraInput.prototype, "type", 2);
__decorateClass([
  n()
], TerraInput.prototype, "name", 2);
__decorateClass([
  n()
], TerraInput.prototype, "value", 2);
__decorateClass([
  n()
], TerraInput.prototype, "placeholder", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraInput.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraInput.prototype, "readonly", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraInput.prototype, "required", 2);
__decorateClass([
  n()
], TerraInput.prototype, "autocomplete", 2);
__decorateClass([
  n({ type: Number })
], TerraInput.prototype, "minlength", 2);
__decorateClass([
  n({ type: Number })
], TerraInput.prototype, "maxlength", 2);
__decorateClass([
  n()
], TerraInput.prototype, "min", 2);
__decorateClass([
  n()
], TerraInput.prototype, "max", 2);
__decorateClass([
  n()
], TerraInput.prototype, "step", 2);
__decorateClass([
  n()
], TerraInput.prototype, "pattern", 2);
__decorateClass([
  n({ attribute: "input-mode" })
], TerraInput.prototype, "inputMode", 2);
__decorateClass([
  n()
], TerraInput.prototype, "label", 2);
__decorateClass([
  n({ attribute: "hide-label", type: Boolean })
], TerraInput.prototype, "hideLabel", 2);
__decorateClass([
  n({ attribute: "help-text" })
], TerraInput.prototype, "helpText", 2);
__decorateClass([
  defaultValue("value")
], TerraInput.prototype, "defaultValue", 2);
__decorateClass([
  n({ reflect: true })
], TerraInput.prototype, "form", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], TerraInput.prototype, "handleDisabledChange", 1);

export {
  TerraInput
};
