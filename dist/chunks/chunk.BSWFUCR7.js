import {
  TerraScrollHint
} from "./chunk.MNB4EVYO.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/scroll-hint/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-scroll-hint";
TerraScrollHint.define("terra-scroll-hint");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraScrollHint,
  react: React,
  events: {
    onTerraScroll: "terra-scroll"
  },
  displayName: "TerraScrollHint"
});
var scroll_hint_default = reactWrapper;

export {
  scroll_hint_default
};
