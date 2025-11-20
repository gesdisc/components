import {
  y
} from "./chunk.C7DL2MIN.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

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
var y2 = (t2) => (i3, ...s3) => ({ _$litType$: t2, strings: i3, values: s3 });
var x = y2(1);
var b = y2(2);
var w = y2(3);
var T = Symbol.for("lit-noChange");
var E = Symbol.for("lit-nothing");
var A = /* @__PURE__ */ new WeakMap();
var C = r.createTreeWalker(r, 129);
function P(t2, i3) {
  if (!a(t2) || !t2.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== s ? s.createHTML(i3) : i3;
}
var V = (t2, i3) => {
  const s3 = t2.length - 1, o3 = [];
  let r2, l2 = 2 === i3 ? "<svg>" : 3 === i3 ? "<math>" : "", c2 = f;
  for (let i4 = 0; i4 < s3; i4++) {
    const s4 = t2[i4];
    let a2, u2, d2 = -1, y3 = 0;
    for (; y3 < s4.length && (c2.lastIndex = y3, u2 = c2.exec(s4), null !== u2); )
      y3 = c2.lastIndex, c2 === f ? "!--" === u2[1] ? c2 = v : void 0 !== u2[1] ? c2 = _ : void 0 !== u2[2] ? ($.test(u2[2]) && (r2 = RegExp("</" + u2[2], "g")), c2 = m) : void 0 !== u2[3] && (c2 = m) : c2 === m ? ">" === u2[0] ? (c2 = r2 != null ? r2 : f, d2 = -1) : void 0 === u2[1] ? d2 = -2 : (d2 = c2.lastIndex - u2[2].length, a2 = u2[1], c2 = void 0 === u2[3] ? m : '"' === u2[3] ? g : p) : c2 === g || c2 === p ? c2 = m : c2 === v || c2 === _ ? c2 = f : (c2 = m, r2 = void 0);
    const x2 = c2 === m && t2[i4 + 1].startsWith("/>") ? " " : "";
    l2 += c2 === f ? s4 + n : d2 >= 0 ? (o3.push(a2), s4.slice(0, d2) + e + s4.slice(d2) + h + x2) : s4 + h + (-2 === d2 ? i4 : x2);
  }
  return [P(t2, l2 + (t2[s3] || "<?>") + (2 === i3 ? "</svg>" : 3 === i3 ? "</math>" : "")), o3];
};
var N = class _N {
  constructor({ strings: t2, _$litType$: s3 }, n2) {
    let r2;
    this.parts = [];
    let c2 = 0, a2 = 0;
    const u2 = t2.length - 1, d2 = this.parts, [f2, v2] = V(t2, s3);
    if (this.el = _N.createElement(f2, n2), C.currentNode = this.el.content, 2 === s3 || 3 === s3) {
      const t3 = this.el.content.firstChild;
      t3.replaceWith(...t3.childNodes);
    }
    for (; null !== (r2 = C.nextNode()) && d2.length < u2; ) {
      if (1 === r2.nodeType) {
        if (r2.hasAttributes())
          for (const t3 of r2.getAttributeNames())
            if (t3.endsWith(e)) {
              const i3 = v2[a2++], s4 = r2.getAttribute(t3).split(h), e2 = /([.?@])?(.*)/.exec(i3);
              d2.push({ type: 1, index: c2, name: e2[2], strings: s4, ctor: "." === e2[1] ? H : "?" === e2[1] ? I : "@" === e2[1] ? L : k }), r2.removeAttribute(t3);
            } else
              t3.startsWith(h) && (d2.push({ type: 6, index: c2 }), r2.removeAttribute(t3));
        if ($.test(r2.tagName)) {
          const t3 = r2.textContent.split(h), s4 = t3.length - 1;
          if (s4 > 0) {
            r2.textContent = i ? i.emptyScript : "";
            for (let i3 = 0; i3 < s4; i3++)
              r2.append(t3[i3], l()), C.nextNode(), d2.push({ type: 2, index: ++c2 });
            r2.append(t3[s4], l());
          }
        }
      } else if (8 === r2.nodeType)
        if (r2.data === o)
          d2.push({ type: 2, index: c2 });
        else {
          let t3 = -1;
          for (; -1 !== (t3 = r2.data.indexOf(h, t3 + 1)); )
            d2.push({ type: 7, index: c2 }), t3 += h.length - 1;
        }
      c2++;
    }
  }
  static createElement(t2, i3) {
    const s3 = r.createElement("template");
    return s3.innerHTML = t2, s3;
  }
};
function S(t2, i3, s3 = t2, e2) {
  var _a4, _b, _c;
  if (i3 === T)
    return i3;
  let h2 = void 0 !== e2 ? (_a4 = s3._$Co) == null ? void 0 : _a4[e2] : s3._$Cl;
  const o3 = c(i3) ? void 0 : i3._$litDirective$;
  return (h2 == null ? void 0 : h2.constructor) !== o3 && ((_b = h2 == null ? void 0 : h2._$AO) == null ? void 0 : _b.call(h2, false), void 0 === o3 ? h2 = void 0 : (h2 = new o3(t2), h2._$AT(t2, s3, e2)), void 0 !== e2 ? ((_c = s3._$Co) != null ? _c : s3._$Co = [])[e2] = h2 : s3._$Cl = h2), void 0 !== h2 && (i3 = S(t2, h2._$AS(t2, i3.values), h2, e2)), i3;
}
var M = class {
  constructor(t2, i3) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i3;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    var _a4;
    const { el: { content: i3 }, parts: s3 } = this._$AD, e2 = ((_a4 = t2 == null ? void 0 : t2.creationScope) != null ? _a4 : r).importNode(i3, true);
    C.currentNode = e2;
    let h2 = C.nextNode(), o3 = 0, n2 = 0, l2 = s3[0];
    for (; void 0 !== l2; ) {
      if (o3 === l2.index) {
        let i4;
        2 === l2.type ? i4 = new R(h2, h2.nextSibling, this, t2) : 1 === l2.type ? i4 = new l2.ctor(h2, l2.name, l2.strings, this, t2) : 6 === l2.type && (i4 = new z(h2, this, t2)), this._$AV.push(i4), l2 = s3[++n2];
      }
      o3 !== (l2 == null ? void 0 : l2.index) && (h2 = C.nextNode(), o3++);
    }
    return C.currentNode = r, e2;
  }
  p(t2) {
    let i3 = 0;
    for (const s3 of this._$AV)
      void 0 !== s3 && (void 0 !== s3.strings ? (s3._$AI(t2, s3, i3), i3 += s3.strings.length - 2) : s3._$AI(t2[i3])), i3++;
  }
};
var R = class _R {
  get _$AU() {
    var _a4, _b;
    return (_b = (_a4 = this._$AM) == null ? void 0 : _a4._$AU) != null ? _b : this._$Cv;
  }
  constructor(t2, i3, s3, e2) {
    var _a4;
    this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t2, this._$AB = i3, this._$AM = s3, this.options = e2, this._$Cv = (_a4 = e2 == null ? void 0 : e2.isConnected) != null ? _a4 : true;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i3 = this._$AM;
    return void 0 !== i3 && 11 === (t2 == null ? void 0 : t2.nodeType) && (t2 = i3.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i3 = this) {
    t2 = S(this, t2, i3), c(t2) ? t2 === E || null == t2 || "" === t2 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t2 !== this._$AH && t2 !== T && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : u(t2) ? this.k(t2) : this._(t2);
  }
  O(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
  }
  _(t2) {
    this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(r.createTextNode(t2)), this._$AH = t2;
  }
  $(t2) {
    var _a4;
    const { values: i3, _$litType$: s3 } = t2, e2 = "number" == typeof s3 ? this._$AC(t2) : (void 0 === s3.el && (s3.el = N.createElement(P(s3.h, s3.h[0]), this.options)), s3);
    if (((_a4 = this._$AH) == null ? void 0 : _a4._$AD) === e2)
      this._$AH.p(i3);
    else {
      const t3 = new M(e2, this), s4 = t3.u(this.options);
      t3.p(i3), this.T(s4), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i3 = A.get(t2.strings);
    return void 0 === i3 && A.set(t2.strings, i3 = new N(t2)), i3;
  }
  k(t2) {
    a(this._$AH) || (this._$AH = [], this._$AR());
    const i3 = this._$AH;
    let s3, e2 = 0;
    for (const h2 of t2)
      e2 === i3.length ? i3.push(s3 = new _R(this.O(l()), this.O(l()), this, this.options)) : s3 = i3[e2], s3._$AI(h2), e2++;
    e2 < i3.length && (this._$AR(s3 && s3._$AB.nextSibling, e2), i3.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i3) {
    var _a4;
    for ((_a4 = this._$AP) == null ? void 0 : _a4.call(this, false, true, i3); t2 !== this._$AB; ) {
      const i4 = t2.nextSibling;
      t2.remove(), t2 = i4;
    }
  }
  setConnected(t2) {
    var _a4;
    void 0 === this._$AM && (this._$Cv = t2, (_a4 = this._$AP) == null ? void 0 : _a4.call(this, t2));
  }
};
var k = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t2, i3, s3, e2, h2) {
    this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t2, this.name = i3, this._$AM = e2, this.options = h2, s3.length > 2 || "" !== s3[0] || "" !== s3[1] ? (this._$AH = Array(s3.length - 1).fill(new String()), this.strings = s3) : this._$AH = E;
  }
  _$AI(t2, i3 = this, s3, e2) {
    const h2 = this.strings;
    let o3 = false;
    if (void 0 === h2)
      t2 = S(this, t2, i3, 0), o3 = !c(t2) || t2 !== this._$AH && t2 !== T, o3 && (this._$AH = t2);
    else {
      const e3 = t2;
      let n2, r2;
      for (t2 = h2[0], n2 = 0; n2 < h2.length - 1; n2++)
        r2 = S(this, e3[s3 + n2], i3, n2), r2 === T && (r2 = this._$AH[n2]), o3 || (o3 = !c(r2) || r2 !== this._$AH[n2]), r2 === E ? t2 = E : t2 !== E && (t2 += (r2 != null ? r2 : "") + h2[n2 + 1]), this._$AH[n2] = r2;
    }
    o3 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 != null ? t2 : "");
  }
};
var H = class extends k {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === E ? void 0 : t2;
  }
};
var I = class extends k {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    this.element.toggleAttribute(this.name, !!t2 && t2 !== E);
  }
};
var L = class extends k {
  constructor(t2, i3, s3, e2, h2) {
    super(t2, i3, s3, e2, h2), this.type = 5;
  }
  _$AI(t2, i3 = this) {
    var _a4;
    if ((t2 = (_a4 = S(this, t2, i3, 0)) != null ? _a4 : E) === T)
      return;
    const s3 = this._$AH, e2 = t2 === E && s3 !== E || t2.capture !== s3.capture || t2.once !== s3.once || t2.passive !== s3.passive, h2 = t2 !== E && (s3 === E || e2);
    e2 && this.element.removeEventListener(this.name, this, s3), h2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var _a4, _b;
    "function" == typeof this._$AH ? this._$AH.call((_b = (_a4 = this.options) == null ? void 0 : _a4.host) != null ? _b : this.element, t2) : this._$AH.handleEvent(t2);
  }
};
var z = class {
  constructor(t2, i3, s3) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i3, this.options = s3;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    S(this, t2);
  }
};
var Z = { M: e, P: h, A: o, C: 1, L: V, R: M, D: u, V: S, I: R, H: k, N: I, U: L, B: H, F: z };
var j = t.litHtmlPolyfillSupport;
var _a;
j == null ? void 0 : j(N, R), ((_a = t.litHtmlVersions) != null ? _a : t.litHtmlVersions = []).push("3.3.1");
var B = (t2, i3, s3) => {
  var _a4, _b;
  const e2 = (_a4 = s3 == null ? void 0 : s3.renderBefore) != null ? _a4 : i3;
  let h2 = e2._$litPart$;
  if (void 0 === h2) {
    const t3 = (_b = s3 == null ? void 0 : s3.renderBefore) != null ? _b : null;
    e2._$litPart$ = h2 = new R(i3.insertBefore(l(), t3), t3, void 0, s3 != null ? s3 : {});
  }
  return h2._$AI(t2), h2;
};

// node_modules/lit-element/lit-element.js
init_dirname();
init_buffer();
init_process();
var s2 = globalThis;
var i2 = class extends y {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var _a4, _b;
    const t2 = super.createRenderRoot();
    return (_b = (_a4 = this.renderOptions).renderBefore) != null ? _b : _a4.renderBefore = t2.firstChild, t2;
  }
  update(t2) {
    const r2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = B(r2, this.renderRoot, this.renderOptions);
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
    return T;
  }
};
var _a2;
i2._$litElement$ = true, i2["finalized"] = true, (_a2 = s2.litElementHydrateSupport) == null ? void 0 : _a2.call(s2, { LitElement: i2 });
var o2 = s2.litElementPolyfillSupport;
o2 == null ? void 0 : o2({ LitElement: i2 });
var _a3;
((_a3 = s2.litElementVersions) != null ? _a3 : s2.litElementVersions = []).push("4.2.1");

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
  b,
  w,
  T,
  E,
  Z,
  B,
  i2 as i
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
