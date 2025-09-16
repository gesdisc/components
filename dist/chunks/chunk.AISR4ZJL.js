import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/utilities/environment.ts
init_dirname();
init_buffer();
init_process();
var Environment = /* @__PURE__ */ ((Environment2) => {
  Environment2["UAT"] = "uat";
  Environment2["PROD"] = "prod";
  return Environment2;
})(Environment || {});
function getEnvironment() {
  const localStorageEnv = localStorage.getItem("terra-environment");
  if (localStorageEnv === "uat") {
    return "uat" /* UAT */;
  }
  if (localStorageEnv === "prod") {
    return "prod" /* PROD */;
  }
  const url = window.location.href;
  const isUatUrl = url.includes("https://uat.") || // e.g. https://uat.urs.earthdata.nasa.gov/
  url.includes(".uat.") || // e.g. https://cmr.uat.earthdata.nasa.gov/
  url.includes("-test.");
  return isUatUrl ? "uat" /* UAT */ : "prod" /* PROD */;
}

export {
  Environment,
  getEnvironment
};
