import {
  TerraVariableCombobox
} from "./chunk.6XPU6E2S.js";

// src/react/variable-combobox/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-variable-combobox";
TerraVariableCombobox.define("terra-variable-combobox");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraVariableCombobox,
  react: React,
  events: {
    onTerraComboboxChange: "terra-combobox-change"
  },
  displayName: "TerraVariableCombobox"
});
var variable_combobox_default = reactWrapper;

export {
  variable_combobox_default
};
