import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/map/type.ts
init_dirname();
init_buffer();
init_process();
var MapEventType = /* @__PURE__ */ ((MapEventType2) => {
  MapEventType2["POINT"] = "point";
  MapEventType2["BBOX"] = "bbox";
  return MapEventType2;
})(MapEventType || {});

export {
  MapEventType
};
