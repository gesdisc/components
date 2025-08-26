import {
  b
} from "./chunk.M73GHNHJ.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// node_modules/lit-html/lit-html.js
init_dirname();
init_buffer();
init_process();
var t = globalThis;
var i = t.trustedTypes;
var s = i ? i.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0;
var e = "$lit$";
var h = `lit$${Math.random().toFixed(9).slice(2)}$`;
var o = "?" + h;
var n = `<${o}>`;
var r = document;
var l = () => r.createComment("");
var c = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2;
var a = Array.isArray;
var u = (t2) => a(t2) || "function" == typeof (t2 == null ? void 0 : t2[Symbol.iterator]);
var d = "[ 	\n\f\r]";
var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var v = /-->/g;
var _ = />/g;
var m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var p = /'/g;
var g = /"/g;
var $ = /^(?:script|style|textarea|title)$/i;
var y = (t2) => (i2, ...s3) => ({ _$litType$: t2, strings: i2, values: s3 });
var x = y(1);
var b2 = y(2);
var w = Symbol.for("lit-noChange");
var T = Symbol.for("lit-nothing");
var A = /* @__PURE__ */ new WeakMap();
var E = r.createTreeWalker(r, 129);
function C(t2, i2) {
  if (!Array.isArray(t2) || !t2.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== s ? s.createHTML(i2) : i2;
}
var P = (t2, i2) => {
  const s3 = t2.length - 1, o2 = [];
  let r3, l2 = 2 === i2 ? "<svg>" : "", c2 = f;
  for (let i3 = 0; i3 < s3; i3++) {
    const s4 = t2[i3];
    let a2, u2, d2 = -1, y2 = 0;
    for (; y2 < s4.length && (c2.lastIndex = y2, u2 = c2.exec(s4), null !== u2); )
      y2 = c2.lastIndex, c2 === f ? "!--" === u2[1] ? c2 = v : void 0 !== u2[1] ? c2 = _ : void 0 !== u2[2] ? ($.test(u2[2]) && (r3 = RegExp("</" + u2[2], "g")), c2 = m) : void 0 !== u2[3] && (c2 = m) : c2 === m ? ">" === u2[0] ? (c2 = r3 != null ? r3 : f, d2 = -1) : void 0 === u2[1] ? d2 = -2 : (d2 = c2.lastIndex - u2[2].length, a2 = u2[1], c2 = void 0 === u2[3] ? m : '"' === u2[3] ? g : p) : c2 === g || c2 === p ? c2 = m : c2 === v || c2 === _ ? c2 = f : (c2 = m, r3 = void 0);
    const x2 = c2 === m && t2[i3 + 1].startsWith("/>") ? " " : "";
    l2 += c2 === f ? s4 + n : d2 >= 0 ? (o2.push(a2), s4.slice(0, d2) + e + s4.slice(d2) + h + x2) : s4 + h + (-2 === d2 ? i3 : x2);
  }
  return [C(t2, l2 + (t2[s3] || "<?>") + (2 === i2 ? "</svg>" : "")), o2];
};
var V = class _V {
  constructor({ strings: t2, _$litType$: s3 }, n2) {
    let r3;
    this.parts = [];
    let c2 = 0, a2 = 0;
    const u2 = t2.length - 1, d2 = this.parts, [f2, v2] = P(t2, s3);
    if (this.el = _V.createElement(f2, n2), E.currentNode = this.el.content, 2 === s3) {
      const t3 = this.el.content.firstChild;
      t3.replaceWith(...t3.childNodes);
    }
    for (; null !== (r3 = E.nextNode()) && d2.length < u2; ) {
      if (1 === r3.nodeType) {
        if (r3.hasAttributes())
          for (const t3 of r3.getAttributeNames())
            if (t3.endsWith(e)) {
              const i2 = v2[a2++], s4 = r3.getAttribute(t3).split(h), e2 = /([.?@])?(.*)/.exec(i2);
              d2.push({ type: 1, index: c2, name: e2[2], strings: s4, ctor: "." === e2[1] ? k : "?" === e2[1] ? H : "@" === e2[1] ? I : R }), r3.removeAttribute(t3);
            } else
              t3.startsWith(h) && (d2.push({ type: 6, index: c2 }), r3.removeAttribute(t3));
        if ($.test(r3.tagName)) {
          const t3 = r3.textContent.split(h), s4 = t3.length - 1;
          if (s4 > 0) {
            r3.textContent = i ? i.emptyScript : "";
            for (let i2 = 0; i2 < s4; i2++)
              r3.append(t3[i2], l()), E.nextNode(), d2.push({ type: 2, index: ++c2 });
            r3.append(t3[s4], l());
          }
        }
      } else if (8 === r3.nodeType)
        if (r3.data === o)
          d2.push({ type: 2, index: c2 });
        else {
          let t3 = -1;
          for (; -1 !== (t3 = r3.data.indexOf(h, t3 + 1)); )
            d2.push({ type: 7, index: c2 }), t3 += h.length - 1;
        }
      c2++;
    }
  }
  static createElement(t2, i2) {
    const s3 = r.createElement("template");
    return s3.innerHTML = t2, s3;
  }
};
function N(t2, i2, s3 = t2, e2) {
  var _a4, _b, _c;
  if (i2 === w)
    return i2;
  let h2 = void 0 !== e2 ? (_a4 = s3._$Co) == null ? void 0 : _a4[e2] : s3._$Cl;
  const o2 = c(i2) ? void 0 : i2._$litDirective$;
  return (h2 == null ? void 0 : h2.constructor) !== o2 && ((_b = h2 == null ? void 0 : h2._$AO) == null ? void 0 : _b.call(h2, false), void 0 === o2 ? h2 = void 0 : (h2 = new o2(t2), h2._$AT(t2, s3, e2)), void 0 !== e2 ? ((_c = s3._$Co) != null ? _c : s3._$Co = [])[e2] = h2 : s3._$Cl = h2), void 0 !== h2 && (i2 = N(t2, h2._$AS(t2, i2.values), h2, e2)), i2;
}
var S = class {
  constructor(t2, i2) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    var _a4;
    const { el: { content: i2 }, parts: s3 } = this._$AD, e2 = ((_a4 = t2 == null ? void 0 : t2.creationScope) != null ? _a4 : r).importNode(i2, true);
    E.currentNode = e2;
    let h2 = E.nextNode(), o2 = 0, n2 = 0, l2 = s3[0];
    for (; void 0 !== l2; ) {
      if (o2 === l2.index) {
        let i3;
        2 === l2.type ? i3 = new M(h2, h2.nextSibling, this, t2) : 1 === l2.type ? i3 = new l2.ctor(h2, l2.name, l2.strings, this, t2) : 6 === l2.type && (i3 = new L(h2, this, t2)), this._$AV.push(i3), l2 = s3[++n2];
      }
      o2 !== (l2 == null ? void 0 : l2.index) && (h2 = E.nextNode(), o2++);
    }
    return E.currentNode = r, e2;
  }
  p(t2) {
    let i2 = 0;
    for (const s3 of this._$AV)
      void 0 !== s3 && (void 0 !== s3.strings ? (s3._$AI(t2, s3, i2), i2 += s3.strings.length - 2) : s3._$AI(t2[i2])), i2++;
  }
};
var M = class _M {
  get _$AU() {
    var _a4, _b;
    return (_b = (_a4 = this._$AM) == null ? void 0 : _a4._$AU) != null ? _b : this._$Cv;
  }
  constructor(t2, i2, s3, e2) {
    var _a4;
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s3, this.options = e2, this._$Cv = (_a4 = e2 == null ? void 0 : e2.isConnected) != null ? _a4 : true;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return void 0 !== i2 && 11 === (t2 == null ? void 0 : t2.nodeType) && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = N(this, t2, i2), c(t2) ? t2 === T || null == t2 || "" === t2 ? (this._$AH !== T && this._$AR(), this._$AH = T) : t2 !== this._$AH && t2 !== w && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : u(t2) ? this.k(t2) : this._(t2);
  }
  S(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.S(t2));
  }
  _(t2) {
    this._$AH !== T && c(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(r.createTextNode(t2)), this._$AH = t2;
  }
  $(t2) {
    var _a4;
    const { values: i2, _$litType$: s3 } = t2, e2 = "number" == typeof s3 ? this._$AC(t2) : (void 0 === s3.el && (s3.el = V.createElement(C(s3.h, s3.h[0]), this.options)), s3);
    if (((_a4 = this._$AH) == null ? void 0 : _a4._$AD) === e2)
      this._$AH.p(i2);
    else {
      const t3 = new S(e2, this), s4 = t3.u(this.options);
      t3.p(i2), this.T(s4), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = A.get(t2.strings);
    return void 0 === i2 && A.set(t2.strings, i2 = new V(t2)), i2;
  }
  k(t2) {
    a(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s3, e2 = 0;
    for (const h2 of t2)
      e2 === i2.length ? i2.push(s3 = new _M(this.S(l()), this.S(l()), this, this.options)) : s3 = i2[e2], s3._$AI(h2), e2++;
    e2 < i2.length && (this._$AR(s3 && s3._$AB.nextSibling, e2), i2.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i2) {
    var _a4;
    for ((_a4 = this._$AP) == null ? void 0 : _a4.call(this, false, true, i2); t2 && t2 !== this._$AB; ) {
      const i3 = t2.nextSibling;
      t2.remove(), t2 = i3;
    }
  }
  setConnected(t2) {
    var _a4;
    void 0 === this._$AM && (this._$Cv = t2, (_a4 = this._$AP) == null ? void 0 : _a4.call(this, t2));
  }
};
var R = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t2, i2, s3, e2, h2) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = h2, s3.length > 2 || "" !== s3[0] || "" !== s3[1] ? (this._$AH = Array(s3.length - 1).fill(new String()), this.strings = s3) : this._$AH = T;
  }
  _$AI(t2, i2 = this, s3, e2) {
    const h2 = this.strings;
    let o2 = false;
    if (void 0 === h2)
      t2 = N(this, t2, i2, 0), o2 = !c(t2) || t2 !== this._$AH && t2 !== w, o2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let n2, r3;
      for (t2 = h2[0], n2 = 0; n2 < h2.length - 1; n2++)
        r3 = N(this, e3[s3 + n2], i2, n2), r3 === w && (r3 = this._$AH[n2]), o2 || (o2 = !c(r3) || r3 !== this._$AH[n2]), r3 === T ? t2 = T : t2 !== T && (t2 += (r3 != null ? r3 : "") + h2[n2 + 1]), this._$AH[n2] = r3;
    }
    o2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 != null ? t2 : "");
  }
};
var k = class extends R {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === T ? void 0 : t2;
  }
};
var H = class extends R {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    this.element.toggleAttribute(this.name, !!t2 && t2 !== T);
  }
};
var I = class extends R {
  constructor(t2, i2, s3, e2, h2) {
    super(t2, i2, s3, e2, h2), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    var _a4;
    if ((t2 = (_a4 = N(this, t2, i2, 0)) != null ? _a4 : T) === w)
      return;
    const s3 = this._$AH, e2 = t2 === T && s3 !== T || t2.capture !== s3.capture || t2.once !== s3.once || t2.passive !== s3.passive, h2 = t2 !== T && (s3 === T || e2);
    e2 && this.element.removeEventListener(this.name, this, s3), h2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var _a4, _b;
    "function" == typeof this._$AH ? this._$AH.call((_b = (_a4 = this.options) == null ? void 0 : _a4.host) != null ? _b : this.element, t2) : this._$AH.handleEvent(t2);
  }
};
var L = class {
  constructor(t2, i2, s3) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s3;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    N(this, t2);
  }
};
var z = { P: e, A: h, C: o, M: 1, L: P, R: S, D: u, V: N, I: M, H: R, N: H, U: I, B: k, F: L };
var Z = t.litHtmlPolyfillSupport;
var _a;
Z == null ? void 0 : Z(V, M), ((_a = t.litHtmlVersions) != null ? _a : t.litHtmlVersions = []).push("3.1.3");
var j = (t2, i2, s3) => {
  var _a4, _b;
  const e2 = (_a4 = s3 == null ? void 0 : s3.renderBefore) != null ? _a4 : i2;
  let h2 = e2._$litPart$;
  if (void 0 === h2) {
    const t3 = (_b = s3 == null ? void 0 : s3.renderBefore) != null ? _b : null;
    e2._$litPart$ = h2 = new M(i2.insertBefore(l(), t3), t3, void 0, s3 != null ? s3 : {});
  }
  return h2._$AI(t2), h2;
};

