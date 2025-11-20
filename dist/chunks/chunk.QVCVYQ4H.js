import {
  TerraDataAccess
} from "./chunk.FSAP3SSC.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/data-access/data-access.ts
init_dirname();
init_buffer();
init_process();
var data_access_default = TerraDataAccess;
TerraDataAccess.define("terra-data-access");

export {
  data_access_default
};
