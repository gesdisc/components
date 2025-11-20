import {
  TerraPopup
} from "./chunk.3FSBAPKP.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/popup/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-popup";
TerraPopup.define("terra-popup");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraPopup,
  react: React,
  events: {
    onTerraReposition: "terra-reposition"
  },
  displayName: "TerraPopup"
});
var popup_default = reactWrapper;

export {
  popup_default
};
