import {
  TerraDataAccess
} from "./chunk.FSAP3SSC.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/data-access/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "terra-data-access";
TerraDataAccess.define("terra-data-access");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraDataAccess,
  react: React,
  events: {},
  displayName: "TerraDataAccess"
});
var data_access_default = reactWrapper;

export {
  data_access_default
};
