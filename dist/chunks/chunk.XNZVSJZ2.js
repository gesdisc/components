import {
  TerraMenu
} from "./chunk.NO3SVSHJ.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/menu/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-menu";
TerraMenu.define("terra-menu");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraMenu,
  react: React,
  events: {
    onTerraSelect: "terra-select"
  },
  displayName: "TerraMenu"
});
var menu_default = reactWrapper;

export {
  menu_default
};
