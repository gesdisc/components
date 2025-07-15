import {
  TerraAlert
} from "./chunk.C26WRXGH.js";

// src/react/alert/index.ts
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
