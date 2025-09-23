import {
  TerraVariableKeywordSearch
} from "./chunk.JQICLV3P.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/react/variable-keyword-search/index.ts
init_dirname();
init_buffer();
init_process();
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
