import {
  e,
  i,
  t
} from "./chunk.5WLTVPIO.js";
import {
  h,
  m,
  p,
  r,
  v
} from "./chunk.HWIFPU5V.js";
import {
  w
} from "./chunk.LL3RMB25.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// node_modules/lit-html/directives/repeat.js
init_dirname();
init_buffer();
init_process();
var u = (e2, s, t2) => {
  const r2 = /* @__PURE__ */ new Map();
  for (let l = s; l <= t2; l++)
    r2.set(e2[l], l);
  return r2;
};
var c = e(class extends i {
  constructor(e2) {
    if (super(e2), e2.type !== t.CHILD)
      throw Error("repeat() can only be used in text expressions");
  }
  dt(e2, s, t2) {
    let r2;
    void 0 === t2 ? t2 = s : void 0 !== s && (r2 = s);
    const l = [], o = [];
    let i2 = 0;
    for (const s2 of e2)
      l[i2] = r2 ? r2(s2, i2) : i2, o[i2] = t2(s2, i2), i2++;
    return { values: o, keys: l };
  }
  render(e2, s, t2) {
    return this.dt(e2, s, t2).values;
  }
  update(s, [t2, r2, c2]) {
    var _a;
    const d = p(s), { values: p2, keys: a } = this.dt(t2, r2, c2);
    if (!Array.isArray(d))
      return this.ut = a, p2;
    const h2 = (_a = this.ut) != null ? _a : this.ut = [], v2 = [];
    let m2, y, x = 0, j = d.length - 1, k = 0, w2 = p2.length - 1;
    for (; x <= j && k <= w2; )
      if (null === d[x])
        x++;
      else if (null === d[j])
        j--;
      else if (h2[x] === a[k])
        v2[k] = v(d[x], p2[k]), x++, k++;
      else if (h2[j] === a[w2])
        v2[w2] = v(d[j], p2[w2]), j--, w2--;
      else if (h2[x] === a[w2])
        v2[w2] = v(d[x], p2[w2]), r(s, v2[w2 + 1], d[x]), x++, w2--;
      else if (h2[j] === a[k])
        v2[k] = v(d[j], p2[k]), r(s, d[x], d[j]), j--, k++;
      else if (void 0 === m2 && (m2 = u(a, k, w2), y = u(h2, x, j)), m2.has(h2[x]))
        if (m2.has(h2[j])) {
          const e2 = y.get(a[k]), t3 = void 0 !== e2 ? d[e2] : null;
          if (null === t3) {
            const e3 = r(s, d[x]);
            v(e3, p2[k]), v2[k] = e3;
          } else
            v2[k] = v(t3, p2[k]), r(s, d[x], t3), d[e2] = null;
          k++;
        } else
          h(d[j]), j--;
      else
        h(d[x]), x++;
    for (; k <= w2; ) {
      const e2 = r(s, v2[w2 + 1]);
      v(e2, p2[k]), v2[k++] = e2;
    }
    for (; x <= j; ) {
      const e2 = d[x++];
      null !== e2 && h(e2);
    }
    return this.ut = a, m(s, v2), w;
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
