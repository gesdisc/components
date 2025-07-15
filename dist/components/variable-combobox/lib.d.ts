import type { GroupedListItem, ListItem } from './variable-combobox.types.js';
declare function renderSearchResult(listItem: GroupedListItem, index: number): import("lit-html").TemplateResult<1>;
declare function removeEmptyCollections(docs: GroupedListItem[]): GroupedListItem[];
declare function groupDocsByCollection(docs?: ListItem[]): GroupedListItem[];
declare function cherryPickDocInfo(docs: Record<string, any>[]): ListItem[];
declare function clearSelection(combobox: HTMLInputElement, listbox: HTMLUListElement): void;
declare function walkToOption(walker: TreeWalker, combobox: HTMLInputElement, direction?: 'next' | 'previous'): void;
declare function adaptValueToVariableMetadata(value: string): string;
export { adaptValueToVariableMetadata, cherryPickDocInfo, clearSelection, groupDocsByCollection, removeEmptyCollections, renderSearchResult, walkToOption, };
