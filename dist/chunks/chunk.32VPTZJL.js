import {
  TerraTag
} from "./chunk.RXQHGXEF.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/tag/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-tag";
TerraTag.define("terra-tag");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraTag,
  react: React,
  events: {
    onTerraClick: "terra-click"
  },
  displayName: "TerraTag"
});
var tag_default = reactWrapper;

export {
  tag_default
};
