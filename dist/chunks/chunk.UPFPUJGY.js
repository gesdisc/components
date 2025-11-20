import {
  TerraRadio
} from "./chunk.YMHZRRYO.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/radio/radio.ts
init_dirname();
init_buffer();
init_process();
var radio_default = TerraRadio;
TerraRadio.define("terra-radio");

export {
  radio_default
};
