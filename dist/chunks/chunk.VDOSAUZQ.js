import {
  TerraMap
} from "./chunk.CF6TDWIZ.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/map/map.ts
init_dirname();
init_buffer();
init_process();
var map_default = TerraMap;
TerraMap.define("terra-map");

export {
  map_default
};
