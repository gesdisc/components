import {
  TerraLogin
} from "./chunk.AZL5M2UE.js";

// src/react/login/index.ts
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
