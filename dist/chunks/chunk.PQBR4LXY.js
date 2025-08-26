import {
  TerraVariableCombobox
} from "./chunk.OUMT4R6D.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/react/variable-combobox/index.ts
init_dirname();
init_buffer();
init_process();
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
