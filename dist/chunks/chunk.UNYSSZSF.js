import {
  GiovanniGeoJsonShapes
} from "./chunk.JRFFBQCS.js";

// src/components/map/map.controller.ts
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
