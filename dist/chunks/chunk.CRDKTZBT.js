import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/combobox/lib.ts
init_dirname();
init_buffer();
init_process();
function clearSelection(combobox, listbox) {
  combobox.removeAttribute("aria-activedescendant");
  listbox.querySelectorAll("[aria-selected]").forEach((option) => option.removeAttribute("aria-selected"));
}
function walkToOption(walker, combobox, direction = "next") {
  const maybeCurrentElement = direction === "next" ? walker.nextNode() : walker.previousNode();
  if (maybeCurrentElement === null || maybeCurrentElement === walker.root) {
    direction === "next" ? walkToFirst(walker) : walkToLast(walker);
  }
  combobox.setAttribute(
    "aria-activedescendant",
    walker.currentNode.id
  );
  walker.currentNode.setAttribute("aria-selected", "true");
  globalThis.setTimeout(() => {
    ;
    walker.currentNode.scrollIntoView({
      behavior: "auto",
      block: "nearest"
    });
  }, 100);
}
function walkToFirst(walker) {
  walker.parentNode();
  walker.firstChild();
}
function walkToLast(walker) {
  walker.parentNode();
  walker.lastChild();
}

export {
  clearSelection,
  walkToOption
};
