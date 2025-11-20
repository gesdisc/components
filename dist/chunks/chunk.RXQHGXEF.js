import {
  tag_styles_default
} from "./chunk.VLVHBQRR.js";
import {
  TerraIcon
} from "./chunk.3K2V77UJ.js";
import {
  e
} from "./chunk.XMZR4BZJ.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.XCIW4BFM.js";
import {
  n
} from "./chunk.ZQH2A4BE.js";
import {
  E,
  x
} from "./chunk.JQ2FCDGS.js";
import {
  __decorateClass,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/tag/tag.component.ts
init_dirname();
init_buffer();
init_process();
var TerraTag = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.variant = "content";
    this.size = "medium";
    this.iconLibrary = "default";
    this.stack = false;
    this.dark = false;
    this.handleClick = (e2) => {
      if (this.variant === "topic") {
        this.emit("terra-click", { detail: { originalEvent: e2 } });
      }
    };
  }
  render() {
    const isLink = this.variant === "topic" && this.href;
    const isContent = this.variant === "content";
    const baseClasses = {
      tag: true,
      "tag--content": isContent,
      "tag--topic": this.variant === "topic",
      "tag--urgent": this.variant === "urgent",
      "tag--small": this.size === "small",
      "tag--medium": this.size === "medium",
      "tag--large": this.size === "large"
    };
    const content = x`
            ${isContent ? x`
                      <span
                          part="icon"
                          class="${e({
      tag__icon: true,
      "tag__icon--small": this.size === "small",
      "tag__icon--medium": this.size === "medium",
      "tag__icon--large": this.size === "large"
    })}"
                      >
                          <slot name="icon">
                              ${this.icon ? x`
                                        <terra-icon
                                            name="${this.icon}"
                                            library="${this.iconLibrary}"
                                        ></terra-icon>
                                    ` : E}
                          </slot>
                      </span>
                  ` : E}
            <span part="label" class="tag__label">
                <slot></slot>
            </span>
        `;
    if (isLink) {
      return x`
                <a
                    part="base"
                    href="${this.href}"
                    class="${e(baseClasses)}"
                    @click="${this.handleClick}"
                >
                    ${content}
                </a>
            `;
    }
    return x`
            <div
                part="base"
                class="${e(baseClasses)}"
                @click="${this.handleClick}"
                role="${this.variant === "topic" ? "button" : E}"
                tabindex="${this.variant === "topic" && !this.href ? "0" : E}"
            >
                ${content}
            </div>
        `;
  }
};
TerraTag.styles = [component_styles_default, tag_styles_default];
TerraTag.dependencies = {
  "terra-icon": TerraIcon
};
__decorateClass([
  n({ reflect: true })
], TerraTag.prototype, "variant", 2);
__decorateClass([
  n({ reflect: true })
], TerraTag.prototype, "size", 2);
__decorateClass([
  n({ reflect: true })
], TerraTag.prototype, "icon", 2);
__decorateClass([
  n({ reflect: true })
], TerraTag.prototype, "iconLibrary", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraTag.prototype, "stack", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], TerraTag.prototype, "dark", 2);
__decorateClass([
  n()
], TerraTag.prototype, "href", 2);

export {
  TerraTag
};
