import {
  TerraTimeAverageMap
} from "./chunk.BT3DDTSX.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/time-average-map/time-average-map.ts
init_dirname();
init_buffer();
init_process();
var time_average_map_default = TerraTimeAverageMap;
TerraTimeAverageMap.define("terra-time-average-map");

export {
  time_average_map_default
};
