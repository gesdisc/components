import {
  date_picker_styles_default
} from "./chunk.SHDK2N2Y.js";
import {
  TerraButton
} from "./chunk.AXFH3ZZE.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.BFLNWCV5.js";
import {
  e,
  n
} from "./chunk.KACZXI5J.js";
import {
  x
} from "./chunk.LL3RMB25.js";
import {
  __decorateClass,
  __spreadProps,
  __spreadValues,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/date-picker/date-picker.component.ts
init_dirname();
init_buffer();
init_process();

// node_modules/lit-flatpickr/dist/index.js
init_dirname();
init_buffer();
init_process();

// node_modules/lit-flatpickr/dist/src/LitFlatpickr.js
init_dirname();
init_buffer();
init_process();

// node_modules/lit-flatpickr/node_modules/tslib/tslib.es6.js
init_dirname();
init_buffer();
init_process();
function __decorate(decorators, target, key, desc) {
  var c3 = arguments.length, r4 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r4 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i4 = decorators.length - 1; i4 >= 0; i4--)
      if (d3 = decorators[i4])
        r4 = (c3 < 3 ? d3(r4) : c3 > 3 ? d3(target, key, r4) : d3(target, key)) || r4;
  return c3 > 3 && r4 && Object.defineProperty(target, key, r4), r4;
}

// node_modules/lit-flatpickr/node_modules/lit/index.js
init_dirname();
init_buffer();
init_process();

// node_modules/lit-flatpickr/node_modules/@lit/reactive-element/reactive-element.js
init_dirname();
init_buffer();
init_process();

// node_modules/lit-flatpickr/node_modules/@lit/reactive-element/css-tag.js
init_dirname();
init_buffer();
init_process();
var t = window;
var e2 = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = Symbol();
var n2 = /* @__PURE__ */ new WeakMap();
var o = class {
  constructor(t3, e8, n8) {
    if (this._$cssResult$ = true, n8 !== s)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t3, this.t = e8;
  }
  get styleSheet() {
    let t3 = this.o;
    const s5 = this.t;
    if (e2 && void 0 === t3) {
      const e8 = void 0 !== s5 && 1 === s5.length;
      e8 && (t3 = n2.get(s5)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e8 && n2.set(s5, t3));
    }
    return t3;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t3) => new o("string" == typeof t3 ? t3 : t3 + "", void 0, s);
var i = (t3, ...e8) => {
  const n8 = 1 === t3.length ? t3[0] : e8.reduce((e9, s5, n9) => e9 + ((t4) => {
    if (true === t4._$cssResult$)
      return t4.cssText;
    if ("number" == typeof t4)
      return t4;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s5) + t3[n9 + 1], t3[0]);
  return new o(n8, t3, s);
};
var S = (s5, n8) => {
  e2 ? s5.adoptedStyleSheets = n8.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet) : n8.forEach((e8) => {
    const n9 = document.createElement("style"), o6 = t.litNonce;
    void 0 !== o6 && n9.setAttribute("nonce", o6), n9.textContent = e8.cssText, s5.appendChild(n9);
  });
};
var c = e2 ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
  let e8 = "";
  for (const s5 of t4.cssRules)
    e8 += s5.cssText;
  return r(e8);
})(t3) : t3;

