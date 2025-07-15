// node_modules/lit-html/directives/map.js
function* o(o2, f) {
  if (void 0 !== o2) {
    let i = 0;
    for (const t of o2)
      yield f(t, i++);
  }
}

export {
  o
};
/*! Bundled license information:

lit-html/directives/map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
