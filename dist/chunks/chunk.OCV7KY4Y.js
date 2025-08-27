import {
  TerraIcon
} from "./chunk.27W4IYYI.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/react/icon/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-icon";
TerraIcon.define("terra-icon");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraIcon,
  react: React,
  events: {
    onTerraLoad: "terra-load",
    onTerraError: "terra-error"
  },
  displayName: "TerraIcon"
});
var icon_default = reactWrapper;

export {
  icon_default
};
