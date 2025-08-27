import {
  TerraMap
} from "./chunk.ECVN7ZIP.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/react/map/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "terra-map";
TerraMap.define("terra-map");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraMap,
  react: React,
  events: {},
  displayName: "TerraMap"
});
var map_default = reactWrapper;

export {
  map_default
};
