declare function clearSelection(combobox: HTMLInputElement, listbox: HTMLUListElement): void;
declare function walkToOption(walker: TreeWalker, combobox: HTMLInputElement, direction?: 'next' | 'previous'): void;
export { clearSelection, walkToOption };
