import {
  menu_item_styles_default
} from "./chunk.DVKQR7QY.js";
import {
  SubmenuController
} from "./chunk.4HTNOSGI.js";
import {
  TerraPopup
} from "./chunk.3FSBAPKP.js";
import {
  TerraLoader
} from "./chunk.RXPDJB7X.js";
import {
  TerraIcon
} from "./chunk.3K2V77UJ.js";
import {
  HasSlotController,
  getTextContent
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

// src/components/menu-item/menu-item.component.ts
init_dirname();
init_buffer();
init_process();
var TerraMenuItem = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.type = "normal";
    this.checked = false;
    this.value = "";
    this.loading = false;
    this.disabled = false;
    this.hasSlotController = new HasSlotController(this, "submenu");
    this.submenuController = new SubmenuController(
      this,
      this.hasSlotController
    );
    this.handleHostClick = (event) => {
      if (this.disabled) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };
    this.handleMouseOver = (event) => {
      this.focus();
      event.stopPropagation();
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this.handleHostClick);
    this.addEventListener("mouseover", this.handleMouseOver);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this.handleHostClick);
    this.removeEventListener("mouseover", this.handleMouseOver);
  }
  handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();
    if (typeof this.cachedTextLabel === "undefined") {
      this.cachedTextLabel = textLabel;
      return;
    }
    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      this.emit("slotchange", {
        bubbles: true,
        composed: false,
        cancelable: false
      });
    }
  }
  handleCheckedChange() {
    if (this.checked && this.type !== "checkbox") {
      this.checked = false;
      console.error(
        'The checked attribute can only be used on menu items with type="checkbox"',
        this
      );
      return;
    }
    if (this.type === "checkbox") {
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
    } else {
      this.removeAttribute("aria-checked");
    }
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleTypeChange() {
    if (this.type === "checkbox") {
      this.setAttribute("role", "menuitemcheckbox");
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
    } else {
      this.setAttribute("role", "menuitem");
      this.removeAttribute("aria-checked");
    }
  }
  /** Returns a text label based on the contents of the menu item's default slot. */
  getTextLabel() {
    return getTextContent(this.defaultSlot);
  }
  isSubmenu() {
    return this.hasSlotController.test("submenu");
  }
  render() {
    const isRtl = false;
    const isSubmenuExpanded = this.submenuController.isExpanded();
    return x`
            <div
                id="anchor"
                part="base"
                class=${e({
      "menu-item": true,
      "menu-item--rtl": isRtl,
      "menu-item--checked": this.checked,
      "menu-item--disabled": this.disabled,
      "menu-item--loading": this.loading,
      "menu-item--has-submenu": this.isSubmenu(),
      "menu-item--submenu-expanded": isSubmenuExpanded
    })}
                ?aria-haspopup="${this.isSubmenu()}"
                ?aria-expanded="${isSubmenuExpanded ? true : false}"
            >
                <span part="checked-icon" class="menu-item__check">
                    <terra-icon
                        name="check"
                        library="system"
                        aria-hidden="true"
                    ></terra-icon>
                </span>

                <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

                <slot
                    part="label"
                    class="menu-item__label"
                    @slotchange=${this.handleDefaultSlotChange}
                ></slot>

                <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

                <span part="submenu-icon" class="menu-item__chevron">
                    <terra-icon
                        name=${isRtl ? "chevron-left" : "chevron-right"}
                        library="system"
                        aria-hidden="true"
                    ></terra-icon>
                </span>

                ${this.submenuController.renderSubmenu()}
                ${this.loading ? x`
                          <terra-loader
                              part="spinner"
                              exportparts="base:spinner__base"
                          ></terra-loader>
                      ` : ""}
            </div>
        `;
  }
};
TerraMenuItem.styles = [component_styles_default, menu_item_styles_default];
TerraMenuItem.dependencies = {
  "terra-icon": TerraIcon,
  "terra-popup": TerraPopup,
  "terra-loader": TerraLoader
};
__decorateClass([
  e2("slot:not([name])")
], TerraMenuItem.prototype, "defaultSlot", 2);
__decorateClass([
  e2(".menu-item")
], TerraMenuItem.prototype, "menuItem", 2);
__decorateClass([
  n()
], TerraMenuItem.prototype, "type", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraMenuItem.prototype, "checked", 2);
__decorateClass([
  n()
], TerraMenuItem.prototype, "value", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraMenuItem.prototype, "loading", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraMenuItem.prototype, "disabled", 2);
__decorateClass([
  watch("checked")
], TerraMenuItem.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled")
], TerraMenuItem.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("type")
], TerraMenuItem.prototype, "handleTypeChange", 1);

export {
  TerraMenuItem
};
