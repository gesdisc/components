import {
  TerraSpatialPicker
} from "./chunk.VWDP5PH7.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/spatial-picker/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "terra-spatial-picker";
TerraSpatialPicker.define("terra-spatial-picker");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraSpatialPicker,
  react: React,
  events: {},
  displayName: "TerraSpatialPicker"
});
var spatial_picker_default = reactWrapper;

export {
  spatial_picker_default
};
