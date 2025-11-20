import {
  TerraDataSubsetter
} from "./chunk.ZYVK4DJB.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/data-subsetter/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-data-subsetter";
TerraDataSubsetter.define("terra-data-subsetter");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraDataSubsetter,
  react: React,
  events: {
    onTerraSubsetJobComplete: "terra-subset-job-complete"
  },
  displayName: "TerraDataSubsetter"
});
var data_subsetter_default = reactWrapper;

export {
  data_subsetter_default
};
