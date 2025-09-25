import {
  e,
  i
} from "./chunk.5WLTVPIO.js";
import {
  e as e2,
  j as j2,
  l,
  m,
  p,
  r
} from "./chunk.HWIFPU5V.js";
import {
  T,
  j
} from "./chunk.LL3RMB25.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// node_modules/lit-html/directives/cache.js
init_dirname();
init_buffer();
init_process();
var d = (t) => l(t) ? t._$litType$.h : t.strings;
var h = e(class extends i {
  constructor(t) {
    super(t), this.et = /* @__PURE__ */ new WeakMap();
  }
  render(t) {
    return [t];
  }
  update(s, [e3]) {
    const u = e2(this.it) ? d(this.it) : null, h2 = e2(e3) ? d(e3) : null;
    if (null !== u && (null === h2 || u !== h2)) {
      const e4 = p(s).pop();
      let o = this.et.get(u);
      if (void 0 === o) {
        const s2 = document.createDocumentFragment();
        o = j(T, s2), o.setConnected(false), this.et.set(u, o);
      }
      m(o, [e4]), r(o, void 0, e4);
    }
    if (null !== h2) {
      if (null === u || u !== h2) {
        const t = this.et.get(h2);
        if (void 0 !== t) {
          const i2 = p(t).pop();
          j2(s), r(s, void 0, i2), m(s, [i2]);
        }
      }
      this.it = e3;
    } else
      this.it = void 0;
    return this.render(e3);
  }
});

// node_modules/lit/directives/cache.js
init_dirname();
init_buffer();
init_process();

export {
  h
};
/*! Bundled license information:

lit-html/directives/cache.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
