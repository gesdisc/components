import {
  GiovanniGeoJsonShapes
} from "./chunk.KXDQAQQH.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

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
