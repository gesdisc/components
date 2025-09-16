import {
  TerraPlot
} from "./chunk.2G4KTPBS.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/plot/plot.ts
init_dirname();
init_buffer();
init_process();
var plot_default = TerraPlot;
TerraPlot.define("terra-plot");

export {
  plot_default
};
