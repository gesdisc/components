import {
  TerraRadio
} from "./chunk.YMHZRRYO.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/radio/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-radio";
TerraRadio.define("terra-radio");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraRadio,
  react: React,
  events: {
    onTerraBlur: "terra-blur",
    onTerraChange: "terra-change",
    onTerraFocus: "terra-focus",
    onTerraInput: "terra-input",
    onTerraInvalid: "terra-invalid"
  },
  displayName: "TerraRadio"
});
var radio_default = reactWrapper;

export {
  radio_default
};
