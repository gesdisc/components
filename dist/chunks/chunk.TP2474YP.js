import {
  TerraMap
} from "./chunk.GOEIPUGK.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/map/map.ts
init_dirname();
init_buffer();
init_process();
var map_default = TerraMap;
TerraMap.define("terra-map");

export {
  map_default
};
