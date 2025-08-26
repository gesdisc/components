import {
  TerraLogin
} from "./chunk.Z3JS3RFN.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/react/login/index.ts
init_dirname();
init_buffer();
init_process();
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "terra-login";
TerraLogin.define("terra-login");
var reactWrapper = createComponent({
  tagName,
  elementClass: TerraLogin,
  react: React,
  events: {
    onTerraLogin: "terra-login"
  },
  displayName: "TerraLogin"
});
var login_default = reactWrapper;

export {
  login_default
};
