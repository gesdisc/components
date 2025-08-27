import {
  FormControlController,
  validValidityState
} from "./chunk.XUOBHXPV.js";
import {
  n as n2,
  o,
  s
} from "./chunk.J7JLAL3A.js";
import {
  button_styles_default
} from "./chunk.VIFKXWLG.js";
import {
  HasSlotController
} from "./chunk.GRPID3HM.js";
import {
  e
} from "./chunk.DVOLO45B.js";
import {
  watch
} from "./chunk.ZEDYVCUT.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.DZKPT4ML.js";
import {
  e as e2,
  n,
  r
} from "./chunk.KACZXI5J.js";
import {
  __decorateClass,
  __privateAdd,
  __privateMethod,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/button/button.component.ts
init_dirname();
init_buffer();
init_process();
var _handleDialogStateChange, handleDialogStateChange_fn;
var TerraButton = class extends TerraElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _handleDialogStateChange);
    this.formControlController = new FormControlController(this, {
      assumeInteractionOn: ["click"]
    });
    this.hasSlotController = new HasSlotController(
      this,
      "[default]",
      "prefix",
      "suffix"
    );
    this.hasFocus = false;
    this.invalid = false;
    this.title = "";
    this.variant = "primary";
    this.size = "medium";
    this.caret = false;
    this.disabled = false;
    this.loading = false;
    this.outline = false;
    this.circle = false;
    this.type = "button";
    this.name = "";
    this.value = "";
    this.href = "";
    this.rel = "noreferrer noopener";
    this.expanded = false;
  }
  /** Gets the validity state object */
  get validity() {
    if (this.isButton()) {
      return this.button.validity;
    }
    return validValidityState;
  }
  /** Gets the validation message */
  get validationMessage() {
    if (this.isButton()) {
      return this.button.validationMessage;
    }
    return "";
  }
  firstUpdated() {
    if (this.isButton()) {
      this.formControlController.updateValidity();
    }
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.forDialog) {
      document.addEventListener(
        "terra-dialog-show",
        __privateMethod(this, _handleDialogStateChange, handleDialogStateChange_fn).bind(this)
      );
      document.addEventListener(
        "terra-dialog-hide",
        __privateMethod(this, _handleDialogStateChange, handleDialogStateChange_fn).bind(this)
      );
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener(
      "terra-dialog-show",
      __privateMethod(this, _handleDialogStateChange, handleDialogStateChange_fn).bind(this)
    );
    document.removeEventListener(
      "terra-dialog-hide",
      __privateMethod(this, _handleDialogStateChange, handleDialogStateChange_fn).bind(this)
    );
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("sl-blur");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("sl-focus");
  }
  handleClick() {
    if (this.type === "submit") {
      this.formControlController.submit(this);
    }
    if (this.type === "reset") {
      this.formControlController.reset(this);
    }
    if (this.forDialog) {
      const el = document.getElementById(this.forDialog);
      el == null ? void 0 : el.show();
    }
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  isButton() {
    return this.href ? false : true;
  }
  isLink() {
    return this.href ? true : false;
  }
  handleDisabledChange() {
    if (this.isButton()) {
      this.formControlController.setValidity(this.disabled);
    }
  }
  /** Simulates a click on the button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the button. */
  focus(options) {
    this.button.focus(options);
  }
  /** Removes focus from the button. */
  blur() {
    this.button.blur();
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    if (this.isButton()) {
      return this.button.checkValidity();
    }
    return true;
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    if (this.isButton()) {
      return this.button.reportValidity();
    }
    return true;
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    if (this.isButton()) {
      ;
      this.button.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
  }
  setPageLinkIcon(href) {
    const parsedUrl = new URL(href);
    const linkDomain = parsedUrl.hostname;
    const hostDomain = globalThis.location.hostname;
    return linkDomain === hostDomain ? "outline-arrow-right" : "outline-arrow-up-right";
  }
  setFontSize(size) {
    switch (size) {
      case "small":
        return ".8rem";
      case "medium":
        return "1.2rem";
      case "large":
        return "1.5rem";
      default:
        return "1.5rem";
    }
  }
  render() {
    const isLink = this.isLink();
    const tag = isLink ? s`a` : s`button`;
    return n2`
      <${tag}
        part="base"
        class=${e({
      button: true,
      "button--default": this.variant === "default",
      "button--primary": this.variant === "primary",
      "button--success": this.variant === "success",
      "button--warning": this.variant === "warning",
      "button--danger": this.variant === "danger",
      "button--text": this.variant === "text",
      "button--pagelink": this.variant === "pagelink",
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--caret": this.caret,
      "button--square-left": this.shape === "square-left",
      "button--square": this.shape === "square",
      "button--square-right": this.shape === "square-right",
      "button--circle": this.circle,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--loading": this.loading,
      "button--standard": !this.outline,
      "button--outline": this.outline,
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix")
    })}
        ?disabled=${o(isLink ? void 0 : this.disabled)}
        type=${o(isLink ? void 0 : this.type)}
        title=${this.title}
        name=${o(isLink ? void 0 : this.name)}
        value=${o(isLink ? void 0 : this.value)}
        href=${o(isLink ? this.href : void 0)}
        target=${o(isLink ? this.target : void 0)}
        download=${o(isLink ? this.download : void 0)}
        rel=${o(isLink ? this.rel : void 0)}
        role=${o(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
        aria-controls=${o(this.forDialog || void 0)} 
        ?aria-haspopup=${this.forDialog ? "dialog" : void 0}
        aria-expanded=${o(this.forDialog ? this.expanded : void 0)}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix">
            ${this.variant == "pagelink" ? n2`
                          <span>
                              <terra-icon
                                  name=${this.setPageLinkIcon(this.href)}
                                  library="heroicons"
                                  font-size=${this.setFontSize(this.size)}
                              ></terra-icon>
                          </span>
                      ` : ``}
        </slot>
      </${tag}>
    `;
  }
};
_handleDialogStateChange = new WeakSet();
handleDialogStateChange_fn = function(e3) {
  if (this.forDialog && this.forDialog === e3.target.id) {
    this.expanded = e3.target.open;
  }
};
TerraButton.styles = [component_styles_default, button_styles_default];
__decorateClass([
  e2(".button")
], TerraButton.prototype, "button", 2);
__decorateClass([
  r()
], TerraButton.prototype, "hasFocus", 2);
__decorateClass([
  r()
], TerraButton.prototype, "invalid", 2);
__decorateClass([
  n()
], TerraButton.prototype, "title", 2);
__decorateClass([
  n({ reflect: true })
], TerraButton.prototype, "variant", 2);
__decorateClass([
  n({ reflect: true })
], TerraButton.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraButton.prototype, "caret", 2);
__decorateClass([
  n({ reflect: true })
], TerraButton.prototype, "shape", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraButton.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraButton.prototype, "loading", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraButton.prototype, "outline", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraButton.prototype, "circle", 2);
__decorateClass([
  n()
], TerraButton.prototype, "type", 2);
__decorateClass([
  n()
], TerraButton.prototype, "name", 2);
__decorateClass([
  n()
], TerraButton.prototype, "value", 2);
__decorateClass([
  n()
], TerraButton.prototype, "href", 2);
__decorateClass([
  n()
], TerraButton.prototype, "target", 2);
__decorateClass([
  n()
], TerraButton.prototype, "rel", 2);
__decorateClass([
  n()
], TerraButton.prototype, "download", 2);
__decorateClass([
  n()
], TerraButton.prototype, "form", 2);
__decorateClass([
  n({ attribute: "formaction" })
], TerraButton.prototype, "formAction", 2);
__decorateClass([
  n({ attribute: "formenctype" })
], TerraButton.prototype, "formEnctype", 2);
__decorateClass([
  n({ attribute: "formmethod" })
], TerraButton.prototype, "formMethod", 2);
__decorateClass([
  n({ attribute: "formnovalidate", type: Boolean })
], TerraButton.prototype, "formNoValidate", 2);
__decorateClass([
  n({ attribute: "formtarget" })
], TerraButton.prototype, "formTarget", 2);
__decorateClass([
  n({ attribute: "for-dialog" })
], TerraButton.prototype, "forDialog", 2);
__decorateClass([
  r()
], TerraButton.prototype, "expanded", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], TerraButton.prototype, "handleDisabledChange", 1);

export {
  TerraButton
};
