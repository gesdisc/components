import {
  ExtraSamplesValues,
  arrayFields,
  fieldTagNames,
  fieldTypes,
  geoKeyNames,
  globals_exports,
  photometricInterpretations
} from "./chunk.HTVCN7IF.js";
import "./chunk.KNJKHMZA.js";
import {
  DataTile_default,
  ERROR_THRESHOLD,
  EventType_default,
  Projection_default,
  TileEventType_default,
  TileGrid_default,
  TileSourceEvent,
  TileState_default,
  Tile_default2 as Tile_default,
  Triangulation_default,
  WORKER_OFFSCREEN_CANVAS,
  apply,
  applyTransform,
  asArrayLike,
  asImageLike,
  calculateSourceExtentResolution,
  clamp,
  create,
  createCanvasContext2D,
  createEmpty,
  createTransformFromCoordinateTransform,
  createXYZ,
  equivalent,
  error,
  extend2 as extend,
  extentFromProjection,
  fromCode,
  get,
  getArea,
  getCenter,
  getForProjection,
  getHeight,
  getIntersection,
  getTopLeft,
  getUid,
  getWidth,
  listen,
  makeInverse,
  multiply,
  orthographic,
  scale3 as scale,
  toArray,
  toPromise,
  toSize,
  toUserCoordinate,
  toUserExtent,
  translate2 as translate,
  translation,
  unlistenByKey,
  wrapAndSliceX
} from "./chunk.ZFEWXPWY.js";
import {
  Buffer,
  __commonJS,
  __objRest,
  __spreadProps,
  __spreadValues,
  __toESM,
  dew,
  init_buffer,
  init_chunk_DtuTasat,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// node_modules/xml-utils/get-attribute.js
var require_get_attribute = __commonJS({
  "node_modules/xml-utils/get-attribute.js"(exports14, module) {
    init_dirname();
    init_buffer();
    init_process();
    function getAttribute2(tag, attributeName, options) {
      const debug = options && options.debug || false;
      if (debug)
        console.log("[xml-utils] getting " + attributeName + " in " + tag);
      const xml = typeof tag === "object" ? tag.outer : tag;
      const opening = xml.slice(0, xml.indexOf(">") + 1);
      const quotechars = ['"', "'"];
      for (let i5 = 0; i5 < quotechars.length; i5++) {
        const char = quotechars[i5];
        const pattern = attributeName + "\\=" + char + "([^" + char + "]*)" + char;
        if (debug)
          console.log("[xml-utils] pattern:", pattern);
        const re2 = new RegExp(pattern);
        const match = re2.exec(opening);
        if (debug)
          console.log("[xml-utils] match:", match);
        if (match)
          return match[1];
      }
    }
    module.exports = getAttribute2;
    module.exports.default = getAttribute2;
  }
});

// node_modules/xml-utils/index-of-match.js
var require_index_of_match = __commonJS({
  "node_modules/xml-utils/index-of-match.js"(exports14, module) {
    init_dirname();
    init_buffer();
    init_process();
    function indexOfMatch(xml, pattern, startIndex) {
      const re2 = new RegExp(pattern);
      const match = re2.exec(xml.slice(startIndex));
      if (match)
        return startIndex + match.index;
      else
        return -1;
    }
    module.exports = indexOfMatch;
    module.exports.default = indexOfMatch;
  }
});

// node_modules/xml-utils/index-of-match-end.js
var require_index_of_match_end = __commonJS({
  "node_modules/xml-utils/index-of-match-end.js"(exports14, module) {
    init_dirname();
    init_buffer();
    init_process();
    function indexOfMatchEnd(xml, pattern, startIndex) {
      const re2 = new RegExp(pattern);
      const match = re2.exec(xml.slice(startIndex));
      if (match)
        return startIndex + match.index + match[0].length - 1;
      else
        return -1;
    }
    module.exports = indexOfMatchEnd;
    module.exports.default = indexOfMatchEnd;
  }
});

// node_modules/xml-utils/count-substring.js
var require_count_substring = __commonJS({
  "node_modules/xml-utils/count-substring.js"(exports14, module) {
    init_dirname();
    init_buffer();
    init_process();
    function countSubstring(string, substring) {
      const pattern = new RegExp(substring, "g");
      const match = string.match(pattern);
      return match ? match.length : 0;
    }
    module.exports = countSubstring;
    module.exports.default = countSubstring;
  }
});

// node_modules/xml-utils/find-tag-by-name.js
var require_find_tag_by_name = __commonJS({
  "node_modules/xml-utils/find-tag-by-name.js"(exports14, module) {
    init_dirname();
    init_buffer();
    init_process();
    var indexOfMatch = require_index_of_match();
    var indexOfMatchEnd = require_index_of_match_end();
    var countSubstring = require_count_substring();
    function findTagByName(xml, tagName, options) {
      const debug = options && options.debug || false;
      const nested = !(options && typeof options.nested === false);
      const startIndex = options && options.startIndex || 0;
      if (debug)
        console.log("[xml-utils] starting findTagByName with", tagName, " and ", options);
      const start = indexOfMatch(xml, `<${tagName}[ 
>/]`, startIndex);
      if (debug)
        console.log("[xml-utils] start:", start);
      if (start === -1)
        return void 0;
      const afterStart = xml.slice(start + tagName.length);
      let relativeEnd = indexOfMatchEnd(afterStart, "^[^<]*[ /]>", 0);
      const selfClosing = relativeEnd !== -1 && afterStart[relativeEnd - 1] === "/";
      if (debug)
        console.log("[xml-utils] selfClosing:", selfClosing);
      if (selfClosing === false) {
        if (nested) {
          let startIndex2 = 0;
          let openings = 1;
          let closings = 0;
          while ((relativeEnd = indexOfMatchEnd(afterStart, "[ /]" + tagName + ">", startIndex2)) !== -1) {
            const clip = afterStart.substring(startIndex2, relativeEnd + 1);
            openings += countSubstring(clip, "<" + tagName + "[ \n	>]");
            closings += countSubstring(clip, "</" + tagName + ">");
            if (closings >= openings)
              break;
            startIndex2 = relativeEnd;
          }
        } else {
          relativeEnd = indexOfMatchEnd(afterStart, "[ /]" + tagName + ">", 0);
        }
      }
      const end = start + tagName.length + relativeEnd + 1;
      if (debug)
        console.log("[xml-utils] end:", end);
      if (end === -1)
        return void 0;
      const outer = xml.slice(start, end);
      let inner;
      if (selfClosing) {
        inner = null;
      } else {
        inner = outer.slice(outer.indexOf(">") + 1, outer.lastIndexOf("<"));
      }
      return { inner, outer, start, end };
    }
    module.exports = findTagByName;
    module.exports.default = findTagByName;
  }
});

// node_modules/xml-utils/find-tags-by-name.js
var require_find_tags_by_name = __commonJS({
  "node_modules/xml-utils/find-tags-by-name.js"(exports14, module) {
    init_dirname();
    init_buffer();
    init_process();
    var findTagByName = require_find_tag_by_name();
    function findTagsByName2(xml, tagName, options) {
      const tags = [];
      const debug = options && options.debug || false;
      const nested = options && typeof options.nested === "boolean" ? options.nested : true;
      let startIndex = options && options.startIndex || 0;
      let tag;
      while (tag = findTagByName(xml, tagName, { debug, startIndex })) {
        if (nested) {
          startIndex = tag.start + 1 + tagName.length;
        } else {
          startIndex = tag.end;
        }
        tags.push(tag);
      }
      if (debug)
        console.log("findTagsByName found", tags.length, "tags");
      return tags;
    }
    module.exports = findTagsByName2;
    module.exports.default = findTagsByName2;
  }
});

// node_modules/ol/source/GeoTIFF.js
init_dirname();
init_buffer();
init_process();

// node_modules/geotiff/dist-module/geotiff.js
init_dirname();
init_buffer();
init_process();

// node_modules/geotiff/dist-module/geotiffimage.js
init_dirname();
init_buffer();
init_process();

// node_modules/@petamoriken/float16/src/index.mjs
init_dirname();
init_buffer();
init_process();

// node_modules/@petamoriken/float16/src/_util/arrayIterator.mjs
init_dirname();
init_buffer();
init_process();

// node_modules/@petamoriken/float16/src/_util/primordials.mjs
init_dirname();
init_buffer();
init_process();

// node_modules/@petamoriken/float16/src/_util/messages.mjs
init_dirname();
init_buffer();
init_process();
var CANNOT_CONVERT_UNDEFINED_OR_NULL_TO_OBJECT = "Cannot convert undefined or null to object";

// node_modules/@petamoriken/float16/src/_util/primordials.mjs
function uncurryThis(target) {
  return (thisArg, ...args) => {
    return ReflectApply(target, thisArg, args);
  };
}
function uncurryThisGetter(target, key) {
  return uncurryThis(
    ReflectGetOwnPropertyDescriptor(
      target,
      key
    ).get
  );
}
var {
  apply: ReflectApply,
  construct: ReflectConstruct,
  defineProperty: ReflectDefineProperty,
  get: ReflectGet,
  getOwnPropertyDescriptor: ReflectGetOwnPropertyDescriptor,
  getPrototypeOf: ReflectGetPrototypeOf,
  has: ReflectHas,
  ownKeys: ReflectOwnKeys,
  set: ReflectSet,
  setPrototypeOf: ReflectSetPrototypeOf
} = Reflect;
var {
  EPSILON,
  MAX_SAFE_INTEGER,
  isFinite: NumberIsFinite,
  isNaN: NumberIsNaN
} = Number;
var {
  iterator: SymbolIterator,
  species: SymbolSpecies,
  toStringTag: SymbolToStringTag,
  for: SymbolFor
} = Symbol;
var NativeObject = Object;
var {
  create: ObjectCreate,
  defineProperty: ObjectDefineProperty,
  freeze: ObjectFreeze,
  is: ObjectIs
} = NativeObject;
var ObjectPrototype = NativeObject.prototype;
var ObjectPrototype__lookupGetter__ = (
  /** @type {any} */
  ObjectPrototype.__lookupGetter__ ? uncurryThis(
    /** @type {any} */
    ObjectPrototype.__lookupGetter__
  ) : (object, key) => {
    if (object == null) {
      throw NativeTypeError(
        CANNOT_CONVERT_UNDEFINED_OR_NULL_TO_OBJECT
      );
    }
    let target = NativeObject(object);
    do {
      const descriptor = ReflectGetOwnPropertyDescriptor(target, key);
      if (descriptor !== void 0) {
        if (ObjectHasOwn(descriptor, "get")) {
          return descriptor.get;
        }
        return;
      }
    } while ((target = ReflectGetPrototypeOf(target)) !== null);
  }
);
var ObjectHasOwn = (
  /** @type {any} */
  NativeObject.hasOwn || uncurryThis(ObjectPrototype.hasOwnProperty)
);
var NativeArray = Array;
var ArrayIsArray = NativeArray.isArray;
var ArrayPrototype = NativeArray.prototype;
var ArrayPrototypeJoin = uncurryThis(ArrayPrototype.join);
var ArrayPrototypePush = uncurryThis(ArrayPrototype.push);
var ArrayPrototypeToLocaleString = uncurryThis(
  ArrayPrototype.toLocaleString
);
var NativeArrayPrototypeSymbolIterator = ArrayPrototype[SymbolIterator];
var ArrayPrototypeSymbolIterator = uncurryThis(NativeArrayPrototypeSymbolIterator);
var {
  abs: MathAbs,
  trunc: MathTrunc
} = Math;
var NativeArrayBuffer = ArrayBuffer;
var ArrayBufferIsView = NativeArrayBuffer.isView;
var ArrayBufferPrototype = NativeArrayBuffer.prototype;
var ArrayBufferPrototypeSlice = uncurryThis(ArrayBufferPrototype.slice);
var ArrayBufferPrototypeGetByteLength = uncurryThisGetter(ArrayBufferPrototype, "byteLength");
var NativeSharedArrayBuffer = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : null;
var SharedArrayBufferPrototypeGetByteLength = NativeSharedArrayBuffer && uncurryThisGetter(NativeSharedArrayBuffer.prototype, "byteLength");
var TypedArray = ReflectGetPrototypeOf(Uint8Array);
var TypedArrayFrom = TypedArray.from;
var TypedArrayPrototype = TypedArray.prototype;
var NativeTypedArrayPrototypeSymbolIterator = TypedArrayPrototype[SymbolIterator];
var TypedArrayPrototypeKeys = uncurryThis(TypedArrayPrototype.keys);
var TypedArrayPrototypeValues = uncurryThis(
  TypedArrayPrototype.values
);
var TypedArrayPrototypeEntries = uncurryThis(
  TypedArrayPrototype.entries
);
var TypedArrayPrototypeSet = uncurryThis(TypedArrayPrototype.set);
var TypedArrayPrototypeReverse = uncurryThis(
  TypedArrayPrototype.reverse
);
var TypedArrayPrototypeFill = uncurryThis(TypedArrayPrototype.fill);
var TypedArrayPrototypeCopyWithin = uncurryThis(
  TypedArrayPrototype.copyWithin
);
var TypedArrayPrototypeSort = uncurryThis(TypedArrayPrototype.sort);
var TypedArrayPrototypeSlice = uncurryThis(TypedArrayPrototype.slice);
var TypedArrayPrototypeSubarray = uncurryThis(
  TypedArrayPrototype.subarray
);
var TypedArrayPrototypeGetBuffer = uncurryThisGetter(
  TypedArrayPrototype,
  "buffer"
);
var TypedArrayPrototypeGetByteOffset = uncurryThisGetter(
  TypedArrayPrototype,
  "byteOffset"
);
var TypedArrayPrototypeGetLength = uncurryThisGetter(
  TypedArrayPrototype,
  "length"
);
var TypedArrayPrototypeGetSymbolToStringTag = uncurryThisGetter(
  TypedArrayPrototype,
  SymbolToStringTag
);
var NativeUint8Array = Uint8Array;
var NativeUint16Array = Uint16Array;
var NativeUint32Array = Uint32Array;
var NativeFloat32Array = Float32Array;
var ArrayIteratorPrototype = ReflectGetPrototypeOf([][SymbolIterator]());
var ArrayIteratorPrototypeNext = uncurryThis(ArrayIteratorPrototype.next);
var GeneratorPrototypeNext = uncurryThis(function* () {
}().next);
var IteratorPrototype = ReflectGetPrototypeOf(ArrayIteratorPrototype);
var DataViewPrototype = DataView.prototype;
var DataViewPrototypeGetUint16 = uncurryThis(
  DataViewPrototype.getUint16
);
var DataViewPrototypeSetUint16 = uncurryThis(
  DataViewPrototype.setUint16
);
var NativeTypeError = TypeError;
var NativeWeakSet = WeakSet;
var WeakSetPrototype = NativeWeakSet.prototype;
var WeakSetPrototypeAdd = uncurryThis(WeakSetPrototype.add);
var WeakSetPrototypeHas = uncurryThis(WeakSetPrototype.has);
var NativeWeakMap = WeakMap;
var WeakMapPrototype = NativeWeakMap.prototype;
var WeakMapPrototypeGet = uncurryThis(WeakMapPrototype.get);
var WeakMapPrototypeHas = uncurryThis(WeakMapPrototype.has);
var WeakMapPrototypeSet = uncurryThis(WeakMapPrototype.set);

// node_modules/@petamoriken/float16/src/_util/arrayIterator.mjs
var arrayIterators = new NativeWeakMap();
var SafeIteratorPrototype = ObjectCreate(null, {
  next: {
    value: function next() {
      const arrayIterator = WeakMapPrototypeGet(arrayIterators, this);
      return ArrayIteratorPrototypeNext(arrayIterator);
    }
  },
  [SymbolIterator]: {
    value: function values() {
      return this;
    }
  }
});
function safeIfNeeded(array) {
  if (array[SymbolIterator] === NativeArrayPrototypeSymbolIterator && ArrayIteratorPrototype.next === ArrayIteratorPrototypeNext) {
    return array;
  }
  const safe = ObjectCreate(SafeIteratorPrototype);
  WeakMapPrototypeSet(arrayIterators, safe, ArrayPrototypeSymbolIterator(array));
  return safe;
}
var generators = new NativeWeakMap();
var DummyArrayIteratorPrototype = ObjectCreate(IteratorPrototype, {
  next: {
    value: function next2() {
      const generator = WeakMapPrototypeGet(generators, this);
      return GeneratorPrototypeNext(generator);
    },
    writable: true,
    configurable: true
  }
});
for (const key of ReflectOwnKeys(ArrayIteratorPrototype)) {
  if (key === "next") {
    continue;
  }
  ObjectDefineProperty(DummyArrayIteratorPrototype, key, ReflectGetOwnPropertyDescriptor(ArrayIteratorPrototype, key));
}

// node_modules/@petamoriken/float16/src/_util/converter.mjs
init_dirname();
init_buffer();
init_process();
var INVERSE_OF_EPSILON = 1 / EPSILON;
var FLOAT16_MIN_VALUE = 6103515625e-14;
var FLOAT16_EPSILON = 9765625e-10;
var FLOAT16_EPSILON_MULTIPLIED_BY_FLOAT16_MIN_VALUE = FLOAT16_EPSILON * FLOAT16_MIN_VALUE;
var FLOAT16_EPSILON_DEVIDED_BY_EPSILON = FLOAT16_EPSILON * INVERSE_OF_EPSILON;
var buffer = new NativeArrayBuffer(4);
var floatView = new NativeFloat32Array(buffer);
var uint32View = new NativeUint32Array(buffer);
var baseTable = new NativeUint16Array(512);
var shiftTable = new NativeUint8Array(512);
for (let i5 = 0; i5 < 256; ++i5) {
  const e5 = i5 - 127;
  if (e5 < -24) {
    baseTable[i5] = 0;
    baseTable[i5 | 256] = 32768;
    shiftTable[i5] = 24;
    shiftTable[i5 | 256] = 24;
  } else if (e5 < -14) {
    baseTable[i5] = 1024 >> -e5 - 14;
    baseTable[i5 | 256] = 1024 >> -e5 - 14 | 32768;
    shiftTable[i5] = -e5 - 1;
    shiftTable[i5 | 256] = -e5 - 1;
  } else if (e5 <= 15) {
    baseTable[i5] = e5 + 15 << 10;
    baseTable[i5 | 256] = e5 + 15 << 10 | 32768;
    shiftTable[i5] = 13;
    shiftTable[i5 | 256] = 13;
  } else if (e5 < 128) {
    baseTable[i5] = 31744;
    baseTable[i5 | 256] = 64512;
    shiftTable[i5] = 24;
    shiftTable[i5 | 256] = 24;
  } else {
    baseTable[i5] = 31744;
    baseTable[i5 | 256] = 64512;
    shiftTable[i5] = 13;
    shiftTable[i5 | 256] = 13;
  }
}
var mantissaTable = new NativeUint32Array(2048);
for (let i5 = 1; i5 < 1024; ++i5) {
  let m4 = i5 << 13;
  let e5 = 0;
  while ((m4 & 8388608) === 0) {
    m4 <<= 1;
    e5 -= 8388608;
  }
  m4 &= ~8388608;
  e5 += 947912704;
  mantissaTable[i5] = m4 | e5;
}
for (let i5 = 1024; i5 < 2048; ++i5) {
  mantissaTable[i5] = 939524096 + (i5 - 1024 << 13);
}
var exponentTable = new NativeUint32Array(64);
for (let i5 = 1; i5 < 31; ++i5) {
  exponentTable[i5] = i5 << 23;
}
exponentTable[31] = 1199570944;
exponentTable[32] = 2147483648;
for (let i5 = 33; i5 < 63; ++i5) {
  exponentTable[i5] = 2147483648 + (i5 - 32 << 23);
}
exponentTable[63] = 3347054592;
var offsetTable = new NativeUint16Array(64);
for (let i5 = 1; i5 < 64; ++i5) {
  if (i5 !== 32) {
    offsetTable[i5] = 1024;
  }
}
function convertToNumber(float16bits) {
  const i5 = float16bits >> 10;
  uint32View[0] = mantissaTable[offsetTable[i5] + (float16bits & 1023)] + exponentTable[i5];
  return floatView[0];
}

// node_modules/@petamoriken/float16/src/DataView.mjs
init_dirname();
init_buffer();
init_process();
function getFloat16(dataView, byteOffset, ...opts) {
  return convertToNumber(
    DataViewPrototypeGetUint16(dataView, byteOffset, ...safeIfNeeded(opts))
  );
}

// node_modules/geotiff/dist-module/geotiffimage.js
var import_get_attribute = __toESM(require_get_attribute(), 1);
var import_find_tags_by_name = __toESM(require_find_tags_by_name(), 1);

// node_modules/geotiff/dist-module/rgb.js
init_dirname();
init_buffer();
init_process();
function fromWhiteIsZero(raster, max) {
  const { width, height } = raster;
  const rgbRaster = new Uint8Array(width * height * 3);
  let value;
  for (let i5 = 0, j3 = 0; i5 < raster.length; ++i5, j3 += 3) {
    value = 256 - raster[i5] / max * 256;
    rgbRaster[j3] = value;
    rgbRaster[j3 + 1] = value;
    rgbRaster[j3 + 2] = value;
  }
  return rgbRaster;
}
function fromBlackIsZero(raster, max) {
  const { width, height } = raster;
  const rgbRaster = new Uint8Array(width * height * 3);
  let value;
  for (let i5 = 0, j3 = 0; i5 < raster.length; ++i5, j3 += 3) {
    value = raster[i5] / max * 256;
    rgbRaster[j3] = value;
    rgbRaster[j3 + 1] = value;
    rgbRaster[j3 + 2] = value;
  }
  return rgbRaster;
}
function fromPalette(raster, colorMap) {
  const { width, height } = raster;
  const rgbRaster = new Uint8Array(width * height * 3);
  const greenOffset = colorMap.length / 3;
  const blueOffset = colorMap.length / 3 * 2;
  for (let i5 = 0, j3 = 0; i5 < raster.length; ++i5, j3 += 3) {
    const mapIndex = raster[i5];
    rgbRaster[j3] = colorMap[mapIndex] / 65536 * 256;
    rgbRaster[j3 + 1] = colorMap[mapIndex + greenOffset] / 65536 * 256;
    rgbRaster[j3 + 2] = colorMap[mapIndex + blueOffset] / 65536 * 256;
  }
  return rgbRaster;
}
function fromCMYK(cmykRaster) {
  const { width, height } = cmykRaster;
  const rgbRaster = new Uint8Array(width * height * 3);
  for (let i5 = 0, j3 = 0; i5 < cmykRaster.length; i5 += 4, j3 += 3) {
    const c5 = cmykRaster[i5];
    const m4 = cmykRaster[i5 + 1];
    const y5 = cmykRaster[i5 + 2];
    const k3 = cmykRaster[i5 + 3];
    rgbRaster[j3] = 255 * ((255 - c5) / 256) * ((255 - k3) / 256);
    rgbRaster[j3 + 1] = 255 * ((255 - m4) / 256) * ((255 - k3) / 256);
    rgbRaster[j3 + 2] = 255 * ((255 - y5) / 256) * ((255 - k3) / 256);
  }
  return rgbRaster;
}
function fromYCbCr(yCbCrRaster) {
  const { width, height } = yCbCrRaster;
  const rgbRaster = new Uint8ClampedArray(width * height * 3);
  for (let i5 = 0, j3 = 0; i5 < yCbCrRaster.length; i5 += 3, j3 += 3) {
    const y5 = yCbCrRaster[i5];
    const cb = yCbCrRaster[i5 + 1];
    const cr = yCbCrRaster[i5 + 2];
    rgbRaster[j3] = y5 + 1.402 * (cr - 128);
    rgbRaster[j3 + 1] = y5 - 0.34414 * (cb - 128) - 0.71414 * (cr - 128);
    rgbRaster[j3 + 2] = y5 + 1.772 * (cb - 128);
  }
  return rgbRaster;
}
var Xn = 0.95047;
var Yn = 1;
var Zn = 1.08883;
function fromCIELab(cieLabRaster) {
  const { width, height } = cieLabRaster;
  const rgbRaster = new Uint8Array(width * height * 3);
  for (let i5 = 0, j3 = 0; i5 < cieLabRaster.length; i5 += 3, j3 += 3) {
    const L3 = cieLabRaster[i5 + 0];
    const a_ = cieLabRaster[i5 + 1] << 24 >> 24;
    const b_ = cieLabRaster[i5 + 2] << 24 >> 24;
    let y5 = (L3 + 16) / 116;
    let x3 = a_ / 500 + y5;
    let z3 = y5 - b_ / 200;
    let r5;
    let g4;
    let b4;
    x3 = Xn * (x3 * x3 * x3 > 8856e-6 ? x3 * x3 * x3 : (x3 - 16 / 116) / 7.787);
    y5 = Yn * (y5 * y5 * y5 > 8856e-6 ? y5 * y5 * y5 : (y5 - 16 / 116) / 7.787);
    z3 = Zn * (z3 * z3 * z3 > 8856e-6 ? z3 * z3 * z3 : (z3 - 16 / 116) / 7.787);
    r5 = x3 * 3.2406 + y5 * -1.5372 + z3 * -0.4986;
    g4 = x3 * -0.9689 + y5 * 1.8758 + z3 * 0.0415;
    b4 = x3 * 0.0557 + y5 * -0.204 + z3 * 1.057;
    r5 = r5 > 31308e-7 ? 1.055 * r5 ** (1 / 2.4) - 0.055 : 12.92 * r5;
    g4 = g4 > 31308e-7 ? 1.055 * g4 ** (1 / 2.4) - 0.055 : 12.92 * g4;
    b4 = b4 > 31308e-7 ? 1.055 * b4 ** (1 / 2.4) - 0.055 : 12.92 * b4;
    rgbRaster[j3] = Math.max(0, Math.min(1, r5)) * 255;
    rgbRaster[j3 + 1] = Math.max(0, Math.min(1, g4)) * 255;
    rgbRaster[j3 + 2] = Math.max(0, Math.min(1, b4)) * 255;
  }
  return rgbRaster;
}

// node_modules/geotiff/dist-module/compression/index.js
init_dirname();
init_buffer();
init_process();
var registry = /* @__PURE__ */ new Map();
function addDecoder(cases, importFn) {
  if (!Array.isArray(cases)) {
    cases = [cases];
  }
  cases.forEach((c5) => registry.set(c5, importFn));
}
async function getDecoder(fileDirectory) {
  const importFn = registry.get(fileDirectory.Compression);
  if (!importFn) {
    throw new Error(`Unknown compression method identifier: ${fileDirectory.Compression}`);
  }
  const Decoder = await importFn();
  return new Decoder(fileDirectory);
}
addDecoder([void 0, 1], () => import("./raw.MB6EMKL2.js").then((m4) => m4.default));
addDecoder(5, () => import("./lzw.5NDUSCUW.js").then((m4) => m4.default));
addDecoder(6, () => {
  throw new Error("old style JPEG compression is not supported.");
});
addDecoder(7, () => import("./jpeg.DVFG5CP3.js").then((m4) => m4.default));
addDecoder([8, 32946], () => import("./deflate.HTLP3SD5.js").then((m4) => m4.default));
addDecoder(32773, () => import("./packbits.NTCXGA7G.js").then((m4) => m4.default));
addDecoder(
  34887,
  () => import("./lerc.QBULF56U.js").then(async (m4) => {
    await m4.zstd.init();
    return m4;
  }).then((m4) => m4.default)
);
addDecoder(50001, () => import("./webimage.QRV6S755.js").then((m4) => m4.default));

// node_modules/geotiff/dist-module/resample.js
init_dirname();
init_buffer();
init_process();
function copyNewSize(array, width, height, samplesPerPixel = 1) {
  return new (Object.getPrototypeOf(array)).constructor(width * height * samplesPerPixel);
}
function resampleNearest(valueArrays, inWidth, inHeight, outWidth, outHeight) {
  const relX = inWidth / outWidth;
  const relY = inHeight / outHeight;
  return valueArrays.map((array) => {
    const newArray = copyNewSize(array, outWidth, outHeight);
    for (let y5 = 0; y5 < outHeight; ++y5) {
      const cy = Math.min(Math.round(relY * y5), inHeight - 1);
      for (let x3 = 0; x3 < outWidth; ++x3) {
        const cx = Math.min(Math.round(relX * x3), inWidth - 1);
        const value = array[cy * inWidth + cx];
        newArray[y5 * outWidth + x3] = value;
      }
    }
    return newArray;
  });
}
function lerp(v0, v1, t5) {
  return (1 - t5) * v0 + t5 * v1;
}
function resampleBilinear(valueArrays, inWidth, inHeight, outWidth, outHeight) {
  const relX = inWidth / outWidth;
  const relY = inHeight / outHeight;
  return valueArrays.map((array) => {
    const newArray = copyNewSize(array, outWidth, outHeight);
    for (let y5 = 0; y5 < outHeight; ++y5) {
      const rawY = relY * y5;
      const yl = Math.floor(rawY);
      const yh = Math.min(Math.ceil(rawY), inHeight - 1);
      for (let x3 = 0; x3 < outWidth; ++x3) {
        const rawX = relX * x3;
        const tx = rawX % 1;
        const xl = Math.floor(rawX);
        const xh = Math.min(Math.ceil(rawX), inWidth - 1);
        const ll = array[yl * inWidth + xl];
        const hl = array[yl * inWidth + xh];
        const lh = array[yh * inWidth + xl];
        const hh = array[yh * inWidth + xh];
        const value = lerp(
          lerp(ll, hl, tx),
          lerp(lh, hh, tx),
          rawY % 1
        );
        newArray[y5 * outWidth + x3] = value;
      }
    }
    return newArray;
  });
}
function resample(valueArrays, inWidth, inHeight, outWidth, outHeight, method = "nearest") {
  switch (method.toLowerCase()) {
    case "nearest":
      return resampleNearest(valueArrays, inWidth, inHeight, outWidth, outHeight);
    case "bilinear":
    case "linear":
      return resampleBilinear(valueArrays, inWidth, inHeight, outWidth, outHeight);
    default:
      throw new Error(`Unsupported resampling method: '${method}'`);
  }
}
function resampleNearestInterleaved(valueArray, inWidth, inHeight, outWidth, outHeight, samples) {
  const relX = inWidth / outWidth;
  const relY = inHeight / outHeight;
  const newArray = copyNewSize(valueArray, outWidth, outHeight, samples);
  for (let y5 = 0; y5 < outHeight; ++y5) {
    const cy = Math.min(Math.round(relY * y5), inHeight - 1);
    for (let x3 = 0; x3 < outWidth; ++x3) {
      const cx = Math.min(Math.round(relX * x3), inWidth - 1);
      for (let i5 = 0; i5 < samples; ++i5) {
        const value = valueArray[cy * inWidth * samples + cx * samples + i5];
        newArray[y5 * outWidth * samples + x3 * samples + i5] = value;
      }
    }
  }
  return newArray;
}
function resampleBilinearInterleaved(valueArray, inWidth, inHeight, outWidth, outHeight, samples) {
  const relX = inWidth / outWidth;
  const relY = inHeight / outHeight;
  const newArray = copyNewSize(valueArray, outWidth, outHeight, samples);
  for (let y5 = 0; y5 < outHeight; ++y5) {
    const rawY = relY * y5;
    const yl = Math.floor(rawY);
    const yh = Math.min(Math.ceil(rawY), inHeight - 1);
    for (let x3 = 0; x3 < outWidth; ++x3) {
      const rawX = relX * x3;
      const tx = rawX % 1;
      const xl = Math.floor(rawX);
      const xh = Math.min(Math.ceil(rawX), inWidth - 1);
      for (let i5 = 0; i5 < samples; ++i5) {
        const ll = valueArray[yl * inWidth * samples + xl * samples + i5];
        const hl = valueArray[yl * inWidth * samples + xh * samples + i5];
        const lh = valueArray[yh * inWidth * samples + xl * samples + i5];
        const hh = valueArray[yh * inWidth * samples + xh * samples + i5];
        const value = lerp(
          lerp(ll, hl, tx),
          lerp(lh, hh, tx),
          rawY % 1
        );
        newArray[y5 * outWidth * samples + x3 * samples + i5] = value;
      }
    }
  }
  return newArray;
}
function resampleInterleaved(valueArray, inWidth, inHeight, outWidth, outHeight, samples, method = "nearest") {
  switch (method.toLowerCase()) {
    case "nearest":
      return resampleNearestInterleaved(
        valueArray,
        inWidth,
        inHeight,
        outWidth,
        outHeight,
        samples
      );
    case "bilinear":
    case "linear":
      return resampleBilinearInterleaved(
        valueArray,
        inWidth,
        inHeight,
        outWidth,
        outHeight,
        samples
      );
    default:
      throw new Error(`Unsupported resampling method: '${method}'`);
  }
}

// node_modules/geotiff/dist-module/geotiffimage.js
function sum(array, start, end) {
  let s5 = 0;
  for (let i5 = start; i5 < end; ++i5) {
    s5 += array[i5];
  }
  return s5;
}
function arrayForType(format2, bitsPerSample, size) {
  switch (format2) {
    case 1:
      if (bitsPerSample <= 8) {
        return new Uint8Array(size);
      } else if (bitsPerSample <= 16) {
        return new Uint16Array(size);
      } else if (bitsPerSample <= 32) {
        return new Uint32Array(size);
      }
      break;
    case 2:
      if (bitsPerSample === 8) {
        return new Int8Array(size);
      } else if (bitsPerSample === 16) {
        return new Int16Array(size);
      } else if (bitsPerSample === 32) {
        return new Int32Array(size);
      }
      break;
    case 3:
      switch (bitsPerSample) {
        case 16:
        case 32:
          return new Float32Array(size);
        case 64:
          return new Float64Array(size);
        default:
          break;
      }
      break;
    default:
      break;
  }
  throw Error("Unsupported data format/bitsPerSample");
}
function needsNormalization(format2, bitsPerSample) {
  if ((format2 === 1 || format2 === 2) && bitsPerSample <= 32 && bitsPerSample % 8 === 0) {
    return false;
  } else if (format2 === 3 && (bitsPerSample === 16 || bitsPerSample === 32 || bitsPerSample === 64)) {
    return false;
  }
  return true;
}
function normalizeArray(inBuffer, format2, planarConfiguration, samplesPerPixel, bitsPerSample, tileWidth, tileHeight) {
  const view = new DataView(inBuffer);
  const outSize = planarConfiguration === 2 ? tileHeight * tileWidth : tileHeight * tileWidth * samplesPerPixel;
  const samplesToTransfer = planarConfiguration === 2 ? 1 : samplesPerPixel;
  const outArray = arrayForType(format2, bitsPerSample, outSize);
  const bitMask = parseInt("1".repeat(bitsPerSample), 2);
  if (format2 === 1) {
    let pixelBitSkip;
    if (planarConfiguration === 1) {
      pixelBitSkip = samplesPerPixel * bitsPerSample;
    } else {
      pixelBitSkip = bitsPerSample;
    }
    let bitsPerLine = tileWidth * pixelBitSkip;
    if ((bitsPerLine & 7) !== 0) {
      bitsPerLine = bitsPerLine + 7 & ~7;
    }
    for (let y5 = 0; y5 < tileHeight; ++y5) {
      const lineBitOffset = y5 * bitsPerLine;
      for (let x3 = 0; x3 < tileWidth; ++x3) {
        const pixelBitOffset = lineBitOffset + x3 * samplesToTransfer * bitsPerSample;
        for (let i5 = 0; i5 < samplesToTransfer; ++i5) {
          const bitOffset = pixelBitOffset + i5 * bitsPerSample;
          const outIndex = (y5 * tileWidth + x3) * samplesToTransfer + i5;
          const byteOffset = Math.floor(bitOffset / 8);
          const innerBitOffset = bitOffset % 8;
          if (innerBitOffset + bitsPerSample <= 8) {
            outArray[outIndex] = view.getUint8(byteOffset) >> 8 - bitsPerSample - innerBitOffset & bitMask;
          } else if (innerBitOffset + bitsPerSample <= 16) {
            outArray[outIndex] = view.getUint16(byteOffset) >> 16 - bitsPerSample - innerBitOffset & bitMask;
          } else if (innerBitOffset + bitsPerSample <= 24) {
            const raw = view.getUint16(byteOffset) << 8 | view.getUint8(byteOffset + 2);
            outArray[outIndex] = raw >> 24 - bitsPerSample - innerBitOffset & bitMask;
          } else {
            outArray[outIndex] = view.getUint32(byteOffset) >> 32 - bitsPerSample - innerBitOffset & bitMask;
          }
        }
      }
    }
  } else if (format2 === 3) {
  }
  return outArray.buffer;
}
var GeoTIFFImage = class {
  /**
   * @constructor
   * @param {Object} fileDirectory The parsed file directory
   * @param {Object} geoKeys The parsed geo-keys
   * @param {DataView} dataView The DataView for the underlying file.
   * @param {Boolean} littleEndian Whether the file is encoded in little or big endian
   * @param {Boolean} cache Whether or not decoded tiles shall be cached
   * @param {import('./source/basesource').BaseSource} source The datasource to read from
   */
  constructor(fileDirectory, geoKeys, dataView, littleEndian, cache, source) {
    this.fileDirectory = fileDirectory;
    this.geoKeys = geoKeys;
    this.dataView = dataView;
    this.littleEndian = littleEndian;
    this.tiles = cache ? {} : null;
    this.isTiled = !fileDirectory.StripOffsets;
    const planarConfiguration = fileDirectory.PlanarConfiguration;
    this.planarConfiguration = typeof planarConfiguration === "undefined" ? 1 : planarConfiguration;
    if (this.planarConfiguration !== 1 && this.planarConfiguration !== 2) {
      throw new Error("Invalid planar configuration.");
    }
    this.source = source;
  }
  /**
   * Returns the associated parsed file directory.
   * @returns {Object} the parsed file directory
   */
  getFileDirectory() {
    return this.fileDirectory;
  }
  /**
   * Returns the associated parsed geo keys.
   * @returns {Object} the parsed geo keys
   */
  getGeoKeys() {
    return this.geoKeys;
  }
  /**
   * Returns the width of the image.
   * @returns {Number} the width of the image
   */
  getWidth() {
    return this.fileDirectory.ImageWidth;
  }
  /**
   * Returns the height of the image.
   * @returns {Number} the height of the image
   */
  getHeight() {
    return this.fileDirectory.ImageLength;
  }
  /**
   * Returns the number of samples per pixel.
   * @returns {Number} the number of samples per pixel
   */
  getSamplesPerPixel() {
    return typeof this.fileDirectory.SamplesPerPixel !== "undefined" ? this.fileDirectory.SamplesPerPixel : 1;
  }
  /**
   * Returns the width of each tile.
   * @returns {Number} the width of each tile
   */
  getTileWidth() {
    return this.isTiled ? this.fileDirectory.TileWidth : this.getWidth();
  }
  /**
   * Returns the height of each tile.
   * @returns {Number} the height of each tile
   */
  getTileHeight() {
    if (this.isTiled) {
      return this.fileDirectory.TileLength;
    }
    if (typeof this.fileDirectory.RowsPerStrip !== "undefined") {
      return Math.min(this.fileDirectory.RowsPerStrip, this.getHeight());
    }
    return this.getHeight();
  }
  getBlockWidth() {
    return this.getTileWidth();
  }
  getBlockHeight(y5) {
    if (this.isTiled || (y5 + 1) * this.getTileHeight() <= this.getHeight()) {
      return this.getTileHeight();
    } else {
      return this.getHeight() - y5 * this.getTileHeight();
    }
  }
  /**
   * Calculates the number of bytes for each pixel across all samples. Only full
   * bytes are supported, an exception is thrown when this is not the case.
   * @returns {Number} the bytes per pixel
   */
  getBytesPerPixel() {
    let bytes = 0;
    for (let i5 = 0; i5 < this.fileDirectory.BitsPerSample.length; ++i5) {
      bytes += this.getSampleByteSize(i5);
    }
    return bytes;
  }
  getSampleByteSize(i5) {
    if (i5 >= this.fileDirectory.BitsPerSample.length) {
      throw new RangeError(`Sample index ${i5} is out of range.`);
    }
    return Math.ceil(this.fileDirectory.BitsPerSample[i5] / 8);
  }
  getReaderForSample(sampleIndex) {
    const format2 = this.fileDirectory.SampleFormat ? this.fileDirectory.SampleFormat[sampleIndex] : 1;
    const bitsPerSample = this.fileDirectory.BitsPerSample[sampleIndex];
    switch (format2) {
      case 1:
        if (bitsPerSample <= 8) {
          return DataView.prototype.getUint8;
        } else if (bitsPerSample <= 16) {
          return DataView.prototype.getUint16;
        } else if (bitsPerSample <= 32) {
          return DataView.prototype.getUint32;
        }
        break;
      case 2:
        if (bitsPerSample <= 8) {
          return DataView.prototype.getInt8;
        } else if (bitsPerSample <= 16) {
          return DataView.prototype.getInt16;
        } else if (bitsPerSample <= 32) {
          return DataView.prototype.getInt32;
        }
        break;
      case 3:
        switch (bitsPerSample) {
          case 16:
            return function(offset, littleEndian) {
              return getFloat16(this, offset, littleEndian);
            };
          case 32:
            return DataView.prototype.getFloat32;
          case 64:
            return DataView.prototype.getFloat64;
          default:
            break;
        }
        break;
      default:
        break;
    }
    throw Error("Unsupported data format/bitsPerSample");
  }
  getSampleFormat(sampleIndex = 0) {
    return this.fileDirectory.SampleFormat ? this.fileDirectory.SampleFormat[sampleIndex] : 1;
  }
  getBitsPerSample(sampleIndex = 0) {
    return this.fileDirectory.BitsPerSample[sampleIndex];
  }
  getArrayForSample(sampleIndex, size) {
    const format2 = this.getSampleFormat(sampleIndex);
    const bitsPerSample = this.getBitsPerSample(sampleIndex);
    return arrayForType(format2, bitsPerSample, size);
  }
  /**
   * Returns the decoded strip or tile.
   * @param {Number} x the strip or tile x-offset
   * @param {Number} y the tile y-offset (0 for stripped images)
   * @param {Number} sample the sample to get for separated samples
   * @param {import("./geotiff").Pool|import("./geotiff").BaseDecoder} poolOrDecoder the decoder or decoder pool
   * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
   *                               to be aborted
   * @returns {Promise.<ArrayBuffer>}
   */
  async getTileOrStrip(x3, y5, sample, poolOrDecoder, signal) {
    const numTilesPerRow = Math.ceil(this.getWidth() / this.getTileWidth());
    const numTilesPerCol = Math.ceil(this.getHeight() / this.getTileHeight());
    let index;
    const { tiles } = this;
    if (this.planarConfiguration === 1) {
      index = y5 * numTilesPerRow + x3;
    } else if (this.planarConfiguration === 2) {
      index = sample * numTilesPerRow * numTilesPerCol + y5 * numTilesPerRow + x3;
    }
    let offset;
    let byteCount;
    if (this.isTiled) {
      offset = this.fileDirectory.TileOffsets[index];
      byteCount = this.fileDirectory.TileByteCounts[index];
    } else {
      offset = this.fileDirectory.StripOffsets[index];
      byteCount = this.fileDirectory.StripByteCounts[index];
    }
    const slice = (await this.source.fetch([{ offset, length: byteCount }], signal))[0];
    let request3;
    if (tiles === null || !tiles[index]) {
      request3 = (async () => {
        let data = await poolOrDecoder.decode(this.fileDirectory, slice);
        const sampleFormat = this.getSampleFormat();
        const bitsPerSample = this.getBitsPerSample();
        if (needsNormalization(sampleFormat, bitsPerSample)) {
          data = normalizeArray(
            data,
            sampleFormat,
            this.planarConfiguration,
            this.getSamplesPerPixel(),
            bitsPerSample,
            this.getTileWidth(),
            this.getBlockHeight(y5)
          );
        }
        return data;
      })();
      if (tiles !== null) {
        tiles[index] = request3;
      }
    } else {
      request3 = tiles[index];
    }
    return { x: x3, y: y5, sample, data: await request3 };
  }
  /**
   * Internal read function.
   * @private
   * @param {Array} imageWindow The image window in pixel coordinates
   * @param {Array} samples The selected samples (0-based indices)
   * @param {TypedArray|TypedArray[]} valueArrays The array(s) to write into
   * @param {Boolean} interleave Whether or not to write in an interleaved manner
   * @param {import("./geotiff").Pool|AbstractDecoder} poolOrDecoder the decoder or decoder pool
   * @param {number} width the width of window to be read into
   * @param {number} height the height of window to be read into
   * @param {number} resampleMethod the resampling method to be used when interpolating
   * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
   *                               to be aborted
   * @returns {Promise<ReadRasterResult>}
   */
  async _readRaster(imageWindow, samples, valueArrays, interleave, poolOrDecoder, width, height, resampleMethod, signal) {
    const tileWidth = this.getTileWidth();
    const tileHeight = this.getTileHeight();
    const imageWidth = this.getWidth();
    const imageHeight = this.getHeight();
    const minXTile = Math.max(Math.floor(imageWindow[0] / tileWidth), 0);
    const maxXTile = Math.min(
      Math.ceil(imageWindow[2] / tileWidth),
      Math.ceil(imageWidth / tileWidth)
    );
    const minYTile = Math.max(Math.floor(imageWindow[1] / tileHeight), 0);
    const maxYTile = Math.min(
      Math.ceil(imageWindow[3] / tileHeight),
      Math.ceil(imageHeight / tileHeight)
    );
    const windowWidth = imageWindow[2] - imageWindow[0];
    let bytesPerPixel = this.getBytesPerPixel();
    const srcSampleOffsets = [];
    const sampleReaders = [];
    for (let i5 = 0; i5 < samples.length; ++i5) {
      if (this.planarConfiguration === 1) {
        srcSampleOffsets.push(sum(this.fileDirectory.BitsPerSample, 0, samples[i5]) / 8);
      } else {
        srcSampleOffsets.push(0);
      }
      sampleReaders.push(this.getReaderForSample(samples[i5]));
    }
    const promises = [];
    const { littleEndian } = this;
    for (let yTile = minYTile; yTile < maxYTile; ++yTile) {
      for (let xTile = minXTile; xTile < maxXTile; ++xTile) {
        let getPromise;
        if (this.planarConfiguration === 1) {
          getPromise = this.getTileOrStrip(xTile, yTile, 0, poolOrDecoder, signal);
        }
        for (let sampleIndex = 0; sampleIndex < samples.length; ++sampleIndex) {
          const si = sampleIndex;
          const sample = samples[sampleIndex];
          if (this.planarConfiguration === 2) {
            bytesPerPixel = this.getSampleByteSize(sample);
            getPromise = this.getTileOrStrip(xTile, yTile, sample, poolOrDecoder, signal);
          }
          const promise = getPromise.then((tile) => {
            const buffer3 = tile.data;
            const dataView = new DataView(buffer3);
            const blockHeight = this.getBlockHeight(tile.y);
            const firstLine = tile.y * tileHeight;
            const firstCol = tile.x * tileWidth;
            const lastLine = firstLine + blockHeight;
            const lastCol = (tile.x + 1) * tileWidth;
            const reader = sampleReaders[si];
            const ymax = Math.min(blockHeight, blockHeight - (lastLine - imageWindow[3]), imageHeight - firstLine);
            const xmax = Math.min(tileWidth, tileWidth - (lastCol - imageWindow[2]), imageWidth - firstCol);
            for (let y5 = Math.max(0, imageWindow[1] - firstLine); y5 < ymax; ++y5) {
              for (let x3 = Math.max(0, imageWindow[0] - firstCol); x3 < xmax; ++x3) {
                const pixelOffset = (y5 * tileWidth + x3) * bytesPerPixel;
                const value = reader.call(
                  dataView,
                  pixelOffset + srcSampleOffsets[si],
                  littleEndian
                );
                let windowCoordinate;
                if (interleave) {
                  windowCoordinate = (y5 + firstLine - imageWindow[1]) * windowWidth * samples.length + (x3 + firstCol - imageWindow[0]) * samples.length + si;
                  valueArrays[windowCoordinate] = value;
                } else {
                  windowCoordinate = (y5 + firstLine - imageWindow[1]) * windowWidth + x3 + firstCol - imageWindow[0];
                  valueArrays[si][windowCoordinate] = value;
                }
              }
            }
          });
          promises.push(promise);
        }
      }
    }
    await Promise.all(promises);
    if (width && imageWindow[2] - imageWindow[0] !== width || height && imageWindow[3] - imageWindow[1] !== height) {
      let resampled;
      if (interleave) {
        resampled = resampleInterleaved(
          valueArrays,
          imageWindow[2] - imageWindow[0],
          imageWindow[3] - imageWindow[1],
          width,
          height,
          samples.length,
          resampleMethod
        );
      } else {
        resampled = resample(
          valueArrays,
          imageWindow[2] - imageWindow[0],
          imageWindow[3] - imageWindow[1],
          width,
          height,
          resampleMethod
        );
      }
      resampled.width = width;
      resampled.height = height;
      return resampled;
    }
    valueArrays.width = width || imageWindow[2] - imageWindow[0];
    valueArrays.height = height || imageWindow[3] - imageWindow[1];
    return valueArrays;
  }
  /**
   * Reads raster data from the image. This function reads all selected samples
   * into separate arrays of the correct type for that sample or into a single
   * combined array when `interleave` is set. When provided, only a subset
   * of the raster is read for each sample.
   *
   * @param {ReadRasterOptions} [options={}] optional parameters
   * @returns {Promise<ReadRasterResult>} the decoded arrays as a promise
   */
  async readRasters({
    window: wnd,
    samples = [],
    interleave,
    pool = null,
    width,
    height,
    resampleMethod,
    fillValue,
    signal
  } = {}) {
    const imageWindow = wnd || [0, 0, this.getWidth(), this.getHeight()];
    if (imageWindow[0] > imageWindow[2] || imageWindow[1] > imageWindow[3]) {
      throw new Error("Invalid subsets");
    }
    const imageWindowWidth = imageWindow[2] - imageWindow[0];
    const imageWindowHeight = imageWindow[3] - imageWindow[1];
    const numPixels = imageWindowWidth * imageWindowHeight;
    const samplesPerPixel = this.getSamplesPerPixel();
    if (!samples || !samples.length) {
      for (let i5 = 0; i5 < samplesPerPixel; ++i5) {
        samples.push(i5);
      }
    } else {
      for (let i5 = 0; i5 < samples.length; ++i5) {
        if (samples[i5] >= samplesPerPixel) {
          return Promise.reject(new RangeError(`Invalid sample index '${samples[i5]}'.`));
        }
      }
    }
    let valueArrays;
    if (interleave) {
      const format2 = this.fileDirectory.SampleFormat ? Math.max.apply(null, this.fileDirectory.SampleFormat) : 1;
      const bitsPerSample = Math.max.apply(null, this.fileDirectory.BitsPerSample);
      valueArrays = arrayForType(format2, bitsPerSample, numPixels * samples.length);
      if (fillValue) {
        valueArrays.fill(fillValue);
      }
    } else {
      valueArrays = [];
      for (let i5 = 0; i5 < samples.length; ++i5) {
        const valueArray = this.getArrayForSample(samples[i5], numPixels);
        if (Array.isArray(fillValue) && i5 < fillValue.length) {
          valueArray.fill(fillValue[i5]);
        } else if (fillValue && !Array.isArray(fillValue)) {
          valueArray.fill(fillValue);
        }
        valueArrays.push(valueArray);
      }
    }
    const poolOrDecoder = pool || await getDecoder(this.fileDirectory);
    const result = await this._readRaster(
      imageWindow,
      samples,
      valueArrays,
      interleave,
      poolOrDecoder,
      width,
      height,
      resampleMethod,
      signal
    );
    return result;
  }
  /**
   * Reads raster data from the image as RGB. The result is always an
   * interleaved typed array.
   * Colorspaces other than RGB will be transformed to RGB, color maps expanded.
   * When no other method is applicable, the first sample is used to produce a
   * grayscale image.
   * When provided, only a subset of the raster is read for each sample.
   *
   * @param {Object} [options] optional parameters
   * @param {Array<number>} [options.window] the subset to read data from in pixels.
   * @param {boolean} [options.interleave=true] whether the data shall be read
   *                                             in one single array or separate
   *                                             arrays.
   * @param {import("./geotiff").Pool} [options.pool=null] The optional decoder pool to use.
   * @param {number} [options.width] The desired width of the output. When the width is no the
   *                                 same as the images, resampling will be performed.
   * @param {number} [options.height] The desired height of the output. When the width is no the
   *                                  same as the images, resampling will be performed.
   * @param {string} [options.resampleMethod='nearest'] The desired resampling method.
   * @param {boolean} [options.enableAlpha=false] Enable reading alpha channel if present.
   * @param {AbortSignal} [options.signal] An AbortSignal that may be signalled if the request is
   *                                       to be aborted
   * @returns {Promise<ReadRasterResult>} the RGB array as a Promise
   */
  async readRGB({
    window: window2,
    interleave = true,
    pool = null,
    width,
    height,
    resampleMethod,
    enableAlpha = false,
    signal
  } = {}) {
    const imageWindow = window2 || [0, 0, this.getWidth(), this.getHeight()];
    if (imageWindow[0] > imageWindow[2] || imageWindow[1] > imageWindow[3]) {
      throw new Error("Invalid subsets");
    }
    const pi = this.fileDirectory.PhotometricInterpretation;
    if (pi === photometricInterpretations.RGB) {
      let s5 = [0, 1, 2];
      if (!(this.fileDirectory.ExtraSamples === ExtraSamplesValues.Unspecified) && enableAlpha) {
        s5 = [];
        for (let i5 = 0; i5 < this.fileDirectory.BitsPerSample.length; i5 += 1) {
          s5.push(i5);
        }
      }
      return this.readRasters({
        window: window2,
        interleave,
        samples: s5,
        pool,
        width,
        height,
        resampleMethod,
        signal
      });
    }
    let samples;
    switch (pi) {
      case photometricInterpretations.WhiteIsZero:
      case photometricInterpretations.BlackIsZero:
      case photometricInterpretations.Palette:
        samples = [0];
        break;
      case photometricInterpretations.CMYK:
        samples = [0, 1, 2, 3];
        break;
      case photometricInterpretations.YCbCr:
      case photometricInterpretations.CIELab:
        samples = [0, 1, 2];
        break;
      default:
        throw new Error("Invalid or unsupported photometric interpretation.");
    }
    const subOptions = {
      window: imageWindow,
      interleave: true,
      samples,
      pool,
      width,
      height,
      resampleMethod,
      signal
    };
    const { fileDirectory } = this;
    const raster = await this.readRasters(subOptions);
    const max = 2 ** this.fileDirectory.BitsPerSample[0];
    let data;
    switch (pi) {
      case photometricInterpretations.WhiteIsZero:
        data = fromWhiteIsZero(raster, max);
        break;
      case photometricInterpretations.BlackIsZero:
        data = fromBlackIsZero(raster, max);
        break;
      case photometricInterpretations.Palette:
        data = fromPalette(raster, fileDirectory.ColorMap);
        break;
      case photometricInterpretations.CMYK:
        data = fromCMYK(raster);
        break;
      case photometricInterpretations.YCbCr:
        data = fromYCbCr(raster);
        break;
      case photometricInterpretations.CIELab:
        data = fromCIELab(raster);
        break;
      default:
        throw new Error("Unsupported photometric interpretation.");
    }
    if (!interleave) {
      const red = new Uint8Array(data.length / 3);
      const green = new Uint8Array(data.length / 3);
      const blue = new Uint8Array(data.length / 3);
      for (let i5 = 0, j3 = 0; i5 < data.length; i5 += 3, ++j3) {
        red[j3] = data[i5];
        green[j3] = data[i5 + 1];
        blue[j3] = data[i5 + 2];
      }
      data = [red, green, blue];
    }
    data.width = raster.width;
    data.height = raster.height;
    return data;
  }
  /**
   * Returns an array of tiepoints.
   * @returns {Object[]}
   */
  getTiePoints() {
    if (!this.fileDirectory.ModelTiepoint) {
      return [];
    }
    const tiePoints = [];
    for (let i5 = 0; i5 < this.fileDirectory.ModelTiepoint.length; i5 += 6) {
      tiePoints.push({
        i: this.fileDirectory.ModelTiepoint[i5],
        j: this.fileDirectory.ModelTiepoint[i5 + 1],
        k: this.fileDirectory.ModelTiepoint[i5 + 2],
        x: this.fileDirectory.ModelTiepoint[i5 + 3],
        y: this.fileDirectory.ModelTiepoint[i5 + 4],
        z: this.fileDirectory.ModelTiepoint[i5 + 5]
      });
    }
    return tiePoints;
  }
  /**
   * Returns the parsed GDAL metadata items.
   *
   * If sample is passed to null, dataset-level metadata will be returned.
   * Otherwise only metadata specific to the provided sample will be returned.
   *
   * @param {number} [sample=null] The sample index.
   * @returns {Object}
   */
  getGDALMetadata(sample = null) {
    const metadata = {};
    if (!this.fileDirectory.GDAL_METADATA) {
      return null;
    }
    const string = this.fileDirectory.GDAL_METADATA;
    let items = (0, import_find_tags_by_name.default)(string, "Item");
    if (sample === null) {
      items = items.filter((item) => (0, import_get_attribute.default)(item, "sample") === void 0);
    } else {
      items = items.filter((item) => Number((0, import_get_attribute.default)(item, "sample")) === sample);
    }
    for (let i5 = 0; i5 < items.length; ++i5) {
      const item = items[i5];
      metadata[(0, import_get_attribute.default)(item, "name")] = item.inner;
    }
    return metadata;
  }
  /**
   * Returns the GDAL nodata value
   * @returns {number|null}
   */
  getGDALNoData() {
    if (!this.fileDirectory.GDAL_NODATA) {
      return null;
    }
    const string = this.fileDirectory.GDAL_NODATA;
    return Number(string.substring(0, string.length - 1));
  }
  /**
   * Returns the image origin as a XYZ-vector. When the image has no affine
   * transformation, then an exception is thrown.
   * @returns {Array<number>} The origin as a vector
   */
  getOrigin() {
    const tiePoints = this.fileDirectory.ModelTiepoint;
    const modelTransformation = this.fileDirectory.ModelTransformation;
    if (tiePoints && tiePoints.length === 6) {
      return [
        tiePoints[3],
        tiePoints[4],
        tiePoints[5]
      ];
    }
    if (modelTransformation) {
      return [
        modelTransformation[3],
        modelTransformation[7],
        modelTransformation[11]
      ];
    }
    throw new Error("The image does not have an affine transformation.");
  }
  /**
   * Returns the image resolution as a XYZ-vector. When the image has no affine
   * transformation, then an exception is thrown.
   * @param {GeoTIFFImage} [referenceImage=null] A reference image to calculate the resolution from
   *                                             in cases when the current image does not have the
   *                                             required tags on its own.
   * @returns {Array<number>} The resolution as a vector
   */
  getResolution(referenceImage = null) {
    const modelPixelScale = this.fileDirectory.ModelPixelScale;
    const modelTransformation = this.fileDirectory.ModelTransformation;
    if (modelPixelScale) {
      return [
        modelPixelScale[0],
        -modelPixelScale[1],
        modelPixelScale[2]
      ];
    }
    if (modelTransformation) {
      if (modelTransformation[1] === 0 && modelTransformation[4] === 0) {
        return [
          modelTransformation[0],
          -modelTransformation[5],
          modelTransformation[10]
        ];
      }
      return [
        Math.sqrt(modelTransformation[0] * modelTransformation[0] + modelTransformation[4] * modelTransformation[4]),
        -Math.sqrt(modelTransformation[1] * modelTransformation[1] + modelTransformation[5] * modelTransformation[5]),
        modelTransformation[10]
      ];
    }
    if (referenceImage) {
      const [refResX, refResY, refResZ] = referenceImage.getResolution();
      return [
        refResX * referenceImage.getWidth() / this.getWidth(),
        refResY * referenceImage.getHeight() / this.getHeight(),
        refResZ * referenceImage.getWidth() / this.getWidth()
      ];
    }
    throw new Error("The image does not have an affine transformation.");
  }
  /**
   * Returns whether or not the pixels of the image depict an area (or point).
   * @returns {Boolean} Whether the pixels are a point
   */
  pixelIsArea() {
    return this.geoKeys.GTRasterTypeGeoKey === 1;
  }
  /**
   * Returns the image bounding box as an array of 4 values: min-x, min-y,
   * max-x and max-y. When the image has no affine transformation, then an
   * exception is thrown.
   * @param {boolean} [tilegrid=false] If true return extent for a tilegrid
   *                                   without adjustment for ModelTransformation.
   * @returns {Array<number>} The bounding box
   */
  getBoundingBox(tilegrid = false) {
    const height = this.getHeight();
    const width = this.getWidth();
    if (this.fileDirectory.ModelTransformation && !tilegrid) {
      const [a5, b4, c5, d4, e5, f5, g4, h5] = this.fileDirectory.ModelTransformation;
      const corners = [
        [0, 0],
        [0, height],
        [width, 0],
        [width, height]
      ];
      const projected = corners.map(([I3, J2]) => [
        d4 + a5 * I3 + b4 * J2,
        h5 + e5 * I3 + f5 * J2
      ]);
      const xs = projected.map((pt) => pt[0]);
      const ys = projected.map((pt) => pt[1]);
      return [
        Math.min(...xs),
        Math.min(...ys),
        Math.max(...xs),
        Math.max(...ys)
      ];
    } else {
      const origin = this.getOrigin();
      const resolution = this.getResolution();
      const x1 = origin[0];
      const y1 = origin[1];
      const x22 = x1 + resolution[0] * width;
      const y22 = y1 + resolution[1] * height;
      return [
        Math.min(x1, x22),
        Math.min(y1, y22),
        Math.max(x1, x22),
        Math.max(y1, y22)
      ];
    }
  }
};
var geotiffimage_default = GeoTIFFImage;

// node_modules/geotiff/dist-module/dataview64.js
init_dirname();
init_buffer();
init_process();
var DataView64 = class {
  constructor(arrayBuffer) {
    this._dataView = new DataView(arrayBuffer);
  }
  get buffer() {
    return this._dataView.buffer;
  }
  getUint64(offset, littleEndian) {
    const left = this.getUint32(offset, littleEndian);
    const right = this.getUint32(offset + 4, littleEndian);
    let combined;
    if (littleEndian) {
      combined = left + 2 ** 32 * right;
      if (!Number.isSafeInteger(combined)) {
        throw new Error(
          `${combined} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      }
      return combined;
    }
    combined = 2 ** 32 * left + right;
    if (!Number.isSafeInteger(combined)) {
      throw new Error(
        `${combined} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    }
    return combined;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  getInt64(offset, littleEndian) {
    let value = 0;
    const isNegative = (this._dataView.getUint8(offset + (littleEndian ? 7 : 0)) & 128) > 0;
    let carrying = true;
    for (let i5 = 0; i5 < 8; i5++) {
      let byte = this._dataView.getUint8(offset + (littleEndian ? i5 : 7 - i5));
      if (isNegative) {
        if (carrying) {
          if (byte !== 0) {
            byte = ~(byte - 1) & 255;
            carrying = false;
          }
        } else {
          byte = ~byte & 255;
        }
      }
      value += byte * 256 ** i5;
    }
    if (isNegative) {
      value = -value;
    }
    return value;
  }
  getUint8(offset, littleEndian) {
    return this._dataView.getUint8(offset, littleEndian);
  }
  getInt8(offset, littleEndian) {
    return this._dataView.getInt8(offset, littleEndian);
  }
  getUint16(offset, littleEndian) {
    return this._dataView.getUint16(offset, littleEndian);
  }
  getInt16(offset, littleEndian) {
    return this._dataView.getInt16(offset, littleEndian);
  }
  getUint32(offset, littleEndian) {
    return this._dataView.getUint32(offset, littleEndian);
  }
  getInt32(offset, littleEndian) {
    return this._dataView.getInt32(offset, littleEndian);
  }
  getFloat16(offset, littleEndian) {
    return getFloat16(this._dataView, offset, littleEndian);
  }
  getFloat32(offset, littleEndian) {
    return this._dataView.getFloat32(offset, littleEndian);
  }
  getFloat64(offset, littleEndian) {
    return this._dataView.getFloat64(offset, littleEndian);
  }
};

// node_modules/geotiff/dist-module/dataslice.js
init_dirname();
init_buffer();
init_process();
var DataSlice = class {
  constructor(arrayBuffer, sliceOffset, littleEndian, bigTiff) {
    this._dataView = new DataView(arrayBuffer);
    this._sliceOffset = sliceOffset;
    this._littleEndian = littleEndian;
    this._bigTiff = bigTiff;
  }
  get sliceOffset() {
    return this._sliceOffset;
  }
  get sliceTop() {
    return this._sliceOffset + this.buffer.byteLength;
  }
  get littleEndian() {
    return this._littleEndian;
  }
  get bigTiff() {
    return this._bigTiff;
  }
  get buffer() {
    return this._dataView.buffer;
  }
  covers(offset, length) {
    return this.sliceOffset <= offset && this.sliceTop >= offset + length;
  }
  readUint8(offset) {
    return this._dataView.getUint8(
      offset - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt8(offset) {
    return this._dataView.getInt8(
      offset - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint16(offset) {
    return this._dataView.getUint16(
      offset - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt16(offset) {
    return this._dataView.getInt16(
      offset - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint32(offset) {
    return this._dataView.getUint32(
      offset - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt32(offset) {
    return this._dataView.getInt32(
      offset - this._sliceOffset,
      this._littleEndian
    );
  }
  readFloat32(offset) {
    return this._dataView.getFloat32(
      offset - this._sliceOffset,
      this._littleEndian
    );
  }
  readFloat64(offset) {
    return this._dataView.getFloat64(
      offset - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint64(offset) {
    const left = this.readUint32(offset);
    const right = this.readUint32(offset + 4);
    let combined;
    if (this._littleEndian) {
      combined = left + 2 ** 32 * right;
      if (!Number.isSafeInteger(combined)) {
        throw new Error(
          `${combined} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      }
      return combined;
    }
    combined = 2 ** 32 * left + right;
    if (!Number.isSafeInteger(combined)) {
      throw new Error(
        `${combined} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    }
    return combined;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  readInt64(offset) {
    let value = 0;
    const isNegative = (this._dataView.getUint8(offset + (this._littleEndian ? 7 : 0)) & 128) > 0;
    let carrying = true;
    for (let i5 = 0; i5 < 8; i5++) {
      let byte = this._dataView.getUint8(
        offset + (this._littleEndian ? i5 : 7 - i5)
      );
      if (isNegative) {
        if (carrying) {
          if (byte !== 0) {
            byte = ~(byte - 1) & 255;
            carrying = false;
          }
        } else {
          byte = ~byte & 255;
        }
      }
      value += byte * 256 ** i5;
    }
    if (isNegative) {
      value = -value;
    }
    return value;
  }
  readOffset(offset) {
    if (this._bigTiff) {
      return this.readUint64(offset);
    }
    return this.readUint32(offset);
  }
};

// node_modules/geotiff/dist-module/pool.js
init_dirname();
init_buffer();
init_process();
var defaultPoolSize = typeof navigator !== "undefined" ? navigator.hardwareConcurrency || 2 : 2;
var Pool = class {
  /**
   * @constructor
   * @param {Number} [size] The size of the pool. Defaults to the number of CPUs
   *                      available. When this parameter is `null` or 0, then the
   *                      decoding will be done in the main thread.
   * @param {function(): Worker} [createWorker] A function that creates the decoder worker.
   * Defaults to a worker with all decoders that ship with geotiff.js. The `createWorker()`
   * function is expected to return a `Worker` compatible with Web Workers. For code that
   * runs in Node, [web-worker](https://www.npmjs.com/package/web-worker) is a good choice.
   *
   * A worker that uses a custom lzw decoder would look like this `my-custom-worker.js` file:
   * ```js
   * import { addDecoder, getDecoder } from 'geotiff';
   * addDecoder(5, () => import ('./my-custom-lzw').then((m) => m.default));
   * self.addEventListener('message', async (e) => {
   *   const { id, fileDirectory, buffer } = e.data;
   *   const decoder = await getDecoder(fileDirectory);
   *   const decoded = await decoder.decode(fileDirectory, buffer);
   *   self.postMessage({ decoded, id }, [decoded]);
   * });
   * ```
   * The way the above code is built into a worker by the `createWorker()` function
   * depends on the used bundler. For most bundlers, something like this will work:
   * ```js
   * function createWorker() {
   *   return new Worker(new URL('./my-custom-worker.js', import.meta.url));
   * }
   * ```
   */
  constructor(size = defaultPoolSize, createWorker) {
    this.workers = null;
    this._awaitingDecoder = null;
    this.size = size;
    this.messageId = 0;
    if (size) {
      this._awaitingDecoder = createWorker ? Promise.resolve(createWorker) : new Promise((resolve2) => {
        import("./decoder.ESWF6EHS.js").then((module) => {
          resolve2(module.create);
        });
      });
      this._awaitingDecoder.then((create2) => {
        this._awaitingDecoder = null;
        this.workers = [];
        for (let i5 = 0; i5 < size; i5++) {
          this.workers.push({ worker: create2(), idle: true });
        }
      });
    }
  }
  /**
   * Decode the given block of bytes with the set compression method.
   * @param {ArrayBuffer} buffer the array buffer of bytes to decode.
   * @returns {Promise<ArrayBuffer>} the decoded result as a `Promise`
   */
  async decode(fileDirectory, buffer3) {
    if (this._awaitingDecoder) {
      await this._awaitingDecoder;
    }
    return this.size === 0 ? getDecoder(fileDirectory).then((decoder) => decoder.decode(fileDirectory, buffer3)) : new Promise((resolve2) => {
      const worker = this.workers.find((candidate) => candidate.idle) || this.workers[Math.floor(Math.random() * this.size)];
      worker.idle = false;
      const id = this.messageId++;
      const onMessage = (e5) => {
        if (e5.data.id === id) {
          worker.idle = true;
          resolve2(e5.data.decoded);
          worker.worker.removeEventListener("message", onMessage);
        }
      };
      worker.worker.addEventListener("message", onMessage);
      worker.worker.postMessage({ fileDirectory, buffer: buffer3, id }, [buffer3]);
    });
  }
  destroy() {
    if (this.workers) {
      this.workers.forEach((worker) => {
        worker.worker.terminate();
      });
      this.workers = null;
    }
  }
};
var pool_default = Pool;

// node_modules/geotiff/dist-module/source/remote.js
init_dirname();
init_buffer();
init_process();

// node_modules/geotiff/dist-module/source/httputils.js
init_dirname();
init_buffer();
init_process();
var CRLFCRLF = "\r\n\r\n";
function itemsToObject(items) {
  if (typeof Object.fromEntries !== "undefined") {
    return Object.fromEntries(items);
  }
  const obj = {};
  for (const [key, value] of items) {
    obj[key.toLowerCase()] = value;
  }
  return obj;
}
function parseHeaders(text) {
  const items = text.split("\r\n").map((line) => {
    const kv = line.split(":").map((str) => str.trim());
    kv[0] = kv[0].toLowerCase();
    return kv;
  });
  return itemsToObject(items);
}
function parseContentType(rawContentType) {
  const [type, ...rawParams] = rawContentType.split(";").map((s5) => s5.trim());
  const paramsItems = rawParams.map((param) => param.split("="));
  return { type, params: itemsToObject(paramsItems) };
}
function parseContentRange(rawContentRange) {
  let start;
  let end;
  let total;
  if (rawContentRange) {
    [, start, end, total] = rawContentRange.match(/bytes (\d+)-(\d+)\/(\d+)/);
    start = parseInt(start, 10);
    end = parseInt(end, 10);
    total = parseInt(total, 10);
  }
  return { start, end, total };
}
function parseByteRanges(responseArrayBuffer, boundary) {
  let offset = null;
  const decoder = new TextDecoder("ascii");
  const out = [];
  const startBoundary = `--${boundary}`;
  const endBoundary = `${startBoundary}--`;
  for (let i5 = 0; i5 < 10; ++i5) {
    const text = decoder.decode(
      new Uint8Array(responseArrayBuffer, i5, startBoundary.length)
    );
    if (text === startBoundary) {
      offset = i5;
    }
  }
  if (offset === null) {
    throw new Error("Could not find initial boundary");
  }
  while (offset < responseArrayBuffer.byteLength) {
    const text = decoder.decode(
      new Uint8Array(
        responseArrayBuffer,
        offset,
        Math.min(startBoundary.length + 1024, responseArrayBuffer.byteLength - offset)
      )
    );
    if (text.length === 0 || text.startsWith(endBoundary)) {
      break;
    }
    if (!text.startsWith(startBoundary)) {
      throw new Error("Part does not start with boundary");
    }
    const innerText = text.substr(startBoundary.length + 2);
    if (innerText.length === 0) {
      break;
    }
    const endOfHeaders = innerText.indexOf(CRLFCRLF);
    const headers = parseHeaders(innerText.substr(0, endOfHeaders));
    const { start, end, total } = parseContentRange(headers["content-range"]);
    const startOfData = offset + startBoundary.length + endOfHeaders + CRLFCRLF.length;
    const length = parseInt(end, 10) + 1 - parseInt(start, 10);
    out.push({
      headers,
      data: responseArrayBuffer.slice(startOfData, startOfData + length),
      offset: start,
      length,
      fileSize: total
    });
    offset = startOfData + length + 4;
  }
  return out;
}

// node_modules/geotiff/dist-module/source/basesource.js
init_dirname();
init_buffer();
init_process();
var BaseSource = class {
  /**
   *
   * @param {Slice[]} slices
   * @returns {ArrayBuffer[]}
   */
  async fetch(slices, signal = void 0) {
    return Promise.all(
      slices.map((slice) => this.fetchSlice(slice, signal))
    );
  }
  /**
   *
   * @param {Slice} slice
   * @returns {ArrayBuffer}
   */
  async fetchSlice(slice) {
    throw new Error(`fetching of slice ${slice} not possible, not implemented`);
  }
  /**
   * Returns the filesize if already determined and null otherwise
   */
  get fileSize() {
    return null;
  }
  async close() {
  }
};

// node_modules/geotiff/dist-module/source/blockedsource.js
init_dirname();
init_buffer();
init_process();

// node_modules/geotiff/node_modules/quick-lru/index.js
init_dirname();
init_buffer();
init_process();
var QuickLRU = class extends Map {
  constructor(options = {}) {
    super();
    if (!(options.maxSize && options.maxSize > 0)) {
      throw new TypeError("`maxSize` must be a number greater than 0");
    }
    if (typeof options.maxAge === "number" && options.maxAge === 0) {
      throw new TypeError("`maxAge` must be a number greater than 0");
    }
    this.maxSize = options.maxSize;
    this.maxAge = options.maxAge || Number.POSITIVE_INFINITY;
    this.onEviction = options.onEviction;
    this.cache = /* @__PURE__ */ new Map();
    this.oldCache = /* @__PURE__ */ new Map();
    this._size = 0;
  }
  // TODO: Use private class methods when targeting Node.js 16.
  _emitEvictions(cache) {
    if (typeof this.onEviction !== "function") {
      return;
    }
    for (const [key, item] of cache) {
      this.onEviction(key, item.value);
    }
  }
  _deleteIfExpired(key, item) {
    if (typeof item.expiry === "number" && item.expiry <= Date.now()) {
      if (typeof this.onEviction === "function") {
        this.onEviction(key, item.value);
      }
      return this.delete(key);
    }
    return false;
  }
  _getOrDeleteIfExpired(key, item) {
    const deleted = this._deleteIfExpired(key, item);
    if (deleted === false) {
      return item.value;
    }
  }
  _getItemValue(key, item) {
    return item.expiry ? this._getOrDeleteIfExpired(key, item) : item.value;
  }
  _peek(key, cache) {
    const item = cache.get(key);
    return this._getItemValue(key, item);
  }
  _set(key, value) {
    this.cache.set(key, value);
    this._size++;
    if (this._size >= this.maxSize) {
      this._size = 0;
      this._emitEvictions(this.oldCache);
      this.oldCache = this.cache;
      this.cache = /* @__PURE__ */ new Map();
    }
  }
  _moveToRecent(key, item) {
    this.oldCache.delete(key);
    this._set(key, item);
  }
  *_entriesAscending() {
    for (const item of this.oldCache) {
      const [key, value] = item;
      if (!this.cache.has(key)) {
        const deleted = this._deleteIfExpired(key, value);
        if (deleted === false) {
          yield item;
        }
      }
    }
    for (const item of this.cache) {
      const [key, value] = item;
      const deleted = this._deleteIfExpired(key, value);
      if (deleted === false) {
        yield item;
      }
    }
  }
  get(key) {
    if (this.cache.has(key)) {
      const item = this.cache.get(key);
      return this._getItemValue(key, item);
    }
    if (this.oldCache.has(key)) {
      const item = this.oldCache.get(key);
      if (this._deleteIfExpired(key, item) === false) {
        this._moveToRecent(key, item);
        return item.value;
      }
    }
  }
  set(key, value, { maxAge = this.maxAge } = {}) {
    const expiry = typeof maxAge === "number" && maxAge !== Number.POSITIVE_INFINITY ? Date.now() + maxAge : void 0;
    if (this.cache.has(key)) {
      this.cache.set(key, {
        value,
        expiry
      });
    } else {
      this._set(key, { value, expiry });
    }
    return this;
  }
  has(key) {
    if (this.cache.has(key)) {
      return !this._deleteIfExpired(key, this.cache.get(key));
    }
    if (this.oldCache.has(key)) {
      return !this._deleteIfExpired(key, this.oldCache.get(key));
    }
    return false;
  }
  peek(key) {
    if (this.cache.has(key)) {
      return this._peek(key, this.cache);
    }
    if (this.oldCache.has(key)) {
      return this._peek(key, this.oldCache);
    }
  }
  delete(key) {
    const deleted = this.cache.delete(key);
    if (deleted) {
      this._size--;
    }
    return this.oldCache.delete(key) || deleted;
  }
  clear() {
    this.cache.clear();
    this.oldCache.clear();
    this._size = 0;
  }
  resize(newSize) {
    if (!(newSize && newSize > 0)) {
      throw new TypeError("`maxSize` must be a number greater than 0");
    }
    const items = [...this._entriesAscending()];
    const removeCount = items.length - newSize;
    if (removeCount < 0) {
      this.cache = new Map(items);
      this.oldCache = /* @__PURE__ */ new Map();
      this._size = items.length;
    } else {
      if (removeCount > 0) {
        this._emitEvictions(items.slice(0, removeCount));
      }
      this.oldCache = new Map(items.slice(removeCount));
      this.cache = /* @__PURE__ */ new Map();
      this._size = 0;
    }
    this.maxSize = newSize;
  }
  *keys() {
    for (const [key] of this) {
      yield key;
    }
  }
  *values() {
    for (const [, value] of this) {
      yield value;
    }
  }
  *[Symbol.iterator]() {
    for (const item of this.cache) {
      const [key, value] = item;
      const deleted = this._deleteIfExpired(key, value);
      if (deleted === false) {
        yield [key, value.value];
      }
    }
    for (const item of this.oldCache) {
      const [key, value] = item;
      if (!this.cache.has(key)) {
        const deleted = this._deleteIfExpired(key, value);
        if (deleted === false) {
          yield [key, value.value];
        }
      }
    }
  }
  *entriesDescending() {
    let items = [...this.cache];
    for (let i5 = items.length - 1; i5 >= 0; --i5) {
      const item = items[i5];
      const [key, value] = item;
      const deleted = this._deleteIfExpired(key, value);
      if (deleted === false) {
        yield [key, value.value];
      }
    }
    items = [...this.oldCache];
    for (let i5 = items.length - 1; i5 >= 0; --i5) {
      const item = items[i5];
      const [key, value] = item;
      if (!this.cache.has(key)) {
        const deleted = this._deleteIfExpired(key, value);
        if (deleted === false) {
          yield [key, value.value];
        }
      }
    }
  }
  *entriesAscending() {
    for (const [key, value] of this._entriesAscending()) {
      yield [key, value.value];
    }
  }
  get size() {
    if (!this._size) {
      return this.oldCache.size;
    }
    let oldCacheSize = 0;
    for (const key of this.oldCache.keys()) {
      if (!this.cache.has(key)) {
        oldCacheSize++;
      }
    }
    return Math.min(this._size + oldCacheSize, this.maxSize);
  }
  entries() {
    return this.entriesAscending();
  }
  forEach(callbackFunction, thisArgument = this) {
    for (const [key, value] of this.entriesAscending()) {
      callbackFunction.call(thisArgument, value, key, this);
    }
  }
  get [Symbol.toStringTag]() {
    return JSON.stringify([...this.entriesAscending()]);
  }
};

// node_modules/geotiff/dist-module/utils.js
init_dirname();
init_buffer();
init_process();
async function wait(milliseconds) {
  return new Promise((resolve2) => setTimeout(resolve2, milliseconds));
}
function zip(a5, b4) {
  const A3 = Array.isArray(a5) ? a5 : Array.from(a5);
  const B3 = Array.isArray(b4) ? b4 : Array.from(b4);
  return A3.map((k3, i5) => [k3, B3[i5]]);
}
var AbortError = class _AbortError extends Error {
  constructor(params) {
    super(params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, _AbortError);
    }
    this.name = "AbortError";
  }
};
var CustomAggregateError = class extends Error {
  constructor(errors, message) {
    super(message);
    this.errors = errors;
    this.message = message;
    this.name = "AggregateError";
  }
};
var AggregateError2 = CustomAggregateError;

// node_modules/geotiff/dist-module/source/blockedsource.js
var Block = class {
  /**
   *
   * @param {number} offset
   * @param {number} length
   * @param {ArrayBuffer} [data]
   */
  constructor(offset, length, data = null) {
    this.offset = offset;
    this.length = length;
    this.data = data;
  }
  /**
   * @returns {number} the top byte border
   */
  get top() {
    return this.offset + this.length;
  }
};
var BlockGroup = class {
  /**
   *
   * @param {number} offset
   * @param {number} length
   * @param {number[]} blockIds
   */
  constructor(offset, length, blockIds) {
    this.offset = offset;
    this.length = length;
    this.blockIds = blockIds;
  }
};
var BlockedSource = class extends BaseSource {
  /**
   *
   * @param {BaseSource} source The underlying source that shall be blocked and cached
   * @param {object} options
   * @param {number} [options.blockSize]
   * @param {number} [options.cacheSize]
   */
  constructor(source, { blockSize = 65536, cacheSize = 100 } = {}) {
    super();
    this.source = source;
    this.blockSize = blockSize;
    this.blockCache = new QuickLRU({
      maxSize: cacheSize,
      onEviction: (blockId, block) => {
        this.evictedBlocks.set(blockId, block);
      }
    });
    this.evictedBlocks = /* @__PURE__ */ new Map();
    this.blockRequests = /* @__PURE__ */ new Map();
    this.blockIdsToFetch = /* @__PURE__ */ new Set();
    this.abortedBlockIds = /* @__PURE__ */ new Set();
  }
  get fileSize() {
    return this.source.fileSize;
  }
  /**
   *
   * @param {import("./basesource").Slice[]} slices
   */
  async fetch(slices, signal) {
    const blockRequests = [];
    const missingBlockIds = [];
    const allBlockIds = [];
    this.evictedBlocks.clear();
    for (const { offset, length } of slices) {
      let top = offset + length;
      const { fileSize } = this;
      if (fileSize !== null) {
        top = Math.min(top, fileSize);
      }
      const firstBlockOffset = Math.floor(offset / this.blockSize) * this.blockSize;
      for (let current = firstBlockOffset; current < top; current += this.blockSize) {
        const blockId = Math.floor(current / this.blockSize);
        if (!this.blockCache.has(blockId) && !this.blockRequests.has(blockId)) {
          this.blockIdsToFetch.add(blockId);
          missingBlockIds.push(blockId);
        }
        if (this.blockRequests.has(blockId)) {
          blockRequests.push(this.blockRequests.get(blockId));
        }
        allBlockIds.push(blockId);
      }
    }
    await wait();
    this.fetchBlocks(signal);
    const missingRequests = [];
    for (const blockId of missingBlockIds) {
      if (this.blockRequests.has(blockId)) {
        missingRequests.push(this.blockRequests.get(blockId));
      }
    }
    await Promise.allSettled(blockRequests);
    await Promise.allSettled(missingRequests);
    const abortedBlockRequests = [];
    const abortedBlockIds = allBlockIds.filter((id) => this.abortedBlockIds.has(id) || !this.blockCache.has(id));
    abortedBlockIds.forEach((id) => this.blockIdsToFetch.add(id));
    if (abortedBlockIds.length > 0 && signal && !signal.aborted) {
      this.fetchBlocks(null);
      for (const blockId of abortedBlockIds) {
        const block = this.blockRequests.get(blockId);
        if (!block) {
          throw new Error(`Block ${blockId} is not in the block requests`);
        }
        abortedBlockRequests.push(block);
      }
      await Promise.allSettled(abortedBlockRequests);
    }
    if (signal && signal.aborted) {
      throw new AbortError("Request was aborted");
    }
    const blocks = allBlockIds.map((id) => this.blockCache.get(id) || this.evictedBlocks.get(id));
    const failedBlocks = blocks.filter((i5) => !i5);
    if (failedBlocks.length) {
      throw new AggregateError2(failedBlocks, "Request failed");
    }
    const requiredBlocks = new Map(zip(allBlockIds, blocks));
    return this.readSliceData(slices, requiredBlocks);
  }
  /**
   *
   * @param {AbortSignal} signal
   */
  fetchBlocks(signal) {
    if (this.blockIdsToFetch.size > 0) {
      const groups = this.groupBlocks(this.blockIdsToFetch);
      const groupRequests = this.source.fetch(groups, signal);
      for (let groupIndex = 0; groupIndex < groups.length; ++groupIndex) {
        const group = groups[groupIndex];
        for (const blockId of group.blockIds) {
          this.blockRequests.set(blockId, (async () => {
            try {
              const response = (await groupRequests)[groupIndex];
              const blockOffset = blockId * this.blockSize;
              const o5 = blockOffset - response.offset;
              const t5 = Math.min(o5 + this.blockSize, response.data.byteLength);
              const data = response.data.slice(o5, t5);
              const block = new Block(
                blockOffset,
                data.byteLength,
                data,
                blockId
              );
              this.blockCache.set(blockId, block);
              this.abortedBlockIds.delete(blockId);
            } catch (err) {
              if (err.name === "AbortError") {
                err.signal = signal;
                this.blockCache.delete(blockId);
                this.abortedBlockIds.add(blockId);
              } else {
                throw err;
              }
            } finally {
              this.blockRequests.delete(blockId);
            }
          })());
        }
      }
      this.blockIdsToFetch.clear();
    }
  }
  /**
   *
   * @param {Set} blockIds
   * @returns {BlockGroup[]}
   */
  groupBlocks(blockIds) {
    const sortedBlockIds = Array.from(blockIds).sort((a5, b4) => a5 - b4);
    if (sortedBlockIds.length === 0) {
      return [];
    }
    let current = [];
    let lastBlockId = null;
    const groups = [];
    for (const blockId of sortedBlockIds) {
      if (lastBlockId === null || lastBlockId + 1 === blockId) {
        current.push(blockId);
        lastBlockId = blockId;
      } else {
        groups.push(new BlockGroup(
          current[0] * this.blockSize,
          current.length * this.blockSize,
          current
        ));
        current = [blockId];
        lastBlockId = blockId;
      }
    }
    groups.push(new BlockGroup(
      current[0] * this.blockSize,
      current.length * this.blockSize,
      current
    ));
    return groups;
  }
  /**
   *
   * @param {import("./basesource").Slice[]} slices
   * @param {Map} blocks
   */
  readSliceData(slices, blocks) {
    return slices.map((slice) => {
      let top = slice.offset + slice.length;
      if (this.fileSize !== null) {
        top = Math.min(this.fileSize, top);
      }
      const blockIdLow = Math.floor(slice.offset / this.blockSize);
      const blockIdHigh = Math.floor(top / this.blockSize);
      const sliceData = new ArrayBuffer(slice.length);
      const sliceView = new Uint8Array(sliceData);
      for (let blockId = blockIdLow; blockId <= blockIdHigh; ++blockId) {
        const block = blocks.get(blockId);
        const delta = block.offset - slice.offset;
        const topDelta = block.top - top;
        let blockInnerOffset = 0;
        let rangeInnerOffset = 0;
        let usedBlockLength;
        if (delta < 0) {
          blockInnerOffset = -delta;
        } else if (delta > 0) {
          rangeInnerOffset = delta;
        }
        if (topDelta < 0) {
          usedBlockLength = block.length - blockInnerOffset;
        } else {
          usedBlockLength = top - block.offset - blockInnerOffset;
        }
        const blockView = new Uint8Array(block.data, blockInnerOffset, usedBlockLength);
        sliceView.set(blockView, rangeInnerOffset);
      }
      return sliceData;
    });
  }
};

// node_modules/geotiff/dist-module/source/client/fetch.js
init_dirname();
init_buffer();
init_process();

// node_modules/geotiff/dist-module/source/client/base.js
init_dirname();
init_buffer();
init_process();
var BaseResponse = class {
  /**
   * Returns whether the response has an ok'ish status code
   */
  get ok() {
    return this.status >= 200 && this.status <= 299;
  }
  /**
   * Returns the status code of the response
   */
  get status() {
    throw new Error("not implemented");
  }
  /**
   * Returns the value of the specified header
   * @param {string} headerName the header name
   * @returns {string} the header value
   */
  getHeader(headerName) {
    throw new Error("not implemented");
  }
  /**
   * @returns {ArrayBuffer} the response data of the request
   */
  async getData() {
    throw new Error("not implemented");
  }
};
var BaseClient = class {
  constructor(url) {
    this.url = url;
  }
  /**
   * Send a request with the options
   * @param {{headers: HeadersInit, signal: AbortSignal}} [options={}]
   * @returns {Promise<BaseResponse>}
   */
  async request({ headers, signal } = {}) {
    throw new Error("request is not implemented");
  }
};

// node_modules/geotiff/dist-module/source/client/fetch.js
var FetchResponse = class extends BaseResponse {
  /**
   * BaseResponse facade for fetch API Response
   * @param {Response} response
   */
  constructor(response) {
    super();
    this.response = response;
  }
  get status() {
    return this.response.status;
  }
  getHeader(name2) {
    return this.response.headers.get(name2);
  }
  async getData() {
    const data = this.response.arrayBuffer ? await this.response.arrayBuffer() : (await this.response.buffer()).buffer;
    return data;
  }
};
var FetchClient = class extends BaseClient {
  constructor(url, credentials) {
    super(url);
    this.credentials = credentials;
  }
  /**
   * @param {{headers: HeadersInit, signal: AbortSignal}} [options={}]
   * @returns {Promise<FetchResponse>}
   */
  async request({ headers, signal } = {}) {
    const response = await fetch(this.url, {
      headers,
      credentials: this.credentials,
      signal
    });
    return new FetchResponse(response);
  }
};

// node_modules/geotiff/dist-module/source/client/xhr.js
init_dirname();
init_buffer();
init_process();
var XHRResponse = class extends BaseResponse {
  /**
   * BaseResponse facade for XMLHttpRequest
   * @param {XMLHttpRequest} xhr
   * @param {ArrayBuffer} data
   */
  constructor(xhr, data) {
    super();
    this.xhr = xhr;
    this.data = data;
  }
  get status() {
    return this.xhr.status;
  }
  getHeader(name2) {
    return this.xhr.getResponseHeader(name2);
  }
  async getData() {
    return this.data;
  }
};
var XHRClient = class extends BaseClient {
  constructRequest(headers, signal) {
    return new Promise((resolve2, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", this.url);
      xhr.responseType = "arraybuffer";
      for (const [key, value] of Object.entries(headers)) {
        xhr.setRequestHeader(key, value);
      }
      xhr.onload = () => {
        const data = xhr.response;
        resolve2(new XHRResponse(xhr, data));
      };
      xhr.onerror = reject;
      xhr.onabort = () => reject(new AbortError("Request aborted"));
      xhr.send();
      if (signal) {
        if (signal.aborted) {
          xhr.abort();
        }
        signal.addEventListener("abort", () => xhr.abort());
      }
    });
  }
  async request({ headers, signal } = {}) {
    const response = await this.constructRequest(headers, signal);
    return response;
  }
};

// node_modules/geotiff/dist-module/source/client/http.js
init_dirname();
init_buffer();
init_process();

// node_modules/@jspm/core/nodelibs/browser/http.js
init_dirname();
init_buffer();
init_process();

// node_modules/@jspm/core/nodelibs/browser/chunk-CkFCi-G1.js
init_dirname();
init_buffer();
init_process();
var exports = {};
var _dewExec = false;
function dew2() {
  if (_dewExec)
    return exports;
  _dewExec = true;
  if (typeof Object.create === "function") {
    exports = function inherits(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
    };
  } else {
    exports = function inherits(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
    };
  }
  return exports;
}

// node_modules/@jspm/core/nodelibs/browser/chunk-DtDiafJB.js
init_dirname();
init_buffer();
init_process();

// node_modules/@jspm/core/nodelibs/browser/chunk-tHuMsdT0.js
init_dirname();
init_buffer();
init_process();
var e;
var t;
var n = "object" == typeof Reflect ? Reflect : null;
var r = n && "function" == typeof n.apply ? n.apply : function(e5, t5, n5) {
  return Function.prototype.apply.call(e5, t5, n5);
};
t = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e5) {
  return Object.getOwnPropertyNames(e5).concat(Object.getOwnPropertySymbols(e5));
} : function(e5) {
  return Object.getOwnPropertyNames(e5);
};
var i = Number.isNaN || function(e5) {
  return e5 != e5;
};
function o() {
  o.init.call(this);
}
e = o, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
var s = 10;
function u(e5) {
  if ("function" != typeof e5)
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e5);
}
function f(e5) {
  return void 0 === e5._maxListeners ? o.defaultMaxListeners : e5._maxListeners;
}
function v(e5, t5, n5, r5) {
  var i5, o5, s5, v5;
  if (u(n5), void 0 === (o5 = e5._events) ? (o5 = e5._events = /* @__PURE__ */ Object.create(null), e5._eventsCount = 0) : (void 0 !== o5.newListener && (e5.emit("newListener", t5, n5.listener ? n5.listener : n5), o5 = e5._events), s5 = o5[t5]), void 0 === s5)
    s5 = o5[t5] = n5, ++e5._eventsCount;
  else if ("function" == typeof s5 ? s5 = o5[t5] = r5 ? [n5, s5] : [s5, n5] : r5 ? s5.unshift(n5) : s5.push(n5), (i5 = f(e5)) > 0 && s5.length > i5 && !s5.warned) {
    s5.warned = true;
    var a5 = new Error("Possible EventEmitter memory leak detected. " + s5.length + " " + String(t5) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a5.name = "MaxListenersExceededWarning", a5.emitter = e5, a5.type = t5, a5.count = s5.length, v5 = a5, console && console.warn && console.warn(v5);
  }
  return e5;
}
function a() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function l(e5, t5, n5) {
  var r5 = { fired: false, wrapFn: void 0, target: e5, type: t5, listener: n5 }, i5 = a.bind(r5);
  return i5.listener = n5, r5.wrapFn = i5, i5;
}
function h(e5, t5, n5) {
  var r5 = e5._events;
  if (void 0 === r5)
    return [];
  var i5 = r5[t5];
  return void 0 === i5 ? [] : "function" == typeof i5 ? n5 ? [i5.listener || i5] : [i5] : n5 ? function(e6) {
    for (var t6 = new Array(e6.length), n6 = 0; n6 < t6.length; ++n6)
      t6[n6] = e6[n6].listener || e6[n6];
    return t6;
  }(i5) : c(i5, i5.length);
}
function p(e5) {
  var t5 = this._events;
  if (void 0 !== t5) {
    var n5 = t5[e5];
    if ("function" == typeof n5)
      return 1;
    if (void 0 !== n5)
      return n5.length;
  }
  return 0;
}
function c(e5, t5) {
  for (var n5 = new Array(t5), r5 = 0; r5 < t5; ++r5)
    n5[r5] = e5[r5];
  return n5;
}
Object.defineProperty(o, "defaultMaxListeners", { enumerable: true, get: function() {
  return s;
}, set: function(e5) {
  if ("number" != typeof e5 || e5 < 0 || i(e5))
    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e5 + ".");
  s = e5;
} }), o.init = function() {
  void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, o.prototype.setMaxListeners = function(e5) {
  if ("number" != typeof e5 || e5 < 0 || i(e5))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e5 + ".");
  return this._maxListeners = e5, this;
}, o.prototype.getMaxListeners = function() {
  return f(this);
}, o.prototype.emit = function(e5) {
  for (var t5 = [], n5 = 1; n5 < arguments.length; n5++)
    t5.push(arguments[n5]);
  var i5 = "error" === e5, o5 = this._events;
  if (void 0 !== o5)
    i5 = i5 && void 0 === o5.error;
  else if (!i5)
    return false;
  if (i5) {
    var s5;
    if (t5.length > 0 && (s5 = t5[0]), s5 instanceof Error)
      throw s5;
    var u5 = new Error("Unhandled error." + (s5 ? " (" + s5.message + ")" : ""));
    throw u5.context = s5, u5;
  }
  var f5 = o5[e5];
  if (void 0 === f5)
    return false;
  if ("function" == typeof f5)
    r(f5, this, t5);
  else {
    var v5 = f5.length, a5 = c(f5, v5);
    for (n5 = 0; n5 < v5; ++n5)
      r(a5[n5], this, t5);
  }
  return true;
}, o.prototype.addListener = function(e5, t5) {
  return v(this, e5, t5, false);
}, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(e5, t5) {
  return v(this, e5, t5, true);
}, o.prototype.once = function(e5, t5) {
  return u(t5), this.on(e5, l(this, e5, t5)), this;
}, o.prototype.prependOnceListener = function(e5, t5) {
  return u(t5), this.prependListener(e5, l(this, e5, t5)), this;
}, o.prototype.removeListener = function(e5, t5) {
  var n5, r5, i5, o5, s5;
  if (u(t5), void 0 === (r5 = this._events))
    return this;
  if (void 0 === (n5 = r5[e5]))
    return this;
  if (n5 === t5 || n5.listener === t5)
    0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete r5[e5], r5.removeListener && this.emit("removeListener", e5, n5.listener || t5));
  else if ("function" != typeof n5) {
    for (i5 = -1, o5 = n5.length - 1; o5 >= 0; o5--)
      if (n5[o5] === t5 || n5[o5].listener === t5) {
        s5 = n5[o5].listener, i5 = o5;
        break;
      }
    if (i5 < 0)
      return this;
    0 === i5 ? n5.shift() : !function(e6, t6) {
      for (; t6 + 1 < e6.length; t6++)
        e6[t6] = e6[t6 + 1];
      e6.pop();
    }(n5, i5), 1 === n5.length && (r5[e5] = n5[0]), void 0 !== r5.removeListener && this.emit("removeListener", e5, s5 || t5);
  }
  return this;
}, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(e5) {
  var t5, n5, r5;
  if (void 0 === (n5 = this._events))
    return this;
  if (void 0 === n5.removeListener)
    return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== n5[e5] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete n5[e5]), this;
  if (0 === arguments.length) {
    var i5, o5 = Object.keys(n5);
    for (r5 = 0; r5 < o5.length; ++r5)
      "removeListener" !== (i5 = o5[r5]) && this.removeAllListeners(i5);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if ("function" == typeof (t5 = n5[e5]))
    this.removeListener(e5, t5);
  else if (void 0 !== t5)
    for (r5 = t5.length - 1; r5 >= 0; r5--)
      this.removeListener(e5, t5[r5]);
  return this;
}, o.prototype.listeners = function(e5) {
  return h(this, e5, true);
}, o.prototype.rawListeners = function(e5) {
  return h(this, e5, false);
}, o.listenerCount = function(e5, t5) {
  return "function" == typeof e5.listenerCount ? e5.listenerCount(t5) : p.call(e5, t5);
}, o.prototype.listenerCount = p, o.prototype.eventNames = function() {
  return this._eventsCount > 0 ? t(this._events) : [];
};
var y = e;
y.EventEmitter;
y.defaultMaxListeners;
y.init;
y.listenerCount;
y.EventEmitter;
y.defaultMaxListeners;
y.init;
y.listenerCount;

// node_modules/@jspm/core/nodelibs/browser/chunk-DtDiafJB.js
y.once = function(emitter, event) {
  return new Promise((resolve2, reject) => {
    function eventListener(...args) {
      if (errorListener !== void 0) {
        emitter.removeListener("error", errorListener);
      }
      resolve2(args);
    }
    let errorListener;
    if (event !== "error") {
      errorListener = (err) => {
        emitter.removeListener(name, eventListener);
        reject(err);
      };
      emitter.once("error", errorListener);
    }
    emitter.once(event, eventListener);
  });
};
y.on = function(emitter, event) {
  const unconsumedEventValues = [];
  const unconsumedPromises = [];
  let error2 = null;
  let finished = false;
  const iterator = {
    async next() {
      const value = unconsumedEventValues.shift();
      if (value) {
        return createIterResult(value, false);
      }
      if (error2) {
        const p5 = Promise.reject(error2);
        error2 = null;
        return p5;
      }
      if (finished) {
        return createIterResult(void 0, true);
      }
      return new Promise((resolve2, reject) => unconsumedPromises.push({ resolve: resolve2, reject }));
    },
    async return() {
      emitter.removeListener(event, eventHandler);
      emitter.removeListener("error", errorHandler);
      finished = true;
      for (const promise of unconsumedPromises) {
        promise.resolve(createIterResult(void 0, true));
      }
      return createIterResult(void 0, true);
    },
    throw(err) {
      error2 = err;
      emitter.removeListener(event, eventHandler);
      emitter.removeListener("error", errorHandler);
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
  emitter.on(event, eventHandler);
  emitter.on("error", errorHandler);
  return iterator;
  function eventHandler(...args) {
    const promise = unconsumedPromises.shift();
    if (promise) {
      promise.resolve(createIterResult(args, false));
    } else {
      unconsumedEventValues.push(args);
    }
  }
  function errorHandler(err) {
    finished = true;
    const toError = unconsumedPromises.shift();
    if (toError) {
      toError.reject(err);
    } else {
      error2 = err;
    }
    iterator.return();
  }
};

// node_modules/@jspm/core/nodelibs/browser/http.js
init_chunk_DtuTasat();

// node_modules/@jspm/core/nodelibs/browser/chunk-CbQqNoLO.js
init_dirname();
init_buffer();
init_process();

// node_modules/@jspm/core/nodelibs/browser/chunk-D3uu3VYh.js
init_dirname();
init_buffer();
init_process();
var e$2;
var t$3;
var n$2;
var r$2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : global;
var o$3 = e$2 = {};
function i$2() {
  throw new Error("setTimeout has not been defined");
}
function u$2() {
  throw new Error("clearTimeout has not been defined");
}
function c$2(e5) {
  if (t$3 === setTimeout)
    return setTimeout(e5, 0);
  if ((t$3 === i$2 || !t$3) && setTimeout)
    return t$3 = setTimeout, setTimeout(e5, 0);
  try {
    return t$3(e5, 0);
  } catch (n5) {
    try {
      return t$3.call(null, e5, 0);
    } catch (n6) {
      return t$3.call(this || r$2, e5, 0);
    }
  }
}
!function() {
  try {
    t$3 = "function" == typeof setTimeout ? setTimeout : i$2;
  } catch (e5) {
    t$3 = i$2;
  }
  try {
    n$2 = "function" == typeof clearTimeout ? clearTimeout : u$2;
  } catch (e5) {
    n$2 = u$2;
  }
}();
var l$2;
var s$1 = [];
var f$1 = false;
var a$1 = -1;
function h$1() {
  f$1 && l$2 && (f$1 = false, l$2.length ? s$1 = l$2.concat(s$1) : a$1 = -1, s$1.length && d$1());
}
function d$1() {
  if (!f$1) {
    var e5 = c$2(h$1);
    f$1 = true;
    for (var t5 = s$1.length; t5; ) {
      for (l$2 = s$1, s$1 = []; ++a$1 < t5; )
        l$2 && l$2[a$1].run();
      a$1 = -1, t5 = s$1.length;
    }
    l$2 = null, f$1 = false, function(e6) {
      if (n$2 === clearTimeout)
        return clearTimeout(e6);
      if ((n$2 === u$2 || !n$2) && clearTimeout)
        return n$2 = clearTimeout, clearTimeout(e6);
      try {
        n$2(e6);
      } catch (t6) {
        try {
          return n$2.call(null, e6);
        } catch (t7) {
          return n$2.call(this || r$2, e6);
        }
      }
    }(e5);
  }
}
function m$1(e5, t5) {
  (this || r$2).fun = e5, (this || r$2).array = t5;
}
function p$1() {
}
o$3.nextTick = function(e5) {
  var t5 = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n5 = 1; n5 < arguments.length; n5++)
      t5[n5 - 1] = arguments[n5];
  s$1.push(new m$1(e5, t5)), 1 !== s$1.length || f$1 || c$2(d$1);
}, m$1.prototype.run = function() {
  (this || r$2).fun.apply(null, (this || r$2).array);
}, o$3.title = "browser", o$3.browser = true, o$3.env = {}, o$3.argv = [], o$3.version = "", o$3.versions = {}, o$3.on = p$1, o$3.addListener = p$1, o$3.once = p$1, o$3.off = p$1, o$3.removeListener = p$1, o$3.removeAllListeners = p$1, o$3.emit = p$1, o$3.prependListener = p$1, o$3.prependOnceListener = p$1, o$3.listeners = function(e5) {
  return [];
}, o$3.binding = function(e5) {
  throw new Error("process.binding is not supported");
}, o$3.cwd = function() {
  return "/";
}, o$3.chdir = function(e5) {
  throw new Error("process.chdir is not supported");
}, o$3.umask = function() {
  return 0;
};
var T$1 = e$2;
T$1.addListener;
T$1.argv;
T$1.binding;
T$1.browser;
T$1.chdir;
T$1.cwd;
T$1.emit;
T$1.env;
T$1.listeners;
T$1.nextTick;
T$1.off;
T$1.on;
T$1.once;
T$1.prependListener;
T$1.prependOnceListener;
T$1.removeAllListeners;
T$1.removeListener;
T$1.title;
T$1.umask;
T$1.version;
T$1.versions;
var t2 = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
var e2 = Object.prototype.toString;
var o2 = function(o5) {
  return !(t2 && o5 && "object" == typeof o5 && Symbol.toStringTag in o5) && "[object Arguments]" === e2.call(o5);
};
var n2 = function(t5) {
  return !!o2(t5) || null !== t5 && "object" == typeof t5 && "number" == typeof t5.length && t5.length >= 0 && "[object Array]" !== e2.call(t5) && "[object Function]" === e2.call(t5.callee);
};
var r2 = function() {
  return o2(arguments);
}();
o2.isLegacyArguments = n2;
var l2 = r2 ? o2 : n2;
var t$1 = Object.prototype.toString;
var o$1 = Function.prototype.toString;
var n$1 = /^\s*(?:function)?\*/;
var e$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
var r$1 = Object.getPrototypeOf;
var c2 = function() {
  if (!e$1)
    return false;
  try {
    return Function("return function*() {}")();
  } catch (t5) {
  }
}();
var u2 = c2 ? r$1(c2) : {};
var i2 = function(c5) {
  return "function" == typeof c5 && (!!n$1.test(o$1.call(c5)) || (e$1 ? r$1(c5) === u2 : "[object GeneratorFunction]" === t$1.call(c5)));
};
var t$2 = "function" == typeof Object.create ? function(t5, e5) {
  e5 && (t5.super_ = e5, t5.prototype = Object.create(e5.prototype, { constructor: { value: t5, enumerable: false, writable: true, configurable: true } }));
} : function(t5, e5) {
  if (e5) {
    t5.super_ = e5;
    var o5 = function() {
    };
    o5.prototype = e5.prototype, t5.prototype = new o5(), t5.prototype.constructor = t5;
  }
};
var i$1 = function(e5) {
  return e5 && "object" == typeof e5 && "function" == typeof e5.copy && "function" == typeof e5.fill && "function" == typeof e5.readUInt8;
};
var o$2 = {};
var u$1 = i$1;
var f2 = l2;
var a2 = i2;
function c$1(e5) {
  return e5.call.bind(e5);
}
var s2 = "undefined" != typeof BigInt;
var p2 = "undefined" != typeof Symbol;
var y2 = p2 && void 0 !== Symbol.toStringTag;
var l$1 = "undefined" != typeof Uint8Array;
var d = "undefined" != typeof ArrayBuffer;
if (l$1 && y2)
  var g = Object.getPrototypeOf(Uint8Array.prototype), b = c$1(Object.getOwnPropertyDescriptor(g, Symbol.toStringTag).get);
var m = c$1(Object.prototype.toString);
var h2 = c$1(Number.prototype.valueOf);
var j = c$1(String.prototype.valueOf);
var A = c$1(Boolean.prototype.valueOf);
if (s2)
  var w = c$1(BigInt.prototype.valueOf);
if (p2)
  var v2 = c$1(Symbol.prototype.valueOf);
function O(e5, t5) {
  if ("object" != typeof e5)
    return false;
  try {
    return t5(e5), true;
  } catch (e6) {
    return false;
  }
}
function S(e5) {
  return l$1 && y2 ? void 0 !== b(e5) : B(e5) || k(e5) || E(e5) || D(e5) || U(e5) || P(e5) || x(e5) || I(e5) || M(e5) || z(e5) || F(e5);
}
function B(e5) {
  return l$1 && y2 ? "Uint8Array" === b(e5) : "[object Uint8Array]" === m(e5) || u$1(e5) && void 0 !== e5.buffer;
}
function k(e5) {
  return l$1 && y2 ? "Uint8ClampedArray" === b(e5) : "[object Uint8ClampedArray]" === m(e5);
}
function E(e5) {
  return l$1 && y2 ? "Uint16Array" === b(e5) : "[object Uint16Array]" === m(e5);
}
function D(e5) {
  return l$1 && y2 ? "Uint32Array" === b(e5) : "[object Uint32Array]" === m(e5);
}
function U(e5) {
  return l$1 && y2 ? "Int8Array" === b(e5) : "[object Int8Array]" === m(e5);
}
function P(e5) {
  return l$1 && y2 ? "Int16Array" === b(e5) : "[object Int16Array]" === m(e5);
}
function x(e5) {
  return l$1 && y2 ? "Int32Array" === b(e5) : "[object Int32Array]" === m(e5);
}
function I(e5) {
  return l$1 && y2 ? "Float32Array" === b(e5) : "[object Float32Array]" === m(e5);
}
function M(e5) {
  return l$1 && y2 ? "Float64Array" === b(e5) : "[object Float64Array]" === m(e5);
}
function z(e5) {
  return l$1 && y2 ? "BigInt64Array" === b(e5) : "[object BigInt64Array]" === m(e5);
}
function F(e5) {
  return l$1 && y2 ? "BigUint64Array" === b(e5) : "[object BigUint64Array]" === m(e5);
}
function T(e5) {
  return "[object Map]" === m(e5);
}
function N(e5) {
  return "[object Set]" === m(e5);
}
function W(e5) {
  return "[object WeakMap]" === m(e5);
}
function $(e5) {
  return "[object WeakSet]" === m(e5);
}
function C(e5) {
  return "[object ArrayBuffer]" === m(e5);
}
function V(e5) {
  return "undefined" != typeof ArrayBuffer && (C.working ? C(e5) : e5 instanceof ArrayBuffer);
}
function G(e5) {
  return "[object DataView]" === m(e5);
}
function R(e5) {
  return "undefined" != typeof DataView && (G.working ? G(e5) : e5 instanceof DataView);
}
function J(e5) {
  return "[object SharedArrayBuffer]" === m(e5);
}
function _(e5) {
  return "undefined" != typeof SharedArrayBuffer && (J.working ? J(e5) : e5 instanceof SharedArrayBuffer);
}
function H(e5) {
  return O(e5, h2);
}
function Z(e5) {
  return O(e5, j);
}
function q(e5) {
  return O(e5, A);
}
function K(e5) {
  return s2 && O(e5, w);
}
function L(e5) {
  return p2 && O(e5, v2);
}
o$2.isArgumentsObject = f2, o$2.isGeneratorFunction = a2, o$2.isPromise = function(e5) {
  return "undefined" != typeof Promise && e5 instanceof Promise || null !== e5 && "object" == typeof e5 && "function" == typeof e5.then && "function" == typeof e5.catch;
}, o$2.isArrayBufferView = function(e5) {
  return d && ArrayBuffer.isView ? ArrayBuffer.isView(e5) : S(e5) || R(e5);
}, o$2.isTypedArray = S, o$2.isUint8Array = B, o$2.isUint8ClampedArray = k, o$2.isUint16Array = E, o$2.isUint32Array = D, o$2.isInt8Array = U, o$2.isInt16Array = P, o$2.isInt32Array = x, o$2.isFloat32Array = I, o$2.isFloat64Array = M, o$2.isBigInt64Array = z, o$2.isBigUint64Array = F, T.working = "undefined" != typeof Map && T(/* @__PURE__ */ new Map()), o$2.isMap = function(e5) {
  return "undefined" != typeof Map && (T.working ? T(e5) : e5 instanceof Map);
}, N.working = "undefined" != typeof Set && N(/* @__PURE__ */ new Set()), o$2.isSet = function(e5) {
  return "undefined" != typeof Set && (N.working ? N(e5) : e5 instanceof Set);
}, W.working = "undefined" != typeof WeakMap && W(/* @__PURE__ */ new WeakMap()), o$2.isWeakMap = function(e5) {
  return "undefined" != typeof WeakMap && (W.working ? W(e5) : e5 instanceof WeakMap);
}, $.working = "undefined" != typeof WeakSet && $(/* @__PURE__ */ new WeakSet()), o$2.isWeakSet = function(e5) {
  return $(e5);
}, C.working = "undefined" != typeof ArrayBuffer && C(new ArrayBuffer()), o$2.isArrayBuffer = V, G.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && G(new DataView(new ArrayBuffer(1), 0, 1)), o$2.isDataView = R, J.working = "undefined" != typeof SharedArrayBuffer && J(new SharedArrayBuffer()), o$2.isSharedArrayBuffer = _, o$2.isAsyncFunction = function(e5) {
  return "[object AsyncFunction]" === m(e5);
}, o$2.isMapIterator = function(e5) {
  return "[object Map Iterator]" === m(e5);
}, o$2.isSetIterator = function(e5) {
  return "[object Set Iterator]" === m(e5);
}, o$2.isGeneratorObject = function(e5) {
  return "[object Generator]" === m(e5);
}, o$2.isWebAssemblyCompiledModule = function(e5) {
  return "[object WebAssembly.Module]" === m(e5);
}, o$2.isNumberObject = H, o$2.isStringObject = Z, o$2.isBooleanObject = q, o$2.isBigIntObject = K, o$2.isSymbolObject = L, o$2.isBoxedPrimitive = function(e5) {
  return H(e5) || Z(e5) || q(e5) || K(e5) || L(e5);
}, o$2.isAnyArrayBuffer = function(e5) {
  return l$1 && (V(e5) || _(e5));
}, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(e5) {
  Object.defineProperty(o$2, e5, { enumerable: false, value: function() {
    throw new Error(e5 + " is not supported in userland");
  } });
});
var Q = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : global;
var X = {};
var Y = T$1;
var ee = Object.getOwnPropertyDescriptors || function(e5) {
  for (var t5 = Object.keys(e5), r5 = {}, n5 = 0; n5 < t5.length; n5++)
    r5[t5[n5]] = Object.getOwnPropertyDescriptor(e5, t5[n5]);
  return r5;
};
var te = /%[sdj%]/g;
X.format = function(e5) {
  if (!ge(e5)) {
    for (var t5 = [], r5 = 0; r5 < arguments.length; r5++)
      t5.push(oe(arguments[r5]));
    return t5.join(" ");
  }
  r5 = 1;
  for (var n5 = arguments, i5 = n5.length, o5 = String(e5).replace(te, function(e6) {
    if ("%%" === e6)
      return "%";
    if (r5 >= i5)
      return e6;
    switch (e6) {
      case "%s":
        return String(n5[r5++]);
      case "%d":
        return Number(n5[r5++]);
      case "%j":
        try {
          return JSON.stringify(n5[r5++]);
        } catch (e7) {
          return "[Circular]";
        }
      default:
        return e6;
    }
  }), u5 = n5[r5]; r5 < i5; u5 = n5[++r5])
    le(u5) || !he(u5) ? o5 += " " + u5 : o5 += " " + oe(u5);
  return o5;
}, X.deprecate = function(e5, t5) {
  if (void 0 !== Y && true === Y.noDeprecation)
    return e5;
  if (void 0 === Y)
    return function() {
      return X.deprecate(e5, t5).apply(this || Q, arguments);
    };
  var r5 = false;
  return function() {
    if (!r5) {
      if (Y.throwDeprecation)
        throw new Error(t5);
      Y.traceDeprecation ? console.trace(t5) : console.error(t5), r5 = true;
    }
    return e5.apply(this || Q, arguments);
  };
};
var re = {};
var ne = /^$/;
if (Y.env.NODE_DEBUG) {
  ie = Y.env.NODE_DEBUG;
  ie = ie.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), ne = new RegExp("^" + ie + "$", "i");
}
var ie;
function oe(e5, t5) {
  var r5 = { seen: [], stylize: fe };
  return arguments.length >= 3 && (r5.depth = arguments[2]), arguments.length >= 4 && (r5.colors = arguments[3]), ye(t5) ? r5.showHidden = t5 : t5 && X._extend(r5, t5), be(r5.showHidden) && (r5.showHidden = false), be(r5.depth) && (r5.depth = 2), be(r5.colors) && (r5.colors = false), be(r5.customInspect) && (r5.customInspect = true), r5.colors && (r5.stylize = ue), ae(r5, e5, r5.depth);
}
function ue(e5, t5) {
  var r5 = oe.styles[t5];
  return r5 ? "\x1B[" + oe.colors[r5][0] + "m" + e5 + "\x1B[" + oe.colors[r5][1] + "m" : e5;
}
function fe(e5, t5) {
  return e5;
}
function ae(e5, t5, r5) {
  if (e5.customInspect && t5 && we(t5.inspect) && t5.inspect !== X.inspect && (!t5.constructor || t5.constructor.prototype !== t5)) {
    var n5 = t5.inspect(r5, e5);
    return ge(n5) || (n5 = ae(e5, n5, r5)), n5;
  }
  var i5 = function(e6, t6) {
    if (be(t6))
      return e6.stylize("undefined", "undefined");
    if (ge(t6)) {
      var r6 = "'" + JSON.stringify(t6).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return e6.stylize(r6, "string");
    }
    if (de(t6))
      return e6.stylize("" + t6, "number");
    if (ye(t6))
      return e6.stylize("" + t6, "boolean");
    if (le(t6))
      return e6.stylize("null", "null");
  }(e5, t5);
  if (i5)
    return i5;
  var o5 = Object.keys(t5), u5 = function(e6) {
    var t6 = {};
    return e6.forEach(function(e7, r6) {
      t6[e7] = true;
    }), t6;
  }(o5);
  if (e5.showHidden && (o5 = Object.getOwnPropertyNames(t5)), Ae(t5) && (o5.indexOf("message") >= 0 || o5.indexOf("description") >= 0))
    return ce(t5);
  if (0 === o5.length) {
    if (we(t5)) {
      var f5 = t5.name ? ": " + t5.name : "";
      return e5.stylize("[Function" + f5 + "]", "special");
    }
    if (me(t5))
      return e5.stylize(RegExp.prototype.toString.call(t5), "regexp");
    if (je(t5))
      return e5.stylize(Date.prototype.toString.call(t5), "date");
    if (Ae(t5))
      return ce(t5);
  }
  var a5, c5 = "", s5 = false, p5 = ["{", "}"];
  (pe(t5) && (s5 = true, p5 = ["[", "]"]), we(t5)) && (c5 = " [Function" + (t5.name ? ": " + t5.name : "") + "]");
  return me(t5) && (c5 = " " + RegExp.prototype.toString.call(t5)), je(t5) && (c5 = " " + Date.prototype.toUTCString.call(t5)), Ae(t5) && (c5 = " " + ce(t5)), 0 !== o5.length || s5 && 0 != t5.length ? r5 < 0 ? me(t5) ? e5.stylize(RegExp.prototype.toString.call(t5), "regexp") : e5.stylize("[Object]", "special") : (e5.seen.push(t5), a5 = s5 ? function(e6, t6, r6, n6, i6) {
    for (var o6 = [], u6 = 0, f6 = t6.length; u6 < f6; ++u6)
      ke(t6, String(u6)) ? o6.push(se(e6, t6, r6, n6, String(u6), true)) : o6.push("");
    return i6.forEach(function(i7) {
      i7.match(/^\d+$/) || o6.push(se(e6, t6, r6, n6, i7, true));
    }), o6;
  }(e5, t5, r5, u5, o5) : o5.map(function(n6) {
    return se(e5, t5, r5, u5, n6, s5);
  }), e5.seen.pop(), function(e6, t6, r6) {
    var n6 = 0;
    if (e6.reduce(function(e7, t7) {
      return n6++, t7.indexOf("\n") >= 0 && n6++, e7 + t7.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0) > 60)
      return r6[0] + ("" === t6 ? "" : t6 + "\n ") + " " + e6.join(",\n  ") + " " + r6[1];
    return r6[0] + t6 + " " + e6.join(", ") + " " + r6[1];
  }(a5, c5, p5)) : p5[0] + c5 + p5[1];
}
function ce(e5) {
  return "[" + Error.prototype.toString.call(e5) + "]";
}
function se(e5, t5, r5, n5, i5, o5) {
  var u5, f5, a5;
  if ((a5 = Object.getOwnPropertyDescriptor(t5, i5) || { value: t5[i5] }).get ? f5 = a5.set ? e5.stylize("[Getter/Setter]", "special") : e5.stylize("[Getter]", "special") : a5.set && (f5 = e5.stylize("[Setter]", "special")), ke(n5, i5) || (u5 = "[" + i5 + "]"), f5 || (e5.seen.indexOf(a5.value) < 0 ? (f5 = le(r5) ? ae(e5, a5.value, null) : ae(e5, a5.value, r5 - 1)).indexOf("\n") > -1 && (f5 = o5 ? f5.split("\n").map(function(e6) {
    return "  " + e6;
  }).join("\n").substr(2) : "\n" + f5.split("\n").map(function(e6) {
    return "   " + e6;
  }).join("\n")) : f5 = e5.stylize("[Circular]", "special")), be(u5)) {
    if (o5 && i5.match(/^\d+$/))
      return f5;
    (u5 = JSON.stringify("" + i5)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (u5 = u5.substr(1, u5.length - 2), u5 = e5.stylize(u5, "name")) : (u5 = u5.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), u5 = e5.stylize(u5, "string"));
  }
  return u5 + ": " + f5;
}
function pe(e5) {
  return Array.isArray(e5);
}
function ye(e5) {
  return "boolean" == typeof e5;
}
function le(e5) {
  return null === e5;
}
function de(e5) {
  return "number" == typeof e5;
}
function ge(e5) {
  return "string" == typeof e5;
}
function be(e5) {
  return void 0 === e5;
}
function me(e5) {
  return he(e5) && "[object RegExp]" === ve(e5);
}
function he(e5) {
  return "object" == typeof e5 && null !== e5;
}
function je(e5) {
  return he(e5) && "[object Date]" === ve(e5);
}
function Ae(e5) {
  return he(e5) && ("[object Error]" === ve(e5) || e5 instanceof Error);
}
function we(e5) {
  return "function" == typeof e5;
}
function ve(e5) {
  return Object.prototype.toString.call(e5);
}
function Oe(e5) {
  return e5 < 10 ? "0" + e5.toString(10) : e5.toString(10);
}
X.debuglog = function(e5) {
  if (e5 = e5.toUpperCase(), !re[e5])
    if (ne.test(e5)) {
      var t5 = Y.pid;
      re[e5] = function() {
        var r5 = X.format.apply(X, arguments);
        console.error("%s %d: %s", e5, t5, r5);
      };
    } else
      re[e5] = function() {
      };
  return re[e5];
}, X.inspect = oe, oe.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, oe.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }, X.types = o$2, X.isArray = pe, X.isBoolean = ye, X.isNull = le, X.isNullOrUndefined = function(e5) {
  return null == e5;
}, X.isNumber = de, X.isString = ge, X.isSymbol = function(e5) {
  return "symbol" == typeof e5;
}, X.isUndefined = be, X.isRegExp = me, X.types.isRegExp = me, X.isObject = he, X.isDate = je, X.types.isDate = je, X.isError = Ae, X.types.isNativeError = Ae, X.isFunction = we, X.isPrimitive = function(e5) {
  return null === e5 || "boolean" == typeof e5 || "number" == typeof e5 || "string" == typeof e5 || "symbol" == typeof e5 || void 0 === e5;
}, X.isBuffer = i$1;
var Se = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function Be() {
  var e5 = /* @__PURE__ */ new Date(), t5 = [Oe(e5.getHours()), Oe(e5.getMinutes()), Oe(e5.getSeconds())].join(":");
  return [e5.getDate(), Se[e5.getMonth()], t5].join(" ");
}
function ke(e5, t5) {
  return Object.prototype.hasOwnProperty.call(e5, t5);
}
X.log = function() {
  console.log("%s - %s", Be(), X.format.apply(X, arguments));
}, X.inherits = t$2, X._extend = function(e5, t5) {
  if (!t5 || !he(t5))
    return e5;
  for (var r5 = Object.keys(t5), n5 = r5.length; n5--; )
    e5[r5[n5]] = t5[r5[n5]];
  return e5;
};
var Ee = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
function De(e5, t5) {
  if (!e5) {
    var r5 = new Error("Promise was rejected with a falsy value");
    r5.reason = e5, e5 = r5;
  }
  return t5(e5);
}
X.promisify = function(e5) {
  if ("function" != typeof e5)
    throw new TypeError('The "original" argument must be of type Function');
  if (Ee && e5[Ee]) {
    var t5;
    if ("function" != typeof (t5 = e5[Ee]))
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    return Object.defineProperty(t5, Ee, { value: t5, enumerable: false, writable: false, configurable: true }), t5;
  }
  function t5() {
    for (var t6, r5, n5 = new Promise(function(e6, n6) {
      t6 = e6, r5 = n6;
    }), i5 = [], o5 = 0; o5 < arguments.length; o5++)
      i5.push(arguments[o5]);
    i5.push(function(e6, n6) {
      e6 ? r5(e6) : t6(n6);
    });
    try {
      e5.apply(this || Q, i5);
    } catch (e6) {
      r5(e6);
    }
    return n5;
  }
  return Object.setPrototypeOf(t5, Object.getPrototypeOf(e5)), Ee && Object.defineProperty(t5, Ee, { value: t5, enumerable: false, writable: false, configurable: true }), Object.defineProperties(t5, ee(e5));
}, X.promisify.custom = Ee, X.callbackify = function(e5) {
  if ("function" != typeof e5)
    throw new TypeError('The "original" argument must be of type Function');
  function t5() {
    for (var t6 = [], r5 = 0; r5 < arguments.length; r5++)
      t6.push(arguments[r5]);
    var n5 = t6.pop();
    if ("function" != typeof n5)
      throw new TypeError("The last argument must be of type Function");
    var i5 = this || Q, o5 = function() {
      return n5.apply(i5, arguments);
    };
    e5.apply(this || Q, t6).then(function(e6) {
      Y.nextTick(o5.bind(null, null, e6));
    }, function(e6) {
      Y.nextTick(De.bind(null, e6, o5));
    });
  }
  return Object.setPrototypeOf(t5, Object.getPrototypeOf(e5)), Object.defineProperties(t5, ee(e5)), t5;
};
X._extend;
X.callbackify;
X.debuglog;
X.deprecate;
X.format;
X.inherits;
X.inspect;
X.isArray;
X.isBoolean;
X.isBuffer;
X.isDate;
X.isError;
X.isFunction;
X.isNull;
X.isNullOrUndefined;
X.isNumber;
X.isObject;
X.isPrimitive;
X.isRegExp;
X.isString;
X.isSymbol;
X.isUndefined;
X.log;
X.promisify;
X._extend;
X.callbackify;
X.debuglog;
X.deprecate;
X.format;
X.inherits;
X.inspect;
X.isArray;
X.isBoolean;
X.isBuffer;
X.isDate;
X.isError;
X.isFunction;
X.isNull;
X.isNullOrUndefined;
X.isNumber;
X.isObject;
X.isPrimitive;
X.isRegExp;
X.isString;
X.isSymbol;
X.isUndefined;
X.log;
var promisify = X.promisify;
X.types;

// node_modules/@jspm/core/nodelibs/browser/chunk-CbQqNoLO.js
X._extend;
X.callbackify;
X.debuglog;
X.deprecate;
X.format;
X.inherits;
X.inspect;
X.isArray;
X.isBoolean;
X.isBuffer;
X.isDate;
X.isError;
X.isFunction;
X.isNull;
X.isNullOrUndefined;
X.isNumber;
X.isObject;
X.isPrimitive;
X.isRegExp;
X.isString;
X.isSymbol;
X.isUndefined;
X.log;
var promisify2 = X.promisify;
X.types;
X.TextEncoder = globalThis.TextEncoder;
X.TextDecoder = globalThis.TextDecoder;

// node_modules/@jspm/core/nodelibs/browser/chunk-DEMDiNwt.js
init_dirname();
init_buffer();
init_process();
function unimplemented(name2) {
  throw new Error("Node.js process " + name2 + " is not supported by JSPM core outside of Node.js");
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue)
    return;
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length)
    drainQueue();
}
function drainQueue() {
  if (draining)
    return;
  var timeout = setTimeout(cleanUpNextTick, 0);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue)
        currentQueue[queueIndex].run();
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  clearTimeout(timeout);
}
function nextTick(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i5 = 1; i5 < arguments.length; i5++)
      args[i5 - 1] = arguments[i5];
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining)
    setTimeout(drainQueue, 0);
}
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function() {
  this.fun.apply(null, this.array);
};
var title = "browser";
var arch = "x64";
var platform = "browser";
var env = {
  PATH: "/usr/bin",
  LANG: navigator.language + ".UTF-8",
  PWD: "/",
  HOME: "/home",
  TMP: "/tmp"
};
var argv = ["/usr/bin/node"];
var execArgv = [];
var version = "v16.8.0";
var versions = {};
var emitWarning = function(message, type) {
  console.warn((type ? type + ": " : "") + message);
};
var binding = function(name2) {
  unimplemented("binding");
};
var umask = function(mask) {
  return 0;
};
var cwd = function() {
  return "/";
};
var chdir = function(dir) {
};
var release = {
  name: "node",
  sourceUrl: "",
  headersUrl: "",
  libUrl: ""
};
function noop() {
}
var _rawDebug = noop;
var moduleLoadList = [];
function _linkedBinding(name2) {
  unimplemented("_linkedBinding");
}
var domain = {};
var _exiting = false;
var config = {};
function dlopen(name2) {
  unimplemented("dlopen");
}
function _getActiveRequests() {
  return [];
}
function _getActiveHandles() {
  return [];
}
var reallyExit = noop;
var _kill = noop;
var cpuUsage = function() {
  return {};
};
var resourceUsage = cpuUsage;
var memoryUsage = cpuUsage;
var kill = noop;
var exit = noop;
var openStdin = noop;
var allowedNodeEnvironmentFlags = {};
function assert(condition, message) {
  if (!condition)
    throw new Error(message || "assertion error");
}
var features = {
  inspector: false,
  debug: false,
  uv: false,
  ipv6: false,
  tls_alpn: false,
  tls_sni: false,
  tls_ocsp: false,
  tls: false,
  cached_builtins: true
};
var _fatalExceptions = noop;
var setUncaughtExceptionCaptureCallback = noop;
function hasUncaughtExceptionCaptureCallback() {
  return false;
}
var _tickCallback = noop;
var _debugProcess = noop;
var _debugEnd = noop;
var _startProfilerIdleNotifier = noop;
var _stopProfilerIdleNotifier = noop;
var stdout = void 0;
var stderr = void 0;
var stdin = void 0;
var abort = noop;
var pid = 2;
var ppid = 1;
var execPath = "/bin/usr/node";
var debugPort = 9229;
var argv0 = "node";
var _preload_modules = [];
var setSourceMapsEnabled = noop;
var _performance = {
  now: typeof performance !== "undefined" ? performance.now.bind(performance) : void 0,
  timing: typeof performance !== "undefined" ? performance.timing : void 0
};
if (_performance.now === void 0) {
  nowOffset = Date.now();
  if (_performance.timing && _performance.timing.navigationStart) {
    nowOffset = _performance.timing.navigationStart;
  }
  _performance.now = () => Date.now() - nowOffset;
}
var nowOffset;
function uptime() {
  return _performance.now() / 1e3;
}
var nanoPerSec = 1e9;
function hrtime(previousTimestamp) {
  var baseNow = Math.floor((Date.now() - _performance.now()) * 1e-3);
  var clocktime = _performance.now() * 1e-3;
  var seconds = Math.floor(clocktime) + baseNow;
  var nanoseconds = Math.floor(clocktime % 1 * 1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += nanoPerSec;
    }
  }
  return [seconds, nanoseconds];
}
hrtime.bigint = function(time) {
  var diff = hrtime(time);
  if (typeof BigInt === "undefined") {
    return diff[0] * nanoPerSec + diff[1];
  }
  return BigInt(diff[0] * nanoPerSec) + BigInt(diff[1]);
};
var _maxListeners = 10;
var _events = {};
var _eventsCount = 0;
function on() {
  return process;
}
var addListener = on;
var once = on;
var off = on;
var removeListener = on;
var removeAllListeners = on;
var emit = noop;
var prependListener = on;
var prependOnceListener = on;
function listeners(name2) {
  return [];
}
var process = {
  version,
  versions,
  arch,
  platform,
  release,
  _rawDebug,
  moduleLoadList,
  binding,
  _linkedBinding,
  _events,
  _eventsCount,
  _maxListeners,
  on,
  addListener,
  once,
  off,
  removeListener,
  removeAllListeners,
  emit,
  prependListener,
  prependOnceListener,
  listeners,
  domain,
  _exiting,
  config,
  dlopen,
  uptime,
  _getActiveRequests,
  _getActiveHandles,
  reallyExit,
  _kill,
  cpuUsage,
  resourceUsage,
  memoryUsage,
  kill,
  exit,
  openStdin,
  allowedNodeEnvironmentFlags,
  assert,
  features,
  _fatalExceptions,
  setUncaughtExceptionCaptureCallback,
  hasUncaughtExceptionCaptureCallback,
  emitWarning,
  nextTick,
  _tickCallback,
  _debugProcess,
  _debugEnd,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  stdout,
  stdin,
  stderr,
  abort,
  umask,
  chdir,
  cwd,
  env,
  title,
  argv,
  execArgv,
  pid,
  ppid,
  execPath,
  debugPort,
  hrtime,
  argv0,
  _preload_modules,
  setSourceMapsEnabled
};

// node_modules/@jspm/core/nodelibs/browser/chunk-BsRZ0PEC.js
init_dirname();
init_buffer();
init_process();
var exports2 = {};
var _dewExec2 = false;
var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew3() {
  if (_dewExec2)
    return exports2;
  _dewExec2 = true;
  exports2 = deprecate;
  function deprecate(fn, msg) {
    if (config2("noDeprecation")) {
      return fn;
    }
    var warned = false;
    function deprecated() {
      if (!warned) {
        if (config2("throwDeprecation")) {
          throw new Error(msg);
        } else if (config2("traceDeprecation")) {
          console.trace(msg);
        } else {
          console.warn(msg);
        }
        warned = true;
      }
      return fn.apply(this || _global, arguments);
    }
    return deprecated;
  }
  function config2(name2) {
    try {
      if (!_global.localStorage)
        return false;
    } catch (_3) {
      return false;
    }
    var val = _global.localStorage[name2];
    if (null == val)
      return false;
    return String(val).toLowerCase() === "true";
  }
  return exports2;
}

// node_modules/@jspm/core/nodelibs/browser/chunk-CcCWfKp1.js
init_dirname();
init_buffer();
init_process();
init_chunk_DtuTasat();
var exports$2 = {};
var _dewExec$1 = false;
function dew$1() {
  if (_dewExec$1)
    return exports$2;
  _dewExec$1 = true;
  var buffer3 = dew();
  var Buffer2 = buffer3.Buffer;
  function copyProps(src, dst) {
    for (var key in src) {
      dst[key] = src[key];
    }
  }
  if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
    exports$2 = buffer3;
  } else {
    copyProps(buffer3, exports$2);
    exports$2.Buffer = SafeBuffer;
  }
  function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer2(arg, encodingOrOffset, length);
  }
  SafeBuffer.prototype = Object.create(Buffer2.prototype);
  copyProps(Buffer2, SafeBuffer);
  SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === "number") {
      throw new TypeError("Argument must not be a number");
    }
    return Buffer2(arg, encodingOrOffset, length);
  };
  SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== "number") {
      throw new TypeError("Argument must be a number");
    }
    var buf = Buffer2(size);
    if (fill !== void 0) {
      if (typeof encoding === "string") {
        buf.fill(fill, encoding);
      } else {
        buf.fill(fill);
      }
    } else {
      buf.fill(0);
    }
    return buf;
  };
  SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== "number") {
      throw new TypeError("Argument must be a number");
    }
    return Buffer2(size);
  };
  SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== "number") {
      throw new TypeError("Argument must be a number");
    }
    return buffer3.SlowBuffer(size);
  };
  return exports$2;
}
var exports$1 = {};
var _dewExec3 = false;
function dew4() {
  if (_dewExec3)
    return exports$1;
  _dewExec3 = true;
  var Buffer2 = dew$1().Buffer;
  var isEncoding = Buffer2.isEncoding || function(encoding) {
    encoding = "" + encoding;
    switch (encoding && encoding.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return true;
      default:
        return false;
    }
  };
  function _normalizeEncoding(enc) {
    if (!enc)
      return "utf8";
    var retried;
    while (true) {
      switch (enc) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return enc;
        default:
          if (retried)
            return;
          enc = ("" + enc).toLowerCase();
          retried = true;
      }
    }
  }
  function normalizeEncoding(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc)))
      throw new Error("Unknown encoding: " + enc);
    return nenc || enc;
  }
  exports$1.StringDecoder = StringDecoder2;
  function StringDecoder2(encoding) {
    this.encoding = normalizeEncoding(encoding);
    var nb;
    switch (this.encoding) {
      case "utf16le":
        this.text = utf16Text;
        this.end = utf16End;
        nb = 4;
        break;
      case "utf8":
        this.fillLast = utf8FillLast;
        nb = 4;
        break;
      case "base64":
        this.text = base64Text;
        this.end = base64End;
        nb = 3;
        break;
      default:
        this.write = simpleWrite;
        this.end = simpleEnd;
        return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer2.allocUnsafe(nb);
  }
  StringDecoder2.prototype.write = function(buf) {
    if (buf.length === 0)
      return "";
    var r5;
    var i5;
    if (this.lastNeed) {
      r5 = this.fillLast(buf);
      if (r5 === void 0)
        return "";
      i5 = this.lastNeed;
      this.lastNeed = 0;
    } else {
      i5 = 0;
    }
    if (i5 < buf.length)
      return r5 ? r5 + this.text(buf, i5) : this.text(buf, i5);
    return r5 || "";
  };
  StringDecoder2.prototype.end = utf8End;
  StringDecoder2.prototype.text = utf8Text;
  StringDecoder2.prototype.fillLast = function(buf) {
    if (this.lastNeed <= buf.length) {
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
  };
  function utf8CheckByte(byte) {
    if (byte <= 127)
      return 0;
    else if (byte >> 5 === 6)
      return 2;
    else if (byte >> 4 === 14)
      return 3;
    else if (byte >> 3 === 30)
      return 4;
    return byte >> 6 === 2 ? -1 : -2;
  }
  function utf8CheckIncomplete(self2, buf, i5) {
    var j3 = buf.length - 1;
    if (j3 < i5)
      return 0;
    var nb = utf8CheckByte(buf[j3]);
    if (nb >= 0) {
      if (nb > 0)
        self2.lastNeed = nb - 1;
      return nb;
    }
    if (--j3 < i5 || nb === -2)
      return 0;
    nb = utf8CheckByte(buf[j3]);
    if (nb >= 0) {
      if (nb > 0)
        self2.lastNeed = nb - 2;
      return nb;
    }
    if (--j3 < i5 || nb === -2)
      return 0;
    nb = utf8CheckByte(buf[j3]);
    if (nb >= 0) {
      if (nb > 0) {
        if (nb === 2)
          nb = 0;
        else
          self2.lastNeed = nb - 3;
      }
      return nb;
    }
    return 0;
  }
  function utf8CheckExtraBytes(self2, buf, p5) {
    if ((buf[0] & 192) !== 128) {
      self2.lastNeed = 0;
      return "\uFFFD";
    }
    if (self2.lastNeed > 1 && buf.length > 1) {
      if ((buf[1] & 192) !== 128) {
        self2.lastNeed = 1;
        return "\uFFFD";
      }
      if (self2.lastNeed > 2 && buf.length > 2) {
        if ((buf[2] & 192) !== 128) {
          self2.lastNeed = 2;
          return "\uFFFD";
        }
      }
    }
  }
  function utf8FillLast(buf) {
    var p5 = this.lastTotal - this.lastNeed;
    var r5 = utf8CheckExtraBytes(this, buf);
    if (r5 !== void 0)
      return r5;
    if (this.lastNeed <= buf.length) {
      buf.copy(this.lastChar, p5, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p5, 0, buf.length);
    this.lastNeed -= buf.length;
  }
  function utf8Text(buf, i5) {
    var total = utf8CheckIncomplete(this, buf, i5);
    if (!this.lastNeed)
      return buf.toString("utf8", i5);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString("utf8", i5, end);
  }
  function utf8End(buf) {
    var r5 = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed)
      return r5 + "\uFFFD";
    return r5;
  }
  function utf16Text(buf, i5) {
    if ((buf.length - i5) % 2 === 0) {
      var r5 = buf.toString("utf16le", i5);
      if (r5) {
        var c5 = r5.charCodeAt(r5.length - 1);
        if (c5 >= 55296 && c5 <= 56319) {
          this.lastNeed = 2;
          this.lastTotal = 4;
          this.lastChar[0] = buf[buf.length - 2];
          this.lastChar[1] = buf[buf.length - 1];
          return r5.slice(0, -1);
        }
      }
      return r5;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString("utf16le", i5, buf.length - 1);
  }
  function utf16End(buf) {
    var r5 = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) {
      var end = this.lastTotal - this.lastNeed;
      return r5 + this.lastChar.toString("utf16le", 0, end);
    }
    return r5;
  }
  function base64Text(buf, i5) {
    var n5 = (buf.length - i5) % 3;
    if (n5 === 0)
      return buf.toString("base64", i5);
    this.lastNeed = 3 - n5;
    this.lastTotal = 3;
    if (n5 === 1) {
      this.lastChar[0] = buf[buf.length - 1];
    } else {
      this.lastChar[0] = buf[buf.length - 2];
      this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString("base64", i5, buf.length - n5);
  }
  function base64End(buf) {
    var r5 = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed)
      return r5 + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    return r5;
  }
  function simpleWrite(buf) {
    return buf.toString(this.encoding);
  }
  function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : "";
  }
  return exports$1;
}
var exports3 = dew4();
exports3["StringDecoder"];
var StringDecoder = exports3.StringDecoder;

// node_modules/@jspm/core/nodelibs/browser/chunk-DHWh-hmB.js
init_dirname();
init_buffer();
init_process();

// node_modules/@jspm/core/nodelibs/browser/chunk-b0rmRow7.js
init_dirname();
init_buffer();
init_process();
var exports4 = {};
var _dewExec4 = false;
var _global2 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew5() {
  if (_dewExec4)
    return exports4;
  _dewExec4 = true;
  var process3 = exports4 = {};
  var cachedSetTimeout;
  var cachedClearTimeout;
  function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
  }
  function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      if (typeof setTimeout === "function") {
        cachedSetTimeout = setTimeout;
      } else {
        cachedSetTimeout = defaultSetTimout;
      }
    } catch (e5) {
      cachedSetTimeout = defaultSetTimout;
    }
    try {
      if (typeof clearTimeout === "function") {
        cachedClearTimeout = clearTimeout;
      } else {
        cachedClearTimeout = defaultClearTimeout;
      }
    } catch (e5) {
      cachedClearTimeout = defaultClearTimeout;
    }
  })();
  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      return setTimeout(fun, 0);
    }
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      cachedSetTimeout = setTimeout;
      return setTimeout(fun, 0);
    }
    try {
      return cachedSetTimeout(fun, 0);
    } catch (e5) {
      try {
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e6) {
        return cachedSetTimeout.call(this || _global2, fun, 0);
      }
    }
  }
  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
      return clearTimeout(marker);
    }
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      cachedClearTimeout = clearTimeout;
      return clearTimeout(marker);
    }
    try {
      return cachedClearTimeout(marker);
    } catch (e5) {
      try {
        return cachedClearTimeout.call(null, marker);
      } catch (e6) {
        return cachedClearTimeout.call(this || _global2, marker);
      }
    }
  }
  var queue2 = [];
  var draining2 = false;
  var currentQueue2;
  var queueIndex2 = -1;
  function cleanUpNextTick2() {
    if (!draining2 || !currentQueue2) {
      return;
    }
    draining2 = false;
    if (currentQueue2.length) {
      queue2 = currentQueue2.concat(queue2);
    } else {
      queueIndex2 = -1;
    }
    if (queue2.length) {
      drainQueue2();
    }
  }
  function drainQueue2() {
    if (draining2) {
      return;
    }
    var timeout = runTimeout(cleanUpNextTick2);
    draining2 = true;
    var len = queue2.length;
    while (len) {
      currentQueue2 = queue2;
      queue2 = [];
      while (++queueIndex2 < len) {
        if (currentQueue2) {
          currentQueue2[queueIndex2].run();
        }
      }
      queueIndex2 = -1;
      len = queue2.length;
    }
    currentQueue2 = null;
    draining2 = false;
    runClearTimeout(timeout);
  }
  process3.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i5 = 1; i5 < arguments.length; i5++) {
        args[i5 - 1] = arguments[i5];
      }
    }
    queue2.push(new Item2(fun, args));
    if (queue2.length === 1 && !draining2) {
      runTimeout(drainQueue2);
    }
  };
  function Item2(fun, array) {
    (this || _global2).fun = fun;
    (this || _global2).array = array;
  }
  Item2.prototype.run = function() {
    (this || _global2).fun.apply(null, (this || _global2).array);
  };
  process3.title = "browser";
  process3.browser = true;
  process3.env = {};
  process3.argv = [];
  process3.version = "";
  process3.versions = {};
  function noop2() {
  }
  process3.on = noop2;
  process3.addListener = noop2;
  process3.once = noop2;
  process3.off = noop2;
  process3.removeListener = noop2;
  process3.removeAllListeners = noop2;
  process3.emit = noop2;
  process3.prependListener = noop2;
  process3.prependOnceListener = noop2;
  process3.listeners = function(name2) {
    return [];
  };
  process3.binding = function(name2) {
    throw new Error("process.binding is not supported");
  };
  process3.cwd = function() {
    return "/";
  };
  process3.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
  };
  process3.umask = function() {
    return 0;
  };
  return exports4;
}
var process2 = dew5();
process2.platform = "browser";
process2.addListener;
process2.argv;
process2.binding;
process2.browser;
process2.chdir;
process2.cwd;
process2.emit;
process2.env;
process2.listeners;
process2.nextTick;
process2.off;
process2.on;
process2.once;
process2.prependListener;
process2.prependOnceListener;
process2.removeAllListeners;
process2.removeListener;
process2.title;
process2.umask;
process2.version;
process2.versions;

// node_modules/@jspm/core/nodelibs/browser/chunk-DHWh-hmB.js
var exports$12 = {};
var _dewExec$12 = false;
function dew$12() {
  if (_dewExec$12)
    return exports$12;
  _dewExec$12 = true;
  var process$1 = process2;
  function assertPath(path2) {
    if (typeof path2 !== "string") {
      throw new TypeError("Path must be a string. Received " + JSON.stringify(path2));
    }
  }
  function normalizeStringPosix(path2, allowAboveRoot) {
    var res = "";
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for (var i5 = 0; i5 <= path2.length; ++i5) {
      if (i5 < path2.length)
        code = path2.charCodeAt(i5);
      else if (code === 47)
        break;
      else
        code = 47;
      if (code === 47) {
        if (lastSlash === i5 - 1 || dots === 1)
          ;
        else if (lastSlash !== i5 - 1 && dots === 2) {
          if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
            if (res.length > 2) {
              var lastSlashIndex = res.lastIndexOf("/");
              if (lastSlashIndex !== res.length - 1) {
                if (lastSlashIndex === -1) {
                  res = "";
                  lastSegmentLength = 0;
                } else {
                  res = res.slice(0, lastSlashIndex);
                  lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                }
                lastSlash = i5;
                dots = 0;
                continue;
              }
            } else if (res.length === 2 || res.length === 1) {
              res = "";
              lastSegmentLength = 0;
              lastSlash = i5;
              dots = 0;
              continue;
            }
          }
          if (allowAboveRoot) {
            if (res.length > 0)
              res += "/..";
            else
              res = "..";
            lastSegmentLength = 2;
          }
        } else {
          if (res.length > 0)
            res += "/" + path2.slice(lastSlash + 1, i5);
          else
            res = path2.slice(lastSlash + 1, i5);
          lastSegmentLength = i5 - lastSlash - 1;
        }
        lastSlash = i5;
        dots = 0;
      } else if (code === 46 && dots !== -1) {
        ++dots;
      } else {
        dots = -1;
      }
    }
    return res;
  }
  function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) {
      return base;
    }
    if (dir === pathObject.root) {
      return dir + base;
    }
    return dir + sep + base;
  }
  var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve2() {
      var resolvedPath = "";
      var resolvedAbsolute = false;
      var cwd2;
      for (var i5 = arguments.length - 1; i5 >= -1 && !resolvedAbsolute; i5--) {
        var path2;
        if (i5 >= 0)
          path2 = arguments[i5];
        else {
          if (cwd2 === void 0)
            cwd2 = process$1.cwd();
          path2 = cwd2;
        }
        assertPath(path2);
        if (path2.length === 0) {
          continue;
        }
        resolvedPath = path2 + "/" + resolvedPath;
        resolvedAbsolute = path2.charCodeAt(0) === 47;
      }
      resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
      if (resolvedAbsolute) {
        if (resolvedPath.length > 0)
          return "/" + resolvedPath;
        else
          return "/";
      } else if (resolvedPath.length > 0) {
        return resolvedPath;
      } else {
        return ".";
      }
    },
    normalize: function normalize(path2) {
      assertPath(path2);
      if (path2.length === 0)
        return ".";
      var isAbsolute = path2.charCodeAt(0) === 47;
      var trailingSeparator = path2.charCodeAt(path2.length - 1) === 47;
      path2 = normalizeStringPosix(path2, !isAbsolute);
      if (path2.length === 0 && !isAbsolute)
        path2 = ".";
      if (path2.length > 0 && trailingSeparator)
        path2 += "/";
      if (isAbsolute)
        return "/" + path2;
      return path2;
    },
    isAbsolute: function isAbsolute(path2) {
      assertPath(path2);
      return path2.length > 0 && path2.charCodeAt(0) === 47;
    },
    join: function join() {
      if (arguments.length === 0)
        return ".";
      var joined;
      for (var i5 = 0; i5 < arguments.length; ++i5) {
        var arg = arguments[i5];
        assertPath(arg);
        if (arg.length > 0) {
          if (joined === void 0)
            joined = arg;
          else
            joined += "/" + arg;
        }
      }
      if (joined === void 0)
        return ".";
      return posix.normalize(joined);
    },
    relative: function relative(from, to) {
      assertPath(from);
      assertPath(to);
      if (from === to)
        return "";
      from = posix.resolve(from);
      to = posix.resolve(to);
      if (from === to)
        return "";
      var fromStart = 1;
      for (; fromStart < from.length; ++fromStart) {
        if (from.charCodeAt(fromStart) !== 47)
          break;
      }
      var fromEnd = from.length;
      var fromLen = fromEnd - fromStart;
      var toStart = 1;
      for (; toStart < to.length; ++toStart) {
        if (to.charCodeAt(toStart) !== 47)
          break;
      }
      var toEnd = to.length;
      var toLen = toEnd - toStart;
      var length = fromLen < toLen ? fromLen : toLen;
      var lastCommonSep = -1;
      var i5 = 0;
      for (; i5 <= length; ++i5) {
        if (i5 === length) {
          if (toLen > length) {
            if (to.charCodeAt(toStart + i5) === 47) {
              return to.slice(toStart + i5 + 1);
            } else if (i5 === 0) {
              return to.slice(toStart + i5);
            }
          } else if (fromLen > length) {
            if (from.charCodeAt(fromStart + i5) === 47) {
              lastCommonSep = i5;
            } else if (i5 === 0) {
              lastCommonSep = 0;
            }
          }
          break;
        }
        var fromCode2 = from.charCodeAt(fromStart + i5);
        var toCode = to.charCodeAt(toStart + i5);
        if (fromCode2 !== toCode)
          break;
        else if (fromCode2 === 47)
          lastCommonSep = i5;
      }
      var out = "";
      for (i5 = fromStart + lastCommonSep + 1; i5 <= fromEnd; ++i5) {
        if (i5 === fromEnd || from.charCodeAt(i5) === 47) {
          if (out.length === 0)
            out += "..";
          else
            out += "/..";
        }
      }
      if (out.length > 0)
        return out + to.slice(toStart + lastCommonSep);
      else {
        toStart += lastCommonSep;
        if (to.charCodeAt(toStart) === 47)
          ++toStart;
        return to.slice(toStart);
      }
    },
    _makeLong: function _makeLong(path2) {
      return path2;
    },
    dirname: function dirname(path2) {
      assertPath(path2);
      if (path2.length === 0)
        return ".";
      var code = path2.charCodeAt(0);
      var hasRoot = code === 47;
      var end = -1;
      var matchedSlash = true;
      for (var i5 = path2.length - 1; i5 >= 1; --i5) {
        code = path2.charCodeAt(i5);
        if (code === 47) {
          if (!matchedSlash) {
            end = i5;
            break;
          }
        } else {
          matchedSlash = false;
        }
      }
      if (end === -1)
        return hasRoot ? "/" : ".";
      if (hasRoot && end === 1)
        return "//";
      return path2.slice(0, end);
    },
    basename: function basename(path2, ext) {
      if (ext !== void 0 && typeof ext !== "string")
        throw new TypeError('"ext" argument must be a string');
      assertPath(path2);
      var start = 0;
      var end = -1;
      var matchedSlash = true;
      var i5;
      if (ext !== void 0 && ext.length > 0 && ext.length <= path2.length) {
        if (ext.length === path2.length && ext === path2)
          return "";
        var extIdx = ext.length - 1;
        var firstNonSlashEnd = -1;
        for (i5 = path2.length - 1; i5 >= 0; --i5) {
          var code = path2.charCodeAt(i5);
          if (code === 47) {
            if (!matchedSlash) {
              start = i5 + 1;
              break;
            }
          } else {
            if (firstNonSlashEnd === -1) {
              matchedSlash = false;
              firstNonSlashEnd = i5 + 1;
            }
            if (extIdx >= 0) {
              if (code === ext.charCodeAt(extIdx)) {
                if (--extIdx === -1) {
                  end = i5;
                }
              } else {
                extIdx = -1;
                end = firstNonSlashEnd;
              }
            }
          }
        }
        if (start === end)
          end = firstNonSlashEnd;
        else if (end === -1)
          end = path2.length;
        return path2.slice(start, end);
      } else {
        for (i5 = path2.length - 1; i5 >= 0; --i5) {
          if (path2.charCodeAt(i5) === 47) {
            if (!matchedSlash) {
              start = i5 + 1;
              break;
            }
          } else if (end === -1) {
            matchedSlash = false;
            end = i5 + 1;
          }
        }
        if (end === -1)
          return "";
        return path2.slice(start, end);
      }
    },
    extname: function extname(path2) {
      assertPath(path2);
      var startDot = -1;
      var startPart = 0;
      var end = -1;
      var matchedSlash = true;
      var preDotState = 0;
      for (var i5 = path2.length - 1; i5 >= 0; --i5) {
        var code = path2.charCodeAt(i5);
        if (code === 47) {
          if (!matchedSlash) {
            startPart = i5 + 1;
            break;
          }
          continue;
        }
        if (end === -1) {
          matchedSlash = false;
          end = i5 + 1;
        }
        if (code === 46) {
          if (startDot === -1)
            startDot = i5;
          else if (preDotState !== 1)
            preDotState = 1;
        } else if (startDot !== -1) {
          preDotState = -1;
        }
      }
      if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        return "";
      }
      return path2.slice(startDot, end);
    },
    format: function format2(pathObject) {
      if (pathObject === null || typeof pathObject !== "object") {
        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
      }
      return _format("/", pathObject);
    },
    parse: function parse2(path2) {
      assertPath(path2);
      var ret = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
      };
      if (path2.length === 0)
        return ret;
      var code = path2.charCodeAt(0);
      var isAbsolute = code === 47;
      var start;
      if (isAbsolute) {
        ret.root = "/";
        start = 1;
      } else {
        start = 0;
      }
      var startDot = -1;
      var startPart = 0;
      var end = -1;
      var matchedSlash = true;
      var i5 = path2.length - 1;
      var preDotState = 0;
      for (; i5 >= start; --i5) {
        code = path2.charCodeAt(i5);
        if (code === 47) {
          if (!matchedSlash) {
            startPart = i5 + 1;
            break;
          }
          continue;
        }
        if (end === -1) {
          matchedSlash = false;
          end = i5 + 1;
        }
        if (code === 46) {
          if (startDot === -1)
            startDot = i5;
          else if (preDotState !== 1)
            preDotState = 1;
        } else if (startDot !== -1) {
          preDotState = -1;
        }
      }
      if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        if (end !== -1) {
          if (startPart === 0 && isAbsolute)
            ret.base = ret.name = path2.slice(1, end);
          else
            ret.base = ret.name = path2.slice(startPart, end);
        }
      } else {
        if (startPart === 0 && isAbsolute) {
          ret.name = path2.slice(1, startDot);
          ret.base = path2.slice(1, end);
        } else {
          ret.name = path2.slice(startPart, startDot);
          ret.base = path2.slice(startPart, end);
        }
        ret.ext = path2.slice(startDot, end);
      }
      if (startPart > 0)
        ret.dir = path2.slice(0, startPart - 1);
      else if (isAbsolute)
        ret.dir = "/";
      return ret;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
  };
  posix.posix = posix;
  exports$12 = posix;
  return exports$12;
}
var exports$22 = dew$12();
var t$12 = 2147483647;
var o$22 = /^xn--/;
var n$22 = /[^\0-\x7E]/;
var e$22 = /[\x2E\u3002\uFF0E\uFF61]/g;
var r$22 = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" };
var c$12 = Math.floor;
var s3 = String.fromCharCode;
function i$12(t5) {
  throw new RangeError(r$22[t5]);
}
function f$12(t5, o5) {
  const n5 = t5.split("@");
  let r5 = "";
  n5.length > 1 && (r5 = n5[0] + "@", t5 = n5[1]);
  const c5 = function(t6, o6) {
    const n6 = [];
    let e5 = t6.length;
    for (; e5--; )
      n6[e5] = o6(t6[e5]);
    return n6;
  }((t5 = t5.replace(e$22, ".")).split("."), o5).join(".");
  return r5 + c5;
}
function l$12(t5) {
  const o5 = [];
  let n5 = 0;
  const e5 = t5.length;
  for (; n5 < e5; ) {
    const r5 = t5.charCodeAt(n5++);
    if (r5 >= 55296 && r5 <= 56319 && n5 < e5) {
      const e6 = t5.charCodeAt(n5++);
      56320 == (64512 & e6) ? o5.push(((1023 & r5) << 10) + (1023 & e6) + 65536) : (o5.push(r5), n5--);
    } else
      o5.push(r5);
  }
  return o5;
}
var u$12 = function(t5, o5) {
  return t5 + 22 + 75 * (t5 < 26) - ((0 != o5) << 5);
};
var a$12 = function(t5, o5, n5) {
  let e5 = 0;
  for (t5 = n5 ? c$12(t5 / 700) : t5 >> 1, t5 += c$12(t5 / o5); t5 > 455; e5 += 36)
    t5 = c$12(t5 / 35);
  return c$12(e5 + 36 * t5 / (t5 + 38));
};
var d2 = function(o5) {
  const n5 = [], e5 = o5.length;
  let r5 = 0, s5 = 128, f5 = 72, l5 = o5.lastIndexOf("-");
  l5 < 0 && (l5 = 0);
  for (let t5 = 0; t5 < l5; ++t5)
    o5.charCodeAt(t5) >= 128 && i$12("not-basic"), n5.push(o5.charCodeAt(t5));
  for (let d4 = l5 > 0 ? l5 + 1 : 0; d4 < e5; ) {
    let l6 = r5;
    for (let n6 = 1, s6 = 36; ; s6 += 36) {
      d4 >= e5 && i$12("invalid-input");
      const l7 = (u5 = o5.charCodeAt(d4++)) - 48 < 10 ? u5 - 22 : u5 - 65 < 26 ? u5 - 65 : u5 - 97 < 26 ? u5 - 97 : 36;
      (l7 >= 36 || l7 > c$12((t$12 - r5) / n6)) && i$12("overflow"), r5 += l7 * n6;
      const a5 = s6 <= f5 ? 1 : s6 >= f5 + 26 ? 26 : s6 - f5;
      if (l7 < a5)
        break;
      const h6 = 36 - a5;
      n6 > c$12(t$12 / h6) && i$12("overflow"), n6 *= h6;
    }
    const h5 = n5.length + 1;
    f5 = a$12(r5 - l6, h5, 0 == l6), c$12(r5 / h5) > t$12 - s5 && i$12("overflow"), s5 += c$12(r5 / h5), r5 %= h5, n5.splice(r5++, 0, s5);
  }
  var u5;
  return String.fromCodePoint(...n5);
};
var h$12 = function(o5) {
  const n5 = [];
  let e5 = (o5 = l$12(o5)).length, r5 = 128, f5 = 0, d4 = 72;
  for (const t5 of o5)
    t5 < 128 && n5.push(s3(t5));
  let h5 = n5.length, p5 = h5;
  for (h5 && n5.push("-"); p5 < e5; ) {
    let e6 = t$12;
    for (const t5 of o5)
      t5 >= r5 && t5 < e6 && (e6 = t5);
    const l5 = p5 + 1;
    e6 - r5 > c$12((t$12 - f5) / l5) && i$12("overflow"), f5 += (e6 - r5) * l5, r5 = e6;
    for (const e7 of o5)
      if (e7 < r5 && ++f5 > t$12 && i$12("overflow"), e7 == r5) {
        let t5 = f5;
        for (let o6 = 36; ; o6 += 36) {
          const e8 = o6 <= d4 ? 1 : o6 >= d4 + 26 ? 26 : o6 - d4;
          if (t5 < e8)
            break;
          const r6 = t5 - e8, i5 = 36 - e8;
          n5.push(s3(u$12(e8 + r6 % i5, 0))), t5 = c$12(r6 / i5);
        }
        n5.push(s3(u$12(t5, 0))), d4 = a$12(f5, l5, p5 == h5), f5 = 0, ++p5;
      }
    ++f5, ++r5;
  }
  return n5.join("");
};
var p$12 = { version: "2.1.0", ucs2: { decode: l$12, encode: (t5) => String.fromCodePoint(...t5) }, decode: d2, encode: h$12, toASCII: function(t5) {
  return f$12(t5, function(t6) {
    return n$22.test(t6) ? "xn--" + h$12(t6) : t6;
  });
}, toUnicode: function(t5) {
  return f$12(t5, function(t6) {
    return o$22.test(t6) ? d2(t6.slice(4).toLowerCase()) : t6;
  });
} };
function e$12(e5, n5) {
  return Object.prototype.hasOwnProperty.call(e5, n5);
}
var n$12 = function(n5, r5, t5, o5) {
  r5 = r5 || "&", t5 = t5 || "=";
  var a5 = {};
  if ("string" != typeof n5 || 0 === n5.length)
    return a5;
  var u5 = /\+/g;
  n5 = n5.split(r5);
  var c5 = 1e3;
  o5 && "number" == typeof o5.maxKeys && (c5 = o5.maxKeys);
  var i5 = n5.length;
  c5 > 0 && i5 > c5 && (i5 = c5);
  for (var s5 = 0; s5 < i5; ++s5) {
    var p5, f5, d4, y5, m4 = n5[s5].replace(u5, "%20"), l5 = m4.indexOf(t5);
    l5 >= 0 ? (p5 = m4.substr(0, l5), f5 = m4.substr(l5 + 1)) : (p5 = m4, f5 = ""), d4 = decodeURIComponent(p5), y5 = decodeURIComponent(f5), e$12(a5, d4) ? Array.isArray(a5[d4]) ? a5[d4].push(y5) : a5[d4] = [a5[d4], y5] : a5[d4] = y5;
  }
  return a5;
};
var r$12 = function(e5) {
  switch (typeof e5) {
    case "string":
      return e5;
    case "boolean":
      return e5 ? "true" : "false";
    case "number":
      return isFinite(e5) ? e5 : "";
    default:
      return "";
  }
};
var t3 = function(e5, n5, t5, o5) {
  return n5 = n5 || "&", t5 = t5 || "=", null === e5 && (e5 = void 0), "object" == typeof e5 ? Object.keys(e5).map(function(o6) {
    var a5 = encodeURIComponent(r$12(o6)) + t5;
    return Array.isArray(e5[o6]) ? e5[o6].map(function(e6) {
      return a5 + encodeURIComponent(r$12(e6));
    }).join(n5) : a5 + encodeURIComponent(r$12(e5[o6]));
  }).join(n5) : o5 ? encodeURIComponent(r$12(o5)) + t5 + encodeURIComponent(r$12(e5)) : "";
};
var o$12 = {};
o$12.decode = o$12.parse = n$12, o$12.encode = o$12.stringify = t3;
o$12.decode;
o$12.encode;
o$12.parse;
o$12.stringify;
var h3 = {};
var e3 = p$12;
var a3 = { isString: function(t5) {
  return "string" == typeof t5;
}, isObject: function(t5) {
  return "object" == typeof t5 && null !== t5;
}, isNull: function(t5) {
  return null === t5;
}, isNullOrUndefined: function(t5) {
  return null == t5;
} };
function r3() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
h3.parse = O2, h3.resolve = function(t5, s5) {
  return O2(t5, false, true).resolve(s5);
}, h3.resolveObject = function(t5, s5) {
  return t5 ? O2(t5, false, true).resolveObject(s5) : s5;
}, h3.format = function(t5) {
  a3.isString(t5) && (t5 = O2(t5));
  return t5 instanceof r3 ? t5.format() : r3.prototype.format.call(t5);
}, h3.Url = r3;
var o3 = /^([a-z0-9.+-]+:)/i;
var n3 = /:[0-9]*$/;
var i3 = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
var l3 = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"]);
var p3 = ["'"].concat(l3);
var c3 = ["%", "/", "?", ";", "#"].concat(p3);
var u3 = ["/", "?", "#"];
var f3 = /^[+a-z0-9A-Z_-]{0,63}$/;
var m2 = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
var v3 = { javascript: true, "javascript:": true };
var g2 = { javascript: true, "javascript:": true };
var y3 = { http: true, https: true, ftp: true, gopher: true, file: true, "http:": true, "https:": true, "ftp:": true, "gopher:": true, "file:": true };
var b2 = o$12;
function O2(t5, s5, h5) {
  if (t5 && a3.isObject(t5) && t5 instanceof r3)
    return t5;
  var e5 = new r3();
  return e5.parse(t5, s5, h5), e5;
}
r3.prototype.parse = function(t5, s5, h5) {
  if (!a3.isString(t5))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof t5);
  var r5 = t5.indexOf("?"), n5 = -1 !== r5 && r5 < t5.indexOf("#") ? "?" : "#", l5 = t5.split(n5);
  l5[0] = l5[0].replace(/\\/g, "/");
  var O4 = t5 = l5.join(n5);
  if (O4 = O4.trim(), !h5 && 1 === t5.split("#").length) {
    var d4 = i3.exec(O4);
    if (d4)
      return this.path = O4, this.href = O4, this.pathname = d4[1], d4[2] ? (this.search = d4[2], this.query = s5 ? b2.parse(this.search.substr(1)) : this.search.substr(1)) : s5 && (this.search = "", this.query = {}), this;
  }
  var j3 = o3.exec(O4);
  if (j3) {
    var q2 = (j3 = j3[0]).toLowerCase();
    this.protocol = q2, O4 = O4.substr(j3.length);
  }
  if (h5 || j3 || O4.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var x3 = "//" === O4.substr(0, 2);
    !x3 || j3 && g2[j3] || (O4 = O4.substr(2), this.slashes = true);
  }
  if (!g2[j3] && (x3 || j3 && !y3[j3])) {
    for (var A3, C3, I3 = -1, w3 = 0; w3 < u3.length; w3++) {
      -1 !== (N3 = O4.indexOf(u3[w3])) && (-1 === I3 || N3 < I3) && (I3 = N3);
    }
    -1 !== (C3 = -1 === I3 ? O4.lastIndexOf("@") : O4.lastIndexOf("@", I3)) && (A3 = O4.slice(0, C3), O4 = O4.slice(C3 + 1), this.auth = decodeURIComponent(A3)), I3 = -1;
    for (w3 = 0; w3 < c3.length; w3++) {
      var N3;
      -1 !== (N3 = O4.indexOf(c3[w3])) && (-1 === I3 || N3 < I3) && (I3 = N3);
    }
    -1 === I3 && (I3 = O4.length), this.host = O4.slice(0, I3), O4 = O4.slice(I3), this.parseHost(), this.hostname = this.hostname || "";
    var U3 = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
    if (!U3)
      for (var k3 = this.hostname.split(/\./), S3 = (w3 = 0, k3.length); w3 < S3; w3++) {
        var R3 = k3[w3];
        if (R3 && !R3.match(f3)) {
          for (var $2 = "", z3 = 0, H2 = R3.length; z3 < H2; z3++)
            R3.charCodeAt(z3) > 127 ? $2 += "x" : $2 += R3[z3];
          if (!$2.match(f3)) {
            var L3 = k3.slice(0, w3), Z2 = k3.slice(w3 + 1), _3 = R3.match(m2);
            _3 && (L3.push(_3[1]), Z2.unshift(_3[2])), Z2.length && (O4 = "/" + Z2.join(".") + O4), this.hostname = L3.join(".");
            break;
          }
        }
      }
    this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), U3 || (this.hostname = e3.toASCII(this.hostname));
    var E3 = this.port ? ":" + this.port : "", P3 = this.hostname || "";
    this.host = P3 + E3, this.href += this.host, U3 && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== O4[0] && (O4 = "/" + O4));
  }
  if (!v3[q2])
    for (w3 = 0, S3 = p3.length; w3 < S3; w3++) {
      var T3 = p3[w3];
      if (-1 !== O4.indexOf(T3)) {
        var B3 = encodeURIComponent(T3);
        B3 === T3 && (B3 = escape(T3)), O4 = O4.split(T3).join(B3);
      }
    }
  var D3 = O4.indexOf("#");
  -1 !== D3 && (this.hash = O4.substr(D3), O4 = O4.slice(0, D3));
  var F3 = O4.indexOf("?");
  if (-1 !== F3 ? (this.search = O4.substr(F3), this.query = O4.substr(F3 + 1), s5 && (this.query = b2.parse(this.query)), O4 = O4.slice(0, F3)) : s5 && (this.search = "", this.query = {}), O4 && (this.pathname = O4), y3[q2] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    E3 = this.pathname || "";
    var G2 = this.search || "";
    this.path = E3 + G2;
  }
  return this.href = this.format(), this;
}, r3.prototype.format = function() {
  var t5 = this.auth || "";
  t5 && (t5 = (t5 = encodeURIComponent(t5)).replace(/%3A/i, ":"), t5 += "@");
  var s5 = this.protocol || "", h5 = this.pathname || "", e5 = this.hash || "", r5 = false, o5 = "";
  this.host ? r5 = t5 + this.host : this.hostname && (r5 = t5 + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (r5 += ":" + this.port)), this.query && a3.isObject(this.query) && Object.keys(this.query).length && (o5 = b2.stringify(this.query));
  var n5 = this.search || o5 && "?" + o5 || "";
  return s5 && ":" !== s5.substr(-1) && (s5 += ":"), this.slashes || (!s5 || y3[s5]) && false !== r5 ? (r5 = "//" + (r5 || ""), h5 && "/" !== h5.charAt(0) && (h5 = "/" + h5)) : r5 || (r5 = ""), e5 && "#" !== e5.charAt(0) && (e5 = "#" + e5), n5 && "?" !== n5.charAt(0) && (n5 = "?" + n5), s5 + r5 + (h5 = h5.replace(/[?#]/g, function(t6) {
    return encodeURIComponent(t6);
  })) + (n5 = n5.replace("#", "%23")) + e5;
}, r3.prototype.resolve = function(t5) {
  return this.resolveObject(O2(t5, false, true)).format();
}, r3.prototype.resolveObject = function(t5) {
  if (a3.isString(t5)) {
    var s5 = new r3();
    s5.parse(t5, false, true), t5 = s5;
  }
  for (var h5 = new r3(), e5 = Object.keys(this), o5 = 0; o5 < e5.length; o5++) {
    var n5 = e5[o5];
    h5[n5] = this[n5];
  }
  if (h5.hash = t5.hash, "" === t5.href)
    return h5.href = h5.format(), h5;
  if (t5.slashes && !t5.protocol) {
    for (var i5 = Object.keys(t5), l5 = 0; l5 < i5.length; l5++) {
      var p5 = i5[l5];
      "protocol" !== p5 && (h5[p5] = t5[p5]);
    }
    return y3[h5.protocol] && h5.hostname && !h5.pathname && (h5.path = h5.pathname = "/"), h5.href = h5.format(), h5;
  }
  if (t5.protocol && t5.protocol !== h5.protocol) {
    if (!y3[t5.protocol]) {
      for (var c5 = Object.keys(t5), u5 = 0; u5 < c5.length; u5++) {
        var f5 = c5[u5];
        h5[f5] = t5[f5];
      }
      return h5.href = h5.format(), h5;
    }
    if (h5.protocol = t5.protocol, t5.host || g2[t5.protocol])
      h5.pathname = t5.pathname;
    else {
      for (var m4 = (t5.pathname || "").split("/"); m4.length && !(t5.host = m4.shift()); )
        ;
      t5.host || (t5.host = ""), t5.hostname || (t5.hostname = ""), "" !== m4[0] && m4.unshift(""), m4.length < 2 && m4.unshift(""), h5.pathname = m4.join("/");
    }
    if (h5.search = t5.search, h5.query = t5.query, h5.host = t5.host || "", h5.auth = t5.auth, h5.hostname = t5.hostname || t5.host, h5.port = t5.port, h5.pathname || h5.search) {
      var v5 = h5.pathname || "", b4 = h5.search || "";
      h5.path = v5 + b4;
    }
    return h5.slashes = h5.slashes || t5.slashes, h5.href = h5.format(), h5;
  }
  var O4 = h5.pathname && "/" === h5.pathname.charAt(0), d4 = t5.host || t5.pathname && "/" === t5.pathname.charAt(0), j3 = d4 || O4 || h5.host && t5.pathname, q2 = j3, x3 = h5.pathname && h5.pathname.split("/") || [], A3 = (m4 = t5.pathname && t5.pathname.split("/") || [], h5.protocol && !y3[h5.protocol]);
  if (A3 && (h5.hostname = "", h5.port = null, h5.host && ("" === x3[0] ? x3[0] = h5.host : x3.unshift(h5.host)), h5.host = "", t5.protocol && (t5.hostname = null, t5.port = null, t5.host && ("" === m4[0] ? m4[0] = t5.host : m4.unshift(t5.host)), t5.host = null), j3 = j3 && ("" === m4[0] || "" === x3[0])), d4)
    h5.host = t5.host || "" === t5.host ? t5.host : h5.host, h5.hostname = t5.hostname || "" === t5.hostname ? t5.hostname : h5.hostname, h5.search = t5.search, h5.query = t5.query, x3 = m4;
  else if (m4.length)
    x3 || (x3 = []), x3.pop(), x3 = x3.concat(m4), h5.search = t5.search, h5.query = t5.query;
  else if (!a3.isNullOrUndefined(t5.search)) {
    if (A3)
      h5.hostname = h5.host = x3.shift(), (U3 = !!(h5.host && h5.host.indexOf("@") > 0) && h5.host.split("@")) && (h5.auth = U3.shift(), h5.host = h5.hostname = U3.shift());
    return h5.search = t5.search, h5.query = t5.query, a3.isNull(h5.pathname) && a3.isNull(h5.search) || (h5.path = (h5.pathname ? h5.pathname : "") + (h5.search ? h5.search : "")), h5.href = h5.format(), h5;
  }
  if (!x3.length)
    return h5.pathname = null, h5.search ? h5.path = "/" + h5.search : h5.path = null, h5.href = h5.format(), h5;
  for (var C3 = x3.slice(-1)[0], I3 = (h5.host || t5.host || x3.length > 1) && ("." === C3 || ".." === C3) || "" === C3, w3 = 0, N3 = x3.length; N3 >= 0; N3--)
    "." === (C3 = x3[N3]) ? x3.splice(N3, 1) : ".." === C3 ? (x3.splice(N3, 1), w3++) : w3 && (x3.splice(N3, 1), w3--);
  if (!j3 && !q2)
    for (; w3--; w3)
      x3.unshift("..");
  !j3 || "" === x3[0] || x3[0] && "/" === x3[0].charAt(0) || x3.unshift(""), I3 && "/" !== x3.join("/").substr(-1) && x3.push("");
  var U3, k3 = "" === x3[0] || x3[0] && "/" === x3[0].charAt(0);
  A3 && (h5.hostname = h5.host = k3 ? "" : x3.length ? x3.shift() : "", (U3 = !!(h5.host && h5.host.indexOf("@") > 0) && h5.host.split("@")) && (h5.auth = U3.shift(), h5.host = h5.hostname = U3.shift()));
  return (j3 = j3 || h5.host && x3.length) && !k3 && x3.unshift(""), x3.length ? h5.pathname = x3.join("/") : (h5.pathname = null, h5.path = null), a3.isNull(h5.pathname) && a3.isNull(h5.search) || (h5.path = (h5.pathname ? h5.pathname : "") + (h5.search ? h5.search : "")), h5.auth = t5.auth || h5.auth, h5.slashes = h5.slashes || t5.slashes, h5.href = h5.format(), h5;
}, r3.prototype.parseHost = function() {
  var t5 = this.host, s5 = n3.exec(t5);
  s5 && (":" !== (s5 = s5[0]) && (this.port = s5.substr(1)), t5 = t5.substr(0, t5.length - s5.length)), t5 && (this.hostname = t5);
};
h3.Url;
h3.format;
h3.resolve;
h3.resolveObject;
var exports5 = {};
var _dewExec5 = false;
function dew6() {
  if (_dewExec5)
    return exports5;
  _dewExec5 = true;
  var process3 = T$1;
  function assertPath(path2) {
    if (typeof path2 !== "string") {
      throw new TypeError("Path must be a string. Received " + JSON.stringify(path2));
    }
  }
  function normalizeStringPosix(path2, allowAboveRoot) {
    var res = "";
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for (var i5 = 0; i5 <= path2.length; ++i5) {
      if (i5 < path2.length)
        code = path2.charCodeAt(i5);
      else if (code === 47)
        break;
      else
        code = 47;
      if (code === 47) {
        if (lastSlash === i5 - 1 || dots === 1)
          ;
        else if (lastSlash !== i5 - 1 && dots === 2) {
          if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
            if (res.length > 2) {
              var lastSlashIndex = res.lastIndexOf("/");
              if (lastSlashIndex !== res.length - 1) {
                if (lastSlashIndex === -1) {
                  res = "";
                  lastSegmentLength = 0;
                } else {
                  res = res.slice(0, lastSlashIndex);
                  lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                }
                lastSlash = i5;
                dots = 0;
                continue;
              }
            } else if (res.length === 2 || res.length === 1) {
              res = "";
              lastSegmentLength = 0;
              lastSlash = i5;
              dots = 0;
              continue;
            }
          }
          if (allowAboveRoot) {
            if (res.length > 0)
              res += "/..";
            else
              res = "..";
            lastSegmentLength = 2;
          }
        } else {
          if (res.length > 0)
            res += "/" + path2.slice(lastSlash + 1, i5);
          else
            res = path2.slice(lastSlash + 1, i5);
          lastSegmentLength = i5 - lastSlash - 1;
        }
        lastSlash = i5;
        dots = 0;
      } else if (code === 46 && dots !== -1) {
        ++dots;
      } else {
        dots = -1;
      }
    }
    return res;
  }
  function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) {
      return base;
    }
    if (dir === pathObject.root) {
      return dir + base;
    }
    return dir + sep + base;
  }
  var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve2() {
      var resolvedPath = "";
      var resolvedAbsolute = false;
      var cwd2;
      for (var i5 = arguments.length - 1; i5 >= -1 && !resolvedAbsolute; i5--) {
        var path2;
        if (i5 >= 0)
          path2 = arguments[i5];
        else {
          if (cwd2 === void 0)
            cwd2 = process3.cwd();
          path2 = cwd2;
        }
        assertPath(path2);
        if (path2.length === 0) {
          continue;
        }
        resolvedPath = path2 + "/" + resolvedPath;
        resolvedAbsolute = path2.charCodeAt(0) === 47;
      }
      resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
      if (resolvedAbsolute) {
        if (resolvedPath.length > 0)
          return "/" + resolvedPath;
        else
          return "/";
      } else if (resolvedPath.length > 0) {
        return resolvedPath;
      } else {
        return ".";
      }
    },
    normalize: function normalize(path2) {
      assertPath(path2);
      if (path2.length === 0)
        return ".";
      var isAbsolute = path2.charCodeAt(0) === 47;
      var trailingSeparator = path2.charCodeAt(path2.length - 1) === 47;
      path2 = normalizeStringPosix(path2, !isAbsolute);
      if (path2.length === 0 && !isAbsolute)
        path2 = ".";
      if (path2.length > 0 && trailingSeparator)
        path2 += "/";
      if (isAbsolute)
        return "/" + path2;
      return path2;
    },
    isAbsolute: function isAbsolute(path2) {
      assertPath(path2);
      return path2.length > 0 && path2.charCodeAt(0) === 47;
    },
    join: function join() {
      if (arguments.length === 0)
        return ".";
      var joined;
      for (var i5 = 0; i5 < arguments.length; ++i5) {
        var arg = arguments[i5];
        assertPath(arg);
        if (arg.length > 0) {
          if (joined === void 0)
            joined = arg;
          else
            joined += "/" + arg;
        }
      }
      if (joined === void 0)
        return ".";
      return posix.normalize(joined);
    },
    relative: function relative(from, to) {
      assertPath(from);
      assertPath(to);
      if (from === to)
        return "";
      from = posix.resolve(from);
      to = posix.resolve(to);
      if (from === to)
        return "";
      var fromStart = 1;
      for (; fromStart < from.length; ++fromStart) {
        if (from.charCodeAt(fromStart) !== 47)
          break;
      }
      var fromEnd = from.length;
      var fromLen = fromEnd - fromStart;
      var toStart = 1;
      for (; toStart < to.length; ++toStart) {
        if (to.charCodeAt(toStart) !== 47)
          break;
      }
      var toEnd = to.length;
      var toLen = toEnd - toStart;
      var length = fromLen < toLen ? fromLen : toLen;
      var lastCommonSep = -1;
      var i5 = 0;
      for (; i5 <= length; ++i5) {
        if (i5 === length) {
          if (toLen > length) {
            if (to.charCodeAt(toStart + i5) === 47) {
              return to.slice(toStart + i5 + 1);
            } else if (i5 === 0) {
              return to.slice(toStart + i5);
            }
          } else if (fromLen > length) {
            if (from.charCodeAt(fromStart + i5) === 47) {
              lastCommonSep = i5;
            } else if (i5 === 0) {
              lastCommonSep = 0;
            }
          }
          break;
        }
        var fromCode2 = from.charCodeAt(fromStart + i5);
        var toCode = to.charCodeAt(toStart + i5);
        if (fromCode2 !== toCode)
          break;
        else if (fromCode2 === 47)
          lastCommonSep = i5;
      }
      var out = "";
      for (i5 = fromStart + lastCommonSep + 1; i5 <= fromEnd; ++i5) {
        if (i5 === fromEnd || from.charCodeAt(i5) === 47) {
          if (out.length === 0)
            out += "..";
          else
            out += "/..";
        }
      }
      if (out.length > 0)
        return out + to.slice(toStart + lastCommonSep);
      else {
        toStart += lastCommonSep;
        if (to.charCodeAt(toStart) === 47)
          ++toStart;
        return to.slice(toStart);
      }
    },
    _makeLong: function _makeLong(path2) {
      return path2;
    },
    dirname: function dirname(path2) {
      assertPath(path2);
      if (path2.length === 0)
        return ".";
      var code = path2.charCodeAt(0);
      var hasRoot = code === 47;
      var end = -1;
      var matchedSlash = true;
      for (var i5 = path2.length - 1; i5 >= 1; --i5) {
        code = path2.charCodeAt(i5);
        if (code === 47) {
          if (!matchedSlash) {
            end = i5;
            break;
          }
        } else {
          matchedSlash = false;
        }
      }
      if (end === -1)
        return hasRoot ? "/" : ".";
      if (hasRoot && end === 1)
        return "//";
      return path2.slice(0, end);
    },
    basename: function basename(path2, ext) {
      if (ext !== void 0 && typeof ext !== "string")
        throw new TypeError('"ext" argument must be a string');
      assertPath(path2);
      var start = 0;
      var end = -1;
      var matchedSlash = true;
      var i5;
      if (ext !== void 0 && ext.length > 0 && ext.length <= path2.length) {
        if (ext.length === path2.length && ext === path2)
          return "";
        var extIdx = ext.length - 1;
        var firstNonSlashEnd = -1;
        for (i5 = path2.length - 1; i5 >= 0; --i5) {
          var code = path2.charCodeAt(i5);
          if (code === 47) {
            if (!matchedSlash) {
              start = i5 + 1;
              break;
            }
          } else {
            if (firstNonSlashEnd === -1) {
              matchedSlash = false;
              firstNonSlashEnd = i5 + 1;
            }
            if (extIdx >= 0) {
              if (code === ext.charCodeAt(extIdx)) {
                if (--extIdx === -1) {
                  end = i5;
                }
              } else {
                extIdx = -1;
                end = firstNonSlashEnd;
              }
            }
          }
        }
        if (start === end)
          end = firstNonSlashEnd;
        else if (end === -1)
          end = path2.length;
        return path2.slice(start, end);
      } else {
        for (i5 = path2.length - 1; i5 >= 0; --i5) {
          if (path2.charCodeAt(i5) === 47) {
            if (!matchedSlash) {
              start = i5 + 1;
              break;
            }
          } else if (end === -1) {
            matchedSlash = false;
            end = i5 + 1;
          }
        }
        if (end === -1)
          return "";
        return path2.slice(start, end);
      }
    },
    extname: function extname(path2) {
      assertPath(path2);
      var startDot = -1;
      var startPart = 0;
      var end = -1;
      var matchedSlash = true;
      var preDotState = 0;
      for (var i5 = path2.length - 1; i5 >= 0; --i5) {
        var code = path2.charCodeAt(i5);
        if (code === 47) {
          if (!matchedSlash) {
            startPart = i5 + 1;
            break;
          }
          continue;
        }
        if (end === -1) {
          matchedSlash = false;
          end = i5 + 1;
        }
        if (code === 46) {
          if (startDot === -1)
            startDot = i5;
          else if (preDotState !== 1)
            preDotState = 1;
        } else if (startDot !== -1) {
          preDotState = -1;
        }
      }
      if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        return "";
      }
      return path2.slice(startDot, end);
    },
    format: function format2(pathObject) {
      if (pathObject === null || typeof pathObject !== "object") {
        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
      }
      return _format("/", pathObject);
    },
    parse: function parse2(path2) {
      assertPath(path2);
      var ret = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
      };
      if (path2.length === 0)
        return ret;
      var code = path2.charCodeAt(0);
      var isAbsolute = code === 47;
      var start;
      if (isAbsolute) {
        ret.root = "/";
        start = 1;
      } else {
        start = 0;
      }
      var startDot = -1;
      var startPart = 0;
      var end = -1;
      var matchedSlash = true;
      var i5 = path2.length - 1;
      var preDotState = 0;
      for (; i5 >= start; --i5) {
        code = path2.charCodeAt(i5);
        if (code === 47) {
          if (!matchedSlash) {
            startPart = i5 + 1;
            break;
          }
          continue;
        }
        if (end === -1) {
          matchedSlash = false;
          end = i5 + 1;
        }
        if (code === 46) {
          if (startDot === -1)
            startDot = i5;
          else if (preDotState !== 1)
            preDotState = 1;
        } else if (startDot !== -1) {
          preDotState = -1;
        }
      }
      if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        if (end !== -1) {
          if (startPart === 0 && isAbsolute)
            ret.base = ret.name = path2.slice(1, end);
          else
            ret.base = ret.name = path2.slice(startPart, end);
        }
      } else {
        if (startPart === 0 && isAbsolute) {
          ret.name = path2.slice(1, startDot);
          ret.base = path2.slice(1, end);
        } else {
          ret.name = path2.slice(startPart, startDot);
          ret.base = path2.slice(startPart, end);
        }
        ret.ext = path2.slice(startDot, end);
      }
      if (startPart > 0)
        ret.dir = path2.slice(0, startPart - 1);
      else if (isAbsolute)
        ret.dir = "/";
      return ret;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
  };
  posix.posix = posix;
  exports5 = posix;
  return exports5;
}
var path = dew6();
var processPlatform$1 = typeof Deno !== "undefined" ? Deno.build.os === "windows" ? "win32" : Deno.build.os : void 0;
h3.URL = typeof URL !== "undefined" ? URL : null;
h3.pathToFileURL = pathToFileURL$1;
h3.fileURLToPath = fileURLToPath$1;
h3.Url;
h3.format;
h3.resolve;
h3.resolveObject;
h3.URL;
var CHAR_BACKWARD_SLASH$1 = 92;
var CHAR_FORWARD_SLASH$1 = 47;
var CHAR_LOWERCASE_A$1 = 97;
var CHAR_LOWERCASE_Z$1 = 122;
var isWindows$1 = processPlatform$1 === "win32";
var forwardSlashRegEx$1 = /\//g;
var percentRegEx$1 = /%/g;
var backslashRegEx$1 = /\\/g;
var newlineRegEx$1 = /\n/g;
var carriageReturnRegEx$1 = /\r/g;
var tabRegEx$1 = /\t/g;
function fileURLToPath$1(path2) {
  if (typeof path2 === "string")
    path2 = new URL(path2);
  else if (!(path2 instanceof URL)) {
    throw new Deno.errors.InvalidData(
      "invalid argument path , must be a string or URL"
    );
  }
  if (path2.protocol !== "file:") {
    throw new Deno.errors.InvalidData("invalid url scheme");
  }
  return isWindows$1 ? getPathFromURLWin$1(path2) : getPathFromURLPosix$1(path2);
}
function getPathFromURLWin$1(url) {
  const hostname = url.hostname;
  let pathname = url.pathname;
  for (let n5 = 0; n5 < pathname.length; n5++) {
    if (pathname[n5] === "%") {
      const third = pathname.codePointAt(n5 + 2) || 32;
      if (pathname[n5 + 1] === "2" && third === 102 || // 2f 2F /
      pathname[n5 + 1] === "5" && third === 99) {
        throw new Deno.errors.InvalidData(
          "must not include encoded \\ or / characters"
        );
      }
    }
  }
  pathname = pathname.replace(forwardSlashRegEx$1, "\\");
  pathname = decodeURIComponent(pathname);
  if (hostname !== "") {
    return `\\\\${hostname}${pathname}`;
  } else {
    const letter = pathname.codePointAt(1) | 32;
    const sep = pathname[2];
    if (letter < CHAR_LOWERCASE_A$1 || letter > CHAR_LOWERCASE_Z$1 || // a..z A..Z
    sep !== ":") {
      throw new Deno.errors.InvalidData("file url path must be absolute");
    }
    return pathname.slice(1);
  }
}
function getPathFromURLPosix$1(url) {
  if (url.hostname !== "") {
    throw new Deno.errors.InvalidData("invalid file url hostname");
  }
  const pathname = url.pathname;
  for (let n5 = 0; n5 < pathname.length; n5++) {
    if (pathname[n5] === "%") {
      const third = pathname.codePointAt(n5 + 2) || 32;
      if (pathname[n5 + 1] === "2" && third === 102) {
        throw new Deno.errors.InvalidData(
          "must not include encoded / characters"
        );
      }
    }
  }
  return decodeURIComponent(pathname);
}
function pathToFileURL$1(filepath) {
  let resolved = path.resolve(filepath);
  const filePathLast = filepath.charCodeAt(filepath.length - 1);
  if ((filePathLast === CHAR_FORWARD_SLASH$1 || isWindows$1 && filePathLast === CHAR_BACKWARD_SLASH$1) && resolved[resolved.length - 1] !== path.sep) {
    resolved += "/";
  }
  const outURL = new URL("file://");
  if (resolved.includes("%"))
    resolved = resolved.replace(percentRegEx$1, "%25");
  if (!isWindows$1 && resolved.includes("\\")) {
    resolved = resolved.replace(backslashRegEx$1, "%5C");
  }
  if (resolved.includes("\n"))
    resolved = resolved.replace(newlineRegEx$1, "%0A");
  if (resolved.includes("\r")) {
    resolved = resolved.replace(carriageReturnRegEx$1, "%0D");
  }
  if (resolved.includes("	"))
    resolved = resolved.replace(tabRegEx$1, "%09");
  outURL.pathname = resolved;
  return outURL;
}
var processPlatform = typeof Deno !== "undefined" ? Deno.build.os === "windows" ? "win32" : Deno.build.os : void 0;
h3.URL = typeof URL !== "undefined" ? URL : null;
h3.pathToFileURL = pathToFileURL;
h3.fileURLToPath = fileURLToPath;
h3.Url;
h3.format;
h3.resolve;
h3.resolveObject;
h3.parse;
h3.URL;
var CHAR_BACKWARD_SLASH = 92;
var CHAR_FORWARD_SLASH = 47;
var CHAR_LOWERCASE_A = 97;
var CHAR_LOWERCASE_Z = 122;
var isWindows = processPlatform === "win32";
var forwardSlashRegEx = /\//g;
var percentRegEx = /%/g;
var backslashRegEx = /\\/g;
var newlineRegEx = /\n/g;
var carriageReturnRegEx = /\r/g;
var tabRegEx = /\t/g;
function fileURLToPath(path2) {
  if (typeof path2 === "string")
    path2 = new URL(path2);
  else if (!(path2 instanceof URL)) {
    throw new Deno.errors.InvalidData(
      "invalid argument path , must be a string or URL"
    );
  }
  if (path2.protocol !== "file:") {
    throw new Deno.errors.InvalidData("invalid url scheme");
  }
  return isWindows ? getPathFromURLWin(path2) : getPathFromURLPosix(path2);
}
function getPathFromURLWin(url) {
  const hostname = url.hostname;
  let pathname = url.pathname;
  for (let n5 = 0; n5 < pathname.length; n5++) {
    if (pathname[n5] === "%") {
      const third = pathname.codePointAt(n5 + 2) || 32;
      if (pathname[n5 + 1] === "2" && third === 102 || // 2f 2F /
      pathname[n5 + 1] === "5" && third === 99) {
        throw new Deno.errors.InvalidData(
          "must not include encoded \\ or / characters"
        );
      }
    }
  }
  pathname = pathname.replace(forwardSlashRegEx, "\\");
  pathname = decodeURIComponent(pathname);
  if (hostname !== "") {
    return `\\\\${hostname}${pathname}`;
  } else {
    const letter = pathname.codePointAt(1) | 32;
    const sep = pathname[2];
    if (letter < CHAR_LOWERCASE_A || letter > CHAR_LOWERCASE_Z || // a..z A..Z
    sep !== ":") {
      throw new Deno.errors.InvalidData("file url path must be absolute");
    }
    return pathname.slice(1);
  }
}
function getPathFromURLPosix(url) {
  if (url.hostname !== "") {
    throw new Deno.errors.InvalidData("invalid file url hostname");
  }
  const pathname = url.pathname;
  for (let n5 = 0; n5 < pathname.length; n5++) {
    if (pathname[n5] === "%") {
      const third = pathname.codePointAt(n5 + 2) || 32;
      if (pathname[n5 + 1] === "2" && third === 102) {
        throw new Deno.errors.InvalidData(
          "must not include encoded / characters"
        );
      }
    }
  }
  return decodeURIComponent(pathname);
}
function pathToFileURL(filepath) {
  let resolved = exports$22.resolve(filepath);
  const filePathLast = filepath.charCodeAt(filepath.length - 1);
  if ((filePathLast === CHAR_FORWARD_SLASH || isWindows && filePathLast === CHAR_BACKWARD_SLASH) && resolved[resolved.length - 1] !== exports$22.sep) {
    resolved += "/";
  }
  const outURL = new URL("file://");
  if (resolved.includes("%"))
    resolved = resolved.replace(percentRegEx, "%25");
  if (!isWindows && resolved.includes("\\")) {
    resolved = resolved.replace(backslashRegEx, "%5C");
  }
  if (resolved.includes("\n"))
    resolved = resolved.replace(newlineRegEx, "%0A");
  if (resolved.includes("\r")) {
    resolved = resolved.replace(carriageReturnRegEx, "%0D");
  }
  if (resolved.includes("	"))
    resolved = resolved.replace(tabRegEx, "%09");
  outURL.pathname = resolved;
  return outURL;
}

// node_modules/@jspm/core/nodelibs/browser/http.js
var exports$l = {};
var _dewExec$k = false;
var _global$5 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$k() {
  if (_dewExec$k)
    return exports$l;
  _dewExec$k = true;
  exports$l.fetch = isFunction(_global$5.fetch) && isFunction(_global$5.ReadableStream);
  exports$l.writableStream = isFunction(_global$5.WritableStream);
  exports$l.abortController = isFunction(_global$5.AbortController);
  var xhr;
  function getXHR() {
    if (xhr !== void 0)
      return xhr;
    if (_global$5.XMLHttpRequest) {
      xhr = new _global$5.XMLHttpRequest();
      try {
        xhr.open("GET", _global$5.XDomainRequest ? "/" : "https://example.com");
      } catch (e5) {
        xhr = null;
      }
    } else {
      xhr = null;
    }
    return xhr;
  }
  function checkTypeSupport(type) {
    var xhr2 = getXHR();
    if (!xhr2)
      return false;
    try {
      xhr2.responseType = type;
      return xhr2.responseType === type;
    } catch (e5) {
    }
    return false;
  }
  exports$l.arraybuffer = exports$l.fetch || checkTypeSupport("arraybuffer");
  exports$l.msstream = !exports$l.fetch && checkTypeSupport("ms-stream");
  exports$l.mozchunkedarraybuffer = !exports$l.fetch && checkTypeSupport("moz-chunked-arraybuffer");
  exports$l.overrideMimeType = exports$l.fetch || (getXHR() ? isFunction(getXHR().overrideMimeType) : false);
  function isFunction(value) {
    return typeof value === "function";
  }
  xhr = null;
  return exports$l;
}
var exports$k = {};
var _dewExec$j = false;
function dew$j() {
  if (_dewExec$j)
    return exports$k;
  _dewExec$j = true;
  exports$k = y.EventEmitter;
  return exports$k;
}
var exports$j = {};
var _dewExec$i = false;
function dew$i() {
  if (_dewExec$i)
    return exports$j;
  _dewExec$i = true;
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i5 = 1; i5 < arguments.length; i5++) {
      var source = null != arguments[i5] ? arguments[i5] : {};
      i5 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i5 = 0; i5 < props.length; i5++) {
      var descriptor = props[i5];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  var _require = dew(), Buffer2 = _require.Buffer;
  var _require2 = X, inspect = _require2.inspect;
  var custom = inspect && inspect.custom || "inspect";
  function copyBuffer(src, target, offset) {
    Buffer2.prototype.copy.call(src, target, offset);
  }
  exports$j = /* @__PURE__ */ function() {
    function BufferList() {
      _classCallCheck(this, BufferList);
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    _createClass(BufferList, [{
      key: "push",
      value: function push(v5) {
        var entry = {
          data: v5,
          next: null
        };
        if (this.length > 0)
          this.tail.next = entry;
        else
          this.head = entry;
        this.tail = entry;
        ++this.length;
      }
    }, {
      key: "unshift",
      value: function unshift(v5) {
        var entry = {
          data: v5,
          next: this.head
        };
        if (this.length === 0)
          this.tail = entry;
        this.head = entry;
        ++this.length;
      }
    }, {
      key: "shift",
      value: function shift() {
        if (this.length === 0)
          return;
        var ret = this.head.data;
        if (this.length === 1)
          this.head = this.tail = null;
        else
          this.head = this.head.next;
        --this.length;
        return ret;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.head = this.tail = null;
        this.length = 0;
      }
    }, {
      key: "join",
      value: function join(s5) {
        if (this.length === 0)
          return "";
        var p5 = this.head;
        var ret = "" + p5.data;
        while (p5 = p5.next)
          ret += s5 + p5.data;
        return ret;
      }
    }, {
      key: "concat",
      value: function concat(n5) {
        if (this.length === 0)
          return Buffer2.alloc(0);
        var ret = Buffer2.allocUnsafe(n5 >>> 0);
        var p5 = this.head;
        var i5 = 0;
        while (p5) {
          copyBuffer(p5.data, ret, i5);
          i5 += p5.data.length;
          p5 = p5.next;
        }
        return ret;
      }
      // Consumes a specified amount of bytes or characters from the buffered data.
    }, {
      key: "consume",
      value: function consume(n5, hasStrings) {
        var ret;
        if (n5 < this.head.data.length) {
          ret = this.head.data.slice(0, n5);
          this.head.data = this.head.data.slice(n5);
        } else if (n5 === this.head.data.length) {
          ret = this.shift();
        } else {
          ret = hasStrings ? this._getString(n5) : this._getBuffer(n5);
        }
        return ret;
      }
    }, {
      key: "first",
      value: function first() {
        return this.head.data;
      }
      // Consumes a specified amount of characters from the buffered data.
    }, {
      key: "_getString",
      value: function _getString(n5) {
        var p5 = this.head;
        var c5 = 1;
        var ret = p5.data;
        n5 -= ret.length;
        while (p5 = p5.next) {
          var str = p5.data;
          var nb = n5 > str.length ? str.length : n5;
          if (nb === str.length)
            ret += str;
          else
            ret += str.slice(0, n5);
          n5 -= nb;
          if (n5 === 0) {
            if (nb === str.length) {
              ++c5;
              if (p5.next)
                this.head = p5.next;
              else
                this.head = this.tail = null;
            } else {
              this.head = p5;
              p5.data = str.slice(nb);
            }
            break;
          }
          ++c5;
        }
        this.length -= c5;
        return ret;
      }
      // Consumes a specified amount of bytes from the buffered data.
    }, {
      key: "_getBuffer",
      value: function _getBuffer(n5) {
        var ret = Buffer2.allocUnsafe(n5);
        var p5 = this.head;
        var c5 = 1;
        p5.data.copy(ret);
        n5 -= p5.data.length;
        while (p5 = p5.next) {
          var buf = p5.data;
          var nb = n5 > buf.length ? buf.length : n5;
          buf.copy(ret, ret.length - n5, 0, nb);
          n5 -= nb;
          if (n5 === 0) {
            if (nb === buf.length) {
              ++c5;
              if (p5.next)
                this.head = p5.next;
              else
                this.head = this.tail = null;
            } else {
              this.head = p5;
              p5.data = buf.slice(nb);
            }
            break;
          }
          ++c5;
        }
        this.length -= c5;
        return ret;
      }
      // Make sure the linked list only shows the minimal necessary information.
    }, {
      key: custom,
      value: function value(_3, options) {
        return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
          // Only inspect one level.
          depth: 0,
          // It should not recurse.
          customInspect: false
        }));
      }
    }]);
    return BufferList;
  }();
  return exports$j;
}
var exports$i = {};
var _dewExec$h = false;
function dew$h() {
  if (_dewExec$h)
    return exports$i;
  _dewExec$h = true;
  var process$1 = process;
  function destroy(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
      if (cb) {
        cb(err);
      } else if (err) {
        if (!this._writableState) {
          process$1.nextTick(emitErrorNT, this, err);
        } else if (!this._writableState.errorEmitted) {
          this._writableState.errorEmitted = true;
          process$1.nextTick(emitErrorNT, this, err);
        }
      }
      return this;
    }
    if (this._readableState) {
      this._readableState.destroyed = true;
    }
    if (this._writableState) {
      this._writableState.destroyed = true;
    }
    this._destroy(err || null, function(err2) {
      if (!cb && err2) {
        if (!_this._writableState) {
          process$1.nextTick(emitErrorAndCloseNT, _this, err2);
        } else if (!_this._writableState.errorEmitted) {
          _this._writableState.errorEmitted = true;
          process$1.nextTick(emitErrorAndCloseNT, _this, err2);
        } else {
          process$1.nextTick(emitCloseNT, _this);
        }
      } else if (cb) {
        process$1.nextTick(emitCloseNT, _this);
        cb(err2);
      } else {
        process$1.nextTick(emitCloseNT, _this);
      }
    });
    return this;
  }
  function emitErrorAndCloseNT(self2, err) {
    emitErrorNT(self2, err);
    emitCloseNT(self2);
  }
  function emitCloseNT(self2) {
    if (self2._writableState && !self2._writableState.emitClose)
      return;
    if (self2._readableState && !self2._readableState.emitClose)
      return;
    self2.emit("close");
  }
  function undestroy() {
    if (this._readableState) {
      this._readableState.destroyed = false;
      this._readableState.reading = false;
      this._readableState.ended = false;
      this._readableState.endEmitted = false;
    }
    if (this._writableState) {
      this._writableState.destroyed = false;
      this._writableState.ended = false;
      this._writableState.ending = false;
      this._writableState.finalCalled = false;
      this._writableState.prefinished = false;
      this._writableState.finished = false;
      this._writableState.errorEmitted = false;
    }
  }
  function emitErrorNT(self2, err) {
    self2.emit("error", err);
  }
  function errorOrDestroy(stream, err) {
    var rState = stream._readableState;
    var wState = stream._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy)
      stream.destroy(err);
    else
      stream.emit("error", err);
  }
  exports$i = {
    destroy,
    undestroy,
    errorOrDestroy
  };
  return exports$i;
}
var exports$h = {};
var _dewExec$g = false;
function dew$g() {
  if (_dewExec$g)
    return exports$h;
  _dewExec$g = true;
  const codes = {};
  function createErrorType(code, message, Base) {
    if (!Base) {
      Base = Error;
    }
    function getMessage(arg1, arg2, arg3) {
      if (typeof message === "string") {
        return message;
      } else {
        return message(arg1, arg2, arg3);
      }
    }
    class NodeError extends Base {
      constructor(arg1, arg2, arg3) {
        super(getMessage(arg1, arg2, arg3));
      }
    }
    NodeError.prototype.name = Base.name;
    NodeError.prototype.code = code;
    codes[code] = NodeError;
  }
  function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
      const len = expected.length;
      expected = expected.map((i5) => String(i5));
      if (len > 2) {
        return `one of ${thing} ${expected.slice(0, len - 1).join(", ")}, or ` + expected[len - 1];
      } else if (len === 2) {
        return `one of ${thing} ${expected[0]} or ${expected[1]}`;
      } else {
        return `of ${thing} ${expected[0]}`;
      }
    } else {
      return `of ${thing} ${String(expected)}`;
    }
  }
  function startsWith(str, search, pos) {
    return str.substr(0, search.length) === search;
  }
  function endsWith(str, search, this_len) {
    if (this_len === void 0 || this_len > str.length) {
      this_len = str.length;
    }
    return str.substring(this_len - search.length, this_len) === search;
  }
  function includes(str, search, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + search.length > str.length) {
      return false;
    } else {
      return str.indexOf(search, start) !== -1;
    }
  }
  createErrorType("ERR_INVALID_OPT_VALUE", function(name2, value) {
    return 'The value "' + value + '" is invalid for option "' + name2 + '"';
  }, TypeError);
  createErrorType("ERR_INVALID_ARG_TYPE", function(name2, expected, actual) {
    let determiner;
    if (typeof expected === "string" && startsWith(expected, "not ")) {
      determiner = "must not be";
      expected = expected.replace(/^not /, "");
    } else {
      determiner = "must be";
    }
    let msg;
    if (endsWith(name2, " argument")) {
      msg = `The ${name2} ${determiner} ${oneOf(expected, "type")}`;
    } else {
      const type = includes(name2, ".") ? "property" : "argument";
      msg = `The "${name2}" ${type} ${determiner} ${oneOf(expected, "type")}`;
    }
    msg += `. Received type ${typeof actual}`;
    return msg;
  }, TypeError);
  createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
  createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name2) {
    return "The " + name2 + " method is not implemented";
  });
  createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
  createErrorType("ERR_STREAM_DESTROYED", function(name2) {
    return "Cannot call " + name2 + " after a stream was destroyed";
  });
  createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
  createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
  createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
  createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
  createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
    return "Unknown encoding: " + arg;
  }, TypeError);
  createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
  exports$h.codes = codes;
  return exports$h;
}
var exports$g = {};
var _dewExec$f = false;
function dew$f() {
  if (_dewExec$f)
    return exports$g;
  _dewExec$f = true;
  var ERR_INVALID_OPT_VALUE = dew$g().codes.ERR_INVALID_OPT_VALUE;
  function highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
  }
  function getHighWaterMark(state, options, duplexKey, isDuplex) {
    var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
    if (hwm != null) {
      if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
        var name2 = isDuplex ? duplexKey : "highWaterMark";
        throw new ERR_INVALID_OPT_VALUE(name2, hwm);
      }
      return Math.floor(hwm);
    }
    return state.objectMode ? 16 : 16 * 1024;
  }
  exports$g = {
    getHighWaterMark
  };
  return exports$g;
}
var exports$f = {};
var _dewExec$e = false;
var _global$4 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$e() {
  if (_dewExec$e)
    return exports$f;
  _dewExec$e = true;
  var process$1 = process;
  exports$f = Writable;
  function CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
      onCorkedFinish(_this, state);
    };
  }
  var Duplex;
  Writable.WritableState = WritableState;
  var internalUtil = {
    deprecate: dew3()
  };
  var Stream = dew$j();
  var Buffer2 = dew().Buffer;
  var OurUint8Array = (typeof _global$4 !== "undefined" ? _global$4 : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
  };
  function _uint8ArrayToBuffer(chunk) {
    return Buffer2.from(chunk);
  }
  function _isUint8Array(obj) {
    return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
  }
  var destroyImpl = dew$h();
  var _require = dew$f(), getHighWaterMark = _require.getHighWaterMark;
  var _require$codes = dew$g().codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
  var errorOrDestroy = destroyImpl.errorOrDestroy;
  dew2()(Writable, Stream);
  function nop() {
  }
  function WritableState(options, stream, isDuplex) {
    Duplex = Duplex || dew$d();
    options = options || {};
    if (typeof isDuplex !== "boolean")
      isDuplex = stream instanceof Duplex;
    this.objectMode = !!options.objectMode;
    if (isDuplex)
      this.objectMode = this.objectMode || !!options.writableObjectMode;
    this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
    this.finalCalled = false;
    this.needDrain = false;
    this.ending = false;
    this.ended = false;
    this.finished = false;
    this.destroyed = false;
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.length = 0;
    this.writing = false;
    this.corked = 0;
    this.sync = true;
    this.bufferProcessing = false;
    this.onwrite = function(er) {
      onwrite(stream, er);
    };
    this.writecb = null;
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    this.pendingcb = 0;
    this.prefinished = false;
    this.errorEmitted = false;
    this.emitClose = options.emitClose !== false;
    this.autoDestroy = !!options.autoDestroy;
    this.bufferedRequestCount = 0;
    this.corkedRequestsFree = new CorkedRequest(this);
  }
  WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while (current) {
      out.push(current);
      current = current.next;
    }
    return out;
  };
  (function() {
    try {
      Object.defineProperty(WritableState.prototype, "buffer", {
        get: internalUtil.deprecate(function writableStateBufferGetter() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch (_3) {
    }
  })();
  var realHasInstance;
  if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable, Symbol.hasInstance, {
      value: function value(object) {
        if (realHasInstance.call(this, object))
          return true;
        if (this !== Writable)
          return false;
        return object && object._writableState instanceof WritableState;
      }
    });
  } else {
    realHasInstance = function realHasInstance2(object) {
      return object instanceof this;
    };
  }
  function Writable(options) {
    Duplex = Duplex || dew$d();
    var isDuplex = this instanceof Duplex;
    if (!isDuplex && !realHasInstance.call(Writable, this))
      return new Writable(options);
    this._writableState = new WritableState(options, this, isDuplex);
    this.writable = true;
    if (options) {
      if (typeof options.write === "function")
        this._write = options.write;
      if (typeof options.writev === "function")
        this._writev = options.writev;
      if (typeof options.destroy === "function")
        this._destroy = options.destroy;
      if (typeof options.final === "function")
        this._final = options.final;
    }
    Stream.call(this);
  }
  Writable.prototype.pipe = function() {
    errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
  };
  function writeAfterEnd(stream, cb) {
    var er = new ERR_STREAM_WRITE_AFTER_END();
    errorOrDestroy(stream, er);
    process$1.nextTick(cb, er);
  }
  function validChunk(stream, state, chunk, cb) {
    var er;
    if (chunk === null) {
      er = new ERR_STREAM_NULL_VALUES();
    } else if (typeof chunk !== "string" && !state.objectMode) {
      er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
    }
    if (er) {
      errorOrDestroy(stream, er);
      process$1.nextTick(cb, er);
      return false;
    }
    return true;
  }
  Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer2.isBuffer(chunk)) {
      chunk = _uint8ArrayToBuffer(chunk);
    }
    if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (isBuf)
      encoding = "buffer";
    else if (!encoding)
      encoding = state.defaultEncoding;
    if (typeof cb !== "function")
      cb = nop;
    if (state.ending)
      writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state, chunk, cb)) {
      state.pendingcb++;
      ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
  };
  Writable.prototype.cork = function() {
    this._writableState.corked++;
  };
  Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
      state.corked--;
      if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest)
        clearBuffer(this, state);
    }
  };
  Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    if (typeof encoding === "string")
      encoding = encoding.toLowerCase();
    if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
      throw new ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
  };
  Object.defineProperty(Writable.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
      chunk = Buffer2.from(chunk, encoding);
    }
    return chunk;
  }
  Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._writableState.highWaterMark;
    }
  });
  function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
      var newChunk = decodeChunk(state, chunk, encoding);
      if (chunk !== newChunk) {
        isBuf = true;
        encoding = "buffer";
        chunk = newChunk;
      }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark;
    if (!ret)
      state.needDrain = true;
    if (state.writing || state.corked) {
      var last = state.lastBufferedRequest;
      state.lastBufferedRequest = {
        chunk,
        encoding,
        isBuf,
        callback: cb,
        next: null
      };
      if (last) {
        last.next = state.lastBufferedRequest;
      } else {
        state.bufferedRequest = state.lastBufferedRequest;
      }
      state.bufferedRequestCount += 1;
    } else {
      doWrite(stream, state, false, len, chunk, encoding, cb);
    }
    return ret;
  }
  function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed)
      state.onwrite(new ERR_STREAM_DESTROYED("write"));
    else if (writev)
      stream._writev(chunk, state.onwrite);
    else
      stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
  }
  function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
      process$1.nextTick(cb, er);
      process$1.nextTick(finishMaybe, stream, state);
      stream._writableState.errorEmitted = true;
      errorOrDestroy(stream, er);
    } else {
      cb(er);
      stream._writableState.errorEmitted = true;
      errorOrDestroy(stream, er);
      finishMaybe(stream, state);
    }
  }
  function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
  }
  function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    if (typeof cb !== "function")
      throw new ERR_MULTIPLE_CALLBACK();
    onwriteStateUpdate(state);
    if (er)
      onwriteError(stream, state, sync, er, cb);
    else {
      var finished = needFinish(state) || stream.destroyed;
      if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
        clearBuffer(stream, state);
      }
      if (sync) {
        process$1.nextTick(afterWrite, stream, state, finished, cb);
      } else {
        afterWrite(stream, state, finished, cb);
      }
    }
  }
  function afterWrite(stream, state, finished, cb) {
    if (!finished)
      onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
  }
  function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
      state.needDrain = false;
      stream.emit("drain");
    }
  }
  function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
      var l5 = state.bufferedRequestCount;
      var buffer3 = new Array(l5);
      var holder = state.corkedRequestsFree;
      holder.entry = entry;
      var count = 0;
      var allBuffers = true;
      while (entry) {
        buffer3[count] = entry;
        if (!entry.isBuf)
          allBuffers = false;
        entry = entry.next;
        count += 1;
      }
      buffer3.allBuffers = allBuffers;
      doWrite(stream, state, true, state.length, buffer3, "", holder.finish);
      state.pendingcb++;
      state.lastBufferedRequest = null;
      if (holder.next) {
        state.corkedRequestsFree = holder.next;
        holder.next = null;
      } else {
        state.corkedRequestsFree = new CorkedRequest(state);
      }
      state.bufferedRequestCount = 0;
    } else {
      while (entry) {
        var chunk = entry.chunk;
        var encoding = entry.encoding;
        var cb = entry.callback;
        var len = state.objectMode ? 1 : chunk.length;
        doWrite(stream, state, false, len, chunk, encoding, cb);
        entry = entry.next;
        state.bufferedRequestCount--;
        if (state.writing) {
          break;
        }
      }
      if (entry === null)
        state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
  }
  Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
  };
  Writable.prototype._writev = null;
  Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === "function") {
      cb = chunk;
      chunk = null;
      encoding = null;
    } else if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (chunk !== null && chunk !== void 0)
      this.write(chunk, encoding);
    if (state.corked) {
      state.corked = 1;
      this.uncork();
    }
    if (!state.ending)
      endWritable(this, state, cb);
    return this;
  };
  Object.defineProperty(Writable.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._writableState.length;
    }
  });
  function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
  }
  function callFinal(stream, state) {
    stream._final(function(err) {
      state.pendingcb--;
      if (err) {
        errorOrDestroy(stream, err);
      }
      state.prefinished = true;
      stream.emit("prefinish");
      finishMaybe(stream, state);
    });
  }
  function prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
      if (typeof stream._final === "function" && !state.destroyed) {
        state.pendingcb++;
        state.finalCalled = true;
        process$1.nextTick(callFinal, stream, state);
      } else {
        state.prefinished = true;
        stream.emit("prefinish");
      }
    }
  }
  function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
      prefinish(stream, state);
      if (state.pendingcb === 0) {
        state.finished = true;
        stream.emit("finish");
        if (state.autoDestroy) {
          var rState = stream._readableState;
          if (!rState || rState.autoDestroy && rState.endEmitted) {
            stream.destroy();
          }
        }
      }
    }
    return need;
  }
  function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
      if (state.finished)
        process$1.nextTick(cb);
      else
        stream.once("finish", cb);
    }
    state.ended = true;
    stream.writable = false;
  }
  function onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    state.corkedRequestsFree.next = corkReq;
  }
  Object.defineProperty(Writable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      if (this._writableState === void 0) {
        return false;
      }
      return this._writableState.destroyed;
    },
    set: function set(value) {
      if (!this._writableState) {
        return;
      }
      this._writableState.destroyed = value;
    }
  });
  Writable.prototype.destroy = destroyImpl.destroy;
  Writable.prototype._undestroy = destroyImpl.undestroy;
  Writable.prototype._destroy = function(err, cb) {
    cb(err);
  };
  return exports$f;
}
var exports$e = {};
var _dewExec$d = false;
function dew$d() {
  if (_dewExec$d)
    return exports$e;
  _dewExec$d = true;
  var process$1 = process;
  var objectKeys = Object.keys || function(obj) {
    var keys2 = [];
    for (var key in obj)
      keys2.push(key);
    return keys2;
  };
  exports$e = Duplex;
  var Readable = dew$9();
  var Writable = dew$e();
  dew2()(Duplex, Readable);
  {
    var keys = objectKeys(Writable.prototype);
    for (var v5 = 0; v5 < keys.length; v5++) {
      var method = keys[v5];
      if (!Duplex.prototype[method])
        Duplex.prototype[method] = Writable.prototype[method];
    }
  }
  function Duplex(options) {
    if (!(this instanceof Duplex))
      return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
      if (options.readable === false)
        this.readable = false;
      if (options.writable === false)
        this.writable = false;
      if (options.allowHalfOpen === false) {
        this.allowHalfOpen = false;
        this.once("end", onend);
      }
    }
  }
  Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._writableState.highWaterMark;
    }
  });
  Object.defineProperty(Duplex.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  Object.defineProperty(Duplex.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._writableState.length;
    }
  });
  function onend() {
    if (this._writableState.ended)
      return;
    process$1.nextTick(onEndNT, this);
  }
  function onEndNT(self2) {
    self2.end();
  }
  Object.defineProperty(Duplex.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      if (this._readableState === void 0 || this._writableState === void 0) {
        return false;
      }
      return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
      if (this._readableState === void 0 || this._writableState === void 0) {
        return;
      }
      this._readableState.destroyed = value;
      this._writableState.destroyed = value;
    }
  });
  return exports$e;
}
var exports$d = {};
var _dewExec$c = false;
function dew$c() {
  if (_dewExec$c)
    return exports$d;
  _dewExec$c = true;
  var ERR_STREAM_PREMATURE_CLOSE = dew$g().codes.ERR_STREAM_PREMATURE_CLOSE;
  function once2(callback) {
    var called = false;
    return function() {
      if (called)
        return;
      called = true;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      callback.apply(this, args);
    };
  }
  function noop2() {
  }
  function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
  }
  function eos(stream, opts, callback) {
    if (typeof opts === "function")
      return eos(stream, null, opts);
    if (!opts)
      opts = {};
    callback = once2(callback || noop2);
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;
    var onlegacyfinish = function onlegacyfinish2() {
      if (!stream.writable)
        onfinish();
    };
    var writableEnded = stream._writableState && stream._writableState.finished;
    var onfinish = function onfinish2() {
      writable = false;
      writableEnded = true;
      if (!readable)
        callback.call(stream);
    };
    var readableEnded = stream._readableState && stream._readableState.endEmitted;
    var onend = function onend2() {
      readable = false;
      readableEnded = true;
      if (!writable)
        callback.call(stream);
    };
    var onerror = function onerror2(err) {
      callback.call(stream, err);
    };
    var onclose = function onclose2() {
      var err;
      if (readable && !readableEnded) {
        if (!stream._readableState || !stream._readableState.ended)
          err = new ERR_STREAM_PREMATURE_CLOSE();
        return callback.call(stream, err);
      }
      if (writable && !writableEnded) {
        if (!stream._writableState || !stream._writableState.ended)
          err = new ERR_STREAM_PREMATURE_CLOSE();
        return callback.call(stream, err);
      }
    };
    var onrequest = function onrequest2() {
      stream.req.on("finish", onfinish);
    };
    if (isRequest(stream)) {
      stream.on("complete", onfinish);
      stream.on("abort", onclose);
      if (stream.req)
        onrequest();
      else
        stream.on("request", onrequest);
    } else if (writable && !stream._writableState) {
      stream.on("end", onlegacyfinish);
      stream.on("close", onlegacyfinish);
    }
    stream.on("end", onend);
    stream.on("finish", onfinish);
    if (opts.error !== false)
      stream.on("error", onerror);
    stream.on("close", onclose);
    return function() {
      stream.removeListener("complete", onfinish);
      stream.removeListener("abort", onclose);
      stream.removeListener("request", onrequest);
      if (stream.req)
        stream.req.removeListener("finish", onfinish);
      stream.removeListener("end", onlegacyfinish);
      stream.removeListener("close", onlegacyfinish);
      stream.removeListener("finish", onfinish);
      stream.removeListener("end", onend);
      stream.removeListener("error", onerror);
      stream.removeListener("close", onclose);
    };
  }
  exports$d = eos;
  return exports$d;
}
var exports$c = {};
var _dewExec$b = false;
function dew$b() {
  if (_dewExec$b)
    return exports$c;
  _dewExec$b = true;
  var process$1 = process;
  var _Object$setPrototypeO;
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  var finished = dew$c();
  var kLastResolve = Symbol("lastResolve");
  var kLastReject = Symbol("lastReject");
  var kError = Symbol("error");
  var kEnded = Symbol("ended");
  var kLastPromise = Symbol("lastPromise");
  var kHandlePromise = Symbol("handlePromise");
  var kStream = Symbol("stream");
  function createIterResult2(value, done) {
    return {
      value,
      done
    };
  }
  function readAndResolve(iter) {
    var resolve2 = iter[kLastResolve];
    if (resolve2 !== null) {
      var data = iter[kStream].read();
      if (data !== null) {
        iter[kLastPromise] = null;
        iter[kLastResolve] = null;
        iter[kLastReject] = null;
        resolve2(createIterResult2(data, false));
      }
    }
  }
  function onReadable(iter) {
    process$1.nextTick(readAndResolve, iter);
  }
  function wrapForNext(lastPromise, iter) {
    return function(resolve2, reject) {
      lastPromise.then(function() {
        if (iter[kEnded]) {
          resolve2(createIterResult2(void 0, true));
          return;
        }
        iter[kHandlePromise](resolve2, reject);
      }, reject);
    };
  }
  var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
  });
  var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
    get stream() {
      return this[kStream];
    },
    next: function next3() {
      var _this = this;
      var error2 = this[kError];
      if (error2 !== null) {
        return Promise.reject(error2);
      }
      if (this[kEnded]) {
        return Promise.resolve(createIterResult2(void 0, true));
      }
      if (this[kStream].destroyed) {
        return new Promise(function(resolve2, reject) {
          process$1.nextTick(function() {
            if (_this[kError]) {
              reject(_this[kError]);
            } else {
              resolve2(createIterResult2(void 0, true));
            }
          });
        });
      }
      var lastPromise = this[kLastPromise];
      var promise;
      if (lastPromise) {
        promise = new Promise(wrapForNext(lastPromise, this));
      } else {
        var data = this[kStream].read();
        if (data !== null) {
          return Promise.resolve(createIterResult2(data, false));
        }
        promise = new Promise(this[kHandlePromise]);
      }
      this[kLastPromise] = promise;
      return promise;
    }
  }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
  }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    return new Promise(function(resolve2, reject) {
      _this2[kStream].destroy(null, function(err) {
        if (err) {
          reject(err);
          return;
        }
        resolve2(createIterResult2(void 0, true));
      });
    });
  }), _Object$setPrototypeO), AsyncIteratorPrototype);
  var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream) {
    var _Object$create;
    var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
      value: stream,
      writable: true
    }), _defineProperty(_Object$create, kLastResolve, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kLastReject, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kError, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kEnded, {
      value: stream._readableState.endEmitted,
      writable: true
    }), _defineProperty(_Object$create, kHandlePromise, {
      value: function value(resolve2, reject) {
        var data = iterator[kStream].read();
        if (data) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve2(createIterResult2(data, false));
        } else {
          iterator[kLastResolve] = resolve2;
          iterator[kLastReject] = reject;
        }
      },
      writable: true
    }), _Object$create));
    iterator[kLastPromise] = null;
    finished(stream, function(err) {
      if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var reject = iterator[kLastReject];
        if (reject !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          reject(err);
        }
        iterator[kError] = err;
        return;
      }
      var resolve2 = iterator[kLastResolve];
      if (resolve2 !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve2(createIterResult2(void 0, true));
      }
      iterator[kEnded] = true;
    });
    stream.on("readable", onReadable.bind(null, iterator));
    return iterator;
  };
  exports$c = createReadableStreamAsyncIterator;
  return exports$c;
}
var exports$b = {};
var _dewExec$a = false;
function dew$a() {
  if (_dewExec$a)
    return exports$b;
  _dewExec$a = true;
  exports$b = function() {
    throw new Error("Readable.from is not available in the browser");
  };
  return exports$b;
}
var exports$a = {};
var _dewExec$9 = false;
var _global$3 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$9() {
  if (_dewExec$9)
    return exports$a;
  _dewExec$9 = true;
  var process$1 = process;
  exports$a = Readable;
  var Duplex;
  Readable.ReadableState = ReadableState;
  y.EventEmitter;
  var EElistenerCount = function EElistenerCount2(emitter, type) {
    return emitter.listeners(type).length;
  };
  var Stream = dew$j();
  var Buffer2 = dew().Buffer;
  var OurUint8Array = (typeof _global$3 !== "undefined" ? _global$3 : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
  };
  function _uint8ArrayToBuffer(chunk) {
    return Buffer2.from(chunk);
  }
  function _isUint8Array(obj) {
    return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
  }
  var debugUtil = X;
  var debug;
  if (debugUtil && debugUtil.debuglog) {
    debug = debugUtil.debuglog("stream");
  } else {
    debug = function debug2() {
    };
  }
  var BufferList = dew$i();
  var destroyImpl = dew$h();
  var _require = dew$f(), getHighWaterMark = _require.getHighWaterMark;
  var _require$codes = dew$g().codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
  var StringDecoder2;
  var createReadableStreamAsyncIterator;
  var from;
  dew2()(Readable, Stream);
  var errorOrDestroy = destroyImpl.errorOrDestroy;
  var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
  function prependListener2(emitter, event, fn) {
    if (typeof emitter.prependListener === "function")
      return emitter.prependListener(event, fn);
    if (!emitter._events || !emitter._events[event])
      emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event]))
      emitter._events[event].unshift(fn);
    else
      emitter._events[event] = [fn, emitter._events[event]];
  }
  function ReadableState(options, stream, isDuplex) {
    Duplex = Duplex || dew$d();
    options = options || {};
    if (typeof isDuplex !== "boolean")
      isDuplex = stream instanceof Duplex;
    this.objectMode = !!options.objectMode;
    if (isDuplex)
      this.objectMode = this.objectMode || !!options.readableObjectMode;
    this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    this.sync = true;
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true;
    this.emitClose = options.emitClose !== false;
    this.autoDestroy = !!options.autoDestroy;
    this.destroyed = false;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.awaitDrain = 0;
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
      if (!StringDecoder2)
        StringDecoder2 = exports3.StringDecoder;
      this.decoder = new StringDecoder2(options.encoding);
      this.encoding = options.encoding;
    }
  }
  function Readable(options) {
    Duplex = Duplex || dew$d();
    if (!(this instanceof Readable))
      return new Readable(options);
    var isDuplex = this instanceof Duplex;
    this._readableState = new ReadableState(options, this, isDuplex);
    this.readable = true;
    if (options) {
      if (typeof options.read === "function")
        this._read = options.read;
      if (typeof options.destroy === "function")
        this._destroy = options.destroy;
    }
    Stream.call(this);
  }
  Object.defineProperty(Readable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      if (this._readableState === void 0) {
        return false;
      }
      return this._readableState.destroyed;
    },
    set: function set(value) {
      if (!this._readableState) {
        return;
      }
      this._readableState.destroyed = value;
    }
  });
  Readable.prototype.destroy = destroyImpl.destroy;
  Readable.prototype._undestroy = destroyImpl.undestroy;
  Readable.prototype._destroy = function(err, cb) {
    cb(err);
  };
  Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
      if (typeof chunk === "string") {
        encoding = encoding || state.defaultEncoding;
        if (encoding !== state.encoding) {
          chunk = Buffer2.from(chunk, encoding);
          encoding = "";
        }
        skipChunkCheck = true;
      }
    } else {
      skipChunkCheck = true;
    }
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
  };
  Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
  };
  function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    debug("readableAddChunk", chunk);
    var state = stream._readableState;
    if (chunk === null) {
      state.reading = false;
      onEofChunk(stream, state);
    } else {
      var er;
      if (!skipChunkCheck)
        er = chunkInvalid(state, chunk);
      if (er) {
        errorOrDestroy(stream, er);
      } else if (state.objectMode || chunk && chunk.length > 0) {
        if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
          chunk = _uint8ArrayToBuffer(chunk);
        }
        if (addToFront) {
          if (state.endEmitted)
            errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
          else
            addChunk(stream, state, chunk, true);
        } else if (state.ended) {
          errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
        } else if (state.destroyed) {
          return false;
        } else {
          state.reading = false;
          if (state.decoder && !encoding) {
            chunk = state.decoder.write(chunk);
            if (state.objectMode || chunk.length !== 0)
              addChunk(stream, state, chunk, false);
            else
              maybeReadMore(stream, state);
          } else {
            addChunk(stream, state, chunk, false);
          }
        }
      } else if (!addToFront) {
        state.reading = false;
        maybeReadMore(stream, state);
      }
    }
    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
  }
  function addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
      state.awaitDrain = 0;
      stream.emit("data", chunk);
    } else {
      state.length += state.objectMode ? 1 : chunk.length;
      if (addToFront)
        state.buffer.unshift(chunk);
      else
        state.buffer.push(chunk);
      if (state.needReadable)
        emitReadable(stream);
    }
    maybeReadMore(stream, state);
  }
  function chunkInvalid(state, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
      er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
    }
    return er;
  }
  Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
  };
  Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder2)
      StringDecoder2 = exports3.StringDecoder;
    var decoder = new StringDecoder2(enc);
    this._readableState.decoder = decoder;
    this._readableState.encoding = this._readableState.decoder.encoding;
    var p5 = this._readableState.buffer.head;
    var content = "";
    while (p5 !== null) {
      content += decoder.write(p5.data);
      p5 = p5.next;
    }
    this._readableState.buffer.clear();
    if (content !== "")
      this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
  };
  var MAX_HWM = 1073741824;
  function computeNewHighWaterMark(n5) {
    if (n5 >= MAX_HWM) {
      n5 = MAX_HWM;
    } else {
      n5--;
      n5 |= n5 >>> 1;
      n5 |= n5 >>> 2;
      n5 |= n5 >>> 4;
      n5 |= n5 >>> 8;
      n5 |= n5 >>> 16;
      n5++;
    }
    return n5;
  }
  function howMuchToRead(n5, state) {
    if (n5 <= 0 || state.length === 0 && state.ended)
      return 0;
    if (state.objectMode)
      return 1;
    if (n5 !== n5) {
      if (state.flowing && state.length)
        return state.buffer.head.data.length;
      else
        return state.length;
    }
    if (n5 > state.highWaterMark)
      state.highWaterMark = computeNewHighWaterMark(n5);
    if (n5 <= state.length)
      return n5;
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    }
    return state.length;
  }
  Readable.prototype.read = function(n5) {
    debug("read", n5);
    n5 = parseInt(n5, 10);
    var state = this._readableState;
    var nOrig = n5;
    if (n5 !== 0)
      state.emittedReadable = false;
    if (n5 === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
      debug("read: emitReadable", state.length, state.ended);
      if (state.length === 0 && state.ended)
        endReadable(this);
      else
        emitReadable(this);
      return null;
    }
    n5 = howMuchToRead(n5, state);
    if (n5 === 0 && state.ended) {
      if (state.length === 0)
        endReadable(this);
      return null;
    }
    var doRead = state.needReadable;
    debug("need readable", doRead);
    if (state.length === 0 || state.length - n5 < state.highWaterMark) {
      doRead = true;
      debug("length less than watermark", doRead);
    }
    if (state.ended || state.reading) {
      doRead = false;
      debug("reading or ended", doRead);
    } else if (doRead) {
      debug("do read");
      state.reading = true;
      state.sync = true;
      if (state.length === 0)
        state.needReadable = true;
      this._read(state.highWaterMark);
      state.sync = false;
      if (!state.reading)
        n5 = howMuchToRead(nOrig, state);
    }
    var ret;
    if (n5 > 0)
      ret = fromList(n5, state);
    else
      ret = null;
    if (ret === null) {
      state.needReadable = state.length <= state.highWaterMark;
      n5 = 0;
    } else {
      state.length -= n5;
      state.awaitDrain = 0;
    }
    if (state.length === 0) {
      if (!state.ended)
        state.needReadable = true;
      if (nOrig !== n5 && state.ended)
        endReadable(this);
    }
    if (ret !== null)
      this.emit("data", ret);
    return ret;
  };
  function onEofChunk(stream, state) {
    debug("onEofChunk");
    if (state.ended)
      return;
    if (state.decoder) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) {
        state.buffer.push(chunk);
        state.length += state.objectMode ? 1 : chunk.length;
      }
    }
    state.ended = true;
    if (state.sync) {
      emitReadable(stream);
    } else {
      state.needReadable = false;
      if (!state.emittedReadable) {
        state.emittedReadable = true;
        emitReadable_(stream);
      }
    }
  }
  function emitReadable(stream) {
    var state = stream._readableState;
    debug("emitReadable", state.needReadable, state.emittedReadable);
    state.needReadable = false;
    if (!state.emittedReadable) {
      debug("emitReadable", state.flowing);
      state.emittedReadable = true;
      process$1.nextTick(emitReadable_, stream);
    }
  }
  function emitReadable_(stream) {
    var state = stream._readableState;
    debug("emitReadable_", state.destroyed, state.length, state.ended);
    if (!state.destroyed && (state.length || state.ended)) {
      stream.emit("readable");
      state.emittedReadable = false;
    }
    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    flow(stream);
  }
  function maybeReadMore(stream, state) {
    if (!state.readingMore) {
      state.readingMore = true;
      process$1.nextTick(maybeReadMore_, stream, state);
    }
  }
  function maybeReadMore_(stream, state) {
    while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
      var len = state.length;
      debug("maybeReadMore read 0");
      stream.read(0);
      if (len === state.length)
        break;
    }
    state.readingMore = false;
  }
  Readable.prototype._read = function(n5) {
    errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
  };
  Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch (state.pipesCount) {
      case 0:
        state.pipes = dest;
        break;
      case 1:
        state.pipes = [state.pipes, dest];
        break;
      default:
        state.pipes.push(dest);
        break;
    }
    state.pipesCount += 1;
    debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process$1.stdout && dest !== process$1.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted)
      process$1.nextTick(endFn);
    else
      src.once("end", endFn);
    dest.on("unpipe", onunpipe);
    function onunpipe(readable, unpipeInfo) {
      debug("onunpipe");
      if (readable === src) {
        if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
          unpipeInfo.hasUnpiped = true;
          cleanup();
        }
      }
    }
    function onend() {
      debug("onend");
      dest.end();
    }
    var ondrain = pipeOnDrain(src);
    dest.on("drain", ondrain);
    var cleanedUp = false;
    function cleanup() {
      debug("cleanup");
      dest.removeListener("close", onclose);
      dest.removeListener("finish", onfinish);
      dest.removeListener("drain", ondrain);
      dest.removeListener("error", onerror);
      dest.removeListener("unpipe", onunpipe);
      src.removeListener("end", onend);
      src.removeListener("end", unpipe);
      src.removeListener("data", ondata);
      cleanedUp = true;
      if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
        ondrain();
    }
    src.on("data", ondata);
    function ondata(chunk) {
      debug("ondata");
      var ret = dest.write(chunk);
      debug("dest.write", ret);
      if (ret === false) {
        if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
          debug("false write response, pause", state.awaitDrain);
          state.awaitDrain++;
        }
        src.pause();
      }
    }
    function onerror(er) {
      debug("onerror", er);
      unpipe();
      dest.removeListener("error", onerror);
      if (EElistenerCount(dest, "error") === 0)
        errorOrDestroy(dest, er);
    }
    prependListener2(dest, "error", onerror);
    function onclose() {
      dest.removeListener("finish", onfinish);
      unpipe();
    }
    dest.once("close", onclose);
    function onfinish() {
      debug("onfinish");
      dest.removeListener("close", onclose);
      unpipe();
    }
    dest.once("finish", onfinish);
    function unpipe() {
      debug("unpipe");
      src.unpipe(dest);
    }
    dest.emit("pipe", src);
    if (!state.flowing) {
      debug("pipe resume");
      src.resume();
    }
    return dest;
  };
  function pipeOnDrain(src) {
    return function pipeOnDrainFunctionResult() {
      var state = src._readableState;
      debug("pipeOnDrain", state.awaitDrain);
      if (state.awaitDrain)
        state.awaitDrain--;
      if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
        state.flowing = true;
        flow(src);
      }
    };
  }
  Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
      hasUnpiped: false
    };
    if (state.pipesCount === 0)
      return this;
    if (state.pipesCount === 1) {
      if (dest && dest !== state.pipes)
        return this;
      if (!dest)
        dest = state.pipes;
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;
      if (dest)
        dest.emit("unpipe", this, unpipeInfo);
      return this;
    }
    if (!dest) {
      var dests = state.pipes;
      var len = state.pipesCount;
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;
      for (var i5 = 0; i5 < len; i5++)
        dests[i5].emit("unpipe", this, {
          hasUnpiped: false
        });
      return this;
    }
    var index = indexOf(state.pipes, dest);
    if (index === -1)
      return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1)
      state.pipes = state.pipes[0];
    dest.emit("unpipe", this, unpipeInfo);
    return this;
  };
  Readable.prototype.on = function(ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    var state = this._readableState;
    if (ev === "data") {
      state.readableListening = this.listenerCount("readable") > 0;
      if (state.flowing !== false)
        this.resume();
    } else if (ev === "readable") {
      if (!state.endEmitted && !state.readableListening) {
        state.readableListening = state.needReadable = true;
        state.flowing = false;
        state.emittedReadable = false;
        debug("on readable", state.length, state.reading);
        if (state.length) {
          emitReadable(this);
        } else if (!state.reading) {
          process$1.nextTick(nReadingNextTick, this);
        }
      }
    }
    return res;
  };
  Readable.prototype.addListener = Readable.prototype.on;
  Readable.prototype.removeListener = function(ev, fn) {
    var res = Stream.prototype.removeListener.call(this, ev, fn);
    if (ev === "readable") {
      process$1.nextTick(updateReadableListening, this);
    }
    return res;
  };
  Readable.prototype.removeAllListeners = function(ev) {
    var res = Stream.prototype.removeAllListeners.apply(this, arguments);
    if (ev === "readable" || ev === void 0) {
      process$1.nextTick(updateReadableListening, this);
    }
    return res;
  };
  function updateReadableListening(self2) {
    var state = self2._readableState;
    state.readableListening = self2.listenerCount("readable") > 0;
    if (state.resumeScheduled && !state.paused) {
      state.flowing = true;
    } else if (self2.listenerCount("data") > 0) {
      self2.resume();
    }
  }
  function nReadingNextTick(self2) {
    debug("readable nexttick read 0");
    self2.read(0);
  }
  Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
      debug("resume");
      state.flowing = !state.readableListening;
      resume(this, state);
    }
    state.paused = false;
    return this;
  };
  function resume(stream, state) {
    if (!state.resumeScheduled) {
      state.resumeScheduled = true;
      process$1.nextTick(resume_, stream, state);
    }
  }
  function resume_(stream, state) {
    debug("resume", state.reading);
    if (!state.reading) {
      stream.read(0);
    }
    state.resumeScheduled = false;
    stream.emit("resume");
    flow(stream);
    if (state.flowing && !state.reading)
      stream.read(0);
  }
  Readable.prototype.pause = function() {
    debug("call pause flowing=%j", this._readableState.flowing);
    if (this._readableState.flowing !== false) {
      debug("pause");
      this._readableState.flowing = false;
      this.emit("pause");
    }
    this._readableState.paused = true;
    return this;
  };
  function flow(stream) {
    var state = stream._readableState;
    debug("flow", state.flowing);
    while (state.flowing && stream.read() !== null)
      ;
  }
  Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on("end", function() {
      debug("wrapped end");
      if (state.decoder && !state.ended) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length)
          _this.push(chunk);
      }
      _this.push(null);
    });
    stream.on("data", function(chunk) {
      debug("wrapped data");
      if (state.decoder)
        chunk = state.decoder.write(chunk);
      if (state.objectMode && (chunk === null || chunk === void 0))
        return;
      else if (!state.objectMode && (!chunk || !chunk.length))
        return;
      var ret = _this.push(chunk);
      if (!ret) {
        paused = true;
        stream.pause();
      }
    });
    for (var i5 in stream) {
      if (this[i5] === void 0 && typeof stream[i5] === "function") {
        this[i5] = /* @__PURE__ */ function methodWrap(method) {
          return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
          };
        }(i5);
      }
    }
    for (var n5 = 0; n5 < kProxyEvents.length; n5++) {
      stream.on(kProxyEvents[n5], this.emit.bind(this, kProxyEvents[n5]));
    }
    this._read = function(n6) {
      debug("wrapped _read", n6);
      if (paused) {
        paused = false;
        stream.resume();
      }
    };
    return this;
  };
  if (typeof Symbol === "function") {
    Readable.prototype[Symbol.asyncIterator] = function() {
      if (createReadableStreamAsyncIterator === void 0) {
        createReadableStreamAsyncIterator = dew$b();
      }
      return createReadableStreamAsyncIterator(this);
    };
  }
  Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._readableState.highWaterMark;
    }
  });
  Object.defineProperty(Readable.prototype, "readableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._readableState && this._readableState.buffer;
    }
  });
  Object.defineProperty(Readable.prototype, "readableFlowing", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._readableState.flowing;
    },
    set: function set(state) {
      if (this._readableState) {
        this._readableState.flowing = state;
      }
    }
  });
  Readable._fromList = fromList;
  Object.defineProperty(Readable.prototype, "readableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._readableState.length;
    }
  });
  function fromList(n5, state) {
    if (state.length === 0)
      return null;
    var ret;
    if (state.objectMode)
      ret = state.buffer.shift();
    else if (!n5 || n5 >= state.length) {
      if (state.decoder)
        ret = state.buffer.join("");
      else if (state.buffer.length === 1)
        ret = state.buffer.first();
      else
        ret = state.buffer.concat(state.length);
      state.buffer.clear();
    } else {
      ret = state.buffer.consume(n5, state.decoder);
    }
    return ret;
  }
  function endReadable(stream) {
    var state = stream._readableState;
    debug("endReadable", state.endEmitted);
    if (!state.endEmitted) {
      state.ended = true;
      process$1.nextTick(endReadableNT, state, stream);
    }
  }
  function endReadableNT(state, stream) {
    debug("endReadableNT", state.endEmitted, state.length);
    if (!state.endEmitted && state.length === 0) {
      state.endEmitted = true;
      stream.readable = false;
      stream.emit("end");
      if (state.autoDestroy) {
        var wState = stream._writableState;
        if (!wState || wState.autoDestroy && wState.finished) {
          stream.destroy();
        }
      }
    }
  }
  if (typeof Symbol === "function") {
    Readable.from = function(iterable, opts) {
      if (from === void 0) {
        from = dew$a();
      }
      return from(Readable, iterable, opts);
    };
  }
  function indexOf(xs, x3) {
    for (var i5 = 0, l5 = xs.length; i5 < l5; i5++) {
      if (xs[i5] === x3)
        return i5;
    }
    return -1;
  }
  return exports$a;
}
var exports$9 = {};
var _dewExec$8 = false;
function dew$8() {
  if (_dewExec$8)
    return exports$9;
  _dewExec$8 = true;
  exports$9 = Transform;
  var _require$codes = dew$g().codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
  var Duplex = dew$d();
  dew2()(Transform, Duplex);
  function afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (cb === null) {
      return this.emit("error", new ERR_MULTIPLE_CALLBACK());
    }
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null)
      this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) {
      this._read(rs.highWaterMark);
    }
  }
  function Transform(options) {
    if (!(this instanceof Transform))
      return new Transform(options);
    Duplex.call(this, options);
    this._transformState = {
      afterTransform: afterTransform.bind(this),
      needTransform: false,
      transforming: false,
      writecb: null,
      writechunk: null,
      writeencoding: null
    };
    this._readableState.needReadable = true;
    this._readableState.sync = false;
    if (options) {
      if (typeof options.transform === "function")
        this._transform = options.transform;
      if (typeof options.flush === "function")
        this._flush = options.flush;
    }
    this.on("prefinish", prefinish);
  }
  function prefinish() {
    var _this = this;
    if (typeof this._flush === "function" && !this._readableState.destroyed) {
      this._flush(function(er, data) {
        done(_this, er, data);
      });
    } else {
      done(this, null, null);
    }
  }
  Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
  };
  Transform.prototype._transform = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
  };
  Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
      var rs = this._readableState;
      if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
        this._read(rs.highWaterMark);
    }
  };
  Transform.prototype._read = function(n5) {
    var ts = this._transformState;
    if (ts.writechunk !== null && !ts.transforming) {
      ts.transforming = true;
      this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
      ts.needTransform = true;
    }
  };
  Transform.prototype._destroy = function(err, cb) {
    Duplex.prototype._destroy.call(this, err, function(err2) {
      cb(err2);
    });
  };
  function done(stream, er, data) {
    if (er)
      return stream.emit("error", er);
    if (data != null)
      stream.push(data);
    if (stream._writableState.length)
      throw new ERR_TRANSFORM_WITH_LENGTH_0();
    if (stream._transformState.transforming)
      throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
    return stream.push(null);
  }
  return exports$9;
}
var exports$8 = {};
var _dewExec$7 = false;
function dew$7() {
  if (_dewExec$7)
    return exports$8;
  _dewExec$7 = true;
  exports$8 = PassThrough;
  var Transform = dew$8();
  dew2()(PassThrough, Transform);
  function PassThrough(options) {
    if (!(this instanceof PassThrough))
      return new PassThrough(options);
    Transform.call(this, options);
  }
  PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
  };
  return exports$8;
}
var exports$7 = {};
var _dewExec$6 = false;
function dew$6() {
  if (_dewExec$6)
    return exports$7;
  _dewExec$6 = true;
  var eos;
  function once2(callback) {
    var called = false;
    return function() {
      if (called)
        return;
      called = true;
      callback.apply(void 0, arguments);
    };
  }
  var _require$codes = dew$g().codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
  function noop2(err) {
    if (err)
      throw err;
  }
  function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
  }
  function destroyer(stream, reading, writing, callback) {
    callback = once2(callback);
    var closed = false;
    stream.on("close", function() {
      closed = true;
    });
    if (eos === void 0)
      eos = dew$c();
    eos(stream, {
      readable: reading,
      writable: writing
    }, function(err) {
      if (err)
        return callback(err);
      closed = true;
      callback();
    });
    var destroyed = false;
    return function(err) {
      if (closed)
        return;
      if (destroyed)
        return;
      destroyed = true;
      if (isRequest(stream))
        return stream.abort();
      if (typeof stream.destroy === "function")
        return stream.destroy();
      callback(err || new ERR_STREAM_DESTROYED("pipe"));
    };
  }
  function call(fn) {
    fn();
  }
  function pipe(from, to) {
    return from.pipe(to);
  }
  function popCallback(streams) {
    if (!streams.length)
      return noop2;
    if (typeof streams[streams.length - 1] !== "function")
      return noop2;
    return streams.pop();
  }
  function pipeline() {
    for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
      streams[_key] = arguments[_key];
    }
    var callback = popCallback(streams);
    if (Array.isArray(streams[0]))
      streams = streams[0];
    if (streams.length < 2) {
      throw new ERR_MISSING_ARGS("streams");
    }
    var error2;
    var destroys = streams.map(function(stream, i5) {
      var reading = i5 < streams.length - 1;
      var writing = i5 > 0;
      return destroyer(stream, reading, writing, function(err) {
        if (!error2)
          error2 = err;
        if (err)
          destroys.forEach(call);
        if (reading)
          return;
        destroys.forEach(call);
        callback(error2);
      });
    });
    return streams.reduce(pipe);
  }
  exports$7 = pipeline;
  return exports$7;
}
var exports$6 = {};
var _dewExec$5 = false;
function dew$5() {
  if (_dewExec$5)
    return exports$6;
  _dewExec$5 = true;
  exports$6 = exports$6 = dew$9();
  exports$6.Stream = exports$6;
  exports$6.Readable = exports$6;
  exports$6.Writable = dew$e();
  exports$6.Duplex = dew$d();
  exports$6.Transform = dew$8();
  exports$6.PassThrough = dew$7();
  exports$6.finished = dew$c();
  exports$6.pipeline = dew$6();
  return exports$6;
}
var exports$5 = {};
var _dewExec$4 = false;
var _global$2 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$4() {
  if (_dewExec$4)
    return exports$5;
  _dewExec$4 = true;
  var Buffer2 = dew().Buffer;
  var process$1 = process;
  var capability = dew$k();
  var inherits = dew2();
  var stream = dew$5();
  var rStates = exports$5.readyStates = {
    UNSENT: 0,
    OPENED: 1,
    HEADERS_RECEIVED: 2,
    LOADING: 3,
    DONE: 4
  };
  var IncomingMessage3 = exports$5.IncomingMessage = function(xhr, response, mode, resetTimers) {
    var self2 = this || _global$2;
    stream.Readable.call(self2);
    self2._mode = mode;
    self2.headers = {};
    self2.rawHeaders = [];
    self2.trailers = {};
    self2.rawTrailers = [];
    self2.on("end", function() {
      process$1.nextTick(function() {
        self2.emit("close");
      });
    });
    if (mode === "fetch") {
      let read = function() {
        reader.read().then(function(result) {
          if (self2._destroyed)
            return;
          resetTimers(result.done);
          if (result.done) {
            self2.push(null);
            return;
          }
          self2.push(Buffer2.from(result.value));
          read();
        }).catch(function(err) {
          resetTimers(true);
          if (!self2._destroyed)
            self2.emit("error", err);
        });
      };
      self2._fetchResponse = response;
      self2.url = response.url;
      self2.statusCode = response.status;
      self2.statusMessage = response.statusText;
      response.headers.forEach(function(header, key) {
        self2.headers[key.toLowerCase()] = header;
        self2.rawHeaders.push(key, header);
      });
      if (capability.writableStream) {
        var writable = new WritableStream({
          write: function(chunk) {
            resetTimers(false);
            return new Promise(function(resolve2, reject) {
              if (self2._destroyed) {
                reject();
              } else if (self2.push(Buffer2.from(chunk))) {
                resolve2();
              } else {
                self2._resumeFetch = resolve2;
              }
            });
          },
          close: function() {
            resetTimers(true);
            if (!self2._destroyed)
              self2.push(null);
          },
          abort: function(err) {
            resetTimers(true);
            if (!self2._destroyed)
              self2.emit("error", err);
          }
        });
        try {
          response.body.pipeTo(writable).catch(function(err) {
            resetTimers(true);
            if (!self2._destroyed)
              self2.emit("error", err);
          });
          return;
        } catch (e5) {
        }
      }
      var reader = response.body.getReader();
      read();
    } else {
      self2._xhr = xhr;
      self2._pos = 0;
      self2.url = xhr.responseURL;
      self2.statusCode = xhr.status;
      self2.statusMessage = xhr.statusText;
      var headers = xhr.getAllResponseHeaders().split(/\r?\n/);
      headers.forEach(function(header) {
        var matches = header.match(/^([^:]+):\s*(.*)/);
        if (matches) {
          var key = matches[1].toLowerCase();
          if (key === "set-cookie") {
            if (self2.headers[key] === void 0) {
              self2.headers[key] = [];
            }
            self2.headers[key].push(matches[2]);
          } else if (self2.headers[key] !== void 0) {
            self2.headers[key] += ", " + matches[2];
          } else {
            self2.headers[key] = matches[2];
          }
          self2.rawHeaders.push(matches[1], matches[2]);
        }
      });
      self2._charset = "x-user-defined";
      if (!capability.overrideMimeType) {
        var mimeType = self2.rawHeaders["mime-type"];
        if (mimeType) {
          var charsetMatch = mimeType.match(/;\s*charset=([^;])(;|$)/);
          if (charsetMatch) {
            self2._charset = charsetMatch[1].toLowerCase();
          }
        }
        if (!self2._charset)
          self2._charset = "utf-8";
      }
    }
  };
  inherits(IncomingMessage3, stream.Readable);
  IncomingMessage3.prototype._read = function() {
    var self2 = this || _global$2;
    var resolve2 = self2._resumeFetch;
    if (resolve2) {
      self2._resumeFetch = null;
      resolve2();
    }
  };
  IncomingMessage3.prototype._onXHRProgress = function(resetTimers) {
    var self2 = this || _global$2;
    var xhr = self2._xhr;
    var response = null;
    switch (self2._mode) {
      case "text":
        response = xhr.responseText;
        if (response.length > self2._pos) {
          var newData = response.substr(self2._pos);
          if (self2._charset === "x-user-defined") {
            var buffer3 = Buffer2.alloc(newData.length);
            for (var i5 = 0; i5 < newData.length; i5++)
              buffer3[i5] = newData.charCodeAt(i5) & 255;
            self2.push(buffer3);
          } else {
            self2.push(newData, self2._charset);
          }
          self2._pos = response.length;
        }
        break;
      case "arraybuffer":
        if (xhr.readyState !== rStates.DONE || !xhr.response)
          break;
        response = xhr.response;
        self2.push(Buffer2.from(new Uint8Array(response)));
        break;
      case "moz-chunked-arraybuffer":
        response = xhr.response;
        if (xhr.readyState !== rStates.LOADING || !response)
          break;
        self2.push(Buffer2.from(new Uint8Array(response)));
        break;
      case "ms-stream":
        response = xhr.response;
        if (xhr.readyState !== rStates.LOADING)
          break;
        var reader = new _global$2.MSStreamReader();
        reader.onprogress = function() {
          if (reader.result.byteLength > self2._pos) {
            self2.push(Buffer2.from(new Uint8Array(reader.result.slice(self2._pos))));
            self2._pos = reader.result.byteLength;
          }
        };
        reader.onload = function() {
          resetTimers(true);
          self2.push(null);
        };
        reader.readAsArrayBuffer(response);
        break;
    }
    if (self2._xhr.readyState === rStates.DONE && self2._mode !== "ms-stream") {
      resetTimers(true);
      self2.push(null);
    }
  };
  return exports$5;
}
var exports$4 = {};
var _dewExec$3 = false;
var _global$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$3() {
  if (_dewExec$3)
    return exports$4;
  _dewExec$3 = true;
  var Buffer2 = dew().Buffer;
  var process$1 = process;
  var capability = dew$k();
  var inherits = dew2();
  var response = dew$4();
  var stream = dew$5();
  var IncomingMessage3 = response.IncomingMessage;
  var rStates = response.readyStates;
  function decideMode(preferBinary, useFetch) {
    if (capability.fetch && useFetch) {
      return "fetch";
    } else if (capability.mozchunkedarraybuffer) {
      return "moz-chunked-arraybuffer";
    } else if (capability.msstream) {
      return "ms-stream";
    } else if (capability.arraybuffer && preferBinary) {
      return "arraybuffer";
    } else {
      return "text";
    }
  }
  var ClientRequest3 = exports$4 = function(opts) {
    var self2 = this || _global$1;
    stream.Writable.call(self2);
    self2._opts = opts;
    self2._body = [];
    self2._headers = {};
    if (opts.auth)
      self2.setHeader("Authorization", "Basic " + Buffer2.from(opts.auth).toString("base64"));
    Object.keys(opts.headers).forEach(function(name2) {
      self2.setHeader(name2, opts.headers[name2]);
    });
    var preferBinary;
    var useFetch = true;
    if (opts.mode === "disable-fetch" || "requestTimeout" in opts && !capability.abortController) {
      useFetch = false;
      preferBinary = true;
    } else if (opts.mode === "prefer-streaming") {
      preferBinary = false;
    } else if (opts.mode === "allow-wrong-content-type") {
      preferBinary = !capability.overrideMimeType;
    } else if (!opts.mode || opts.mode === "default" || opts.mode === "prefer-fast") {
      preferBinary = true;
    } else {
      throw new Error("Invalid value for opts.mode");
    }
    self2._mode = decideMode(preferBinary, useFetch);
    self2._fetchTimer = null;
    self2._socketTimeout = null;
    self2._socketTimer = null;
    self2.on("finish", function() {
      self2._onFinish();
    });
  };
  inherits(ClientRequest3, stream.Writable);
  ClientRequest3.prototype.setHeader = function(name2, value) {
    var self2 = this || _global$1;
    var lowerName = name2.toLowerCase();
    if (unsafeHeaders.indexOf(lowerName) !== -1)
      return;
    self2._headers[lowerName] = {
      name: name2,
      value
    };
  };
  ClientRequest3.prototype.getHeader = function(name2) {
    var header = (this || _global$1)._headers[name2.toLowerCase()];
    if (header)
      return header.value;
    return null;
  };
  ClientRequest3.prototype.removeHeader = function(name2) {
    var self2 = this || _global$1;
    delete self2._headers[name2.toLowerCase()];
  };
  ClientRequest3.prototype._onFinish = function() {
    var self2 = this || _global$1;
    if (self2._destroyed)
      return;
    var opts = self2._opts;
    if ("timeout" in opts && opts.timeout !== 0) {
      self2.setTimeout(opts.timeout);
    }
    var headersObj = self2._headers;
    var body = null;
    if (opts.method !== "GET" && opts.method !== "HEAD") {
      body = new Blob(self2._body, {
        type: (headersObj["content-type"] || {}).value || ""
      });
    }
    var headersList = [];
    Object.keys(headersObj).forEach(function(keyName) {
      var name2 = headersObj[keyName].name;
      var value = headersObj[keyName].value;
      if (Array.isArray(value)) {
        value.forEach(function(v5) {
          headersList.push([name2, v5]);
        });
      } else {
        headersList.push([name2, value]);
      }
    });
    if (self2._mode === "fetch") {
      var signal = null;
      if (capability.abortController) {
        var controller = new AbortController();
        signal = controller.signal;
        self2._fetchAbortController = controller;
        if ("requestTimeout" in opts && opts.requestTimeout !== 0) {
          self2._fetchTimer = _global$1.setTimeout(function() {
            self2.emit("requestTimeout");
            if (self2._fetchAbortController)
              self2._fetchAbortController.abort();
          }, opts.requestTimeout);
        }
      }
      _global$1.fetch(self2._opts.url, {
        method: self2._opts.method,
        headers: headersList,
        body: body || void 0,
        mode: "cors",
        credentials: opts.withCredentials ? "include" : "same-origin",
        signal
      }).then(function(response2) {
        self2._fetchResponse = response2;
        self2._resetTimers(false);
        self2._connect();
      }, function(reason) {
        self2._resetTimers(true);
        if (!self2._destroyed)
          self2.emit("error", reason);
      });
    } else {
      var xhr = self2._xhr = new _global$1.XMLHttpRequest();
      try {
        xhr.open(self2._opts.method, self2._opts.url, true);
      } catch (err) {
        process$1.nextTick(function() {
          self2.emit("error", err);
        });
        return;
      }
      if ("responseType" in xhr)
        xhr.responseType = self2._mode;
      if ("withCredentials" in xhr)
        xhr.withCredentials = !!opts.withCredentials;
      if (self2._mode === "text" && "overrideMimeType" in xhr)
        xhr.overrideMimeType("text/plain; charset=x-user-defined");
      if ("requestTimeout" in opts) {
        xhr.timeout = opts.requestTimeout;
        xhr.ontimeout = function() {
          self2.emit("requestTimeout");
        };
      }
      headersList.forEach(function(header) {
        xhr.setRequestHeader(header[0], header[1]);
      });
      self2._response = null;
      xhr.onreadystatechange = function() {
        switch (xhr.readyState) {
          case rStates.LOADING:
          case rStates.DONE:
            self2._onXHRProgress();
            break;
        }
      };
      if (self2._mode === "moz-chunked-arraybuffer") {
        xhr.onprogress = function() {
          self2._onXHRProgress();
        };
      }
      xhr.onerror = function() {
        if (self2._destroyed)
          return;
        self2._resetTimers(true);
        self2.emit("error", new Error("XHR error"));
      };
      try {
        xhr.send(body);
      } catch (err) {
        process$1.nextTick(function() {
          self2.emit("error", err);
        });
        return;
      }
    }
  };
  function statusValid(xhr) {
    try {
      var status = xhr.status;
      return status !== null && status !== 0;
    } catch (e5) {
      return false;
    }
  }
  ClientRequest3.prototype._onXHRProgress = function() {
    var self2 = this || _global$1;
    self2._resetTimers(false);
    if (!statusValid(self2._xhr) || self2._destroyed)
      return;
    if (!self2._response)
      self2._connect();
    self2._response._onXHRProgress(self2._resetTimers.bind(self2));
  };
  ClientRequest3.prototype._connect = function() {
    var self2 = this || _global$1;
    if (self2._destroyed)
      return;
    self2._response = new IncomingMessage3(self2._xhr, self2._fetchResponse, self2._mode, self2._resetTimers.bind(self2));
    self2._response.on("error", function(err) {
      self2.emit("error", err);
    });
    self2.emit("response", self2._response);
  };
  ClientRequest3.prototype._write = function(chunk, encoding, cb) {
    var self2 = this || _global$1;
    self2._body.push(chunk);
    cb();
  };
  ClientRequest3.prototype._resetTimers = function(done) {
    var self2 = this || _global$1;
    _global$1.clearTimeout(self2._socketTimer);
    self2._socketTimer = null;
    if (done) {
      _global$1.clearTimeout(self2._fetchTimer);
      self2._fetchTimer = null;
    } else if (self2._socketTimeout) {
      self2._socketTimer = _global$1.setTimeout(function() {
        self2.emit("timeout");
      }, self2._socketTimeout);
    }
  };
  ClientRequest3.prototype.abort = ClientRequest3.prototype.destroy = function(err) {
    var self2 = this || _global$1;
    self2._destroyed = true;
    self2._resetTimers(true);
    if (self2._response)
      self2._response._destroyed = true;
    if (self2._xhr)
      self2._xhr.abort();
    else if (self2._fetchAbortController)
      self2._fetchAbortController.abort();
    if (err)
      self2.emit("error", err);
  };
  ClientRequest3.prototype.end = function(data, encoding, cb) {
    var self2 = this || _global$1;
    if (typeof data === "function") {
      cb = data;
      data = void 0;
    }
    stream.Writable.prototype.end.call(self2, data, encoding, cb);
  };
  ClientRequest3.prototype.setTimeout = function(timeout, cb) {
    var self2 = this || _global$1;
    if (cb)
      self2.once("timeout", cb);
    self2._socketTimeout = timeout;
    self2._resetTimers(false);
  };
  ClientRequest3.prototype.flushHeaders = function() {
  };
  ClientRequest3.prototype.setNoDelay = function() {
  };
  ClientRequest3.prototype.setSocketKeepAlive = function() {
  };
  var unsafeHeaders = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"];
  return exports$4;
}
var exports$3 = {};
var _dewExec$2 = false;
function dew$2() {
  if (_dewExec$2)
    return exports$3;
  _dewExec$2 = true;
  exports$3 = extend2;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function extend2() {
    var target = {};
    for (var i5 = 0; i5 < arguments.length; i5++) {
      var source = arguments[i5];
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }
  return exports$3;
}
var exports$23 = {};
var _dewExec$13 = false;
function dew$13() {
  if (_dewExec$13)
    return exports$23;
  _dewExec$13 = true;
  exports$23 = {
    "100": "Continue",
    "101": "Switching Protocols",
    "102": "Processing",
    "200": "OK",
    "201": "Created",
    "202": "Accepted",
    "203": "Non-Authoritative Information",
    "204": "No Content",
    "205": "Reset Content",
    "206": "Partial Content",
    "207": "Multi-Status",
    "208": "Already Reported",
    "226": "IM Used",
    "300": "Multiple Choices",
    "301": "Moved Permanently",
    "302": "Found",
    "303": "See Other",
    "304": "Not Modified",
    "305": "Use Proxy",
    "307": "Temporary Redirect",
    "308": "Permanent Redirect",
    "400": "Bad Request",
    "401": "Unauthorized",
    "402": "Payment Required",
    "403": "Forbidden",
    "404": "Not Found",
    "405": "Method Not Allowed",
    "406": "Not Acceptable",
    "407": "Proxy Authentication Required",
    "408": "Request Timeout",
    "409": "Conflict",
    "410": "Gone",
    "411": "Length Required",
    "412": "Precondition Failed",
    "413": "Payload Too Large",
    "414": "URI Too Long",
    "415": "Unsupported Media Type",
    "416": "Range Not Satisfiable",
    "417": "Expectation Failed",
    "418": "I'm a teapot",
    "421": "Misdirected Request",
    "422": "Unprocessable Entity",
    "423": "Locked",
    "424": "Failed Dependency",
    "425": "Unordered Collection",
    "426": "Upgrade Required",
    "428": "Precondition Required",
    "429": "Too Many Requests",
    "431": "Request Header Fields Too Large",
    "451": "Unavailable For Legal Reasons",
    "500": "Internal Server Error",
    "501": "Not Implemented",
    "502": "Bad Gateway",
    "503": "Service Unavailable",
    "504": "Gateway Timeout",
    "505": "HTTP Version Not Supported",
    "506": "Variant Also Negotiates",
    "507": "Insufficient Storage",
    "508": "Loop Detected",
    "509": "Bandwidth Limit Exceeded",
    "510": "Not Extended",
    "511": "Network Authentication Required"
  };
  return exports$23;
}
var exports$13 = {};
var _dewExec6 = false;
var _global3 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew7() {
  if (_dewExec6)
    return exports$13;
  _dewExec6 = true;
  var ClientRequest3 = dew$3();
  var response = dew$4();
  var extend2 = dew$2();
  var statusCodes = dew$13();
  var url = h3;
  var http = exports$13;
  http.request = function(opts, cb) {
    if (typeof opts === "string")
      opts = url.parse(opts);
    else
      opts = extend2(opts);
    var defaultProtocol = _global3.location.protocol.search(/^https?:$/) === -1 ? "http:" : "";
    var protocol = opts.protocol || defaultProtocol;
    var host = opts.hostname || opts.host;
    var port = opts.port;
    var path2 = opts.path || "/";
    if (host && host.indexOf(":") !== -1)
      host = "[" + host + "]";
    opts.url = (host ? protocol + "//" + host : "") + (port ? ":" + port : "") + path2;
    opts.method = (opts.method || "GET").toUpperCase();
    opts.headers = opts.headers || {};
    var req = new ClientRequest3(opts);
    if (cb)
      req.on("response", cb);
    return req;
  };
  http.get = function get4(opts, cb) {
    var req = http.request(opts, cb);
    req.end();
    return req;
  };
  http.ClientRequest = ClientRequest3;
  http.IncomingMessage = response.IncomingMessage;
  http.Agent = function() {
  };
  http.Agent.defaultMaxSockets = 4;
  http.globalAgent = new http.Agent();
  http.STATUS_CODES = statusCodes;
  http.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"];
  return exports$13;
}
var exports6 = dew7();
var Agent = exports6.Agent;
var ClientRequest = exports6.ClientRequest;
var IncomingMessage = exports6.IncomingMessage;
var METHODS = exports6.METHODS;
var STATUS_CODES = exports6.STATUS_CODES;
var get2 = exports6.get;
var globalAgent = exports6.globalAgent;
var request = exports6.request;

// node_modules/@jspm/core/nodelibs/browser/https.js
init_dirname();
init_buffer();
init_process();

// node_modules/@jspm/core/nodelibs/browser/chunk-B738Er4n.js
init_dirname();
init_buffer();
init_process();
for (r$13 = { byteLength: function(r5) {
  var t5 = u$22(r5), e5 = t5[0], n5 = t5[1];
  return 3 * (e5 + n5) / 4 - n5;
}, toByteArray: function(r5) {
  var t5, o5, a5 = u$22(r5), h5 = a5[0], c5 = a5[1], d4 = new n$23(function(r6, t6, e5) {
    return 3 * (t6 + e5) / 4 - e5;
  }(0, h5, c5)), f5 = 0, A3 = c5 > 0 ? h5 - 4 : h5;
  for (o5 = 0; o5 < A3; o5 += 4)
    t5 = e$23[r5.charCodeAt(o5)] << 18 | e$23[r5.charCodeAt(o5 + 1)] << 12 | e$23[r5.charCodeAt(o5 + 2)] << 6 | e$23[r5.charCodeAt(o5 + 3)], d4[f5++] = t5 >> 16 & 255, d4[f5++] = t5 >> 8 & 255, d4[f5++] = 255 & t5;
  2 === c5 && (t5 = e$23[r5.charCodeAt(o5)] << 2 | e$23[r5.charCodeAt(o5 + 1)] >> 4, d4[f5++] = 255 & t5);
  1 === c5 && (t5 = e$23[r5.charCodeAt(o5)] << 10 | e$23[r5.charCodeAt(o5 + 1)] << 4 | e$23[r5.charCodeAt(o5 + 2)] >> 2, d4[f5++] = t5 >> 8 & 255, d4[f5++] = 255 & t5);
  return d4;
}, fromByteArray: function(r5) {
  for (var e5, n5 = r5.length, o5 = n5 % 3, a5 = [], h5 = 0, u5 = n5 - o5; h5 < u5; h5 += 16383)
    a5.push(c$13(r5, h5, h5 + 16383 > u5 ? u5 : h5 + 16383));
  1 === o5 ? (e5 = r5[n5 - 1], a5.push(t$13[e5 >> 2] + t$13[e5 << 4 & 63] + "==")) : 2 === o5 && (e5 = (r5[n5 - 2] << 8) + r5[n5 - 1], a5.push(t$13[e5 >> 10] + t$13[e5 >> 4 & 63] + t$13[e5 << 2 & 63] + "="));
  return a5.join("");
} }, t$13 = [], e$23 = [], n$23 = "undefined" != typeof Uint8Array ? Uint8Array : Array, o$23 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a$13 = 0, h$13 = o$23.length; a$13 < h$13; ++a$13)
  t$13[a$13] = o$23[a$13], e$23[o$23.charCodeAt(a$13)] = a$13;
var r$13;
var t$13;
var e$23;
var n$23;
var o$23;
var a$13;
var h$13;
function u$22(r5) {
  var t5 = r5.length;
  if (t5 % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var e5 = r5.indexOf("=");
  return -1 === e5 && (e5 = t5), [e5, e5 === t5 ? 0 : 4 - e5 % 4];
}
function c$13(r5, e5, n5) {
  for (var o5, a5, h5 = [], u5 = e5; u5 < n5; u5 += 3)
    o5 = (r5[u5] << 16 & 16711680) + (r5[u5 + 1] << 8 & 65280) + (255 & r5[u5 + 2]), h5.push(t$13[(a5 = o5) >> 18 & 63] + t$13[a5 >> 12 & 63] + t$13[a5 >> 6 & 63] + t$13[63 & a5]);
  return h5.join("");
}
e$23["-".charCodeAt(0)] = 62, e$23["_".charCodeAt(0)] = 63;
var a$1$1 = { read: function(a5, t5, o5, r5, h5) {
  var M3, f5, p5 = 8 * h5 - r5 - 1, w3 = (1 << p5) - 1, e5 = w3 >> 1, i5 = -7, N3 = o5 ? h5 - 1 : 0, n5 = o5 ? -1 : 1, u5 = a5[t5 + N3];
  for (N3 += n5, M3 = u5 & (1 << -i5) - 1, u5 >>= -i5, i5 += p5; i5 > 0; M3 = 256 * M3 + a5[t5 + N3], N3 += n5, i5 -= 8)
    ;
  for (f5 = M3 & (1 << -i5) - 1, M3 >>= -i5, i5 += r5; i5 > 0; f5 = 256 * f5 + a5[t5 + N3], N3 += n5, i5 -= 8)
    ;
  if (0 === M3)
    M3 = 1 - e5;
  else {
    if (M3 === w3)
      return f5 ? NaN : 1 / 0 * (u5 ? -1 : 1);
    f5 += Math.pow(2, r5), M3 -= e5;
  }
  return (u5 ? -1 : 1) * f5 * Math.pow(2, M3 - r5);
}, write: function(a5, t5, o5, r5, h5, M3) {
  var f5, p5, w3, e5 = 8 * M3 - h5 - 1, i5 = (1 << e5) - 1, N3 = i5 >> 1, n5 = 23 === h5 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, u5 = r5 ? 0 : M3 - 1, l5 = r5 ? 1 : -1, s5 = t5 < 0 || 0 === t5 && 1 / t5 < 0 ? 1 : 0;
  for (t5 = Math.abs(t5), isNaN(t5) || t5 === 1 / 0 ? (p5 = isNaN(t5) ? 1 : 0, f5 = i5) : (f5 = Math.floor(Math.log(t5) / Math.LN2), t5 * (w3 = Math.pow(2, -f5)) < 1 && (f5--, w3 *= 2), (t5 += f5 + N3 >= 1 ? n5 / w3 : n5 * Math.pow(2, 1 - N3)) * w3 >= 2 && (f5++, w3 /= 2), f5 + N3 >= i5 ? (p5 = 0, f5 = i5) : f5 + N3 >= 1 ? (p5 = (t5 * w3 - 1) * Math.pow(2, h5), f5 += N3) : (p5 = t5 * Math.pow(2, N3 - 1) * Math.pow(2, h5), f5 = 0)); h5 >= 8; a5[o5 + u5] = 255 & p5, u5 += l5, p5 /= 256, h5 -= 8)
    ;
  for (f5 = f5 << h5 | p5, e5 += h5; e5 > 0; a5[o5 + u5] = 255 & f5, u5 += l5, f5 /= 256, e5 -= 8)
    ;
  a5[o5 + u5 - l5] |= 128 * s5;
} };
var e$1$1 = {};
var n$1$1 = r$13;
var i$13 = a$1$1;
var o$1$1 = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
e$1$1.Buffer = u$1$1, e$1$1.SlowBuffer = function(t5) {
  +t5 != t5 && (t5 = 0);
  return u$1$1.alloc(+t5);
}, e$1$1.INSPECT_MAX_BYTES = 50;
function f$2(t5) {
  if (t5 > 2147483647)
    throw new RangeError('The value "' + t5 + '" is invalid for option "size"');
  var r5 = new Uint8Array(t5);
  return Object.setPrototypeOf(r5, u$1$1.prototype), r5;
}
function u$1$1(t5, r5, e5) {
  if ("number" == typeof t5) {
    if ("string" == typeof r5)
      throw new TypeError('The "string" argument must be of type string. Received type number');
    return a$2(t5);
  }
  return s$12(t5, r5, e5);
}
function s$12(t5, r5, e5) {
  if ("string" == typeof t5)
    return function(t6, r6) {
      "string" == typeof r6 && "" !== r6 || (r6 = "utf8");
      if (!u$1$1.isEncoding(r6))
        throw new TypeError("Unknown encoding: " + r6);
      var e6 = 0 | y4(t6, r6), n6 = f$2(e6), i6 = n6.write(t6, r6);
      i6 !== e6 && (n6 = n6.slice(0, i6));
      return n6;
    }(t5, r5);
  if (ArrayBuffer.isView(t5))
    return p4(t5);
  if (null == t5)
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t5);
  if (F2(t5, ArrayBuffer) || t5 && F2(t5.buffer, ArrayBuffer))
    return c$1$1(t5, r5, e5);
  if ("undefined" != typeof SharedArrayBuffer && (F2(t5, SharedArrayBuffer) || t5 && F2(t5.buffer, SharedArrayBuffer)))
    return c$1$1(t5, r5, e5);
  if ("number" == typeof t5)
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  var n5 = t5.valueOf && t5.valueOf();
  if (null != n5 && n5 !== t5)
    return u$1$1.from(n5, r5, e5);
  var i5 = function(t6) {
    if (u$1$1.isBuffer(t6)) {
      var r6 = 0 | l$13(t6.length), e6 = f$2(r6);
      return 0 === e6.length || t6.copy(e6, 0, 0, r6), e6;
    }
    if (void 0 !== t6.length)
      return "number" != typeof t6.length || N2(t6.length) ? f$2(0) : p4(t6);
    if ("Buffer" === t6.type && Array.isArray(t6.data))
      return p4(t6.data);
  }(t5);
  if (i5)
    return i5;
  if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t5[Symbol.toPrimitive])
    return u$1$1.from(t5[Symbol.toPrimitive]("string"), r5, e5);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t5);
}
function h$1$1(t5) {
  if ("number" != typeof t5)
    throw new TypeError('"size" argument must be of type number');
  if (t5 < 0)
    throw new RangeError('The value "' + t5 + '" is invalid for option "size"');
}
function a$2(t5) {
  return h$1$1(t5), f$2(t5 < 0 ? 0 : 0 | l$13(t5));
}
function p4(t5) {
  for (var r5 = t5.length < 0 ? 0 : 0 | l$13(t5.length), e5 = f$2(r5), n5 = 0; n5 < r5; n5 += 1)
    e5[n5] = 255 & t5[n5];
  return e5;
}
function c$1$1(t5, r5, e5) {
  if (r5 < 0 || t5.byteLength < r5)
    throw new RangeError('"offset" is outside of buffer bounds');
  if (t5.byteLength < r5 + (e5 || 0))
    throw new RangeError('"length" is outside of buffer bounds');
  var n5;
  return n5 = void 0 === r5 && void 0 === e5 ? new Uint8Array(t5) : void 0 === e5 ? new Uint8Array(t5, r5) : new Uint8Array(t5, r5, e5), Object.setPrototypeOf(n5, u$1$1.prototype), n5;
}
function l$13(t5) {
  if (t5 >= 2147483647)
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647 .toString(16) + " bytes");
  return 0 | t5;
}
function y4(t5, r5) {
  if (u$1$1.isBuffer(t5))
    return t5.length;
  if (ArrayBuffer.isView(t5) || F2(t5, ArrayBuffer))
    return t5.byteLength;
  if ("string" != typeof t5)
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t5);
  var e5 = t5.length, n5 = arguments.length > 2 && true === arguments[2];
  if (!n5 && 0 === e5)
    return 0;
  for (var i5 = false; ; )
    switch (r5) {
      case "ascii":
      case "latin1":
      case "binary":
        return e5;
      case "utf8":
      case "utf-8":
        return _2(t5).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * e5;
      case "hex":
        return e5 >>> 1;
      case "base64":
        return z2(t5).length;
      default:
        if (i5)
          return n5 ? -1 : _2(t5).length;
        r5 = ("" + r5).toLowerCase(), i5 = true;
    }
}
function g3(t5, r5, e5) {
  var n5 = false;
  if ((void 0 === r5 || r5 < 0) && (r5 = 0), r5 > this.length)
    return "";
  if ((void 0 === e5 || e5 > this.length) && (e5 = this.length), e5 <= 0)
    return "";
  if ((e5 >>>= 0) <= (r5 >>>= 0))
    return "";
  for (t5 || (t5 = "utf8"); ; )
    switch (t5) {
      case "hex":
        return O3(this, r5, e5);
      case "utf8":
      case "utf-8":
        return I2(this, r5, e5);
      case "ascii":
        return S2(this, r5, e5);
      case "latin1":
      case "binary":
        return R2(this, r5, e5);
      case "base64":
        return T2(this, r5, e5);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return L2(this, r5, e5);
      default:
        if (n5)
          throw new TypeError("Unknown encoding: " + t5);
        t5 = (t5 + "").toLowerCase(), n5 = true;
    }
}
function w2(t5, r5, e5) {
  var n5 = t5[r5];
  t5[r5] = t5[e5], t5[e5] = n5;
}
function d3(t5, r5, e5, n5, i5) {
  if (0 === t5.length)
    return -1;
  if ("string" == typeof e5 ? (n5 = e5, e5 = 0) : e5 > 2147483647 ? e5 = 2147483647 : e5 < -2147483648 && (e5 = -2147483648), N2(e5 = +e5) && (e5 = i5 ? 0 : t5.length - 1), e5 < 0 && (e5 = t5.length + e5), e5 >= t5.length) {
    if (i5)
      return -1;
    e5 = t5.length - 1;
  } else if (e5 < 0) {
    if (!i5)
      return -1;
    e5 = 0;
  }
  if ("string" == typeof r5 && (r5 = u$1$1.from(r5, n5)), u$1$1.isBuffer(r5))
    return 0 === r5.length ? -1 : v4(t5, r5, e5, n5, i5);
  if ("number" == typeof r5)
    return r5 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i5 ? Uint8Array.prototype.indexOf.call(t5, r5, e5) : Uint8Array.prototype.lastIndexOf.call(t5, r5, e5) : v4(t5, [r5], e5, n5, i5);
  throw new TypeError("val must be string, number or Buffer");
}
function v4(t5, r5, e5, n5, i5) {
  var o5, f5 = 1, u5 = t5.length, s5 = r5.length;
  if (void 0 !== n5 && ("ucs2" === (n5 = String(n5).toLowerCase()) || "ucs-2" === n5 || "utf16le" === n5 || "utf-16le" === n5)) {
    if (t5.length < 2 || r5.length < 2)
      return -1;
    f5 = 2, u5 /= 2, s5 /= 2, e5 /= 2;
  }
  function h5(t6, r6) {
    return 1 === f5 ? t6[r6] : t6.readUInt16BE(r6 * f5);
  }
  if (i5) {
    var a5 = -1;
    for (o5 = e5; o5 < u5; o5++)
      if (h5(t5, o5) === h5(r5, -1 === a5 ? 0 : o5 - a5)) {
        if (-1 === a5 && (a5 = o5), o5 - a5 + 1 === s5)
          return a5 * f5;
      } else
        -1 !== a5 && (o5 -= o5 - a5), a5 = -1;
  } else
    for (e5 + s5 > u5 && (e5 = u5 - s5), o5 = e5; o5 >= 0; o5--) {
      for (var p5 = true, c5 = 0; c5 < s5; c5++)
        if (h5(t5, o5 + c5) !== h5(r5, c5)) {
          p5 = false;
          break;
        }
      if (p5)
        return o5;
    }
  return -1;
}
function b3(t5, r5, e5, n5) {
  e5 = Number(e5) || 0;
  var i5 = t5.length - e5;
  n5 ? (n5 = Number(n5)) > i5 && (n5 = i5) : n5 = i5;
  var o5 = r5.length;
  n5 > o5 / 2 && (n5 = o5 / 2);
  for (var f5 = 0; f5 < n5; ++f5) {
    var u5 = parseInt(r5.substr(2 * f5, 2), 16);
    if (N2(u5))
      return f5;
    t5[e5 + f5] = u5;
  }
  return f5;
}
function m3(t5, r5, e5, n5) {
  return D2(_2(r5, t5.length - e5), t5, e5, n5);
}
function E2(t5, r5, e5, n5) {
  return D2(function(t6) {
    for (var r6 = [], e6 = 0; e6 < t6.length; ++e6)
      r6.push(255 & t6.charCodeAt(e6));
    return r6;
  }(r5), t5, e5, n5);
}
function B2(t5, r5, e5, n5) {
  return E2(t5, r5, e5, n5);
}
function A2(t5, r5, e5, n5) {
  return D2(z2(r5), t5, e5, n5);
}
function U2(t5, r5, e5, n5) {
  return D2(function(t6, r6) {
    for (var e6, n6, i5, o5 = [], f5 = 0; f5 < t6.length && !((r6 -= 2) < 0); ++f5)
      e6 = t6.charCodeAt(f5), n6 = e6 >> 8, i5 = e6 % 256, o5.push(i5), o5.push(n6);
    return o5;
  }(r5, t5.length - e5), t5, e5, n5);
}
function T2(t5, r5, e5) {
  return 0 === r5 && e5 === t5.length ? n$1$1.fromByteArray(t5) : n$1$1.fromByteArray(t5.slice(r5, e5));
}
function I2(t5, r5, e5) {
  e5 = Math.min(t5.length, e5);
  for (var n5 = [], i5 = r5; i5 < e5; ) {
    var o5, f5, u5, s5, h5 = t5[i5], a5 = null, p5 = h5 > 239 ? 4 : h5 > 223 ? 3 : h5 > 191 ? 2 : 1;
    if (i5 + p5 <= e5)
      switch (p5) {
        case 1:
          h5 < 128 && (a5 = h5);
          break;
        case 2:
          128 == (192 & (o5 = t5[i5 + 1])) && (s5 = (31 & h5) << 6 | 63 & o5) > 127 && (a5 = s5);
          break;
        case 3:
          o5 = t5[i5 + 1], f5 = t5[i5 + 2], 128 == (192 & o5) && 128 == (192 & f5) && (s5 = (15 & h5) << 12 | (63 & o5) << 6 | 63 & f5) > 2047 && (s5 < 55296 || s5 > 57343) && (a5 = s5);
          break;
        case 4:
          o5 = t5[i5 + 1], f5 = t5[i5 + 2], u5 = t5[i5 + 3], 128 == (192 & o5) && 128 == (192 & f5) && 128 == (192 & u5) && (s5 = (15 & h5) << 18 | (63 & o5) << 12 | (63 & f5) << 6 | 63 & u5) > 65535 && s5 < 1114112 && (a5 = s5);
      }
    null === a5 ? (a5 = 65533, p5 = 1) : a5 > 65535 && (a5 -= 65536, n5.push(a5 >>> 10 & 1023 | 55296), a5 = 56320 | 1023 & a5), n5.push(a5), i5 += p5;
  }
  return function(t6) {
    var r6 = t6.length;
    if (r6 <= 4096)
      return String.fromCharCode.apply(String, t6);
    var e6 = "", n6 = 0;
    for (; n6 < r6; )
      e6 += String.fromCharCode.apply(String, t6.slice(n6, n6 += 4096));
    return e6;
  }(n5);
}
e$1$1.kMaxLength = 2147483647, u$1$1.TYPED_ARRAY_SUPPORT = function() {
  try {
    var t5 = new Uint8Array(1), r5 = { foo: function() {
      return 42;
    } };
    return Object.setPrototypeOf(r5, Uint8Array.prototype), Object.setPrototypeOf(t5, r5), 42 === t5.foo();
  } catch (t6) {
    return false;
  }
}(), u$1$1.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(u$1$1.prototype, "parent", { enumerable: true, get: function() {
  if (u$1$1.isBuffer(this))
    return this.buffer;
} }), Object.defineProperty(u$1$1.prototype, "offset", { enumerable: true, get: function() {
  if (u$1$1.isBuffer(this))
    return this.byteOffset;
} }), u$1$1.poolSize = 8192, u$1$1.from = function(t5, r5, e5) {
  return s$12(t5, r5, e5);
}, Object.setPrototypeOf(u$1$1.prototype, Uint8Array.prototype), Object.setPrototypeOf(u$1$1, Uint8Array), u$1$1.alloc = function(t5, r5, e5) {
  return function(t6, r6, e6) {
    return h$1$1(t6), t6 <= 0 ? f$2(t6) : void 0 !== r6 ? "string" == typeof e6 ? f$2(t6).fill(r6, e6) : f$2(t6).fill(r6) : f$2(t6);
  }(t5, r5, e5);
}, u$1$1.allocUnsafe = function(t5) {
  return a$2(t5);
}, u$1$1.allocUnsafeSlow = function(t5) {
  return a$2(t5);
}, u$1$1.isBuffer = function(t5) {
  return null != t5 && true === t5._isBuffer && t5 !== u$1$1.prototype;
}, u$1$1.compare = function(t5, r5) {
  if (F2(t5, Uint8Array) && (t5 = u$1$1.from(t5, t5.offset, t5.byteLength)), F2(r5, Uint8Array) && (r5 = u$1$1.from(r5, r5.offset, r5.byteLength)), !u$1$1.isBuffer(t5) || !u$1$1.isBuffer(r5))
    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  if (t5 === r5)
    return 0;
  for (var e5 = t5.length, n5 = r5.length, i5 = 0, o5 = Math.min(e5, n5); i5 < o5; ++i5)
    if (t5[i5] !== r5[i5]) {
      e5 = t5[i5], n5 = r5[i5];
      break;
    }
  return e5 < n5 ? -1 : n5 < e5 ? 1 : 0;
}, u$1$1.isEncoding = function(t5) {
  switch (String(t5).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return true;
    default:
      return false;
  }
}, u$1$1.concat = function(t5, r5) {
  if (!Array.isArray(t5))
    throw new TypeError('"list" argument must be an Array of Buffers');
  if (0 === t5.length)
    return u$1$1.alloc(0);
  var e5;
  if (void 0 === r5)
    for (r5 = 0, e5 = 0; e5 < t5.length; ++e5)
      r5 += t5[e5].length;
  var n5 = u$1$1.allocUnsafe(r5), i5 = 0;
  for (e5 = 0; e5 < t5.length; ++e5) {
    var o5 = t5[e5];
    if (F2(o5, Uint8Array) && (o5 = u$1$1.from(o5)), !u$1$1.isBuffer(o5))
      throw new TypeError('"list" argument must be an Array of Buffers');
    o5.copy(n5, i5), i5 += o5.length;
  }
  return n5;
}, u$1$1.byteLength = y4, u$1$1.prototype._isBuffer = true, u$1$1.prototype.swap16 = function() {
  var t5 = this.length;
  if (t5 % 2 != 0)
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (var r5 = 0; r5 < t5; r5 += 2)
    w2(this, r5, r5 + 1);
  return this;
}, u$1$1.prototype.swap32 = function() {
  var t5 = this.length;
  if (t5 % 4 != 0)
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (var r5 = 0; r5 < t5; r5 += 4)
    w2(this, r5, r5 + 3), w2(this, r5 + 1, r5 + 2);
  return this;
}, u$1$1.prototype.swap64 = function() {
  var t5 = this.length;
  if (t5 % 8 != 0)
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (var r5 = 0; r5 < t5; r5 += 8)
    w2(this, r5, r5 + 7), w2(this, r5 + 1, r5 + 6), w2(this, r5 + 2, r5 + 5), w2(this, r5 + 3, r5 + 4);
  return this;
}, u$1$1.prototype.toString = function() {
  var t5 = this.length;
  return 0 === t5 ? "" : 0 === arguments.length ? I2(this, 0, t5) : g3.apply(this, arguments);
}, u$1$1.prototype.toLocaleString = u$1$1.prototype.toString, u$1$1.prototype.equals = function(t5) {
  if (!u$1$1.isBuffer(t5))
    throw new TypeError("Argument must be a Buffer");
  return this === t5 || 0 === u$1$1.compare(this, t5);
}, u$1$1.prototype.inspect = function() {
  var t5 = "", r5 = e$1$1.INSPECT_MAX_BYTES;
  return t5 = this.toString("hex", 0, r5).replace(/(.{2})/g, "$1 ").trim(), this.length > r5 && (t5 += " ... "), "<Buffer " + t5 + ">";
}, o$1$1 && (u$1$1.prototype[o$1$1] = u$1$1.prototype.inspect), u$1$1.prototype.compare = function(t5, r5, e5, n5, i5) {
  if (F2(t5, Uint8Array) && (t5 = u$1$1.from(t5, t5.offset, t5.byteLength)), !u$1$1.isBuffer(t5))
    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t5);
  if (void 0 === r5 && (r5 = 0), void 0 === e5 && (e5 = t5 ? t5.length : 0), void 0 === n5 && (n5 = 0), void 0 === i5 && (i5 = this.length), r5 < 0 || e5 > t5.length || n5 < 0 || i5 > this.length)
    throw new RangeError("out of range index");
  if (n5 >= i5 && r5 >= e5)
    return 0;
  if (n5 >= i5)
    return -1;
  if (r5 >= e5)
    return 1;
  if (this === t5)
    return 0;
  for (var o5 = (i5 >>>= 0) - (n5 >>>= 0), f5 = (e5 >>>= 0) - (r5 >>>= 0), s5 = Math.min(o5, f5), h5 = this.slice(n5, i5), a5 = t5.slice(r5, e5), p5 = 0; p5 < s5; ++p5)
    if (h5[p5] !== a5[p5]) {
      o5 = h5[p5], f5 = a5[p5];
      break;
    }
  return o5 < f5 ? -1 : f5 < o5 ? 1 : 0;
}, u$1$1.prototype.includes = function(t5, r5, e5) {
  return -1 !== this.indexOf(t5, r5, e5);
}, u$1$1.prototype.indexOf = function(t5, r5, e5) {
  return d3(this, t5, r5, e5, true);
}, u$1$1.prototype.lastIndexOf = function(t5, r5, e5) {
  return d3(this, t5, r5, e5, false);
}, u$1$1.prototype.write = function(t5, r5, e5, n5) {
  if (void 0 === r5)
    n5 = "utf8", e5 = this.length, r5 = 0;
  else if (void 0 === e5 && "string" == typeof r5)
    n5 = r5, e5 = this.length, r5 = 0;
  else {
    if (!isFinite(r5))
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    r5 >>>= 0, isFinite(e5) ? (e5 >>>= 0, void 0 === n5 && (n5 = "utf8")) : (n5 = e5, e5 = void 0);
  }
  var i5 = this.length - r5;
  if ((void 0 === e5 || e5 > i5) && (e5 = i5), t5.length > 0 && (e5 < 0 || r5 < 0) || r5 > this.length)
    throw new RangeError("Attempt to write outside buffer bounds");
  n5 || (n5 = "utf8");
  for (var o5 = false; ; )
    switch (n5) {
      case "hex":
        return b3(this, t5, r5, e5);
      case "utf8":
      case "utf-8":
        return m3(this, t5, r5, e5);
      case "ascii":
        return E2(this, t5, r5, e5);
      case "latin1":
      case "binary":
        return B2(this, t5, r5, e5);
      case "base64":
        return A2(this, t5, r5, e5);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return U2(this, t5, r5, e5);
      default:
        if (o5)
          throw new TypeError("Unknown encoding: " + n5);
        n5 = ("" + n5).toLowerCase(), o5 = true;
    }
}, u$1$1.prototype.toJSON = function() {
  return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
};
function S2(t5, r5, e5) {
  var n5 = "";
  e5 = Math.min(t5.length, e5);
  for (var i5 = r5; i5 < e5; ++i5)
    n5 += String.fromCharCode(127 & t5[i5]);
  return n5;
}
function R2(t5, r5, e5) {
  var n5 = "";
  e5 = Math.min(t5.length, e5);
  for (var i5 = r5; i5 < e5; ++i5)
    n5 += String.fromCharCode(t5[i5]);
  return n5;
}
function O3(t5, r5, e5) {
  var n5 = t5.length;
  (!r5 || r5 < 0) && (r5 = 0), (!e5 || e5 < 0 || e5 > n5) && (e5 = n5);
  for (var i5 = "", o5 = r5; o5 < e5; ++o5)
    i5 += Y2[t5[o5]];
  return i5;
}
function L2(t5, r5, e5) {
  for (var n5 = t5.slice(r5, e5), i5 = "", o5 = 0; o5 < n5.length; o5 += 2)
    i5 += String.fromCharCode(n5[o5] + 256 * n5[o5 + 1]);
  return i5;
}
function x2(t5, r5, e5) {
  if (t5 % 1 != 0 || t5 < 0)
    throw new RangeError("offset is not uint");
  if (t5 + r5 > e5)
    throw new RangeError("Trying to access beyond buffer length");
}
function C2(t5, r5, e5, n5, i5, o5) {
  if (!u$1$1.isBuffer(t5))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (r5 > i5 || r5 < o5)
    throw new RangeError('"value" argument is out of bounds');
  if (e5 + n5 > t5.length)
    throw new RangeError("Index out of range");
}
function P2(t5, r5, e5, n5, i5, o5) {
  if (e5 + n5 > t5.length)
    throw new RangeError("Index out of range");
  if (e5 < 0)
    throw new RangeError("Index out of range");
}
function k2(t5, r5, e5, n5, o5) {
  return r5 = +r5, e5 >>>= 0, o5 || P2(t5, 0, e5, 4), i$13.write(t5, r5, e5, n5, 23, 4), e5 + 4;
}
function M2(t5, r5, e5, n5, o5) {
  return r5 = +r5, e5 >>>= 0, o5 || P2(t5, 0, e5, 8), i$13.write(t5, r5, e5, n5, 52, 8), e5 + 8;
}
u$1$1.prototype.slice = function(t5, r5) {
  var e5 = this.length;
  (t5 = ~~t5) < 0 ? (t5 += e5) < 0 && (t5 = 0) : t5 > e5 && (t5 = e5), (r5 = void 0 === r5 ? e5 : ~~r5) < 0 ? (r5 += e5) < 0 && (r5 = 0) : r5 > e5 && (r5 = e5), r5 < t5 && (r5 = t5);
  var n5 = this.subarray(t5, r5);
  return Object.setPrototypeOf(n5, u$1$1.prototype), n5;
}, u$1$1.prototype.readUIntLE = function(t5, r5, e5) {
  t5 >>>= 0, r5 >>>= 0, e5 || x2(t5, r5, this.length);
  for (var n5 = this[t5], i5 = 1, o5 = 0; ++o5 < r5 && (i5 *= 256); )
    n5 += this[t5 + o5] * i5;
  return n5;
}, u$1$1.prototype.readUIntBE = function(t5, r5, e5) {
  t5 >>>= 0, r5 >>>= 0, e5 || x2(t5, r5, this.length);
  for (var n5 = this[t5 + --r5], i5 = 1; r5 > 0 && (i5 *= 256); )
    n5 += this[t5 + --r5] * i5;
  return n5;
}, u$1$1.prototype.readUInt8 = function(t5, r5) {
  return t5 >>>= 0, r5 || x2(t5, 1, this.length), this[t5];
}, u$1$1.prototype.readUInt16LE = function(t5, r5) {
  return t5 >>>= 0, r5 || x2(t5, 2, this.length), this[t5] | this[t5 + 1] << 8;
}, u$1$1.prototype.readUInt16BE = function(t5, r5) {
  return t5 >>>= 0, r5 || x2(t5, 2, this.length), this[t5] << 8 | this[t5 + 1];
}, u$1$1.prototype.readUInt32LE = function(t5, r5) {
  return t5 >>>= 0, r5 || x2(t5, 4, this.length), (this[t5] | this[t5 + 1] << 8 | this[t5 + 2] << 16) + 16777216 * this[t5 + 3];
}, u$1$1.prototype.readUInt32BE = function(t5, r5) {
  return t5 >>>= 0, r5 || x2(t5, 4, this.length), 16777216 * this[t5] + (this[t5 + 1] << 16 | this[t5 + 2] << 8 | this[t5 + 3]);
}, u$1$1.prototype.readIntLE = function(t5, r5, e5) {
  t5 >>>= 0, r5 >>>= 0, e5 || x2(t5, r5, this.length);
  for (var n5 = this[t5], i5 = 1, o5 = 0; ++o5 < r5 && (i5 *= 256); )
    n5 += this[t5 + o5] * i5;
  return n5 >= (i5 *= 128) && (n5 -= Math.pow(2, 8 * r5)), n5;
}, u$1$1.prototype.readIntBE = function(t5, r5, e5) {
  t5 >>>= 0, r5 >>>= 0, e5 || x2(t5, r5, this.length);
  for (var n5 = r5, i5 = 1, o5 = this[t5 + --n5]; n5 > 0 && (i5 *= 256); )
    o5 += this[t5 + --n5] * i5;
  return o5 >= (i5 *= 128) && (o5 -= Math.pow(2, 8 * r5)), o5;
}, u$1$1.prototype.readInt8 = function(t5, r5) {
  return t5 >>>= 0, r5 || x2(t5, 1, this.length), 128 & this[t5] ? -1 * (255 - this[t5] + 1) : this[t5];
}, u$1$1.prototype.readInt16LE = function(t5, r5) {
  t5 >>>= 0, r5 || x2(t5, 2, this.length);
  var e5 = this[t5] | this[t5 + 1] << 8;
  return 32768 & e5 ? 4294901760 | e5 : e5;
}, u$1$1.prototype.readInt16BE = function(t5, r5) {
  t5 >>>= 0, r5 || x2(t5, 2, this.length);
  var e5 = this[t5 + 1] | this[t5] << 8;
  return 32768 & e5 ? 4294901760 | e5 : e5;
}, u$1$1.prototype.readInt32LE = function(t5, r5) {
  return t5 >>>= 0, r5 || x2(t5, 4, this.length), this[t5] | this[t5 + 1] << 8 | this[t5 + 2] << 16 | this[t5 + 3] << 24;
}, u$1$1.prototype.readInt32BE = function(t5, r5) {
  return t5 >>>= 0, r5 || x2(t5, 4, this.length), this[t5] << 24 | this[t5 + 1] << 16 | this[t5 + 2] << 8 | this[t5 + 3];
}, u$1$1.prototype.readFloatLE = function(t5, r5) {
  return t5 >>>= 0, r5 || x2(t5, 4, this.length), i$13.read(this, t5, true, 23, 4);
}, u$1$1.prototype.readFloatBE = function(t5, r5) {
  return t5 >>>= 0, r5 || x2(t5, 4, this.length), i$13.read(this, t5, false, 23, 4);
}, u$1$1.prototype.readDoubleLE = function(t5, r5) {
  return t5 >>>= 0, r5 || x2(t5, 8, this.length), i$13.read(this, t5, true, 52, 8);
}, u$1$1.prototype.readDoubleBE = function(t5, r5) {
  return t5 >>>= 0, r5 || x2(t5, 8, this.length), i$13.read(this, t5, false, 52, 8);
}, u$1$1.prototype.writeUIntLE = function(t5, r5, e5, n5) {
  (t5 = +t5, r5 >>>= 0, e5 >>>= 0, n5) || C2(this, t5, r5, e5, Math.pow(2, 8 * e5) - 1, 0);
  var i5 = 1, o5 = 0;
  for (this[r5] = 255 & t5; ++o5 < e5 && (i5 *= 256); )
    this[r5 + o5] = t5 / i5 & 255;
  return r5 + e5;
}, u$1$1.prototype.writeUIntBE = function(t5, r5, e5, n5) {
  (t5 = +t5, r5 >>>= 0, e5 >>>= 0, n5) || C2(this, t5, r5, e5, Math.pow(2, 8 * e5) - 1, 0);
  var i5 = e5 - 1, o5 = 1;
  for (this[r5 + i5] = 255 & t5; --i5 >= 0 && (o5 *= 256); )
    this[r5 + i5] = t5 / o5 & 255;
  return r5 + e5;
}, u$1$1.prototype.writeUInt8 = function(t5, r5, e5) {
  return t5 = +t5, r5 >>>= 0, e5 || C2(this, t5, r5, 1, 255, 0), this[r5] = 255 & t5, r5 + 1;
}, u$1$1.prototype.writeUInt16LE = function(t5, r5, e5) {
  return t5 = +t5, r5 >>>= 0, e5 || C2(this, t5, r5, 2, 65535, 0), this[r5] = 255 & t5, this[r5 + 1] = t5 >>> 8, r5 + 2;
}, u$1$1.prototype.writeUInt16BE = function(t5, r5, e5) {
  return t5 = +t5, r5 >>>= 0, e5 || C2(this, t5, r5, 2, 65535, 0), this[r5] = t5 >>> 8, this[r5 + 1] = 255 & t5, r5 + 2;
}, u$1$1.prototype.writeUInt32LE = function(t5, r5, e5) {
  return t5 = +t5, r5 >>>= 0, e5 || C2(this, t5, r5, 4, 4294967295, 0), this[r5 + 3] = t5 >>> 24, this[r5 + 2] = t5 >>> 16, this[r5 + 1] = t5 >>> 8, this[r5] = 255 & t5, r5 + 4;
}, u$1$1.prototype.writeUInt32BE = function(t5, r5, e5) {
  return t5 = +t5, r5 >>>= 0, e5 || C2(this, t5, r5, 4, 4294967295, 0), this[r5] = t5 >>> 24, this[r5 + 1] = t5 >>> 16, this[r5 + 2] = t5 >>> 8, this[r5 + 3] = 255 & t5, r5 + 4;
}, u$1$1.prototype.writeIntLE = function(t5, r5, e5, n5) {
  if (t5 = +t5, r5 >>>= 0, !n5) {
    var i5 = Math.pow(2, 8 * e5 - 1);
    C2(this, t5, r5, e5, i5 - 1, -i5);
  }
  var o5 = 0, f5 = 1, u5 = 0;
  for (this[r5] = 255 & t5; ++o5 < e5 && (f5 *= 256); )
    t5 < 0 && 0 === u5 && 0 !== this[r5 + o5 - 1] && (u5 = 1), this[r5 + o5] = (t5 / f5 >> 0) - u5 & 255;
  return r5 + e5;
}, u$1$1.prototype.writeIntBE = function(t5, r5, e5, n5) {
  if (t5 = +t5, r5 >>>= 0, !n5) {
    var i5 = Math.pow(2, 8 * e5 - 1);
    C2(this, t5, r5, e5, i5 - 1, -i5);
  }
  var o5 = e5 - 1, f5 = 1, u5 = 0;
  for (this[r5 + o5] = 255 & t5; --o5 >= 0 && (f5 *= 256); )
    t5 < 0 && 0 === u5 && 0 !== this[r5 + o5 + 1] && (u5 = 1), this[r5 + o5] = (t5 / f5 >> 0) - u5 & 255;
  return r5 + e5;
}, u$1$1.prototype.writeInt8 = function(t5, r5, e5) {
  return t5 = +t5, r5 >>>= 0, e5 || C2(this, t5, r5, 1, 127, -128), t5 < 0 && (t5 = 255 + t5 + 1), this[r5] = 255 & t5, r5 + 1;
}, u$1$1.prototype.writeInt16LE = function(t5, r5, e5) {
  return t5 = +t5, r5 >>>= 0, e5 || C2(this, t5, r5, 2, 32767, -32768), this[r5] = 255 & t5, this[r5 + 1] = t5 >>> 8, r5 + 2;
}, u$1$1.prototype.writeInt16BE = function(t5, r5, e5) {
  return t5 = +t5, r5 >>>= 0, e5 || C2(this, t5, r5, 2, 32767, -32768), this[r5] = t5 >>> 8, this[r5 + 1] = 255 & t5, r5 + 2;
}, u$1$1.prototype.writeInt32LE = function(t5, r5, e5) {
  return t5 = +t5, r5 >>>= 0, e5 || C2(this, t5, r5, 4, 2147483647, -2147483648), this[r5] = 255 & t5, this[r5 + 1] = t5 >>> 8, this[r5 + 2] = t5 >>> 16, this[r5 + 3] = t5 >>> 24, r5 + 4;
}, u$1$1.prototype.writeInt32BE = function(t5, r5, e5) {
  return t5 = +t5, r5 >>>= 0, e5 || C2(this, t5, r5, 4, 2147483647, -2147483648), t5 < 0 && (t5 = 4294967295 + t5 + 1), this[r5] = t5 >>> 24, this[r5 + 1] = t5 >>> 16, this[r5 + 2] = t5 >>> 8, this[r5 + 3] = 255 & t5, r5 + 4;
}, u$1$1.prototype.writeFloatLE = function(t5, r5, e5) {
  return k2(this, t5, r5, true, e5);
}, u$1$1.prototype.writeFloatBE = function(t5, r5, e5) {
  return k2(this, t5, r5, false, e5);
}, u$1$1.prototype.writeDoubleLE = function(t5, r5, e5) {
  return M2(this, t5, r5, true, e5);
}, u$1$1.prototype.writeDoubleBE = function(t5, r5, e5) {
  return M2(this, t5, r5, false, e5);
}, u$1$1.prototype.copy = function(t5, r5, e5, n5) {
  if (!u$1$1.isBuffer(t5))
    throw new TypeError("argument should be a Buffer");
  if (e5 || (e5 = 0), n5 || 0 === n5 || (n5 = this.length), r5 >= t5.length && (r5 = t5.length), r5 || (r5 = 0), n5 > 0 && n5 < e5 && (n5 = e5), n5 === e5)
    return 0;
  if (0 === t5.length || 0 === this.length)
    return 0;
  if (r5 < 0)
    throw new RangeError("targetStart out of bounds");
  if (e5 < 0 || e5 >= this.length)
    throw new RangeError("Index out of range");
  if (n5 < 0)
    throw new RangeError("sourceEnd out of bounds");
  n5 > this.length && (n5 = this.length), t5.length - r5 < n5 - e5 && (n5 = t5.length - r5 + e5);
  var i5 = n5 - e5;
  if (this === t5 && "function" == typeof Uint8Array.prototype.copyWithin)
    this.copyWithin(r5, e5, n5);
  else if (this === t5 && e5 < r5 && r5 < n5)
    for (var o5 = i5 - 1; o5 >= 0; --o5)
      t5[o5 + r5] = this[o5 + e5];
  else
    Uint8Array.prototype.set.call(t5, this.subarray(e5, n5), r5);
  return i5;
}, u$1$1.prototype.fill = function(t5, r5, e5, n5) {
  if ("string" == typeof t5) {
    if ("string" == typeof r5 ? (n5 = r5, r5 = 0, e5 = this.length) : "string" == typeof e5 && (n5 = e5, e5 = this.length), void 0 !== n5 && "string" != typeof n5)
      throw new TypeError("encoding must be a string");
    if ("string" == typeof n5 && !u$1$1.isEncoding(n5))
      throw new TypeError("Unknown encoding: " + n5);
    if (1 === t5.length) {
      var i5 = t5.charCodeAt(0);
      ("utf8" === n5 && i5 < 128 || "latin1" === n5) && (t5 = i5);
    }
  } else
    "number" == typeof t5 ? t5 &= 255 : "boolean" == typeof t5 && (t5 = Number(t5));
  if (r5 < 0 || this.length < r5 || this.length < e5)
    throw new RangeError("Out of range index");
  if (e5 <= r5)
    return this;
  var o5;
  if (r5 >>>= 0, e5 = void 0 === e5 ? this.length : e5 >>> 0, t5 || (t5 = 0), "number" == typeof t5)
    for (o5 = r5; o5 < e5; ++o5)
      this[o5] = t5;
  else {
    var f5 = u$1$1.isBuffer(t5) ? t5 : u$1$1.from(t5, n5), s5 = f5.length;
    if (0 === s5)
      throw new TypeError('The value "' + t5 + '" is invalid for argument "value"');
    for (o5 = 0; o5 < e5 - r5; ++o5)
      this[o5 + r5] = f5[o5 % s5];
  }
  return this;
};
var j2 = /[^+/0-9A-Za-z-_]/g;
function _2(t5, r5) {
  var e5;
  r5 = r5 || 1 / 0;
  for (var n5 = t5.length, i5 = null, o5 = [], f5 = 0; f5 < n5; ++f5) {
    if ((e5 = t5.charCodeAt(f5)) > 55295 && e5 < 57344) {
      if (!i5) {
        if (e5 > 56319) {
          (r5 -= 3) > -1 && o5.push(239, 191, 189);
          continue;
        }
        if (f5 + 1 === n5) {
          (r5 -= 3) > -1 && o5.push(239, 191, 189);
          continue;
        }
        i5 = e5;
        continue;
      }
      if (e5 < 56320) {
        (r5 -= 3) > -1 && o5.push(239, 191, 189), i5 = e5;
        continue;
      }
      e5 = 65536 + (i5 - 55296 << 10 | e5 - 56320);
    } else
      i5 && (r5 -= 3) > -1 && o5.push(239, 191, 189);
    if (i5 = null, e5 < 128) {
      if ((r5 -= 1) < 0)
        break;
      o5.push(e5);
    } else if (e5 < 2048) {
      if ((r5 -= 2) < 0)
        break;
      o5.push(e5 >> 6 | 192, 63 & e5 | 128);
    } else if (e5 < 65536) {
      if ((r5 -= 3) < 0)
        break;
      o5.push(e5 >> 12 | 224, e5 >> 6 & 63 | 128, 63 & e5 | 128);
    } else {
      if (!(e5 < 1114112))
        throw new Error("Invalid code point");
      if ((r5 -= 4) < 0)
        break;
      o5.push(e5 >> 18 | 240, e5 >> 12 & 63 | 128, e5 >> 6 & 63 | 128, 63 & e5 | 128);
    }
  }
  return o5;
}
function z2(t5) {
  return n$1$1.toByteArray(function(t6) {
    if ((t6 = (t6 = t6.split("=")[0]).trim().replace(j2, "")).length < 2)
      return "";
    for (; t6.length % 4 != 0; )
      t6 += "=";
    return t6;
  }(t5));
}
function D2(t5, r5, e5, n5) {
  for (var i5 = 0; i5 < n5 && !(i5 + e5 >= r5.length || i5 >= t5.length); ++i5)
    r5[i5 + e5] = t5[i5];
  return i5;
}
function F2(t5, r5) {
  return t5 instanceof r5 || null != t5 && null != t5.constructor && null != t5.constructor.name && t5.constructor.name === r5.name;
}
function N2(t5) {
  return t5 != t5;
}
var Y2 = function() {
  for (var t5 = new Array(256), r5 = 0; r5 < 16; ++r5)
    for (var e5 = 16 * r5, n5 = 0; n5 < 16; ++n5)
      t5[e5 + n5] = "0123456789abcdef"[r5] + "0123456789abcdef"[n5];
  return t5;
}();
e$1$1.Buffer;
e$1$1.INSPECT_MAX_BYTES;
e$1$1.kMaxLength;
var e4 = {};
var n4 = e$1$1;
var o4 = n4.Buffer;
function t4(r5, e5) {
  for (var n5 in r5)
    e5[n5] = r5[n5];
}
function f4(r5, e5, n5) {
  return o4(r5, e5, n5);
}
o4.from && o4.alloc && o4.allocUnsafe && o4.allocUnsafeSlow ? e4 = n4 : (t4(n4, e4), e4.Buffer = f4), f4.prototype = Object.create(o4.prototype), t4(o4, f4), f4.from = function(r5, e5, n5) {
  if ("number" == typeof r5)
    throw new TypeError("Argument must not be a number");
  return o4(r5, e5, n5);
}, f4.alloc = function(r5, e5, n5) {
  if ("number" != typeof r5)
    throw new TypeError("Argument must be a number");
  var t5 = o4(r5);
  return void 0 !== e5 ? "string" == typeof n5 ? t5.fill(e5, n5) : t5.fill(e5) : t5.fill(0), t5;
}, f4.allocUnsafe = function(r5) {
  if ("number" != typeof r5)
    throw new TypeError("Argument must be a number");
  return o4(r5);
}, f4.allocUnsafeSlow = function(r5) {
  if ("number" != typeof r5)
    throw new TypeError("Argument must be a number");
  return n4.SlowBuffer(r5);
};
var u4 = e4;
var e$13 = {};
var s4 = u4.Buffer;
var i4 = s4.isEncoding || function(t5) {
  switch ((t5 = "" + t5) && t5.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
      return true;
    default:
      return false;
  }
};
function a4(t5) {
  var e5;
  switch (this.encoding = function(t6) {
    var e6 = function(t7) {
      if (!t7)
        return "utf8";
      for (var e7; ; )
        switch (t7) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return t7;
          default:
            if (e7)
              return;
            t7 = ("" + t7).toLowerCase(), e7 = true;
        }
    }(t6);
    if ("string" != typeof e6 && (s4.isEncoding === i4 || !i4(t6)))
      throw new Error("Unknown encoding: " + t6);
    return e6 || t6;
  }(t5), this.encoding) {
    case "utf16le":
      this.text = h4, this.end = l4, e5 = 4;
      break;
    case "utf8":
      this.fillLast = n$13, e5 = 4;
      break;
    case "base64":
      this.text = u$13, this.end = o$13, e5 = 3;
      break;
    default:
      return this.write = f$13, this.end = c4, void 0;
  }
  this.lastNeed = 0, this.lastTotal = 0, this.lastChar = s4.allocUnsafe(e5);
}
function r4(t5) {
  return t5 <= 127 ? 0 : t5 >> 5 == 6 ? 2 : t5 >> 4 == 14 ? 3 : t5 >> 3 == 30 ? 4 : t5 >> 6 == 2 ? -1 : -2;
}
function n$13(t5) {
  var e5 = this.lastTotal - this.lastNeed, s5 = function(t6, e6, s6) {
    if (128 != (192 & e6[0]))
      return t6.lastNeed = 0, "\uFFFD";
    if (t6.lastNeed > 1 && e6.length > 1) {
      if (128 != (192 & e6[1]))
        return t6.lastNeed = 1, "\uFFFD";
      if (t6.lastNeed > 2 && e6.length > 2 && 128 != (192 & e6[2]))
        return t6.lastNeed = 2, "\uFFFD";
    }
  }(this, t5);
  return void 0 !== s5 ? s5 : this.lastNeed <= t5.length ? (t5.copy(this.lastChar, e5, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t5.copy(this.lastChar, e5, 0, t5.length), this.lastNeed -= t5.length, void 0);
}
function h4(t5, e5) {
  if ((t5.length - e5) % 2 == 0) {
    var s5 = t5.toString("utf16le", e5);
    if (s5) {
      var i5 = s5.charCodeAt(s5.length - 1);
      if (i5 >= 55296 && i5 <= 56319)
        return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t5[t5.length - 2], this.lastChar[1] = t5[t5.length - 1], s5.slice(0, -1);
    }
    return s5;
  }
  return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t5[t5.length - 1], t5.toString("utf16le", e5, t5.length - 1);
}
function l4(t5) {
  var e5 = t5 && t5.length ? this.write(t5) : "";
  if (this.lastNeed) {
    var s5 = this.lastTotal - this.lastNeed;
    return e5 + this.lastChar.toString("utf16le", 0, s5);
  }
  return e5;
}
function u$13(t5, e5) {
  var s5 = (t5.length - e5) % 3;
  return 0 === s5 ? t5.toString("base64", e5) : (this.lastNeed = 3 - s5, this.lastTotal = 3, 1 === s5 ? this.lastChar[0] = t5[t5.length - 1] : (this.lastChar[0] = t5[t5.length - 2], this.lastChar[1] = t5[t5.length - 1]), t5.toString("base64", e5, t5.length - s5));
}
function o$13(t5) {
  var e5 = t5 && t5.length ? this.write(t5) : "";
  return this.lastNeed ? e5 + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e5;
}
function f$13(t5) {
  return t5.toString(this.encoding);
}
function c4(t5) {
  return t5 && t5.length ? this.write(t5) : "";
}
e$13.StringDecoder = a4, a4.prototype.write = function(t5) {
  if (0 === t5.length)
    return "";
  var e5, s5;
  if (this.lastNeed) {
    if (void 0 === (e5 = this.fillLast(t5)))
      return "";
    s5 = this.lastNeed, this.lastNeed = 0;
  } else
    s5 = 0;
  return s5 < t5.length ? e5 ? e5 + this.text(t5, s5) : this.text(t5, s5) : e5 || "";
}, a4.prototype.end = function(t5) {
  var e5 = t5 && t5.length ? this.write(t5) : "";
  return this.lastNeed ? e5 + "\uFFFD" : e5;
}, a4.prototype.text = function(t5, e5) {
  var s5 = function(t6, e6, s6) {
    var i6 = e6.length - 1;
    if (i6 < s6)
      return 0;
    var a5 = r4(e6[i6]);
    if (a5 >= 0)
      return a5 > 0 && (t6.lastNeed = a5 - 1), a5;
    if (--i6 < s6 || -2 === a5)
      return 0;
    if ((a5 = r4(e6[i6])) >= 0)
      return a5 > 0 && (t6.lastNeed = a5 - 2), a5;
    if (--i6 < s6 || -2 === a5)
      return 0;
    if ((a5 = r4(e6[i6])) >= 0)
      return a5 > 0 && (2 === a5 ? a5 = 0 : t6.lastNeed = a5 - 3), a5;
    return 0;
  }(this, t5, e5);
  if (!this.lastNeed)
    return t5.toString("utf8", e5);
  this.lastTotal = s5;
  var i5 = t5.length - (s5 - this.lastNeed);
  return t5.copy(this.lastChar, 0, i5), t5.toString("utf8", e5, i5);
}, a4.prototype.fillLast = function(t5) {
  if (this.lastNeed <= t5.length)
    return t5.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
  t5.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t5.length), this.lastNeed -= t5.length;
};
var exports$2$1 = {};
var _dewExec$2$1 = false;
function dew$2$1() {
  if (_dewExec$2$1)
    return exports$2$1;
  _dewExec$2$1 = true;
  exports$2$1.byteLength = byteLength;
  exports$2$1.toByteArray = toByteArray;
  exports$2$1.fromByteArray = fromByteArray;
  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var i5 = 0, len = code.length; i5 < len; ++i5) {
    lookup[i5] = code[i5];
    revLookup[code.charCodeAt(i5)] = i5;
  }
  revLookup["-".charCodeAt(0)] = 62;
  revLookup["_".charCodeAt(0)] = 63;
  function getLens(b64) {
    var len2 = b64.length;
    if (len2 % 4 > 0) {
      throw new Error("Invalid string. Length must be a multiple of 4");
    }
    var validLen = b64.indexOf("=");
    if (validLen === -1)
      validLen = len2;
    var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
    return [validLen, placeHoldersLen];
  }
  function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i6;
    for (i6 = 0; i6 < len2; i6 += 4) {
      tmp = revLookup[b64.charCodeAt(i6)] << 18 | revLookup[b64.charCodeAt(i6 + 1)] << 12 | revLookup[b64.charCodeAt(i6 + 2)] << 6 | revLookup[b64.charCodeAt(i6 + 3)];
      arr[curByte++] = tmp >> 16 & 255;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
      tmp = revLookup[b64.charCodeAt(i6)] << 2 | revLookup[b64.charCodeAt(i6 + 1)] >> 4;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
      tmp = revLookup[b64.charCodeAt(i6)] << 10 | revLookup[b64.charCodeAt(i6 + 1)] << 4 | revLookup[b64.charCodeAt(i6 + 2)] >> 2;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    return arr;
  }
  function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
  }
  function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i6 = start; i6 < end; i6 += 3) {
      tmp = (uint8[i6] << 16 & 16711680) + (uint8[i6 + 1] << 8 & 65280) + (uint8[i6 + 2] & 255);
      output.push(tripletToBase64(tmp));
    }
    return output.join("");
  }
  function fromByteArray(uint8) {
    var tmp;
    var len2 = uint8.length;
    var extraBytes = len2 % 3;
    var parts = [];
    var maxChunkLength = 16383;
    for (var i6 = 0, len22 = len2 - extraBytes; i6 < len22; i6 += maxChunkLength) {
      parts.push(encodeChunk(uint8, i6, i6 + maxChunkLength > len22 ? len22 : i6 + maxChunkLength));
    }
    if (extraBytes === 1) {
      tmp = uint8[len2 - 1];
      parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
    } else if (extraBytes === 2) {
      tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
      parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
    }
    return parts.join("");
  }
  return exports$2$1;
}
var exports$1$1 = {};
var _dewExec$1$1 = false;
function dew$1$1() {
  if (_dewExec$1$1)
    return exports$1$1;
  _dewExec$1$1 = true;
  exports$1$1.read = function(buffer3, offset, isLE, mLen, nBytes) {
    var e5, m4;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i5 = isLE ? nBytes - 1 : 0;
    var d4 = isLE ? -1 : 1;
    var s5 = buffer3[offset + i5];
    i5 += d4;
    e5 = s5 & (1 << -nBits) - 1;
    s5 >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e5 = e5 * 256 + buffer3[offset + i5], i5 += d4, nBits -= 8) {
    }
    m4 = e5 & (1 << -nBits) - 1;
    e5 >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m4 = m4 * 256 + buffer3[offset + i5], i5 += d4, nBits -= 8) {
    }
    if (e5 === 0) {
      e5 = 1 - eBias;
    } else if (e5 === eMax) {
      return m4 ? NaN : (s5 ? -1 : 1) * Infinity;
    } else {
      m4 = m4 + Math.pow(2, mLen);
      e5 = e5 - eBias;
    }
    return (s5 ? -1 : 1) * m4 * Math.pow(2, e5 - mLen);
  };
  exports$1$1.write = function(buffer3, value, offset, isLE, mLen, nBytes) {
    var e5, m4, c5;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i5 = isLE ? 0 : nBytes - 1;
    var d4 = isLE ? 1 : -1;
    var s5 = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m4 = isNaN(value) ? 1 : 0;
      e5 = eMax;
    } else {
      e5 = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c5 = Math.pow(2, -e5)) < 1) {
        e5--;
        c5 *= 2;
      }
      if (e5 + eBias >= 1) {
        value += rt / c5;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c5 >= 2) {
        e5++;
        c5 /= 2;
      }
      if (e5 + eBias >= eMax) {
        m4 = 0;
        e5 = eMax;
      } else if (e5 + eBias >= 1) {
        m4 = (value * c5 - 1) * Math.pow(2, mLen);
        e5 = e5 + eBias;
      } else {
        m4 = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e5 = 0;
      }
    }
    for (; mLen >= 8; buffer3[offset + i5] = m4 & 255, i5 += d4, m4 /= 256, mLen -= 8) {
    }
    e5 = e5 << mLen | m4;
    eLen += mLen;
    for (; eLen > 0; buffer3[offset + i5] = e5 & 255, i5 += d4, e5 /= 256, eLen -= 8) {
    }
    buffer3[offset + i5 - d4] |= s5 * 128;
  };
  return exports$1$1;
}
var exports$g2 = {};
var _dewExec$g2 = false;
function dew$g2() {
  if (_dewExec$g2)
    return exports$g2;
  _dewExec$g2 = true;
  const base64 = dew$2$1();
  const ieee754 = dew$1$1();
  const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
  exports$g2.Buffer = Buffer2;
  exports$g2.SlowBuffer = SlowBuffer;
  exports$g2.INSPECT_MAX_BYTES = 50;
  const K_MAX_LENGTH = 2147483647;
  exports$g2.kMaxLength = K_MAX_LENGTH;
  Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
  if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
    console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  }
  function typedArraySupport() {
    try {
      const arr = new Uint8Array(1);
      const proto = {
        foo: function() {
          return 42;
        }
      };
      Object.setPrototypeOf(proto, Uint8Array.prototype);
      Object.setPrototypeOf(arr, proto);
      return arr.foo() === 42;
    } catch (e5) {
      return false;
    }
  }
  Object.defineProperty(Buffer2.prototype, "parent", {
    enumerable: true,
    get: function() {
      if (!Buffer2.isBuffer(this))
        return void 0;
      return this.buffer;
    }
  });
  Object.defineProperty(Buffer2.prototype, "offset", {
    enumerable: true,
    get: function() {
      if (!Buffer2.isBuffer(this))
        return void 0;
      return this.byteOffset;
    }
  });
  function createBuffer(length) {
    if (length > K_MAX_LENGTH) {
      throw new RangeError('The value "' + length + '" is invalid for option "size"');
    }
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer2.prototype);
    return buf;
  }
  function Buffer2(arg, encodingOrOffset, length) {
    if (typeof arg === "number") {
      if (typeof encodingOrOffset === "string") {
        throw new TypeError('The "string" argument must be of type string. Received type number');
      }
      return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
  }
  Buffer2.poolSize = 8192;
  function from(value, encodingOrOffset, length) {
    if (typeof value === "string") {
      return fromString(value, encodingOrOffset);
    }
    if (ArrayBuffer.isView(value)) {
      return fromArrayView(value);
    }
    if (value == null) {
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    }
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
      return fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
      return fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof value === "number") {
      throw new TypeError('The "value" argument must not be of type number. Received type number');
    }
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) {
      return Buffer2.from(valueOf, encodingOrOffset, length);
    }
    const b4 = fromObject(value);
    if (b4)
      return b4;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
      return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    }
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
  }
  Buffer2.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
  };
  Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(Buffer2, Uint8Array);
  function assertSize(size) {
    if (typeof size !== "number") {
      throw new TypeError('"size" argument must be of type number');
    } else if (size < 0) {
      throw new RangeError('The value "' + size + '" is invalid for option "size"');
    }
  }
  function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) {
      return createBuffer(size);
    }
    if (fill !== void 0) {
      return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    }
    return createBuffer(size);
  }
  Buffer2.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
  };
  function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
  }
  Buffer2.allocUnsafe = function(size) {
    return allocUnsafe(size);
  };
  Buffer2.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
  };
  function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") {
      encoding = "utf8";
    }
    if (!Buffer2.isEncoding(encoding)) {
      throw new TypeError("Unknown encoding: " + encoding);
    }
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) {
      buf = buf.slice(0, actual);
    }
    return buf;
  }
  function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for (let i5 = 0; i5 < length; i5 += 1) {
      buf[i5] = array[i5] & 255;
    }
    return buf;
  }
  function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
      const copy = new Uint8Array(arrayView);
      return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
  }
  function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('"offset" is outside of buffer bounds');
    }
    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('"length" is outside of buffer bounds');
    }
    let buf;
    if (byteOffset === void 0 && length === void 0) {
      buf = new Uint8Array(array);
    } else if (length === void 0) {
      buf = new Uint8Array(array, byteOffset);
    } else {
      buf = new Uint8Array(array, byteOffset, length);
    }
    Object.setPrototypeOf(buf, Buffer2.prototype);
    return buf;
  }
  function fromObject(obj) {
    if (Buffer2.isBuffer(obj)) {
      const len = checked(obj.length) | 0;
      const buf = createBuffer(len);
      if (buf.length === 0) {
        return buf;
      }
      obj.copy(buf, 0, 0, len);
      return buf;
    }
    if (obj.length !== void 0) {
      if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
        return createBuffer(0);
      }
      return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) {
      return fromArrayLike(obj.data);
    }
  }
  function checked(length) {
    if (length >= K_MAX_LENGTH) {
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    }
    return length | 0;
  }
  function SlowBuffer(length) {
    if (+length != length) {
      length = 0;
    }
    return Buffer2.alloc(+length);
  }
  Buffer2.isBuffer = function isBuffer(b4) {
    return b4 != null && b4._isBuffer === true && b4 !== Buffer2.prototype;
  };
  Buffer2.compare = function compare(a5, b4) {
    if (isInstance(a5, Uint8Array))
      a5 = Buffer2.from(a5, a5.offset, a5.byteLength);
    if (isInstance(b4, Uint8Array))
      b4 = Buffer2.from(b4, b4.offset, b4.byteLength);
    if (!Buffer2.isBuffer(a5) || !Buffer2.isBuffer(b4)) {
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    }
    if (a5 === b4)
      return 0;
    let x3 = a5.length;
    let y5 = b4.length;
    for (let i5 = 0, len = Math.min(x3, y5); i5 < len; ++i5) {
      if (a5[i5] !== b4[i5]) {
        x3 = a5[i5];
        y5 = b4[i5];
        break;
      }
    }
    if (x3 < y5)
      return -1;
    if (y5 < x3)
      return 1;
    return 0;
  };
  Buffer2.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  };
  Buffer2.concat = function concat(list, length) {
    if (!Array.isArray(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    if (list.length === 0) {
      return Buffer2.alloc(0);
    }
    let i5;
    if (length === void 0) {
      length = 0;
      for (i5 = 0; i5 < list.length; ++i5) {
        length += list[i5].length;
      }
    }
    const buffer3 = Buffer2.allocUnsafe(length);
    let pos = 0;
    for (i5 = 0; i5 < list.length; ++i5) {
      let buf = list[i5];
      if (isInstance(buf, Uint8Array)) {
        if (pos + buf.length > buffer3.length) {
          if (!Buffer2.isBuffer(buf))
            buf = Buffer2.from(buf);
          buf.copy(buffer3, pos);
        } else {
          Uint8Array.prototype.set.call(buffer3, buf, pos);
        }
      } else if (!Buffer2.isBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      } else {
        buf.copy(buffer3, pos);
      }
      pos += buf.length;
    }
    return buffer3;
  };
  function byteLength(string, encoding) {
    if (Buffer2.isBuffer(string)) {
      return string.length;
    }
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
      return string.byteLength;
    }
    if (typeof string !== "string") {
      throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    }
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0)
      return 0;
    let loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case "ascii":
        case "latin1":
        case "binary":
          return len;
        case "utf8":
        case "utf-8":
          return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return len * 2;
        case "hex":
          return len >>> 1;
        case "base64":
          return base64ToBytes(string).length;
        default:
          if (loweredCase) {
            return mustMatch ? -1 : utf8ToBytes(string).length;
          }
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer2.byteLength = byteLength;
  function slowToString(encoding, start, end) {
    let loweredCase = false;
    if (start === void 0 || start < 0) {
      start = 0;
    }
    if (start > this.length) {
      return "";
    }
    if (end === void 0 || end > this.length) {
      end = this.length;
    }
    if (end <= 0) {
      return "";
    }
    end >>>= 0;
    start >>>= 0;
    if (end <= start) {
      return "";
    }
    if (!encoding)
      encoding = "utf8";
    while (true) {
      switch (encoding) {
        case "hex":
          return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
          return utf8Slice(this, start, end);
        case "ascii":
          return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
          return latin1Slice(this, start, end);
        case "base64":
          return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return utf16leSlice(this, start, end);
        default:
          if (loweredCase)
            throw new TypeError("Unknown encoding: " + encoding);
          encoding = (encoding + "").toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer2.prototype._isBuffer = true;
  function swap(b4, n5, m4) {
    const i5 = b4[n5];
    b4[n5] = b4[m4];
    b4[m4] = i5;
  }
  Buffer2.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    }
    for (let i5 = 0; i5 < len; i5 += 2) {
      swap(this, i5, i5 + 1);
    }
    return this;
  };
  Buffer2.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (let i5 = 0; i5 < len; i5 += 4) {
      swap(this, i5, i5 + 3);
      swap(this, i5 + 1, i5 + 2);
    }
    return this;
  };
  Buffer2.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (let i5 = 0; i5 < len; i5 += 8) {
      swap(this, i5, i5 + 7);
      swap(this, i5 + 1, i5 + 6);
      swap(this, i5 + 2, i5 + 5);
      swap(this, i5 + 3, i5 + 4);
    }
    return this;
  };
  Buffer2.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0)
      return "";
    if (arguments.length === 0)
      return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  };
  Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
  Buffer2.prototype.equals = function equals(b4) {
    if (!Buffer2.isBuffer(b4))
      throw new TypeError("Argument must be a Buffer");
    if (this === b4)
      return true;
    return Buffer2.compare(this, b4) === 0;
  };
  Buffer2.prototype.inspect = function inspect() {
    let str = "";
    const max = exports$g2.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max)
      str += " ... ";
    return "<Buffer " + str + ">";
  };
  if (customInspectSymbol) {
    Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
  }
  Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) {
      target = Buffer2.from(target, target.offset, target.byteLength);
    }
    if (!Buffer2.isBuffer(target)) {
      throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    }
    if (start === void 0) {
      start = 0;
    }
    if (end === void 0) {
      end = target ? target.length : 0;
    }
    if (thisStart === void 0) {
      thisStart = 0;
    }
    if (thisEnd === void 0) {
      thisEnd = this.length;
    }
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError("out of range index");
    }
    if (thisStart >= thisEnd && start >= end) {
      return 0;
    }
    if (thisStart >= thisEnd) {
      return -1;
    }
    if (start >= end) {
      return 1;
    }
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target)
      return 0;
    let x3 = thisEnd - thisStart;
    let y5 = end - start;
    const len = Math.min(x3, y5);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for (let i5 = 0; i5 < len; ++i5) {
      if (thisCopy[i5] !== targetCopy[i5]) {
        x3 = thisCopy[i5];
        y5 = targetCopy[i5];
        break;
      }
    }
    if (x3 < y5)
      return -1;
    if (y5 < x3)
      return 1;
    return 0;
  };
  function bidirectionalIndexOf(buffer3, val, byteOffset, encoding, dir) {
    if (buffer3.length === 0)
      return -1;
    if (typeof byteOffset === "string") {
      encoding = byteOffset;
      byteOffset = 0;
    } else if (byteOffset > 2147483647) {
      byteOffset = 2147483647;
    } else if (byteOffset < -2147483648) {
      byteOffset = -2147483648;
    }
    byteOffset = +byteOffset;
    if (numberIsNaN(byteOffset)) {
      byteOffset = dir ? 0 : buffer3.length - 1;
    }
    if (byteOffset < 0)
      byteOffset = buffer3.length + byteOffset;
    if (byteOffset >= buffer3.length) {
      if (dir)
        return -1;
      else
        byteOffset = buffer3.length - 1;
    } else if (byteOffset < 0) {
      if (dir)
        byteOffset = 0;
      else
        return -1;
    }
    if (typeof val === "string") {
      val = Buffer2.from(val, encoding);
    }
    if (Buffer2.isBuffer(val)) {
      if (val.length === 0) {
        return -1;
      }
      return arrayIndexOf(buffer3, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
      val = val & 255;
      if (typeof Uint8Array.prototype.indexOf === "function") {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer3, val, byteOffset);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer3, val, byteOffset);
        }
      }
      return arrayIndexOf(buffer3, [val], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
  }
  function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== void 0) {
      encoding = String(encoding).toLowerCase();
      if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
        if (arr.length < 2 || val.length < 2) {
          return -1;
        }
        indexSize = 2;
        arrLength /= 2;
        valLength /= 2;
        byteOffset /= 2;
      }
    }
    function read(buf, i6) {
      if (indexSize === 1) {
        return buf[i6];
      } else {
        return buf.readUInt16BE(i6 * indexSize);
      }
    }
    let i5;
    if (dir) {
      let foundIndex = -1;
      for (i5 = byteOffset; i5 < arrLength; i5++) {
        if (read(arr, i5) === read(val, foundIndex === -1 ? 0 : i5 - foundIndex)) {
          if (foundIndex === -1)
            foundIndex = i5;
          if (i5 - foundIndex + 1 === valLength)
            return foundIndex * indexSize;
        } else {
          if (foundIndex !== -1)
            i5 -= i5 - foundIndex;
          foundIndex = -1;
        }
      }
    } else {
      if (byteOffset + valLength > arrLength)
        byteOffset = arrLength - valLength;
      for (i5 = byteOffset; i5 >= 0; i5--) {
        let found = true;
        for (let j3 = 0; j3 < valLength; j3++) {
          if (read(arr, i5 + j3) !== read(val, j3)) {
            found = false;
            break;
          }
        }
        if (found)
          return i5;
      }
    }
    return -1;
  }
  Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
  };
  Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
  };
  Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
  };
  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }
    const strLen = string.length;
    if (length > strLen / 2) {
      length = strLen / 2;
    }
    let i5;
    for (i5 = 0; i5 < length; ++i5) {
      const parsed = parseInt(string.substr(i5 * 2, 2), 16);
      if (numberIsNaN(parsed))
        return i5;
      buf[offset + i5] = parsed;
    }
    return i5;
  }
  function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }
  function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
  }
  function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
  }
  function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }
  Buffer2.prototype.write = function write(string, offset, length, encoding) {
    if (offset === void 0) {
      encoding = "utf8";
      length = this.length;
      offset = 0;
    } else if (length === void 0 && typeof offset === "string") {
      encoding = offset;
      length = this.length;
      offset = 0;
    } else if (isFinite(offset)) {
      offset = offset >>> 0;
      if (isFinite(length)) {
        length = length >>> 0;
        if (encoding === void 0)
          encoding = "utf8";
      } else {
        encoding = length;
        length = void 0;
      }
    } else {
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    }
    const remaining = this.length - offset;
    if (length === void 0 || length > remaining)
      length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
      throw new RangeError("Attempt to write outside buffer bounds");
    }
    if (!encoding)
      encoding = "utf8";
    let loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case "hex":
          return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
          return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
          return asciiWrite(this, string, offset, length);
        case "base64":
          return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ucs2Write(this, string, offset, length);
        default:
          if (loweredCase)
            throw new TypeError("Unknown encoding: " + encoding);
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };
  Buffer2.prototype.toJSON = function toJSON() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf);
    } else {
      return base64.fromByteArray(buf.slice(start, end));
    }
  }
  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i5 = start;
    while (i5 < end) {
      const firstByte = buf[i5];
      let codePoint = null;
      let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
      if (i5 + bytesPerSequence <= end) {
        let secondByte, thirdByte, fourthByte, tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 128) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i5 + 1];
            if ((secondByte & 192) === 128) {
              tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
              if (tempCodePoint > 127) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i5 + 1];
            thirdByte = buf[i5 + 2];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
              if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i5 + 1];
            thirdByte = buf[i5 + 2];
            fourthByte = buf[i5 + 3];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
              if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                codePoint = tempCodePoint;
              }
            }
        }
      }
      if (codePoint === null) {
        codePoint = 65533;
        bytesPerSequence = 1;
      } else if (codePoint > 65535) {
        codePoint -= 65536;
        res.push(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      res.push(codePoint);
      i5 += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
  }
  const MAX_ARGUMENTS_LENGTH = 4096;
  function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints);
    }
    let res = "";
    let i5 = 0;
    while (i5 < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i5, i5 += MAX_ARGUMENTS_LENGTH));
    }
    return res;
  }
  function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for (let i5 = start; i5 < end; ++i5) {
      ret += String.fromCharCode(buf[i5] & 127);
    }
    return ret;
  }
  function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for (let i5 = start; i5 < end; ++i5) {
      ret += String.fromCharCode(buf[i5]);
    }
    return ret;
  }
  function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0)
      start = 0;
    if (!end || end < 0 || end > len)
      end = len;
    let out = "";
    for (let i5 = start; i5 < end; ++i5) {
      out += hexSliceLookupTable[buf[i5]];
    }
    return out;
  }
  function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    for (let i5 = 0; i5 < bytes.length - 1; i5 += 2) {
      res += String.fromCharCode(bytes[i5] + bytes[i5 + 1] * 256);
    }
    return res;
  }
  Buffer2.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === void 0 ? len : ~~end;
    if (start < 0) {
      start += len;
      if (start < 0)
        start = 0;
    } else if (start > len) {
      start = len;
    }
    if (end < 0) {
      end += len;
      if (end < 0)
        end = 0;
    } else if (end > len) {
      end = len;
    }
    if (end < start)
      end = start;
    const newBuf = this.subarray(start, end);
    Object.setPrototypeOf(newBuf, Buffer2.prototype);
    return newBuf;
  };
  function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0)
      throw new RangeError("offset is not uint");
    if (offset + ext > length)
      throw new RangeError("Trying to access beyond buffer length");
  }
  Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert)
      checkOffset(offset, byteLength2, this.length);
    let val = this[offset];
    let mul = 1;
    let i5 = 0;
    while (++i5 < byteLength2 && (mul *= 256)) {
      val += this[offset + i5] * mul;
    }
    return val;
  };
  Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) {
      checkOffset(offset, byteLength2, this.length);
    }
    let val = this[offset + --byteLength2];
    let mul = 1;
    while (byteLength2 > 0 && (mul *= 256)) {
      val += this[offset + --byteLength2] * mul;
    }
    return val;
  };
  Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 1, this.length);
    return this[offset];
  };
  Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
  };
  Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
  };
  Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
  };
  Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
  };
  Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
  });
  Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
  });
  Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert)
      checkOffset(offset, byteLength2, this.length);
    let val = this[offset];
    let mul = 1;
    let i5 = 0;
    while (++i5 < byteLength2 && (mul *= 256)) {
      val += this[offset + i5] * mul;
    }
    mul *= 128;
    if (val >= mul)
      val -= Math.pow(2, 8 * byteLength2);
    return val;
  };
  Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert)
      checkOffset(offset, byteLength2, this.length);
    let i5 = byteLength2;
    let mul = 1;
    let val = this[offset + --i5];
    while (i5 > 0 && (mul *= 256)) {
      val += this[offset + --i5] * mul;
    }
    mul *= 128;
    if (val >= mul)
      val -= Math.pow(2, 8 * byteLength2);
    return val;
  };
  Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128))
      return this[offset];
    return (255 - this[offset] + 1) * -1;
  };
  Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
  };
  Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
  };
  Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
  };
  Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
  };
  Buffer2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
  });
  Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
  });
  Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
  };
  Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
  };
  Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
  };
  Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert)
      checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
  };
  function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer2.isBuffer(buf))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min)
      throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length)
      throw new RangeError("Index out of range");
  }
  Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) {
      const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
      checkInt(this, value, offset, byteLength2, maxBytes, 0);
    }
    let mul = 1;
    let i5 = 0;
    this[offset] = value & 255;
    while (++i5 < byteLength2 && (mul *= 256)) {
      this[offset + i5] = value / mul & 255;
    }
    return offset + byteLength2;
  };
  Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength2 = byteLength2 >>> 0;
    if (!noAssert) {
      const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
      checkInt(this, value, offset, byteLength2, maxBytes, 0);
    }
    let i5 = byteLength2 - 1;
    let mul = 1;
    this[offset + i5] = value & 255;
    while (--i5 >= 0 && (mul *= 256)) {
      this[offset + i5] = value / mul & 255;
    }
    return offset + byteLength2;
  };
  Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
  };
  Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
  };
  Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
  };
  Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
  };
  Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
  };
  function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
  }
  function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
  }
  Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      const limit = Math.pow(2, 8 * byteLength2 - 1);
      checkInt(this, value, offset, byteLength2, limit - 1, -limit);
    }
    let i5 = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 255;
    while (++i5 < byteLength2 && (mul *= 256)) {
      if (value < 0 && sub === 0 && this[offset + i5 - 1] !== 0) {
        sub = 1;
      }
      this[offset + i5] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength2;
  };
  Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      const limit = Math.pow(2, 8 * byteLength2 - 1);
      checkInt(this, value, offset, byteLength2, limit - 1, -limit);
    }
    let i5 = byteLength2 - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i5] = value & 255;
    while (--i5 >= 0 && (mul *= 256)) {
      if (value < 0 && sub === 0 && this[offset + i5 + 1] !== 0) {
        sub = 1;
      }
      this[offset + i5] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength2;
  };
  Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 1, 127, -128);
    if (value < 0)
      value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
  };
  Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
  };
  Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
  };
  Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
  };
  Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0)
      value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
  };
  Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length)
      throw new RangeError("Index out of range");
    if (offset < 0)
      throw new RangeError("Index out of range");
  }
  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4);
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }
  Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
  };
  Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
  };
  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8);
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }
  Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
  };
  Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
  };
  Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer2.isBuffer(target))
      throw new TypeError("argument should be a Buffer");
    if (!start)
      start = 0;
    if (!end && end !== 0)
      end = this.length;
    if (targetStart >= target.length)
      targetStart = target.length;
    if (!targetStart)
      targetStart = 0;
    if (end > 0 && end < start)
      end = start;
    if (end === start)
      return 0;
    if (target.length === 0 || this.length === 0)
      return 0;
    if (targetStart < 0) {
      throw new RangeError("targetStart out of bounds");
    }
    if (start < 0 || start >= this.length)
      throw new RangeError("Index out of range");
    if (end < 0)
      throw new RangeError("sourceEnd out of bounds");
    if (end > this.length)
      end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
      this.copyWithin(targetStart, start, end);
    } else {
      Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    }
    return len;
  };
  Buffer2.prototype.fill = function fill(val, start, end, encoding) {
    if (typeof val === "string") {
      if (typeof start === "string") {
        encoding = start;
        start = 0;
        end = this.length;
      } else if (typeof end === "string") {
        encoding = end;
        end = this.length;
      }
      if (encoding !== void 0 && typeof encoding !== "string") {
        throw new TypeError("encoding must be a string");
      }
      if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      if (val.length === 1) {
        const code = val.charCodeAt(0);
        if (encoding === "utf8" && code < 128 || encoding === "latin1") {
          val = code;
        }
      }
    } else if (typeof val === "number") {
      val = val & 255;
    } else if (typeof val === "boolean") {
      val = Number(val);
    }
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError("Out of range index");
    }
    if (end <= start) {
      return this;
    }
    start = start >>> 0;
    end = end === void 0 ? this.length : end >>> 0;
    if (!val)
      val = 0;
    let i5;
    if (typeof val === "number") {
      for (i5 = start; i5 < end; ++i5) {
        this[i5] = val;
      }
    } else {
      const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
      const len = bytes.length;
      if (len === 0) {
        throw new TypeError('The value "' + val + '" is invalid for argument "value"');
      }
      for (i5 = 0; i5 < end - start; ++i5) {
        this[i5 + start] = bytes[i5 % len];
      }
    }
    return this;
  };
  const errors = {};
  function E3(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
      constructor() {
        super();
        Object.defineProperty(this, "message", {
          value: getMessage.apply(this, arguments),
          writable: true,
          configurable: true
        });
        this.name = `${this.name} [${sym}]`;
        this.stack;
        delete this.name;
      }
      get code() {
        return sym;
      }
      set code(value) {
        Object.defineProperty(this, "code", {
          configurable: true,
          enumerable: true,
          value,
          writable: true
        });
      }
      toString() {
        return `${this.name} [${sym}]: ${this.message}`;
      }
    };
  }
  E3("ERR_BUFFER_OUT_OF_BOUNDS", function(name2) {
    if (name2) {
      return `${name2} is outside of buffer bounds`;
    }
    return "Attempt to access memory outside buffer bounds";
  }, RangeError);
  E3("ERR_INVALID_ARG_TYPE", function(name2, actual) {
    return `The "${name2}" argument must be of type number. Received type ${typeof actual}`;
  }, TypeError);
  E3("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input));
    } else if (typeof input === "bigint") {
      received = String(input);
      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
        received = addNumericalSeparator(received);
      }
      received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
  }, RangeError);
  function addNumericalSeparator(val) {
    let res = "";
    let i5 = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for (; i5 >= start + 4; i5 -= 3) {
      res = `_${val.slice(i5 - 3, i5)}${res}`;
    }
    return `${val.slice(0, i5)}${res}`;
  }
  function checkBounds(buf, offset, byteLength2) {
    validateNumber(offset, "offset");
    if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
      boundsError(offset, buf.length - (byteLength2 + 1));
    }
  }
  function checkIntBI(value, min, max, buf, offset, byteLength2) {
    if (value > max || value < min) {
      const n5 = typeof min === "bigint" ? "n" : "";
      let range;
      {
        if (min === 0 || min === BigInt(0)) {
          range = `>= 0${n5} and < 2${n5} ** ${(byteLength2 + 1) * 8}${n5}`;
        } else {
          range = `>= -(2${n5} ** ${(byteLength2 + 1) * 8 - 1}${n5}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n5}`;
        }
      }
      throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength2);
  }
  function validateNumber(value, name2) {
    if (typeof value !== "number") {
      throw new errors.ERR_INVALID_ARG_TYPE(name2, "number", value);
    }
  }
  function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
      validateNumber(value, type);
      throw new errors.ERR_OUT_OF_RANGE("offset", "an integer", value);
    }
    if (length < 0) {
      throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    }
    throw new errors.ERR_OUT_OF_RANGE("offset", `>= ${0} and <= ${length}`, value);
  }
  const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
  function base64clean(str) {
    str = str.split("=")[0];
    str = str.trim().replace(INVALID_BASE64_RE, "");
    if (str.length < 2)
      return "";
    while (str.length % 4 !== 0) {
      str = str + "=";
    }
    return str;
  }
  function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for (let i5 = 0; i5 < length; ++i5) {
      codePoint = string.charCodeAt(i5);
      if (codePoint > 55295 && codePoint < 57344) {
        if (!leadSurrogate) {
          if (codePoint > 56319) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            continue;
          } else if (i5 + 1 === length) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            continue;
          }
          leadSurrogate = codePoint;
          continue;
        }
        if (codePoint < 56320) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          leadSurrogate = codePoint;
          continue;
        }
        codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
      } else if (leadSurrogate) {
        if ((units -= 3) > -1)
          bytes.push(239, 191, 189);
      }
      leadSurrogate = null;
      if (codePoint < 128) {
        if ((units -= 1) < 0)
          break;
        bytes.push(codePoint);
      } else if (codePoint < 2048) {
        if ((units -= 2) < 0)
          break;
        bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
      } else if (codePoint < 65536) {
        if ((units -= 3) < 0)
          break;
        bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
      } else if (codePoint < 1114112) {
        if ((units -= 4) < 0)
          break;
        bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
      } else {
        throw new Error("Invalid code point");
      }
    }
    return bytes;
  }
  function asciiToBytes(str) {
    const byteArray = [];
    for (let i5 = 0; i5 < str.length; ++i5) {
      byteArray.push(str.charCodeAt(i5) & 255);
    }
    return byteArray;
  }
  function utf16leToBytes(str, units) {
    let c5, hi, lo;
    const byteArray = [];
    for (let i5 = 0; i5 < str.length; ++i5) {
      if ((units -= 2) < 0)
        break;
      c5 = str.charCodeAt(i5);
      hi = c5 >> 8;
      lo = c5 % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }
    return byteArray;
  }
  function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
  }
  function blitBuffer(src, dst, offset, length) {
    let i5;
    for (i5 = 0; i5 < length; ++i5) {
      if (i5 + offset >= dst.length || i5 >= src.length)
        break;
      dst[i5 + offset] = src[i5];
    }
    return i5;
  }
  function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
  }
  function numberIsNaN(obj) {
    return obj !== obj;
  }
  const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for (let i5 = 0; i5 < 16; ++i5) {
      const i16 = i5 * 16;
      for (let j3 = 0; j3 < 16; ++j3) {
        table[i16 + j3] = alphabet[i5] + alphabet[j3];
      }
    }
    return table;
  }();
  function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
  }
  function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
  }
  return exports$g2;
}
var buffer2 = dew$g2();
buffer2.Buffer;
buffer2.INSPECT_MAX_BYTES;
buffer2.kMaxLength;
var exports$f2 = {};
var _dewExec$f2 = false;
function dew$f2() {
  if (_dewExec$f2)
    return exports$f2;
  _dewExec$f2 = true;
  if (typeof Object.create === "function") {
    exports$f2 = function inherits(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
    };
  } else {
    exports$f2 = function inherits(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
    };
  }
  return exports$f2;
}
var exports$e2 = {};
var _dewExec$e2 = false;
function dew$e2() {
  if (_dewExec$e2)
    return exports$e2;
  _dewExec$e2 = true;
  exports$e2 = y.EventEmitter;
  return exports$e2;
}
var exports$d2 = {};
var _dewExec$d2 = false;
function dew$d2() {
  if (_dewExec$d2)
    return exports$d2;
  _dewExec$d2 = true;
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i5 = 1; i5 < arguments.length; i5++) {
      var source = arguments[i5] != null ? arguments[i5] : {};
      if (i5 % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i5 = 0; i5 < props.length; i5++) {
      var descriptor = props[i5];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    return Constructor;
  }
  var _require = buffer2, Buffer2 = _require.Buffer;
  var _require2 = X, inspect = _require2.inspect;
  var custom = inspect && inspect.custom || "inspect";
  function copyBuffer(src, target, offset) {
    Buffer2.prototype.copy.call(src, target, offset);
  }
  exports$d2 = /* @__PURE__ */ function() {
    function BufferList() {
      _classCallCheck(this, BufferList);
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    _createClass(BufferList, [{
      key: "push",
      value: function push(v5) {
        var entry = {
          data: v5,
          next: null
        };
        if (this.length > 0)
          this.tail.next = entry;
        else
          this.head = entry;
        this.tail = entry;
        ++this.length;
      }
    }, {
      key: "unshift",
      value: function unshift(v5) {
        var entry = {
          data: v5,
          next: this.head
        };
        if (this.length === 0)
          this.tail = entry;
        this.head = entry;
        ++this.length;
      }
    }, {
      key: "shift",
      value: function shift() {
        if (this.length === 0)
          return;
        var ret = this.head.data;
        if (this.length === 1)
          this.head = this.tail = null;
        else
          this.head = this.head.next;
        --this.length;
        return ret;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.head = this.tail = null;
        this.length = 0;
      }
    }, {
      key: "join",
      value: function join(s5) {
        if (this.length === 0)
          return "";
        var p5 = this.head;
        var ret = "" + p5.data;
        while (p5 = p5.next) {
          ret += s5 + p5.data;
        }
        return ret;
      }
    }, {
      key: "concat",
      value: function concat(n5) {
        if (this.length === 0)
          return Buffer2.alloc(0);
        var ret = Buffer2.allocUnsafe(n5 >>> 0);
        var p5 = this.head;
        var i5 = 0;
        while (p5) {
          copyBuffer(p5.data, ret, i5);
          i5 += p5.data.length;
          p5 = p5.next;
        }
        return ret;
      }
      // Consumes a specified amount of bytes or characters from the buffered data.
    }, {
      key: "consume",
      value: function consume(n5, hasStrings) {
        var ret;
        if (n5 < this.head.data.length) {
          ret = this.head.data.slice(0, n5);
          this.head.data = this.head.data.slice(n5);
        } else if (n5 === this.head.data.length) {
          ret = this.shift();
        } else {
          ret = hasStrings ? this._getString(n5) : this._getBuffer(n5);
        }
        return ret;
      }
    }, {
      key: "first",
      value: function first() {
        return this.head.data;
      }
      // Consumes a specified amount of characters from the buffered data.
    }, {
      key: "_getString",
      value: function _getString(n5) {
        var p5 = this.head;
        var c5 = 1;
        var ret = p5.data;
        n5 -= ret.length;
        while (p5 = p5.next) {
          var str = p5.data;
          var nb = n5 > str.length ? str.length : n5;
          if (nb === str.length)
            ret += str;
          else
            ret += str.slice(0, n5);
          n5 -= nb;
          if (n5 === 0) {
            if (nb === str.length) {
              ++c5;
              if (p5.next)
                this.head = p5.next;
              else
                this.head = this.tail = null;
            } else {
              this.head = p5;
              p5.data = str.slice(nb);
            }
            break;
          }
          ++c5;
        }
        this.length -= c5;
        return ret;
      }
      // Consumes a specified amount of bytes from the buffered data.
    }, {
      key: "_getBuffer",
      value: function _getBuffer(n5) {
        var ret = Buffer2.allocUnsafe(n5);
        var p5 = this.head;
        var c5 = 1;
        p5.data.copy(ret);
        n5 -= p5.data.length;
        while (p5 = p5.next) {
          var buf = p5.data;
          var nb = n5 > buf.length ? buf.length : n5;
          buf.copy(ret, ret.length - n5, 0, nb);
          n5 -= nb;
          if (n5 === 0) {
            if (nb === buf.length) {
              ++c5;
              if (p5.next)
                this.head = p5.next;
              else
                this.head = this.tail = null;
            } else {
              this.head = p5;
              p5.data = buf.slice(nb);
            }
            break;
          }
          ++c5;
        }
        this.length -= c5;
        return ret;
      }
      // Make sure the linked list only shows the minimal necessary information.
    }, {
      key: custom,
      value: function value(_3, options) {
        return inspect(this, _objectSpread({}, options, {
          // Only inspect one level.
          depth: 0,
          // It should not recurse.
          customInspect: false
        }));
      }
    }]);
    return BufferList;
  }();
  return exports$d2;
}
var exports$c2 = {};
var _dewExec$c2 = false;
function dew$c2() {
  if (_dewExec$c2)
    return exports$c2;
  _dewExec$c2 = true;
  var process$1 = process2;
  function destroy(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
      if (cb) {
        cb(err);
      } else if (err) {
        if (!this._writableState) {
          process$1.nextTick(emitErrorNT, this, err);
        } else if (!this._writableState.errorEmitted) {
          this._writableState.errorEmitted = true;
          process$1.nextTick(emitErrorNT, this, err);
        }
      }
      return this;
    }
    if (this._readableState) {
      this._readableState.destroyed = true;
    }
    if (this._writableState) {
      this._writableState.destroyed = true;
    }
    this._destroy(err || null, function(err2) {
      if (!cb && err2) {
        if (!_this._writableState) {
          process$1.nextTick(emitErrorAndCloseNT, _this, err2);
        } else if (!_this._writableState.errorEmitted) {
          _this._writableState.errorEmitted = true;
          process$1.nextTick(emitErrorAndCloseNT, _this, err2);
        } else {
          process$1.nextTick(emitCloseNT, _this);
        }
      } else if (cb) {
        process$1.nextTick(emitCloseNT, _this);
        cb(err2);
      } else {
        process$1.nextTick(emitCloseNT, _this);
      }
    });
    return this;
  }
  function emitErrorAndCloseNT(self2, err) {
    emitErrorNT(self2, err);
    emitCloseNT(self2);
  }
  function emitCloseNT(self2) {
    if (self2._writableState && !self2._writableState.emitClose)
      return;
    if (self2._readableState && !self2._readableState.emitClose)
      return;
    self2.emit("close");
  }
  function undestroy() {
    if (this._readableState) {
      this._readableState.destroyed = false;
      this._readableState.reading = false;
      this._readableState.ended = false;
      this._readableState.endEmitted = false;
    }
    if (this._writableState) {
      this._writableState.destroyed = false;
      this._writableState.ended = false;
      this._writableState.ending = false;
      this._writableState.finalCalled = false;
      this._writableState.prefinished = false;
      this._writableState.finished = false;
      this._writableState.errorEmitted = false;
    }
  }
  function emitErrorNT(self2, err) {
    self2.emit("error", err);
  }
  function errorOrDestroy(stream, err) {
    var rState = stream._readableState;
    var wState = stream._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy)
      stream.destroy(err);
    else
      stream.emit("error", err);
  }
  exports$c2 = {
    destroy,
    undestroy,
    errorOrDestroy
  };
  return exports$c2;
}
var exports$b2 = {};
var _dewExec$b2 = false;
function dew$b2() {
  if (_dewExec$b2)
    return exports$b2;
  _dewExec$b2 = true;
  const codes = {};
  function createErrorType(code, message, Base) {
    if (!Base) {
      Base = Error;
    }
    function getMessage(arg1, arg2, arg3) {
      if (typeof message === "string") {
        return message;
      } else {
        return message(arg1, arg2, arg3);
      }
    }
    class NodeError extends Base {
      constructor(arg1, arg2, arg3) {
        super(getMessage(arg1, arg2, arg3));
      }
    }
    NodeError.prototype.name = Base.name;
    NodeError.prototype.code = code;
    codes[code] = NodeError;
  }
  function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
      const len = expected.length;
      expected = expected.map((i5) => String(i5));
      if (len > 2) {
        return `one of ${thing} ${expected.slice(0, len - 1).join(", ")}, or ` + expected[len - 1];
      } else if (len === 2) {
        return `one of ${thing} ${expected[0]} or ${expected[1]}`;
      } else {
        return `of ${thing} ${expected[0]}`;
      }
    } else {
      return `of ${thing} ${String(expected)}`;
    }
  }
  function startsWith(str, search, pos) {
    return str.substr(0, search.length) === search;
  }
  function endsWith(str, search, this_len) {
    if (this_len === void 0 || this_len > str.length) {
      this_len = str.length;
    }
    return str.substring(this_len - search.length, this_len) === search;
  }
  function includes(str, search, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + search.length > str.length) {
      return false;
    } else {
      return str.indexOf(search, start) !== -1;
    }
  }
  createErrorType("ERR_INVALID_OPT_VALUE", function(name2, value) {
    return 'The value "' + value + '" is invalid for option "' + name2 + '"';
  }, TypeError);
  createErrorType("ERR_INVALID_ARG_TYPE", function(name2, expected, actual) {
    let determiner;
    if (typeof expected === "string" && startsWith(expected, "not ")) {
      determiner = "must not be";
      expected = expected.replace(/^not /, "");
    } else {
      determiner = "must be";
    }
    let msg;
    if (endsWith(name2, " argument")) {
      msg = `The ${name2} ${determiner} ${oneOf(expected, "type")}`;
    } else {
      const type = includes(name2, ".") ? "property" : "argument";
      msg = `The "${name2}" ${type} ${determiner} ${oneOf(expected, "type")}`;
    }
    msg += `. Received type ${typeof actual}`;
    return msg;
  }, TypeError);
  createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
  createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name2) {
    return "The " + name2 + " method is not implemented";
  });
  createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
  createErrorType("ERR_STREAM_DESTROYED", function(name2) {
    return "Cannot call " + name2 + " after a stream was destroyed";
  });
  createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
  createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
  createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
  createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
  createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
    return "Unknown encoding: " + arg;
  }, TypeError);
  createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
  exports$b2.codes = codes;
  return exports$b2;
}
var exports$a2 = {};
var _dewExec$a2 = false;
function dew$a2() {
  if (_dewExec$a2)
    return exports$a2;
  _dewExec$a2 = true;
  var ERR_INVALID_OPT_VALUE = dew$b2().codes.ERR_INVALID_OPT_VALUE;
  function highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
  }
  function getHighWaterMark(state, options, duplexKey, isDuplex) {
    var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
    if (hwm != null) {
      if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
        var name2 = isDuplex ? duplexKey : "highWaterMark";
        throw new ERR_INVALID_OPT_VALUE(name2, hwm);
      }
      return Math.floor(hwm);
    }
    return state.objectMode ? 16 : 16 * 1024;
  }
  exports$a2 = {
    getHighWaterMark
  };
  return exports$a2;
}
var exports$92 = {};
var _dewExec$92 = false;
var _global$22 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$92() {
  if (_dewExec$92)
    return exports$92;
  _dewExec$92 = true;
  exports$92 = deprecate;
  function deprecate(fn, msg) {
    if (config2("noDeprecation")) {
      return fn;
    }
    var warned = false;
    function deprecated() {
      if (!warned) {
        if (config2("throwDeprecation")) {
          throw new Error(msg);
        } else if (config2("traceDeprecation")) {
          console.trace(msg);
        } else {
          console.warn(msg);
        }
        warned = true;
      }
      return fn.apply(this || _global$22, arguments);
    }
    return deprecated;
  }
  function config2(name2) {
    try {
      if (!_global$22.localStorage)
        return false;
    } catch (_3) {
      return false;
    }
    var val = _global$22.localStorage[name2];
    if (null == val)
      return false;
    return String(val).toLowerCase() === "true";
  }
  return exports$92;
}
var exports$82 = {};
var _dewExec$82 = false;
var _global$12 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$82() {
  if (_dewExec$82)
    return exports$82;
  _dewExec$82 = true;
  var process$1 = process2;
  exports$82 = Writable;
  function CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
      onCorkedFinish(_this, state);
    };
  }
  var Duplex;
  Writable.WritableState = WritableState;
  var internalUtil = {
    deprecate: dew$92()
  };
  var Stream = dew$e2();
  var Buffer2 = buffer2.Buffer;
  var OurUint8Array = _global$12.Uint8Array || function() {
  };
  function _uint8ArrayToBuffer(chunk) {
    return Buffer2.from(chunk);
  }
  function _isUint8Array(obj) {
    return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
  }
  var destroyImpl = dew$c2();
  var _require = dew$a2(), getHighWaterMark = _require.getHighWaterMark;
  var _require$codes = dew$b2().codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
  var errorOrDestroy = destroyImpl.errorOrDestroy;
  dew$f2()(Writable, Stream);
  function nop() {
  }
  function WritableState(options, stream, isDuplex) {
    Duplex = Duplex || dew$72();
    options = options || {};
    if (typeof isDuplex !== "boolean")
      isDuplex = stream instanceof Duplex;
    this.objectMode = !!options.objectMode;
    if (isDuplex)
      this.objectMode = this.objectMode || !!options.writableObjectMode;
    this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
    this.finalCalled = false;
    this.needDrain = false;
    this.ending = false;
    this.ended = false;
    this.finished = false;
    this.destroyed = false;
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.length = 0;
    this.writing = false;
    this.corked = 0;
    this.sync = true;
    this.bufferProcessing = false;
    this.onwrite = function(er) {
      onwrite(stream, er);
    };
    this.writecb = null;
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    this.pendingcb = 0;
    this.prefinished = false;
    this.errorEmitted = false;
    this.emitClose = options.emitClose !== false;
    this.autoDestroy = !!options.autoDestroy;
    this.bufferedRequestCount = 0;
    this.corkedRequestsFree = new CorkedRequest(this);
  }
  WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while (current) {
      out.push(current);
      current = current.next;
    }
    return out;
  };
  (function() {
    try {
      Object.defineProperty(WritableState.prototype, "buffer", {
        get: internalUtil.deprecate(function writableStateBufferGetter() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch (_3) {
    }
  })();
  var realHasInstance;
  if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable, Symbol.hasInstance, {
      value: function value(object) {
        if (realHasInstance.call(this, object))
          return true;
        if (this !== Writable)
          return false;
        return object && object._writableState instanceof WritableState;
      }
    });
  } else {
    realHasInstance = function realHasInstance2(object) {
      return object instanceof this;
    };
  }
  function Writable(options) {
    Duplex = Duplex || dew$72();
    var isDuplex = this instanceof Duplex;
    if (!isDuplex && !realHasInstance.call(Writable, this))
      return new Writable(options);
    this._writableState = new WritableState(options, this, isDuplex);
    this.writable = true;
    if (options) {
      if (typeof options.write === "function")
        this._write = options.write;
      if (typeof options.writev === "function")
        this._writev = options.writev;
      if (typeof options.destroy === "function")
        this._destroy = options.destroy;
      if (typeof options.final === "function")
        this._final = options.final;
    }
    Stream.call(this);
  }
  Writable.prototype.pipe = function() {
    errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
  };
  function writeAfterEnd(stream, cb) {
    var er = new ERR_STREAM_WRITE_AFTER_END();
    errorOrDestroy(stream, er);
    process$1.nextTick(cb, er);
  }
  function validChunk(stream, state, chunk, cb) {
    var er;
    if (chunk === null) {
      er = new ERR_STREAM_NULL_VALUES();
    } else if (typeof chunk !== "string" && !state.objectMode) {
      er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
    }
    if (er) {
      errorOrDestroy(stream, er);
      process$1.nextTick(cb, er);
      return false;
    }
    return true;
  }
  Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer2.isBuffer(chunk)) {
      chunk = _uint8ArrayToBuffer(chunk);
    }
    if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (isBuf)
      encoding = "buffer";
    else if (!encoding)
      encoding = state.defaultEncoding;
    if (typeof cb !== "function")
      cb = nop;
    if (state.ending)
      writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state, chunk, cb)) {
      state.pendingcb++;
      ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
  };
  Writable.prototype.cork = function() {
    this._writableState.corked++;
  };
  Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
      state.corked--;
      if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest)
        clearBuffer(this, state);
    }
  };
  Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    if (typeof encoding === "string")
      encoding = encoding.toLowerCase();
    if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
      throw new ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
  };
  Object.defineProperty(Writable.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
      chunk = Buffer2.from(chunk, encoding);
    }
    return chunk;
  }
  Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._writableState.highWaterMark;
    }
  });
  function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
      var newChunk = decodeChunk(state, chunk, encoding);
      if (chunk !== newChunk) {
        isBuf = true;
        encoding = "buffer";
        chunk = newChunk;
      }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark;
    if (!ret)
      state.needDrain = true;
    if (state.writing || state.corked) {
      var last = state.lastBufferedRequest;
      state.lastBufferedRequest = {
        chunk,
        encoding,
        isBuf,
        callback: cb,
        next: null
      };
      if (last) {
        last.next = state.lastBufferedRequest;
      } else {
        state.bufferedRequest = state.lastBufferedRequest;
      }
      state.bufferedRequestCount += 1;
    } else {
      doWrite(stream, state, false, len, chunk, encoding, cb);
    }
    return ret;
  }
  function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed)
      state.onwrite(new ERR_STREAM_DESTROYED("write"));
    else if (writev)
      stream._writev(chunk, state.onwrite);
    else
      stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
  }
  function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
      process$1.nextTick(cb, er);
      process$1.nextTick(finishMaybe, stream, state);
      stream._writableState.errorEmitted = true;
      errorOrDestroy(stream, er);
    } else {
      cb(er);
      stream._writableState.errorEmitted = true;
      errorOrDestroy(stream, er);
      finishMaybe(stream, state);
    }
  }
  function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
  }
  function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    if (typeof cb !== "function")
      throw new ERR_MULTIPLE_CALLBACK();
    onwriteStateUpdate(state);
    if (er)
      onwriteError(stream, state, sync, er, cb);
    else {
      var finished = needFinish(state) || stream.destroyed;
      if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
        clearBuffer(stream, state);
      }
      if (sync) {
        process$1.nextTick(afterWrite, stream, state, finished, cb);
      } else {
        afterWrite(stream, state, finished, cb);
      }
    }
  }
  function afterWrite(stream, state, finished, cb) {
    if (!finished)
      onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
  }
  function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
      state.needDrain = false;
      stream.emit("drain");
    }
  }
  function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
      var l5 = state.bufferedRequestCount;
      var buffer3 = new Array(l5);
      var holder = state.corkedRequestsFree;
      holder.entry = entry;
      var count = 0;
      var allBuffers = true;
      while (entry) {
        buffer3[count] = entry;
        if (!entry.isBuf)
          allBuffers = false;
        entry = entry.next;
        count += 1;
      }
      buffer3.allBuffers = allBuffers;
      doWrite(stream, state, true, state.length, buffer3, "", holder.finish);
      state.pendingcb++;
      state.lastBufferedRequest = null;
      if (holder.next) {
        state.corkedRequestsFree = holder.next;
        holder.next = null;
      } else {
        state.corkedRequestsFree = new CorkedRequest(state);
      }
      state.bufferedRequestCount = 0;
    } else {
      while (entry) {
        var chunk = entry.chunk;
        var encoding = entry.encoding;
        var cb = entry.callback;
        var len = state.objectMode ? 1 : chunk.length;
        doWrite(stream, state, false, len, chunk, encoding, cb);
        entry = entry.next;
        state.bufferedRequestCount--;
        if (state.writing) {
          break;
        }
      }
      if (entry === null)
        state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
  }
  Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
  };
  Writable.prototype._writev = null;
  Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === "function") {
      cb = chunk;
      chunk = null;
      encoding = null;
    } else if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (chunk !== null && chunk !== void 0)
      this.write(chunk, encoding);
    if (state.corked) {
      state.corked = 1;
      this.uncork();
    }
    if (!state.ending)
      endWritable(this, state, cb);
    return this;
  };
  Object.defineProperty(Writable.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._writableState.length;
    }
  });
  function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
  }
  function callFinal(stream, state) {
    stream._final(function(err) {
      state.pendingcb--;
      if (err) {
        errorOrDestroy(stream, err);
      }
      state.prefinished = true;
      stream.emit("prefinish");
      finishMaybe(stream, state);
    });
  }
  function prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
      if (typeof stream._final === "function" && !state.destroyed) {
        state.pendingcb++;
        state.finalCalled = true;
        process$1.nextTick(callFinal, stream, state);
      } else {
        state.prefinished = true;
        stream.emit("prefinish");
      }
    }
  }
  function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
      prefinish(stream, state);
      if (state.pendingcb === 0) {
        state.finished = true;
        stream.emit("finish");
        if (state.autoDestroy) {
          var rState = stream._readableState;
          if (!rState || rState.autoDestroy && rState.endEmitted) {
            stream.destroy();
          }
        }
      }
    }
    return need;
  }
  function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
      if (state.finished)
        process$1.nextTick(cb);
      else
        stream.once("finish", cb);
    }
    state.ended = true;
    stream.writable = false;
  }
  function onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    state.corkedRequestsFree.next = corkReq;
  }
  Object.defineProperty(Writable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      if (this._writableState === void 0) {
        return false;
      }
      return this._writableState.destroyed;
    },
    set: function set(value) {
      if (!this._writableState) {
        return;
      }
      this._writableState.destroyed = value;
    }
  });
  Writable.prototype.destroy = destroyImpl.destroy;
  Writable.prototype._undestroy = destroyImpl.undestroy;
  Writable.prototype._destroy = function(err, cb) {
    cb(err);
  };
  return exports$82;
}
var exports$72 = {};
var _dewExec$72 = false;
function dew$72() {
  if (_dewExec$72)
    return exports$72;
  _dewExec$72 = true;
  var process$1 = process2;
  var objectKeys = Object.keys || function(obj) {
    var keys2 = [];
    for (var key in obj) {
      keys2.push(key);
    }
    return keys2;
  };
  exports$72 = Duplex;
  var Readable = dew$32();
  var Writable = dew$82();
  dew$f2()(Duplex, Readable);
  {
    var keys = objectKeys(Writable.prototype);
    for (var v5 = 0; v5 < keys.length; v5++) {
      var method = keys[v5];
      if (!Duplex.prototype[method])
        Duplex.prototype[method] = Writable.prototype[method];
    }
  }
  function Duplex(options) {
    if (!(this instanceof Duplex))
      return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
      if (options.readable === false)
        this.readable = false;
      if (options.writable === false)
        this.writable = false;
      if (options.allowHalfOpen === false) {
        this.allowHalfOpen = false;
        this.once("end", onend);
      }
    }
  }
  Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._writableState.highWaterMark;
    }
  });
  Object.defineProperty(Duplex.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  Object.defineProperty(Duplex.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._writableState.length;
    }
  });
  function onend() {
    if (this._writableState.ended)
      return;
    process$1.nextTick(onEndNT, this);
  }
  function onEndNT(self2) {
    self2.end();
  }
  Object.defineProperty(Duplex.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      if (this._readableState === void 0 || this._writableState === void 0) {
        return false;
      }
      return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
      if (this._readableState === void 0 || this._writableState === void 0) {
        return;
      }
      this._readableState.destroyed = value;
      this._writableState.destroyed = value;
    }
  });
  return exports$72;
}
var exports$62 = {};
var _dewExec$62 = false;
function dew$62() {
  if (_dewExec$62)
    return exports$62;
  _dewExec$62 = true;
  var ERR_STREAM_PREMATURE_CLOSE = dew$b2().codes.ERR_STREAM_PREMATURE_CLOSE;
  function once2(callback) {
    var called = false;
    return function() {
      if (called)
        return;
      called = true;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      callback.apply(this, args);
    };
  }
  function noop2() {
  }
  function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
  }
  function eos(stream, opts, callback) {
    if (typeof opts === "function")
      return eos(stream, null, opts);
    if (!opts)
      opts = {};
    callback = once2(callback || noop2);
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;
    var onlegacyfinish = function onlegacyfinish2() {
      if (!stream.writable)
        onfinish();
    };
    var writableEnded = stream._writableState && stream._writableState.finished;
    var onfinish = function onfinish2() {
      writable = false;
      writableEnded = true;
      if (!readable)
        callback.call(stream);
    };
    var readableEnded = stream._readableState && stream._readableState.endEmitted;
    var onend = function onend2() {
      readable = false;
      readableEnded = true;
      if (!writable)
        callback.call(stream);
    };
    var onerror = function onerror2(err) {
      callback.call(stream, err);
    };
    var onclose = function onclose2() {
      var err;
      if (readable && !readableEnded) {
        if (!stream._readableState || !stream._readableState.ended)
          err = new ERR_STREAM_PREMATURE_CLOSE();
        return callback.call(stream, err);
      }
      if (writable && !writableEnded) {
        if (!stream._writableState || !stream._writableState.ended)
          err = new ERR_STREAM_PREMATURE_CLOSE();
        return callback.call(stream, err);
      }
    };
    var onrequest = function onrequest2() {
      stream.req.on("finish", onfinish);
    };
    if (isRequest(stream)) {
      stream.on("complete", onfinish);
      stream.on("abort", onclose);
      if (stream.req)
        onrequest();
      else
        stream.on("request", onrequest);
    } else if (writable && !stream._writableState) {
      stream.on("end", onlegacyfinish);
      stream.on("close", onlegacyfinish);
    }
    stream.on("end", onend);
    stream.on("finish", onfinish);
    if (opts.error !== false)
      stream.on("error", onerror);
    stream.on("close", onclose);
    return function() {
      stream.removeListener("complete", onfinish);
      stream.removeListener("abort", onclose);
      stream.removeListener("request", onrequest);
      if (stream.req)
        stream.req.removeListener("finish", onfinish);
      stream.removeListener("end", onlegacyfinish);
      stream.removeListener("close", onlegacyfinish);
      stream.removeListener("finish", onfinish);
      stream.removeListener("end", onend);
      stream.removeListener("error", onerror);
      stream.removeListener("close", onclose);
    };
  }
  exports$62 = eos;
  return exports$62;
}
var exports$52 = {};
var _dewExec$52 = false;
function dew$52() {
  if (_dewExec$52)
    return exports$52;
  _dewExec$52 = true;
  var process$1 = process2;
  var _Object$setPrototypeO;
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var finished = dew$62();
  var kLastResolve = Symbol("lastResolve");
  var kLastReject = Symbol("lastReject");
  var kError = Symbol("error");
  var kEnded = Symbol("ended");
  var kLastPromise = Symbol("lastPromise");
  var kHandlePromise = Symbol("handlePromise");
  var kStream = Symbol("stream");
  function createIterResult2(value, done) {
    return {
      value,
      done
    };
  }
  function readAndResolve(iter) {
    var resolve2 = iter[kLastResolve];
    if (resolve2 !== null) {
      var data = iter[kStream].read();
      if (data !== null) {
        iter[kLastPromise] = null;
        iter[kLastResolve] = null;
        iter[kLastReject] = null;
        resolve2(createIterResult2(data, false));
      }
    }
  }
  function onReadable(iter) {
    process$1.nextTick(readAndResolve, iter);
  }
  function wrapForNext(lastPromise, iter) {
    return function(resolve2, reject) {
      lastPromise.then(function() {
        if (iter[kEnded]) {
          resolve2(createIterResult2(void 0, true));
          return;
        }
        iter[kHandlePromise](resolve2, reject);
      }, reject);
    };
  }
  var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
  });
  var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
    get stream() {
      return this[kStream];
    },
    next: function next3() {
      var _this = this;
      var error2 = this[kError];
      if (error2 !== null) {
        return Promise.reject(error2);
      }
      if (this[kEnded]) {
        return Promise.resolve(createIterResult2(void 0, true));
      }
      if (this[kStream].destroyed) {
        return new Promise(function(resolve2, reject) {
          process$1.nextTick(function() {
            if (_this[kError]) {
              reject(_this[kError]);
            } else {
              resolve2(createIterResult2(void 0, true));
            }
          });
        });
      }
      var lastPromise = this[kLastPromise];
      var promise;
      if (lastPromise) {
        promise = new Promise(wrapForNext(lastPromise, this));
      } else {
        var data = this[kStream].read();
        if (data !== null) {
          return Promise.resolve(createIterResult2(data, false));
        }
        promise = new Promise(this[kHandlePromise]);
      }
      this[kLastPromise] = promise;
      return promise;
    }
  }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
  }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    return new Promise(function(resolve2, reject) {
      _this2[kStream].destroy(null, function(err) {
        if (err) {
          reject(err);
          return;
        }
        resolve2(createIterResult2(void 0, true));
      });
    });
  }), _Object$setPrototypeO), AsyncIteratorPrototype);
  var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream) {
    var _Object$create;
    var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
      value: stream,
      writable: true
    }), _defineProperty(_Object$create, kLastResolve, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kLastReject, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kError, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kEnded, {
      value: stream._readableState.endEmitted,
      writable: true
    }), _defineProperty(_Object$create, kHandlePromise, {
      value: function value(resolve2, reject) {
        var data = iterator[kStream].read();
        if (data) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve2(createIterResult2(data, false));
        } else {
          iterator[kLastResolve] = resolve2;
          iterator[kLastReject] = reject;
        }
      },
      writable: true
    }), _Object$create));
    iterator[kLastPromise] = null;
    finished(stream, function(err) {
      if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var reject = iterator[kLastReject];
        if (reject !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          reject(err);
        }
        iterator[kError] = err;
        return;
      }
      var resolve2 = iterator[kLastResolve];
      if (resolve2 !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve2(createIterResult2(void 0, true));
      }
      iterator[kEnded] = true;
    });
    stream.on("readable", onReadable.bind(null, iterator));
    return iterator;
  };
  exports$52 = createReadableStreamAsyncIterator;
  return exports$52;
}
var exports$42 = {};
var _dewExec$42 = false;
function dew$42() {
  if (_dewExec$42)
    return exports$42;
  _dewExec$42 = true;
  exports$42 = function() {
    throw new Error("Readable.from is not available in the browser");
  };
  return exports$42;
}
var exports$32 = {};
var _dewExec$32 = false;
var _global4 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$32() {
  if (_dewExec$32)
    return exports$32;
  _dewExec$32 = true;
  var process$1 = process2;
  exports$32 = Readable;
  var Duplex;
  Readable.ReadableState = ReadableState;
  y.EventEmitter;
  var EElistenerCount = function EElistenerCount2(emitter, type) {
    return emitter.listeners(type).length;
  };
  var Stream = dew$e2();
  var Buffer2 = buffer2.Buffer;
  var OurUint8Array = _global4.Uint8Array || function() {
  };
  function _uint8ArrayToBuffer(chunk) {
    return Buffer2.from(chunk);
  }
  function _isUint8Array(obj) {
    return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
  }
  var debugUtil = X;
  var debug;
  if (debugUtil && debugUtil.debuglog) {
    debug = debugUtil.debuglog("stream");
  } else {
    debug = function debug2() {
    };
  }
  var BufferList = dew$d2();
  var destroyImpl = dew$c2();
  var _require = dew$a2(), getHighWaterMark = _require.getHighWaterMark;
  var _require$codes = dew$b2().codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
  var StringDecoder2;
  var createReadableStreamAsyncIterator;
  var from;
  dew$f2()(Readable, Stream);
  var errorOrDestroy = destroyImpl.errorOrDestroy;
  var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
  function prependListener2(emitter, event, fn) {
    if (typeof emitter.prependListener === "function")
      return emitter.prependListener(event, fn);
    if (!emitter._events || !emitter._events[event])
      emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event]))
      emitter._events[event].unshift(fn);
    else
      emitter._events[event] = [fn, emitter._events[event]];
  }
  function ReadableState(options, stream, isDuplex) {
    Duplex = Duplex || dew$72();
    options = options || {};
    if (typeof isDuplex !== "boolean")
      isDuplex = stream instanceof Duplex;
    this.objectMode = !!options.objectMode;
    if (isDuplex)
      this.objectMode = this.objectMode || !!options.readableObjectMode;
    this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    this.sync = true;
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true;
    this.emitClose = options.emitClose !== false;
    this.autoDestroy = !!options.autoDestroy;
    this.destroyed = false;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.awaitDrain = 0;
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
      if (!StringDecoder2)
        StringDecoder2 = e$13.StringDecoder;
      this.decoder = new StringDecoder2(options.encoding);
      this.encoding = options.encoding;
    }
  }
  function Readable(options) {
    Duplex = Duplex || dew$72();
    if (!(this instanceof Readable))
      return new Readable(options);
    var isDuplex = this instanceof Duplex;
    this._readableState = new ReadableState(options, this, isDuplex);
    this.readable = true;
    if (options) {
      if (typeof options.read === "function")
        this._read = options.read;
      if (typeof options.destroy === "function")
        this._destroy = options.destroy;
    }
    Stream.call(this);
  }
  Object.defineProperty(Readable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      if (this._readableState === void 0) {
        return false;
      }
      return this._readableState.destroyed;
    },
    set: function set(value) {
      if (!this._readableState) {
        return;
      }
      this._readableState.destroyed = value;
    }
  });
  Readable.prototype.destroy = destroyImpl.destroy;
  Readable.prototype._undestroy = destroyImpl.undestroy;
  Readable.prototype._destroy = function(err, cb) {
    cb(err);
  };
  Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
      if (typeof chunk === "string") {
        encoding = encoding || state.defaultEncoding;
        if (encoding !== state.encoding) {
          chunk = Buffer2.from(chunk, encoding);
          encoding = "";
        }
        skipChunkCheck = true;
      }
    } else {
      skipChunkCheck = true;
    }
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
  };
  Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
  };
  function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    debug("readableAddChunk", chunk);
    var state = stream._readableState;
    if (chunk === null) {
      state.reading = false;
      onEofChunk(stream, state);
    } else {
      var er;
      if (!skipChunkCheck)
        er = chunkInvalid(state, chunk);
      if (er) {
        errorOrDestroy(stream, er);
      } else if (state.objectMode || chunk && chunk.length > 0) {
        if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
          chunk = _uint8ArrayToBuffer(chunk);
        }
        if (addToFront) {
          if (state.endEmitted)
            errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
          else
            addChunk(stream, state, chunk, true);
        } else if (state.ended) {
          errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
        } else if (state.destroyed) {
          return false;
        } else {
          state.reading = false;
          if (state.decoder && !encoding) {
            chunk = state.decoder.write(chunk);
            if (state.objectMode || chunk.length !== 0)
              addChunk(stream, state, chunk, false);
            else
              maybeReadMore(stream, state);
          } else {
            addChunk(stream, state, chunk, false);
          }
        }
      } else if (!addToFront) {
        state.reading = false;
        maybeReadMore(stream, state);
      }
    }
    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
  }
  function addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
      state.awaitDrain = 0;
      stream.emit("data", chunk);
    } else {
      state.length += state.objectMode ? 1 : chunk.length;
      if (addToFront)
        state.buffer.unshift(chunk);
      else
        state.buffer.push(chunk);
      if (state.needReadable)
        emitReadable(stream);
    }
    maybeReadMore(stream, state);
  }
  function chunkInvalid(state, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
      er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
    }
    return er;
  }
  Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
  };
  Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder2)
      StringDecoder2 = e$13.StringDecoder;
    var decoder = new StringDecoder2(enc);
    this._readableState.decoder = decoder;
    this._readableState.encoding = this._readableState.decoder.encoding;
    var p5 = this._readableState.buffer.head;
    var content = "";
    while (p5 !== null) {
      content += decoder.write(p5.data);
      p5 = p5.next;
    }
    this._readableState.buffer.clear();
    if (content !== "")
      this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
  };
  var MAX_HWM = 1073741824;
  function computeNewHighWaterMark(n5) {
    if (n5 >= MAX_HWM) {
      n5 = MAX_HWM;
    } else {
      n5--;
      n5 |= n5 >>> 1;
      n5 |= n5 >>> 2;
      n5 |= n5 >>> 4;
      n5 |= n5 >>> 8;
      n5 |= n5 >>> 16;
      n5++;
    }
    return n5;
  }
  function howMuchToRead(n5, state) {
    if (n5 <= 0 || state.length === 0 && state.ended)
      return 0;
    if (state.objectMode)
      return 1;
    if (n5 !== n5) {
      if (state.flowing && state.length)
        return state.buffer.head.data.length;
      else
        return state.length;
    }
    if (n5 > state.highWaterMark)
      state.highWaterMark = computeNewHighWaterMark(n5);
    if (n5 <= state.length)
      return n5;
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    }
    return state.length;
  }
  Readable.prototype.read = function(n5) {
    debug("read", n5);
    n5 = parseInt(n5, 10);
    var state = this._readableState;
    var nOrig = n5;
    if (n5 !== 0)
      state.emittedReadable = false;
    if (n5 === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
      debug("read: emitReadable", state.length, state.ended);
      if (state.length === 0 && state.ended)
        endReadable(this);
      else
        emitReadable(this);
      return null;
    }
    n5 = howMuchToRead(n5, state);
    if (n5 === 0 && state.ended) {
      if (state.length === 0)
        endReadable(this);
      return null;
    }
    var doRead = state.needReadable;
    debug("need readable", doRead);
    if (state.length === 0 || state.length - n5 < state.highWaterMark) {
      doRead = true;
      debug("length less than watermark", doRead);
    }
    if (state.ended || state.reading) {
      doRead = false;
      debug("reading or ended", doRead);
    } else if (doRead) {
      debug("do read");
      state.reading = true;
      state.sync = true;
      if (state.length === 0)
        state.needReadable = true;
      this._read(state.highWaterMark);
      state.sync = false;
      if (!state.reading)
        n5 = howMuchToRead(nOrig, state);
    }
    var ret;
    if (n5 > 0)
      ret = fromList(n5, state);
    else
      ret = null;
    if (ret === null) {
      state.needReadable = state.length <= state.highWaterMark;
      n5 = 0;
    } else {
      state.length -= n5;
      state.awaitDrain = 0;
    }
    if (state.length === 0) {
      if (!state.ended)
        state.needReadable = true;
      if (nOrig !== n5 && state.ended)
        endReadable(this);
    }
    if (ret !== null)
      this.emit("data", ret);
    return ret;
  };
  function onEofChunk(stream, state) {
    debug("onEofChunk");
    if (state.ended)
      return;
    if (state.decoder) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) {
        state.buffer.push(chunk);
        state.length += state.objectMode ? 1 : chunk.length;
      }
    }
    state.ended = true;
    if (state.sync) {
      emitReadable(stream);
    } else {
      state.needReadable = false;
      if (!state.emittedReadable) {
        state.emittedReadable = true;
        emitReadable_(stream);
      }
    }
  }
  function emitReadable(stream) {
    var state = stream._readableState;
    debug("emitReadable", state.needReadable, state.emittedReadable);
    state.needReadable = false;
    if (!state.emittedReadable) {
      debug("emitReadable", state.flowing);
      state.emittedReadable = true;
      process$1.nextTick(emitReadable_, stream);
    }
  }
  function emitReadable_(stream) {
    var state = stream._readableState;
    debug("emitReadable_", state.destroyed, state.length, state.ended);
    if (!state.destroyed && (state.length || state.ended)) {
      stream.emit("readable");
      state.emittedReadable = false;
    }
    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    flow(stream);
  }
  function maybeReadMore(stream, state) {
    if (!state.readingMore) {
      state.readingMore = true;
      process$1.nextTick(maybeReadMore_, stream, state);
    }
  }
  function maybeReadMore_(stream, state) {
    while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
      var len = state.length;
      debug("maybeReadMore read 0");
      stream.read(0);
      if (len === state.length)
        break;
    }
    state.readingMore = false;
  }
  Readable.prototype._read = function(n5) {
    errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
  };
  Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch (state.pipesCount) {
      case 0:
        state.pipes = dest;
        break;
      case 1:
        state.pipes = [state.pipes, dest];
        break;
      default:
        state.pipes.push(dest);
        break;
    }
    state.pipesCount += 1;
    debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process$1.stdout && dest !== process$1.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted)
      process$1.nextTick(endFn);
    else
      src.once("end", endFn);
    dest.on("unpipe", onunpipe);
    function onunpipe(readable, unpipeInfo) {
      debug("onunpipe");
      if (readable === src) {
        if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
          unpipeInfo.hasUnpiped = true;
          cleanup();
        }
      }
    }
    function onend() {
      debug("onend");
      dest.end();
    }
    var ondrain = pipeOnDrain(src);
    dest.on("drain", ondrain);
    var cleanedUp = false;
    function cleanup() {
      debug("cleanup");
      dest.removeListener("close", onclose);
      dest.removeListener("finish", onfinish);
      dest.removeListener("drain", ondrain);
      dest.removeListener("error", onerror);
      dest.removeListener("unpipe", onunpipe);
      src.removeListener("end", onend);
      src.removeListener("end", unpipe);
      src.removeListener("data", ondata);
      cleanedUp = true;
      if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
        ondrain();
    }
    src.on("data", ondata);
    function ondata(chunk) {
      debug("ondata");
      var ret = dest.write(chunk);
      debug("dest.write", ret);
      if (ret === false) {
        if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
          debug("false write response, pause", state.awaitDrain);
          state.awaitDrain++;
        }
        src.pause();
      }
    }
    function onerror(er) {
      debug("onerror", er);
      unpipe();
      dest.removeListener("error", onerror);
      if (EElistenerCount(dest, "error") === 0)
        errorOrDestroy(dest, er);
    }
    prependListener2(dest, "error", onerror);
    function onclose() {
      dest.removeListener("finish", onfinish);
      unpipe();
    }
    dest.once("close", onclose);
    function onfinish() {
      debug("onfinish");
      dest.removeListener("close", onclose);
      unpipe();
    }
    dest.once("finish", onfinish);
    function unpipe() {
      debug("unpipe");
      src.unpipe(dest);
    }
    dest.emit("pipe", src);
    if (!state.flowing) {
      debug("pipe resume");
      src.resume();
    }
    return dest;
  };
  function pipeOnDrain(src) {
    return function pipeOnDrainFunctionResult() {
      var state = src._readableState;
      debug("pipeOnDrain", state.awaitDrain);
      if (state.awaitDrain)
        state.awaitDrain--;
      if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
        state.flowing = true;
        flow(src);
      }
    };
  }
  Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
      hasUnpiped: false
    };
    if (state.pipesCount === 0)
      return this;
    if (state.pipesCount === 1) {
      if (dest && dest !== state.pipes)
        return this;
      if (!dest)
        dest = state.pipes;
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;
      if (dest)
        dest.emit("unpipe", this, unpipeInfo);
      return this;
    }
    if (!dest) {
      var dests = state.pipes;
      var len = state.pipesCount;
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;
      for (var i5 = 0; i5 < len; i5++) {
        dests[i5].emit("unpipe", this, {
          hasUnpiped: false
        });
      }
      return this;
    }
    var index = indexOf(state.pipes, dest);
    if (index === -1)
      return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1)
      state.pipes = state.pipes[0];
    dest.emit("unpipe", this, unpipeInfo);
    return this;
  };
  Readable.prototype.on = function(ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    var state = this._readableState;
    if (ev === "data") {
      state.readableListening = this.listenerCount("readable") > 0;
      if (state.flowing !== false)
        this.resume();
    } else if (ev === "readable") {
      if (!state.endEmitted && !state.readableListening) {
        state.readableListening = state.needReadable = true;
        state.flowing = false;
        state.emittedReadable = false;
        debug("on readable", state.length, state.reading);
        if (state.length) {
          emitReadable(this);
        } else if (!state.reading) {
          process$1.nextTick(nReadingNextTick, this);
        }
      }
    }
    return res;
  };
  Readable.prototype.addListener = Readable.prototype.on;
  Readable.prototype.removeListener = function(ev, fn) {
    var res = Stream.prototype.removeListener.call(this, ev, fn);
    if (ev === "readable") {
      process$1.nextTick(updateReadableListening, this);
    }
    return res;
  };
  Readable.prototype.removeAllListeners = function(ev) {
    var res = Stream.prototype.removeAllListeners.apply(this, arguments);
    if (ev === "readable" || ev === void 0) {
      process$1.nextTick(updateReadableListening, this);
    }
    return res;
  };
  function updateReadableListening(self2) {
    var state = self2._readableState;
    state.readableListening = self2.listenerCount("readable") > 0;
    if (state.resumeScheduled && !state.paused) {
      state.flowing = true;
    } else if (self2.listenerCount("data") > 0) {
      self2.resume();
    }
  }
  function nReadingNextTick(self2) {
    debug("readable nexttick read 0");
    self2.read(0);
  }
  Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
      debug("resume");
      state.flowing = !state.readableListening;
      resume(this, state);
    }
    state.paused = false;
    return this;
  };
  function resume(stream, state) {
    if (!state.resumeScheduled) {
      state.resumeScheduled = true;
      process$1.nextTick(resume_, stream, state);
    }
  }
  function resume_(stream, state) {
    debug("resume", state.reading);
    if (!state.reading) {
      stream.read(0);
    }
    state.resumeScheduled = false;
    stream.emit("resume");
    flow(stream);
    if (state.flowing && !state.reading)
      stream.read(0);
  }
  Readable.prototype.pause = function() {
    debug("call pause flowing=%j", this._readableState.flowing);
    if (this._readableState.flowing !== false) {
      debug("pause");
      this._readableState.flowing = false;
      this.emit("pause");
    }
    this._readableState.paused = true;
    return this;
  };
  function flow(stream) {
    var state = stream._readableState;
    debug("flow", state.flowing);
    while (state.flowing && stream.read() !== null) {
    }
  }
  Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on("end", function() {
      debug("wrapped end");
      if (state.decoder && !state.ended) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length)
          _this.push(chunk);
      }
      _this.push(null);
    });
    stream.on("data", function(chunk) {
      debug("wrapped data");
      if (state.decoder)
        chunk = state.decoder.write(chunk);
      if (state.objectMode && (chunk === null || chunk === void 0))
        return;
      else if (!state.objectMode && (!chunk || !chunk.length))
        return;
      var ret = _this.push(chunk);
      if (!ret) {
        paused = true;
        stream.pause();
      }
    });
    for (var i5 in stream) {
      if (this[i5] === void 0 && typeof stream[i5] === "function") {
        this[i5] = /* @__PURE__ */ function methodWrap(method) {
          return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
          };
        }(i5);
      }
    }
    for (var n5 = 0; n5 < kProxyEvents.length; n5++) {
      stream.on(kProxyEvents[n5], this.emit.bind(this, kProxyEvents[n5]));
    }
    this._read = function(n6) {
      debug("wrapped _read", n6);
      if (paused) {
        paused = false;
        stream.resume();
      }
    };
    return this;
  };
  if (typeof Symbol === "function") {
    Readable.prototype[Symbol.asyncIterator] = function() {
      if (createReadableStreamAsyncIterator === void 0) {
        createReadableStreamAsyncIterator = dew$52();
      }
      return createReadableStreamAsyncIterator(this);
    };
  }
  Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._readableState.highWaterMark;
    }
  });
  Object.defineProperty(Readable.prototype, "readableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._readableState && this._readableState.buffer;
    }
  });
  Object.defineProperty(Readable.prototype, "readableFlowing", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._readableState.flowing;
    },
    set: function set(state) {
      if (this._readableState) {
        this._readableState.flowing = state;
      }
    }
  });
  Readable._fromList = fromList;
  Object.defineProperty(Readable.prototype, "readableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get4() {
      return this._readableState.length;
    }
  });
  function fromList(n5, state) {
    if (state.length === 0)
      return null;
    var ret;
    if (state.objectMode)
      ret = state.buffer.shift();
    else if (!n5 || n5 >= state.length) {
      if (state.decoder)
        ret = state.buffer.join("");
      else if (state.buffer.length === 1)
        ret = state.buffer.first();
      else
        ret = state.buffer.concat(state.length);
      state.buffer.clear();
    } else {
      ret = state.buffer.consume(n5, state.decoder);
    }
    return ret;
  }
  function endReadable(stream) {
    var state = stream._readableState;
    debug("endReadable", state.endEmitted);
    if (!state.endEmitted) {
      state.ended = true;
      process$1.nextTick(endReadableNT, state, stream);
    }
  }
  function endReadableNT(state, stream) {
    debug("endReadableNT", state.endEmitted, state.length);
    if (!state.endEmitted && state.length === 0) {
      state.endEmitted = true;
      stream.readable = false;
      stream.emit("end");
      if (state.autoDestroy) {
        var wState = stream._writableState;
        if (!wState || wState.autoDestroy && wState.finished) {
          stream.destroy();
        }
      }
    }
  }
  if (typeof Symbol === "function") {
    Readable.from = function(iterable, opts) {
      if (from === void 0) {
        from = dew$42();
      }
      return from(Readable, iterable, opts);
    };
  }
  function indexOf(xs, x3) {
    for (var i5 = 0, l5 = xs.length; i5 < l5; i5++) {
      if (xs[i5] === x3)
        return i5;
    }
    return -1;
  }
  return exports$32;
}
var exports$24 = {};
var _dewExec$22 = false;
function dew$22() {
  if (_dewExec$22)
    return exports$24;
  _dewExec$22 = true;
  exports$24 = Transform;
  var _require$codes = dew$b2().codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
  var Duplex = dew$72();
  dew$f2()(Transform, Duplex);
  function afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (cb === null) {
      return this.emit("error", new ERR_MULTIPLE_CALLBACK());
    }
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null)
      this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) {
      this._read(rs.highWaterMark);
    }
  }
  function Transform(options) {
    if (!(this instanceof Transform))
      return new Transform(options);
    Duplex.call(this, options);
    this._transformState = {
      afterTransform: afterTransform.bind(this),
      needTransform: false,
      transforming: false,
      writecb: null,
      writechunk: null,
      writeencoding: null
    };
    this._readableState.needReadable = true;
    this._readableState.sync = false;
    if (options) {
      if (typeof options.transform === "function")
        this._transform = options.transform;
      if (typeof options.flush === "function")
        this._flush = options.flush;
    }
    this.on("prefinish", prefinish);
  }
  function prefinish() {
    var _this = this;
    if (typeof this._flush === "function" && !this._readableState.destroyed) {
      this._flush(function(er, data) {
        done(_this, er, data);
      });
    } else {
      done(this, null, null);
    }
  }
  Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
  };
  Transform.prototype._transform = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
  };
  Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
      var rs = this._readableState;
      if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
        this._read(rs.highWaterMark);
    }
  };
  Transform.prototype._read = function(n5) {
    var ts = this._transformState;
    if (ts.writechunk !== null && !ts.transforming) {
      ts.transforming = true;
      this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
      ts.needTransform = true;
    }
  };
  Transform.prototype._destroy = function(err, cb) {
    Duplex.prototype._destroy.call(this, err, function(err2) {
      cb(err2);
    });
  };
  function done(stream, er, data) {
    if (er)
      return stream.emit("error", er);
    if (data != null)
      stream.push(data);
    if (stream._writableState.length)
      throw new ERR_TRANSFORM_WITH_LENGTH_0();
    if (stream._transformState.transforming)
      throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
    return stream.push(null);
  }
  return exports$24;
}
var exports$14 = {};
var _dewExec$14 = false;
function dew$14() {
  if (_dewExec$14)
    return exports$14;
  _dewExec$14 = true;
  exports$14 = PassThrough;
  var Transform = dew$22();
  dew$f2()(PassThrough, Transform);
  function PassThrough(options) {
    if (!(this instanceof PassThrough))
      return new PassThrough(options);
    Transform.call(this, options);
  }
  PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
  };
  return exports$14;
}
var exports7 = {};
var _dewExec7 = false;
function dew8() {
  if (_dewExec7)
    return exports7;
  _dewExec7 = true;
  var eos;
  function once2(callback) {
    var called = false;
    return function() {
      if (called)
        return;
      called = true;
      callback.apply(void 0, arguments);
    };
  }
  var _require$codes = dew$b2().codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
  function noop2(err) {
    if (err)
      throw err;
  }
  function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
  }
  function destroyer(stream, reading, writing, callback) {
    callback = once2(callback);
    var closed = false;
    stream.on("close", function() {
      closed = true;
    });
    if (eos === void 0)
      eos = dew$62();
    eos(stream, {
      readable: reading,
      writable: writing
    }, function(err) {
      if (err)
        return callback(err);
      closed = true;
      callback();
    });
    var destroyed = false;
    return function(err) {
      if (closed)
        return;
      if (destroyed)
        return;
      destroyed = true;
      if (isRequest(stream))
        return stream.abort();
      if (typeof stream.destroy === "function")
        return stream.destroy();
      callback(err || new ERR_STREAM_DESTROYED("pipe"));
    };
  }
  function call(fn) {
    fn();
  }
  function pipe(from, to) {
    return from.pipe(to);
  }
  function popCallback(streams) {
    if (!streams.length)
      return noop2;
    if (typeof streams[streams.length - 1] !== "function")
      return noop2;
    return streams.pop();
  }
  function pipeline() {
    for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
      streams[_key] = arguments[_key];
    }
    var callback = popCallback(streams);
    if (Array.isArray(streams[0]))
      streams = streams[0];
    if (streams.length < 2) {
      throw new ERR_MISSING_ARGS("streams");
    }
    var error2;
    var destroys = streams.map(function(stream, i5) {
      var reading = i5 < streams.length - 1;
      var writing = i5 > 0;
      return destroyer(stream, reading, writing, function(err) {
        if (!error2)
          error2 = err;
        if (err)
          destroys.forEach(call);
        if (reading)
          return;
        destroys.forEach(call);
        callback(error2);
      });
    });
    return streams.reduce(pipe);
  }
  exports7 = pipeline;
  return exports7;
}

// node_modules/@jspm/core/nodelibs/browser/chunk-C4rKjYLo.js
init_dirname();
init_buffer();
init_process();
var exports8 = {};
var _dewExec8 = false;
function dew9() {
  if (_dewExec8)
    return exports8;
  _dewExec8 = true;
  exports8 = exports8 = dew$32();
  exports8.Stream = exports8;
  exports8.Readable = exports8;
  exports8.Writable = dew$82();
  exports8.Duplex = dew$72();
  exports8.Transform = dew$22();
  exports8.PassThrough = dew$14();
  exports8.finished = dew$62();
  exports8.pipeline = dew8();
  return exports8;
}

// node_modules/@jspm/core/nodelibs/browser/https.js
var exports$63 = {};
var _dewExec$53 = false;
var _global$32 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$53() {
  if (_dewExec$53)
    return exports$63;
  _dewExec$53 = true;
  exports$63.fetch = isFunction(_global$32.fetch) && isFunction(_global$32.ReadableStream);
  exports$63.writableStream = isFunction(_global$32.WritableStream);
  exports$63.abortController = isFunction(_global$32.AbortController);
  var xhr;
  function getXHR() {
    if (xhr !== void 0)
      return xhr;
    if (_global$32.XMLHttpRequest) {
      xhr = new _global$32.XMLHttpRequest();
      try {
        xhr.open("GET", _global$32.XDomainRequest ? "/" : "https://example.com");
      } catch (e5) {
        xhr = null;
      }
    } else {
      xhr = null;
    }
    return xhr;
  }
  function checkTypeSupport(type) {
    var xhr2 = getXHR();
    if (!xhr2)
      return false;
    try {
      xhr2.responseType = type;
      return xhr2.responseType === type;
    } catch (e5) {
    }
    return false;
  }
  exports$63.arraybuffer = exports$63.fetch || checkTypeSupport("arraybuffer");
  exports$63.msstream = !exports$63.fetch && checkTypeSupport("ms-stream");
  exports$63.mozchunkedarraybuffer = !exports$63.fetch && checkTypeSupport("moz-chunked-arraybuffer");
  exports$63.overrideMimeType = exports$63.fetch || (getXHR() ? isFunction(getXHR().overrideMimeType) : false);
  function isFunction(value) {
    return typeof value === "function";
  }
  xhr = null;
  return exports$63;
}
var exports$53 = {};
var _dewExec$43 = false;
var _global$23 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$43() {
  if (_dewExec$43)
    return exports$53;
  _dewExec$43 = true;
  var Buffer2 = buffer2.Buffer;
  var process$1 = process2;
  var capability = dew$53();
  var inherits = dew$f2();
  var stream = dew9();
  var rStates = exports$53.readyStates = {
    UNSENT: 0,
    OPENED: 1,
    HEADERS_RECEIVED: 2,
    LOADING: 3,
    DONE: 4
  };
  var IncomingMessage3 = exports$53.IncomingMessage = function(xhr, response, mode, resetTimers) {
    var self2 = this || _global$23;
    stream.Readable.call(self2);
    self2._mode = mode;
    self2.headers = {};
    self2.rawHeaders = [];
    self2.trailers = {};
    self2.rawTrailers = [];
    self2.on("end", function() {
      process$1.nextTick(function() {
        self2.emit("close");
      });
    });
    if (mode === "fetch") {
      let read = function() {
        reader.read().then(function(result) {
          if (self2._destroyed)
            return;
          resetTimers(result.done);
          if (result.done) {
            self2.push(null);
            return;
          }
          self2.push(Buffer2.from(result.value));
          read();
        }).catch(function(err) {
          resetTimers(true);
          if (!self2._destroyed)
            self2.emit("error", err);
        });
      };
      self2._fetchResponse = response;
      self2.url = response.url;
      self2.statusCode = response.status;
      self2.statusMessage = response.statusText;
      response.headers.forEach(function(header, key) {
        self2.headers[key.toLowerCase()] = header;
        self2.rawHeaders.push(key, header);
      });
      if (capability.writableStream) {
        var writable = new WritableStream({
          write: function(chunk) {
            resetTimers(false);
            return new Promise(function(resolve2, reject) {
              if (self2._destroyed) {
                reject();
              } else if (self2.push(Buffer2.from(chunk))) {
                resolve2();
              } else {
                self2._resumeFetch = resolve2;
              }
            });
          },
          close: function() {
            resetTimers(true);
            if (!self2._destroyed)
              self2.push(null);
          },
          abort: function(err) {
            resetTimers(true);
            if (!self2._destroyed)
              self2.emit("error", err);
          }
        });
        try {
          response.body.pipeTo(writable).catch(function(err) {
            resetTimers(true);
            if (!self2._destroyed)
              self2.emit("error", err);
          });
          return;
        } catch (e5) {
        }
      }
      var reader = response.body.getReader();
      read();
    } else {
      self2._xhr = xhr;
      self2._pos = 0;
      self2.url = xhr.responseURL;
      self2.statusCode = xhr.status;
      self2.statusMessage = xhr.statusText;
      var headers = xhr.getAllResponseHeaders().split(/\r?\n/);
      headers.forEach(function(header) {
        var matches = header.match(/^([^:]+):\s*(.*)/);
        if (matches) {
          var key = matches[1].toLowerCase();
          if (key === "set-cookie") {
            if (self2.headers[key] === void 0) {
              self2.headers[key] = [];
            }
            self2.headers[key].push(matches[2]);
          } else if (self2.headers[key] !== void 0) {
            self2.headers[key] += ", " + matches[2];
          } else {
            self2.headers[key] = matches[2];
          }
          self2.rawHeaders.push(matches[1], matches[2]);
        }
      });
      self2._charset = "x-user-defined";
      if (!capability.overrideMimeType) {
        var mimeType = self2.rawHeaders["mime-type"];
        if (mimeType) {
          var charsetMatch = mimeType.match(/;\s*charset=([^;])(;|$)/);
          if (charsetMatch) {
            self2._charset = charsetMatch[1].toLowerCase();
          }
        }
        if (!self2._charset)
          self2._charset = "utf-8";
      }
    }
  };
  inherits(IncomingMessage3, stream.Readable);
  IncomingMessage3.prototype._read = function() {
    var self2 = this || _global$23;
    var resolve2 = self2._resumeFetch;
    if (resolve2) {
      self2._resumeFetch = null;
      resolve2();
    }
  };
  IncomingMessage3.prototype._onXHRProgress = function(resetTimers) {
    var self2 = this || _global$23;
    var xhr = self2._xhr;
    var response = null;
    switch (self2._mode) {
      case "text":
        response = xhr.responseText;
        if (response.length > self2._pos) {
          var newData = response.substr(self2._pos);
          if (self2._charset === "x-user-defined") {
            var buffer3 = Buffer2.alloc(newData.length);
            for (var i5 = 0; i5 < newData.length; i5++)
              buffer3[i5] = newData.charCodeAt(i5) & 255;
            self2.push(buffer3);
          } else {
            self2.push(newData, self2._charset);
          }
          self2._pos = response.length;
        }
        break;
      case "arraybuffer":
        if (xhr.readyState !== rStates.DONE || !xhr.response)
          break;
        response = xhr.response;
        self2.push(Buffer2.from(new Uint8Array(response)));
        break;
      case "moz-chunked-arraybuffer":
        response = xhr.response;
        if (xhr.readyState !== rStates.LOADING || !response)
          break;
        self2.push(Buffer2.from(new Uint8Array(response)));
        break;
      case "ms-stream":
        response = xhr.response;
        if (xhr.readyState !== rStates.LOADING)
          break;
        var reader = new _global$23.MSStreamReader();
        reader.onprogress = function() {
          if (reader.result.byteLength > self2._pos) {
            self2.push(Buffer2.from(new Uint8Array(reader.result.slice(self2._pos))));
            self2._pos = reader.result.byteLength;
          }
        };
        reader.onload = function() {
          resetTimers(true);
          self2.push(null);
        };
        reader.readAsArrayBuffer(response);
        break;
    }
    if (self2._xhr.readyState === rStates.DONE && self2._mode !== "ms-stream") {
      resetTimers(true);
      self2.push(null);
    }
  };
  return exports$53;
}
var exports$43 = {};
var _dewExec$33 = false;
var _global$13 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$33() {
  if (_dewExec$33)
    return exports$43;
  _dewExec$33 = true;
  var Buffer2 = buffer2.Buffer;
  var process$1 = process2;
  var capability = dew$53();
  var inherits = dew$f2();
  var response = dew$43();
  var stream = dew9();
  var IncomingMessage3 = response.IncomingMessage;
  var rStates = response.readyStates;
  function decideMode(preferBinary, useFetch) {
    if (capability.fetch && useFetch) {
      return "fetch";
    } else if (capability.mozchunkedarraybuffer) {
      return "moz-chunked-arraybuffer";
    } else if (capability.msstream) {
      return "ms-stream";
    } else if (capability.arraybuffer && preferBinary) {
      return "arraybuffer";
    } else {
      return "text";
    }
  }
  var ClientRequest3 = exports$43 = function(opts) {
    var self2 = this || _global$13;
    stream.Writable.call(self2);
    self2._opts = opts;
    self2._body = [];
    self2._headers = {};
    if (opts.auth)
      self2.setHeader("Authorization", "Basic " + Buffer2.from(opts.auth).toString("base64"));
    Object.keys(opts.headers).forEach(function(name2) {
      self2.setHeader(name2, opts.headers[name2]);
    });
    var preferBinary;
    var useFetch = true;
    if (opts.mode === "disable-fetch" || "requestTimeout" in opts && !capability.abortController) {
      useFetch = false;
      preferBinary = true;
    } else if (opts.mode === "prefer-streaming") {
      preferBinary = false;
    } else if (opts.mode === "allow-wrong-content-type") {
      preferBinary = !capability.overrideMimeType;
    } else if (!opts.mode || opts.mode === "default" || opts.mode === "prefer-fast") {
      preferBinary = true;
    } else {
      throw new Error("Invalid value for opts.mode");
    }
    self2._mode = decideMode(preferBinary, useFetch);
    self2._fetchTimer = null;
    self2._socketTimeout = null;
    self2._socketTimer = null;
    self2.on("finish", function() {
      self2._onFinish();
    });
  };
  inherits(ClientRequest3, stream.Writable);
  ClientRequest3.prototype.setHeader = function(name2, value) {
    var self2 = this || _global$13;
    var lowerName = name2.toLowerCase();
    if (unsafeHeaders.indexOf(lowerName) !== -1)
      return;
    self2._headers[lowerName] = {
      name: name2,
      value
    };
  };
  ClientRequest3.prototype.getHeader = function(name2) {
    var header = (this || _global$13)._headers[name2.toLowerCase()];
    if (header)
      return header.value;
    return null;
  };
  ClientRequest3.prototype.removeHeader = function(name2) {
    var self2 = this || _global$13;
    delete self2._headers[name2.toLowerCase()];
  };
  ClientRequest3.prototype._onFinish = function() {
    var self2 = this || _global$13;
    if (self2._destroyed)
      return;
    var opts = self2._opts;
    if ("timeout" in opts && opts.timeout !== 0) {
      self2.setTimeout(opts.timeout);
    }
    var headersObj = self2._headers;
    var body = null;
    if (opts.method !== "GET" && opts.method !== "HEAD") {
      body = new Blob(self2._body, {
        type: (headersObj["content-type"] || {}).value || ""
      });
    }
    var headersList = [];
    Object.keys(headersObj).forEach(function(keyName) {
      var name2 = headersObj[keyName].name;
      var value = headersObj[keyName].value;
      if (Array.isArray(value)) {
        value.forEach(function(v5) {
          headersList.push([name2, v5]);
        });
      } else {
        headersList.push([name2, value]);
      }
    });
    if (self2._mode === "fetch") {
      var signal = null;
      if (capability.abortController) {
        var controller = new AbortController();
        signal = controller.signal;
        self2._fetchAbortController = controller;
        if ("requestTimeout" in opts && opts.requestTimeout !== 0) {
          self2._fetchTimer = _global$13.setTimeout(function() {
            self2.emit("requestTimeout");
            if (self2._fetchAbortController)
              self2._fetchAbortController.abort();
          }, opts.requestTimeout);
        }
      }
      _global$13.fetch(self2._opts.url, {
        method: self2._opts.method,
        headers: headersList,
        body: body || void 0,
        mode: "cors",
        credentials: opts.withCredentials ? "include" : "same-origin",
        signal
      }).then(function(response2) {
        self2._fetchResponse = response2;
        self2._resetTimers(false);
        self2._connect();
      }, function(reason) {
        self2._resetTimers(true);
        if (!self2._destroyed)
          self2.emit("error", reason);
      });
    } else {
      var xhr = self2._xhr = new _global$13.XMLHttpRequest();
      try {
        xhr.open(self2._opts.method, self2._opts.url, true);
      } catch (err) {
        process$1.nextTick(function() {
          self2.emit("error", err);
        });
        return;
      }
      if ("responseType" in xhr)
        xhr.responseType = self2._mode;
      if ("withCredentials" in xhr)
        xhr.withCredentials = !!opts.withCredentials;
      if (self2._mode === "text" && "overrideMimeType" in xhr)
        xhr.overrideMimeType("text/plain; charset=x-user-defined");
      if ("requestTimeout" in opts) {
        xhr.timeout = opts.requestTimeout;
        xhr.ontimeout = function() {
          self2.emit("requestTimeout");
        };
      }
      headersList.forEach(function(header) {
        xhr.setRequestHeader(header[0], header[1]);
      });
      self2._response = null;
      xhr.onreadystatechange = function() {
        switch (xhr.readyState) {
          case rStates.LOADING:
          case rStates.DONE:
            self2._onXHRProgress();
            break;
        }
      };
      if (self2._mode === "moz-chunked-arraybuffer") {
        xhr.onprogress = function() {
          self2._onXHRProgress();
        };
      }
      xhr.onerror = function() {
        if (self2._destroyed)
          return;
        self2._resetTimers(true);
        self2.emit("error", new Error("XHR error"));
      };
      try {
        xhr.send(body);
      } catch (err) {
        process$1.nextTick(function() {
          self2.emit("error", err);
        });
        return;
      }
    }
  };
  function statusValid(xhr) {
    try {
      var status = xhr.status;
      return status !== null && status !== 0;
    } catch (e5) {
      return false;
    }
  }
  ClientRequest3.prototype._onXHRProgress = function() {
    var self2 = this || _global$13;
    self2._resetTimers(false);
    if (!statusValid(self2._xhr) || self2._destroyed)
      return;
    if (!self2._response)
      self2._connect();
    self2._response._onXHRProgress(self2._resetTimers.bind(self2));
  };
  ClientRequest3.prototype._connect = function() {
    var self2 = this || _global$13;
    if (self2._destroyed)
      return;
    self2._response = new IncomingMessage3(self2._xhr, self2._fetchResponse, self2._mode, self2._resetTimers.bind(self2));
    self2._response.on("error", function(err) {
      self2.emit("error", err);
    });
    self2.emit("response", self2._response);
  };
  ClientRequest3.prototype._write = function(chunk, encoding, cb) {
    var self2 = this || _global$13;
    self2._body.push(chunk);
    cb();
  };
  ClientRequest3.prototype._resetTimers = function(done) {
    var self2 = this || _global$13;
    _global$13.clearTimeout(self2._socketTimer);
    self2._socketTimer = null;
    if (done) {
      _global$13.clearTimeout(self2._fetchTimer);
      self2._fetchTimer = null;
    } else if (self2._socketTimeout) {
      self2._socketTimer = _global$13.setTimeout(function() {
        self2.emit("timeout");
      }, self2._socketTimeout);
    }
  };
  ClientRequest3.prototype.abort = ClientRequest3.prototype.destroy = function(err) {
    var self2 = this || _global$13;
    self2._destroyed = true;
    self2._resetTimers(true);
    if (self2._response)
      self2._response._destroyed = true;
    if (self2._xhr)
      self2._xhr.abort();
    else if (self2._fetchAbortController)
      self2._fetchAbortController.abort();
    if (err)
      self2.emit("error", err);
  };
  ClientRequest3.prototype.end = function(data, encoding, cb) {
    var self2 = this || _global$13;
    if (typeof data === "function") {
      cb = data;
      data = void 0;
    }
    stream.Writable.prototype.end.call(self2, data, encoding, cb);
  };
  ClientRequest3.prototype.setTimeout = function(timeout, cb) {
    var self2 = this || _global$13;
    if (cb)
      self2.once("timeout", cb);
    self2._socketTimeout = timeout;
    self2._resetTimers(false);
  };
  ClientRequest3.prototype.flushHeaders = function() {
  };
  ClientRequest3.prototype.setNoDelay = function() {
  };
  ClientRequest3.prototype.setSocketKeepAlive = function() {
  };
  var unsafeHeaders = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"];
  return exports$43;
}
var exports$33 = {};
var _dewExec$23 = false;
function dew$23() {
  if (_dewExec$23)
    return exports$33;
  _dewExec$23 = true;
  exports$33 = extend2;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function extend2() {
    var target = {};
    for (var i5 = 0; i5 < arguments.length; i5++) {
      var source = arguments[i5];
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }
  return exports$33;
}
var exports$25 = {};
var _dewExec$15 = false;
function dew$15() {
  if (_dewExec$15)
    return exports$25;
  _dewExec$15 = true;
  exports$25 = {
    "100": "Continue",
    "101": "Switching Protocols",
    "102": "Processing",
    "200": "OK",
    "201": "Created",
    "202": "Accepted",
    "203": "Non-Authoritative Information",
    "204": "No Content",
    "205": "Reset Content",
    "206": "Partial Content",
    "207": "Multi-Status",
    "208": "Already Reported",
    "226": "IM Used",
    "300": "Multiple Choices",
    "301": "Moved Permanently",
    "302": "Found",
    "303": "See Other",
    "304": "Not Modified",
    "305": "Use Proxy",
    "307": "Temporary Redirect",
    "308": "Permanent Redirect",
    "400": "Bad Request",
    "401": "Unauthorized",
    "402": "Payment Required",
    "403": "Forbidden",
    "404": "Not Found",
    "405": "Method Not Allowed",
    "406": "Not Acceptable",
    "407": "Proxy Authentication Required",
    "408": "Request Timeout",
    "409": "Conflict",
    "410": "Gone",
    "411": "Length Required",
    "412": "Precondition Failed",
    "413": "Payload Too Large",
    "414": "URI Too Long",
    "415": "Unsupported Media Type",
    "416": "Range Not Satisfiable",
    "417": "Expectation Failed",
    "418": "I'm a teapot",
    "421": "Misdirected Request",
    "422": "Unprocessable Entity",
    "423": "Locked",
    "424": "Failed Dependency",
    "425": "Unordered Collection",
    "426": "Upgrade Required",
    "428": "Precondition Required",
    "429": "Too Many Requests",
    "431": "Request Header Fields Too Large",
    "451": "Unavailable For Legal Reasons",
    "500": "Internal Server Error",
    "501": "Not Implemented",
    "502": "Bad Gateway",
    "503": "Service Unavailable",
    "504": "Gateway Timeout",
    "505": "HTTP Version Not Supported",
    "506": "Variant Also Negotiates",
    "507": "Insufficient Storage",
    "508": "Loop Detected",
    "509": "Bandwidth Limit Exceeded",
    "510": "Not Extended",
    "511": "Network Authentication Required"
  };
  return exports$25;
}
var exports$1$12 = {};
var _dewExec$63 = false;
var _global$42 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$63() {
  if (_dewExec$63)
    return exports$1$12;
  _dewExec$63 = true;
  var ClientRequest3 = dew$33();
  var response = dew$43();
  var extend2 = dew$23();
  var statusCodes = dew$15();
  var url = h3;
  var http = exports$1$12;
  http.request = function(opts, cb) {
    if (typeof opts === "string")
      opts = url.parse(opts);
    else
      opts = extend2(opts);
    var defaultProtocol = _global$42.location.protocol.search(/^https?:$/) === -1 ? "http:" : "";
    var protocol = opts.protocol || defaultProtocol;
    var host = opts.hostname || opts.host;
    var port = opts.port;
    var path2 = opts.path || "/";
    if (host && host.indexOf(":") !== -1)
      host = "[" + host + "]";
    opts.url = (host ? protocol + "//" + host : "") + (port ? ":" + port : "") + path2;
    opts.method = (opts.method || "GET").toUpperCase();
    opts.headers = opts.headers || {};
    var req = new ClientRequest3(opts);
    if (cb)
      req.on("response", cb);
    return req;
  };
  http.get = function get4(opts, cb) {
    var req = http.request(opts, cb);
    req.end();
    return req;
  };
  http.ClientRequest = ClientRequest3;
  http.IncomingMessage = response.IncomingMessage;
  http.Agent = function() {
  };
  http.Agent.defaultMaxSockets = 4;
  http.globalAgent = new http.Agent();
  http.STATUS_CODES = statusCodes;
  http.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"];
  return exports$1$12;
}
var exports$73 = dew$63();
exports$73.Agent;
exports$73.ClientRequest;
exports$73.IncomingMessage;
exports$73.METHODS;
exports$73.STATUS_CODES;
exports$73.get;
exports$73.globalAgent;
exports$73.request;
var exports$15 = {};
var _dewExec9 = false;
var _global5 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew10() {
  if (_dewExec9)
    return exports$15;
  _dewExec9 = true;
  var http = exports$73;
  var url = h3;
  var https = exports$15;
  for (var key in http) {
    if (http.hasOwnProperty(key))
      https[key] = http[key];
  }
  https.request = function(params, cb) {
    params = validateParams(params);
    return http.request.call(this || _global5, params, cb);
  };
  https.get = function(params, cb) {
    params = validateParams(params);
    return http.get.call(this || _global5, params, cb);
  };
  function validateParams(params) {
    if (typeof params === "string") {
      params = url.parse(params);
    }
    if (!params.protocol) {
      params.protocol = "https:";
    }
    if (params.protocol !== "https:") {
      throw new Error('Protocol "' + params.protocol + '" not supported. Expected "https:"');
    }
    return params;
  }
  return exports$15;
}
var exports9 = dew10();
var Agent2 = exports9.Agent;
var ClientRequest2 = exports9.ClientRequest;
var IncomingMessage2 = exports9.IncomingMessage;
var METHODS2 = exports9.METHODS;
var STATUS_CODES2 = exports9.STATUS_CODES;
var get3 = exports9.get;
var globalAgent2 = exports9.globalAgent;
var request2 = exports9.request;

// node_modules/@jspm/core/nodelibs/browser/url.js
init_dirname();
init_buffer();
init_process();

// node_modules/@jspm/core/nodelibs/browser/punycode.js
init_dirname();
init_buffer();
init_process();
var exports$16 = {};
var _dewExec10 = false;
function dew11() {
  if (_dewExec10)
    return exports$16;
  _dewExec10 = true;
  const maxInt = 2147483647;
  const base = 36;
  const tMin = 1;
  const tMax = 26;
  const skew = 38;
  const damp = 700;
  const initialBias = 72;
  const initialN = 128;
  const delimiter = "-";
  const regexPunycode = /^xn--/;
  const regexNonASCII = /[^\0-\x7F]/;
  const regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
  const errors = {
    "overflow": "Overflow: input needs wider integers to process",
    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
    "invalid-input": "Invalid input"
  };
  const baseMinusTMin = base - tMin;
  const floor = Math.floor;
  const stringFromCharCode = String.fromCharCode;
  function error2(type) {
    throw new RangeError(errors[type]);
  }
  function map(array, callback) {
    const result = [];
    let length = array.length;
    while (length--) {
      result[length] = callback(array[length]);
    }
    return result;
  }
  function mapDomain(domain2, callback) {
    const parts = domain2.split("@");
    let result = "";
    if (parts.length > 1) {
      result = parts[0] + "@";
      domain2 = parts[1];
    }
    domain2 = domain2.replace(regexSeparators, ".");
    const labels = domain2.split(".");
    const encoded = map(labels, callback).join(".");
    return result + encoded;
  }
  function ucs2decode(string) {
    const output = [];
    let counter = 0;
    const length = string.length;
    while (counter < length) {
      const value = string.charCodeAt(counter++);
      if (value >= 55296 && value <= 56319 && counter < length) {
        const extra = string.charCodeAt(counter++);
        if ((extra & 64512) == 56320) {
          output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
        } else {
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }
    return output;
  }
  const ucs2encode = (codePoints) => String.fromCodePoint(...codePoints);
  const basicToDigit = function(codePoint) {
    if (codePoint >= 48 && codePoint < 58) {
      return 26 + (codePoint - 48);
    }
    if (codePoint >= 65 && codePoint < 91) {
      return codePoint - 65;
    }
    if (codePoint >= 97 && codePoint < 123) {
      return codePoint - 97;
    }
    return base;
  };
  const digitToBasic = function(digit, flag) {
    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  };
  const adapt = function(delta, numPoints, firstTime) {
    let k3 = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);
    for (; delta > baseMinusTMin * tMax >> 1; k3 += base) {
      delta = floor(delta / baseMinusTMin);
    }
    return floor(k3 + (baseMinusTMin + 1) * delta / (delta + skew));
  };
  const decode2 = function(input) {
    const output = [];
    const inputLength = input.length;
    let i5 = 0;
    let n5 = initialN;
    let bias = initialBias;
    let basic = input.lastIndexOf(delimiter);
    if (basic < 0) {
      basic = 0;
    }
    for (let j3 = 0; j3 < basic; ++j3) {
      if (input.charCodeAt(j3) >= 128) {
        error2("not-basic");
      }
      output.push(input.charCodeAt(j3));
    }
    for (let index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
      const oldi = i5;
      for (let w3 = 1, k3 = base; ; k3 += base) {
        if (index >= inputLength) {
          error2("invalid-input");
        }
        const digit = basicToDigit(input.charCodeAt(index++));
        if (digit >= base) {
          error2("invalid-input");
        }
        if (digit > floor((maxInt - i5) / w3)) {
          error2("overflow");
        }
        i5 += digit * w3;
        const t5 = k3 <= bias ? tMin : k3 >= bias + tMax ? tMax : k3 - bias;
        if (digit < t5) {
          break;
        }
        const baseMinusT = base - t5;
        if (w3 > floor(maxInt / baseMinusT)) {
          error2("overflow");
        }
        w3 *= baseMinusT;
      }
      const out = output.length + 1;
      bias = adapt(i5 - oldi, out, oldi == 0);
      if (floor(i5 / out) > maxInt - n5) {
        error2("overflow");
      }
      n5 += floor(i5 / out);
      i5 %= out;
      output.splice(i5++, 0, n5);
    }
    return String.fromCodePoint(...output);
  };
  const encode2 = function(input) {
    const output = [];
    input = ucs2decode(input);
    const inputLength = input.length;
    let n5 = initialN;
    let delta = 0;
    let bias = initialBias;
    for (const currentValue of input) {
      if (currentValue < 128) {
        output.push(stringFromCharCode(currentValue));
      }
    }
    const basicLength = output.length;
    let handledCPCount = basicLength;
    if (basicLength) {
      output.push(delimiter);
    }
    while (handledCPCount < inputLength) {
      let m4 = maxInt;
      for (const currentValue of input) {
        if (currentValue >= n5 && currentValue < m4) {
          m4 = currentValue;
        }
      }
      const handledCPCountPlusOne = handledCPCount + 1;
      if (m4 - n5 > floor((maxInt - delta) / handledCPCountPlusOne)) {
        error2("overflow");
      }
      delta += (m4 - n5) * handledCPCountPlusOne;
      n5 = m4;
      for (const currentValue of input) {
        if (currentValue < n5 && ++delta > maxInt) {
          error2("overflow");
        }
        if (currentValue === n5) {
          let q2 = delta;
          for (let k3 = base; ; k3 += base) {
            const t5 = k3 <= bias ? tMin : k3 >= bias + tMax ? tMax : k3 - bias;
            if (q2 < t5) {
              break;
            }
            const qMinusT = q2 - t5;
            const baseMinusT = base - t5;
            output.push(stringFromCharCode(digitToBasic(t5 + qMinusT % baseMinusT, 0)));
            q2 = floor(qMinusT / baseMinusT);
          }
          output.push(stringFromCharCode(digitToBasic(q2, 0)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
          delta = 0;
          ++handledCPCount;
        }
      }
      ++delta;
      ++n5;
    }
    return output.join("");
  };
  const toUnicode2 = function(input) {
    return mapDomain(input, function(string) {
      return regexPunycode.test(string) ? decode2(string.slice(4).toLowerCase()) : string;
    });
  };
  const toASCII2 = function(input) {
    return mapDomain(input, function(string) {
      return regexNonASCII.test(string) ? "xn--" + encode2(string) : string;
    });
  };
  const punycode = {
    /**
     * A string representing the current Punycode.js version number.
     * @memberOf punycode
     * @type String
     */
    "version": "2.3.1",
    /**
     * An object of methods to convert from JavaScript's internal character
     * representation (UCS-2) to Unicode code points, and back.
     * @see <https://mathiasbynens.be/notes/javascript-encoding>
     * @memberOf punycode
     * @type Object
     */
    "ucs2": {
      "decode": ucs2decode,
      "encode": ucs2encode
    },
    "decode": decode2,
    "encode": encode2,
    "toASCII": toASCII2,
    "toUnicode": toUnicode2
  };
  exports$16 = punycode;
  return exports$16;
}
var exports10 = dew11();
var decode = exports10.decode;
var encode = exports10.encode;
var toASCII = exports10.toASCII;
var toUnicode = exports10.toUnicode;
var ucs2 = exports10.ucs2;
var version2 = exports10.version;

// node_modules/@jspm/core/nodelibs/browser/chunk-DtcTpLWz.js
init_dirname();
init_buffer();
init_process();
var exports$k2 = {};
var _dewExec$k2 = false;
function dew$k2() {
  if (_dewExec$k2)
    return exports$k2;
  _dewExec$k2 = true;
  exports$k2 = function hasSymbols() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
      return false;
    }
    if (typeof Symbol.iterator === "symbol") {
      return true;
    }
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") {
      return false;
    }
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
      return false;
    }
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
      return false;
    }
    var symVal = 42;
    obj[sym] = symVal;
    for (sym in obj) {
      return false;
    }
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
      return false;
    }
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
      return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
      return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
      return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
      if (descriptor.value !== symVal || descriptor.enumerable !== true) {
        return false;
      }
    }
    return true;
  };
  return exports$k2;
}
var exports$j2 = {};
var _dewExec$j2 = false;
function dew$j2() {
  if (_dewExec$j2)
    return exports$j2;
  _dewExec$j2 = true;
  exports$j2 = Error;
  return exports$j2;
}
var exports$i2 = {};
var _dewExec$i2 = false;
function dew$i2() {
  if (_dewExec$i2)
    return exports$i2;
  _dewExec$i2 = true;
  exports$i2 = EvalError;
  return exports$i2;
}
var exports$h2 = {};
var _dewExec$h2 = false;
function dew$h2() {
  if (_dewExec$h2)
    return exports$h2;
  _dewExec$h2 = true;
  exports$h2 = RangeError;
  return exports$h2;
}
var exports$g3 = {};
var _dewExec$g3 = false;
function dew$g3() {
  if (_dewExec$g3)
    return exports$g3;
  _dewExec$g3 = true;
  exports$g3 = ReferenceError;
  return exports$g3;
}
var exports$f3 = {};
var _dewExec$f3 = false;
function dew$f3() {
  if (_dewExec$f3)
    return exports$f3;
  _dewExec$f3 = true;
  exports$f3 = SyntaxError;
  return exports$f3;
}
var exports$e3 = {};
var _dewExec$e3 = false;
function dew$e3() {
  if (_dewExec$e3)
    return exports$e3;
  _dewExec$e3 = true;
  exports$e3 = TypeError;
  return exports$e3;
}
var exports$d3 = {};
var _dewExec$d3 = false;
function dew$d3() {
  if (_dewExec$d3)
    return exports$d3;
  _dewExec$d3 = true;
  exports$d3 = URIError;
  return exports$d3;
}
var exports$c3 = {};
var _dewExec$c3 = false;
function dew$c3() {
  if (_dewExec$c3)
    return exports$c3;
  _dewExec$c3 = true;
  var origSymbol = typeof Symbol !== "undefined" && Symbol;
  var hasSymbolSham = dew$k2();
  exports$c3 = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") {
      return false;
    }
    if (typeof Symbol !== "function") {
      return false;
    }
    if (typeof origSymbol("foo") !== "symbol") {
      return false;
    }
    if (typeof Symbol("bar") !== "symbol") {
      return false;
    }
    return hasSymbolSham();
  };
  return exports$c3;
}
var exports$b3 = {};
var _dewExec$b3 = false;
function dew$b3() {
  if (_dewExec$b3)
    return exports$b3;
  _dewExec$b3 = true;
  var test = {
    __proto__: null,
    foo: {}
  };
  var $Object = Object;
  exports$b3 = function hasProto() {
    return {
      __proto__: test
    }.foo === test.foo && !(test instanceof $Object);
  };
  return exports$b3;
}
var exports$a3 = {};
var _dewExec$a3 = false;
function dew$a3() {
  if (_dewExec$a3)
    return exports$a3;
  _dewExec$a3 = true;
  var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
  var toStr = Object.prototype.toString;
  var max = Math.max;
  var funcType = "[object Function]";
  var concatty = function concatty2(a5, b4) {
    var arr = [];
    for (var i5 = 0; i5 < a5.length; i5 += 1) {
      arr[i5] = a5[i5];
    }
    for (var j3 = 0; j3 < b4.length; j3 += 1) {
      arr[j3 + a5.length] = b4[j3];
    }
    return arr;
  };
  var slicy = function slicy2(arrLike, offset) {
    var arr = [];
    for (var i5 = offset, j3 = 0; i5 < arrLike.length; i5 += 1, j3 += 1) {
      arr[j3] = arrLike[i5];
    }
    return arr;
  };
  var joiny = function(arr, joiner) {
    var str = "";
    for (var i5 = 0; i5 < arr.length; i5 += 1) {
      str += arr[i5];
      if (i5 + 1 < arr.length) {
        str += joiner;
      }
    }
    return str;
  };
  exports$a3 = function bind(that) {
    var target = this;
    if (typeof target !== "function" || toStr.apply(target) !== funcType) {
      throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
      if (this instanceof bound) {
        var result = target.apply(this, concatty(args, arguments));
        if (Object(result) === result) {
          return result;
        }
        return this;
      }
      return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for (var i5 = 0; i5 < boundLength; i5++) {
      boundArgs[i5] = "$" + i5;
    }
    bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
      var Empty = function Empty2() {
      };
      Empty.prototype = target.prototype;
      bound.prototype = new Empty();
      Empty.prototype = null;
    }
    return bound;
  };
  return exports$a3;
}
var exports$93 = {};
var _dewExec$93 = false;
function dew$93() {
  if (_dewExec$93)
    return exports$93;
  _dewExec$93 = true;
  var implementation = dew$a3();
  exports$93 = Function.prototype.bind || implementation;
  return exports$93;
}
var exports$83 = {};
var _dewExec$83 = false;
function dew$83() {
  if (_dewExec$83)
    return exports$83;
  _dewExec$83 = true;
  var call = Function.prototype.call;
  var $hasOwn = Object.prototype.hasOwnProperty;
  var bind = dew$93();
  exports$83 = bind.call(call, $hasOwn);
  return exports$83;
}
var exports$74 = {};
var _dewExec$73 = false;
function dew$73() {
  if (_dewExec$73)
    return exports$74;
  _dewExec$73 = true;
  var undefined$1;
  var $Error = dew$j2();
  var $EvalError = dew$i2();
  var $RangeError = dew$h2();
  var $ReferenceError = dew$g3();
  var $SyntaxError = dew$f3();
  var $TypeError = dew$e3();
  var $URIError = dew$d3();
  var $Function = Function;
  var getEvalledConstructor = function(expressionSyntax) {
    try {
      return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e5) {
    }
  };
  var $gOPD = Object.getOwnPropertyDescriptor;
  if ($gOPD) {
    try {
      $gOPD({}, "");
    } catch (e5) {
      $gOPD = null;
    }
  }
  var throwTypeError = function() {
    throw new $TypeError();
  };
  var ThrowTypeError = $gOPD ? function() {
    try {
      arguments.callee;
      return throwTypeError;
    } catch (calleeThrows) {
      try {
        return $gOPD(arguments, "callee").get;
      } catch (gOPDthrows) {
        return throwTypeError;
      }
    }
  }() : throwTypeError;
  var hasSymbols = dew$c3()();
  var hasProto = dew$b3()();
  var getProto = Object.getPrototypeOf || (hasProto ? function(x3) {
    return x3.__proto__;
  } : null);
  var needsEval = {};
  var TypedArray2 = typeof Uint8Array === "undefined" || !getProto ? undefined$1 : getProto(Uint8Array);
  var INTRINSICS = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined$1,
    "%AsyncFromSyncIteratorPrototype%": undefined$1,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
    "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined$1 : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined$1 : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": $Error,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": $EvalError,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
    "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
    "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined$1 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
    "%RangeError%": $RangeError,
    "%ReferenceError%": $ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined$1 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined$1,
    "%Symbol%": hasSymbols ? Symbol : undefined$1,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray2,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
    "%URIError%": $URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet
  };
  if (getProto) {
    try {
      null.error;
    } catch (e5) {
      var errorProto = getProto(getProto(e5));
      INTRINSICS["%Error.prototype%"] = errorProto;
    }
  }
  var doEval = function doEval2(name2) {
    var value;
    if (name2 === "%AsyncFunction%") {
      value = getEvalledConstructor("async function () {}");
    } else if (name2 === "%GeneratorFunction%") {
      value = getEvalledConstructor("function* () {}");
    } else if (name2 === "%AsyncGeneratorFunction%") {
      value = getEvalledConstructor("async function* () {}");
    } else if (name2 === "%AsyncGenerator%") {
      var fn = doEval2("%AsyncGeneratorFunction%");
      if (fn) {
        value = fn.prototype;
      }
    } else if (name2 === "%AsyncIteratorPrototype%") {
      var gen = doEval2("%AsyncGenerator%");
      if (gen && getProto) {
        value = getProto(gen.prototype);
      }
    }
    INTRINSICS[name2] = value;
    return value;
  };
  var LEGACY_ALIASES = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  };
  var bind = dew$93();
  var hasOwn = dew$83();
  var $concat = bind.call(Function.call, Array.prototype.concat);
  var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
  var $replace = bind.call(Function.call, String.prototype.replace);
  var $strSlice = bind.call(Function.call, String.prototype.slice);
  var $exec = bind.call(Function.call, RegExp.prototype.exec);
  var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = function stringToPath2(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    } else if (last === "%" && first !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
      result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
    });
    return result;
  };
  var getBaseIntrinsic = function getBaseIntrinsic2(name2, allowMissing) {
    var intrinsicName = name2;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
      alias = LEGACY_ALIASES[intrinsicName];
      intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
      var value = INTRINSICS[intrinsicName];
      if (value === needsEval) {
        value = doEval(intrinsicName);
      }
      if (typeof value === "undefined" && !allowMissing) {
        throw new $TypeError("intrinsic " + name2 + " exists, but is not available. Please file an issue!");
      }
      return {
        alias,
        name: intrinsicName,
        value
      };
    }
    throw new $SyntaxError("intrinsic " + name2 + " does not exist!");
  };
  exports$74 = function GetIntrinsic(name2, allowMissing) {
    if (typeof name2 !== "string" || name2.length === 0) {
      throw new $TypeError("intrinsic name must be a non-empty string");
    }
    if (arguments.length > 1 && typeof allowMissing !== "boolean") {
      throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name2) === null) {
      throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    }
    var parts = stringToPath(name2);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
      intrinsicBaseName = alias[0];
      $spliceApply(parts, $concat([0, 1], alias));
    }
    for (var i5 = 1, isOwn = true; i5 < parts.length; i5 += 1) {
      var part = parts[i5];
      var first = $strSlice(part, 0, 1);
      var last = $strSlice(part, -1);
      if ((first === '"' || first === "'" || first === "`" || last === '"' || last === "'" || last === "`") && first !== last) {
        throw new $SyntaxError("property names with quotes must have matching quotes");
      }
      if (part === "constructor" || !isOwn) {
        skipFurtherCaching = true;
      }
      intrinsicBaseName += "." + part;
      intrinsicRealName = "%" + intrinsicBaseName + "%";
      if (hasOwn(INTRINSICS, intrinsicRealName)) {
        value = INTRINSICS[intrinsicRealName];
      } else if (value != null) {
        if (!(part in value)) {
          if (!allowMissing) {
            throw new $TypeError("base intrinsic for " + name2 + " exists, but the property is not available.");
          }
          return void 0;
        }
        if ($gOPD && i5 + 1 >= parts.length) {
          var desc = $gOPD(value, part);
          isOwn = !!desc;
          if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
            value = desc.get;
          } else {
            value = value[part];
          }
        } else {
          isOwn = hasOwn(value, part);
          value = value[part];
        }
        if (isOwn && !skipFurtherCaching) {
          INTRINSICS[intrinsicRealName] = value;
        }
      }
    }
    return value;
  };
  return exports$74;
}
var exports$64 = {};
var _dewExec$64 = false;
function dew$64() {
  if (_dewExec$64)
    return exports$64;
  _dewExec$64 = true;
  var GetIntrinsic = dew$73();
  var $defineProperty = GetIntrinsic("%Object.defineProperty%", true) || false;
  if ($defineProperty) {
    try {
      $defineProperty({}, "a", {
        value: 1
      });
    } catch (e5) {
      $defineProperty = false;
    }
  }
  exports$64 = $defineProperty;
  return exports$64;
}
var exports$54 = {};
var _dewExec$54 = false;
function dew$54() {
  if (_dewExec$54)
    return exports$54;
  _dewExec$54 = true;
  var GetIntrinsic = dew$73();
  var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
  if ($gOPD) {
    try {
      $gOPD([], "length");
    } catch (e5) {
      $gOPD = null;
    }
  }
  exports$54 = $gOPD;
  return exports$54;
}
var exports$44 = {};
var _dewExec$44 = false;
function dew$44() {
  if (_dewExec$44)
    return exports$44;
  _dewExec$44 = true;
  var $defineProperty = dew$64();
  var $SyntaxError = dew$f3();
  var $TypeError = dew$e3();
  var gopd = dew$54();
  exports$44 = function defineDataProperty(obj, property, value) {
    if (!obj || typeof obj !== "object" && typeof obj !== "function") {
      throw new $TypeError("`obj` must be an object or a function`");
    }
    if (typeof property !== "string" && typeof property !== "symbol") {
      throw new $TypeError("`property` must be a string or a symbol`");
    }
    if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
      throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
    }
    if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
      throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
    }
    if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
      throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
    }
    if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
      throw new $TypeError("`loose`, if provided, must be a boolean");
    }
    var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
    var nonWritable = arguments.length > 4 ? arguments[4] : null;
    var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
    var loose = arguments.length > 6 ? arguments[6] : false;
    var desc = !!gopd && gopd(obj, property);
    if ($defineProperty) {
      $defineProperty(obj, property, {
        configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
        enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
        value,
        writable: nonWritable === null && desc ? desc.writable : !nonWritable
      });
    } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
      obj[property] = value;
    } else {
      throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
    }
  };
  return exports$44;
}
var exports$34 = {};
var _dewExec$34 = false;
function dew$34() {
  if (_dewExec$34)
    return exports$34;
  _dewExec$34 = true;
  var $defineProperty = dew$64();
  var hasPropertyDescriptors = function hasPropertyDescriptors2() {
    return !!$defineProperty;
  };
  hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    if (!$defineProperty) {
      return null;
    }
    try {
      return $defineProperty([], "length", {
        value: 1
      }).length !== 1;
    } catch (e5) {
      return true;
    }
  };
  exports$34 = hasPropertyDescriptors;
  return exports$34;
}
var exports$26 = {};
var _dewExec$24 = false;
function dew$24() {
  if (_dewExec$24)
    return exports$26;
  _dewExec$24 = true;
  var GetIntrinsic = dew$73();
  var define = dew$44();
  var hasDescriptors = dew$34()();
  var gOPD = dew$54();
  var $TypeError = dew$e3();
  var $floor = GetIntrinsic("%Math.floor%");
  exports$26 = function setFunctionLength(fn, length) {
    if (typeof fn !== "function") {
      throw new $TypeError("`fn` is not a function");
    }
    if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
      throw new $TypeError("`length` must be a positive 32-bit integer");
    }
    var loose = arguments.length > 2 && !!arguments[2];
    var functionLengthIsConfigurable = true;
    var functionLengthIsWritable = true;
    if ("length" in fn && gOPD) {
      var desc = gOPD(fn, "length");
      if (desc && !desc.configurable) {
        functionLengthIsConfigurable = false;
      }
      if (desc && !desc.writable) {
        functionLengthIsWritable = false;
      }
    }
    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
      if (hasDescriptors) {
        define(
          /** @type {Parameters<define>[0]} */
          fn,
          "length",
          length,
          true,
          true
        );
      } else {
        define(
          /** @type {Parameters<define>[0]} */
          fn,
          "length",
          length
        );
      }
    }
    return fn;
  };
  return exports$26;
}
var exports$17 = {};
var _dewExec$16 = false;
function dew$16() {
  if (_dewExec$16)
    return exports$17;
  _dewExec$16 = true;
  var bind = dew$93();
  var GetIntrinsic = dew$73();
  var setFunctionLength = dew$24();
  var $TypeError = dew$e3();
  var $apply = GetIntrinsic("%Function.prototype.apply%");
  var $call = GetIntrinsic("%Function.prototype.call%");
  var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
  var $defineProperty = dew$64();
  var $max = GetIntrinsic("%Math.max%");
  exports$17 = function callBind(originalFunction) {
    if (typeof originalFunction !== "function") {
      throw new $TypeError("a function is required");
    }
    var func = $reflectApply(bind, $call, arguments);
    return setFunctionLength(func, 1 + $max(0, originalFunction.length - (arguments.length - 1)), true);
  };
  var applyBind = function applyBind2() {
    return $reflectApply(bind, $apply, arguments);
  };
  if ($defineProperty) {
    $defineProperty(exports$17, "apply", {
      value: applyBind
    });
  } else {
    exports$17.apply = applyBind;
  }
  return exports$17;
}
var exports11 = {};
var _dewExec11 = false;
function dew12() {
  if (_dewExec11)
    return exports11;
  _dewExec11 = true;
  var GetIntrinsic = dew$73();
  var callBind = dew$16();
  var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
  exports11 = function callBoundIntrinsic(name2, allowMissing) {
    var intrinsic = GetIntrinsic(name2, !!allowMissing);
    if (typeof intrinsic === "function" && $indexOf(name2, ".prototype.") > -1) {
      return callBind(intrinsic);
    }
    return intrinsic;
  };
  return exports11;
}

// node_modules/@jspm/core/nodelibs/browser/chunk-BlJi4mNy.js
init_dirname();
init_buffer();
init_process();
var exports$18 = {};
var _dewExec12 = false;
function dew13() {
  if (_dewExec12)
    return exports$18;
  _dewExec12 = true;
  var process$1 = process;
  function assertPath(path2) {
    if (typeof path2 !== "string") {
      throw new TypeError("Path must be a string. Received " + JSON.stringify(path2));
    }
  }
  function normalizeStringPosix(path2, allowAboveRoot) {
    var res = "";
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for (var i5 = 0; i5 <= path2.length; ++i5) {
      if (i5 < path2.length)
        code = path2.charCodeAt(i5);
      else if (code === 47)
        break;
      else
        code = 47;
      if (code === 47) {
        if (lastSlash === i5 - 1 || dots === 1)
          ;
        else if (lastSlash !== i5 - 1 && dots === 2) {
          if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
            if (res.length > 2) {
              var lastSlashIndex = res.lastIndexOf("/");
              if (lastSlashIndex !== res.length - 1) {
                if (lastSlashIndex === -1) {
                  res = "";
                  lastSegmentLength = 0;
                } else {
                  res = res.slice(0, lastSlashIndex);
                  lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                }
                lastSlash = i5;
                dots = 0;
                continue;
              }
            } else if (res.length === 2 || res.length === 1) {
              res = "";
              lastSegmentLength = 0;
              lastSlash = i5;
              dots = 0;
              continue;
            }
          }
          if (allowAboveRoot) {
            if (res.length > 0)
              res += "/..";
            else
              res = "..";
            lastSegmentLength = 2;
          }
        } else {
          if (res.length > 0)
            res += "/" + path2.slice(lastSlash + 1, i5);
          else
            res = path2.slice(lastSlash + 1, i5);
          lastSegmentLength = i5 - lastSlash - 1;
        }
        lastSlash = i5;
        dots = 0;
      } else if (code === 46 && dots !== -1) {
        ++dots;
      } else {
        dots = -1;
      }
    }
    return res;
  }
  function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) {
      return base;
    }
    if (dir === pathObject.root) {
      return dir + base;
    }
    return dir + sep + base;
  }
  var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve2() {
      var resolvedPath = "";
      var resolvedAbsolute = false;
      var cwd2;
      for (var i5 = arguments.length - 1; i5 >= -1 && !resolvedAbsolute; i5--) {
        var path2;
        if (i5 >= 0)
          path2 = arguments[i5];
        else {
          if (cwd2 === void 0)
            cwd2 = process$1.cwd();
          path2 = cwd2;
        }
        assertPath(path2);
        if (path2.length === 0) {
          continue;
        }
        resolvedPath = path2 + "/" + resolvedPath;
        resolvedAbsolute = path2.charCodeAt(0) === 47;
      }
      resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
      if (resolvedAbsolute) {
        if (resolvedPath.length > 0)
          return "/" + resolvedPath;
        else
          return "/";
      } else if (resolvedPath.length > 0) {
        return resolvedPath;
      } else {
        return ".";
      }
    },
    normalize: function normalize(path2) {
      assertPath(path2);
      if (path2.length === 0)
        return ".";
      var isAbsolute = path2.charCodeAt(0) === 47;
      var trailingSeparator = path2.charCodeAt(path2.length - 1) === 47;
      path2 = normalizeStringPosix(path2, !isAbsolute);
      if (path2.length === 0 && !isAbsolute)
        path2 = ".";
      if (path2.length > 0 && trailingSeparator)
        path2 += "/";
      if (isAbsolute)
        return "/" + path2;
      return path2;
    },
    isAbsolute: function isAbsolute(path2) {
      assertPath(path2);
      return path2.length > 0 && path2.charCodeAt(0) === 47;
    },
    join: function join() {
      if (arguments.length === 0)
        return ".";
      var joined;
      for (var i5 = 0; i5 < arguments.length; ++i5) {
        var arg = arguments[i5];
        assertPath(arg);
        if (arg.length > 0) {
          if (joined === void 0)
            joined = arg;
          else
            joined += "/" + arg;
        }
      }
      if (joined === void 0)
        return ".";
      return posix.normalize(joined);
    },
    relative: function relative(from, to) {
      assertPath(from);
      assertPath(to);
      if (from === to)
        return "";
      from = posix.resolve(from);
      to = posix.resolve(to);
      if (from === to)
        return "";
      var fromStart = 1;
      for (; fromStart < from.length; ++fromStart) {
        if (from.charCodeAt(fromStart) !== 47)
          break;
      }
      var fromEnd = from.length;
      var fromLen = fromEnd - fromStart;
      var toStart = 1;
      for (; toStart < to.length; ++toStart) {
        if (to.charCodeAt(toStart) !== 47)
          break;
      }
      var toEnd = to.length;
      var toLen = toEnd - toStart;
      var length = fromLen < toLen ? fromLen : toLen;
      var lastCommonSep = -1;
      var i5 = 0;
      for (; i5 <= length; ++i5) {
        if (i5 === length) {
          if (toLen > length) {
            if (to.charCodeAt(toStart + i5) === 47) {
              return to.slice(toStart + i5 + 1);
            } else if (i5 === 0) {
              return to.slice(toStart + i5);
            }
          } else if (fromLen > length) {
            if (from.charCodeAt(fromStart + i5) === 47) {
              lastCommonSep = i5;
            } else if (i5 === 0) {
              lastCommonSep = 0;
            }
          }
          break;
        }
        var fromCode2 = from.charCodeAt(fromStart + i5);
        var toCode = to.charCodeAt(toStart + i5);
        if (fromCode2 !== toCode)
          break;
        else if (fromCode2 === 47)
          lastCommonSep = i5;
      }
      var out = "";
      for (i5 = fromStart + lastCommonSep + 1; i5 <= fromEnd; ++i5) {
        if (i5 === fromEnd || from.charCodeAt(i5) === 47) {
          if (out.length === 0)
            out += "..";
          else
            out += "/..";
        }
      }
      if (out.length > 0)
        return out + to.slice(toStart + lastCommonSep);
      else {
        toStart += lastCommonSep;
        if (to.charCodeAt(toStart) === 47)
          ++toStart;
        return to.slice(toStart);
      }
    },
    _makeLong: function _makeLong(path2) {
      return path2;
    },
    dirname: function dirname(path2) {
      assertPath(path2);
      if (path2.length === 0)
        return ".";
      var code = path2.charCodeAt(0);
      var hasRoot = code === 47;
      var end = -1;
      var matchedSlash = true;
      for (var i5 = path2.length - 1; i5 >= 1; --i5) {
        code = path2.charCodeAt(i5);
        if (code === 47) {
          if (!matchedSlash) {
            end = i5;
            break;
          }
        } else {
          matchedSlash = false;
        }
      }
      if (end === -1)
        return hasRoot ? "/" : ".";
      if (hasRoot && end === 1)
        return "//";
      return path2.slice(0, end);
    },
    basename: function basename(path2, ext) {
      if (ext !== void 0 && typeof ext !== "string")
        throw new TypeError('"ext" argument must be a string');
      assertPath(path2);
      var start = 0;
      var end = -1;
      var matchedSlash = true;
      var i5;
      if (ext !== void 0 && ext.length > 0 && ext.length <= path2.length) {
        if (ext.length === path2.length && ext === path2)
          return "";
        var extIdx = ext.length - 1;
        var firstNonSlashEnd = -1;
        for (i5 = path2.length - 1; i5 >= 0; --i5) {
          var code = path2.charCodeAt(i5);
          if (code === 47) {
            if (!matchedSlash) {
              start = i5 + 1;
              break;
            }
          } else {
            if (firstNonSlashEnd === -1) {
              matchedSlash = false;
              firstNonSlashEnd = i5 + 1;
            }
            if (extIdx >= 0) {
              if (code === ext.charCodeAt(extIdx)) {
                if (--extIdx === -1) {
                  end = i5;
                }
              } else {
                extIdx = -1;
                end = firstNonSlashEnd;
              }
            }
          }
        }
        if (start === end)
          end = firstNonSlashEnd;
        else if (end === -1)
          end = path2.length;
        return path2.slice(start, end);
      } else {
        for (i5 = path2.length - 1; i5 >= 0; --i5) {
          if (path2.charCodeAt(i5) === 47) {
            if (!matchedSlash) {
              start = i5 + 1;
              break;
            }
          } else if (end === -1) {
            matchedSlash = false;
            end = i5 + 1;
          }
        }
        if (end === -1)
          return "";
        return path2.slice(start, end);
      }
    },
    extname: function extname(path2) {
      assertPath(path2);
      var startDot = -1;
      var startPart = 0;
      var end = -1;
      var matchedSlash = true;
      var preDotState = 0;
      for (var i5 = path2.length - 1; i5 >= 0; --i5) {
        var code = path2.charCodeAt(i5);
        if (code === 47) {
          if (!matchedSlash) {
            startPart = i5 + 1;
            break;
          }
          continue;
        }
        if (end === -1) {
          matchedSlash = false;
          end = i5 + 1;
        }
        if (code === 46) {
          if (startDot === -1)
            startDot = i5;
          else if (preDotState !== 1)
            preDotState = 1;
        } else if (startDot !== -1) {
          preDotState = -1;
        }
      }
      if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        return "";
      }
      return path2.slice(startDot, end);
    },
    format: function format2(pathObject) {
      if (pathObject === null || typeof pathObject !== "object") {
        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
      }
      return _format("/", pathObject);
    },
    parse: function parse2(path2) {
      assertPath(path2);
      var ret = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
      };
      if (path2.length === 0)
        return ret;
      var code = path2.charCodeAt(0);
      var isAbsolute = code === 47;
      var start;
      if (isAbsolute) {
        ret.root = "/";
        start = 1;
      } else {
        start = 0;
      }
      var startDot = -1;
      var startPart = 0;
      var end = -1;
      var matchedSlash = true;
      var i5 = path2.length - 1;
      var preDotState = 0;
      for (; i5 >= start; --i5) {
        code = path2.charCodeAt(i5);
        if (code === 47) {
          if (!matchedSlash) {
            startPart = i5 + 1;
            break;
          }
          continue;
        }
        if (end === -1) {
          matchedSlash = false;
          end = i5 + 1;
        }
        if (code === 46) {
          if (startDot === -1)
            startDot = i5;
          else if (preDotState !== 1)
            preDotState = 1;
        } else if (startDot !== -1) {
          preDotState = -1;
        }
      }
      if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        if (end !== -1) {
          if (startPart === 0 && isAbsolute)
            ret.base = ret.name = path2.slice(1, end);
          else
            ret.base = ret.name = path2.slice(startPart, end);
        }
      } else {
        if (startPart === 0 && isAbsolute) {
          ret.name = path2.slice(1, startDot);
          ret.base = path2.slice(1, end);
        } else {
          ret.name = path2.slice(startPart, startDot);
          ret.base = path2.slice(startPart, end);
        }
        ret.ext = path2.slice(startDot, end);
      }
      if (startPart > 0)
        ret.dir = path2.slice(0, startPart - 1);
      else if (isAbsolute)
        ret.dir = "/";
      return ret;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
  };
  posix.posix = posix;
  exports$18 = posix;
  return exports$18;
}
var exports12 = dew13();

// node_modules/@jspm/core/nodelibs/browser/url.js
var empty = Object.freeze(/* @__PURE__ */ Object.create(null));
var exports$84 = {};
var _dewExec$74 = false;
var _global6 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;
function dew$74() {
  if (_dewExec$74)
    return exports$84;
  _dewExec$74 = true;
  var hasMap = typeof Map === "function" && Map.prototype;
  var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
  var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
  var mapForEach = hasMap && Map.prototype.forEach;
  var hasSet = typeof Set === "function" && Set.prototype;
  var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
  var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
  var setForEach = hasSet && Set.prototype.forEach;
  var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
  var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
  var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
  var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
  var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
  var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
  var booleanValueOf = Boolean.prototype.valueOf;
  var objectToString = Object.prototype.toString;
  var functionToString = Function.prototype.toString;
  var $match = String.prototype.match;
  var $slice = String.prototype.slice;
  var $replace = String.prototype.replace;
  var $toUpperCase = String.prototype.toUpperCase;
  var $toLowerCase = String.prototype.toLowerCase;
  var $test = RegExp.prototype.test;
  var $concat = Array.prototype.concat;
  var $join = Array.prototype.join;
  var $arrSlice = Array.prototype.slice;
  var $floor = Math.floor;
  var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
  var gOPS = Object.getOwnPropertySymbols;
  var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
  var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
  var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
  var isEnumerable = Object.prototype.propertyIsEnumerable;
  var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O4) {
    return O4.__proto__;
  } : null);
  function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
      return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === "number") {
      var int = num < 0 ? -$floor(-num) : $floor(num);
      if (int !== num) {
        var intStr = String(int);
        var dec = $slice.call(str, intStr.length + 1);
        return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return $replace.call(str, sepRegex, "$&_");
  }
  var utilInspect = empty;
  var inspectCustom = utilInspect.custom;
  var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
  exports$84 = function inspect_(obj, options, depth, seen) {
    var opts = options || {};
    if (has(opts, "quoteStyle") && opts.quoteStyle !== "single" && opts.quoteStyle !== "double") {
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
    if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    }
    if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === "undefined") {
      return "undefined";
    }
    if (obj === null) {
      return "null";
    }
    if (typeof obj === "boolean") {
      return obj ? "true" : "false";
    }
    if (typeof obj === "string") {
      return inspectString(obj, opts);
    }
    if (typeof obj === "number") {
      if (obj === 0) {
        return Infinity / obj > 0 ? "0" : "-0";
      }
      var str = String(obj);
      return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === "bigint") {
      var bigIntStr = String(obj) + "n";
      return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
    if (typeof depth === "undefined") {
      depth = 0;
    }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
      return isArray(obj) ? "[Array]" : "[Object]";
    }
    var indent = getIndent(opts, depth);
    if (typeof seen === "undefined") {
      seen = [];
    } else if (indexOf(seen, obj) >= 0) {
      return "[Circular]";
    }
    function inspect(value, from, noIndent) {
      if (from) {
        seen = $arrSlice.call(seen);
        seen.push(from);
      }
      if (noIndent) {
        var newOpts = {
          depth: opts.depth
        };
        if (has(opts, "quoteStyle")) {
          newOpts.quoteStyle = opts.quoteStyle;
        }
        return inspect_(value, newOpts, depth + 1, seen);
      }
      return inspect_(value, opts, depth + 1, seen);
    }
    if (typeof obj === "function" && !isRegExp(obj)) {
      var name2 = nameOf(obj);
      var keys = arrObjKeys(obj, inspect);
      return "[Function" + (name2 ? ": " + name2 : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
    }
    if (isSymbol(obj)) {
      var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
      return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
      var s5 = "<" + $toLowerCase.call(String(obj.nodeName));
      var attrs = obj.attributes || [];
      for (var i5 = 0; i5 < attrs.length; i5++) {
        s5 += " " + attrs[i5].name + "=" + wrapQuotes(quote(attrs[i5].value), "double", opts);
      }
      s5 += ">";
      if (obj.childNodes && obj.childNodes.length) {
        s5 += "...";
      }
      s5 += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
      return s5;
    }
    if (isArray(obj)) {
      if (obj.length === 0) {
        return "[]";
      }
      var xs = arrObjKeys(obj, inspect);
      if (indent && !singleLineValues(xs)) {
        return "[" + indentedJoin(xs, indent) + "]";
      }
      return "[ " + $join.call(xs, ", ") + " ]";
    }
    if (isError(obj)) {
      var parts = arrObjKeys(obj, inspect);
      if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
        return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
      }
      if (parts.length === 0) {
        return "[" + String(obj) + "]";
      }
      return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
    }
    if (typeof obj === "object" && customInspect) {
      if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
        return utilInspect(obj, {
          depth: maxDepth - depth
        });
      } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
        return obj.inspect();
      }
    }
    if (isMap(obj)) {
      var mapParts = [];
      if (mapForEach) {
        mapForEach.call(obj, function(value, key) {
          mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
        });
      }
      return collectionOf("Map", mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
      var setParts = [];
      if (setForEach) {
        setForEach.call(obj, function(value) {
          setParts.push(inspect(value, obj));
        });
      }
      return collectionOf("Set", setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
      return weakCollectionOf("WeakMap");
    }
    if (isWeakSet(obj)) {
      return weakCollectionOf("WeakSet");
    }
    if (isWeakRef(obj)) {
      return weakCollectionOf("WeakRef");
    }
    if (isNumber(obj)) {
      return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
      return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
      return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
      return markBoxed(inspect(String(obj)));
    }
    if (typeof window !== "undefined" && obj === window) {
      return "{ [object Window] }";
    }
    if (typeof globalThis !== "undefined" && obj === globalThis || typeof _global6 !== "undefined" && obj === _global6) {
      return "{ [object globalThis] }";
    }
    if (!isDate(obj) && !isRegExp(obj)) {
      var ys = arrObjKeys(obj, inspect);
      var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
      var protoTag = obj instanceof Object ? "" : "null prototype";
      var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
      var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
      var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
      if (ys.length === 0) {
        return tag + "{}";
      }
      if (indent) {
        return tag + "{" + indentedJoin(ys, indent) + "}";
      }
      return tag + "{ " + $join.call(ys, ", ") + " }";
    }
    return String(obj);
  };
  function wrapQuotes(s5, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
    return quoteChar + s5 + quoteChar;
  }
  function quote(s5) {
    return $replace.call(String(s5), /"/g, "&quot;");
  }
  function isArray(obj) {
    return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
  }
  function isDate(obj) {
    return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
  }
  function isRegExp(obj) {
    return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
  }
  function isError(obj) {
    return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
  }
  function isString(obj) {
    return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
  }
  function isNumber(obj) {
    return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
  }
  function isBoolean(obj) {
    return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
  }
  function isSymbol(obj) {
    if (hasShammedSymbols) {
      return obj && typeof obj === "object" && obj instanceof Symbol;
    }
    if (typeof obj === "symbol") {
      return true;
    }
    if (!obj || typeof obj !== "object" || !symToString) {
      return false;
    }
    try {
      symToString.call(obj);
      return true;
    } catch (e5) {
    }
    return false;
  }
  function isBigInt(obj) {
    if (!obj || typeof obj !== "object" || !bigIntValueOf) {
      return false;
    }
    try {
      bigIntValueOf.call(obj);
      return true;
    } catch (e5) {
    }
    return false;
  }
  var hasOwn = Object.prototype.hasOwnProperty || function(key) {
    return key in (this || _global6);
  };
  function has(obj, key) {
    return hasOwn.call(obj, key);
  }
  function toStr(obj) {
    return objectToString.call(obj);
  }
  function nameOf(f5) {
    if (f5.name) {
      return f5.name;
    }
    var m4 = $match.call(functionToString.call(f5), /^function\s*([\w$]+)/);
    if (m4) {
      return m4[1];
    }
    return null;
  }
  function indexOf(xs, x3) {
    if (xs.indexOf) {
      return xs.indexOf(x3);
    }
    for (var i5 = 0, l5 = xs.length; i5 < l5; i5++) {
      if (xs[i5] === x3) {
        return i5;
      }
    }
    return -1;
  }
  function isMap(x3) {
    if (!mapSize || !x3 || typeof x3 !== "object") {
      return false;
    }
    try {
      mapSize.call(x3);
      try {
        setSize.call(x3);
      } catch (s5) {
        return true;
      }
      return x3 instanceof Map;
    } catch (e5) {
    }
    return false;
  }
  function isWeakMap(x3) {
    if (!weakMapHas || !x3 || typeof x3 !== "object") {
      return false;
    }
    try {
      weakMapHas.call(x3, weakMapHas);
      try {
        weakSetHas.call(x3, weakSetHas);
      } catch (s5) {
        return true;
      }
      return x3 instanceof WeakMap;
    } catch (e5) {
    }
    return false;
  }
  function isWeakRef(x3) {
    if (!weakRefDeref || !x3 || typeof x3 !== "object") {
      return false;
    }
    try {
      weakRefDeref.call(x3);
      return true;
    } catch (e5) {
    }
    return false;
  }
  function isSet(x3) {
    if (!setSize || !x3 || typeof x3 !== "object") {
      return false;
    }
    try {
      setSize.call(x3);
      try {
        mapSize.call(x3);
      } catch (m4) {
        return true;
      }
      return x3 instanceof Set;
    } catch (e5) {
    }
    return false;
  }
  function isWeakSet(x3) {
    if (!weakSetHas || !x3 || typeof x3 !== "object") {
      return false;
    }
    try {
      weakSetHas.call(x3, weakSetHas);
      try {
        weakMapHas.call(x3, weakMapHas);
      } catch (s5) {
        return true;
      }
      return x3 instanceof WeakSet;
    } catch (e5) {
    }
    return false;
  }
  function isElement(x3) {
    if (!x3 || typeof x3 !== "object") {
      return false;
    }
    if (typeof HTMLElement !== "undefined" && x3 instanceof HTMLElement) {
      return true;
    }
    return typeof x3.nodeName === "string" && typeof x3.getAttribute === "function";
  }
  function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
      var remaining = str.length - opts.maxStringLength;
      var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
      return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    var s5 = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s5, "single", opts);
  }
  function lowbyte(c5) {
    var n5 = c5.charCodeAt(0);
    var x3 = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[n5];
    if (x3) {
      return "\\" + x3;
    }
    return "\\x" + (n5 < 16 ? "0" : "") + $toUpperCase.call(n5.toString(16));
  }
  function markBoxed(str) {
    return "Object(" + str + ")";
  }
  function weakCollectionOf(type) {
    return type + " { ? }";
  }
  function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
    return type + " (" + size + ") {" + joinedEntries + "}";
  }
  function singleLineValues(xs) {
    for (var i5 = 0; i5 < xs.length; i5++) {
      if (indexOf(xs[i5], "\n") >= 0) {
        return false;
      }
    }
    return true;
  }
  function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === "	") {
      baseIndent = "	";
    } else if (typeof opts.indent === "number" && opts.indent > 0) {
      baseIndent = $join.call(Array(opts.indent + 1), " ");
    } else {
      return null;
    }
    return {
      base: baseIndent,
      prev: $join.call(Array(depth + 1), baseIndent)
    };
  }
  function indentedJoin(xs, indent) {
    if (xs.length === 0) {
      return "";
    }
    var lineJoiner = "\n" + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
  }
  function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
      xs.length = obj.length;
      for (var i5 = 0; i5 < obj.length; i5++) {
        xs[i5] = has(obj, i5) ? inspect(obj[i5], obj) : "";
      }
    }
    var syms = typeof gOPS === "function" ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
      symMap = {};
      for (var k3 = 0; k3 < syms.length; k3++) {
        symMap["$" + syms[k3]] = syms[k3];
      }
    }
    for (var key in obj) {
      if (!has(obj, key)) {
        continue;
      }
      if (isArr && String(Number(key)) === key && key < obj.length) {
        continue;
      }
      if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
        continue;
      } else if ($test.call(/[^\w$]/, key)) {
        xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
      } else {
        xs.push(key + ": " + inspect(obj[key], obj));
      }
    }
    if (typeof gOPS === "function") {
      for (var j3 = 0; j3 < syms.length; j3++) {
        if (isEnumerable.call(obj, syms[j3])) {
          xs.push("[" + inspect(syms[j3]) + "]: " + inspect(obj[syms[j3]], obj));
        }
      }
    }
    return xs;
  }
  return exports$84;
}
var exports$75 = {};
var _dewExec$65 = false;
function dew$65() {
  if (_dewExec$65)
    return exports$75;
  _dewExec$65 = true;
  var GetIntrinsic = dew$73();
  var callBound = dew12();
  var inspect = dew$74();
  var $TypeError = dew$e3();
  var $WeakMap = GetIntrinsic("%WeakMap%", true);
  var $Map = GetIntrinsic("%Map%", true);
  var $weakMapGet = callBound("WeakMap.prototype.get", true);
  var $weakMapSet = callBound("WeakMap.prototype.set", true);
  var $weakMapHas = callBound("WeakMap.prototype.has", true);
  var $mapGet = callBound("Map.prototype.get", true);
  var $mapSet = callBound("Map.prototype.set", true);
  var $mapHas = callBound("Map.prototype.has", true);
  var listGetNode = function(list, key) {
    var prev = list;
    var curr;
    for (; (curr = prev.next) !== null; prev = curr) {
      if (curr.key === key) {
        prev.next = curr.next;
        curr.next = /** @type {NonNullable<typeof list.next>} */
        list.next;
        list.next = curr;
        return curr;
      }
    }
  };
  var listGet = function(objects, key) {
    var node = listGetNode(objects, key);
    return node && node.value;
  };
  var listSet = function(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) {
      node.value = value;
    } else {
      objects.next = /** @type {import('.').ListNode<typeof value>} */
      {
        // eslint-disable-line no-param-reassign, no-extra-parens
        key,
        next: objects.next,
        value
      };
    }
  };
  var listHas = function(objects, key) {
    return !!listGetNode(objects, key);
  };
  exports$75 = function getSideChannel() {
    var $wm;
    var $m;
    var $o;
    var channel = {
      assert: function(key) {
        if (!channel.has(key)) {
          throw new $TypeError("Side channel does not contain " + inspect(key));
        }
      },
      get: function(key) {
        if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
          if ($wm) {
            return $weakMapGet($wm, key);
          }
        } else if ($Map) {
          if ($m) {
            return $mapGet($m, key);
          }
        } else {
          if ($o) {
            return listGet($o, key);
          }
        }
      },
      has: function(key) {
        if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
          if ($wm) {
            return $weakMapHas($wm, key);
          }
        } else if ($Map) {
          if ($m) {
            return $mapHas($m, key);
          }
        } else {
          if ($o) {
            return listHas($o, key);
          }
        }
        return false;
      },
      set: function(key, value) {
        if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
          if (!$wm) {
            $wm = new $WeakMap();
          }
          $weakMapSet($wm, key, value);
        } else if ($Map) {
          if (!$m) {
            $m = new $Map();
          }
          $mapSet($m, key, value);
        } else {
          if (!$o) {
            $o = {
              key: {},
              next: null
            };
          }
          listSet($o, key, value);
        }
      }
    };
    return channel;
  };
  return exports$75;
}
var exports$65 = {};
var _dewExec$55 = false;
function dew$55() {
  if (_dewExec$55)
    return exports$65;
  _dewExec$55 = true;
  var replace = String.prototype.replace;
  var percentTwenties = /%20/g;
  var Format = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  exports$65 = {
    "default": Format.RFC3986,
    formatters: {
      RFC1738: function(value) {
        return replace.call(value, percentTwenties, "+");
      },
      RFC3986: function(value) {
        return String(value);
      }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
  };
  return exports$65;
}
var exports$55 = {};
var _dewExec$45 = false;
function dew$45() {
  if (_dewExec$45)
    return exports$55;
  _dewExec$45 = true;
  var formats = dew$55();
  var has = Object.prototype.hasOwnProperty;
  var isArray = Array.isArray;
  var hexTable = function() {
    var array = [];
    for (var i5 = 0; i5 < 256; ++i5) {
      array.push("%" + ((i5 < 16 ? "0" : "") + i5.toString(16)).toUpperCase());
    }
    return array;
  }();
  var compactQueue = function compactQueue2(queue2) {
    while (queue2.length > 1) {
      var item = queue2.pop();
      var obj = item.obj[item.prop];
      if (isArray(obj)) {
        var compacted = [];
        for (var j3 = 0; j3 < obj.length; ++j3) {
          if (typeof obj[j3] !== "undefined") {
            compacted.push(obj[j3]);
          }
        }
        item.obj[item.prop] = compacted;
      }
    }
  };
  var arrayToObject = function arrayToObject2(source, options) {
    var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    for (var i5 = 0; i5 < source.length; ++i5) {
      if (typeof source[i5] !== "undefined") {
        obj[i5] = source[i5];
      }
    }
    return obj;
  };
  var merge = function merge2(target, source, options) {
    if (!source) {
      return target;
    }
    if (typeof source !== "object") {
      if (isArray(target)) {
        target.push(source);
      } else if (target && typeof target === "object") {
        if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
          target[source] = true;
        }
      } else {
        return [target, source];
      }
      return target;
    }
    if (!target || typeof target !== "object") {
      return [target].concat(source);
    }
    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
      mergeTarget = arrayToObject(target, options);
    }
    if (isArray(target) && isArray(source)) {
      source.forEach(function(item, i5) {
        if (has.call(target, i5)) {
          var targetItem = target[i5];
          if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
            target[i5] = merge2(targetItem, item, options);
          } else {
            target.push(item);
          }
        } else {
          target[i5] = item;
        }
      });
      return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
      var value = source[key];
      if (has.call(acc, key)) {
        acc[key] = merge2(acc[key], value, options);
      } else {
        acc[key] = value;
      }
      return acc;
    }, mergeTarget);
  };
  var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
      acc[key] = source[key];
      return acc;
    }, target);
  };
  var decode2 = function(str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, " ");
    if (charset === "iso-8859-1") {
      return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    try {
      return decodeURIComponent(strWithoutPlus);
    } catch (e5) {
      return strWithoutPlus;
    }
  };
  var limit = 1024;
  var encode2 = function encode3(str, defaultEncoder, charset, kind, format2) {
    if (str.length === 0) {
      return str;
    }
    var string = str;
    if (typeof str === "symbol") {
      string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== "string") {
      string = String(str);
    }
    if (charset === "iso-8859-1") {
      return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
        return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
      });
    }
    var out = "";
    for (var j3 = 0; j3 < string.length; j3 += limit) {
      var segment = string.length >= limit ? string.slice(j3, j3 + limit) : string;
      var arr = [];
      for (var i5 = 0; i5 < segment.length; ++i5) {
        var c5 = segment.charCodeAt(i5);
        if (c5 === 45 || c5 === 46 || c5 === 95 || c5 === 126 || c5 >= 48 && c5 <= 57 || c5 >= 65 && c5 <= 90 || c5 >= 97 && c5 <= 122 || format2 === formats.RFC1738 && (c5 === 40 || c5 === 41)) {
          arr[arr.length] = segment.charAt(i5);
          continue;
        }
        if (c5 < 128) {
          arr[arr.length] = hexTable[c5];
          continue;
        }
        if (c5 < 2048) {
          arr[arr.length] = hexTable[192 | c5 >> 6] + hexTable[128 | c5 & 63];
          continue;
        }
        if (c5 < 55296 || c5 >= 57344) {
          arr[arr.length] = hexTable[224 | c5 >> 12] + hexTable[128 | c5 >> 6 & 63] + hexTable[128 | c5 & 63];
          continue;
        }
        i5 += 1;
        c5 = 65536 + ((c5 & 1023) << 10 | segment.charCodeAt(i5) & 1023);
        arr[arr.length] = hexTable[240 | c5 >> 18] + hexTable[128 | c5 >> 12 & 63] + hexTable[128 | c5 >> 6 & 63] + hexTable[128 | c5 & 63];
      }
      out += arr.join("");
    }
    return out;
  };
  var compact = function compact2(value) {
    var queue2 = [{
      obj: {
        o: value
      },
      prop: "o"
    }];
    var refs = [];
    for (var i5 = 0; i5 < queue2.length; ++i5) {
      var item = queue2[i5];
      var obj = item.obj[item.prop];
      var keys = Object.keys(obj);
      for (var j3 = 0; j3 < keys.length; ++j3) {
        var key = keys[j3];
        var val = obj[key];
        if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
          queue2.push({
            obj,
            prop: key
          });
          refs.push(val);
        }
      }
    }
    compactQueue(queue2);
    return value;
  };
  var isRegExp = function isRegExp2(obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
  };
  var isBuffer = function isBuffer2(obj) {
    if (!obj || typeof obj !== "object") {
      return false;
    }
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
  };
  var combine = function combine2(a5, b4) {
    return [].concat(a5, b4);
  };
  var maybeMap = function maybeMap2(val, fn) {
    if (isArray(val)) {
      var mapped = [];
      for (var i5 = 0; i5 < val.length; i5 += 1) {
        mapped.push(fn(val[i5]));
      }
      return mapped;
    }
    return fn(val);
  };
  exports$55 = {
    arrayToObject,
    assign,
    combine,
    compact,
    decode: decode2,
    encode: encode2,
    isBuffer,
    isRegExp,
    maybeMap,
    merge
  };
  return exports$55;
}
var exports$45 = {};
var _dewExec$35 = false;
function dew$35() {
  if (_dewExec$35)
    return exports$45;
  _dewExec$35 = true;
  var getSideChannel = dew$65();
  var utils = dew$45();
  var formats = dew$55();
  var has = Object.prototype.hasOwnProperty;
  var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
      return prefix + "[]";
    },
    comma: "comma",
    indices: function indices(prefix, key) {
      return prefix + "[" + key + "]";
    },
    repeat: function repeat(prefix) {
      return prefix;
    }
  };
  var isArray = Array.isArray;
  var push = Array.prototype.push;
  var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
  };
  var toISO = Date.prototype.toISOString;
  var defaultFormat = formats["default"];
  var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    allowEmptyArrays: false,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: false,
    delimiter: "&",
    encode: true,
    encodeDotInKeys: false,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
      return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
  };
  var isNonNullishPrimitive = function isNonNullishPrimitive2(v5) {
    return typeof v5 === "string" || typeof v5 === "number" || typeof v5 === "boolean" || typeof v5 === "symbol" || typeof v5 === "bigint";
  };
  var sentinel = {};
  var stringify = function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format2, formatter, encodeValuesOnly, charset, sideChannel) {
    var obj = object;
    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
      var pos = tmpSc.get(object);
      step += 1;
      if (typeof pos !== "undefined") {
        if (pos === step) {
          throw new RangeError("Cyclic object value");
        } else {
          findFlag = true;
        }
      }
      if (typeof tmpSc.get(sentinel) === "undefined") {
        step = 0;
      }
    }
    if (typeof filter === "function") {
      obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
      obj = serializeDate(obj);
    } else if (generateArrayPrefix === "comma" && isArray(obj)) {
      obj = utils.maybeMap(obj, function(value2) {
        if (value2 instanceof Date) {
          return serializeDate(value2);
        }
        return value2;
      });
    }
    if (obj === null) {
      if (strictNullHandling) {
        return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format2) : prefix;
      }
      obj = "";
    }
    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
      if (encoder) {
        var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format2);
        return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format2))];
      }
      return [formatter(prefix) + "=" + formatter(String(obj))];
    }
    var values2 = [];
    if (typeof obj === "undefined") {
      return values2;
    }
    var objKeys;
    if (generateArrayPrefix === "comma" && isArray(obj)) {
      if (encodeValuesOnly && encoder) {
        obj = utils.maybeMap(obj, encoder);
      }
      objKeys = [{
        value: obj.length > 0 ? obj.join(",") || null : void 0
      }];
    } else if (isArray(filter)) {
      objKeys = filter;
    } else {
      var keys = Object.keys(obj);
      objKeys = sort ? keys.sort(sort) : keys;
    }
    var encodedPrefix = encodeDotInKeys ? prefix.replace(/\./g, "%2E") : prefix;
    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
    if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
      return adjustedPrefix + "[]";
    }
    for (var j3 = 0; j3 < objKeys.length; ++j3) {
      var key = objKeys[j3];
      var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
      if (skipNulls && value === null) {
        continue;
      }
      var encodedKey = allowDots && encodeDotInKeys ? key.replace(/\./g, "%2E") : key;
      var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
      sideChannel.set(object, step);
      var valueSideChannel = getSideChannel();
      valueSideChannel.set(sentinel, sideChannel);
      pushToArray(values2, stringify2(value, keyPrefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format2, formatter, encodeValuesOnly, charset, valueSideChannel));
    }
    return values2;
  };
  var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
    if (!opts) {
      return defaults;
    }
    if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    }
    if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    }
    if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
      throw new TypeError("Encoder has to be a function.");
    }
    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    }
    var format2 = formats["default"];
    if (typeof opts.format !== "undefined") {
      if (!has.call(formats.formatters, opts.format)) {
        throw new TypeError("Unknown format option provided.");
      }
      format2 = opts.format;
    }
    var formatter = formats.formatters[format2];
    var filter = defaults.filter;
    if (typeof opts.filter === "function" || isArray(opts.filter)) {
      filter = opts.filter;
    }
    var arrayFormat;
    if (opts.arrayFormat in arrayPrefixGenerators) {
      arrayFormat = opts.arrayFormat;
    } else if ("indices" in opts) {
      arrayFormat = opts.indices ? "indices" : "repeat";
    } else {
      arrayFormat = defaults.arrayFormat;
    }
    if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    }
    var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
    return {
      addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
      allowDots,
      allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
      arrayFormat,
      charset,
      charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
      commaRoundTrip: opts.commaRoundTrip,
      delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
      encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
      encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
      encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
      encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
      filter,
      format: format2,
      formatter,
      serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
      skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
      sort: typeof opts.sort === "function" ? opts.sort : null,
      strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
    };
  };
  exports$45 = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter;
    if (typeof options.filter === "function") {
      filter = options.filter;
      obj = filter("", obj);
    } else if (isArray(options.filter)) {
      filter = options.filter;
      objKeys = filter;
    }
    var keys = [];
    if (typeof obj !== "object" || obj === null) {
      return "";
    }
    var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
    var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
    if (!objKeys) {
      objKeys = Object.keys(obj);
    }
    if (options.sort) {
      objKeys.sort(options.sort);
    }
    var sideChannel = getSideChannel();
    for (var i5 = 0; i5 < objKeys.length; ++i5) {
      var key = objKeys[i5];
      if (options.skipNulls && obj[key] === null) {
        continue;
      }
      pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, commaRoundTrip, options.allowEmptyArrays, options.strictNullHandling, options.skipNulls, options.encodeDotInKeys, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? "?" : "";
    if (options.charsetSentinel) {
      if (options.charset === "iso-8859-1") {
        prefix += "utf8=%26%2310003%3B&";
      } else {
        prefix += "utf8=%E2%9C%93&";
      }
    }
    return joined.length > 0 ? prefix + joined : "";
  };
  return exports$45;
}
var exports$35 = {};
var _dewExec$25 = false;
function dew$25() {
  if (_dewExec$25)
    return exports$35;
  _dewExec$25 = true;
  var utils = dew$45();
  var has = Object.prototype.hasOwnProperty;
  var isArray = Array.isArray;
  var defaults = {
    allowDots: false,
    allowEmptyArrays: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: false,
    comma: false,
    decodeDotInKeys: false,
    decoder: utils.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1e3,
    parseArrays: true,
    plainObjects: false,
    strictDepth: false,
    strictNullHandling: false
  };
  var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
      return String.fromCharCode(parseInt(numberStr, 10));
    });
  };
  var parseArrayValue = function(val, options) {
    if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
      return val.split(",");
    }
    return val;
  };
  var isoSentinel = "utf8=%26%2310003%3B";
  var charsetSentinel = "utf8=%E2%9C%93";
  var parseValues = function parseQueryStringValues(str, options) {
    var obj = {
      __proto__: null
    };
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
    cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1;
    var i5;
    var charset = options.charset;
    if (options.charsetSentinel) {
      for (i5 = 0; i5 < parts.length; ++i5) {
        if (parts[i5].indexOf("utf8=") === 0) {
          if (parts[i5] === charsetSentinel) {
            charset = "utf-8";
          } else if (parts[i5] === isoSentinel) {
            charset = "iso-8859-1";
          }
          skipIndex = i5;
          i5 = parts.length;
        }
      }
    }
    for (i5 = 0; i5 < parts.length; ++i5) {
      if (i5 === skipIndex) {
        continue;
      }
      var part = parts[i5];
      var bracketEqualsPos = part.indexOf("]=");
      var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
      var key, val;
      if (pos === -1) {
        key = options.decoder(part, defaults.decoder, charset, "key");
        val = options.strictNullHandling ? null : "";
      } else {
        key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
        val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options), function(encodedVal) {
          return options.decoder(encodedVal, defaults.decoder, charset, "value");
        });
      }
      if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
        val = interpretNumericEntities(val);
      }
      if (part.indexOf("[]=") > -1) {
        val = isArray(val) ? [val] : val;
      }
      var existing = has.call(obj, key);
      if (existing && options.duplicates === "combine") {
        obj[key] = utils.combine(obj[key], val);
      } else if (!existing || options.duplicates === "last") {
        obj[key] = val;
      }
    }
    return obj;
  };
  var parseObject = function(chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);
    for (var i5 = chain.length - 1; i5 >= 0; --i5) {
      var obj;
      var root = chain[i5];
      if (root === "[]" && options.parseArrays) {
        obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : [].concat(leaf);
      } else {
        obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
        var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
        var index = parseInt(decodedRoot, 10);
        if (!options.parseArrays && decodedRoot === "") {
          obj = {
            0: leaf
          };
        } else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
          obj = [];
          obj[index] = leaf;
        } else if (decodedRoot !== "__proto__") {
          obj[decodedRoot] = leaf;
        }
      }
      leaf = obj;
    }
    return leaf;
  };
  var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
      return;
    }
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    var keys = [];
    if (parent) {
      if (!options.plainObjects && has.call(Object.prototype, parent)) {
        if (!options.allowPrototypes) {
          return;
        }
      }
      keys.push(parent);
    }
    var i5 = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i5 < options.depth) {
      i5 += 1;
      if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
        if (!options.allowPrototypes) {
          return;
        }
      }
      keys.push(segment[1]);
    }
    if (segment) {
      if (options.strictDepth === true) {
        throw new RangeError("Input depth exceeded depth option of " + options.depth + " and strictDepth is true");
      }
      keys.push("[" + key.slice(segment.index) + "]");
    }
    return parseObject(keys, val, options, valuesParsed);
  };
  var normalizeParseOptions = function normalizeParseOptions2(opts) {
    if (!opts) {
      return defaults;
    }
    if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    }
    if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    }
    if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
      throw new TypeError("Decoder has to be a function.");
    }
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    }
    var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
    var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
    if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
      throw new TypeError("The duplicates option must be either combine, first, or last");
    }
    var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
    return {
      allowDots,
      allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
      allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
      allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
      arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
      charset,
      charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
      comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
      decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
      decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
      delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
      duplicates,
      ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
      interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
      parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
      parseArrays: opts.parseArrays !== false,
      plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
      strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults.strictDepth,
      strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
    };
  };
  exports$35 = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === "" || str === null || typeof str === "undefined") {
      return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    }
    var tempObj = typeof str === "string" ? parseValues(str, options) : str;
    var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    var keys = Object.keys(tempObj);
    for (var i5 = 0; i5 < keys.length; ++i5) {
      var key = keys[i5];
      var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
      obj = utils.merge(obj, newObj, options);
    }
    if (options.allowSparse === true) {
      return obj;
    }
    return utils.compact(obj);
  };
  return exports$35;
}
var exports$27 = {};
var _dewExec$17 = false;
function dew$17() {
  if (_dewExec$17)
    return exports$27;
  _dewExec$17 = true;
  var stringify = dew$35();
  var parse2 = dew$25();
  var formats = dew$55();
  exports$27 = {
    formats,
    parse: parse2,
    stringify
  };
  return exports$27;
}
var exports$19 = {};
var _dewExec13 = false;
function dew14() {
  if (_dewExec13)
    return exports$19;
  _dewExec13 = true;
  var punycode = exports10;
  function Url2() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
  }
  var protocolPattern = /^([a-z0-9.+-]+:)/i, portPattern = /:[0-9]*$/, simplePathPattern = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/, delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"], unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims), autoEscape = ["'"].concat(unwise), nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape), hostEndingChars = ["/", "?", "#"], hostnameMaxLen = 255, hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/, hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, unsafeProtocol = {
    javascript: true,
    "javascript:": true
  }, hostlessProtocol = {
    javascript: true,
    "javascript:": true
  }, slashedProtocol = {
    http: true,
    https: true,
    ftp: true,
    gopher: true,
    file: true,
    "http:": true,
    "https:": true,
    "ftp:": true,
    "gopher:": true,
    "file:": true
  }, querystring = dew$17();
  function urlParse(url, parseQueryString, slashesDenoteHost) {
    if (url && typeof url === "object" && url instanceof Url2) {
      return url;
    }
    var u5 = new Url2();
    u5.parse(url, parseQueryString, slashesDenoteHost);
    return u5;
  }
  Url2.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
    if (typeof url !== "string") {
      throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
    }
    var queryIndex = url.indexOf("?"), splitter = queryIndex !== -1 && queryIndex < url.indexOf("#") ? "?" : "#", uSplit = url.split(splitter), slashRegex = /\\/g;
    uSplit[0] = uSplit[0].replace(slashRegex, "/");
    url = uSplit.join(splitter);
    var rest = url;
    rest = rest.trim();
    if (!slashesDenoteHost && url.split("#").length === 1) {
      var simplePath = simplePathPattern.exec(rest);
      if (simplePath) {
        this.path = rest;
        this.href = rest;
        this.pathname = simplePath[1];
        if (simplePath[2]) {
          this.search = simplePath[2];
          if (parseQueryString) {
            this.query = querystring.parse(this.search.substr(1));
          } else {
            this.query = this.search.substr(1);
          }
        } else if (parseQueryString) {
          this.search = "";
          this.query = {};
        }
        return this;
      }
    }
    var proto = protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      var lowerProto = proto.toLowerCase();
      this.protocol = lowerProto;
      rest = rest.substr(proto.length);
    }
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@/]+@[^@/]+/)) {
      var slashes = rest.substr(0, 2) === "//";
      if (slashes && !(proto && hostlessProtocol[proto])) {
        rest = rest.substr(2);
        this.slashes = true;
      }
    }
    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
      var hostEnd = -1;
      for (var i5 = 0; i5 < hostEndingChars.length; i5++) {
        var hec = rest.indexOf(hostEndingChars[i5]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
          hostEnd = hec;
        }
      }
      var auth, atSign;
      if (hostEnd === -1) {
        atSign = rest.lastIndexOf("@");
      } else {
        atSign = rest.lastIndexOf("@", hostEnd);
      }
      if (atSign !== -1) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        this.auth = decodeURIComponent(auth);
      }
      hostEnd = -1;
      for (var i5 = 0; i5 < nonHostChars.length; i5++) {
        var hec = rest.indexOf(nonHostChars[i5]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
          hostEnd = hec;
        }
      }
      if (hostEnd === -1) {
        hostEnd = rest.length;
      }
      this.host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd);
      this.parseHost();
      this.hostname = this.hostname || "";
      var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!ipv6Hostname) {
        var hostparts = this.hostname.split(/\./);
        for (var i5 = 0, l5 = hostparts.length; i5 < l5; i5++) {
          var part = hostparts[i5];
          if (!part) {
            continue;
          }
          if (!part.match(hostnamePartPattern)) {
            var newpart = "";
            for (var j3 = 0, k3 = part.length; j3 < k3; j3++) {
              if (part.charCodeAt(j3) > 127) {
                newpart += "x";
              } else {
                newpart += part[j3];
              }
            }
            if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i5);
              var notHost = hostparts.slice(i5 + 1);
              var bit = part.match(hostnamePartStart);
              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }
              if (notHost.length) {
                rest = "/" + notHost.join(".") + rest;
              }
              this.hostname = validParts.join(".");
              break;
            }
          }
        }
      }
      if (this.hostname.length > hostnameMaxLen) {
        this.hostname = "";
      } else {
        this.hostname = this.hostname.toLowerCase();
      }
      if (!ipv6Hostname) {
        this.hostname = punycode.toASCII(this.hostname);
      }
      var p5 = this.port ? ":" + this.port : "";
      var h5 = this.hostname || "";
      this.host = h5 + p5;
      this.href += this.host;
      if (ipv6Hostname) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        if (rest[0] !== "/") {
          rest = "/" + rest;
        }
      }
    }
    if (!unsafeProtocol[lowerProto]) {
      for (var i5 = 0, l5 = autoEscape.length; i5 < l5; i5++) {
        var ae2 = autoEscape[i5];
        if (rest.indexOf(ae2) === -1) {
          continue;
        }
        var esc = encodeURIComponent(ae2);
        if (esc === ae2) {
          esc = escape(ae2);
        }
        rest = rest.split(ae2).join(esc);
      }
    }
    var hash = rest.indexOf("#");
    if (hash !== -1) {
      this.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf("?");
    if (qm !== -1) {
      this.search = rest.substr(qm);
      this.query = rest.substr(qm + 1);
      if (parseQueryString) {
        this.query = querystring.parse(this.query);
      }
      rest = rest.slice(0, qm);
    } else if (parseQueryString) {
      this.search = "";
      this.query = {};
    }
    if (rest) {
      this.pathname = rest;
    }
    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
      this.pathname = "/";
    }
    if (this.pathname || this.search) {
      var p5 = this.pathname || "";
      var s5 = this.search || "";
      this.path = p5 + s5;
    }
    this.href = this.format();
    return this;
  };
  function urlFormat(obj) {
    if (typeof obj === "string") {
      obj = urlParse(obj);
    }
    if (!(obj instanceof Url2)) {
      return Url2.prototype.format.call(obj);
    }
    return obj.format();
  }
  Url2.prototype.format = function() {
    var auth = this.auth || "";
    if (auth) {
      auth = encodeURIComponent(auth);
      auth = auth.replace(/%3A/i, ":");
      auth += "@";
    }
    var protocol = this.protocol || "", pathname = this.pathname || "", hash = this.hash || "", host = false, query = "";
    if (this.host) {
      host = auth + this.host;
    } else if (this.hostname) {
      host = auth + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]");
      if (this.port) {
        host += ":" + this.port;
      }
    }
    if (this.query && typeof this.query === "object" && Object.keys(this.query).length) {
      query = querystring.stringify(this.query, {
        arrayFormat: "repeat",
        addQueryPrefix: false
      });
    }
    var search = this.search || query && "?" + query || "";
    if (protocol && protocol.substr(-1) !== ":") {
      protocol += ":";
    }
    if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
      host = "//" + (host || "");
      if (pathname && pathname.charAt(0) !== "/") {
        pathname = "/" + pathname;
      }
    } else if (!host) {
      host = "";
    }
    if (hash && hash.charAt(0) !== "#") {
      hash = "#" + hash;
    }
    if (search && search.charAt(0) !== "?") {
      search = "?" + search;
    }
    pathname = pathname.replace(/[?#]/g, function(match) {
      return encodeURIComponent(match);
    });
    search = search.replace("#", "%23");
    return protocol + host + pathname + search + hash;
  };
  function urlResolve(source, relative) {
    return urlParse(source, false, true).resolve(relative);
  }
  Url2.prototype.resolve = function(relative) {
    return this.resolveObject(urlParse(relative, false, true)).format();
  };
  function urlResolveObject(source, relative) {
    if (!source) {
      return relative;
    }
    return urlParse(source, false, true).resolveObject(relative);
  }
  Url2.prototype.resolveObject = function(relative) {
    if (typeof relative === "string") {
      var rel = new Url2();
      rel.parse(relative, false, true);
      relative = rel;
    }
    var result = new Url2();
    var tkeys = Object.keys(this);
    for (var tk = 0; tk < tkeys.length; tk++) {
      var tkey = tkeys[tk];
      result[tkey] = this[tkey];
    }
    result.hash = relative.hash;
    if (relative.href === "") {
      result.href = result.format();
      return result;
    }
    if (relative.slashes && !relative.protocol) {
      var rkeys = Object.keys(relative);
      for (var rk = 0; rk < rkeys.length; rk++) {
        var rkey = rkeys[rk];
        if (rkey !== "protocol") {
          result[rkey] = relative[rkey];
        }
      }
      if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
        result.pathname = "/";
        result.path = result.pathname;
      }
      result.href = result.format();
      return result;
    }
    if (relative.protocol && relative.protocol !== result.protocol) {
      if (!slashedProtocol[relative.protocol]) {
        var keys = Object.keys(relative);
        for (var v5 = 0; v5 < keys.length; v5++) {
          var k3 = keys[v5];
          result[k3] = relative[k3];
        }
        result.href = result.format();
        return result;
      }
      result.protocol = relative.protocol;
      if (!relative.host && !hostlessProtocol[relative.protocol]) {
        var relPath = (relative.pathname || "").split("/");
        while (relPath.length && !(relative.host = relPath.shift())) {
        }
        if (!relative.host) {
          relative.host = "";
        }
        if (!relative.hostname) {
          relative.hostname = "";
        }
        if (relPath[0] !== "") {
          relPath.unshift("");
        }
        if (relPath.length < 2) {
          relPath.unshift("");
        }
        result.pathname = relPath.join("/");
      } else {
        result.pathname = relative.pathname;
      }
      result.search = relative.search;
      result.query = relative.query;
      result.host = relative.host || "";
      result.auth = relative.auth;
      result.hostname = relative.hostname || relative.host;
      result.port = relative.port;
      if (result.pathname || result.search) {
        var p5 = result.pathname || "";
        var s5 = result.search || "";
        result.path = p5 + s5;
      }
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    }
    var isSourceAbs = result.pathname && result.pathname.charAt(0) === "/", isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === "/", mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split("/") || [], relPath = relative.pathname && relative.pathname.split("/") || [], psychotic = result.protocol && !slashedProtocol[result.protocol];
    if (psychotic) {
      result.hostname = "";
      result.port = null;
      if (result.host) {
        if (srcPath[0] === "") {
          srcPath[0] = result.host;
        } else {
          srcPath.unshift(result.host);
        }
      }
      result.host = "";
      if (relative.protocol) {
        relative.hostname = null;
        relative.port = null;
        if (relative.host) {
          if (relPath[0] === "") {
            relPath[0] = relative.host;
          } else {
            relPath.unshift(relative.host);
          }
        }
        relative.host = null;
      }
      mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
    }
    if (isRelAbs) {
      result.host = relative.host || relative.host === "" ? relative.host : result.host;
      result.hostname = relative.hostname || relative.hostname === "" ? relative.hostname : result.hostname;
      result.search = relative.search;
      result.query = relative.query;
      srcPath = relPath;
    } else if (relPath.length) {
      if (!srcPath) {
        srcPath = [];
      }
      srcPath.pop();
      srcPath = srcPath.concat(relPath);
      result.search = relative.search;
      result.query = relative.query;
    } else if (relative.search != null) {
      if (psychotic) {
        result.host = srcPath.shift();
        result.hostname = result.host;
        var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.hostname = authInHost.shift();
          result.host = result.hostname;
        }
      }
      result.search = relative.search;
      result.query = relative.query;
      if (result.pathname !== null || result.search !== null) {
        result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
      }
      result.href = result.format();
      return result;
    }
    if (!srcPath.length) {
      result.pathname = null;
      if (result.search) {
        result.path = "/" + result.search;
      } else {
        result.path = null;
      }
      result.href = result.format();
      return result;
    }
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === "." || last === "..") || last === "";
    var up = 0;
    for (var i5 = srcPath.length; i5 >= 0; i5--) {
      last = srcPath[i5];
      if (last === ".") {
        srcPath.splice(i5, 1);
      } else if (last === "..") {
        srcPath.splice(i5, 1);
        up++;
      } else if (up) {
        srcPath.splice(i5, 1);
        up--;
      }
    }
    if (!mustEndAbs && !removeAllDots) {
      for (; up--; up) {
        srcPath.unshift("..");
      }
    }
    if (mustEndAbs && srcPath[0] !== "" && (!srcPath[0] || srcPath[0].charAt(0) !== "/")) {
      srcPath.unshift("");
    }
    if (hasTrailingSlash && srcPath.join("/").substr(-1) !== "/") {
      srcPath.push("");
    }
    var isAbsolute = srcPath[0] === "" || srcPath[0] && srcPath[0].charAt(0) === "/";
    if (psychotic) {
      result.hostname = isAbsolute ? "" : srcPath.length ? srcPath.shift() : "";
      result.host = result.hostname;
      var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.hostname = authInHost.shift();
        result.host = result.hostname;
      }
    }
    mustEndAbs = mustEndAbs || result.host && srcPath.length;
    if (mustEndAbs && !isAbsolute) {
      srcPath.unshift("");
    }
    if (srcPath.length > 0) {
      result.pathname = srcPath.join("/");
    } else {
      result.pathname = null;
      result.path = null;
    }
    if (result.pathname !== null || result.search !== null) {
      result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
    }
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  };
  Url2.prototype.parseHost = function() {
    var host = this.host;
    var port = portPattern.exec(host);
    if (port) {
      port = port[0];
      if (port !== ":") {
        this.port = port.substr(1);
      }
      host = host.substr(0, host.length - port.length);
    }
    if (host) {
      this.hostname = host;
    }
  };
  exports$19.parse = urlParse;
  exports$19.resolve = urlResolve;
  exports$19.resolveObject = urlResolveObject;
  exports$19.format = urlFormat;
  exports$19.Url = Url2;
  return exports$19;
}
var exports13 = dew14();
exports13["parse"];
exports13["resolve"];
exports13["resolveObject"];
exports13["format"];
exports13["Url"];
var processPlatform2 = typeof Deno !== "undefined" ? Deno.build.os === "windows" ? "win32" : Deno.build.os : void 0;
exports13.URL = typeof URL !== "undefined" ? URL : null;
exports13.pathToFileURL = pathToFileURL2;
exports13.fileURLToPath = fileURLToPath2;
var Url = exports13.Url;
var format = exports13.format;
var resolve = exports13.resolve;
var resolveObject = exports13.resolveObject;
var parse = exports13.parse;
var _URL = exports13.URL;
var CHAR_BACKWARD_SLASH2 = 92;
var CHAR_FORWARD_SLASH2 = 47;
var CHAR_LOWERCASE_A2 = 97;
var CHAR_LOWERCASE_Z2 = 122;
var isWindows2 = processPlatform2 === "win32";
var forwardSlashRegEx2 = /\//g;
var percentRegEx2 = /%/g;
var backslashRegEx2 = /\\/g;
var newlineRegEx2 = /\n/g;
var carriageReturnRegEx2 = /\r/g;
var tabRegEx2 = /\t/g;
function fileURLToPath2(path2) {
  if (typeof path2 === "string")
    path2 = new URL(path2);
  else if (!(path2 instanceof URL)) {
    throw new Deno.errors.InvalidData(
      "invalid argument path , must be a string or URL"
    );
  }
  if (path2.protocol !== "file:") {
    throw new Deno.errors.InvalidData("invalid url scheme");
  }
  return isWindows2 ? getPathFromURLWin2(path2) : getPathFromURLPosix2(path2);
}
function getPathFromURLWin2(url) {
  const hostname = url.hostname;
  let pathname = url.pathname;
  for (let n5 = 0; n5 < pathname.length; n5++) {
    if (pathname[n5] === "%") {
      const third = pathname.codePointAt(n5 + 2) || 32;
      if (pathname[n5 + 1] === "2" && third === 102 || // 2f 2F /
      pathname[n5 + 1] === "5" && third === 99) {
        throw new Deno.errors.InvalidData(
          "must not include encoded \\ or / characters"
        );
      }
    }
  }
  pathname = pathname.replace(forwardSlashRegEx2, "\\");
  pathname = decodeURIComponent(pathname);
  if (hostname !== "") {
    return `\\\\${hostname}${pathname}`;
  } else {
    const letter = pathname.codePointAt(1) | 32;
    const sep = pathname[2];
    if (letter < CHAR_LOWERCASE_A2 || letter > CHAR_LOWERCASE_Z2 || // a..z A..Z
    sep !== ":") {
      throw new Deno.errors.InvalidData("file url path must be absolute");
    }
    return pathname.slice(1);
  }
}
function getPathFromURLPosix2(url) {
  if (url.hostname !== "") {
    throw new Deno.errors.InvalidData("invalid file url hostname");
  }
  const pathname = url.pathname;
  for (let n5 = 0; n5 < pathname.length; n5++) {
    if (pathname[n5] === "%") {
      const third = pathname.codePointAt(n5 + 2) || 32;
      if (pathname[n5 + 1] === "2" && third === 102) {
        throw new Deno.errors.InvalidData(
          "must not include encoded / characters"
        );
      }
    }
  }
  return decodeURIComponent(pathname);
}
function pathToFileURL2(filepath) {
  let resolved = exports12.resolve(filepath);
  const filePathLast = filepath.charCodeAt(filepath.length - 1);
  if ((filePathLast === CHAR_FORWARD_SLASH2 || isWindows2 && filePathLast === CHAR_BACKWARD_SLASH2) && resolved[resolved.length - 1] !== exports12.sep) {
    resolved += "/";
  }
  const outURL = new URL("file://");
  if (resolved.includes("%"))
    resolved = resolved.replace(percentRegEx2, "%25");
  if (!isWindows2 && resolved.includes("\\")) {
    resolved = resolved.replace(backslashRegEx2, "%5C");
  }
  if (resolved.includes("\n"))
    resolved = resolved.replace(newlineRegEx2, "%0A");
  if (resolved.includes("\r")) {
    resolved = resolved.replace(carriageReturnRegEx2, "%0D");
  }
  if (resolved.includes("	"))
    resolved = resolved.replace(tabRegEx2, "%09");
  outURL.pathname = resolved;
  return outURL;
}

// node_modules/geotiff/dist-module/source/client/http.js
var HttpResponse = class extends BaseResponse {
  /**
   * BaseResponse facade for node HTTP/HTTPS API Response
   * @param {http.ServerResponse} response
   */
  constructor(response, dataPromise) {
    super();
    this.response = response;
    this.dataPromise = dataPromise;
  }
  get status() {
    return this.response.statusCode;
  }
  getHeader(name2) {
    return this.response.headers[name2];
  }
  async getData() {
    const data = await this.dataPromise;
    return data;
  }
};
var HttpClient = class extends BaseClient {
  constructor(url) {
    super(url);
    this.parsedUrl = exports13.parse(this.url);
    this.httpApi = this.parsedUrl.protocol === "http:" ? exports6 : exports9;
  }
  constructRequest(headers, signal) {
    return new Promise((resolve2, reject) => {
      const request3 = this.httpApi.get(
        __spreadProps(__spreadValues({}, this.parsedUrl), {
          headers
        }),
        (response) => {
          const dataPromise = new Promise((resolveData) => {
            const chunks = [];
            response.on("data", (chunk) => {
              chunks.push(chunk);
            });
            response.on("end", () => {
              const data = Buffer.concat(chunks).buffer;
              resolveData(data);
            });
            response.on("error", reject);
          });
          resolve2(new HttpResponse(response, dataPromise));
        }
      );
      request3.on("error", reject);
      if (signal) {
        if (signal.aborted) {
          request3.destroy(new AbortError("Request aborted"));
        }
        signal.addEventListener("abort", () => request3.destroy(new AbortError("Request aborted")));
      }
    });
  }
  async request({ headers, signal } = {}) {
    const response = await this.constructRequest(headers, signal);
    return response;
  }
};

// node_modules/geotiff/dist-module/source/remote.js
var RemoteSource = class extends BaseSource {
  /**
   *
   * @param {BaseClient} client
   * @param {object} headers
   * @param {numbers} maxRanges
   * @param {boolean} allowFullFile
   */
  constructor(client, headers, maxRanges, allowFullFile) {
    super();
    this.client = client;
    this.headers = headers;
    this.maxRanges = maxRanges;
    this.allowFullFile = allowFullFile;
    this._fileSize = null;
  }
  /**
   *
   * @param {Slice[]} slices
   */
  async fetch(slices, signal) {
    if (this.maxRanges >= slices.length) {
      return this.fetchSlices(slices, signal);
    } else if (this.maxRanges > 0 && slices.length > 1) {
    }
    return Promise.all(
      slices.map((slice) => this.fetchSlice(slice, signal))
    );
  }
  async fetchSlices(slices, signal) {
    const response = await this.client.request({
      headers: __spreadProps(__spreadValues({}, this.headers), {
        Range: `bytes=${slices.map(({ offset, length }) => `${offset}-${offset + length}`).join(",")}`
      }),
      signal
    });
    if (!response.ok) {
      throw new Error("Error fetching data.");
    } else if (response.status === 206) {
      const { type, params } = parseContentType(response.getHeader("content-type"));
      if (type === "multipart/byteranges") {
        const byteRanges = parseByteRanges(await response.getData(), params.boundary);
        this._fileSize = byteRanges[0].fileSize || null;
        return byteRanges;
      }
      const data = await response.getData();
      const { start, end, total } = parseContentRange(response.getHeader("content-range"));
      this._fileSize = total || null;
      const first = [{
        data,
        offset: start,
        length: end - start
      }];
      if (slices.length > 1) {
        const others = await Promise.all(slices.slice(1).map((slice) => this.fetchSlice(slice, signal)));
        return first.concat(others);
      }
      return first;
    } else {
      if (!this.allowFullFile) {
        throw new Error("Server responded with full file");
      }
      const data = await response.getData();
      this._fileSize = data.byteLength;
      return [{
        data,
        offset: 0,
        length: data.byteLength
      }];
    }
  }
  async fetchSlice(slice, signal) {
    const { offset, length } = slice;
    const response = await this.client.request({
      headers: __spreadProps(__spreadValues({}, this.headers), {
        Range: `bytes=${offset}-${offset + length}`
      }),
      signal
    });
    if (!response.ok) {
      throw new Error("Error fetching data.");
    } else if (response.status === 206) {
      const data = await response.getData();
      const { total } = parseContentRange(response.getHeader("content-range"));
      this._fileSize = total || null;
      return {
        data,
        offset,
        length
      };
    } else {
      if (!this.allowFullFile) {
        throw new Error("Server responded with full file");
      }
      const data = await response.getData();
      this._fileSize = data.byteLength;
      return {
        data,
        offset: 0,
        length: data.byteLength
      };
    }
  }
  get fileSize() {
    return this._fileSize;
  }
};
function maybeWrapInBlockedSource(source, { blockSize, cacheSize }) {
  if (blockSize === null) {
    return source;
  }
  return new BlockedSource(source, { blockSize, cacheSize });
}
function makeFetchSource(url, _a = {}) {
  var _b = _a, { headers = {}, credentials, maxRanges = 0, allowFullFile = false } = _b, blockOptions = __objRest(_b, ["headers", "credentials", "maxRanges", "allowFullFile"]);
  const client = new FetchClient(url, credentials);
  const source = new RemoteSource(client, headers, maxRanges, allowFullFile);
  return maybeWrapInBlockedSource(source, blockOptions);
}
function makeXHRSource(url, _a = {}) {
  var _b = _a, { headers = {}, maxRanges = 0, allowFullFile = false } = _b, blockOptions = __objRest(_b, ["headers", "maxRanges", "allowFullFile"]);
  const client = new XHRClient(url);
  const source = new RemoteSource(client, headers, maxRanges, allowFullFile);
  return maybeWrapInBlockedSource(source, blockOptions);
}
function makeHttpSource(url, _a = {}) {
  var _b = _a, { headers = {}, maxRanges = 0, allowFullFile = false } = _b, blockOptions = __objRest(_b, ["headers", "maxRanges", "allowFullFile"]);
  const client = new HttpClient(url);
  const source = new RemoteSource(client, headers, maxRanges, allowFullFile);
  return maybeWrapInBlockedSource(source, blockOptions);
}
function makeRemoteSource(url, _a = {}) {
  var _b = _a, { forceXHR = false } = _b, clientOptions = __objRest(_b, ["forceXHR"]);
  if (typeof fetch === "function" && !forceXHR) {
    return makeFetchSource(url, clientOptions);
  }
  if (typeof XMLHttpRequest !== "undefined") {
    return makeXHRSource(url, clientOptions);
  }
  return makeHttpSource(url, clientOptions);
}

// node_modules/geotiff/dist-module/source/filereader.js
init_dirname();
init_buffer();
init_process();
var FileReaderSource = class extends BaseSource {
  constructor(file) {
    super();
    this.file = file;
  }
  async fetchSlice(slice, signal) {
    return new Promise((resolve2, reject) => {
      const blob = this.file.slice(slice.offset, slice.offset + slice.length);
      const reader = new FileReader();
      reader.onload = (event) => resolve2(event.target.result);
      reader.onerror = reject;
      reader.onabort = reject;
      reader.readAsArrayBuffer(blob);
      if (signal) {
        signal.addEventListener("abort", () => reader.abort());
      }
    });
  }
};
function makeFileReaderSource(file) {
  return new FileReaderSource(file);
}

// node_modules/geotiff/dist-module/geotiff.js
function getFieldTypeLength(fieldType) {
  switch (fieldType) {
    case fieldTypes.BYTE:
    case fieldTypes.ASCII:
    case fieldTypes.SBYTE:
    case fieldTypes.UNDEFINED:
      return 1;
    case fieldTypes.SHORT:
    case fieldTypes.SSHORT:
      return 2;
    case fieldTypes.LONG:
    case fieldTypes.SLONG:
    case fieldTypes.FLOAT:
    case fieldTypes.IFD:
      return 4;
    case fieldTypes.RATIONAL:
    case fieldTypes.SRATIONAL:
    case fieldTypes.DOUBLE:
    case fieldTypes.LONG8:
    case fieldTypes.SLONG8:
    case fieldTypes.IFD8:
      return 8;
    default:
      throw new RangeError(`Invalid field type: ${fieldType}`);
  }
}
function parseGeoKeyDirectory(fileDirectory) {
  const rawGeoKeyDirectory = fileDirectory.GeoKeyDirectory;
  if (!rawGeoKeyDirectory) {
    return null;
  }
  const geoKeyDirectory = {};
  for (let i5 = 4; i5 <= rawGeoKeyDirectory[3] * 4; i5 += 4) {
    const key = geoKeyNames[rawGeoKeyDirectory[i5]];
    const location = rawGeoKeyDirectory[i5 + 1] ? fieldTagNames[rawGeoKeyDirectory[i5 + 1]] : null;
    const count = rawGeoKeyDirectory[i5 + 2];
    const offset = rawGeoKeyDirectory[i5 + 3];
    let value = null;
    if (!location) {
      value = offset;
    } else {
      value = fileDirectory[location];
      if (typeof value === "undefined" || value === null) {
        throw new Error(`Could not get value of geoKey '${key}'.`);
      } else if (typeof value === "string") {
        value = value.substring(offset, offset + count - 1);
      } else if (value.subarray) {
        value = value.subarray(offset, offset + count);
        if (count === 1) {
          value = value[0];
        }
      }
    }
    geoKeyDirectory[key] = value;
  }
  return geoKeyDirectory;
}
function getValues(dataSlice, fieldType, count, offset) {
  let values2 = null;
  let readMethod = null;
  const fieldTypeLength = getFieldTypeLength(fieldType);
  switch (fieldType) {
    case fieldTypes.BYTE:
    case fieldTypes.ASCII:
    case fieldTypes.UNDEFINED:
      values2 = new Uint8Array(count);
      readMethod = dataSlice.readUint8;
      break;
    case fieldTypes.SBYTE:
      values2 = new Int8Array(count);
      readMethod = dataSlice.readInt8;
      break;
    case fieldTypes.SHORT:
      values2 = new Uint16Array(count);
      readMethod = dataSlice.readUint16;
      break;
    case fieldTypes.SSHORT:
      values2 = new Int16Array(count);
      readMethod = dataSlice.readInt16;
      break;
    case fieldTypes.LONG:
    case fieldTypes.IFD:
      values2 = new Uint32Array(count);
      readMethod = dataSlice.readUint32;
      break;
    case fieldTypes.SLONG:
      values2 = new Int32Array(count);
      readMethod = dataSlice.readInt32;
      break;
    case fieldTypes.LONG8:
    case fieldTypes.IFD8:
      values2 = new Array(count);
      readMethod = dataSlice.readUint64;
      break;
    case fieldTypes.SLONG8:
      values2 = new Array(count);
      readMethod = dataSlice.readInt64;
      break;
    case fieldTypes.RATIONAL:
      values2 = new Uint32Array(count * 2);
      readMethod = dataSlice.readUint32;
      break;
    case fieldTypes.SRATIONAL:
      values2 = new Int32Array(count * 2);
      readMethod = dataSlice.readInt32;
      break;
    case fieldTypes.FLOAT:
      values2 = new Float32Array(count);
      readMethod = dataSlice.readFloat32;
      break;
    case fieldTypes.DOUBLE:
      values2 = new Float64Array(count);
      readMethod = dataSlice.readFloat64;
      break;
    default:
      throw new RangeError(`Invalid field type: ${fieldType}`);
  }
  if (!(fieldType === fieldTypes.RATIONAL || fieldType === fieldTypes.SRATIONAL)) {
    for (let i5 = 0; i5 < count; ++i5) {
      values2[i5] = readMethod.call(
        dataSlice,
        offset + i5 * fieldTypeLength
      );
    }
  } else {
    for (let i5 = 0; i5 < count; i5 += 2) {
      values2[i5] = readMethod.call(
        dataSlice,
        offset + i5 * fieldTypeLength
      );
      values2[i5 + 1] = readMethod.call(
        dataSlice,
        offset + (i5 * fieldTypeLength + 4)
      );
    }
  }
  if (fieldType === fieldTypes.ASCII) {
    return new TextDecoder("utf-8").decode(values2);
  }
  return values2;
}
var ImageFileDirectory = class {
  constructor(fileDirectory, geoKeyDirectory, nextIFDByteOffset) {
    this.fileDirectory = fileDirectory;
    this.geoKeyDirectory = geoKeyDirectory;
    this.nextIFDByteOffset = nextIFDByteOffset;
  }
};
var GeoTIFFImageIndexError = class extends Error {
  constructor(index) {
    super(`No image at index ${index}`);
    this.index = index;
  }
};
var GeoTIFFBase = class {
  /**
   * (experimental) Reads raster data from the best fitting image. This function uses
   * the image with the lowest resolution that is still a higher resolution than the
   * requested resolution.
   * When specified, the `bbox` option is translated to the `window` option and the
   * `resX` and `resY` to `width` and `height` respectively.
   * Then, the [readRasters]{@link GeoTIFFImage#readRasters} method of the selected
   * image is called and the result returned.
   * @see GeoTIFFImage.readRasters
   * @param {import('./geotiffimage').ReadRasterOptions} [options={}] optional parameters
   * @returns {Promise<ReadRasterResult>} the decoded array(s), with `height` and `width`, as a promise
   */
  async readRasters(options = {}) {
    const { window: imageWindow, width, height } = options;
    let { resX, resY, bbox } = options;
    const firstImage = await this.getImage();
    let usedImage = firstImage;
    const imageCount = await this.getImageCount();
    const imgBBox = firstImage.getBoundingBox();
    if (imageWindow && bbox) {
      throw new Error('Both "bbox" and "window" passed.');
    }
    if (width || height) {
      if (imageWindow) {
        const [oX, oY] = firstImage.getOrigin();
        const [rX, rY] = firstImage.getResolution();
        bbox = [
          oX + imageWindow[0] * rX,
          oY + imageWindow[1] * rY,
          oX + imageWindow[2] * rX,
          oY + imageWindow[3] * rY
        ];
      }
      const usedBBox = bbox || imgBBox;
      if (width) {
        if (resX) {
          throw new Error("Both width and resX passed");
        }
        resX = (usedBBox[2] - usedBBox[0]) / width;
      }
      if (height) {
        if (resY) {
          throw new Error("Both width and resY passed");
        }
        resY = (usedBBox[3] - usedBBox[1]) / height;
      }
    }
    if (resX || resY) {
      const allImages = [];
      for (let i5 = 0; i5 < imageCount; ++i5) {
        const image = await this.getImage(i5);
        const { SubfileType: subfileType, NewSubfileType: newSubfileType } = image.fileDirectory;
        if (i5 === 0 || subfileType === 2 || newSubfileType & 1) {
          allImages.push(image);
        }
      }
      allImages.sort((a5, b4) => a5.getWidth() - b4.getWidth());
      for (let i5 = 0; i5 < allImages.length; ++i5) {
        const image = allImages[i5];
        const imgResX = (imgBBox[2] - imgBBox[0]) / image.getWidth();
        const imgResY = (imgBBox[3] - imgBBox[1]) / image.getHeight();
        usedImage = image;
        if (resX && resX > imgResX || resY && resY > imgResY) {
          break;
        }
      }
    }
    let wnd = imageWindow;
    if (bbox) {
      const [oX, oY] = firstImage.getOrigin();
      const [imageResX, imageResY] = usedImage.getResolution(firstImage);
      wnd = [
        Math.round((bbox[0] - oX) / imageResX),
        Math.round((bbox[1] - oY) / imageResY),
        Math.round((bbox[2] - oX) / imageResX),
        Math.round((bbox[3] - oY) / imageResY)
      ];
      wnd = [
        Math.min(wnd[0], wnd[2]),
        Math.min(wnd[1], wnd[3]),
        Math.max(wnd[0], wnd[2]),
        Math.max(wnd[1], wnd[3])
      ];
    }
    return usedImage.readRasters(__spreadProps(__spreadValues({}, options), { window: wnd }));
  }
};
var GeoTIFF = class _GeoTIFF extends GeoTIFFBase {
  /**
   * @constructor
   * @param {*} source The datasource to read from.
   * @param {boolean} littleEndian Whether the image uses little endian.
   * @param {boolean} bigTiff Whether the image uses bigTIFF conventions.
   * @param {number} firstIFDOffset The numeric byte-offset from the start of the image
   *                                to the first IFD.
   * @param {GeoTIFFOptions} [options] further options.
   */
  constructor(source, littleEndian, bigTiff, firstIFDOffset, options = {}) {
    super();
    this.source = source;
    this.littleEndian = littleEndian;
    this.bigTiff = bigTiff;
    this.firstIFDOffset = firstIFDOffset;
    this.cache = options.cache || false;
    this.ifdRequests = [];
    this.ghostValues = null;
  }
  async getSlice(offset, size) {
    const fallbackSize = this.bigTiff ? 4048 : 1024;
    return new DataSlice(
      (await this.source.fetch([{
        offset,
        length: typeof size !== "undefined" ? size : fallbackSize
      }]))[0],
      offset,
      this.littleEndian,
      this.bigTiff
    );
  }
  /**
   * Instructs to parse an image file directory at the given file offset.
   * As there is no way to ensure that a location is indeed the start of an IFD,
   * this function must be called with caution (e.g only using the IFD offsets from
   * the headers or other IFDs).
   * @param {number} offset the offset to parse the IFD at
   * @returns {Promise<ImageFileDirectory>} the parsed IFD
   */
  async parseFileDirectoryAt(offset) {
    const entrySize = this.bigTiff ? 20 : 12;
    const offsetSize = this.bigTiff ? 8 : 2;
    let dataSlice = await this.getSlice(offset);
    const numDirEntries = this.bigTiff ? dataSlice.readUint64(offset) : dataSlice.readUint16(offset);
    const byteSize = numDirEntries * entrySize + (this.bigTiff ? 16 : 6);
    if (!dataSlice.covers(offset, byteSize)) {
      dataSlice = await this.getSlice(offset, byteSize);
    }
    const fileDirectory = {};
    let i5 = offset + (this.bigTiff ? 8 : 2);
    for (let entryCount = 0; entryCount < numDirEntries; i5 += entrySize, ++entryCount) {
      const fieldTag = dataSlice.readUint16(i5);
      const fieldType = dataSlice.readUint16(i5 + 2);
      const typeCount = this.bigTiff ? dataSlice.readUint64(i5 + 4) : dataSlice.readUint32(i5 + 4);
      let fieldValues;
      let value;
      const fieldTypeLength = getFieldTypeLength(fieldType);
      const valueOffset = i5 + (this.bigTiff ? 12 : 8);
      if (fieldTypeLength * typeCount <= (this.bigTiff ? 8 : 4)) {
        fieldValues = getValues(dataSlice, fieldType, typeCount, valueOffset);
      } else {
        const actualOffset = dataSlice.readOffset(valueOffset);
        const length = getFieldTypeLength(fieldType) * typeCount;
        if (dataSlice.covers(actualOffset, length)) {
          fieldValues = getValues(dataSlice, fieldType, typeCount, actualOffset);
        } else {
          const fieldDataSlice = await this.getSlice(actualOffset, length);
          fieldValues = getValues(fieldDataSlice, fieldType, typeCount, actualOffset);
        }
      }
      if (typeCount === 1 && arrayFields.indexOf(fieldTag) === -1 && !(fieldType === fieldTypes.RATIONAL || fieldType === fieldTypes.SRATIONAL)) {
        value = fieldValues[0];
      } else {
        value = fieldValues;
      }
      fileDirectory[fieldTagNames[fieldTag]] = value;
    }
    const geoKeyDirectory = parseGeoKeyDirectory(fileDirectory);
    const nextIFDByteOffset = dataSlice.readOffset(
      offset + offsetSize + entrySize * numDirEntries
    );
    return new ImageFileDirectory(
      fileDirectory,
      geoKeyDirectory,
      nextIFDByteOffset
    );
  }
  async requestIFD(index) {
    if (this.ifdRequests[index]) {
      return this.ifdRequests[index];
    } else if (index === 0) {
      this.ifdRequests[index] = this.parseFileDirectoryAt(this.firstIFDOffset);
      return this.ifdRequests[index];
    } else if (!this.ifdRequests[index - 1]) {
      try {
        this.ifdRequests[index - 1] = this.requestIFD(index - 1);
      } catch (e5) {
        if (e5 instanceof GeoTIFFImageIndexError) {
          throw new GeoTIFFImageIndexError(index);
        }
        throw e5;
      }
    }
    this.ifdRequests[index] = (async () => {
      const previousIfd = await this.ifdRequests[index - 1];
      if (previousIfd.nextIFDByteOffset === 0) {
        throw new GeoTIFFImageIndexError(index);
      }
      return this.parseFileDirectoryAt(previousIfd.nextIFDByteOffset);
    })();
    return this.ifdRequests[index];
  }
  /**
   * Get the n-th internal subfile of an image. By default, the first is returned.
   *
   * @param {number} [index=0] the index of the image to return.
   * @returns {Promise<GeoTIFFImage>} the image at the given index
   */
  async getImage(index = 0) {
    const ifd = await this.requestIFD(index);
    return new geotiffimage_default(
      ifd.fileDirectory,
      ifd.geoKeyDirectory,
      this.dataView,
      this.littleEndian,
      this.cache,
      this.source
    );
  }
  /**
   * Returns the count of the internal subfiles.
   *
   * @returns {Promise<number>} the number of internal subfile images
   */
  async getImageCount() {
    let index = 0;
    let hasNext = true;
    while (hasNext) {
      try {
        await this.requestIFD(index);
        ++index;
      } catch (e5) {
        if (e5 instanceof GeoTIFFImageIndexError) {
          hasNext = false;
        } else {
          throw e5;
        }
      }
    }
    return index;
  }
  /**
   * Get the values of the COG ghost area as a parsed map.
   * See https://gdal.org/drivers/raster/cog.html#header-ghost-area for reference
   * @returns {Promise<Object>} the parsed ghost area or null, if no such area was found
   */
  async getGhostValues() {
    const offset = this.bigTiff ? 16 : 8;
    if (this.ghostValues) {
      return this.ghostValues;
    }
    const detectionString = "GDAL_STRUCTURAL_METADATA_SIZE=";
    const heuristicAreaSize = detectionString.length + 100;
    let slice = await this.getSlice(offset, heuristicAreaSize);
    if (detectionString === getValues(slice, fieldTypes.ASCII, detectionString.length, offset)) {
      const valuesString = getValues(slice, fieldTypes.ASCII, heuristicAreaSize, offset);
      const firstLine = valuesString.split("\n")[0];
      const metadataSize = Number(firstLine.split("=")[1].split(" ")[0]) + firstLine.length;
      if (metadataSize > heuristicAreaSize) {
        slice = await this.getSlice(offset, metadataSize);
      }
      const fullString = getValues(slice, fieldTypes.ASCII, metadataSize, offset);
      this.ghostValues = {};
      fullString.split("\n").filter((line) => line.length > 0).map((line) => line.split("=")).forEach(([key, value]) => {
        this.ghostValues[key] = value;
      });
    }
    return this.ghostValues;
  }
  /**
   * Parse a (Geo)TIFF file from the given source.
   *
   * @param {*} source The source of data to parse from.
   * @param {GeoTIFFOptions} [options] Additional options.
   * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
   *                               to be aborted
   */
  static async fromSource(source, options, signal) {
    const headerData = (await source.fetch([{ offset: 0, length: 1024 }], signal))[0];
    const dataView = new DataView64(headerData);
    const BOM = dataView.getUint16(0, 0);
    let littleEndian;
    if (BOM === 18761) {
      littleEndian = true;
    } else if (BOM === 19789) {
      littleEndian = false;
    } else {
      throw new TypeError("Invalid byte order value.");
    }
    const magicNumber = dataView.getUint16(2, littleEndian);
    let bigTiff;
    if (magicNumber === 42) {
      bigTiff = false;
    } else if (magicNumber === 43) {
      bigTiff = true;
      const offsetByteSize = dataView.getUint16(4, littleEndian);
      if (offsetByteSize !== 8) {
        throw new Error("Unsupported offset byte-size.");
      }
    } else {
      throw new TypeError("Invalid magic number.");
    }
    const firstIFDOffset = bigTiff ? dataView.getUint64(8, littleEndian) : dataView.getUint32(4, littleEndian);
    return new _GeoTIFF(source, littleEndian, bigTiff, firstIFDOffset, options);
  }
  /**
   * Closes the underlying file buffer
   * N.B. After the GeoTIFF has been completely processed it needs
   * to be closed but only if it has been constructed from a file.
   */
  close() {
    if (typeof this.source.close === "function") {
      return this.source.close();
    }
    return false;
  }
};
var MultiGeoTIFF = class extends GeoTIFFBase {
  /**
   * Construct a new MultiGeoTIFF from a main and several overview files.
   * @param {GeoTIFF} mainFile The main GeoTIFF file.
   * @param {GeoTIFF[]} overviewFiles An array of overview files.
   */
  constructor(mainFile, overviewFiles) {
    super();
    this.mainFile = mainFile;
    this.overviewFiles = overviewFiles;
    this.imageFiles = [mainFile].concat(overviewFiles);
    this.fileDirectoriesPerFile = null;
    this.fileDirectoriesPerFileParsing = null;
    this.imageCount = null;
  }
  async parseFileDirectoriesPerFile() {
    const requests = [this.mainFile.parseFileDirectoryAt(this.mainFile.firstIFDOffset)].concat(this.overviewFiles.map((file) => file.parseFileDirectoryAt(file.firstIFDOffset)));
    this.fileDirectoriesPerFile = await Promise.all(requests);
    return this.fileDirectoriesPerFile;
  }
  /**
   * Get the n-th internal subfile of an image. By default, the first is returned.
   *
   * @param {number} [index=0] the index of the image to return.
   * @returns {Promise<GeoTIFFImage>} the image at the given index
   */
  async getImage(index = 0) {
    await this.getImageCount();
    await this.parseFileDirectoriesPerFile();
    let visited = 0;
    let relativeIndex = 0;
    for (let i5 = 0; i5 < this.imageFiles.length; i5++) {
      const imageFile = this.imageFiles[i5];
      for (let ii = 0; ii < this.imageCounts[i5]; ii++) {
        if (index === visited) {
          const ifd = await imageFile.requestIFD(relativeIndex);
          return new geotiffimage_default(
            ifd.fileDirectory,
            ifd.geoKeyDirectory,
            imageFile.dataView,
            imageFile.littleEndian,
            imageFile.cache,
            imageFile.source
          );
        }
        visited++;
        relativeIndex++;
      }
      relativeIndex = 0;
    }
    throw new RangeError("Invalid image index");
  }
  /**
   * Returns the count of the internal subfiles.
   *
   * @returns {Promise<number>} the number of internal subfile images
   */
  async getImageCount() {
    if (this.imageCount !== null) {
      return this.imageCount;
    }
    const requests = [this.mainFile.getImageCount()].concat(this.overviewFiles.map((file) => file.getImageCount()));
    this.imageCounts = await Promise.all(requests);
    this.imageCount = this.imageCounts.reduce((count, ifds) => count + ifds, 0);
    return this.imageCount;
  }
};
async function fromUrl(url, options = {}, signal) {
  return GeoTIFF.fromSource(makeRemoteSource(url, options), signal);
}
async function fromBlob(blob, signal) {
  return GeoTIFF.fromSource(makeFileReaderSource(blob), signal);
}
async function fromUrls(mainUrl, overviewUrls = [], options = {}, signal) {
  const mainFile = await GeoTIFF.fromSource(makeRemoteSource(mainUrl, options), signal);
  const overviewFiles = await Promise.all(
    overviewUrls.map((url) => GeoTIFF.fromSource(makeRemoteSource(url, options)))
  );
  return new MultiGeoTIFF(mainFile, overviewFiles);
}

// node_modules/ol/source/DataTile.js
init_dirname();
init_buffer();
init_process();

// node_modules/ol/reproj/DataTile.js
init_dirname();
init_buffer();
init_process();

// node_modules/ol/reproj/glreproj.js
init_dirname();
init_buffer();
init_process();

// node_modules/ol/webgl/Canvas.js
init_dirname();
init_buffer();
init_process();
var VERTEX_SHADER = `
  attribute vec4 a_position;
  attribute vec4 a_texcoord;

  uniform mat4 u_matrix;
  uniform mat4 u_textureMatrix;

  varying vec2 v_texcoord;

  void main() {
    gl_Position = u_matrix * a_position;
    vec2 texcoord = (u_textureMatrix * a_texcoord).xy;
    v_texcoord = texcoord;
  }
`;
var FRAGMENT_SHADER = `
  precision mediump float;

  varying vec2 v_texcoord;

  uniform sampler2D u_texture;

  void main() {
    if (
      v_texcoord.x < 0.0 ||
      v_texcoord.y < 0.0 ||
      v_texcoord.x > 1.0 ||
      v_texcoord.y > 1.0
    ) {
      discard;
    }
    gl_FragColor = texture2D(u_texture, v_texcoord);
  }
`;
var Canvas = class {
  /**
   * @param {WebGLRenderingContext} gl Context to render in.
   */
  constructor(gl) {
    this.gl_ = gl;
    this.program_ = createProgram(gl, FRAGMENT_SHADER, VERTEX_SHADER);
    this.positionLocation = gl.getAttribLocation(this.program_, "a_position");
    this.texcoordLocation = gl.getAttribLocation(this.program_, "a_texcoord");
    this.matrixLocation = gl.getUniformLocation(this.program_, "u_matrix");
    this.textureMatrixLocation = gl.getUniformLocation(
      this.program_,
      "u_textureMatrix"
    );
    this.textureLocation = gl.getUniformLocation(this.program_, "u_texture");
    this.positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
    this.positions = [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1];
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(this.positions),
      gl.STATIC_DRAW
    );
    this.texcoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.texcoordBuffer);
    this.texcoords = [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1];
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(this.texcoords),
      gl.STATIC_DRAW
    );
  }
  /**
   * 2dContext drawImage call implemented in webgl.
   * Unlike images, textures do not have a width and height associated
   * with them so we'll pass in the width and height of the texture.
   *
   * @param {WebGLTexture} tex Image to draw.
   * @param {number} texWidth Image width.
   * @param {number} texHeight Image height.
   * @param {number} srcX Top-left x-point to read src image.
   * @param {number} srcY Top-left y-point to read src image.
   * @param {number} [srcWidth] Width of source to read.
   * @param {number} [srcHeight] Height of source to read.
   * @param {number} [dstX] Top-left x-point of destination.
   * @param {number} [dstY] Top-left y-point of destination.
   * @param {number} [dstWidth] Width of written image in destination.
   * @param {number} [dstHeight] Height of written image in destination.
   * @param {number} [width] Width of canvas.
   * @param {number} [height] Height of canvas.
   */
  drawImage(tex, texWidth, texHeight, srcX, srcY, srcWidth, srcHeight, dstX, dstY, dstWidth, dstHeight, width, height) {
    const gl = this.gl_;
    if (dstX === void 0) {
      dstX = srcX;
    }
    if (dstY === void 0) {
      dstY = srcY;
    }
    if (srcWidth === void 0) {
      srcWidth = texWidth;
    }
    if (srcHeight === void 0) {
      srcHeight = texHeight;
    }
    if (dstWidth === void 0) {
      dstWidth = srcWidth;
    }
    if (dstHeight === void 0) {
      dstHeight = srcHeight;
    }
    if (width === void 0) {
      width = gl.canvas.width;
    }
    if (height === void 0) {
      height = gl.canvas.height;
    }
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.useProgram(this.program_);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
    gl.enableVertexAttribArray(this.positionLocation);
    gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.texcoordBuffer);
    gl.enableVertexAttribArray(this.texcoordLocation);
    gl.vertexAttribPointer(this.texcoordLocation, 2, gl.FLOAT, false, 0, 0);
    let matrix = orthographic(0, width, 0, height, -1, 1);
    matrix = translate(matrix, dstX, dstY, 0);
    matrix = scale(matrix, dstWidth, dstHeight, 1);
    gl.uniformMatrix4fv(this.matrixLocation, false, matrix);
    let texMatrix = translation(srcX / texWidth, srcY / texHeight, 0);
    texMatrix = scale(
      texMatrix,
      srcWidth / texWidth,
      srcHeight / texHeight,
      1
    );
    gl.uniformMatrix4fv(this.textureMatrixLocation, false, texMatrix);
    gl.uniform1i(this.textureLocation, 0);
    gl.drawArrays(gl.TRIANGLES, 0, this.positions.length / 2);
  }
};
function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  if (shader === null) {
    throw new Error("Shader compilation failed");
  }
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader);
    if (log === null) {
      throw new Error("Shader info log creation failed");
    }
    throw new Error(log);
  }
  return shader;
}
function createProgram(gl, fragmentSource, vertexSource) {
  const program = gl.createProgram();
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
  if (program === null) {
    throw new Error("Program creation failed");
  }
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(program);
    if (log === null) {
      throw new Error("Program info log creation failed");
    }
    throw new Error();
  }
  return program;
}

// node_modules/ol/reproj/glreproj.js
var EDGE_VERTEX_SHADER = `
  attribute vec4 a_position;

  uniform mat4 u_matrix;

  void main() {
     gl_Position = u_matrix * a_position;
  }
`;
var EDGE_FRAGMENT_SHADER = `
  precision mediump float;

  uniform vec4 u_val;
  void main() {
     gl_FragColor = u_val;
  }
`;
var TRIANGLE_VERTEX_SHADER = `
  attribute vec4 a_position;
  attribute vec2 a_texcoord;

  varying vec2 v_texcoord;

  uniform mat4 u_matrix;

  void main() {
     gl_Position = u_matrix * a_position;
     v_texcoord = a_texcoord;
  }
`;
var TRIANGLE_FRAGMENT_SHADER = `
  precision mediump float;

  varying vec2 v_texcoord;

  uniform sampler2D u_texture;

  void main() {
    if (v_texcoord.x < 0.0 || v_texcoord.x > 1.0 || v_texcoord.y < 0.0 || v_texcoord.y > 1.0) {
      discard;
    }
    gl_FragColor = texture2D(u_texture, v_texcoord);
  }
`;
function createCanvasContextWebGL(width, height, canvasPool, settings) {
  let canvas;
  if (canvasPool && canvasPool.length) {
    canvas = /** @type {HTMLCanvasElement} */
    canvasPool.shift();
  } else if (WORKER_OFFSCREEN_CANVAS) {
    canvas = new OffscreenCanvas(width || 300, height || 300);
  } else {
    canvas = document.createElement("canvas");
  }
  if (width) {
    canvas.width = width;
  }
  if (height) {
    canvas.height = height;
  }
  return (
    /** @type {WebGLRenderingContext} */
    canvas.getContext("webgl", settings)
  );
}
function releaseGLCanvas(gl) {
  const canvas = gl.canvas;
  canvas.width = 1;
  canvas.height = 1;
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
}
var canvasGLPool = [];
function render(gl, width_, height_, pixelRatio, sourceResolution, targetResolution, targetExtent, triangulation, sources, gutter, dataType, renderEdges, interpolate, drawSingle) {
  const width = Math.round(pixelRatio * width_);
  const height = Math.round(pixelRatio * height_);
  gl.canvas.width = width;
  gl.canvas.height = height;
  let resultFrameBuffer;
  let resultTexture;
  {
    resultTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, resultTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    if (interpolate) {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    } else {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    }
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      width,
      height,
      0,
      gl.RGBA,
      dataType,
      null
    );
    resultFrameBuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, resultFrameBuffer);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      resultTexture,
      0
    );
  }
  if (resultFrameBuffer === null) {
    throw new Error("Could not create framebuffer");
  }
  if (resultTexture === null) {
    throw new Error("Could not create texture");
  }
  if (sources.length === 0) {
    return {
      width,
      height,
      framebuffer: resultFrameBuffer,
      texture: resultTexture
    };
  }
  const sourceDataExtent = createEmpty();
  sources.forEach(function(src, i5, arr) {
    extend(sourceDataExtent, src.extent);
  });
  let stitchTexture;
  let stitchWidth;
  let stitchHeight;
  const stitchScale = 1 / sourceResolution;
  if (!drawSingle || sources.length !== 1 || gutter !== 0) {
    stitchTexture = gl.createTexture();
    if (resultTexture === null) {
      throw new Error("Could not create texture");
    }
    stitchWidth = Math.round(getWidth(sourceDataExtent) * stitchScale);
    stitchHeight = Math.round(getHeight(sourceDataExtent) * stitchScale);
    const maxTexSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
    const largeSide = Math.max(stitchWidth, stitchHeight);
    const scaleFactor = largeSide > maxTexSize ? maxTexSize / largeSide : 1;
    const stitchWidthFixed = Math.round(stitchWidth * scaleFactor);
    const stitchHeightFixed = Math.round(stitchHeight * scaleFactor);
    gl.bindTexture(gl.TEXTURE_2D, stitchTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    if (interpolate) {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    } else {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    }
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      stitchWidthFixed,
      stitchHeightFixed,
      0,
      gl.RGBA,
      dataType,
      null
    );
    const fb = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      stitchTexture,
      0
    );
    const webGLCanvas = new Canvas(gl);
    sources.forEach(function(src, i5, arr) {
      const xPos = (src.extent[0] - sourceDataExtent[0]) * stitchScale * scaleFactor;
      const yPos = -(src.extent[3] - sourceDataExtent[3]) * stitchScale * scaleFactor;
      const srcWidth = getWidth(src.extent) * stitchScale * scaleFactor;
      const srcHeight = getHeight(src.extent) * stitchScale * scaleFactor;
      gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
      gl.viewport(0, 0, stitchWidthFixed, stitchHeightFixed);
      if (src.clipExtent) {
        const xPos2 = (src.clipExtent[0] - sourceDataExtent[0]) * stitchScale * scaleFactor;
        const yPos2 = -(src.clipExtent[3] - sourceDataExtent[3]) * stitchScale * scaleFactor;
        const width2 = getWidth(src.clipExtent) * stitchScale * scaleFactor;
        const height2 = getHeight(src.clipExtent) * stitchScale * scaleFactor;
        gl.enable(gl.SCISSOR_TEST);
        gl.scissor(
          interpolate ? xPos2 : Math.round(xPos2),
          interpolate ? yPos2 : Math.round(yPos2),
          interpolate ? width2 : Math.round(xPos2 + width2) - Math.round(xPos2),
          interpolate ? height2 : Math.round(yPos2 + height2) - Math.round(yPos2)
        );
      }
      webGLCanvas.drawImage(
        src.texture,
        src.width,
        src.height,
        gutter,
        gutter,
        src.width - 2 * gutter,
        src.height - 2 * gutter,
        interpolate ? xPos : Math.round(xPos),
        interpolate ? yPos : Math.round(yPos),
        interpolate ? srcWidth : Math.round(xPos + srcWidth) - Math.round(xPos),
        interpolate ? srcHeight : Math.round(yPos + srcHeight) - Math.round(yPos),
        stitchWidthFixed,
        stitchHeightFixed
      );
      gl.disable(gl.SCISSOR_TEST);
    });
    gl.deleteFramebuffer(fb);
  } else {
    stitchTexture = sources[0].texture;
    stitchWidth = sources[0].width;
    stitchHeight = sources[0].width;
  }
  const targetTopLeft = getTopLeft(targetExtent);
  const sourceTopLeft = getTopLeft(sourceDataExtent);
  const getUVs = (target) => {
    const u0 = (target[0][0] - targetTopLeft[0]) / targetResolution * pixelRatio;
    const v0 = -(target[0][1] - targetTopLeft[1]) / targetResolution * pixelRatio;
    const u1 = (target[1][0] - targetTopLeft[0]) / targetResolution * pixelRatio;
    const v1 = -(target[1][1] - targetTopLeft[1]) / targetResolution * pixelRatio;
    const u22 = (target[2][0] - targetTopLeft[0]) / targetResolution * pixelRatio;
    const v22 = -(target[2][1] - targetTopLeft[1]) / targetResolution * pixelRatio;
    return { u1, v1, u0, v0, u2: u22, v2: v22 };
  };
  gl.bindFramebuffer(gl.FRAMEBUFFER, resultFrameBuffer);
  gl.viewport(0, 0, width, height);
  {
    const vertices = [];
    const texcoords = [];
    const triProgram = createProgram(
      gl,
      TRIANGLE_FRAGMENT_SHADER,
      TRIANGLE_VERTEX_SHADER
    );
    gl.useProgram(triProgram);
    const textureLocation = gl.getUniformLocation(triProgram, "u_texture");
    gl.bindTexture(gl.TEXTURE_2D, stitchTexture);
    gl.uniform1i(textureLocation, 0);
    triangulation.getTriangles().forEach(function(triangle, i5, arr) {
      const source = triangle.source;
      const target = triangle.target;
      const { u1, v1, u0, v0, u2: u22, v2: v22 } = getUVs(target);
      const su0 = (source[0][0] - sourceTopLeft[0]) / sourceResolution / stitchWidth;
      const sv0 = -(source[0][1] - sourceTopLeft[1]) / sourceResolution / stitchHeight;
      const su1 = (source[1][0] - sourceTopLeft[0]) / sourceResolution / stitchWidth;
      const sv1 = -(source[1][1] - sourceTopLeft[1]) / sourceResolution / stitchHeight;
      const su2 = (source[2][0] - sourceTopLeft[0]) / sourceResolution / stitchWidth;
      const sv2 = -(source[2][1] - sourceTopLeft[1]) / sourceResolution / stitchHeight;
      vertices.push(u1, v1, u0, v0, u22, v22);
      texcoords.push(su1, sv1, su0, sv0, su2, sv2);
    });
    const matrix = orthographic(0, width, height, 0, -1, 1);
    const matrixLocation = gl.getUniformLocation(triProgram, "u_matrix");
    gl.uniformMatrix4fv(matrixLocation, false, matrix);
    const positionLocation = gl.getAttribLocation(triProgram, "a_position");
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLocation);
    const texcoordLocation = gl.getAttribLocation(triProgram, "a_texcoord");
    const texcoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
    gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(texcoordLocation);
    gl.drawArrays(gl.TRIANGLES, 0, vertices.length / 2);
  }
  if (renderEdges) {
    const edgeProgram = createProgram(
      gl,
      EDGE_FRAGMENT_SHADER,
      EDGE_VERTEX_SHADER
    );
    gl.useProgram(edgeProgram);
    const matrix = orthographic(0, width, height, 0, -1, 1);
    const matrixLocation = gl.getUniformLocation(edgeProgram, "u_matrix");
    gl.uniformMatrix4fv(matrixLocation, false, matrix);
    const burnval = Array.isArray(renderEdges) ? renderEdges : [0, 0, 0, 255];
    const burnvalLocation = gl.getUniformLocation(edgeProgram, "u_val");
    const isFloat = true;
    if (isFloat) {
      gl.uniform4fv(burnvalLocation, burnval);
    } else {
      gl.uniform4iv(burnvalLocation, burnval);
    }
    const positionLocation = gl.getAttribLocation(edgeProgram, "a_position");
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLocation);
    const lines = triangulation.getTriangles().reduce(function(lines2, triangle) {
      const target = triangle.target;
      const { u1, v1, u0, v0, u2: u22, v2: v22 } = getUVs(target);
      return lines2.concat([u1, v1, u0, v0, u0, v0, u22, v22, u22, v22, u1, v1]);
    }, []);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lines), gl.STATIC_DRAW);
    gl.drawArrays(gl.LINES, 0, lines.length / 2);
  }
  return {
    width,
    height,
    framebuffer: resultFrameBuffer,
    texture: resultTexture
  };
}

// node_modules/ol/reproj/DataTile.js
var ReprojDataTile = class extends DataTile_default {
  /**
   * @param {Options} options Tile options.
   */
  constructor(options) {
    super({
      tileCoord: options.tileCoord,
      loader: () => Promise.resolve(new Uint8ClampedArray(4)),
      interpolate: options.interpolate,
      transition: options.transition
    });
    this.renderEdges_ = options.renderEdges !== void 0 ? options.renderEdges : false;
    this.pixelRatio_ = options.pixelRatio;
    this.gutter_ = options.gutter;
    this.reprojData_ = null;
    this.reprojError_ = null;
    this.reprojSize_ = void 0;
    this.sourceTileGrid_ = options.sourceTileGrid;
    this.targetTileGrid_ = options.targetTileGrid;
    this.wrappedTileCoord_ = options.wrappedTileCoord || options.tileCoord;
    this.sourceTiles_ = [];
    this.sourcesListenerKeys_ = null;
    this.sourceZ_ = 0;
    const sourceProj = options.sourceProj;
    const sourceProjExtent = sourceProj.getExtent();
    const sourceTileGridExtent = options.sourceTileGrid.getExtent();
    this.clipExtent_ = sourceProj.canWrapX() ? sourceTileGridExtent ? getIntersection(sourceProjExtent, sourceTileGridExtent) : sourceProjExtent : sourceTileGridExtent;
    const targetExtent = this.targetTileGrid_.getTileCoordExtent(
      this.wrappedTileCoord_
    );
    const maxTargetExtent = this.targetTileGrid_.getExtent();
    let maxSourceExtent = this.sourceTileGrid_.getExtent();
    const limitedTargetExtent = maxTargetExtent ? getIntersection(targetExtent, maxTargetExtent) : targetExtent;
    if (getArea(limitedTargetExtent) === 0) {
      this.state = TileState_default.EMPTY;
      return;
    }
    if (sourceProjExtent) {
      if (!maxSourceExtent) {
        maxSourceExtent = sourceProjExtent;
      } else {
        maxSourceExtent = getIntersection(maxSourceExtent, sourceProjExtent);
      }
    }
    const targetResolution = this.targetTileGrid_.getResolution(
      this.wrappedTileCoord_[0]
    );
    const targetProj = options.targetProj;
    const sourceResolution = calculateSourceExtentResolution(
      sourceProj,
      targetProj,
      limitedTargetExtent,
      targetResolution
    );
    if (!isFinite(sourceResolution) || sourceResolution <= 0) {
      this.state = TileState_default.EMPTY;
      return;
    }
    const errorThresholdInPixels = options.errorThreshold !== void 0 ? options.errorThreshold : ERROR_THRESHOLD;
    this.triangulation_ = new Triangulation_default(
      sourceProj,
      targetProj,
      limitedTargetExtent,
      maxSourceExtent,
      sourceResolution * errorThresholdInPixels,
      targetResolution,
      options.transformMatrix
    );
    if (this.triangulation_.getTriangles().length === 0) {
      this.state = TileState_default.EMPTY;
      return;
    }
    this.sourceZ_ = this.sourceTileGrid_.getZForResolution(sourceResolution);
    let sourceExtent = this.triangulation_.calculateSourceExtent();
    if (maxSourceExtent) {
      if (sourceProj.canWrapX()) {
        sourceExtent[1] = clamp(
          sourceExtent[1],
          maxSourceExtent[1],
          maxSourceExtent[3]
        );
        sourceExtent[3] = clamp(
          sourceExtent[3],
          maxSourceExtent[1],
          maxSourceExtent[3]
        );
      } else {
        sourceExtent = getIntersection(sourceExtent, maxSourceExtent);
      }
    }
    if (!getArea(sourceExtent)) {
      this.state = TileState_default.EMPTY;
    } else {
      let worldWidth = 0;
      let worldsAway = 0;
      if (sourceProj.canWrapX()) {
        worldWidth = getWidth(sourceProjExtent);
        worldsAway = Math.floor(
          (sourceExtent[0] - sourceProjExtent[0]) / worldWidth
        );
      }
      const sourceExtents = wrapAndSliceX(
        sourceExtent.slice(),
        sourceProj,
        true
      );
      sourceExtents.forEach((extent) => {
        const sourceRange = this.sourceTileGrid_.getTileRangeForExtentAndZ(
          extent,
          this.sourceZ_
        );
        const getTile = options.getTileFunction;
        for (let srcX = sourceRange.minX; srcX <= sourceRange.maxX; srcX++) {
          for (let srcY = sourceRange.minY; srcY <= sourceRange.maxY; srcY++) {
            const tile = getTile(this.sourceZ_, srcX, srcY, this.pixelRatio_);
            if (tile) {
              const offset = worldsAway * worldWidth;
              this.sourceTiles_.push({ tile, offset });
            }
          }
        }
        ++worldsAway;
      });
      if (this.sourceTiles_.length === 0) {
        this.state = TileState_default.EMPTY;
      }
    }
  }
  /**
   * Get the tile size.
   * @return {import('../size.js').Size} Tile size.
   * @override
   */
  getSize() {
    return this.reprojSize_;
  }
  /**
   * Get the data for the tile.
   * @return {import("../DataTile.js").Data} Tile data.
   * @override
   */
  getData() {
    return this.reprojData_;
  }
  /**
   * Get any loading error.
   * @return {Error} Loading error.
   * @override
   */
  getError() {
    return this.reprojError_;
  }
  /**
   * @private
   */
  reproject_() {
    const dataSources = [];
    let imageLike = false;
    this.sourceTiles_.forEach((source) => {
      var _a;
      const tile = source.tile;
      if (!tile || tile.getState() !== TileState_default.LOADED) {
        return;
      }
      const size2 = tile.getSize();
      const gutter = this.gutter_;
      let tileData;
      const arrayData = asArrayLike(tile.getData());
      if (arrayData) {
        tileData = arrayData;
      } else {
        imageLike = true;
        tileData = toArray(asImageLike(tile.getData()));
      }
      const pixelSize = [size2[0] + 2 * gutter, size2[1] + 2 * gutter];
      const isFloat = tileData instanceof Float32Array;
      const pixelCount = pixelSize[0] * pixelSize[1];
      const DataType = isFloat ? Float32Array : Uint8ClampedArray;
      const tileDataR = new DataType(tileData.buffer);
      const bytesPerElement = DataType.BYTES_PER_ELEMENT;
      const bytesPerPixel = bytesPerElement * tileDataR.length / pixelCount;
      const bytesPerRow = tileDataR.byteLength / pixelSize[1];
      const bandCount2 = Math.floor(
        bytesPerRow / bytesPerElement / pixelSize[0]
      );
      const extent = this.sourceTileGrid_.getTileCoordExtent(tile.tileCoord);
      extent[0] += source.offset;
      extent[2] += source.offset;
      const clipExtent = (_a = this.clipExtent_) == null ? void 0 : _a.slice();
      if (clipExtent) {
        clipExtent[0] += source.offset;
        clipExtent[2] += source.offset;
      }
      dataSources.push({
        extent,
        clipExtent,
        data: tileDataR,
        dataType: DataType,
        bytesPerPixel,
        pixelSize,
        bandCount: bandCount2
      });
    });
    this.sourceTiles_.length = 0;
    if (dataSources.length === 0) {
      this.state = TileState_default.ERROR;
      this.changed();
      return;
    }
    const z3 = this.wrappedTileCoord_[0];
    const size = this.targetTileGrid_.getTileSize(z3);
    const targetWidth = typeof size === "number" ? size : size[0];
    const targetHeight = typeof size === "number" ? size : size[1];
    const outWidth = targetWidth * this.pixelRatio_;
    const outHeight = targetHeight * this.pixelRatio_;
    const targetResolution = this.targetTileGrid_.getResolution(z3);
    const sourceResolution = this.sourceTileGrid_.getResolution(this.sourceZ_);
    const targetExtent = this.targetTileGrid_.getTileCoordExtent(
      this.wrappedTileCoord_
    );
    const bandCount = dataSources[0].bandCount;
    const dataR = new dataSources[0].dataType(bandCount * outWidth * outHeight);
    const gl = createCanvasContextWebGL(outWidth, outHeight, canvasGLPool, {
      premultipliedAlpha: false,
      antialias: false
    });
    let willInterpolate;
    const format2 = gl.RGBA;
    let textureType;
    if (dataSources[0].dataType == Float32Array) {
      textureType = gl.FLOAT;
      gl.getExtension("WEBGL_color_buffer_float");
      gl.getExtension("OES_texture_float");
      gl.getExtension("EXT_float_blend");
      const extension = gl.getExtension("OES_texture_float_linear");
      const canInterpolate = extension !== null;
      willInterpolate = canInterpolate && this.interpolate;
    } else {
      textureType = gl.UNSIGNED_BYTE;
      willInterpolate = this.interpolate;
    }
    const BANDS_PR_REPROJ = 4;
    const reprojs = Math.ceil(bandCount / BANDS_PR_REPROJ);
    for (let reproj = reprojs - 1; reproj >= 0; --reproj) {
      const sources = [];
      for (let i5 = 0, len = dataSources.length; i5 < len; ++i5) {
        const dataSource = dataSources[i5];
        const pixelSize = dataSource.pixelSize;
        const width2 = pixelSize[0];
        const height2 = pixelSize[1];
        const data2 = new dataSource.dataType(BANDS_PR_REPROJ * width2 * height2);
        const dataS = dataSource.data;
        let offset2 = reproj * BANDS_PR_REPROJ;
        for (let j3 = 0, len2 = data2.length; j3 < len2; j3 += BANDS_PR_REPROJ) {
          data2[j3] = dataS[offset2];
          data2[j3 + 1] = dataS[offset2 + 1];
          data2[j3 + 2] = dataS[offset2 + 2];
          data2[j3 + 3] = dataS[offset2 + 3];
          offset2 += bandCount;
        }
        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        if (willInterpolate) {
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        } else {
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        }
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          format2,
          width2,
          height2,
          0,
          format2,
          textureType,
          data2
        );
        sources.push({
          extent: dataSource.extent,
          clipExtent: dataSource.clipExtent,
          texture,
          width: width2,
          height: height2
        });
      }
      const { framebuffer, width, height } = render(
        gl,
        targetWidth,
        targetHeight,
        this.pixelRatio_,
        sourceResolution,
        targetResolution,
        targetExtent,
        this.triangulation_,
        sources,
        this.gutter_,
        textureType,
        this.renderEdges_,
        willInterpolate
      );
      const rows = width;
      const cols = height * BANDS_PR_REPROJ;
      const data = new dataSources[0].dataType(rows * cols);
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.readPixels(0, 0, width, height, gl.RGBA, textureType, data);
      let offset = reproj * BANDS_PR_REPROJ;
      for (let i5 = 0, len = data.length; i5 < len; i5 += BANDS_PR_REPROJ) {
        const flipY = (rows - 1 - (i5 / cols | 0)) * cols + i5 % cols;
        dataR[offset] = data[flipY];
        dataR[offset + 1] = data[flipY + 1];
        dataR[offset + 2] = data[flipY + 2];
        dataR[offset + 3] = data[flipY + 3];
        offset += bandCount;
      }
    }
    releaseGLCanvas(gl);
    canvasGLPool.push(gl.canvas);
    if (imageLike) {
      const context = createCanvasContext2D(targetWidth, targetHeight);
      const imageData = new ImageData(dataR, targetWidth);
      context.putImageData(imageData, 0, 0);
      this.reprojData_ = context.canvas;
    } else {
      this.reprojData_ = dataR;
    }
    this.reprojSize_ = [Math.round(outWidth), Math.round(outHeight)];
    this.state = TileState_default.LOADED;
    this.changed();
  }
  /**
   * Load not yet loaded URI.
   * @override
   */
  load() {
    if (this.state !== TileState_default.IDLE && this.state !== TileState_default.ERROR) {
      return;
    }
    this.state = TileState_default.LOADING;
    this.changed();
    let leftToLoad = 0;
    this.sourcesListenerKeys_ = [];
    this.sourceTiles_.forEach(({ tile }) => {
      const state = tile.getState();
      if (state !== TileState_default.IDLE && state !== TileState_default.LOADING) {
        return;
      }
      leftToLoad++;
      const sourceListenKey = listen(tile, EventType_default.CHANGE, () => {
        const state2 = tile.getState();
        if (state2 == TileState_default.LOADED || state2 == TileState_default.ERROR || state2 == TileState_default.EMPTY) {
          unlistenByKey(sourceListenKey);
          leftToLoad--;
          if (leftToLoad === 0) {
            this.unlistenSources_();
            this.reproject_();
          }
        }
      });
      this.sourcesListenerKeys_.push(sourceListenKey);
    });
    if (leftToLoad === 0) {
      setTimeout(this.reproject_.bind(this), 0);
    } else {
      this.sourceTiles_.forEach(function({ tile }) {
        const state = tile.getState();
        if (state == TileState_default.IDLE) {
          tile.load();
        }
      });
    }
  }
  /**
   * @private
   */
  unlistenSources_() {
    this.sourcesListenerKeys_.forEach(unlistenByKey);
    this.sourcesListenerKeys_ = null;
  }
};
var DataTile_default2 = ReprojDataTile;

// node_modules/ol/source/DataTile.js
var DataTileSource = class extends Tile_default {
  /**
   * @param {Options} options DataTile source options.
   */
  constructor(options) {
    const projection = options.projection === void 0 ? "EPSG:3857" : options.projection;
    let tileGrid = options.tileGrid;
    if (tileGrid === void 0 && projection) {
      tileGrid = createXYZ({
        extent: extentFromProjection(projection),
        maxResolution: options.maxResolution,
        maxZoom: options.maxZoom,
        minZoom: options.minZoom,
        tileSize: options.tileSize
      });
    }
    super({
      cacheSize: 0.1,
      // don't cache on the source
      attributions: options.attributions,
      attributionsCollapsible: options.attributionsCollapsible,
      projection,
      tileGrid,
      state: options.state,
      wrapX: options.wrapX,
      transition: options.transition,
      interpolate: options.interpolate,
      key: options.key,
      zDirection: options.zDirection
    });
    this.gutter_ = options.gutter !== void 0 ? options.gutter : 0;
    this.tileSize_ = options.tileSize ? toSize(options.tileSize) : null;
    this.tileSizes_ = null;
    this.tileLoadingKeys_ = {};
    this.loader_ = options.loader;
    this.handleTileChange_ = this.handleTileChange_.bind(this);
    this.bandCount = options.bandCount === void 0 ? 4 : options.bandCount;
    this.tileGridForProjection_ = {};
    this.crossOrigin_ = options.crossOrigin || "anonymous";
    this.transformMatrix = null;
  }
  /**
   * Set the source tile sizes.  The length of the array is expected to match the number of
   * levels in the tile grid.
   * @protected
   * @param {Array<import('../size.js').Size>} tileSizes An array of tile sizes.
   */
  setTileSizes(tileSizes) {
    this.tileSizes_ = tileSizes;
  }
  /**
   * Get the source tile size at the given zoom level.  This may be different than the rendered tile
   * size.
   * @protected
   * @param {number} z Tile zoom level.
   * @return {import('../size.js').Size} The source tile size.
   */
  getTileSize(z3) {
    if (this.tileSizes_) {
      return this.tileSizes_[z3];
    }
    if (this.tileSize_) {
      return this.tileSize_;
    }
    const tileGrid = this.getTileGrid();
    return tileGrid ? toSize(tileGrid.getTileSize(z3)) : [256, 256];
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {number} Gutter.
   * @override
   */
  getGutterForProjection(projection) {
    const thisProj = this.getProjection();
    if ((!thisProj || equivalent(thisProj, projection)) && !this.transformMatrix) {
      return this.gutter_;
    }
    return 0;
  }
  /**
   * @param {Loader} loader The data loader.
   * @protected
   */
  setLoader(loader) {
    this.loader_ = loader;
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {import("../proj/Projection.js").default} targetProj The output projection.
   * @param {import("../proj/Projection.js").default} sourceProj The input projection.
   * @return {!TileType} Tile.
   */
  getReprojTile_(z3, x3, y5, targetProj, sourceProj) {
    const sourceTileGrid = this.tileGrid || this.getTileGridForProjection(sourceProj || targetProj);
    const reprojTilePixelRatio = Math.max.apply(
      null,
      sourceTileGrid.getResolutions().map((r5, z4) => {
        const tileSize = toSize(sourceTileGrid.getTileSize(z4));
        const textureSize = this.getTileSize(z4);
        return Math.max(
          textureSize[0] / tileSize[0],
          textureSize[1] / tileSize[1]
        );
      })
    );
    const targetTileGrid = this.getTileGridForProjection(targetProj);
    const tileCoord = [z3, x3, y5];
    const wrappedTileCoord = this.getTileCoordForTileUrlFunction(
      tileCoord,
      targetProj
    );
    const options = Object.assign(
      {
        sourceProj: sourceProj || targetProj,
        sourceTileGrid,
        targetProj,
        targetTileGrid,
        tileCoord,
        wrappedTileCoord,
        pixelRatio: reprojTilePixelRatio,
        gutter: this.gutter_,
        getTileFunction: (z4, x4, y6, pixelRatio) => this.getTile(z4, x4, y6, pixelRatio),
        transformMatrix: this.transformMatrix
      },
      /** @type {import("../reproj/DataTile.js").Options} */
      this.tileOptions
    );
    const tile = (
      /** @type {TileType} */
      /** @type {*} */
      new DataTile_default2(options)
    );
    tile.key = this.getKey();
    return tile;
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../proj/Projection.js").default} [projection] Projection.
   * @return {TileType|null} Tile (or null if outside source extent).
   * @override
   */
  getTile(z3, x3, y5, pixelRatio, projection) {
    var _a;
    const sourceProjection = this.getProjection();
    if (projection && (sourceProjection && !equivalent(sourceProjection, projection) || this.transformMatrix)) {
      return this.getReprojTile_(z3, x3, y5, projection, sourceProjection);
    }
    const size = this.getTileSize(z3);
    const sourceLoader = this.loader_;
    const controller = new AbortController();
    const loaderOptions = {
      signal: controller.signal,
      crossOrigin: this.crossOrigin_
    };
    const tileCoord = this.getTileCoordForTileUrlFunction([z3, x3, y5]);
    if (!tileCoord) {
      return null;
    }
    const requestZ = tileCoord[0];
    const requestX = tileCoord[1];
    const requestY = tileCoord[2];
    const range = (_a = this.getTileGrid()) == null ? void 0 : _a.getFullTileRange(requestZ);
    if (range) {
      loaderOptions.maxY = range.getHeight() - 1;
    }
    function loader() {
      return toPromise(function() {
        return sourceLoader(requestZ, requestX, requestY, loaderOptions);
      });
    }
    const options = Object.assign(
      {
        tileCoord: [z3, x3, y5],
        loader,
        size,
        controller
      },
      this.tileOptions
    );
    const tile = (
      /** @type {TileType} */
      /** @type {*} */
      new DataTile_default(options)
    );
    tile.key = this.getKey();
    tile.addEventListener(EventType_default.CHANGE, this.handleTileChange_);
    return tile;
  }
  /**
   * Handle tile change events.
   * @param {import("../events/Event.js").default} event Event.
   */
  handleTileChange_(event) {
    const tile = (
      /** @type {import("../Tile.js").default} */
      event.target
    );
    const uid = getUid(tile);
    const tileState = tile.getState();
    let type;
    if (tileState == TileState_default.LOADING) {
      this.tileLoadingKeys_[uid] = true;
      type = TileEventType_default.TILELOADSTART;
    } else if (uid in this.tileLoadingKeys_) {
      delete this.tileLoadingKeys_[uid];
      type = tileState == TileState_default.ERROR ? TileEventType_default.TILELOADERROR : tileState == TileState_default.LOADED ? TileEventType_default.TILELOADEND : void 0;
    }
    if (type) {
      this.dispatchEvent(new TileSourceEvent(type, tile));
    }
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
   * @override
   */
  getTileGridForProjection(projection) {
    const thisProj = this.getProjection();
    if (this.tileGrid && (!thisProj || equivalent(thisProj, projection)) && !this.transformMatrix) {
      return this.tileGrid;
    }
    const projKey = getUid(projection);
    if (!(projKey in this.tileGridForProjection_)) {
      this.tileGridForProjection_[projKey] = getForProjection(projection);
    }
    return this.tileGridForProjection_[projKey];
  }
  /**
   * Sets the tile grid to use when reprojecting the tiles to the given
   * projection instead of the default tile grid for the projection.
   *
   * This can be useful when the default tile grid cannot be created
   * (e.g. projection has no extent defined) or
   * for optimization reasons (custom tile size, resolutions, ...).
   *
   * @param {import("../proj.js").ProjectionLike} projection Projection.
   * @param {import("../tilegrid/TileGrid.js").default} tilegrid Tile grid to use for the projection.
   * @api
   */
  setTileGridForProjection(projection, tilegrid) {
    const proj = get(projection);
    if (proj) {
      const projKey = getUid(proj);
      if (!(projKey in this.tileGridForProjection_)) {
        this.tileGridForProjection_[projKey] = tilegrid;
      }
    }
  }
};
var DataTile_default3 = DataTileSource;

// node_modules/ol/source/GeoTIFF.js
function isMask(image) {
  const fileDirectory = image.fileDirectory;
  const type = fileDirectory.NewSubfileType || 0;
  return (type & 4) === 4;
}
function readRGB(preference, image) {
  if (!preference) {
    return false;
  }
  if (preference === true) {
    return true;
  }
  if (image.getSamplesPerPixel() !== 3) {
    return false;
  }
  const interpretation = image.fileDirectory.PhotometricInterpretation;
  const interpretations = globals_exports.photometricInterpretations;
  return interpretation === interpretations.CMYK || interpretation === interpretations.YCbCr || interpretation === interpretations.CIELab || interpretation === interpretations.ICCLab;
}
var STATISTICS_MAXIMUM = "STATISTICS_MAXIMUM";
var STATISTICS_MINIMUM = "STATISTICS_MINIMUM";
var defaultTileSize = 256;
var workerPool;
function getWorkerPool() {
  if (!workerPool) {
    workerPool = new pool_default();
  }
  return workerPool;
}
function getBoundingBox(image) {
  try {
    return image.getBoundingBox(true);
  } catch (e5) {
    return [0, 0, image.getWidth(), image.getHeight()];
  }
}
function getOrigin(image) {
  try {
    return image.getOrigin().slice(0, 2);
  } catch (e5) {
    return [0, image.getHeight()];
  }
}
function getResolutions(image, referenceImage) {
  try {
    return image.getResolution(referenceImage);
  } catch (e5) {
    return [
      referenceImage.getWidth() / image.getWidth(),
      referenceImage.getHeight() / image.getHeight()
    ];
  }
}
function getProjection(image) {
  const geoKeys = image.geoKeys;
  if (!geoKeys) {
    return null;
  }
  if (geoKeys.ProjectedCSTypeGeoKey && geoKeys.ProjectedCSTypeGeoKey !== 32767) {
    const code = "EPSG:" + geoKeys.ProjectedCSTypeGeoKey;
    let projection = get(code);
    if (!projection) {
      const units = fromCode(geoKeys.ProjLinearUnitsGeoKey);
      if (units) {
        projection = new Projection_default({
          code,
          units
        });
      }
    }
    return projection;
  }
  if (geoKeys.GeographicTypeGeoKey && geoKeys.GeographicTypeGeoKey !== 32767) {
    const code = "EPSG:" + geoKeys.GeographicTypeGeoKey;
    let projection = get(code);
    if (!projection) {
      const units = fromCode(geoKeys.GeogAngularUnitsGeoKey);
      if (units) {
        projection = new Projection_default({
          code,
          units
        });
      }
    }
    return projection;
  }
  return null;
}
function getImagesForTIFF(tiff) {
  return tiff.getImageCount().then(function(count) {
    const requests = new Array(count);
    for (let i5 = 0; i5 < count; ++i5) {
      requests[i5] = tiff.getImage(i5);
    }
    return Promise.all(requests);
  });
}
function getImagesForSource(source, options) {
  let request3;
  if (source.blob) {
    request3 = fromBlob(source.blob);
  } else if (source.overviews) {
    request3 = fromUrls(source.url, source.overviews, options);
  } else {
    request3 = fromUrl(source.url, options);
  }
  return request3.then(getImagesForTIFF);
}
function assertEqual(expected, got, tolerance, message, rejector) {
  if (Array.isArray(expected)) {
    const length = expected.length;
    if (!Array.isArray(got) || length != got.length) {
      const error2 = new Error(message);
      rejector(error2);
      throw error2;
    }
    for (let i5 = 0; i5 < length; ++i5) {
      assertEqual(expected[i5], got[i5], tolerance, message, rejector);
    }
    return;
  }
  got = /** @type {number} */
  got;
  if (Math.abs(expected - got) > tolerance * expected) {
    throw new Error(message);
  }
}
function getMinForDataType(array) {
  if (array instanceof Int8Array) {
    return -128;
  }
  if (array instanceof Int16Array) {
    return -32768;
  }
  if (array instanceof Int32Array) {
    return -2147483648;
  }
  if (array instanceof Float32Array) {
    return 12e-39;
  }
  return 0;
}
function getMaxForDataType(array) {
  if (array instanceof Int8Array) {
    return 127;
  }
  if (array instanceof Uint8Array) {
    return 255;
  }
  if (array instanceof Uint8ClampedArray) {
    return 255;
  }
  if (array instanceof Int16Array) {
    return 32767;
  }
  if (array instanceof Uint16Array) {
    return 65535;
  }
  if (array instanceof Int32Array) {
    return 2147483647;
  }
  if (array instanceof Uint32Array) {
    return 4294967295;
  }
  if (array instanceof Float32Array) {
    return 34e37;
  }
  return 255;
}
var GeoTIFFSource = class extends DataTile_default3 {
  /**
   * @param {Options} options Data tile options.
   */
  constructor(options) {
    super({
      state: "loading",
      tileGrid: null,
      projection: options.projection || null,
      transition: options.transition,
      interpolate: options.interpolate !== false,
      wrapX: options.wrapX
    });
    this.sourceInfo_ = options.sources;
    const numSources = this.sourceInfo_.length;
    this.sourceOptions_ = options.sourceOptions;
    this.sourceImagery_ = new Array(numSources);
    this.sourceMasks_ = new Array(numSources);
    this.resolutionFactors_ = new Array(numSources);
    this.samplesPerPixel_;
    this.nodataValues_;
    this.metadata_;
    this.normalize_ = options.normalize !== false;
    this.addAlpha_ = false;
    this.error_ = null;
    this.convertToRGB_ = options.convertToRGB || false;
    this.setKey(this.sourceInfo_.map((source) => source.url).join(","));
    const self2 = this;
    const requests = new Array(numSources);
    for (let i5 = 0; i5 < numSources; ++i5) {
      requests[i5] = getImagesForSource(
        this.sourceInfo_[i5],
        this.sourceOptions_
      );
    }
    Promise.all(requests).then(function(sources) {
      self2.configure_(sources);
    }).catch(function(error2) {
      error(error2);
      self2.error_ = error2;
      self2.setState("error");
    });
  }
  /**
   * @return {Error} A source loading error. When the source state is `error`, use this function
   * to get more information about the error. To debug a faulty configuration, you may want to use
   * a listener like
   * ```js
   * geotiffSource.on('change', () => {
   *   if (geotiffSource.getState() === 'error') {
   *     console.error(geotiffSource.getError());
   *   }
   * });
   * ```
   */
  getError() {
    return this.error_;
  }
  /**
   * Determine the projection of the images in this GeoTIFF.
   * The default implementation looks at the ProjectedCSTypeGeoKey and the GeographicTypeGeoKey
   * of each image in turn.
   * You can override this method in a subclass to support more projections.
   *
   * @param {Array<Array<GeoTIFFImage>>} sources Each source is a list of images
   * from a single GeoTIFF.
   */
  determineProjection(sources) {
    const firstSource = sources[0];
    for (let i5 = firstSource.length - 1; i5 >= 0; --i5) {
      const image = firstSource[i5];
      const projection = getProjection(image);
      if (projection) {
        this.projection = projection;
        break;
      }
    }
  }
  /**
   * Determine any transform matrix for the images in this GeoTIFF.
   *
   * @param {Array<Array<GeoTIFFImage>>} sources Each source is a list of images
   * from a single GeoTIFF.
   */
  determineTransformMatrix(sources) {
    const firstSource = sources[0];
    for (let i5 = firstSource.length - 1; i5 >= 0; --i5) {
      const image = firstSource[i5];
      const modelTransformation = image.fileDirectory.ModelTransformation;
      if (modelTransformation) {
        const [a5, b4, c5, d4, e5, f5, g4, h5] = modelTransformation;
        const matrix = multiply(
          multiply(
            [
              1 / Math.sqrt(a5 * a5 + e5 * e5),
              0,
              0,
              -1 / Math.sqrt(b4 * b4 + f5 * f5),
              d4,
              h5
            ],
            [a5, e5, b4, f5, 0, 0]
          ),
          [1, 0, 0, 1, -d4, -h5]
        );
        this.transformMatrix = matrix;
        this.addAlpha_ = true;
        break;
      }
    }
  }
  /**
   * Configure the tile grid based on images within the source GeoTIFFs.  Each GeoTIFF
   * must have the same internal tiled structure.
   * @param {Array<Array<GeoTIFFImage>>} sources Each source is a list of images
   * from a single GeoTIFF.
   * @private
   */
  configure_(sources) {
    let extent;
    let origin;
    let commonRenderTileSizes;
    let commonSourceTileSizes;
    let resolutions;
    const samplesPerPixel = new Array(sources.length);
    const nodataValues = new Array(sources.length);
    const metadata = new Array(sources.length);
    let minZoom = 0;
    const sourceCount = sources.length;
    for (let sourceIndex = 0; sourceIndex < sourceCount; ++sourceIndex) {
      const images = [];
      const masks = [];
      sources[sourceIndex].forEach((item) => {
        if (isMask(item)) {
          masks.push(item);
        } else {
          images.push(item);
        }
      });
      const imageCount = images.length;
      if (masks.length > 0 && masks.length !== imageCount) {
        throw new Error(
          `Expected one mask per image found ${masks.length} masks and ${imageCount} images`
        );
      }
      let sourceExtent;
      let sourceOrigin;
      const sourceTileSizes = new Array(imageCount);
      const renderTileSizes = new Array(imageCount);
      const sourceResolutions = new Array(imageCount);
      nodataValues[sourceIndex] = new Array(imageCount);
      metadata[sourceIndex] = new Array(imageCount);
      for (let imageIndex = 0; imageIndex < imageCount; ++imageIndex) {
        const image = images[imageIndex];
        const nodataValue = image.getGDALNoData();
        metadata[sourceIndex][imageIndex] = image.getGDALMetadata(0);
        nodataValues[sourceIndex][imageIndex] = nodataValue;
        const wantedSamples = this.sourceInfo_[sourceIndex].bands;
        samplesPerPixel[sourceIndex] = wantedSamples ? wantedSamples.length : image.getSamplesPerPixel();
        const level = imageCount - (imageIndex + 1);
        if (!sourceExtent) {
          sourceExtent = getBoundingBox(image);
        }
        if (!sourceOrigin) {
          sourceOrigin = getOrigin(image);
        }
        const imageResolutions = getResolutions(image, images[0]);
        sourceResolutions[level] = imageResolutions[0];
        const sourceTileSize = [image.getTileWidth(), image.getTileHeight()];
        if (sourceTileSize[0] !== sourceTileSize[1] && sourceTileSize[1] < defaultTileSize) {
          sourceTileSize[0] = defaultTileSize;
          sourceTileSize[1] = defaultTileSize;
        }
        sourceTileSizes[level] = sourceTileSize;
        const aspectRatio = imageResolutions[0] / Math.abs(imageResolutions[1]);
        renderTileSizes[level] = [
          sourceTileSize[0],
          sourceTileSize[1] / aspectRatio
        ];
      }
      if (!extent) {
        extent = sourceExtent;
      } else {
        getIntersection(extent, sourceExtent, extent);
      }
      if (!origin) {
        origin = sourceOrigin;
      } else {
        const message = `Origin mismatch for source ${sourceIndex}, got [${sourceOrigin}] but expected [${origin}]`;
        assertEqual(origin, sourceOrigin, 0, message, this.viewRejector);
      }
      if (!resolutions) {
        resolutions = sourceResolutions;
        this.resolutionFactors_[sourceIndex] = 1;
      } else {
        if (resolutions.length - minZoom > sourceResolutions.length) {
          minZoom = resolutions.length - sourceResolutions.length;
        }
        const resolutionFactor = resolutions[resolutions.length - 1] / sourceResolutions[sourceResolutions.length - 1];
        this.resolutionFactors_[sourceIndex] = resolutionFactor;
        const scaledSourceResolutions = sourceResolutions.map(
          (resolution) => resolution *= resolutionFactor
        );
        const message = `Resolution mismatch for source ${sourceIndex}, got [${scaledSourceResolutions}] but expected [${resolutions}]`;
        assertEqual(
          resolutions.slice(minZoom, resolutions.length),
          scaledSourceResolutions,
          0.02,
          message,
          this.viewRejector
        );
      }
      if (!commonRenderTileSizes) {
        commonRenderTileSizes = renderTileSizes;
      } else {
        assertEqual(
          commonRenderTileSizes.slice(minZoom, commonRenderTileSizes.length),
          renderTileSizes,
          0.01,
          `Tile size mismatch for source ${sourceIndex}`,
          this.viewRejector
        );
      }
      if (!commonSourceTileSizes) {
        commonSourceTileSizes = sourceTileSizes;
      } else {
        assertEqual(
          commonSourceTileSizes.slice(minZoom, commonSourceTileSizes.length),
          sourceTileSizes,
          0,
          `Tile size mismatch for source ${sourceIndex}`,
          this.viewRejector
        );
      }
      this.sourceImagery_[sourceIndex] = images.reverse();
      this.sourceMasks_[sourceIndex] = masks.reverse();
    }
    for (let i5 = 0, ii = this.sourceImagery_.length; i5 < ii; ++i5) {
      const sourceImagery = this.sourceImagery_[i5];
      while (sourceImagery.length < resolutions.length) {
        sourceImagery.unshift(void 0);
      }
    }
    if (!this.getProjection()) {
      this.determineProjection(sources);
    }
    this.determineTransformMatrix(sources);
    this.samplesPerPixel_ = samplesPerPixel;
    this.nodataValues_ = nodataValues;
    this.metadata_ = metadata;
    outer:
      for (let sourceIndex = 0; sourceIndex < sourceCount; ++sourceIndex) {
        if (this.sourceInfo_[sourceIndex].nodata !== void 0) {
          this.addAlpha_ = true;
          break;
        }
        if (this.sourceMasks_[sourceIndex].length) {
          this.addAlpha_ = true;
          break;
        }
        const values2 = nodataValues[sourceIndex];
        const bands = this.sourceInfo_[sourceIndex].bands;
        if (bands) {
          for (let i5 = 0; i5 < bands.length; ++i5) {
            if (values2[bands[i5] - 1] !== null) {
              this.addAlpha_ = true;
              break outer;
            }
          }
          continue;
        }
        for (let imageIndex = 0; imageIndex < values2.length; ++imageIndex) {
          if (values2[imageIndex] !== null) {
            this.addAlpha_ = true;
            break outer;
          }
        }
      }
    let bandCount = this.addAlpha_ ? 1 : 0;
    for (let sourceIndex = 0; sourceIndex < sourceCount; ++sourceIndex) {
      bandCount += samplesPerPixel[sourceIndex];
    }
    this.bandCount = bandCount;
    const tileGrid = new TileGrid_default({
      extent,
      minZoom,
      origin,
      resolutions,
      tileSizes: commonRenderTileSizes
    });
    this.tileGrid = tileGrid;
    this.setTileSizes(commonSourceTileSizes);
    this.setLoader(this.loadTile_.bind(this));
    this.setState("ready");
    const zoom = 1;
    if (resolutions.length === 2) {
      resolutions = [resolutions[0], resolutions[1], resolutions[1] / 2];
    } else if (resolutions.length === 1) {
      resolutions = [resolutions[0] * 2, resolutions[0], resolutions[0] / 2];
    }
    let viewExtent = extent;
    if (this.transformMatrix) {
      const matrix = makeInverse(create(), this.transformMatrix.slice());
      const transformFn = createTransformFromCoordinateTransform(
        (input) => apply(matrix, input)
      );
      viewExtent = applyTransform(extent, transformFn);
    }
    this.viewResolver({
      showFullExtent: true,
      projection: this.projection,
      resolutions,
      center: toUserCoordinate(getCenter(viewExtent), this.projection),
      extent: toUserExtent(viewExtent, this.projection),
      zoom
    });
  }
  /**
   * @param {number} z The z tile index.
   * @param {number} x The x tile index.
   * @param {number} y The y tile index.
   * @param {import('./DataTile.js').LoaderOptions} options The loader options.
   * @return {Promise} The composed tile data.
   * @private
   */
  loadTile_(z3, x3, y5, options) {
    const sourceTileSize = this.getTileSize(z3);
    const sourceCount = this.sourceImagery_.length;
    const requests = new Array(sourceCount * 2);
    const nodataValues = this.nodataValues_;
    const sourceInfo = this.sourceInfo_;
    const pool = getWorkerPool();
    for (let sourceIndex = 0; sourceIndex < sourceCount; ++sourceIndex) {
      const source = sourceInfo[sourceIndex];
      const resolutionFactor = this.resolutionFactors_[sourceIndex];
      const pixelBounds = [
        Math.round(x3 * (sourceTileSize[0] * resolutionFactor)),
        Math.round(y5 * (sourceTileSize[1] * resolutionFactor)),
        Math.round((x3 + 1) * (sourceTileSize[0] * resolutionFactor)),
        Math.round((y5 + 1) * (sourceTileSize[1] * resolutionFactor))
      ];
      const image = this.sourceImagery_[sourceIndex][z3];
      let samples;
      if (source.bands) {
        samples = source.bands.map(function(bandNumber) {
          return bandNumber - 1;
        });
      }
      let fillValue;
      if ("nodata" in source && source.nodata !== null) {
        fillValue = source.nodata;
      } else {
        if (!samples) {
          fillValue = nodataValues[sourceIndex];
        } else {
          fillValue = samples.map(function(sampleIndex) {
            return nodataValues[sourceIndex][sampleIndex];
          });
        }
      }
      const readOptions = {
        window: pixelBounds,
        width: sourceTileSize[0],
        height: sourceTileSize[1],
        samples,
        fillValue,
        pool,
        interleave: false,
        signal: options.signal
      };
      if (readRGB(this.convertToRGB_, image)) {
        requests[sourceIndex] = image.readRGB(readOptions);
      } else {
        requests[sourceIndex] = image.readRasters(readOptions);
      }
      const maskIndex = sourceCount + sourceIndex;
      const mask = this.sourceMasks_[sourceIndex][z3];
      if (!mask) {
        requests[maskIndex] = Promise.resolve(null);
        continue;
      }
      requests[maskIndex] = mask.readRasters({
        window: pixelBounds,
        width: sourceTileSize[0],
        height: sourceTileSize[1],
        samples: [0],
        pool,
        interleave: false
      });
    }
    return Promise.all(requests).then(this.composeTile_.bind(this, sourceTileSize)).catch(function(error2) {
      error(error2);
      throw error2;
    });
  }
  /**
   * @param {import("../size.js").Size} sourceTileSize The source tile size.
   * @param {Array} sourceSamples The source samples.
   * @return {import("../DataTile.js").Data} The composed tile data.
   * @private
   */
  composeTile_(sourceTileSize, sourceSamples) {
    const metadata = this.metadata_;
    const sourceInfo = this.sourceInfo_;
    const sourceCount = this.sourceImagery_.length;
    const bandCount = this.bandCount;
    const samplesPerPixel = this.samplesPerPixel_;
    const nodataValues = this.nodataValues_;
    const normalize = this.normalize_;
    const addAlpha = this.addAlpha_;
    const pixelCount = sourceTileSize[0] * sourceTileSize[1];
    const dataLength = pixelCount * bandCount;
    let data;
    if (normalize) {
      data = new Uint8Array(dataLength);
    } else {
      data = new Float32Array(dataLength);
    }
    let dataIndex = 0;
    for (let pixelIndex = 0; pixelIndex < pixelCount; ++pixelIndex) {
      let transparent = addAlpha;
      for (let sourceIndex = 0; sourceIndex < sourceCount; ++sourceIndex) {
        const source = sourceInfo[sourceIndex];
        let min = source.min;
        let max = source.max;
        let gain, bias;
        if (normalize) {
          const stats = metadata[sourceIndex][0];
          if (min === void 0) {
            if (stats && STATISTICS_MINIMUM in stats) {
              min = parseFloat(stats[STATISTICS_MINIMUM]);
            } else {
              min = getMinForDataType(sourceSamples[sourceIndex][0]);
            }
          }
          if (max === void 0) {
            if (stats && STATISTICS_MAXIMUM in stats) {
              max = parseFloat(stats[STATISTICS_MAXIMUM]);
            } else {
              max = getMaxForDataType(sourceSamples[sourceIndex][0]);
            }
          }
          gain = 255 / (max - min);
          bias = -min * gain;
        }
        for (let sampleIndex = 0; sampleIndex < samplesPerPixel[sourceIndex]; ++sampleIndex) {
          const sourceValue = sourceSamples[sourceIndex][sampleIndex][pixelIndex];
          let value;
          if (normalize) {
            value = clamp(gain * sourceValue + bias, 0, 255);
          } else {
            value = sourceValue;
          }
          if (!addAlpha) {
            data[dataIndex] = value;
          } else {
            let nodata = source.nodata;
            if (nodata === void 0) {
              let bandIndex;
              if (source.bands) {
                bandIndex = source.bands[sampleIndex] - 1;
              } else {
                bandIndex = sampleIndex;
              }
              nodata = nodataValues[sourceIndex][bandIndex];
            }
            const nodataIsNaN = isNaN(nodata);
            if (!nodataIsNaN && sourceValue !== nodata || nodataIsNaN && !isNaN(sourceValue)) {
              transparent = false;
              data[dataIndex] = value;
            }
          }
          dataIndex++;
        }
        if (!transparent) {
          const maskIndex = sourceCount + sourceIndex;
          const mask = sourceSamples[maskIndex];
          if (mask && !mask[0][pixelIndex]) {
            transparent = true;
          }
        }
      }
      if (addAlpha) {
        if (!transparent) {
          data[dataIndex] = 255;
        }
        dataIndex++;
      }
    }
    return data;
  }
};
GeoTIFFSource.prototype.getView;
var GeoTIFF_default = GeoTIFFSource;
export {
  GeoTIFF_default as default
};
/*! Bundled license information:

@jspm/core/nodelibs/browser/chunk-CcCWfKp1.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

@jspm/core/nodelibs/browser/chunk-B738Er4n.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
