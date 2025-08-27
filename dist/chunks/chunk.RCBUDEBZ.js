import {
  TerraPlotToolbar
} from "./chunk.PSKAH75Q.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/react/plot-toolbar/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "terra-plot-toolbar";
TerraPlotToolbar.define("terra-plot-toolbar");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraPlotToolbar,
  react: React,
  events: {},
  displayName: "TerraPlotToolbar"
});
var plot_toolbar_default = reactWrapper;

export {
  plot_toolbar_default
};
