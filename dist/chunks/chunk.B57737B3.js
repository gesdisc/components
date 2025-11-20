import {
  toggle_styles_default
} from "./chunk.CD3BSMOQ.js";
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

// src/components/toggle/toggle.component.ts
init_dirname();
init_buffer();
init_process();
var TerraToggle = class extends TerraElement {
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
  handleClick() {
    this.checked = !this.checked;
    this.emit("terra-change");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("terra-focus");
  }
  handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.checked = false;
      this.emit("terra-change");
      this.emit("terra-input");
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      this.checked = true;
      this.emit("terra-change");
      this.emit("terra-input");
    }
  }
  handleCheckedChange() {
    this.input.checked = this.checked;
    this.formControlController.updateValidity();
  }
  handleDisabledChange() {
    this.formControlController.setValidity(true);
  }
  /** Simulates a click on the switch. */
  click() {
    this.input.click();
  }
  /** Sets focus on the switch. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the switch. */
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
  /** Sets a custom validation message. Pass an empty string to restore validity. */
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
      toggle: true,
      "toggle--checked": this.checked,
      "toggle--disabled": this.disabled,
      "toggle--focused": this.hasFocus,
      "toggle--small": this.size === "small",
      "toggle--medium": this.size === "medium",
      "toggle--large": this.size === "large"
    })}
                >
                    <input
                        class="toggle__input"
                        type="checkbox"
                        title=${this.title}
                        name=${this.name}
                        value=${o(this.value)}
                        .checked=${l(this.checked)}
                        .disabled=${this.disabled}
                        .required=${this.required}
                        role="switch"
                        aria-checked=${this.checked ? "true" : "false"}
                        aria-describedby="help-text"
                        @click=${this.handleClick}
                        @input=${this.handleInput}
                        @invalid=${this.handleInvalid}
                        @blur=${this.handleBlur}
                        @focus=${this.handleFocus}
                        @keydown=${this.handleKeyDown}
                    />

                    <span part="control" class="toggle__control">
                        <span part="thumb" class="toggle__thumb"></span>
                    </span>

                    <div part="label" class="toggle__label">
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
TerraToggle.styles = [component_styles_default, form_control_styles_default, toggle_styles_default];
__decorateClass([
  e2('input[type="checkbox"]')
], TerraToggle.prototype, "input", 2);
__decorateClass([
  r()
], TerraToggle.prototype, "hasFocus", 2);
__decorateClass([
  n()
], TerraToggle.prototype, "title", 2);
__decorateClass([
  n()
], TerraToggle.prototype, "name", 2);
__decorateClass([
  n()
], TerraToggle.prototype, "value", 2);
__decorateClass([
  n({ reflect: true })
], TerraToggle.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraToggle.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraToggle.prototype, "checked", 2);
__decorateClass([
  defaultValue("checked")
], TerraToggle.prototype, "defaultChecked", 2);
__decorateClass([
  n({ reflect: true })
], TerraToggle.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraToggle.prototype, "required", 2);
__decorateClass([
  n({ attribute: "help-text" })
], TerraToggle.prototype, "helpText", 2);
__decorateClass([
  watch("checked", { waitUntilFirstUpdate: true })
], TerraToggle.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], TerraToggle.prototype, "handleDisabledChange", 1);

export {
  TerraToggle
};
