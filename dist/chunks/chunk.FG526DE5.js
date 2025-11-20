import {
  TerraFileUpload
} from "./chunk.O573AMEA.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/react/file-upload/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-file-upload";
TerraFileUpload.define("terra-file-upload");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraFileUpload,
  react: React,
  events: {
    onTerraChange: "terra-change",
    onTerraFocus: "terra-focus",
    onTerraBlur: "terra-blur"
  },
  displayName: "TerraFileUpload"
});
var file_upload_default = reactWrapper;

export {
  file_upload_default
};
