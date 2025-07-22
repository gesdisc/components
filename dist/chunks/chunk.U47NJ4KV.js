import {
  FetchController
} from "./chunk.4UYNOT7W.js";
import {
  adaptValueToVariableMetadata,
  clearSelection,
  groupDocsByCollection,
  removeEmptyCollections,
  renderSearchResult,
  walkToOption
} from "./chunk.YCRGAL67.js";
import {
  variable_combobox_styles_default
} from "./chunk.RU6G6JLS.js";
import {
  h
} from "./chunk.QB5SASDL.js";
import {
  icon_default
} from "./chunk.2IEKWVTW.js";
import {
  n as n2
} from "./chunk.2XCNCXGV.js";
import {
  o
} from "./chunk.QEA4QW6G.js";
import {
  Fuse
} from "./chunk.QZV6EAIM.js";
import {
  button_default
} from "./chunk.S4OXSRJR.js";
import {
  watch
} from "./chunk.6MMTW476.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.6PUQ3DDO.js";
import {
  n,
  r
} from "./chunk.2FFSUM6T.js";
import {
  T,
  s,
  x
} from "./chunk.PQFHJHNO.js";
import {
  __decorateClass,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __spreadProps,
  __spreadValues
} from "./chunk.6JHIJHTB.js";

// src/components/variable-combobox/variable-combobox.component.ts
var _combobox, _fetchController, _searchableList, _listbox, _searchEngine, _walker, _tagContainer, _dispatchChange, _handleButtonClick, _handleComboboxChange, _handleOptionClick, _handleKeydown, _manageListboxVisibility, _selectOption, _renderTags, renderTags_fn;
var _TerraVariableCombobox = class _TerraVariableCombobox extends TerraElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _renderTags);
    __privateAdd(this, _combobox, null);
    __privateAdd(this, _fetchController, void 0);
    __privateAdd(this, _searchableList, []);
    __privateAdd(this, _listbox, null);
    __privateAdd(this, _searchEngine, null);
    __privateAdd(this, _walker, null);
    __privateAdd(this, _tagContainer, null);
    this.label = "Search for Variables";
    this.hideHelp = false;
    this.hideLabel = false;
    this.useTags = false;
    this.isExpanded = false;
    this.query = _TerraVariableCombobox.initialQuery;
    this.searchResults = [];
    this.tags = [];
    this.tagContainerWidth = 0;
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
      if (!target) {
        return;
      }
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
            this.dispatchEvent(new Event("cancel"));
          } else {
            this.query = _TerraVariableCombobox.initialQuery;
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
        (eventTarget) => eventTarget.localName === _TerraVariableCombobox.tagName
      );
      if (!containedThis) {
        this.isExpanded = false;
      }
    });
    __privateAdd(this, _selectOption, (option) => {
      const { longName, eventDetail, name } = option.dataset;
      this.query = `${longName}`;
      __privateGet(this, _dispatchChange).call(this, eventDetail);
      this.isExpanded = false;
      clearSelection(
        __privateGet(this, _combobox),
        __privateGet(this, _listbox)
      );
      if (this.useTags) {
        this.tags = [`${name}`];
        __privateGet(this, _combobox).value = _TerraVariableCombobox.initialQuery;
        this.query = _TerraVariableCombobox.initialQuery;
      }
    });
  }
  async valueChanged(oldValue, newValue) {
    var _a, _b;
    if (oldValue === newValue) {
      return;
    }
    await __privateGet(this, _fetchController).taskComplete;
    const compatibleValue = adaptValueToVariableMetadata(this.value);
    const selectedVariable = (_a = __privateGet(this, _fetchController).value) == null ? void 0 : _a.find((metadata) => {
      return compatibleValue === metadata.entryId;
    });
    if (selectedVariable) {
      this.query = selectedVariable.longName;
      this.searchResults = (_b = __privateGet(this, _searchEngine)) == null ? void 0 : _b.search(this.query).map(({ item }) => item);
      __privateGet(this, _dispatchChange).call(this, selectedVariable.eventDetail);
      if (this.useTags) {
        this.tags = [`${selectedVariable.name}`];
        __privateGet(this, _combobox).value = _TerraVariableCombobox.initialQuery;
        this.query = _TerraVariableCombobox.initialQuery;
      }
    }
  }
  connectedCallback() {
    super.connectedCallback();
    __privateSet(this, _fetchController, new FetchController(this, this.bearerToken));
    globalThis.addEventListener("click", __privateGet(this, _manageListboxVisibility));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    globalThis.removeEventListener("click", __privateGet(this, _manageListboxVisibility));
  }
  clear() {
    this.query = _TerraVariableCombobox.initialQuery;
  }
  close() {
    this.isExpanded = false;
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  render() {
    var _a;
    return x`<search part="base" title="Search through the list.">
            <label for="combobox" class=${this.hideLabel ? "sr-only" : "input-label"}
                >${this.label}</label
            >
            <div class="search-input-group">
                ${this.useTags ? x`<div
                          ${n2((el) => {
      var _a2;
      if (el) {
        (_a2 = __privateGet(this, _tagContainer)) != null ? _a2 : __privateSet(this, _tagContainer, el);
        this.tagContainerWidth = el.getBoundingClientRect().width;
      }
    })}
                          class="tag-container"
                          id="tag-container"
                      >
                          ${o(
      this.tags,
      (value, index) => __privateMethod(this, _renderTags, renderTags_fn).call(this, value, index)
    )}
                      </div>` : T}
                <input
                    ${n2((el) => {
      var _a2;
      if (el) {
        (_a2 = __privateGet(this, _combobox)) != null ? _a2 : __privateSet(this, _combobox, el);
      }
    })}
                    autocomplete="off"
                    aria-autocomplete="list"
                    aria-controls="listbox"
                    aria-haspopup="list"
                    aria-expanded=${this.isExpanded}
                    class="combobox"
                    id="combobox"
                    part="combobox"
                    role="combobox"
                    type="text"
                    style=${this.useTags ? `padding-inline-start: calc(${this.tagContainerWidth}px + 0.25rem);` : T}
                    aria-describedby=${this.useTags ? "tag-container" : T}
                    placeholder=${this.useTags ? T : (_a = this.placeholder) != null ? _a : `${this.label}\u2026`}
                    .value=${this.useTags ? _TerraVariableCombobox.initialQuery : this.query}
                    @input=${__privateGet(this, _handleComboboxChange)}
                    @keydown=${__privateGet(this, _handleKeydown)}
                />
                <terra-button
                    shape="square-left"
                    aria-controls="listbox"
                    aria-expanded=${this.isExpanded}
                    aria-label="List of Searchable Variables"
                    class="combobox-button"
                    id="combobox-button"
                    part="button"
                    tabindex="-1"
                    type="button"
                    @click=${__privateGet(this, _handleButtonClick)}
                >
                    ${["COMPLETE", "ERROR"].includes(__privateGet(this, _fetchController).taskStatus) ? x`<terra-icon
                              class="chevron"
                              name="chevron-down"
                          ></terra-icon>` : x`<svg
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
                              tabindex=${this.isExpanded ? "-1 " : "0"}
                              target="_blank"
                              >extended search syntax
                              <terra-icon
                                  name="outline-arrow-top-right-on-square"
                                  library="heroicons"
                              ></terra-icon></a
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
                aria-label=${this.query ? `Variables Matching ${this.query}` : "Variables"}
                id="listbox"
                part="listbox"
                role="listbox"
                class="search-results"
            >
                ${__privateGet(this, _fetchController).render({
      initial: () => x`<li class="updating">Updating List of Variables</li>`,
      pending: () => x`<li class="updating">Updating List of Variables</li>`,
      complete: (list) => {
        __privateSet(this, _searchableList, list);
        __privateSet(this, _searchEngine, new Fuse(__privateGet(this, _searchableList), {
          //* @see {@link https://www.fusejs.io/examples.html#nested-search}
          findAllMatches: true,
          keys: [
            "entryId",
            "longName",
            "name",
            "standardName",
            "units"
          ],
          useExtendedSearch: true
        }));
        return h(
          this.query === _TerraVariableCombobox.initialQuery ? o(
            removeEmptyCollections(
              groupDocsByCollection(__privateGet(this, _searchableList))
            ),
            renderSearchResult
          ) : o(
            removeEmptyCollections(
              groupDocsByCollection(this.searchResults)
            ),
            renderSearchResult
          )
        );
      },
      // TODO: Consider a more robust error strategy...like retry w/ backoff?
      error: (errorMessage) => x`<li class="error" data-tree-walker="filter_skip">
                            ${errorMessage}
                        </li>`
    })}
            </ul>
        </search>`;
  }
};
_combobox = new WeakMap();
_fetchController = new WeakMap();
_searchableList = new WeakMap();
_listbox = new WeakMap();
_searchEngine = new WeakMap();
_walker = new WeakMap();
_tagContainer = new WeakMap();
_dispatchChange = new WeakMap();
_handleButtonClick = new WeakMap();
_handleComboboxChange = new WeakMap();
_handleOptionClick = new WeakMap();
_handleKeydown = new WeakMap();
_manageListboxVisibility = new WeakMap();
_selectOption = new WeakMap();
_renderTags = new WeakSet();
renderTags_fn = function(tag, _index) {
  return x`
            <terra-button
                size="small"
                variant="default"
                outline
                class="tag"
                aria-label=${`Clear tag ${tag}`}
                @click=${() => {
    this.tags = [];
    this.clear();
    setTimeout(() => {
      var _a;
      this.tagContainerWidth = (_a = __privateGet(this, _tagContainer)) == null ? void 0 : _a.getBoundingClientRect().width;
    }, 100);
  }}
            >
                ${tag}
                <terra-icon
                    class="tag-icon"
                    slot="suffix"
                    name="outline-x-circle"
                    library="heroicons"
                ></terra-icon>
            </terra-button>
        `;
};
_TerraVariableCombobox.dependencies = {
  "terra-button": button_default,
  "terra-icon": icon_default
};
_TerraVariableCombobox.styles = [component_styles_default, variable_combobox_styles_default];
_TerraVariableCombobox.shadowRootOptions = __spreadProps(__spreadValues({}, s.shadowRootOptions), {
  delegatesFocus: true
});
_TerraVariableCombobox.tagName = "terra-variable-combobox";
_TerraVariableCombobox.initialQuery = "";
__decorateClass([
  n()
], _TerraVariableCombobox.prototype, "label", 2);
__decorateClass([
  n()
], _TerraVariableCombobox.prototype, "placeholder", 2);
__decorateClass([
  n({ attribute: "hide-help", type: Boolean, reflect: true })
], _TerraVariableCombobox.prototype, "hideHelp", 2);
__decorateClass([
  n({ attribute: "hide-label", type: Boolean, reflect: true })
], _TerraVariableCombobox.prototype, "hideLabel", 2);
__decorateClass([
  n({ attribute: "use-tags", type: Boolean, reflect: true })
], _TerraVariableCombobox.prototype, "useTags", 2);
__decorateClass([
  n()
], _TerraVariableCombobox.prototype, "value", 2);
__decorateClass([
  n({ attribute: "bearer-token", reflect: false })
], _TerraVariableCombobox.prototype, "bearerToken", 2);
__decorateClass([
  r()
], _TerraVariableCombobox.prototype, "isExpanded", 2);
__decorateClass([
  r()
], _TerraVariableCombobox.prototype, "query", 2);
__decorateClass([
  r()
], _TerraVariableCombobox.prototype, "searchResults", 2);
__decorateClass([
  r()
], _TerraVariableCombobox.prototype, "tags", 2);
__decorateClass([
  r()
], _TerraVariableCombobox.prototype, "tagContainerWidth", 2);
__decorateClass([
  watch("value")
], _TerraVariableCombobox.prototype, "valueChanged", 1);
var TerraVariableCombobox = _TerraVariableCombobox;

export {
  TerraVariableCombobox
};
