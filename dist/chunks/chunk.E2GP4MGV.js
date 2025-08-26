import {
  TerraDialog
} from "./chunk.2KUHUTX5.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/react/dialog/index.ts
init_dirname();
init_buffer();
init_process();
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
