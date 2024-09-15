"use strict";
var Themed = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // <define:LAST_COMMIT_HASH>
  var init_define_LAST_COMMIT_HASH = __esm({
    "<define:LAST_COMMIT_HASH>"() {
    }
  });

  // node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js
  var require_color_name = __commonJS({
    "node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js"(exports, module) {
      "use strict";
      init_define_LAST_COMMIT_HASH();
      module.exports = {
        "aliceblue": [240, 248, 255],
        "antiquewhite": [250, 235, 215],
        "aqua": [0, 255, 255],
        "aquamarine": [127, 255, 212],
        "azure": [240, 255, 255],
        "beige": [245, 245, 220],
        "bisque": [255, 228, 196],
        "black": [0, 0, 0],
        "blanchedalmond": [255, 235, 205],
        "blue": [0, 0, 255],
        "blueviolet": [138, 43, 226],
        "brown": [165, 42, 42],
        "burlywood": [222, 184, 135],
        "cadetblue": [95, 158, 160],
        "chartreuse": [127, 255, 0],
        "chocolate": [210, 105, 30],
        "coral": [255, 127, 80],
        "cornflowerblue": [100, 149, 237],
        "cornsilk": [255, 248, 220],
        "crimson": [220, 20, 60],
        "cyan": [0, 255, 255],
        "darkblue": [0, 0, 139],
        "darkcyan": [0, 139, 139],
        "darkgoldenrod": [184, 134, 11],
        "darkgray": [169, 169, 169],
        "darkgreen": [0, 100, 0],
        "darkgrey": [169, 169, 169],
        "darkkhaki": [189, 183, 107],
        "darkmagenta": [139, 0, 139],
        "darkolivegreen": [85, 107, 47],
        "darkorange": [255, 140, 0],
        "darkorchid": [153, 50, 204],
        "darkred": [139, 0, 0],
        "darksalmon": [233, 150, 122],
        "darkseagreen": [143, 188, 143],
        "darkslateblue": [72, 61, 139],
        "darkslategray": [47, 79, 79],
        "darkslategrey": [47, 79, 79],
        "darkturquoise": [0, 206, 209],
        "darkviolet": [148, 0, 211],
        "deeppink": [255, 20, 147],
        "deepskyblue": [0, 191, 255],
        "dimgray": [105, 105, 105],
        "dimgrey": [105, 105, 105],
        "dodgerblue": [30, 144, 255],
        "firebrick": [178, 34, 34],
        "floralwhite": [255, 250, 240],
        "forestgreen": [34, 139, 34],
        "fuchsia": [255, 0, 255],
        "gainsboro": [220, 220, 220],
        "ghostwhite": [248, 248, 255],
        "gold": [255, 215, 0],
        "goldenrod": [218, 165, 32],
        "gray": [128, 128, 128],
        "green": [0, 128, 0],
        "greenyellow": [173, 255, 47],
        "grey": [128, 128, 128],
        "honeydew": [240, 255, 240],
        "hotpink": [255, 105, 180],
        "indianred": [205, 92, 92],
        "indigo": [75, 0, 130],
        "ivory": [255, 255, 240],
        "khaki": [240, 230, 140],
        "lavender": [230, 230, 250],
        "lavenderblush": [255, 240, 245],
        "lawngreen": [124, 252, 0],
        "lemonchiffon": [255, 250, 205],
        "lightblue": [173, 216, 230],
        "lightcoral": [240, 128, 128],
        "lightcyan": [224, 255, 255],
        "lightgoldenrodyellow": [250, 250, 210],
        "lightgray": [211, 211, 211],
        "lightgreen": [144, 238, 144],
        "lightgrey": [211, 211, 211],
        "lightpink": [255, 182, 193],
        "lightsalmon": [255, 160, 122],
        "lightseagreen": [32, 178, 170],
        "lightskyblue": [135, 206, 250],
        "lightslategray": [119, 136, 153],
        "lightslategrey": [119, 136, 153],
        "lightsteelblue": [176, 196, 222],
        "lightyellow": [255, 255, 224],
        "lime": [0, 255, 0],
        "limegreen": [50, 205, 50],
        "linen": [250, 240, 230],
        "magenta": [255, 0, 255],
        "maroon": [128, 0, 0],
        "mediumaquamarine": [102, 205, 170],
        "mediumblue": [0, 0, 205],
        "mediumorchid": [186, 85, 211],
        "mediumpurple": [147, 112, 219],
        "mediumseagreen": [60, 179, 113],
        "mediumslateblue": [123, 104, 238],
        "mediumspringgreen": [0, 250, 154],
        "mediumturquoise": [72, 209, 204],
        "mediumvioletred": [199, 21, 133],
        "midnightblue": [25, 25, 112],
        "mintcream": [245, 255, 250],
        "mistyrose": [255, 228, 225],
        "moccasin": [255, 228, 181],
        "navajowhite": [255, 222, 173],
        "navy": [0, 0, 128],
        "oldlace": [253, 245, 230],
        "olive": [128, 128, 0],
        "olivedrab": [107, 142, 35],
        "orange": [255, 165, 0],
        "orangered": [255, 69, 0],
        "orchid": [218, 112, 214],
        "palegoldenrod": [238, 232, 170],
        "palegreen": [152, 251, 152],
        "paleturquoise": [175, 238, 238],
        "palevioletred": [219, 112, 147],
        "papayawhip": [255, 239, 213],
        "peachpuff": [255, 218, 185],
        "peru": [205, 133, 63],
        "pink": [255, 192, 203],
        "plum": [221, 160, 221],
        "powderblue": [176, 224, 230],
        "purple": [128, 0, 128],
        "rebeccapurple": [102, 51, 153],
        "red": [255, 0, 0],
        "rosybrown": [188, 143, 143],
        "royalblue": [65, 105, 225],
        "saddlebrown": [139, 69, 19],
        "salmon": [250, 128, 114],
        "sandybrown": [244, 164, 96],
        "seagreen": [46, 139, 87],
        "seashell": [255, 245, 238],
        "sienna": [160, 82, 45],
        "silver": [192, 192, 192],
        "skyblue": [135, 206, 235],
        "slateblue": [106, 90, 205],
        "slategray": [112, 128, 144],
        "slategrey": [112, 128, 144],
        "snow": [255, 250, 250],
        "springgreen": [0, 255, 127],
        "steelblue": [70, 130, 180],
        "tan": [210, 180, 140],
        "teal": [0, 128, 128],
        "thistle": [216, 191, 216],
        "tomato": [255, 99, 71],
        "turquoise": [64, 224, 208],
        "violet": [238, 130, 238],
        "wheat": [245, 222, 179],
        "white": [255, 255, 255],
        "whitesmoke": [245, 245, 245],
        "yellow": [255, 255, 0],
        "yellowgreen": [154, 205, 50]
      };
    }
  });

  // node_modules/.pnpm/is-arrayish@0.3.2/node_modules/is-arrayish/index.js
  var require_is_arrayish = __commonJS({
    "node_modules/.pnpm/is-arrayish@0.3.2/node_modules/is-arrayish/index.js"(exports, module) {
      init_define_LAST_COMMIT_HASH();
      module.exports = /* @__PURE__ */ __name(function isArrayish(obj) {
        if (!obj || typeof obj === "string") {
          return false;
        }
        return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
      }, "isArrayish");
    }
  });

  // node_modules/.pnpm/simple-swizzle@0.2.2/node_modules/simple-swizzle/index.js
  var require_simple_swizzle = __commonJS({
    "node_modules/.pnpm/simple-swizzle@0.2.2/node_modules/simple-swizzle/index.js"(exports, module) {
      "use strict";
      init_define_LAST_COMMIT_HASH();
      var isArrayish = require_is_arrayish();
      var concat = Array.prototype.concat;
      var slice = Array.prototype.slice;
      var swizzle = module.exports = /* @__PURE__ */ __name(function swizzle2(args) {
        var results = [];
        for (var i = 0, len = args.length; i < len; i++) {
          var arg = args[i];
          if (isArrayish(arg)) {
            results = concat.call(results, slice.call(arg));
          } else {
            results.push(arg);
          }
        }
        return results;
      }, "swizzle");
      swizzle.wrap = function(fn) {
        return function() {
          return fn(swizzle(arguments));
        };
      };
    }
  });

  // node_modules/.pnpm/color-string@1.9.1/node_modules/color-string/index.js
  var require_color_string = __commonJS({
    "node_modules/.pnpm/color-string@1.9.1/node_modules/color-string/index.js"(exports, module) {
      init_define_LAST_COMMIT_HASH();
      var colorNames = require_color_name();
      var swizzle = require_simple_swizzle();
      var hasOwnProperty = Object.hasOwnProperty;
      var reverseNames = /* @__PURE__ */ Object.create(null);
      for (name in colorNames) {
        if (hasOwnProperty.call(colorNames, name)) {
          reverseNames[colorNames[name]] = name;
        }
      }
      var name;
      var cs = module.exports = {
        to: {},
        get: {}
      };
      cs.get = function(string) {
        var prefix = string.substring(0, 3).toLowerCase();
        var val;
        var model;
        switch (prefix) {
          case "hsl":
            val = cs.get.hsl(string);
            model = "hsl";
            break;
          case "hwb":
            val = cs.get.hwb(string);
            model = "hwb";
            break;
          default:
            val = cs.get.rgb(string);
            model = "rgb";
            break;
        }
        if (!val) {
          return null;
        }
        return { model, value: val };
      };
      cs.get.rgb = function(string) {
        if (!string) {
          return null;
        }
        var abbr = /^#([a-f0-9]{3,4})$/i;
        var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
        var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
        var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
        var keyword = /^(\w+)$/;
        var rgb = [0, 0, 0, 1];
        var match;
        var i;
        var hexAlpha;
        if (match = string.match(hex)) {
          hexAlpha = match[2];
          match = match[1];
          for (i = 0; i < 3; i++) {
            var i2 = i * 2;
            rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
          }
          if (hexAlpha) {
            rgb[3] = parseInt(hexAlpha, 16) / 255;
          }
        } else if (match = string.match(abbr)) {
          match = match[1];
          hexAlpha = match[3];
          for (i = 0; i < 3; i++) {
            rgb[i] = parseInt(match[i] + match[i], 16);
          }
          if (hexAlpha) {
            rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
          }
        } else if (match = string.match(rgba)) {
          for (i = 0; i < 3; i++) {
            rgb[i] = parseInt(match[i + 1], 0);
          }
          if (match[4]) {
            if (match[5]) {
              rgb[3] = parseFloat(match[4]) * 0.01;
            } else {
              rgb[3] = parseFloat(match[4]);
            }
          }
        } else if (match = string.match(per)) {
          for (i = 0; i < 3; i++) {
            rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
          }
          if (match[4]) {
            if (match[5]) {
              rgb[3] = parseFloat(match[4]) * 0.01;
            } else {
              rgb[3] = parseFloat(match[4]);
            }
          }
        } else if (match = string.match(keyword)) {
          if (match[1] === "transparent") {
            return [0, 0, 0, 0];
          }
          if (!hasOwnProperty.call(colorNames, match[1])) {
            return null;
          }
          rgb = colorNames[match[1]];
          rgb[3] = 1;
          return rgb;
        } else {
          return null;
        }
        for (i = 0; i < 3; i++) {
          rgb[i] = clamp(rgb[i], 0, 255);
        }
        rgb[3] = clamp(rgb[3], 0, 1);
        return rgb;
      };
      cs.get.hsl = function(string) {
        if (!string) {
          return null;
        }
        var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
        var match = string.match(hsl);
        if (match) {
          var alpha = parseFloat(match[4]);
          var h = (parseFloat(match[1]) % 360 + 360) % 360;
          var s = clamp(parseFloat(match[2]), 0, 100);
          var l = clamp(parseFloat(match[3]), 0, 100);
          var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
          return [h, s, l, a];
        }
        return null;
      };
      cs.get.hwb = function(string) {
        if (!string) {
          return null;
        }
        var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
        var match = string.match(hwb);
        if (match) {
          var alpha = parseFloat(match[4]);
          var h = (parseFloat(match[1]) % 360 + 360) % 360;
          var w = clamp(parseFloat(match[2]), 0, 100);
          var b = clamp(parseFloat(match[3]), 0, 100);
          var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
          return [h, w, b, a];
        }
        return null;
      };
      cs.to.hex = function() {
        var rgba = swizzle(arguments);
        return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
      };
      cs.to.rgb = function() {
        var rgba = swizzle(arguments);
        return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
      };
      cs.to.rgb.percent = function() {
        var rgba = swizzle(arguments);
        var r = Math.round(rgba[0] / 255 * 100);
        var g = Math.round(rgba[1] / 255 * 100);
        var b = Math.round(rgba[2] / 255 * 100);
        return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g + "%, " + b + "%)" : "rgba(" + r + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
      };
      cs.to.hsl = function() {
        var hsla = swizzle(arguments);
        return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
      };
      cs.to.hwb = function() {
        var hwba = swizzle(arguments);
        var a = "";
        if (hwba.length >= 4 && hwba[3] !== 1) {
          a = ", " + hwba[3];
        }
        return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
      };
      cs.to.keyword = function(rgb) {
        return reverseNames[rgb.slice(0, 3)];
      };
      function clamp(num, min, max) {
        return Math.min(Math.max(min, num), max);
      }
      __name(clamp, "clamp");
      function hexDouble(num) {
        var str = Math.round(num).toString(16).toUpperCase();
        return str.length < 2 ? "0" + str : str;
      }
      __name(hexDouble, "hexDouble");
    }
  });

  // node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js
  var require_conversions = __commonJS({
    "node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js"(exports, module) {
      init_define_LAST_COMMIT_HASH();
      var cssKeywords = require_color_name();
      var reverseKeywords = {};
      for (const key of Object.keys(cssKeywords)) {
        reverseKeywords[cssKeywords[key]] = key;
      }
      var convert = {
        rgb: { channels: 3, labels: "rgb" },
        hsl: { channels: 3, labels: "hsl" },
        hsv: { channels: 3, labels: "hsv" },
        hwb: { channels: 3, labels: "hwb" },
        cmyk: { channels: 4, labels: "cmyk" },
        xyz: { channels: 3, labels: "xyz" },
        lab: { channels: 3, labels: "lab" },
        lch: { channels: 3, labels: "lch" },
        hex: { channels: 1, labels: ["hex"] },
        keyword: { channels: 1, labels: ["keyword"] },
        ansi16: { channels: 1, labels: ["ansi16"] },
        ansi256: { channels: 1, labels: ["ansi256"] },
        hcg: { channels: 3, labels: ["h", "c", "g"] },
        apple: { channels: 3, labels: ["r16", "g16", "b16"] },
        gray: { channels: 1, labels: ["gray"] }
      };
      module.exports = convert;
      for (const model of Object.keys(convert)) {
        if (!("channels" in convert[model])) {
          throw new Error("missing channels property: " + model);
        }
        if (!("labels" in convert[model])) {
          throw new Error("missing channel labels property: " + model);
        }
        if (convert[model].labels.length !== convert[model].channels) {
          throw new Error("channel and label counts mismatch: " + model);
        }
        const { channels, labels } = convert[model];
        delete convert[model].channels;
        delete convert[model].labels;
        Object.defineProperty(convert[model], "channels", { value: channels });
        Object.defineProperty(convert[model], "labels", { value: labels });
      }
      convert.rgb.hsl = function(rgb) {
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const min = Math.min(r, g, b);
        const max = Math.max(r, g, b);
        const delta = max - min;
        let h;
        let s;
        if (max === min) {
          h = 0;
        } else if (r === max) {
          h = (g - b) / delta;
        } else if (g === max) {
          h = 2 + (b - r) / delta;
        } else if (b === max) {
          h = 4 + (r - g) / delta;
        }
        h = Math.min(h * 60, 360);
        if (h < 0) {
          h += 360;
        }
        const l = (min + max) / 2;
        if (max === min) {
          s = 0;
        } else if (l <= 0.5) {
          s = delta / (max + min);
        } else {
          s = delta / (2 - max - min);
        }
        return [h, s * 100, l * 100];
      };
      convert.rgb.hsv = function(rgb) {
        let rdif;
        let gdif;
        let bdif;
        let h;
        let s;
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const v = Math.max(r, g, b);
        const diff = v - Math.min(r, g, b);
        const diffc = /* @__PURE__ */ __name(function(c) {
          return (v - c) / 6 / diff + 1 / 2;
        }, "diffc");
        if (diff === 0) {
          h = 0;
          s = 0;
        } else {
          s = diff / v;
          rdif = diffc(r);
          gdif = diffc(g);
          bdif = diffc(b);
          if (r === v) {
            h = bdif - gdif;
          } else if (g === v) {
            h = 1 / 3 + rdif - bdif;
          } else if (b === v) {
            h = 2 / 3 + gdif - rdif;
          }
          if (h < 0) {
            h += 1;
          } else if (h > 1) {
            h -= 1;
          }
        }
        return [
          h * 360,
          s * 100,
          v * 100
        ];
      };
      convert.rgb.hwb = function(rgb) {
        const r = rgb[0];
        const g = rgb[1];
        let b = rgb[2];
        const h = convert.rgb.hsl(rgb)[0];
        const w = 1 / 255 * Math.min(r, Math.min(g, b));
        b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
        return [h, w * 100, b * 100];
      };
      convert.rgb.cmyk = function(rgb) {
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const k = Math.min(1 - r, 1 - g, 1 - b);
        const c = (1 - r - k) / (1 - k) || 0;
        const m = (1 - g - k) / (1 - k) || 0;
        const y = (1 - b - k) / (1 - k) || 0;
        return [c * 100, m * 100, y * 100, k * 100];
      };
      function comparativeDistance(x, y) {
        return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
      }
      __name(comparativeDistance, "comparativeDistance");
      convert.rgb.keyword = function(rgb) {
        const reversed = reverseKeywords[rgb];
        if (reversed) {
          return reversed;
        }
        let currentClosestDistance = Infinity;
        let currentClosestKeyword;
        for (const keyword of Object.keys(cssKeywords)) {
          const value = cssKeywords[keyword];
          const distance = comparativeDistance(rgb, value);
          if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
          }
        }
        return currentClosestKeyword;
      };
      convert.keyword.rgb = function(keyword) {
        return cssKeywords[keyword];
      };
      convert.rgb.xyz = function(rgb) {
        let r = rgb[0] / 255;
        let g = rgb[1] / 255;
        let b = rgb[2] / 255;
        r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
        g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
        b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
        const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
        const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
        const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
        return [x * 100, y * 100, z * 100];
      };
      convert.rgb.lab = function(rgb) {
        const xyz = convert.rgb.xyz(rgb);
        let x = xyz[0];
        let y = xyz[1];
        let z = xyz[2];
        x /= 95.047;
        y /= 100;
        z /= 108.883;
        x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
        y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
        z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
        const l = 116 * y - 16;
        const a = 500 * (x - y);
        const b = 200 * (y - z);
        return [l, a, b];
      };
      convert.hsl.rgb = function(hsl) {
        const h = hsl[0] / 360;
        const s = hsl[1] / 100;
        const l = hsl[2] / 100;
        let t2;
        let t3;
        let val;
        if (s === 0) {
          val = l * 255;
          return [val, val, val];
        }
        if (l < 0.5) {
          t2 = l * (1 + s);
        } else {
          t2 = l + s - l * s;
        }
        const t1 = 2 * l - t2;
        const rgb = [0, 0, 0];
        for (let i = 0; i < 3; i++) {
          t3 = h + 1 / 3 * -(i - 1);
          if (t3 < 0) {
            t3++;
          }
          if (t3 > 1) {
            t3--;
          }
          if (6 * t3 < 1) {
            val = t1 + (t2 - t1) * 6 * t3;
          } else if (2 * t3 < 1) {
            val = t2;
          } else if (3 * t3 < 2) {
            val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
          } else {
            val = t1;
          }
          rgb[i] = val * 255;
        }
        return rgb;
      };
      convert.hsl.hsv = function(hsl) {
        const h = hsl[0];
        let s = hsl[1] / 100;
        let l = hsl[2] / 100;
        let smin = s;
        const lmin = Math.max(l, 0.01);
        l *= 2;
        s *= l <= 1 ? l : 2 - l;
        smin *= lmin <= 1 ? lmin : 2 - lmin;
        const v = (l + s) / 2;
        const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
        return [h, sv * 100, v * 100];
      };
      convert.hsv.rgb = function(hsv) {
        const h = hsv[0] / 60;
        const s = hsv[1] / 100;
        let v = hsv[2] / 100;
        const hi = Math.floor(h) % 6;
        const f = h - Math.floor(h);
        const p = 255 * v * (1 - s);
        const q = 255 * v * (1 - s * f);
        const t = 255 * v * (1 - s * (1 - f));
        v *= 255;
        switch (hi) {
          case 0:
            return [v, t, p];
          case 1:
            return [q, v, p];
          case 2:
            return [p, v, t];
          case 3:
            return [p, q, v];
          case 4:
            return [t, p, v];
          case 5:
            return [v, p, q];
        }
      };
      convert.hsv.hsl = function(hsv) {
        const h = hsv[0];
        const s = hsv[1] / 100;
        const v = hsv[2] / 100;
        const vmin = Math.max(v, 0.01);
        let sl;
        let l;
        l = (2 - s) * v;
        const lmin = (2 - s) * vmin;
        sl = s * vmin;
        sl /= lmin <= 1 ? lmin : 2 - lmin;
        sl = sl || 0;
        l /= 2;
        return [h, sl * 100, l * 100];
      };
      convert.hwb.rgb = function(hwb) {
        const h = hwb[0] / 360;
        let wh = hwb[1] / 100;
        let bl = hwb[2] / 100;
        const ratio = wh + bl;
        let f;
        if (ratio > 1) {
          wh /= ratio;
          bl /= ratio;
        }
        const i = Math.floor(6 * h);
        const v = 1 - bl;
        f = 6 * h - i;
        if ((i & 1) !== 0) {
          f = 1 - f;
        }
        const n = wh + f * (v - wh);
        let r;
        let g;
        let b;
        switch (i) {
          default:
          case 6:
          case 0:
            r = v;
            g = n;
            b = wh;
            break;
          case 1:
            r = n;
            g = v;
            b = wh;
            break;
          case 2:
            r = wh;
            g = v;
            b = n;
            break;
          case 3:
            r = wh;
            g = n;
            b = v;
            break;
          case 4:
            r = n;
            g = wh;
            b = v;
            break;
          case 5:
            r = v;
            g = wh;
            b = n;
            break;
        }
        return [r * 255, g * 255, b * 255];
      };
      convert.cmyk.rgb = function(cmyk) {
        const c = cmyk[0] / 100;
        const m = cmyk[1] / 100;
        const y = cmyk[2] / 100;
        const k = cmyk[3] / 100;
        const r = 1 - Math.min(1, c * (1 - k) + k);
        const g = 1 - Math.min(1, m * (1 - k) + k);
        const b = 1 - Math.min(1, y * (1 - k) + k);
        return [r * 255, g * 255, b * 255];
      };
      convert.xyz.rgb = function(xyz) {
        const x = xyz[0] / 100;
        const y = xyz[1] / 100;
        const z = xyz[2] / 100;
        let r;
        let g;
        let b;
        r = x * 3.2406 + y * -1.5372 + z * -0.4986;
        g = x * -0.9689 + y * 1.8758 + z * 0.0415;
        b = x * 0.0557 + y * -0.204 + z * 1.057;
        r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
        g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
        b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
        r = Math.min(Math.max(0, r), 1);
        g = Math.min(Math.max(0, g), 1);
        b = Math.min(Math.max(0, b), 1);
        return [r * 255, g * 255, b * 255];
      };
      convert.xyz.lab = function(xyz) {
        let x = xyz[0];
        let y = xyz[1];
        let z = xyz[2];
        x /= 95.047;
        y /= 100;
        z /= 108.883;
        x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
        y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
        z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
        const l = 116 * y - 16;
        const a = 500 * (x - y);
        const b = 200 * (y - z);
        return [l, a, b];
      };
      convert.lab.xyz = function(lab) {
        const l = lab[0];
        const a = lab[1];
        const b = lab[2];
        let x;
        let y;
        let z;
        y = (l + 16) / 116;
        x = a / 500 + y;
        z = y - b / 200;
        const y2 = y ** 3;
        const x2 = x ** 3;
        const z2 = z ** 3;
        y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
        x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
        z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
        x *= 95.047;
        y *= 100;
        z *= 108.883;
        return [x, y, z];
      };
      convert.lab.lch = function(lab) {
        const l = lab[0];
        const a = lab[1];
        const b = lab[2];
        let h;
        const hr = Math.atan2(b, a);
        h = hr * 360 / 2 / Math.PI;
        if (h < 0) {
          h += 360;
        }
        const c = Math.sqrt(a * a + b * b);
        return [l, c, h];
      };
      convert.lch.lab = function(lch) {
        const l = lch[0];
        const c = lch[1];
        const h = lch[2];
        const hr = h / 360 * 2 * Math.PI;
        const a = c * Math.cos(hr);
        const b = c * Math.sin(hr);
        return [l, a, b];
      };
      convert.rgb.ansi16 = function(args, saturation = null) {
        const [r, g, b] = args;
        let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
        value = Math.round(value / 50);
        if (value === 0) {
          return 30;
        }
        let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
        if (value === 2) {
          ansi += 60;
        }
        return ansi;
      };
      convert.hsv.ansi16 = function(args) {
        return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
      };
      convert.rgb.ansi256 = function(args) {
        const r = args[0];
        const g = args[1];
        const b = args[2];
        if (r === g && g === b) {
          if (r < 8) {
            return 16;
          }
          if (r > 248) {
            return 231;
          }
          return Math.round((r - 8) / 247 * 24) + 232;
        }
        const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
        return ansi;
      };
      convert.ansi16.rgb = function(args) {
        let color = args % 10;
        if (color === 0 || color === 7) {
          if (args > 50) {
            color += 3.5;
          }
          color = color / 10.5 * 255;
          return [color, color, color];
        }
        const mult = (~~(args > 50) + 1) * 0.5;
        const r = (color & 1) * mult * 255;
        const g = (color >> 1 & 1) * mult * 255;
        const b = (color >> 2 & 1) * mult * 255;
        return [r, g, b];
      };
      convert.ansi256.rgb = function(args) {
        if (args >= 232) {
          const c = (args - 232) * 10 + 8;
          return [c, c, c];
        }
        args -= 16;
        let rem;
        const r = Math.floor(args / 36) / 5 * 255;
        const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
        const b = rem % 6 / 5 * 255;
        return [r, g, b];
      };
      convert.rgb.hex = function(args) {
        const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
        const string = integer.toString(16).toUpperCase();
        return "000000".substring(string.length) + string;
      };
      convert.hex.rgb = function(args) {
        const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!match) {
          return [0, 0, 0];
        }
        let colorString = match[0];
        if (match[0].length === 3) {
          colorString = colorString.split("").map((char) => {
            return char + char;
          }).join("");
        }
        const integer = parseInt(colorString, 16);
        const r = integer >> 16 & 255;
        const g = integer >> 8 & 255;
        const b = integer & 255;
        return [r, g, b];
      };
      convert.rgb.hcg = function(rgb) {
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const max = Math.max(Math.max(r, g), b);
        const min = Math.min(Math.min(r, g), b);
        const chroma = max - min;
        let grayscale;
        let hue;
        if (chroma < 1) {
          grayscale = min / (1 - chroma);
        } else {
          grayscale = 0;
        }
        if (chroma <= 0) {
          hue = 0;
        } else if (max === r) {
          hue = (g - b) / chroma % 6;
        } else if (max === g) {
          hue = 2 + (b - r) / chroma;
        } else {
          hue = 4 + (r - g) / chroma;
        }
        hue /= 6;
        hue %= 1;
        return [hue * 360, chroma * 100, grayscale * 100];
      };
      convert.hsl.hcg = function(hsl) {
        const s = hsl[1] / 100;
        const l = hsl[2] / 100;
        const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
        let f = 0;
        if (c < 1) {
          f = (l - 0.5 * c) / (1 - c);
        }
        return [hsl[0], c * 100, f * 100];
      };
      convert.hsv.hcg = function(hsv) {
        const s = hsv[1] / 100;
        const v = hsv[2] / 100;
        const c = s * v;
        let f = 0;
        if (c < 1) {
          f = (v - c) / (1 - c);
        }
        return [hsv[0], c * 100, f * 100];
      };
      convert.hcg.rgb = function(hcg) {
        const h = hcg[0] / 360;
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        if (c === 0) {
          return [g * 255, g * 255, g * 255];
        }
        const pure = [0, 0, 0];
        const hi = h % 1 * 6;
        const v = hi % 1;
        const w = 1 - v;
        let mg = 0;
        switch (Math.floor(hi)) {
          case 0:
            pure[0] = 1;
            pure[1] = v;
            pure[2] = 0;
            break;
          case 1:
            pure[0] = w;
            pure[1] = 1;
            pure[2] = 0;
            break;
          case 2:
            pure[0] = 0;
            pure[1] = 1;
            pure[2] = v;
            break;
          case 3:
            pure[0] = 0;
            pure[1] = w;
            pure[2] = 1;
            break;
          case 4:
            pure[0] = v;
            pure[1] = 0;
            pure[2] = 1;
            break;
          default:
            pure[0] = 1;
            pure[1] = 0;
            pure[2] = w;
        }
        mg = (1 - c) * g;
        return [
          (c * pure[0] + mg) * 255,
          (c * pure[1] + mg) * 255,
          (c * pure[2] + mg) * 255
        ];
      };
      convert.hcg.hsv = function(hcg) {
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        const v = c + g * (1 - c);
        let f = 0;
        if (v > 0) {
          f = c / v;
        }
        return [hcg[0], f * 100, v * 100];
      };
      convert.hcg.hsl = function(hcg) {
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        const l = g * (1 - c) + 0.5 * c;
        let s = 0;
        if (l > 0 && l < 0.5) {
          s = c / (2 * l);
        } else if (l >= 0.5 && l < 1) {
          s = c / (2 * (1 - l));
        }
        return [hcg[0], s * 100, l * 100];
      };
      convert.hcg.hwb = function(hcg) {
        const c = hcg[1] / 100;
        const g = hcg[2] / 100;
        const v = c + g * (1 - c);
        return [hcg[0], (v - c) * 100, (1 - v) * 100];
      };
      convert.hwb.hcg = function(hwb) {
        const w = hwb[1] / 100;
        const b = hwb[2] / 100;
        const v = 1 - b;
        const c = v - w;
        let g = 0;
        if (c < 1) {
          g = (v - c) / (1 - c);
        }
        return [hwb[0], c * 100, g * 100];
      };
      convert.apple.rgb = function(apple) {
        return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
      };
      convert.rgb.apple = function(rgb) {
        return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
      };
      convert.gray.rgb = function(args) {
        return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
      };
      convert.gray.hsl = function(args) {
        return [0, 0, args[0]];
      };
      convert.gray.hsv = convert.gray.hsl;
      convert.gray.hwb = function(gray) {
        return [0, 100, gray[0]];
      };
      convert.gray.cmyk = function(gray) {
        return [0, 0, 0, gray[0]];
      };
      convert.gray.lab = function(gray) {
        return [gray[0], 0, 0];
      };
      convert.gray.hex = function(gray) {
        const val = Math.round(gray[0] / 100 * 255) & 255;
        const integer = (val << 16) + (val << 8) + val;
        const string = integer.toString(16).toUpperCase();
        return "000000".substring(string.length) + string;
      };
      convert.rgb.gray = function(rgb) {
        const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
        return [val / 255 * 100];
      };
    }
  });

  // node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js
  var require_route = __commonJS({
    "node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js"(exports, module) {
      init_define_LAST_COMMIT_HASH();
      var conversions = require_conversions();
      function buildGraph() {
        const graph = {};
        const models = Object.keys(conversions);
        for (let len = models.length, i = 0; i < len; i++) {
          graph[models[i]] = {
            // http://jsperf.com/1-vs-infinity
            // micro-opt, but this is simple.
            distance: -1,
            parent: null
          };
        }
        return graph;
      }
      __name(buildGraph, "buildGraph");
      function deriveBFS(fromModel) {
        const graph = buildGraph();
        const queue = [fromModel];
        graph[fromModel].distance = 0;
        while (queue.length) {
          const current = queue.pop();
          const adjacents = Object.keys(conversions[current]);
          for (let len = adjacents.length, i = 0; i < len; i++) {
            const adjacent = adjacents[i];
            const node = graph[adjacent];
            if (node.distance === -1) {
              node.distance = graph[current].distance + 1;
              node.parent = current;
              queue.unshift(adjacent);
            }
          }
        }
        return graph;
      }
      __name(deriveBFS, "deriveBFS");
      function link(from, to) {
        return function(args) {
          return to(from(args));
        };
      }
      __name(link, "link");
      function wrapConversion(toModel, graph) {
        const path = [graph[toModel].parent, toModel];
        let fn = conversions[graph[toModel].parent][toModel];
        let cur = graph[toModel].parent;
        while (graph[cur].parent) {
          path.unshift(graph[cur].parent);
          fn = link(conversions[graph[cur].parent][cur], fn);
          cur = graph[cur].parent;
        }
        fn.conversion = path;
        return fn;
      }
      __name(wrapConversion, "wrapConversion");
      module.exports = function(fromModel) {
        const graph = deriveBFS(fromModel);
        const conversion = {};
        const models = Object.keys(graph);
        for (let len = models.length, i = 0; i < len; i++) {
          const toModel = models[i];
          const node = graph[toModel];
          if (node.parent === null) {
            continue;
          }
          conversion[toModel] = wrapConversion(toModel, graph);
        }
        return conversion;
      };
    }
  });

  // node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js
  var require_color_convert = __commonJS({
    "node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js"(exports, module) {
      init_define_LAST_COMMIT_HASH();
      var conversions = require_conversions();
      var route = require_route();
      var convert = {};
      var models = Object.keys(conversions);
      function wrapRaw(fn) {
        const wrappedFn = /* @__PURE__ */ __name(function(...args) {
          const arg0 = args[0];
          if (arg0 === void 0 || arg0 === null) {
            return arg0;
          }
          if (arg0.length > 1) {
            args = arg0;
          }
          return fn(args);
        }, "wrappedFn");
        if ("conversion" in fn) {
          wrappedFn.conversion = fn.conversion;
        }
        return wrappedFn;
      }
      __name(wrapRaw, "wrapRaw");
      function wrapRounded(fn) {
        const wrappedFn = /* @__PURE__ */ __name(function(...args) {
          const arg0 = args[0];
          if (arg0 === void 0 || arg0 === null) {
            return arg0;
          }
          if (arg0.length > 1) {
            args = arg0;
          }
          const result = fn(args);
          if (typeof result === "object") {
            for (let len = result.length, i = 0; i < len; i++) {
              result[i] = Math.round(result[i]);
            }
          }
          return result;
        }, "wrappedFn");
        if ("conversion" in fn) {
          wrappedFn.conversion = fn.conversion;
        }
        return wrappedFn;
      }
      __name(wrapRounded, "wrapRounded");
      models.forEach((fromModel) => {
        convert[fromModel] = {};
        Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
        Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
        const routes = route(fromModel);
        const routeModels = Object.keys(routes);
        routeModels.forEach((toModel) => {
          const fn = routes[toModel];
          convert[fromModel][toModel] = wrapRounded(fn);
          convert[fromModel][toModel].raw = wrapRaw(fn);
        });
      });
      module.exports = convert;
    }
  });

  // node_modules/.pnpm/color@4.2.3/node_modules/color/index.js
  var require_color = __commonJS({
    "node_modules/.pnpm/color@4.2.3/node_modules/color/index.js"(exports, module) {
      init_define_LAST_COMMIT_HASH();
      var colorString = require_color_string();
      var convert = require_color_convert();
      var skippedModels = [
        // To be honest, I don't really feel like keyword belongs in color convert, but eh.
        "keyword",
        // Gray conflicts with some method names, and has its own method defined.
        "gray",
        // Shouldn't really be in color-convert either...
        "hex"
      ];
      var hashedModelKeys = {};
      for (const model of Object.keys(convert)) {
        hashedModelKeys[[...convert[model].labels].sort().join("")] = model;
      }
      var limiters = {};
      function Color7(object, model) {
        if (!(this instanceof Color7)) {
          return new Color7(object, model);
        }
        if (model && model in skippedModels) {
          model = null;
        }
        if (model && !(model in convert)) {
          throw new Error("Unknown model: " + model);
        }
        let i;
        let channels;
        if (object == null) {
          this.model = "rgb";
          this.color = [0, 0, 0];
          this.valpha = 1;
        } else if (object instanceof Color7) {
          this.model = object.model;
          this.color = [...object.color];
          this.valpha = object.valpha;
        } else if (typeof object === "string") {
          const result = colorString.get(object);
          if (result === null) {
            throw new Error("Unable to parse color from string: " + object);
          }
          this.model = result.model;
          channels = convert[this.model].channels;
          this.color = result.value.slice(0, channels);
          this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
        } else if (object.length > 0) {
          this.model = model || "rgb";
          channels = convert[this.model].channels;
          const newArray = Array.prototype.slice.call(object, 0, channels);
          this.color = zeroArray(newArray, channels);
          this.valpha = typeof object[channels] === "number" ? object[channels] : 1;
        } else if (typeof object === "number") {
          this.model = "rgb";
          this.color = [
            object >> 16 & 255,
            object >> 8 & 255,
            object & 255
          ];
          this.valpha = 1;
        } else {
          this.valpha = 1;
          const keys = Object.keys(object);
          if ("alpha" in object) {
            keys.splice(keys.indexOf("alpha"), 1);
            this.valpha = typeof object.alpha === "number" ? object.alpha : 0;
          }
          const hashedKeys = keys.sort().join("");
          if (!(hashedKeys in hashedModelKeys)) {
            throw new Error("Unable to parse color from object: " + JSON.stringify(object));
          }
          this.model = hashedModelKeys[hashedKeys];
          const { labels } = convert[this.model];
          const color = [];
          for (i = 0; i < labels.length; i++) {
            color.push(object[labels[i]]);
          }
          this.color = zeroArray(color);
        }
        if (limiters[this.model]) {
          channels = convert[this.model].channels;
          for (i = 0; i < channels; i++) {
            const limit = limiters[this.model][i];
            if (limit) {
              this.color[i] = limit(this.color[i]);
            }
          }
        }
        this.valpha = Math.max(0, Math.min(1, this.valpha));
        if (Object.freeze) {
          Object.freeze(this);
        }
      }
      __name(Color7, "Color");
      Color7.prototype = {
        toString() {
          return this.string();
        },
        toJSON() {
          return this[this.model]();
        },
        string(places) {
          let self = this.model in colorString.to ? this : this.rgb();
          self = self.round(typeof places === "number" ? places : 1);
          const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
          return colorString.to[self.model](args);
        },
        percentString(places) {
          const self = this.rgb().round(typeof places === "number" ? places : 1);
          const args = self.valpha === 1 ? self.color : [...self.color, this.valpha];
          return colorString.to.rgb.percent(args);
        },
        array() {
          return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
        },
        object() {
          const result = {};
          const { channels } = convert[this.model];
          const { labels } = convert[this.model];
          for (let i = 0; i < channels; i++) {
            result[labels[i]] = this.color[i];
          }
          if (this.valpha !== 1) {
            result.alpha = this.valpha;
          }
          return result;
        },
        unitArray() {
          const rgb = this.rgb().color;
          rgb[0] /= 255;
          rgb[1] /= 255;
          rgb[2] /= 255;
          if (this.valpha !== 1) {
            rgb.push(this.valpha);
          }
          return rgb;
        },
        unitObject() {
          const rgb = this.rgb().object();
          rgb.r /= 255;
          rgb.g /= 255;
          rgb.b /= 255;
          if (this.valpha !== 1) {
            rgb.alpha = this.valpha;
          }
          return rgb;
        },
        round(places) {
          places = Math.max(places || 0, 0);
          return new Color7([...this.color.map(roundToPlace(places)), this.valpha], this.model);
        },
        alpha(value) {
          if (value !== void 0) {
            return new Color7([...this.color, Math.max(0, Math.min(1, value))], this.model);
          }
          return this.valpha;
        },
        // Rgb
        red: getset("rgb", 0, maxfn(255)),
        green: getset("rgb", 1, maxfn(255)),
        blue: getset("rgb", 2, maxfn(255)),
        hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (value) => (value % 360 + 360) % 360),
        saturationl: getset("hsl", 1, maxfn(100)),
        lightness: getset("hsl", 2, maxfn(100)),
        saturationv: getset("hsv", 1, maxfn(100)),
        value: getset("hsv", 2, maxfn(100)),
        chroma: getset("hcg", 1, maxfn(100)),
        gray: getset("hcg", 2, maxfn(100)),
        white: getset("hwb", 1, maxfn(100)),
        wblack: getset("hwb", 2, maxfn(100)),
        cyan: getset("cmyk", 0, maxfn(100)),
        magenta: getset("cmyk", 1, maxfn(100)),
        yellow: getset("cmyk", 2, maxfn(100)),
        black: getset("cmyk", 3, maxfn(100)),
        x: getset("xyz", 0, maxfn(95.047)),
        y: getset("xyz", 1, maxfn(100)),
        z: getset("xyz", 2, maxfn(108.833)),
        l: getset("lab", 0, maxfn(100)),
        a: getset("lab", 1),
        b: getset("lab", 2),
        keyword(value) {
          if (value !== void 0) {
            return new Color7(value);
          }
          return convert[this.model].keyword(this.color);
        },
        hex(value) {
          if (value !== void 0) {
            return new Color7(value);
          }
          return colorString.to.hex(this.rgb().round().color);
        },
        hexa(value) {
          if (value !== void 0) {
            return new Color7(value);
          }
          const rgbArray = this.rgb().round().color;
          let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
          if (alphaHex.length === 1) {
            alphaHex = "0" + alphaHex;
          }
          return colorString.to.hex(rgbArray) + alphaHex;
        },
        rgbNumber() {
          const rgb = this.rgb().color;
          return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
        },
        luminosity() {
          const rgb = this.rgb().color;
          const lum = [];
          for (const [i, element] of rgb.entries()) {
            const chan = element / 255;
            lum[i] = chan <= 0.04045 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
          }
          return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
        },
        contrast(color2) {
          const lum1 = this.luminosity();
          const lum2 = color2.luminosity();
          if (lum1 > lum2) {
            return (lum1 + 0.05) / (lum2 + 0.05);
          }
          return (lum2 + 0.05) / (lum1 + 0.05);
        },
        level(color2) {
          const contrastRatio = this.contrast(color2);
          if (contrastRatio >= 7) {
            return "AAA";
          }
          return contrastRatio >= 4.5 ? "AA" : "";
        },
        isDark() {
          const rgb = this.rgb().color;
          const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 1e4;
          return yiq < 128;
        },
        isLight() {
          return !this.isDark();
        },
        negate() {
          const rgb = this.rgb();
          for (let i = 0; i < 3; i++) {
            rgb.color[i] = 255 - rgb.color[i];
          }
          return rgb;
        },
        lighten(ratio) {
          const hsl = this.hsl();
          hsl.color[2] += hsl.color[2] * ratio;
          return hsl;
        },
        darken(ratio) {
          const hsl = this.hsl();
          hsl.color[2] -= hsl.color[2] * ratio;
          return hsl;
        },
        saturate(ratio) {
          const hsl = this.hsl();
          hsl.color[1] += hsl.color[1] * ratio;
          return hsl;
        },
        desaturate(ratio) {
          const hsl = this.hsl();
          hsl.color[1] -= hsl.color[1] * ratio;
          return hsl;
        },
        whiten(ratio) {
          const hwb = this.hwb();
          hwb.color[1] += hwb.color[1] * ratio;
          return hwb;
        },
        blacken(ratio) {
          const hwb = this.hwb();
          hwb.color[2] += hwb.color[2] * ratio;
          return hwb;
        },
        grayscale() {
          const rgb = this.rgb().color;
          const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
          return Color7.rgb(value, value, value);
        },
        fade(ratio) {
          return this.alpha(this.valpha - this.valpha * ratio);
        },
        opaquer(ratio) {
          return this.alpha(this.valpha + this.valpha * ratio);
        },
        rotate(degrees) {
          const hsl = this.hsl();
          let hue = hsl.color[0];
          hue = (hue + degrees) % 360;
          hue = hue < 0 ? 360 + hue : hue;
          hsl.color[0] = hue;
          return hsl;
        },
        mix(mixinColor, weight) {
          if (!mixinColor || !mixinColor.rgb) {
            throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
          }
          const color1 = mixinColor.rgb();
          const color2 = this.rgb();
          const p = weight === void 0 ? 0.5 : weight;
          const w = 2 * p - 1;
          const a = color1.alpha() - color2.alpha();
          const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
          const w2 = 1 - w1;
          return Color7.rgb(
            w1 * color1.red() + w2 * color2.red(),
            w1 * color1.green() + w2 * color2.green(),
            w1 * color1.blue() + w2 * color2.blue(),
            color1.alpha() * p + color2.alpha() * (1 - p)
          );
        }
      };
      for (const model of Object.keys(convert)) {
        if (skippedModels.includes(model)) {
          continue;
        }
        const { channels } = convert[model];
        Color7.prototype[model] = function(...args) {
          if (this.model === model) {
            return new Color7(this);
          }
          if (args.length > 0) {
            return new Color7(args, model);
          }
          return new Color7([...assertArray(convert[this.model][model].raw(this.color)), this.valpha], model);
        };
        Color7[model] = function(...args) {
          let color = args[0];
          if (typeof color === "number") {
            color = zeroArray(args, channels);
          }
          return new Color7(color, model);
        };
      }
      function roundTo(number, places) {
        return Number(number.toFixed(places));
      }
      __name(roundTo, "roundTo");
      function roundToPlace(places) {
        return function(number) {
          return roundTo(number, places);
        };
      }
      __name(roundToPlace, "roundToPlace");
      function getset(model, channel, modifier) {
        model = Array.isArray(model) ? model : [model];
        for (const m of model) {
          (limiters[m] || (limiters[m] = []))[channel] = modifier;
        }
        model = model[0];
        return function(value) {
          let result;
          if (value !== void 0) {
            if (modifier) {
              value = modifier(value);
            }
            result = this[model]();
            result.color[channel] = value;
            return result;
          }
          result = this[model]().color[channel];
          if (modifier) {
            result = modifier(result);
          }
          return result;
        };
      }
      __name(getset, "getset");
      function maxfn(max) {
        return function(v) {
          return Math.max(0, Math.min(max, v));
        };
      }
      __name(maxfn, "maxfn");
      function assertArray(value) {
        return Array.isArray(value) ? value : [value];
      }
      __name(assertArray, "assertArray");
      function zeroArray(array, length) {
        for (let i = 0; i < length; i++) {
          if (typeof array[i] !== "number") {
            array[i] = 0;
          }
        }
        return array;
      }
      __name(zeroArray, "zeroArray");
      module.exports = Color7;
    }
  });

  // node_modules/.pnpm/bondage-club-mod-sdk@1.2.0/node_modules/bondage-club-mod-sdk/dist/bcmodsdk.js
  var require_bcmodsdk = __commonJS({
    "node_modules/.pnpm/bondage-club-mod-sdk@1.2.0/node_modules/bondage-club-mod-sdk/dist/bcmodsdk.js"(exports) {
      init_define_LAST_COMMIT_HASH();
      var bcModSdk = function() {
        "use strict";
        const o = "1.2.0";
        function e(o2) {
          alert("Mod ERROR:\n" + o2);
          const e2 = new Error(o2);
          throw console.error(e2), e2;
        }
        __name(e, "e");
        const t = new TextEncoder();
        function n(o2) {
          return !!o2 && "object" == typeof o2 && !Array.isArray(o2);
        }
        __name(n, "n");
        function r(o2) {
          const e2 = /* @__PURE__ */ new Set();
          return o2.filter((o3) => !e2.has(o3) && e2.add(o3));
        }
        __name(r, "r");
        const i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
        function c(o2) {
          a.has(o2) || (a.add(o2), console.warn(o2));
        }
        __name(c, "c");
        function s(o2) {
          const e2 = [], t2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Set();
          for (const r3 of f.values()) {
            const i3 = r3.patching.get(o2.name);
            if (i3) {
              e2.push(...i3.hooks);
              for (const [e3, a2] of i3.patches.entries()) t2.has(e3) && t2.get(e3) !== a2 && c(`ModSDK: Mod '${r3.name}' is patching function ${o2.name} with same pattern that is already applied by different mod, but with different pattern:
Pattern:
${e3}
Patch1:
${t2.get(e3) || ""}
Patch2:
${a2}`), t2.set(e3, a2), n2.add(r3.name);
            }
          }
          e2.sort((o3, e3) => e3.priority - o3.priority);
          const r2 = function(o3, e3) {
            if (0 === e3.size) return o3;
            let t3 = o3.toString().replaceAll("\r\n", "\n");
            for (const [n3, r3] of e3.entries()) t3.includes(n3) || c(`ModSDK: Patching ${o3.name}: Patch ${n3} not applied`), t3 = t3.replaceAll(n3, r3);
            return (0, eval)(`(${t3})`);
          }(o2.original, t2);
          let i2 = /* @__PURE__ */ __name(function(e3) {
            var t3, i3;
            const a2 = null === (i3 = (t3 = m.errorReporterHooks).hookChainExit) || void 0 === i3 ? void 0 : i3.call(t3, o2.name, n2), c2 = r2.apply(this, e3);
            return null == a2 || a2(), c2;
          }, "i");
          for (let t3 = e2.length - 1; t3 >= 0; t3--) {
            const n3 = e2[t3], r3 = i2;
            i2 = /* @__PURE__ */ __name(function(e3) {
              var t4, i3;
              const a2 = null === (i3 = (t4 = m.errorReporterHooks).hookEnter) || void 0 === i3 ? void 0 : i3.call(t4, o2.name, n3.mod), c2 = n3.hook.apply(this, [e3, (o3) => {
                if (1 !== arguments.length || !Array.isArray(e3)) throw new Error(`Mod ${n3.mod} failed to call next hook: Expected args to be array, got ${typeof o3}`);
                return r3.call(this, o3);
              }]);
              return null == a2 || a2(), c2;
            }, "i");
          }
          return { hooks: e2, patches: t2, patchesSources: n2, enter: i2, final: r2 };
        }
        __name(s, "s");
        function l(o2, e2 = false) {
          let r2 = i.get(o2);
          if (r2) e2 && (r2.precomputed = s(r2));
          else {
            let e3 = window;
            const a2 = o2.split(".");
            for (let t2 = 0; t2 < a2.length - 1; t2++) if (e3 = e3[a2[t2]], !n(e3)) throw new Error(`ModSDK: Function ${o2} to be patched not found; ${a2.slice(0, t2 + 1).join(".")} is not object`);
            const c2 = e3[a2[a2.length - 1]];
            if ("function" != typeof c2) throw new Error(`ModSDK: Function ${o2} to be patched not found`);
            const l2 = function(o3) {
              let e4 = -1;
              for (const n2 of t.encode(o3)) {
                let o4 = 255 & (e4 ^ n2);
                for (let e5 = 0; e5 < 8; e5++) o4 = 1 & o4 ? -306674912 ^ o4 >>> 1 : o4 >>> 1;
                e4 = e4 >>> 8 ^ o4;
              }
              return ((-1 ^ e4) >>> 0).toString(16).padStart(8, "0").toUpperCase();
            }(c2.toString().replaceAll("\r\n", "\n")), d2 = { name: o2, original: c2, originalHash: l2 };
            r2 = Object.assign(Object.assign({}, d2), { precomputed: s(d2), router: /* @__PURE__ */ __name(() => {
            }, "router"), context: e3, contextProperty: a2[a2.length - 1] }), r2.router = /* @__PURE__ */ function(o3) {
              return function(...e4) {
                return o3.precomputed.enter.apply(this, [e4]);
              };
            }(r2), i.set(o2, r2), e3[r2.contextProperty] = r2.router;
          }
          return r2;
        }
        __name(l, "l");
        function d() {
          for (const o2 of i.values()) o2.precomputed = s(o2);
        }
        __name(d, "d");
        function p() {
          const o2 = /* @__PURE__ */ new Map();
          for (const [e2, t2] of i) o2.set(e2, { name: e2, original: t2.original, originalHash: t2.originalHash, sdkEntrypoint: t2.router, currentEntrypoint: t2.context[t2.contextProperty], hookedByMods: r(t2.precomputed.hooks.map((o3) => o3.mod)), patchedByMods: Array.from(t2.precomputed.patchesSources) });
          return o2;
        }
        __name(p, "p");
        const f = /* @__PURE__ */ new Map();
        function u(o2) {
          f.get(o2.name) !== o2 && e(`Failed to unload mod '${o2.name}': Not registered`), f.delete(o2.name), o2.loaded = false, d();
        }
        __name(u, "u");
        function g(o2, t2) {
          o2 && "object" == typeof o2 || e("Failed to register mod: Expected info object, got " + typeof o2), "string" == typeof o2.name && o2.name || e("Failed to register mod: Expected name to be non-empty string, got " + typeof o2.name);
          let r2 = `'${o2.name}'`;
          "string" == typeof o2.fullName && o2.fullName || e(`Failed to register mod ${r2}: Expected fullName to be non-empty string, got ${typeof o2.fullName}`), r2 = `'${o2.fullName} (${o2.name})'`, "string" != typeof o2.version && e(`Failed to register mod ${r2}: Expected version to be string, got ${typeof o2.version}`), o2.repository || (o2.repository = void 0), void 0 !== o2.repository && "string" != typeof o2.repository && e(`Failed to register mod ${r2}: Expected repository to be undefined or string, got ${typeof o2.version}`), null == t2 && (t2 = {}), t2 && "object" == typeof t2 || e(`Failed to register mod ${r2}: Expected options to be undefined or object, got ${typeof t2}`);
          const i2 = true === t2.allowReplace, a2 = f.get(o2.name);
          a2 && (a2.allowReplace && i2 || e(`Refusing to load mod ${r2}: it is already loaded and doesn't allow being replaced.
Was the mod loaded multiple times?`), u(a2));
          const c2 = /* @__PURE__ */ __name((o3) => {
            let e2 = g2.patching.get(o3.name);
            return e2 || (e2 = { hooks: [], patches: /* @__PURE__ */ new Map() }, g2.patching.set(o3.name, e2)), e2;
          }, "c"), s2 = /* @__PURE__ */ __name((o3, t3) => (...n2) => {
            var i3, a3;
            const c3 = null === (a3 = (i3 = m.errorReporterHooks).apiEndpointEnter) || void 0 === a3 ? void 0 : a3.call(i3, o3, g2.name);
            g2.loaded || e(`Mod ${r2} attempted to call SDK function after being unloaded`);
            const s3 = t3(...n2);
            return null == c3 || c3(), s3;
          }, "s"), p2 = { unload: s2("unload", () => u(g2)), hookFunction: s2("hookFunction", (o3, t3, n2) => {
            "string" == typeof o3 && o3 || e(`Mod ${r2} failed to patch a function: Expected function name string, got ${typeof o3}`);
            const i3 = l(o3), a3 = c2(i3);
            "number" != typeof t3 && e(`Mod ${r2} failed to hook function '${o3}': Expected priority number, got ${typeof t3}`), "function" != typeof n2 && e(`Mod ${r2} failed to hook function '${o3}': Expected hook function, got ${typeof n2}`);
            const s3 = { mod: g2.name, priority: t3, hook: n2 };
            return a3.hooks.push(s3), d(), () => {
              const o4 = a3.hooks.indexOf(s3);
              o4 >= 0 && (a3.hooks.splice(o4, 1), d());
            };
          }), patchFunction: s2("patchFunction", (o3, t3) => {
            "string" == typeof o3 && o3 || e(`Mod ${r2} failed to patch a function: Expected function name string, got ${typeof o3}`);
            const i3 = l(o3), a3 = c2(i3);
            n(t3) || e(`Mod ${r2} failed to patch function '${o3}': Expected patches object, got ${typeof t3}`);
            for (const [n2, i4] of Object.entries(t3)) "string" == typeof i4 ? a3.patches.set(n2, i4) : null === i4 ? a3.patches.delete(n2) : e(`Mod ${r2} failed to patch function '${o3}': Invalid format of patch '${n2}'`);
            d();
          }), removePatches: s2("removePatches", (o3) => {
            "string" == typeof o3 && o3 || e(`Mod ${r2} failed to patch a function: Expected function name string, got ${typeof o3}`);
            const t3 = l(o3);
            c2(t3).patches.clear(), d();
          }), callOriginal: s2("callOriginal", (o3, t3, n2) => {
            "string" == typeof o3 && o3 || e(`Mod ${r2} failed to call a function: Expected function name string, got ${typeof o3}`);
            const i3 = l(o3);
            return Array.isArray(t3) || e(`Mod ${r2} failed to call a function: Expected args array, got ${typeof t3}`), i3.original.apply(null != n2 ? n2 : globalThis, t3);
          }), getOriginalHash: s2("getOriginalHash", (o3) => {
            "string" == typeof o3 && o3 || e(`Mod ${r2} failed to get hash: Expected function name string, got ${typeof o3}`);
            return l(o3).originalHash;
          }) }, g2 = { name: o2.name, fullName: o2.fullName, version: o2.version, repository: o2.repository, allowReplace: i2, api: p2, loaded: true, patching: /* @__PURE__ */ new Map() };
          return f.set(o2.name, g2), Object.freeze(p2);
        }
        __name(g, "g");
        function h() {
          const o2 = [];
          for (const e2 of f.values()) o2.push({ name: e2.name, fullName: e2.fullName, version: e2.version, repository: e2.repository });
          return o2;
        }
        __name(h, "h");
        let m;
        const y = void 0 === window.bcModSdk ? window.bcModSdk = function() {
          const e2 = { version: o, apiVersion: 1, registerMod: g, getModsInfo: h, getPatchingInfo: p, errorReporterHooks: Object.seal({ apiEndpointEnter: null, hookEnter: null, hookChainExit: null }) };
          return m = e2, Object.freeze(e2);
        }() : (n(window.bcModSdk) || e("Failed to init Mod SDK: Name already in use"), 1 !== window.bcModSdk.apiVersion && e(`Failed to init Mod SDK: Different version already loaded ('1.2.0' vs '${window.bcModSdk.version}')`), window.bcModSdk.version !== o && alert(`Mod SDK warning: Loading different but compatible versions ('1.2.0' vs '${window.bcModSdk.version}')
One of mods you are using is using an old version of SDK. It will work for now but please inform author to update`), window.bcModSdk);
        return "undefined" != typeof exports && (Object.defineProperty(exports, "__esModule", { value: true }), exports.default = y), y;
      }();
    }
  });

  // src/Themed.ts
  var Themed_exports = {};
  __export(Themed_exports, {
    init: () => init,
    unload: () => unload
  });
  init_define_LAST_COMMIT_HASH();

  // src/Base/Modules.ts
  init_define_LAST_COMMIT_HASH();
  var modulesMap = /* @__PURE__ */ new Map();
  function modules() {
    return [...modulesMap.values()];
  }
  __name(modules, "modules");
  function registerModule(module) {
    modulesMap.set(module.constructor.name, module);
    return module;
  }
  __name(registerModule, "registerModule");
  function getModule(moduleType) {
    return modulesMap.get(moduleType);
  }
  __name(getModule, "getModule");

  // src/Base/SettingUtils.ts
  init_define_LAST_COMMIT_HASH();

  // src/Screens/MainMenu.ts
  init_define_LAST_COMMIT_HASH();

  // src/Base/BaseSetting.ts
  init_define_LAST_COMMIT_HASH();

  // src/Modules/GuiRedraw.ts
  init_define_LAST_COMMIT_HASH();

  // src/Base/BaseModule.ts
  init_define_LAST_COMMIT_HASH();
  var _BaseModule = class _BaseModule {
    get settingsScreen() {
      return null;
    }
    /** Allows changing the subkey for that module settings storage */
    get settingsStorage() {
      return this.constructor.name;
    }
    get settings() {
      if (!this.settingsStorage) return {};
      if (!Player.Themed) {
        Player.Themed = {};
        this.registerDefaultSettings();
      } else if (!Player.Themed[this.settingsStorage]) this.registerDefaultSettings();
      return Player.Themed[this.settingsStorage];
    }
    set settings(val) {
      if (!Player.Themed) {
        Player.Themed = {};
        this.registerDefaultSettings();
      } else if (!Player.Themed[this.settingsStorage]) this.registerDefaultSettings();
      Player.Themed[this.settingsStorage] = val;
    }
    get enabled() {
      if (!Player.Themed.GlobalModule) return false;
      return Player.Themed.GlobalModule.themedEnabled && this.settings.themedEnabled && (ServerPlayerIsInChatRoom() || CurrentModule == "Room" && CurrentScreen == "Crafting");
    }
    Init() {
      this.registerDefaultSettings();
    }
    registerDefaultSettings() {
      const storage = this.settingsStorage;
      const defaults = this.defaultSettings;
      if (!storage || !defaults) return;
      Player.Themed[storage] = Object.assign(defaults, Player.Themed[storage] ?? {});
    }
    get defaultSettings() {
      return null;
    }
    Load() {
    }
    Run() {
    }
    Unload() {
    }
  };
  __name(_BaseModule, "BaseModule");
  var BaseModule = _BaseModule;

  // src/Hooks/GuiRedraw/AppearanceGetPreviewImageColor.ts
  init_define_LAST_COMMIT_HASH();

  // src/Utilities/Color.ts
  init_define_LAST_COMMIT_HASH();
  var import_color = __toESM(require_color());
  var plainColors = {
    main: "",
    element: "",
    elementHover: "",
    elementDisabled: "",
    elementHint: "",
    text: "",
    textShadow: "",
    accent: "",
    accentHover: "",
    accentDisabled: ""
  };
  var specialColors = {
    equipped: ["", ""],
    crafted: ["", ""],
    blocked: ["", ""],
    limited: ["", ""],
    allowed: ["", ""],
    roomFriend: ["", ""],
    roomBlocked: ["", ""],
    roomGame: ["", ""]
  };
  var _Color = {
    getComputed: CommonMemoize((color) => {
      const div = document.createElement("div");
      div.style.color = color;
      document.body.appendChild(div);
      const computedColor = getComputedStyle(div).color;
      div.remove();
      return computedColor;
    }),
    getHexComputed: CommonMemoize((color) => {
      return (0, import_color.default)(_Color.getComputed(color)).hex();
    }),
    composeRoot() {
      const colorSettings = Player.Themed.ColorsModule;
      const globalSettings = Player.Themed.GlobalModule;
      Object.keys(colorSettings.special).forEach((key) => {
        const clr = (0, import_color.default)(colorSettings.special[key]);
        specialColors[key] = [clr.hex(), clr.lighten(0.2).hex()];
      });
      if (globalSettings.doUseAdvancedColoring) {
        Object.keys(colorSettings.base).forEach((key) => {
          plainColors[key] = colorSettings.base[key];
        });
      } else {
        const primaryColor2 = _Color.getHexComputed(colorSettings.base.main);
        const elementColor2 = (0, import_color.default)(primaryColor2).lighten(0.2).hex();
        const accentColor2 = _Color.getHexComputed(colorSettings.base.accent);
        const textColor2 = _Color.getHexComputed(colorSettings.base.text);
        plainColors.main = primaryColor2;
        plainColors.element = elementColor2;
        plainColors.elementHover = (0, import_color.default)(elementColor2).lighten(0.2).hex();
        plainColors.elementDisabled = (0, import_color.default)(elementColor2).darken(0.2).hex();
        plainColors.elementHint = (0, import_color.default)(elementColor2).lighten(0.2).hex();
        plainColors.text = textColor2;
        plainColors.accent = accentColor2;
        plainColors.accentHover = (0, import_color.default)(accentColor2).lighten(0.2).hex();
        plainColors.accentDisabled = (0, import_color.default)(accentColor2).darken(0.2).hex();
      }
      plainColors.textShadow = _Color.getHexComputed("rgba(0,0,0,0.5)");
    }
  };

  // src/Utilities/SDK.ts
  init_define_LAST_COMMIT_HASH();
  var import_bondage_club_mod_sdk = __toESM(require_bcmodsdk());

  // src/Utilities/Console.ts
  init_define_LAST_COMMIT_HASH();
  var STYLES = {
    INFO: "color: #32CCCC",
    LOG: "color: #CCCC32",
    DEBUG: "color: #9E4BCF"
  };
  var cmdPrefix = "Themed";
  function conInfo(...args) {
    if (typeof args[0] === "string") console.info(`%c${cmdPrefix}: ${args[0]}`, STYLES.INFO, ...args.slice(1));
    else console.info(`%c${cmdPrefix}:`, STYLES.LOG, ...args);
  }
  __name(conInfo, "conInfo");
  function conLog(...args) {
    if (typeof args[0] === "string") console.log(`%c${cmdPrefix}: ${args[0]}`, STYLES.LOG, ...args.slice(1));
    else console.log(`%c${cmdPrefix}:`, STYLES.LOG, ...args);
  }
  __name(conLog, "conLog");
  function conWarn(...args) {
    if (typeof args[0] === "string") console.warn(`%c${cmdPrefix}: ${args[0]}`, STYLES.LOG, ...args.slice(1));
    else console.warn(`%c${cmdPrefix}: `, STYLES.LOG, ...args);
  }
  __name(conWarn, "conWarn");
  function conErr(...args) {
    if (typeof args[0] === "string") console.error(`%c${cmdPrefix}: ${args[0]}`, STYLES.LOG, ...args.slice(1));
    else console.error(`%c${cmdPrefix}:`, STYLES.LOG, ...args);
  }
  __name(conErr, "conErr");
  function conDebug(...args) {
    if (true) {
      if (typeof args[0] === "string") console.debug(`%c${cmdPrefix}: ${args[0]}`, STYLES.DEBUG, ...args.slice(1));
      else console.debug(`%c${cmdPrefix}:`, STYLES.LOG, ...args);
    }
  }
  __name(conDebug, "conDebug");

  // src/Utilities/ModDefinition.ts
  init_define_LAST_COMMIT_HASH();
  var ModName = "Themed";
  var FullModName = "BC Themed";
  var ModRepository = "https://github.com/dDeepLb/Themed-BC";
  var MOD_VERSION_CAPTION = true ? `${"1.4.0"} - ${"dc8fe977"}` : "1.4.0";

  // src/Utilities/SDK.ts
  var SDK = import_bondage_club_mod_sdk.default.registerMod(
    {
      name: ModName,
      fullName: FullModName,
      version: MOD_VERSION_CAPTION,
      repository: ModRepository
    },
    {
      allowReplace: false
    }
  );
  var patchedFunctions = /* @__PURE__ */ new Map();
  function initPatchableFunction(target) {
    let result = patchedFunctions.get(target);
    if (!result) {
      result = {
        name: target,
        hooks: []
      };
      patchedFunctions.set(target, result);
    }
    return result;
  }
  __name(initPatchableFunction, "initPatchableFunction");
  function patchFunction(target, patches) {
    SDK.patchFunction(target, patches);
  }
  __name(patchFunction, "patchFunction");
  function unpatchFuntion(target) {
    SDK.removePatches(target);
  }
  __name(unpatchFuntion, "unpatchFuntion");
  function hookFunction(target, priority, hook, module = null) {
    const data = initPatchableFunction(target);
    if (data.hooks.some((h) => h.hook === hook)) {
      conErr(`Duplicate hook for "${target}"`, hook);
      return () => null;
    }
    const removeCallback = SDK.hookFunction(target, priority, hook);
    data.hooks.push({
      hook,
      priority,
      module,
      removeCallback
    });
    data.hooks.sort((a, b) => b.priority - a.priority);
    return removeCallback;
  }
  __name(hookFunction, "hookFunction");

  // src/Hooks/GuiRedraw/AppearanceGetPreviewImageColor.ts
  function hookAppearanceGetPreviewImageColor() {
    hookFunction(
      "AppearanceGetPreviewImageColor",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw()) return next(args);
        const [c, item, hover] = args;
        if (DialogMenuMode === "permissions" && c.IsPlayer()) {
          let permission = "allowed";
          if (InventoryIsPermissionBlocked(c, item.Asset.Name, item.Asset.Group.Name)) permission = "blocked";
          else if (InventoryIsPermissionLimited(c, item.Asset.Name, item.Asset.Group.Name)) permission = "limited";
          return item.Worn ? specialColors.equipped[hover ? 1 : 0] : specialColors[permission][hover ? 1 : 0];
        } else {
          const unusable = item.SortOrder.startsWith(DialogSortOrder.Unusable.toString()) || item.SortOrder.startsWith(DialogSortOrder.TargetFavoriteUnusable.toString()) || item.SortOrder.startsWith(DialogSortOrder.PlayerFavoriteUnusable.toString());
          const blocked = item.SortOrder.startsWith(DialogSortOrder.Blocked.toString());
          const limited = item.Icons.includes("AllowedLimited");
          if (blocked) return specialColors.blocked[hover ? 1 : 0];
          else if (item.Worn) return specialColors.equipped[hover ? 1 : 0];
          else if (item.Craft != null && item.Craft.Name != null) return specialColors.crafted[hover ? 1 : 0];
          else if (unusable) return plainColors.elementDisabled;
          else if (limited) return specialColors.limited[hover ? 1 : 0];
          else return hover ? plainColors.elementHover : plainColors.element;
        }
      },
      3 /* GuiRedraw */
    );
  }
  __name(hookAppearanceGetPreviewImageColor, "hookAppearanceGetPreviewImageColor");

  // src/Hooks/GuiRedraw/DrawBackNextButton.ts
  init_define_LAST_COMMIT_HASH();
  function hookDrawBackNextButton() {
    hookFunction(
      "DrawBackNextButton",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw()) return next(args);
        const [Left, Top, Width, Height, Label, Color7, Image, , , Disabled] = args;
        let [, , , , , , , BackText, NextText, , ArrowWidth] = args;
        if (ArrowWidth == null || ArrowWidth > Width / 2) ArrowWidth = Width / 2;
        const LeftSplit = Left + ArrowWidth;
        const RightSplit = Left + Width - ArrowWidth;
        ControllerAddActiveArea(Left, Top);
        ControllerAddActiveArea(Left + Width - ArrowWidth, Top);
        MainCanvas.save();
        MainCanvas.textAlign = "center";
        MainCanvas.beginPath();
        MainCanvas.rect(Left, Top, Width, Height);
        MainCanvas.fillStyle = plainColors.element;
        MainCanvas.fillRect(Left, Top, Width, Height);
        if (MouseIn(Left, Top, Width, Height) && !CommonIsMobile && !Disabled) {
          MainCanvas.fillStyle = plainColors.elementHover;
          if (MouseX > RightSplit) {
            MainCanvas.fillRect(RightSplit, Top, ArrowWidth, Height);
          } else if (MouseX <= LeftSplit) {
            MainCanvas.fillRect(Left, Top, ArrowWidth, Height);
          } else {
            MainCanvas.fillRect(Left + ArrowWidth, Top, Width - ArrowWidth * 2, Height);
          }
        } else if (CommonIsMobile && ArrowWidth < Width / 2 && !Disabled) {
          MainCanvas.fillStyle = plainColors.elementDisabled;
          MainCanvas.fillRect(Left, Top, ArrowWidth, Height);
          MainCanvas.fillRect(RightSplit, Top, ArrowWidth, Height);
        }
        MainCanvas.lineWidth = 2;
        MainCanvas.strokeStyle = plainColors.accent;
        MainCanvas.stroke();
        MainCanvas.closePath();
        DrawTextFit(Label, Left + Width / 2, Top + Height / 2 + 1, CommonIsMobile ? Width - 6 : Width - 36, Color7);
        DrawTextFit(Label, Left + Width / 2, Top + Height / 2 + 1, CommonIsMobile ? Width - 6 : Width - 36, "Black");
        if (Image != null && Image != "") {
          DrawImage(Image, Left + 2, Top + 2);
        }
        ControllerAddActiveArea(Left + Width / 2, Top);
        MainCanvas.beginPath();
        MainCanvas.fillStyle = "Black";
        MainCanvas.moveTo(Left + 15, Top + Height / 5);
        MainCanvas.lineTo(Left + 5, Top + Height / 2);
        MainCanvas.lineTo(Left + 15, Top + Height - Height / 5);
        MainCanvas.stroke();
        MainCanvas.closePath();
        MainCanvas.beginPath();
        MainCanvas.fillStyle = "Black";
        MainCanvas.moveTo(Left + Width - 15, Top + Height / 5);
        MainCanvas.lineTo(Left + Width - 5, Top + Height / 2);
        MainCanvas.lineTo(Left + Width - 15, Top + Height - Height / 5);
        MainCanvas.stroke();
        MainCanvas.closePath();
        MainCanvas.restore();
        if (CommonIsMobile) return;
        if (BackText == null) BackText = /* @__PURE__ */ __name(() => "MISSING VALUE FOR: BACK TEXT", "BackText");
        if (NextText == null) NextText = /* @__PURE__ */ __name(() => "MISSING VALUE FOR: NEXT TEXT", "NextText");
        if (MouseX >= Left && MouseX <= Left + Width && MouseY >= Top && MouseY <= Top + Height && !Disabled)
          DrawHoverElements.push(() => {
            DrawButtonHover(Left, Top, Width, Height, MouseX < LeftSplit ? BackText() : MouseX >= RightSplit ? NextText() : "");
          });
      },
      3 /* GuiRedraw */
    );
  }
  __name(hookDrawBackNextButton, "hookDrawBackNextButton");

  // src/Hooks/GuiRedraw/DrawButton.ts
  init_define_LAST_COMMIT_HASH();

  // src/Utilities/Drawing.ts
  init_define_LAST_COMMIT_HASH();
  var _Image = {
    doNotColorizeImageIncludes: [
      "Assets/Female3DCG/",
      "Backgrounds/",
      "Icons/Struggle/",
      "Icons/LARP/",
      "Icons/MagicBattle/",
      "Screens/",
      "http"
    ],
    doColorizeImageIncludes: [
      "https://ddeeplb.github.io/Themed-BC/dev/public"
    ],
    doNotColorizeImages: [
      "Icons/Accept.png",
      "Icons/Activity.png",
      "Icons/Arousal.png",
      "Icons/Audio.png",
      "Icons/BlindToggle2.png",
      "Icons/Cancel.png",
      "Icons/Cell.png",
      "Icons/Checked.png",
      "Icons/ClubCard.png",
      "Icons/Controller.png",
      "Icons/Crafting.png",
      "Icons/Exit.png",
      "Icons/Explore.png",
      "Icons/Gavel.png",
      "Icons/Gender.png",
      "Icons/Infiltration.png",
      "Icons/Lock.png",
      "Icons/LockMenu.png",
      "Icons/MagicSchool.png",
      "Icons/Online.png",
      "Icons/Platform.png",
      "Icons/Poker.png",
      "Icons/Search.png",
      "Icons/Security.png",
      "Icons/ServiceBell.png",
      "Icons/Title.png",
      "Icons/Use.png",
      "Icons/WinkNone.png",
      "Icons/Color.png",
      "Icons/ColorChange.png",
      "Icons/ColorChangeMulti.png",
      "Icons/Small/ColorBlocked.png",
      "Icons/Small/ColorChange.png",
      "Icons/Small/ColorChangeMulti.png",
      "Icons/Small/Naked.png",
      "Icons/Small/Use.png",
      "Icons/Small/YouTube.png"
    ],
    doColorizeImages: [],
    doDrawImage(source) {
      if (!source) return false;
      if (typeof source !== "string") return false;
      let doDraw = true;
      if (doDraw) {
        const includesFolder = _Image.doNotColorizeImageIncludes.some((prefix) => source.startsWith(prefix));
        const includesFile = _Image.doNotColorizeImages.includes(source);
        if (includesFolder || includesFile) {
          doDraw = false;
        }
      }
      if (!doDraw) {
        const includesFolder = _Image.doColorizeImageIncludes.some((prefix) => source.startsWith(prefix));
        const includesFile = _Image.doColorizeImages.includes(source);
        if (includesFolder || includesFile) {
          doDraw = true;
        }
      }
      return doDraw;
    }
  };
  function drawRect(x, y, width, height, backgroundColor, borderColor) {
    DrawRect(x, y, width, height, backgroundColor);
    DrawEmptyRect(x, y, width, height, borderColor, 2);
  }
  __name(drawRect, "drawRect");
  function drawButtonRect(x, y, width, height, backgroundColor, backgroundHoverColor, backgroundDisabledColor, borderColor, borderHoverColor, borderDisabledColor, isHovering, disabled) {
    if (!isHovering && !disabled) drawRect(x, y, width, height, backgroundColor, borderColor);
    else if (isHovering && !disabled) drawRect(x, y, width, height, backgroundHoverColor, borderHoverColor);
    else if (disabled) drawRect(x, y, width, height, backgroundDisabledColor, borderDisabledColor);
  }
  __name(drawButtonRect, "drawButtonRect");

  // src/Hooks/GuiRedraw/DrawButton.ts
  function hookDrawButton() {
    hookFunction(
      "DrawButton",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw()) return next(args);
        const [x, y, width, height, label, color, image, hoveringText, isDisabled] = args;
        const isHovering = MouseHovering(x, y, width, height);
        ControllerAddActiveArea(x, y);
        switch (_Color.getHexComputed(color).toLowerCase()) {
          case "#ffffff":
          case "#dddddd":
          case "#eeeeee":
            drawButtonRect(
              x,
              y,
              width,
              height,
              plainColors.element,
              plainColors.elementHover,
              plainColors.elementDisabled,
              plainColors.accent,
              plainColors.accentHover,
              plainColors.accentDisabled,
              isHovering,
              isDisabled
            );
            break;
          default:
            drawButtonRect(
              x,
              y,
              width,
              height,
              color,
              color,
              color,
              plainColors.accent,
              plainColors.accentHover,
              plainColors.accentDisabled,
              isHovering,
              isDisabled
            );
            break;
        }
        DrawTextFit(label, x + width / 2, y + height / 2 + 1, width - 4, plainColors.text);
        if (image != null && image != "") {
          DrawImage(image, x + 2, y + 2);
        }
        if (hoveringText != null && isHovering) {
          DrawHoverElements.push(() => DrawButtonHover(x, y, width, height, hoveringText));
        }
      },
      3 /* GuiRedraw */
    );
  }
  __name(hookDrawButton, "hookDrawButton");

  // src/Hooks/GuiRedraw/DrawButtonHover.ts
  init_define_LAST_COMMIT_HASH();
  function hookDrawButtonHover() {
    hookFunction(
      "DrawButtonHover",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw()) return next(args);
        const [, , Width, Height, HoveringText] = args;
        let [Left, Top] = args;
        if (HoveringText == null || HoveringText == "") return next(args);
        Left = MouseX > 1e3 ? Left - 475 : Left + Width + 25;
        Top = Top + (Height - 65) / 2;
        MainCanvas.save();
        MainCanvas.textAlign = "center";
        drawRect(Left, Top, 450, 65, plainColors.elementHint, plainColors.accent);
        DrawTextFit(HoveringText, Left + 225, Top + 33, 444, "Black");
        MainCanvas.restore();
      },
      3 /* GuiRedraw */
    );
  }
  __name(hookDrawButtonHover, "hookDrawButtonHover");

  // src/Hooks/GuiRedraw/DrawCheckbox.ts
  init_define_LAST_COMMIT_HASH();
  function hookDrawCheckbox() {
    hookFunction(
      "DrawCheckbox",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw()) return next(args);
        const [Left, Top, Width, Height, Text, IsChecked, Disabled = false, TextColor = "Black", CheckImage = "Icons/Checked.png"] = args;
        DrawText(Text, Left + 100, Top + 33, TextColor, "");
        DrawButton(Left, Top, Width, Height, "", "White", IsChecked ? CheckImage : "", null, Disabled);
      },
      3 /* GuiRedraw */
    );
  }
  __name(hookDrawCheckbox, "hookDrawCheckbox");

  // src/Hooks/GuiRedraw/DrawEmptyRect.ts
  init_define_LAST_COMMIT_HASH();
  function hookDrawEmptyRect() {
    hookFunction(
      "DrawEmptyRect",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw()) return next(args);
        const [Left, Top, Width, Height, Color7, Thickness] = args;
        const drawEmptyRect = /* @__PURE__ */ __name((color) => {
          MainCanvas.beginPath();
          MainCanvas.rect(Left, Top, Width, Height);
          MainCanvas.lineWidth = Thickness;
          MainCanvas.strokeStyle = color;
          MainCanvas.stroke();
        }, "drawEmptyRect");
        if (Color7?.startsWith("%")) {
          switch (Color7.substring(1).toLowerCase()) {
            case "border":
              drawEmptyRect(plainColors.accent);
              break;
            default:
              next(args);
              break;
          }
        } else {
          switch (_Color.getHexComputed(Color7).toLowerCase()) {
            case "#ffffff":
            case "#dddddd":
            case "#000000":
              drawEmptyRect(plainColors.accent);
              break;
            default:
              next(args);
              break;
          }
        }
      },
      3 /* GuiRedraw */
    );
  }
  __name(hookDrawEmptyRect, "hookDrawEmptyRect");

  // src/Hooks/GuiRedraw/DrawImageEx.ts
  init_define_LAST_COMMIT_HASH();
  function hookDrawImageEx() {
    hookFunction(
      "DrawImageEx",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw()) return next(args);
        if (typeof args[0] !== "string") return next(args);
        if (!_Image.doDrawImage(args[0])) return next(args);
        const [Source, Canvas, X, Y, Options] = args;
        Options.HexColor = plainColors.accent;
        Options.FullAlpha = true;
        next([Source, Canvas, X, Y, Options]);
      },
      3 /* GuiRedraw */
    );
  }
  __name(hookDrawImageEx, "hookDrawImageEx");

  // src/Hooks/GuiRedraw/DrawPreviewBox.ts
  init_define_LAST_COMMIT_HASH();
  function hookDrawPreviewBox() {
    hookFunction(
      "DrawPreviewBox",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw()) return next(args);
        const [X, Y, Path, Description, Options] = args;
        const { Vibrating, Icons, Disabled } = Options || {};
        let { Foreground, Background, Width, Height } = Options || {};
        Width = Width || DrawAssetPreviewDefaultWidth;
        Height = Height || DrawAssetPreviewDefaultHeight;
        const Padding = 2;
        const TextGutter = Description ? 44 : 0;
        Foreground = plainColors.text;
        Background = Background || plainColors.element;
        const hover = MouseHovering(X, Y, Width, Height);
        if (hover) Background = Background || plainColors.elementHover;
        if (Disabled) Background = Background || plainColors.elementDisabled;
        let ImageX = X + Padding;
        let ImageY = Y + Padding;
        let ImageWidth = Width;
        let ImageHeight = Height - TextGutter;
        if (ImageWidth > ImageHeight) {
          const Ratio = ImageHeight / ImageWidth;
          ImageWidth *= Ratio;
          ImageX += (Width - ImageWidth) / 2;
        } else if (ImageWidth < ImageHeight) {
          const Ratio = ImageWidth / ImageHeight;
          ImageHeight *= Ratio;
          ImageY += (Height - ImageHeight - TextGutter) / 2;
        }
        ImageWidth -= 2 * Padding;
        ImageHeight -= 2 * Padding;
        if (Vibrating) {
          ImageX += 1 + Math.floor(Math.random() * 3);
          ImageY += 1 + Math.floor(Math.random() * 3);
        }
        DrawRect(X, Y, Width, Height, Background);
        ControllerAddActiveArea(X, Y);
        DrawEmptyRect(X, Y, Width, Height, hover ? plainColors.accentHover : plainColors.accent);
        if (Path !== "") DrawImageResize(Path, ImageX, ImageY, ImageWidth, ImageHeight);
        DrawPreviewIcons(Icons, X, Y);
        if (Description) DrawTextFit(Description, X + Width / 2, Y + Height - 25, Width - 2 * Padding, Foreground);
      },
      3 /* GuiRedraw */
    );
  }
  __name(hookDrawPreviewBox, "hookDrawPreviewBox");

  // src/Hooks/GuiRedraw/DrawRect.ts
  init_define_LAST_COMMIT_HASH();
  var import_color2 = __toESM(require_color());
  function hookDrawRect() {
    hookFunction(
      "DrawRect",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw()) return next(args);
        const [Left, Top, Width, Height, color] = args;
        const drawRect2 = /* @__PURE__ */ __name((color2) => {
          DrawRect(Left, Top, Width, Height, color2);
        }, "drawRect");
        const hover = MouseIn(Left, Top, Width, Height) ? 1 : 0;
        if (color?.startsWith("%")) {
          switch (color.substring(1)) {
            case "disabled":
              drawRect2(plainColors.elementDisabled);
              break;
            case "hover":
              drawRect2(plainColors.elementHover);
              break;
            case "background":
              drawRect2(plainColors.element);
              break;
            case "friendhint":
              drawRect2(plainColors.elementHint);
              break;
            case "searchFullBlock":
              drawRect2((0, import_color2.default)(specialColors.blocked[hover]).mix((0, import_color2.default)(specialColors.roomBlocked[hover]), 0.5).hex());
              break;
            case "searchBlock":
              drawRect2(specialColors.roomBlocked[hover]);
              break;
            case "searchFullFriend":
              drawRect2((0, import_color2.default)(specialColors.roomFriend[hover]).mix((0, import_color2.default)(plainColors.elementDisabled), 0.5).hex());
              break;
            case "searchFriend":
              drawRect2(specialColors.roomFriend[hover]);
              break;
            case "searchFull":
              drawRect2(plainColors.elementDisabled);
              break;
            case "searchGame":
              drawRect2(specialColors.roomGame[hover]);
              break;
            case "allowed":
              drawRect2(specialColors.allowed[hover]);
              break;
            default:
              next(args);
              break;
          }
        } else {
          switch (_Color.getHexComputed(color).toLowerCase()) {
            case "#eeeeee":
            case "#dddddd":
            case "#cccccc":
            case "#ffffff":
            case "#ffff88":
            case "#ffffff88":
            case "#ffffffcc":
            case "#d7f6e9":
              drawRect2(plainColors.element);
              break;
            default:
              next(args);
              break;
          }
        }
      },
      3 /* GuiRedraw */
    );
  }
  __name(hookDrawRect, "hookDrawRect");

  // src/Hooks/GuiRedraw/DrawRoomBackground.ts
  init_define_LAST_COMMIT_HASH();

  // src/Utilities/Data.ts
  init_define_LAST_COMMIT_HASH();

  // src/Utilities/String.ts
  init_define_LAST_COMMIT_HASH();
  var __String = class __String {
    static encode(string) {
      return LZString.compressToBase64(JSON.stringify(string));
    }
    static decode(string) {
      const d = LZString.decompressFromBase64(string);
      let data = {};
      try {
        const decoded = JSON.parse(d);
        data = decoded;
      } catch {
      }
      if (data) return data;
    }
  };
  __name(__String, "_String");
  var _String = __String;

  // src/Utilities/Data.ts
  var PlayerStorage = /* @__PURE__ */ __name(() => typeof Player?.[ModName] === "object" ? CommonCloneDeep(Player?.[ModName]) : void 0, "PlayerStorage");
  var ExtensionStorage = /* @__PURE__ */ __name(() => Player.ExtensionSettings[ModName], "ExtensionStorage");
  function settingsLoad() {
    if (ExtensionStorage()) {
      Player[ModName] = JSON.parse(LZString.decompressFromBase64(ExtensionStorage()));
    } else if (Player.OnlineSettings[ModName]) {
      Player[ModName] = JSON.parse(LZString.decompressFromBase64(Player.OnlineSettings[ModName]));
      delete Player.OnlineSettings[ModName];
      window.ServerAccountUpdate.QueueData({ OnlineSettings: Player.OnlineSettings });
    } else {
      Player[ModName] = {};
    }
  }
  __name(settingsLoad, "settingsLoad");
  function settingsSave() {
    if (!ExtensionStorage()) Player.ExtensionSettings[ModName] = "";
    const Data = {
      Version: PlayerStorage().Version,
      GlobalModule: PlayerStorage().GlobalModule,
      ColorsModule: PlayerStorage().ColorsModule,
      IntegrationModule: PlayerStorage().IntegrationModule,
      ProfilesModule: PlayerStorage().ProfilesModule
    };
    Player.ExtensionSettings[ModName] = _String.encode(Data);
    ServerPlayerExtensionSettingsSync(ModName);
  }
  __name(settingsSave, "settingsSave");
  function settingsReset() {
    Player[ModName] = {};
    settingsSave();
  }
  __name(settingsReset, "settingsReset");

  // src/Hooks/GuiRedraw/DrawRoomBackground.ts
  function hookDrawRoomBackground() {
    hookFunction(
      "DrawRoomBackground",
      0 /* Observe */,
      ([URL, ...args], next) => {
        if (!doRedraw()) return next([URL, ...args]);
        if (URL.includes("Sheet.jpg")) {
          if (PlayerStorage().GlobalModule.doUseFlatColor) {
            DrawRect(0, 0, 2e3, 1e3, plainColors.main);
          } else {
            next([URL, ...args]);
            MainCanvas.save();
            MainCanvas.globalCompositeOperation = "multiply";
            DrawRect(0, 0, 2e3, 1e3, plainColors.main);
            MainCanvas.restore();
          }
        } else {
          next([URL, ...args]);
        }
      },
      3 /* GuiRedraw */
    );
  }
  __name(hookDrawRoomBackground, "hookDrawRoomBackground");

  // src/Hooks/GuiRedraw/DrawText.ts
  init_define_LAST_COMMIT_HASH();
  var import_color3 = __toESM(require_color());
  function hookDrawText() {
    hookFunction(
      "DrawText",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw()) return next(args);
        if (!args[0]) return next(args);
        if (!args[3]) return next(args);
        if ((0, import_color3.default)(args[3].toLowerCase()).hex() === "#000000") {
          args[3] = plainColors.text;
          args[4] = "";
        } else {
          args[4] = "";
        }
        next(args);
      },
      3 /* GuiRedraw */
    );
  }
  __name(hookDrawText, "hookDrawText");

  // src/Hooks/GuiRedraw/DrawTextFit.ts
  init_define_LAST_COMMIT_HASH();
  var import_color4 = __toESM(require_color());
  function hookDrawTextFit() {
    hookFunction(
      "DrawTextFit",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw()) return next(args);
        if (!args[0]) return next(args);
        if (!args[4]) return next(args);
        if ((0, import_color4.default)(args[4].toLowerCase()).hex() === "#000000") {
          args[4] = plainColors.text;
        }
        return next(args);
      },
      3 /* GuiRedraw */
    );
  }
  __name(hookDrawTextFit, "hookDrawTextFit");

  // src/Hooks/GuiRedraw/DrawTextWrap.ts
  init_define_LAST_COMMIT_HASH();
  var import_color5 = __toESM(require_color());
  function hookDrawTextWrap() {
    hookFunction(
      "DrawTextWrap",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw()) return next(args);
        if (!args[0]) return next(args);
        if (!args[5]) return next(args);
        const [Text, X, , Width, Height, ForeColor, BackColor, MaxLine, LineSpacing = 23] = args;
        let [, , Y, , ,] = args;
        const isHovering = MouseHovering(X, Y, Width, Height);
        if (!Text) return;
        ControllerAddActiveArea(X, Y);
        if (BackColor != null) {
          if (!isHovering) {
            drawRect(X, Y, Width, Height, BackColor, plainColors.accent);
          } else {
            drawRect(X, Y, Width, Height, plainColors.elementHover, plainColors.accentHover);
          }
        }
        let TextSize;
        if (MaxLine != null) {
          TextSize = MainCanvas.font;
          GetWrapTextSize(Text, Width, MaxLine);
        }
        MainCanvas.fillStyle = (0, import_color5.default)(ForeColor.toLowerCase()).hex() === "#000000" ? plainColors.text : ForeColor;
        if (MainCanvas.measureText(Text).width > Width) {
          const words = fragmentText(Text, Width);
          let line = "";
          let LineCount = 1;
          for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + " ";
            if (MainCanvas.measureText(testLine).width > Width && n > 0) {
              line = words[n] + " ";
              LineCount++;
            } else line = testLine;
          }
          line = "";
          Y = Y - (LineCount - 1) * LineSpacing + Height / 2;
          for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + " ";
            if (MainCanvas.measureText(testLine).width > Width && n > 0) {
              MainCanvas.fillText(line, X + Width / 2, Y);
              line = words[n] + " ";
              Y += LineSpacing * 2;
            } else {
              line = testLine;
            }
          }
          MainCanvas.fillText(line, X + Width / 2, Y);
        } else MainCanvas.fillText(Text, X + Width / 2, Y + Height / 2);
        if (MaxLine != null && TextSize != null) MainCanvas.font = TextSize;
      },
      3 /* GuiRedraw */
    );
  }
  __name(hookDrawTextWrap, "hookDrawTextWrap");

  // src/Modules/GuiRedraw.ts
  var doRedraw = /* @__PURE__ */ __name(() => {
    return PlayerStorage()?.GlobalModule?.themedEnabled && PlayerStorage().GlobalModule?.doVanillaGuiOverhaul && CurrentScreen !== "ClubCard";
  }, "doRedraw");
  var _GuiRedrawModule = class _GuiRedrawModule extends BaseModule {
    constructor() {
      super(...arguments);
      __publicField(this, "patched", false);
    }
    Load() {
      hookDrawRoomBackground();
      hookDrawButton();
      hookDrawCheckbox();
      hookDrawBackNextButton();
      hookDrawImageEx();
      hookDrawRect();
      hookDrawEmptyRect();
      hookDrawButtonHover();
      hookDrawPreviewBox();
      hookAppearanceGetPreviewImageColor();
      hookDrawTextWrap();
      hookDrawTextFit();
      hookDrawText();
      if (doRedraw()) this.patchGui();
    }
    patchGui() {
      if (this.patched) return false;
      patchFunction("ChatSearchNormalDraw", {
        // button patch
        'DrawButton(X, Y, 630, 85, "", (HasBlock && IsFull ? "#884444" : HasBlock ? "#FF9999" : HasFriends && IsFull ? "#448855" : HasFriends ? "#CFFFCF" : IsFull ? "#666" : "White"), null, null, IsFull);': 'DrawButton(X, Y, 630, 85, "", (HasBlock && IsFull ? "%searchFullBlock" : HasBlock ? "%searchBlock" : HasFriends && IsFull ? "%searchFullFriend" : HasFriends ? "%searchFriend" : IsFull ? "%searchFull" : "White"), null, null, IsFull);',
        // friend in room patch
        'DrawTextWrap(ChatSearchMuffle(ChatSearchResult[C].Friends[F].MemberName + " (" + ChatSearchResult[C].Friends[F].MemberNumber + ")"), (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "#FFFF88", 1);': 'DrawTextWrap(ChatSearchMuffle(ChatSearchResult[C].Friends[F].MemberName + " (" + ChatSearchResult[C].Friends[F].MemberNumber + ")"), (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "%friendhint", 1);',
        // room friend title patch
        'DrawTextWrap(TextGet("FriendsInRoom") + " " + ChatSearchMuffle(ChatSearchResult[C].DisplayName), (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "#FFFF88", 1);': 'DrawTextWrap(TextGet("FriendsInRoom") + " " + ChatSearchMuffle(ChatSearchResult[C].DisplayName), (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "%friendhint", 1);',
        // game hint patch
        'DrawTextWrap(TextGet("GameLabel") + " " + TextGet("Game" + ChatSearchResult[C].Game), (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "#9999FF", 1);': 'DrawTextWrap(TextGet("GameLabel") + " " + TextGet("Game" + ChatSearchResult[C].Game), (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "%searchGame", 1);',
        // block hint patch
        'DrawTextWrap(Block, (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "#FF9999", 1);': 'DrawTextWrap(Block, (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "%searchBlock", 1);'
      });
      patchFunction("ChatSearchPermissionDraw", {
        'DrawRect(X, Y, 630, 85, Hover ? "green" : "lime");': 'DrawRect(X, Y, 630, 85, "%allowed");',
        'DrawRect(X, Y, 630, 85, Hover ? "red" : "pink");': 'DrawRect(X, Y, 630, 85, "%searchBlock");'
      });
      patchFunction("DialogDraw", {
        "DrawRect(1087 + offset, 550, 225, 275, bgColor);": 'DrawRect(1087 + offset, 550, 225, 275, disabled ? "%disabled" : (hover ? "%hover" : "%background"));DrawEmptyRect(1087 + offset, 550, 225, 275, "%border");'
      });
      this.patched = true;
    }
    unpatchGui() {
      if (!this.patched) return false;
      unpatchFuntion("ChatSearchNormalDraw");
      unpatchFuntion("ChatSearchPermissionDraw");
      unpatchFuntion("DialogDraw");
      this.patched = false;
    }
    toggleGuiPatches() {
      if (!doRedraw()) {
        return this.unpatchGui();
      } else {
        return this.patchGui();
      }
    }
  };
  __name(_GuiRedrawModule, "GuiRedrawModule");
  var GuiRedrawModule = _GuiRedrawModule;

  // src/Translation.ts
  init_define_LAST_COMMIT_HASH();
  var _Localization = class _Localization {
    static async load() {
      const lang = TranslationLanguage.toLowerCase();
      this.Translation = await _Localization.fetchLanguageFile(lang);
      if (lang == "en") {
        return;
      }
      this.FallbackTranslation = await _Localization.fetchLanguageFile("en");
    }
    static getText(srcTag) {
      return this.Translation[srcTag] || this.FallbackTranslation?.[srcTag] || srcTag || "";
    }
    static async fetchLanguageFile(lang) {
      const response = await fetch(`${"https://ddeeplb.github.io/Themed-BC/dev/public"}/i18n/${lang}.lang`);
      if (lang != "en" && !response.ok) {
        return _Localization.fetchLanguageFile("en");
      }
      const langFileContent = await response.text();
      return this.parseLanguageFile(langFileContent);
    }
    static parseLanguageFile(content) {
      const translations = {};
      const lines = content.split("\n");
      for (const line of lines) {
        if (line.trim() === "" || line.trim().startsWith("#")) {
          continue;
        }
        const [key, value] = line.split("=");
        translations[key.trim()] = value.trim();
      }
      return translations;
    }
  };
  __name(_Localization, "Localization");
  __publicField(_Localization, "Translation", new Object());
  __publicField(_Localization, "FallbackTranslation", new Object());
  var Localization = _Localization;
  var getText = /* @__PURE__ */ __name((string) => Localization.getText(string), "getText");

  // src/Base/SettingDefinitions.ts
  init_define_LAST_COMMIT_HASH();
  var SETTING_FUNC_PREFIX = "PreferenceSubscreen";
  var SETTING_NAME_PREFIX = "Themed";
  var SETTING_FUNC_NAMES = ["Load", "Run", "Click", "Unload", "Exit"];
  function setSubscreen(subscreen) {
    if (!GUI.instance) {
      throw new Error("Attempt to set subscreen before init");
    }
    GUI.instance.currentSubscreen = subscreen;
    return GUI.instance.currentSubscreen;
  }
  __name(setSubscreen, "setSubscreen");

  // src/Base/BaseSetting.ts
  var _GuiSubscreen = class _GuiSubscreen {
    constructor(module) {
      __publicField(this, "module");
      this.module = module;
      SETTING_FUNC_NAMES.forEach((name) => {
        const fName = SETTING_FUNC_PREFIX + SETTING_NAME_PREFIX + this.name + name;
        if (typeof this[name] === "function" && typeof window[fName] !== "function")
          window[fName] = () => {
            this[name]();
          };
      });
    }
    get name() {
      return "UNKNOWN";
    }
    get icon() {
      return "";
    }
    get label() {
      return "UNDEFINED SETTING SCREEN";
    }
    get message() {
      return PreferenceMessage;
    }
    set message(message) {
      PreferenceMessage = message;
    }
    get SubscreenName() {
      return SETTING_NAME_PREFIX + this.constructor.name;
    }
    setSubscreen(screen) {
      return setSubscreen(screen);
    }
    get settings() {
      return this.module.settings;
    }
    get multipageStructure() {
      return [[]];
    }
    get structure() {
      return this.multipageStructure[Math.min(PreferencePageCurrent - 1, this.multipageStructure.length - 1)];
    }
    getYPos(ix) {
      return _GuiSubscreen.START_Y + _GuiSubscreen.Y_MOD * (ix % 9);
    }
    getXPos(ix) {
      return _GuiSubscreen.START_X + _GuiSubscreen.X_MOD * Math.floor(ix / 9);
    }
    hideElements() {
      this.multipageStructure.forEach((item, ix) => {
        if (ix != PreferencePageCurrent - 1) {
          item.forEach((setting) => {
            if (setting.type == "text" || setting.type == "number" || setting.type == "color") this.elementHide(setting.id);
          });
        }
      });
    }
    Load() {
      conDebug(`Loading ${PreferenceSubscreen} GUI`);
      for (const module of modules()) {
        if (!module.settingsScreen) continue;
        if (!Object.keys(module.settings).length) module.registerDefaultSettings();
      }
      this.multipageStructure.forEach(
        (s) => s.forEach((item) => {
          switch (item.type) {
            case "text": {
              const input = ElementCreateInput(item.id, "text", item.setting(), "255");
              input.setAttribute("autocomplete", "off");
              break;
            }
            case "number":
              ElementCreateInput(item.id, "number", item.setting(), "255");
              break;
            case "color": {
              const elm = ElementCreateInput(item.id, "color", item.setting());
              elm.classList.add("tmd-color-picker");
              break;
            }
          }
        })
      );
      CharacterAppearanceForceUpCharacter = Player.MemberNumber ?? -1;
    }
    Run() {
      _GuiSubscreen.POS_BAK = _GuiSubscreen.START_X;
      MainCanvas.save();
      _GuiSubscreen.START_X = 550;
      MainCanvas.textAlign = "left";
      DrawCharacter(Player, 50, 50, 0.9, false);
      DrawText(getText(`${this.name}.title`), _GuiSubscreen.START_X, _GuiSubscreen.START_Y - _GuiSubscreen.Y_MOD, "Black", "#D7F6E9");
      DrawButton(1815, 75, 90, 90, "", "White", "Icons/Exit.png", "Main Menu");
      if (this.multipageStructure.length > 1) {
        MainCanvas.textAlign = "center";
        PreferencePageChangeDraw(1595, 75, this.multipageStructure.length);
        MainCanvas.textAlign = "left";
      }
      this.hideElements();
      this.structure.forEach((item, ix) => {
        switch (item.type) {
          case "checkbox":
            this.drawCheckbox(item.label, item.description, item.setting(), ix, item.disabled);
            break;
          case "text":
          case "number":
          case "color":
            this.elementPosition(item.id, item.label, item.description, ix, item.disabled);
            break;
          case "label":
            this.drawLabel(item.label, item.description, ix);
            break;
          case "button":
            this.drawBetterButton(item.position, item.size, item.label, item.color, item.image, item.disabled);
            break;
        }
      });
      _GuiSubscreen.START_X = _GuiSubscreen.POS_BAK;
      MainCanvas.restore();
    }
    Click() {
      _GuiSubscreen.POS_BAK = _GuiSubscreen.START_X;
      _GuiSubscreen.TEXT_ALIGN_BAK = MainCanvas.textAlign;
      _GuiSubscreen.START_X = 550;
      MainCanvas.textAlign = "left";
      if (MouseIn(1815, 75, 90, 90)) return this.Exit();
      if (this.multipageStructure.length > 1) PreferencePageChangeClick(1595, 75, this.multipageStructure.length);
      this.structure.forEach((item, ix) => {
        switch (item.type) {
          case "checkbox":
            if (MouseIn(this.getXPos(ix), this.getYPos(ix) - 32, 64, 64) && !item.disabled) {
              item.setSetting(!item.setting());
            }
            break;
          case "button":
            if (MouseIn(item.position[0], item.position[1], item.size[0], item.size[1])) item.callback();
            break;
        }
      });
      _GuiSubscreen.START_X = _GuiSubscreen.POS_BAK;
      MainCanvas.textAlign = _GuiSubscreen.TEXT_ALIGN_BAK;
    }
    Exit() {
      this.multipageStructure.forEach(
        (s) => s.forEach((item) => {
          switch (item.type) {
            case "number":
              if (!CommonIsNumeric(ElementValue(item.id))) {
                ElementRemove(item.id);
              }
              break;
            case "text":
            case "color":
              item.setSetting(ElementValue(item.id));
              ElementRemove(item.id);
              break;
          }
        })
      );
      CharacterAppearanceForceUpCharacter = -1;
      CharacterLoadCanvas(Player);
      getModule("ColorsModule").reloadTheme();
      setSubscreen("MainMenu");
      settingsSave();
    }
    Unload() {
    }
    tooltip(text) {
      drawTooltip(300, 850, 1400, text, "left");
    }
    drawCheckbox(label, description, value, order, disabled = false) {
      const checkboxSize = 64;
      const labelOffset = checkboxSize + 30;
      const isHovering = MouseIn(this.getXPos(order) + labelOffset, this.getYPos(order) - 32, 600, checkboxSize);
      DrawTextFit(getText(label), this.getXPos(order) + labelOffset, this.getYPos(order), 600, isHovering ? "Red" : "Black", "Gray");
      DrawCheckbox(this.getXPos(order), this.getYPos(order) - 32, checkboxSize, checkboxSize, "", value ?? false, disabled);
      if (isHovering) this.tooltip(getText(description));
    }
    drawBetterButton(position, size, label, color, image = "", disabled = false) {
      const isHovering = MouseIn(position[0], position[1] - 32, size[0], size[1]);
      DrawButton(position[0], position[1], size[0], size[1], "", color, "", "", disabled);
      DrawImageResize(image, position[0] + 10, position[1] + 10, 60, 60);
      DrawTextFit(getText(label), position[0] + 80, position[1] + 40, 600, isHovering ? "Red" : "Black", "Gray");
    }
    drawButton(label, color, order, XOffset, disabled = false) {
      const isHovering = MouseIn(this.getXPos(order) + XOffset, this.getYPos(order) - 32, 200, 64);
      DrawButton(this.getXPos(order) + XOffset, this.getYPos(order) - 32, 200, 64, "", color, "", "", disabled);
      DrawTextFit(getText(label), this.getXPos(order) + XOffset + 58, this.getYPos(order), 600, isHovering ? "Red" : "Black", "Gray");
    }
    elementHide(elementId) {
      ElementPosition(elementId, -999, -999, 1, 1);
    }
    elementPosition(elementId, label, description, order, disabled = false) {
      const isHovering = MouseIn(this.getXPos(order) + 450, this.getYPos(order) - 32, 600, 64);
      DrawTextFit(getText(label), this.getXPos(order) + 450, this.getYPos(order), 600, isHovering ? "Red" : "Black", "Gray");
      ElementPositionFixed(elementId, this.getXPos(order), this.getYPos(order) - 32, 400, 64);
      if (disabled) ElementSetAttribute(elementId, "disabled", "true");
      if (!disabled) ElementRemoveAttribute(elementId, "disabled");
      if (isHovering) this.tooltip(getText(description));
    }
    drawLabel(label, description, order) {
      const isHovering = MouseIn(this.getXPos(order), this.getYPos(order) - 32, 600, 64);
      DrawTextFit(getText(label), this.getXPos(order), this.getYPos(order), 600, isHovering ? "Red" : "Black", "Gray");
      if (isHovering) this.tooltip(getText(description));
    }
  };
  __name(_GuiSubscreen, "GuiSubscreen");
  __publicField(_GuiSubscreen, "START_X", 180);
  __publicField(_GuiSubscreen, "START_Y", 205);
  __publicField(_GuiSubscreen, "X_MOD", 950);
  __publicField(_GuiSubscreen, "Y_MOD", 75);
  __publicField(_GuiSubscreen, "POS_BAK", _GuiSubscreen.START_X);
  __publicField(_GuiSubscreen, "TEXT_ALIGN_BAK");
  var GuiSubscreen = _GuiSubscreen;
  function drawTooltip(x, y, width, text, align) {
    const canvas = MainCanvas;
    const bak = canvas.textAlign;
    canvas.textAlign = align;
    canvas.beginPath();
    canvas.rect(x, y, width, 65);
    canvas.fillStyle = doRedraw() ? plainColors.element : "#FFFF88";
    canvas.fillRect(x, y, width, 65);
    canvas.fill();
    canvas.lineWidth = 2;
    canvas.strokeStyle = doRedraw() ? plainColors.accent : "black";
    canvas.stroke();
    canvas.closePath();
    DrawTextFit(text, align === "left" ? x + 3 : x + width / 2, y + 33, width - 6, doRedraw() ? plainColors.text : "black");
    canvas.textAlign = bak;
  }
  __name(drawTooltip, "drawTooltip");

  // src/Screens/Reset.ts
  init_define_LAST_COMMIT_HASH();

  // src/Utilities/Style.ts
  init_define_LAST_COMMIT_HASH();
  var styles = {
    inputs: "",
    chat: "",
    friendList: "",
    friendListBlur: "",
    scrollbar: "",
    selection: "",
    WCE: "",
    FUSAM: "",
    TTS: ""
  };
  var Style = {
    injectInline(styleId, styleSource) {
      const isStyleLoaded = document.getElementById(styleId);
      if (isStyleLoaded) return;
      const styleElement = document.createElement("style");
      styleElement.id = styleId;
      styleElement.appendChild(document.createTextNode(styleSource));
      document.head.appendChild(styleElement);
    },
    injectEmbed(styleId, styleLink) {
      const isStyleLoaded = document.getElementById(styleId);
      if (isStyleLoaded) return;
      const styleElement = document.createElement("link");
      styleElement.id = styleId;
      styleElement.rel = "stylesheet";
      styleElement.href = styleLink;
      document.head.appendChild(styleElement);
    },
    eject(id) {
      const style = document.getElementById(id);
      if (!style) return;
      style.remove();
    },
    reload(styleId, styleSource) {
      Style.eject(styleId);
      Style.injectInline(styleId, styleSource);
    },
    async fetch(link) {
      return fetch(link).then((res) => res.text());
    }
  };
  var BcStyle = {
    injectAll() {
      const isEnabled = PlayerStorage().GlobalModule.themedEnabled;
      Style.injectInline("root", composeRoot());
      Style.injectEmbed("themed", `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/styles/themed.css`);
      if (!isEnabled) return;
      const styleIDs = Object.keys(styles);
      styleIDs.forEach((id) => {
        if (!PlayerStorage().IntegrationModule[id]) return;
        Style.injectEmbed(id, `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/styles/${id}.css`);
      });
    },
    ejectAll() {
      Style.eject("root");
      Style.eject("themed");
      const styleIDs = Object.keys(styles);
      styleIDs.forEach((id) => {
        Style.eject(id);
      });
    },
    reloadAll() {
      BcStyle.ejectAll();
      BcStyle.injectAll();
    }
  };
  function composeRoot() {
    let genedColors = "";
    Object.keys(plainColors).forEach((key) => {
      genedColors += `--${key}: ${plainColors[key]};
	`;
    });
    Object.keys(specialColors).forEach((key) => {
      genedColors += `--${key}: ${specialColors[key][0]};
	`;
      genedColors += `--${key}Hover: ${specialColors[key][1]};
	`;
    });
    return (
      /*css*/
      `
    :root {
      ${genedColors}
    }
    `.replace(/\t+|\n\s*/g, "	")
    );
  }
  __name(composeRoot, "composeRoot");

  // src/Screens/Reset.ts
  var _GuiReset = class _GuiReset extends GuiSubscreen {
    constructor() {
      super(...arguments);
      __publicField(this, "allowedConfirmTime", 0);
    }
    get name() {
      return "Reset";
    }
    get icon() {
      return "";
    }
    Load() {
      this.allowedConfirmTime = Date.now() + 5e3;
      super.Load();
    }
    Run() {
      GuiSubscreen.POS_BAK = GuiSubscreen.START_X;
      GuiSubscreen.START_X = 180;
      MainCanvas.save();
      MainCanvas.textAlign = "center";
      DrawText(getText("reset.label.perma_reset_of_mod_data"), 1e3, 125, "Black");
      DrawText(getText("reset.label.warning"), 1e3, 225, "Black", "Black");
      DrawText(getText("reset.label.if_u_confirm_perma_reset"), 1e3, 325, "Black");
      DrawText(getText("reset.label.youll_able_to_use_mod"), 1e3, 550, "Gray");
      DrawText(getText("reset.label.action_cannot_be_undone"), 1e3, 625, "Red", "Black");
      const now = Date.now();
      if (now < this.allowedConfirmTime) {
        DrawButton(
          300,
          720,
          200,
          80,
          `${getText("reset.button.confirm")} (${Math.floor((this.allowedConfirmTime - now) / 1e3)})`,
          "#ddd",
          void 0,
          void 0,
          true
        );
      } else {
        DrawButton(300, 720, 200, 80, getText("reset.button.confirm"), "White");
      }
      DrawButton(1520, 720, 200, 80, getText("reset.button.cancel"), "White");
      MainCanvas.restore();
    }
    Click() {
      if (this.allowedConfirmTime === null) return;
      if (MouseIn(300, 720, 200, 80) && Date.now() >= this.allowedConfirmTime) return this.Confirm();
      if (MouseIn(1520, 720, 200, 80)) return this.Exit();
    }
    Confirm() {
      this.allowedConfirmTime = null;
      settingsReset();
      for (const module of modules()) {
        module.registerDefaultSettings();
      }
      _Color.composeRoot();
      BcStyle.reloadAll();
      this.setSubscreen(null);
      PreferenceSubscreenExtensionsClear();
    }
  };
  __name(_GuiReset, "GuiReset");
  var GuiReset = _GuiReset;

  // src/Screens/Support.ts
  init_define_LAST_COMMIT_HASH();
  var _GuiSupport = class _GuiSupport extends GuiSubscreen {
    get name() {
      return "Support";
    }
    get structure() {
      return [
        {
          type: "button",
          position: [GuiSubscreen.START_X, GuiSubscreen.START_Y],
          size: [405, 80],
          label: "support.button.ko-fi",
          color: "#49225C",
          image: "https://storage.ko-fi.com/cdn/nav-logo-stroke.png",
          disabled: false,
          callback() {
            window.open("https://ko-fi.com/monikka_bc", "_blank");
          }
        },
        {
          type: "button",
          position: [GuiSubscreen.START_X, GuiSubscreen.START_Y + GuiSubscreen.Y_MOD + 20],
          size: [405, 80],
          label: "support.button.patreon",
          color: "#49225C",
          image: "https://c5.patreon.com/external/favicon/rebrand/favicon-32.png?v=af5597c2ef",
          disabled: false,
          callback() {
            window.open("https://patreon.com/monikka_bc", "_blank");
          }
        }
      ];
    }
    static getSupporter() {
      if (_GuiSupport.thankYouNext < CommonTime()) _GuiSupport.doNextThankYou();
      return `${getText("support.other.thankyou")}, ${_GuiSupport.thankYou}`;
    }
    static doNextThankYou() {
      if (_GuiSupport.thankYou && _GuiSupport.thankYouList.length < 2) return;
      _GuiSupport.thankYou = CommonRandomItemFromList(_GuiSupport.thankYou, _GuiSupport.thankYouList);
      _GuiSupport.thankYouNext = CommonTime() + 4e3;
    }
    Load() {
      _GuiSupport.doNextThankYou();
      ElementCreateDiv("ThemedGratitude");
      const elm = document.getElementById("ThemedGratitude");
      ElementContent("ThemedGratitude", gratitudeHtml);
      const font = MainCanvas.canvas.clientWidth <= MainCanvas.canvas.clientHeight * 2 ? MainCanvas.canvas.clientWidth / 50 : MainCanvas.canvas.clientHeight / 25;
      Object.assign(elm.style, {
        fontFamily: CommonGetFontName(),
        fontSize: font + "px"
      });
      super.Load();
    }
    Run() {
      super.Run();
      const tmp = GuiSubscreen.START_X;
      GuiSubscreen.START_X = 550;
      DrawText(_GuiSupport.getSupporter(), GuiSubscreen.START_X + 300, GuiSubscreen.START_Y - GuiSubscreen.Y_MOD, "Black", "#D7F6E9");
      GuiSubscreen.START_X = tmp;
    }
    Click() {
      super.Click();
    }
    Exit() {
      ElementRemove("ThemedGratitude");
      super.Exit();
    }
  };
  __name(_GuiSupport, "GuiSupport");
  __publicField(_GuiSupport, "thankYouList", ["Ellena", "weboos", "Jamie"]);
  __publicField(_GuiSupport, "thankYouNext", 0);
  __publicField(_GuiSupport, "thankYou", "");
  var GuiSupport = _GuiSupport;
  var gratitudeHtml = (
    /*html*/
    `
<h1 class="ThemedH">Dear Supporters!</h1>
<p class="ThemedP">
  I want to take a moment to express my heartfelt gratitude for considering supporting me. Your willingness to stand by
  my side in this creative journey means the world to me, and I am truly humbled by your generosity.
</p>
<p class="ThemedP">
  Your support goes far beyond the financial contributions; it represents belief in my work and a shared passion for
  what I do. Your encouragement inspires me to continue developing.
</p>
<p class="ThemedP">
  Your support not only helps me sustain and grow as a developer, but also enables me to dedicate more time and
  resources to producing high-quality mods. It allows me to explore new ideas, enhance my skills, and bring even more
  meaningful and enjoyable content to you.
</p>
<p class="ThemedP">Thank you all~</p>
<p class="ThemedP">With love, Monikka\u2665</p>
`
  );

  // src/Screens/MainMenu.ts
  var _MainMenu = class _MainMenu extends GuiSubscreen {
    constructor(module) {
      super(module);
      __publicField(this, "subscreens", []);
      this.subscreens = module.subscreens;
    }
    get name() {
      return "MainMenu";
    }
    Load() {
      if (!GUI.instance?.currentSubscreen) {
        this.setSubscreen(this);
        return;
      }
      super.Load();
    }
    Run() {
      const tmp = GuiSubscreen.START_X;
      MainCanvas.save();
      GuiSubscreen.START_X = 550;
      MainCanvas.textAlign = "left";
      DrawCharacter(Player, 50, 50, 0.9, false);
      DrawText(
        getText("MainMenu.title").replace("$ModVersion", MOD_VERSION_CAPTION) + "  " + GuiSupport.getSupporter(),
        GuiSubscreen.START_X,
        GuiSubscreen.START_Y - GuiSubscreen.Y_MOD,
        "Black",
        "#D7F6E9"
      );
      DrawButton(1815, 75, 90, 90, "", "White", "Icons/Exit.png");
      MainCanvas.textAlign = "center";
      let i = 0;
      for (const screen of this.subscreens) {
        const PX = Math.floor(i / 6);
        const PY = i % 6;
        if (screen.name == "MainMenu") continue;
        DrawButton(GuiSubscreen.START_X + 430 * PX, 190 + 120 * PY, 450, 90, "", "White", "", "");
        DrawImageResize(screen.icon, GuiSubscreen.START_X + 430 * PX + 10, 190 + 120 * PY + 10, 70, 70);
        MainCanvas.textAlign = "left";
        DrawTextFit(getText(`mainmenu.button.${screen.name}`), GuiSubscreen.START_X + 100 + 430 * PX, 235 + 120 * PY, 340, "Black");
        MainCanvas.textAlign = "center";
        i++;
        MainCanvas.textAlign = "left";
      }
      DrawButton(1500, 730, 405, 80, "", "IndianRed");
      DrawImageResize("Icons/ServiceBell.png", 1510, 740, 60, 60);
      DrawTextFit("Reset", 1580, 770, 320, "Black");
      DrawButton(1500, 830, 405, 80, "", "#49225C");
      DrawImageResize("Assets/Female3DCG/Emoticon/Coffee/Icon.png", 1510, 840, 60, 60);
      DrawTextFit("Support Me\u2764", 1580, 870, 320, "Black");
      GuiSubscreen.START_X = tmp;
      MainCanvas.restore();
    }
    Click() {
      if (MouseIn(1815, 75, 90, 90)) return this.Exit();
      const tmp = GuiSubscreen.START_X;
      GuiSubscreen.START_X = 550;
      let i = 0;
      for (const screen of this.subscreens) {
        const PX = Math.floor(i / 6);
        const PY = i % 6;
        if (screen.name == "MainMenu") continue;
        if (MouseIn(GuiSubscreen.START_X + 430 * PX, 190 + 120 * PY, 450, 90)) {
          this.setSubscreen(screen);
          return;
        }
        i++;
      }
      GuiSubscreen.START_X = tmp;
      if (MouseIn(1500, 730, 405, 80)) this.setSubscreen(new GuiReset(getModule("GlobalModule")));
      if (MouseIn(1500, 830, 400, 80)) this.setSubscreen(new GuiSupport(getModule("GlobalModule")));
    }
    Exit() {
      CharacterAppearanceForceUpCharacter = -1;
      CharacterLoadCanvas(Player);
      this.setSubscreen(null);
      PreferenceSubscreenExtensionsClear();
    }
  };
  __name(_MainMenu, "MainMenu");
  var MainMenu = _MainMenu;

  // src/Base/SettingUtils.ts
  var _GUI = class _GUI extends BaseModule {
    constructor() {
      super();
      __publicField(this, "_subscreens");
      __publicField(this, "_mainMenu");
      __publicField(this, "_currentSubscreen", null);
      if (_GUI.instance) {
        throw new Error("Duplicate initialization");
      }
      this._mainMenu = new MainMenu(this);
      this._subscreens = [this._mainMenu];
      _GUI.instance = this;
    }
    get subscreens() {
      return this._subscreens;
    }
    get mainMenu() {
      return this._mainMenu;
    }
    get currentSubscreen() {
      return this._currentSubscreen;
    }
    set currentSubscreen(subscreen) {
      if (this._currentSubscreen) {
        this._currentSubscreen.Unload();
      }
      if (typeof subscreen === "string") {
        const scr = this._subscreens?.find((s) => s.name === subscreen);
        if (!scr) throw `Failed to find screen name ${subscreen}`;
        this._currentSubscreen = scr;
      } else {
        this._currentSubscreen = subscreen;
      }
      PreferenceMessage = "";
      PreferencePageCurrent = 1;
      let subscreenName = "";
      if (this._currentSubscreen) {
        subscreenName = SETTING_NAME_PREFIX + this._currentSubscreen?.name;
        this._currentSubscreen.Load();
      }
      PreferenceSubscreen = subscreenName || "Extensions";
    }
    get currentCharacter() {
      return Player;
    }
    get defaultSettings() {
      return null;
    }
    Load() {
      for (const module of modules()) {
        if (!module.settingsScreen) continue;
        this._subscreens.push(new module.settingsScreen(module));
      }
      this._mainMenu.subscreens = this._subscreens;
      PreferenceRegisterExtensionSetting({
        Identifier: "Themed",
        ButtonText: getText("infosheet.button_text"),
        Image: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/icons/mod.png`,
        load: /* @__PURE__ */ __name(() => {
          setSubscreen(new MainMenu(this));
        }, "load"),
        run: /* @__PURE__ */ __name(() => {
          if (this._currentSubscreen) {
            MainCanvas.textAlign = "left";
            this._currentSubscreen.Run();
            MainCanvas.textAlign = "center";
            this.drawDebug();
          }
        }, "run"),
        click: /* @__PURE__ */ __name(() => {
          if (this._currentSubscreen) {
            this._currentSubscreen.Click();
          }
        }, "click"),
        exit: /* @__PURE__ */ __name(() => {
          if (this._currentSubscreen) {
            this._currentSubscreen.Exit();
          }
        }, "exit")
      });
    }
    drawDebug() {
      if (true) {
        if (MouseX > 0 || MouseY > 0) {
          MainCanvas.save();
          MainCanvas.lineWidth = 1;
          MainCanvas.strokeStyle = "red";
          MainCanvas.beginPath();
          MainCanvas.moveTo(0, MouseY);
          MainCanvas.lineTo(2e3, MouseY);
          MainCanvas.moveTo(MouseX, 0);
          MainCanvas.lineTo(MouseX, 1e3);
          MainCanvas.stroke();
          MainCanvas.fillStyle = "black";
          MainCanvas.strokeStyle = "white";
          MainCanvas.fillRect(0, 950, 250, 50);
          MainCanvas.strokeRect(0, 950, 250, 50);
          DrawText(`X: ${MouseX} Y: ${MouseY}`, 125, 975, "white");
          MainCanvas.restore();
        }
      }
    }
  };
  __name(_GUI, "GUI");
  __publicField(_GUI, "instance", null);
  var GUI = _GUI;

  // src/Migrators/V140Migrator.ts
  init_define_LAST_COMMIT_HASH();

  // src/Migrators/BaseMigrator.ts
  init_define_LAST_COMMIT_HASH();
  var _BaseMigrator = class _BaseMigrator {
  };
  __name(_BaseMigrator, "BaseMigrator");
  var BaseMigrator = _BaseMigrator;

  // src/Migrators/V140Migrator.ts
  var _V140Migrator = class _V140Migrator extends BaseMigrator {
    get MigrationVersion() {
      return "1.4.0";
    }
    Migrate() {
      const colorsData = Player.Themed.ColorsModule;
      const integrationsData = Player.Themed.IntegrationModule;
      if (colorsData) {
        if (Player.Themed.ColorsModule["primaryColor"]) {
          Player.Themed.ColorsModule.base.main = Player.Themed.ColorsModule["primaryColor"];
          delete Player.Themed.ColorsModule["primaryColor"];
        }
        if (Player.Themed.ColorsModule["accentColor"]) {
          Player.Themed.ColorsModule.base.accent = Player.Themed.ColorsModule["accentColor"];
          delete Player.Themed.ColorsModule["accentColor"];
        }
        if (Player.Themed.ColorsModule["textColor"]) {
          Player.Themed.ColorsModule.base.text = Player.Themed.ColorsModule["textColor"];
          delete Player.Themed.ColorsModule["textColor"];
        }
      }
      if (integrationsData) {
        if (Player.Themed.IntegrationModule["BC"]) {
          Player.Themed.IntegrationModule.inputs = Player.Themed.IntegrationModule["BC"];
          delete Player.Themed.IntegrationModule["BC"];
        }
        if (Player.Themed.IntegrationModule["BC_Chat"]) {
          Player.Themed.IntegrationModule.chat = Player.Themed.IntegrationModule["BC_Chat"];
          delete Player.Themed.IntegrationModule["BC_Chat"];
        }
        if (Player.Themed.IntegrationModule["BC_FriendList"]) {
          Player.Themed.IntegrationModule.friendList = Player.Themed.IntegrationModule["BC_FriendList"];
          delete Player.Themed.IntegrationModule["BC_FriendList"];
        }
        if (Player.Themed.IntegrationModule["BC_Other"]) {
          Player.Themed.IntegrationModule.scrollbar = Player.Themed.IntegrationModule["BC_Other"];
          Player.Themed.IntegrationModule.selection = Player.Themed.IntegrationModule["BC_Other"];
          delete Player.Themed.IntegrationModule["BC_Other"];
        }
        if (Player.Themed.IntegrationModule["FBC"]) {
          Player.Themed.IntegrationModule.WCE = Player.Themed.IntegrationModule["FBC"];
          delete Player.Themed.IntegrationModule["FBC"];
        }
      }
      return true;
    }
  };
  __name(_V140Migrator, "V140Migrator");
  var V140Migrator = _V140Migrator;

  // src/Modules/Colors.ts
  init_define_LAST_COMMIT_HASH();
  var import_color6 = __toESM(require_color());

  // src/Screens/Colors.ts
  init_define_LAST_COMMIT_HASH();
  var _GuiColors = class _GuiColors extends GuiSubscreen {
    get name() {
      return "Colors";
    }
    get icon() {
      return "Icons/ColorChange.png";
    }
    get settings() {
      return super.settings;
    }
    get multipageStructure() {
      const defaultSettings = getModule("ColorsModule").defaultSettings;
      const isBaseMode = !Player.Themed.GlobalModule.doUseAdvancedColoring;
      const baseModeKey = /* @__PURE__ */ __name((key) => ["main", "accent", "text"].includes(key), "baseModeKey");
      return [
        Object.entries(this.settings.base).map(([key, value]) => ({
          type: "color",
          id: key,
          label: `colors.setting.${key}.name`,
          description: `colors.setting.${key}.desc`,
          setting: /* @__PURE__ */ __name(() => value ?? defaultSettings.base[key], "setting"),
          setSetting: /* @__PURE__ */ __name((val) => this.settings.base[key] = val, "setSetting"),
          disabled: isBaseMode && !baseModeKey(key)
        })).sort((a, b) => (a.disabled ? 1 : 0) - (b.disabled ? 1 : 0)),
        Object.entries(this.settings.special).map(([key, value]) => ({
          type: "color",
          id: key,
          label: `colors.setting.${key}.name`,
          description: `colors.setting.${key}.desc`,
          setting: /* @__PURE__ */ __name(() => value ?? defaultSettings.special[key], "setting"),
          setSetting: /* @__PURE__ */ __name((val) => this.settings.special[key] = val, "setSetting")
        }))
      ];
    }
    Run() {
      DrawButton(1495, 75, 90, 90, "", "White", "Icons/Swap.png", getText("colors.button.change_input_type"));
      super.Run();
    }
    Click() {
      if (MouseIn(1495, 75, 90, 90)) {
        this.multipageStructure.forEach((page) => {
          page.forEach((elm) => {
            if (elm.type == "color" || elm.type == "text") {
              const e = document.getElementById(elm.id);
              const elementType = e.getAttribute("type");
              if (elementType == "color") {
                e.setAttribute("type", "text");
              } else {
                e.setAttribute("type", "color");
              }
            }
          });
        });
        return;
      }
      super.Click();
    }
  };
  __name(_GuiColors, "GuiColors");
  var GuiColors = _GuiColors;

  // src/Utilities/Integration.ts
  init_define_LAST_COMMIT_HASH();
  function changeModColors() {
    if (doRedraw()) {
      changeBctColors();
      changeMbsColors();
    } else {
      resetBctColors();
      resetMbsColors();
    }
  }
  __name(changeModColors, "changeModColors");
  function changeBctColors() {
    if (Player.BCT) {
      BCT_API.HintBackColor = plainColors.element;
      BCT_API.HintBorderColor = plainColors.accent;
      BCT_API.HintForeColor = plainColors.text;
    }
  }
  __name(changeBctColors, "changeBctColors");
  function resetBctColors() {
    if (Player.BCT) {
      BCT_API.HintBackColor = "yellow";
      BCT_API.HintBorderColor = "black";
      BCT_API.HintForeColor = "black";
    }
  }
  __name(resetBctColors, "resetBctColors");
  function changeMbsColors() {
    if (typeof mbs !== "undefined" && mbs.API_VERSION.major === 1 && mbs.API_VERSION.minor >= 3) {
      if (!PlayerStorage().IntegrationModule.MBS) return;
      return mbs.css.setStyle({
        backgroundColor: plainColors.main,
        buttonColor: plainColors.element,
        buttonHoverColor: plainColors.elementHover,
        borderColor: plainColors.accent,
        tooltipColor: plainColors.elementHint,
        textColor: plainColors.text
      });
    }
  }
  __name(changeMbsColors, "changeMbsColors");
  function resetMbsColors() {
    if (typeof mbs !== "undefined" && mbs.API_VERSION.major === 1 && mbs.API_VERSION.minor >= 3) {
      if (!PlayerStorage().IntegrationModule.MBS)
        mbs.css.setStyle({
          backgroundColor: mbs.css.DEFAULT_STYLE.backgroundColor,
          buttonColor: mbs.css.DEFAULT_STYLE.buttonColor,
          buttonHoverColor: mbs.css.DEFAULT_STYLE.buttonHoverColor,
          borderColor: mbs.css.DEFAULT_STYLE.borderColor,
          tooltipColor: mbs.css.DEFAULT_STYLE.tooltipColor,
          textColor: mbs.css.DEFAULT_STYLE.textColor
        });
    }
  }
  __name(resetMbsColors, "resetMbsColors");

  // src/Modules/Colors.ts
  var primaryColor = (0, import_color6.default)("#202020");
  var elementColor = primaryColor.lighten(0.2);
  var accentColor = (0, import_color6.default)("#440171");
  var textColor = (0, import_color6.default)("#cccccc");
  var specialColors2 = {
    equipped: (0, import_color6.default)("#3575b5"),
    crafted: (0, import_color6.default)("#aaa235"),
    blocked: (0, import_color6.default)("#870c0c"),
    limited: (0, import_color6.default)("#9d6600"),
    allowed: (0, import_color6.default)("#008800"),
    roomFriend: (0, import_color6.default)("#008800"),
    roomBlocked: (0, import_color6.default)("#870c0c"),
    roomGame: (0, import_color6.default)("#3575b5")
  };
  var _ColorsModule = class _ColorsModule extends BaseModule {
    get settingsScreen() {
      return GuiColors;
    }
    get settings() {
      return super.settings;
    }
    set settings(val) {
      super.settings = val;
    }
    get defaultSettings() {
      return {
        base: {
          main: primaryColor.hex(),
          element: elementColor.hex(),
          elementHover: elementColor.lighten(0.3).hex(),
          elementDisabled: elementColor.darken(0.2).hex(),
          elementHint: elementColor.lighten(0.3).hex(),
          accent: accentColor.hex(),
          accentHover: accentColor.lighten(0.3).hex(),
          accentDisabled: accentColor.darken(0.2).hex(),
          text: textColor.hex()
        },
        special: {
          equipped: specialColors2.equipped.hex(),
          crafted: specialColors2.crafted.hex(),
          blocked: specialColors2.blocked.hex(),
          limited: specialColors2.limited.hex(),
          allowed: specialColors2.allowed.hex(),
          roomFriend: specialColors2.roomFriend.hex(),
          roomBlocked: specialColors2.roomBlocked.hex(),
          roomGame: specialColors2.roomGame.hex()
        }
      };
    }
    Load() {
    }
    reloadTheme() {
      _Color.composeRoot();
      BcStyle.reloadAll();
      changeModColors();
      getModule("GuiRedrawModule").toggleGuiPatches();
    }
  };
  __name(_ColorsModule, "ColorsModule");
  var ColorsModule = _ColorsModule;

  // src/Modules/Commands.ts
  init_define_LAST_COMMIT_HASH();
  var _CommandsModule = class _CommandsModule extends BaseModule {
    Load() {
      CommandCombine([
        {
          Tag: "share-theme",
          Description: ": Shares your theme with other people that have Themed installed!",
          Action() {
            getModule("ShareModule").share();
          }
        }
      ]);
    }
    Run() {
    }
  };
  __name(_CommandsModule, "CommandsModule");
  var CommandsModule = _CommandsModule;

  // src/Modules/Global.ts
  init_define_LAST_COMMIT_HASH();

  // src/Screens/Global.ts
  init_define_LAST_COMMIT_HASH();
  var _GuiGlobal = class _GuiGlobal extends GuiSubscreen {
    get name() {
      return "Global";
    }
    get icon() {
      return "Icons/Preference.png";
    }
    get settings() {
      return super.settings;
    }
    get structure() {
      const defaultSettings = getModule("GlobalModule").defaultSettings;
      return Object.entries(this.settings).map(([key, value]) => ({
        type: "checkbox",
        label: `settings.setting.${key}.name`,
        description: `settings.setting.${key}.desc`,
        setting: /* @__PURE__ */ __name(() => value ?? defaultSettings[key], "setting"),
        setSetting: /* @__PURE__ */ __name((val) => this.settings[key] = val, "setSetting")
      }));
    }
    Load() {
      super.Load();
    }
  };
  __name(_GuiGlobal, "GuiGlobal");
  var GuiGlobal = _GuiGlobal;

  // src/Modules/Global.ts
  var _GlobalModule = class _GlobalModule extends BaseModule {
    get settingsScreen() {
      return GuiGlobal;
    }
    get settings() {
      return super.settings;
    }
    set settings(val) {
      super.settings = val;
    }
    get defaultSettings() {
      return {
        themedEnabled: true,
        doVanillaGuiOverhaul: true,
        doUseAdvancedColoring: false,
        doUseFlatColor: false,
        doShowLocaleTime: true,
        doIndicateCharacterAbsence: true,
        doShowNewVersionMessage: true
      };
    }
    Load() {
      changeModColors();
      hookFunction(
        "ChatRoomCurrentTime",
        0 /* Observe */,
        (args, next) => {
          if (!this.settings.doShowLocaleTime) return next(args);
          const currentTime = new Date(Date.now());
          return currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        },
        0 /* Global */
      );
      hookFunction(
        "DialogDraw",
        0 /* Observe */,
        (args, next) => {
          if (!this.settings.themedEnabled) return next(args);
          if (!this.settings.doIndicateCharacterAbsence) return next(args);
          if (!(CurrentScreen == "ChatRoom")) return next(args);
          if (!CurrentCharacter) return next(args);
          next(args);
          if (CurrentCharacter === null) return;
          if (CurrentCharacter.IsPlayer()) return;
          if (ChatRoomCharacter.includes(CurrentCharacter)) {
            if (_GlobalModule.transparentCharacters.includes(CurrentCharacter.MemberNumber)) {
              CurrentCharacter.Canvas.getContext("2d").globalAlpha = 1;
              CurrentCharacter.CanvasBlink.getContext("2d").globalAlpha = 1;
              CharacterAppearanceBuildCanvas(CurrentCharacter);
              _GlobalModule.transparentCharacters.filter((x) => x !== CurrentCharacter.MemberNumber);
            }
          } else {
            MainCanvas.save();
            MainCanvas.globalCompositeOperation = "multiply";
            MainCanvas.beginPath();
            MainCanvas.fillStyle = "gray";
            MainCanvas.fillRect(500, 0, 500, 1e3);
            MainCanvas.fill();
            MainCanvas.restore();
            if (!_GlobalModule.transparentCharacters.includes(CurrentCharacter.MemberNumber)) {
              CurrentCharacter.Canvas.getContext("2d").globalAlpha = 0.2;
              CurrentCharacter.CanvasBlink.getContext("2d").globalAlpha = 0.2;
              CharacterAppearanceBuildCanvas(CurrentCharacter);
              _GlobalModule.transparentCharacters.push(CurrentCharacter.MemberNumber);
            }
            DrawImageEx("Icons/Warning.svg", MainCanvas, 500 + 125, 125, { Width: 250, Height: 250, HexColor: "#ff0000", FullAlpha: true });
          }
        },
        0 /* Global */
      );
      hookFunction(
        "AppearanceRun",
        0 /* Observe */,
        (args, next) => {
          if (!this.settings.themedEnabled) return next(args);
          if (!this.settings.doIndicateCharacterAbsence) return next(args);
          if (!(CurrentScreen == "Appearance")) return next(args);
          if (!CharacterAppearanceSelection) return next(args);
          next(args);
          if (CharacterAppearanceSelection === null) return;
          if (CharacterAppearanceSelection.IsPlayer()) return;
          if (ChatRoomCharacter.includes(CharacterAppearanceSelection)) {
            if (_GlobalModule.transparentCharacters.includes(CharacterAppearanceSelection.MemberNumber)) {
              CharacterAppearanceSelection.Canvas.getContext("2d").globalAlpha = 1;
              CharacterAppearanceSelection.CanvasBlink.getContext("2d").globalAlpha = 1;
              CharacterAppearanceBuildCanvas(CharacterAppearanceSelection);
              _GlobalModule.transparentCharacters.filter((x) => x !== CharacterAppearanceSelection.MemberNumber);
            }
          } else {
            MainCanvas.save();
            MainCanvas.globalCompositeOperation = "multiply";
            MainCanvas.beginPath();
            MainCanvas.fillStyle = "gray";
            MainCanvas.fillRect(660, 0, 500, 1e3);
            MainCanvas.fill();
            MainCanvas.restore();
            if (!_GlobalModule.transparentCharacters.includes(CharacterAppearanceSelection.MemberNumber)) {
              CharacterAppearanceSelection.Canvas.getContext("2d").globalAlpha = 0.2;
              CharacterAppearanceSelection.CanvasBlink.getContext("2d").globalAlpha = 0.2;
              CharacterAppearanceBuildCanvas(CharacterAppearanceSelection);
              _GlobalModule.transparentCharacters.push(CharacterAppearanceSelection.MemberNumber);
            }
            DrawImageEx("Icons/Warning.svg", MainCanvas, 660 + 125, 125, { Width: 250, Height: 250, HexColor: "#ff0000" });
          }
        },
        0 /* Global */
      );
      hookFunction(
        "ChatRoomSync",
        0 /* Observe */,
        (args, next) => {
          Character.filter((character) => _GlobalModule.transparentCharacters?.includes(character.MemberNumber));
          return next(args);
        },
        0 /* Global */
      );
    }
    Run() {
    }
  };
  __name(_GlobalModule, "GlobalModule");
  __publicField(_GlobalModule, "transparentCharacters", []);
  var GlobalModule = _GlobalModule;

  // src/Modules/Integration.ts
  init_define_LAST_COMMIT_HASH();

  // src/Screens/Integration.ts
  init_define_LAST_COMMIT_HASH();
  var _GuiIntegration = class _GuiIntegration extends GuiSubscreen {
    get name() {
      return "Integration";
    }
    get icon() {
      return "Icons/Scripts.png";
    }
    get settings() {
      return super.settings;
    }
    get structure() {
      const defaultSettings = getModule("IntegrationModule").defaultSettings;
      return Object.entries(this.settings).map(([key, value]) => ({
        type: "checkbox",
        label: `integration.setting.${key}.name`,
        description: `integration.setting.${key}.desc`,
        setting: /* @__PURE__ */ __name(() => value ?? defaultSettings[key], "setting"),
        setSetting: /* @__PURE__ */ __name((val) => this.settings[key] = val, "setSetting")
      }));
    }
    Load() {
      super.Load();
    }
  };
  __name(_GuiIntegration, "GuiIntegration");
  var GuiIntegration = _GuiIntegration;

  // src/Modules/Integration.ts
  var _IntegrationModule = class _IntegrationModule extends BaseModule {
    get settingsScreen() {
      return GuiIntegration;
    }
    get settings() {
      return super.settings;
    }
    set settings(val) {
      super.settings = val;
    }
    get defaultSettings() {
      return {
        inputs: true,
        chat: true,
        friendList: true,
        friendListBlur: false,
        scrollbar: true,
        selection: true,
        WCE: true,
        FUSAM: true,
        TTS: true,
        MBS: true
      };
    }
    Load() {
      hookFunction(
        "ChatRoomSync",
        0 /* Observe */,
        (args, next) => {
          next(args);
          BcStyle.reloadAll();
        },
        2 /* Integration */
      );
    }
  };
  __name(_IntegrationModule, "IntegrationModule");
  var IntegrationModule = _IntegrationModule;

  // src/Modules/Profiles.ts
  init_define_LAST_COMMIT_HASH();

  // src/Screens/Profiles.ts
  init_define_LAST_COMMIT_HASH();
  var _GuiProfiles = class _GuiProfiles extends GuiSubscreen {
    constructor() {
      super(...arguments);
      __publicField(this, "PreferenceText", "");
      __publicField(this, "ProfileNames", ["", "", ""]);
      __publicField(this, "tmpGlbl", GuiSubscreen.START_X);
    }
    get name() {
      return "Profiles";
    }
    get icon() {
      return "Icons/Title.png";
    }
    get settings() {
      return super.settings;
    }
    Load() {
      super.Load();
      for (let i = 0; i < 3; i++) {
        const profileIndex = i + 1;
        this.ProfileNames[i] = PlayerStorage()?.ProfilesModule?.[profileIndex]?.name ?? "";
      }
      CharacterAppearanceForceUpCharacter = Player.MemberNumber ?? -1;
    }
    Run() {
      MainCanvas.save();
      super.Run();
      MainCanvas.textAlign = "left";
      for (let i = 0; i < 3; i++) {
        const profileIndex = i + 1;
        if (this.ProfileNames[i] === "")
          DrawText(getText("profiles.text.profile") + ` ${profileIndex}`, this.getXPos(profileIndex), this.getYPos(profileIndex), "Black", "Gray");
        if (this.ProfileNames[i] !== "")
          DrawText(this.ProfileNames[i], this.getXPos(profileIndex), this.getYPos(profileIndex), "Black", "Gray");
        this.drawButton("profiles.button.save", "white", profileIndex, 250);
        this.drawButton("profiles.button.load", "white", profileIndex, 500);
        this.drawButton("profiles.button.delete", "IndianRed", profileIndex, 750);
      }
      if (this.PreferenceText)
        DrawText(this.PreferenceText, GuiSubscreen.START_X + 250, GuiSubscreen.START_Y - GuiSubscreen.Y_MOD, "Black", "Gray");
      MainCanvas.restore();
    }
    Click() {
      super.Click();
      for (let i = 0; i < 3; i++) {
        const profileIndex = i + 1;
        this.handleProfilesSaving(profileIndex);
        this.handleProfilesLoading(profileIndex);
        this.handleProfilesDeleting(profileIndex);
      }
    }
    Exit() {
      CharacterAppearanceForceUpCharacter = -1;
      CharacterLoadCanvas(Player);
      this.PreferenceText = "";
      super.Exit();
    }
    saveProfile(profileId, profileName) {
      if (profileId < 1 || profileId > 3) {
        conWarn(`Invalid profile id ${profileId}`);
        return false;
      }
      if (!Object.keys(PlayerStorage()?.ProfilesModule?.[profileId]).length) {
        Player[ModName].ProfilesModule[profileId] = {};
      }
      const saveData = {
        GlobalModule: PlayerStorage().GlobalModule,
        ColorsModule: PlayerStorage().ColorsModule,
        IntegrationModule: PlayerStorage().IntegrationModule
      };
      Player[ModName].ProfilesModule[profileId] = {
        name: profileName,
        data: saveData
      };
      return true;
    }
    loadProfile(profileId) {
      if (profileId < 1 || profileId > 3) {
        conWarn(`Invalid profile id ${profileId}`);
        return false;
      }
      if (Object.keys(PlayerStorage()?.ProfilesModule?.[profileId]).length < 1) {
        return false;
      }
      const data = PlayerStorage().ProfilesModule[profileId].data;
      if (Object.keys(data).length < 1) {
        return false;
      }
      if (data) {
        Player[ModName].GlobalModule = data.GlobalModule;
        Player[ModName].ColorsModule = data.ColorsModule;
        Player[ModName].IntegrationModule = data.IntegrationModule;
      }
      return true;
    }
    deleteProfile(profileId) {
      if (profileId < 1 || profileId > 3) {
        conWarn(`Invalid profile id ${profileId}`);
        return false;
      }
      if (!Object.keys(PlayerStorage()?.ProfilesModule?.[profileId]).length) {
        return false;
      }
      Player[ModName].ProfilesModule[profileId] = {};
      return true;
    }
    handleProfilesSaving(profileIndex) {
      const formerIndex = profileIndex - 1;
      if (MouseIn(this.getXPos(profileIndex) + 250, this.getYPos(profileIndex) - 32, 200, 64)) {
        const promptedName = prompt(getText("profiles.prompt"));
        if (promptedName === null) return;
        this.ProfileNames[formerIndex] = promptedName;
        if (this.ProfileNames[formerIndex] === "") {
          this.saveProfile(profileIndex, "");
          this.PreferenceText = `${getText("profiles.text.profile")} ${profileIndex} ${getText("profiles.text.has_been_saved")}`;
        }
        if (this.ProfileNames[formerIndex] !== "") {
          this.saveProfile(profileIndex, this.ProfileNames[formerIndex]);
          this.PreferenceText = `${getText("profiles.text.profile")} "${this.ProfileNames[formerIndex]}" ${getText(
            "profiles.text.has_been_saved"
          )}`;
        }
        return;
      }
    }
    handleProfilesLoading(profileIndex) {
      const formerIndex = profileIndex - 1;
      if (MouseIn(this.getXPos(profileIndex) + 500, this.getYPos(profileIndex) - 32, 200, 64)) {
        if (!this.loadProfile(profileIndex)) {
          this.PreferenceText = `${getText("profiles.text.profile")} ${profileIndex} ${getText("profiles.text.needs_to_be_saved")}`;
          return;
        }
        if (this.ProfileNames[formerIndex] === "")
          this.PreferenceText = `${getText("profiles.text.profile")} ${profileIndex} ${getText("profiles.text.has_been_loaded")}`;
        if (this.ProfileNames[formerIndex] !== "")
          this.PreferenceText = `${getText("profiles.text.profile")} "${this.ProfileNames[formerIndex]}" ${getText(
            "profiles.text.has_been_loaded"
          )}`;
        getModule("ColorsModule").reloadTheme();
        return;
      }
    }
    handleProfilesDeleting(profileIndex) {
      const formerIndex = profileIndex - 1;
      if (MouseIn(this.getXPos(profileIndex) + 750, this.getYPos(profileIndex) - 32, 200, 64)) {
        if (!this.ProfileNames[formerIndex]) return;
        if (this.deleteProfile(profileIndex)) {
          if (this.ProfileNames[formerIndex] === "") {
            this.PreferenceText = `${getText("profiles.text.profile")} ${profileIndex} ${getText("profiles.text.has_been_deleted")}`;
            return;
          }
          if (this.ProfileNames[formerIndex] !== "") {
            this.PreferenceText = `${getText("profiles.text.profile")} "${this.ProfileNames[formerIndex]}" ${getText(
              "profiles.text.has_been_deleted"
            )}`;
            this.ProfileNames[formerIndex] = "";
            return;
          }
        }
        if (!this.deleteProfile(profileIndex)) {
          this.PreferenceText = `${getText("profiles.text.profile")} ${profileIndex} ${getText("profiles.text.not_saved_or_already_deleted")}`;
          return;
        }
        return;
      }
    }
  };
  __name(_GuiProfiles, "GuiProfiles");
  var GuiProfiles = _GuiProfiles;

  // src/Utilities/Other.ts
  init_define_LAST_COMMIT_HASH();
  function sendLocalSmart(id, message, timeoutInSeconds) {
    const div = document.createElement("div");
    div.id = id;
    div.setAttribute("class", "ChatMessage ThemedMessage");
    div.setAttribute("data-time", ChatRoomCurrentTime());
    div.setAttribute("data-sender", Player?.MemberNumber + "");
    div.innerHTML = message.replaceAll("\n	", "") + /*html*/
    `<br><a class="ThemedText" onClick='document.getElementById("${id}").remove();'><b>Close (Click)</b></a>`;
    ChatRoomAppendChat(div);
    if (!timeoutInSeconds) return;
    setTimeout(() => div?.remove(), timeoutInSeconds * 1e3);
  }
  __name(sendLocalSmart, "sendLocalSmart");
  function sendAction(msg) {
    ServerSend("ChatRoomChat", {
      Content: "Beep",
      Type: "Action",
      Dictionary: [
        // EN
        { Tag: "Beep", Text: "msg" },
        // CN
        { Tag: "\u53D1\u9001\u79C1\u804A", Text: "msg" },
        // DE
        { Tag: "Biep", Text: "msg" },
        // FR
        { Tag: "Sonner", Text: "msg" },
        // Message itself
        { Tag: "msg", Text: msg }
      ]
    });
  }
  __name(sendAction, "sendAction");
  function useLgcModal(prompt2, acceptCallbackFn, cancelCallbackFn) {
    if (document.getElementById("themed-modal")) return false;
    const modal = document.createElement("div");
    const modalTitle = document.createElement("div");
    const modalButtons = document.createElement("div");
    const modalAcceptButton = document.createElement("div");
    const modalCancelButton = document.createElement("div");
    modal.classList.add("themed-modal");
    modalTitle.id = "modal-prompt";
    modalButtons.id = "modal-buttons";
    modalAcceptButton.id = "modal-button-accept";
    modalCancelButton.id = "modal-button-cancel";
    modalAcceptButton.classList.add("modal-button");
    modalCancelButton.classList.add("modal-button");
    modalTitle.innerHTML = prompt2;
    modalAcceptButton.innerText = getText("modal.button.accept");
    modalCancelButton.innerText = getText("modal.button.cancel");
    modalAcceptButton.addEventListener("click", () => {
      acceptCallbackFn();
      modal.remove();
    });
    modalCancelButton.addEventListener("click", () => {
      cancelCallbackFn();
      modal.remove();
    });
    modalButtons.append(modalAcceptButton, modalCancelButton);
    modal.append(modalTitle, modalButtons);
    document.body.append(modal);
  }
  __name(useLgcModal, "useLgcModal");
  function deepMergeMatchingProperties(mergeTo, mergeFrom) {
    const mergedObject = { ...mergeTo };
    for (const key in mergeFrom) {
      if (mergeFrom[key] !== null && typeof mergeFrom[key] === "object") {
        mergedObject[key] = deepMergeMatchingProperties(mergedObject[key] || {}, mergeFrom[key]);
      } else if (key in mergedObject) {
        mergedObject[key] = mergeFrom[key];
      }
    }
    return mergedObject;
  }
  __name(deepMergeMatchingProperties, "deepMergeMatchingProperties");
  function hasSetter(obj, prop) {
    return !!Object.getOwnPropertyDescriptor(obj, prop)?.["set"];
  }
  __name(hasSetter, "hasSetter");

  // src/Modules/Profiles.ts
  var _ProfilesModule = class _ProfilesModule extends BaseModule {
    get settings() {
      return super.settings;
    }
    get settingsScreen() {
      return GuiProfiles;
    }
    get defaultSettings() {
      return {};
    }
    Load() {
      const profileDefaults = {
        GlobalModule: getModule("GlobalModule").defaultSettings,
        ColorsModule: getModule("ColorsModule").defaultSettings,
        IntegrationModule: getModule("IntegrationModule").defaultSettings
      };
      for (let i = 0; i < 3; i++) {
        const profileIndex = i + 1;
        if (!PlayerStorage()?.ProfilesModule?.[profileIndex] || Object.keys(PlayerStorage()?.ProfilesModule?.[profileIndex]).length === 0) {
          Player[ModName].ProfilesModule[profileIndex] = {
            data: {},
            name: ""
          };
        }
        if (Object.keys(Player[ModName].ProfilesModule[profileIndex].data).length > 0) Player[ModName].ProfilesModule[profileIndex].data = deepMergeMatchingProperties(profileDefaults, Player[ModName].ProfilesModule[profileIndex].data);
      }
    }
  };
  __name(_ProfilesModule, "ProfilesModule");
  var ProfilesModule = _ProfilesModule;

  // src/Modules/Share.ts
  init_define_LAST_COMMIT_HASH();
  var _ShareModule = class _ShareModule extends BaseModule {
    Load() {
      hookFunction("ChatRoomMessageProcessHidden", 0 /* Observe */, (args, next) => {
        const data = args[0];
        if (data.Content !== "ThemedTheme") return next(args);
        const sender = ChatRoomCharacter.find((c) => c.MemberNumber == data.Sender);
        const senderName = CharacterNickname(sender);
        const prompt2 = getText("modal.prompt.share").replace("$Sender", `${senderName} (${data.Sender})`).replace("$SenderPronoun", CharacterPronoun(sender, "Possessive", false));
        const message = document.createElement("div");
        message.id = sender.MemberNumber.toString();
        message.setAttribute("class", "themed-chat-modal");
        message.setAttribute("data-time", ChatRoomCurrentTime());
        message.setAttribute("data-sender", sender.MemberNumber + "");
        const text = document.createElement("div");
        const button = document.createElement("div");
        text.innerHTML = getText("modal.prompt.chat_share_notification").replace("$Sender", `${senderName} (${data.Sender})`);
        button.innerHTML = getText("modal.button.show");
        text.classList.add("modal-prompt");
        button.classList.add("modal-button");
        const messageData = data.Dictionary[0]["ThemedMessage"];
        const theme = messageData.Theme;
        const version = messageData.ThemeVersion;
        button.addEventListener("click", () => {
          if (!version || version !== Player.Themed.Version) {
            sendLocalSmart("theme-not-up-to-date", "Theme sent by " + senderName + " is not up-to-date!");
            return;
          }
          useLgcModal(
            prompt2,
            () => {
              this.acceptShare(theme);
            },
            () => {
            }
          );
        });
        message.append(text, button);
        ChatRoomAppendChat(message);
        ElementScrollToEnd("TextAreaChatLog");
      });
    }
    acceptShare(data) {
      Player.Themed.ColorsModule = data;
      settingsSave();
      getModule("ColorsModule").reloadTheme();
    }
    share() {
      sendAction(`${CharacterNickname(Player)} shares ${CharacterPronoun(Player, "Possessive", false)} Themed theme!`);
      const packet = {
        Type: "Hidden",
        Content: "ThemedTheme",
        Sender: Player.MemberNumber,
        Dictionary: [{ ThemedMessage: { ThemeVersion: Player.Themed.Version, Theme: Player.Themed.ColorsModule } }]
      };
      ServerSend("ChatRoomChat", packet);
    }
  };
  __name(_ShareModule, "ShareModule");
  var ShareModule = _ShareModule;

  // src/Modules/Version.ts
  init_define_LAST_COMMIT_HASH();
  var _VersionModule = class _VersionModule extends BaseModule {
    Load() {
      hookFunction(
        "ChatRoomSync",
        0 /* Observe */,
        (args, next) => {
          next(args);
          _VersionModule.sendNewVersionMessage();
        },
        4 /* Version */
      );
    }
    static isNewVersion(current, candidate) {
      if (current !== void 0) {
        const CURRENT_ = current.split("."), CANDIDATE_ = candidate.split(".");
        for (let i = 0; i < 3; i++) {
          if (CURRENT_[i] === CANDIDATE_[i]) {
            continue;
          }
          return CANDIDATE_[i] > CURRENT_[i];
        }
      }
      if (current === void 0 || current === "" || !current) {
        return true;
      }
      return false;
    }
    static async sendNewVersionMessage() {
      if (PlayerStorage().GlobalModule.doShowNewVersionMessage && _VersionModule.isItNewVersion) {
        const changelog = await fetch(`${"https://ddeeplb.github.io/Themed-BC/dev/public"}/html/Changelog.html`).then((res) => res.text()).then((text) => text.replace(/\r\n/g, "\n"));
        sendLocalSmart("ThemedNewVersion", changelog);
      }
    }
    static saveVersion() {
      if (PlayerStorage()) {
        Player[ModName].Version = "1.4.0";
      }
    }
    static loadVersion() {
      if (PlayerStorage()?.Version) {
        return PlayerStorage().Version;
      }
      return;
    }
    static checkNewVersion() {
      const LoadedVersion = _VersionModule.loadVersion();
      if (_VersionModule.isNewVersion(LoadedVersion, "1.4.0")) {
        _VersionModule.isItNewVersion = true;
      }
    }
    static checkVersionMigration() {
      const PreviousVersion = _VersionModule.loadVersion();
      let saveRequired = false;
      for (const migrator of _VersionModule.Migrators) {
        if (_VersionModule.isNewVersion(PreviousVersion, migrator.MigrationVersion)) {
          saveRequired = saveRequired || migrator.Migrate();
          conInfo(`Migrating ${ModName} from ${PreviousVersion} to ${migrator.MigrationVersion} with ${migrator.constructor.name}`);
        }
      }
      return saveRequired;
    }
    static check() {
      _VersionModule.checkNewVersion();
      const saveRequired = _VersionModule.checkVersionMigration();
      _VersionModule.saveVersion();
      if (saveRequired) {
        settingsSave();
      }
    }
    static registerMigrator(migrator) {
      _VersionModule.Migrators.push(migrator);
    }
  };
  __name(_VersionModule, "VersionModule");
  __publicField(_VersionModule, "isItNewVersion", false);
  __publicField(_VersionModule, "Migrators", []);
  var VersionModule = _VersionModule;

  // src/Themed.ts
  function initWait() {
    conLog("Init wait");
    if (CurrentScreen == null || CurrentScreen === "Login") {
      hookFunction("LoginResponse", 0, (args, next) => {
        conDebug("Init! LoginResponse caught: ", args);
        next(args);
        const response = args[0];
        if (response && typeof response.Name === "string" && typeof response.AccountName === "string") {
          init();
        }
      });
    } else {
      conLog("Already logged in, init");
      init();
    }
  }
  __name(initWait, "initWait");
  async function init() {
    if (window.ThemedLoaded) return;
    await Localization.load();
    settingsLoad();
    if (!initModules()) {
      unload();
      return;
    }
    VersionModule.registerMigrator(new V140Migrator());
    VersionModule.check();
    for (const m of modules()) {
      if (m.defaultSettings && hasSetter(m, "defaultSettings"))
        m.settings = deepMergeMatchingProperties(m.defaultSettings, m.settings);
    }
    _Color.composeRoot();
    BcStyle.injectAll();
    window.ThemedLoaded = true;
    conLog(`Loaded! Version: ${MOD_VERSION_CAPTION}`);
  }
  __name(init, "init");
  function initModules() {
    registerModule(new GUI());
    registerModule(new GlobalModule());
    registerModule(new ColorsModule());
    registerModule(new GuiRedrawModule());
    registerModule(new IntegrationModule());
    registerModule(new ProfilesModule());
    registerModule(new CommandsModule());
    registerModule(new ShareModule());
    registerModule(new VersionModule());
    for (const m of modules()) {
      m.Init();
    }
    for (const m of modules()) {
      m.Load();
    }
    for (const m of modules()) {
      m.Run();
    }
    conLog("Modules Loaded.");
    return true;
  }
  __name(initModules, "initModules");
  function unload() {
    unloadModules();
    delete window.ThemedLoaded;
    conLog("Unloaded.");
    return true;
  }
  __name(unload, "unload");
  function unloadModules() {
    for (const m of modules()) {
      m.Unload();
    }
  }
  __name(unloadModules, "unloadModules");
  initWait();
  return __toCommonJS(Themed_exports);
})();
//# sourceMappingURL=themed.js.map
