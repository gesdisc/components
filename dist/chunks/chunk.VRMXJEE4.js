import {
  clearSelection,
  renderSearchResult,
  walkToOption
} from "./chunk.SCFJOPPV.js";
import {
  FetchController
} from "./chunk.G3K475WP.js";
import {
  variable_keyword_search_styles_default
} from "./chunk.NMJ34B6C.js";
import {
  icon_default
} from "./chunk.EC732IG2.js";
import {
  Fuse
} from "./chunk.QZV6EAIM.js";
import {
  n as n2
} from "./chunk.2XCNCXGV.js";
import {
  o
} from "./chunk.QEA4QW6G.js";
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

// src/components/variable-keyword-search/variable-keyword-search.component.ts
var _combobox, _fetchController, _listbox, _searchEngine, _walker, _handleComboboxChange, _handleOptionClick, _handleKeydown, _manageListboxVisibility, _selectOption, _handleSearch, handleSearch_fn, _clearSearch, clearSearch_fn;
var _TerraVariableKeywordSearch = class _TerraVariableKeywordSearch extends TerraElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _handleSearch);
    __privateAdd(this, _clearSearch);
    __privateAdd(this, _combobox, null);
    __privateAdd(this, _fetchController, new FetchController(this));
    __privateAdd(this, _listbox, null);
    __privateAdd(this, _searchEngine, null);
    __privateAdd(this, _walker, null);
    this.label = "Enter search terms (e.g., precipitation, AOD)";
    this.hideLabel = true;
    this.searchConfig = {
      //* @see {@link https://www.fusejs.io/api/options.html#options}
      keys: ["id"],
      useExtendedSearch: true
    };
    this.isExpanded = false;
    this.query = _TerraVariableKeywordSearch.initialQuery;
    this.searchResults = [];
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
      __privateMethod(this, _handleSearch, handleSearch_fn).call(this, this.query);
    });
    __privateAdd(this, _handleKeydown, (event) => {
      var _a;
      switch (event.key) {
        case "ArrowDown": {
          if (!this.isExpanded) {
            return;
          }
          clearSelection(
            __privateGet(this, _combobox),
            __privateGet(this, _listbox)
          );
          walkToOption(
            __privateGet(this, _walker),
            __privateGet(this, _combobox),
            "next"
          );
          break;
        }
        case "ArrowUp": {
          if (!this.isExpanded) {
            return;
          }
          clearSelection(
            __privateGet(this, _combobox),
            __privateGet(this, _listbox)
          );
          walkToOption(
            __privateGet(this, _walker),
            __privateGet(this, _combobox),
            "previous"
          );
          break;
        }
        case "Enter": {
          const currentNode = (_a = __privateGet(this, _walker)) == null ? void 0 : _a.currentNode;
          if (currentNode.role === "option") {
            __privateGet(this, _selectOption).call(this, currentNode);
          }
          __privateMethod(this, _handleSearch, handleSearch_fn).call(this, this.query);
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
            this.query = _TerraVariableKeywordSearch.initialQuery;
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
        (eventTarget) => eventTarget.localName === _TerraVariableKeywordSearch.tagName
      );
      if (!containedThis) {
        this.isExpanded = false;
      }
    });
    __privateAdd(this, _selectOption, (option) => {
      this.query = option.id;
      this.emit("terra-variable-keyword-search-change", { detail: option.id });
      this.isExpanded = false;
      clearSelection(
        __privateGet(this, _combobox),
        __privateGet(this, _listbox)
      );
    });
  }
  async valueChanged(_oldValue, newValue) {
    this.query = newValue;
  }
  connectedCallback() {
    super.connectedCallback();
    globalThis.addEventListener("click", __privateGet(this, _manageListboxVisibility));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    globalThis.removeEventListener("click", __privateGet(this, _manageListboxVisibility));
  }
  clear() {
    this.query = _TerraVariableKeywordSearch.initialQuery;
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
                <terra-button
                    @click=${() => __privateMethod(this, _handleSearch, handleSearch_fn).call(this, this.query)}
                    aria-label=${this.query ? `Search for ${this.query}.` : "Enter search term to enable search."}
                    circle
                    class="search-button search-input-button"
                    outline
                    tabindex="-1"
                    type="button"
                >
                    <slot name="label">
                        <terra-icon
                            font-size="1.5em"
                            library="heroicons"
                            name="outline-magnifying-glass"
                        ></terra-icon>
                    </slot>
                </terra-button>

                <input
                    ${n2((el) => {
      var _a2;
      if (el) {
        (_a2 = __privateGet(this, _combobox)) != null ? _a2 : __privateSet(this, _combobox, el);
      }
    })}
                    aria-autocomplete="list"
                    aria-controls="listbox"
                    aria-haspopup="list"
                    aria-expanded=${this.isExpanded}
                    autocomplete="off"
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

                ${this.query.length ? x`<terra-button
                          @click=${() => __privateMethod(this, _clearSearch, clearSearch_fn).call(this)}
                          aria-label="Clear the searched term and start over."
                          circle
                          class="clear-button search-input-button"
                          outline
                          tabindex="-1"
                          type="button"
                      >
                          <slot name="label">
                              <terra-icon
                                  font-size="1.5em"
                                  library="heroicons"
                                  name="outline-x-circle"
                              ></terra-icon>
                          </slot>
                      </terra-button>` : T}
            </div>

            <ul
                ${n2((el) => {
      var _a2;
      if (el) {
        (_a2 = __privateGet(this, _listbox)) != null ? _a2 : __privateSet(this, _listbox, el);
      }
    })}
                ?inert=${!this.isExpanded}
                ?open=${this.isExpanded}
                @click=${__privateGet(this, _handleOptionClick)}
                aria-label=${this.query ? `Keywords Matching ${this.query}` : "Keywords"}
                id="listbox"
                part="listbox"
                role="listbox"
                class="search-results"
            >
                ${__privateGet(this, _fetchController).render({
      initial: () => x`<li class="updating">Updating List of Keywords</li>`,
      pending: () => x`<li class="updating">Updating List of Keywords</li>`,
      complete: (list) => {
        __privateSet(this, _searchEngine, new Fuse(list, this.searchConfig));
        __privateSet(this, _walker, document.createTreeWalker(
          __privateGet(this, _listbox),
          NodeFilter.SHOW_ELEMENT,
          (node) => {
            var _a2;
            return ["option", "listbox"].includes(
              (_a2 = node.role) != null ? _a2 : ""
            ) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
          }
        ));
        return o(this.searchResults, renderSearchResult);
      },
      // TODO: Consider a more robust error strategy...like retry w/ backoff?
      error: (errorMessage) => x`<li class="error">${errorMessage}</li>`
    })}
            </ul>
        </search>`;
  }
};
_combobox = new WeakMap();
_fetchController = new WeakMap();
_listbox = new WeakMap();
_searchEngine = new WeakMap();
_walker = new WeakMap();
_handleComboboxChange = new WeakMap();
_handleOptionClick = new WeakMap();
_handleKeydown = new WeakMap();
_manageListboxVisibility = new WeakMap();
_selectOption = new WeakMap();
_handleSearch = new WeakSet();
handleSearch_fn = function(query) {
  if (query.length) {
    this.emit("terra-search", { detail: this.query });
  }
};
_clearSearch = new WeakSet();
clearSearch_fn = function() {
  var _a;
  this.query = _TerraVariableKeywordSearch.initialQuery;
  this.emit("terra-search", { detail: this.query });
  clearSelection(
    __privateGet(this, _combobox),
    __privateGet(this, _listbox)
  );
  (_a = __privateGet(this, _combobox)) == null ? void 0 : _a.focus();
};
_TerraVariableKeywordSearch.dependencies = {
  "terra-button": button_default,
  "terra-icon": icon_default
};
_TerraVariableKeywordSearch.styles = [component_styles_default, variable_keyword_search_styles_default];
_TerraVariableKeywordSearch.shadowRootOptions = __spreadProps(__spreadValues({}, s.shadowRootOptions), {
  delegatesFocus: true
});
_TerraVariableKeywordSearch.tagName = "terra-variable-keyword-search";
_TerraVariableKeywordSearch.initialQuery = "";
__decorateClass([
  n()
], _TerraVariableKeywordSearch.prototype, "label", 2);
__decorateClass([
  n()
], _TerraVariableKeywordSearch.prototype, "placeholder", 2);
__decorateClass([
  n({ attribute: "hide-label", type: Boolean })
], _TerraVariableKeywordSearch.prototype, "hideLabel", 2);
__decorateClass([
  n({ reflect: false, type: Object })
], _TerraVariableKeywordSearch.prototype, "searchConfig", 2);
__decorateClass([
  n()
], _TerraVariableKeywordSearch.prototype, "value", 2);
__decorateClass([
  r()
], _TerraVariableKeywordSearch.prototype, "isExpanded", 2);
__decorateClass([
  r()
], _TerraVariableKeywordSearch.prototype, "query", 2);
__decorateClass([
  r()
], _TerraVariableKeywordSearch.prototype, "searchResults", 2);
__decorateClass([
  watch("value")
], _TerraVariableKeywordSearch.prototype, "valueChanged", 1);
var TerraVariableKeywordSearch = _TerraVariableKeywordSearch;

export {
  TerraVariableKeywordSearch
};
