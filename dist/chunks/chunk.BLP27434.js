import {
  getBasePath
} from "./chunk.QOSYPLWM.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/icon/library.heroicons.ts
init_dirname();
init_buffer();
init_process();
var library = {
  name: "heroicons",
  resolver: (name) => getBasePath(`assets/icons/${name}.svg`)
};
var library_heroicons_default = library;

export {
  library_heroicons_default
};
