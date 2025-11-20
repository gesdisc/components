import {
  TerraOption
} from "./chunk.EUGMEAML.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/option/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "terra-option";
TerraOption.define("terra-option");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraOption,
  react: React,
  events: {},
  displayName: "TerraOption"
});
var option_default = reactWrapper;

export {
  option_default
};
