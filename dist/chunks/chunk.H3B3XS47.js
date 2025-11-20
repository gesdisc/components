import {
  GiovanniGeoJsonShapes
} from "./chunk.OQ45AXW5.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/map/map.controller.ts
init_dirname();
init_buffer();
init_process();
var MapController = class {
  constructor(host) {
    this.host = host;
    this.geoJsonShapes = new GiovanniGeoJsonShapes();
    this.host.addController(this);
  }
  async hostConnected() {
    if (this.host.hasShapeSelector) {
      this.host.shapes = await this.geoJsonShapes.getShapeFiles();
    }
  }
};

export {
  MapController
};
