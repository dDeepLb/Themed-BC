"use strict";
var Themed = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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

  // node_modules/.pnpm/bondage-club-mod-sdk@1.2.0/node_modules/bondage-club-mod-sdk/dist/bcmodsdk.js
  var require_bcmodsdk = __commonJS({
    "node_modules/.pnpm/bondage-club-mod-sdk@1.2.0/node_modules/bondage-club-mod-sdk/dist/bcmodsdk.js"(exports) {
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

  // src/Base/Modules.ts
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

  // src/Utilities/ModDefinition.ts
  var ModName = "Themed";
  var FullModName = "BC Themed";
  var ModVersion = "1.3.2";
  var ModRepository = "https://github.com/dDeepLb/Themed-BC";
  var DebugMode = false;

  // src/Base/BaseModule.ts
  var BaseModule = class {
    static {
      __name(this, "BaseModule");
    }
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
      if (!Player?.Themed?.GlobalModule) return false;
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

  // src/Utilities/SDK.ts
  var import_bondage_club_mod_sdk = __toESM(require_bcmodsdk());

  // src/Utilities/Console.ts
  var STYLES = {
    INFO: "color: #32CCCC",
    LOG: "color: #CCCC32",
    DEBUG: "color: #9E4BCF"
  };
  var cmdPrefix = "Themed";
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
    if (DebugMode) {
      if (typeof args[0] === "string") console.debug(`%c${cmdPrefix}: ${args[0]}`, STYLES.DEBUG, ...args.slice(1));
      else console.debug(`%c${cmdPrefix}:`, STYLES.LOG, ...args);
    }
  }
  __name(conDebug, "conDebug");

  // src/Utilities/SDK.ts
  var SDK = import_bondage_club_mod_sdk.default.registerMod(
    {
      name: ModName,
      fullName: FullModName,
      version: ModVersion,
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
  var itemPreviewColors = {
    base: ["%background", "%hover"],
    worn: ["lightblue", "lightskyblue"],
    unusable: ["gray", "gray"],
    crafted: ["#FFFFAF", "palegoldenrod"],
    blocked: ["#b81010", "red"],
    limited: ["orange", "#fcae55"],
    allowed: ["green", "limegreen"]
  };
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
          return item.Worn ? "gray" : itemPreviewColors[permission][hover ? 1 : 0];
        } else {
          const unusable = item.SortOrder.startsWith(DialogSortOrder.Unusable.toString()) || item.SortOrder.startsWith(DialogSortOrder.TargetFavoriteUnusable.toString()) || item.SortOrder.startsWith(DialogSortOrder.PlayerFavoriteUnusable.toString());
          const blocked = item.SortOrder.startsWith(DialogSortOrder.Blocked.toString());
          const limited = item.Icons.includes("AllowedLimited");
          if (blocked) return itemPreviewColors["blocked"][hover ? 1 : 0];
          else if (item.Worn) return itemPreviewColors["worn"][hover ? 1 : 0];
          else if (item.Craft != null && item.Craft.Name != null) return itemPreviewColors["crafted"][hover ? 1 : 0];
          else if (unusable) return itemPreviewColors["unusable"][hover ? 1 : 0];
          else if (limited) return itemPreviewColors["limited"][hover ? 1 : 0];
          else return itemPreviewColors["base"][hover ? 1 : 0];
        }
      },
      3 /* GuiRedraw */
    );
  }
  __name(hookAppearanceGetPreviewImageColor, "hookAppearanceGetPreviewImageColor");

  // src/Utilities/Color.ts
  var colors = {
    mainBackground: "",
    elementBackground: "",
    elementBackgroundHover: "",
    elementBackgroundDisabled: "",
    elementHint: "",
    elementBorder: "",
    elementBorderHover: "",
    // elementBorderDisabled: '',
    text: "",
    icon: ""
    // iconHover: '',
    // iconDisabled: '',
  };
  var isBlack = /* @__PURE__ */ __name((color) => _Color.getComputed(color) === "rgb(0, 0, 0)", "isBlack");
  var cachedColors = {};
  var _Color = {
    darken(hexColor, percentage) {
      if (!hexColor) return;
      const cacheColor = _Color.getCache(`darker${hexColor}${percentage}`);
      if (cacheColor) return cacheColor;
      const color = _Color.extractFromRGBA(_Color.getComputed(hexColor));
      const newRgbColor = { r: 0, g: 0, b: 0 };
      newRgbColor.r = Math.max(0, color.r - Math.round(percentage / 100 * color.r));
      newRgbColor.g = Math.max(0, color.g - Math.round(percentage / 100 * color.g));
      newRgbColor.b = Math.max(0, color.b - Math.round(percentage / 100 * color.b));
      newRgbColor.a = color.a;
      const ret = _Color.rgbaToHex(newRgbColor);
      _Color.setCache(`darker${hexColor}${percentage}`, ret);
      return ret;
    },
    lighten(hexColor, percentage) {
      if (!hexColor) return;
      const cacheColor = _Color.getCache(`lighter${hexColor}${percentage}`);
      if (cacheColor) return cacheColor;
      const color = _Color.extractFromRGBA(_Color.getComputed(hexColor));
      const newRgbColor = { r: 0, g: 0, b: 0 };
      newRgbColor.r = Math.min(255, color.r + Math.round(percentage / 100 * (255 - color.r)));
      newRgbColor.g = Math.min(255, color.g + Math.round(percentage / 100 * (255 - color.g)));
      newRgbColor.b = Math.min(255, color.b + Math.round(percentage / 100 * (255 - color.b)));
      newRgbColor.a = color.a;
      const ret = _Color.rgbaToHex(newRgbColor);
      _Color.setCache(`lighter${hexColor}${percentage}`, ret);
      return ret;
    },
    toDarkMode(colorHex, backgroundColorHex) {
      const cacheColor = _Color.getCache(`darkMode${colorHex}${backgroundColorHex}`);
      if (cacheColor) return cacheColor;
      const lightColor = _Color.extractFromRGBA(_Color.getComputed(colorHex));
      const backgroundColor = _Color.extractFromRGBA(_Color.getComputed(backgroundColorHex));
      const contrastRatio = _Color.getContrastRatio(lightColor, backgroundColor);
      if (contrastRatio < 4.5) {
        lightColor.r = Math.min(lightColor.r + 30, 255);
        lightColor.g = Math.min(lightColor.g + 30, 255);
        lightColor.b = Math.min(lightColor.b + 30, 255);
      }
      const ret = _Color.rgbaToHex(lightColor);
      _Color.setCache(`darkMode${colorHex}${backgroundColorHex}`, ret);
      return ret;
    },
    getContrastRatio(color1, color2) {
      const luminance1 = _Color.calculateLuminance(color1);
      const luminance2 = _Color.calculateLuminance(color2);
      return (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
    },
    calculateLuminance(color) {
      const r = color.r / 255;
      const g = color.g / 255;
      const b = color.b / 255;
      const gammaCorrectedR = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
      const gammaCorrectedG = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
      const gammaCorrectedB = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
      return 0.2126 * gammaCorrectedR + 0.7152 * gammaCorrectedG + 0.0722 * gammaCorrectedB;
    },
    hexToRgba(hex) {
      hex = hex.replace(/^#/, "");
      if (hex.length === 6) {
        return {
          r: parseInt(hex.slice(0, 2), 16),
          g: parseInt(hex.slice(2, 4), 16),
          b: parseInt(hex.slice(4, 6), 16),
          a: 1
          // Fully opaque alpha
        };
      } else if (hex.length === 8) {
        return {
          r: parseInt(hex.slice(0, 2), 16),
          g: parseInt(hex.slice(2, 4), 16),
          b: parseInt(hex.slice(4, 6), 16),
          a: parseInt(hex.slice(6, 8), 16) / 255
          // Convert alpha to range between 0 and 1
        };
      }
      return { r: 0, g: 0, b: 0, a: 1 };
    },
    rgbaToHex(color) {
      const { r, g, b, a } = color;
      if (a !== void 0 && a !== 1) {
        const alphaHex = Math.round(a * 255).toString(16).toUpperCase().padStart(2, "0");
        return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase()}${alphaHex}`;
      }
      return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase()}`;
    },
    extractFromRGBA(rgbaString) {
      const rgbaRegex = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/;
      const match = rgbaString.match(rgbaRegex);
      if (match) {
        const [, tempR, tempG, tempB, tempA] = match;
        const r = parseInt(tempR, 10);
        const g = parseInt(tempG, 10);
        const b = parseInt(tempB, 10);
        const a = tempA ? parseFloat(tempA) : 1;
        return {
          r,
          g,
          b,
          a
        };
      } else {
        return null;
      }
    },
    getComputed(color) {
      const cachedColor = _Color.getCache(`comp${color}`);
      if (cachedColor) return cachedColor;
      const div = document.createElement("div");
      div.style.color = color;
      document.body.appendChild(div);
      const computedColor = getComputedStyle(div).color;
      div.remove();
      const ret = computedColor;
      _Color.setCache(`comp${color}`, ret);
      return ret;
    },
    getHexComputed(color) {
      color = _Color.getComputed(color);
      const RGBA = _Color.extractFromRGBA(color);
      const ret = _Color.rgbaToHex(RGBA);
      return ret;
    },
    composeRoot() {
      const data = Player.Themed.ColorsModule;
      const primaryColor = _Color.getHexComputed(data.primaryColor);
      const accentColor = _Color.getHexComputed(data.accentColor);
      const textColor = _Color.getHexComputed(data.textColor);
      colors.mainBackground = primaryColor;
      colors.elementBackground = _Color.lighten(primaryColor, 10);
      colors.elementBackgroundDisabled = primaryColor;
      colors.elementBackgroundHover = accentColor;
      colors.elementHint = _Color.lighten(colors.elementBackground, 20);
      colors.elementBorder = accentColor;
      colors.elementBorderHover = _Color.lighten(accentColor, 20);
      colors.text = textColor;
      colors.icon = accentColor;
    },
    setCache(key, value) {
      cachedColors[key] = value;
    },
    getCache(key) {
      return cachedColors[key];
    },
    clearCache() {
      cachedColors = {};
    }
  };

  // src/Hooks/GuiRedraw/DrawBackNextButton.ts
  function hookDrawBackNextButton() {
    hookFunction(
      "DrawBackNextButton",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw()) return next(args);
        const [Left, Top, Width, Height, Label, Color, Image, , , Disabled] = args;
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
        MainCanvas.fillStyle = colors.elementBackground;
        MainCanvas.fillRect(Left, Top, Width, Height);
        if (MouseIn(Left, Top, Width, Height) && !CommonIsMobile && !Disabled) {
          MainCanvas.fillStyle = colors.elementBackgroundHover;
          if (MouseX > RightSplit) {
            MainCanvas.fillRect(RightSplit, Top, ArrowWidth, Height);
          } else if (MouseX <= LeftSplit) {
            MainCanvas.fillRect(Left, Top, ArrowWidth, Height);
          } else {
            MainCanvas.fillRect(Left + ArrowWidth, Top, Width - ArrowWidth * 2, Height);
          }
        } else if (CommonIsMobile && ArrowWidth < Width / 2 && !Disabled) {
          MainCanvas.fillStyle = colors.elementBackgroundDisabled;
          MainCanvas.fillRect(Left, Top, ArrowWidth, Height);
          MainCanvas.fillRect(RightSplit, Top, ArrowWidth, Height);
        }
        MainCanvas.lineWidth = 2;
        MainCanvas.strokeStyle = colors.elementBorder;
        MainCanvas.stroke();
        MainCanvas.closePath();
        DrawTextFit(Label, Left + Width / 2, Top + Height / 2 + 1, CommonIsMobile ? Width - 6 : Width - 36, Color);
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

  // src/Utilities/Drawing.ts
  var cachedImageData = {};
  var cachedBase64Data = {};
  var _Image = {
    doNotDrawImageFolders: [
      "Assets/Female3DCG/",
      "Backgrounds/",
      "Icons/Struggle/",
      "Screens/",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyEAYAAABOr1TyAAABb2lDQ1BpY2MAACiRdZG9S0JRGMZ/",
      // FBC's "FBC" overlay icon
      "http"
      // Fix bug with recoloring of custom bgs
    ],
    doNotDrawImages: [
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
      "Icons/Small/YouTube.png",
      "Assets/Female3DCG/ItemMisc/Preview/Best Friend Padlock.png",
      "Assets/Female3DCG/ItemMisc/Preview/Best Friend Timer Padlock.png"
    ],
    getColorized(source, hexColor) {
      if (typeof source != "string") return;
      const img = DrawGetImage(source);
      if (_Image.getImageDataCache(`${source}&${hexColor}`)) {
        return _Image.getImageDataCache(`${source}&${hexColor}`);
      }
      try {
        if (!img.complete) return void 0;
        if (!img.naturalWidth) return void 0;
        const width = img.width;
        const height = img.height;
        ColorCanvas.canvas.width = width;
        ColorCanvas.canvas.height = height;
        ColorCanvas.globalCompositeOperation = "copy";
        ColorCanvas.drawImage(img, 0, 0);
        const imageData = ColorCanvas.getImageData(0, 0, width, height);
        const colorizedData = _Image.colorize(imageData, hexColor);
        _Image.setImageDataCache(`${source}&${hexColor}`, colorizedData);
        return colorizedData;
      } catch (e) {
        return void 0;
      }
    },
    turnToBase64(imageData, cacheKey) {
      if (_Image.getBase64DataCache(`${cacheKey}`)) return _Image.getBase64DataCache(`${cacheKey}`);
      const canvas = document.createElement("canvas");
      canvas.width = imageData.width;
      canvas.height = imageData.height;
      const ctx = canvas.getContext("2d");
      ctx.putImageData(imageData, 0, 0);
      const base64Data = canvas.toDataURL("image/png");
      canvas.remove();
      _Image.setBase64DataCache(cacheKey, base64Data);
      return base64Data;
    },
    colorize(imageData, hexColor) {
      const data = imageData.data;
      const rgbColor = DrawHexToRGB(hexColor);
      for (let pixelData = 0, len = data.length; pixelData < len; pixelData += 4) {
        if (data[pixelData + 3] == 0) continue;
        const transparency = (data[pixelData] + data[pixelData + 1] + data[pixelData + 2]) / 383;
        data[pixelData + 0] = rgbColor.r * transparency;
        data[pixelData + 1] = rgbColor.g * transparency;
        data[pixelData + 2] = rgbColor.b * transparency;
      }
      return imageData;
    },
    doDrawImage(source) {
      let skipDrawing = false;
      for (const folderPrefix of _Image.doNotDrawImageFolders) {
        if (typeof source !== "string") break;
        if (source.startsWith(folderPrefix)) {
          skipDrawing = true;
          break;
        }
      }
      if (!skipDrawing && _Image.doNotDrawImages.includes(source)) {
        skipDrawing = true;
      }
      return !skipDrawing;
    },
    setImageDataCache(key, data) {
      cachedImageData[key] = data;
    },
    getImageDataCache(key) {
      return cachedImageData[key];
    },
    setBase64DataCache(key, data) {
      cachedBase64Data[key] = data;
    },
    getBase64DataCache(key) {
      return cachedBase64Data[key];
    },
    clearCache() {
      cachedImageData = {};
      cachedBase64Data = {};
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
              colors.elementBackground,
              colors.elementBackgroundHover,
              colors.elementBackgroundDisabled,
              colors.elementBorder,
              colors.elementBorderHover,
              colors.elementBorder,
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
              _Color.darken(_Color.toDarkMode(color, colors.elementBackground), 20),
              _Color.darken(_Color.toDarkMode(color, colors.elementBackgroundHover), 30),
              _Color.darken(_Color.toDarkMode(color, colors.elementBackground), 40),
              colors.elementBorder,
              colors.elementBorderHover,
              colors.elementBorder,
              isHovering,
              isDisabled
            );
            break;
        }
        DrawTextFit(label, x + width / 2, y + height / 2 + 1, width - 4, colors.text);
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
        drawRect(Left, Top, 450, 65, colors.elementHint, colors.elementBorder);
        DrawTextFit(HoveringText, Left + 225, Top + 33, 444, "Black");
        MainCanvas.restore();
      },
      3 /* GuiRedraw */
    );
  }
  __name(hookDrawButtonHover, "hookDrawButtonHover");

  // src/Hooks/GuiRedraw/DrawCheckbox.ts
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
  function hookDrawEmptyRect() {
    hookFunction(
      "DrawEmptyRect",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw()) return next(args);
        const [Left, Top, Width, Height, Color, Thickness] = args;
        const drawEmptyRect = /* @__PURE__ */ __name((color) => {
          MainCanvas.beginPath();
          MainCanvas.rect(Left, Top, Width, Height);
          MainCanvas.lineWidth = Thickness;
          MainCanvas.strokeStyle = color;
          MainCanvas.stroke();
        }, "drawEmptyRect");
        if (Color?.startsWith("%")) {
          switch (Color.substring(1).toLowerCase()) {
            case "border":
              drawEmptyRect(colors.elementBorder);
              break;
            default:
              next(args);
              break;
          }
        } else {
          switch (_Color.getHexComputed(Color).toLowerCase()) {
            case "#ffffff":
            case "#dddddd":
            case "#000000":
              drawEmptyRect(colors.elementBorder);
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
  function hookDrawImageEx() {
    hookFunction(
      "DrawImageEx",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw()) return next(args);
        if (typeof args[0] !== "string") return next(args);
        if (!_Image.doDrawImage(args[0])) return next(args);
        const [Source, Canvas, X, Y, Options] = args;
        const color = args[4].HexColor ?? colors.icon;
        const colorizedImage = _Image.getColorized(Source, color);
        if (!colorizedImage) return next(args);
        const imageSource = _Image.turnToBase64(colorizedImage, `${Source}${args[4].HexColor}`);
        next([imageSource ?? Source, Canvas, X, Y, Options]);
      },
      3 /* GuiRedraw */
    );
  }
  __name(hookDrawImageEx, "hookDrawImageEx");

  // src/Hooks/GuiRedraw/DrawPreviewBox.ts
  function hookDrawPreviewBox() {
    hookFunction(
      "DrawPreviewBox",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw()) return next(args);
        const [X, Y, Path, Description, Options] = args;
        const { Vibrating, Disabled, Icons } = Options || {};
        let { Background, Foreground, Border, Hover, Width, Height } = Options || {};
        Width = Width || DrawAssetPreviewDefaultWidth;
        Height = Height || DrawAssetPreviewDefaultHeight;
        const Padding = 2;
        const TextGutter = Description ? 44 : 0;
        Foreground = colors.text;
        Border = true;
        Hover = MouseHovering(X, Y, Width, Height);
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
        if (Border) DrawEmptyRect(X, Y, Width, Height, Hover ? colors.elementBorderHover : colors.elementBorder);
        if (Path !== "") DrawImageResize(Path, ImageX, ImageY, ImageWidth, ImageHeight);
        DrawPreviewIcons(Icons, X, Y);
        if (Description) DrawTextFit(Description, X + Width / 2, Y + Height - 25, Width - 2 * Padding, Foreground);
      },
      3 /* GuiRedraw */
    );
  }
  __name(hookDrawPreviewBox, "hookDrawPreviewBox");

  // src/Hooks/GuiRedraw/DrawRect.ts
  function hookDrawRect() {
    hookFunction(
      "DrawRect",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw()) return next(args);
        const [Left, Top, Width, Height, Color] = args;
        const drawRect2 = /* @__PURE__ */ __name((color) => {
          MainCanvas.beginPath();
          MainCanvas.fillStyle = color;
          MainCanvas.fillRect(Left, Top, Width, Height);
          MainCanvas.fill();
        }, "drawRect");
        if (Color?.startsWith("%")) {
          switch (Color.substring(1).toLowerCase()) {
            case "disabled":
              drawRect2(colors.elementBackgroundDisabled);
              break;
            case "hover":
              drawRect2(colors.elementBackgroundHover);
              break;
            case "background":
              drawRect2(colors.elementBackground);
              break;
            case "friendhint":
              drawRect2(colors.elementHint);
              break;
            default:
              next(args);
              break;
          }
        } else {
          switch (_Color.getHexComputed(Color).toLowerCase()) {
            case "#eeeeee":
            case "#dddddd":
            case "#cccccc":
            case "#ffffff":
            case "#ffff88":
            case "#ffffff88":
            case "#ffffffcc":
            case "#d7f6e9":
              drawRect2(colors.elementBackground);
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

  // src/Utilities/String.ts
  var _String = class {
    static {
      __name(this, "_String");
    }
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

  // src/Utilities/Data.ts
  var PlayerStorage = /* @__PURE__ */ __name(() => typeof Player?.[ModName] === "object" ? CommonCloneDeep(Player?.[ModName]) : void 0, "PlayerStorage");
  var ExtensionStorage = /* @__PURE__ */ __name(() => Player.ExtensionSettings[ModName], "ExtensionStorage");
  function dataTake() {
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
  __name(dataTake, "dataTake");
  function dataStore() {
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
  __name(dataStore, "dataStore");
  function dataErase() {
    Player[ModName].ColorsModule = {};
    dataStore();
  }
  __name(dataErase, "dataErase");

  // src/Hooks/GuiRedraw/DrawRoomBackground.ts
  function hookDrawRoomBackground() {
    hookFunction(
      "DrawRoomBackground",
      0 /* Observe */,
      ([URL, ...args], next) => {
        if (!doRedraw()) return next([URL, ...args]);
        if (URL.includes("Sheet.jpg")) {
          if (PlayerStorage().GlobalModule.doUseFlatColor) {
            DrawRect(0, 0, 2e3, 1e3, colors.mainBackground);
          } else {
            next([URL, ...args]);
            MainCanvas.save();
            MainCanvas.globalCompositeOperation = "multiply";
            DrawRect(0, 0, 2e3, 1e3, colors.mainBackground);
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
  function hookDrawText() {
    hookFunction(
      "DrawText",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw()) return next(args);
        if (isBlack(args[3])) {
          args[3] = colors.text;
          args[4] = "";
        } else {
          args[3] = _Color.toDarkMode(args[3], colors.mainBackground);
          args[4] = "";
        }
        next(args);
      },
      3 /* GuiRedraw */
    );
  }
  __name(hookDrawText, "hookDrawText");

  // src/Hooks/GuiRedraw/DrawTextFit.ts
  function hookDrawTextFit() {
    hookFunction(
      "DrawTextFit",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw()) return next(args);
        if (isBlack(args[4])) {
          args[4] = colors.text;
        } else {
          args[4] = _Color.toDarkMode(args[4], colors.mainBackground);
        }
        return next(args);
      },
      3 /* GuiRedraw */
    );
  }
  __name(hookDrawTextFit, "hookDrawTextFit");

  // src/Hooks/GuiRedraw/DrawTextWrap.ts
  function hookDrawTextWrap() {
    hookFunction(
      "DrawTextWrap",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw()) return next(args);
        const [Text, X, , Width, Height, ForeColor, BackColor, MaxLine, LineSpacing = 23] = args;
        let [, , Y, , ,] = args;
        const isHovering = MouseHovering(X, Y, Width, Height);
        if (!Text) return;
        ControllerAddActiveArea(X, Y);
        if (BackColor != null) {
          if (!isHovering) {
            drawRect(X, Y, Width, Height, BackColor, colors.elementBorder);
          } else {
            drawRect(X, Y, Width, Height, _Color.darken(BackColor, 40), colors.elementBorder);
          }
        }
        let TextSize;
        if (MaxLine != null) {
          TextSize = MainCanvas.font;
          GetWrapTextSize(Text, Width, MaxLine);
        }
        MainCanvas.fillStyle = isBlack(ForeColor) ? colors.text : _Color.lighten(_Color.toDarkMode(ForeColor, colors.elementBackground), 50);
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
    return PlayerStorage()?.GlobalModule?.themedEnabled && PlayerStorage().GlobalModule?.doVanillaGuiOverhaul;
  }, "doRedraw");
  var GuiRedrawModule = class extends BaseModule {
    static {
      __name(this, "GuiRedrawModule");
    }
    patched = false;
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
        'DrawButton(X, Y, 630, 85, "", (HasBlock && IsFull ? "#884444" : HasBlock ? "#FF9999" : HasFriends && IsFull ? "#448855" : HasFriends ? "#CFFFCF" : IsFull ? "#666" : "White"), null, null, IsFull);': 'DrawButton(X, Y, 630, 85, "", (HasBlock && IsFull ? "#4d1b1b" : HasBlock ? "#6e0c0c" : HasFriends && IsFull ? "#225c30" : HasFriends ? "#4d854d" : IsFull ? "#444" : "White"), null, null, IsFull);',
        'DrawTextWrap(ChatSearchMuffle(ChatSearchResult[C].Friends[F].MemberName + " (" + ChatSearchResult[C].Friends[F].MemberNumber + ")"), (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "#FFFF88", 1);': 'DrawTextWrap(ChatSearchMuffle(ChatSearchResult[C].Friends[F].MemberName + " (" + ChatSearchResult[C].Friends[F].MemberNumber + ")"), (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "%friendhint", 1);',
        'DrawTextWrap(TextGet("FriendsInRoom") + " " + ChatSearchMuffle(ChatSearchResult[C].DisplayName), (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "#FFFF88", 1);': 'DrawTextWrap(TextGet("FriendsInRoom") + " " + ChatSearchMuffle(ChatSearchResult[C].DisplayName), (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "%friendhint", 1);',
        'DrawTextWrap(Block, (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "#FF9999", 1);': 'DrawTextWrap(Block, (X > 1000) ? 685 : X + 660, ListY, 630, Height, "black", "#6e0c0c", 1);'
      });
      patchFunction("DialogDraw", {
        "DrawRect(1087 + offset, 550, 225, 275, bgColor);": 'DrawRect(1087 + offset, 550, 225, 275, disabled ? "%disabled" : (hover ? "%hover" : "%background"));DrawEmptyRect(1087 + offset, 550, 225, 275, "%border");'
      });
      this.patched = true;
    }
    unpatchGui() {
      if (!this.patched) return false;
      unpatchFuntion("ChatSearchNormalDraw");
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

  // src/Translation.ts
  var Localization = class _Localization {
    static {
      __name(this, "Localization");
    }
    static Translation = new Object();
    static FallbackTranslation = new Object();
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
      const response = await fetch(`${"https://ddeeplb.github.io/Themed-BC/dev"}/translations/${lang}.lang`);
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
  var getText = /* @__PURE__ */ __name((string) => Localization.getText(string), "getText");

  // src/Base/SettingDefinitions.ts
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
  var GuiSubscreen = class _GuiSubscreen {
    static {
      __name(this, "GuiSubscreen");
    }
    static START_X = 180;
    static START_Y = 205;
    static X_MOD = 950;
    static Y_MOD = 75;
    static POS_BAK = _GuiSubscreen.START_X;
    static TEXT_ALIGN_BAK;
    module;
    constructor(module) {
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
            case "text":
              const input = ElementCreateInput(item.id, "text", item.setting(), "255");
              input.setAttribute("autocomplete", "off");
              break;
            case "number":
              ElementCreateInput(item.id, "number", item.setting(), "255");
              break;
            case "color":
              ElementCreateInput(item.id, "color", item.setting());
              break;
          }
        })
      );
      CharacterAppearanceForceUpCharacter = Player.MemberNumber ?? -1;
    }
    Run() {
      _GuiSubscreen.POS_BAK = _GuiSubscreen.START_X;
      _GuiSubscreen.TEXT_ALIGN_BAK = MainCanvas.textAlign;
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
      this.structure.forEach((item, ix, arr) => {
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
      MainCanvas.textAlign = _GuiSubscreen.TEXT_ALIGN_BAK;
    }
    Click() {
      _GuiSubscreen.POS_BAK = _GuiSubscreen.START_X;
      _GuiSubscreen.TEXT_ALIGN_BAK = MainCanvas.textAlign;
      _GuiSubscreen.START_X = 550;
      MainCanvas.textAlign = "left";
      if (MouseIn(1815, 75, 90, 90)) return this.Exit();
      if (this.multipageStructure.length > 1) PreferencePageChangeClick(1595, 75, this.multipageStructure.length);
      this.structure.forEach((item, ix, arr) => {
        switch (item.type) {
          case "checkbox":
            if (MouseIn(this.getXPos(ix) + 600, this.getYPos(ix) - 32, 64, 64) && !item.disabled) {
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
                break;
              }
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
      dataStore();
    }
    Unload() {
    }
    tooltip(text) {
      drawTooltip(300, 850, 1400, text, "left");
    }
    drawCheckbox(label, description, value, order, disabled = false) {
      const isHovering = MouseIn(this.getXPos(order), this.getYPos(order) - 32, 600, 64);
      DrawTextFit(getText(label), this.getXPos(order), this.getYPos(order), 600, isHovering ? "Red" : "Black", "Gray");
      DrawCheckbox(this.getXPos(order) + 600, this.getYPos(order) - 32, 64, 64, "", value ?? false, disabled);
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
      const isHovering = MouseIn(this.getXPos(order), this.getYPos(order) - 32, 600, 64);
      DrawTextFit(getText(label), this.getXPos(order), this.getYPos(order), 600, isHovering ? "Red" : "Black", "Gray");
      ElementPosition(elementId, this.getXPos(order) + 750 + 225, this.getYPos(order), 800, 64);
      if (disabled) ElementSetAttribute(elementId, "disabled", "true");
      if (!disabled) document.getElementById(elementId)?.removeAttribute("disabled");
      if (isHovering) this.tooltip(getText(description));
    }
    drawLabel(label, description, order) {
      const isHovering = MouseIn(this.getXPos(order), this.getYPos(order) - 32, 600, 64);
      DrawTextFit(getText(label), this.getXPos(order), this.getYPos(order), 600, isHovering ? "Red" : "Black", "Gray");
      if (isHovering) this.tooltip(getText(description));
    }
  };
  function drawTooltip(x, y, width, text, align) {
    const canvas = MainCanvas;
    const bak = canvas.textAlign;
    canvas.textAlign = align;
    canvas.beginPath();
    canvas.rect(x, y, width, 65);
    canvas.fillStyle = doRedraw() ? colors.elementBackground : "#FFFF88";
    canvas.fillRect(x, y, width, 65);
    canvas.fill();
    canvas.lineWidth = 2;
    canvas.strokeStyle = doRedraw() ? colors.elementBorder : "black";
    canvas.stroke();
    canvas.closePath();
    DrawTextFit(text, align === "left" ? x + 3 : x + width / 2, y + 33, width - 6, doRedraw() ? colors.text : "black");
    canvas.textAlign = bak;
  }
  __name(drawTooltip, "drawTooltip");

  // src/Static/Styles/BC_Chat.css
  var BC_Chat_default = '#TextAreaChatLog[data-colortheme="dark"],\n#TextAreaChatLog[data-colortheme="dark2"] {\n  background-color: var(--background);\n  color: var(--text);\n  border-color: var(--elementBorder);\n\n  .ChatMessageName {\n    text-shadow: 0 0 0.12em var(--textShadow);\n  }\n\n  .ChatMessage {\n    border-bottom: none;\n  }\n\n  .ChatMessageActivity,\n  .ChatMessageAction,\n  .ChatMessageEmote {\n    --base-color: var(--background);\n  }\n\n  .chat-room-sep {\n    --base-color: var(--background) !important;\n    border-bottom: min(0.4vh, 0.2vw) var(--elementBorder) solid !important;\n    border-top: min(0.4vh, 0.2vw) var(--elementBorder) solid !important;\n  }\n\n  .chat-room-sep-collapse {\n    border-right: min(0.4vh, 0.2vw) var(--elementBorder) solid !important;\n    color: var(--text);\n  }\n\n  .chat-room-sep-header {\n    color: var(--text);\n  }\n\n  ~#chat-room-bot {\n    --button-color: var(--elementBackground);\n    background-color: var(--background);\n    border-color: rgba(0, 0, 0, 0.25);\n    color: var(--text);\n\n    &:has(#InputChat:focus) {\n      outline: 2px solid var(--elementBackgroundHover);\n      box-shadow: 0 0 0 3px var(--background);\n    }\n\n    #InputChat {\n      background-color: var(--background);\n      color: var(--text);\n      border-color: var(--elementBorder);\n      outline: var(--elementBorder) solid 1px;\n    }\n\n    #chat-room-buttons-collapse:hover,\n    .chat-room-button:hover:before {\n      background-color: var(--elementBackgroundHover) !important;\n    }\n  }\n}\n';

  // src/Static/Styles/BC_FriendList.css
  var BC_FriendList_default = "#FriendList {\n  background-color: var(--friendlistBackground);\n  border-color: var(--elementBorder);\n  padding: 0;\n  margin-top: 1%;\n  padding-bottom: 0%;\n}\n";

  // src/Static/Styles/BC_Inputs.css
  var BC_Inputs_default = "textarea {\n  background: var(--elementBackground);\n  color: var(--text);\n  border: 2px solid var(--elementBorder);\n}\n\ninput {\n  background: var(--elementBackground);\n  color: var(--text);\n  border: 2px solid var(--elementBorder);\n}\n\ntextarea:focus,\ninput:focus {\n  outline: var(--elementBorder) solid 1px;\n}\n\n.button-touch,\n.button-touch:before,\n.button:hover {\n  background-color: var(--elementBackgroundHover);\n  border-color: var(--elementBorderHover);\n  color: var(--text);\n}\n";

  // src/Static/Styles/BC_Other.css
  var BC_Other_default = "::-webkit-scrollbar {\n  background-color: var(--scrollbar);\n}\n\n::-webkit-scrollbar-corner {\n  background-color: var(--scrollbar);\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: var(--elementBackground);\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: var(--accent);\n}\n\n::selection {\n  background-color: var(--accent);\n  color: var(--text);\n}\n";

  // src/Static/Styles/FBC.css
  var FBC_default = ".bce-img {\n  border-color: var(--elementBorder);\n}\n\n#bceRichOnlineProfile {\n  background: var(--elementBackground) !important;\n  color: var(--text) !important;\n  border: 2px dashed var(--elementBorder) !important;\n}\n\n#bce-instant-messenger {\n  top: 0%;\n  left: 0%;\n  background-color: var(--background);\n  color: var(--text);\n  border-color: var(--elementBorder);\n  max-width: 99.5%;\n  max-height: 85%;\n  min-width: 38%;\n  min-height: 30%;\n}\n\n.bce-friend-list-entry.bce-friend-list-selected {\n  border-top-color: var(--elementBorder);\n  border-bottom-color: var(--elementBorder);\n  background-color: var(--elementBackground);\n}\n\n.bce-friend-list-entry:hover {\n  background-color: var(--elementBackgroundHover);\n}\n\n#bce-message-right-container {\n  border-left-color: var(--elementBorder);\n}\n\n#bce-message-input {\n  border-top: 1px solid var(--elementBorder);\n  border-bottom: 1px solid var(--elementBorder);\n  background-color: var(--background);\n  color: var(--text);\n}\n\n.bce-message-divider {\n  border-bottom-color: var(--elementBorder);\n}\n\n.bce-message-sender {\n  text-shadow: 0.05em 0.05em var(--textShadow);\n}\n\n.bce-message-Message .bce-message-sender {\n  text-shadow: 0.05em 0.05em var(--textShadow);\n}\n\n#bce-friend-search {\n  background-color: var(--background);\n  border-bottom-color: var(--elementBorder);\n  color: var(--text);\n}\n\n.bce-colors .bce-dark-input {\n  background-color: var(--elementBackground);\n  border: 1px solid var(--elementBorder);\n  color: var(--text);\n}\n";

  // src/Static/Styles/FUSAM.css
  var FUSAM_default = "#fusam-addon-manager-container {\n  color: var(--text);\n  background-color: var(--background);\n}\n\n.fusam.button,\n.fusam .button {\n  border-color: var(--elementBorder);\n  background-color: var(--elementBackground);\n  color: var(--text);\n}\n\n.fusam.button:hover,\n.fusam .button:hover,\n.fusam.button:focus,\n.fusam .button:focus,\n.fusam select:hover,\n.fusam select:focus {\n  background-color: var(--accent);\n}\n\n.fusam select,\n.fusam option {\n  border-color: var(--elementBorder);\n  background-color: var(--elementBackground);\n  color: var(--text);\n}\n\n.fusam select:disabled:hover {\n  background-color: var(--elementBackgroundHover);\n}\n";

  // src/Static/Styles/TTS.css
  var TTS_default = '.tts-dialog {\n  background-color: var(--background);\n  border: 2px solid var(--elementBorder);\n  color: var(--text);\n}\n\n.tts-option {\n  background-color: var(--elementBackground);\n  border-color: var(--elementBorder);\n  color: var(--text);\n}\n\ninput[type="range"].tts-slider {\n  background-color: var(--elementBackground);\n  -webkit-appearance: none;\n  appearance: none;\n  width: 100%;\n  height: 15px;\n  outline: none;\n  border-radius: 50px;\n}\n\ninput[type="range"].tts-slider::-webkit-slider-thumb {\n  background: var(--accent);\n  -webkit-appearance: none;\n  appearance: none;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\ninput[type="range"].tts-slider::-moz-range-thumb {\n  background: var(--accent);\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.tts-select {\n  background-color: var(--elementBackground);\n  border-color: var(--elementBorder);\n  color: var(--text);\n}\n\n.tts-tab {\n  background-color: var(--elementBackground);\n  border-color: var(--elementBorder);\n  color: var(--text);\n}\n\n.tts-btn {\n  background-color: var(--elementBackground);\n  border: 1px solid var(--elementBorder);\n  color: var(--text);\n}\n\n.tts-tab.active {\n  background-color: var(--accent);\n}\n\n.tts-toggle-container {\n  border-color: var(--elementBorder);\n}\n\n.tts-boxed-container {\n  border-color: var(--elementBorder);\n}\n\n.tts-link {\n  border-color: var(--elementBorder);\n  background-color: var(--elementBackground);\n  color: var(--text);\n}\n\n.tts-link:hover {\n  background-color: var(--elementBackground);\n  color: var(--accent);\n}\n\n.mo-modal-content {\n  background-color: var(--background);\n  border: 1px solid var(--elementBorder);\n  color: var(--text);\n}\n\n.mo-closer {\n  color: var(--text);\n}\n\n#mo_submitInput-1 {\n  background-color: var(--elementBackground);\n  border: 1px solid var(--elementBorder);\n  color: var(--text);\n}\n';

  // src/Static/Styles/Themed.css
  var Themed_default = ".themed-modal,\n.themed-chat-modal {\n  padding: 5px;\n\n  background-color: var(--elementBackground);\n  color: var(--text);\n\n  border: 2px solid var(--accent);\n  border-radius: 10px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.8rem;\n}\n\n.themed-modal {\n  position: absolute;\n  width: 25%;\n  top: 15%;\n  margin-left: 12.5%;\n\n  flex-direction: column;\n}\n\n.themed-chat-modal {\n  /* width: 80%; */\n  font-size: 0.8em;\n  position: relative;\n\n  flex-direction: row;\n}\n\n#modal-buttons {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin: 0.5rem;\n}\n\n.modal-button {\n  width: auto;\n  padding: 5px;\n\n  border: 2px solid var(--accent);\n  border-radius: 10px;\n  transition: all 0.5s ease;\n}\n\n.modal-button:hover {\n  background-color: var(--elementBackgroundHover);\n  text-shadow: 0 0 0.12em var(--textShadow);\n  cursor: pointer;\n}\n\n.ThemedMessageContent {\n  display: inline;\n}\n\n.ThemedVersion {\n  font-weight: bold;\n  color: rgb(203, 185, 23);\n}\n\n#TextAreaChatLog[data-colortheme='dark'] div.ChatMessage.ThemedMessage,\n#TextAreaChatLog[data-colortheme='dark2'] div.ChatMessage.ThemedMessage {\n  background-color: var(--elementBackground);\n  border: 2px solid var(--accent);\n  color: var(--text);\n}\n\n#TextAreaChatLog div.ChatMessage.ThemedMessage {\n  background-color: #eee;\n  border: 2px solid #440171;\n  padding-left: 5px;\n  display: block;\n  white-space: normal;\n  color: #111;\n}\n\n#TextAreaChatLog[data-colortheme='dark'] a.ThemedText,\n#TextAreaChatLog[data-colortheme='dark2'] a.ThemedText {\n  cursor: pointer;\n  font-weight: bold;\n  color: var(--text);\n}\n\n#TextAreaChatLog a.ThemedText {\n  cursor: pointer;\n  font-weight: bold;\n  color: #111;\n}\n\n#ThemedGratitude {\n  position: fixed;\n  width: 25%;\n  height: 50%;\n  top: 15%;\n  left: 50%;\n}\n\n.ThemedH {\n  font-size: 1em;\n  color: #333;\n}\n\n.ThemedP {\n  font-size: 0.6em;\n  color: #555;\n  line-height: 1.5;\n}\n\n.ThemedP:last-child {\n  font-size: 0.8em;\n  color: #ff69b4;\n}\n";

  // src/Utilities/Integration.ts
  function changeModColors() {
    if (doRedraw()) {
      changeBctColors();
    } else {
      resetBctColors();
    }
  }
  __name(changeModColors, "changeModColors");
  function changeBctColors() {
    if (Player.BCT) {
      BCT_API.HintBackColor = colors.elementBackground;
      BCT_API.HintBorderColor = colors.elementBorder;
      BCT_API.HintForeColor = colors.text;
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
        backgroundColor: colors.mainBackground,
        buttonColor: colors.elementBackground,
        buttonHoverColor: colors.elementBackgroundHover,
        borderColor: colors.elementBorder,
        tooltipColor: colors.elementHint,
        textColor: colors.text
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

  // src/Utilities/Style.ts
  var styles = {
    Root: composeRoot(),
    Themed: Themed_default,
    BC: BC_Inputs_default,
    BC_Chat: BC_Chat_default,
    BC_FriendList: BC_FriendList_default,
    BC_Other: BC_Other_default,
    FBC: FBC_default,
    FUSAM: FUSAM_default,
    TTS: TTS_default,
    MBS: "MBS"
  };
  var Style = {
    inject(styleId, styleSource) {
      const isStyleLoaded = document.getElementById(styleId);
      if (isStyleLoaded) return;
      const styleElement = document.createElement("style");
      styleElement.id = styleId;
      styleElement.appendChild(document.createTextNode(styleSource));
      document.head.appendChild(styleElement);
    },
    eject(id) {
      const style = document.getElementById(id);
      if (!style) return;
      style.remove();
    },
    reload(styleId, styleSource) {
      Style.eject(styleId);
      Style.inject(styleId, styleSource);
    }
  };
  var BcStyle = {
    inject(id) {
      if (id == "Root") updateRootStyle();
      else if (id == "MBS") {
        changeMbsColors();
      }
      const styleSource = styles[id];
      const isEnabled = PlayerStorage().GlobalModule.themedEnabled;
      if (!isEnabled) return;
      if (!PlayerStorage().IntegrationModule[id] && id != "Themed" && id != "Root") return;
      Style.inject(id, styleSource);
    },
    eject(id) {
      if (id == "MBS") {
        resetMbsColors();
      }
      Style.eject(id);
    },
    reload(id) {
      BcStyle.eject(id);
      BcStyle.inject(id);
    },
    injectAll() {
      const styleIDs = Object.keys(styles);
      styleIDs.forEach((id) => {
        BcStyle.inject(id);
      });
    },
    ejectAll() {
      const styleIDs = Object.keys(styles);
      styleIDs.forEach((id) => {
        BcStyle.eject(id);
      });
    },
    reloadAll() {
      const styleIDs = Object.keys(styles);
      styleIDs.forEach((id) => {
        BcStyle.reload(id);
      });
    }
  };
  function composeRoot() {
    return (
      /*css*/
      `
    :root {
      /*accent color*/
      --accent: ${colors?.elementBorder || "#440171"};
      /*background*/
      --background: ${colors?.mainBackground || "#202020"}; 
      /*inputs, buttons and shit*/
      --elementBackground: ${colors?.elementBackground || "#303030"}; 
       /*elements that should stand out, like thing on slider or button when hovered over*/
      --elementBackgroundHover: ${colors?.elementBackgroundHover || "#57276e"};
      /*borders for html and game drawn elements*/
      --elementBorder: var(--accent);
      /*text obviously*/
      --text: ${colors?.text || "#eeeeee"}; 
      /*obviously as well*/
      --textShadow: ${"#eeeeee80"};

      --scrollbar: ${_Color.darken(colors?.elementBackground, 20) || "#454545"};

      --friendlistBackground: ${colors?.elementBackground + "80" || "#30303080"};
      
      --codeBackground: ${_Color.lighten(colors?.elementBackground, 40) + "20" || "#aaaaaa20"};
    }
    `
    );
  }
  __name(composeRoot, "composeRoot");
  function updateRootStyle() {
    styles.Root = composeRoot();
  }
  __name(updateRootStyle, "updateRootStyle");

  // src/Screens/Reset.ts
  var GuiReset = class extends GuiSubscreen {
    static {
      __name(this, "GuiReset");
    }
    get name() {
      return "Reset";
    }
    get icon() {
      return "";
    }
    allowedConfirmTime = 0;
    Load() {
      this.allowedConfirmTime = Date.now() + 1e4;
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
      dataErase();
      getModule("ColorsModule").registerDefaultSettings();
      _Color.composeRoot();
      BcStyle.reloadAll();
      _Image.clearCache();
      this.setSubscreen(null);
    }
  };

  // src/Screens/Support.ts
  var GuiSupport = class _GuiSupport extends GuiSubscreen {
    static {
      __name(this, "GuiSupport");
    }
    static thankYouList = ["Ellena", "weboos", "Jamie"];
    static thankYouNext = 0;
    static thankYou = "";
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
      ElementCreateDiv("ResponsiveGratitude");
      const elm = document.getElementById("ResponsiveGratitude");
      ElementContent("ResponsiveGratitude", gratitudeHtml);
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
      ElementRemove("ResponsiveGratitude");
      super.Exit();
    }
  };
  var gratitudeHtml = (
    /*html*/
    `
<h1 class="ResponsiveH">Dear Supporters!</h1>
<p class="ResponsiveP">
  I want to take a moment to express my heartfelt gratitude for considering supporting me. Your willingness to stand by
  my side in this creative journey means the world to me, and I am truly humbled by your generosity.
</p>
<p class="ResponsiveP">
  Your support goes far beyond the financial contributions; it represents belief in my work and a shared passion for
  what I do. Your encouragement inspires me to continue developing.
</p>
<p class="ResponsiveP">
  Your support not only helps me sustain and grow as a developer, but also enables me to dedicate more time and
  resources to producing high-quality mods. It allows me to explore new ideas, enhance my skills, and bring even more
  meaningful and enjoyable content to you.
</p>
<p class="ResponsiveP">Thank you all~</p>
<p class="ResponsiveP">With love, Monikka\u2665</p>
`
  );

  // src/Screens/MainMenu.ts
  var MainMenu = class extends GuiSubscreen {
    static {
      __name(this, "MainMenu");
    }
    subscreens = [];
    get name() {
      return "MainMenu";
    }
    constructor(module) {
      super(module);
      this.subscreens = module.subscreens;
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
      const prev = MainCanvas.textAlign;
      GuiSubscreen.START_X = 550;
      MainCanvas.textAlign = "left";
      DrawCharacter(Player, 50, 50, 0.9, false);
      DrawText(
        getText("MainMenu.title").replace("$ModVersion", ModVersion) + "  " + GuiSupport.getSupporter(),
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
      MainCanvas.textAlign = prev;
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
    }
  };

  // src/Utilities/RibbonMenu.ts
  var RibbonMenu = class _RibbonMenu {
    static {
      __name(this, "RibbonMenu");
    }
    static START_Y = 820;
    static MOD_Y = 110;
    /**
     * Calculates button Y position using mod index.
     * @param modIndex Mod index. Can be obtained calling `GetModIndex`.
     * @returns position
     */
    static getYPos(modIndex) {
      return this.START_Y - this.MOD_Y * (modIndex % 6);
    }
    /**
     * Registers `modName` in the Ribbon Menu. Handles when Ribbon Menu is full.
     * @param modName Mod name itself that will be registered in Ribbon Menu
     * @returns nothing
     */
    static registerMod(modName) {
      if (!window.RibbonMenuMods) window.RibbonMenuMods = [];
      if (window.RibbonMenuMods.length >= 6) return console.warn(`${modName} can't be added to Ribbon Menu. It is full`);
      window.RibbonMenuMods.push(modName);
    }
    /**
     * Returns mod index from Ribbon menu.
     * @param modName Mod name registered in Ribbon Menu
     * @returns modIndex or undefined
     */
    static getModIndex(modName) {
      return window.RibbonMenuMods?.indexOf(modName);
    }
    /**
     * Draws button in Ribbon Menu using `callback`.
     * @param modIndex Mod index obtained with `GetModIndex`.
     * @param callback Function that will be executed on click.
     * @returns nothing
     */
    static drawModButton(modIndex, callback) {
      if (PreferenceSubscreen === "" && modIndex !== void 0) callback(modIndex);
      return;
    }
    /**
     * Handles click on button in Ribbon Menu using `callback`.
     * @param modIndex Mod index obtained with `GetModIndex`.
     * @param callback Function that will be executed on click.
     * @returns nothing
     */
    static handleModClick(modIndex, callback) {
      if (PreferenceSubscreen === "" && modIndex !== void 0) {
        if (MouseIn(1815, _RibbonMenu.getYPos(modIndex), 90, 90)) callback(modIndex);
      }
      return;
    }
  };

  // src/Static/Icons/IconThemed.png
  var IconThemed_default = "data:image/png;base64,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";

  // src/Base/SettingUtils.ts
  var GUI = class _GUI extends BaseModule {
    static {
      __name(this, "GUI");
    }
    static instance = null;
    _subscreens;
    _mainMenu;
    _currentSubscreen = null;
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
      PreferenceSubscreen = subscreenName;
    }
    get currentCharacter() {
      return Player;
    }
    constructor() {
      super();
      if (_GUI.instance) {
        throw new Error("Duplicate initialization");
      }
      this._mainMenu = new MainMenu(this);
      this._subscreens = [this._mainMenu];
      _GUI.instance = this;
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
      const modIndex = RibbonMenu.getModIndex(ModName);
      const modYPos = RibbonMenu.getYPos(modIndex);
      hookFunction("PreferenceRun", 10 /* OverrideBehavior */, (args, next) => {
        if (this._currentSubscreen) {
          MainCanvas.textAlign = "left";
          this._currentSubscreen.Run();
          MainCanvas.textAlign = "center";
          this.drawDebug();
          return;
        }
        next(args);
        RibbonMenu.drawModButton(modIndex, () => {
          DrawButton(1815, modYPos, 90, 90, "", "White", "", getText("infosheet.button_popup"));
          DrawImageResize(IconThemed_default, 1815 + 2, modYPos + 2, 85, 85);
        });
      });
      hookFunction("PreferenceClick", 10 /* OverrideBehavior */, (args, next) => {
        if (this._currentSubscreen) {
          this._currentSubscreen.Click();
          return;
        }
        next(args);
        RibbonMenu.handleModClick(modIndex, (modIndex2) => {
          setSubscreen(new MainMenu(this));
        });
      });
      hookFunction("InformationSheetExit", 10 /* OverrideBehavior */, (args, next) => {
        if (this._currentSubscreen) {
          this._currentSubscreen.Exit();
          return;
        }
        return next(args);
      });
    }
    drawDebug() {
      if (DebugMode) {
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

  // src/Screens/Colors.ts
  var GuiColors = class extends GuiSubscreen {
    static {
      __name(this, "GuiColors");
    }
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
      return [
        [
          {
            type: "color",
            id: "primaryColor",
            label: "colors.setting.primaryColor.name",
            description: "colors.setting.primaryColor.desc",
            setting: /* @__PURE__ */ __name(() => this.settings?.primaryColor ?? "", "setting"),
            setSetting: /* @__PURE__ */ __name((val) => this.settings.primaryColor = val, "setSetting")
          },
          {
            type: "color",
            id: "accentColor",
            label: "colors.setting.accentColor.name",
            description: "colors.setting.accentColor.desc",
            setting: /* @__PURE__ */ __name(() => this.settings?.accentColor ?? "", "setting"),
            setSetting: /* @__PURE__ */ __name((val) => this.settings.accentColor = val, "setSetting")
          },
          {
            type: "color",
            id: "textColor",
            label: "colors.setting.textColor.name",
            description: "colors.setting.textColor.desc",
            setting: /* @__PURE__ */ __name(() => this.settings?.textColor ?? "", "setting"),
            setSetting: /* @__PURE__ */ __name((val) => this.settings.textColor = val, "setSetting")
          }
        ]
      ];
    }
    Run() {
      DrawButton(1715, 75, 90, 90, "", "White", "Icons/Reset.png", getText("colors.button.change_input_type"));
      super.Run();
    }
    Click() {
      if (MouseIn(1715, 75, 90, 90)) {
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
      }
      super.Click();
    }
  };

  // src/Utilities/Other.ts
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
  function mergeMatchingProperties(mergeTo, mergeFrom) {
    const mergedObject = mergeTo;
    for (const key of Object.keys(mergeFrom)) {
      if (key in mergeTo) {
        mergedObject[key] = mergeFrom[key];
      }
    }
    return mergedObject;
  }
  __name(mergeMatchingProperties, "mergeMatchingProperties");

  // src/Modules/Colors.ts
  var ColorsModule = class extends BaseModule {
    static {
      __name(this, "ColorsModule");
    }
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
        primaryColor: "#202020",
        accentColor: "#440171",
        textColor: "#ccc"
      };
    }
    Load() {
      this.settings = mergeMatchingProperties(this.defaultSettings, this.settings);
    }
    reloadTheme() {
      _Color.composeRoot();
      BcStyle.reloadAll();
      changeModColors();
      _Image.clearCache();
      getModule("GuiRedrawModule").toggleGuiPatches();
    }
  };

  // src/Modules/Commands.ts
  var CommandsModule = class extends BaseModule {
    static {
      __name(this, "CommandsModule");
    }
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

  // src/Screens/Global.ts
  var GuiGlobal = class extends GuiSubscreen {
    static {
      __name(this, "GuiGlobal");
    }
    get name() {
      return "Settings";
    }
    get icon() {
      return "Icons/Preference.png";
    }
    get settings() {
      return super.settings;
    }
    get structure() {
      const struct = [];
      Object.keys(this.settings).forEach((key) => {
        struct.push({
          type: "checkbox",
          label: `settings.setting.${key}.name`,
          description: `settings.setting.${key}.desc`,
          setting: /* @__PURE__ */ __name(() => this.settings?.[key] ?? true, "setting"),
          setSetting: /* @__PURE__ */ __name((val) => this.settings[key] = val, "setSetting")
        });
      });
      return struct;
    }
    Load() {
      super.Load();
    }
  };

  // src/Modules/Global.ts
  var GlobalModule = class _GlobalModule extends BaseModule {
    static {
      __name(this, "GlobalModule");
    }
    static transparentCharacters = [];
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
        doUseFlatColor: true,
        doShowLocaleTime: true,
        doIndicateCharacterAbsence: true,
        doShowNewVersionMessage: true
      };
    }
    Load() {
      this.settings = mergeMatchingProperties(this.defaultSettings, this.settings);
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

  // src/Screens/Integration.ts
  var GuiIntegration = class extends GuiSubscreen {
    static {
      __name(this, "GuiIntegration");
    }
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
      return [
        {
          type: "checkbox",
          label: "integration.setting.BC.name",
          description: "integration.setting.BC.desc",
          setting: /* @__PURE__ */ __name(() => this.settings?.BC ?? true, "setting"),
          setSetting: /* @__PURE__ */ __name((val) => this.settings.BC = val, "setSetting")
        },
        {
          type: "checkbox",
          label: "integration.setting.BC_Chat.name",
          description: "integration.setting.BC_Chat.desc",
          setting: /* @__PURE__ */ __name(() => this.settings?.BC_Chat ?? true, "setting"),
          setSetting: /* @__PURE__ */ __name((val) => this.settings.BC_Chat = val, "setSetting")
        },
        {
          type: "checkbox",
          label: "integration.setting.BC_FriendList.name",
          description: "integration.setting.BC_FriendList.desc",
          setting: /* @__PURE__ */ __name(() => this.settings?.BC_FriendList ?? true, "setting"),
          setSetting: /* @__PURE__ */ __name((val) => this.settings.BC_FriendList = val, "setSetting")
        },
        {
          type: "checkbox",
          label: "integration.setting.BC_Other.name",
          description: "integration.setting.BC_Other.desc",
          setting: /* @__PURE__ */ __name(() => this.settings?.BC_Other ?? true, "setting"),
          setSetting: /* @__PURE__ */ __name((val) => this.settings.BC_Other = val, "setSetting")
        },
        {
          type: "checkbox",
          label: "integration.setting.FBC.name",
          description: "integration.setting.FBC.desc",
          setting: /* @__PURE__ */ __name(() => this.settings?.FBC ?? true, "setting"),
          setSetting: /* @__PURE__ */ __name((val) => this.settings.FBC = val, "setSetting")
        },
        {
          type: "checkbox",
          label: "integration.setting.FUSAM.name",
          description: "integration.setting.FUSAM.desc",
          setting: /* @__PURE__ */ __name(() => this.settings?.FUSAM ?? true, "setting"),
          setSetting: /* @__PURE__ */ __name((val) => this.settings.FUSAM = val, "setSetting")
        },
        {
          type: "checkbox",
          label: "integration.setting.TTS.name",
          description: "integration.setting.TTS.desc",
          setting: /* @__PURE__ */ __name(() => this.settings?.TTS ?? true, "setting"),
          setSetting: /* @__PURE__ */ __name((val) => this.settings.TTS = val, "setSetting")
        },
        {
          type: "checkbox",
          label: "integration.setting.MBS.name",
          description: "integration.setting.MBS.desc",
          setting: /* @__PURE__ */ __name(() => this.settings?.MBS ?? true, "setting"),
          setSetting: /* @__PURE__ */ __name((val) => this.settings.MBS = val, "setSetting")
        }
      ];
    }
    Load() {
      super.Load();
    }
  };

  // src/Modules/Integration.ts
  var IntegrationModule = class extends BaseModule {
    static {
      __name(this, "IntegrationModule");
    }
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
        BC: true,
        BC_Chat: true,
        BC_FriendList: true,
        BC_Other: true,
        FBC: true,
        FUSAM: true,
        TTS: true,
        MBS: true
      };
    }
    Load() {
      this.settings = mergeMatchingProperties(this.defaultSettings, this.settings);
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

  // src/Screens/Profiles.ts
  var GuiProfiles = class extends GuiSubscreen {
    static {
      __name(this, "GuiProfiles");
    }
    PreferenceText = "";
    ProfileNames = ["", "", ""];
    get name() {
      return "Profiles";
    }
    get icon() {
      return "Icons/Title.png";
    }
    get settings() {
      return super.settings;
    }
    tmpGlbl = GuiSubscreen.START_X;
    Load() {
      super.Load();
      for (let i = 0; i < 3; i++) {
        const profileIndex = i + 1;
        if (!PlayerStorage()?.ProfilesModule?.[profileIndex]) {
          Player[ModName].ProfilesModule[profileIndex] = {
            data: {},
            name: ""
          };
        }
        this.ProfileNames[i] = PlayerStorage()?.ProfilesModule?.[profileIndex]?.name ?? "";
      }
      CharacterAppearanceForceUpCharacter = Player.MemberNumber ?? -1;
    }
    Run() {
      const prev = MainCanvas.textAlign;
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
      MainCanvas.textAlign = prev;
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
      if (!Object.keys(PlayerStorage()?.ProfilesModule?.[profileId]).length) {
        return false;
      }
      const data = PlayerStorage().ProfilesModule[profileId].data;
      if (!data) {
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
      if (Object.keys(PlayerStorage()?.ProfilesModule?.[profileId]).length) {
        Player[ModName].ProfilesModule[profileId] = {};
        return true;
      }
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
        if (this.ProfileNames[formerIndex] === null) return;
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

  // src/Modules/Profiles.ts
  var ProfilesModule = class extends BaseModule {
    static {
      __name(this, "ProfilesModule");
    }
    get settings() {
      return super.settings;
    }
    get settingsScreen() {
      return GuiProfiles;
    }
    get defaultSettings() {
      return {};
    }
  };

  // src/Modules/Share.ts
  var ShareModule = class extends BaseModule {
    static {
      __name(this, "ShareModule");
    }
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
        const theme = data.Dictionary[0]["ThemedMessage"].Theme;
        button.addEventListener("click", () => {
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
      getModule("ColorsModule").reloadTheme();
    }
    share() {
      sendAction(`${CharacterNickname(Player)} shares ${CharacterPronoun(Player, "Possessive", false)} Themed theme!`);
      const packet = {
        Type: "Hidden",
        Content: "ThemedTheme",
        Sender: Player.MemberNumber,
        Dictionary: [{ ThemedMessage: { Theme: Player.Themed.ColorsModule } }]
      };
      ServerSend("ChatRoomChat", packet);
    }
  };

  // src/Static/HTML/Changelog.html
  var Changelog_default = '<div class="ThemedMessageContent">\n    <b style="color:#690092; text-shadow: 0.05em 0.05em #440171;">Themed BC: </b>\n    <b>New Version! [1.3.2]</b><br>\n    <br>\n    <b style="color:#CC3232; text-shadow: 0.05em 0.05em #920009;">Please, reload your page~</b>\n    <br>\n\n    <br><b class="ThemedVersion">1.3.2</b>\n    <br>\u2022 Fixed some chat elements not being colored.\n    <br>\u2022 Fixed item boxes not being colored.<br>\n\n    <br><b class="ThemedVersion">1.3.1</b>\n    <br>\u2022 Fixed crash when removing item<br>\n\n    <br><b class="ThemedVersion">1.3.0</b>\n    <br>\u2022 Added option to indicate absense of characters (when they leave room or disconnect).\n    <br>\u2022 Added coloring support to chat separator.\n    <br>\u2022 Fixed chat input not being colored.\n    <br>\u2022 Fixed chat menu button icons not being colored.\n    <br>\u2022 Fixed theme sharing not scrolling chat to end.<br>\n\n</div>\n\n<!--\n    \n    <br><b class="ThemedVersion">0.0.0</b>\n    <br>\u2022 <br>\n-->\n';

  // src/Modules/Version.ts
  var VersionModule = class _VersionModule extends BaseModule {
    static {
      __name(this, "VersionModule");
    }
    static isItNewVersion = false;
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
    static sendNewVersionMessage() {
      if (PlayerStorage().GlobalModule.doShowNewVersionMessage && _VersionModule.isItNewVersion) {
        sendLocalSmart("ThemedNewVersion", Changelog_default);
      }
    }
    static saveVersion() {
      if (PlayerStorage()) {
        Player[ModName].Version = ModVersion;
      }
    }
    static loadVersion() {
      if (PlayerStorage()?.Version) {
        return PlayerStorage().Version;
      }
      return;
    }
    static checkIfNewVersion() {
      const LoadedVersion = _VersionModule.loadVersion();
      if (_VersionModule.isNewVersion(LoadedVersion, ModVersion)) {
        _VersionModule.isItNewVersion = true;
      }
      _VersionModule.saveVersion();
    }
    Run() {
    }
  };

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
  function init() {
    if (window.ThemedLoaded) return;
    Localization.load();
    RibbonMenu.registerMod(ModName);
    dataTake();
    if (!initModules()) {
      unload();
      return;
    }
    VersionModule.checkIfNewVersion();
    dataStore();
    _Color.composeRoot();
    BcStyle.injectAll();
    window.ThemedLoaded = true;
    conLog(`Loaded! Version: ${ModVersion}`);
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
