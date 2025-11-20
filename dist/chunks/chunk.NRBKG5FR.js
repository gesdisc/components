import {
  TerraToggle
} from "./chunk.B57737B3.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/toggle/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-toggle";
TerraToggle.define("terra-toggle");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraToggle,
  react: React,
  events: {
    onTerraBlur: "terra-blur",
    onTerraChange: "terra-change",
    onTerraInput: "terra-input",
    onTerraFocus: "terra-focus",
    onTerraInvalid: "terra-invalid"
  },
  displayName: "TerraToggle"
});
var toggle_default = reactWrapper;

export {
  toggle_default
};
