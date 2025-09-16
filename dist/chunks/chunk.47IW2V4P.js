import {
  TerraTimeSeries
} from "./chunk.ASTFWOX2.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/react/time-series/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-time-series";
TerraTimeSeries.define("terra-time-series");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraTimeSeries,
  react: React,
  events: {
    onTerraDateRangeChange: "terra-date-range-change",
    onTerraTimeSeriesDataChange: "terra-time-series-data-change"
  },
  displayName: "TerraTimeSeries"
});
var time_series_default = reactWrapper;

export {
  time_series_default
};
