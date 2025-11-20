import {
  TerraTextarea
} from "./chunk.IEFIONAZ.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/textarea/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-textarea";
TerraTextarea.define("terra-textarea");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraTextarea,
  react: React,
  events: {
    onTerraInput: "terra-input",
    onTerraChange: "terra-change",
    onTerraFocus: "terra-focus",
    onTerraBlur: "terra-blur",
    onTerraInvalid: "terra-invalid"
  },
  displayName: "TerraTextarea"
});
var textarea_default = reactWrapper;

export {
  textarea_default
};
