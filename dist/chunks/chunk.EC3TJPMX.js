import {
  TerraIcon
} from "./chunk.3AVJ4SFR.js";

// src/react/icon/index.ts
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
