import {
  TerraStatusIndicator
} from "./chunk.W46JF5CJ.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/status-indicator/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "terra-status-indicator";
TerraStatusIndicator.define("terra-status-indicator");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraStatusIndicator,
  react: React,
  events: {},
  displayName: "TerraStatusIndicator"
});
var status_indicator_default = reactWrapper;

export {
  status_indicator_default
};
