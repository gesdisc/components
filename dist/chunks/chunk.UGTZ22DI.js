import {
  f
} from "./chunk.PH7RLQK2.js";

// node_modules/@lit/task/task.js
var s = { INITIAL: 0, PENDING: 1, COMPLETE: 2, ERROR: 3 };
var i = Symbol();
var h = class {
  get taskComplete() {
    return this.t || (1 === this.status ? this.t = new Promise((t, s2) => {
      this.i = t, this.o = s2;
    }) : 3 === this.status ? this.t = Promise.reject(this.h) : this.t = Promise.resolve(this.l)), this.t;
  }
  constructor(t, s2, i2) {
    var _a, _b, _c;
    this.u = 0, this.status = 0, (this.p = t).addController(this);
    const h2 = "object" == typeof s2 ? s2 : { task: s2, args: i2 };
    this._ = h2.task, this.v = h2.args, this.j = (_a = h2.argsEqual) != null ? _a : r, this.m = h2.onComplete, this.g = h2.onError, this.autoRun = (_b = h2.autoRun) != null ? _b : true, "initialValue" in h2 && (this.l = h2.initialValue, this.status = 2, this.k = (_c = this.A) == null ? void 0 : _c.call(this));
  }
  hostUpdate() {
    true === this.autoRun && this.O();
  }
  hostUpdated() {
    "afterUpdate" === this.autoRun && this.O();
  }
  A() {
    if (void 0 === this.v)
      return;
    const t = this.v();
    if (!Array.isArray(t))
      throw Error("The args function must return an array");
    return t;
  }
  async O() {
    const t = this.A(), s2 = this.k;
    this.k = t, t === s2 || void 0 === t || void 0 !== s2 && this.j(s2, t) || await this.run(t);
  }
  async run(t) {
    var _a, _b, _c, _d, _e;
    let s2, h2;
    t != null ? t : t = this.A(), this.k = t, 1 === this.status ? (_a = this.T) == null ? void 0 : _a.abort() : (this.t = void 0, this.i = void 0, this.o = void 0), this.status = 1, "afterUpdate" === this.autoRun ? queueMicrotask(() => this.p.requestUpdate()) : this.p.requestUpdate();
    const r2 = ++this.u;
    this.T = new AbortController();
    let e = false;
    try {
      s2 = await this._(t, { signal: this.T.signal });
    } catch (t2) {
      e = true, h2 = t2;
    }
    if (this.u === r2) {
      if (s2 === i)
        this.status = 0;
      else {
        if (false === e) {
          try {
            (_b = this.m) == null ? void 0 : _b.call(this, s2);
          } catch (e2) {
          }
          this.status = 2, (_c = this.i) == null ? void 0 : _c.call(this, s2);
        } else {
          try {
            (_d = this.g) == null ? void 0 : _d.call(this, h2);
          } catch (e2) {
          }
          this.status = 3, (_e = this.o) == null ? void 0 : _e.call(this, h2);
        }
        this.l = s2, this.h = h2;
      }
      this.p.requestUpdate();
    }
  }
  abort(t) {
    var _a;
    1 === this.status && ((_a = this.T) == null ? void 0 : _a.abort(t));
  }
  get value() {
    return this.l;
  }
  get error() {
    return this.h;
  }
  render(t) {
    var _a, _b, _c, _d;
    switch (this.status) {
      case 0:
        return (_a = t.initial) == null ? void 0 : _a.call(t);
      case 1:
        return (_b = t.pending) == null ? void 0 : _b.call(t);
      case 2:
        return (_c = t.complete) == null ? void 0 : _c.call(t, this.value);
      case 3:
        return (_d = t.error) == null ? void 0 : _d.call(t, this.error);
      default:
        throw Error("Unexpected status: " + this.status);
    }
  }
};
var r = (s2, i2) => s2 === i2 || s2.length === i2.length && s2.every((s3, h2) => !f(s3, i2[h2]));

export {
  s,
  i,
  h
};
/*! Bundled license information:

@lit/task/task.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
