import {
  alert_styles_default
} from "./chunk.3WD5HVRH.js";
import {
  HasSlotController
} from "./chunk.6OAPBJRP.js";
import {
  e
} from "./chunk.YVSJQ4KD.js";
import {
  watch
} from "./chunk.6MMTW476.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.6PUQ3DDO.js";
import {
  e as e2,
  n,
  r
} from "./chunk.2FFSUM6T.js";
import {
  x
} from "./chunk.PQFHJHNO.js";
import {
  __decorateClass
} from "./chunk.6JHIJHTB.js";

// src/internal/event.ts
function waitForEvent(el, eventName) {
  return new Promise((resolve) => {
    function done(event) {
      if (event.target === el) {
        el.removeEventListener(eventName, done);
        resolve();
      }
    }
    el.addEventListener(eventName, done);
  });
}

// src/components/alert/alert.component.ts
var _TerraAlert = class _TerraAlert extends TerraElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "icon", "suffix");
    this.open = false;
    this.closable = false;
    this.variant = "primary";
    this.duration = Infinity;
    this.remainingTime = this.duration;
  }
  static get toastStack() {
    if (!this.currentToastStack) {
      this.currentToastStack = Object.assign(document.createElement("div"), {
        className: "terra-toast-stack"
      });
    }
    return this.currentToastStack;
  }
  firstUpdated() {
    this.base.hidden = !this.open;
  }
  restartAutoHide() {
    this.handleCountdownChange();
    clearTimeout(this.autoHideTimeout);
    clearInterval(this.remainingTimeInterval);
    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
      this.remainingTime = this.duration;
      this.remainingTimeInterval = window.setInterval(() => {
        this.remainingTime -= 100;
      }, 100);
    }
  }
  pauseAutoHide() {
    var _a;
    (_a = this.countdownAnimation) == null ? void 0 : _a.pause();
    clearTimeout(this.autoHideTimeout);
    clearInterval(this.remainingTimeInterval);
  }
  resumeAutoHide() {
    var _a;
    if (this.duration < Infinity) {
      this.autoHideTimeout = window.setTimeout(
        () => this.hide(),
        this.remainingTime
      );
      this.remainingTimeInterval = window.setInterval(() => {
        this.remainingTime -= 100;
      }, 100);
      (_a = this.countdownAnimation) == null ? void 0 : _a.play();
    }
  }
  handleCountdownChange() {
    if (this.open && this.duration < Infinity && this.countdown) {
      const { countdownElement } = this;
      const start = "100%";
      const end = "0";
      this.countdownAnimation = countdownElement.animate(
        [{ width: start }, { width: end }],
        {
          duration: this.duration,
          easing: "linear"
        }
      );
    }
  }
  handleCloseClick() {
    this.hide();
  }
  async handleOpenChange() {
    this.base.hidden = !this.open;
    if (this.open) {
      this.emit("terra-show");
      if (this.duration < Infinity) {
        this.restartAutoHide();
      }
      this.emit("terra-after-show");
    } else {
      this.emit("terra-hide");
      clearTimeout(this.autoHideTimeout);
      clearInterval(this.remainingTimeInterval);
      this.emit("terra-after-hide");
    }
  }
  handleDurationChange() {
    this.restartAutoHide();
  }
  /** Shows the alert. */
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "terra-after-show");
  }
  /** Hides the alert */
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "terra-after-hide");
  }
  /**
   * Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
   * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
   * calling this method again. The returned promise will resolve after the alert is hidden.
   */
  async toast() {
    return new Promise((resolve) => {
      this.handleCountdownChange();
      if (_TerraAlert.toastStack.parentElement === null) {
        document.body.append(_TerraAlert.toastStack);
      }
      _TerraAlert.toastStack.appendChild(this);
      requestAnimationFrame(() => {
        this.clientWidth;
        this.show();
      });
      this.addEventListener(
        "terra-after-hide",
        () => {
          _TerraAlert.toastStack.removeChild(this);
          resolve();
          if (_TerraAlert.toastStack.querySelector("terra-alert") === null) {
            _TerraAlert.toastStack.remove();
          }
        },
        { once: true }
      );
    });
  }
  render() {
    return x`
            <div
                part="base"
                class=${e({
      alert: true,
      "alert--open": this.open,
      "alert--closable": this.closable,
      "alert--has-countdown": !!this.countdown,
      "alert--has-icon": this.hasSlotController.test("icon"),
      "alert--primary": this.variant === "primary",
      "alert--success": this.variant === "success",
      "alert--neutral": this.variant === "neutral",
      "alert--warning": this.variant === "warning",
      "alert--danger": this.variant === "danger"
    })}
                role="alert"
                aria-hidden=${this.open ? "false" : "true"}
                @mouseenter=${this.pauseAutoHide}
                @mouseleave=${this.resumeAutoHide}
            >
                <div part="icon" class="alert__icon">
                    <slot name="icon"></slot>
                </div>

                <div part="message" class="alert__message" aria-live="polite">
                    <slot></slot>
                </div>

                ${this.closable ? x`
                          <terra-icon
                              class="alert__close-button"
                              name="solid-x-mark"
                              library="heroicons"
                              @click=${this.handleCloseClick}
                          ></terra-icon>
                      ` : ""}

                <div role="timer" class="alert__timer">${this.remainingTime}</div>

                ${this.countdown ? x`
                          <div
                              class=${e({
      alert__countdown: true,
      "alert__countdown--ltr": this.countdown === "ltr"
    })}
                          >
                              <div class="alert__countdown-elapsed"></div>
                          </div>
                      ` : ""}
            </div>
        `;
  }
};
_TerraAlert.styles = [component_styles_default, alert_styles_default];
__decorateClass([
  e2('[part~="base"]')
], _TerraAlert.prototype, "base", 2);
__decorateClass([
  e2(".alert__countdown-elapsed")
], _TerraAlert.prototype, "countdownElement", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], _TerraAlert.prototype, "open", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], _TerraAlert.prototype, "closable", 2);
__decorateClass([
  n({ reflect: true })
], _TerraAlert.prototype, "variant", 2);
__decorateClass([
  n({ type: Number })
], _TerraAlert.prototype, "duration", 2);
__decorateClass([
  n({ type: String, reflect: true })
], _TerraAlert.prototype, "countdown", 2);
__decorateClass([
  r()
], _TerraAlert.prototype, "remainingTime", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], _TerraAlert.prototype, "handleOpenChange", 1);
__decorateClass([
  watch("duration")
], _TerraAlert.prototype, "handleDurationChange", 1);
var TerraAlert = _TerraAlert;

export {
  TerraAlert
};
