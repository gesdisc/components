import {
  c
} from "./chunk.NFS2RDEX.js";
import {
  h
} from "./chunk.EDY6YM3Y.js";
import {
  combobox_styles_default
} from "./chunk.H2ZXIXPU.js";
import {
  clearSelection,
  walkToOption
} from "./chunk.CRDKTZBT.js";
import {
  n as n2
} from "./chunk.QFJLPXXJ.js";
import {
  o
} from "./chunk.CUQN55UX.js";
import {
  Fuse
} from "./chunk.WOK6C4SG.js";
import {
  watch
} from "./chunk.ZEDYVCUT.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.BFLNWCV5.js";
import {
  n,
  r
} from "./chunk.KACZXI5J.js";
import {
  T,
  s,
  x
} from "./chunk.LL3RMB25.js";
import {
  __decorateClass,
  __privateAdd,
  __privateGet,
  __privateSet,
  __spreadProps,
  __spreadValues,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/combobox/combobox.component.ts
init_dirname();
init_buffer();
init_process();

// node_modules/lit/directives/choose.js
init_dirname();
init_buffer();
init_process();

// node_modules/lit-html/directives/choose.js
init_dirname();
init_buffer();
init_process();
var r2 = (r3, o2, t) => {
  for (const t2 of o2)
    if (t2[0] === r3)
      return (0, t2[1])();
  return t == null ? void 0 : t();
};

// src/components/combobox/combobox.component.ts
var _combobox, _listbox, _searchEngine, _walker, _renderListItem, _renderGroupListItem, _renderError, _renderLoading, _dispatchChange, _handleButtonClick, _handleComboboxChange, _handleOptionClick, _handleKeydown, _manageListboxVisibility, _selectOption;
var _TerraCombobox = class _TerraCombobox extends TerraElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _combobox, null);
    __privateAdd(this, _listbox, null);
    __privateAdd(this, _searchEngine, null);
    __privateAdd(this, _walker, null);
    this.label = "Search for Items";
    this.name = "Item";
    this.hideHelp = false;
    this.hideLabel = false;
    this.status = "INITIAL";
    this.content = {
      type: "GroupedListItem" /* GroupedListItem */,
      data: []
    };
    this.isExpanded = false;
    this.query = _TerraCombobox.initialQuery;
    this.searchResults = [];
    __privateAdd(this, _renderListItem, (listItem, index) => {
      return x`
            <li
                id="listbox-option-${index}"
                role="option"
                class="listbox-option"
                data-name=${listItem.name}
                data-event-detail=${JSON.stringify({
        name: listItem.name,
        value: listItem.value
      })}
            >
                ${listItem.name}
            </li>
        `;
    });
    __privateAdd(this, _renderGroupListItem, (groupListItem, index) => {
      return x`
            <li class="listbox-option-group" data-tree-walker="filter_skip">
                <span class="group-title" data-tree-walker="filter_skip"
                    >${groupListItem.name}</span
                >
                <ul data-tree-walker="filter_skip">
                    ${c(
        groupListItem.items,
        (item) => `${item.name}_${item.value}`,
        (item, subIndex) => {
          return x`
                                <li
                                    id="listbox-option-${index}.${subIndex}"
                                    role="option"
                                    class="listbox-option"
                                    data-name=${item.title ? item.title : item.name}
                                    data-event-detail=${JSON.stringify({
            name: item.name,
            value: item.value
          })}
                                >
                                    ${item.title ? item.title : item.name}
                                </li>
                            `;
        }
      )}
                </ul>
            </li>
        `;
    });
    __privateAdd(this, _renderError, () => {
      return x`
            <li class="error listbox-option-group">${this.content.data}</li>
        `;
    });
    __privateAdd(this, _renderLoading, () => {
      return x`
            <li class="skeleton listbox-option-group">
                <span class="skeleton-title"></span>
                <ul>
                    <li class="listbox-option"></li>
                </ul>
            </li>
            <li class="skeleton listbox-option-group">
                <span class="skeleton-title"></span>
                <ul>
                    <li class="listbox-option"></li>
                </ul>
            </li>
            <li class="skeleton listbox-option-group">
                <span class="skeleton-title"></span>
                <ul>
                    <li class="listbox-option"></li>
                </ul>
            </li>
        `;
    });
    __privateAdd(this, _dispatchChange, (stringifiedData) => {
      this.emit("terra-combobox-change", { detail: JSON.parse(stringifiedData) });
    });
    __privateAdd(this, _handleButtonClick, () => {
      var _a;
      this.isExpanded = !this.isExpanded;
      (_a = __privateGet(this, _combobox)) == null ? void 0 : _a.focus();
    });
    __privateAdd(this, _handleComboboxChange, (event) => {
      var _a;
      const target = event.target;
      this.query = target.value;
      if (target.value) {
        this.isExpanded = true;
      }
      this.searchResults = (_a = __privateGet(this, _searchEngine)) == null ? void 0 : _a.search(target.value).map(({ item }) => item);
    });
    __privateAdd(this, _handleOptionClick, (event) => {
      const path = event.composedPath();
      const [target] = path.filter(
        (eventTarget) => eventTarget.role === "option"
      );
      if (!target)
        return;
      __privateGet(this, _selectOption).call(this, target);
    });
    __privateAdd(this, _handleKeydown, (event) => {
      var _a;
      switch (event.key) {
        case "ArrowDown": {
          clearSelection(
            __privateGet(this, _combobox),
            __privateGet(this, _listbox)
          );
          if (!this.isExpanded) {
            this.isExpanded = true;
          }
          if (event.altKey) {
            break;
          }
          walkToOption(
            __privateGet(this, _walker),
            __privateGet(this, _combobox),
            "next"
          );
          break;
        }
        case "ArrowUp": {
          clearSelection(
            __privateGet(this, _combobox),
            __privateGet(this, _listbox)
          );
          if (!this.isExpanded) {
            this.isExpanded = true;
          }
          walkToOption(
            __privateGet(this, _walker),
            __privateGet(this, _combobox),
            "previous"
          );
          break;
        }
        case "Enter": {
          __privateGet(this, _selectOption).call(this, (_a = __privateGet(this, _walker)) == null ? void 0 : _a.currentNode);
          break;
        }
        case "Escape": {
          clearSelection(
            __privateGet(this, _combobox),
            __privateGet(this, _listbox)
          );
          if (this.isExpanded) {
            this.isExpanded = false;
          } else {
            this.query = _TerraCombobox.initialQuery;
          }
          break;
        }
        default: {
          break;
        }
      }
    });
    __privateAdd(this, _manageListboxVisibility, (event) => {
      const path = event.composedPath();
      const containedThis = path.some(
        (eventTarget) => eventTarget.localName === _TerraCombobox.tagName
      );
      if (!containedThis) {
        this.isExpanded = false;
      }
    });
    __privateAdd(this, _selectOption, (option) => {
      const { name, eventDetail } = option.dataset;
      this.query = `${name}`;
      __privateGet(this, _dispatchChange).call(this, eventDetail);
      this.isExpanded = false;
      clearSelection(
        __privateGet(this, _combobox),
        __privateGet(this, _listbox)
      );
    });
  }
  connectedCallback() {
    super.connectedCallback();
    globalThis.addEventListener("click", __privateGet(this, _manageListboxVisibility));
    const list = this.content.type === "GroupedListItem" || this.content.type === "ListItem" ? this.content.data : [];
    __privateSet(this, _searchEngine, new Fuse(list, {
      //* @see https://www.fusejs.io/examples.html#nested-search
      findAllMatches: true,
      keys: [
        "name",
        // to search in the name of the GroupedListItem
        "items.name",
        // to search in the name of each ListItem
        "items.title",
        // to search in the title of each ListItem
        "items.value"
        // to search in the value of each ListItem
      ],
      useExtendedSearch: true
    }));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    globalThis.addEventListener("click", __privateGet(this, _manageListboxVisibility));
  }
  contentChanged(_oldValue, newValue) {
    const list = newValue.type === "GroupedListItem" || newValue.type === "ListItem" ? newValue.data : [];
    __privateSet(this, _searchEngine, new Fuse(list, {
      //* @see https://www.fusejs.io/examples.html#nested-search
      findAllMatches: true,
      keys: [
        "name",
        // to search in the name of the GroupedListItem
        "items.name",
        // to search in the name of each ListItem
        "items.title",
        // to search in the title of each ListItem
        "items.value"
        // to search in the value of each ListItem
      ],
      useExtendedSearch: true
    }));
  }
  render() {
    var _a;
    return x`<search part="base" title="Search through the list.">
            <label for="combobox" class=${this.hideLabel ? "sr-only" : "input-label"}
                >${this.label}</label
            >
            <div class="search-input-group">
                <input
                    ${n2((el) => {
      var _a2;
      if (el) {
        (_a2 = __privateGet(this, _combobox)) != null ? _a2 : __privateSet(this, _combobox, el);
      }
    })}
                    aria-autocomplete="list"
                    aria-controls="listbox"
                    aria-expanded=${this.isExpanded}
                    class="combobox"
                    id="combobox"
                    part="combobox"
                    role="combobox"
                    type="text"
                    .placeholder=${(_a = this.placeholder) != null ? _a : `${this.label}\u2026`}
                    .value=${this.query}
                    @input=${__privateGet(this, _handleComboboxChange)}
                    @keydown=${__privateGet(this, _handleKeydown)}
                />
                <terra-button
                    shape="square-left"
                    aria-controls="listbox"
                    aria-expanded=${this.isExpanded}
                    aria-label="List of Searchable Items"
                    class="combobox-button"
                    id="combobox-button"
                    part="button"
                    tabindex="-1"
                    type="button"
                    @click=${__privateGet(this, _handleButtonClick)}
                >
                    ${["COMPLETE", "ERROR", "INITIAL"].includes(this.status) ? x`<svg
                              aria-hidden="true"
                              class="button-icon chevron"
                              focusable="false"
                              viewBox="0 0 400 400"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                          >
                              <path
                                  d="m4.2 122.2 195.1 195.1 196.5-196.6-37.9-38-157.8 157.8-156.8-156.8z"
                              ></path>
                          </svg> ` : x`<svg
                              class="button-icon spinner"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <circle
                                  cx="12"
                                  cy="12"
                                  r="9.5"
                                  fill="none"
                                  stroke-width="3"
                              ></circle>
                          </svg>`}
                </terra-button>

                ${this.hideHelp ? T : x`<p class="search-help">
                          See
                          <a
                              href="https://www.fusejs.io/examples.html#extended-search"
                              rel="noopener noreferrer"
                              target="_blank"
                              >extended search syntax
                              <svg
                                  aria-hidden="true"
                                  class="external-link"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                              >
                                  <path
                                      d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
                                  /></svg></a
                          >.
                      </p>`}
            </div>

            <ul
                ${n2((el) => {
      var _a2;
      if (el) {
        (_a2 = __privateGet(this, _listbox)) != null ? _a2 : __privateSet(this, _listbox, el);
        __privateSet(this, _walker, document.createTreeWalker(
          el,
          NodeFilter.SHOW_ELEMENT,
          (node) => {
            return node.dataset.treeWalker === "filter_skip" ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
          }
        ));
      }
    })}
                ?inert=${!this.isExpanded}
                ?open=${this.isExpanded}
                @click=${__privateGet(this, _handleOptionClick)}
                aria-label=${this.query ? `${this.name} Matching ${this.query}` : this.name}
                id="listbox"
                part="listbox"
                role="listbox"
                class="search-results"
            >
                ${r2(this.status, [
      [
        "INITIAL",
        () => {
          return T;
        }
      ],
      ["PENDING", __privateGet(this, _renderLoading)],
      [
        "COMPLETE",
        () => {
          return this.content.type === "ListItem" /* ListItem */ ? h(
            this.query === _TerraCombobox.initialQuery ? o(
              this.content.data,
              __privateGet(this, _renderListItem)
            ) : o(
              this.searchResults,
              __privateGet(this, _renderListItem)
            )
          ) : this.content.type === "GroupedListItem" /* GroupedListItem */ ? h(
            this.query === _TerraCombobox.initialQuery ? o(
              this.content.data,
              __privateGet(this, _renderGroupListItem)
            ) : o(
              this.searchResults,
              __privateGet(this, _renderGroupListItem)
            )
          ) : T;
        }
      ],
      ["ERROR", __privateGet(this, _renderError)]
    ])}
            </ul>
        </search>`;
  }
};
_combobox = new WeakMap();
_listbox = new WeakMap();
_searchEngine = new WeakMap();
_walker = new WeakMap();
_renderListItem = new WeakMap();
_renderGroupListItem = new WeakMap();
_renderError = new WeakMap();
_renderLoading = new WeakMap();
_dispatchChange = new WeakMap();
_handleButtonClick = new WeakMap();
_handleComboboxChange = new WeakMap();
_handleOptionClick = new WeakMap();
_handleKeydown = new WeakMap();
_manageListboxVisibility = new WeakMap();
_selectOption = new WeakMap();
_TerraCombobox.styles = [component_styles_default, combobox_styles_default];
_TerraCombobox.shadowRootOptions = __spreadProps(__spreadValues({}, s.shadowRootOptions), {
  delegatesFocus: true
});
_TerraCombobox.tagName = "terra-combobox";
_TerraCombobox.initialQuery = "";
__decorateClass([
  n()
], _TerraCombobox.prototype, "label", 2);
__decorateClass([
  n()
], _TerraCombobox.prototype, "name", 2);
__decorateClass([
  n()
], _TerraCombobox.prototype, "placeholder", 2);
__decorateClass([
  n({ attribute: "hide-help", type: Boolean })
], _TerraCombobox.prototype, "hideHelp", 2);
__decorateClass([
  n({ attribute: "hide-label", type: Boolean })
], _TerraCombobox.prototype, "hideLabel", 2);
__decorateClass([
  n()
], _TerraCombobox.prototype, "status", 2);
__decorateClass([
  n({ type: Object })
], _TerraCombobox.prototype, "content", 2);
__decorateClass([
  r()
], _TerraCombobox.prototype, "isExpanded", 2);
__decorateClass([
  r()
], _TerraCombobox.prototype, "query", 2);
__decorateClass([
  r()
], _TerraCombobox.prototype, "searchResults", 2);
__decorateClass([
  watch("content")
], _TerraCombobox.prototype, "contentChanged", 1);
var TerraCombobox = _TerraCombobox;

export {
  TerraCombobox
};
/*! Bundled license information:

lit-html/directives/choose.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
