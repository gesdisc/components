import {
  init_buffer,
  init_dirname,
  init_process
} from "../chunks/chunk.HBV76IJU.js";

// src/utilities/debounce.ts
init_dirname();
init_buffer();
init_process();
function debounce(func, delay = 0) {
  let timeoutId;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
export {
  debounce
};
