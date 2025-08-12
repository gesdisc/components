import {
  TerraTimeSeries
} from "./chunk.EIJ5IEV5.js";

// src/react/time-series/index.ts
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
