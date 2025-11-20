import {
  TerraRadioGroup
} from "./chunk.EPMBZWPK.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/radio-group/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-radio-group";
TerraRadioGroup.define("terra-radio-group");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraRadioGroup,
  react: React,
  events: {
    onTerraChange: "terra-change",
    onTerraInput: "terra-input",
    onTerraInvalid: "terra-invalid"
  },
  displayName: "TerraRadioGroup"
});
var radio_group_default = reactWrapper;

export {
  radio_group_default
};
