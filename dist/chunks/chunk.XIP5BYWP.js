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
  checkbox_styles_default
} from "./chunk.WBPI6EGN.js";
import {
  FormControlController
} from "./chunk.2H52FTL7.js";
import {
  o
} from "./chunk.VORUIAGH.js";
import {
  TerraIcon
} from "./chunk.3K2V77UJ.js";
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

// src/components/checkbox/checkbox.component.ts
init_dirname();
init_buffer();
init_process();
var TerraCheckbox = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      value: (control) => control.checked ? control.value || "on" : void 0,
      defaultValue: (control) => control.defaultChecked,
      setValue: (control, checked) => control.checked = checked
    });
    this.hasSlotController = new HasSlotController(this, "help-text");
    this.hasFocus = false;
    this.title = "";
    this.name = "";
    this.size = "medium";
    this.disabled = false;
    this.checked = false;
    this.indeterminate = false;
    this.defaultChecked = false;
    this.form = "";
    this.required = false;
    this.helpText = "";
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
  handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
    this.emit("terra-change");
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("terra-blur");
  }
  handleInput() {
    this.emit("terra-input");
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("terra-focus");
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleStateChange() {
    this.input.checked = this.checked;
    this.input.indeterminate = this.indeterminate;
    this.formControlController.updateValidity();
  }
  /** Simulates a click on the checkbox. */
  click() {
    this.input.click();
  }
  /** Sets focus on the checkbox. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the checkbox. */
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
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    return x`
            <div
                class=${e({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-help-text": hasHelpText
    })}
            >
                <label
                    part="base"
                    class=${e({
      checkbox: true,
      "checkbox--checked": this.checked,
      "checkbox--disabled": this.disabled,
      "checkbox--focused": this.hasFocus,
      "checkbox--indeterminate": this.indeterminate,
      "checkbox--small": this.size === "small",
      "checkbox--medium": this.size === "medium",
      "checkbox--large": this.size === "large"
    })}
                >
                    <input
                        class="checkbox__input"
                        type="checkbox"
                        title=${this.title}
                        name=${this.name}
                        value=${o(this.value)}
                        .indeterminate=${l(this.indeterminate)}
                        .checked=${l(this.checked)}
                        .disabled=${this.disabled}
                        .required=${this.required}
                        aria-checked=${this.checked ? "true" : "false"}
                        aria-describedby="help-text"
                        @click=${this.handleClick}
                        @input=${this.handleInput}
                        @invalid=${this.handleInvalid}
                        @blur=${this.handleBlur}
                        @focus=${this.handleFocus}
                    />

                    <span
                        part="control${this.checked ? " control--checked" : ""}${this.indeterminate ? " control--indeterminate" : ""}"
                        class="checkbox__control"
                    >
                        ${this.checked ? x`
                                  <terra-icon
                                      part="checked-icon"
                                      class="checkbox__checked-icon"
                                      library="heroicons"
                                      name="outline-check"
                                  ></terra-icon>
                              ` : ""}
                        ${!this.checked && this.indeterminate ? x`
                                  <terra-icon
                                      part="indeterminate-icon"
                                      class="checkbox__indeterminate-icon"
                                      library="heroicons"
                                      name="outline-minus"
                                  ></terra-icon>
                              ` : ""}
                    </span>

                    <div part="label" class="checkbox__label">
                        <slot></slot>
                    </div>
                </label>

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
TerraCheckbox.styles = [component_styles_default, form_control_styles_default, checkbox_styles_default];
TerraCheckbox.dependencies = { "terra-icon": TerraIcon };
__decorateClass([
  e2('input[type="checkbox"]')
], TerraCheckbox.prototype, "input", 2);
__decorateClass([
  r()
], TerraCheckbox.prototype, "hasFocus", 2);
__decorateClass([
  n()
], TerraCheckbox.prototype, "title", 2);
__decorateClass([
  n()
], TerraCheckbox.prototype, "name", 2);
__decorateClass([
  n()
], TerraCheckbox.prototype, "value", 2);
__decorateClass([
  n({ reflect: true })
], TerraCheckbox.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraCheckbox.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraCheckbox.prototype, "checked", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraCheckbox.prototype, "indeterminate", 2);
__decorateClass([
  defaultValue("checked")
], TerraCheckbox.prototype, "defaultChecked", 2);
__decorateClass([
  n({ reflect: true })
], TerraCheckbox.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraCheckbox.prototype, "required", 2);
__decorateClass([
  n({ attribute: "help-text" })
], TerraCheckbox.prototype, "helpText", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], TerraCheckbox.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch(["checked", "indeterminate"], { waitUntilFirstUpdate: true })
], TerraCheckbox.prototype, "handleStateChange", 1);

export {
  TerraCheckbox
};
