import {
  TerraDialog
} from "./chunk.LIM7KX54.js";
import {
  DataSubsetterHistoryController
} from "./chunk.SLTME5AP.js";
import {
  data_subsetter_history_styles_default
} from "./chunk.P25BARSR.js";
import {
  TerraDataSubsetter
} from "./chunk.7IP3UOTV.js";
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
    this.label = "History";
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
                    <span>${this.label}</span>
                </div>

                <div class="history-panel">
                    <div
                        style="display: flex; align-items: center; justify-content: flex-end; padding: 5px 20px;"
                    >
                        <a
                            href="https://harmony.earthdata.nasa.gov/jobs"
                            target="_blank"
                            rel="noopener noreferrer"
                            style="font-size: 0.98em; color: #0066cc; text-decoration: none; display: flex; align-items: center; gap: 4px;"
                        >
                            View all
                            <terra-icon
                                name="outline-arrow-top-right-on-square"
                                library="heroicons"
                                size="32px"
                            ></terra-icon>
                        </a>
                    </div>
                    <div class="history-list">
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
