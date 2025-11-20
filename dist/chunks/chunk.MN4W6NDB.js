import {
  TerraCheckbox
} from "./chunk.XIP5BYWP.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/checkbox/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-checkbox";
TerraCheckbox.define("terra-checkbox");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraCheckbox,
  react: React,
  events: {
    onTerraBlur: "terra-blur",
    onTerraChange: "terra-change",
    onTerraFocus: "terra-focus",
    onTerraInput: "terra-input",
    onTerraInvalid: "terra-invalid"
  },
  displayName: "TerraCheckbox"
});
var checkbox_default = reactWrapper;

export {
  checkbox_default
};
