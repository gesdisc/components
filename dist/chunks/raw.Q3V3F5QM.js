import {
  BaseDecoder
} from "./chunk.LVLBJGO2.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// node_modules/geotiff/dist-module/compression/raw.js
init_dirname();
init_buffer();
init_process();
var RawDecoder = class extends BaseDecoder {
  decodeBlock(buffer) {
    return buffer;
  }
};
export {
  RawDecoder as default
};
