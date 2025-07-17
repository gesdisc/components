import {
  TerraDialog
} from "./chunk.LIM7KX54.js";

// src/react/dialog/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-dialog";
TerraDialog.define("terra-dialog");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraDialog,
  react: React,
  events: {
    onTerraDialogShow: "terra-dialog-show",
    onTerraDialogHide: "terra-dialog-hide"
  },
  displayName: "TerraDialog"
});
var dialog_default = reactWrapper;

export {
  dialog_default
};
