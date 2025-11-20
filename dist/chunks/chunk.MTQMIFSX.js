import {
  TerraAvatar
} from "./chunk.X6T5OCSM.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/avatar/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-avatar";
TerraAvatar.define("terra-avatar");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraAvatar,
  react: React,
  events: {
    onTerraError: "terra-error"
  },
  displayName: "TerraAvatar"
});
var avatar_default = reactWrapper;

export {
  avatar_default
};
