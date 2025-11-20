import {
  TerraDatePicker
} from "./chunk.UOU4R4Y3.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/date-picker/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-date-picker";
TerraDatePicker.define("terra-date-picker");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraDatePicker,
  react: React,
  events: {
    onTerraDateRangeChange: "terra-date-range-change"
  },
  displayName: "TerraDatePicker"
});
var date_picker_default = reactWrapper;

export {
  date_picker_default
};
