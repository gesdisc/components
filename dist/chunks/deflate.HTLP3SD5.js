import {
  inflate_1
} from "./chunk.FX2KUNDI.js";
import {
  BaseDecoder
} from "./chunk.KNJKHMZA.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// node_modules/geotiff/dist-module/compression/deflate.js
init_dirname();
init_buffer();
init_process();
var DeflateDecoder = class extends BaseDecoder {
  decodeBlock(buffer) {
    return inflate_1(new Uint8Array(buffer)).buffer;
  }
};
export {
  DeflateDecoder as default
};
