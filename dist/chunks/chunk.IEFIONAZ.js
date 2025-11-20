import {
  textarea_styles_default
} from "./chunk.ECSNS6NE.js";
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

// src/components/textarea/textarea.component.ts
init_dirname();
init_buffer();
init_process();
var TerraTextarea = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      value: (control) => control.value,
      defaultValue: (control) => control.defaultValue,
      setValue: (control, value) => control.value = value
    });
    this.hasSlotController = new HasSlotController(this, "help-text");
    this.hasFocus = false;
    this.name = "";
    this.value = "";
    this.placeholder = "";
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.label = "";
    this.hideLabel = false;
    this.helpText = "";
    this.resize = "vertical";
    this.defaultValue = "";
    this.form = "";
  }
  /** Gets the validity state object */
  get validity() {
    return this.textarea.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.textarea.validationMessage;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  handleInput() {
    this.value = this.textarea.value;
    this.formControlController.updateValidity();
    this.emit("terra-input");
  }
  handleChange() {
    this.value = this.textarea.value;
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
    return this.textarea.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.textarea.reportValidity();
  }
  /**
   * Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
   * the custom validation message, call this method with an empty string.
   */
  setCustomValidity(message) {
    this.textarea.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  focus(options) {
    this.textarea.focus(options);
  }
  blur() {
    this.textarea.blur();
  }
  select() {
    this.textarea.select();
  }
  setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
    this.textarea.setSelectionRange(
      selectionStart,
      selectionEnd,
      selectionDirection
    );
  }
  render() {
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
                              for="textarea"
                              part="form-control-label"
                              class=${this.hideLabel ? "textarea__label textarea__label--hidden" : "textarea__label"}
                          >
                              ${this.label}
                              ${this.required ? x`<span class="textarea__required-indicator"
                                        >*</span
                                    >` : ""}
                          </label>
                      ` : ""}

                <div
                    part="base"
                    class=${e({
      textarea: true,
      "textarea--disabled": this.disabled,
      "textarea--focused": this.hasFocus,
      "textarea--resize-none": this.resize === "none",
      "textarea--resize-both": this.resize === "both",
      "textarea--resize-horizontal": this.resize === "horizontal",
      "textarea--resize-vertical": this.resize === "vertical"
    })}
                >
                    <textarea
                        part="textarea"
                        id="textarea"
                        class="textarea__control"
                        name=${o(this.name || void 0)}
                        ?disabled=${this.disabled}
                        ?readonly=${this.readonly}
                        ?required=${this.required}
                        placeholder=${o(this.placeholder || void 0)}
                        minlength=${o(this.minlength)}
                        maxlength=${o(this.maxlength)}
                        rows=${o(this.rows)}
                        cols=${o(this.cols)}
                        .value=${l(this.value)}
                        autocomplete=${o(this.autocomplete)}
                        aria-describedby="help-text"
                        @input=${this.handleInput}
                        @change=${this.handleChange}
                        @invalid=${this.handleInvalid}
                        @focus=${this.handleFocus}
                        @blur=${this.handleBlur}
                    ></textarea>
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
TerraTextarea.styles = [component_styles_default, form_control_styles_default, textarea_styles_default];
__decorateClass([
  e2(".textarea__control")
], TerraTextarea.prototype, "textarea", 2);
__decorateClass([
  r()
], TerraTextarea.prototype, "hasFocus", 2);
__decorateClass([
  n()
], TerraTextarea.prototype, "name", 2);
__decorateClass([
  n()
], TerraTextarea.prototype, "value", 2);
__decorateClass([
  n()
], TerraTextarea.prototype, "placeholder", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraTextarea.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraTextarea.prototype, "readonly", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraTextarea.prototype, "required", 2);
__decorateClass([
  n()
], TerraTextarea.prototype, "autocomplete", 2);
__decorateClass([
  n({ type: Number })
], TerraTextarea.prototype, "minlength", 2);
__decorateClass([
  n({ type: Number })
], TerraTextarea.prototype, "maxlength", 2);
__decorateClass([
  n({ type: Number })
], TerraTextarea.prototype, "rows", 2);
__decorateClass([
  n({ type: Number })
], TerraTextarea.prototype, "cols", 2);
__decorateClass([
  n()
], TerraTextarea.prototype, "label", 2);
__decorateClass([
  n({ attribute: "hide-label", type: Boolean })
], TerraTextarea.prototype, "hideLabel", 2);
__decorateClass([
  n({ attribute: "help-text" })
], TerraTextarea.prototype, "helpText", 2);
__decorateClass([
  n({ reflect: true })
], TerraTextarea.prototype, "resize", 2);
__decorateClass([
  defaultValue("value")
], TerraTextarea.prototype, "defaultValue", 2);
__decorateClass([
  n({ reflect: true })
], TerraTextarea.prototype, "form", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], TerraTextarea.prototype, "handleDisabledChange", 1);

export {
  TerraTextarea
};
