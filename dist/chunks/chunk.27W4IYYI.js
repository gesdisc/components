import {
  getIconLibrary,
  unwatchIcon,
  watchIcon
} from "./chunk.VLR7MGN6.js";
import {
  icon_styles_default
} from "./chunk.6YECHPFP.js";
import {
  e
} from "./chunk.HWIFPU5V.js";
import {
  watch
} from "./chunk.ZEDYVCUT.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.DZKPT4ML.js";
import {
  n,
  r
} from "./chunk.KACZXI5J.js";
import {
  __decorateClass,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/icon/icon.component.ts
init_dirname();
init_buffer();
init_process();
var CACHEABLE_ERROR = Symbol();
var RETRYABLE_ERROR = Symbol();
var parser;
var iconCache = /* @__PURE__ */ new Map();
var _initialRender, _resolveIcon, resolveIcon_fn, _getIconSource, getIconSource_fn, _styleFromAttributes, styleFromAttributes_fn;
var TerraIcon = class extends TerraElement {
  constructor() {
    super(...arguments);
    /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
    __privateAdd(this, _resolveIcon);
    __privateAdd(this, _getIconSource);
    /**
     * SVG takes a few presentation attributes. Since we're using a template for SVG and our host element isn't an SVG, we can pass those presentational attributes into a style attribute to affect the underlying SVG.
     * Merge select attributes with existing inline style attribute to forward values to underlying SVG.
     */
    __privateAdd(this, _styleFromAttributes);
    __privateAdd(this, _initialRender, false);
    this.svg = null;
    this.label = "";
    this.library = "default";
    this.color = null;
    this.fontSize = null;
  }
  connectedCallback() {
    super.connectedCallback();
    watchIcon(this);
  }
  firstUpdated() {
    __privateSet(this, _initialRender, true);
    this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unwatchIcon(this);
  }
  handleLabelChange() {
    const hasLabel = typeof this.label === "string" && this.label.length > 0;
    if (hasLabel) {
      this.setAttribute("role", "img");
      this.setAttribute("aria-label", this.label);
      this.removeAttribute("aria-hidden");
    } else {
      this.removeAttribute("role");
      this.removeAttribute("aria-label");
      this.setAttribute("aria-hidden", "true");
    }
  }
  async setIcon() {
    var _a;
    const { url, fromLibrary } = __privateMethod(this, _getIconSource, getIconSource_fn).call(this);
    const library = fromLibrary ? getIconLibrary(this.library) : void 0;
    if (!url) {
      this.svg = null;
      return;
    }
    let iconResolver = iconCache.get(url);
    if (!iconResolver) {
      iconResolver = __privateMethod(this, _resolveIcon, resolveIcon_fn).call(this, url);
      iconCache.set(url, iconResolver);
    }
    if (!__privateGet(this, _initialRender)) {
      return;
    }
    const svg = await iconResolver;
    if (svg === RETRYABLE_ERROR) {
      iconCache.delete(url);
    }
    if (url !== __privateMethod(this, _getIconSource, getIconSource_fn).call(this).url) {
      return;
    }
    if (e(svg)) {
      this.svg = svg;
      return;
    }
    switch (svg) {
      case RETRYABLE_ERROR:
      case CACHEABLE_ERROR:
        this.svg = null;
        this.emit("terra-error");
        break;
      default:
        this.svg = svg.cloneNode(true);
        (_a = library == null ? void 0 : library.mutator) == null ? void 0 : _a.call(library, this.svg);
        this.emit("terra-load");
    }
  }
  render() {
    __privateMethod(this, _styleFromAttributes, styleFromAttributes_fn).call(this);
    return this.svg;
  }
};
_initialRender = new WeakMap();
_resolveIcon = new WeakSet();
resolveIcon_fn = async function(url) {
  var _a;
  let fileData;
  try {
    fileData = await fetch(url, { mode: "cors" });
    if (!fileData.ok) {
      return fileData.status === 410 ? CACHEABLE_ERROR : RETRYABLE_ERROR;
    }
  } catch (e2) {
    return RETRYABLE_ERROR;
  }
  try {
    const div = document.createElement("div");
    div.innerHTML = await fileData.text();
    const svg = div.firstElementChild;
    if (((_a = svg == null ? void 0 : svg.tagName) == null ? void 0 : _a.toLowerCase()) !== "svg") {
      return CACHEABLE_ERROR;
    }
    if (!parser) {
      parser = new DOMParser();
    }
    const doc = parser.parseFromString(svg.outerHTML, "text/html");
    const svgEl = doc.body.querySelector("svg");
    if (!svgEl) {
      return CACHEABLE_ERROR;
    }
    svgEl.part.add("svg");
    return document.adoptNode(svgEl);
  } catch (e2) {
    return CACHEABLE_ERROR;
  }
};
_getIconSource = new WeakSet();
getIconSource_fn = function() {
  const library = getIconLibrary(this.library);
  if (this.name && library) {
    return {
      url: library.resolver(this.name),
      fromLibrary: true
    };
  }
  return {
    url: this.src,
    fromLibrary: false
  };
};
_styleFromAttributes = new WeakSet();
styleFromAttributes_fn = function() {
  const svgAttributes = [
    { attribute: "color", property: this.color },
    { attribute: "font-size", property: this.fontSize }
  ];
  const style = svgAttributes.reduce((accumulator, { attribute, property }) => {
    if (typeof property === "string" && property.length > 0) {
      accumulator += ` ${attribute}: ${property};`;
    }
    this.removeAttribute(attribute);
    return accumulator;
  }, `${this.style.cssText}`);
  if (style.length > 0) {
    this.setAttribute("style", style);
  }
};
TerraIcon.styles = [component_styles_default, icon_styles_default];
__decorateClass([
  r()
], TerraIcon.prototype, "svg", 2);
__decorateClass([
  n({ reflect: true })
], TerraIcon.prototype, "name", 2);
__decorateClass([
  n()
], TerraIcon.prototype, "src", 2);
__decorateClass([
  n()
], TerraIcon.prototype, "label", 2);
__decorateClass([
  n({ reflect: true })
], TerraIcon.prototype, "library", 2);
__decorateClass([
  n()
], TerraIcon.prototype, "color", 2);
__decorateClass([
  n({ attribute: "font-size" })
], TerraIcon.prototype, "fontSize", 2);
__decorateClass([
  watch("label")
], TerraIcon.prototype, "handleLabelChange", 1);
__decorateClass([
  watch(["name", "src", "library"])
], TerraIcon.prototype, "setIcon", 1);

export {
  TerraIcon
};
