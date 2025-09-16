import {
  TerraSkeleton
} from "./chunk.LZJTFOOE.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/react/skeleton/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "terra-skeleton";
TerraSkeleton.define("terra-skeleton");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraSkeleton,
  react: React,
  events: {},
  displayName: "TerraSkeleton"
});
var skeleton_default = reactWrapper;

export {
  skeleton_default
};
