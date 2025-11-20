import {
  TerraSlider
} from "./chunk.QWHTTILE.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/slider/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "terra-slider";
TerraSlider.define("terra-slider");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraSlider,
  react: React,
  events: {},
  displayName: "TerraSlider"
});
var slider_default = reactWrapper;

export {
  slider_default
};
