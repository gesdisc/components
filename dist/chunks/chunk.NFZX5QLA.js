import {
  GiovanniVariableCatalog
} from "./chunk.NDNXLJCK.js";
import {
  h
} from "./chunk.3AZLGGEX.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/metadata-catalog/utilities.ts
init_dirname();
init_buffer();
init_process();
function getVariableEntryId(host) {
  var _a;
  if (!host.variableEntryId && !(host.collection && host.variable)) {
    return;
  }
  return (_a = host.variableEntryId) != null ? _a : `${host.collection}_${host.variable}`;
}

// src/metadata-catalog/tasks.ts
init_dirname();
init_buffer();
init_process();
function getFetchVariableTask(host, autoRun = true) {
  const catalog = new GiovanniVariableCatalog();
  return new h(host, {
    task: async (_args, { signal }) => {
      var _a, _b, _c, _d;
      const variableEntryId = getVariableEntryId(host);
      console.debug("fetch variable ", variableEntryId);
      if (!variableEntryId) {
        return;
      }
      const variable = await catalog.getVariable(variableEntryId, {
        signal
      });
      console.debug("found variable ", variable);
      if (!variable) {
        return;
      }
      host.startDate = (_b = host.startDate) != null ? _b : (_a = variable.exampleInitialStartDate) == null ? void 0 : _a.toISOString();
      host.endDate = (_d = host.endDate) != null ? _d : (_c = variable.exampleInitialEndDate) == null ? void 0 : _c.toISOString();
      host.catalogVariable = variable;
      host.variableEntryId = variableEntryId;
    },
    args: () => [host.variableEntryId, host.collection, host.variable],
    autoRun
  });
}

export {
  getVariableEntryId,
  getFetchVariableTask
};
