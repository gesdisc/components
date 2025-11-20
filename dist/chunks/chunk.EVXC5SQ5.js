import {
  o
} from "./chunk.TQTL6RVG.js";
import {
  TerraTag
} from "./chunk.RXQHGXEF.js";
import {
  select_styles_default
} from "./chunk.Z2TCKY7I.js";
import {
  animateTo,
  stopAnimations
} from "./chunk.UJKVT5HV.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.HZJ2TFAH.js";
import {
  TerraPopup
} from "./chunk.3FSBAPKP.js";
import {
  form_control_styles_default
} from "./chunk.XFLICMD4.js";
import {
  FormControlController
} from "./chunk.2H52FTL7.js";
import {
  TerraIcon
} from "./chunk.3K2V77UJ.js";
import {
  waitForEvent
} from "./chunk.6EGFVFVD.js";
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

// src/components/select/select.component.ts
init_dirname();
init_buffer();
init_process();

// src/internal/scroll.ts
init_dirname();
init_buffer();
init_process();

// src/internal/offset.ts
init_dirname();
init_buffer();
init_process();
function getOffset(element, parent) {
  return {
    top: Math.round(
      element.getBoundingClientRect().top - parent.getBoundingClientRect().top
    ),
    left: Math.round(
      element.getBoundingClientRect().left - parent.getBoundingClientRect().left
    )
  };
}

// src/internal/scroll.ts
function scrollIntoView(element, container, direction = "vertical", behavior = "smooth") {
  const offset = getOffset(element, container);
  const offsetTop = offset.top + container.scrollTop;
  const offsetLeft = offset.left + container.scrollLeft;
  const minX = container.scrollLeft;
  const maxX = container.scrollLeft + container.offsetWidth;
  const minY = container.scrollTop;
  const maxY = container.scrollTop + container.offsetHeight;
  if (direction === "horizontal" || direction === "both") {
    if (offsetLeft < minX) {
      container.scrollTo({ left: offsetLeft, behavior });
    } else if (offsetLeft + element.clientWidth > maxX) {
      container.scrollTo({
        left: offsetLeft - container.offsetWidth + element.clientWidth,
        behavior
      });
    }
  }
  if (direction === "vertical" || direction === "both") {
    if (offsetTop < minY) {
      container.scrollTo({ top: offsetTop, behavior });
    } else if (offsetTop + element.clientHeight > maxY) {
      container.scrollTo({
        top: offsetTop - container.offsetHeight + element.clientHeight,
        behavior
      });
    }
  }
}

