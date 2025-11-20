import {
  TerraPlot
} from "./chunk.FR5ZXOSP.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/plot/plot.ts
init_dirname();
init_buffer();
init_process();
var plot_default = TerraPlot;
TerraPlot.define("terra-plot");

export {
  plot_default
};
