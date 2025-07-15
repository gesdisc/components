// src/utilities/mimetypes.ts
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
