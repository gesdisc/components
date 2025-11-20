import {
  radio_group_styles_default
} from "./chunk.BASB6BNH.js";
import {
  form_control_styles_default
} from "./chunk.XFLICMD4.js";
import {
  FormControlController,
  customErrorValidityState,
  validValidityState,
  valueMissingValidityState
} from "./chunk.2H52FTL7.js";
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

// src/components/radio-group/radio-group.component.ts
init_dirname();
init_buffer();
init_process();
var TerraRadioGroup = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this);
    this.hasSlotController = new HasSlotController(
      this,
      "help-text",
      "label"
    );
    this.customValidityMessage = "";
    this.errorMessage = "";
    this.defaultValue = "";
    this.label = "";
    this.helpText = "";
    this.name = "option";
    this.value = "";
    this.size = "medium";
    this.form = "";
    this.required = false;
  }
  /** Gets the validity state object */
  get validity() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== "";
    if (hasCustomValidityMessage) {
      return customErrorValidityState;
    } else if (isRequiredAndEmpty) {
      return valueMissingValidityState;
    }
    return validValidityState;
  }
  /** Gets the validation message */
  get validationMessage() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== "";
    if (hasCustomValidityMessage) {
      return this.customValidityMessage;
    } else if (isRequiredAndEmpty) {
      return this.validationInput.validationMessage;
    }
    return "";
  }
  connectedCallback() {
    super.connectedCallback();
    this.defaultValue = this.value;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  getAllRadios() {
    return [...this.querySelectorAll("terra-radio")];
  }
  handleRadioClick(event) {
    const target = event.target.closest(
      "terra-radio"
    );
    const radios = this.getAllRadios();
    const oldValue = this.value;
    if (!target || target.disabled) {
      return;
    }
    this.value = target.value;
    radios.forEach((radio) => radio.checked = radio === target);
    if (this.value !== oldValue) {
      this.emit("terra-change");
      this.emit("terra-input");
    }
  }
  handleKeyDown(event) {
    var _a;
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(
      event.key
    )) {
      return;
    }
    const radios = this.getAllRadios().filter((radio) => !radio.disabled);
    const checkedRadio = (_a = radios.find((radio) => radio.checked)) != null ? _a : radios[0];
    const incr = event.key === " " ? 0 : ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
    const oldValue = this.value;
    let index = radios.indexOf(checkedRadio) + incr;
    if (index < 0) {
      index = radios.length - 1;
    }
    if (index > radios.length - 1) {
      index = 0;
    }
    this.getAllRadios().forEach((radio) => {
      radio.checked = false;
    });
    this.value = radios[index].value;
    radios[index].checked = true;
    radios[index].focus();
    if (this.value !== oldValue) {
      this.emit("terra-change");
      this.emit("terra-input");
    }
    event.preventDefault();
  }
  handleLabelClick() {
    this.focus();
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  async syncRadioElements() {
    const radios = this.getAllRadios();
    await Promise.all(
      // Sync the checked state and size
      radios.map(async (radio) => {
        await radio.updateComplete;
        radio.checked = radio.value === this.value;
        radio.size = this.size;
      })
    );
    radios.forEach((radio) => {
      radio.name = this.name;
    });
  }
  syncRadios() {
    const radios = this.getAllRadios();
    radios.forEach((radio) => {
      radio.name = this.name;
    });
    if (customElements.get("terra-radio")) {
      this.syncRadioElements();
    } else {
      customElements.whenDefined("terra-radio").then(() => this.syncRadios());
    }
  }
  updateCheckedRadio() {
    const radios = this.getAllRadios();
    radios.forEach((radio) => radio.checked = radio.value === this.value);
    this.formControlController.setValidity(this.validity.valid);
  }
  handleNameChange() {
    const radios = this.getAllRadios();
    radios.forEach((radio) => {
      radio.name = this.name;
    });
  }
  handleSizeChange() {
    this.syncRadios();
  }
  handleValueChange() {
    if (this.hasUpdated) {
      this.updateCheckedRadio();
    }
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== "";
    if (isRequiredAndEmpty || hasCustomValidityMessage) {
      this.formControlController.emitInvalidEvent();
      return false;
    }
    return true;
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    const isValid = this.validity.valid;
    this.errorMessage = this.customValidityMessage || isValid ? "" : this.validationInput.validationMessage;
    this.formControlController.setValidity(isValid);
    this.validationInput.hidden = true;
    clearTimeout(this.validationTimeout);
    if (!isValid) {
      this.validationInput.hidden = false;
      this.validationInput.reportValidity();
      this.validationTimeout = setTimeout(
        () => this.validationInput.hidden = true,
        1e4
      );
    }
    return isValid;
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message = "") {
    this.customValidityMessage = message;
    this.errorMessage = message;
    this.validationInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  /** Sets focus on the radio-group. */
  focus(options) {
    const radios = this.getAllRadios();
    const checked = radios.find((radio) => radio.checked);
    const firstEnabledRadio = radios.find((radio) => !radio.disabled);
    const radioToFocus = checked || firstEnabledRadio;
    if (radioToFocus) {
      radioToFocus.focus(options);
    }
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const defaultSlot = x`
            <slot
                @slotchange=${this.syncRadios}
                @click=${this.handleRadioClick}
                @keydown=${this.handleKeyDown}
            ></slot>
        `;
    return x`
            <fieldset
                part="form-control"
                class=${e({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--radio-group": true,
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
                role="radiogroup"
                aria-labelledby="label"
                aria-describedby="help-text"
                aria-errormessage="error-message"
            >
                <label
                    part="form-control-label"
                    id="label"
                    class="form-control__label"
                    aria-hidden=${hasLabel ? "false" : "true"}
                    @click=${this.handleLabelClick}
                >
                    <slot name="label">${this.label}</slot>
                </label>

                <div part="form-control-input" class="form-control-input">
                    <div class="visually-hidden">
                        <div id="error-message" aria-live="assertive">
                            ${this.errorMessage}
                        </div>
                        <label class="radio-group__validation">
                            <input
                                type="text"
                                class="radio-group__validation-input"
                                ?required=${this.required}
                                tabindex="-1"
                                hidden
                                @invalid=${this.handleInvalid}
                            />
                        </label>
                    </div>

                    ${defaultSlot}
                </div>

                <div
                    part="form-control-help-text"
                    id="help-text"
                    class="form-control__help-text"
                    aria-hidden=${hasHelpText ? "false" : "true"}
                >
                    <slot name="help-text">${this.helpText}</slot>
                </div>
            </fieldset>
        `;
  }
};
TerraRadioGroup.styles = [component_styles_default, form_control_styles_default, radio_group_styles_default];
__decorateClass([
  e2("slot:not([name])")
], TerraRadioGroup.prototype, "defaultSlot", 2);
__decorateClass([
  e2(".radio-group__validation-input")
], TerraRadioGroup.prototype, "validationInput", 2);
__decorateClass([
  r()
], TerraRadioGroup.prototype, "errorMessage", 2);
__decorateClass([
  r()
], TerraRadioGroup.prototype, "defaultValue", 2);
__decorateClass([
  n()
], TerraRadioGroup.prototype, "label", 2);
__decorateClass([
  n({ attribute: "help-text" })
], TerraRadioGroup.prototype, "helpText", 2);
__decorateClass([
  n()
], TerraRadioGroup.prototype, "name", 2);
__decorateClass([
  n({ reflect: true })
], TerraRadioGroup.prototype, "value", 2);
__decorateClass([
  n({ reflect: true })
], TerraRadioGroup.prototype, "size", 2);
__decorateClass([
  n({ reflect: true })
], TerraRadioGroup.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraRadioGroup.prototype, "required", 2);
__decorateClass([
  watch("name", { waitUntilFirstUpdate: true })
], TerraRadioGroup.prototype, "handleNameChange", 1);
__decorateClass([
  watch("size", { waitUntilFirstUpdate: true })
], TerraRadioGroup.prototype, "handleSizeChange", 1);
__decorateClass([
  watch("value")
], TerraRadioGroup.prototype, "handleValueChange", 1);

export {
  TerraRadioGroup
};
