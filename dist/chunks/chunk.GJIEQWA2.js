import {
  format
} from "./chunk.FCGFGTMF.js";
import {
  h,
  i
} from "./chunk.UGTZ22DI.js";
import {
  formatDate,
  getUTCDate
} from "./chunk.EZMKGB3F.js";
import {
  __asyncGenerator,
  __await,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __spreadProps,
  __spreadValues
} from "./chunk.6JHIJHTB.js";

// src/lib/dataset.ts
var MAX_DATAPOINTS_PER_REQUEST = 2e5;
var MILLIS_IN_HOUR = 1e3 * 60 * 60;
var MILLIS_IN_DAY = MILLIS_IN_HOUR * 24;
function calculateDataPoints(timeInterval, startDate, endDate) {
  const diffMs = endDate.getTime() - startDate.getTime();
  switch (timeInterval) {
    case "half-hourly" /* HalfHourly */:
      return Math.floor(diffMs / (MILLIS_IN_HOUR / 2)) + 1;
    case "hourly" /* Hourly */:
      return Math.floor(diffMs / MILLIS_IN_HOUR) + 1;
    case "3-hourly" /* ThreeHourly */:
      return Math.floor(diffMs / (MILLIS_IN_HOUR * 3)) + 1;
    case "daily" /* Daily */:
      return Math.floor(diffMs / MILLIS_IN_DAY) + 1;
    case "weekly" /* Weekly */:
      return Math.floor(diffMs / (MILLIS_IN_DAY * 7)) + 1;
    default:
      throw new Error(`Unsupported time interval: ${timeInterval}`);
  }
}
function calculateDateChunks(timeInterval, startDate, endDate) {
  const totalDataPoints = calculateDataPoints(timeInterval, startDate, endDate);
  if (totalDataPoints <= MAX_DATAPOINTS_PER_REQUEST) {
    return [{ start: startDate, end: endDate }];
  }
  const chunks = [];
  const totalDurationMs = endDate.getTime() - startDate.getTime();
  const numChunks = Math.ceil(totalDataPoints / MAX_DATAPOINTS_PER_REQUEST);
  const chunkSizeMs = Math.floor(totalDurationMs / numChunks);
  let chunkStart = new Date(startDate);
  let remainingDuration = totalDurationMs;
  while (remainingDuration > 0) {
    let potentialChunkEnd = new Date(chunkStart.getTime() + chunkSizeMs);
    if (potentialChunkEnd > endDate) {
      potentialChunkEnd = endDate;
    }
    const chunkDataPoints = calculateDataPoints(
      timeInterval,
      chunkStart,
      potentialChunkEnd
    );
    if (chunkDataPoints > MAX_DATAPOINTS_PER_REQUEST) {
      const maxDurationMs = chunkSizeMs * MAX_DATAPOINTS_PER_REQUEST / chunkDataPoints;
      potentialChunkEnd = new Date(chunkStart.getTime() + maxDurationMs);
    }
    chunks.push({
      start: new Date(chunkStart),
      end: new Date(potentialChunkEnd)
    });
    remainingDuration = endDate.getTime() - potentialChunkEnd.getTime();
    chunkStart = potentialChunkEnd;
  }
  return chunks;
}

