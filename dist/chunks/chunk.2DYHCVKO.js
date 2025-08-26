import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/utilities/mimetypes.ts
init_dirname();
init_buffer();
init_process();
var defaultSubsetFileMimeType = "application/x-netcdf4";
function getFriendlyNameForMimeType(mimeType) {
  switch (mimeType) {
    case "application/x-hdf":
    case "application/octet-stream":
      return "HDF-EOS5";
    case "application/x-netcdf4":
      return "NetCDF-4";
    case "application/netcdf":
      return "NetCDF Classic (NetCDF-3)";
    default:
      return mimeType;
  }
}

export {
  defaultSubsetFileMimeType,
  getFriendlyNameForMimeType
};
