import {
  TerraInput
} from "./chunk.FUZEDMWI.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/input/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-input";
TerraInput.define("terra-input");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraInput,
  react: React,
  events: {
    onTerraInput: "terra-input",
    onTerraChange: "terra-change",
    onTerraFocus: "terra-focus",
    onTerraBlur: "terra-blur",
    onTerraInvalid: "terra-invalid"
  },
  displayName: "TerraInput"
});
var input_default = reactWrapper;

export {
  input_default
};
