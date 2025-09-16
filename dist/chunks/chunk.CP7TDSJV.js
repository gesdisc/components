import {
  TerraTimeSeries
} from "./chunk.ASTFWOX2.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/time-series/time-series.ts
init_dirname();
init_buffer();
init_process();
var time_series_default = TerraTimeSeries;
TerraTimeSeries.define("terra-time-series");

export {
  time_series_default
};
