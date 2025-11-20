import {
  BaseDecoder
} from "./chunk.KNJKHMZA.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

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
