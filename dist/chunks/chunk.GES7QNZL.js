import {
  TerraChip
} from "./chunk.RODS4RBS.js";

// src/react/chip/index.ts
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
