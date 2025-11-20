import {
  getVariableEntryId
} from "./chunk.V6GUDCWA.js";
import {
  GiovanniVariableCatalog
} from "./chunk.7A6NO75T.js";
import {
  h
} from "./chunk.CTTYXXNL.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/metadata-catalog/tasks.ts
init_dirname();
init_buffer();
init_process();
var variableCache = /* @__PURE__ */ new Map();
var pendingRequests = /* @__PURE__ */ new Map();
function setHostPropertiesFromVariable(host, variable, variableEntryId) {
  var _a, _b, _c, _d;
  host.startDate = (_b = host.startDate) != null ? _b : (_a = variable.exampleInitialStartDate) == null ? void 0 : _a.toISOString();
  host.endDate = (_d = host.endDate) != null ? _d : (_c = variable.exampleInitialEndDate) == null ? void 0 : _c.toISOString();
  host.catalogVariable = variable;
  host.variableEntryId = variableEntryId;
}
function getFetchVariableTask(host, autoRun = true) {
  const catalog = new GiovanniVariableCatalog();
  return new h(host, {
    task: async (_args) => {
      const variableEntryId = getVariableEntryId(host);
      console.debug("Fetch variable ", variableEntryId);
      if (!variableEntryId) {
        return;
      }
      if (variableCache.has(variableEntryId)) {
        console.debug("Using cached variable ", variableEntryId);
        const cachedVariable = variableCache.get(variableEntryId);
        setHostPropertiesFromVariable(host, cachedVariable, variableEntryId);
        return;
      }
      if (pendingRequests.has(variableEntryId)) {
        console.debug(
          "Waiting for pending request for variable ",
          variableEntryId
        );
        const variable = await pendingRequests.get(variableEntryId);
        if (variable) {
          console.debug("Using cached variable ", variableEntryId);
          setHostPropertiesFromVariable(host, variable, variableEntryId);
        }
        return;
      }
      const requestPromise = catalog.getVariable(variableEntryId);
      pendingRequests.set(variableEntryId, requestPromise);
      try {
        const variable = await requestPromise;
        console.debug("Found variable ", variable);
        if (!variable) {
          return;
        }
        variableCache.set(variableEntryId, variable);
        setHostPropertiesFromVariable(host, variable, variableEntryId);
      } finally {
        pendingRequests.delete(variableEntryId);
      }
    },
    args: () => [host.variableEntryId, host.collection, host.variable],
    autoRun
  });
}

export {
  getFetchVariableTask
};
