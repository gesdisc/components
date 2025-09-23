import {
  TerraAccordion
} from "./chunk.KX4K43F2.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/react/accordion/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-accordion";
TerraAccordion.define("terra-accordion");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraAccordion,
  react: React,
  events: {
    onTerraAccordionToggle: "terra-accordion-toggle"
  },
  displayName: "TerraAccordion"
});
var accordion_default = reactWrapper;

export {
  accordion_default
};
