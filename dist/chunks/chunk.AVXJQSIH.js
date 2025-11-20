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
  dropdown_styles_default
} from "./chunk.7SU3PYTY.js";
import {
  o
} from "./chunk.VORUIAGH.js";
import {
  waitForEvent
} from "./chunk.6EGFVFVD.js";
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
  __yieldStar,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/dropdown/dropdown.component.ts
init_dirname();
init_buffer();
init_process();

// src/internal/active-elements.ts
init_dirname();
init_buffer();
init_process();
function* activeElements(activeElement = document.activeElement) {
  if (activeElement === null || activeElement === void 0)
    return;
  yield activeElement;
  if ("shadowRoot" in activeElement && activeElement.shadowRoot && activeElement.shadowRoot.mode !== "closed") {
    yield* __yieldStar(activeElements(activeElement.shadowRoot.activeElement));
  }
}
function getDeepestActiveElement() {
  return [...activeElements()].pop();
}

// src/components/dropdown/dropdown.component.ts
var TerraDropdown = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.open = false;
    this.placement = "bottom-start";
    this.disabled = false;
    this.stayOpenOnSelect = false;
    this.distance = 0;
    this.skidding = 0;
    this.hoist = false;
    this.hover = false;
    this.hoverTimeout = null;
    this.hideTimeout = null;
    this.sync = void 0;
    this.handleKeyDown = (event) => {
      if (this.open && event.key === "Escape") {
        event.stopPropagation();
        this.hide();
        this.focusOnTrigger();
      }
    };
    this.handleDocumentKeyDown = (event) => {
      var _a;
      if (event.key === "Escape" && this.open && !this.closeWatcher) {
        event.stopPropagation();
        this.focusOnTrigger();
        this.hide();
        return;
      }
      if (event.key === "Tab") {
        if (this.open && ((_a = document.activeElement) == null ? void 0 : _a.tagName.toLowerCase()) === "terra-menu-item") {
          event.preventDefault();
          this.hide();
          this.focusOnTrigger();
          return;
        }
        const computeClosestContaining = (element, tagName) => {
          if (!element)
            return null;
          const closest = element.closest(tagName);
          if (closest)
            return closest;
          const rootNode = element.getRootNode();
          if (rootNode instanceof ShadowRoot) {
            return computeClosestContaining(rootNode.host, tagName);
          }
          return null;
        };
        setTimeout(() => {
          var _a2;
          const activeElement = ((_a2 = this.containingElement) == null ? void 0 : _a2.getRootNode()) instanceof ShadowRoot ? getDeepestActiveElement() : document.activeElement;
          if (!this.containingElement || computeClosestContaining(
            activeElement,
            this.containingElement.tagName.toLowerCase()
          ) !== this.containingElement) {
            this.hide();
          }
        });
      }
    };
    this.handleDocumentMouseDown = (event) => {
      const path = event.composedPath();
      if (this.containingElement && !path.includes(this.containingElement)) {
        this.hide();
      }
    };
    this.handlePanelSelect = (event) => {
      const target = event.target;
      if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === "terra-menu") {
        this.hide();
        this.focusOnTrigger();
      }
    };
    this.handleTriggerMouseEnter = () => {
      if (!this.hover || this.disabled) {
        return;
      }
      if (this.hideTimeout !== null) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
      this.hoverTimeout = window.setTimeout(() => {
        if (!this.open) {
          this.show();
        }
        this.hoverTimeout = null;
      }, 150);
    };
    this.handleTriggerMouseLeave = () => {
      if (!this.hover) {
        return;
      }
      if (this.hoverTimeout !== null) {
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = null;
      }
      this.hideTimeout = window.setTimeout(() => {
        if (this.open) {
          this.hide();
        }
        this.hideTimeout = null;
      }, 200);
    };
    this.handlePanelMouseEnter = () => {
      if (!this.hover) {
        return;
      }
      if (this.hideTimeout !== null) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
    };
    this.handlePanelMouseLeave = () => {
      if (!this.hover) {
        return;
      }
      this.hideTimeout = window.setTimeout(() => {
        if (this.open) {
          this.hide();
        }
        this.hideTimeout = null;
      }, 200);
    };
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.containingElement) {
      this.containingElement = this;
    }
  }
  firstUpdated() {
    this.panel.hidden = !this.open;
    this.updateComplete.then(() => {
      this.attachHoverListeners();
    });
    if (this.open) {
      this.addOpenListeners();
      this.popup.active = true;
      this.attachPanelHoverListeners();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeOpenListeners();
    this.removeHoverListeners();
    this.hide();
    if (this.hoverTimeout !== null) {
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = null;
    }
    if (this.hideTimeout !== null) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
  removeHoverListeners() {
    var _a, _b;
    const assignedElements = ((_a = this.trigger) == null ? void 0 : _a.assignedElements({ flatten: true })) || [];
    const triggerElement = assignedElements[0];
    if (!triggerElement) {
      return;
    }
    let targetElement = triggerElement;
    if (triggerElement.tagName.toLowerCase() === "terra-button") {
      const button = triggerElement.button;
      if (button) {
        targetElement = button;
      }
    }
    targetElement.removeEventListener("mouseenter", this.handleTriggerMouseEnter);
    targetElement.removeEventListener("mouseleave", this.handleTriggerMouseLeave);
    const popupElement = (_b = this.popup) == null ? void 0 : _b.popup;
    if (popupElement) {
      popupElement.removeEventListener("mouseenter", this.handlePanelMouseEnter);
      popupElement.removeEventListener("mouseleave", this.handlePanelMouseLeave);
    }
  }
  focusOnTrigger() {
    const trigger = this.trigger.assignedElements({ flatten: true })[0];
    if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
      trigger.focus();
    }
  }
  getMenu() {
    return this.panel.assignedElements({ flatten: true }).find((el) => el.tagName.toLowerCase() === "terra-menu");
  }
  handleTriggerClick() {
    if (this.hover) {
      return;
    }
    if (this.open) {
      this.hide();
    } else {
      this.show();
      this.focusOnTrigger();
    }
  }
  async handleTriggerKeyDown(event) {
    if ([" ", "Enter"].includes(event.key)) {
      event.preventDefault();
      this.handleTriggerClick();
      return;
    }
    const menu = this.getMenu();
    if (menu) {
      const menuItems = menu.getAllItems();
      const firstMenuItem = menuItems[0];
      const lastMenuItem = menuItems[menuItems.length - 1];
      if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        event.preventDefault();
        if (!this.open) {
          this.show();
          await this.updateComplete;
        }
        if (menuItems.length > 0) {
          this.updateComplete.then(() => {
            if (event.key === "ArrowDown" || event.key === "Home") {
              menu.setCurrentItem(firstMenuItem);
              firstMenuItem.focus();
            }
            if (event.key === "ArrowUp" || event.key === "End") {
              menu.setCurrentItem(lastMenuItem);
              lastMenuItem.focus();
            }
          });
        }
      }
    }
  }
  handleTriggerKeyUp(event) {
    if (event.key === " ") {
      event.preventDefault();
    }
  }
  handleTriggerSlotChange() {
    this.updateAccessibleTrigger();
    requestAnimationFrame(() => {
      this.attachHoverListeners();
    });
  }
  attachHoverListeners() {
    if (!this.hover || !this.trigger) {
      return;
    }
    const assignedElements = this.trigger.assignedElements({ flatten: true });
    const triggerElement = assignedElements[0];
    if (!triggerElement) {
      return;
    }
    triggerElement.removeEventListener("mouseenter", this.handleTriggerMouseEnter);
    triggerElement.removeEventListener("mouseleave", this.handleTriggerMouseLeave);
    let targetElement = triggerElement;
    if (triggerElement.tagName.toLowerCase() === "terra-button") {
      const button = triggerElement.button;
      if (button) {
        targetElement = button;
      }
    }
    targetElement.addEventListener("mouseenter", this.handleTriggerMouseEnter);
    targetElement.addEventListener("mouseleave", this.handleTriggerMouseLeave);
  }
  attachPanelHoverListeners() {
    if (!this.hover) {
      return;
    }
    this.updateComplete.then(() => {
      var _a;
      const popupElement = (_a = this.popup) == null ? void 0 : _a.popup;
      if (popupElement) {
        popupElement.removeEventListener(
          "mouseenter",
          this.handlePanelMouseEnter
        );
        popupElement.removeEventListener(
          "mouseleave",
          this.handlePanelMouseLeave
        );
        popupElement.addEventListener(
          "mouseenter",
          this.handlePanelMouseEnter
        );
        popupElement.addEventListener(
          "mouseleave",
          this.handlePanelMouseLeave
        );
      }
    });
  }
  //
  // Slotted triggers can be arbitrary content, but we need to link them to the dropdown panel with `aria-haspopup` and
  // `aria-expanded`. These must be applied to the "accessible trigger" (the tabbable portion of the trigger element
  // that gets slotted in) so screen readers will understand them. The accessible trigger could be the slotted element,
  // a child of the slotted element, or an element in the slotted element's shadow root.
  //
  // For example, the accessible trigger of an <terra-button> is a <button> located inside its shadow root.
  //
  // To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
  //
  updateAccessibleTrigger() {
  }
  /** Shows the dropdown panel. */
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "terra-after-show");
  }
  /** Hides the dropdown panel */
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "terra-after-hide");
  }
  /**
   * Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
   * is activated.
   */
  reposition() {
    this.popup.reposition();
  }
  addOpenListeners() {
    var _a;
    this.panel.addEventListener("terra-select", this.handlePanelSelect);
    if ("CloseWatcher" in window) {
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
      this.closeWatcher = new CloseWatcher();
      this.closeWatcher.onclose = () => {
        this.hide();
        this.focusOnTrigger();
      };
    } else {
      this.panel.addEventListener("keydown", this.handleKeyDown);
    }
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
  }
  removeOpenListeners() {
    var _a;
    if (this.panel) {
      this.panel.removeEventListener("terra-select", this.handlePanelSelect);
      this.panel.removeEventListener("keydown", this.handleKeyDown);
    }
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
  }
  async handleOpenChange() {
    if (this.disabled) {
      this.open = false;
      return;
    }
    this.updateAccessibleTrigger();
    if (this.open) {
      this.emit("terra-show");
      this.addOpenListeners();
      this.attachPanelHoverListeners();
      await stopAnimations(this);
      this.panel.hidden = false;
      this.popup.active = true;
      const { keyframes, options } = getAnimation(this, "dropdown.show", {
        dir: "ltr"
      });
      await animateTo(this.popup.popup, keyframes, options);
      this.emit("terra-after-show");
    } else {
      this.emit("terra-hide");
      this.removeOpenListeners();
      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "dropdown.hide", {
        dir: "ltr"
      });
      await animateTo(this.popup.popup, keyframes, options);
      this.panel.hidden = true;
      this.popup.active = false;
      this.emit("terra-after-hide");
    }
  }
  handleHoverChange() {
    this.attachHoverListeners();
  }
  render() {
    return x`
            <terra-popup
                part="base"
                exportparts="popup:base__popup"
                id="dropdown"
                placement=${this.placement}
                distance=${this.distance}
                skidding=${this.skidding}
                strategy=${this.hoist ? "fixed" : "absolute"}
                flip
                shift
                auto-size="vertical"
                auto-size-padding="10"
                sync=${o(this.sync ? this.sync : void 0)}
                class=${e({
      dropdown: true,
      "dropdown--open": this.open
    })}
            >
                <slot
                    name="trigger"
                    slot="anchor"
                    part="trigger"
                    class="dropdown__trigger"
                    @click=${this.handleTriggerClick}
                    @keydown=${this.handleTriggerKeyDown}
                    @keyup=${this.handleTriggerKeyUp}
                    @slotchange=${this.handleTriggerSlotChange}
                ></slot>

                <div
                    aria-hidden=${this.open ? "false" : "true"}
                    aria-labelledby="dropdown"
                >
                    <slot part="panel" class="dropdown__panel"></slot>
                </div>
            </terra-popup>
        `;
  }
};
TerraDropdown.styles = [component_styles_default, dropdown_styles_default];
TerraDropdown.dependencies = { "terra-popup": TerraPopup };
__decorateClass([
  e2(".dropdown")
], TerraDropdown.prototype, "popup", 2);
__decorateClass([
  e2(".dropdown__trigger")
], TerraDropdown.prototype, "trigger", 2);
__decorateClass([
  e2(".dropdown__panel")
], TerraDropdown.prototype, "panel", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraDropdown.prototype, "open", 2);
__decorateClass([
  n({ reflect: true })
], TerraDropdown.prototype, "placement", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraDropdown.prototype, "disabled", 2);
__decorateClass([
  n({ attribute: "stay-open-on-select", type: Boolean, reflect: true })
], TerraDropdown.prototype, "stayOpenOnSelect", 2);
__decorateClass([
  n({ attribute: false })
], TerraDropdown.prototype, "containingElement", 2);
__decorateClass([
  n({ type: Number })
], TerraDropdown.prototype, "distance", 2);
__decorateClass([
  n({ type: Number })
], TerraDropdown.prototype, "skidding", 2);
__decorateClass([
  n({ type: Boolean })
], TerraDropdown.prototype, "hoist", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraDropdown.prototype, "hover", 2);
__decorateClass([
  n({ reflect: true })
], TerraDropdown.prototype, "sync", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], TerraDropdown.prototype, "handleOpenChange", 1);
__decorateClass([
  watch("hover", { waitUntilFirstUpdate: true })
], TerraDropdown.prototype, "handleHoverChange", 1);
setDefaultAnimation("dropdown.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
setDefaultAnimation("dropdown.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});

export {
  TerraDropdown
};
