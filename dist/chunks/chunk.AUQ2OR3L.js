import {
  TerraPagination
} from "./chunk.QVU6EUBQ.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/pagination/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-pagination";
TerraPagination.define("terra-pagination");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraPagination,
  react: React,
  events: {
    onTerraPageChange: "terra-page-change"
  },
  displayName: "TerraPagination"
});
var pagination_default = reactWrapper;

export {
  pagination_default
};
