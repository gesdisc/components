import {
  TerraAccordion
} from "./chunk.7L66B6Z5.js";

// src/react/accordion/index.ts
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
