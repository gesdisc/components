import {
  deleteDataByKey,
  getDataByKey,
  storeDataByKey
} from "./chunk.OEPHY277.js";
import {
  format
} from "./chunk.M26YYT7Q.js";
import {
  FINAL_STATUSES,
  HarmonyDataService
} from "./chunk.XPUSLKRS.js";
import {
  h,
  i
} from "./chunk.3AZLGGEX.js";
import {
  formatDate,
  getUTCDate,
  isDateRangeContained
} from "./chunk.TZ27CWAV.js";
import {
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __spreadProps,
  __spreadValues,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/time-series/time-series.controller.ts
init_dirname();
init_buffer();
init_process();

// src/lib/dataset.ts
init_dirname();
init_buffer();
init_process();

// src/types.ts
init_dirname();
init_buffer();
init_process();

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

// src/components/time-series/time-series.controller.ts
var NUM_DATAPOINTS_TO_WARN_USER = 5e4;
var REFRESH_HARMONY_DATA_INTERVAL = 2e3;
var CACHE_TTL_MS = 24 * 60 * 60 * 1e3;
var endpoint = "https://8weebb031a.execute-api.us-east-1.amazonaws.com/SIT/timeseries-no-user";
var plotlyDefaultData = {
  // holds the default Plotly configuration options.
  // see https://plotly.com/javascript/time-series/
  type: "scatter",
  mode: "lines",
  line: { color: "rgb(28, 103, 227)" }
  // TODO: configureable?
};
var _userConfirmedWarning, _dataService, _loadTimeSeries, loadTimeSeries_fn, _isCacheValid, isCacheValid_fn, _calculateDataGaps, calculateDataGaps_fn, _fetchTimeSeriesChunk, fetchTimeSeriesChunk_fn, _waitForHarmonyJob, waitForHarmonyJob_fn, _parseTimeSeriesCsv, parseTimeSeriesCsv_fn, _normalizeTimestamp, normalizeTimestamp_fn, _getDataInRange, getDataInRange_fn, _normalizeCoordinates, normalizeCoordinates_fn, _checkDataPointLimits, checkDataPointLimits_fn, _getDataService, getDataService_fn;
var TimeSeriesController = class {
  constructor(host) {
    __privateAdd(this, _loadTimeSeries);
    /**
     * Checks if cached data is still valid (not expired)
     */
    __privateAdd(this, _isCacheValid);
    /**
     * Calculates what data gaps need to be filled from the API
     */
    __privateAdd(this, _calculateDataGaps);
    /**
     * Fetches a single chunk of time series data
     */
    __privateAdd(this, _fetchTimeSeriesChunk);
    __privateAdd(this, _waitForHarmonyJob);
    /**
     * the data we receive for the time series is in CSV format, but with metadata at the top
     * this function parses the CSV data and returns an object of the metadata and the data
     */
    __privateAdd(this, _parseTimeSeriesCsv);
    /**
     * Normalizes timestamp format to be consistent between point-based and area-averaged data
     * Point-based data format: "2013-11-28 23:30"
     * Area-averaged data format: "2009-01-01T00:30:00.000000000"
     * This function converts area-averaged format to match point-based format
     */
    __privateAdd(this, _normalizeTimestamp);
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
    __privateAdd(this, _getDataService);
    __privateAdd(this, _userConfirmedWarning, false);
    __privateAdd(this, _dataService, void 0);
    this.emptyPlotData = [
      __spreadProps(__spreadValues({}, plotlyDefaultData), {
        x: [],
        y: []
      })
    ];
    __privateSet(this, _dataService, __privateMethod(this, _getDataService, getDataService_fn).call(this));
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
    var _a;
    if (!this.host.location || !this.host.catalogVariable) {
      throw new Error(
        "Location and catalog variable are required to get cache key"
      );
    }
    const normalizedCoordinates = __privateMethod(this, _normalizeCoordinates, normalizeCoordinates_fn).call(this, this.host.location.split(","));
    const normalizedLocation = normalizedCoordinates.join(",%20");
    const environment = (_a = this.host.environment) != null ? _a : "prod";
    return `${this.host.catalogVariable.dataFieldId}_${normalizedLocation}_${environment}`;
  }
  /**
   * Called when the user confirms the data point warning
   */
  confirmDataPointWarning() {
    __privateSet(this, _userConfirmedWarning, true);
    this.host.showDataPointWarning = false;
  }
  /**
   * Clears expired cache entries for the current cache key
   */
  async clearExpiredCache() {
    try {
      const cacheKey = this.getCacheKey();
      const existingData = await getDataByKey(
        "time-series" /* TIME_SERIES */,
        cacheKey
      );
      if (existingData && !__privateMethod(this, _isCacheValid, isCacheValid_fn).call(this, existingData)) {
        await deleteDataByKey("time-series" /* TIME_SERIES */, cacheKey);
        console.log(`Cleared expired cache for key: ${cacheKey}`);
      }
    } catch (error) {
      console.warn("Error clearing expired cache:", error);
    }
  }
};
_userConfirmedWarning = new WeakMap();
_dataService = new WeakMap();
_loadTimeSeries = new WeakSet();
loadTimeSeries_fn = async function(signal) {
  const startDate = getUTCDate(this.host.startDate);
  const endDate = getUTCDate(this.host.endDate, true);
  const cacheKey = this.getCacheKey();
  const variableEntryId = this.host.catalogVariable.dataFieldId;
  const existingTerraData = await getDataByKey(
    "time-series" /* TIME_SERIES */,
    cacheKey
  );
  if (existingTerraData && isDateRangeContained(
    startDate,
    endDate,
    new Date(existingTerraData.startDate),
    new Date(existingTerraData.endDate)
  ) && __privateMethod(this, _isCacheValid, isCacheValid_fn).call(this, existingTerraData)) {
    console.log("Returning existing data from cache ", this.getCacheKey());
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
        data: sortedData,
        environment: this.host.environment,
        cachedAt: (/* @__PURE__ */ new Date()).getTime()
      }
    );
  }
  return __privateMethod(this, _getDataInRange, getDataInRange_fn).call(this, {
    metadata: consolidatedResult.metadata,
    data: allData
  });
};
_isCacheValid = new WeakSet();
isCacheValid_fn = function(existingData) {
  if (!existingData.cachedAt) {
    this.clearExpiredCache();
    return false;
  }
  const now = (/* @__PURE__ */ new Date()).getTime();
  const cacheIsExpired = now - existingData.cachedAt > CACHE_TTL_MS;
  if (cacheIsExpired) {
    this.clearExpiredCache();
  }
  return !cacheIsExpired;
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
  let timeSeriesCsvData = "";
  if (!__privateGet(this, _userConfirmedWarning) && !__privateMethod(this, _checkDataPointLimits, checkDataPointLimits_fn).call(this, this.host.catalogVariable, startDate, endDate)) {
    throw new Error("User cancelled data point warning");
  }
  __privateSet(this, _userConfirmedWarning, false);
  const parsedLocation = decodeURIComponent((_a = this.host.location) != null ? _a : ",").split(
    ","
  );
  if (parsedLocation.length === 4) {
    const collection = `${this.host.catalogVariable.dataProductShortName}_${this.host.catalogVariable.dataProductVersion}`;
    const [w, s, e, n] = parsedLocation;
    let subsetOptions = {
      collectionEntryId: collection,
      variableConceptIds: ["parameter_vars"],
      variableEntryIds: [variableEntryId],
      startDate: format(startDate, "yyyy-MM-dd") + "T00%3A00%3A00",
      endDate: format(endDate, "yyyy-MM-dd") + "T23%3A59%3A59",
      format: "text/csv",
      boundingBox: {
        w: parseFloat(w),
        s: parseFloat(s),
        e: parseFloat(e),
        n: parseFloat(n)
      },
      average: "area"
    };
    console.log(
      `Creating a Harmony job for collection, ${collection}, with subset options`,
      subsetOptions
    );
    const job = await __privateGet(this, _dataService).createSubsetJob(subsetOptions, {
      signal,
      bearerToken: this.host.bearerToken,
      environment: this.host.environment
    });
    if (!job) {
      throw new Error("Failed to create subset job");
    }
    const jobStatus = await __privateMethod(this, _waitForHarmonyJob, waitForHarmonyJob_fn).call(this, job, signal);
    const { text } = await __privateGet(this, _dataService).getSubsetJobData(jobStatus, {
      signal,
      bearerToken: this.host.bearerToken,
      environment: this.host.environment
    });
    timeSeriesCsvData = text;
  } else {
    const [lat, lon] = __privateMethod(this, _normalizeCoordinates, normalizeCoordinates_fn).call(this, parsedLocation);
    const url = `${endpoint}?${new URLSearchParams({
      data: variableEntryId,
      lat,
      lon,
      time_start: format(startDate, "yyyy-MM-dd") + "T00%3A00%3A00",
      time_end: format(endDate, "yyyy-MM-dd") + "T23%3A59%3A59"
    }).toString()}`;
    const response = await fetch(url, {
      mode: "cors",
      signal,
      headers: __spreadValues({
        Accept: "application/json"
      }, this.host.bearerToken ? { Authorization: `Bearer: ${this.host.bearerToken}` } : {})
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
    timeSeriesCsvData = await response.text();
  }
  return __privateMethod(this, _parseTimeSeriesCsv, parseTimeSeriesCsv_fn).call(this, timeSeriesCsvData);
};
_waitForHarmonyJob = new WeakSet();
waitForHarmonyJob_fn = function(job, signal) {
  return new Promise(async (resolve) => {
    let jobStatus;
    try {
      jobStatus = await __privateGet(this, _dataService).getSubsetJobStatus(job.jobID, {
        signal,
        bearerToken: this.host.bearerToken,
        environment: this.host.environment
      });
      console.log("Job status", jobStatus);
    } catch (error) {
      console.error("Error checking harmony job status", error);
    }
    if (jobStatus && FINAL_STATUSES.has(jobStatus.status)) {
      console.log("Job is done", jobStatus);
      resolve(jobStatus);
    } else {
      setTimeout(async () => {
        resolve(await __privateMethod(this, _waitForHarmonyJob, waitForHarmonyJob_fn).call(this, job, signal));
      }, REFRESH_HARMONY_DATA_INTERVAL);
    }
  });
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
      if (line.startsWith("Timestamp (UTC)") || line.startsWith("time,")) {
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
        const row = [];
        for (let i2 = 0; i2 < dataHeaders.length; i2++) {
          row.push(parts[i2].trim());
        }
        const timestamp = __privateMethod(this, _normalizeTimestamp, normalizeTimestamp_fn).call(this, row[0]);
        data.push({
          timestamp,
          value: row[1]
        });
      }
    }
  }
  return { metadata, data };
};
_normalizeTimestamp = new WeakSet();
normalizeTimestamp_fn = function(timestamp) {
  try {
    const date = new Date(timestamp);
    return formatDate(date);
  } catch (error) {
    console.warn("Failed to normalize timestamp:", timestamp, error);
    return timestamp;
  }
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
normalizeCoordinates_fn = function(coordinates) {
  return coordinates.map((coord) => Number(coord).toFixed(2));
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
_getDataService = new WeakSet();
getDataService_fn = function() {
  return new HarmonyDataService();
};

export {
  plotlyDefaultData,
  TimeSeriesController
};
