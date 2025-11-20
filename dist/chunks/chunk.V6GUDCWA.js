import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/metadata-catalog/utilities.ts
init_dirname();
init_buffer();
init_process();
function getGranuleUrl(granule) {
  const getDataUrl = granule.relatedUrls.find((url) => url.type === "GET DATA");
  return getDataUrl == null ? void 0 : getDataUrl.url;
}
function getVariableEntryId(host) {
  var _a;
  if (!host.variableEntryId && !(host.collection && host.variable)) {
    return;
  }
  return (_a = host.variableEntryId) != null ? _a : `${host.collection}_${host.variable}`;
}
function formatGranuleSize(sizeInMB) {
  const UNITS = ["MB", "GB", "TB", "PB"];
  const THRESHOLD = 1e3;
  let size = sizeInMB;
  let unitIndex = 0;
  while (size >= THRESHOLD && unitIndex < UNITS.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  const decimals = size >= 100 ? 0 : size >= 10 ? 1 : 2;
  return `${size.toFixed(decimals)} ${UNITS[unitIndex]}`;
}
function calculateMeanGranuleSize(granules) {
  const sizes = granules.map((granule) => calculateGranuleSize(granule, "MB"));
  return sizes.reduce((a, b) => a + b, 0) / sizes.length;
}
function calculateGranuleSize(granule, unit) {
  const archiveInfo = granule.dataGranule.archiveAndDistributionInformation;
  if (!archiveInfo || !Array.isArray(archiveInfo)) {
    return 0;
  }
  const BYTES_PER_UNIT = {
    KB: 1024,
    MB: 1024 * 1024,
    GB: 1024 * 1024 * 1024,
    TB: 1024 * 1024 * 1024 * 1024,
    PB: 1024 * 1024 * 1024 * 1024 * 1024,
    NA: 0
  };
  let totalBytes = 0;
  function processItem(item) {
    if (item.sizeInBytes != null) {
      return item.sizeInBytes;
    }
    if (item.size != null && item.sizeUnit) {
      const conversionFactor = BYTES_PER_UNIT[item.sizeUnit];
      if (conversionFactor) {
        return item.size * conversionFactor;
      }
    }
    return 0;
  }
  function processFilePackageOrFile(item) {
    let itemBytes = processItem(item);
    if (item.files && Array.isArray(item.files)) {
      for (const file of item.files) {
        itemBytes += processItem(file);
      }
    }
    return itemBytes;
  }
  for (const item of archiveInfo) {
    totalBytes += processFilePackageOrFile(item);
  }
  return totalBytes / BYTES_PER_UNIT[unit];
}

export {
  getGranuleUrl,
  getVariableEntryId,
  formatGranuleSize,
  calculateMeanGranuleSize,
  calculateGranuleSize
};
