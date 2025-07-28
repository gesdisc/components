import {
  TerraDataRods
} from "./chunk.RIMM2FHX.js";

// src/react/data-rods/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-data-rods";
TerraDataRods.define("terra-data-rods");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraDataRods,
  react: React,
  events: {
    onTerraDateRangeChange: "terra-date-range-change"
  },
  displayName: "TerraDataRods"
});
var data_rods_default = reactWrapper;

export {
  data_rods_default
};
