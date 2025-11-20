import {
  TerraBrowseVariables
} from "./chunk.RRHTLK3M.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/browse-variables/browse-variables.ts
init_dirname();
init_buffer();
init_process();
var browse_variables_default = TerraBrowseVariables;
TerraBrowseVariables.define("terra-browse-variables");

export {
  browse_variables_default
};
