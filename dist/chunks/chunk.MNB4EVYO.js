import {
  scroll_hint_styles_default
} from "./chunk.EJNYSUPD.js";
import {
  TerraIcon
} from "./chunk.3K2V77UJ.js";
import {
  watch
} from "./chunk.IGV6JSNT.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.XCIW4BFM.js";
import {
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

// src/components/scroll-hint/scroll-hint.component.ts
init_dirname();
init_buffer();
init_process();
var TerraScrollHint = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.inline = false;
    this.dark = false;
    this.inactivityDelay = 3e3;
    this.visible = false;
    this.handleScroll = () => {
      if (this.inline) {
        return;
      }
      const isAtBottom = this.isAtBottomOfPage();
      if (isAtBottom) {
        if (this.visible) {
          this.hide();
        }
        this.clearTimers();
      } else {
        if (this.visible) {
          this.hide();
          this.startInactivityTimer();
        }
      }
    };
    this.handleDocumentClick = (e) => {
      if (this.contains(e.target)) {
        return;
      }
      if (!this.inline && this.visible) {
        this.hide();
        this.startInactivityTimer();
      }
    };
    this.handleClick = () => {
      this.emit("terra-scroll");
      if (!this.inline) {
        this.hide();
        setTimeout(() => {
          this.startInactivityTimer();
        }, 100);
      }
      this.scrollDown();
    };
  }
  handleInlineChange() {
    if (this.inline) {
      this.visible = true;
      this.clearTimers();
    } else {
      this.visible = false;
      this.clearTimers();
      this.startInactivityTimer();
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.setupEventListeners();
    if (this.inline) {
      this.visible = true;
    } else {
      this.startInactivityTimer();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanupEventListeners();
    this.clearTimers();
  }
  setupEventListeners() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    document.addEventListener("click", this.handleDocumentClick);
  }
  cleanupEventListeners() {
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("click", this.handleDocumentClick);
  }
  isAtBottomOfPage() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const threshold = 100;
    return scrollTop + windowHeight >= documentHeight - threshold;
  }
  scrollDown() {
    const viewportHeight = window.innerHeight;
    window.scrollBy({
      top: viewportHeight,
      behavior: "smooth"
    });
  }
  hide() {
    this.visible = false;
    this.clearTimers();
  }
  startInactivityTimer() {
    if (this.inline) {
      return;
    }
    if (this.isAtBottomOfPage()) {
      return;
    }
    this.inactivityTimeout = window.setTimeout(() => {
      if (!this.isAtBottomOfPage()) {
        this.visible = true;
      }
    }, this.inactivityDelay);
  }
  clearTimers() {
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.clickTimeout);
    clearTimeout(this.inactivityTimeout);
  }
  render() {
    if (!this.visible) {
      return x``;
    }
    return x`
            <button
                part="button"
                class="scroll-hint"
                @click="${this.handleClick}"
                aria-label="Scroll to continue"
            >
                <div part="icon-container" class="scroll-hint__icon-container">
                    <div part="ring" class="scroll-hint__ring"></div>
                    <div part="icon" class="scroll-hint__icon">
                        <terra-icon
                            name="chevron-down"
                            library="default"
                        ></terra-icon>
                    </div>
                </div>
                <span part="text" class="scroll-hint__text">SCROLL TO CONTINUE</span>
            </button>
        `;
  }
};
TerraScrollHint.styles = [component_styles_default, scroll_hint_styles_default];
TerraScrollHint.dependencies = {
  "terra-icon": TerraIcon
};
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraScrollHint.prototype, "inline", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraScrollHint.prototype, "dark", 2);
__decorateClass([
  n({ type: Number })
], TerraScrollHint.prototype, "inactivityDelay", 2);
__decorateClass([
  r()
], TerraScrollHint.prototype, "visible", 2);
__decorateClass([
  watch("inline")
], TerraScrollHint.prototype, "handleInlineChange", 1);

export {
  TerraScrollHint
};
