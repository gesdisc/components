import {
  TerraCombobox
} from "./chunk.SBLXGWTP.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/combobox/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "terra-combobox";
TerraCombobox.define("terra-combobox");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraCombobox,
  react: React,
  events: {},
  displayName: "TerraCombobox"
});
var combobox_default = reactWrapper;

export {
  combobox_default
};
