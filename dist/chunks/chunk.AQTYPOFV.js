import {
  M,
  m,
  p,
  s,
  v
} from "./chunk.65Q3GMDE.js";
import {
  e,
  i,
  t
} from "./chunk.YX63PQ56.js";
import {
  T
} from "./chunk.JQ2FCDGS.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// node_modules/lit-html/directives/repeat.js
init_dirname();
init_buffer();
init_process();
var u = (e2, s2, t2) => {
  const r = /* @__PURE__ */ new Map();
  for (let l = s2; l <= t2; l++)
    r.set(e2[l], l);
  return r;
};
var c = e(class extends i {
  constructor(e2) {
    if (super(e2), e2.type !== t.CHILD)
      throw Error("repeat() can only be used in text expressions");
  }
  dt(e2, s2, t2) {
    let r;
    void 0 === t2 ? t2 = s2 : void 0 !== s2 && (r = s2);
    const l = [], o = [];
    let i2 = 0;
    for (const s3 of e2)
      l[i2] = r ? r(s3, i2) : i2, o[i2] = t2(s3, i2), i2++;
    return { values: o, keys: l };
  }
  render(e2, s2, t2) {
    return this.dt(e2, s2, t2).values;
  }
  update(s2, [t2, r, c2]) {
    var _a;
    const d = p(s2), { values: p2, keys: a } = this.dt(t2, r, c2);
    if (!Array.isArray(d))
      return this.ut = a, p2;
    const h = (_a = this.ut) != null ? _a : this.ut = [], v2 = [];
    let m2, y, x = 0, j = d.length - 1, k = 0, w = p2.length - 1;
    for (; x <= j && k <= w; )
      if (null === d[x])
        x++;
      else if (null === d[j])
        j--;
      else if (h[x] === a[k])
        v2[k] = v(d[x], p2[k]), x++, k++;
      else if (h[j] === a[w])
        v2[w] = v(d[j], p2[w]), j--, w--;
      else if (h[x] === a[w])
        v2[w] = v(d[x], p2[w]), s(s2, v2[w + 1], d[x]), x++, w--;
      else if (h[j] === a[k])
        v2[k] = v(d[j], p2[k]), s(s2, d[x], d[j]), j--, k++;
      else if (void 0 === m2 && (m2 = u(a, k, w), y = u(h, x, j)), m2.has(h[x]))
        if (m2.has(h[j])) {
          const e2 = y.get(a[k]), t3 = void 0 !== e2 ? d[e2] : null;
          if (null === t3) {
            const e3 = s(s2, d[x]);
            v(e3, p2[k]), v2[k] = e3;
          } else
            v2[k] = v(t3, p2[k]), s(s2, d[x], t3), d[e2] = null;
          k++;
        } else
          M(d[j]), j--;
      else
        M(d[x]), x++;
    for (; k <= w; ) {
      const e2 = s(s2, v2[w + 1]);
      v(e2, p2[k]), v2[k++] = e2;
    }
    for (; x <= j; ) {
      const e2 = d[x++];
      null !== e2 && M(e2);
    }
    return this.ut = a, m(s2, v2), T;
  }
});

// node_modules/lit/directives/repeat.js
init_dirname();
init_buffer();
init_process();

export {
  c
};
/*! Bundled license information:

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