// node_modules/lit-flatpickr/node_modules/@lit/reactive-element/reactive-element.js
var s2;
var e3 = window;
var r2 = e3.trustedTypes;
var h = r2 ? r2.emptyScript : "";
var o2 = e3.reactiveElementPolyfillSupport;
var n3 = { toAttribute(t3, i4) {
  switch (i4) {
    case Boolean:
      t3 = t3 ? h : null;
      break;
    case Object:
    case Array:
      t3 = null == t3 ? t3 : JSON.stringify(t3);
  }
  return t3;
}, fromAttribute(t3, i4) {
  let s5 = t3;
  switch (i4) {
    case Boolean:
      s5 = null !== t3;
      break;
    case Number:
      s5 = null === t3 ? null : Number(t3);
      break;
    case Object:
    case Array:
      try {
        s5 = JSON.parse(t3);
      } catch (t4) {
        s5 = null;
      }
  }
  return s5;
} };
var a = (t3, i4) => i4 !== t3 && (i4 == i4 || t3 == t3);
var l = { attribute: true, type: String, converter: n3, reflect: false, hasChanged: a };
var d = "finalized";
var u = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
  }
  static addInitializer(t3) {
    var i4;
    this.finalize(), (null !== (i4 = this.h) && void 0 !== i4 ? i4 : this.h = []).push(t3);
  }
  static get observedAttributes() {
    this.finalize();
    const t3 = [];
    return this.elementProperties.forEach((i4, s5) => {
      const e8 = this._$Ep(s5, i4);
      void 0 !== e8 && (this._$Ev.set(e8, s5), t3.push(e8));
    }), t3;
  }
  static createProperty(t3, i4 = l) {
    if (i4.state && (i4.attribute = false), this.finalize(), this.elementProperties.set(t3, i4), !i4.noAccessor && !this.prototype.hasOwnProperty(t3)) {
      const s5 = "symbol" == typeof t3 ? Symbol() : "__" + t3, e8 = this.getPropertyDescriptor(t3, s5, i4);
      void 0 !== e8 && Object.defineProperty(this.prototype, t3, e8);
    }
  }
  static getPropertyDescriptor(t3, i4, s5) {
    return { get() {
      return this[i4];
    }, set(e8) {
      const r4 = this[t3];
      this[i4] = e8, this.requestUpdate(t3, r4, s5);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t3) {
    return this.elementProperties.get(t3) || l;
  }
  static finalize() {
    if (this.hasOwnProperty(d))
      return false;
    this[d] = true;
    const t3 = Object.getPrototypeOf(this);
    if (t3.finalize(), void 0 !== t3.h && (this.h = [...t3.h]), this.elementProperties = new Map(t3.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t4 = this.properties, i4 = [...Object.getOwnPropertyNames(t4), ...Object.getOwnPropertySymbols(t4)];
      for (const s5 of i4)
        this.createProperty(s5, t4[s5]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i4) {
    const s5 = [];
    if (Array.isArray(i4)) {
      const e8 = new Set(i4.flat(1 / 0).reverse());
      for (const i5 of e8)
        s5.unshift(c(i5));
    } else
      void 0 !== i4 && s5.push(c(i4));
    return s5;
  }
  static _$Ep(t3, i4) {
    const s5 = i4.attribute;
    return false === s5 ? void 0 : "string" == typeof s5 ? s5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
  }
  _$Eu() {
    var t3;
    this._$E_ = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t3 = this.constructor.h) || void 0 === t3 || t3.forEach((t4) => t4(this));
  }
  addController(t3) {
    var i4, s5;
    (null !== (i4 = this._$ES) && void 0 !== i4 ? i4 : this._$ES = []).push(t3), void 0 !== this.renderRoot && this.isConnected && (null === (s5 = t3.hostConnected) || void 0 === s5 || s5.call(t3));
  }
  removeController(t3) {
    var i4;
    null === (i4 = this._$ES) || void 0 === i4 || i4.splice(this._$ES.indexOf(t3) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t3, i4) => {
      this.hasOwnProperty(i4) && (this._$Ei.set(i4, this[i4]), delete this[i4]);
    });
  }
  createRenderRoot() {
    var t3;
    const s5 = null !== (t3 = this.shadowRoot) && void 0 !== t3 ? t3 : this.attachShadow(this.constructor.shadowRootOptions);
    return S(s5, this.constructor.elementStyles), s5;
  }
  connectedCallback() {
    var t3;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
      var i4;
      return null === (i4 = t4.hostConnected) || void 0 === i4 ? void 0 : i4.call(t4);
    });
  }
  enableUpdating(t3) {
  }
  disconnectedCallback() {
    var t3;
    null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
      var i4;
      return null === (i4 = t4.hostDisconnected) || void 0 === i4 ? void 0 : i4.call(t4);
    });
  }
  attributeChangedCallback(t3, i4, s5) {
    this._$AK(t3, s5);
  }
  _$EO(t3, i4, s5 = l) {
    var e8;
    const r4 = this.constructor._$Ep(t3, s5);
    if (void 0 !== r4 && true === s5.reflect) {
      const h3 = (void 0 !== (null === (e8 = s5.converter) || void 0 === e8 ? void 0 : e8.toAttribute) ? s5.converter : n3).toAttribute(i4, s5.type);
      this._$El = t3, null == h3 ? this.removeAttribute(r4) : this.setAttribute(r4, h3), this._$El = null;
    }
  }
  _$AK(t3, i4) {
    var s5;
    const e8 = this.constructor, r4 = e8._$Ev.get(t3);
    if (void 0 !== r4 && this._$El !== r4) {
      const t4 = e8.getPropertyOptions(r4), h3 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== (null === (s5 = t4.converter) || void 0 === s5 ? void 0 : s5.fromAttribute) ? t4.converter : n3;
      this._$El = r4, this[r4] = h3.fromAttribute(i4, t4.type), this._$El = null;
    }
  }
  requestUpdate(t3, i4, s5) {
    let e8 = true;
    void 0 !== t3 && (((s5 = s5 || this.constructor.getPropertyOptions(t3)).hasChanged || a)(this[t3], i4) ? (this._$AL.has(t3) || this._$AL.set(t3, i4), true === s5.reflect && this._$El !== t3 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t3, s5))) : e8 = false), !this.isUpdatePending && e8 && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = true;
    try {
      await this._$E_;
    } catch (t4) {
      Promise.reject(t4);
    }
    const t3 = this.scheduleUpdate();
    return null != t3 && await t3, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t3;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t4, i5) => this[i5] = t4), this._$Ei = void 0);
    let i4 = false;
    const s5 = this._$AL;
    try {
      i4 = this.shouldUpdate(s5), i4 ? (this.willUpdate(s5), null === (t3 = this._$ES) || void 0 === t3 || t3.forEach((t4) => {
        var i5;
        return null === (i5 = t4.hostUpdate) || void 0 === i5 ? void 0 : i5.call(t4);
      }), this.update(s5)) : this._$Ek();
    } catch (t4) {
      throw i4 = false, this._$Ek(), t4;
    }
    i4 && this._$AE(s5);
  }
  willUpdate(t3) {
  }
  _$AE(t3) {
    var i4;
    null === (i4 = this._$ES) || void 0 === i4 || i4.forEach((t4) => {
      var i5;
      return null === (i5 = t4.hostUpdated) || void 0 === i5 ? void 0 : i5.call(t4);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t3) {
    return true;
  }
  update(t3) {
    void 0 !== this._$EC && (this._$EC.forEach((t4, i4) => this._$EO(i4, this[i4], t4)), this._$EC = void 0), this._$Ek();
  }
  updated(t3) {
  }
  firstUpdated(t3) {
  }
};
u[d] = true, u.elementProperties = /* @__PURE__ */ new Map(), u.elementStyles = [], u.shadowRootOptions = { mode: "open" }, null == o2 || o2({ ReactiveElement: u }), (null !== (s2 = e3.reactiveElementVersions) && void 0 !== s2 ? s2 : e3.reactiveElementVersions = []).push("1.6.3");

// node_modules/lit-flatpickr/node_modules/lit-html/lit-html.js
init_dirname();
init_buffer();
init_process();
var t2;
var i2 = window;
var s3 = i2.trustedTypes;
var e4 = s3 ? s3.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
var o3 = "$lit$";
var n4 = `lit$${(Math.random() + "").slice(9)}$`;
var l2 = "?" + n4;
var h2 = `<${l2}>`;
var r3 = document;
var u2 = () => r3.createComment("");
var d2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
var c2 = Array.isArray;
var v = (t3) => c2(t3) || "function" == typeof (null == t3 ? void 0 : t3[Symbol.iterator]);
var a2 = "[ 	\n\f\r]";
var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _ = /-->/g;
var m = />/g;
var p = RegExp(`>|${a2}(?:([^\\s"'>=/]+)(${a2}*=${a2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var g = /'/g;
var $ = /"/g;
var y = /^(?:script|style|textarea|title)$/i;
var w = (t3) => (i4, ...s5) => ({ _$litType$: t3, strings: i4, values: s5 });
var x2 = w(1);
var b = w(2);
var T = Symbol.for("lit-noChange");
var A = Symbol.for("lit-nothing");
var E = /* @__PURE__ */ new WeakMap();
var C = r3.createTreeWalker(r3, 129, null, false);
function P(t3, i4) {
  if (!Array.isArray(t3) || !t3.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== e4 ? e4.createHTML(i4) : i4;
}
var V = (t3, i4) => {
  const s5 = t3.length - 1, e8 = [];
  let l5, r4 = 2 === i4 ? "<svg>" : "", u3 = f;
  for (let i5 = 0; i5 < s5; i5++) {
    const s6 = t3[i5];
    let d3, c3, v2 = -1, a3 = 0;
    for (; a3 < s6.length && (u3.lastIndex = a3, c3 = u3.exec(s6), null !== c3); )
      a3 = u3.lastIndex, u3 === f ? "!--" === c3[1] ? u3 = _ : void 0 !== c3[1] ? u3 = m : void 0 !== c3[2] ? (y.test(c3[2]) && (l5 = RegExp("</" + c3[2], "g")), u3 = p) : void 0 !== c3[3] && (u3 = p) : u3 === p ? ">" === c3[0] ? (u3 = null != l5 ? l5 : f, v2 = -1) : void 0 === c3[1] ? v2 = -2 : (v2 = u3.lastIndex - c3[2].length, d3 = c3[1], u3 = void 0 === c3[3] ? p : '"' === c3[3] ? $ : g) : u3 === $ || u3 === g ? u3 = p : u3 === _ || u3 === m ? u3 = f : (u3 = p, l5 = void 0);
    const w2 = u3 === p && t3[i5 + 1].startsWith("/>") ? " " : "";
    r4 += u3 === f ? s6 + h2 : v2 >= 0 ? (e8.push(d3), s6.slice(0, v2) + o3 + s6.slice(v2) + n4 + w2) : s6 + n4 + (-2 === v2 ? (e8.push(void 0), i5) : w2);
  }
  return [P(t3, r4 + (t3[s5] || "<?>") + (2 === i4 ? "</svg>" : "")), e8];
};
var N = class _N {
  constructor({ strings: t3, _$litType$: i4 }, e8) {
    let h3;
    this.parts = [];
    let r4 = 0, d3 = 0;
    const c3 = t3.length - 1, v2 = this.parts, [a3, f2] = V(t3, i4);
    if (this.el = _N.createElement(a3, e8), C.currentNode = this.el.content, 2 === i4) {
      const t4 = this.el.content, i5 = t4.firstChild;
      i5.remove(), t4.append(...i5.childNodes);
    }
    for (; null !== (h3 = C.nextNode()) && v2.length < c3; ) {
      if (1 === h3.nodeType) {
        if (h3.hasAttributes()) {
          const t4 = [];
          for (const i5 of h3.getAttributeNames())
            if (i5.endsWith(o3) || i5.startsWith(n4)) {
              const s5 = f2[d3++];
              if (t4.push(i5), void 0 !== s5) {
                const t5 = h3.getAttribute(s5.toLowerCase() + o3).split(n4), i6 = /([.?@])?(.*)/.exec(s5);
                v2.push({ type: 1, index: r4, name: i6[2], strings: t5, ctor: "." === i6[1] ? H : "?" === i6[1] ? L : "@" === i6[1] ? z : k });
              } else
                v2.push({ type: 6, index: r4 });
            }
          for (const i5 of t4)
            h3.removeAttribute(i5);
        }
        if (y.test(h3.tagName)) {
          const t4 = h3.textContent.split(n4), i5 = t4.length - 1;
          if (i5 > 0) {
            h3.textContent = s3 ? s3.emptyScript : "";
            for (let s5 = 0; s5 < i5; s5++)
              h3.append(t4[s5], u2()), C.nextNode(), v2.push({ type: 2, index: ++r4 });
            h3.append(t4[i5], u2());
          }
        }
      } else if (8 === h3.nodeType)
        if (h3.data === l2)
          v2.push({ type: 2, index: r4 });
        else {
          let t4 = -1;
          for (; -1 !== (t4 = h3.data.indexOf(n4, t4 + 1)); )
            v2.push({ type: 7, index: r4 }), t4 += n4.length - 1;
        }
      r4++;
    }
  }
  static createElement(t3, i4) {
    const s5 = r3.createElement("template");
    return s5.innerHTML = t3, s5;
  }
};
function S2(t3, i4, s5 = t3, e8) {
  var o6, n8, l5, h3;
  if (i4 === T)
    return i4;
  let r4 = void 0 !== e8 ? null === (o6 = s5._$Co) || void 0 === o6 ? void 0 : o6[e8] : s5._$Cl;
  const u3 = d2(i4) ? void 0 : i4._$litDirective$;
  return (null == r4 ? void 0 : r4.constructor) !== u3 && (null === (n8 = null == r4 ? void 0 : r4._$AO) || void 0 === n8 || n8.call(r4, false), void 0 === u3 ? r4 = void 0 : (r4 = new u3(t3), r4._$AT(t3, s5, e8)), void 0 !== e8 ? (null !== (l5 = (h3 = s5)._$Co) && void 0 !== l5 ? l5 : h3._$Co = [])[e8] = r4 : s5._$Cl = r4), void 0 !== r4 && (i4 = S2(t3, r4._$AS(t3, i4.values), r4, e8)), i4;
}
var M = class {
  constructor(t3, i4) {
    this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i4;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t3) {
    var i4;
    const { el: { content: s5 }, parts: e8 } = this._$AD, o6 = (null !== (i4 = null == t3 ? void 0 : t3.creationScope) && void 0 !== i4 ? i4 : r3).importNode(s5, true);
    C.currentNode = o6;
    let n8 = C.nextNode(), l5 = 0, h3 = 0, u3 = e8[0];
    for (; void 0 !== u3; ) {
      if (l5 === u3.index) {
        let i5;
        2 === u3.type ? i5 = new R(n8, n8.nextSibling, this, t3) : 1 === u3.type ? i5 = new u3.ctor(n8, u3.name, u3.strings, this, t3) : 6 === u3.type && (i5 = new Z(n8, this, t3)), this._$AV.push(i5), u3 = e8[++h3];
      }
      l5 !== (null == u3 ? void 0 : u3.index) && (n8 = C.nextNode(), l5++);
    }
    return C.currentNode = r3, o6;
  }
  v(t3) {
    let i4 = 0;
    for (const s5 of this._$AV)
      void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t3, s5, i4), i4 += s5.strings.length - 2) : s5._$AI(t3[i4])), i4++;
  }
};
var R = class _R {
  constructor(t3, i4, s5, e8) {
    var o6;
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t3, this._$AB = i4, this._$AM = s5, this.options = e8, this._$Cp = null === (o6 = null == e8 ? void 0 : e8.isConnected) || void 0 === o6 || o6;
  }
  get _$AU() {
    var t3, i4;
    return null !== (i4 = null === (t3 = this._$AM) || void 0 === t3 ? void 0 : t3._$AU) && void 0 !== i4 ? i4 : this._$Cp;
  }
  get parentNode() {
    let t3 = this._$AA.parentNode;
    const i4 = this._$AM;
    return void 0 !== i4 && 11 === (null == t3 ? void 0 : t3.nodeType) && (t3 = i4.parentNode), t3;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t3, i4 = this) {
    t3 = S2(this, t3, i4), d2(t3) ? t3 === A || null == t3 || "" === t3 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t3 !== this._$AH && t3 !== T && this._(t3) : void 0 !== t3._$litType$ ? this.g(t3) : void 0 !== t3.nodeType ? this.$(t3) : v(t3) ? this.T(t3) : this._(t3);
  }
  k(t3) {
    return this._$AA.parentNode.insertBefore(t3, this._$AB);
  }
  $(t3) {
    this._$AH !== t3 && (this._$AR(), this._$AH = this.k(t3));
  }
  _(t3) {
    this._$AH !== A && d2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.$(r3.createTextNode(t3)), this._$AH = t3;
  }
  g(t3) {
    var i4;
    const { values: s5, _$litType$: e8 } = t3, o6 = "number" == typeof e8 ? this._$AC(t3) : (void 0 === e8.el && (e8.el = N.createElement(P(e8.h, e8.h[0]), this.options)), e8);
    if ((null === (i4 = this._$AH) || void 0 === i4 ? void 0 : i4._$AD) === o6)
      this._$AH.v(s5);
    else {
      const t4 = new M(o6, this), i5 = t4.u(this.options);
      t4.v(s5), this.$(i5), this._$AH = t4;
    }
  }
  _$AC(t3) {
    let i4 = E.get(t3.strings);
    return void 0 === i4 && E.set(t3.strings, i4 = new N(t3)), i4;
  }
  T(t3) {
    c2(this._$AH) || (this._$AH = [], this._$AR());
    const i4 = this._$AH;
    let s5, e8 = 0;
    for (const o6 of t3)
      e8 === i4.length ? i4.push(s5 = new _R(this.k(u2()), this.k(u2()), this, this.options)) : s5 = i4[e8], s5._$AI(o6), e8++;
    e8 < i4.length && (this._$AR(s5 && s5._$AB.nextSibling, e8), i4.length = e8);
  }
  _$AR(t3 = this._$AA.nextSibling, i4) {
    var s5;
    for (null === (s5 = this._$AP) || void 0 === s5 || s5.call(this, false, true, i4); t3 && t3 !== this._$AB; ) {
      const i5 = t3.nextSibling;
      t3.remove(), t3 = i5;
    }
  }
  setConnected(t3) {
    var i4;
    void 0 === this._$AM && (this._$Cp = t3, null === (i4 = this._$AP) || void 0 === i4 || i4.call(this, t3));
  }
};
var k = class {
  constructor(t3, i4, s5, e8, o6) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t3, this.name = i4, this._$AM = e8, this.options = o6, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = A;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t3, i4 = this, s5, e8) {
    const o6 = this.strings;
    let n8 = false;
    if (void 0 === o6)
      t3 = S2(this, t3, i4, 0), n8 = !d2(t3) || t3 !== this._$AH && t3 !== T, n8 && (this._$AH = t3);
    else {
      const e9 = t3;
      let l5, h3;
      for (t3 = o6[0], l5 = 0; l5 < o6.length - 1; l5++)
        h3 = S2(this, e9[s5 + l5], i4, l5), h3 === T && (h3 = this._$AH[l5]), n8 || (n8 = !d2(h3) || h3 !== this._$AH[l5]), h3 === A ? t3 = A : t3 !== A && (t3 += (null != h3 ? h3 : "") + o6[l5 + 1]), this._$AH[l5] = h3;
    }
    n8 && !e8 && this.j(t3);
  }
  j(t3) {
    t3 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t3 ? t3 : "");
  }
};
var H = class extends k {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t3) {
    this.element[this.name] = t3 === A ? void 0 : t3;
  }
};
var I = s3 ? s3.emptyScript : "";
var L = class extends k {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t3) {
    t3 && t3 !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
  }
};
var z = class extends k {
  constructor(t3, i4, s5, e8, o6) {
    super(t3, i4, s5, e8, o6), this.type = 5;
  }
  _$AI(t3, i4 = this) {
    var s5;
    if ((t3 = null !== (s5 = S2(this, t3, i4, 0)) && void 0 !== s5 ? s5 : A) === T)
      return;
    const e8 = this._$AH, o6 = t3 === A && e8 !== A || t3.capture !== e8.capture || t3.once !== e8.once || t3.passive !== e8.passive, n8 = t3 !== A && (e8 === A || o6);
    o6 && this.element.removeEventListener(this.name, this, e8), n8 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
  }
  handleEvent(t3) {
    var i4, s5;
    "function" == typeof this._$AH ? this._$AH.call(null !== (s5 = null === (i4 = this.options) || void 0 === i4 ? void 0 : i4.host) && void 0 !== s5 ? s5 : this.element, t3) : this._$AH.handleEvent(t3);
  }
};
var Z = class {
  constructor(t3, i4, s5) {
    this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i4, this.options = s5;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t3) {
    S2(this, t3);
  }
};
var B = i2.litHtmlPolyfillSupport;
null == B || B(N, R), (null !== (t2 = i2.litHtmlVersions) && void 0 !== t2 ? t2 : i2.litHtmlVersions = []).push("2.8.0");
var D = (t3, i4, s5) => {
  var e8, o6;
  const n8 = null !== (e8 = null == s5 ? void 0 : s5.renderBefore) && void 0 !== e8 ? e8 : i4;
  let l5 = n8._$litPart$;
  if (void 0 === l5) {
    const t4 = null !== (o6 = null == s5 ? void 0 : s5.renderBefore) && void 0 !== o6 ? o6 : null;
    n8._$litPart$ = l5 = new R(i4.insertBefore(u2(), t4), t4, void 0, null != s5 ? s5 : {});
  }
  return l5._$AI(t3), l5;
};

// node_modules/lit-flatpickr/node_modules/lit-element/lit-element.js
init_dirname();
init_buffer();
init_process();
var l3;
var o4;
var s4 = class extends u {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t3, e8;
    const i4 = super.createRenderRoot();
    return null !== (t3 = (e8 = this.renderOptions).renderBefore) && void 0 !== t3 || (e8.renderBefore = i4.firstChild), i4;
  }
  update(t3) {
    const i4 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = D(i4, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t3;
    super.connectedCallback(), null === (t3 = this._$Do) || void 0 === t3 || t3.setConnected(true);
  }
  disconnectedCallback() {
    var t3;
    super.disconnectedCallback(), null === (t3 = this._$Do) || void 0 === t3 || t3.setConnected(false);
  }
  render() {
    return T;
  }
};
s4.finalized = true, s4._$litElement$ = true, null === (l3 = globalThis.litElementHydrateSupport) || void 0 === l3 || l3.call(globalThis, { LitElement: s4 });
var n5 = globalThis.litElementPolyfillSupport;
null == n5 || n5({ LitElement: s4 });
(null !== (o4 = globalThis.litElementVersions) && void 0 !== o4 ? o4 : globalThis.litElementVersions = []).push("3.3.3");

// node_modules/lit-flatpickr/node_modules/lit-html/is-server.js
init_dirname();
init_buffer();
init_process();

// node_modules/lit-flatpickr/node_modules/lit/decorators.js
init_dirname();
init_buffer();
init_process();

// node_modules/lit-flatpickr/node_modules/@lit/reactive-element/decorators/custom-element.js
init_dirname();
init_buffer();
init_process();
var e5 = (e8) => (n8) => "function" == typeof n8 ? ((e9, n9) => (customElements.define(e9, n9), n9))(e8, n8) : ((e9, n9) => {
  const { kind: t3, elements: s5 } = n9;
  return { kind: t3, elements: s5, finisher(n10) {
    customElements.define(e9, n10);
  } };
})(e8, n8);

// node_modules/lit-flatpickr/node_modules/@lit/reactive-element/decorators/property.js
init_dirname();
init_buffer();
init_process();
var i3 = (i4, e8) => "method" === e8.kind && e8.descriptor && !("value" in e8.descriptor) ? __spreadProps(__spreadValues({}, e8), { finisher(n8) {
  n8.createProperty(e8.key, i4);
} }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e8.key, initializer() {
  "function" == typeof e8.initializer && (this[e8.key] = e8.initializer.call(this));
}, finisher(n8) {
  n8.createProperty(e8.key, i4);
} };
var e6 = (i4, e8, n8) => {
  e8.constructor.createProperty(n8, i4);
};
function n6(n8) {
  return (t3, o6) => void 0 !== o6 ? e6(n8, t3, o6) : i3(n8, t3);
}

// node_modules/lit-flatpickr/node_modules/@lit/reactive-element/decorators/state.js
init_dirname();
init_buffer();
init_process();

// node_modules/lit-flatpickr/node_modules/@lit/reactive-element/decorators/event-options.js
init_dirname();
init_buffer();
init_process();

// node_modules/lit-flatpickr/node_modules/@lit/reactive-element/decorators/base.js
init_dirname();
init_buffer();
init_process();

// node_modules/lit-flatpickr/node_modules/@lit/reactive-element/decorators/query.js
init_dirname();
init_buffer();
init_process();

// node_modules/lit-flatpickr/node_modules/@lit/reactive-element/decorators/query-all.js
init_dirname();
init_buffer();
init_process();

// node_modules/lit-flatpickr/node_modules/@lit/reactive-element/decorators/query-async.js
init_dirname();
init_buffer();
init_process();

// node_modules/lit-flatpickr/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
init_dirname();
init_buffer();
init_process();
var n7;
var e7 = null != (null === (n7 = window.HTMLSlotElement) || void 0 === n7 ? void 0 : n7.prototype.assignedElements) ? (o6, n8) => o6.assignedElements(n8) : (o6, n8) => o6.assignedNodes(n8).filter((o7) => o7.nodeType === Node.ELEMENT_NODE);

// node_modules/lit-flatpickr/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js
init_dirname();
init_buffer();
init_process();

// node_modules/flatpickr/dist/esm/index.js
init_dirname();
init_buffer();
init_process();

// node_modules/flatpickr/dist/esm/types/options.js
init_dirname();
init_buffer();
init_process();
var HOOKS = [
  "onChange",
  "onClose",
  "onDayCreate",
  "onDestroy",
  "onKeyDown",
  "onMonthChange",
  "onOpen",
  "onParseConfig",
  "onReady",
  "onValueUpdate",
  "onYearChange",
  "onPreCalendarPosition"
];
var defaults = {
  _disable: [],
  allowInput: false,
  allowInvalidPreload: false,
  altFormat: "F j, Y",
  altInput: false,
  altInputClass: "form-control input",
  animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: true,
  clickOpens: true,
  closeOnSelect: true,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: false,
  enableSeconds: false,
  enableTime: false,
  errorHandler: function(err) {
    return typeof console !== "undefined" && console.warn(err);
  },
  getWeek: function(givenDate) {
    var date = new Date(givenDate.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 864e5 - 3 + (week1.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: false,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: false,
  now: /* @__PURE__ */ new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: void 0,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: false,
  showMonths: 1,
  static: false,
  time_24hr: false,
  weekNumbers: false,
  wrap: false
};

// node_modules/flatpickr/dist/esm/l10n/default.js
init_dirname();
init_buffer();
init_process();
var english = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  },
  months: {
    shorthand: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    longhand: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: function(nth) {
    var s5 = nth % 100;
    if (s5 > 3 && s5 < 21)
      return "th";
    switch (s5 % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: false
};
var default_default = english;

// node_modules/flatpickr/dist/esm/utils/index.js
init_dirname();
init_buffer();
init_process();
var pad = function(number, length) {
  if (length === void 0) {
    length = 2;
  }
  return ("000" + number).slice(length * -1);
};
var int = function(bool) {
  return bool === true ? 1 : 0;
};
function debounce(fn, wait) {
  var t3;
  return function() {
    var _this = this;
    var args = arguments;
    clearTimeout(t3);
    t3 = setTimeout(function() {
      return fn.apply(_this, args);
    }, wait);
  };
}
var arrayify = function(obj) {
  return obj instanceof Array ? obj : [obj];
};

// node_modules/flatpickr/dist/esm/utils/dom.js
init_dirname();
init_buffer();
init_process();
function toggleClass(elem, className, bool) {
  if (bool === true)
    return elem.classList.add(className);
  elem.classList.remove(className);
}
function createElement(tag, className, content) {
  var e8 = window.document.createElement(tag);
  className = className || "";
  content = content || "";
  e8.className = className;
  if (content !== void 0)
    e8.textContent = content;
  return e8;
}
function clearNode(node) {
  while (node.firstChild)
    node.removeChild(node.firstChild);
}
function findParent(node, condition) {
  if (condition(node))
    return node;
  else if (node.parentNode)
    return findParent(node.parentNode, condition);
  return void 0;
}
function createNumberInput(inputClassName, opts) {
  var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
  if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
    numInput.type = "number";
  } else {
    numInput.type = "text";
    numInput.pattern = "\\d*";
  }
  if (opts !== void 0)
    for (var key in opts)
      numInput.setAttribute(key, opts[key]);
  wrapper.appendChild(numInput);
  wrapper.appendChild(arrowUp);
  wrapper.appendChild(arrowDown);
  return wrapper;
}
function getEventTarget(event) {
  try {
    if (typeof event.composedPath === "function") {
      var path = event.composedPath();
      return path[0];
    }
    return event.target;
  } catch (error) {
    return event.target;
  }
}

// node_modules/flatpickr/dist/esm/utils/dates.js
init_dirname();
init_buffer();
init_process();

// node_modules/flatpickr/dist/esm/utils/formatting.js
init_dirname();
init_buffer();
init_process();
var doNothing = function() {
  return void 0;
};
var monthToStr = function(monthNumber, shorthand, locale) {
  return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
};
var revFormat = {
  D: doNothing,
  F: function(dateObj, monthName, locale) {
    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
  },
  G: function(dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  H: function(dateObj, hour) {
    dateObj.setHours(parseFloat(hour));
  },
  J: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  K: function(dateObj, amPM, locale) {
    dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
  },
  M: function(dateObj, shortMonth, locale) {
    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
  },
  S: function(dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  U: function(_2, unixSeconds) {
    return new Date(parseFloat(unixSeconds) * 1e3);
  },
  W: function(dateObj, weekNum, locale) {
    var weekNumber = parseInt(weekNum);
    var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
    return date;
  },
  Y: function(dateObj, year) {
    dateObj.setFullYear(parseFloat(year));
  },
  Z: function(_2, ISODate) {
    return new Date(ISODate);
  },
  d: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  h: function(dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  i: function(dateObj, minutes) {
    dateObj.setMinutes(parseFloat(minutes));
  },
  j: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  l: doNothing,
  m: function(dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  n: function(dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  s: function(dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  u: function(_2, unixMillSeconds) {
    return new Date(parseFloat(unixMillSeconds));
  },
  w: doNothing,
  y: function(dateObj, year) {
    dateObj.setFullYear(2e3 + parseFloat(year));
  }
};
var tokenRegex = {
  D: "",
  F: "",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
};
var formats = {
  Z: function(date) {
    return date.toISOString();
  },
  D: function(date, locale, options) {
    return locale.weekdays.shorthand[formats.w(date, locale, options)];
  },
  F: function(date, locale, options) {
    return monthToStr(formats.n(date, locale, options) - 1, false, locale);
  },
  G: function(date, locale, options) {
    return pad(formats.h(date, locale, options));
  },
  H: function(date) {
    return pad(date.getHours());
  },
  J: function(date, locale) {
    return locale.ordinal !== void 0 ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
  },
  K: function(date, locale) {
    return locale.amPM[int(date.getHours() > 11)];
  },
  M: function(date, locale) {
    return monthToStr(date.getMonth(), true, locale);
  },
  S: function(date) {
    return pad(date.getSeconds());
  },
  U: function(date) {
    return date.getTime() / 1e3;
  },
  W: function(date, _2, options) {
    return options.getWeek(date);
  },
  Y: function(date) {
    return pad(date.getFullYear(), 4);
  },
  d: function(date) {
    return pad(date.getDate());
  },
  h: function(date) {
    return date.getHours() % 12 ? date.getHours() % 12 : 12;
  },
  i: function(date) {
    return pad(date.getMinutes());
  },
  j: function(date) {
    return date.getDate();
  },
  l: function(date, locale) {
    return locale.weekdays.longhand[date.getDay()];
  },
  m: function(date) {
    return pad(date.getMonth() + 1);
  },
  n: function(date) {
    return date.getMonth() + 1;
  },
  s: function(date) {
    return date.getSeconds();
  },
  u: function(date) {
    return date.getTime();
  },
  w: function(date) {
    return date.getDay();
  },
  y: function(date) {
    return String(date.getFullYear()).substring(2);
  }
};

// node_modules/flatpickr/dist/esm/utils/dates.js
var createDateFormatter = function(_a) {
  var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c, _d = _a.isMobile, isMobile = _d === void 0 ? false : _d;
  return function(dateObj, frmt, overrideLocale) {
    var locale = overrideLocale || l10n;
    if (config.formatDate !== void 0 && !isMobile) {
      return config.formatDate(dateObj, frmt, locale);
    }
    return frmt.split("").map(function(c3, i4, arr) {
      return formats[c3] && arr[i4 - 1] !== "\\" ? formats[c3](dateObj, locale, config) : c3 !== "\\" ? c3 : "";
    }).join("");
  };
};
var createDateParser = function(_a) {
  var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
  return function(date, givenFormat, timeless, customLocale) {
    if (date !== 0 && !date)
      return void 0;
    var locale = customLocale || l10n;
    var parsedDate;
    var dateOrig = date;
    if (date instanceof Date)
      parsedDate = new Date(date.getTime());
    else if (typeof date !== "string" && date.toFixed !== void 0)
      parsedDate = new Date(date);
    else if (typeof date === "string") {
      var format = givenFormat || (config || defaults).dateFormat;
      var datestr = String(date).trim();
      if (datestr === "today") {
        parsedDate = /* @__PURE__ */ new Date();
        timeless = true;
      } else if (config && config.parseDate) {
        parsedDate = config.parseDate(date, format);
      } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) {
        parsedDate = new Date(date);
      } else {
        var matched = void 0, ops = [];
        for (var i4 = 0, matchIndex = 0, regexStr = ""; i4 < format.length; i4++) {
          var token = format[i4];
          var isBackSlash = token === "\\";
          var escaped = format[i4 - 1] === "\\" || isBackSlash;
          if (tokenRegex[token] && !escaped) {
            regexStr += tokenRegex[token];
            var match = new RegExp(regexStr).exec(date);
            if (match && (matched = true)) {
              ops[token !== "Y" ? "push" : "unshift"]({
                fn: revFormat[token],
                val: match[++matchIndex]
              });
            }
          } else if (!isBackSlash)
            regexStr += ".";
        }
        parsedDate = !config || !config.noCalendar ? new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1, 0, 0, 0, 0) : new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0));
        ops.forEach(function(_a2) {
          var fn = _a2.fn, val = _a2.val;
          return parsedDate = fn(parsedDate, val, locale) || parsedDate;
        });
        parsedDate = matched ? parsedDate : void 0;
      }
    }
    if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
      config.errorHandler(new Error("Invalid date provided: " + dateOrig));
      return void 0;
    }
    if (timeless === true)
      parsedDate.setHours(0, 0, 0, 0);
    return parsedDate;
  };
};
function compareDates(date1, date2, timeless) {
  if (timeless === void 0) {
    timeless = true;
  }
  if (timeless !== false) {
    return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
  }
  return date1.getTime() - date2.getTime();
}
var isBetween = function(ts, ts1, ts2) {
  return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var calculateSecondsSinceMidnight = function(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
};
var parseSeconds = function(secondsSinceMidnight) {
  var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
  return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
};
var duration = {
  DAY: 864e5
};
function getDefaultHours(config) {
  var hours = config.defaultHour;
  var minutes = config.defaultMinute;
  var seconds = config.defaultSeconds;
  if (config.minDate !== void 0) {
    var minHour = config.minDate.getHours();
    var minMinutes = config.minDate.getMinutes();
    var minSeconds = config.minDate.getSeconds();
    if (hours < minHour) {
      hours = minHour;
    }
    if (hours === minHour && minutes < minMinutes) {
      minutes = minMinutes;
    }
    if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
      seconds = config.minDate.getSeconds();
  }
  if (config.maxDate !== void 0) {
    var maxHr = config.maxDate.getHours();
    var maxMinutes = config.maxDate.getMinutes();
    hours = Math.min(hours, maxHr);
    if (hours === maxHr)
      minutes = Math.min(maxMinutes, minutes);
    if (hours === maxHr && minutes === maxMinutes)
      seconds = config.maxDate.getSeconds();
  }
  return { hours, minutes, seconds };
}

// node_modules/flatpickr/dist/esm/utils/polyfills.js
init_dirname();
init_buffer();
init_process();
if (typeof Object.assign !== "function") {
  Object.assign = function(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (!target) {
      throw TypeError("Cannot convert undefined or null to object");
    }
    var _loop_1 = function(source2) {
      if (source2) {
        Object.keys(source2).forEach(function(key) {
          return target[key] = source2[key];
        });
      }
    };
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
      var source = args_1[_a];
      _loop_1(source);
    }
    return target;
  };
}

// node_modules/flatpickr/dist/esm/index.js
var __assign = function() {
  __assign = Object.assign || function(t3) {
    for (var s5, i4 = 1, n8 = arguments.length; i4 < n8; i4++) {
      s5 = arguments[i4];
      for (var p2 in s5)
        if (Object.prototype.hasOwnProperty.call(s5, p2))
          t3[p2] = s5[p2];
    }
    return t3;
  };
  return __assign.apply(this, arguments);
};
var __spreadArrays = function() {
  for (var s5 = 0, i4 = 0, il = arguments.length; i4 < il; i4++)
    s5 += arguments[i4].length;
  for (var r4 = Array(s5), k2 = 0, i4 = 0; i4 < il; i4++)
    for (var a3 = arguments[i4], j = 0, jl = a3.length; j < jl; j++, k2++)
      r4[k2] = a3[j];
  return r4;
};
var DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
  var self = {
    config: __assign(__assign({}, defaults), flatpickr2.defaultConfig),
    l10n: default_default
  };
  self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
  self._handlers = [];
  self.pluginElements = [];
  self.loadedPlugins = [];
  self._bind = bind;
  self._setHoursFromDate = setHoursFromDate;
  self._positionCalendar = positionCalendar;
  self.changeMonth = changeMonth;
  self.changeYear = changeYear;
  self.clear = clear;
  self.close = close;
  self.onMouseOver = onMouseOver;
  self._createElement = createElement;
  self.createDay = createDay;
  self.destroy = destroy;
  self.isEnabled = isEnabled;
  self.jumpToDate = jumpToDate;
  self.updateValue = updateValue;
  self.open = open;
  self.redraw = redraw;
  self.set = set;
  self.setDate = setDate;
  self.toggle = toggle;
  function setupHelperFunctions() {
    self.utils = {
      getDaysInMonth: function(month, yr) {
        if (month === void 0) {
          month = self.currentMonth;
        }
        if (yr === void 0) {
          yr = self.currentYear;
        }
        if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0))
          return 29;
        return self.l10n.daysInMonth[month];
      }
    };
  }
  function init() {
    self.element = self.input = element;
    self.isOpen = false;
    parseConfig();
    setupLocale();
    setupInputs();
    setupDates();
    setupHelperFunctions();
    if (!self.isMobile)
      build();
    bindEvents();
    if (self.selectedDates.length || self.config.noCalendar) {
      if (self.config.enableTime) {
        setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : void 0);
      }
      updateValue(false);
    }
    setCalendarWidth();
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!self.isMobile && isSafari) {
      positionCalendar();
    }
    triggerEvent("onReady");
  }
  function getClosestActiveElement() {
    var _a;
    return ((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode()).activeElement || document.activeElement;
  }
  function bindToInstance(fn) {
    return fn.bind(self);
  }
  function setCalendarWidth() {
    var config = self.config;
    if (config.weekNumbers === false && config.showMonths === 1) {
      return;
    } else if (config.noCalendar !== true) {
      window.requestAnimationFrame(function() {
        if (self.calendarContainer !== void 0) {
          self.calendarContainer.style.visibility = "hidden";
          self.calendarContainer.style.display = "block";
        }
        if (self.daysContainer !== void 0) {
          var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
          self.daysContainer.style.width = daysWidth + "px";
          self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== void 0 ? self.weekWrapper.offsetWidth : 0) + "px";
          self.calendarContainer.style.removeProperty("visibility");
          self.calendarContainer.style.removeProperty("display");
        }
      });
    }
  }
  function updateTime(e8) {
    if (self.selectedDates.length === 0) {
      var defaultDate = self.config.minDate === void 0 || compareDates(/* @__PURE__ */ new Date(), self.config.minDate) >= 0 ? /* @__PURE__ */ new Date() : new Date(self.config.minDate.getTime());
      var defaults2 = getDefaultHours(self.config);
      defaultDate.setHours(defaults2.hours, defaults2.minutes, defaults2.seconds, defaultDate.getMilliseconds());
      self.selectedDates = [defaultDate];
      self.latestSelectedDateObj = defaultDate;
    }
    if (e8 !== void 0 && e8.type !== "blur") {
      timeWrapper(e8);
    }
    var prevValue = self._input.value;
    setHoursFromInputs();
    updateValue();
    if (self._input.value !== prevValue) {
      self._debouncedChange();
    }
  }
  function ampm2military(hour, amPM) {
    return hour % 12 + 12 * int(amPM === self.l10n.amPM[1]);
  }
  function military2ampm(hour) {
    switch (hour % 24) {
      case 0:
      case 12:
        return 12;
      default:
        return hour % 12;
    }
  }
  function setHoursFromInputs() {
    if (self.hourElement === void 0 || self.minuteElement === void 0)
      return;
    var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== void 0 ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
    if (self.amPM !== void 0) {
      hours = ampm2military(hours, self.amPM.textContent);
    }
    var limitMinHours = self.config.minTime !== void 0 || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
    var limitMaxHours = self.config.maxTime !== void 0 || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;
    if (self.config.maxTime !== void 0 && self.config.minTime !== void 0 && self.config.minTime > self.config.maxTime) {
      var minBound = calculateSecondsSinceMidnight(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
      var maxBound = calculateSecondsSinceMidnight(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
      var currentTime = calculateSecondsSinceMidnight(hours, minutes, seconds);
      if (currentTime > maxBound && currentTime < minBound) {
        var result = parseSeconds(minBound);
        hours = result[0];
        minutes = result[1];
        seconds = result[2];
      }
    } else {
      if (limitMaxHours) {
        var maxTime = self.config.maxTime !== void 0 ? self.config.maxTime : self.config.maxDate;
        hours = Math.min(hours, maxTime.getHours());
        if (hours === maxTime.getHours())
          minutes = Math.min(minutes, maxTime.getMinutes());
        if (minutes === maxTime.getMinutes())
          seconds = Math.min(seconds, maxTime.getSeconds());
      }
      if (limitMinHours) {
        var minTime = self.config.minTime !== void 0 ? self.config.minTime : self.config.minDate;
        hours = Math.max(hours, minTime.getHours());
        if (hours === minTime.getHours() && minutes < minTime.getMinutes())
          minutes = minTime.getMinutes();
        if (minutes === minTime.getMinutes())
          seconds = Math.max(seconds, minTime.getSeconds());
      }
    }
    setHours(hours, minutes, seconds);
  }
  function setHoursFromDate(dateObj) {
    var date = dateObj || self.latestSelectedDateObj;
    if (date && date instanceof Date) {
      setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
  }
  function setHours(hours, minutes, seconds) {
    if (self.latestSelectedDateObj !== void 0) {
      self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
    }
    if (!self.hourElement || !self.minuteElement || self.isMobile)
      return;
    self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
    self.minuteElement.value = pad(minutes);
    if (self.amPM !== void 0)
      self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
    if (self.secondElement !== void 0)
      self.secondElement.value = pad(seconds);
  }
  function onYearInput(event) {
    var eventTarget = getEventTarget(event);
    var year = parseInt(eventTarget.value) + (event.delta || 0);
    if (year / 1e3 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
      changeYear(year);
    }
  }
  function bind(element2, event, handler, options) {
    if (event instanceof Array)
      return event.forEach(function(ev) {
        return bind(element2, ev, handler, options);
      });
    if (element2 instanceof Array)
      return element2.forEach(function(el) {
        return bind(el, event, handler, options);
      });
    element2.addEventListener(event, handler, options);
    self._handlers.push({
      remove: function() {
        return element2.removeEventListener(event, handler, options);
      }
    });
  }
  function triggerChange() {
    triggerEvent("onChange");
  }
  function bindEvents() {
    if (self.config.wrap) {
      ["open", "close", "toggle", "clear"].forEach(function(evt) {
        Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function(el) {
          return bind(el, "click", self[evt]);
        });
      });
    }
    if (self.isMobile) {
      setupMobile();
      return;
    }
    var debouncedResize = debounce(onResize, 50);
    self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
    if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
      bind(self.daysContainer, "mouseover", function(e8) {
        if (self.config.mode === "range")
          onMouseOver(getEventTarget(e8));
      });
    bind(self._input, "keydown", onKeyDown);
    if (self.calendarContainer !== void 0) {
      bind(self.calendarContainer, "keydown", onKeyDown);
    }
    if (!self.config.inline && !self.config.static)
      bind(window, "resize", debouncedResize);
    if (window.ontouchstart !== void 0)
      bind(window.document, "touchstart", documentClick);
    else
      bind(window.document, "mousedown", documentClick);
    bind(window.document, "focus", documentClick, { capture: true });
    if (self.config.clickOpens === true) {
      bind(self._input, "focus", self.open);
      bind(self._input, "click", self.open);
    }
    if (self.daysContainer !== void 0) {
      bind(self.monthNav, "click", onMonthNavClick);
      bind(self.monthNav, ["keyup", "increment"], onYearInput);
      bind(self.daysContainer, "click", selectDate);
    }
    if (self.timeContainer !== void 0 && self.minuteElement !== void 0 && self.hourElement !== void 0) {
      var selText = function(e8) {
        return getEventTarget(e8).select();
      };
      bind(self.timeContainer, ["increment"], updateTime);
      bind(self.timeContainer, "blur", updateTime, { capture: true });
      bind(self.timeContainer, "click", timeIncrement);
      bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
      if (self.secondElement !== void 0)
        bind(self.secondElement, "focus", function() {
          return self.secondElement && self.secondElement.select();
        });
      if (self.amPM !== void 0) {
        bind(self.amPM, "click", function(e8) {
          updateTime(e8);
        });
      }
    }
    if (self.config.allowInput) {
      bind(self._input, "blur", onBlur);
    }
  }
  function jumpToDate(jumpDate, triggerChange2) {
    var jumpTo = jumpDate !== void 0 ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
    var oldYear = self.currentYear;
    var oldMonth = self.currentMonth;
    try {
      if (jumpTo !== void 0) {
        self.currentYear = jumpTo.getFullYear();
        self.currentMonth = jumpTo.getMonth();
      }
    } catch (e8) {
      e8.message = "Invalid date supplied: " + jumpTo;
      self.config.errorHandler(e8);
    }
    if (triggerChange2 && self.currentYear !== oldYear) {
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    if (triggerChange2 && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
      triggerEvent("onMonthChange");
    }
    self.redraw();
  }
  function timeIncrement(e8) {
    var eventTarget = getEventTarget(e8);
    if (~eventTarget.className.indexOf("arrow"))
      incrementNumInput(e8, eventTarget.classList.contains("arrowUp") ? 1 : -1);
  }
  function incrementNumInput(e8, delta, inputElem) {
    var target = e8 && getEventTarget(e8);
    var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
    var event = createEvent("increment");
    event.delta = delta;
    input && input.dispatchEvent(event);
  }
  function build() {
    var fragment = window.document.createDocumentFragment();
    self.calendarContainer = createElement("div", "flatpickr-calendar");
    self.calendarContainer.tabIndex = -1;
    if (!self.config.noCalendar) {
      fragment.appendChild(buildMonthNav());
      self.innerContainer = createElement("div", "flatpickr-innerContainer");
      if (self.config.weekNumbers) {
        var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
        self.innerContainer.appendChild(weekWrapper);
        self.weekNumbers = weekNumbers;
        self.weekWrapper = weekWrapper;
      }
      self.rContainer = createElement("div", "flatpickr-rContainer");
      self.rContainer.appendChild(buildWeekdays());
      if (!self.daysContainer) {
        self.daysContainer = createElement("div", "flatpickr-days");
        self.daysContainer.tabIndex = -1;
      }
      buildDays();
      self.rContainer.appendChild(self.daysContainer);
      self.innerContainer.appendChild(self.rContainer);
      fragment.appendChild(self.innerContainer);
    }
    if (self.config.enableTime) {
      fragment.appendChild(buildTime());
    }
    toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
    toggleClass(self.calendarContainer, "animate", self.config.animate === true);
    toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
    self.calendarContainer.appendChild(fragment);
    var customAppend = self.config.appendTo !== void 0 && self.config.appendTo.nodeType !== void 0;
    if (self.config.inline || self.config.static) {
      self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
      if (self.config.inline) {
        if (!customAppend && self.element.parentNode)
          self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
        else if (self.config.appendTo !== void 0)
          self.config.appendTo.appendChild(self.calendarContainer);
      }
      if (self.config.static) {
        var wrapper = createElement("div", "flatpickr-wrapper");
        if (self.element.parentNode)
          self.element.parentNode.insertBefore(wrapper, self.element);
        wrapper.appendChild(self.element);
        if (self.altInput)
          wrapper.appendChild(self.altInput);
        wrapper.appendChild(self.calendarContainer);
      }
    }
    if (!self.config.static && !self.config.inline)
      (self.config.appendTo !== void 0 ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
  }
  function createDay(className, date, _dayNumber, i4) {
    var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", className, date.getDate().toString());
    dayElement.dateObj = date;
    dayElement.$i = i4;
    dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
    if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
      self.todayDateElem = dayElement;
      dayElement.classList.add("today");
      dayElement.setAttribute("aria-current", "date");
    }
    if (dateIsEnabled) {
      dayElement.tabIndex = -1;
      if (isDateSelected(date)) {
        dayElement.classList.add("selected");
        self.selectedDateElem = dayElement;
        if (self.config.mode === "range") {
          toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
          toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
          if (className === "nextMonthDay")
            dayElement.classList.add("inRange");
        }
      }
    } else {
      dayElement.classList.add("flatpickr-disabled");
    }
    if (self.config.mode === "range") {
      if (isDateInRange(date) && !isDateSelected(date))
        dayElement.classList.add("inRange");
    }
    if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && i4 % 7 === 6) {
      self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
    }
    triggerEvent("onDayCreate", dayElement);
    return dayElement;
  }
  function focusOnDayElem(targetNode) {
    targetNode.focus();
    if (self.config.mode === "range")
      onMouseOver(targetNode);
  }
  function getFirstAvailableDay(delta) {
    var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    for (var m2 = startMonth; m2 != endMonth; m2 += delta) {
      var month = self.daysContainer.children[m2];
      var startIndex = delta > 0 ? 0 : month.children.length - 1;
      var endIndex = delta > 0 ? month.children.length : -1;
      for (var i4 = startIndex; i4 != endIndex; i4 += delta) {
        var c3 = month.children[i4];
        if (c3.className.indexOf("hidden") === -1 && isEnabled(c3.dateObj))
          return c3;
      }
    }
    return void 0;
  }
  function getNextAvailableDay(current, delta) {
    var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    var loopDelta = delta > 0 ? 1 : -1;
    for (var m2 = givenMonth - self.currentMonth; m2 != endMonth; m2 += loopDelta) {
      var month = self.daysContainer.children[m2];
      var startIndex = givenMonth - self.currentMonth === m2 ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
      var numMonthDays = month.children.length;
      for (var i4 = startIndex; i4 >= 0 && i4 < numMonthDays && i4 != (delta > 0 ? numMonthDays : -1); i4 += loopDelta) {
        var c3 = month.children[i4];
        if (c3.className.indexOf("hidden") === -1 && isEnabled(c3.dateObj) && Math.abs(current.$i - i4) >= Math.abs(delta))
          return focusOnDayElem(c3);
      }
    }
    self.changeMonth(loopDelta);
    focusOnDay(getFirstAvailableDay(loopDelta), 0);
    return void 0;
  }
  function focusOnDay(current, offset) {
    var activeElement = getClosestActiveElement();
    var dayFocused = isInView(activeElement || document.body);
    var startElem = current !== void 0 ? current : dayFocused ? activeElement : self.selectedDateElem !== void 0 && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== void 0 && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
    if (startElem === void 0) {
      self._input.focus();
    } else if (!dayFocused) {
      focusOnDayElem(startElem);
    } else {
      getNextAvailableDay(startElem, offset);
    }
  }
  function buildMonthDays(year, month) {
    var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
    var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
    var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
    var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
    for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
    }
    for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
    }
    for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
    }
    var dayContainer = createElement("div", "dayContainer");
    dayContainer.appendChild(days);
    return dayContainer;
  }
  function buildDays() {
    if (self.daysContainer === void 0) {
      return;
    }
    clearNode(self.daysContainer);
    if (self.weekNumbers)
      clearNode(self.weekNumbers);
    var frag = document.createDocumentFragment();
    for (var i4 = 0; i4 < self.config.showMonths; i4++) {
      var d3 = new Date(self.currentYear, self.currentMonth, 1);
      d3.setMonth(self.currentMonth + i4);
      frag.appendChild(buildMonthDays(d3.getFullYear(), d3.getMonth()));
    }
    self.daysContainer.appendChild(frag);
    self.days = self.daysContainer.firstChild;
    if (self.config.mode === "range" && self.selectedDates.length === 1) {
      onMouseOver();
    }
  }
  function buildMonthSwitch() {
    if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown")
      return;
    var shouldBuildMonth = function(month2) {
      if (self.config.minDate !== void 0 && self.currentYear === self.config.minDate.getFullYear() && month2 < self.config.minDate.getMonth()) {
        return false;
      }
      return !(self.config.maxDate !== void 0 && self.currentYear === self.config.maxDate.getFullYear() && month2 > self.config.maxDate.getMonth());
    };
    self.monthsDropdownContainer.tabIndex = -1;
    self.monthsDropdownContainer.innerHTML = "";
    for (var i4 = 0; i4 < 12; i4++) {
      if (!shouldBuildMonth(i4))
        continue;
      var month = createElement("option", "flatpickr-monthDropdown-month");
      month.value = new Date(self.currentYear, i4).getMonth().toString();
      month.textContent = monthToStr(i4, self.config.shorthandCurrentMonth, self.l10n);
      month.tabIndex = -1;
      if (self.currentMonth === i4) {
        month.selected = true;
      }
      self.monthsDropdownContainer.appendChild(month);
    }
  }
  function buildMonth() {
    var container = createElement("div", "flatpickr-month");
    var monthNavFragment = window.document.createDocumentFragment();
    var monthElement;
    if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
      monthElement = createElement("span", "cur-month");
    } else {
      self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
      self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
      bind(self.monthsDropdownContainer, "change", function(e8) {
        var target = getEventTarget(e8);
        var selectedMonth = parseInt(target.value, 10);
        self.changeMonth(selectedMonth - self.currentMonth);
        triggerEvent("onMonthChange");
      });
      buildMonthSwitch();
      monthElement = self.monthsDropdownContainer;
    }
    var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
    var yearElement = yearInput.getElementsByTagName("input")[0];
    yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
    if (self.config.minDate) {
      yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
    }
    if (self.config.maxDate) {
      yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
      yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
    }
    var currentMonth = createElement("div", "flatpickr-current-month");
    currentMonth.appendChild(monthElement);
    currentMonth.appendChild(yearInput);
    monthNavFragment.appendChild(currentMonth);
    container.appendChild(monthNavFragment);
    return {
      container,
      yearElement,
      monthElement
    };
  }
  function buildMonths() {
    clearNode(self.monthNav);
    self.monthNav.appendChild(self.prevMonthNav);
    if (self.config.showMonths) {
      self.yearElements = [];
      self.monthElements = [];
    }
    for (var m2 = self.config.showMonths; m2--; ) {
      var month = buildMonth();
      self.yearElements.push(month.yearElement);
      self.monthElements.push(month.monthElement);
      self.monthNav.appendChild(month.container);
    }
    self.monthNav.appendChild(self.nextMonthNav);
  }
  function buildMonthNav() {
    self.monthNav = createElement("div", "flatpickr-months");
    self.yearElements = [];
    self.monthElements = [];
    self.prevMonthNav = createElement("span", "flatpickr-prev-month");
    self.prevMonthNav.innerHTML = self.config.prevArrow;
    self.nextMonthNav = createElement("span", "flatpickr-next-month");
    self.nextMonthNav.innerHTML = self.config.nextArrow;
    buildMonths();
    Object.defineProperty(self, "_hidePrevMonthArrow", {
      get: function() {
        return self.__hidePrevMonthArrow;
      },
      set: function(bool) {
        if (self.__hidePrevMonthArrow !== bool) {
          toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
          self.__hidePrevMonthArrow = bool;
        }
      }
    });
    Object.defineProperty(self, "_hideNextMonthArrow", {
      get: function() {
        return self.__hideNextMonthArrow;
      },
      set: function(bool) {
        if (self.__hideNextMonthArrow !== bool) {
          toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
          self.__hideNextMonthArrow = bool;
        }
      }
    });
    self.currentYearElement = self.yearElements[0];
    updateNavigationCurrentMonth();
    return self.monthNav;
  }
  function buildTime() {
    self.calendarContainer.classList.add("hasTime");
    if (self.config.noCalendar)
      self.calendarContainer.classList.add("noCalendar");
    var defaults2 = getDefaultHours(self.config);
    self.timeContainer = createElement("div", "flatpickr-time");
    self.timeContainer.tabIndex = -1;
    var separator = createElement("span", "flatpickr-time-separator", ":");
    var hourInput = createNumberInput("flatpickr-hour", {
      "aria-label": self.l10n.hourAriaLabel
    });
    self.hourElement = hourInput.getElementsByTagName("input")[0];
    var minuteInput = createNumberInput("flatpickr-minute", {
      "aria-label": self.l10n.minuteAriaLabel
    });
    self.minuteElement = minuteInput.getElementsByTagName("input")[0];
    self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
    self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults2.hours : military2ampm(defaults2.hours));
    self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults2.minutes);
    self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
    self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
    self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
    self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
    self.hourElement.setAttribute("maxlength", "2");
    self.minuteElement.setAttribute("min", "0");
    self.minuteElement.setAttribute("max", "59");
    self.minuteElement.setAttribute("maxlength", "2");
    self.timeContainer.appendChild(hourInput);
    self.timeContainer.appendChild(separator);
    self.timeContainer.appendChild(minuteInput);
    if (self.config.time_24hr)
      self.timeContainer.classList.add("time24hr");
    if (self.config.enableSeconds) {
      self.timeContainer.classList.add("hasSeconds");
      var secondInput = createNumberInput("flatpickr-second");
      self.secondElement = secondInput.getElementsByTagName("input")[0];
      self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults2.seconds);
      self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
      self.secondElement.setAttribute("min", "0");
      self.secondElement.setAttribute("max", "59");
      self.secondElement.setAttribute("maxlength", "2");
      self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
      self.timeContainer.appendChild(secondInput);
    }
    if (!self.config.time_24hr) {
      self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
      self.amPM.title = self.l10n.toggleTitle;
      self.amPM.tabIndex = -1;
      self.timeContainer.appendChild(self.amPM);
    }
    return self.timeContainer;
  }
  function buildWeekdays() {
    if (!self.weekdayContainer)
      self.weekdayContainer = createElement("div", "flatpickr-weekdays");
    else
      clearNode(self.weekdayContainer);
    for (var i4 = self.config.showMonths; i4--; ) {
      var container = createElement("div", "flatpickr-weekdaycontainer");
      self.weekdayContainer.appendChild(container);
    }
    updateWeekdays();
    return self.weekdayContainer;
  }
  function updateWeekdays() {
    if (!self.weekdayContainer) {
      return;
    }
    var firstDayOfWeek = self.l10n.firstDayOfWeek;
    var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
    if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
      weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
    }
    for (var i4 = self.config.showMonths; i4--; ) {
      self.weekdayContainer.children[i4].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
    }
  }
  function buildWeeks() {
    self.calendarContainer.classList.add("hasWeeks");
    var weekWrapper = createElement("div", "flatpickr-weekwrapper");
    weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
    var weekNumbers = createElement("div", "flatpickr-weeks");
    weekWrapper.appendChild(weekNumbers);
    return {
      weekWrapper,
      weekNumbers
    };
  }
  function changeMonth(value, isOffset) {
    if (isOffset === void 0) {
      isOffset = true;
    }
    var delta = isOffset ? value : value - self.currentMonth;
    if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true)
      return;
    self.currentMonth += delta;
    if (self.currentMonth < 0 || self.currentMonth > 11) {
      self.currentYear += self.currentMonth > 11 ? 1 : -1;
      self.currentMonth = (self.currentMonth + 12) % 12;
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    buildDays();
    triggerEvent("onMonthChange");
    updateNavigationCurrentMonth();
  }
  function clear(triggerChangeEvent, toInitial) {
    if (triggerChangeEvent === void 0) {
      triggerChangeEvent = true;
    }
    if (toInitial === void 0) {
      toInitial = true;
    }
    self.input.value = "";
    if (self.altInput !== void 0)
      self.altInput.value = "";
    if (self.mobileInput !== void 0)
      self.mobileInput.value = "";
    self.selectedDates = [];
    self.latestSelectedDateObj = void 0;
    if (toInitial === true) {
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
    }
    if (self.config.enableTime === true) {
      var _a = getDefaultHours(self.config), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
      setHours(hours, minutes, seconds);
    }
    self.redraw();
    if (triggerChangeEvent)
      triggerEvent("onChange");
  }
  function close() {
    self.isOpen = false;
    if (!self.isMobile) {
      if (self.calendarContainer !== void 0) {
        self.calendarContainer.classList.remove("open");
      }
      if (self._input !== void 0) {
        self._input.classList.remove("active");
      }
    }
    triggerEvent("onClose");
  }
  function destroy() {
    if (self.config !== void 0)
      triggerEvent("onDestroy");
    for (var i4 = self._handlers.length; i4--; ) {
      self._handlers[i4].remove();
    }
    self._handlers = [];
    if (self.mobileInput) {
      if (self.mobileInput.parentNode)
        self.mobileInput.parentNode.removeChild(self.mobileInput);
      self.mobileInput = void 0;
    } else if (self.calendarContainer && self.calendarContainer.parentNode) {
      if (self.config.static && self.calendarContainer.parentNode) {
        var wrapper = self.calendarContainer.parentNode;
        wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
        if (wrapper.parentNode) {
          while (wrapper.firstChild)
            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
          wrapper.parentNode.removeChild(wrapper);
        }
      } else
        self.calendarContainer.parentNode.removeChild(self.calendarContainer);
    }
    if (self.altInput) {
      self.input.type = "text";
      if (self.altInput.parentNode)
        self.altInput.parentNode.removeChild(self.altInput);
      delete self.altInput;
    }
    if (self.input) {
      self.input.type = self.input._type;
      self.input.classList.remove("flatpickr-input");
      self.input.removeAttribute("readonly");
    }
    [
      "_showTimeInput",
      "latestSelectedDateObj",
      "_hideNextMonthArrow",
      "_hidePrevMonthArrow",
      "__hideNextMonthArrow",
      "__hidePrevMonthArrow",
      "isMobile",
      "isOpen",
      "selectedDateElem",
      "minDateHasTime",
      "maxDateHasTime",
      "days",
      "daysContainer",
      "_input",
      "_positionElement",
      "innerContainer",
      "rContainer",
      "monthNav",
      "todayDateElem",
      "calendarContainer",
      "weekdayContainer",
      "prevMonthNav",
      "nextMonthNav",
      "monthsDropdownContainer",
      "currentMonthElement",
      "currentYearElement",
      "navigationCurrentMonth",
      "selectedDateElem",
      "config"
    ].forEach(function(k2) {
      try {
        delete self[k2];
      } catch (_2) {
      }
    });
  }
  function isCalendarElem(elem) {
    return self.calendarContainer.contains(elem);
  }
  function documentClick(e8) {
    if (self.isOpen && !self.config.inline) {
      var eventTarget_1 = getEventTarget(e8);
      var isCalendarElement = isCalendarElem(eventTarget_1);
      var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || e8.path && e8.path.indexOf && (~e8.path.indexOf(self.input) || ~e8.path.indexOf(self.altInput));
      var lostFocus = !isInput && !isCalendarElement && !isCalendarElem(e8.relatedTarget);
      var isIgnored = !self.config.ignoredFocusElements.some(function(elem) {
        return elem.contains(eventTarget_1);
      });
      if (lostFocus && isIgnored) {
        if (self.config.allowInput) {
          self.setDate(self._input.value, false, self.config.altInput ? self.config.altFormat : self.config.dateFormat);
        }
        if (self.timeContainer !== void 0 && self.minuteElement !== void 0 && self.hourElement !== void 0 && self.input.value !== "" && self.input.value !== void 0) {
          updateTime();
        }
        self.close();
        if (self.config && self.config.mode === "range" && self.selectedDates.length === 1)
          self.clear(false);
      }
    }
  }
  function changeYear(newYear) {
    if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear())
      return;
    var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
    self.currentYear = newYearNum || self.currentYear;
    if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
      self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
    } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
      self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
    }
    if (isNewYear) {
      self.redraw();
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
  }
  function isEnabled(date, timeless) {
    var _a;
    if (timeless === void 0) {
      timeless = true;
    }
    var dateToCheck = self.parseDate(date, void 0, timeless);
    if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== void 0 ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== void 0 ? timeless : !self.maxDateHasTime) > 0)
      return false;
    if (!self.config.enable && self.config.disable.length === 0)
      return true;
    if (dateToCheck === void 0)
      return false;
    var bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
    for (var i4 = 0, d3 = void 0; i4 < array.length; i4++) {
      d3 = array[i4];
      if (typeof d3 === "function" && d3(dateToCheck))
        return bool;
      else if (d3 instanceof Date && dateToCheck !== void 0 && d3.getTime() === dateToCheck.getTime())
        return bool;
      else if (typeof d3 === "string") {
        var parsed = self.parseDate(d3, void 0, true);
        return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
      } else if (typeof d3 === "object" && dateToCheck !== void 0 && d3.from && d3.to && dateToCheck.getTime() >= d3.from.getTime() && dateToCheck.getTime() <= d3.to.getTime())
        return bool;
    }
    return !bool;
  }
  function isInView(elem) {
    if (self.daysContainer !== void 0)
      return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
    return false;
  }
  function onBlur(e8) {
    var isInput = e8.target === self._input;
    var valueChanged = self._input.value.trimEnd() !== getDateStr();
    if (isInput && valueChanged && !(e8.relatedTarget && isCalendarElem(e8.relatedTarget))) {
      self.setDate(self._input.value, true, e8.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
    }
  }
  function onKeyDown(e8) {
    var eventTarget = getEventTarget(e8);
    var isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
    var allowInput = self.config.allowInput;
    var allowKeydown = self.isOpen && (!allowInput || !isInput);
    var allowInlineKeydown = self.config.inline && isInput && !allowInput;
    if (e8.keyCode === 13 && isInput) {
      if (allowInput) {
        self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
        self.close();
        return eventTarget.blur();
      } else {
        self.open();
      }
    } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
      var isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);
      switch (e8.keyCode) {
        case 13:
          if (isTimeObj) {
            e8.preventDefault();
            updateTime();
            focusAndClose();
          } else
            selectDate(e8);
          break;
        case 27:
          e8.preventDefault();
          focusAndClose();
          break;
        case 8:
        case 46:
          if (isInput && !self.config.allowInput) {
            e8.preventDefault();
            self.clear();
          }
          break;
        case 37:
        case 39:
          if (!isTimeObj && !isInput) {
            e8.preventDefault();
            var activeElement = getClosestActiveElement();
            if (self.daysContainer !== void 0 && (allowInput === false || activeElement && isInView(activeElement))) {
              var delta_1 = e8.keyCode === 39 ? 1 : -1;
              if (!e8.ctrlKey)
                focusOnDay(void 0, delta_1);
              else {
                e8.stopPropagation();
                changeMonth(delta_1);
                focusOnDay(getFirstAvailableDay(1), 0);
              }
            }
          } else if (self.hourElement)
            self.hourElement.focus();
          break;
        case 38:
        case 40:
          e8.preventDefault();
          var delta = e8.keyCode === 40 ? 1 : -1;
          if (self.daysContainer && eventTarget.$i !== void 0 || eventTarget === self.input || eventTarget === self.altInput) {
            if (e8.ctrlKey) {
              e8.stopPropagation();
              changeYear(self.currentYear - delta);
              focusOnDay(getFirstAvailableDay(1), 0);
            } else if (!isTimeObj)
              focusOnDay(void 0, delta * 7);
          } else if (eventTarget === self.currentYearElement) {
            changeYear(self.currentYear - delta);
          } else if (self.config.enableTime) {
            if (!isTimeObj && self.hourElement)
              self.hourElement.focus();
            updateTime(e8);
            self._debouncedChange();
          }
          break;
        case 9:
          if (isTimeObj) {
            var elems = [
              self.hourElement,
              self.minuteElement,
              self.secondElement,
              self.amPM
            ].concat(self.pluginElements).filter(function(x3) {
              return x3;
            });
            var i4 = elems.indexOf(eventTarget);
            if (i4 !== -1) {
              var target = elems[i4 + (e8.shiftKey ? -1 : 1)];
              e8.preventDefault();
              (target || self._input).focus();
            }
          } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e8.shiftKey) {
            e8.preventDefault();
            self._input.focus();
          }
          break;
        default:
          break;
      }
    }
    if (self.amPM !== void 0 && eventTarget === self.amPM) {
      switch (e8.key) {
        case self.l10n.amPM[0].charAt(0):
        case self.l10n.amPM[0].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[0];
          setHoursFromInputs();
          updateValue();
          break;
        case self.l10n.amPM[1].charAt(0):
        case self.l10n.amPM[1].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[1];
          setHoursFromInputs();
          updateValue();
          break;
      }
    }
    if (isInput || isCalendarElem(eventTarget)) {
      triggerEvent("onKeyDown", e8);
    }
  }
  function onMouseOver(elem, cellClass) {
    if (cellClass === void 0) {
      cellClass = "flatpickr-day";
    }
    if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains(cellClass) || elem.classList.contains("flatpickr-disabled")))
      return;
    var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], void 0, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
    var containsDisabled = false;
    var minRange = 0, maxRange = 0;
    for (var t3 = rangeStartDate; t3 < rangeEndDate; t3 += duration.DAY) {
      if (!isEnabled(new Date(t3), true)) {
        containsDisabled = containsDisabled || t3 > rangeStartDate && t3 < rangeEndDate;
        if (t3 < initialDate && (!minRange || t3 > minRange))
          minRange = t3;
        else if (t3 > initialDate && (!maxRange || t3 < maxRange))
          maxRange = t3;
      }
    }
    var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
    hoverableCells.forEach(function(dayElem) {
      var date = dayElem.dateObj;
      var timestamp = date.getTime();
      var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
      if (outOfRange) {
        dayElem.classList.add("notAllowed");
        ["inRange", "startRange", "endRange"].forEach(function(c3) {
          dayElem.classList.remove(c3);
        });
        return;
      } else if (containsDisabled && !outOfRange)
        return;
      ["startRange", "inRange", "endRange", "notAllowed"].forEach(function(c3) {
        dayElem.classList.remove(c3);
      });
      if (elem !== void 0) {
        elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
        if (initialDate < hoverDate && timestamp === initialDate)
          dayElem.classList.add("startRange");
        else if (initialDate > hoverDate && timestamp === initialDate)
          dayElem.classList.add("endRange");
        if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate))
          dayElem.classList.add("inRange");
      }
    });
  }
  function onResize() {
    if (self.isOpen && !self.config.static && !self.config.inline)
      positionCalendar();
  }
  function open(e8, positionElement) {
    if (positionElement === void 0) {
      positionElement = self._positionElement;
    }
    if (self.isMobile === true) {
      if (e8) {
        e8.preventDefault();
        var eventTarget = getEventTarget(e8);
        if (eventTarget) {
          eventTarget.blur();
        }
      }
      if (self.mobileInput !== void 0) {
        self.mobileInput.focus();
        self.mobileInput.click();
      }
      triggerEvent("onOpen");
      return;
    } else if (self._input.disabled || self.config.inline) {
      return;
    }
    var wasOpen = self.isOpen;
    self.isOpen = true;
    if (!wasOpen) {
      self.calendarContainer.classList.add("open");
      self._input.classList.add("active");
      triggerEvent("onOpen");
      positionCalendar(positionElement);
    }
    if (self.config.enableTime === true && self.config.noCalendar === true) {
      if (self.config.allowInput === false && (e8 === void 0 || !self.timeContainer.contains(e8.relatedTarget))) {
        setTimeout(function() {
          return self.hourElement.select();
        }, 50);
      }
    }
  }
  function minMaxDateSetter(type) {
    return function(date) {
      var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
      var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
      if (dateObj !== void 0) {
        self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
      }
      if (self.selectedDates) {
        self.selectedDates = self.selectedDates.filter(function(d3) {
          return isEnabled(d3);
        });
        if (!self.selectedDates.length && type === "min")
          setHoursFromDate(dateObj);
        updateValue();
      }
      if (self.daysContainer) {
        redraw();
        if (dateObj !== void 0)
          self.currentYearElement[type] = dateObj.getFullYear().toString();
        else
          self.currentYearElement.removeAttribute(type);
        self.currentYearElement.disabled = !!inverseDateObj && dateObj !== void 0 && inverseDateObj.getFullYear() === dateObj.getFullYear();
      }
    };
  }
  function parseConfig() {
    var boolOpts = [
      "wrap",
      "weekNumbers",
      "allowInput",
      "allowInvalidPreload",
      "clickOpens",
      "time_24hr",
      "enableTime",
      "noCalendar",
      "altInput",
      "shorthandCurrentMonth",
      "inline",
      "static",
      "enableSeconds",
      "disableMobile"
    ];
    var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
    var formats2 = {};
    self.config.parseDate = userConfig.parseDate;
    self.config.formatDate = userConfig.formatDate;
    Object.defineProperty(self.config, "enable", {
      get: function() {
        return self.config._enable;
      },
      set: function(dates) {
        self.config._enable = parseDateRules(dates);
      }
    });
    Object.defineProperty(self.config, "disable", {
      get: function() {
        return self.config._disable;
      },
      set: function(dates) {
        self.config._disable = parseDateRules(dates);
      }
    });
    var timeMode = userConfig.mode === "time";
    if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
      var defaultDateFormat = flatpickr2.defaultConfig.dateFormat || defaults.dateFormat;
      formats2.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
    }
    if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
      var defaultAltFormat = flatpickr2.defaultConfig.altFormat || defaults.altFormat;
      formats2.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
    }
    Object.defineProperty(self.config, "minDate", {
      get: function() {
        return self.config._minDate;
      },
      set: minMaxDateSetter("min")
    });
    Object.defineProperty(self.config, "maxDate", {
      get: function() {
        return self.config._maxDate;
      },
      set: minMaxDateSetter("max")
    });
    var minMaxTimeSetter = function(type) {
      return function(val) {
        self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
      };
    };
    Object.defineProperty(self.config, "minTime", {
      get: function() {
        return self.config._minTime;
      },
      set: minMaxTimeSetter("min")
    });
    Object.defineProperty(self.config, "maxTime", {
      get: function() {
        return self.config._maxTime;
      },
      set: minMaxTimeSetter("max")
    });
    if (userConfig.mode === "time") {
      self.config.noCalendar = true;
      self.config.enableTime = true;
    }
    Object.assign(self.config, formats2, userConfig);
    for (var i4 = 0; i4 < boolOpts.length; i4++)
      self.config[boolOpts[i4]] = self.config[boolOpts[i4]] === true || self.config[boolOpts[i4]] === "true";
    HOOKS.filter(function(hook) {
      return self.config[hook] !== void 0;
    }).forEach(function(hook) {
      self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
    });
    self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    for (var i4 = 0; i4 < self.config.plugins.length; i4++) {
      var pluginConf = self.config.plugins[i4](self) || {};
      for (var key in pluginConf) {
        if (HOOKS.indexOf(key) > -1) {
          self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
        } else if (typeof userConfig[key] === "undefined")
          self.config[key] = pluginConf[key];
      }
    }
    if (!userConfig.altInputClass) {
      self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
    }
    triggerEvent("onParseConfig");
  }
  function getInputElem() {
    return self.config.wrap ? element.querySelector("[data-input]") : element;
  }
  function setupLocale() {
    if (typeof self.config.locale !== "object" && typeof flatpickr2.l10ns[self.config.locale] === "undefined")
      self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
    self.l10n = __assign(__assign({}, flatpickr2.l10ns.default), typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr2.l10ns[self.config.locale] : void 0);
    tokenRegex.D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
    tokenRegex.l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
    tokenRegex.M = "(" + self.l10n.months.shorthand.join("|") + ")";
    tokenRegex.F = "(" + self.l10n.months.longhand.join("|") + ")";
    tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
    var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
    if (userConfig.time_24hr === void 0 && flatpickr2.defaultConfig.time_24hr === void 0) {
      self.config.time_24hr = self.l10n.time_24hr;
    }
    self.formatDate = createDateFormatter(self);
    self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
  }
  function positionCalendar(customPositionElement) {
    if (typeof self.config.position === "function") {
      return void self.config.position(self, customPositionElement);
    }
    if (self.calendarContainer === void 0)
      return;
    triggerEvent("onPreCalendarPosition");
    var positionElement = customPositionElement || self._positionElement;
    var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function(acc, child) {
      return acc + child.offsetHeight;
    }, 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
    var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
    toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
    toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
    if (self.config.inline)
      return;
    var left = window.pageXOffset + inputBounds.left;
    var isCenter = false;
    var isRight = false;
    if (configPosHorizontal === "center") {
      left -= (calendarWidth - inputBounds.width) / 2;
      isCenter = true;
    } else if (configPosHorizontal === "right") {
      left -= calendarWidth - inputBounds.width;
      isRight = true;
    }
    toggleClass(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
    toggleClass(self.calendarContainer, "arrowCenter", isCenter);
    toggleClass(self.calendarContainer, "arrowRight", isRight);
    var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
    var rightMost = left + calendarWidth > window.document.body.offsetWidth;
    var centerMost = right + calendarWidth > window.document.body.offsetWidth;
    toggleClass(self.calendarContainer, "rightMost", rightMost);
    if (self.config.static)
      return;
    self.calendarContainer.style.top = top + "px";
    if (!rightMost) {
      self.calendarContainer.style.left = left + "px";
      self.calendarContainer.style.right = "auto";
    } else if (!centerMost) {
      self.calendarContainer.style.left = "auto";
      self.calendarContainer.style.right = right + "px";
    } else {
      var doc = getDocumentStyleSheet();
      if (doc === void 0)
        return;
      var bodyWidth = window.document.body.offsetWidth;
      var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
      var centerBefore = ".flatpickr-calendar.centerMost:before";
      var centerAfter = ".flatpickr-calendar.centerMost:after";
      var centerIndex = doc.cssRules.length;
      var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
      toggleClass(self.calendarContainer, "rightMost", false);
      toggleClass(self.calendarContainer, "centerMost", true);
      doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
      self.calendarContainer.style.left = centerLeft + "px";
      self.calendarContainer.style.right = "auto";
    }
  }
  function getDocumentStyleSheet() {
    var editableSheet = null;
    for (var i4 = 0; i4 < document.styleSheets.length; i4++) {
      var sheet = document.styleSheets[i4];
      if (!sheet.cssRules)
        continue;
      try {
        sheet.cssRules;
      } catch (err) {
        continue;
      }
      editableSheet = sheet;
      break;
    }
    return editableSheet != null ? editableSheet : createStyleSheet();
  }
  function createStyleSheet() {
    var style = document.createElement("style");
    document.head.appendChild(style);
    return style.sheet;
  }
  function redraw() {
    if (self.config.noCalendar || self.isMobile)
      return;
    buildMonthSwitch();
    updateNavigationCurrentMonth();
    buildDays();
  }
  function focusAndClose() {
    self._input.focus();
    if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0) {
      setTimeout(self.close, 0);
    } else {
      self.close();
    }
  }
  function selectDate(e8) {
    e8.preventDefault();
    e8.stopPropagation();
    var isSelectable = function(day) {
      return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
    };
    var t3 = findParent(getEventTarget(e8), isSelectable);
    if (t3 === void 0)
      return;
    var target = t3;
    var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
    var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
    self.selectedDateElem = target;
    if (self.config.mode === "single")
      self.selectedDates = [selectedDate];
    else if (self.config.mode === "multiple") {
      var selectedIndex = isDateSelected(selectedDate);
      if (selectedIndex)
        self.selectedDates.splice(parseInt(selectedIndex), 1);
      else
        self.selectedDates.push(selectedDate);
    } else if (self.config.mode === "range") {
      if (self.selectedDates.length === 2) {
        self.clear(false, false);
      }
      self.latestSelectedDateObj = selectedDate;
      self.selectedDates.push(selectedDate);
      if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
        self.selectedDates.sort(function(a3, b2) {
          return a3.getTime() - b2.getTime();
        });
    }
    setHoursFromInputs();
    if (shouldChangeMonth) {
      var isNewYear = self.currentYear !== selectedDate.getFullYear();
      self.currentYear = selectedDate.getFullYear();
      self.currentMonth = selectedDate.getMonth();
      if (isNewYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
      triggerEvent("onMonthChange");
    }
    updateNavigationCurrentMonth();
    buildDays();
    updateValue();
    if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1)
      focusOnDayElem(target);
    else if (self.selectedDateElem !== void 0 && self.hourElement === void 0) {
      self.selectedDateElem && self.selectedDateElem.focus();
    }
    if (self.hourElement !== void 0)
      self.hourElement !== void 0 && self.hourElement.focus();
    if (self.config.closeOnSelect) {
      var single = self.config.mode === "single" && !self.config.enableTime;
      var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;
      if (single || range) {
        focusAndClose();
      }
    }
    triggerChange();
  }
  var CALLBACKS = {
    locale: [setupLocale, updateWeekdays],
    showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
    minDate: [jumpToDate],
    maxDate: [jumpToDate],
    positionElement: [updatePositionElement],
    clickOpens: [
      function() {
        if (self.config.clickOpens === true) {
          bind(self._input, "focus", self.open);
          bind(self._input, "click", self.open);
        } else {
          self._input.removeEventListener("focus", self.open);
          self._input.removeEventListener("click", self.open);
        }
      }
    ]
  };
  function set(option, value) {
    if (option !== null && typeof option === "object") {
      Object.assign(self.config, option);
      for (var key in option) {
        if (CALLBACKS[key] !== void 0)
          CALLBACKS[key].forEach(function(x3) {
            return x3();
          });
      }
    } else {
      self.config[option] = value;
      if (CALLBACKS[option] !== void 0)
        CALLBACKS[option].forEach(function(x3) {
          return x3();
        });
      else if (HOOKS.indexOf(option) > -1)
        self.config[option] = arrayify(value);
    }
    self.redraw();
    updateValue(true);
  }
  function setSelectedDate(inputDate, format) {
    var dates = [];
    if (inputDate instanceof Array)
      dates = inputDate.map(function(d3) {
        return self.parseDate(d3, format);
      });
    else if (inputDate instanceof Date || typeof inputDate === "number")
      dates = [self.parseDate(inputDate, format)];
    else if (typeof inputDate === "string") {
      switch (self.config.mode) {
        case "single":
        case "time":
          dates = [self.parseDate(inputDate, format)];
          break;
        case "multiple":
          dates = inputDate.split(self.config.conjunction).map(function(date) {
            return self.parseDate(date, format);
          });
          break;
        case "range":
          dates = inputDate.split(self.l10n.rangeSeparator).map(function(date) {
            return self.parseDate(date, format);
          });
          break;
        default:
          break;
      }
    } else
      self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
    self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter(function(d3) {
      return d3 instanceof Date && isEnabled(d3, false);
    });
    if (self.config.mode === "range")
      self.selectedDates.sort(function(a3, b2) {
        return a3.getTime() - b2.getTime();
      });
  }
  function setDate(date, triggerChange2, format) {
    if (triggerChange2 === void 0) {
      triggerChange2 = false;
    }
    if (format === void 0) {
      format = self.config.dateFormat;
    }
    if (date !== 0 && !date || date instanceof Array && date.length === 0)
      return self.clear(triggerChange2);
    setSelectedDate(date, format);
    self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
    self.redraw();
    jumpToDate(void 0, triggerChange2);
    setHoursFromDate();
    if (self.selectedDates.length === 0) {
      self.clear(false);
    }
    updateValue(triggerChange2);
    if (triggerChange2)
      triggerEvent("onChange");
  }
  function parseDateRules(arr) {
    return arr.slice().map(function(rule) {
      if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
        return self.parseDate(rule, void 0, true);
      } else if (rule && typeof rule === "object" && rule.from && rule.to)
        return {
          from: self.parseDate(rule.from, void 0),
          to: self.parseDate(rule.to, void 0)
        };
      return rule;
    }).filter(function(x3) {
      return x3;
    });
  }
  function setupDates() {
    self.selectedDates = [];
    self.now = self.parseDate(self.config.now) || /* @__PURE__ */ new Date();
    var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
    if (preloadedDate)
      setSelectedDate(preloadedDate, self.config.dateFormat);
    self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
    self.currentYear = self._initialDate.getFullYear();
    self.currentMonth = self._initialDate.getMonth();
    if (self.selectedDates.length > 0)
      self.latestSelectedDateObj = self.selectedDates[0];
    if (self.config.minTime !== void 0)
      self.config.minTime = self.parseDate(self.config.minTime, "H:i");
    if (self.config.maxTime !== void 0)
      self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
    self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
    self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
  }
  function setupInputs() {
    self.input = getInputElem();
    if (!self.input) {
      self.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }
    self.input._type = self.input.type;
    self.input.type = "text";
    self.input.classList.add("flatpickr-input");
    self._input = self.input;
    if (self.config.altInput) {
      self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
      self._input = self.altInput;
      self.altInput.placeholder = self.input.placeholder;
      self.altInput.disabled = self.input.disabled;
      self.altInput.required = self.input.required;
      self.altInput.tabIndex = self.input.tabIndex;
      self.altInput.type = "text";
      self.input.setAttribute("type", "hidden");
      if (!self.config.static && self.input.parentNode)
        self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
    }
    if (!self.config.allowInput)
      self._input.setAttribute("readonly", "readonly");
    updatePositionElement();
  }
  function updatePositionElement() {
    self._positionElement = self.config.positionElement || self._input;
  }
  function setupMobile() {
    var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
    self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
    self.mobileInput.tabIndex = 1;
    self.mobileInput.type = inputType;
    self.mobileInput.disabled = self.input.disabled;
    self.mobileInput.required = self.input.required;
    self.mobileInput.placeholder = self.input.placeholder;
    self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
    if (self.selectedDates.length > 0) {
      self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
    }
    if (self.config.minDate)
      self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
    if (self.config.maxDate)
      self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
    if (self.input.getAttribute("step"))
      self.mobileInput.step = String(self.input.getAttribute("step"));
    self.input.type = "hidden";
    if (self.altInput !== void 0)
      self.altInput.type = "hidden";
    try {
      if (self.input.parentNode)
        self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
    } catch (_a) {
    }
    bind(self.mobileInput, "change", function(e8) {
      self.setDate(getEventTarget(e8).value, false, self.mobileFormatStr);
      triggerEvent("onChange");
      triggerEvent("onClose");
    });
  }
  function toggle(e8) {
    if (self.isOpen === true)
      return self.close();
    self.open(e8);
  }
  function triggerEvent(event, data) {
    if (self.config === void 0)
      return;
    var hooks = self.config[event];
    if (hooks !== void 0 && hooks.length > 0) {
      for (var i4 = 0; hooks[i4] && i4 < hooks.length; i4++)
        hooks[i4](self.selectedDates, self.input.value, self, data);
    }
    if (event === "onChange") {
      self.input.dispatchEvent(createEvent("change"));
      self.input.dispatchEvent(createEvent("input"));
    }
  }
  function createEvent(name) {
    var e8 = document.createEvent("Event");
    e8.initEvent(name, true, true);
    return e8;
  }
  function isDateSelected(date) {
    for (var i4 = 0; i4 < self.selectedDates.length; i4++) {
      var selectedDate = self.selectedDates[i4];
      if (selectedDate instanceof Date && compareDates(selectedDate, date) === 0)
        return "" + i4;
    }
    return false;
  }
  function isDateInRange(date) {
    if (self.config.mode !== "range" || self.selectedDates.length < 2)
      return false;
    return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
  }
  function updateNavigationCurrentMonth() {
    if (self.config.noCalendar || self.isMobile || !self.monthNav)
      return;
    self.yearElements.forEach(function(yearElement, i4) {
      var d3 = new Date(self.currentYear, self.currentMonth, 1);
      d3.setMonth(self.currentMonth + i4);
      if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
        self.monthElements[i4].textContent = monthToStr(d3.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
      } else {
        self.monthsDropdownContainer.value = d3.getMonth().toString();
      }
      yearElement.value = d3.getFullYear().toString();
    });
    self._hidePrevMonthArrow = self.config.minDate !== void 0 && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
    self._hideNextMonthArrow = self.config.maxDate !== void 0 && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
  }
  function getDateStr(specificFormat) {
    var format = specificFormat || (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
    return self.selectedDates.map(function(dObj) {
      return self.formatDate(dObj, format);
    }).filter(function(d3, i4, arr) {
      return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d3) === i4;
    }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
  }
  function updateValue(triggerChange2) {
    if (triggerChange2 === void 0) {
      triggerChange2 = true;
    }
    if (self.mobileInput !== void 0 && self.mobileFormatStr) {
      self.mobileInput.value = self.latestSelectedDateObj !== void 0 ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
    }
    self.input.value = getDateStr(self.config.dateFormat);
    if (self.altInput !== void 0) {
      self.altInput.value = getDateStr(self.config.altFormat);
    }
    if (triggerChange2 !== false)
      triggerEvent("onValueUpdate");
  }
  function onMonthNavClick(e8) {
    var eventTarget = getEventTarget(e8);
    var isPrevMonth = self.prevMonthNav.contains(eventTarget);
    var isNextMonth = self.nextMonthNav.contains(eventTarget);
    if (isPrevMonth || isNextMonth) {
      changeMonth(isPrevMonth ? -1 : 1);
    } else if (self.yearElements.indexOf(eventTarget) >= 0) {
      eventTarget.select();
    } else if (eventTarget.classList.contains("arrowUp")) {
      self.changeYear(self.currentYear + 1);
    } else if (eventTarget.classList.contains("arrowDown")) {
      self.changeYear(self.currentYear - 1);
    }
  }
  function timeWrapper(e8) {
    e8.preventDefault();
    var isKeyDown = e8.type === "keydown", eventTarget = getEventTarget(e8), input = eventTarget;
    if (self.amPM !== void 0 && eventTarget === self.amPM) {
      self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
    }
    var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e8.delta || (isKeyDown ? e8.which === 38 ? 1 : -1 : 0);
    var newValue = curValue + step * delta;
    if (typeof input.value !== "undefined" && input.value.length === 2) {
      var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
      if (newValue < min) {
        newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self.amPM));
        if (isMinuteElem)
          incrementNumInput(void 0, -1, self.hourElement);
      } else if (newValue > max) {
        newValue = input === self.hourElement ? newValue - max - int(!self.amPM) : min;
        if (isMinuteElem)
          incrementNumInput(void 0, 1, self.hourElement);
      }
      if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
        self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
      }
      input.value = pad(newValue);
    }
  }
  init();
  return self;
}
function _flatpickr(nodeList, config) {
  var nodes = Array.prototype.slice.call(nodeList).filter(function(x3) {
    return x3 instanceof HTMLElement;
  });
  var instances = [];
  for (var i4 = 0; i4 < nodes.length; i4++) {
    var node = nodes[i4];
    try {
      if (node.getAttribute("data-fp-omit") !== null)
        continue;
      if (node._flatpickr !== void 0) {
        node._flatpickr.destroy();
        node._flatpickr = void 0;
      }
      node._flatpickr = FlatpickrInstance(node, config || {});
      instances.push(node._flatpickr);
    } catch (e8) {
      console.error(e8);
    }
  }
  return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
  HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(config) {
    return _flatpickr(this, config);
  };
  HTMLElement.prototype.flatpickr = function(config) {
    return _flatpickr([this], config);
  };
}
var flatpickr2 = function(selector, config) {
  if (typeof selector === "string") {
    return _flatpickr(window.document.querySelectorAll(selector), config);
  } else if (selector instanceof Node) {
    return _flatpickr([selector], config);
  } else {
    return _flatpickr(selector, config);
  }
};
flatpickr2.defaultConfig = {};
flatpickr2.l10ns = {
  en: __assign({}, default_default),
  default: __assign({}, default_default)
};
flatpickr2.localize = function(l10n) {
  flatpickr2.l10ns.default = __assign(__assign({}, flatpickr2.l10ns.default), l10n);
};
flatpickr2.setDefaults = function(config) {
  flatpickr2.defaultConfig = __assign(__assign({}, flatpickr2.defaultConfig), config);
};
flatpickr2.parseDate = createDateParser({});
flatpickr2.formatDate = createDateFormatter({});
flatpickr2.compareDates = compareDates;
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
  jQuery.fn.flatpickr = function(config) {
    return _flatpickr(this, config);
  };
}
Date.prototype.fp_incr = function(days) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
  window.flatpickr = flatpickr2;
}

// node_modules/lit-flatpickr/dist/src/StyleLoader.js
init_dirname();
init_buffer();
init_process();

// node_modules/lit-flatpickr/dist/src/styles/Themes.js
init_dirname();
init_buffer();
init_process();

// node_modules/lit-flatpickr/dist/src/CdnManager.js
init_dirname();
init_buffer();
init_process();
var FLATPICKR_VERSION = window._FLATPICKR_VERSION || "4.6.13";
var CDN_BASE = `https://unpkg.com/flatpickr@${FLATPICKR_VERSION}/dist/`;
function getCDNBase() {
  return CDN_BASE;
}

// node_modules/lit-flatpickr/dist/src/styles/Themes.js
var FlatpickrTheme;
(function(FlatpickrTheme2) {
  FlatpickrTheme2["light"] = "light";
  FlatpickrTheme2["dark"] = "dark";
  FlatpickrTheme2["materialBlue"] = "material_blue";
  FlatpickrTheme2["materialGreen"] = "material_green";
  FlatpickrTheme2["materialOrange"] = "material_orange";
  FlatpickrTheme2["materialRed"] = "material_red";
  FlatpickrTheme2["airbnb"] = "airbnb";
  FlatpickrTheme2["confetti"] = "confetti";
  FlatpickrTheme2["none"] = "none";
})(FlatpickrTheme || (FlatpickrTheme = {}));
function getStyleRepository(theme) {
  return `${getCDNBase()}themes/${theme}.css`;
}

// node_modules/lit-flatpickr/dist/src/StyleLoader.js
var StyleLoader = class {
  constructor(theme) {
    this.theme = theme;
    this.theme = theme;
  }
  async initStyles() {
    const themeUrl = getStyleRepository(this.theme);
    const themeIsLoaded = this.isThemeLoaded();
    if (!themeIsLoaded) {
      this.appendThemeStyles(themeUrl);
      await this.waitForStyleToLoad(() => this.isThemeLoaded());
    }
  }
  /**
   * We want to prevent the styles from flickering, so we halt the
   * initialization process until the styles have been loaded
   * */
  waitForStyleToLoad(checkFunction) {
    return new Promise((resolve, reject) => {
      const checkIfStylesHaveLoaded = (iteration = 0) => {
        if (checkFunction())
          return resolve();
        if (iteration > 10) {
          throw Error("Styles took too long to load, or were not able to be loaded");
          reject();
        }
        setTimeout(() => checkIfStylesHaveLoaded(iteration++), 100);
      };
      checkIfStylesHaveLoaded();
    });
  }
  isThemeLoaded() {
    if (this.theme === FlatpickrTheme.none)
      return true;
    const styleSheetSources = Array.from(document.styleSheets).map((ss) => ss.href);
    return styleSheetSources.some((sss) => sss != null && new RegExp(getCDNBase() + "themes").test(sss));
  }
  appendThemeStyles(themeUrl) {
    const styleElem = document.createElement("link");
    styleElem.rel = "stylesheet";
    styleElem.type = "text/css";
    styleElem.href = themeUrl;
    document.head.append(styleElem);
  }
};

// node_modules/lit-flatpickr/dist/src/LocaleLoader.js
init_dirname();
init_buffer();
init_process();
async function loadLocale(locale) {
  const themeUrl = getCDNBase() + "l10n/" + locale + ".js";
  const themeData = await import(themeUrl);
}

// node_modules/lit-flatpickr/dist/src/plugins/PluginLoader.js
init_dirname();
init_buffer();
init_process();
async function loadPlugins(instance, options) {
  if (instance.weekSelect) {
    const weekSelectPluginImport = await import(getCDNBase() + "esm/plugins/weekSelect/weekSelect.js");
    const weekSelectPlugin = weekSelectPluginImport.default;
    options = __spreadProps(__spreadValues({}, options), {
      plugins: [...options.plugins, weekSelectPlugin()],
      onChange: function() {
        const weekNumber = this.selectedDates[0] ? this.config.getWeek(this.selectedDates[0]) : null;
        this.input.value = weekNumber;
      }
    });
  }
  if (instance.monthSelect) {
    const monthSelectPluginImport = await import(getCDNBase() + "esm/plugins/monthSelect/index.js");
    const monthSelectPlugin = monthSelectPluginImport.default;
    options = __spreadProps(__spreadValues({}, options), {
      plugins: [
        ...options.plugins,
        monthSelectPlugin({
          shorthand: false,
          dateFormat: instance.dateFormat,
          altFormat: instance.altFormat
        })
      ]
    });
    const styles = document.createElement("link");
    styles.rel = "stylesheet";
    styles.href = getCDNBase() + "plugins/monthSelect/style.css";
    document.head.appendChild(styles);
  }
  return options;
}

// node_modules/lit-flatpickr/dist/src/LitFlatpickr.js
var LitFlatpickr = class LitFlatpickr2 extends s4 {
  constructor() {
    super(...arguments);
    this.placeholder = "";
    this.altFormat = "F j, Y";
    this.altInput = false;
    this.altInputClass = "";
    this.allowInput = false;
    this.ariaDateFormat = "F j, Y";
    this.clickOpens = true;
    this.dateFormat = "Y-m-d";
    this.defaultHour = 12;
    this.defaultMinute = 0;
    this.disable = [];
    this.disableMobile = false;
    this.enable = void 0;
    this.enableTime = false;
    this.enableSeconds = false;
    this.hourIncrement = 1;
    this.minuteIncrement = 5;
    this.inline = false;
    this.mode = "single";
    this.nextArrow = ">";
    this.prevArrow = "<";
    this.noCalendar = false;
    this.position = "auto";
    this.shorthandCurrentMonth = false;
    this.showMonths = 1;
    this.static = false;
    this.time_24hr = false;
    this.weekNumbers = false;
    this.wrap = false;
    this.theme = "light";
    this.firstDayOfWeek = 1;
    this.defaultToToday = false;
    this.weekSelect = false;
    this.monthSelect = false;
    this.confirmDate = false;
    this._hasSlottedElement = false;
  }
  static get styles() {
    return [
      i`
        :host {
          width: fit-content;
          display: block;
          cursor: pointer;
          background: #fff;
          color: #000;
          overflow: hidden;
        }

        ::slotted(*) {
          cursor: pointer;
        }

        input {
          width: 100%;
          height: 100%;
          font-size: inherit;
          cursor: pointer;
          background: inherit;
          box-sizing: border-box;
          outline: none;
          color: inherit;
          border: none;
        }
      `
    ];
  }
  firstUpdated() {
    this._hasSlottedElement = this.checkForSlottedElement();
  }
  updated() {
    this.init();
  }
  getToday() {
    const today = /* @__PURE__ */ new Date();
    const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    return dateString;
  }
  checkForSlottedElement() {
    var _a;
    const slottedElem = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot");
    const assignedNodes = slottedElem ? slottedElem.assignedNodes().filter(this.removeTextNodes) : [];
    return slottedElem != null && assignedNodes && assignedNodes.length > 0;
  }
  getSlottedElement() {
    var _a;
    if (!this._hasSlottedElement) {
      return void 0;
    }
    const slottedElem = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot");
    const slottedElemNodes = slottedElem === null || slottedElem === void 0 ? void 0 : slottedElem.assignedNodes().filter(this.removeTextNodes);
    if (!slottedElemNodes || slottedElemNodes.length < 1) {
      return void 0;
    }
    return slottedElemNodes[0];
  }
  removeTextNodes(node) {
    return node.nodeName !== "#text";
  }
  async init() {
    const styleLoader = new StyleLoader(this.theme);
    await styleLoader.initStyles();
    if (this.locale) {
      await loadLocale(this.locale);
    }
    await this.initializeComponent();
  }
  async getOptions() {
    let options = {
      altFormat: this.altFormat,
      altInput: this.altInput,
      altInputClass: this.altInputClass,
      allowInput: this.allowInput,
      ariaDateFormat: this.ariaDateFormat,
      clickOpens: this.clickOpens,
      dateFormat: this.dateFormat,
      defaultDate: this.defaultToToday ? this.getToday() : this.defaultDate,
      defaultHour: this.defaultHour,
      defaultMinute: this.defaultMinute,
      disable: this.disable,
      disableMobile: this.disableMobile,
      enable: this.enable,
      enableTime: this.enableTime,
      enableSeconds: this.enableSeconds,
      formatDate: this.formatDateFn,
      hourIncrement: this.hourIncrement,
      inline: this.inline,
      maxDate: this.maxDate,
      minDate: this.minDate,
      minuteIncrement: this.minuteIncrement,
      mode: this.mode,
      nextArrow: this.nextArrow,
      prevArrow: this.prevArrow,
      noCalendar: this.noCalendar,
      onChange: this.onChange,
      onClose: this.onClose,
      onOpen: this.onOpen,
      onReady: this.onReady,
      onMonthChange: this.onMonthChange,
      onYearChange: this.onYearChange,
      onValueUpdate: this.onValueUpdate,
      parseDate: this.parseDateFn,
      position: this.position,
      shorthandCurrentMonth: this.shorthandCurrentMonth,
      showMonths: this.showMonths,
      static: this.static,
      // eslint-disable-next-line @typescript-eslint/camelcase
      time_24hr: this.time_24hr,
      weekNumbers: this.weekNumbers,
      wrap: this.wrap,
      locale: this.locale,
      plugins: []
    };
    options = await loadPlugins(this, options);
    Object.keys(options).forEach((key) => {
      if (options[key] === void 0)
        delete options[key];
    });
    return options;
  }
  async initializeComponent() {
    var _a;
    if (this._instance) {
      if (Object.prototype.hasOwnProperty.call(this, "destroy")) {
        this._instance.destroy();
      }
    }
    let inputElement;
    if (this._hasSlottedElement) {
      inputElement = this.findInputField();
    } else {
      inputElement = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("input");
    }
    if (inputElement) {
      this._inputElement = inputElement;
      flatpickr.l10ns.default.firstDayOfWeek = this.firstDayOfWeek;
      const options = await this.getOptions();
      this._instance = flatpickr(inputElement, options);
    }
  }
  findInputField() {
    let inputElement = null;
    inputElement = this.querySelector("input");
    if (inputElement) {
      return inputElement;
    }
    const slottedElement = this.getSlottedElement();
    if (typeof slottedElement !== void 0) {
      inputElement = this.searchWebComponentForInputElement(slottedElement);
    }
    return inputElement ? inputElement : null;
  }
  /**
   * Traverse the shadow dom tree and search for input from it
   * and it's children
   * */
  searchWebComponentForInputElement(element) {
    let inputElement = this.getInputFieldInElement(element);
    if (inputElement)
      return inputElement;
    const webComponentsInChildren = this.getWebComponentsInsideElement(element);
    for (let i4 = 0; i4 < webComponentsInChildren.length; i4++) {
      inputElement = this.searchWebComponentForInputElement(webComponentsInChildren[i4]);
      if (inputElement) {
        break;
      }
    }
    return inputElement;
  }
  /**
   * Check if said element's dom tree contains a input element
   * */
  getInputFieldInElement(element) {
    let inputElement = null;
    if (element.shadowRoot) {
      inputElement = element.shadowRoot.querySelector("input");
    } else {
      inputElement = element.querySelector("input");
    }
    return inputElement;
  }
  getWebComponentsInsideElement(element) {
    if (element.shadowRoot) {
      return [
        ...Array.from(element.querySelectorAll("*")),
        ...Array.from(element.shadowRoot.querySelectorAll("*"))
      ].filter((elem) => elem.shadowRoot);
    } else {
      return Array.from(element.querySelectorAll("*")).filter((elem) => elem.shadowRoot);
    }
  }
  changeMonth(monthNum, isOffset = true) {
    if (!this._instance)
      return;
    this._instance.changeMonth(monthNum, isOffset);
  }
  clear() {
    if (!this._instance)
      return;
    this._instance.clear();
  }
  close() {
    if (!this._instance)
      return;
    this._instance.close();
  }
  destroy() {
    if (!this._instance)
      return;
    this._instance.destroy();
  }
  formatDate(dateObj, formatStr) {
    if (!this._instance)
      return "";
    return this._instance.formatDate(dateObj, formatStr);
  }
  jumpToDate(date, triggerChange) {
    if (!this._instance)
      return;
    this._instance.jumpToDate(date, triggerChange);
  }
  open() {
    if (!this._instance)
      return;
    this._instance.open();
  }
  parseDate(dateStr, dateFormat) {
    if (!this._instance)
      return void 0;
    return this._instance.parseDate(dateStr, dateFormat);
  }
  redraw() {
    if (!this._instance)
      return;
    this._instance.redraw();
  }
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  set(option, value) {
    if (!this._instance)
      return;
    this._instance.set(option, value);
  }
  setDate(date, triggerChange, dateStrFormat) {
    if (!this._instance)
      return;
    this._instance.setDate(date, triggerChange, dateStrFormat);
  }
  toggle() {
    if (!this._instance)
      return;
  }
  getSelectedDates() {
    if (!this._instance)
      return [];
    return this._instance.selectedDates;
  }
  getCurrentYear() {
    if (!this._instance)
      return -1;
    return this._instance.currentYear;
  }
  getCurrentMonth() {
    if (!this._instance)
      return -1;
    return this._instance.currentMonth;
  }
  getConfig() {
    if (!this._instance)
      return {};
    return this._instance.config;
  }
  getValue() {
    if (!this._inputElement)
      return "";
    return this._inputElement.value;
  }
  render() {
    return x2`
      ${!this._hasSlottedElement ? x2`<input class="lit-flatpickr flatpickr flatpickr-input" placeholder=${this.placeholder} />` : x2``}
      <slot></slot>
    `;
  }
};
__decorate([
  n6({ type: String })
], LitFlatpickr.prototype, "placeholder", void 0);
__decorate([
  n6({ type: String })
], LitFlatpickr.prototype, "altFormat", void 0);
__decorate([
  n6({ type: Boolean })
], LitFlatpickr.prototype, "altInput", void 0);
__decorate([
  n6({ type: String })
], LitFlatpickr.prototype, "altInputClass", void 0);
__decorate([
  n6({ type: Boolean })
], LitFlatpickr.prototype, "allowInput", void 0);
__decorate([
  n6({ type: String })
], LitFlatpickr.prototype, "ariaDateFormat", void 0);
__decorate([
  n6({ type: Boolean })
], LitFlatpickr.prototype, "clickOpens", void 0);
__decorate([
  n6({ type: String })
], LitFlatpickr.prototype, "dateFormat", void 0);
__decorate([
  n6({ type: Object })
], LitFlatpickr.prototype, "defaultDate", void 0);
__decorate([
  n6({ type: Number })
], LitFlatpickr.prototype, "defaultHour", void 0);
__decorate([
  n6({ type: Number })
], LitFlatpickr.prototype, "defaultMinute", void 0);
__decorate([
  n6({ type: Array })
], LitFlatpickr.prototype, "disable", void 0);
__decorate([
  n6({ type: Boolean })
], LitFlatpickr.prototype, "disableMobile", void 0);
__decorate([
  n6({ type: Array })
], LitFlatpickr.prototype, "enable", void 0);
__decorate([
  n6({ type: Boolean })
], LitFlatpickr.prototype, "enableTime", void 0);
__decorate([
  n6({ type: Boolean })
], LitFlatpickr.prototype, "enableSeconds", void 0);
__decorate([
  n6({ type: Function })
], LitFlatpickr.prototype, "formatDateFn", void 0);
__decorate([
  n6({ type: Number })
], LitFlatpickr.prototype, "hourIncrement", void 0);
__decorate([
  n6({ type: Number })
], LitFlatpickr.prototype, "minuteIncrement", void 0);
__decorate([
  n6({ type: Boolean })
], LitFlatpickr.prototype, "inline", void 0);
__decorate([
  n6({ type: String })
], LitFlatpickr.prototype, "maxDate", void 0);
__decorate([
  n6({ type: String })
], LitFlatpickr.prototype, "minDate", void 0);
__decorate([
  n6({ type: String })
], LitFlatpickr.prototype, "mode", void 0);
__decorate([
  n6({ type: String })
], LitFlatpickr.prototype, "nextArrow", void 0);
__decorate([
  n6({ type: String })
], LitFlatpickr.prototype, "prevArrow", void 0);
__decorate([
  n6({ type: Boolean })
], LitFlatpickr.prototype, "noCalendar", void 0);
__decorate([
  n6({ type: Function })
], LitFlatpickr.prototype, "onChange", void 0);
__decorate([
  n6({ type: Function })
], LitFlatpickr.prototype, "onClose", void 0);
__decorate([
  n6({ type: Function })
], LitFlatpickr.prototype, "onOpen", void 0);
__decorate([
  n6({ type: Function })
], LitFlatpickr.prototype, "onReady", void 0);
__decorate([
  n6({ type: Function })
], LitFlatpickr.prototype, "onMonthChange", void 0);
__decorate([
  n6({ type: Function })
], LitFlatpickr.prototype, "onYearChange", void 0);
__decorate([
  n6({ type: Function })
], LitFlatpickr.prototype, "onValueUpdate", void 0);
__decorate([
  n6({ type: Function })
], LitFlatpickr.prototype, "parseDateFn", void 0);
__decorate([
  n6({ type: String })
], LitFlatpickr.prototype, "position", void 0);
__decorate([
  n6({ type: Boolean })
], LitFlatpickr.prototype, "shorthandCurrentMonth", void 0);
__decorate([
  n6({ type: Number })
], LitFlatpickr.prototype, "showMonths", void 0);
__decorate([
  n6({ type: Boolean })
], LitFlatpickr.prototype, "static", void 0);
__decorate([
  n6({ type: Boolean })
], LitFlatpickr.prototype, "time_24hr", void 0);
__decorate([
  n6({ type: Boolean })
], LitFlatpickr.prototype, "weekNumbers", void 0);
__decorate([
  n6({ type: Boolean })
], LitFlatpickr.prototype, "wrap", void 0);
__decorate([
  n6({ type: String })
], LitFlatpickr.prototype, "theme", void 0);
__decorate([
  n6({ type: Number })
], LitFlatpickr.prototype, "firstDayOfWeek", void 0);
__decorate([
  n6({ type: String })
], LitFlatpickr.prototype, "locale", void 0);
__decorate([
  n6({ type: Boolean, attribute: "default-to-today" })
], LitFlatpickr.prototype, "defaultToToday", void 0);
__decorate([
  n6({ type: Boolean, attribute: "week-select" })
], LitFlatpickr.prototype, "weekSelect", void 0);
__decorate([
  n6({ type: Boolean, attribute: "month-select" })
], LitFlatpickr.prototype, "monthSelect", void 0);
__decorate([
  n6({ type: Boolean, attribute: "confirm-date" })
], LitFlatpickr.prototype, "confirmDate", void 0);
__decorate([
  n6({ type: Boolean })
], LitFlatpickr.prototype, "_hasSlottedElement", void 0);
LitFlatpickr = __decorate([
  e5("lit-flatpickr")
], LitFlatpickr);

// src/components/date-picker/date-picker.component.ts
var TerraDatePicker = class extends TerraElement {
  constructor() {
    super(...arguments);
    this.range = false;
    this.allowInput = false;
    this.altFormat = "F j, Y";
    this.altInput = false;
    this.altInputClass = "";
    this.dateFormat = "Y-m-d";
    this.enableTime = false;
    this.time24hr = false;
    this.weekNumbers = false;
    this.static = false;
    this.position = "auto";
    this.showMonths = 1;
    this.hideLabel = false;
    this.label = "Select Date";
  }
  firstUpdated() {
    this.flatpickrElement.addEventListener("change", this.handleChange.bind(this));
    setTimeout(() => {
      this.flatpickrElement.shadowRoot.querySelector("input").addEventListener("blur", this.handleBlur.bind(this));
    }, 250);
  }
  handleChange(selectedDates) {
    var _a, _b;
    this.selectedDates = {
      startDate: (_a = selectedDates[0]) == null ? void 0 : _a.toISOString().split("T")[0],
      endDate: this.range ? (_b = selectedDates[1]) == null ? void 0 : _b.toISOString().split("T")[0] : null
    };
    this.emit("terra-change");
  }
  handleBlur() {
    this.handleChange(this.flatpickrElement._instance.selectedDates);
  }
  render() {
    return x`
            <div class="date-picker">
                <label
                    for="date-picker__input"
                    class=${this.hideLabel ? "sr-only" : "date-picker__input_label"}
                    >${this.label}</label
                >
                <div class="date-picker__input_fields">
                    <lit-flatpickr
                        id="date-picker__input"
                        class="form-control"
                        .mode=${this.range ? "range" : "single"}
                        .minDate=${this.minDate}
                        .maxDate=${this.maxDate}
                        .defaultDate=${this.range ? [this.startDate, this.endDate].filter(
      Boolean
    ) : this.defaultDate}
                        .allowInput=${this.allowInput}
                        .altFormat=${this.altFormat}
                        .altInput=${this.altInput}
                        .altInputClass=${this.altInputClass}
                        .dateFormat=${this.dateFormat}
                        .enableTime=${this.enableTime}
                        .time24hr=${this.time24hr}
                        .weekNumbers=${this.weekNumbers}
                        .static=${this.static}
                        .position=${this.position}
                        .showMonths=${this.showMonths}
                        theme="material_blue"
                        .onChange="${this.handleChange.bind(this)}"
                    ></lit-flatpickr>
                    <terra-button
                        shape="square-left"
                        size="medium"
                        class="date-picker__input_icon_button"
                        @click=${() => this.flatpickrElement.open()}
                        type="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                            />
                        </svg>
                    </terra-button>
                </div>
            </div>
        `;
  }
};
TerraDatePicker.styles = [component_styles_default, date_picker_styles_default];
TerraDatePicker.dependencies = {
  "terra-button": TerraButton
};
__decorateClass([
  n()
], TerraDatePicker.prototype, "id", 2);
__decorateClass([
  n({ type: Boolean })
], TerraDatePicker.prototype, "range", 2);
__decorateClass([
  n({ attribute: "min-date" })
], TerraDatePicker.prototype, "minDate", 2);
__decorateClass([
  n({ attribute: "max-date" })
], TerraDatePicker.prototype, "maxDate", 2);
__decorateClass([
  n({ attribute: "start-date" })
], TerraDatePicker.prototype, "startDate", 2);
__decorateClass([
  n({ attribute: "end-date" })
], TerraDatePicker.prototype, "endDate", 2);
__decorateClass([
  n({ attribute: "default-date" })
], TerraDatePicker.prototype, "defaultDate", 2);
__decorateClass([
  n({ type: Boolean, attribute: "allow-input" })
], TerraDatePicker.prototype, "allowInput", 2);
__decorateClass([
  n({ attribute: "alt-format" })
], TerraDatePicker.prototype, "altFormat", 2);
__decorateClass([
  n({ type: Boolean, attribute: "alt-input" })
], TerraDatePicker.prototype, "altInput", 2);
__decorateClass([
  n({ attribute: "alt-input-class" })
], TerraDatePicker.prototype, "altInputClass", 2);
__decorateClass([
  n({ attribute: "date-format" })
], TerraDatePicker.prototype, "dateFormat", 2);
__decorateClass([
  n({ type: Boolean, attribute: "enable-time" })
], TerraDatePicker.prototype, "enableTime", 2);
__decorateClass([
  n({ type: Boolean, attribute: "time-24hr" })
], TerraDatePicker.prototype, "time24hr", 2);
__decorateClass([
  n({ type: Boolean, attribute: "week-numbers" })
], TerraDatePicker.prototype, "weekNumbers", 2);
__decorateClass([
  n({ type: Boolean })
], TerraDatePicker.prototype, "static", 2);
__decorateClass([
  n()
], TerraDatePicker.prototype, "position", 2);
__decorateClass([
  n({ type: Number, attribute: "show-months" })
], TerraDatePicker.prototype, "showMonths", 2);
__decorateClass([
  n({ attribute: "hide-label", type: Boolean })
], TerraDatePicker.prototype, "hideLabel", 2);
__decorateClass([
  n()
], TerraDatePicker.prototype, "label", 2);
__decorateClass([
  e("lit-flatpickr")
], TerraDatePicker.prototype, "flatpickrElement", 2);

export {
  TerraDatePicker
};
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
