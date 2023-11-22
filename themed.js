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
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // node_modules/bondage-club-mod-sdk/dist/bcmodsdk.js
  var require_bcmodsdk = __commonJS({
    "node_modules/bondage-club-mod-sdk/dist/bcmodsdk.js"(exports) {
      var bcModSdk = function() {
        "use strict";
        const e = "1.1.0";
        function o(e2) {
          alert("Mod ERROR:\n" + e2);
          const o2 = new Error(e2);
          throw console.error(o2), o2;
        }
        __name(o, "o");
        const t = new TextEncoder();
        function n(e2) {
          return !!e2 && "object" == typeof e2 && !Array.isArray(e2);
        }
        __name(n, "n");
        function r(e2) {
          const o2 = /* @__PURE__ */ new Set();
          return e2.filter((e3) => !o2.has(e3) && o2.add(e3));
        }
        __name(r, "r");
        const i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
        function d(e2) {
          a.has(e2) || (a.add(e2), console.warn(e2));
        }
        __name(d, "d");
        function s(e2) {
          const o2 = [], t2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Set();
          for (const r3 of p.values()) {
            const i3 = r3.patching.get(e2.name);
            if (i3) {
              o2.push(...i3.hooks);
              for (const [o3, a2] of i3.patches.entries())
                t2.has(o3) && t2.get(o3) !== a2 && d(`ModSDK: Mod '${r3.name}' is patching function ${e2.name} with same pattern that is already applied by different mod, but with different pattern:
Pattern:
${o3}
Patch1:
${t2.get(o3) || ""}
Patch2:
${a2}`), t2.set(o3, a2), n2.add(r3.name);
            }
          }
          o2.sort((e3, o3) => o3.priority - e3.priority);
          const r2 = function(e3, o3) {
            if (0 === o3.size)
              return e3;
            let t3 = e3.toString().replaceAll("\r\n", "\n");
            for (const [n3, r3] of o3.entries())
              t3.includes(n3) || d(`ModSDK: Patching ${e3.name}: Patch ${n3} not applied`), t3 = t3.replaceAll(n3, r3);
            return (0, eval)(`(${t3})`);
          }(e2.original, t2);
          let i2 = /* @__PURE__ */ __name(function(o3) {
            var t3, i3;
            const a2 = null === (i3 = (t3 = m.errorReporterHooks).hookChainExit) || void 0 === i3 ? void 0 : i3.call(t3, e2.name, n2), d2 = r2.apply(this, o3);
            return null == a2 || a2(), d2;
          }, "i");
          for (let t3 = o2.length - 1; t3 >= 0; t3--) {
            const n3 = o2[t3], r3 = i2;
            i2 = /* @__PURE__ */ __name(function(o3) {
              var t4, i3;
              const a2 = null === (i3 = (t4 = m.errorReporterHooks).hookEnter) || void 0 === i3 ? void 0 : i3.call(t4, e2.name, n3.mod), d2 = n3.hook.apply(this, [o3, (e3) => {
                if (1 !== arguments.length || !Array.isArray(o3))
                  throw new Error(`Mod ${n3.mod} failed to call next hook: Expected args to be array, got ${typeof e3}`);
                return r3.call(this, e3);
              }]);
              return null == a2 || a2(), d2;
            }, "i");
          }
          return { hooks: o2, patches: t2, patchesSources: n2, enter: i2, final: r2 };
        }
        __name(s, "s");
        function c(e2, o2 = false) {
          let r2 = i.get(e2);
          if (r2)
            o2 && (r2.precomputed = s(r2));
          else {
            let o3 = window;
            const a2 = e2.split(".");
            for (let t2 = 0; t2 < a2.length - 1; t2++)
              if (o3 = o3[a2[t2]], !n(o3))
                throw new Error(`ModSDK: Function ${e2} to be patched not found; ${a2.slice(0, t2 + 1).join(".")} is not object`);
            const d2 = o3[a2[a2.length - 1]];
            if ("function" != typeof d2)
              throw new Error(`ModSDK: Function ${e2} to be patched not found`);
            const c2 = function(e3) {
              let o4 = -1;
              for (const n2 of t.encode(e3)) {
                let e4 = 255 & (o4 ^ n2);
                for (let o5 = 0; o5 < 8; o5++)
                  e4 = 1 & e4 ? -306674912 ^ e4 >>> 1 : e4 >>> 1;
                o4 = o4 >>> 8 ^ e4;
              }
              return ((-1 ^ o4) >>> 0).toString(16).padStart(8, "0").toUpperCase();
            }(d2.toString().replaceAll("\r\n", "\n")), l2 = { name: e2, original: d2, originalHash: c2 };
            r2 = Object.assign(Object.assign({}, l2), { precomputed: s(l2), router: () => {
            }, context: o3, contextProperty: a2[a2.length - 1] }), r2.router = function(e3) {
              return function(...o4) {
                return e3.precomputed.enter.apply(this, [o4]);
              };
            }(r2), i.set(e2, r2), o3[r2.contextProperty] = r2.router;
          }
          return r2;
        }
        __name(c, "c");
        function l() {
          const e2 = /* @__PURE__ */ new Set();
          for (const o2 of p.values())
            for (const t2 of o2.patching.keys())
              e2.add(t2);
          for (const o2 of i.keys())
            e2.add(o2);
          for (const o2 of e2)
            c(o2, true);
        }
        __name(l, "l");
        function f() {
          const e2 = /* @__PURE__ */ new Map();
          for (const [o2, t2] of i)
            e2.set(o2, { name: o2, original: t2.original, originalHash: t2.originalHash, sdkEntrypoint: t2.router, currentEntrypoint: t2.context[t2.contextProperty], hookedByMods: r(t2.precomputed.hooks.map((e3) => e3.mod)), patchedByMods: Array.from(t2.precomputed.patchesSources) });
          return e2;
        }
        __name(f, "f");
        const p = /* @__PURE__ */ new Map();
        function u(e2) {
          p.get(e2.name) !== e2 && o(`Failed to unload mod '${e2.name}': Not registered`), p.delete(e2.name), e2.loaded = false, l();
        }
        __name(u, "u");
        function g(e2, t2, r2) {
          "string" == typeof e2 && "string" == typeof t2 && (alert(`Mod SDK warning: Mod '${e2}' is registering in a deprecated way.
It will work for now, but please inform author to update.`), e2 = { name: e2, fullName: e2, version: t2 }, t2 = { allowReplace: true === r2 }), e2 && "object" == typeof e2 || o("Failed to register mod: Expected info object, got " + typeof e2), "string" == typeof e2.name && e2.name || o("Failed to register mod: Expected name to be non-empty string, got " + typeof e2.name);
          let i2 = `'${e2.name}'`;
          "string" == typeof e2.fullName && e2.fullName || o(`Failed to register mod ${i2}: Expected fullName to be non-empty string, got ${typeof e2.fullName}`), i2 = `'${e2.fullName} (${e2.name})'`, "string" != typeof e2.version && o(`Failed to register mod ${i2}: Expected version to be string, got ${typeof e2.version}`), e2.repository || (e2.repository = void 0), void 0 !== e2.repository && "string" != typeof e2.repository && o(`Failed to register mod ${i2}: Expected repository to be undefined or string, got ${typeof e2.version}`), null == t2 && (t2 = {}), t2 && "object" == typeof t2 || o(`Failed to register mod ${i2}: Expected options to be undefined or object, got ${typeof t2}`);
          const a2 = true === t2.allowReplace, d2 = p.get(e2.name);
          d2 && (d2.allowReplace && a2 || o(`Refusing to load mod ${i2}: it is already loaded and doesn't allow being replaced.
Was the mod loaded multiple times?`), u(d2));
          const s2 = /* @__PURE__ */ __name((e3) => {
            "string" == typeof e3 && e3 || o(`Mod ${i2} failed to patch a function: Expected function name string, got ${typeof e3}`);
            let t3 = g2.patching.get(e3);
            return t3 || (t3 = { hooks: [], patches: /* @__PURE__ */ new Map() }, g2.patching.set(e3, t3)), t3;
          }, "s"), f2 = { unload: () => u(g2), hookFunction: (e3, t3, n2) => {
            g2.loaded || o(`Mod ${i2} attempted to call SDK function after being unloaded`);
            const r3 = s2(e3);
            "number" != typeof t3 && o(`Mod ${i2} failed to hook function '${e3}': Expected priority number, got ${typeof t3}`), "function" != typeof n2 && o(`Mod ${i2} failed to hook function '${e3}': Expected hook function, got ${typeof n2}`);
            const a3 = { mod: g2.name, priority: t3, hook: n2 };
            return r3.hooks.push(a3), l(), () => {
              const e4 = r3.hooks.indexOf(a3);
              e4 >= 0 && (r3.hooks.splice(e4, 1), l());
            };
          }, patchFunction: (e3, t3) => {
            g2.loaded || o(`Mod ${i2} attempted to call SDK function after being unloaded`);
            const r3 = s2(e3);
            n(t3) || o(`Mod ${i2} failed to patch function '${e3}': Expected patches object, got ${typeof t3}`);
            for (const [n2, a3] of Object.entries(t3))
              "string" == typeof a3 ? r3.patches.set(n2, a3) : null === a3 ? r3.patches.delete(n2) : o(`Mod ${i2} failed to patch function '${e3}': Invalid format of patch '${n2}'`);
            l();
          }, removePatches: (e3) => {
            g2.loaded || o(`Mod ${i2} attempted to call SDK function after being unloaded`);
            s2(e3).patches.clear(), l();
          }, callOriginal: (e3, t3, n2) => (g2.loaded || o(`Mod ${i2} attempted to call SDK function after being unloaded`), "string" == typeof e3 && e3 || o(`Mod ${i2} failed to call a function: Expected function name string, got ${typeof e3}`), Array.isArray(t3) || o(`Mod ${i2} failed to call a function: Expected args array, got ${typeof t3}`), function(e4, o2, t4 = window) {
            return c(e4).original.apply(t4, o2);
          }(e3, t3, n2)), getOriginalHash: (e3) => ("string" == typeof e3 && e3 || o(`Mod ${i2} failed to get hash: Expected function name string, got ${typeof e3}`), c(e3).originalHash) }, g2 = { name: e2.name, fullName: e2.fullName, version: e2.version, repository: e2.repository, allowReplace: a2, api: f2, loaded: true, patching: /* @__PURE__ */ new Map() };
          return p.set(e2.name, g2), Object.freeze(f2);
        }
        __name(g, "g");
        function h() {
          const e2 = [];
          for (const o2 of p.values())
            e2.push({ name: o2.name, fullName: o2.fullName, version: o2.version, repository: o2.repository });
          return e2;
        }
        __name(h, "h");
        let m;
        const y = function() {
          if (void 0 === window.bcModSdk)
            return window.bcModSdk = function() {
              const o2 = { version: e, apiVersion: 1, registerMod: g, getModsInfo: h, getPatchingInfo: f, errorReporterHooks: Object.seal({ hookEnter: null, hookChainExit: null }) };
              return m = o2, Object.freeze(o2);
            }();
          if (n(window.bcModSdk) || o("Failed to init Mod SDK: Name already in use"), 1 !== window.bcModSdk.apiVersion && o(`Failed to init Mod SDK: Different version already loaded ('1.1.0' vs '${window.bcModSdk.version}')`), window.bcModSdk.version !== e && (alert(`Mod SDK warning: Loading different but compatible versions ('1.1.0' vs '${window.bcModSdk.version}')
One of mods you are using is using an old version of SDK. It will work for now but please inform author to update`), window.bcModSdk.version.startsWith("1.0.") && void 0 === window.bcModSdk._shim10register)) {
            const e2 = window.bcModSdk, o2 = Object.freeze(Object.assign(Object.assign({}, e2), { registerMod: (o3, t2, n2) => o3 && "object" == typeof o3 && "string" == typeof o3.name && "string" == typeof o3.version ? e2.registerMod(o3.name, o3.version, "object" == typeof t2 && !!t2 && true === t2.allowReplace) : e2.registerMod(o3, t2, n2), _shim10register: true }));
            window.bcModSdk = o2;
          }
          return window.bcModSdk;
        }();
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
  var ModVersion = "0.2.0";
  var ModRepository = "https://github.com/dDeepLb/Themed-BC";
  var DebugMode = false;

  // src/Utilities/Console.ts
  var STYLES = {
    INFO: "color: #32CCCC",
    LOG: "color: #CCCC32",
    DEBUG: "color: #9E4BCF"
  };
  var cmdPrefix = "Themed";
  function conLog(...args) {
    if (typeof args[0] === "string")
      console.log(`%c${cmdPrefix}: ${args[0]}`, STYLES.LOG, ...args.slice(1));
    else
      console.log(`%c${cmdPrefix}:`, STYLES.LOG, ...args);
  }
  __name(conLog, "conLog");
  function conErr(...args) {
    if (typeof args[0] === "string")
      console.error(`%c${cmdPrefix}: ${args[0]}`, STYLES.LOG, ...args.slice(1));
    else
      console.error(`%c${cmdPrefix}:`, STYLES.LOG, ...args);
  }
  __name(conErr, "conErr");
  function conDebug(...args) {
    if (DebugMode) {
      if (typeof args[0] === "string")
        console.debug(`%c${cmdPrefix}: ${args[0]}`, STYLES.DEBUG, ...args.slice(1));
      else
        console.debug(`%c${cmdPrefix}:`, STYLES.LOG, ...args);
    }
  }
  __name(conDebug, "conDebug");

  // src/Utilities/String.ts
  var _String = class {
    static encode(string) {
      return LZString.compressToBase64(JSON.stringify(string));
    }
    static decode(string) {
      let d = LZString.decompressFromBase64(string);
      let data = {};
      try {
        let decoded = JSON.parse(d);
        data = decoded;
      } catch {
      }
      if (data)
        return data;
    }
  };
  __name(_String, "_String");

  // src/Utilities/Data.ts
  var PlayerStorage = /* @__PURE__ */ __name(() => Player?.[ModName], "PlayerStorage");
  var ExtensionStorage = /* @__PURE__ */ __name(() => Player.ExtensionSettings[ModName], "ExtensionStorage");
  function dataTake() {
    try {
      Player[ModName] = JSON.parse(LZString.decompressFromBase64(ExtensionStorage()));
    } catch (error) {
      Player[ModName] = JSON.parse(LZString.decompressFromBase64(Player.OnlineSettings[ModName])) || {};
      if (Player.OnlineSettings[ModName]) {
        delete Player.OnlineSettings[ModName];
        window.ServerAccountUpdate.QueueData({ OnlineSettings: Player.OnlineSettings });
      }
    }
  }
  __name(dataTake, "dataTake");
  function dataStore() {
    if (!ExtensionStorage())
      Player.ExtensionSettings[ModName] = "";
    let Data = {
      Version: PlayerStorage().Version,
      GlobalModule: PlayerStorage().GlobalModule,
      ColorsModule: PlayerStorage().ColorsModule,
      IntegrationModule: PlayerStorage().IntegrationModule
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

  // src/Translation.ts
  var ENTextMap = {
    "infosheet.button_popup": "Themed Settings",
    "MainMenu.title": "- Themed BC -",
    "mainmenu.button.Settings": "Settings",
    "mainmenu.button.Colors": "Color Settings",
    "mainmenu.button.Integration": "Integration",
    "Settings.title": "- Settings -",
    "settings.setting.themedEnabled.name": "Enable Themed:",
    "settings.setting.themedEnabled.desc": "Enables features of Themed.",
    "settings.setting.doVanillaGuiOverhaul.name": "Enable GUI Overhaul:",
    "settings.setting.doVanillaGuiOverhaul.desc": "Redraws interface using colors selected in Color Settings.",
    "settings.setting.doUseChatSpecialStyling.name": "Enable chat styling:",
    "settings.setting.doUseChatSpecialStyling.desc": "Enables chat messages styling like italic, bold, underlined, etc.",
    "settings.setting.doShowLocaleTime.name": "Enable locale-based time format:",
    "settings.setting.doShowLocaleTime.desc": "Displays time according to your PC's locale settings. Like 20:25 or 08:25 PM.",
    "settings.setting.doShowNewVersionMessage.name": "Enable new version message:",
    "settings.setting.doShowNewVersionMessage.desc": "Show message about new version of Themed, when it's out.",
    "Colors.title": "- Color Settings -",
    "settings.setting.primaryColor.name": "Primary color:",
    "settings.setting.primaryColor.desc": "",
    "settings.setting.accentColor.name": "Accent color:",
    "settings.setting.accentColor.desc": "",
    "settings.setting.textColor.name": "Text color:",
    "settings.setting.textColor.desc": "",
    "Integration.title": "- Integration -",
    "integration.setting.BC.name": 'Enable BC Inputs "integration":',
    "integration.setting.BC.desc": "Changes CSS styles of BC to use Color Settings. Changes inputs and other thingies where you could write text.",
    "integration.setting.BC_Chat.name": 'Enable BC Chat "integration":',
    "integration.setting.BC_Chat.desc": "Changes CSS styles of BC to use Color Settings. Changes chat.",
    "integration.setting.BC_FriendList.name": 'Enable BC Friend List "integration":',
    "integration.setting.BC_FriendList.desc": "Changes CSS styles of BC to use Color Settings. Changes background of friend list",
    "integration.setting.BC_Other.name": 'Enable BC Other "integration":',
    "integration.setting.BC_Other.desc": "Changes CSS styles of BC to use Color Settings. Changes scroll bar and selection colors.",
    "integration.setting.FBC.name": 'Enable FBC "integration":',
    "integration.setting.FBC.desc": "Changes CSS styles of FBC to use Color Settings. Mostly changes Instant Messenger colors.",
    "integration.setting.FUSAM.name": 'Enable FUSAM "integration":',
    "integration.setting.FUSAM.desc": "Changes CSS styles of FUSAM to use Color Settings. Changes FUSAM button with settings interface.",
    "integration.setting.TTS.name": 'Enable TTS "integration":',
    "integration.setting.TTS.desc": "Changes CSS styles of TTS to use Color Settings. Changes settings interface with task window,",
    "reset.label.perma_reset_of_mod_data": "- Permanent reset of Themed data -",
    "reset.label.warning": "- Warning -",
    "reset.label.if_u_confirm_perma_reset": "If you confirm, all Themed data (including color settings) will be permanently reset!",
    "reset.label.youll_able_to_use_mod": "You will be able to continue using Themed, but all of your configuration will be reset to default!",
    "reset.label.action_cannot_be_undone": "This action cannot be undone!",
    "reset.button.confirm": "Confirm",
    "reset.button.cancel": "Cancel",
    "support.title": "- Support -",
    "support.button.ko-fi": "Ko-fi",
    "support.button.patreon": "Patreon",
    "support.other.thankyou": "Thank you"
  };
  function getText(translationTag) {
    if (DebugMode)
      logSrcTags(translationTag);
    return [`${TranslationLanguage}TextMap`][translationTag] || ENTextMap[translationTag] || translationTag;
  }
  __name(getText, "getText");
  function logSrcTags(translationTag) {
    if (![`${TranslationLanguage}TextMap`][translationTag]) {
      conDebug(`${String(translationTag)} is not translated for ${TranslationLanguage}`);
    }
  }
  __name(logSrcTags, "logSrcTags");

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

  // src/Utilities/Drawing.ts
  var cachedImages = {};
  var __Image = class {
    static drawColorized(source, x, y, hexColor, { newWidth = null, newHeight = null }) {
      const img = DrawGetImage(source);
      if (!!__Image.getCache(source)) {
        __Image.drawCached(source, x, y, img, { newWidth, newHeight });
        return true;
      }
      if (!img.complete)
        return false;
      if (!img.naturalWidth)
        return true;
      const width = img.width;
      const height = img.height;
      ColorCanvas.canvas.width = width;
      ColorCanvas.canvas.height = height;
      ColorCanvas.globalCompositeOperation = "copy";
      ColorCanvas.drawImage(img, 0, 0);
      const imageData = ColorCanvas.getImageData(0, 0, width, height);
      __Image.colorize(imageData, hexColor);
      __Image.setCache(source, imageData);
      __Image.drawCached(source, x, y, img, { newWidth, newHeight });
      return true;
    }
    static colorize(imageData, color2) {
      const data = imageData.data;
      const rgbColor = DrawHexToRGB(color2);
      for (let p = 0, len = data.length; p < len; p += 4) {
        if (data[p + 3] == 0)
          continue;
        const trans = (data[p] + data[p + 1] + data[p + 2]) / 383;
        data[p + 0] = rgbColor.r * trans;
        data[p + 1] = rgbColor.g * trans;
        data[p + 2] = rgbColor.b * trans;
      }
    }
    static drawCached(source, x, y, img, { newWidth = null, newHeight = null }) {
      const colorizedImage = cachedImages[source];
      const sizeChanged = newWidth != null || newHeight != null;
      const width = img.width;
      const height = img.height;
      ColorCanvas.canvas.width = width;
      ColorCanvas.canvas.height = height;
      ColorCanvas.putImageData(colorizedImage, 0, 0);
      MainCanvas.save();
      MainCanvas.globalAlpha = 1;
      MainCanvas.globalCompositeOperation = "source-over";
      if (!sizeChanged)
        MainCanvas.drawImage(ColorCanvas.canvas, 0, 0, img.width, img.height, x, y, img.width, img.height);
      else
        MainCanvas.drawImage(ColorCanvas.canvas, 0, 0, img.width, img.height, x, y, newWidth, newHeight);
      MainCanvas.restore();
    }
    static doDrawImage(source) {
      let skipDrawing = false;
      for (const folderPrefix of __Image.doNotDrawImageFolders) {
        if (source.startsWith(folderPrefix)) {
          skipDrawing = true;
          break;
        }
      }
      if (!skipDrawing && __Image.doNotDrawImages.includes(source)) {
        skipDrawing = true;
      }
      return !skipDrawing;
    }
    static setCache(key, data) {
      cachedImages[key] = data;
    }
    static getCache(key) {
      return cachedImages[key];
    }
    static clearCache() {
      cachedImages = {};
    }
  };
  var _Image = __Image;
  __name(_Image, "_Image");
  __publicField(_Image, "doNotDrawImageFolders", [
    "Assets/Female3DCG/",
    "Backgrounds/",
    "Icons/Struggle/",
    "Screens/",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyEAYAAABOr1TyAAABb2lDQ1BpY2MAACiRdZG9S0JRGMZ/"
  ]);
  __publicField(_Image, "doNotDrawImages", [
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
  ]);
  function drawRect(x, y, width, height, backgroundColor, borderColor) {
    DrawRect(x, y, width, height, backgroundColor);
    DrawEmptyRect(x, y, width, height, borderColor, 2);
  }
  __name(drawRect, "drawRect");

  // src/Static/Styles/BC_Inputs.css
  var BC_Inputs_default = "textarea {\n  background: var(--elementBackground);\n  color: var(--text);\n  border: 1px solid var(--elementBorder);\n}\n\ninput {\n  background: var(--elementBackground);\n  color: var(--text);\n  border: 1px solid var(--elementBorder);\n}\n\ntextarea:focus,\ninput:focus {\n  outline: var(--elementBorder) solid 1px;\n}\n";

  // src/Static/Styles/BC_Chat.css
  var BC_Chat_default = '#TextAreaChatLog[data-colortheme="dark"],\n#TextAreaChatLog[data-colortheme="dark2"] {\n  background-color: var(--background);\n  color: var(--text);\n  border-color: var(--elementBorder);\n}\n\n#InputChat,\n#InputChat {\n  background-color: var(--background);\n  color: var(--text);\n  border-color: var(--elementBorder);\n}\n\n#TextAreaChatLog .ChatMessageName,\n#TextAreaChatLog[data-colortheme="dark"] .ChatMessageName,\n#TextAreaChatLog[data-colortheme="dark2"] .ChatMessageName {\n  text-shadow: 0.05em 0.05em var(--textShadow);\n}\n\n#TextAreaChatLog[data-colortheme="dark2"] .ChatMessage {\n  border-bottom: none;\n}\n';

  // src/Static/Styles/BC_FriendList.css
  var BC_FriendList_default = "#FriendList {\n  background-color: var(--friendlistBackground);\n  border-color: var(--elementBorder);\n  padding: 0;\n  margin-top: 1%;\n  padding-bottom: 0%;\n}\n";

  // src/Static/Styles/BC_Other.css
  var BC_Other_default = "::-webkit-scrollbar {\n  background-color: var(--scrollbar);\n}\n\n::-webkit-scrollbar-corner {\n  background-color: var(--scrollbar);\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: var(--elementBackground);\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: var(--accent);\n}\n\n::selection {\n  background-color: var(--accent);\n  color: var(--text);\n}\n";

  // src/Static/Styles/FBC.css
  var FBC_default = ".bce-img {\n  border-color: var(--elementBorder);\n}\n\n#bce-instant-messenger {\n  top: 0%;\n  left: 0%;\n  background-color: var(--background);\n  color: var(--text);\n  border-color: var(--elementBorder);\n  max-width: 99.5%;\n  max-height: 85%;\n  min-width: 38%;\n  min-height: 30%;\n}\n\n.bce-friend-list-entry.bce-friend-list-selected {\n  border-top-color: var(--elementBorder);\n  border-bottom-color: var(--elementBorder);\n  background-color: var(--elementBackground);\n}\n\n.bce-friend-list-entry:hover {\n  background-color: var(--elementBackgroundHover);\n}\n\n#bce-message-right-container {\n  border-left-color: var(--elementBorder);\n}\n\n#bce-message-input {\n  border-top: 1px solid var(--elementBorder);\n  border-bottom: 1px solid var(--elementBorder);\n  background-color: var(--background);\n  color: var(--text);\n}\n\n.bce-message-divider {\n  border-bottom-color: var(--elementBorder);\n}\n\n.bce-message-sender {\n  text-shadow: 0.05em 0.05em var(--textShadow);\n}\n\n.bce-message-Message .bce-message-sender {\n  text-shadow: 0.05em 0.05em var(--textShadow);\n}\n\n#bce-friend-search {\n  background-color: var(--background);\n  border-bottom-color: var(--elementBorder);\n  color: var(--text);\n}\n\n.bce-colors .bce-dark-input {\n  background-color: var(--elementBackground);\n  border: 1px solid var(--elementBorder);\n  color: var(--text);\n}\n";

  // src/Static/Styles/FUSAM.css
  var FUSAM_default = ".button {\n  border-color: var(--elementBorder);\n  background-color: var(--elementBackground);\n  color: var(--text);\n}\n\n.button:hover,\n.button:focus,\nselect:hover,\nselect:focus {\n  background-color: var(--accent);\n}\n\nselect,\noption {\n  border-color: var(--elementBorder);\n  background-color: var(--elementBackground);\n  color: var(--text);\n}\n\nselect:disabled:hover {\n  background-color: var(--elementBackgroundHover);\n}\n";

  // src/Static/Styles/Themed.css
  var Themed_default = '.ThemedMessageContent {\n  display: inline;\n}\n\n.ThemedVersion {\n  font-weight: bold;\n  color: rgb(203, 185, 23);\n}\n\n#TextAreaChatLog[data-colortheme="dark"] div.ChatMessage.ThemedMessage,\n#TextAreaChatLog[data-colortheme="dark2"] div.ChatMessage.ThemedMessage {\n  background-color: var(--elementBackground);\n  border: 2px solid var(--accent);\n  padding-left: 5px;\n  display: block;\n  white-space: wrap;\n  color: var(--text);\n}\n\n#TextAreaChatLog div.ChatMessage.ThemedMessage {\n  background-color: #eee;\n  border: 2px solid #440171;\n  padding-left: 5px;\n  display: block;\n  white-space: wrap;\n  color: #111;\n}\n\n#TextAreaChatLog[data-colortheme="dark"] a.ThemedText,\n#TextAreaChatLog[data-colortheme="dark2"] a.ThemedText {\n  cursor: pointer;\n  font-weight: bold;\n  color: var(--text);\n}\n\n#TextAreaChatLog a.ThemedText {\n  cursor: pointer;\n  font-weight: bold;\n  color: #111;\n}\n\n#ThemedGratitude {\n  position: fixed;\n  width: 25%;\n  height: 50%;\n  top: 15%;\n  left: 50%;\n}\n\n.ThemedH {\n  font-size: 1em;\n  color: #333;\n}\n\n.ThemedP {\n  font-size: 0.6em;\n  color: #555;\n  line-height: 1.5;\n}\n\n.ThemedP:last-child {\n  font-size: 0.8em;\n  color: #ff69b4;\n}\n';

  // src/Static/Styles/TTS.css
  var TTS_default = '.tts-dialog {\n  background-color: var(--background);\n  border: 2px solid var(--elementBorder);\n  color: var(--text);\n}\n\n.tts-option {\n  background-color: var(--elementBackground);\n  border-color: var(--elementBorder);\n  color: var(--text);\n}\n\ninput[type="range"].tts-slider {\n  background-color: var(--elementBackground);\n  -webkit-appearance: none;\n  appearance: none;\n  width: 100%;\n  height: 15px;\n  outline: none;\n  border-radius: 50px;\n}\n\ninput[type="range"].tts-slider::-webkit-slider-thumb {\n  background: var(--accent);\n  -webkit-appearance: none;\n  appearance: none;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\ninput[type="range"].tts-slider::-moz-range-thumb {\n  background: var(--accent);\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.tts-select {\n  background-color: var(--elementBackground);\n  border-color: var(--elementBorder);\n  color: var(--text);\n}\n\n.tts-tab {\n  background-color: var(--elementBackground);\n  border-color: var(--elementBorder);\n  color: var(--text);\n}\n\n.tts-btn {\n  background-color: var(--elementBackground);\n  border: 1px solid var(--elementBorder);\n  color: var(--text);\n}\n\n.tts-tab.active {\n  background-color: var(--accent);\n}\n\n.tts-toggle-container {\n  border-color: var(--elementBorder);\n}\n\n.tts-boxed-container {\n  border-color: var(--elementBorder);\n}\n\n.tts-link {\n  border-color: var(--elementBorder);\n  background-color: var(--elementBackground);\n  color: var(--text);\n}\n\n.tts-link:hover {\n  background-color: var(--elementBackground);\n  color: var(--accent);\n}\n\n.mo-modal-content {\n  background-color: var(--background);\n  border: 1px solid var(--elementBorder);\n  color: var(--text);\n}\n\n.mo-closer {\n  color: var(--text);\n}\n\n#mo_submitInput-1 {\n  background-color: var(--elementBackground);\n  border: 1px solid var(--elementBorder);\n  color: var(--text);\n}\n';

  // src/Utilities/Color.ts
  var cachedColors = {};
  var color = {
    mainBackground: "",
    elementBackground: "",
    elementBackgroundHover: "",
    elementBackgroundDisabled: "",
    elementBorder: "",
    elementBorderHover: "",
    text: "",
    icon: ""
  };
  var _Color = class {
    static darken(hexColor, percentage) {
      if (!hexColor)
        return;
      let cacheColor = _Color.getCache(`darker${hexColor}${percentage}`);
      if (cacheColor)
        return cacheColor;
      const color2 = _Color.extractFromRGBA(_Color.getComputed(hexColor));
      const newRgbColor = { r: 0, g: 0, b: 0 };
      newRgbColor.r = Math.max(0, color2.r - Math.round(percentage / 100 * color2.r));
      newRgbColor.g = Math.max(0, color2.g - Math.round(percentage / 100 * color2.g));
      newRgbColor.b = Math.max(0, color2.b - Math.round(percentage / 100 * color2.b));
      newRgbColor.a = color2.a;
      const ret = _Color.rgbaToHex(newRgbColor);
      _Color.setCache(`darker${hexColor}${percentage}`, ret);
      return ret;
    }
    static lighten(hexColor, percentage) {
      if (!hexColor)
        return;
      let cacheColor = _Color.getCache(`lighter${hexColor}${percentage}`);
      if (cacheColor)
        return cacheColor;
      const color2 = _Color.extractFromRGBA(_Color.getComputed(hexColor));
      const newRgbColor = { r: 0, g: 0, b: 0 };
      newRgbColor.r = Math.min(255, color2.r + Math.round(percentage / 100 * (255 - color2.r)));
      newRgbColor.g = Math.min(255, color2.g + Math.round(percentage / 100 * (255 - color2.g)));
      newRgbColor.b = Math.min(255, color2.b + Math.round(percentage / 100 * (255 - color2.b)));
      newRgbColor.a = color2.a;
      const ret = _Color.rgbaToHex(newRgbColor);
      _Color.setCache(`lighter${hexColor}${percentage}`, ret);
      return ret;
    }
    static toDarkMode(colorHex, backgroundColorHex) {
      let cacheColor = _Color.getCache(`darkMode${colorHex}${backgroundColorHex}`);
      if (cacheColor)
        return cacheColor;
      const lightColor = _Color.extractFromRGBA(_Color.getComputed(colorHex));
      const backgroundColor = _Color.extractFromRGBA(_Color.getComputed(backgroundColorHex));
      const contrastRatio = _Color.getContrastRatio(lightColor, backgroundColor);
      if (contrastRatio < 4.5) {
        lightColor.r = Math.min(lightColor.r + 30, 255);
        lightColor.g = Math.min(lightColor.g + 30, 255);
        lightColor.b = Math.min(lightColor.b + 30, 255);
        lightColor.a = lightColor.a;
      }
      const ret = _Color.rgbaToHex(lightColor);
      _Color.setCache(`darkMode${colorHex}${backgroundColorHex}`, ret);
      return ret;
    }
    static getContrastRatio(color1, color2) {
      const luminance1 = _Color.calculateLuminance(color1);
      const luminance2 = _Color.calculateLuminance(color2);
      return (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
    }
    static calculateLuminance(color2) {
      const r = color2.r / 255;
      const g = color2.g / 255;
      const b = color2.b / 255;
      const gammaCorrectedR = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
      const gammaCorrectedG = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
      const gammaCorrectedB = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
      return 0.2126 * gammaCorrectedR + 0.7152 * gammaCorrectedG + 0.0722 * gammaCorrectedB;
    }
    static hexToRgba(hex) {
      hex = hex.replace(/^#/, "");
      if (hex.length === 6) {
        return {
          r: parseInt(hex.slice(0, 2), 16),
          g: parseInt(hex.slice(2, 4), 16),
          b: parseInt(hex.slice(4, 6), 16),
          a: 1
        };
      } else if (hex.length === 8) {
        return {
          r: parseInt(hex.slice(0, 2), 16),
          g: parseInt(hex.slice(2, 4), 16),
          b: parseInt(hex.slice(4, 6), 16),
          a: parseInt(hex.slice(6, 8), 16) / 255
        };
      }
      return { r: 0, g: 0, b: 0, a: 1 };
    }
    static rgbaToHex(color2) {
      const { r, g, b, a } = color2;
      if (a !== void 0 && a !== 1) {
        const alphaHex = Math.round(a * 255).toString(16).toUpperCase().padStart(2, "0");
        return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase()}${alphaHex}`;
      }
      return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase()}`;
    }
    static extractFromRGBA(rgbaString) {
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
    }
    static getComputed(color2) {
      let cachedColor = _Color.getCache(`comp${color2}`);
      if (cachedColor)
        return cachedColor;
      const div = document.createElement("div");
      div.style.color = color2;
      document.body.appendChild(div);
      const computedColor = getComputedStyle(div).color;
      div.remove();
      const ret = computedColor;
      _Color.setCache(`comp${color2}`, ret);
      return ret;
    }
    static getHexComputed(color2) {
      color2 = _Color.getComputed(color2);
      const RGBA = _Color.extractFromRGBA(color2);
      const ret = _Color.rgbaToHex(RGBA);
      return ret;
    }
    static composeRoot() {
      const data = Player.Themed.ColorsModule;
      const primaryColor = _Color.getHexComputed(data.primaryColor);
      const accentColor = _Color.getHexComputed(data.accentColor);
      const textColor = _Color.getHexComputed(data.textColor);
      color.mainBackground = primaryColor;
      color.elementBackground = _Color.lighten(primaryColor, 10);
      color.elementBackgroundDisabled = primaryColor;
      color.elementBackgroundHover = accentColor;
      color.elementBorder = accentColor;
      color.elementBorderHover = _Color.lighten(accentColor, 20);
      color.text = textColor;
      color.icon = accentColor;
    }
    static setCache(key, value) {
      cachedColors[key] = value;
    }
    static getCache(key) {
      return cachedColors[key];
    }
    static clearCache() {
      cachedColors = {};
    }
  };
  __name(_Color, "_Color");

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
    TTS: TTS_default
  };
  var _Style = class {
    static inject(id) {
      if (id == "Root")
        updateRootStyle();
      const styleSource = styles[id];
      const isStyleLoaded = document.getElementById(id);
      const isEnabled = PlayerStorage().GlobalModule.themedEnabled;
      if (isStyleLoaded)
        return;
      if (!isEnabled || !PlayerStorage().IntegrationModule[id] && id != "Themed" && id != "Root")
        return;
      const styleElement = document.createElement("style");
      styleElement.id = id;
      styleElement.appendChild(document.createTextNode(styleSource));
      document.head.appendChild(styleElement);
    }
    static eject(id) {
      const style = document.getElementById(id);
      if (!style)
        return;
      style.remove();
    }
    static reload(id) {
      _Style.eject(id);
      _Style.inject(id);
    }
    static injectAll() {
      const styleIDs = Object.keys(styles);
      styleIDs.forEach((id) => {
        _Style.inject(id);
      });
    }
    static ejectAll() {
      const styleIDs = Object.keys(styles);
      styleIDs.forEach((id) => {
        _Style.eject(id);
      });
    }
    static reloadAll() {
      const styleIDs = Object.keys(styles);
      styleIDs.forEach((id) => {
        _Style.reload(id);
      });
    }
  };
  __name(_Style, "_Style");
  function composeRoot() {
    return `
    :root {
      /*accent color*/
      --accent: ${color?.elementBorder || "#440171"};
      /*background*/
      --background: ${color?.mainBackground || "#202020"}; 
      /*inputs, buttons and shit*/
      --elementBackground: ${color?.elementBackground || "#303030"}; 
       /*elements that should stand out, like thing on slider or button when hovered over*/
      --elementBackgroundHover: ${color?.elementBackgroundHover || "#57276e"};
      /*borders for html and game drawn elements*/
      --elementBorder: var(--accent);
      /*text obviously*/
      --text: ${color?.text || "#eeeeee"}; 
      /*obviously as well*/
      --textShadow: ${_Color.darken(color?.elementBackground, 50) || "#cccccc"};

      --scrollbar: ${_Color.darken(color?.elementBackground, 20) || "#454545"};

      --friendlistBackground: ${color?.elementBackground + "80" || "#30303080"}
    }
    `;
  }
  __name(composeRoot, "composeRoot");
  function updateRootStyle() {
    styles.Root = composeRoot();
  }
  __name(updateRootStyle, "updateRootStyle");

  // src/Utilities/SDK.ts
  var import_bondage_club_mod_sdk = __toESM(require_bcmodsdk());
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

  // src/Utilities/GuiHooks.ts
  var doRedraw = /* @__PURE__ */ __name(() => {
    return Player.Themed?.GlobalModule?.themedEnabled && Player.Themed?.GlobalModule?.doVanillaGuiOverhaul;
  }, "doRedraw");
  var isWhite = /* @__PURE__ */ __name((color2) => _Color.getComputed(color2) === "rgb(255, 255, 255)", "isWhite");
  var isBlack = /* @__PURE__ */ __name((color2) => _Color.getComputed(color2) === "rgb(0, 0, 0)", "isBlack");
  function loadGuiHooks() {
    hookFunction(
      "DrawProcess",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw())
          return next(args);
        let B = window[CurrentScreen + "Background"];
        if (B != "Sheet")
          return next(args);
        let time = args[0];
        DrawRect(0, 0, 2e3, 1e3, color.mainBackground);
        MainCanvas.filter = "none";
        if (CurrentCharacter != null)
          DialogDraw();
        else
          CurrentScreenFunctions.Run(time);
        DrawProcessHoverElements();
        ServerDrawBeep();
        if (ControllerIsActive()) {
          DrawRect(MouseX - 5, MouseY - 5, 10, 10, "Red");
        }
      },
      0 /* Global */
    );
    hookFunction(
      "DrawButton",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw())
          return next(args);
        const [Left, Top, Width, Height, Label, Color, Image, HoveringText, Disabled] = args;
        const isHovering = MouseHovering(Left, Top, Width, Height);
        ControllerAddActiveArea(Left, Top);
        if (isWhite(Color)) {
          if (!isHovering && !Disabled)
            drawRect(Left, Top, Width, Height, color.elementBackground, color.elementBorder);
          else if (isHovering && !Disabled)
            drawRect(Left, Top, Width, Height, color.elementBackgroundHover, color.elementBorderHover);
          else if (Disabled)
            drawRect(Left, Top, Width, Height, color.elementBackgroundDisabled, color.elementBorder);
        } else {
          if (!isHovering && !Disabled)
            drawRect(Left, Top, Width, Height, _Color.darken(_Color.toDarkMode(Color, color.elementBackground), 20), color.elementBorder);
          else if (isHovering && !Disabled)
            drawRect(
              Left,
              Top,
              Width,
              Height,
              _Color.darken(_Color.toDarkMode(Color, color.elementBackgroundHover), 30),
              color.elementBorderHover
            );
          else if (Disabled)
            drawRect(Left, Top, Width, Height, _Color.darken(_Color.toDarkMode(Color, color.elementBackground), 40), color.elementBorder);
        }
        DrawTextFit(Label, Left + Width / 2, Top + Height / 2 + 1, Width - 4, color.text);
        if (Image != null && Image != "") {
          if (_Image.doDrawImage(Image))
            _Image.drawColorized(Image, Left + 2, Top + 2, color.icon, {});
          else
            DrawImage(Image, Left + 2, Top + 2);
        }
        if (HoveringText != null && isHovering) {
          DrawHoverElements.push(() => DrawButtonHover(Left, Top, Width, Height, HoveringText));
        }
      },
      0 /* Global */
    );
    hookFunction(
      "DrawCheckbox",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw())
          return next(args);
        const [Left, Top, Width, Height, Text, IsChecked, Disabled = false, TextColor = "Black", CheckImage = "Icons/Checked.png"] = args;
        DrawText(Text, Left + 100, Top + 33, color.text, "");
        DrawButton(
          Left,
          Top,
          Width,
          Height,
          "",
          Disabled ? color.elementBackgroundDisabled : color.elementBackground,
          IsChecked ? CheckImage : "",
          null,
          Disabled
        );
      },
      0 /* Global */
    );
    hookFunction(
      "DrawBackNextButton",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw())
          return next(args);
        let [Left, Top, Width, Height, Label, Color, Image, BackText, NextText, Disabled, ArrowWidth] = args;
        if (ArrowWidth == null || ArrowWidth > Width / 2)
          ArrowWidth = Width / 2;
        const LeftSplit = Left + ArrowWidth;
        const RightSplit = Left + Width - ArrowWidth;
        ControllerAddActiveArea(Left, Top);
        ControllerAddActiveArea(Left + Width - ArrowWidth, Top);
        MainCanvas.beginPath();
        MainCanvas.rect(Left, Top, Width, Height);
        MainCanvas.fillStyle = color.elementBackground;
        MainCanvas.fillRect(Left, Top, Width, Height);
        if (MouseIn(Left, Top, Width, Height) && !CommonIsMobile && !Disabled) {
          MainCanvas.fillStyle = color.elementBackgroundHover;
          if (MouseX > RightSplit) {
            MainCanvas.fillRect(RightSplit, Top, ArrowWidth, Height);
          } else if (MouseX <= LeftSplit) {
            MainCanvas.fillRect(Left, Top, ArrowWidth, Height);
          } else {
            MainCanvas.fillRect(Left + ArrowWidth, Top, Width - ArrowWidth * 2, Height);
          }
        } else if (CommonIsMobile && ArrowWidth < Width / 2 && !Disabled) {
          MainCanvas.fillStyle = color.elementBackgroundDisabled;
          MainCanvas.fillRect(Left, Top, ArrowWidth, Height);
          MainCanvas.fillRect(RightSplit, Top, ArrowWidth, Height);
        }
        MainCanvas.lineWidth = 2;
        MainCanvas.strokeStyle = color.elementBorder;
        MainCanvas.stroke();
        MainCanvas.closePath();
        DrawTextFit(Label, Left + Width / 2, Top + Height / 2 + 1, CommonIsMobile ? Width - 6 : Width - 36, isWhite(Color) ? color.text : Color);
        if (Image != null && Image != "") {
          if (_Image.doDrawImage(Image))
            _Image.drawColorized(Image, Left + 2, Top + 2, color.icon, {});
          else
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
        if (CommonIsMobile)
          return;
        if (BackText == null)
          BackText = /* @__PURE__ */ __name(() => "MISSING VALUE FOR: BACK TEXT", "BackText");
        if (NextText == null)
          NextText = /* @__PURE__ */ __name(() => "MISSING VALUE FOR: NEXT TEXT", "NextText");
        if (MouseX >= Left && MouseX <= Left + Width && MouseY >= Top && MouseY <= Top + Height && !Disabled)
          DrawHoverElements.push(() => {
            DrawButtonHover(Left, Top, Width, Height, MouseX < LeftSplit ? BackText() : MouseX >= RightSplit ? NextText() : "");
          });
      },
      0 /* Global */
    );
    hookFunction(
      "DrawImageResize",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw())
          return next(args);
        if (!_Image.doDrawImage(args[0]))
          return next(args);
        const [source, x, y, width, height] = args;
        _Image.drawColorized(source, x, y, color.icon, { newWidth: width, newHeight: height });
      },
      0 /* Global */
    );
    hookFunction(
      "DrawRect",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw())
          return next(args);
        const [Left, Top, Width, Height] = args;
        const Color = args[4];
        const drawRect2 = /* @__PURE__ */ __name((color2) => {
          MainCanvas.beginPath();
          MainCanvas.fillStyle = color2;
          MainCanvas.fillRect(Left, Top, Width, Height);
          MainCanvas.fill();
        }, "drawRect");
        switch (Color.toLowerCase()) {
          case "white":
          case "#eee":
          case "#eeeeee":
          case "#ddd":
          case "#dddddd":
          case "#ccc":
          case "#cccccc":
          case "#ffff88":
          case "#ffffff":
          case "#ffffff88":
          case "#ffffffcc":
            drawRect2(color.elementBackground);
            break;
          case "#d8fed7":
          case "#adcbac":
            drawRect2(_Color.darken(Color, 25));
            break;
          default:
            next(args);
            break;
        }
      },
      0 /* Global */
    );
    hookFunction(
      "DrawEmptyRect",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw())
          return next(args);
        const [Left, Top, Width, Height, , Thickness] = args;
        const Color = args[4];
        const drawEmptyRect = /* @__PURE__ */ __name((color2) => {
          MainCanvas.beginPath();
          MainCanvas.rect(Left, Top, Width, Height);
          MainCanvas.lineWidth = Thickness;
          MainCanvas.strokeStyle = color2;
          MainCanvas.stroke();
        }, "drawEmptyRect");
        switch (Color.toLowerCase()) {
          case "black":
          case "white":
          case "#ddd":
          case "#000":
          case "#000000":
            drawEmptyRect(color.elementBorder);
            break;
          default:
            next(args);
            break;
        }
      },
      0 /* Global */
    );
    hookFunction(
      "DrawButtonHover",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw())
          return next(args);
        let [Left, Top, Width, Height, HoveringText] = args;
        if (HoveringText == null || HoveringText == "")
          return next(args);
        Left = MouseX > 1e3 ? Left - 475 : Left + Width + 25;
        Top = Top + (Height - 65) / 2;
        drawRect(Left, Top, 450, 65, _Color.lighten(color.elementBackground, 25), color.elementBorder);
        DrawTextFit(HoveringText, Left + 225, Top + 33, 444, "Black");
      },
      0 /* Global */
    );
    hookFunction(
      "DrawPreviewBox",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw())
          return next(args);
        const [X, Y, Path, Description, Options] = args;
        let { Background, Foreground, Vibrating, Border, Hover, HoverBackground, Disabled, Icons, Width, Height } = Options || {};
        Width = Width || DrawAssetPreviewDefaultWidth;
        Height = Height || DrawAssetPreviewDefaultHeight;
        const Padding = 2;
        const TextGutter = Description ? 44 : 0;
        Background = isWhite(Background) ? color.elementBackground : _Color.darken(_Color.toDarkMode(Background, color.elementBackground), 50);
        Foreground = color.text;
        Border = color.elementBorder;
        Hover = MouseHovering(X, Y, Width, Height);
        if (Disabled)
          Background = color.elementBackgroundDisabled;
        else if (Hover)
          Background = color.elementBackgroundHover;
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
        if (Border)
          DrawEmptyRect(X, Y, Width, Height, Hover ? color.elementBorderHover : Border);
        if (Path !== "")
          DrawImageResize(Path, ImageX, ImageY, ImageWidth, ImageHeight);
        DrawPreviewIcons(Icons, X, Y);
        if (Description)
          DrawTextFit(Description, X + Width / 2, Y + Height - 25, Width - 2 * Padding, Foreground);
      },
      0 /* Global */
    );
    hookFunction(
      "DrawTextWrap",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw())
          return next(args);
        let [Text, X, Y, Width, Height, ForeColor, BackColor, MaxLine, LineSpacing = 23] = args;
        const isHovering = MouseHovering(X, Y, Width, Height);
        if (!Text)
          return;
        ControllerAddActiveArea(X, Y);
        if (BackColor != null) {
          if (isWhite(BackColor)) {
            if (!isHovering) {
              drawRect(X, Y, Width, Height, color.elementBackground, color.elementBorder);
            } else {
              drawRect(X, Y, Width, Height, color.elementBackgroundHover, color.elementBorder);
            }
          } else {
            if (!isHovering) {
              drawRect(X, Y, Width, Height, BackColor, color.elementBorder);
            } else {
              drawRect(X, Y, Width, Height, _Color.darken(BackColor, 40), color.elementBorder);
            }
          }
        }
        let TextSize;
        if (MaxLine != null) {
          TextSize = MainCanvas.font;
          GetWrapTextSize(Text, Width, MaxLine);
        }
        MainCanvas.fillStyle = isBlack(ForeColor) ? color.text : _Color.lighten(_Color.toDarkMode(ForeColor, color.elementBackground), 50);
        if (MainCanvas.measureText(Text).width > Width) {
          const words = fragmentText(Text, Width);
          let line = "";
          let LineCount = 1;
          for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + " ";
            if (MainCanvas.measureText(testLine).width > Width && n > 0) {
              line = words[n] + " ";
              LineCount++;
            } else
              line = testLine;
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
        } else
          MainCanvas.fillText(Text, X + Width / 2, Y + Height / 2);
        if (MaxLine != null && TextSize != null)
          MainCanvas.font = TextSize;
      },
      0 /* Global */
    );
    hookFunction(
      "DrawTextFit",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw())
          return next(args);
        if (args[0]?.startsWith("Description"))
          return next(args);
        if (isBlack(args[4])) {
          args[4] = color.text;
          args[5] = "";
        } else {
          args[4] = _Color.toDarkMode(args[4], color.mainBackground);
          args[5] = "";
        }
        return next(args);
      },
      0 /* Global */
    );
    hookFunction(
      "DrawText",
      0 /* Observe */,
      (args, next) => {
        if (!doRedraw())
          return next(args);
        if (isBlack(args[3])) {
          args[3] = color.text;
          args[4] = "";
        } else {
          args[3] = _Color.toDarkMode(args[3], color.mainBackground);
          args[4] = "";
        }
        next(args);
      },
      0 /* Global */
    );
  }
  __name(loadGuiHooks, "loadGuiHooks");

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
    if (!!Player.BCT) {
      BCT_API.HintBackColor = color.elementBackground;
      BCT_API.HintBorderColor = color.elementBorder;
      BCT_API.HintForeColor = color.text;
    }
  }
  __name(changeBctColors, "changeBctColors");
  function resetBctColors() {
    if (!!Player.BCT) {
      BCT_API.HintBackColor = "yellow";
      BCT_API.HintBorderColor = "black";
      BCT_API.HintForeColor = "black";
    }
  }
  __name(resetBctColors, "resetBctColors");

  // src/Base/BaseSetting.ts
  var _GuiSubscreen = class {
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
      this.multipageStructure.forEach((item, ix, arr) => {
        if (ix != PreferencePageCurrent - 1) {
          item.forEach((setting) => {
            if (setting.type == "text" || setting.type == "number" || setting.type == "color")
              this.elementHide(setting.id);
          });
        }
      });
    }
    Load() {
      conDebug(`Loading ${PreferenceSubscreen} GUI`);
      for (const module of modules()) {
        if (!module.settingsScreen)
          continue;
        if (!Object.keys(module.settings).length)
          module.registerDefaultSettings();
      }
      this.multipageStructure.forEach(
        (s) => s.forEach((item) => {
          switch (item.type) {
            case "text":
              let input = ElementCreateInput(item.id, "text", item.setting(), "255");
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
      if (MouseIn(1815, 75, 90, 90))
        return this.Exit();
      if (this.multipageStructure.length > 1)
        PreferencePageChangeClick(1595, 75, this.multipageStructure.length);
      this.structure.forEach((item, ix, arr) => {
        switch (item.type) {
          case "checkbox":
            if (MouseIn(this.getXPos(ix) + 600, this.getYPos(ix) - 32, 64, 64) && !item.disabled) {
              item.setSetting(!item.setting());
            }
            break;
          case "button":
            if (MouseIn(item.position[0], item.position[1], item.size[0], item.size[1]))
              item.callback();
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
      _Color.composeRoot();
      _Style.reloadAll();
      changeModColors();
      _Image.clearCache();
      setSubscreen("MainMenu");
      dataStore();
    }
    Unload() {
    }
    tooltip(text) {
      drawTooltip(300, 850, 1400, text, "left");
    }
    drawCheckbox(label, description, value, order, disabled = false) {
      var isHovering = MouseIn(this.getXPos(order), this.getYPos(order) - 32, 600, 64);
      DrawTextFit(getText(label), this.getXPos(order), this.getYPos(order), 600, isHovering ? "Red" : "Black", "Gray");
      DrawCheckbox(this.getXPos(order) + 600, this.getYPos(order) - 32, 64, 64, "", value ?? false, disabled);
      if (isHovering)
        this.tooltip(getText(description));
    }
    drawBetterButton(position, size, label, color2, image = "", disabled = false) {
      var isHovering = MouseIn(position[0], position[1] - 32, size[0], size[1]);
      DrawButton(position[0], position[1], size[0], size[1], "", color2, "", "", disabled);
      DrawImageResize(image, position[0] + 10, position[1] + 10, 60, 60);
      DrawTextFit(getText(label), position[0] + 80, position[1] + 40, 600, isHovering ? "Red" : "Black", "Gray");
    }
    drawButton(label, color2, order, XOffset, disabled = false) {
      var isHovering = MouseIn(this.getXPos(order) + XOffset, this.getYPos(order) - 32, 200, 64);
      DrawButton(this.getXPos(order) + XOffset, this.getYPos(order) - 32, 200, 64, "", color2, "", "", disabled);
      DrawTextFit(getText(label), this.getXPos(order) + XOffset + 58, this.getYPos(order), 600, isHovering ? "Red" : "Black", "Gray");
    }
    elementHide(elementId) {
      ElementPosition(elementId, -999, -999, 1, 1);
    }
    elementPosition(elementId, label, description, order, disabled = false) {
      var isHovering = MouseIn(this.getXPos(order), this.getYPos(order) - 32, 600, 64);
      DrawTextFit(getText(label), this.getXPos(order), this.getYPos(order), 600, isHovering ? "Red" : "Black", "Gray");
      ElementPosition(elementId, this.getXPos(order) + 750 + 225, this.getYPos(order), 800, 64);
      if (disabled)
        ElementSetAttribute(elementId, "disabled", "true");
      if (!disabled)
        document.getElementById(elementId)?.removeAttribute("disabled");
      if (isHovering)
        this.tooltip(getText(description));
    }
    drawLabel(label, description, order) {
      var isHovering = MouseIn(this.getXPos(order), this.getYPos(order) - 32, 600, 64);
      DrawTextFit(getText(label), this.getXPos(order), this.getYPos(order), 600, isHovering ? "Red" : "Black", "Gray");
      if (isHovering)
        this.tooltip(getText(description));
    }
  };
  var GuiSubscreen = _GuiSubscreen;
  __name(GuiSubscreen, "GuiSubscreen");
  __publicField(GuiSubscreen, "START_X", 180);
  __publicField(GuiSubscreen, "START_Y", 205);
  __publicField(GuiSubscreen, "X_MOD", 950);
  __publicField(GuiSubscreen, "Y_MOD", 75);
  __publicField(GuiSubscreen, "POS_BAK", _GuiSubscreen.START_X);
  __publicField(GuiSubscreen, "TEXT_ALIGN_BAK");
  function drawTooltip(x, y, width, text, align) {
    const canvas = MainCanvas;
    const bak = canvas.textAlign;
    canvas.textAlign = align;
    canvas.beginPath();
    canvas.rect(x, y, width, 65);
    canvas.fillStyle = doRedraw() ? color.elementBackground : "#FFFF88";
    canvas.fillRect(x, y, width, 65);
    canvas.fill();
    canvas.lineWidth = 2;
    canvas.strokeStyle = doRedraw() ? color.elementBorder : "black";
    canvas.stroke();
    canvas.closePath();
    DrawTextFit(text, align === "left" ? x + 3 : x + width / 2, y + 33, width - 6, doRedraw() ? color.text : "black");
    canvas.textAlign = bak;
  }
  __name(drawTooltip, "drawTooltip");

  // src/Screens/Reset.ts
  var GuiReset = class extends GuiSubscreen {
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
      GuiSubscreen.TEXT_ALIGN_BAK = MainCanvas.textAlign;
      GuiSubscreen.START_X = 180;
      MainCanvas.textAlign = "center";
      DrawText(getText(`reset.label.perma_reset_of_mod_data`), 1e3, 125, "Black");
      DrawText(getText(`reset.label.warning`), 1e3, 225, "Black", "Black");
      DrawText(getText(`reset.label.if_u_confirm_perma_reset`), 1e3, 325, "Black");
      DrawText(getText(`reset.label.youll_able_to_use_mod`), 1e3, 550, "Gray");
      DrawText(getText(`reset.label.action_cannot_be_undone`), 1e3, 625, "Red", "Black");
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
      MainCanvas.textAlign = "left";
      MainCanvas.textAlign = GuiSubscreen.TEXT_ALIGN_BAK;
    }
    Click() {
      if (this.allowedConfirmTime === null)
        return;
      if (MouseIn(300, 720, 200, 80) && Date.now() >= this.allowedConfirmTime)
        return this.Confirm();
      if (MouseIn(1520, 720, 200, 80))
        return this.Exit();
    }
    Confirm() {
      this.allowedConfirmTime = null;
      dataErase();
      getModule("ColorsModule").registerDefaultSettings();
      _Color.composeRoot();
      _Style.reloadAll();
      _Image.clearCache();
      this.setSubscreen(null);
    }
  };
  __name(GuiReset, "GuiReset");

  // src/Screens/Support.ts
  var _GuiSupport = class extends GuiSubscreen {
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
      if (!_GuiSupport.thankYouList.length)
        return "";
      if (_GuiSupport.thankYouNext < CommonTime())
        _GuiSupport.doNextThankYou();
      return `${getText("support.other.thankyou")}, ${_GuiSupport.thankYou}`;
    }
    static doNextThankYou() {
      _GuiSupport.thankYou = CommonRandomItemFromList(_GuiSupport.thankYou, _GuiSupport.thankYouList);
      _GuiSupport.thankYouNext = CommonTime() + 4e3;
    }
    Load() {
      _GuiSupport.doNextThankYou();
      ElementCreateDiv("ResponsiveGratitude");
      let elm = document.getElementById("ResponsiveGratitude");
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
      let tmp = GuiSubscreen.START_X;
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
  var GuiSupport = _GuiSupport;
  __name(GuiSupport, "GuiSupport");
  __publicField(GuiSupport, "thankYouList", []);
  __publicField(GuiSupport, "thankYouNext", 0);
  __publicField(GuiSupport, "thankYou", "");
  var gratitudeHtml = `
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
`;

  // src/Screens/MainMenu.ts
  var MainMenu = class extends GuiSubscreen {
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
      let tmp = GuiSubscreen.START_X;
      var prev = MainCanvas.textAlign;
      GuiSubscreen.START_X = 550;
      MainCanvas.textAlign = "left";
      DrawCharacter(Player, 50, 50, 0.9, false);
      DrawText(
        getText("MainMenu.title") + "  " + GuiSupport.getSupporter(),
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
        if (screen.name == "MainMenu")
          continue;
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
      if (MouseIn(1815, 75, 90, 90))
        return this.Exit();
      let tmp = GuiSubscreen.START_X;
      GuiSubscreen.START_X = 550;
      let i = 0;
      for (const screen of this.subscreens) {
        const PX = Math.floor(i / 6);
        const PY = i % 6;
        if (screen.name == "MainMenu")
          continue;
        if (MouseIn(GuiSubscreen.START_X + 430 * PX, 190 + 120 * PY, 450, 90)) {
          this.setSubscreen(screen);
          return;
        }
        i++;
      }
      GuiSubscreen.START_X = tmp;
      if (MouseIn(1500, 730, 405, 80))
        this.setSubscreen(new GuiReset(getModule("GlobalModule")));
      if (MouseIn(1500, 830, 400, 80))
        this.setSubscreen(new GuiSupport(getModule("GlobalModule")));
    }
    Exit() {
      CharacterAppearanceForceUpCharacter = -1;
      CharacterLoadCanvas(Player);
      this.setSubscreen(null);
    }
  };
  __name(MainMenu, "MainMenu");

  // src/Utilities/RibbonMenu.ts
  var _RibbonMenu = class {
    static getYPos(modIndex) {
      return this.START_Y - this.MOD_Y * (modIndex % 6);
    }
    static registerMod(modName) {
      if (!window.RibbonMenuMods)
        window.RibbonMenuMods = [];
      if (window.RibbonMenuMods.length >= 6)
        return console.warn(`${modName} can't be added to Ribbon Menu. Is is full`);
      window.RibbonMenuMods.push(modName);
    }
    static getModIndex(modName) {
      return window.RibbonMenuMods?.indexOf(modName);
    }
    static drawModButton(modIndex, callback) {
      if (PreferenceSubscreen === "" && modIndex !== void 0)
        callback(modIndex);
      return;
    }
    static handleModClick(modIndex, callback) {
      if (PreferenceSubscreen === "" && modIndex !== void 0) {
        if (MouseIn(1815, _RibbonMenu.getYPos(modIndex), 90, 90))
          callback(modIndex);
      }
      return;
    }
  };
  var RibbonMenu = _RibbonMenu;
  __name(RibbonMenu, "RibbonMenu");
  __publicField(RibbonMenu, "START_Y", 820);
  __publicField(RibbonMenu, "MOD_Y", 110);

  // src/Base/BaseModule.ts
  var BaseModule = class {
    get settingsScreen() {
      return null;
    }
    get settingsStorage() {
      return this.constructor.name;
    }
    get settings() {
      if (!this.settingsStorage)
        return {};
      if (!Player.Themed) {
        Player.Themed = {};
        this.registerDefaultSettings();
      } else if (!Player.Themed[this.settingsStorage])
        this.registerDefaultSettings();
      return Player.Themed[this.settingsStorage];
    }
    get enabled() {
      if (!Player?.Themed?.GlobalModule)
        return false;
      return Player.Themed.GlobalModule.themedEnabled && this.settings.themedEnabled && (ServerPlayerIsInChatRoom() || CurrentModule == "Room" && CurrentScreen == "Crafting");
    }
    Init() {
      this.registerDefaultSettings();
    }
    registerDefaultSettings() {
      const storage = this.settingsStorage;
      const defaults = this.defaultSettings;
      if (!storage || !defaults)
        return;
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
  __name(BaseModule, "BaseModule");

  // src/Static/Icons/IconThemed.png
  var IconThemed_default = "data:image/png;base64,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";

  // src/Base/SettingUtils.ts
  var _GUI = class extends BaseModule {
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
        if (!scr)
          throw `Failed to find screen name ${subscreen}`;
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
        if (!module.settingsScreen)
          continue;
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
        RibbonMenu.drawModButton(modIndex, (modIndex2) => {
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
  var GUI = _GUI;
  __name(GUI, "GUI");
  __publicField(GUI, "instance", null);

  // src/Screens/Colors.ts
  var GuiColors = class extends GuiSubscreen {
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
            label: "settings.setting.primaryColor.name",
            description: "settings.setting.primaryColor.desc",
            setting: () => this.settings?.primaryColor ?? "",
            setSetting: (val) => this.settings.primaryColor = val
          },
          {
            type: "color",
            id: "accentColor",
            label: "settings.setting.accentColor.name",
            description: "settings.setting.accentColor.desc",
            setting: () => this.settings?.accentColor ?? "",
            setSetting: (val) => this.settings.accentColor = val
          },
          {
            type: "color",
            id: "textColor",
            label: "settings.setting.textColor.name",
            description: "settings.setting.textColor.desc",
            setting: () => this.settings?.textColor ?? "",
            setSetting: (val) => this.settings.textColor = val
          }
        ]
      ];
    }
    Load() {
      super.Load();
    }
  };
  __name(GuiColors, "GuiColors");

  // src/Modules/Colors.ts
  var ColorsModule = class extends BaseModule {
    get settingsScreen() {
      return GuiColors;
    }
    get settings() {
      return super.settings;
    }
    get defaultSettings() {
      return {
        primaryColor: "#202020",
        accentColor: "#440171",
        textColor: "#ccc"
      };
    }
    Load() {
    }
    Run() {
    }
  };
  __name(ColorsModule, "ColorsModule");

  // src/Screens/Global.ts
  var GuiGlobal = class extends GuiSubscreen {
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
      return [
        {
          type: "checkbox",
          label: "settings.setting.themedEnabled.name",
          description: "settings.setting.themedEnabled.desc",
          setting: () => this.settings?.themedEnabled ?? true,
          setSetting: (val) => this.settings.themedEnabled = val
        },
        {
          type: "checkbox",
          label: "settings.setting.doVanillaGuiOverhaul.name",
          description: "settings.setting.doVanillaGuiOverhaul.desc",
          setting: () => this.settings?.doVanillaGuiOverhaul ?? true,
          setSetting: (val) => this.settings.doVanillaGuiOverhaul = val
        },
        {
          type: "checkbox",
          label: "settings.setting.doShowLocaleTime.name",
          description: "settings.setting.doShowLocaleTime.desc",
          setting: () => this.settings?.doShowLocaleTime ?? true,
          setSetting: (val) => this.settings.doShowLocaleTime = val
        },
        {
          type: "checkbox",
          label: "settings.setting.doShowNewVersionMessage.name",
          description: "settings.setting.doShowNewVersionMessage.desc",
          setting: () => this.settings?.doShowNewVersionMessage ?? true,
          setSetting: (val) => this.settings.doShowNewVersionMessage = val
        }
      ];
    }
    Load() {
      super.Load();
    }
  };
  __name(GuiGlobal, "GuiGlobal");

  // src/Utilities/Other.ts
  function sendLocalSmart(id, message, timeoutInSeconds) {
    const div = document.createElement("div");
    div.id = id;
    div.setAttribute("class", "ChatMessage ThemedMessage");
    div.setAttribute("data-time", ChatRoomCurrentTime());
    div.setAttribute("data-sender", Player?.MemberNumber + "");
    div.innerHTML = message.replaceAll("\n	", "") + `<br><a class="ThemedText" onClick='document.getElementById("${id}").remove();'><b>Close (Click)</b></a>`;
    ChatRoomAppendChat(div);
    if (!timeoutInSeconds)
      return;
    setTimeout(() => div?.remove(), timeoutInSeconds * 1e3);
  }
  __name(sendLocalSmart, "sendLocalSmart");

  // src/Static/HTML/Changelog.html
  var Changelog_default = '<div class="ThemedMessageContent">\n    <b style="color:#690092; text-shadow: 0.05em 0.05em #440171;">Themed BC: </b>\n    <b>New Version! [0.2.0]</b><br>\n    <br>\n    <b style="color:#CC3232; text-shadow: 0.05em 0.05em #920009;">Please, reload your page~</b>\n    <br>\n\n    <br><b class="ThemedVersion">0.2.0</b>\n    <br>\u2022 Added actual icon! All thanks to the Toy~\n    <br>\u2022 Changed storage to new Extension Storage thingie.\n    <br>\u2022 Split BC "integration" into more settings.\n    <br>\u2022 Now colors are selectable in easy way with color picker^^\n    <br>\u2022 Filter out some more icons.<br>\n\n    <br><b class="ThemedVersion">0.1.0</b>\n    <br>\u2022 Added "integration" with BC and common used mods (CSS Stylization).\n    <br>\u2022 Added BC basic elements colorization.\n    <br>\u2022 Added settings.\n    <br>\u2022 Setting to show locale time like 4:00 PM or 16:00 depending on your system settings.<br>\n</div>\n\n<!--\n    \n    <br><b class="ThemedVersion">0.0.0</b>\n    <br>\u2022 <br>\n-->\n';

  // src/Utilities/Commands.ts
  function loadCommands() {
    CommandCombine([
      {
        Tag: "reloadstyles",
        Action: () => {
          _Style.reloadAll();
        }
      },
      {
        Tag: "ejectall",
        Action: () => {
          _Style.ejectAll();
        }
      },
      {
        Tag: "injectall",
        Action: () => {
          _Style.injectAll();
        }
      }
    ]);
  }
  __name(loadCommands, "loadCommands");

  // src/Modules/Global.ts
  var _GlobalModule = class extends BaseModule {
    get settingsScreen() {
      return GuiGlobal;
    }
    get settings() {
      return super.settings;
    }
    get defaultSettings() {
      return {
        themedEnabled: true,
        doVanillaGuiOverhaul: true,
        doUseChatSpecialStyling: true,
        doShowLocaleTime: true,
        doShowNewVersionMessage: true
      };
    }
    Load() {
      loadCommands();
      loadGuiHooks();
      changeModColors();
      hookFunction(
        "ChatRoomSync",
        0 /* Observe */,
        (args, next) => {
          next(args);
          _Style.reloadAll();
          _GlobalModule.sendNewVersionMessage();
        },
        0 /* Global */
      );
      hookFunction(
        "ChatRoomCurrentTime",
        0 /* Observe */,
        (args, next) => {
          if (!this.settings.doShowLocaleTime)
            return next(args);
          const currentTime = new Date(Date.now());
          return currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        },
        0 /* Global */
      );
    }
    Run() {
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
      if (PlayerStorage().GlobalModule.doShowNewVersionMessage && _GlobalModule.isItNewVersion) {
        sendLocalSmart("ResponsiveNewVersion", Changelog_default);
      }
    }
    static saveVersion() {
      if (PlayerStorage()) {
        PlayerStorage().Version = ModVersion;
      }
    }
    static loadVersion() {
      if (PlayerStorage()?.Version) {
        return PlayerStorage().Version;
      }
      return;
    }
    static checkIfNewVersion() {
      let LoadedVersion = _GlobalModule.loadVersion();
      if (_GlobalModule.isNewVersion(LoadedVersion, ModVersion)) {
        _GlobalModule.isItNewVersion = true;
      }
      _GlobalModule.saveVersion();
    }
  };
  var GlobalModule = _GlobalModule;
  __name(GlobalModule, "GlobalModule");
  __publicField(GlobalModule, "isItNewVersion", false);
  __publicField(GlobalModule, "isOrgasm_CT", false);
  __publicField(GlobalModule, "doAnimate_CT", true);

  // src/Screens/Integration.ts
  var GuiIntegration = class extends GuiSubscreen {
    get name() {
      return "Integration";
    }
    get icon() {
      return "Icons/Preference.png";
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
          setting: () => this.settings?.BC ?? true,
          setSetting: (val) => this.settings.BC = val
        },
        {
          type: "checkbox",
          label: "integration.setting.BC_Chat.name",
          description: "integration.setting.BC_Chat.desc",
          setting: () => this.settings?.BC_Chat ?? true,
          setSetting: (val) => this.settings.BC_Chat = val
        },
        {
          type: "checkbox",
          label: "integration.setting.BC_FriendList.name",
          description: "integration.setting.BC_FriendList.desc",
          setting: () => this.settings?.BC_FriendList ?? true,
          setSetting: (val) => this.settings.BC_FriendList = val
        },
        {
          type: "checkbox",
          label: "integration.setting.BC_Other.name",
          description: "integration.setting.BC_Other.desc",
          setting: () => this.settings?.BC_Other ?? true,
          setSetting: (val) => this.settings.BC_Other = val
        },
        {
          type: "checkbox",
          label: "integration.setting.FBC.name",
          description: "integration.setting.FBC.desc",
          setting: () => this.settings?.FBC ?? true,
          setSetting: (val) => this.settings.FBC = val
        },
        {
          type: "checkbox",
          label: "integration.setting.FUSAM.name",
          description: "integration.setting.FUSAM.desc",
          setting: () => this.settings?.FUSAM ?? true,
          setSetting: (val) => this.settings.FUSAM = val
        },
        {
          type: "checkbox",
          label: "integration.setting.TTS.name",
          description: "integration.setting.TTS.desc",
          setting: () => this.settings?.TTS ?? true,
          setSetting: (val) => this.settings.TTS = val
        }
      ];
    }
    Load() {
      super.Load();
    }
  };
  __name(GuiIntegration, "GuiIntegration");

  // src/Modules/Integration.ts
  var IntegrationModule = class extends BaseModule {
    get settingsScreen() {
      return GuiIntegration;
    }
    get settings() {
      return super.settings;
    }
    get defaultSettings() {
      return {
        BC: true,
        BC_Chat: true,
        BC_FriendList: true,
        BC_Other: true,
        FBC: true,
        FUSAM: true,
        TTS: true
      };
    }
    Load() {
    }
    Run() {
    }
  };
  __name(IntegrationModule, "IntegrationModule");

  // src/Themed.ts
  function initWait() {
    conLog("Init wait");
    if (CurrentScreen == null || CurrentScreen === "Login") {
      hookFunction("LoginResponse", 0, (args, next) => {
        conDebug(`Init! LoginResponse caught: `, args);
        next(args);
        const response = args[0];
        if (response && typeof response.Name === "string" && typeof response.AccountName === "string") {
          init();
        }
      });
    } else {
      conLog(`Already logged in, init`);
      init();
    }
  }
  __name(initWait, "initWait");
  function init() {
    if (window.ThemedLoaded)
      return;
    RibbonMenu.registerMod(ModName);
    dataTake();
    if (!initModules()) {
      unload();
      return;
    }
    GlobalModule.checkIfNewVersion();
    dataStore();
    _Color.composeRoot();
    _Style.injectAll();
    window.ThemedLoaded = true;
    conLog(`Loaded! Version: ${ModVersion}`);
  }
  __name(init, "init");
  function initModules() {
    registerModule(new GUI());
    registerModule(new GlobalModule());
    registerModule(new ColorsModule());
    registerModule(new IntegrationModule());
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
