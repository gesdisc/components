import {
  dialog_styles_default
} from "./chunk.ARWRM2JC.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.6PUQ3DDO.js";
import {
  e,
  n
} from "./chunk.2FFSUM6T.js";
import {
  x
} from "./chunk.PQFHJHNO.js";
import {
  __decorateClass,
  __privateAdd,
  __privateMethod
} from "./chunk.6JHIJHTB.js";

// src/components/dialog/dialog.component.ts
var _handleBackdropClick, handleBackdropClick_fn;
var TerraDialog = class extends TerraElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _handleBackdropClick);
    this.width = "fit-content";
    this.clickOutsideToClose = true;
    this.showBackdrop = true;
  }
  toggle() {
    this.dialogEl.open ? this.hide("toggle") : this.show();
  }
  show() {
    this.dialogEl.showModal();
    this.emit("terra-dialog-show");
  }
  hide(reason) {
    this.dialogEl.close(reason);
    this.emit("terra-dialog-hide");
  }
  render() {
    return x`
            <dialog
                @click=${__privateMethod(this, _handleBackdropClick, handleBackdropClick_fn)}
                aria-modal="true"
                id=${this.id}
                part="dialog"
                role="dialog"
                style="width: ${this.width}"
            >
                <div class="dialog-content">
                    <slot></slot>
                </div>
            </dialog>
        `;
  }
};
_handleBackdropClick = new WeakSet();
handleBackdropClick_fn = function(event) {
  if (this.clickOutsideToClose) {
    const target = event.target;
    if (target.nodeName === "DIALOG") {
      this.hide("backdrop");
    }
  }
};
TerraDialog.styles = [component_styles_default, dialog_styles_default];
__decorateClass([
  e('[part="dialog"]')
], TerraDialog.prototype, "dialogEl", 2);
__decorateClass([
  n()
], TerraDialog.prototype, "id", 2);
__decorateClass([
  n({ reflect: true })
], TerraDialog.prototype, "width", 2);
__decorateClass([
  n({ attribute: "click-outside-to-close", type: Boolean, reflect: true })
], TerraDialog.prototype, "clickOutsideToClose", 2);
__decorateClass([
  n({ attribute: "show-backdrop", type: Boolean, reflect: true })
], TerraDialog.prototype, "showBackdrop", 2);

export {
  TerraDialog
};
