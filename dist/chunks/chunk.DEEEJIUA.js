import {
  TerraLogin
} from "./chunk.KB2KOIZO.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/login/login.ts
init_dirname();
init_buffer();
init_process();
var login_default = TerraLogin;
TerraLogin.define("terra-login");

export {
  login_default
};
