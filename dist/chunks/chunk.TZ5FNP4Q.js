import {
  TerraPlot
} from "./chunk.WZ6P7TO4.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/react/plot/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "terra-plot";
TerraPlot.define("terra-plot");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraPlot,
  react: React,
  events: {},
  displayName: "TerraPlot"
});
var plot_default = reactWrapper;

export {
  plot_default
};
