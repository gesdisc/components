import {
  e as e2,
  h,
  l,
  m,
  p,
  s
} from "./chunk.65Q3GMDE.js";
import {
  e,
  i
} from "./chunk.YX63PQ56.js";
import {
  B,
  E
} from "./chunk.JQ2FCDGS.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// node_modules/lit-html/directives/cache.js
init_dirname();
init_buffer();
init_process();
var d = (t) => l(t) ? t._$litType$.h : t.strings;
var h2 = e(class extends i {
  constructor(t) {
    super(t), this.et = /* @__PURE__ */ new WeakMap();
  }
  render(t) {
    return [t];
  }
  update(s2, [e3]) {
    const u = e2(this.it) ? d(this.it) : null, h3 = e2(e3) ? d(e3) : null;
    if (null !== u && (null === h3 || u !== h3)) {
      const e4 = p(s2).pop();
      let o = this.et.get(u);
      if (void 0 === o) {
        const s3 = document.createDocumentFragment();
        o = B(E, s3), o.setConnected(false), this.et.set(u, o);
      }
      m(o, [e4]), s(o, void 0, e4);
    }
    if (null !== h3) {
      if (null === u || u !== h3) {
        const t = this.et.get(h3);
        if (void 0 !== t) {
          const i2 = p(t).pop();
          h(s2), s(s2, void 0, i2), m(s2, [i2]);
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
  h2 as h
};
/*! Bundled license information:

lit-html/directives/cache.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
