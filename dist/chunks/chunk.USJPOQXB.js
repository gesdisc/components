import {
  TerraLoader
} from "./chunk.PLVQL3FU.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

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
