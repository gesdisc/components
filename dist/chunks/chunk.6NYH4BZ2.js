import {
  z
} from "./chunk.PQFHJHNO.js";

// node_modules/lit-html/directive-helpers.js
var { I: t } = z;
var e = (o, t2) => void 0 === t2 ? void 0 !== (o == null ? void 0 : o._$litType$) : (o == null ? void 0 : o._$litType$) === t2;
var l = (o) => {
  var _a;
  return null != ((_a = o == null ? void 0 : o._$litType$) == null ? void 0 : _a.h);
};
var f = (o) => void 0 === o.strings;
var s = () => document.createComment("");
var r = (o, i, n) => {
  var _a;
  const e2 = o._$AA.parentNode, l2 = void 0 === i ? o._$AB : i._$AA;
  if (void 0 === n) {
    const i2 = e2.insertBefore(s(), l2), c = e2.insertBefore(s(), l2);
    n = new t(i2, c, o, o.options);
  } else {
    const t2 = n._$AB.nextSibling, i2 = n._$AM, c = i2 !== o;
    if (c) {
      let t3;
      (_a = n._$AQ) == null ? void 0 : _a.call(n, o), n._$AM = o, void 0 !== n._$AP && (t3 = o._$AU) !== i2._$AU && n._$AP(t3);
    }
    if (t2 !== l2 || c) {
      let o2 = n._$AA;
      for (; o2 !== t2; ) {
        const t3 = o2.nextSibling;
        e2.insertBefore(o2, l2), o2 = t3;
      }
    }
  }
  return n;
};
var v = (o, t2, i = o) => (o._$AI(t2, i), o);
var u = {};
var m = (o, t2 = u) => o._$AH = t2;
var p = (o) => o._$AH;
var h = (o) => {
  var _a;
  (_a = o._$AP) == null ? void 0 : _a.call(o, false, true);
  let t2 = o._$AA;
  const i = o._$AB.nextSibling;
  for (; t2 !== i; ) {
    const o2 = t2.nextSibling;
    t2.remove(), t2 = o2;
  }
};
var j = (o) => {
  o._$AR();
};

export {
  e,
  l,
  f,
  r,
  v,
  m,
  p,
  h,
  j
};
/*! Bundled license information:

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
