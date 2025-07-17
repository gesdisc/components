import {
  TerraDialog
} from "./chunk.LIM7KX54.js";
import {
  DataSubsetterHistoryController
} from "./chunk.SLTME5AP.js";
import {
  data_subsetter_history_styles_default
} from "./chunk.TOHRWIE5.js";
import {
  TerraDataSubsetter
} from "./chunk.6RMH53AN.js";
import {
  TerraIcon
} from "./chunk.JFQ72RBA.js";
import {
  TerraElement,
  component_styles_default
} from "./chunk.6PUQ3DDO.js";
import {
  e,
  n,
  r
} from "./chunk.2FFSUM6T.js";
import {
  T,
  x
} from "./chunk.PQFHJHNO.js";
import {
  __decorateClass,
  __privateAdd,
  __privateGet,
  __privateMethod
} from "./chunk.6JHIJHTB.js";

// src/components/data-subsetter-history/data-subsetter-history.component.ts
var _controller, _renderHistoryItems, renderHistoryItems_fn, _handleHistoryItemClick, handleHistoryItemClick_fn;
var TerraDataSubsetterHistory = class extends TerraElement {
  constructor() {
    super(...arguments);
    __privateAdd(this, _renderHistoryItems);
    __privateAdd(this, _handleHistoryItemClick);
    this.collapsed = false;
    __privateAdd(this, _controller, new DataSubsetterHistoryController(this));
  }
  connectedCallback() {
    super.connectedCallback();
    this.addController(__privateGet(this, _controller));
  }
  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
  render() {
    return x`
            <div class="${this.collapsed ? "collapsed" : ""}">
                <div class="history-header" @click=${this.toggleCollapsed}>
                    <span class="count">0:1</span>
                    <span>History</span>
                </div>

                <div class="history-panel">
                    <div class="tabs">
                        <button class="tab active">
                            All <span class="count">1</span>
                        </button>
                        <button class="tab">Done <span class="count">0</span></button>
                        <button class="tab">
                            Active <span class="count">1</span>
                        </button>
                    </div>

                    <div class="history-list">
                        ${this.selectedJob}
                        ${__privateGet(this, _controller).jobs ? __privateMethod(this, _renderHistoryItems, renderHistoryItems_fn).call(this, __privateGet(this, _controller).jobs) : T}
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
  return subsetJobs.jobs.slice().sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ).map((job) => {
    var _a;
    let fillColor = "#0066cc";
    if (job.status === "successful") {
      fillColor = "#28a745";
    } else if (job.status === "failed") {
      fillColor = "#dc3545";
    } else if (job.status === "canceled" || job.status === "complete_with_errors" || job.status === "running_with_errors") {
      fillColor = "#ffc107";
    }
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
                                style="width: ${job.progress}%; background-color: ${fillColor}"
                            >
                                ${job.progress}%
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
  n({ attribute: "bearer-token" })
], TerraDataSubsetterHistory.prototype, "bearerToken", 2);
__decorateClass([
  r()
], TerraDataSubsetterHistory.prototype, "collapsed", 2);
__decorateClass([
  r()
], TerraDataSubsetterHistory.prototype, "selectedJob", 2);
__decorateClass([
  e('[part~="dialog"]')
], TerraDataSubsetterHistory.prototype, "dialog", 2);

export {
  TerraDataSubsetterHistory
};
