import {
  x
} from "./chunk.PQFHJHNO.js";

// src/components/variable-keyword-search/lib.ts
var whenIdle = "requestIdleCallback" in window ? requestIdleCallback : requestAnimationFrame;
function renderSearchResult(listItem) {
  return x`
        <li id=${listItem.id} role="option" class="listbox-option">${listItem.id}</li>
    `;
}
function clearSelection(combobox, listbox) {
  combobox.removeAttribute("aria-activedescendant");
  listbox.querySelectorAll("[aria-selected]").forEach((option) => option.removeAttribute("aria-selected"));
}
function walkToOption(walker, combobox, direction = "next") {
  const maybeCurrentElement = direction === "next" ? walker.nextNode() : walker.previousNode();
  if (maybeCurrentElement === null || maybeCurrentElement === walker.root) {
    walker.parentNode();
    direction === "next" ? walker.firstChild() : walker.lastChild();
  }
  const currentNode = walker.currentNode;
  whenIdle(() => {
    currentNode.scrollIntoView({
      behavior: "auto",
      block: "nearest"
    });
    currentNode.setAttribute("aria-selected", "true");
    combobox.setAttribute("aria-activedescendant", currentNode.id);
  });
}

export {
  whenIdle,
  renderSearchResult,
  clearSelection,
  walkToOption
};