// node_modules/idb/build/index.js
var instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
var idbProxyableTypes;
var cursorAdvanceMethods;
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
var transactionDoneMap = /* @__PURE__ */ new WeakMap();
var transformCache = /* @__PURE__ */ new WeakMap();
var reverseTransformCache = /* @__PURE__ */ new WeakMap();
function promisifyRequest(request) {
  const promise = new Promise((resolve, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error);
    };
    const success = () => {
      resolve(wrap(request.result));
      unlisten();
    };
    const error = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error);
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx))
    return;
  const done = new Promise((resolve, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error);
      tx.removeEventListener("abort", error);
    };
    const complete = () => {
      resolve();
      unlisten();
    };
    const error = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error);
    tx.addEventListener("abort", error);
  });
  transactionDoneMap.set(tx, done);
}
var idbProxyTraps = {
  get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      if (prop === "done")
        return transactionDoneMap.get(target);
      if (prop === "store") {
        return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    return wrap(target[prop]);
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has(target, prop) {
    if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
      return true;
    }
    return prop in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(this.request);
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function")
    return wrapFunction(value);
  if (value instanceof IDBTransaction)
    cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest)
    return promisifyRequest(value);
  if (transformCache.has(value))
    return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
var unwrap = (value) => reverseTransformCache.get(value);
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
  const request = indexedDB.open(name, version);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
    });
  }
  if (blocked) {
    request.addEventListener("blocked", (event) => blocked(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      event.oldVersion,
      event.newVersion,
      event
    ));
  }
  openPromise.then((db) => {
    if (terminated)
      db.addEventListener("close", () => terminated());
    if (blocking) {
      db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
    }
  }).catch(() => {
  });
  return openPromise;
}
var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
var writeMethods = ["put", "add", "delete", "clear"];
var cachedMethods = /* @__PURE__ */ new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }
  if (cachedMethods.get(prop))
    return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
  ) {
    return;
  }
  const method = async function(storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex)
      target2 = target2.index(args.shift());
    return (await Promise.all([
      target2[targetFuncName](...args),
      isWrite && tx.done
    ]))[0];
  };
  cachedMethods.set(prop, method);
  return method;
}
replaceTraps((oldTraps) => __spreadProps(__spreadValues({}, oldTraps), {
  get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
  has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));
var advanceMethodProps = ["continue", "continuePrimaryKey", "advance"];
var methodMap = {};
var advanceResults = /* @__PURE__ */ new WeakMap();
var ittrProxiedCursorToOriginalProxy = /* @__PURE__ */ new WeakMap();
var cursorIteratorTraps = {
  get(target, prop) {
    if (!advanceMethodProps.includes(prop))
      return target[prop];
    let cachedFunc = methodMap[prop];
    if (!cachedFunc) {
      cachedFunc = methodMap[prop] = function(...args) {
        advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
      };
    }
    return cachedFunc;
  }
};
function iterate(...args) {
  return __asyncGenerator(this, null, function* () {
    let cursor = this;
    if (!(cursor instanceof IDBCursor)) {
      cursor = yield new __await(cursor.openCursor(...args));
    }
    if (!cursor)
      return;
    cursor = cursor;
    const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
    ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
    reverseTransformCache.set(proxiedCursor, unwrap(cursor));
    while (cursor) {
      yield proxiedCursor;
      cursor = yield new __await(advanceResults.get(proxiedCursor) || cursor.continue());
      advanceResults.delete(proxiedCursor);
    }
  });
}
function isIteratorProp(target, prop) {
  return prop === Symbol.asyncIterator && instanceOfAny(target, [IDBIndex, IDBObjectStore, IDBCursor]) || prop === "iterate" && instanceOfAny(target, [IDBIndex, IDBObjectStore]);
}
replaceTraps((oldTraps) => __spreadProps(__spreadValues({}, oldTraps), {
  get(target, prop, receiver) {
    if (isIteratorProp(target, prop))
      return iterate;
    return oldTraps.get(target, prop, receiver);
  },
  has(target, prop) {
    return isIteratorProp(target, prop) || oldTraps.has(target, prop);
  }
}));

// src/internal/indexeddb.ts
var DB_NAME = "terra";
async function getDb() {
  return await openDB(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore("time-series" /* TIME_SERIES */, {
        keyPath: "key"
      });
    }
  });
}
async function withDb(callback) {
  const db = await getDb();
  try {
    return await callback(db);
  } finally {
    await db.close();
  }
}
function getDataByKey(store, key) {
  return withDb(async (db) => {
    return await db.get(store, key);
  });
}
function storeDataByKey(store, key, data) {
  return withDb(async (db) => {
    await db.put(store, __spreadValues({
      key
    }, data));
  });
}

