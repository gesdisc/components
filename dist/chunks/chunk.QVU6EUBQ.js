import {
  pagination_styles_default
} from "./chunk.2RC6YUZU.js";
import {
  TerraIcon
} from "./chunk.3K2V77UJ.js";
import {
  e
} from "./chunk.XMZR4BZJ.js";
import {
  watch
} from "./chunk.IGV6JSNT.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.XCIW4BFM.js";
import {
  n,
  r
} from "./chunk.ZQH2A4BE.js";
import {
  x
} from "./chunk.JQ2FCDGS.js";
import {
  __decorateClass,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/pagination/pagination.component.ts
init_dirname();
init_buffer();
init_process();
var TerraPagination = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.current = 1;
    this.total = 1;
    this.variant = "full";
    this.centered = false;
    this._visiblePages = [];
  }
  handlePropsChange() {
    this._updateVisiblePages();
  }
  connectedCallback() {
    super.connectedCallback();
    this._updateVisiblePages();
  }
  _updateVisiblePages() {
    const pages = [];
    const total = Math.max(1, this.total);
    const current = Math.max(1, Math.min(this.current, total));
    if (this.variant === "simple") {
      this._visiblePages = [];
      return;
    }
    if (total <= 7) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (current <= 4) {
        for (let i = 2; i <= 5; i++) {
          pages.push(i);
        }
        pages.push(-1);
        pages.push(total);
      } else if (current >= total - 3) {
        pages.push(-1);
        for (let i = total - 4; i <= total; i++) {
          pages.push(i);
        }
      } else {
        pages.push(-1);
        for (let i = current - 1; i <= current + 1; i++) {
          pages.push(i);
        }
        pages.push(-1);
        pages.push(total);
      }
    }
    this._visiblePages = pages;
  }
  _handlePageClick(page) {
    if (page === this.current || page < 1 || page > this.total) {
      return;
    }
    this.current = page;
    this._updateVisiblePages();
    this.emit("terra-page-change", { detail: { page } });
  }
  _handlePrevClick() {
    if (this.current > 1) {
      this._handlePageClick(this.current - 1);
    }
  }
  _handleNextClick() {
    if (this.current < this.total) {
      this._handlePageClick(this.current + 1);
    }
  }
  render() {
    const total = Math.max(1, this.total);
    const current = Math.max(1, Math.min(this.current, total));
    const isPrevDisabled = current === 1;
    const isNextDisabled = current === total;
    const showNumbers = this.variant === "full";
    return x`
            <div
                part="base"
                class=${e({
      pagination: true,
      "pagination--centered": this.centered,
      "pagination--left": this.variant === "full" && !this.centered,
      "pagination--simple": this.variant === "simple"
    })}
            >
                <nav part="nav" class="pagination__nav">
                    <button
                        part="prev"
                        class="pagination__button pagination__button--prev"
                        ?disabled=${isPrevDisabled}
                        @click=${this._handlePrevClick}
                        aria-label="Previous page"
                    >
                        ${this.variant === "simple" ? x`
                                  <terra-icon
                                      name="chevron-left"
                                      library="default"
                                  ></terra-icon>
                                  <span class="pagination__button-text"
                                      >Previous</span
                                  >
                              ` : x`
                                  <terra-icon
                                      name="chevron-left"
                                      library="default"
                                  ></terra-icon>
                              `}
                    </button>

                    ${showNumbers ? x`
                              ${this._visiblePages.map((page) => {
      if (page === -1) {
        return x`
                                          <span
                                              part="ellipsis"
                                              class="pagination__ellipsis"
                                              aria-hidden="true"
                                              >…</span
                                          >
                                      `;
      }
      const isCurrent = page === current;
      return x`
                                      <button
                                          part=${isCurrent ? "button-current button" : "button"}
                                          class=${e({
        pagination__button: true,
        "pagination__button--page": true,
        "pagination__button--current": isCurrent
      })}
                                          ?disabled=${isCurrent}
                                          @click=${() => this._handlePageClick(page)}
                                          aria-label=${`Page ${page}`}
                                          aria-current=${isCurrent ? "page" : void 0}
                                      >
                                          ${page}
                                      </button>
                                  `;
    })}
                          ` : ""}

                    <button
                        part="next"
                        class="pagination__button pagination__button--next"
                        ?disabled=${isNextDisabled}
                        @click=${this._handleNextClick}
                        aria-label="Next page"
                    >
                        ${this.variant === "simple" ? x`
                                  <span class="pagination__button-text">Next</span>
                                  <terra-icon
                                      name="chevron-right"
                                      library="default"
                                  ></terra-icon>
                              ` : x`
                                  <terra-icon
                                      name="chevron-right"
                                      library="default"
                                  ></terra-icon>
                              `}
                    </button>
                </nav>

                ${this.variant === "full" && !this.centered ? x`
                          <div part="slot" class="pagination__slot">
                              <slot></slot>
                          </div>
                      ` : ""}
            </div>
        `;
  }
};
TerraPagination.styles = [component_styles_default, pagination_styles_default];
TerraPagination.dependencies = {
  "terra-icon": TerraIcon
};
__decorateClass([
  n({ type: Number })
], TerraPagination.prototype, "current", 2);
__decorateClass([
  n({ type: Number })
], TerraPagination.prototype, "total", 2);
__decorateClass([
  n({ reflect: true })
], TerraPagination.prototype, "variant", 2);
__decorateClass([
  n({ type: Boolean })
], TerraPagination.prototype, "centered", 2);
__decorateClass([
  r()
], TerraPagination.prototype, "_visiblePages", 2);
__decorateClass([
  watch(["current", "total", "variant"])
], TerraPagination.prototype, "handlePropsChange", 1);

export {
  TerraPagination
};
