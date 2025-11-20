import {
  TerraCaption
} from "./chunk.SP5QX5PT.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/caption/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "terra-caption";
TerraCaption.define("terra-caption");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraCaption,
  react: React,
  events: {},
  displayName: "TerraCaption"
});
var caption_default = reactWrapper;

export {
  caption_default
};
