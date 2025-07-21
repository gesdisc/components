import {
  TerraDataSubsetter
} from "./chunk.2CP25PIK.js";

// src/react/data-subsetter/index.ts
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
