import {
  formCollections
} from "./chunk.XUOBHXPV.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/utilities/form.ts
init_dirname();
init_buffer();
init_process();
function serialize(form) {
  const formData = new FormData(form);
  const object = {};
  formData.forEach((value, key) => {
    if (Reflect.has(object, key)) {
      const entry = object[key];
      if (Array.isArray(entry)) {
        entry.push(value);
      } else {
        object[key] = [object[key], value];
      }
    } else {
      object[key] = value;
    }
  });
  return object;
}
function getFormControls(form) {
  const rootNode = form.getRootNode();
  const allNodes = [...rootNode.querySelectorAll("*")];
  const formControls = [...form.elements];
  const collection = formCollections.get(form);
  const TerraFormControls = collection ? Array.from(collection) : [];
  return [...formControls, ...TerraFormControls].sort((a, b) => {
    if (allNodes.indexOf(a) < allNodes.indexOf(b))
      return -1;
    if (allNodes.indexOf(a) > allNodes.indexOf(b))
      return 1;
    return 0;
  });
}

export {
  serialize,
  getFormControls
};
