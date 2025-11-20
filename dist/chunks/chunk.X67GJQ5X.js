import {
  TerraButton
} from "./chunk.ZHKSN4LM.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/button/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "terra-button";
TerraButton.define("terra-button");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraButton,
  react: React,
  events: {},
  displayName: "TerraButton"
});
var button_default = reactWrapper;

export {
  button_default
};
