import {
  TerraPlot
} from "./chunk.GHKFPCLA.js";

// src/react/plot/index.ts
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
