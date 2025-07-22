import "../chunks/chunk.6JHIJHTB.js";

// src/utilities/debounce.ts
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
