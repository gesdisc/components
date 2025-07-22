import {
  TerraMap
} from "./chunk.AXINLL5O.js";

// src/react/map/index.ts
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
