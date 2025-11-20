import {
  TerraMenuItem
} from "./chunk.J2PLNJMA.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/menu-item/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "terra-menu-item";
TerraMenuItem.define("terra-menu-item");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraMenuItem,
  react: React,
  events: {},
  displayName: "TerraMenuItem"
});
var menu_item_default = reactWrapper;

export {
  menu_item_default
};
