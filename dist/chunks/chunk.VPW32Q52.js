import {
  e,
  i,
  t
} from "./chunk.5WLTVPIO.js";
import {
  f
} from "./chunk.HWIFPU5V.js";
import {
  T
} from "./chunk.LL3RMB25.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// node_modules/lit-html/directives/ref.js
init_dirname();
init_buffer();
init_process();

// node_modules/lit-html/async-directive.js
init_dirname();
init_buffer();
init_process();
var s = (i2, t2) => {
  var _a;
  const e3 = i2._$AN;
  if (void 0 === e3)
    return false;
  for (const i3 of e3)
    (_a = i3._$AO) == null ? void 0 : _a.call(i3, t2, false), s(i3, t2);
  return true;
};
var o = (i2) => {
  let t2, e3;
  do {
    if (void 0 === (t2 = i2._$AM))
      break;
    e3 = t2._$AN, e3.delete(i2), i2 = t2;
  } while (0 === (e3 == null ? void 0 : e3.size));
};
var r = (i2) => {
  for (let t2; t2 = i2._$AM; i2 = t2) {
    let e3 = t2._$AN;
    if (void 0 === e3)
      t2._$AN = e3 = /* @__PURE__ */ new Set();
    else if (e3.has(i2))
      break;
    e3.add(i2), c(t2);
  }
};
function h(i2) {
  void 0 !== this._$AN ? (o(this), this._$AM = i2, r(this)) : this._$AM = i2;
}
function n(i2, t2 = false, e3 = 0) {
  const r2 = this._$AH, h3 = this._$AN;
  if (void 0 !== h3 && 0 !== h3.size)
    if (t2)
      if (Array.isArray(r2))
        for (let i3 = e3; i3 < r2.length; i3++)
          s(r2[i3], false), o(r2[i3]);
      else
        null != r2 && (s(r2, false), o(r2));
    else
      s(this, i2);
}
var c = (i2) => {
  var _a, _b;
  i2.type == t.CHILD && ((_a = i2._$AP) != null ? _a : i2._$AP = n, (_b = i2._$AQ) != null ? _b : i2._$AQ = h);
};
var f2 = class extends i {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i2, t2, e3) {
    super._$AT(i2, t2, e3), r(this), this.isConnected = i2._$AU;
  }
  _$AO(i2, t2 = true) {
    var _a, _b;
    i2 !== this.isConnected && (this.isConnected = i2, i2 ? (_a = this.reconnected) == null ? void 0 : _a.call(this) : (_b = this.disconnected) == null ? void 0 : _b.call(this)), t2 && (s(this, i2), o(this));
  }
  setValue(t2) {
    if (f(this._$Ct))
      this._$Ct._$AI(t2, this);
    else {
      const i2 = [...this._$Ct._$AH];
      i2[this._$Ci] = t2, this._$Ct._$AI(i2, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
};

// node_modules/lit-html/directives/ref.js
var e2 = () => new h2();
var h2 = class {
};
var o2 = /* @__PURE__ */ new WeakMap();
var n2 = e(class extends f2 {
  render(i2) {
    return T;
  }
  update(i2, [s2]) {
    var _a;
    const e3 = s2 !== this.Y;
    return e3 && void 0 !== this.Y && this.rt(void 0), (e3 || this.lt !== this.ct) && (this.Y = s2, this.ht = (_a = i2.options) == null ? void 0 : _a.host, this.rt(this.ct = i2.element)), T;
  }
  rt(t2) {
    var _a;
    if ("function" == typeof this.Y) {
      const i2 = (_a = this.ht) != null ? _a : globalThis;
      let s2 = o2.get(i2);
      void 0 === s2 && (s2 = /* @__PURE__ */ new WeakMap(), o2.set(i2, s2)), void 0 !== s2.get(this.Y) && this.Y.call(this.ht, void 0), s2.set(this.Y, t2), void 0 !== t2 && this.Y.call(this.ht, t2);
    } else
      this.Y.value = t2;
  }
  get lt() {
    var _a, _b, _c;
    return "function" == typeof this.Y ? (_b = o2.get((_a = this.ht) != null ? _a : globalThis)) == null ? void 0 : _b.get(this.Y) : (_c = this.Y) == null ? void 0 : _c.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});

// node_modules/lit/directives/ref.js
init_dirname();
init_buffer();
init_process();

export {
  e2 as e,
  n2 as n
};
/*! Bundled license information:

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
