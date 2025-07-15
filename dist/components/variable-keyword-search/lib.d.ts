import type { ListItem } from './variable-keyword-search.types.js';
declare const whenIdle: typeof requestIdleCallback | typeof requestAnimationFrame;
declare function renderSearchResult(listItem: ListItem): import("lit-html").TemplateResult<1>;
declare function clearSelection(combobox: HTMLInputElement, listbox: HTMLUListElement): void;
declare function walkToOption(walker: TreeWalker, combobox: HTMLInputElement, direction?: 'next' | 'previous'): void;
export { walkToOption, clearSelection, renderSearchResult, whenIdle };
