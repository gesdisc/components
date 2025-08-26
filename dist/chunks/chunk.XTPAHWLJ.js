import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/utilities/base-path.ts
init_dirname();
init_buffer();
init_process();
var basePath = "";
function setBasePath(path) {
  basePath = path;
}
function getBasePath(subpath = "") {
  if (!basePath) {
    const scripts = [
      ...document.getElementsByTagName("script")
    ];
    const configScript = scripts.find(
      (script) => script.hasAttribute("data-terra-ui-components")
    );
    if (configScript) {
      setBasePath(configScript.getAttribute("data-terra-ui-components"));
    } else {
      const fallbackScript = scripts.find((s) => {
        return /terra-ui-components(\.min)?\.js($|\?)/.test(s.src) || /terra-ui-components-autoloader(\.min)?\.js($|\?)/.test(s.src);
      });
      let path = "";
      if (fallbackScript) {
        path = fallbackScript.getAttribute("src");
      }
      setBasePath(path.split("/").slice(0, -1).join("/"));
    }
  }
  return basePath.replace(/\/$/, "") + (subpath ? `/${subpath.replace(/^\//, "")}` : ``);
}

export {
  setBasePath,
  getBasePath
};
