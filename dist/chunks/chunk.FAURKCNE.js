import {
  TerraDialog
} from "./chunk.2KUHUTX5.js";
import {
  DataSubsetterHistoryController
} from "./chunk.S5LWJDD7.js";
import {
  data_subsetter_history_styles_default
} from "./chunk.GJZZSGUB.js";
import {
  TerraDataSubsetter
} from "./chunk.HX5JJUSQ.js";
import {
  AuthController
} from "./chunk.HJCBOBYP.js";
import {
  TerraIcon
} from "./chunk.6PRBTCJU.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.BFLNWCV5.js";
import {
  e,
  n,
  r
} from "./chunk.KACZXI5J.js";
import {
  T,
  x
} from "./chunk.LL3RMB25.js";
import {
  __decorateClass,
  __privateAdd,
  __privateGet,
  __privateMethod,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/data-subsetter-history/data-subsetter-history.component.ts
init_dirname();
init_buffer();
init_process();
var _controller, _renderHistoryItems, renderHistoryItems_fn, _handleHistoryItemClick, handleHistoryItemClick_fn;
var TerraDataSubsetterHistory = class extends TerraElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _renderHistoryItems);
    __privateAdd(this, _handleHistoryItemClick);
    this.label = "History";
    this.collapsed = true;
    this.hideCancelled = true;
    __privateAdd(this, _controller, new DataSubsetterHistoryController(this));
    this._authController = new AuthController(this);
  }
  connectedCallback() {
    super.connectedCallback();
    this.addController(__privateGet(this, _controller));
  }
  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
  render() {
    const jobs = __privateGet(this, _controller).jobs;
    const hasJobs = jobs && jobs.jobs.length > 0;
    if (!hasJobs) {
      return T;
    }
    return x`
            <div class="${this.collapsed ? "collapsed" : ""}">
                <div class="history-header" @click=${this.toggleCollapsed}>
                    <span>${this.label}</span>
                </div>

                <div class="history-panel">
                    ${hasJobs ? x`
                              <div class="history-link-row">
                                  <label>
                                      <input
                                          type="checkbox"
                                          .checked=${this.hideCancelled}
                                          @change=${(e2) => {
      this.hideCancelled = e2.target.checked;
    }}
                                      />
                                      Hide Cancelled
                                  </label>

                                  <a
                                      href="https://harmony.earthdata.nasa.gov/workflow-ui"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      class="history-link"
                                  >
                                      View all
                                      <terra-icon
                                          name="outline-arrow-top-right-on-square"
                                          library="heroicons"
                                          size="32px"
                                      ></terra-icon>
                                  </a>
                              </div>
                          ` : T}

                    <div class="history-list">
                        ${jobs ? hasJobs ? __privateMethod(this, _renderHistoryItems, renderHistoryItems_fn).call(this, jobs) : x`<div class="history-alert-message">
                                      You haven't made any requests yet.<br />
                                      Get started by
                                      <a
                                          href="#"
                                          class="history-alert-link"
                                          @click=${(e2) => {
      var _a;
      e2.preventDefault();
      this.selectedJob = void 0;
      (_a = this.dialog) == null ? void 0 : _a.show();
    }}
                                      >
                                          creating your first request!</a
                                      >.
                                  </div>` : x`<div class="history-alert-message">
                                  Retrieving your requests....
                              </div>`}
                    </div>
                </div>
            </div>

            <terra-dialog part="dialog" width="1500px">
                <terra-data-subsetter
                    .jobId=${this.selectedJob}
                    .bearerToken=${this.bearerToken}
                ></terra-data-subsetter>
            </terra-dialog>
        `;
  }
};
_controller = new WeakMap();
_renderHistoryItems = new WeakSet();
renderHistoryItems_fn = function(subsetJobs) {
  const filteredJobs = subsetJobs.jobs.slice().filter((job) => {
    if (this.hideCancelled) {
      return job.status !== "canceled" /* CANCELED */;
    }
    return true;
  }).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  if (!filteredJobs.length) {
    return x`
                <div class="history-alert-message">
                    There are no active requests to show.<br />
                    If you'd like, you can
                    <a
                        href="#"
                        class="history-alert-link"
                        @click=${(e2) => {
      var _a;
      e2.preventDefault();
      this.selectedJob = void 0;
      (_a = this.dialog) == null ? void 0 : _a.show();
    }}
                    >
                        create a new request.</a
                    >
                </div>
            `;
  }
  return filteredJobs.map((job) => {
    var _a;
    let fillColor = "#0066cc";
    if (job.status === "successful" /* SUCCESSFUL */ || job.status === "complete_with_errors" /* COMPLETE_WITH_ERRORS */ || job.status === "running_with_errors" /* RUNNING_WITH_ERRORS */) {
      fillColor = "#28a745";
    } else if (job.status === "failed" /* FAILED */) {
      fillColor = "#dc3545";
    } else if (job.status === "canceled" /* CANCELED */) {
      fillColor = "#ffc107";
    }
    const progressLabel = job.status === "failed" /* FAILED */ || job.status === "canceled" /* CANCELED */ ? job.status : `${job.progress}%`;
    const progress = job.status === "failed" /* FAILED */ || job.status === "canceled" /* CANCELED */ ? 100 : job.progress;
    return x`
                <div
                    class="history-item"
                    @click=${__privateMethod(this, _handleHistoryItemClick, handleHistoryItemClick_fn).bind(this, job)}
                >
                    <div class="item-header">
                        <span class="item-title">
                            ${((_a = job.labels) == null ? void 0 : _a.length) ? job.labels.join(" ") : job.request.split(".nasa.gov").pop()}
                        </span>
                    </div>

                    <div class="progress-bar">
                        <div
                            class="progress-fill"
                            style="width: ${progress}%; background-color: ${fillColor}"
                        >
                            ${progressLabel}
                        </div>
                    </div>
                </div>
            `;
  });
};
_handleHistoryItemClick = new WeakSet();
handleHistoryItemClick_fn = function(job) {
  var _a;
  this.selectedJob = job.jobID;
  (_a = this.dialog) == null ? void 0 : _a.show();
};
TerraDataSubsetterHistory.dependencies = {
  "terra-icon": TerraIcon,
  "terra-data-subsetter": TerraDataSubsetter,
  "terra-dialog": TerraDialog
};
TerraDataSubsetterHistory.styles = [component_styles_default, data_subsetter_history_styles_default];
__decorateClass([
  n()
], TerraDataSubsetterHistory.prototype, "label", 2);
__decorateClass([
  n({ attribute: "bearer-token" })
], TerraDataSubsetterHistory.prototype, "bearerToken", 2);
__decorateClass([
  n({ attribute: "always-show", type: Boolean })
], TerraDataSubsetterHistory.prototype, "alwaysShow", 2);
__decorateClass([
  r()
], TerraDataSubsetterHistory.prototype, "collapsed", 2);
__decorateClass([
  r()
], TerraDataSubsetterHistory.prototype, "selectedJob", 2);
__decorateClass([
  r()
], TerraDataSubsetterHistory.prototype, "hideCancelled", 2);
__decorateClass([
  e('[part~="dialog"]')
], TerraDataSubsetterHistory.prototype, "dialog", 2);

export {
  TerraDataSubsetterHistory
};