// src/components/time-series/time-series.controller.ts
var NUM_DATAPOINTS_TO_WARN_USER = 5e4;
var endpoint = "https://8weebb031a.execute-api.us-east-1.amazonaws.com/SIT/timeseries-no-user";
var plotlyDefaultData = {
  // holds the default Plotly configuration options.
  // see https://plotly.com/javascript/time-series/
  type: "scatter",
  mode: "lines",
  line: { color: "rgb(28, 103, 227)" }
  // TODO: configureable?
};
var _bearerToken, _userConfirmedWarning, _loadTimeSeries, loadTimeSeries_fn, _calculateDataGaps, calculateDataGaps_fn, _fetchTimeSeriesChunk, fetchTimeSeriesChunk_fn, _parseTimeSeriesCsv, parseTimeSeriesCsv_fn, _getDataInRange, getDataInRange_fn, _normalizeCoordinates, normalizeCoordinates_fn, _checkDataPointLimits, checkDataPointLimits_fn;
var TimeSeriesController = class {
  constructor(host, bearerToken) {
    __privateAdd(this, _loadTimeSeries);
    /**
     * Calculates what data gaps need to be filled from the API
     */
    __privateAdd(this, _calculateDataGaps);
    /**
     * Fetches a single chunk of time series data
     */
    __privateAdd(this, _fetchTimeSeriesChunk);
    /**
     * the data we receive for the time series is in CSV format, but with metadata at the top
     * this function parses the CSV data and returns an object of the metadata and the data
     */
    __privateAdd(this, _parseTimeSeriesCsv);
    /**
     * given a set of data and a date range, will return only the data that falls within that range
     */
    __privateAdd(this, _getDataInRange);
    /**
     * Normalizes coordinates to 2 decimal places
     */
    __privateAdd(this, _normalizeCoordinates);
    /**
     * Checks if the current date range will exceed data point limits
     * Returns true if it's safe to proceed, false if confirmation is needed
     */
    __privateAdd(this, _checkDataPointLimits);
    __privateAdd(this, _bearerToken, null);
    __privateAdd(this, _userConfirmedWarning, false);
    this.emptyPlotData = [
      __spreadProps(__spreadValues({}, plotlyDefaultData), {
        x: [],
        y: []
      })
    ];
    __privateSet(this, _bearerToken, bearerToken);
    this.host = host;
    this.task = new h(host, {
      // passing the signal in so the fetch request will be aborted when the task is aborted
      task: async (_args, { signal }) => {
        if (!this.host.catalogVariable || !this.host.startDate || !this.host.endDate || !this.host.location) {
          return i;
        }
        const timeSeries = await __privateMethod(this, _loadTimeSeries, loadTimeSeries_fn).call(this, signal);
        this.lastTaskValue = [
          __spreadProps(__spreadValues({}, plotlyDefaultData), {
            x: timeSeries.data.map((row) => row.timestamp),
            y: timeSeries.data.map((row) => row.value)
          })
        ];
        this.host.emit("terra-time-series-data-change", {
          detail: {
            data: timeSeries,
            variable: this.host.catalogVariable,
            startDate: formatDate(this.host.startDate),
            endDate: formatDate(this.host.endDate),
            location: this.host.location
          }
        });
        return this.lastTaskValue;
      },
      args: () => [
        this.host.catalogVariable,
        this.host.startDate,
        this.host.endDate,
        this.host.location
      ]
    });
  }
  render(renderFunctions) {
    return this.task.render(renderFunctions);
  }
  /**
   * Gets the cache key for the current time series data
   */
  getCacheKey() {
    if (!this.host.location || !this.host.catalogVariable) {
      throw new Error(
        "Location and catalog variable are required to get cache key"
      );
    }
    const [lat, lon] = this.host.location.split(",");
    const normalizedLocation = __privateMethod(this, _normalizeCoordinates, normalizeCoordinates_fn).call(this, lat, lon);
    const location = `${normalizedLocation.lat},%20${normalizedLocation.lon}`;
    return `${this.host.catalogVariable.dataFieldId}_${location}`;
  }
  /**
   * Called when the user confirms the data point warning
   */
  confirmDataPointWarning() {
    __privateSet(this, _userConfirmedWarning, true);
    this.host.showDataPointWarning = false;
  }
};
_bearerToken = new WeakMap();
_userConfirmedWarning = new WeakMap();
_loadTimeSeries = new WeakSet();
loadTimeSeries_fn = async function(signal) {
  const startDate = getUTCDate(this.host.startDate);
  const endDate = getUTCDate(this.host.endDate);
  const cacheKey = this.getCacheKey();
  const variableEntryId = this.host.catalogVariable.dataFieldId;
  const existingTerraData = await getDataByKey(
    "time-series" /* TIME_SERIES */,
    cacheKey
  );
  if (existingTerraData && startDate.getTime() >= new Date(existingTerraData.startDate).getTime() && endDate.getTime() <= new Date(existingTerraData.endDate).getTime()) {
    return __privateMethod(this, _getDataInRange, getDataInRange_fn).call(this, existingTerraData);
  }
  const dataGaps = __privateMethod(this, _calculateDataGaps, calculateDataGaps_fn).call(this, existingTerraData);
  if (dataGaps.length === 0 && existingTerraData) {
    return __privateMethod(this, _getDataInRange, getDataInRange_fn).call(this, existingTerraData);
  }
  const allChunks = [];
  for (const gap of dataGaps) {
    const chunks = calculateDateChunks(
      this.host.catalogVariable.dataProductTimeInterval,
      gap.start,
      gap.end
    );
    allChunks.push(...chunks);
  }
  const chunkResults = await Promise.all(
    allChunks.map(async (chunk) => {
      const result = await __privateMethod(this, _fetchTimeSeriesChunk, fetchTimeSeriesChunk_fn).call(this, variableEntryId, chunk.start, chunk.end, signal);
      return result;
    })
  );
  let allData = (existingTerraData == null ? void 0 : existingTerraData.data) || [];
  let metadata = {};
  for (const chunkResult of chunkResults) {
    allData = [...allData, ...chunkResult.data];
    metadata = __spreadValues(__spreadValues({}, metadata), chunkResult.metadata);
  }
  const consolidatedResult = {
    metadata,
    data: allData
  };
  if (allData.length > 0) {
    const sortedData = [...allData].sort(
      (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
    await storeDataByKey(
      "time-series" /* TIME_SERIES */,
      cacheKey,
      {
        variableEntryId,
        key: cacheKey,
        startDate: sortedData[0].timestamp,
        endDate: sortedData[sortedData.length - 1].timestamp,
        metadata: consolidatedResult.metadata,
        data: sortedData
      }
    );
  }
  return __privateMethod(this, _getDataInRange, getDataInRange_fn).call(this, {
    metadata: consolidatedResult.metadata,
    data: allData
  });
};
_calculateDataGaps = new WeakSet();
calculateDataGaps_fn = function(existingData) {
  const start = getUTCDate(this.host.startDate);
  const end = getUTCDate(this.host.endDate);
  if (!existingData) {
    return [{ start, end }];
  }
  const existingStartDate = new Date(existingData.startDate);
  const existingEndDate = new Date(existingData.endDate);
  const gaps = [];
  if (start < existingStartDate) {
    gaps.push({ start, end: existingStartDate });
  }
  if (end > existingEndDate) {
    gaps.push({ start: existingEndDate, end });
  }
  return gaps;
};
_fetchTimeSeriesChunk = new WeakSet();
fetchTimeSeriesChunk_fn = async function(variableEntryId, startDate, endDate, signal) {
  var _a;
  if (!__privateGet(this, _userConfirmedWarning) && !__privateMethod(this, _checkDataPointLimits, checkDataPointLimits_fn).call(this, this.host.catalogVariable, startDate, endDate)) {
    throw new Error("User cancelled data point warning");
  }
  __privateSet(this, _userConfirmedWarning, false);
  const [lat, lon] = decodeURIComponent((_a = this.host.location) != null ? _a : ",").split(",");
  const normalizedLocation = __privateMethod(this, _normalizeCoordinates, normalizeCoordinates_fn).call(this, lat, lon);
  const url = `${endpoint}?${new URLSearchParams({
    data: variableEntryId,
    lat: normalizedLocation.lat,
    lon: normalizedLocation.lon,
    time_start: format(startDate, "yyyy-MM-dd") + "T00%3A00%3A00",
    time_end: format(endDate, "yyyy-MM-dd") + "T23%3A59%3A59"
  }).toString()}`;
  const response = await fetch(url, {
    mode: "cors",
    signal,
    headers: __spreadValues({
      Accept: "application/json"
    }, __privateGet(this, _bearerToken) ? { Authorization: `Bearer: ${__privateGet(this, _bearerToken)}` } : {})
  });
  if (!response.ok) {
    this.host.dispatchEvent(
      new CustomEvent("terra-time-series-error", {
        detail: {
          status: response.status,
          message: response.statusText
        },
        bubbles: true,
        composed: true
      })
    );
    throw new Error(
      `Failed to fetch time series data: ${response.statusText}`
    );
  }
  return __privateMethod(this, _parseTimeSeriesCsv, parseTimeSeriesCsv_fn).call(this, await response.text());
};
_parseTimeSeriesCsv = new WeakSet();
parseTimeSeriesCsv_fn = function(text) {
  const lines = text.split("\n").map((line) => line.trim()).filter(Boolean);
  const metadata = {};
  const data = [];
  let inDataSection = false;
  let dataHeaders = [];
  for (const line of lines) {
    if (!inDataSection) {
      if (line === "Timestamp (UTC),Data") {
        dataHeaders = line.split(",").map((h2) => h2.trim());
        inDataSection = true;
        continue;
      }
      const [key, value] = line.split(",");
      if (key && value !== void 0) {
        metadata[key.trim()] = value.trim();
      }
    } else {
      const parts = line.split(",");
      if (parts.length === dataHeaders.length) {
        const row = {};
        for (let i2 = 0; i2 < dataHeaders.length; i2++) {
          row[dataHeaders[i2]] = parts[i2].trim();
        }
        data.push({
          timestamp: row["Timestamp (UTC)"],
          value: row["Data"]
        });
      }
    }
  }
  return { metadata, data };
};
_getDataInRange = new WeakSet();
getDataInRange_fn = function(data) {
  const startDate = getUTCDate(this.host.startDate);
  const endDate = getUTCDate(this.host.endDate);
  return __spreadProps(__spreadValues({}, data), {
    data: data.data.filter((row) => {
      const timestamp = new Date(row.timestamp);
      return timestamp >= startDate && timestamp <= endDate;
    }).sort(
      (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    )
  });
};
_normalizeCoordinates = new WeakSet();
normalizeCoordinates_fn = function(lat, lon) {
  return {
    lat: Number(lat).toFixed(2),
    lon: Number(lon).toFixed(2)
  };
};
_checkDataPointLimits = new WeakSet();
checkDataPointLimits_fn = function(catalogVariable, startDate, endDate) {
  this.host.estimatedDataPoints = calculateDataPoints(
    catalogVariable.dataProductTimeInterval,
    startDate,
    endDate
  );
  if (this.host.estimatedDataPoints < NUM_DATAPOINTS_TO_WARN_USER) {
    return true;
  }
  this.host.showDataPointWarning = true;
  return false;
};

export {
  DB_NAME,
  getDataByKey,
  plotlyDefaultData,
  TimeSeriesController
};
