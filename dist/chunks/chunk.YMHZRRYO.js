import {
  radio_styles_default
} from "./chunk.LNDII3ME.js";
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

// src/components/radio/radio.component.ts
init_dirname();
init_buffer();
init_process();
var TerraRadio = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      value: (control) => control.checked ? control.value || "on" : void 0,
      defaultValue: (control) => control.defaultChecked,
      setValue: (control, checked) => control.checked = checked
    });
    this.hasFocus = false;
    this.title = "";
    this.name = "";
    this.size = "medium";
    this.disabled = false;
    this.checked = false;
    this.defaultChecked = false;
    this.form = "";
    this.required = false;
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
  handleBlur() {
    this.hasFocus = false;
    this.emit("terra-blur");
  }
  handleClick() {
    if (!this.disabled) {
      this.checked = true;
      this.emit("terra-change");
    }
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("terra-focus");
  }
  handleInput() {
    this.emit("terra-input");
  }
  handleChange() {
    this.checked = this.input.checked;
    this.emit("terra-change");
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleCheckedChange() {
    this.input.checked = this.checked;
    this.formControlController.updateValidity();
  }
  /** Simulates a click on the radio. */
  click() {
    this.input.click();
  }
  /** Sets focus on the radio. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the radio. */
  blur() {
    this.input.blur();
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
  render() {
    return x`
            <label
                part="base"
                class=${e({
      radio: true,
      "radio--checked": this.checked,
      "radio--disabled": this.disabled,
      "radio--focused": this.hasFocus,
      "radio--small": this.size === "small",
      "radio--medium": this.size === "medium",
      "radio--large": this.size === "large"
    })}
            >
                <input
                    class="radio__input"
                    type="radio"
                    title=${this.title}
                    name=${this.name}
                    value=${o(this.value)}
                    .checked=${l(this.checked)}
                    .disabled=${this.disabled}
                    .required=${this.required}
                    aria-checked=${this.checked ? "true" : "false"}
                    @click=${this.handleClick}
                    @input=${this.handleInput}
                    @change=${this.handleChange}
                    @invalid=${this.handleInvalid}
                    @blur=${this.handleBlur}
                    @focus=${this.handleFocus}
                />

                <span
                    part="${`control${this.checked ? " control--checked" : ""}`}"
                    class="radio__control"
                >
                    ${this.checked ? x`
                              <svg
                                  part="checked-icon"
                                  class="radio__checked-icon"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <circle cx="12" cy="12" r="6" fill="currentColor" />
                              </svg>
                          ` : ""}
                </span>

                <slot part="label" class="radio__label"></slot>
            </label>
        `;
  }
};
TerraRadio.styles = [component_styles_default, form_control_styles_default, radio_styles_default];
__decorateClass([
  e2('input[type="radio"]')
], TerraRadio.prototype, "input", 2);
__decorateClass([
  r()
], TerraRadio.prototype, "hasFocus", 2);
__decorateClass([
  n()
], TerraRadio.prototype, "title", 2);
__decorateClass([
  n()
], TerraRadio.prototype, "name", 2);
__decorateClass([
  n()
], TerraRadio.prototype, "value", 2);
__decorateClass([
  n({ reflect: true })
], TerraRadio.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraRadio.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraRadio.prototype, "checked", 2);
__decorateClass([
  defaultValue("checked")
], TerraRadio.prototype, "defaultChecked", 2);
__decorateClass([
  n({ reflect: true })
], TerraRadio.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraRadio.prototype, "required", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], TerraRadio.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("checked", { waitUntilFirstUpdate: true })
], TerraRadio.prototype, "handleCheckedChange", 1);

export {
  TerraRadio
};
