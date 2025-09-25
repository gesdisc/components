import {
  c
} from "./chunk.SU2EH44I.js";
import {
  x
} from "./chunk.LL3RMB25.js";
import {
  __spreadProps,
  __spreadValues,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/variable-combobox/lib.ts
init_dirname();
init_buffer();
init_process();
function renderSearchResult(listItem, index) {
  return x`<li class="listbox-option-group" data-tree-walker="filter_skip">
        <span class="group-title" data-tree-walker="filter_skip"
            >${listItem.collectionEntryId}</span
        >
        <ul data-tree-walker="filter_skip">
            ${c(
    listItem.variables,
    (variable) => `${variable.collectionShortName}_${variable.collectionVersion}--${variable.longName}`,
    (variable, subIndex) => {
      return x`
                        <li
                            id="listbox-option-${index}.${subIndex}"
                            role="option"
                            class="listbox-option"
                            data-name=${variable.name}
                            data-long-name=${variable.longName}
                            data-event-detail=${variable.eventDetail}
                        >
                            ${variable.longName} (${variable.units})
                        </li>
                    `;
    }
  )}
        </ul>
    </li>`;
}
function removeEmptyCollections(docs) {
  const nonEmptyCollections = docs.filter((doc) => {
    return !!doc.variables.length;
  });
  return nonEmptyCollections;
}
function groupDocsByCollection(docs = []) {
  const groupedDocs = {};
  for (const doc of docs) {
    const key = `${doc.collectionShortName}_${doc.collectionVersion}`;
    Array.isArray(groupedDocs[key]) ? groupedDocs[key].push(doc) : groupedDocs[key] = [doc];
  }
  return Object.entries(groupedDocs).map(([collectionEntryId, variables]) => {
    return {
      collectionEntryId,
      variables
    };
  });
}
function cherryPickDocInfo(docs) {
  return docs.map((doc) => {
    const renderableData = {
      collectionBeginningDateTime: doc["Collection.BeginDateTime"],
      collectionEndingDateTime: doc["Collection.EndDateTime"],
      collectionLongName: doc["Collection.LongName"],
      collectionShortName: doc["Collection.ShortName"],
      collectionVersion: doc["Collection.Version"],
      entryId: doc["Variable.Id"],
      longName: doc["Variable.LongName"],
      name: doc["Variable.Name"],
      standardName: doc["Variable.StandardName"],
      units: doc["Variable.Units"],
      timeInterval: doc["Collection.TimeInterval"]
    };
    return __spreadProps(__spreadValues({}, renderableData), {
      eventDetail: JSON.stringify(__spreadProps(__spreadValues({}, renderableData), {
        datasetLandingPage: doc["Collection.DescriptionUrl"],
        variableLandingPage: doc["Variable.DescriptionUrl"]
      }))
    });
  });
}
function clearSelection(combobox, listbox) {
  combobox.removeAttribute("aria-activedescendant");
  listbox.querySelectorAll("[aria-selected]").forEach((option) => option.removeAttribute("aria-selected"));
}
function walkToOption(walker, combobox, direction = "next") {
  const maybeCurrentElement = direction === "next" ? walker.nextNode() : walker.previousNode();
  if (maybeCurrentElement === null || maybeCurrentElement === walker.root) {
    direction === "next" ? walkToFirst(walker) : walkToLast(walker);
  }
  combobox.setAttribute(
    "aria-activedescendant",
    walker.currentNode.id
  );
  walker.currentNode.setAttribute("aria-selected", "true");
  globalThis.setTimeout(() => {
    ;
    walker.currentNode.scrollIntoView({
      behavior: "auto",
      block: "nearest"
    });
  }, 100);
}
function walkToFirst(walker) {
  walker.parentNode();
  walker.firstChild();
}
function walkToLast(walker) {
  walker.parentNode();
  walker.lastChild();
}
function adaptValueToVariableMetadata(value) {
  const lastUnderscoreIndex = value.lastIndexOf("_");
  const collection = value.substring(0, lastUnderscoreIndex);
  const variableName = value.substring(lastUnderscoreIndex + 1);
  const modifiedCollection = collection.replace(/_v(?=[^_]*$)/, "_");
  return `${modifiedCollection}_${variableName}`;
}

export {
  renderSearchResult,
  removeEmptyCollections,
  groupDocsByCollection,
  cherryPickDocInfo,
  clearSelection,
  walkToOption,
  adaptValueToVariableMetadata
};
