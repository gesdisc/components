import {
  TerraSelect
} from "./chunk.EVXC5SQ5.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/select/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-select";
TerraSelect.define("terra-select");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraSelect,
  react: React,
  events: {
    onTerraChange: "terra-change",
    onTerraClear: "terra-clear",
    onTerraInput: "terra-input",
    onTerraFocus: "terra-focus",
    onTerraBlur: "terra-blur",
    onTerraShow: "terra-show",
    onTerraAfterShow: "terra-after-show",
    onTerraHide: "terra-hide",
    onTerraAfterHide: "terra-after-hide",
    onTerraInvalid: "terra-invalid"
  },
  displayName: "TerraSelect"
});
var select_default = reactWrapper;

export {
  select_default
};
