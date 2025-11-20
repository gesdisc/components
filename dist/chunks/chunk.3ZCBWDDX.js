import {
  TerraBrowseVariables
} from "./chunk.RRHTLK3M.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/browse-variables/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "terra-browse-variables";
TerraBrowseVariables.define("terra-browse-variables");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraBrowseVariables,
  react: React,
  events: {},
  displayName: "TerraBrowseVariables"
});
var browse_variables_default = reactWrapper;

export {
  browse_variables_default
};