// src/components/select/select.component.ts
var TerraSelect = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      assumeInteractionOn: ["terra-blur", "terra-input"]
    });
    this.hasSlotController = new HasSlotController(
      this,
      "help-text",
      "label"
    );
    this.typeToSelectString = "";
    this.hasFocus = false;
    this.displayLabel = "";
    this.selectedOptions = [];
    this.valueHasChanged = false;
    this.name = "";
    this._value = "";
    this.defaultValue = "";
    this.size = "medium";
    this.placeholder = "";
    this.multiple = false;
    this.maxOptionsVisible = 3;
    this.disabled = false;
    this.clearable = false;
    this.open = false;
    this.hoist = false;
    this.filled = false;
    this.pill = false;
    this.label = "";
    this.placement = "bottom";
    this.helpText = "";
    this.form = "";
    this.required = false;
    this.getTag = (option) => {
      return x`
            <terra-tag
                part="tag"
                variant="topic"
                size=${this.size}
                @terra-remove=${(event) => this.handleTagRemove(event, option)}
            >
                ${option.getTextLabel()}
            </terra-tag>
        `;
    };
    this.handleDocumentFocusIn = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
    this.handleDocumentKeyDown = (event) => {
      const target = event.target;
      const isClearButton = target.closest(".select__clear") !== null;
      const isIconButton = target.closest("terra-icon-button") !== null;
      if (isClearButton || isIconButton) {
        return;
      }
      if (event.key === "Escape" && this.open && !this.closeWatcher) {
        event.preventDefault();
        event.stopPropagation();
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      }
      if (event.key === "Enter" || event.key === " " && this.typeToSelectString === "") {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (!this.open) {
          this.show();
          return;
        }
        if (this.currentOption && !this.currentOption.disabled) {
          this.valueHasChanged = true;
          if (this.multiple) {
            this.toggleOptionSelection(this.currentOption);
          } else {
            this.setSelectedOptions(this.currentOption);
          }
          this.updateComplete.then(() => {
            this.emit("terra-input");
            this.emit("terra-change");
          });
          if (!this.multiple) {
            this.hide();
            this.displayInput.focus({ preventScroll: true });
          }
        }
        return;
      }
      if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
        const allOptions = this.getAllOptions();
        const currentIndex = allOptions.indexOf(this.currentOption);
        let newIndex = Math.max(0, currentIndex);
        event.preventDefault();
        if (!this.open) {
          this.show();
          if (this.currentOption) {
            return;
          }
        }
        if (event.key === "ArrowDown") {
          newIndex = currentIndex + 1;
          if (newIndex > allOptions.length - 1)
            newIndex = 0;
        } else if (event.key === "ArrowUp") {
          newIndex = currentIndex - 1;
          if (newIndex < 0)
            newIndex = allOptions.length - 1;
        } else if (event.key === "Home") {
          newIndex = 0;
        } else if (event.key === "End") {
          newIndex = allOptions.length - 1;
        }
        this.setCurrentOption(allOptions[newIndex]);
      }
      if (event.key && event.key.length === 1 || event.key === "Backspace") {
        const allOptions = this.getAllOptions();
        if (event.metaKey || event.ctrlKey || event.altKey) {
          return;
        }
        if (!this.open) {
          if (event.key === "Backspace") {
            return;
          }
          this.show();
        }
        event.stopPropagation();
        event.preventDefault();
        clearTimeout(this.typeToSelectTimeout);
        this.typeToSelectTimeout = window.setTimeout(
          () => this.typeToSelectString = "",
          1e3
        );
        if (event.key === "Backspace") {
          this.typeToSelectString = this.typeToSelectString.slice(0, -1);
        } else {
          this.typeToSelectString += event.key.toLowerCase();
        }
        for (const option of allOptions) {
          const label = option.getTextLabel().toLowerCase();
          if (label.startsWith(this.typeToSelectString)) {
            this.setCurrentOption(option);
            break;
          }
        }
      }
    };
    this.handleDocumentMouseDown = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
  }
  get value() {
    return this._value;
  }
  set value(val) {
    if (this.multiple) {
      val = Array.isArray(val) ? val : val.split(" ");
    } else {
      val = Array.isArray(val) ? val.join(" ") : val;
    }
    if (this._value === val) {
      return;
    }
    this.valueHasChanged = true;
    this._value = val;
  }
  /** Gets the validity state object */
  get validity() {
    return this.valueInput.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.valueInput.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.handleDefaultSlotChange();
    });
    this.open = false;
  }
  addOpenListeners() {
    var _a;
    document.addEventListener("focusin", this.handleDocumentFocusIn);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
    if (this.getRootNode() !== document) {
      this.getRootNode().addEventListener("focusin", this.handleDocumentFocusIn);
    }
    if ("CloseWatcher" in window) {
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
      this.closeWatcher = new CloseWatcher();
      this.closeWatcher.onclose = () => {
        if (this.open) {
          this.hide();
          this.displayInput.focus({ preventScroll: true });
        }
      };
    }
  }
  removeOpenListeners() {
    var _a;
    document.removeEventListener("focusin", this.handleDocumentFocusIn);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    if (this.getRootNode() !== document) {
      this.getRootNode().removeEventListener(
        "focusin",
        this.handleDocumentFocusIn
      );
    }
    (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
  }
  handleFocus() {
    this.hasFocus = true;
    this.displayInput.setSelectionRange(0, 0);
    this.emit("terra-focus");
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("terra-blur");
  }
  handleLabelClick() {
    this.displayInput.focus();
  }
  handleComboboxMouseDown(event) {
    const path = event.composedPath();
    const isIconButton = path.some(
      (el) => el instanceof Element && el.tagName.toLowerCase() === "terra-icon-button"
    );
    if (this.disabled || isIconButton) {
      return;
    }
    event.preventDefault();
    this.displayInput.focus({ preventScroll: true });
    this.open = !this.open;
  }
  handleComboboxKeyDown(event) {
    if (event.key === "Tab") {
      return;
    }
    event.stopPropagation();
    this.handleDocumentKeyDown(event);
  }
  handleClearClick(event) {
    event.stopPropagation();
    this.valueHasChanged = true;
    if (this.value !== "") {
      this.setSelectedOptions([]);
      this.displayInput.focus({ preventScroll: true });
      this.updateComplete.then(() => {
        this.emit("terra-clear");
        this.emit("terra-input");
        this.emit("terra-change");
      });
    }
  }
  handleClearMouseDown(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  handleOptionClick(event) {
    const target = event.target;
    const option = target.closest("terra-option");
    const oldValue = this.value;
    if (option && !option.disabled) {
      this.valueHasChanged = true;
      if (this.multiple) {
        this.toggleOptionSelection(option);
      } else {
        this.setSelectedOptions(option);
      }
      this.updateComplete.then(
        () => this.displayInput.focus({ preventScroll: true })
      );
      if (this.value !== oldValue) {
        this.updateComplete.then(() => {
          this.emit("terra-input");
          this.emit("terra-change");
        });
      }
      if (!this.multiple) {
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      }
    }
  }
  /* @internal - used by options to update labels */
  handleDefaultSlotChange() {
    if (!customElements.get("terra-option")) {
      customElements.whenDefined("terra-option").then(() => this.handleDefaultSlotChange());
    }
    const allOptions = this.getAllOptions();
    const val = this.valueHasChanged ? this.value : this.defaultValue;
    const value = Array.isArray(val) ? val : [val];
    const values = [];
    allOptions.forEach((option) => values.push(option.value));
    this.setSelectedOptions(allOptions.filter((el) => value.includes(el.value)));
  }
  handleTagRemove(event, option) {
    event.stopPropagation();
    this.valueHasChanged = true;
    if (!this.disabled) {
      this.toggleOptionSelection(option, false);
      this.updateComplete.then(() => {
        this.emit("terra-input");
        this.emit("terra-change");
      });
    }
  }
  // Gets an array of all <terra-option> elements
  getAllOptions() {
    return [...this.querySelectorAll("terra-option")];
  }
  // Gets the first <terra-option> element
  getFirstOption() {
    return this.querySelector("terra-option");
  }
  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  setCurrentOption(option) {
    const allOptions = this.getAllOptions();
    allOptions.forEach((el) => {
      el.current = false;
      el.tabIndex = -1;
    });
    if (option) {
      this.currentOption = option;
      option.current = true;
      option.tabIndex = 0;
      option.focus();
    }
  }
  // Sets the selected option(s)
  setSelectedOptions(option) {
    const allOptions = this.getAllOptions();
    const newSelectedOptions = Array.isArray(option) ? option : [option];
    allOptions.forEach((el) => el.selected = false);
    if (newSelectedOptions.length) {
      newSelectedOptions.forEach((el) => el.selected = true);
    }
    this.selectionChanged();
  }
  // Toggles an option's selected state
  toggleOptionSelection(option, force) {
    if (force === true || force === false) {
      option.selected = force;
    } else {
      option.selected = !option.selected;
    }
    this.selectionChanged();
  }
  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  selectionChanged() {
    var _a, _b, _c;
    const options = this.getAllOptions();
    this.selectedOptions = options.filter((el) => el.selected);
    const cachedValueHasChanged = this.valueHasChanged;
    if (this.multiple) {
      this.value = this.selectedOptions.map((el) => el.value);
      if (this.placeholder && this.value.length === 0) {
        this.displayLabel = "";
      } else {
        this.displayLabel = `${this.selectedOptions.length} selected`;
      }
    } else {
      const selectedOption = this.selectedOptions[0];
      this.value = (_a = selectedOption == null ? void 0 : selectedOption.value) != null ? _a : "";
      this.displayLabel = (_c = (_b = selectedOption == null ? void 0 : selectedOption.getTextLabel) == null ? void 0 : _b.call(selectedOption)) != null ? _c : "";
    }
    this.valueHasChanged = cachedValueHasChanged;
    this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }
  get tags() {
    return this.selectedOptions.map((option, index) => {
      if (index < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        const tag = this.getTag(option, index);
        return x`<div
                    @terra-remove=${(e3) => this.handleTagRemove(e3, option)}
                >
                    ${typeof tag === "string" ? o(tag) : tag}
                </div>`;
      } else if (index === this.maxOptionsVisible) {
        return x`<terra-tag size=${this.size}
                    >+${this.selectedOptions.length - index}</terra-tag
                >`;
      }
      return x``;
    });
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  handleDisabledChange() {
    if (this.disabled) {
      this.open = false;
      this.handleOpenChange();
    }
  }
  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    if (name === "value") {
      const cachedValueHasChanged = this.valueHasChanged;
      this.value = this.defaultValue;
      this.valueHasChanged = cachedValueHasChanged;
    }
  }
  handleValueChange() {
    if (!this.valueHasChanged) {
      const cachedValueHasChanged = this.valueHasChanged;
      this.value = this.defaultValue;
      this.valueHasChanged = cachedValueHasChanged;
    }
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];
    this.setSelectedOptions(allOptions.filter((el) => value.includes(el.value)));
  }
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption());
      this.emit("terra-show");
      this.addOpenListeners();
      await stopAnimations(this);
      this.listbox.hidden = false;
      this.popup.active = true;
      requestAnimationFrame(() => {
        this.setCurrentOption(this.currentOption);
      });
      const { keyframes, options } = getAnimation(this, "select.show", {
        dir: "ltr"
      });
      await animateTo(this.popup.popup, keyframes, options);
      if (this.currentOption) {
        scrollIntoView(this.currentOption, this.listbox, "vertical", "auto");
      }
      this.emit("terra-after-show");
    } else {
      this.emit("terra-hide");
      this.removeOpenListeners();
      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "select.hide", {
        dir: "ltr"
      });
      await animateTo(this.popup.popup, keyframes, options);
      this.listbox.hidden = true;
      this.popup.active = false;
      this.emit("terra-after-hide");
    }
  }
  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled) {
      this.open = false;
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "terra-after-show");
  }
  /** Hides the listbox. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = false;
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "sl-after-hide");
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.valueInput.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.valueInput.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    this.valueInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  /** Sets focus on the control. */
  focus(options) {
    this.displayInput.focus(options);
  }
  /** Removes focus from the control. */
  blur() {
    this.displayInput.blur();
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasClearIcon = this.clearable && !this.disabled && this.value.length > 0;
    const isPlaceholderVisible = this.placeholder && this.value && this.value.length <= 0;
    return x`
            <div
                part="form-control"
                class=${e({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
            >
                <label
                    id="label"
                    part="form-control-label"
                    class="form-control__label"
                    aria-hidden=${hasLabel ? "false" : "true"}
                    @click=${this.handleLabelClick}
                >
                    <slot name="label">${this.label}</slot>
                </label>

                <div part="form-control-input" class="form-control-input">
                    <terra-popup
                        class=${e({
      select: true,
      "select--standard": true,
      "select--filled": this.filled,
      "select--pill": this.pill,
      "select--open": this.open,
      "select--disabled": this.disabled,
      "select--multiple": this.multiple,
      "select--focused": this.hasFocus,
      "select--placeholder-visible": isPlaceholderVisible,
      "select--top": this.placement === "top",
      "select--bottom": this.placement === "bottom",
      "select--small": this.size === "small",
      "select--medium": this.size === "medium",
      "select--large": this.size === "large"
    })}
                        placement=${this.placement}
                        strategy=${this.hoist ? "fixed" : "absolute"}
                        flip
                        shift
                        sync="width"
                        auto-size="vertical"
                        auto-size-padding="10"
                    >
                        <div
                            part="combobox"
                            class="select__combobox"
                            slot="anchor"
                            @keydown=${this.handleComboboxKeyDown}
                            @mousedown=${this.handleComboboxMouseDown}
                        >
                            <slot
                                part="prefix"
                                name="prefix"
                                class="select__prefix"
                            ></slot>

                            <input
                                part="display-input"
                                class="select__display-input"
                                type="text"
                                placeholder=${this.placeholder}
                                .disabled=${this.disabled}
                                .value=${this.displayLabel}
                                autocomplete="off"
                                spellcheck="false"
                                autocapitalize="off"
                                readonly
                                aria-controls="listbox"
                                aria-expanded=${this.open ? "true" : "false"}
                                aria-haspopup="listbox"
                                aria-labelledby="label"
                                aria-disabled=${this.disabled ? "true" : "false"}
                                aria-describedby="help-text"
                                role="combobox"
                                tabindex="0"
                                @focus=${this.handleFocus}
                                @blur=${this.handleBlur}
                            />

                            ${this.multiple ? x`<div part="tags" class="select__tags">
                                      ${this.tags}
                                  </div>` : ""}

                            <input
                                class="select__value-input"
                                type="text"
                                ?disabled=${this.disabled}
                                ?required=${this.required}
                                .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                                tabindex="-1"
                                aria-hidden="true"
                                @focus=${() => this.focus()}
                                @invalid=${this.handleInvalid}
                            />

                            ${hasClearIcon ? x`
                                      <button
                                          part="clear-button"
                                          class="select__clear"
                                          type="button"
                                          aria-label="Clear selection"
                                          @mousedown=${this.handleClearMouseDown}
                                          @click=${this.handleClearClick}
                                          tabindex="-1"
                                      >
                                          <slot name="clear-icon">
                                              <terra-icon
                                                  name="solid-x-circle"
                                                  library="heroicons"
                                              ></terra-icon>
                                          </slot>
                                      </button>
                                  ` : ""}

                            <slot
                                name="suffix"
                                part="suffix"
                                class="select__suffix"
                            ></slot>

                            <slot
                                name="expand-icon"
                                part="expand-icon"
                                class="select__expand-icon"
                            >
                                <terra-icon
                                    library="heroicons"
                                    name="solid-chevron-down"
                                ></terra-icon>
                            </slot>
                        </div>

                        <div
                            id="listbox"
                            role="listbox"
                            aria-expanded=${this.open ? "true" : "false"}
                            aria-multiselectable=${this.multiple ? "true" : "false"}
                            aria-labelledby="label"
                            part="listbox"
                            class="select__listbox"
                            tabindex="-1"
                            @mouseup=${this.handleOptionClick}
                            @slotchange=${this.handleDefaultSlotChange}
                        >
                            <slot></slot>
                        </div>
                    </terra-popup>
                </div>

                <div
                    part="form-control-help-text"
                    id="help-text"
                    class="form-control__help-text"
                    aria-hidden=${hasHelpText ? "false" : "true"}
                >
                    <slot name="help-text">${this.helpText}</slot>
                </div>
            </div>
        `;
  }
};
TerraSelect.styles = [component_styles_default, form_control_styles_default, select_styles_default];
TerraSelect.dependencies = {
  "terra-icon": TerraIcon,
  "terra-popup": TerraPopup,
  "terra-tag": TerraTag
};
__decorateClass([
  e2(".select")
], TerraSelect.prototype, "popup", 2);
__decorateClass([
  e2(".select__combobox")
], TerraSelect.prototype, "combobox", 2);
__decorateClass([
  e2(".select__display-input")
], TerraSelect.prototype, "displayInput", 2);
__decorateClass([
  e2(".select__value-input")
], TerraSelect.prototype, "valueInput", 2);
__decorateClass([
  e2(".select__listbox")
], TerraSelect.prototype, "listbox", 2);
__decorateClass([
  r()
], TerraSelect.prototype, "hasFocus", 2);
__decorateClass([
  r()
], TerraSelect.prototype, "displayLabel", 2);
__decorateClass([
  r()
], TerraSelect.prototype, "currentOption", 2);
__decorateClass([
  r()
], TerraSelect.prototype, "selectedOptions", 2);
__decorateClass([
  r()
], TerraSelect.prototype, "valueHasChanged", 2);
__decorateClass([
  n()
], TerraSelect.prototype, "name", 2);
__decorateClass([
  r()
], TerraSelect.prototype, "value", 1);
__decorateClass([
  n({ attribute: "value" })
], TerraSelect.prototype, "defaultValue", 2);
__decorateClass([
  n({ reflect: true })
], TerraSelect.prototype, "size", 2);
__decorateClass([
  n()
], TerraSelect.prototype, "placeholder", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraSelect.prototype, "multiple", 2);
__decorateClass([
  n({ attribute: "max-options-visible", type: Number })
], TerraSelect.prototype, "maxOptionsVisible", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraSelect.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean })
], TerraSelect.prototype, "clearable", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraSelect.prototype, "open", 2);
__decorateClass([
  n({ type: Boolean })
], TerraSelect.prototype, "hoist", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraSelect.prototype, "filled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraSelect.prototype, "pill", 2);
__decorateClass([
  n()
], TerraSelect.prototype, "label", 2);
__decorateClass([
  n({ reflect: true })
], TerraSelect.prototype, "placement", 2);
__decorateClass([
  n({ attribute: "help-text" })
], TerraSelect.prototype, "helpText", 2);
__decorateClass([
  n({ reflect: true })
], TerraSelect.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraSelect.prototype, "required", 2);
__decorateClass([
  n()
], TerraSelect.prototype, "getTag", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], TerraSelect.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch(["defaultValue", "value"], { waitUntilFirstUpdate: true })
], TerraSelect.prototype, "handleValueChange", 1);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], TerraSelect.prototype, "handleOpenChange", 1);
setDefaultAnimation("select.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
setDefaultAnimation("select.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});

export {
  TerraSelect
};
