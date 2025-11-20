import {
  caption_styles_default
} from "./chunk.7QQJBJPI.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.XCIW4BFM.js";
import {
  x
} from "./chunk.JQ2FCDGS.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/caption/caption.component.ts
init_dirname();
init_buffer();
init_process();
var TerraCaption = class extends TerraElement {
  render() {
    return x`<slot></slot>`;
  }
};
TerraCaption.styles = [component_styles_default, caption_styles_default];

export {
  TerraCaption
};
