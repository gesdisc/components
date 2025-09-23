import {
  TerraDatePicker
} from "./chunk.NCFGIAPA.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/react/date-picker/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "terra-date-picker";
TerraDatePicker.define("terra-date-picker");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraDatePicker,
  react: React,
  events: {},
  displayName: "TerraDatePicker"
});
var date_picker_default = reactWrapper;

export {
  date_picker_default
};
