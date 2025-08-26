import {
  inflate_1
} from "./chunk.PFJNBQ5R.js";
import {
  BaseDecoder
} from "./chunk.LVLBJGO2.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

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
