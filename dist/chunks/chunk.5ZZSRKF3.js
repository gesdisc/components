import {
  TerraChip
} from "./chunk.SSCIFK7Q.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/react/chip/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "terra-chip";
TerraChip.define("terra-chip");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraChip,
  react: React,
  events: {},
  displayName: "TerraChip"
});
var chip_default = reactWrapper;

export {
  chip_default
};
