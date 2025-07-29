import {
  TerraVariableKeywordSearch
} from "./chunk.2SMZLZLS.js";

// src/react/variable-keyword-search/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-variable-keyword-search";
TerraVariableKeywordSearch.define("terra-variable-keyword-search");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraVariableKeywordSearch,
  react: React,
  events: {
    onTerraVariableKeywordSearchChange: "terra-variable-keyword-search-change",
    onTerraSearch: "terra-search"
  },
  displayName: "TerraVariableKeywordSearch"
});
var variable_keyword_search_default = reactWrapper;

export {
  variable_keyword_search_default
};
