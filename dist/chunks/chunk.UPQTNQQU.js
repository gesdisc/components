import {
  TerraTimeSeries
} from "./chunk.N2UW5N2S.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/time-series/time-series.ts
init_dirname();
init_buffer();
init_process();
var time_series_default = TerraTimeSeries;
TerraTimeSeries.define("terra-time-series");

export {
  time_series_default
};
