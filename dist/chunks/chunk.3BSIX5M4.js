import {
  TerraLoader
} from "./chunk.RXPDJB7X.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/loader/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "terra-loader";
TerraLoader.define("terra-loader");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraLoader,
  react: React,
  events: {},
  displayName: "TerraLoader"
});
var loader_default = reactWrapper;

export {
  loader_default
};