// node_modules/lit-element/lit-element.js
init_dirname();
init_buffer();
init_process();
var s2 = class extends b {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var _a4, _b;
    const t2 = super.createRenderRoot();
    return (_b = (_a4 = this.renderOptions).renderBefore) != null ? _b : _a4.renderBefore = t2.firstChild, t2;
  }
  update(t2) {
    const i2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = j(i2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var _a4;
    super.connectedCallback(), (_a4 = this._$Do) == null ? void 0 : _a4.setConnected(true);
  }
  disconnectedCallback() {
    var _a4;
    super.disconnectedCallback(), (_a4 = this._$Do) == null ? void 0 : _a4.setConnected(false);
  }
  render() {
    return w;
  }
};
var _a2;
s2._$litElement$ = true, s2["finalized", "finalized"] = true, (_a2 = globalThis.litElementHydrateSupport) == null ? void 0 : _a2.call(globalThis, { LitElement: s2 });
var r2 = globalThis.litElementPolyfillSupport;
r2 == null ? void 0 : r2({ LitElement: s2 });
var _a3;
((_a3 = globalThis.litElementVersions) != null ? _a3 : globalThis.litElementVersions = []).push("4.0.5");

// node_modules/lit/index.js
init_dirname();
init_buffer();
init_process();

// node_modules/lit-html/is-server.js
init_dirname();
init_buffer();
init_process();

export {
  x,
  b2 as b,
  w,
  T,
  z,
  j,
  s2 as s
};
/*! Bundled license information:

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
*/
