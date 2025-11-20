import {
  TerraDropdown
} from "./chunk.AVXJQSIH.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/dropdown/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-dropdown";
TerraDropdown.define("terra-dropdown");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraDropdown,
  react: React,
  events: {
    onTerraShow: "terra-show",
    onTerraAfterShow: "terra-after-show",
    onTerraHide: "terra-hide",
    onTerraAfterHide: "terra-after-hide"
  },
  displayName: "TerraDropdown"
});
var dropdown_default = reactWrapper;

export {
  dropdown_default
};
