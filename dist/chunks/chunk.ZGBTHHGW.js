import {
  TerraAlert
} from "./chunk.MELTUHNW.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/react/alert/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-alert";
TerraAlert.define("terra-alert");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraAlert,
  react: React,
  events: {
    onTerraShow: "terra-show",
    onTerraAfterShow: "terra-after-show",
    onTerraHide: "terra-hide",
    onTerraAfterHide: "terra-after-hide"
  },
  displayName: "TerraAlert"
});
var alert_default = reactWrapper;

export {
  alert_default
};
