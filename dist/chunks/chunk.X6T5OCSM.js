import {
  avatar_styles_default
} from "./chunk.PG4RY6UF.js";
import {
  TerraIcon
} from "./chunk.3K2V77UJ.js";
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

// src/components/avatar/avatar.component.ts
init_dirname();
init_buffer();
init_process();
var TerraAvatar = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.hasError = false;
    this.image = "";
    this.label = "";
    this.initials = "";
    this.loading = "eager";
    this.shape = "circle";
  }
  handleImageChange() {
    this.hasError = false;
  }
  handleImageLoadError() {
    this.hasError = true;
    this.emit("terra-error");
  }
  render() {
    const avatarWithImage = x`
            <img
                part="image"
                class="avatar__image"
                src="${this.image}"
                loading="${this.loading}"
                alt=""
                @error="${this.handleImageLoadError}"
            />
        `;
    let avatarWithoutImage = x``;
    if (this.initials) {
      avatarWithoutImage = x`<div part="initials" class="avatar__initials">
                ${this.initials}
            </div>`;
    } else {
      avatarWithoutImage = x`
                <div part="icon" class="avatar__icon" aria-hidden="true">
                    <slot name="icon">
                        <terra-icon
                            name="solid-user"
                            library="heroicons"
                        ></terra-icon>
                    </slot>
                </div>
            `;
    }
    return x`
            <div
                part="base"
                class=${e({
      avatar: true,
      "avatar--circle": this.shape === "circle",
      "avatar--rounded": this.shape === "rounded",
      "avatar--square": this.shape === "square"
    })}
                role="img"
                aria-label=${this.label}
            >
                ${this.image && !this.hasError ? avatarWithImage : avatarWithoutImage}
            </div>
        `;
  }
};
TerraAvatar.styles = [component_styles_default, avatar_styles_default];
TerraAvatar.dependencies = {
  "terra-icon": TerraIcon
};
__decorateClass([
  r()
], TerraAvatar.prototype, "hasError", 2);
__decorateClass([
  n()
], TerraAvatar.prototype, "image", 2);
__decorateClass([
  n()
], TerraAvatar.prototype, "label", 2);
__decorateClass([
  n()
], TerraAvatar.prototype, "initials", 2);
__decorateClass([
  n()
], TerraAvatar.prototype, "loading", 2);
__decorateClass([
  n({ reflect: true })
], TerraAvatar.prototype, "shape", 2);
__decorateClass([
  watch("image")
], TerraAvatar.prototype, "handleImageChange", 1);

export {
  TerraAvatar
};
