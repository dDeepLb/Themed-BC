"use strict";
var Themed = (() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // node_modules/.pnpm/bc-deeplib@2.0.0_sass-embedded@1.90.0/node_modules/bc-deeplib/dist/deeplib.js
  var __create = Object.create;
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
  var __commonJS = /* @__PURE__ */ __name((cb, mod) => /* @__PURE__ */ __name(function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  }, "__require"), "__commonJS");
  var __copyProps = /* @__PURE__ */ __name((to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  }, "__copyProps");
  var __toESM = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
    mod
  )), "__toESM");
  var require_bcmodsdk = __commonJS({
    "node_modules/.pnpm/bondage-club-mod-sdk@1.2.0/node_modules/bondage-club-mod-sdk/dist/bcmodsdk.js"(exports) {
      var bcModSdk = (function() {
        "use strict";
        const o = "1.2.0";
        function e(o2) {
          alert("Mod ERROR:\n" + o2);
          const e2 = new Error(o2);
          throw console.error(e2), e2;
        }
        __name(e, "e");
        __name2(e, "e");
        const t = new TextEncoder();
        function n(o2) {
          return !!o2 && "object" == typeof o2 && !Array.isArray(o2);
        }
        __name(n, "n");
        __name2(n, "n");
        function r(o2) {
          const e2 = /* @__PURE__ */ new Set();
          return o2.filter(((o3) => !e2.has(o3) && e2.add(o3)));
        }
        __name(r, "r");
        __name2(r, "r");
        const i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
        function c(o2) {
          a.has(o2) || (a.add(o2), console.warn(o2));
        }
        __name(c, "c");
        __name2(c, "c");
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
          e2.sort(((o3, e3) => e3.priority - o3.priority));
          const r2 = (function(o3, e3) {
            if (0 === e3.size) return o3;
            let t3 = o3.toString().replaceAll("\r\n", "\n");
            for (const [n3, r3] of e3.entries()) t3.includes(n3) || c(`ModSDK: Patching ${o3.name}: Patch ${n3} not applied`), t3 = t3.replaceAll(n3, r3);
            return (0, eval)(`(${t3})`);
          })(o2.original, t2);
          let i2 = /* @__PURE__ */ __name2(function(e3) {
            var t3, i3;
            const a2 = null === (i3 = (t3 = m.errorReporterHooks).hookChainExit) || void 0 === i3 ? void 0 : i3.call(t3, o2.name, n2), c2 = r2.apply(this, e3);
            return null == a2 || a2(), c2;
          }, "i");
          for (let t3 = e2.length - 1; t3 >= 0; t3--) {
            const n3 = e2[t3], r3 = i2;
            i2 = /* @__PURE__ */ __name2(function(e3) {
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
        __name2(s, "s");
        function l(o2, e2 = false) {
          let r2 = i.get(o2);
          if (r2) e2 && (r2.precomputed = s(r2));
          else {
            let e3 = window;
            const a2 = o2.split(".");
            for (let t2 = 0; t2 < a2.length - 1; t2++) if (e3 = e3[a2[t2]], !n(e3)) throw new Error(`ModSDK: Function ${o2} to be patched not found; ${a2.slice(0, t2 + 1).join(".")} is not object`);
            const c2 = e3[a2[a2.length - 1]];
            if ("function" != typeof c2) throw new Error(`ModSDK: Function ${o2} to be patched not found`);
            const l2 = (function(o3) {
              let e4 = -1;
              for (const n2 of t.encode(o3)) {
                let o4 = 255 & (e4 ^ n2);
                for (let e5 = 0; e5 < 8; e5++) o4 = 1 & o4 ? -306674912 ^ o4 >>> 1 : o4 >>> 1;
                e4 = e4 >>> 8 ^ o4;
              }
              return ((-1 ^ e4) >>> 0).toString(16).padStart(8, "0").toUpperCase();
            })(c2.toString().replaceAll("\r\n", "\n")), d2 = { name: o2, original: c2, originalHash: l2 };
            r2 = Object.assign(Object.assign({}, d2), { precomputed: s(d2), router: /* @__PURE__ */ __name2(() => {
            }, "router"), context: e3, contextProperty: a2[a2.length - 1] }), r2.router = /* @__PURE__ */ (function(o3) {
              return function(...e4) {
                return o3.precomputed.enter.apply(this, [e4]);
              };
            })(r2), i.set(o2, r2), e3[r2.contextProperty] = r2.router;
          }
          return r2;
        }
        __name(l, "l");
        __name2(l, "l");
        function d() {
          for (const o2 of i.values()) o2.precomputed = s(o2);
        }
        __name(d, "d");
        __name2(d, "d");
        function p() {
          const o2 = /* @__PURE__ */ new Map();
          for (const [e2, t2] of i) o2.set(e2, { name: e2, original: t2.original, originalHash: t2.originalHash, sdkEntrypoint: t2.router, currentEntrypoint: t2.context[t2.contextProperty], hookedByMods: r(t2.precomputed.hooks.map(((o3) => o3.mod))), patchedByMods: Array.from(t2.precomputed.patchesSources) });
          return o2;
        }
        __name(p, "p");
        __name2(p, "p");
        const f = /* @__PURE__ */ new Map();
        function u(o2) {
          f.get(o2.name) !== o2 && e(`Failed to unload mod '${o2.name}': Not registered`), f.delete(o2.name), o2.loaded = false, d();
        }
        __name(u, "u");
        __name2(u, "u");
        function g(o2, t2) {
          o2 && "object" == typeof o2 || e("Failed to register mod: Expected info object, got " + typeof o2), "string" == typeof o2.name && o2.name || e("Failed to register mod: Expected name to be non-empty string, got " + typeof o2.name);
          let r2 = `'${o2.name}'`;
          "string" == typeof o2.fullName && o2.fullName || e(`Failed to register mod ${r2}: Expected fullName to be non-empty string, got ${typeof o2.fullName}`), r2 = `'${o2.fullName} (${o2.name})'`, "string" != typeof o2.version && e(`Failed to register mod ${r2}: Expected version to be string, got ${typeof o2.version}`), o2.repository || (o2.repository = void 0), void 0 !== o2.repository && "string" != typeof o2.repository && e(`Failed to register mod ${r2}: Expected repository to be undefined or string, got ${typeof o2.version}`), null == t2 && (t2 = {}), t2 && "object" == typeof t2 || e(`Failed to register mod ${r2}: Expected options to be undefined or object, got ${typeof t2}`);
          const i2 = true === t2.allowReplace, a2 = f.get(o2.name);
          a2 && (a2.allowReplace && i2 || e(`Refusing to load mod ${r2}: it is already loaded and doesn't allow being replaced.
Was the mod loaded multiple times?`), u(a2));
          const c2 = /* @__PURE__ */ __name2((o3) => {
            let e2 = g2.patching.get(o3.name);
            return e2 || (e2 = { hooks: [], patches: /* @__PURE__ */ new Map() }, g2.patching.set(o3.name, e2)), e2;
          }, "c"), s2 = /* @__PURE__ */ __name2((o3, t3) => (...n2) => {
            var i3, a3;
            const c3 = null === (a3 = (i3 = m.errorReporterHooks).apiEndpointEnter) || void 0 === a3 ? void 0 : a3.call(i3, o3, g2.name);
            g2.loaded || e(`Mod ${r2} attempted to call SDK function after being unloaded`);
            const s3 = t3(...n2);
            return null == c3 || c3(), s3;
          }, "s"), p2 = { unload: s2("unload", (() => u(g2))), hookFunction: s2("hookFunction", ((o3, t3, n2) => {
            "string" == typeof o3 && o3 || e(`Mod ${r2} failed to patch a function: Expected function name string, got ${typeof o3}`);
            const i3 = l(o3), a3 = c2(i3);
            "number" != typeof t3 && e(`Mod ${r2} failed to hook function '${o3}': Expected priority number, got ${typeof t3}`), "function" != typeof n2 && e(`Mod ${r2} failed to hook function '${o3}': Expected hook function, got ${typeof n2}`);
            const s3 = { mod: g2.name, priority: t3, hook: n2 };
            return a3.hooks.push(s3), d(), () => {
              const o4 = a3.hooks.indexOf(s3);
              o4 >= 0 && (a3.hooks.splice(o4, 1), d());
            };
          })), patchFunction: s2("patchFunction", ((o3, t3) => {
            "string" == typeof o3 && o3 || e(`Mod ${r2} failed to patch a function: Expected function name string, got ${typeof o3}`);
            const i3 = l(o3), a3 = c2(i3);
            n(t3) || e(`Mod ${r2} failed to patch function '${o3}': Expected patches object, got ${typeof t3}`);
            for (const [n2, i4] of Object.entries(t3)) "string" == typeof i4 ? a3.patches.set(n2, i4) : null === i4 ? a3.patches.delete(n2) : e(`Mod ${r2} failed to patch function '${o3}': Invalid format of patch '${n2}'`);
            d();
          })), removePatches: s2("removePatches", ((o3) => {
            "string" == typeof o3 && o3 || e(`Mod ${r2} failed to patch a function: Expected function name string, got ${typeof o3}`);
            const t3 = l(o3);
            c2(t3).patches.clear(), d();
          })), callOriginal: s2("callOriginal", ((o3, t3, n2) => {
            "string" == typeof o3 && o3 || e(`Mod ${r2} failed to call a function: Expected function name string, got ${typeof o3}`);
            const i3 = l(o3);
            return Array.isArray(t3) || e(`Mod ${r2} failed to call a function: Expected args array, got ${typeof t3}`), i3.original.apply(null != n2 ? n2 : globalThis, t3);
          })), getOriginalHash: s2("getOriginalHash", ((o3) => {
            "string" == typeof o3 && o3 || e(`Mod ${r2} failed to get hash: Expected function name string, got ${typeof o3}`);
            return l(o3).originalHash;
          })) }, g2 = { name: o2.name, fullName: o2.fullName, version: o2.version, repository: o2.repository, allowReplace: i2, api: p2, loaded: true, patching: /* @__PURE__ */ new Map() };
          return f.set(o2.name, g2), Object.freeze(p2);
        }
        __name(g, "g");
        __name2(g, "g");
        function h() {
          const o2 = [];
          for (const e2 of f.values()) o2.push({ name: e2.name, fullName: e2.fullName, version: e2.version, repository: e2.repository });
          return o2;
        }
        __name(h, "h");
        __name2(h, "h");
        let m;
        const y = void 0 === window.bcModSdk ? window.bcModSdk = (function() {
          const e2 = { version: o, apiVersion: 1, registerMod: g, getModsInfo: h, getPatchingInfo: p, errorReporterHooks: Object.seal({ apiEndpointEnter: null, hookEnter: null, hookChainExit: null }) };
          return m = e2, Object.freeze(e2);
        })() : (n(window.bcModSdk) || e("Failed to init Mod SDK: Name already in use"), 1 !== window.bcModSdk.apiVersion && e(`Failed to init Mod SDK: Different version already loaded ('1.2.0' vs '${window.bcModSdk.version}')`), window.bcModSdk.version !== o && alert(`Mod SDK warning: Loading different but compatible versions ('1.2.0' vs '${window.bcModSdk.version}')
One of mods you are using is using an old version of SDK. It will work for now but please inform author to update`), window.bcModSdk);
        return "undefined" != typeof exports && (Object.defineProperty(exports, "__esModule", { value: true }), exports.default = y), y;
      })();
    }
  });
  var _a;
  var BaseModule = (_a = class {
    /**
     * An optional UI screen for configuring this module's settings.
     * Subclasses can override this getter to provide a `Subscreen` instance.
     * Modules with screens are automatically registered to the main menu.
     */
    get settingsScreen() {
      return null;
    }
    /**
     * The storage key under which this module's settings will be saved.
     * Defaults to the class name.
     *
     * Subclasses can override this if they require a custom storage key.
     */
    get settingsStorage() {
      return this.constructor.name;
    }
    /**
     * Retrieves the current settings for this module.
     * If no settings exist yet, registers default settings first.
     */
    get settings() {
      const modName = ModSdkManager.ModInfo.name;
      if (!this.settingsStorage) return {};
      if (!modStorage.playerStorage) {
        Player[modName] = {};
        this.registerDefaultSettings();
      } else if (!modStorage.playerStorage[this.settingsStorage]) this.registerDefaultSettings();
      return modStorage.playerStorage[this.settingsStorage];
    }
    /**
     * Persists new settings for this module.
     * Automatically initializes storage and defaults if they don't exist.
     */
    set settings(value) {
      const modName = ModSdkManager.ModInfo.name;
      const storage = new ModStorage(modName);
      if (!this.settingsStorage) return;
      if (!storage.playerStorage) {
        Player[modName] = {};
        this.registerDefaultSettings();
      } else if (!storage.playerStorage[this.settingsStorage]) this.registerDefaultSettings();
      storage.playerStorage[this.settingsStorage] = value;
    }
    /**
     * Initializes the module.
     * Default implementation registers default settings immediately.
     * Subclasses can override to perform additional setup.
     */
    init() {
      this.registerDefaultSettings();
    }
    /**
     * Registers default settings for this module in persistent storage.
     * Only runs if a storage key and default settings are defined.
     * 
     * If some settings already exist, they will be merged with defaults.
     * Existing values will NOT be overwritten.
     */
    registerDefaultSettings() {
      const storage = this.settingsStorage;
      const defaults = this.defaultSettings;
      if (!storage || !defaults) return;
      Player[ModSdkManager.ModInfo.name][storage] = Object.assign(defaults, Player[ModSdkManager.ModInfo.name][storage] ?? {});
    }
    /**
     * Provides default settings for this module.
     * Subclasses should override this getter to return their defaults.
     */
    get defaultSettings() {
      return null;
    }
    /**
     * Called when the module is loaded into the system.
     * Subclasses should override to perform data loading or initialization.
     */
    load() {
    }
    /**
     * By default doesn't get called each frame, only once when the module is loaded.
     * Subclasses can override to implement runtime logic.
     */
    run() {
    }
    /**
     * Called when the module is being removed.
     * Subclasses can override to perform cleanup or save final state.
     */
    unload() {
    }
  }, __name(_a, "BaseModule"), __name2(_a, "BaseModule"), _a);
  async function setSubscreen(subscreen) {
    if (!GUI.instance) {
      throw new Error("Attempt to set subscreen before init");
    }
    const screenName = typeof subscreen === "string" ? subscreen : subscreen?.options.name;
    const screenId = `${BaseSubscreen.id}_${screenName}`;
    await CommonSetScreen(...["DeepLibMod", `${screenId}`]);
  }
  __name(setSubscreen, "setSubscreen");
  __name2(setSubscreen, "setSubscreen");
  var _a2;
  var BaseSubscreen = (_a2 = class {
    constructor(module) {
      /** Runtime options for this subscreen. */
      __publicField(this, "options");
      /** Reference to the module this subscreen belongs to. */
      __publicField(this, "module");
      if (module) this.module = module;
      const ctor = this.constructor;
      this.options = {
        ..._a2.subscreenOptions,
        ...ctor.subscreenOptions
      };
      const screenName = this.options.name;
      const screenId = `${_a2.id}_${screenName}`;
      exportToGlobal(`${screenId}Load`, this.load.bind(this));
      exportToGlobal(`${screenId}Run`, this.run.bind(this));
      exportToGlobal(`${screenId}Click`, this.click.bind(this));
      exportToGlobal(`${screenId}Exit`, this.exit.bind(this));
      exportToGlobal(`${screenId}Unload`, this.unload.bind(this));
      exportToGlobal(`${screenId}Resize`, this.resize.bind(this));
      exportToGlobal(`${screenId}Background`, this.options.background);
      CommonCSVCache[ScreenFileGetTranslation("DeepLibMod", screenId)] = [];
    }
    /** Changes the currently active subscreen. */
    async setSubscreen(screen) {
      return await setSubscreen(screen);
    }
    /** Gets this subscreen's settings object from its parent module. */
    get settings() {
      return this.module.settings;
    }
    /** Updates this subscreen's settings in its parent module. */
    set settings(value) {
      this.module.settings = value;
    }
    /**
     * Defines the paginated layout of the subscreen's settings UI.
     * Each element in the outer array is a page; each page contains `SettingElement`s.
     *
     * Subclasses should override to define their actual UI structure.
     */
    get pageStructure() {
      return [[]];
    }
    /** Gets the currently visible page's settings elements. */
    get currentPage() {
      return this.pageStructure[Math.min(_a2.currentPage - 1, this.pageStructure.length - 1)];
    }
    getPageLabel() {
      return CommonStringPartitionReplace(getText("settings.page.label"), {
        $currentPage$: `${_a2.currentPage}`,
        $totalPages$: `${this.pageStructure.length}`
      }).join("");
    }
    /**
     * Changes the visible page in a multi-page subscreen.
     * Automatically wraps around when going past the first or last page.
     */
    changePage(page, setLabel) {
      const totalPages = this.pageStructure.length;
      if (page > totalPages) page = 1;
      if (page < 1) page = totalPages;
      _a2.currentPage = page;
      this.managePageElementsVisibility();
      setLabel(this.getPageLabel());
    }
    /**
     * Updates the DOM to show only elements belonging to the current page.
     * All elements on other pages are hidden.
     */
    managePageElementsVisibility() {
      this.pageStructure.forEach((item, ix) => {
        if (ix != _a2.currentPage - 1) {
          item.forEach((setting) => {
            domUtil.hide(`${setting.id}-container`);
          });
        } else {
          item.forEach((setting) => {
            domUtil.unhide(`${setting.id}-container`);
          });
        }
      });
    }
    /**
     * Called when this subscreen is first displayed.
     * Builds the layout, initializes navigation, and renders all settings elements.
     *
     * Handles:
     *  - Ensuring each module with a settings screen has its defaults loaded
     *  - Creating navigation menus and back/next page controls
     *  - Building and appending UI elements based on `pageStructure`
     *  - Setting up exit button and tooltip
     *  - Resetting to page 1
     */
    load() {
      var _a15, _b;
      for (const module of modules()) {
        if (!module.settingsScreen) continue;
        if (!module.settings || !Object.keys(module.settings).length) module.registerDefaultSettings();
      }
      _a2.currentPage = 1;
      layout.getSubscreen();
      const settingsElement = layout.getSettingsDiv();
      layout.appendToSubscreen(settingsElement);
      const menu = ElementMenu.Create("deeplib-nav-menu", []);
      layout.appendToSubscreen(menu);
      if (this.pageStructure.length > 1) {
        const backNext = advElement.createBackNext({
          id: "deeplib-page-back-next",
          next: /* @__PURE__ */ __name2(({ setLabel }) => this.changePage(_a2.currentPage + 1, setLabel), "next"),
          initialNextTooltip: getText("settings.button.next_button_hint"),
          back: /* @__PURE__ */ __name2(({ setLabel }) => this.changePage(_a2.currentPage - 1, setLabel), "back"),
          initialPrevTooltip: getText("settings.button.prev_button_hint"),
          initialLabel: this.getPageLabel()
        });
        ElementMenu.PrependItem(menu, backNext);
      }
      if (this.options.help) {
        const onClick = this.options.help.onClick;
        let action = /* @__PURE__ */ __name2(() => {
        }, "action");
        if (typeof onClick === "string" || onClick instanceof URL) {
          action = /* @__PURE__ */ __name2(() => window.open(onClick, "_blank"), "action");
        } else if (typeof onClick === "function") {
          action = onClick;
        } else if (onClick instanceof _a2) {
          action = /* @__PURE__ */ __name2(async () => await this.setSubscreen(onClick), "action");
        }
        (_a15 = this.options.help).tooltip ?? (_a15.tooltip = getText("settings.button.help_button_hint"));
        (_b = this.options.help).icon ?? (_b.icon = `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/dl_images/bookmark.svg`);
        const helpButton = advElement.createButton({
          id: "deeplib-help",
          size: [90, 90],
          onClick: action,
          options: {
            image: this.options.help.icon,
            tooltip: this.options.help.tooltip
          }
        });
        ElementMenu.AppendButton(menu, helpButton);
      }
      const subscreenTitle = advElement.createLabel({
        id: "deeplib-subscreen-title",
        label: getText(`${this.options.name}.title`).replace("$ModVersion", ModSdkManager.ModInfo.version)
      });
      layout.appendToSubscreen(subscreenTitle);
      if (this.options.name !== "mainmenu") {
        const exitButton = advElement.createButton({
          id: "deeplib-exit",
          size: [90, 90],
          onClick: /* @__PURE__ */ __name2(() => {
            this.exit();
          }, "onClick"),
          options: {
            image: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/dl_images/exit.svg`,
            tooltip: getText("settings.button.back_button_hint")
          }
        });
        ElementMenu.AppendButton(menu, exitButton);
      }
      const tooltip = advElement.createTooltip();
      layout.appendToSubscreen(tooltip);
      this.pageStructure.forEach(
        (s) => s.forEach((item) => {
          let element;
          switch (item.type) {
            case "text":
            case "number":
            case "color":
              element = advElement.createInput(item);
              break;
            case "checkbox":
              element = advElement.createCheckbox(item);
              break;
            case "button":
              element = advElement.createButton(item);
              break;
            case "label":
              element = advElement.createLabel(item);
              break;
            case "custom":
              element = advElement.createCustom(item);
              break;
          }
          layout.appendToSettingsDiv(element);
        })
      );
      this.managePageElementsVisibility();
      CharacterAppearanceForceUpCharacter = Player.MemberNumber ?? -1;
    }
    /**
     * Called each frame while this subscreen is active.
     * Default behavior draws the player's character if `drawCharacter` is enabled.
     */
    run() {
      if (this.options.drawCharacter) DrawCharacter(Player, 50, 50, 0.9, false);
    }
    /**
     * Handles mouse clicks *on canvas* while the subscreen is active.
     * Default implementation is empty — subclasses may override.
     */
    click() {
    }
    /**
     * Exits this subscreen, returning to the main menu.
     * Also saves persistent storage changes.
     * Called after the `unload`.
     */
    exit() {
      CharacterAppearanceForceUpCharacter = -1;
      CharacterLoadCanvas(Player);
      const returnScreen = typeof this.options.returnScreen === "function" ? this.options.returnScreen() : this.options.returnScreen;
      if (returnScreen instanceof _a2 || !returnScreen) {
        setSubscreen(returnScreen ?? "mainmenu").then(() => {
          modStorage.save();
        });
      } else if (Array.isArray(returnScreen)) {
        CommonSetScreen(...returnScreen).then(() => {
          modStorage.save();
        });
      }
    }
    /**
     * Called when the window is resized.
     * Also checks for overflow in the settings div and applies styling accordingly.
     */
    resize(_onLoad = false) {
      const offset = this.options.drawCharacter ? 0 : 380;
      const subscreen = layout.getSubscreen();
      const settingsDiv = layout.getSettingsDiv();
      ElementSetPosition(subscreen || "", 0, 0);
      ElementSetSize(subscreen || "", 2e3, 1e3);
      ElementSetFontSize(subscreen || "", "auto");
      if (this.options.name === "mainmenu") {
        ElementSetPosition(settingsDiv || "", 530 - offset, 170);
        ElementSetSize(settingsDiv || "", 600 + offset, 660);
      } else {
        ElementSetPosition(settingsDiv || "", 530 - offset, 170);
        ElementSetSize(settingsDiv || "", 1e3 + offset, 660);
      }
      ElementSetPosition("deeplib-subscreen-title", 530 - offset, 75);
      ElementSetSize("deeplib-subscreen-title", 800, 60);
      ElementSetPosition("deeplib-nav-menu", 1905, 75, "top-right");
      ElementSetSize("deeplib-nav-menu", null, 90);
      ElementSetPosition(advElement.getTooltip() || "", 250, 850);
      ElementSetSize(advElement.getTooltip() || "", 1500, 70);
      _a2.currentElements.forEach((item) => {
        const element = item[0];
        const options2 = item[1];
        domUtil.autoSetPosition(options2.id ?? element.id, options2.position);
        domUtil.autoSetSize(options2.id ?? element.id, options2.size);
      });
      if (settingsDiv) {
        if (domUtil.hasOverflow(settingsDiv)?.vertical) {
          settingsDiv.classList.add("deeplib-overflow-box");
        } else {
          settingsDiv.classList.remove("deeplib-overflow-box");
        }
      }
    }
    /**
     * Called when this subscreen is being removed.
     * Resets the static element registry and removes the subscreen from the layout.
     * Called before `exit`.
     */
    unload() {
      _a2.currentElements = [];
      layout.removeSubscreen();
    }
  }, __name(_a2, "_BaseSubscreen"), __name2(_a2, "BaseSubscreen"), /** Global registry of currently rendered elements and their definitions. */
  __publicField(_a2, "currentElements", []), /** Tracks the currently visible page number (1-based index). */
  __publicField(_a2, "currentPage", 1), /** Identifier for internal use to avoid screen name collisions. */
  __publicField(_a2, "id", CommonGenerateUniqueID()), /** Optional configuration flags for a BaseSubscreen instance. */
  __publicField(_a2, "subscreenOptions", {
    drawCharacter: true,
    name: "UNKNOWN",
    icon: "",
    background: "Sheet"
  }), _a2);
  var styles_default = `.deeplib-subscreen,
.deeplib-modal {
  --deeplib-background-color: var(--tmd-main, white);
  --deeplib-element-color: var(--tmd-element, white);
  --deeplib-element-hover-color: var(--tmd-element-hover, cyan);
  --deeplib-accent-color: var(--tmd-accent, #FFFF88);
  --deeplib-blocked-color: var(--tmd-blocked, red);
  --deeplib-text-color: var(--tmd-text, black);
  --deeplib-icon-color: var(--tmd-accent, black);
  --deeplib-icon-hover-color: var(--tmd-accent-hover, black);
  --deeplib-border-color: var(--tmd-accent, black);
  --deeplib-border-width: min(0.2vh, 0.1vw);
  --deeplib-border-width: min(0.2dvh, 0.1dvw);
  --deeplib-border-radius: min(1vh, 0.5vw);
  --deeplib-border-radius: min(1dvh, 0.5dvw);
}

.deeplib-button {
  color: var(--deeplib-text-color);
  width: 100%;
  height: 100%;
}

.deeplib-button.button-styling,
.deeplib-button.button-styling::before {
  border-radius: min(1dvh, 0.5dvw);
}

.deeplib-button img {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-position: left;
  background-color: var(--deeplib-icon-color);
  background-blend-mode: multiply;
  background-size: contain;
  mask-position: left;
  mask-size: contain;
  background-repeat: no-repeat;
  mask-repeat: no-repeat;
  color: transparent;
  background-image: var(--image);
  mask-image: var(--image);
  pointer-events: none;
}

.deeplib-button:hover img {
  background-color: var(--deeplib-icon-hover-color);
}

.deeplib-button .button-label {
  background-color: transparent !important;
  color: var(--deeplib-text-color);
  font-size: min(3.6dvh, 1.8dvw);
}

.deeplib-button .button-tooltip {
  border-radius: min(1dvh, 0.5dvw);
}

#deeplib-page-label {
  display: flex;
  align-items: center;
  justify-content: center;
}

#deeplib-subscreen-title {
  text-align: left;
  color: var(--deeplib-text-color);
}

.deeplib-text {
  color: var(--deeplib-text-color);
}

.deeplib-subscreen {
  padding: 0;
  margin: 0;
  pointer-events: none;
}

.deeplib-subscreen * {
  box-sizing: border-box;
  pointer-events: all;
}

.deeplib-settings {
  display: grid;
  grid-auto-rows: min-content;
  padding: min(1dvh, 0.5dvw);
  gap: 0.3em;
}

.deeplib-misc {
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  gap: min(1vh, 0.5vw);
}

.deeplib-tooltip {
  background-color: var(--deeplib-element-color);
  color: var(--deeplib-text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: min(1dvh, 0.5dvw);
  padding: min(1vh, 0.5vw);
  font-size: 0.8em;
  border: min(0.2vh, 0.1vw) solid var(--deeplib-border-color);
  z-index: 1;
}

.deeplib-overflow-box {
  border: var(--deeplib-border-color) solid var(--deeplib-border-width);
}

.deeplib-prev-next {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: min(2dvh, 1dvw);
  background-color: var(--deeplib-element-color);
  color: var(--deeplib-text-color);
  border-radius: min(1dvh, 0.5dvw);
  border: min(0.2vh, 0.1vw) solid var(--deeplib-border-color);
}
.deeplib-prev-next .deeplib-prev-next-button:hover {
  background-color: var(--deeplib-element-hover-color);
  border-radius: var(--deeplib-border-radius);
}
.deeplib-prev-next .deeplib-prev-next-button {
  height: 100%;
  aspect-ratio: 1;
}
.deeplib-prev-next .deeplib-prev-next-label {
  white-space: nowrap;
}

#deeplib-nav-menu {
  display: flex;
  flex-direction: row;
  gap: min(2dvh, 1dvw);
}

#deeplib-storage-meter {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: var(--deeplib-element-color);
  border: var(--deeplib-border-width) solid var(--deeplib-border-color);
  border-radius: var(--deeplib-border-radius);
  z-index: -1;
}

#deeplib-storage-bar {
  height: 100%;
  width: 0%;
  background: var(--deeplib-accent-color);
}

.deeplib-checkbox-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3em;
}

.deeplib-checkbox-container input.deeplib-input {
  width: min(5vh, 2.5vw);
  height: min(5vh, 2.5vw);
  border-radius: min(1dvh, 0.5dvw);
}

.deeplib-checkbox-container input.deeplib-input[type=checkbox]:checked::before {
  width: 80%;
  height: 80%;
}

.deeplib-input-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3em;
}

.deeplib-input-container:has(label.deeplib-text) {
  margin-top: min(1vh, 0.5vw);
}

.deeplib-input-container input.deeplib-input {
  font-size: 0.6em;
  padding: 5px 0;
  background-color: transparent;
  outline: none;
  padding-left: min(1vh, 0.5vw);
  padding-right: min(1vh, 0.5vw);
  min-height: min(5dvh, 2.5dvw);
  border-radius: min(1dvh, 0.5dvw);
}

.deeplib-input-container input.deeplib-input[type=color] {
  padding: 0px;
  width: min(5vh, 2.5vw);
  height: min(5vh, 2.5vw);
  border-radius: 0px;
}

.deeplib-input-container input.deeplib-input[type=color]:disabled {
  border: var(--deeplib-blocked-color) solid var(--deeplib-border-width);
  cursor: not-allowed;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  appearance: textfield;
  -moz-appearance: textfield;
}

.deeplib-highlight-text {
  font-weight: bold;
  color: rgb(203, 185, 23);
}

#TextAreaChatLog[data-colortheme=dark] div.ChatMessage.deeplib-message,
#TextAreaChatLog[data-colortheme=dark2] div.ChatMessage.deeplib-message {
  background-color: var(--deeplib-element-color);
  border: min(0.2dvh, 0.1dvw) solid var(--deeplib-border-color);
  color: var(--deeplib-text-color);
}

#TextAreaChatLog div.ChatMessage.deeplib-message {
  background-color: #eee;
  border: min(0.2dvh, 0.1dvw) solid #440171;
  color: #111;
  padding-left: min(0.6dvh, 0.3dvw);
  display: block;
  white-space: normal;
}

#TextAreaChatLog[data-colortheme=dark] div.ChatMessage.deeplib-message a,
#TextAreaChatLog[data-colortheme=dark2] div.ChatMessage.deeplib-message a {
  color: var(--deeplib-text-color);
}

#TextAreaChatLog div.ChatMessage.deeplib-message a {
  cursor: pointer;
  font-weight: bold;
  color: #111;
}

.deeplib-modal {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  width: max(50dvw, 25dvh);
  font-size: min(4dvh, 2dvw);
  padding: min(2dvh, 1dvw);
  background-color: var(--deeplib-element-color);
  border-radius: min(1.2dvh, 0.6dvw);
  border: min(0.2dvh, 0.1dvw) solid var(--deeplib-border-color);
  color: var(--deeplib-text-color);
}
.deeplib-modal .deeplib-modal-input {
  width: 100%;
  font-size: min(2.6dvh, 1.8dvw);
  border-radius: min(1dvh, 0.5dvw);
  padding: min(1dvh, 0.5dvw);
}
.deeplib-modal input.deeplib-modal-input {
  max-width: max(50dvh, 25dvw);
}
.deeplib-modal .deeplib-modal-button-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 0.5em;
  width: 100%;
}
.deeplib-modal .deeplib-modal-button-container .deeplib-button {
  font-size: 0.8em;
  display: flex;
  width: auto;
  padding: min(0.4vh, 0.2vw) min(2vh, 1vw);
}
.deeplib-modal .deeplib-modal-button-container .deeplib-button .button-label {
  display: contents;
}
.deeplib-modal .deeplib-modal-prompt-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.deeplib-modal-blocker {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL21lZGlhL05WTUUvU3R1ZmYvQ29kZS9CQy9CQy1EZWVwTGliL3NyYy9zdHlsZXMiLCJzb3VyY2VzIjpbInZhcnMuc2NzcyIsImJ1dHRvbnMuc2NzcyIsImVsZW1lbnRzLnNjc3MiLCJpbnB1dHMuc2NzcyIsIm1lc3NhZ2VzLnNjc3MiLCJtb2RhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7RUFFRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7O0FDZEY7RUFDRTtFQUNBO0VBQ0E7OztBQUdGO0FBQUE7RUFFRTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBOzs7QUFHRjtFQUNFOzs7QUFHRjtFQUNFO0VBQ0E7RUFDQTs7O0FBR0Y7RUFDRTs7O0FDM0NGO0VBQ0U7RUFDQTtFQUNBOzs7QUFHRjtFQUNFO0VBQ0E7OztBQUdGO0VBQ0U7OztBQUdGO0VBQ0U7RUFDQTtFQUNBOzs7QUFHRjtFQUNFO0VBQ0E7OztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7OztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7OztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQUdGO0VBQ0U7OztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUdFO0VBQ0U7RUFDQTs7QUFISjtFQU1FO0VBQ0E7O0FBR0Y7RUFDRTs7O0FBSUo7RUFDRTtFQUNBO0VBQ0E7OztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7OztBQUdGO0VBQ0U7RUFDQTtFQUNBOzs7QUN6R0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7OztBQUdGO0VBQ0U7RUFDQTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7O0FBR0Y7RUFDRTs7O0FBR0Y7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QUFJRjtFQUNFO0VBQ0E7RUFDQTtFQUNBOzs7QUFHRjtFQUNFO0VBQ0E7OztBQUdGO0FBQUE7RUFFRTtFQUNBOzs7QUFHRjtFQUNFO0VBQ0E7OztBQzdERjtFQUNFO0VBQ0E7OztBQUdGO0FBQUE7RUFFRTtFQUNBO0VBQ0E7OztBQUdGO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOzs7QUFHRjtBQUFBO0VBRUU7OztBQUdGO0VBQ0U7RUFDQTtFQUNBOzs7QUM3QkY7RUFDRTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztBQUVBO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7O0FBR0Y7RUFDRTs7QUFHRjtFQUNFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0FBRUE7RUFDRTtFQUNBO0VBQ0E7RUFDQTs7QUFFQTtFQUNFOztBQUtOO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7OztBQUlKO0VBQ0U7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVlcGxpYi1zdWJzY3JlZW4sXG4uZGVlcGxpYi1tb2RhbCB7XG4gIC0tZGVlcGxpYi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10bWQtbWFpbiwgd2hpdGUpO1xuICAtLWRlZXBsaWItZWxlbWVudC1jb2xvcjogdmFyKC0tdG1kLWVsZW1lbnQsIHdoaXRlKTtcbiAgLS1kZWVwbGliLWVsZW1lbnQtaG92ZXItY29sb3I6IHZhcigtLXRtZC1lbGVtZW50LWhvdmVyLCBjeWFuKTtcbiAgLS1kZWVwbGliLWFjY2VudC1jb2xvcjogdmFyKC0tdG1kLWFjY2VudCwgI0ZGRkY4OCk7XG4gIC0tZGVlcGxpYi1ibG9ja2VkLWNvbG9yOiB2YXIoLS10bWQtYmxvY2tlZCwgcmVkKTtcbiAgLS1kZWVwbGliLXRleHQtY29sb3I6IHZhcigtLXRtZC10ZXh0LCBibGFjayk7XG4gIC0tZGVlcGxpYi1pY29uLWNvbG9yOiB2YXIoLS10bWQtYWNjZW50LCBibGFjayk7XG4gIC0tZGVlcGxpYi1pY29uLWhvdmVyLWNvbG9yOiB2YXIoLS10bWQtYWNjZW50LWhvdmVyLCBibGFjayk7XG4gIC0tZGVlcGxpYi1ib3JkZXItY29sb3I6IHZhcigtLXRtZC1hY2NlbnQsIGJsYWNrKTtcbiAgLS1kZWVwbGliLWJvcmRlci13aWR0aDogbWluKDAuMnZoLCAwLjF2dyk7XG4gIC0tZGVlcGxpYi1ib3JkZXItd2lkdGg6IG1pbigwLjJkdmgsIDAuMWR2dyk7XG4gIC0tZGVlcGxpYi1ib3JkZXItcmFkaXVzOiBtaW4oMXZoLCAwLjV2dyk7XG4gIC0tZGVlcGxpYi1ib3JkZXItcmFkaXVzOiBtaW4oMWR2aCwgMC41ZHZ3KTtcbn1cbiIsIi5kZWVwbGliLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1kZWVwbGliLXRleHQtY29sb3IpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGVlcGxpYi1idXR0b24uYnV0dG9uLXN0eWxpbmcsXG4uZGVlcGxpYi1idXR0b24uYnV0dG9uLXN0eWxpbmc6OmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IG1pbigxLjBkdmgsIDAuNWR2dyk7XG59XG5cbi5kZWVwbGliLWJ1dHRvbiBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwbGliLWljb24tY29sb3IpO1xuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIG1hc2stcG9zaXRpb246IGxlZnQ7XG4gIG1hc2stc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWltYWdlKTtcbiAgbWFzay1pbWFnZTogdmFyKC0taW1hZ2UpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmRlZXBsaWItYnV0dG9uOmhvdmVyIGltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBsaWItaWNvbi1ob3Zlci1jb2xvcik7XG59XG5cbi5kZWVwbGliLWJ1dHRvbiAuYnV0dG9uLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWRlZXBsaWItdGV4dC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogbWluKDMuNmR2aCwgMS44ZHZ3KTtcbn1cblxuLmRlZXBsaWItYnV0dG9uIC5idXR0b24tdG9vbHRpcCB7XG4gIGJvcmRlci1yYWRpdXM6IG1pbigxLjBkdmgsIDAuNWR2dyk7XG59XG4iLCIjZGVlcGxpYi1wYWdlLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNkZWVwbGliLXN1YnNjcmVlbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS1kZWVwbGliLXRleHQtY29sb3IpO1xufVxuXG4uZGVlcGxpYi10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWRlZXBsaWItdGV4dC1jb2xvcik7XG59XG5cbi5kZWVwbGliLXN1YnNjcmVlbiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5kZWVwbGliLXN1YnNjcmVlbiAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLmRlZXBsaWItc2V0dGluZ3Mge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XG4gIHBhZGRpbmc6IG1pbigxLjBkdmgsIDAuNWR2dyk7XG4gIGdhcDogMC4zZW07XG59XG5cbi5kZWVwbGliLW1pc2Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGdhcDogbWluKDF2aCwgMC41dncpO1xufVxuXG4uZGVlcGxpYi10b29sdGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcGxpYi1lbGVtZW50LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWRlZXBsaWItdGV4dC1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiBtaW4oMS4wZHZoLCAwLjVkdncpO1xuICBwYWRkaW5nOiBtaW4oMXZoLCAwLjV2dyk7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGJvcmRlcjogbWluKDAuMnZoLCAwLjF2dykgc29saWQgdmFyKC0tZGVlcGxpYi1ib3JkZXItY29sb3IpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZGVlcGxpYi1vdmVyZmxvdy1ib3gge1xuICBib3JkZXI6IHZhcigtLWRlZXBsaWItYm9yZGVyLWNvbG9yKSBzb2xpZCB2YXIoLS1kZWVwbGliLWJvcmRlci13aWR0aCk7XG59XG5cbi5kZWVwbGliLXByZXYtbmV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiBtaW4oMmR2aCwgMWR2dyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBsaWItZWxlbWVudC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1kZWVwbGliLXRleHQtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiBtaW4oMS4wZHZoLCAwLjVkdncpO1xuICBib3JkZXI6IG1pbigwLjJ2aCwgMC4xdncpIHNvbGlkIHZhcigtLWRlZXBsaWItYm9yZGVyLWNvbG9yKTtcblxuICAuZGVlcGxpYi1wcmV2LW5leHQtYnV0dG9uIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBsaWItZWxlbWVudC1ob3Zlci1jb2xvcik7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1kZWVwbGliLWJvcmRlci1yYWRpdXMpO1xuICAgIH1cbiAgICBcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYXNwZWN0LXJhdGlvOiAxO1xuICB9XG5cbiAgLmRlZXBsaWItcHJldi1uZXh0LWxhYmVsIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG59XG5cbiNkZWVwbGliLW5hdi1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiBtaW4oMmR2aCwgMWR2dyk7XG59XG5cbiNkZWVwbGliLXN0b3JhZ2UtbWV0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBsaWItZWxlbWVudC1jb2xvcik7XG4gIGJvcmRlcjogdmFyKC0tZGVlcGxpYi1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLWRlZXBsaWItYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZGVlcGxpYi1ib3JkZXItcmFkaXVzKTtcbiAgei1pbmRleDogLTE7XG59XG5cbiNkZWVwbGliLXN0b3JhZ2UtYmFyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRlZXBsaWItYWNjZW50LWNvbG9yKTtcbn1cbiIsIi5kZWVwbGliLWNoZWNrYm94LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4zZW07XG59XG5cbi5kZWVwbGliLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dC5kZWVwbGliLWlucHV0IHtcbiAgd2lkdGg6IG1pbig1dmgsIDIuNXZ3KTtcbiAgaGVpZ2h0OiBtaW4oNXZoLCAyLjV2dyk7XG4gIGJvcmRlci1yYWRpdXM6IG1pbigxLjBkdmgsIDAuNWR2dyk7XG59XG5cbi5kZWVwbGliLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dC5kZWVwbGliLWlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkOjpiZWZvcmUge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbn1cblxuLmRlZXBsaWItaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjNlbTtcbn1cblxuLmRlZXBsaWItaW5wdXQtY29udGFpbmVyOmhhcyhsYWJlbC5kZWVwbGliLXRleHQpIHtcbiAgbWFyZ2luLXRvcDogbWluKDF2aCwgMC41dncpO1xufVxuXG4uZGVlcGxpYi1pbnB1dC1jb250YWluZXIgaW5wdXQuZGVlcGxpYi1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIHBhZGRpbmc6IDVweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiBtaW4oMXZoLCAwLjV2dyk7XG4gIHBhZGRpbmctcmlnaHQ6IG1pbigxdmgsIDAuNXZ3KTtcbiAgbWluLWhlaWdodDogbWluKDVkdmgsIDIuNWR2dyk7XG4gIGJvcmRlci1yYWRpdXM6IG1pbigxLjBkdmgsIDAuNWR2dyk7XG59XG5cblxuLmRlZXBsaWItaW5wdXQtY29udGFpbmVyIGlucHV0LmRlZXBsaWItaW5wdXRbdHlwZT1cImNvbG9yXCJdIHtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogbWluKDV2aCwgMi41dncpO1xuICBoZWlnaHQ6IG1pbig1dmgsIDIuNXZ3KTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4uZGVlcGxpYi1pbnB1dC1jb250YWluZXIgaW5wdXQuZGVlcGxpYi1pbnB1dFt0eXBlPVwiY29sb3JcIl06ZGlzYWJsZWQge1xuICBib3JkZXI6IHZhcigtLWRlZXBsaWItYmxvY2tlZC1jb2xvcikgc29saWQgdmFyKC0tZGVlcGxpYi1ib3JkZXItd2lkdGgpO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIGFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG4iLCIuZGVlcGxpYi1oaWdobGlnaHQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmdiKDIwMywgMTg1LCAyMyk7XG59XG5cbiNUZXh0QXJlYUNoYXRMb2dbZGF0YS1jb2xvcnRoZW1lPSdkYXJrJ10gZGl2LkNoYXRNZXNzYWdlLmRlZXBsaWItbWVzc2FnZSxcbiNUZXh0QXJlYUNoYXRMb2dbZGF0YS1jb2xvcnRoZW1lPSdkYXJrMiddIGRpdi5DaGF0TWVzc2FnZS5kZWVwbGliLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwbGliLWVsZW1lbnQtY29sb3IpO1xuICBib3JkZXI6IG1pbigwLjJkdmgsIDAuMWR2dykgc29saWQgdmFyKC0tZGVlcGxpYi1ib3JkZXItY29sb3IpO1xuICBjb2xvcjogdmFyKC0tZGVlcGxpYi10ZXh0LWNvbG9yKTtcbn1cblxuI1RleHRBcmVhQ2hhdExvZyBkaXYuQ2hhdE1lc3NhZ2UuZGVlcGxpYi1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyOiBtaW4oMC4yZHZoLCAwLjFkdncpIHNvbGlkICM0NDAxNzE7XG4gIGNvbG9yOiAjMTExO1xuICBwYWRkaW5nLWxlZnQ6IG1pbigwLjZkdmgsIDAuM2R2dyk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4jVGV4dEFyZWFDaGF0TG9nW2RhdGEtY29sb3J0aGVtZT0nZGFyayddIGRpdi5DaGF0TWVzc2FnZS5kZWVwbGliLW1lc3NhZ2UgYSxcbiNUZXh0QXJlYUNoYXRMb2dbZGF0YS1jb2xvcnRoZW1lPSdkYXJrMiddIGRpdi5DaGF0TWVzc2FnZS5kZWVwbGliLW1lc3NhZ2UgYSB7XG4gIGNvbG9yOiB2YXIoLS1kZWVwbGliLXRleHQtY29sb3IpO1xufVxuXG4jVGV4dEFyZWFDaGF0TG9nIGRpdi5DaGF0TWVzc2FnZS5kZWVwbGliLW1lc3NhZ2UgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMTExO1xufVxuIiwiLmRlZXBsaWItbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgei1pbmRleDogMTAwMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41ZW07XG4gIHdpZHRoOiBtYXgoNTBkdncsIDI1ZHZoKTtcbiAgZm9udC1zaXplOiBtaW4oNGR2aCwgMmR2dyk7XG4gIHBhZGRpbmc6IG1pbigyZHZoLCAxZHZ3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcGxpYi1lbGVtZW50LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogbWluKDEuMmR2aCwgMC42ZHZ3KTtcbiAgYm9yZGVyOiBtaW4oMC4yZHZoLCAwLjFkdncpIHNvbGlkIHZhcigtLWRlZXBsaWItYm9yZGVyLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWRlZXBsaWItdGV4dC1jb2xvcik7XG5cbiAgLmRlZXBsaWItbW9kYWwtaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogbWluKDIuNmR2aCwgMS44ZHZ3KTtcbiAgICBib3JkZXItcmFkaXVzOiBtaW4oMS4wZHZoLCAwLjVkdncpO1xuICAgIHBhZGRpbmc6IG1pbigxZHZoLCAwLjVkdncpO1xuICB9XG5cbiAgaW5wdXQuZGVlcGxpYi1tb2RhbC1pbnB1dCB7XG4gICAgbWF4LXdpZHRoOiBtYXgoNTBkdmgsIDI1ZHZ3KTtcbiAgfVxuXG4gIC5kZWVwbGliLW1vZGFsLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGdhcDogMC41ZW07XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuZGVlcGxpYi1idXR0b24ge1xuICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIHBhZGRpbmc6IG1pbigwLjR2aCwgMC4ydncpIG1pbigydmgsIDF2dyk7XG5cbiAgICAgIC5idXR0b24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZGVlcGxpYi1tb2RhbC1wcm9tcHQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuXG4uZGVlcGxpYi1tb2RhbC1ibG9ja2VyIHtcbiAgei1pbmRleDogMTAwMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDBkdnc7XG4gIGhlaWdodDogMTAwZHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4iXX0= */`;
  var modStorage;
  var sdk;
  function initMod(options2) {
    sdk = new ModSdkManager(options2.modInfo.info, options2.modInfo.options);
    const MOD_NAME = ModSdkManager.ModInfo.name;
    modStorage = new ModStorage(ModSdkManager.ModInfo.name);
    Style.injectInline("deeplib-style", styles_default);
    deepLibLogger.debug(`Init wait for ${MOD_NAME}`);
    if (CurrentScreen == null || CurrentScreen === "Login") {
      options2.beforeLogin?.();
      const removeHook = sdk.hookFunction("LoginResponse", 0, (args, next) => {
        deepLibLogger.debug(`Init for ${MOD_NAME}! LoginResponse caught: `, args);
        next(args);
        const response = args[0];
        if (response === "InvalidNamePassword") return next(args);
        if (response && typeof response.Name === "string" && typeof response.AccountName === "string") {
          init(options2);
          removeHook();
        }
      });
    } else {
      deepLibLogger.debug(`Already logged in, initing ${MOD_NAME}`);
      init(options2);
    }
  }
  __name(initMod, "initMod");
  __name2(initMod, "initMod");
  async function init(options2) {
    const MOD_NAME = ModSdkManager.ModInfo.name;
    const MOD_VERSION2 = ModSdkManager.ModInfo.version;
    if (window[MOD_NAME + "Loaded"]) return;
    modStorage.load();
    await Localization.init(options2.translationOptions);
    if (options2.modules && !initModules(options2.modules)) {
      unloadMod();
      return;
    }
    if (options2.migrators) {
      for (const m of options2.migrators) {
        VersionModule.registerMigrator(m);
      }
    }
    await options2.initFunction?.();
    if (options2.mainMenuOptions)
      MainMenu.setOptions(options2.mainMenuOptions);
    for (const m of modules()) {
      if (m.defaultSettings && hasGetter(m, "defaultSettings") && m.settings && hasSetter(m, "settings")) {
        if (Object.entries(m.defaultSettings).length === 0) continue;
        m.settings = deepMergeMatchingProperties(m.defaultSettings, m.settings);
      }
    }
    window[MOD_NAME + "Loaded"] = true;
    deepLibLogger.log(`Loaded ${MOD_NAME}! Version: ${MOD_VERSION2}`);
  }
  __name(init, "init");
  __name2(init, "init");
  function initModules(modulesToRegister) {
    const MOD_NAME = ModSdkManager.ModInfo.name;
    for (const module of modulesToRegister) {
      registerModule(module);
    }
    for (const module of modules()) {
      module.init();
    }
    for (const module of modules()) {
      module.load();
    }
    for (const module of modules()) {
      module.run();
    }
    deepLibLogger.debug(`Modules Loaded for ${MOD_NAME}.`);
    return true;
  }
  __name(initModules, "initModules");
  __name2(initModules, "initModules");
  function unloadMod() {
    const MOD_NAME = ModSdkManager.ModInfo.name;
    unloadModules();
    delete window[MOD_NAME + "Loaded"];
    deepLibLogger.debug(`Unloaded ${MOD_NAME}.`);
    return true;
  }
  __name(unloadMod, "unloadMod");
  __name2(unloadMod, "unloadMod");
  function unloadModules() {
    for (const module of modules()) {
      module.unload();
    }
  }
  __name(unloadModules, "unloadModules");
  __name2(unloadModules, "unloadModules");
  var modulesMap = /* @__PURE__ */ new Map();
  function modules() {
    return [...modulesMap.values()];
  }
  __name(modules, "modules");
  __name2(modules, "modules");
  function registerModule(module) {
    modulesMap.set(module.constructor.name, module);
    return module;
  }
  __name(registerModule, "registerModule");
  __name2(registerModule, "registerModule");
  function getModule(moduleType) {
    return modulesMap.get(moduleType);
  }
  __name(getModule, "getModule");
  __name2(getModule, "getModule");
  var _a3;
  var BaseMigrator2 = (_a3 = class {
  }, __name(_a3, "BaseMigrator2"), __name2(_a3, "BaseMigrator"), _a3);
  var _a4;
  var GUI = (_a4 = class extends BaseModule {
    /** 
     * Creates the GUI instance and initializes the main menu. 
     * 
     * @throws If another `GUI` instance already exists.
     */
    constructor(guiOptions = null) {
      super();
      /** All subscreens managed by this GUI, including the main menu and module settings screens. */
      __publicField(this, "_subscreens");
      /** The mod's main menu screen. */
      __publicField(this, "_mainMenu");
      /** Options defining how the mod's settings button is displayed and behaves. */
      __publicField(this, "_modButtonOptions");
      if (_a4.instance) {
        throw new Error("Duplicate initialization");
      }
      for (const module of modules()) {
        if (!module.settingsScreen) continue;
      }
      this._mainMenu = guiOptions?.mainMenu ? new guiOptions.mainMenu(this) : new MainMenu(this);
      this._subscreens = [this._mainMenu];
      this._modButtonOptions = guiOptions;
      _a4.instance = this;
    }
    /** Returns all registered subscreens. */
    get subscreens() {
      return this._subscreens;
    }
    /** Returns the main menu subscreen instance. */
    get mainMenu() {
      return this._mainMenu;
    }
    /**
     * Loads the GUI and registers the mod's settings button in the extensions menu.
     *
     * - Creates subscreens for each module's settings screen.
     * - Registers lifecycle callbacks for subscreens events.
     * - Sets up the main menu and its subscreens.
     */
    load() {
      if (!this._modButtonOptions) return;
      for (const module of modules()) {
        if (!module.settingsScreen) continue;
        this._subscreens.push(new module.settingsScreen(module));
      }
      this._mainMenu.subscreens = this._subscreens;
      PreferenceRegisterExtensionSetting({
        Identifier: this._modButtonOptions.identifier,
        ButtonText: this._modButtonOptions.buttonText,
        Image: this._modButtonOptions.image,
        load: /* @__PURE__ */ __name2(async () => {
          await setSubscreen(this._mainMenu);
        }, "load"),
        run: /* @__PURE__ */ __name2(() => {
        }, "run"),
        click: /* @__PURE__ */ __name2(() => {
        }, "click"),
        exit: /* @__PURE__ */ __name2(() => {
        }, "exit")
      });
    }
  }, __name(_a4, "_GUI"), __name2(_a4, "GUI"), /** The singleton instance of the GUI controller. */
  __publicField(_a4, "instance", null), _a4);
  var _a5;
  var VersionModule = (_a5 = class extends BaseModule {
    constructor(options2) {
      super();
      _a5.newVersionMessage = options2.newVersionMessage;
      _a5.beforeEach = options2.beforeEach;
      _a5.afterEach = options2.afterEach;
      _a5.beforeAll = options2.beforeAll;
      _a5.afterAll = options2.afterAll;
    }
    /**
     * Initializes the module on load:
     * - Stores the current mod version.
     * - Hooks into `ChatRoomSync` to show a "new version" message when applicable.
     */
    load() {
      _a5.version = ModSdkManager.ModInfo.version;
      _a5.checkVersionUpdate();
      if (modStorage.playerStorage.GlobalModule.doShowNewVersionMessage && _a5.isItNewVersion) {
        _a5.sendNewVersionMessage();
      }
    }
    /**
     * Checks if the stored version differs from the current version.
     * If a new version is detected:
     * - Flags the session as updated.
     * - Runs applicable migrations.
     * - Updates stored version in player data.
     * - Saves `modStorage`.
     */
    static checkVersionUpdate() {
      const previousVersion = _a5.loadVersion();
      const currentVersion = _a5.version;
      if (_a5.isNewVersion(previousVersion, currentVersion)) {
        _a5.isItNewVersion = true;
        _a5.checkVersionMigration();
        _a5.saveVersion();
      }
      modStorage.save();
    }
    /**
     * Executes migrations for all registered migrators whose `MigrationVersion`
     * is newer than the previously stored version.
     */
    static checkVersionMigration() {
      const previousVersion = _a5.loadVersion();
      const toMigrate = _a5.migrators.filter(
        (m) => _a5.isNewVersion(previousVersion, m.migrationVersion)
      );
      if (!toMigrate.length) return;
      _a5.beforeAll?.();
      for (const migrator of toMigrate) {
        _a5.beforeEach?.();
        migrator.migrate();
        deepLibLogger.info(
          `Migrating ${ModSdkManager.ModInfo.name} from ${previousVersion} to ${migrator.migrationVersion} with ${migrator.constructor.name}`
        );
        _a5.afterEach?.();
      }
      _a5.afterAll?.();
    }
    /**
     * Registers a new migrator for handling version-specific changes.
     * Migrators are sorted by their `MigrationVersion` in ascending order.
     */
    static registerMigrator(migrator) {
      _a5.migrators.push(migrator);
      _a5.migrators.sort((a, b) => a.migrationVersion.localeCompare(b.migrationVersion));
    }
    /** Sends the currently configured "new version" message to the local player. */
    static sendNewVersionMessage() {
      const beepLogLength = FriendListBeepLog.push({
        MemberNumber: Player.MemberNumber,
        MemberName: ModSdkManager.ModInfo.name,
        ChatRoomName: getText("module.version.version_update"),
        ChatRoomSpace: "X",
        Private: false,
        Sent: false,
        Time: /* @__PURE__ */ new Date(),
        Message: _a5.newVersionMessage
      });
      const beepIdx = beepLogLength - 1;
      const title = CommonStringPartitionReplace(getText("module.version.new_version_toast_title"), {
        $modName$: ModSdkManager.ModInfo.name,
        $modVersion$: _a5.version
      }).join("");
      const data = FriendListBeepLog[beepIdx];
      ServerShowBeep(_a5.newVersionMessage, 1e4, {
        memberNumber: data.MemberNumber,
        memberName: data.MemberName,
        chatRoomName: data.ChatRoomName,
        ...data.Message && {
          onClick: /* @__PURE__ */ __name2(() => {
            FriendListShowBeep(beepIdx);
          }, "onClick")
        }
      }, title);
    }
    /**
     * Determines if a given `candidate` version is newer than the `current` version.
     * 
     * Version strings are expected in `MAJOR.MINOR.PATCH` format.
     */
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
    /** Saves the current mod version into persistent player storage. */
    static saveVersion() {
      if (modStorage.playerStorage) {
        Player[ModSdkManager.ModInfo.name].Version = _a5.version;
      }
    }
    /** Loads the stored mod version from persistent player storage. */
    static loadVersion() {
      return modStorage.playerStorage?.Version;
    }
  }, __name(_a5, "_VersionModule"), __name2(_a5, "VersionModule"), /** Whether the current session is running a new version compared to stored data */
  __publicField(_a5, "isItNewVersion", false), /** The current mod version (retrieved from `ModSdkManager.ModInfo.version`) */
  __publicField(_a5, "version"), /** Message to display when a new version is detected */
  __publicField(_a5, "newVersionMessage", ""), /** List of registered migration handlers, sorted by version */
  __publicField(_a5, "migrators", []), /** Optional lifecycle hook. Runs before each migration */
  __publicField(_a5, "beforeEach"), /** Optional lifecycle hook. Runs after each migration */
  __publicField(_a5, "afterEach"), /** Optional lifecycle hook. Runs before all migrations */
  __publicField(_a5, "beforeAll"), /** Optional lifecycle hook. Runs after all migrations */
  __publicField(_a5, "afterAll"), _a5);
  var _a6;
  var GuiDebug = (_a6 = class extends BaseSubscreen {
    get pageStructure() {
      return [
        [
          {
            type: "button",
            id: "test-deeplib-big-button",
            size: [405, 80],
            label: "Big Button",
            tooltip: "This is a big button",
            image: "Icons/Exit.png",
            onClick() {
              deepLibLogger.info("Big Button Clicked");
            }
          },
          {
            type: "button",
            id: "test-deeplib-small-button",
            size: [90, 90],
            tooltip: "This is a small button",
            image: "Icons/Exit.png",
            onClick() {
              deepLibLogger.info("Small Button Clicked");
            }
          },
          {
            type: "checkbox",
            id: "test-deeplib-checkbox",
            label: "Checkbox",
            description: "This is a checkbox",
            setElementValue() {
              return true;
            },
            setSettingValue(val) {
              deepLibLogger.info("Checkbox value:", val);
            }
          },
          {
            type: "text",
            id: "test-deeplib-text-input",
            label: "Input",
            description: "This is a text input",
            setElementValue() {
              return "Input Value";
            },
            setSettingValue(val) {
              deepLibLogger.info("Input value:", val);
            }
          },
          {
            type: "number",
            id: "test-deeplib-number-input",
            label: "Input",
            description: "This is a number input",
            setElementValue() {
              return "123";
            },
            setSettingValue(val) {
              deepLibLogger.info("Input value:", val);
            }
          },
          {
            type: "label",
            id: "test-deeplib-label",
            label: "Label",
            description: "This is a label"
          }
        ],
        [
          {
            type: "button",
            id: "test-deeplib-big-button2",
            size: [405, 80],
            label: "Big Button",
            tooltip: "This is a big button",
            image: "Icons/Prev.png",
            onClick() {
              deepLibLogger.info("Big Button Clicked");
            }
          },
          {
            type: "button",
            id: "test-deeplib-small-button2",
            size: [90, 90],
            tooltip: "This is a small button",
            image: "Icons/Next.png",
            onClick() {
              deepLibLogger.info("Small Button Clicked");
            }
          },
          {
            type: "checkbox",
            id: "test-deeplib-checkbox2",
            label: "Checkbox",
            description: "This is a checkbox",
            setElementValue() {
              return true;
            },
            setSettingValue(val) {
              deepLibLogger.info("Checkbox value:", val);
            }
          },
          {
            type: "text",
            id: "test-deeplib-text-input2",
            label: "Input",
            description: "This is a text input",
            setElementValue() {
              return "Input Value";
            },
            setSettingValue(val) {
              deepLibLogger.info("Input value:", val);
            }
          },
          {
            type: "number",
            id: "test-deeplib-number-input2",
            label: "Input",
            description: "This is a number input",
            setElementValue() {
              return "123";
            },
            setSettingValue(val) {
              deepLibLogger.info("Input value:", val);
            }
          },
          {
            type: "label",
            id: "test-deeplib-label2",
            label: "Label",
            description: "This is a label"
          }
        ]
      ];
    }
  }, __name(_a6, "GuiDebug"), __name2(_a6, "GuiDebug"), __publicField(_a6, "subscreenOptions", {
    name: "debug"
  }), _a6);
  function deepMerge(target, source) {
    if (target === void 0) return source;
    if (source === void 0) return target;
    if (typeof target !== "object" || typeof source !== "object") {
      return source;
    }
    for (const key of Object.keys(source)) {
      if (Array.isArray(source[key]) && Array.isArray(target[key])) {
        target[key] = [...target[key], ...source[key]];
      } else if (typeof source[key] === "object" && source[key] !== null) {
        target[key] = deepMerge(target[key] || {}, source[key]);
      } else {
        target[key] = source[key];
      }
    }
    return target;
  }
  __name(deepMerge, "deepMerge");
  __name2(deepMerge, "deepMerge");
  function shuffleArray(array) {
    const temp = JSON.parse(JSON.stringify(array));
    const ret = [];
    while (temp.length > 0) {
      const d = Math.floor(Math.random() * temp.length);
      ret.push(temp[d]);
      temp.splice(d, 1);
    }
    return ret;
  }
  __name(shuffleArray, "shuffleArray");
  __name2(shuffleArray, "shuffleArray");
  function exportToGlobal(name, value) {
    const keys = name.split(".");
    let current = globalThis;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) {
        current[keys[i]] = {};
      }
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
  }
  __name(exportToGlobal, "exportToGlobal");
  __name2(exportToGlobal, "exportToGlobal");
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
  __name2(deepMergeMatchingProperties, "deepMergeMatchingProperties");
  function hasGetter(obj, prop) {
    while (obj && obj !== Object.prototype) {
      const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
      if (descriptor?.get) return true;
      obj = Object.getPrototypeOf(obj);
    }
    return false;
  }
  __name(hasGetter, "hasGetter");
  __name2(hasGetter, "hasGetter");
  function hasSetter(obj, prop) {
    while (obj && obj !== Object.prototype) {
      const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
      if (descriptor?.set) return true;
      obj = Object.getPrototypeOf(obj);
    }
    return false;
  }
  __name(hasSetter, "hasSetter");
  __name2(hasSetter, "hasSetter");
  var byteToKB = /* @__PURE__ */ __name2((nByte) => Math.round(nByte / 100) / 10, "byteToKB");
  var advElement = {
    createButton: elementCreateButton,
    createCheckbox: elementCreateCheckbox,
    createInput: elementCreateInput,
    createLabel: elementCreateLabel,
    createCustom: elementCreateCustom,
    createTooltip: elementCreateTooltip,
    getTooltip: elementGetTooltip,
    setTooltip: elementSetTooltip,
    createBackNext: elementPrevNext
  };
  function elementCreateButton(options2) {
    options2.id ?? (options2.id = ElementGenerateID());
    const elem = document.getElementById(options2.id);
    if (elem) return elem;
    options2.type = "button";
    let image = void 0;
    if (options2.options?.image) {
      image = options2.options.image;
      options2.options.image = void 0;
    }
    const disabled = typeof options2?.disabled === "function" ? options2?.disabled() : options2?.disabled;
    const button = ElementButton.Create(
      options2.id,
      options2?.onClick ?? (() => {
      }),
      deepMerge({
        labelPosition: "center"
      }, options2.options),
      deepMerge({
        button: {
          classList: ["deeplib-button"],
          attributes: {
            disabled
          },
          children: [
            image ? {
              tag: "img",
              attributes: {
                id: `${options2.id}-image`,
                alt: "",
                decoding: "async",
                loading: "lazy",
                src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                // 1x1 transparent image to get rid of broken image
              },
              style: {
                "--image": `url("${image}")`
              }
            } : void 0
          ]
        }
      }, options2.htmlOptions ?? {})
    );
    BaseSubscreen.currentElements.push([button, options2]);
    return button;
  }
  __name(elementCreateButton, "elementCreateButton");
  __name2(elementCreateButton, "elementCreateButton");
  function elementCreateCheckbox(options2) {
    const elem = document.getElementById(options2.id);
    if (elem) return elem;
    options2.type = "checkbox";
    const disabled = typeof options2?.disabled === "function" ? options2?.disabled() : options2?.disabled;
    const retElem = ElementCreate({
      tag: "div",
      classList: ["deeplib-checkbox-container"],
      attributes: {
        id: `${options2.id}-container`
      },
      children: [
        deepMerge({
          tag: "input",
          classList: ["checkbox", "deeplib-input"],
          attributes: {
            type: "checkbox",
            id: options2.id,
            disabled,
            checked: options2?.setElementValue?.() || void 0
          }
        }, options2.htmlOptions),
        {
          tag: "label",
          classList: ["deeplib-text"],
          attributes: {
            for: options2.id
          },
          children: [options2.label]
        }
      ],
      eventListeners: {
        change: /* @__PURE__ */ __name2(() => {
          options2?.setSettingValue?.(document.getElementById(options2.id)?.checked);
        }, "change")
      }
    });
    if (options2.description) {
      retElem.addEventListener("mouseover", () => {
        elementSetTooltip(options2.description || "");
      });
      retElem.addEventListener("mouseout", () => {
        elementSetTooltip("");
      });
    }
    BaseSubscreen.currentElements.push([retElem, options2]);
    return retElem;
  }
  __name(elementCreateCheckbox, "elementCreateCheckbox");
  __name2(elementCreateCheckbox, "elementCreateCheckbox");
  function elementCreateCustom(options2) {
    const elem = document.getElementById(options2.id);
    if (elem) return elem;
    options2.type = "custom";
    const retElem = ElementCreate(options2.htmlOptions);
    BaseSubscreen.currentElements.push([retElem, options2]);
    return retElem;
  }
  __name(elementCreateCustom, "elementCreateCustom");
  __name2(elementCreateCustom, "elementCreateCustom");
  function elementCreateInput(options2) {
    const elem = document.getElementById(options2.id);
    if (elem) return elem;
    const disabled = typeof options2?.disabled === "function" ? options2?.disabled() : options2?.disabled;
    const retElem = ElementCreate({
      tag: "div",
      classList: ["deeplib-input-container"],
      attributes: {
        id: `${options2.id}-container`
      },
      children: [
        deepMerge({
          tag: "input",
          classList: ["deeplib-input"],
          attributes: {
            type: options2.type,
            id: options2.id,
            placeholder: " ",
            disabled,
            value: options2?.setElementValue?.() || void 0
          }
        }, options2.htmlOptions),
        options2.label ? {
          tag: "label",
          classList: ["deeplib-text"],
          attributes: {
            for: options2.id
          },
          children: [options2.label]
        } : void 0
      ],
      eventListeners: {
        input: /* @__PURE__ */ __name2(() => {
          options2?.setSettingValue?.(document.getElementById(options2.id)?.value);
        }, "input")
      }
    });
    if (options2.description) {
      retElem.addEventListener("mouseover", () => {
        elementSetTooltip(options2.description || "");
      });
      retElem.addEventListener("mouseout", () => {
        elementSetTooltip("");
      });
    }
    BaseSubscreen.currentElements.push([retElem, options2]);
    return retElem;
  }
  __name(elementCreateInput, "elementCreateInput");
  __name2(elementCreateInput, "elementCreateInput");
  function elementCreateLabel(options2) {
    const elem = document.getElementById(options2.id);
    if (elem) return elem;
    options2.type = "label";
    const retElem = ElementCreate(deepMerge({
      tag: "span",
      classList: ["deeplib-label", "deeplib-text"],
      attributes: {
        id: options2.id
      },
      children: [
        options2.label
      ]
    }, options2.htmlOptions));
    if (options2.description) {
      retElem.addEventListener("mouseover", () => {
        elementSetTooltip(options2.description || "");
      });
      retElem.addEventListener("mouseout", () => {
        elementSetTooltip("");
      });
    }
    BaseSubscreen.currentElements.push([retElem, options2]);
    return retElem;
  }
  __name(elementCreateLabel, "elementCreateLabel");
  __name2(elementCreateLabel, "elementCreateLabel");
  function elementCreateTooltip() {
    const element = ElementCreate({
      tag: "div",
      classList: ["deeplib-tooltip"],
      attributes: {
        id: "deeplib-tooltip"
      },
      style: {
        display: "none"
      }
    });
    return element;
  }
  __name(elementCreateTooltip, "elementCreateTooltip");
  __name2(elementCreateTooltip, "elementCreateTooltip");
  function elementGetTooltip() {
    return document.getElementById("deeplib-tooltip") ?? void 0;
  }
  __name(elementGetTooltip, "elementGetTooltip");
  __name2(elementGetTooltip, "elementGetTooltip");
  function elementSetTooltip(text) {
    const element = document.getElementById("deeplib-tooltip");
    if (!element) return false;
    element.innerHTML = text;
    if (text === "") element.style.display = "none";
    else element.style.display = "";
    return true;
  }
  __name(elementSetTooltip, "elementSetTooltip");
  __name2(elementSetTooltip, "elementSetTooltip");
  function elementPrevNext(options2) {
    const elem = document.getElementById(options2.id);
    if (elem) return elem;
    const setLabel = /* @__PURE__ */ __name2((label) => {
      const elem2 = document.getElementById(`${options2.id}-label`);
      if (!elem2) return false;
      elem2.textContent = label;
    }, "setLabel");
    const setPrevTooltip = /* @__PURE__ */ __name2((tooltip) => {
      const elem2 = document.getElementById(`deeplib-prev-next-${options2.id}-prev-button-tooltip`);
      if (!elem2) return false;
      elem2.textContent = tooltip;
    }, "setPrevTooltip");
    const setNextTooltip = /* @__PURE__ */ __name2((tooltip) => {
      const elem2 = document.getElementById(`deeplib-prev-next-${options2.id}-next-button-tooltip`);
      if (!elem2) return false;
      elem2.textContent = tooltip;
    }, "setNextTooltip");
    const retElem = ElementCreate({
      tag: "div",
      classList: ["deeplib-prev-next"],
      attributes: {
        id: options2.id
      },
      children: [
        advElement.createButton({
          id: `deeplib-prev-next-${options2.id}-prev-button`,
          onClick: /* @__PURE__ */ __name2(() => {
            options2.back({
              setLabel,
              setBackTooltip: setPrevTooltip,
              setNextTooltip
            });
          }, "onClick"),
          htmlOptions: {
            button: {
              classList: ["deeplib-prev-next-button"]
            }
          },
          options: {
            noStyling: true,
            image: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/dl_images/arrow_left.svg`,
            tooltip: options2.initialPrevTooltip
          }
        }),
        advElement.createLabel({
          id: `${options2.id}-label`,
          label: options2.initialLabel,
          htmlOptions: {
            classList: ["deeplib-prev-next-label"]
          }
        }),
        advElement.createButton({
          id: `deeplib-prev-next-${options2.id}-next-button`,
          onClick: /* @__PURE__ */ __name2(() => {
            options2.next({
              setLabel,
              setBackTooltip: setPrevTooltip,
              setNextTooltip
            });
          }, "onClick"),
          htmlOptions: {
            button: {
              classList: ["deeplib-prev-next-button"]
            }
          },
          options: {
            noStyling: true,
            image: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/dl_images/arrow_right.svg`,
            tooltip: options2.initialNextTooltip
          }
        })
      ]
    });
    return retElem;
  }
  __name(elementPrevNext, "elementPrevNext");
  __name2(elementPrevNext, "elementPrevNext");
  var _a7;
  var Modal = (_a7 = class {
    constructor(opts) {
      __publicField(this, "dialog");
      __publicField(this, "blocker");
      __publicField(this, "inputEl");
      __publicField(this, "timeoutId");
      /**
       * An internal function where we will save promise function.
       */
      __publicField(this, "resolve", /* @__PURE__ */ __name2(() => {
      }, "resolve"));
      this.opts = opts;
      opts ?? (opts = {});
      opts.closeOnBackdrop ?? (opts.closeOnBackdrop = true);
      const promptId = `modal-prompt-${Date.now()}`;
      const prompt = (CommonIsArray(opts.prompt) ? opts.prompt : [opts.prompt]).filter((i) => i != null) ?? [""];
      this.dialog = ElementCreate({
        tag: "dialog",
        classList: ["deeplib-modal"],
        attributes: {
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": promptId
        },
        style: {
          fontFamily: CommonGetFontName()
        },
        children: [
          {
            tag: "div",
            classList: ["deeplib-modal-prompt-container"],
            children: [
              ...prompt
            ]
          },
          {
            tag: "div",
            classList: ["deeplib-modal-prompt"],
            attributes: {
              id: promptId
            },
            children: [
              opts.input ? this.renderInput(opts.input) : void 0
            ]
          },
          this.renderButtons()
        ]
      });
      this.blocker = this.createBlocker();
      this.renderButtons();
      document.body.append(this.createBlocker(), this.dialog);
      this.setupFocusTrap();
      if (opts.timeoutMs) {
        this.timeoutId = window.setTimeout(() => this.close("timeout"), opts.timeoutMs);
      }
    }
    /**
     * Displays the modal and resolves with the chosen action and input value.
     */
    show() {
      return _a7.enqueue(this);
    }
    /**
     * Shows a simple alert modal with a single "OK" button.
     */
    static async alert(msg, timeoutMs) {
      await new _a7({
        prompt: msg,
        buttons: [{ action: "close", text: getText("modal.button.ok") }],
        timeoutMs,
        escapeAction: "close"
      }).show();
    }
    /**
     * Shows a confirmation modal with "Cancel" and "OK" buttons.
     * Returns true if "OK" is clicked.
     */
    static async confirm(msg) {
      const [action] = await new _a7({
        prompt: msg,
        buttons: [{ text: getText("modal.button.decline"), action: "decline" }, { text: getText("modal.button.confirm"), action: "confirm" }],
        escapeAction: "decline",
        enterAction: "confirm"
      }).show();
      return action === "confirm";
    }
    /**
     * Shows a prompt modal with an input field and "Submit"/"Cancel" buttons.
     * Returns the input value if submitted, otherwise null.
     */
    static async prompt(msg, defaultValue = "") {
      const [action, value] = await new _a7({
        prompt: msg,
        timeoutMs: 0,
        input: { type: "input", defaultValue },
        buttons: [{ text: getText("modal.button.cancel"), action: "cancel" }, { text: getText("modal.button.submit"), action: "submit" }],
        escapeAction: "cancel",
        enterAction: "submit"
      }).show();
      return action === "submit" ? value : null;
    }
    /** Creates the input element for the modal, applying configuration and validation. */
    renderInput(cfg) {
      const el = document.createElement(cfg.type);
      el.classList.add("deeplib-modal-input");
      if (cfg.placeholder) el.placeholder = cfg.placeholder;
      if (cfg.readOnly) el.readOnly = true;
      if (cfg.defaultValue) el.value = cfg.defaultValue;
      if (cfg.type === "textarea") el.rows = 5;
      el.addEventListener("input", () => {
        const err = cfg.validate?.(el.value);
        el.setCustomValidity(err || "");
      });
      this.inputEl = el;
      return el;
    }
    /** Creates modal action buttons from configuration. */
    renderButtons() {
      const container = document.createElement("div");
      container.classList.add("deeplib-modal-button-container");
      const btns = this.opts.buttons ? [...this.opts.buttons] : [];
      btns.forEach((b) => {
        const btn = advElement.createButton({
          id: `deeplib-modal-${b.action}`,
          onClick: /* @__PURE__ */ __name2(() => this.close(b.action), "onClick"),
          options: {
            disabled: b.disabled,
            label: b.text
          }
        });
        container.append(btn);
      });
      return container;
    }
    /** Creates the modal backdrop blocker with optional click-to-close behavior. */
    createBlocker() {
      const blocker = document.createElement("div");
      blocker.classList.add("deeplib-modal-blocker");
      blocker.title = "Click to close";
      if (this.opts.closeOnBackdrop !== false)
        blocker.addEventListener("click", () => this.close("close"));
      return blocker;
    }
    /** Implements a focus trap to keep keyboard navigation inside the modal. */
    setupFocusTrap() {
      const focusable = 'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])';
      const elements = Array.from(this.dialog.querySelectorAll(focusable));
      const first = elements[0];
      const last = elements[elements.length - 1];
      this.dialog.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
          if (elements.length === 0) {
            e.preventDefault();
            return;
          }
          if (e.shiftKey) {
            if (document.activeElement === first) {
              last.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === last) {
              first.focus();
              e.preventDefault();
            }
          }
        } else if (e.key === "Escape") {
          e.stopPropagation();
          this.close(this.opts.escapeAction ?? "close");
        } else if (e.key === "Enter") {
          if (elements.some((el) => el === document.activeElement) && document.activeElement !== this.inputEl) return;
          e.preventDefault();
          e.stopPropagation();
          this.close(this.opts.enterAction ?? "submit");
        }
      });
      window.requestAnimationFrame(() => {
        (this.inputEl || first)?.focus();
      });
    }
    /** Closes the modal, cleans up DOM, resolves promise, and shows next queued modal. */
    close(action) {
      if (this.timeoutId) clearTimeout(this.timeoutId);
      this.dialog.close();
      this.dialog.remove();
      this.blocker.remove();
      document.body.querySelector(".deeplib-modal-blocker")?.remove();
      const value = this.inputEl?.value ?? "";
      this.resolve([action, value]);
      _a7.dequeue();
    }
    /** A function that adds a modal to the queue and returns a promise */
    static enqueue(modal) {
      _a7.queue.push(modal);
      if (!_a7.processing) _a7.dequeue();
      return new Promise((resolve) => modal.resolve = resolve);
    }
    /** A function that processes the queue, removing the first modal */
    static dequeue() {
      const modal = _a7.queue.shift();
      if (modal) {
        _a7.processing = true;
        modal.dialog.show();
      } else {
        _a7.processing = false;
      }
    }
  }, __name(_a7, "_Modal"), __name2(_a7, "Modal"), /** Static modal queue. */
  __publicField(_a7, "queue", []), /** Flag to indicate if a modal is currently being shown. */
  __publicField(_a7, "processing", false), _a7);
  var _a8;
  var MainMenu = (_a8 = class extends BaseSubscreen {
    constructor(module) {
      super(module);
      __publicField(this, "subscreens", []);
      this.subscreens = module.subscreens;
    }
    load() {
      if (!GUI.instance || CurrentModule !== "DeepLibMod") {
        this.setSubscreen(this);
        return;
      }
      super.load();
      const exitButton = advElement.createButton({
        id: "exit",
        size: [90, 90],
        onClick: /* @__PURE__ */ __name2(() => {
          this.exit();
        }, "onClick"),
        options: {
          image: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/dl_images/exit.svg`,
          tooltip: getText("settings.button.back_button_hint")
        }
      });
      const menu = document.getElementById("deeplib-nav-menu");
      if (menu) {
        ElementMenu.AppendButton(menu, exitButton);
      }
      for (const screen of this.subscreens) {
        if (screen.options.name == "mainmenu") continue;
        const button = advElement.createButton({
          id: `${screen.options.name}-button`,
          onClick: /* @__PURE__ */ __name2(() => {
            this.setSubscreen(screen);
          }, "onClick"),
          size: [null, 90],
          options: {
            image: screen.options.icon,
            label: getText(`mainmenu.button.${screen.options.name}`)
          }
        });
        layout.appendToSettingsDiv(button);
      }
      const miscDiv = layout.getMiscDiv();
      layout.appendToSubscreen(miscDiv);
      if (_a8.options.wikiLink) {
        const wikiButton = advElement.createButton({
          id: "deeplib-wiki-button",
          onClick: /* @__PURE__ */ __name2(() => {
            window.open(_a8.options.wikiLink, "_blank");
          }, "onClick"),
          size: [null, 80],
          options: {
            image: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/dl_images/notebook.svg`,
            label: getText("mainmenu.button.wiki")
          }
        });
        layout.appendToMiscDiv(wikiButton);
      }
      if (_a8.options.repoLink) {
        const repoButton = advElement.createButton({
          id: "deeplib-repo-button",
          onClick: /* @__PURE__ */ __name2(() => {
            window.open(_a8.options.repoLink, "_blank");
          }, "onClick"),
          size: [null, 80],
          options: {
            image: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/dl_images/git.svg`,
            label: getText("mainmenu.button.repo")
          }
        });
        layout.appendToMiscDiv(repoButton);
      }
      if (_a8.options.resetSubscreen) {
        const resetButton = advElement.createButton({
          id: "deeplib-reset-button",
          onClick: /* @__PURE__ */ __name2(() => {
            this.setSubscreen(_a8.options.resetSubscreen);
          }, "onClick"),
          size: [null, 80],
          options: {
            image: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/dl_images/trash_bin.svg`,
            label: getText("mainmenu.button.reset")
          }
        });
        layout.appendToMiscDiv(resetButton);
      }
      if (_a8.options.importExportSubscreen) {
        const importExportButton = advElement.createButton({
          id: "deeplib-import-export-button",
          onClick: /* @__PURE__ */ __name2(() => {
            this.setSubscreen(_a8.options.importExportSubscreen);
          }, "onClick"),
          size: [null, 80],
          options: {
            image: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/dl_images/transfer.svg`,
            label: getText("mainmenu.button.import_export")
          }
        });
        layout.appendToMiscDiv(importExportButton);
      }
      if (_a8.options.storageFullnessIndicator) {
        const maxStorageCapacityKB = 180;
        const currentStorageCapacityKB = byteToKB(ModStorage.measureSize(Player.OnlineSettings));
        const fullness = (currentStorageCapacityKB / maxStorageCapacityKB * 100).toFixed(1);
        const storageFullnessWrapper = advElement.createButton({
          id: CommonGenerateUniqueID(),
          size: [null, 80],
          options: {
            tooltipPosition: "left",
            noStyling: true,
            tooltip: CommonStringPartitionReplace(getText("mainmenu.meter.storage_hint"), {
              $percentage$: `${fullness}`
            }).join(""),
            label: CommonStringPartitionReplace(getText("mainmenu.meter.storage_label"), {
              $currentCapacity$: `${currentStorageCapacityKB}`,
              $maxCapacity$: `${maxStorageCapacityKB}`
            }).join("")
          },
          htmlOptions: {
            button: {
              children: [
                {
                  tag: "div",
                  attributes: { id: "deeplib-storage-meter" },
                  children: [
                    {
                      tag: "div",
                      attributes: { id: "deeplib-storage-bar" },
                      style: { width: `${fullness}%` }
                    }
                  ]
                }
              ]
            }
          }
        });
        layout.appendToMiscDiv(storageFullnessWrapper);
      }
      if (false) {
        const debugButton = advElement.createButton({
          id: "deeplib-debug-button",
          onClick: /* @__PURE__ */ __name2(() => {
            this.setSubscreen(new GuiDebug());
          }, "onClick"),
          size: [90, 90],
          options: {
            image: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/dl_images/bug.svg`
          }
        });
        if (menu) {
          ElementMenu.PrependItem(menu, debugButton);
        }
      }
    }
    run() {
      super.run();
    }
    click() {
    }
    exit() {
      CharacterAppearanceForceUpCharacter = -1;
      CharacterLoadCanvas(Player);
      const returnScreen = typeof this.options.returnScreen === "function" ? this.options.returnScreen() : this.options.returnScreen;
      if (!returnScreen) {
        PreferenceOpenSubscreen("Extensions").then(() => {
          PreferenceSubscreenExtensionsClear();
        });
      } else if (returnScreen instanceof BaseSubscreen) {
        setSubscreen(returnScreen ?? null).then(() => {
        });
      } else if (Array.isArray(returnScreen)) {
        CommonSetScreen(...returnScreen);
      }
    }
    resize() {
      super.resize();
      ElementSetPosition("deeplib-misc", 1905, 930, "bottom-right");
      ElementSetSize("deeplib-misc", 405, null);
    }
    static setOptions(mainMenuOptions) {
      _a8.options = mainMenuOptions;
    }
  }, __name(_a8, "_MainMenu"), __name2(_a8, "MainMenu"), __publicField(_a8, "options", {}), __publicField(_a8, "subscreenOptions", {
    name: "mainmenu"
  }), _a8);
  async function PreferenceOpenSubscreen(subscreen, page = 1) {
    if (CurrentModule !== "Character" || CurrentScreen !== "Preference") {
      await CommonSetScreen("Character", "Preference");
    }
    PreferenceSubscreen?.unload?.();
    PreferenceSubscreen = PreferenceSubscreens.find((s) => s.name === subscreen) ?? null;
    if (!CommonIsNonNegativeInteger(page)) page = 1;
    PreferencePageCurrent = page;
    PreferenceMessage = "";
    PreferenceSubscreen?.load?.();
  }
  __name(PreferenceOpenSubscreen, "PreferenceOpenSubscreen");
  __name2(PreferenceOpenSubscreen, "PreferenceOpenSubscreen");
  var _a9;
  var GuiImportExport = (_a9 = class extends BaseSubscreen {
    constructor(importExportOptions) {
      super();
      __publicField(this, "importExportOptions");
      this.importExportOptions = importExportOptions;
    }
    load() {
      super.load();
      const importFromFileButton = advElement.createButton({
        id: "deeplib-import-file-button",
        size: [600, 90],
        onClick: /* @__PURE__ */ __name2(() => {
          this.dataImport("file");
        }, "onClick"),
        options: {
          image: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/dl_images/file_import.svg`,
          label: getText("import-export.button.import_file")
        }
      });
      layout.appendToSettingsDiv(importFromFileButton);
      const exportToFileButton = advElement.createButton({
        id: "deeplib-export-file-button",
        size: [600, 90],
        onClick: /* @__PURE__ */ __name2(() => {
          this.dataExport("file");
        }, "onClick"),
        options: {
          image: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/dl_images/file_export.svg`,
          label: getText("import-export.button.export_file")
        }
      });
      layout.appendToSettingsDiv(exportToFileButton);
      const importFromClipboardButton = advElement.createButton({
        id: "deeplib-import-clipboard-button",
        size: [600, 90],
        onClick: /* @__PURE__ */ __name2(() => {
          this.dataImport("clipboard");
        }, "onClick"),
        options: {
          image: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/dl_images/clipboard_import.svg`,
          label: getText("import-export.button.import_clipboard")
        }
      });
      layout.appendToSettingsDiv(importFromClipboardButton);
      const exportToClipboardButton = advElement.createButton({
        id: "deeplib-export-clipboard-button",
        size: [600, 90],
        onClick: /* @__PURE__ */ __name2(() => {
          this.dataExport("clipboard");
        }, "onClick"),
        options: {
          image: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/dl_images/clipboard_export.svg`,
          label: getText("import-export.button.export_clipboard")
        }
      });
      layout.appendToSettingsDiv(exportToClipboardButton);
    }
    resize() {
      super.resize();
    }
    /** Exports the mod data using the specified method. */
    async dataExport(transferMethod) {
      try {
        const data = LZString.compressToBase64(JSON.stringify(modStorage.playerStorage));
        if (transferMethod === "clipboard") {
          await this.exportToClipboard(data);
        } else if (transferMethod === "file") {
          await this.exportToFile(data, "themed_settings");
        }
        this.importExportOptions.onExport?.();
        ToastManager.success("Data exported successfully.");
      } catch (error) {
        ToastManager.error("Data export failed.");
        deepLibLogger.error(`Data export failed for ${ModSdkManager.ModInfo.name}.`, error);
      }
    }
    /** Imports mod data using the specified method. */
    async dataImport(transferMethod) {
      try {
        let importedData = "";
        if (transferMethod === "clipboard") {
          importedData = await this.importFromClipboard() ?? null;
        } else if (transferMethod === "file") {
          importedData = await this.importFromFile() ?? null;
        }
        if (!importedData) {
          throw new Error("No data imported.");
        }
        const data = JSON.parse(LZString.decompressFromBase64(importedData) ?? "");
        if (!data) {
          throw new Error("Invalid data.");
        }
        modStorage.playerStorage = data;
        this.importExportOptions.onImport?.();
        ToastManager.success("Data imported successfully.");
      } catch (error) {
        ToastManager.error("Data import failed.");
        deepLibLogger.error(`Data import failed for ${ModSdkManager.ModInfo.name}.`, error);
      }
    }
    /** Saves data to a file using the browser's save dialog. */
    async exportToFile(data, defaultFileName) {
      const CUSTOM_EXTENSION = this.importExportOptions.customFileExtension.startsWith(".") ? this.importExportOptions.customFileExtension : "." + this.importExportOptions.customFileExtension;
      const suggestedName = defaultFileName.endsWith(CUSTOM_EXTENSION) ? defaultFileName : defaultFileName + CUSTOM_EXTENSION;
      if ("showSaveFilePicker" in window) {
        try {
          const handle = await window.showSaveFilePicker({
            suggestedName,
            types: [
              {
                description: "Custom Data Files",
                accept: { "text/plain": [CUSTOM_EXTENSION] }
              }
            ]
          });
          const writable = await handle.createWritable();
          await writable.write(data);
          await writable.close();
        } catch (error) {
          throw new Error("File save cancelled or failed: " + error.message);
        }
      } else {
        const fileName = await Modal.prompt("Enter file name", suggestedName);
        if (fileName === null) {
          return;
        } else if (fileName === "") {
          throw new Error("File name cannot be empty.");
        }
        const blob = new Blob([data], { type: "text/plain" });
        const link2 = ElementCreate({
          tag: "a",
          attributes: {
            href: URL.createObjectURL(blob),
            download: fileName.endsWith(CUSTOM_EXTENSION) ? fileName : fileName + CUSTOM_EXTENSION
          }
        });
        link2.click();
        URL.revokeObjectURL(link2.href);
      }
    }
    /** Opens a file picker and reads the selected file's contents, importing the data. */
    async importFromFile() {
      const CUSTOM_EXTENSION = this.importExportOptions.customFileExtension.startsWith(".") ? this.importExportOptions.customFileExtension : "." + this.importExportOptions.customFileExtension;
      async function importFromFileInternal(file) {
        if (!file.name.endsWith(CUSTOM_EXTENSION)) {
          throw new Error(`Invalid file type. Expected a ${CUSTOM_EXTENSION} file.`);
        }
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = () => reject(new Error("Failed to read file."));
          reader.readAsText(file);
        });
      }
      __name(importFromFileInternal, "importFromFileInternal");
      __name2(importFromFileInternal, "importFromFileInternal");
      if ("showOpenFilePicker" in window) {
        try {
          const [fileHandle] = await window.showOpenFilePicker({
            types: [
              {
                description: "Custom Data Files",
                accept: { "text/plain": [CUSTOM_EXTENSION] }
              }
            ],
            multiple: false
          });
          const file = await fileHandle.getFile();
          return await importFromFileInternal(file);
        } catch (error) {
          throw new Error("File selection cancelled or failed: " + error.message);
        }
      } else {
        return new Promise((resolve, reject) => {
          const input = document.createElement("input");
          input.type = "file";
          input.accept = CUSTOM_EXTENSION;
          input.onchange = async (event) => {
            const file = event.target.files?.[0];
            if (file) {
              try {
                const data = await importFromFileInternal(file);
                resolve(data);
              } catch (error) {
                reject(error);
              }
            } else {
              reject(new Error("No file selected."));
            }
          };
          input.click();
        });
      }
    }
    /** Copies the given data to the clipboard. */
    async exportToClipboard(data) {
      return navigator.clipboard.writeText(data).catch((error) => {
        throw new Error("Failed to copy data to clipboard." + error);
      });
    }
    /** Prompts the user to enter data and returns it. */
    async importFromClipboard() {
      return Modal.prompt("Enter data to import").catch((error) => {
        throw new Error("Failed to read data from clipboard." + error);
      });
    }
  }, __name(_a9, "GuiImportExport"), __name2(_a9, "GuiImportExport"), __publicField(_a9, "subscreenOptions", {
    name: "import-export"
  }), _a9);
  var _a10;
  var ModStorage = (_a10 = class {
    constructor(modName) {
      /** The unique mod identifier used as key prefix in storage */
      __publicField(this, "modName");
      if (!_a10._instance) {
        _a10._instance = this;
        this.modName = modName;
      }
      this.modName ?? (this.modName = modName);
      return _a10._instance;
    }
    get playerStorage() {
      return Player[this.modName];
    }
    set playerStorage(value) {
      Player[this.modName] = value;
    }
    get extensionStorage() {
      return Player.ExtensionSettings[this.modName];
    }
    set extensionStorage(value) {
      Player.ExtensionSettings[this.modName] = value;
    }
    setLocalStorage(key, value) {
      localStorage.setItem(`${this.modName}_${key}`, _a10.dataCompress(value));
    }
    getLocalStorage(key) {
      const data = localStorage.getItem(`${this.modName}_${key}`);
      if (!data) return null;
      return _a10.dataDecompress(data);
    }
    load() {
      if (this.extensionStorage) {
        const parsed = _a10.dataDecompress(this.extensionStorage || "");
        if (parsed === null || !Object.hasOwn(parsed, "Version")) {
          this.playerStorage = {};
        } else {
          this.playerStorage = parsed;
        }
        ;
      } else {
        this.playerStorage = {};
      }
    }
    save() {
      if (!this.extensionStorage) this.extensionStorage = "";
      this.extensionStorage = _a10.dataCompress(this.playerStorage);
      ServerPlayerExtensionSettingsSync(this.modName);
    }
    static dataDecompress(string) {
      const d = LZString.decompressFromBase64(string);
      let data = null;
      try {
        const decoded = JSON.parse(d);
        data = decoded;
      } catch (error) {
        deepLibLogger.error(error);
      }
      return data;
    }
    static dataCompress(object) {
      return LZString.compressToBase64(JSON.stringify(object));
    }
    static measureSize(data) {
      try {
        if (typeof data !== "string") {
          data = JSON.stringify(data) || "";
        }
        if (typeof data === "string") {
          return new TextEncoder().encode(data).byteLength;
        }
        throw new Error();
      } catch {
        return NaN;
      }
    }
  }, __name(_a10, "_ModStorage"), __name2(_a10, "ModStorage"), /** Singleton instance of ModStorage */
  __publicField(_a10, "_instance", null), _a10);
  var domUtil = {
    /**
     * Automatically sets the position of the element based on the given position.
     * The position can be either a [x, y] tuple or a function returning such a tuple.
     * If both x and y are defined, the element's position is updated accordingly.
     */
    autoSetPosition,
    /**
     * Automatically sets the size of the element based on the given size.
     * The size can be either a [width, height] tuple or a function returning such a tuple.
     * If both width and height are defined, the element's size is updated accordingly.
     */
    autoSetSize,
    /**
     * Hides the element by setting its CSS display property to 'none'.
     * If the element cannot be found, the function does nothing.
     */
    hide,
    /**
     * Unhides the element by clearing its CSS display property (sets it to '').
     * If the element cannot be found, the function does nothing.
     */
    unhide,
    /**
     * Checks if the element has overflow content.
     * Returns an object indicating if there is any overflow,
     * and specifically if there is vertical or horizontal overflow.
     * Returns null if the element is not found.
     */
    hasOverflow
  };
  function autoSetPosition(_, position) {
    let xPos = void 0;
    let yPos = void 0;
    if (Array.isArray(position)) {
      xPos = position[0];
      yPos = position[1];
    } else if (typeof position === "function") {
      const result = position();
      xPos = result[0];
      yPos = result[1];
    }
    if (xPos !== void 0 && yPos !== void 0) ElementSetPosition(_, xPos, yPos);
  }
  __name(autoSetPosition, "autoSetPosition");
  __name2(autoSetPosition, "autoSetPosition");
  function autoSetSize(_, size) {
    let width = void 0;
    let height = void 0;
    if (Array.isArray(size)) {
      width = size[0];
      height = size[1];
    } else if (typeof size === "function") {
      const result = size();
      width = result[0];
      height = result[1];
    }
    if (width !== void 0 && height !== void 0) ElementSetSize(_, width, height);
  }
  __name(autoSetSize, "autoSetSize");
  __name2(autoSetSize, "autoSetSize");
  function hide(_) {
    const element = ElementWrap(_);
    if (!element) return;
    element.style.display = "none";
  }
  __name(hide, "hide");
  __name2(hide, "hide");
  function unhide(_) {
    const element = ElementWrap(_);
    if (!element) return;
    element.style.display = "";
  }
  __name(unhide, "unhide");
  __name2(unhide, "unhide");
  function hasOverflow(el) {
    const element = ElementWrap(el);
    if (!element) return null;
    const vertical = element.scrollHeight > element.clientHeight;
    const horizontal = element.scrollWidth > element.clientWidth;
    return {
      any: vertical || horizontal,
      vertical,
      horizontal
    };
  }
  __name(hasOverflow, "hasOverflow");
  __name2(hasOverflow, "hasOverflow");
  var layout = {
    getSubscreen: elementGetSubscreenDiv,
    appendToSubscreen: elementAppendToSubscreenDiv,
    removeSubscreen: elementRemoveSubscreenDiv,
    getSettingsDiv: elementGetSettingsDiv,
    appendToSettingsDiv: elementAppendToSettingsDiv,
    removeSettingsDiv: elementRemoveSettingsDiv,
    getMiscDiv: elementGetMiscDiv,
    appendToMiscDiv: elementAppendToMiscDiv,
    removeMiscDiv: elementRemoveMiscDiv
  };
  function elementGetSubscreenDiv() {
    const subscreenDiv = ElementWrap("deeplib-subscreen");
    if (subscreenDiv) {
      return subscreenDiv;
    }
    const div = ElementCreate({
      tag: "div",
      classList: ["deeplib-subscreen", "HideOnPopup"],
      attributes: { id: "deeplib-subscreen" }
    });
    return document.body.appendChild(div);
  }
  __name(elementGetSubscreenDiv, "elementGetSubscreenDiv");
  __name2(elementGetSubscreenDiv, "elementGetSubscreenDiv");
  function elementRemoveSubscreenDiv() {
    return elementGetSubscreenDiv()?.remove();
  }
  __name(elementRemoveSubscreenDiv, "elementRemoveSubscreenDiv");
  __name2(elementRemoveSubscreenDiv, "elementRemoveSubscreenDiv");
  function elementAppendToSubscreenDiv(...element) {
    return elementGetSubscreenDiv()?.append(...element);
  }
  __name(elementAppendToSubscreenDiv, "elementAppendToSubscreenDiv");
  __name2(elementAppendToSubscreenDiv, "elementAppendToSubscreenDiv");
  function elementGetSettingsDiv() {
    const settingsDiv = ElementWrap("deeplib-settings");
    if (settingsDiv) {
      return settingsDiv;
    }
    const div = ElementCreate({
      tag: "div",
      classList: ["deeplib-settings", "scroll-box"],
      attributes: { id: "deeplib-settings" }
    });
    return div;
  }
  __name(elementGetSettingsDiv, "elementGetSettingsDiv");
  __name2(elementGetSettingsDiv, "elementGetSettingsDiv");
  function elementAppendToSettingsDiv(...element) {
    return elementGetSettingsDiv()?.append(...element);
  }
  __name(elementAppendToSettingsDiv, "elementAppendToSettingsDiv");
  __name2(elementAppendToSettingsDiv, "elementAppendToSettingsDiv");
  function elementRemoveSettingsDiv() {
    return elementGetSettingsDiv()?.remove();
  }
  __name(elementRemoveSettingsDiv, "elementRemoveSettingsDiv");
  __name2(elementRemoveSettingsDiv, "elementRemoveSettingsDiv");
  function elementGetMiscDiv() {
    const miscDiv = ElementWrap("deeplib-misc");
    if (miscDiv) {
      return miscDiv;
    }
    const div = ElementCreate({
      tag: "div",
      classList: ["deeplib-misc"],
      attributes: { id: "deeplib-misc" }
    });
    return div;
  }
  __name(elementGetMiscDiv, "elementGetMiscDiv");
  __name2(elementGetMiscDiv, "elementGetMiscDiv");
  function elementAppendToMiscDiv(...element) {
    return elementGetMiscDiv()?.append(...element);
  }
  __name(elementAppendToMiscDiv, "elementAppendToMiscDiv");
  __name2(elementAppendToMiscDiv, "elementAppendToMiscDiv");
  function elementRemoveMiscDiv() {
    return elementGetMiscDiv()?.remove();
  }
  __name(elementRemoveMiscDiv, "elementRemoveMiscDiv");
  __name2(elementRemoveMiscDiv, "elementRemoveMiscDiv");
  var _a11;
  var Logger = (_a11 = class extends Array {
    constructor(modName) {
      super();
      __publicField(this, "ModName", "DeepLib");
      if (modName) {
        this.ModName = modName;
      }
    }
    _Log(level, ...args) {
      const logEntry = {
        logLevel: level,
        args: [...args],
        // trace: arguments.callee.caller.toString().split('\n'), 
        date: new Date(Date.now())
        // `[${this.ModName}] ${formattedArgs}` 
      };
      const userAgent = navigator.userAgent.toLowerCase();
      if (userAgent.includes("chrome") || userAgent.includes("firefox")) {
        const color = _a11.colorizeLog(level);
        args.forEach((arg) => {
          if (typeof arg === "string") {
            arg = `
%c${arg}`;
          }
        });
        console.log(`%c${this.ModName}:`, color, ...args);
      } else {
        console.log(`${this.ModName}:`, ...args);
      }
      this.push(logEntry);
    }
    info(...args) {
      this._Log("info", ...args);
    }
    log(...args) {
      this._Log("log", ...args);
    }
    warn(...args) {
      this._Log("warn", ...args);
    }
    error(...args) {
      this._Log("error", ...args);
    }
    debug(...args) {
      this._Log("debug", ...args);
    }
    static colorizeLog(logLevel) {
      const colors = {
        info: "color: #32CCCC",
        log: "color: #CCCC32",
        warn: "color: #eec355",
        error: "color: #750b0b",
        debug: "color: #9E4BCF"
      };
      return colors[logLevel];
    }
  }, __name(_a11, "_Logger"), __name2(_a11, "Logger"), _a11);
  var deepLibLogger = new Logger();
  function sendLocalMessage(id, message, timeoutInSeconds) {
    const element = ElementCreate({
      tag: "div",
      classList: ["ChatMessage", "deeplib-message", "ChatMessageNonDialogue"],
      attributes: {
        id: id ?? `DEEPLIB_LOCAL_MESSAGE_${Date.now()}`,
        "data-time": ChatRoomCurrentTime(),
        "data-sender": Player.MemberNumber?.toString()
      },
      children: [
        {
          tag: "span",
          classList: ["deeplib-text"],
          innerHTML: message.replaceAll("\n	", "")
        },
        {
          tag: "br"
        },
        {
          tag: "a",
          classList: ["deeplib-text"],
          attributes: {
            href: "#"
          },
          innerHTML: "<b>Close (Click)</b>",
          eventListeners: {
            click: /* @__PURE__ */ __name2(() => {
              element.remove();
            }, "click")
          }
        }
      ]
    });
    ChatRoomAppendChat(element);
    if (!timeoutInSeconds) return;
    setTimeout(() => element.remove(), timeoutInSeconds * 1e3);
  }
  __name(sendLocalMessage, "sendLocalMessage");
  __name2(sendLocalMessage, "sendLocalMessage");
  function sendActionMessage(msg, target = void 0, dictionary = []) {
    if (!msg) return;
    ServerSend("ChatRoomChat", {
      Content: "DEEPLIB_CUSTOM_ACTION",
      Type: "Action",
      Target: target ?? void 0,
      Dictionary: [
        { Tag: 'MISSING TEXT IN "Interface.csv": DEEPLIB_CUSTOM_ACTION', Text: msg },
        ...dictionary
      ]
    });
  }
  __name(sendActionMessage, "sendActionMessage");
  __name2(sendActionMessage, "sendActionMessage");
  var import_bondage_club_mod_sdk = __toESM(require_bcmodsdk(), 1);
  var rawSdk = import_bondage_club_mod_sdk.default;
  var bcModSdkRef = rawSdk.default ?? rawSdk;
  var HookPriority = {
    Observe: 0,
    AddBehavior: 1,
    ModifyBehavior: 5,
    OverrideBehavior: 10,
    Top: 100
  };
  var _a12;
  var ModSdkManager = (_a12 = class {
    /** Registers a mod with the SDK and stores mod information. */
    constructor(info, options2) {
      _a12.SDK = bcModSdkRef.registerMod(info, options2);
      _a12.ModInfo = info;
    }
    /** Retrieves or initializes patch data for a given target function. */
    initPatchableFunction(target) {
      let result = _a12.patchedFunctions.get(target);
      if (!result) {
        result = {
          name: target,
          hooks: []
        };
        _a12.patchedFunctions.set(target, result);
      }
      return result;
    }
    /**
     * Hooks a function with a callback at a given priority. 
     * 
     * Prevents duplicate hooks.
     */
    hookFunction(target, priority, hook, module = null) {
      const data = this.initPatchableFunction(target);
      if (data.hooks.some((h) => h.hook === hook)) {
        return () => null;
      }
      const removeCallback = _a12.SDK?.hookFunction(target, priority, hook);
      data.hooks.push({
        hook,
        priority,
        module,
        removeCallback
      });
      data.hooks.sort((a, b) => b.priority - a.priority);
      return removeCallback;
    }
    /**
     * Applies patches to a target function.
     * 
     * **This method is DANGEROUS** to use and has high potential to conflict with other mods.
     */
    patchFunction(target, patches) {
      _a12.SDK?.patchFunction(target, patches);
    }
    /**
     * Removes all patches from a target function.
     */
    unpatchFunction(target) {
      _a12.SDK?.removePatches(target);
    }
    /**
     * Removes all hooks associated with a specific module from a target function.
     */
    removeHookByModule(target, module) {
      const data = this.initPatchableFunction(target);
      for (let i = data.hooks.length - 1; i >= 0; i--) {
        if (data.hooks[i].module === module) {
          data.hooks[i].removeCallback();
          data.hooks.splice(i, 1);
        }
      }
      return true;
    }
    /**
     * Removes all hooks associated with a specific module across all patched functions.
     */
    removeAllHooksByModule(module) {
      for (const data of _a12.patchedFunctions.values()) {
        for (let i = data.hooks.length - 1; i >= 0; i--) {
          if (data.hooks[i].module === module) {
            data.hooks[i].removeCallback();
            data.hooks.splice(i, 1);
          }
        }
      }
      return true;
    }
  }, __name(_a12, "_ModSdkManager"), __name2(_a12, "ModSdkManager"), __publicField(_a12, "SDK"), __publicField(_a12, "patchedFunctions", /* @__PURE__ */ new Map()), __publicField(_a12, "ModInfo"), _a12);
  var Style = {
    /**
     * Injects a CSS style block directly into the document head using a <style> tag.
     * If a style element with the same `styleId` already exists, it won't inject again.
     */
    injectInline(styleId, styleSource) {
      const isStyleLoaded = document.getElementById(styleId);
      if (isStyleLoaded) return;
      const styleElement = document.createElement("style");
      styleElement.id = styleId;
      styleElement.appendChild(document.createTextNode(styleSource));
      document.head.appendChild(styleElement);
    },
    /**
     * Injects a CSS stylesheet link into the document head using a <link> tag.
     * If a link element with the same `styleId` already exists, it won't inject again.
     */
    injectEmbed(styleId, styleLink) {
      const isStyleLoaded = document.getElementById(styleId);
      if (isStyleLoaded) return;
      const styleElement = document.createElement("link");
      styleElement.id = styleId;
      styleElement.rel = "stylesheet";
      styleElement.href = styleLink;
      document.head.appendChild(styleElement);
    },
    /**
     * Removes a style element from the document head by its ID.
     * Does nothing if the element is not found.
     */
    eject(id) {
      const style = document.getElementById(id);
      if (!style) return;
      style.remove();
    },
    /**
     * Reloads an inline style by removing the existing style element (if any)
     * and injecting the new styles inline again.
     */
    reload(styleId, styleSource) {
      Style.eject(styleId);
      Style.injectInline(styleId, styleSource);
    },
    /** Fetches the text content of a stylesheet or any resource at the given link. */
    async fetch(link2) {
      return fetch(link2).then((res) => res.text());
    }
  };
  var _a13;
  var Localization = (_a13 = class {
    /** Initialize the localization system by loading translation files. */
    static async init(initOptions) {
      if (_a13.initialized) return;
      _a13.initialized = true;
      _a13.PathToModTranslation = (() => {
        if (!initOptions?.pathToTranslationsFolder) return void 0;
        return initOptions.pathToTranslationsFolder.endsWith("/") ? initOptions.pathToTranslationsFolder : `${initOptions.pathToTranslationsFolder}/`;
      })();
      _a13.DefaultLanguage = initOptions?.defaultLanguage || _a13.DefaultLanguage;
      const lang = initOptions?.fixedLanguage ? _a13.DefaultLanguage : TranslationLanguage.toLowerCase();
      const libTranslation = await _a13.fetchLanguageFile(_a13.PathToLibTranslation, lang);
      if (lang === _a13.DefaultLanguage) {
        _a13.LibTranslation = libTranslation;
      } else {
        const fallbackTranslation = await _a13.fetchLanguageFile(_a13.PathToLibTranslation, _a13.DefaultLanguage);
        _a13.LibTranslation = { ...fallbackTranslation, ...libTranslation };
      }
      if (!_a13.PathToModTranslation) return;
      const modTranslation = await _a13.fetchLanguageFile(_a13.PathToModTranslation, lang);
      if (lang === _a13.DefaultLanguage) {
        _a13.ModTranslation = modTranslation;
      } else {
        const fallbackTranslation = await _a13.fetchLanguageFile(_a13.PathToModTranslation, _a13.DefaultLanguage);
        _a13.ModTranslation = { ...fallbackTranslation, ...modTranslation };
      }
    }
    /** Get a translated string from mod translations by source tag. */
    static getTextMod(srcTag) {
      return _a13.ModTranslation?.[srcTag] || void 0;
    }
    /** Get a translated string from library translations by source tag. */
    static getTextLib(srcTag) {
      return _a13.LibTranslation?.[srcTag] || void 0;
    }
    /**
     * Fetch and parse a language file from the given base URL and language code.
     * Falls back to default language if the requested language file is unavailable.
     */
    static async fetchLanguageFile(baseUrl, lang) {
      const response = await fetch(`${baseUrl}${lang}.lang`);
      if (lang !== _a13.DefaultLanguage && !response.ok) {
        return this.fetchLanguageFile(baseUrl, _a13.DefaultLanguage);
      }
      if (!response.ok) {
        return {};
      }
      const langFileContent = await response.text();
      return this.parseLanguageFile(langFileContent);
    }
    /**
     * Parse the raw content of a language file into a TranslationDict.
     * Ignores empty lines and comments starting with '#'.
     */
    static parseLanguageFile(content) {
      const translations = {};
      const lines = content.split("\n");
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        const [key, ...rest] = trimmed.split("=");
        translations[key.trim()] = rest.join("=").trim();
      }
      return translations;
    }
  }, __name(_a13, "_Localization"), __name2(_a13, "Localization"), __publicField(_a13, "LibTranslation", {}), __publicField(_a13, "ModTranslation", {}), __publicField(_a13, "PathToModTranslation"), __publicField(_a13, "PathToLibTranslation", `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/dl_translations/`), __publicField(_a13, "DefaultLanguage", "en"), /** Flag to prevent re-initialization */
  __publicField(_a13, "initialized", false), _a13);
  var getText = /* @__PURE__ */ __name2((srcTag) => {
    return Localization.getTextMod(srcTag) || Localization.getTextLib(srcTag) || srcTag;
  }, "getText");
  var _a14;
  var EventChannel = (_a14 = class {
    constructor(channelName) {
      __publicField(this, "listeners", {});
      this.channelName = channelName;
      ModSdkManager.prototype.hookFunction("ChatRoomMessageProcessHidden", 0, (args, next) => {
        if (!this.isChannelMessage(args[0])) {
          return next(args);
        }
        const [message, sender] = args;
        const { type, data } = message.Dictionary[0];
        const listeners = this.listeners[type];
        if (listeners) {
          listeners.forEach((listener) => listener(data, sender));
        }
        return next(args);
      }, `EventChannel-${channelName}`);
    }
    unload() {
      Object.keys(this.listeners).forEach((key) => delete this.listeners[key]);
      ModSdkManager.prototype.removeHookByModule("ChatRoomMessageProcessHidden", `EventChannel-${this.channelName}`);
    }
    sendEvent(type, data, target = null) {
      const packet = {
        Type: "Hidden",
        Content: this.channelName,
        Sender: Player.MemberNumber,
        ...target ? { Target: target } : {},
        Dictionary: [
          {
            type,
            data
          }
        ]
      };
      ServerSend("ChatRoomChat", packet);
    }
    registerListener(event, listener) {
      const listeners = this.listeners[event] ?? [];
      listeners.push(listener);
      this.listeners[event] = listeners;
      return () => this.unregisterListener(event, listener);
    }
    unregisterListener(event, listener) {
      const listeners = this.listeners[event];
      if (listeners) {
        const index = listeners.indexOf(listener);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      }
    }
    isChannelMessage(message) {
      return message && message.Type === "Hidden" && message.Content === this.channelName && message.Sender && message.Sender !== Player.MemberNumber && message.Dictionary && !!message.Dictionary[0]?.data && !!message.Dictionary[0]?.type || false;
    }
  }, __name(_a14, "EventChannel"), __name2(_a14, "EventChannel"), _a14);

  // src/utilities/data.ts
  function settingsReset() {
    modStorage.playerStorage = {};
    modStorage.save();
  }
  __name(settingsReset, "settingsReset");
  function localSettingsLoad() {
    const data = modStorage.getLocalStorage("LocalData");
    if (!data) {
      window.ThemedLocalData = {
        loginOptions: {
          hideDummy: false,
          hideCredits: false
        }
      };
      localSettingsSave();
    } else {
      window.ThemedLocalData = data;
    }
  }
  __name(localSettingsLoad, "localSettingsLoad");
  function localSettingsSave() {
    modStorage.setLocalStorage("LocalData", window.ThemedLocalData);
  }
  __name(localSettingsSave, "localSettingsSave");

  // src/hooks/login_options.ts
  var ids = {
    optionsOpen: "tmd-login-options-open",
    optionsClose: "tmd-login-options-dialog-close",
    optionsSheet: "tmd-login-options-dialog",
    optionsContent: "tmd-login-options-dialog-content",
    optionsStyle: "tmd-login-options-style"
  };
  var options = {
    hideCredits: "Hide Credits",
    hideDummy: "Hide Dummy"
  };
  function loadLoginOptions() {
    localSettingsLoad();
    patchLoginPage();
    Style.injectEmbed(ids.optionsStyle, `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/styles/login-options.css`);
    createUI();
    const loginRunHook = sdk.hookFunction("LoginRun", HookPriority.Observe, (args, next) => {
      next(args);
      ElementSetPosition(ids.optionsOpen, 2e3, 1e3, "bottom-right");
      ElementSetSize(ids.optionsOpen, 90, 90);
      ElementSetSize(ids.optionsSheet, 1e3, 500);
    });
    const loginExitHook = sdk.hookFunction("LoginUnload", HookPriority.Observe, (args, next) => {
      loginExitHook();
      loginRunHook();
      removeUI();
      Style.eject(ids.optionsStyle);
      unpatchLoginPage();
      return next(args);
    });
  }
  __name(loadLoginOptions, "loadLoginOptions");
  function createUI() {
    const loginOptions = window.ThemedLocalData.loginOptions;
    const optionsButton = ElementButton.Create(ids.optionsOpen, () => optionsSheet.showModal(), {
      tooltip: "[Themed] Login Options",
      image: "./Icons/Preference.png"
    });
    document.body.appendChild(optionsButton);
    const optionsSheet = ElementCreate({
      tag: "dialog",
      attributes: {
        id: ids.optionsSheet
      },
      children: [
        {
          tag: "div",
          attributes: {
            id: ids.optionsContent
          },
          children: [
            ...Array.from(Object.entries(options)).map(([key, value]) => {
              const typedKey = key;
              return {
                tag: "label",
                classList: ["tmd-login-options-label"],
                children: [
                  ElementCheckbox.Create(
                    `tmd-login-options-${key}`,
                    () => {
                      loginOptions[typedKey] = !loginOptions[typedKey];
                      localSettingsSave();
                      repatchLoginPage();
                    },
                    {
                      checked: loginOptions[typedKey]
                    }
                  ),
                  value
                ]
              };
            })
          ]
        },
        ElementButton.Create(
          ids.optionsClose,
          () => optionsSheet.close(),
          {
            label: "Close"
          }
        )
      ],
      parent: document.body
    });
  }
  __name(createUI, "createUI");
  function removeUI() {
    document.getElementById(ids.optionsOpen)?.remove();
    document.getElementById(ids.optionsSheet)?.remove();
  }
  __name(removeUI, "removeUI");
  function patchLoginPage() {
    const loginOptions = window.ThemedLocalData.loginOptions;
    if (loginOptions.hideDummy) {
      sdk.patchFunction("LoginRun", {
        "DrawCharacter(LoginCharacter, 1400, 100, 0.9);": ""
      });
      sdk.patchFunction("LoginDoNextThankYou", {
        "CharacterRelease(LoginCharacter, false);": "",
        "CharacterAppearanceFullRandom(LoginCharacter);": "",
        'if (InventoryGet(LoginCharacter, "ItemNeck") != null) InventoryRemove(LoginCharacter, "ItemNeck", false);': "",
        "CharacterFullRandomRestrain(LoginCharacter)": ""
      });
    }
    if (loginOptions.hideCredits) {
      sdk.patchFunction("LoginRun", {
        "if (LoginCredits) LoginDrawCredits();": "if (false) LoginDrawCredits();",
        'DrawImage("Screens/" + CurrentModule + "/" + CurrentScreen + "/Bubble.png", 1400, 16);': "",
        'DrawText(TextGet("ThankYou") + " " + LoginThankYou, 1625, 53, "Black", "Gray");': ""
      });
      sdk.patchFunction("LoginDoNextThankYou", {
        "LoginThankYou = CommonRandomItemFromList(LoginThankYou, LoginThankYouList)": ""
      });
    }
  }
  __name(patchLoginPage, "patchLoginPage");
  function unpatchLoginPage() {
    sdk.unpatchFunction("LoginRun");
    sdk.unpatchFunction("LoginDoNextThankYou");
  }
  __name(unpatchLoginPage, "unpatchLoginPage");
  function repatchLoginPage() {
    unpatchLoginPage();
    patchLoginPage();
  }
  __name(repatchLoginPage, "repatchLoginPage");

  // src/migrators/v140_migrator.ts
  var _V140Migrator = class _V140Migrator extends BaseMigrator2 {
    get migrationVersion() {
      return "1.4.0";
    }
    migrate() {
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

  // node_modules/.pnpm/color-name@2.0.0/node_modules/color-name/index.js
  var color_name_default = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  };

  // node_modules/.pnpm/color-string@2.1.0/node_modules/color-string/index.js
  var reverseNames = /* @__PURE__ */ Object.create(null);
  for (const name in color_name_default) {
    if (Object.hasOwn(color_name_default, name)) {
      reverseNames[color_name_default[name]] = name;
    }
  }
  var cs = {
    to: {},
    get: {}
  };
  cs.get = function(string) {
    const prefix = string.slice(0, 3).toLowerCase();
    let value;
    let model;
    switch (prefix) {
      case "hsl": {
        value = cs.get.hsl(string);
        model = "hsl";
        break;
      }
      case "hwb": {
        value = cs.get.hwb(string);
        model = "hwb";
        break;
      }
      default: {
        value = cs.get.rgb(string);
        model = "rgb";
        break;
      }
    }
    if (!value) {
      return null;
    }
    return { model, value };
  };
  cs.get.rgb = function(string) {
    if (!string) {
      return null;
    }
    const abbr = /^#([a-f\d]{3,4})$/i;
    const hex = /^#([a-f\d]{6})([a-f\d]{2})?$/i;
    const rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/;
    const per = /^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/;
    const keyword = /^(\w+)$/;
    let rgb = [0, 0, 0, 1];
    let match;
    let i;
    let hexAlpha;
    if (match = string.match(hex)) {
      hexAlpha = match[2];
      match = match[1];
      for (i = 0; i < 3; i++) {
        const i2 = i * 2;
        rgb[i] = Number.parseInt(match.slice(i2, i2 + 2), 16);
      }
      if (hexAlpha) {
        rgb[3] = Number.parseInt(hexAlpha, 16) / 255;
      }
    } else if (match = string.match(abbr)) {
      match = match[1];
      hexAlpha = match[3];
      for (i = 0; i < 3; i++) {
        rgb[i] = Number.parseInt(match[i] + match[i], 16);
      }
      if (hexAlpha) {
        rgb[3] = Number.parseInt(hexAlpha + hexAlpha, 16) / 255;
      }
    } else if (match = string.match(rgba)) {
      for (i = 0; i < 3; i++) {
        rgb[i] = Number.parseInt(match[i + 1], 10);
      }
      if (match[4]) {
        rgb[3] = match[5] ? Number.parseFloat(match[4]) * 0.01 : Number.parseFloat(match[4]);
      }
    } else if (match = string.match(per)) {
      for (i = 0; i < 3; i++) {
        rgb[i] = Math.round(Number.parseFloat(match[i + 1]) * 2.55);
      }
      if (match[4]) {
        rgb[3] = match[5] ? Number.parseFloat(match[4]) * 0.01 : Number.parseFloat(match[4]);
      }
    } else if (match = string.match(keyword)) {
      if (match[1] === "transparent") {
        return [0, 0, 0, 0];
      }
      if (!Object.hasOwn(color_name_default, match[1])) {
        return null;
      }
      rgb = color_name_default[match[1]];
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
    const hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    const match = string.match(hsl);
    if (match) {
      const alpha = Number.parseFloat(match[4]);
      const h = (Number.parseFloat(match[1]) % 360 + 360) % 360;
      const s = clamp(Number.parseFloat(match[2]), 0, 100);
      const l = clamp(Number.parseFloat(match[3]), 0, 100);
      const a = clamp(Number.isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
    }
    return null;
  };
  cs.get.hwb = function(string) {
    if (!string) {
      return null;
    }
    const hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*[\s,]\s*([+-]?[\d.]+)%\s*[\s,]\s*([+-]?[\d.]+)%\s*(?:[\s,]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
    const match = string.match(hwb);
    if (match) {
      const alpha = Number.parseFloat(match[4]);
      const h = (Number.parseFloat(match[1]) % 360 + 360) % 360;
      const w = clamp(Number.parseFloat(match[2]), 0, 100);
      const b = clamp(Number.parseFloat(match[3]), 0, 100);
      const a = clamp(Number.isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
    }
    return null;
  };
  cs.to.hex = function(...rgba) {
    return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
  };
  cs.to.rgb = function(...rgba) {
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
  };
  cs.to.rgb.percent = function(...rgba) {
    const r = Math.round(rgba[0] / 255 * 100);
    const g = Math.round(rgba[1] / 255 * 100);
    const b = Math.round(rgba[2] / 255 * 100);
    return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g + "%, " + b + "%)" : "rgba(" + r + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
  };
  cs.to.hsl = function(...hsla) {
    return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
  };
  cs.to.hwb = function(...hwba) {
    let a = "";
    if (hwba.length >= 4 && hwba[3] !== 1) {
      a = ", " + hwba[3];
    }
    return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
  };
  cs.to.keyword = function(...rgb) {
    return reverseNames[rgb.slice(0, 3)];
  };
  function clamp(number_, min, max) {
    return Math.min(Math.max(min, number_), max);
  }
  __name(clamp, "clamp");
  function hexDouble(number_) {
    const string_ = Math.round(number_).toString(16).toUpperCase();
    return string_.length < 2 ? "0" + string_ : string_;
  }
  __name(hexDouble, "hexDouble");
  var color_string_default = cs;

  // node_modules/.pnpm/color-convert@3.1.0/node_modules/color-convert/conversions.js
  var reverseKeywords = {};
  for (const key of Object.keys(color_name_default)) {
    reverseKeywords[color_name_default[key]] = key;
  }
  var convert = {
    rgb: { channels: 3, labels: "rgb" },
    hsl: { channels: 3, labels: "hsl" },
    hsv: { channels: 3, labels: "hsv" },
    hwb: { channels: 3, labels: "hwb" },
    cmyk: { channels: 4, labels: "cmyk" },
    xyz: { channels: 3, labels: "xyz" },
    lab: { channels: 3, labels: "lab" },
    oklab: { channels: 3, labels: ["okl", "oka", "okb"] },
    lch: { channels: 3, labels: "lch" },
    oklch: { channels: 3, labels: ["okl", "okc", "okh"] },
    hex: { channels: 1, labels: ["hex"] },
    keyword: { channels: 1, labels: ["keyword"] },
    ansi16: { channels: 1, labels: ["ansi16"] },
    ansi256: { channels: 1, labels: ["ansi256"] },
    hcg: { channels: 3, labels: ["h", "c", "g"] },
    apple: { channels: 3, labels: ["r16", "g16", "b16"] },
    gray: { channels: 1, labels: ["gray"] }
  };
  var conversions_default = convert;
  var LAB_FT = (6 / 29) ** 3;
  function srgbNonlinearTransform(c) {
    const cc = c > 31308e-7 ? 1.055 * c ** (1 / 2.4) - 0.055 : c * 12.92;
    return Math.min(Math.max(0, cc), 1);
  }
  __name(srgbNonlinearTransform, "srgbNonlinearTransform");
  function srgbNonlinearTransformInv(c) {
    return c > 0.04045 ? ((c + 0.055) / 1.055) ** 2.4 : c / 12.92;
  }
  __name(srgbNonlinearTransformInv, "srgbNonlinearTransformInv");
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
    switch (max) {
      case min: {
        h = 0;
        break;
      }
      case r: {
        h = (g - b) / delta;
        break;
      }
      case g: {
        h = 2 + (b - r) / delta;
        break;
      }
      case b: {
        h = 4 + (r - g) / delta;
        break;
      }
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
      switch (v) {
        case r: {
          h = bdif - gdif;
          break;
        }
        case g: {
          h = 1 / 3 + rdif - bdif;
          break;
        }
        case b: {
          h = 2 / 3 + gdif - rdif;
          break;
        }
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
  convert.rgb.oklab = function(rgb) {
    const r = srgbNonlinearTransformInv(rgb[0] / 255);
    const g = srgbNonlinearTransformInv(rgb[1] / 255);
    const b = srgbNonlinearTransformInv(rgb[2] / 255);
    const lp = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
    const mp = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
    const sp = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
    const l = 0.2104542553 * lp + 0.793617785 * mp - 0.0040720468 * sp;
    const aa = 1.9779984951 * lp - 2.428592205 * mp + 0.4505937099 * sp;
    const bb = 0.0259040371 * lp + 0.7827717662 * mp - 0.808675766 * sp;
    return [l * 100, aa * 100, bb * 100];
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
    let currentClosestDistance = Number.POSITIVE_INFINITY;
    let currentClosestKeyword;
    for (const keyword of Object.keys(color_name_default)) {
      const value = color_name_default[keyword];
      const distance = comparativeDistance(rgb, value);
      if (distance < currentClosestDistance) {
        currentClosestDistance = distance;
        currentClosestKeyword = keyword;
      }
    }
    return currentClosestKeyword;
  };
  convert.keyword.rgb = function(keyword) {
    return color_name_default[keyword];
  };
  convert.rgb.xyz = function(rgb) {
    const r = srgbNonlinearTransformInv(rgb[0] / 255);
    const g = srgbNonlinearTransformInv(rgb[1] / 255);
    const b = srgbNonlinearTransformInv(rgb[2] / 255);
    const x = r * 0.4124564 + g * 0.3575761 + b * 0.1804375;
    const y = r * 0.2126729 + g * 0.7151522 + b * 0.072175;
    const z = r * 0.0193339 + g * 0.119192 + b * 0.9503041;
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
    x = x > LAB_FT ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > LAB_FT ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > LAB_FT ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [l, a, b];
  };
  convert.hsl.rgb = function(hsl) {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t3;
    let value;
    if (s === 0) {
      value = l * 255;
      return [value, value, value];
    }
    const t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
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
        value = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        value = t2;
      } else if (3 * t3 < 2) {
        value = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        value = t1;
      }
      rgb[i] = value * 255;
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
      case 0: {
        return [v, t, p];
      }
      case 1: {
        return [q, v, p];
      }
      case 2: {
        return [p, v, t];
      }
      case 3: {
        return [p, q, v];
      }
      case 4: {
        return [t, p, v];
      }
      case 5: {
        return [v, p, q];
      }
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
      case 0: {
        r = v;
        g = n;
        b = wh;
        break;
      }
      case 1: {
        r = n;
        g = v;
        b = wh;
        break;
      }
      case 2: {
        r = wh;
        g = v;
        b = n;
        break;
      }
      case 3: {
        r = wh;
        g = n;
        b = v;
        break;
      }
      case 4: {
        r = n;
        g = wh;
        b = v;
        break;
      }
      case 5: {
        r = v;
        g = wh;
        b = n;
        break;
      }
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
    r = x * 3.2404542 + y * -1.5371385 + z * -0.4985314;
    g = x * -0.969266 + y * 1.8760108 + z * 0.041556;
    b = x * 0.0556434 + y * -0.2040259 + z * 1.0572252;
    r = srgbNonlinearTransform(r);
    g = srgbNonlinearTransform(g);
    b = srgbNonlinearTransform(b);
    return [r * 255, g * 255, b * 255];
  };
  convert.xyz.lab = function(xyz) {
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > LAB_FT ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > LAB_FT ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > LAB_FT ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [l, a, b];
  };
  convert.xyz.oklab = function(xyz) {
    const x = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z = xyz[2] / 100;
    const lp = Math.cbrt(0.8189330101 * x + 0.3618667424 * y - 0.1288597137 * z);
    const mp = Math.cbrt(0.0329845436 * x + 0.9293118715 * y + 0.0361456387 * z);
    const sp = Math.cbrt(0.0482003018 * x + 0.2643662691 * y + 0.633851707 * z);
    const l = 0.2104542553 * lp + 0.793617785 * mp - 0.0040720468 * sp;
    const a = 1.9779984951 * lp - 2.428592205 * mp + 0.4505937099 * sp;
    const b = 0.0259040371 * lp + 0.7827717662 * mp - 0.808675766 * sp;
    return [l * 100, a * 100, b * 100];
  };
  convert.oklab.oklch = function(oklab) {
    return convert.lab.lch(oklab);
  };
  convert.oklab.xyz = function(oklab) {
    const ll = oklab[0] / 100;
    const a = oklab[1] / 100;
    const b = oklab[2] / 100;
    const l = (0.999999998 * ll + 0.396337792 * a + 0.215803758 * b) ** 3;
    const m = (1.000000008 * ll - 0.105561342 * a - 0.063854175 * b) ** 3;
    const s = (1.000000055 * ll - 0.089484182 * a - 1.291485538 * b) ** 3;
    const x = 1.227013851 * l - 0.55779998 * m + 0.281256149 * s;
    const y = -0.040580178 * l + 1.11225687 * m - 0.071676679 * s;
    const z = -0.076381285 * l - 0.421481978 * m + 1.58616322 * s;
    return [x * 100, y * 100, z * 100];
  };
  convert.oklab.rgb = function(oklab) {
    const ll = oklab[0] / 100;
    const aa = oklab[1] / 100;
    const bb = oklab[2] / 100;
    const l = (ll + 0.3963377774 * aa + 0.2158037573 * bb) ** 3;
    const m = (ll - 0.1055613458 * aa - 0.0638541728 * bb) ** 3;
    const s = (ll - 0.0894841775 * aa - 1.291485548 * bb) ** 3;
    const r = srgbNonlinearTransform(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s);
    const g = srgbNonlinearTransform(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s);
    const b = srgbNonlinearTransform(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s);
    return [r * 255, g * 255, b * 255];
  };
  convert.oklch.oklab = function(oklch) {
    return convert.lch.lab(oklch);
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
    y = y2 > LAB_FT ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > LAB_FT ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > LAB_FT ? z2 : (z - 16 / 116) / 7.787;
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
    if (r >> 4 === g >> 4 && g >> 4 === b >> 4) {
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
    args = args[0];
    let color = args % 10;
    if (color === 0 || color === 7) {
      if (args > 50) {
        color += 3.5;
      }
      color = color / 10.5 * 255;
      return [color, color, color];
    }
    const mult = (Math.trunc(args > 50) + 1) * 0.5;
    const r = (color & 1) * mult * 255;
    const g = (color >> 1 & 1) * mult * 255;
    const b = (color >> 2 & 1) * mult * 255;
    return [r, g, b];
  };
  convert.ansi256.rgb = function(args) {
    args = args[0];
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
    return "000000".slice(string.length) + string;
  };
  convert.hex.rgb = function(args) {
    const match = args.toString(16).match(/[a-f\d]{6}|[a-f\d]{3}/i);
    if (!match) {
      return [0, 0, 0];
    }
    let colorString = match[0];
    if (match[0].length === 3) {
      colorString = [...colorString].map((char) => char + char).join("");
    }
    const integer = Number.parseInt(colorString, 16);
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
    let hue;
    const grayscale = chroma < 1 ? min / (1 - chroma) : 0;
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
      case 0: {
        pure[0] = 1;
        pure[1] = v;
        pure[2] = 0;
        break;
      }
      case 1: {
        pure[0] = w;
        pure[1] = 1;
        pure[2] = 0;
        break;
      }
      case 2: {
        pure[0] = 0;
        pure[1] = 1;
        pure[2] = v;
        break;
      }
      case 3: {
        pure[0] = 0;
        pure[1] = w;
        pure[2] = 1;
        break;
      }
      case 4: {
        pure[0] = v;
        pure[1] = 0;
        pure[2] = 1;
        break;
      }
      default: {
        pure[0] = 1;
        pure[1] = 0;
        pure[2] = w;
      }
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
    const value = Math.round(gray[0] / 100 * 255) & 255;
    const integer = (value << 16) + (value << 8) + value;
    const string = integer.toString(16).toUpperCase();
    return "000000".slice(string.length) + string;
  };
  convert.rgb.gray = function(rgb) {
    const value = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [value / 255 * 100];
  };

  // node_modules/.pnpm/color-convert@3.1.0/node_modules/color-convert/route.js
  function buildGraph() {
    const graph = {};
    const models2 = Object.keys(conversions_default);
    for (let { length } = models2, i = 0; i < length; i++) {
      graph[models2[i]] = {
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
    while (queue.length > 0) {
      const current = queue.pop();
      const adjacents = Object.keys(conversions_default[current]);
      for (let { length } = adjacents, i = 0; i < length; i++) {
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
    let fn = conversions_default[graph[toModel].parent][toModel];
    let cur = graph[toModel].parent;
    while (graph[cur].parent) {
      path.unshift(graph[cur].parent);
      fn = link(conversions_default[graph[cur].parent][cur], fn);
      cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
  }
  __name(wrapConversion, "wrapConversion");
  function route(fromModel) {
    const graph = deriveBFS(fromModel);
    const conversion = {};
    const models2 = Object.keys(graph);
    for (let { length } = models2, i = 0; i < length; i++) {
      const toModel = models2[i];
      const node = graph[toModel];
      if (node.parent === null) {
        continue;
      }
      conversion[toModel] = wrapConversion(toModel, graph);
    }
    return conversion;
  }
  __name(route, "route");
  var route_default = route;

  // node_modules/.pnpm/color-convert@3.1.0/node_modules/color-convert/index.js
  var convert2 = {};
  var models = Object.keys(conversions_default);
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
        for (let { length } = result, i = 0; i < length; i++) {
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
  for (const fromModel of models) {
    convert2[fromModel] = {};
    Object.defineProperty(convert2[fromModel], "channels", { value: conversions_default[fromModel].channels });
    Object.defineProperty(convert2[fromModel], "labels", { value: conversions_default[fromModel].labels });
    const routes = route_default(fromModel);
    const routeModels = Object.keys(routes);
    for (const toModel of routeModels) {
      const fn = routes[toModel];
      convert2[fromModel][toModel] = wrapRounded(fn);
      convert2[fromModel][toModel].raw = wrapRaw(fn);
    }
  }
  var color_convert_default = convert2;

  // node_modules/.pnpm/color@5.0.0/node_modules/color/index.js
  var skippedModels = [
    // To be honest, I don't really feel like keyword belongs in color convert, but eh.
    "keyword",
    // Gray conflicts with some method names, and has its own method defined.
    "gray",
    // Shouldn't really be in color-convert either...
    "hex"
  ];
  var hashedModelKeys = {};
  for (const model of Object.keys(color_convert_default)) {
    hashedModelKeys[[...color_convert_default[model].labels].sort().join("")] = model;
  }
  var limiters = {};
  function Color(object, model) {
    if (!(this instanceof Color)) {
      return new Color(object, model);
    }
    if (model && model in skippedModels) {
      model = null;
    }
    if (model && !(model in color_convert_default)) {
      throw new Error("Unknown model: " + model);
    }
    let i;
    let channels;
    if (object == null) {
      this.model = "rgb";
      this.color = [0, 0, 0];
      this.valpha = 1;
    } else if (object instanceof Color) {
      this.model = object.model;
      this.color = [...object.color];
      this.valpha = object.valpha;
    } else if (typeof object === "string") {
      const result = color_string_default.get(object);
      if (result === null) {
        throw new Error("Unable to parse color from string: " + object);
      }
      this.model = result.model;
      channels = color_convert_default[this.model].channels;
      this.color = result.value.slice(0, channels);
      this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
    } else if (object.length > 0) {
      this.model = model || "rgb";
      channels = color_convert_default[this.model].channels;
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
      const { labels } = color_convert_default[this.model];
      const color = [];
      for (i = 0; i < labels.length; i++) {
        color.push(object[labels[i]]);
      }
      this.color = zeroArray(color);
    }
    if (limiters[this.model]) {
      channels = color_convert_default[this.model].channels;
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
  __name(Color, "Color");
  Color.prototype = {
    toString() {
      return this.string();
    },
    toJSON() {
      return this[this.model]();
    },
    string(places) {
      let self = this.model in color_string_default.to ? this : this.rgb();
      self = self.round(typeof places === "number" ? places : 1);
      const arguments_ = self.valpha === 1 ? self.color : [...self.color, this.valpha];
      return color_string_default.to[self.model](...arguments_);
    },
    percentString(places) {
      const self = this.rgb().round(typeof places === "number" ? places : 1);
      const arguments_ = self.valpha === 1 ? self.color : [...self.color, this.valpha];
      return color_string_default.to.rgb.percent(...arguments_);
    },
    array() {
      return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
    },
    object() {
      const result = {};
      const { channels } = color_convert_default[this.model];
      const { labels } = color_convert_default[this.model];
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
      return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
    },
    alpha(value) {
      if (value !== void 0) {
        return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
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
        return new Color(value);
      }
      return color_convert_default[this.model].keyword(this.color);
    },
    hex(value) {
      if (value !== void 0) {
        return new Color(value);
      }
      return color_string_default.to.hex(...this.rgb().round().color);
    },
    hexa(value) {
      if (value !== void 0) {
        return new Color(value);
      }
      const rgbArray = this.rgb().round().color;
      let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
      if (alphaHex.length === 1) {
        alphaHex = "0" + alphaHex;
      }
      return color_string_default.to.hex(...rgbArray) + alphaHex;
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
      return Color.rgb(value, value, value);
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
      return Color.rgb(
        w1 * color1.red() + w2 * color2.red(),
        w1 * color1.green() + w2 * color2.green(),
        w1 * color1.blue() + w2 * color2.blue(),
        color1.alpha() * p + color2.alpha() * (1 - p)
      );
    }
  };
  for (const model of Object.keys(color_convert_default)) {
    if (skippedModels.includes(model)) {
      continue;
    }
    const { channels } = color_convert_default[model];
    Color.prototype[model] = function(...arguments_) {
      if (this.model === model) {
        return new Color(this);
      }
      if (arguments_.length > 0) {
        return new Color(arguments_, model);
      }
      return new Color([...assertArray(color_convert_default[this.model][model].raw(this.color)), this.valpha], model);
    };
    Color[model] = function(...arguments_) {
      let color = arguments_[0];
      if (typeof color === "number") {
        color = zeroArray(arguments_, channels);
      }
      return new Color(color, model);
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
  var color_default = Color;

  // src/utilities/color.ts
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
      return color_default(_Color.getComputed(color)).hex();
    }),
    isValidHex(color) {
      return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(color);
    },
    composeRoot() {
      const colorSettings = Player.Themed.ColorsModule;
      const globalSettings = Player.Themed.GlobalModule;
      Object.keys(colorSettings.special).forEach((key) => {
        const typedKey = key;
        const clr = color_default(colorSettings.special[typedKey]);
        specialColors[typedKey] = [clr.hex(), clr.lighten(0.2).hex()];
      });
      if (globalSettings.doUseAdvancedColoring) {
        Object.keys(colorSettings.base).forEach((key) => {
          const typedKey = key;
          plainColors[typedKey] = colorSettings.base[typedKey];
        });
      } else {
        const primaryColor2 = _Color.getHexComputed(colorSettings.base.main);
        const elementColor2 = color_default(primaryColor2).lighten(0.2).hex();
        const accentColor2 = _Color.getHexComputed(colorSettings.base.accent);
        const textColor2 = _Color.getHexComputed(colorSettings.base.text);
        plainColors.main = primaryColor2;
        plainColors.element = elementColor2;
        plainColors.elementHover = color_default(elementColor2).lighten(0.2).hex();
        plainColors.elementDisabled = color_default(elementColor2).darken(0.2).hex();
        plainColors.elementHint = color_default(elementColor2).lighten(0.2).hex();
        plainColors.text = textColor2;
        plainColors.accent = accentColor2;
        plainColors.accentHover = color_default(accentColor2).lighten(0.2).hex();
        plainColors.accentDisabled = color_default(accentColor2).darken(0.2).hex();
      }
      plainColors.textShadow = _Color.getHexComputed("rgba(0,0,0,0.5)");
    }
  };

  // src/screens/colors.ts
  var _GuiColors = class _GuiColors extends BaseSubscreen {
    constructor() {
      super(...arguments);
      __publicField(this, "settingsBackup", {});
    }
    get settings() {
      return super.settings;
    }
    get pageStructure() {
      const settings = this.settings;
      const defaultSettings = getModule("ColorsModule").defaultSettings;
      const isBaseMode = !modStorage.playerStorage.GlobalModule.doUseAdvancedColoring;
      const baseModeKey = /* @__PURE__ */ __name((key) => ["main", "accent", "text"].includes(key), "baseModeKey");
      const ret = [[], []];
      const themeDropdownOptions = ["dark", "light"].map((e) => ({ attributes: { value: e, label: getText("colors.setting.theme-type-" + e), selected: e === this.settings.themeSettings.themeType } }));
      const themeType = {
        id: "tmd-theme-type",
        type: "custom",
        htmlOptions: {
          tag: "div",
          attributes: {
            id: "tmd-theme-type-container"
          },
          children: [
            {
              tag: "label",
              attributes: {
                for: "tmd-theme-type-dropdown"
              },
              children: [getText("colors.setting.theme-type.title")]
            },
            ElementCreateDropdown("tmd-theme-type-dropdown", themeDropdownOptions, function() {
              settings.themeSettings.themeType = this.value;
              ColorsModule.reloadTheme();
            })
          ]
        }
      };
      ret[0].push(themeType);
      ret[0].push(...Object.entries(this.settings.base).map(([key, value]) => {
        const typedKey = key;
        return {
          id: key,
          type: "color",
          label: getText(`colors.setting.${key}.name`),
          description: getText(`colors.setting.${key}.desc`),
          setElementValue: /* @__PURE__ */ __name(() => value ?? defaultSettings.base[typedKey], "setElementValue"),
          setSettingValue: /* @__PURE__ */ __name(() => value ?? defaultSettings.base[typedKey], "setSettingValue"),
          disabled: isBaseMode && !baseModeKey(typedKey)
        };
      }).sort((a, b) => (a.disabled ? 1 : 0) - (b.disabled ? 1 : 0)));
      ret[1].push(...Object.entries(this.settings.special).map(([key, value]) => {
        const typedKey = key;
        return {
          id: key,
          type: "color",
          label: getText(`colors.setting.${key}.name`),
          description: getText(`colors.setting.${key}.desc`),
          setElementValue: /* @__PURE__ */ __name(() => value ?? defaultSettings.special[typedKey], "setElementValue"),
          setSettingValue: /* @__PURE__ */ __name(() => value ?? defaultSettings.special[typedKey], "setSettingValue")
        };
      }));
      return ret;
    }
    load() {
      super.load();
      const typeToggleButton = advElement.createButton({
        id: "tmd-inputs-type-toggle",
        onClick: /* @__PURE__ */ __name(() => {
          this.pageStructure.forEach((page) => {
            page.forEach((elm) => {
              if (elm.type == "color" || elm.type == "text") {
                const e = document.getElementById(elm.id);
                if (!e) return;
                const elementType = e.getAttribute("type");
                if (elementType == "color") {
                  e.setAttribute("type", "text");
                } else {
                  e.setAttribute("type", "color");
                }
              }
            });
          });
          this.resize();
        }, "onClick"),
        size: [90, 90],
        options: {
          image: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/images/refresh.svg`,
          tooltip: getText("colors.button.change_input_type")
        }
      });
      const menu = document.getElementById("deeplib-nav-menu");
      if (menu) {
        ElementMenu.PrependItem(menu, typeToggleButton);
      }
      this.settingsBackup = CommonCloneDeep(this.settings);
      const settings = getModule("ColorsModule").settings;
      Object.entries(this.settings.base).forEach(([key]) => {
        document.getElementById(key)?.addEventListener("input", function() {
          if (!_Color.isValidHex(this.value)) {
            this.setCustomValidity("Invalid hex color");
          } else {
            this.setCustomValidity("");
            const typedKey = key;
            settings.base[typedKey] = this.value;
          }
          ColorsModule.reloadTheme();
        });
      });
      Object.entries(this.settings.special).forEach(([key]) => {
        document.getElementById(key)?.addEventListener("input", function() {
          if (!_Color.isValidHex(this.value)) {
            this.setCustomValidity("Invalid hex color");
          } else {
            this.setCustomValidity("");
            const typedKey = key;
            settings.special[typedKey] = this.value;
          }
          ColorsModule.reloadTheme();
        });
      });
    }
    exit() {
      const settings = getModule("ColorsModule").settings;
      Object.entries(this.settings.base).forEach(([key]) => {
        const input = document.getElementById(key);
        if (!input) return;
        if (!_Color.isValidHex(input.value)) {
          const typedKey = key;
          settings.base[typedKey] = this.settingsBackup.base[typedKey];
        }
      });
      Object.entries(this.settings.special).forEach(([key]) => {
        const input = document.getElementById(key);
        if (!input) return;
        if (!_Color.isValidHex(input.value)) {
          const typedKey = key;
          settings.special[typedKey] = this.settingsBackup.special[typedKey];
        }
      });
      super.exit();
    }
  };
  __name(_GuiColors, "GuiColors");
  __publicField(_GuiColors, "subscreenOptions", {
    name: "colors",
    icon: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/images/palette.svg`
  });
  var GuiColors = _GuiColors;

  // src/utilities/mod_definition.ts
  var MOD_VERSION_CAPTION = true ? `${"1.6.0"} - ${"2be7c9e4"}` : "1.6.0";
  var ModuleCategory = {
    Global: "Global",
    Colors: "Colors",
    Profiles: "Profiles",
    Integration: "Integration",
    GuiRedraw: "GuiRedraw"
  };

  // src/hooks/gui_redraw/appearance_get_preview_image_color.ts
  function hookAppearanceGetPreviewImageColor() {
    sdk.hookFunction(
      "AppearanceGetPreviewImageColor",
      HookPriority.Observe,
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
      ModuleCategory.GuiRedraw
    );
  }
  __name(hookAppearanceGetPreviewImageColor, "hookAppearanceGetPreviewImageColor");

  // src/hooks/gui_redraw/dialog_get_menu_button_color.ts
  function hookDialogGetMenuButtonColor() {
    sdk.hookFunction("DialogGetMenuButtonColor", 0, (args, next) => {
      if (!doRedraw()) return next(args);
      const [buttonName] = args;
      if (DialogIsMenuButtonDisabled(buttonName)) {
        return "%disabled";
      } else if (buttonName === "ColorDefault") {
        return DialogColorSelect || "%background";
      } else {
        return "%background";
      }
    }, ModuleCategory.GuiRedraw);
  }
  __name(hookDialogGetMenuButtonColor, "hookDialogGetMenuButtonColor");

  // src/hooks/gui_redraw/draw_back_next_button.ts
  function hookDrawBackNextButton() {
    sdk.hookFunction(
      "DrawBackNextButton",
      HookPriority.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args);
        const [Left, Top, Width, Height, Label, Color2, Image, , , Disabled] = args;
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
        DrawTextFit(Label, Left + Width / 2, Top + Height / 2 + 1, CommonIsMobile ? Width - 6 : Width - 36, Color2);
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
      ModuleCategory.GuiRedraw
    );
  }
  __name(hookDrawBackNextButton, "hookDrawBackNextButton");

  // src/utilities/drawing.ts
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
    doColorizeImages: [
      ""
    ],
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

  // src/hooks/gui_redraw/draw_button.ts
  function hookDrawButton() {
    sdk.hookFunction(
      "DrawButton",
      HookPriority.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args);
        const [x, y, width, height, label, , image, hoveringText, isDisabled] = args;
        let color = args[5];
        const isHovering = MouseHovering(x, y, width, height);
        const buttonStateSymbol = (() => {
          if (isDisabled) return "=" /* Disabled */;
          if (isHovering) return "-" /* Hover */;
          return "~" /* Base */;
        })();
        color = "@" /* FromButton */ + buttonStateSymbol + color;
        ControllerAddActiveArea(x, y);
        drawButtonRect(
          x,
          y,
          width,
          height,
          color,
          color,
          color,
          "%border",
          "%hover",
          "%disabled",
          isHovering,
          isDisabled ?? false
        );
        DrawTextFit(label, x + width / 2, y + height / 2 + 1, width - 4, plainColors.text);
        if (image != null && image != "") {
          DrawImage(image, x + 2, y + 2);
        }
        if (hoveringText != null && isHovering) {
          DrawHoverElements.push(() => DrawButtonHover(x, y, width, height, hoveringText));
        }
      },
      ModuleCategory.GuiRedraw
    );
  }
  __name(hookDrawButton, "hookDrawButton");

  // src/hooks/gui_redraw/draw_button_hover.ts
  function hookDrawButtonHover() {
    sdk.hookFunction(
      "DrawButtonHover",
      HookPriority.Observe,
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
      ModuleCategory.GuiRedraw
    );
  }
  __name(hookDrawButtonHover, "hookDrawButtonHover");

  // src/hooks/gui_redraw/draw_checkbox.ts
  function hookDrawCheckbox() {
    sdk.hookFunction(
      "DrawCheckbox",
      HookPriority.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args);
        const [Left, Top, Width, Height, Text, IsChecked, Disabled = false, TextColor = "Black", CheckImage = "Icons/Checked.png"] = args;
        const backgroundColor = Disabled ? "%disabled" : "%background";
        DrawText(Text, Left + 100, Top + 33, TextColor, "");
        DrawButton(Left, Top, Width, Height, "", backgroundColor, IsChecked ? CheckImage : "", void 0, Disabled);
      },
      ModuleCategory.GuiRedraw
    );
  }
  __name(hookDrawCheckbox, "hookDrawCheckbox");

  // src/hooks/gui_redraw/draw_empty_rect.ts
  function hookDrawEmptyRect() {
    sdk.hookFunction(
      "DrawEmptyRect",
      HookPriority.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args);
        const [Left, Top, Width, Height, Color2, Thickness] = args;
        const drawEmptyRect = /* @__PURE__ */ __name((color) => {
          MainCanvas.beginPath();
          MainCanvas.rect(Left, Top, Width, Height);
          MainCanvas.lineWidth = Thickness ?? 2;
          MainCanvas.strokeStyle = color;
          MainCanvas.stroke();
        }, "drawEmptyRect");
        if (Color2?.startsWith("%" /* Custom */)) {
          switch (Color2.substring(1).toLowerCase()) {
            case "border":
              drawEmptyRect(plainColors.accent);
              break;
            case "hover":
              drawEmptyRect(plainColors.accentHover);
              break;
            case "disabled":
              drawEmptyRect(plainColors.accentDisabled);
              break;
            default:
              next(args);
              break;
          }
        } else {
          switch (_Color.getHexComputed(Color2).toLowerCase()) {
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
      ModuleCategory.GuiRedraw
    );
  }
  __name(hookDrawEmptyRect, "hookDrawEmptyRect");

  // src/hooks/gui_redraw/draw_image_ex.ts
  function hookDrawImageEx() {
    sdk.hookFunction(
      "DrawImageEx",
      HookPriority.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args);
        if (typeof args[0] !== "string") return next(args);
        if (!_Image.doDrawImage(args[0])) return next(args);
        const [Source, Canvas, X, Y] = args;
        let Options = args[4];
        Options ?? (Options = {});
        Options.HexColor = plainColors.accent;
        Options.FullAlpha = true;
        return next([Source, Canvas, X, Y, Options]);
      },
      ModuleCategory.GuiRedraw
    );
  }
  __name(hookDrawImageEx, "hookDrawImageEx");

  // src/hooks/gui_redraw/draw_preview_box.ts
  function hookDrawPreviewBox() {
    sdk.hookFunction(
      "DrawPreviewBox",
      HookPriority.Observe,
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
        DrawPreviewIcons(Icons ?? [], X, Y);
        if (Description) DrawTextFit(Description, X + Width / 2, Y + Height - 25, Width - 2 * Padding, Foreground);
      },
      ModuleCategory.GuiRedraw
    );
  }
  __name(hookDrawPreviewBox, "hookDrawPreviewBox");

  // src/hooks/gui_redraw/draw_rect.ts
  function hookDrawRect() {
    sdk.hookFunction(
      "DrawRect",
      HookPriority.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args);
        const [Left, Top, Width, Height] = args;
        let color = args[4];
        const drawRect2 = /* @__PURE__ */ __name((color2) => {
          next([Left, Top, Width, Height, color2]);
        }, "drawRect");
        const hover = MouseIn(Left, Top, Width, Height) ? 1 : 0;
        if (color?.startsWith("!" /* NoDraw */)) {
          return next([Left, Top, Width, Height, color.substring(1)]);
        }
        const buttonStates = ["-" /* Hover */, "=" /* Disabled */, "~" /* Base */];
        let buttonStateSymbol = color[0];
        if (color?.startsWith("@" /* FromButton */)) {
          color = color.substring(1);
          buttonStateSymbol = color[0];
          if (buttonStates.includes(buttonStateSymbol)) {
            color = color.substring(1);
          }
        }
        if (color?.startsWith("%" /* Custom */)) {
          switch (color.substring(1)) {
            case "disabled":
              color = hover ? color_default(plainColors.elementDisabled).lighten(0.2).hex() : plainColors.elementDisabled;
              break;
            case "hover":
              color = plainColors.elementHover;
              break;
            case "background":
              color = hover ? plainColors.elementHover : plainColors.element;
              break;
            case "accent":
              color = hover ? plainColors.accentHover : plainColors.accent;
              break;
            case "allowed":
            case "equipped":
            case "crafted":
            case "limited":
            case "blocked": {
              const typedColor = color.substring(1);
              color = specialColors[typedColor][hover];
              break;
            }
            default:
              return next(args);
          }
        } else {
          let parsedColor = null;
          try {
            if (color[0] === "#" && color.length === 9 || color.startsWith("rgba"))
              parsedColor = color_default(color.toLowerCase()).hexa().toLowerCase();
            else
              parsedColor = color_default(color.toLowerCase()).hex().toLowerCase();
          } catch {
            parsedColor = null;
            return next(args);
          }
          switch (parsedColor) {
            case "#eeeeee":
            case "#dddddd":
            case "#cccccc":
            case "#ffffff":
            case "#ffff88":
            case "#ffffff88":
            case "#ffffffcc":
            case "#d7f6e9":
            // LSCG Version Tooltip
            case "#808080":
              color = plainColors.element;
              break;
            case "#00ffff":
              color = plainColors.elementHover;
              break;
            case "#ffc0cb":
            case "#ddffdd":
              color = plainColors.accent;
              break;
            case "#888888":
            case "#ebebe4":
              color = plainColors.elementDisabled;
              break;
            default:
          }
        }
        if (buttonStates.includes(buttonStateSymbol)) {
          let parsedColor = null;
          try {
            parsedColor = color_default(color.toLowerCase());
          } catch {
            parsedColor = null;
          }
          if (parsedColor !== null) {
            if (buttonStateSymbol === "-" /* Hover */) {
              color = parsedColor.lighten(0.2).hex();
            } else if (buttonStateSymbol === "=" /* Disabled */) {
              color = parsedColor.darken(0.2).hex();
            }
            return drawRect2(color);
          }
        }
        drawRect2(color);
      },
      ModuleCategory.GuiRedraw
    );
  }
  __name(hookDrawRect, "hookDrawRect");

  // src/hooks/gui_redraw/draw_room_background.ts
  function hookDrawRoomBackground() {
    sdk.hookFunction(
      "DrawRoomBackground",
      HookPriority.Observe,
      ([URL2, ...args], next) => {
        if (!doRedraw()) return next([URL2, ...args]);
        if (URL2.includes("Sheet.jpg")) {
          if (modStorage.playerStorage.GlobalModule.doUseFlatColor) {
            DrawRect(0, 0, 2e3, 1e3, plainColors.main);
          } else {
            next([URL2, ...args]);
            MainCanvas.save();
            MainCanvas.globalCompositeOperation = "multiply";
            DrawRect(0, 0, 2e3, 1e3, plainColors.main);
            MainCanvas.restore();
          }
        } else {
          next([URL2, ...args]);
        }
      },
      ModuleCategory.GuiRedraw
    );
  }
  __name(hookDrawRoomBackground, "hookDrawRoomBackground");

  // src/hooks/gui_redraw/draw_text.ts
  function hookDrawText() {
    sdk.hookFunction(
      "DrawText",
      HookPriority.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args);
        if (!args[0]) return next(args);
        if (!args[3]) return next(args);
        const color = args[3];
        let parsedColor = color;
        try {
          parsedColor = color_default(color.toLowerCase()).hex();
        } catch (e) {
          parsedColor = color;
        }
        if (parsedColor === "#000000") {
          args[3] = plainColors.text;
          args[4] = "";
        } else {
          args[4] = "";
        }
        next(args);
      },
      ModuleCategory.GuiRedraw
    );
  }
  __name(hookDrawText, "hookDrawText");

  // src/hooks/gui_redraw/draw_text_fit.ts
  function hookDrawTextFit() {
    sdk.hookFunction(
      "DrawTextFit",
      HookPriority.Observe,
      (args, next) => {
        if (!doRedraw()) return next(args);
        if (!args[0]) return next(args);
        if (!args[4]) return next(args);
        let parsedColor = args[4];
        try {
          parsedColor = color_default(args[4].toLowerCase()).hex();
        } catch (e) {
          parsedColor = args[4];
        }
        if (parsedColor === "#000000") {
          args[4] = plainColors.text;
        }
        return next(args);
      },
      ModuleCategory.GuiRedraw
    );
  }
  __name(hookDrawTextFit, "hookDrawTextFit");

  // src/hooks/gui_redraw/draw_text_wrap.ts
  function hookDrawTextWrap() {
    sdk.hookFunction(
      "DrawTextWrap",
      HookPriority.Observe,
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
        let parsedForeColor = ForeColor;
        try {
          parsedForeColor = color_default(ForeColor.toLowerCase()).hex();
        } catch (e) {
          parsedForeColor = ForeColor;
        }
        MainCanvas.fillStyle = parsedForeColor === "#000000" ? plainColors.text : ForeColor;
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
      ModuleCategory.GuiRedraw
    );
  }
  __name(hookDrawTextWrap, "hookDrawTextWrap");

  // src/modules/gui_redraw.ts
  var doRedraw = /* @__PURE__ */ __name(() => {
    return modStorage.playerStorage?.GlobalModule?.modEnabled && modStorage.playerStorage.GlobalModule?.doVanillaGuiOverhaul && CurrentScreen !== "ClubCard";
  }, "doRedraw");
  var _GuiRedrawModule = class _GuiRedrawModule extends BaseModule {
    constructor() {
      super(...arguments);
      __publicField(this, "patched", false);
    }
    load() {
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
      hookDialogGetMenuButtonColor();
      if (doRedraw()) this.patchGui();
    }
    patchGui() {
      if (this.patched) return false;
      sdk.patchFunction("ChatSearchPermissionDraw", {
        'bgColor = Hover ? "red" : "pink";': 'bgColor = "%allowed";',
        'bgColor = Hover ? "green" : "lime";': 'bgColor = "%searchBlock";'
      });
      sdk.patchFunction("DialogDraw", {
        "DrawRect(1087 + offset, 550, 225, 275, bgColor);": 'DrawRect(1087 + offset, 550, 225, 275, disabled ? "%disabled" : (hover ? "%hover" : "%background"));DrawEmptyRect(1087 + offset, 550, 225, 275, "%border");',
        'const bgColor = disabled ? "Gray" : (hover ? "aqua" : "white");': 'const bgColor = disabled ? "%disabled" : (hover ? "%hover" : "%background");'
      });
      sdk.patchFunction("DrawProcessScreenFlash", {
        'DrawRect(0, 0, 2000, 1000, "#ffffff" + DrawGetScreenFlashAlpha(FlashTime / Math.max(1, 4 - DrawLastDarkFactor)));': 'DrawRect(0, 0, 2000, 1000, "!#ffffff" + DrawGetScreenFlashAlpha(FlashTime / Math.max(1, 4 - DrawLastDarkFactor)));',
        "DrawRect(0, 0, 2000, 1000, DrawScreenFlashColor + PinkFlashAlpha);": 'DrawRect(0, 0, 2000, 1000, "!" + DrawScreenFlashColor + PinkFlashAlpha);'
      });
      sdk.patchFunction("ChatAdminRun", {
        'const ButtonBackground = canEdit ? "White" : "#ebebe4";': 'const ButtonBackground = canEdit ? "%background" : "%disabled";'
      });
      sdk.patchFunction("AppearanceRun", {
        'const ButtonColor = canAccess ? "White" : "#888";': 'const ButtonColor = canAccess ? "%background" : "%disabled";',
        'DrawButton(1635, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", layeringEnabled ? "#fff" : "#aaa", "Icons/Small/Layering.png", TextGet("Layering"), !layeringEnabled);': 'DrawButton(1635, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", layeringEnabled ? "%background" : "%disabled", "Icons/Small/Layering.png", TextGet("Layering"), !layeringEnabled);',
        'DrawButton(1725, 145 + (A - CharacterAppearanceOffset) * 95, 160, 65, ColorButtonText, CanCycleColors ? ColorButtonColor : "#aaa", null, null, !CanCycleColors);': 'DrawButton(1725, 145 + (A - CharacterAppearanceOffset) * 95, 160, 65, ColorButtonText, CanCycleColors ? ColorButtonColor : "%disabled", null, null, !CanCycleColors);',
        'DrawButton(1910, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", CanPickColor ? "#fff" : "#aaa", CanPickColor ? ColorIsSimple ? "Icons/Small/ColorChange.png" : "Icons/Small/ColorChangeMulti.png" : "Icons/Small/ColorBlocked.png", null, !CanPickColor);': 'DrawButton(1910, 145 + (A - CharacterAppearanceOffset) * 95, 65, 65, "", CanPickColor ? "%background" : "%disabled", CanPickColor ? ColorIsSimple ? "Icons/Small/ColorChange.png" : "Icons/Small/ColorChangeMulti.png" : "Icons/Small/ColorBlocked.png", null, !CanPickColor);'
      });
      sdk.patchFunction("ExtendedItemGetButtonColor", {
        'ButtonColor = "#888888";': 'ButtonColor = "%accent";',
        'ButtonColor = Hover ? "red" : "pink";': 'ButtonColor = "%blocked";',
        'ButtonColor = Hover ? "orange" : "#fed8b1";': 'ButtonColor = "%limited";',
        'ButtonColor = Hover ? "green" : "lime";': 'ButtonColor = "%allowed";',
        'ButtonColor = "Red";': 'ButtonColor = "%blocked";',
        'ButtonColor = "Pink";': 'ButtonColor = "%limited";',
        'ButtonColor = Hover ? "Cyan" : "LightGreen";': 'ButtonColor = "%allowed";',
        'ButtonColor = Hover ? "Cyan" : "White";': 'ButtonColor = Hover ? "%hover" : "%background";'
      });
      sdk.patchFunction("PreferenceSubscreenDifficultyRun", {
        'DrawButton(500, 320 + 150 * D, 300, 64, TextGet("DifficultyLevel" + D.toString()), (D == Player.GetDifficulty()) ? "#DDFFDD" : "White", "");': 'DrawButton(500, 320 + 150 * D, 300, 64, TextGet("DifficultyLevel" + D.toString()), (D == Player.GetDifficulty()) ? "%accent" : "%background", "");',
        'DrawButton(500, 825, 300, 64, TextGet("DifficultyChangeMode") + " " + TextGet("DifficultyLevel" + PreferenceDifficultyLevel.toString()), PreferenceDifficultyAccept ? "White" : "#ebebe4", "");': 'DrawButton(500, 825, 300, 64, TextGet("DifficultyChangeMode") + " " + TextGet("DifficultyLevel" + PreferenceDifficultyLevel.toString()), PreferenceDifficultyAccept ? "%background" : "%disabled", "");'
      });
      sdk.patchFunction("ChatAdminRoomCustomizationRun", {
        'DrawButton(725, 840, 250, 65, TextGet("Clear"), ChatRoomPlayerIsAdmin() ? "White" : "#ebebe4", null, null, !ChatRoomPlayerIsAdmin());': 'DrawButton(725, 840, 250, 65, TextGet("Clear"), ChatRoomPlayerIsAdmin() ? "%background" : "%disabled", null, null, !ChatRoomPlayerIsAdmin());',
        'DrawButton(1025, 840, 250, 65, TextGet("Save"), ChatRoomPlayerIsAdmin() ? "White" : "#ebebe4", null, null, !ChatRoomPlayerIsAdmin());': 'DrawButton(1025, 840, 250, 65, TextGet("Save"), ChatRoomPlayerIsAdmin() ? "%background" : "%disabled", null, null, !ChatRoomPlayerIsAdmin());'
      });
      sdk.patchFunction("Shop2._AssetElementDraw", {
        'options.Background = "cyan";': 'options.Background = "%hover";',
        'options.Background = "white";': 'options.Background = "%background";',
        'options.Background = "gray";': 'options.Background = "%disabled";',
        'options.Background = "pink";': 'options.Background = "%equipped";'
      });
      sdk.patchFunction("ChatRoomMenuDraw", {
        'let color = "White";': 'let color = "%background";',
        'color = "White";': 'color = "%background";',
        'color = "Pink";': 'color = "%blocked";',
        'color = "Yellow";': 'color = "%limited";',
        'color = ChatRoomGetUpTimer === 0 ? "Yellow" : "Pink";': 'color = ChatRoomGetUpTimer === 0 ? "%limited" : "%blocked";',
        'color = Player.IsSlow() ? "Yellow" : "White";': 'color = Player.IsSlow() ? "%limited" : "%background";'
      });
      this.patched = true;
    }
    unpatchGui() {
      if (!this.patched) return false;
      sdk.unpatchFunction("ChatSearchPermissionDraw");
      sdk.unpatchFunction("DialogDraw");
      sdk.unpatchFunction("DrawProcessScreenFlash");
      sdk.unpatchFunction("ChatAdminRun");
      sdk.unpatchFunction("AppearanceRun");
      sdk.unpatchFunction("ExtendedItemGetButtonColor");
      sdk.unpatchFunction("PreferenceSubscreenDifficultyRun");
      sdk.unpatchFunction("ChatAdminRoomCustomizationRun");
      sdk.unpatchFunction("Shop2._AssetElementDraw");
      sdk.unpatchFunction("ChatRoomMenuDraw");
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

  // src/utilities/integration.ts
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
      if (!modStorage.playerStorage.IntegrationModule.MBS) return;
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
      if (!modStorage.playerStorage.IntegrationModule.MBS)
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

  // src/utilities/other.ts
  function camelToKebabCase(str) {
    return str.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
  }
  __name(camelToKebabCase, "camelToKebabCase");

  // src/utilities/style.ts
  var styles = {
    inputs: "",
    chat: "",
    inventory: "",
    friendList: "",
    friendListBlur: "",
    scrollbar: "",
    selection: "",
    WCE: "",
    FUSAM: "",
    TTS: ""
  };
  var BcStyle = {
    injectAll() {
      const isEnabled = modStorage.playerStorage.GlobalModule.modEnabled;
      Style.injectEmbed("tmd-style", `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/styles/themed.css`);
      if (!isEnabled) return;
      Style.injectInline("tmd-root", composeRoot());
      Style.injectEmbed("tmd-chat-room-search", `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/styles/chatroom_search.css`);
      const styleIDs = Object.keys(styles);
      styleIDs.forEach((id) => {
        if (!modStorage.playerStorage.IntegrationModule[id]) return;
        Style.injectEmbed(id, `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/styles/${id}.css`);
      });
    },
    ejectAll() {
      Style.eject("tmd-root");
      Style.eject("tmd-style");
      Style.eject("tmd-chat-room-search");
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
      const typedKey = key;
      genedColors += `--tmd-${camelToKebabCase(key)}: ${plainColors[typedKey]};
	`;
    });
    Object.keys(specialColors).forEach((key) => {
      const typedKey = key;
      genedColors += `--tmd-${camelToKebabCase(key)}: ${specialColors[typedKey][0]};
	`;
      genedColors += `--tmd-${camelToKebabCase(key)}-hover: ${specialColors[typedKey][1]};
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

  // src/modules/colors.ts
  var primaryColor = color_default("#202020");
  var elementColor = primaryColor.lighten(0.2);
  var accentColor = color_default("#440171");
  var textColor = color_default("#cccccc");
  var specialColors2 = {
    equipped: color_default("#3575b5"),
    crafted: color_default("#aaa235"),
    blocked: color_default("#870c0c"),
    limited: color_default("#9d6600"),
    allowed: color_default("#008800"),
    roomFriend: color_default("#008800"),
    roomBlocked: color_default("#870c0c"),
    roomGame: color_default("#3575b5")
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
        themeSettings: {
          themeType: "dark"
        },
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
    load() {
    }
    static reloadTheme() {
      deepLibLogger.info("Reloading theme");
      const themeType = getModule("ColorsModule").settings.themeSettings.themeType;
      document.body.dataset.tmdThemeType = themeType;
      _Color.composeRoot();
      BcStyle.reloadAll();
      changeModColors();
      getModule("GuiRedrawModule").toggleGuiPatches();
    }
  };
  __name(_ColorsModule, "ColorsModule");
  var ColorsModule = _ColorsModule;

  // src/modules/commands.ts
  var _CommandsModule = class _CommandsModule extends BaseModule {
    load() {
      CommandCombine([
        {
          Tag: "share-theme",
          Description: "[member number]: Shares your theme with other people that have Themed installed!",
          Action(args) {
            if (!args) return getModule("ShareModule").share(void 0);
            const targetNumber = parseInt(args, 10);
            const target = ChatRoomCharacter.find((c) => c.MemberNumber == targetNumber);
            if (!target)
              sendLocalMessage("theme-share-error", `No character with MemberNumber ${targetNumber} found!`);
            else
              getModule("ShareModule").share(target.MemberNumber);
          }
        }
      ]);
    }
    run() {
    }
  };
  __name(_CommandsModule, "CommandsModule");
  var CommandsModule = _CommandsModule;

  // src/screens/global.ts
  var _GuiGlobal = class _GuiGlobal extends BaseSubscreen {
    get settings() {
      return super.settings;
    }
    get pageStructure() {
      const defaultSettings = getModule("GlobalModule").defaultSettings;
      return [Object.entries(this.settings).map(([key, value]) => {
        const typedKey = key;
        return {
          id: `tmd-global-${key}`,
          type: "checkbox",
          label: getText(`settings.setting.${typedKey}.name`),
          description: getText(`settings.setting.${typedKey}.desc`),
          setElementValue: /* @__PURE__ */ __name(() => value ?? defaultSettings[typedKey], "setElementValue"),
          setSettingValue: /* @__PURE__ */ __name((val) => {
            this.settings[typedKey] = val;
            ColorsModule.reloadTheme();
          }, "setSettingValue")
        };
      })];
    }
    load() {
      super.load();
    }
  };
  __name(_GuiGlobal, "GuiGlobal");
  __publicField(_GuiGlobal, "subscreenOptions", {
    name: "global",
    icon: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/images/cog.svg`
  });
  var GuiGlobal = _GuiGlobal;

  // src/modules/global.ts
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
        modEnabled: true,
        doVanillaGuiOverhaul: true,
        doUseAdvancedColoring: false,
        doUseFlatColor: false,
        doShowLocaleTime: true,
        doIndicateCharacterAbsence: true,
        doShowNewVersionMessage: true
      };
    }
    load() {
      ColorsModule.reloadTheme();
      const reload = /* @__PURE__ */ __name(() => {
        changeModColors();
        BcStyle.reloadAll();
      }, "reload");
      setTimeout(reload, 6e4);
      setTimeout(reload, 3e5);
      sdk.hookFunction(
        "ChatRoomCurrentTime",
        HookPriority.Observe,
        (args, next) => {
          if (!this.settings.doShowLocaleTime) return next(args);
          const currentTime = new Date(Date.now());
          return currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        },
        ModuleCategory.Global
      );
      sdk.hookFunction(
        "DialogDraw",
        HookPriority.Observe,
        (args, next) => {
          if (!this.settings.modEnabled) return next(args);
          if (!this.settings.doIndicateCharacterAbsence) return next(args);
          if (!(CurrentScreen == "ChatRoom")) return next(args);
          if (!CurrentCharacter) return next(args);
          next(args);
          if (!CurrentCharacter || !CurrentCharacter?.MemberNumber) return;
          if (CurrentCharacter.IsPlayer()) return;
          if (!CurrentCharacter?.Canvas?.getContext("2d") || !CurrentCharacter?.CanvasBlink?.getContext("2d")) return;
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
        ModuleCategory.Global
      );
      sdk.hookFunction(
        "AppearanceRun",
        HookPriority.Observe,
        (args, next) => {
          if (!this.settings.modEnabled) return next(args);
          if (!this.settings.doIndicateCharacterAbsence) return next(args);
          if (!(CurrentScreen == "Appearance")) return next(args);
          if (!CharacterAppearanceSelection || !CharacterAppearanceSelection.MemberNumber) return next(args);
          next(args);
          if (CharacterAppearanceSelection === null) return;
          if (CharacterAppearanceSelection.IsPlayer()) return;
          if (!CharacterAppearanceSelection?.Canvas?.getContext("2d") || !CharacterAppearanceSelection?.CanvasBlink?.getContext("2d")) return;
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
        ModuleCategory.Global
      );
      sdk.hookFunction(
        "ChatRoomSync",
        HookPriority.Observe,
        (args, next) => {
          Character.filter((character) => character.IsPlayer() || !_GlobalModule.transparentCharacters?.includes(character.MemberNumber));
          return next(args);
        },
        ModuleCategory.Global
      );
    }
    run() {
    }
  };
  __name(_GlobalModule, "GlobalModule");
  __publicField(_GlobalModule, "transparentCharacters", []);
  var GlobalModule = _GlobalModule;

  // src/screens/integration.ts
  var _GuiIntegration = class _GuiIntegration extends BaseSubscreen {
    get settings() {
      return super.settings;
    }
    get pageStructure() {
      const defaultSettings = getModule("IntegrationModule").defaultSettings;
      return [Object.entries(this.settings).map(([key, value]) => {
        const typedKey = key;
        return {
          id: `tmd-integration-${key}`,
          type: "checkbox",
          label: getText(`integration.setting.${key}.name`),
          description: getText(`integration.setting.${key}.desc`),
          setElementValue: /* @__PURE__ */ __name(() => value ?? defaultSettings[typedKey], "setElementValue"),
          setSettingValue: /* @__PURE__ */ __name((val) => {
            this.settings[typedKey] = val;
            ColorsModule.reloadTheme();
          }, "setSettingValue")
        };
      })];
    }
    load() {
      super.load();
    }
  };
  __name(_GuiIntegration, "GuiIntegration");
  __publicField(_GuiIntegration, "subscreenOptions", {
    name: "integration",
    icon: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/images/stars.svg`
  });
  var GuiIntegration = _GuiIntegration;

  // src/modules/integration.ts
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
        inventory: true,
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
    load() {
    }
  };
  __name(_IntegrationModule, "IntegrationModule");
  var IntegrationModule = _IntegrationModule;

  // src/utilities/console.ts
  var STYLES = {
    INFO: "color: #32CCCC",
    LOG: "color: #CCCC32",
    DEBUG: "color: #9E4BCF"
  };
  var cmdPrefix = "Themed";
  function conWarn(...args) {
    if (typeof args[0] === "string") console.warn(`%c${cmdPrefix}: ${args[0]}`, STYLES.LOG, ...args.slice(1));
    else console.warn(`%c${cmdPrefix}: `, STYLES.LOG, ...args);
  }
  __name(conWarn, "conWarn");

  // src/screens/profiles.ts
  var _GuiProfiles = class _GuiProfiles extends BaseSubscreen {
    get settings() {
      return super.settings;
    }
    load() {
      super.load();
      const profilesContainer = ElementCreate({
        tag: "div",
        classList: ["tmd-profiles-container"],
        attributes: {
          id: "tmd-profiles-container"
        },
        parent: layout.getSubscreen()
      });
      for (let i = 0; i < 3; i++) {
        const profileId = i + 1;
        const profileName = this.settings[profileId].name || getText("profiles.text.profile") + ` ${profileId}`;
        const profileElement = ElementCreate({
          tag: "div",
          attributes: {
            id: `tmd-profile-${profileId}`
          },
          classList: ["tmd-profile"],
          children: [
            advElement.createLabel({
              id: `tmd-profile-label-${profileId}`,
              label: profileName
            }),
            this.createColorShowcase(profileId),
            {
              tag: "div",
              classList: ["tmd-profile-buttons"],
              children: [
                advElement.createButton({
                  id: `tmd-profiles-profile-save-${profileId}`,
                  onClick: /* @__PURE__ */ __name(() => this.handleProfilesSaving(profileId), "onClick"),
                  options: {
                    label: getText("profiles.button.save")
                  }
                }),
                advElement.createButton({
                  id: `tmd-profiles-profile-load-${profileId}`,
                  onClick: /* @__PURE__ */ __name(() => this.handleProfilesLoading(profileId), "onClick"),
                  options: {
                    label: getText("profiles.button.load"),
                    disabled: !this.profileExists(profileId)
                  }
                }),
                advElement.createButton({
                  id: `tmd-profiles-profile-delete-${profileId}`,
                  onClick: /* @__PURE__ */ __name(() => this.handleProfilesDeleting(profileId), "onClick"),
                  options: {
                    label: getText("profiles.button.delete"),
                    disabled: !this.profileExists(profileId)
                  }
                })
              ]
            }
          ]
        });
        profilesContainer.appendChild(profileElement);
      }
      CharacterAppearanceForceUpCharacter = Player.MemberNumber ?? -1;
    }
    resize(onLoad) {
      super.resize(onLoad);
    }
    async handleProfilesSaving(profileId) {
      if (!this.profileCanBeSaved(profileId)) return;
      const name = await Modal.prompt(getText("profiles.prompt"));
      if (name === null) return;
      const storage = modStorage.playerStorage;
      const profile = this.settings[profileId];
      if (!profile || Object.keys(profile).length === 0) {
        this.settings[profileId] = {};
      }
      this.settings[profileId] = CommonCloneDeep({
        name,
        data: {
          GlobalModule: storage.GlobalModule,
          ColorsModule: storage.ColorsModule,
          IntegrationModule: storage.IntegrationModule
        }
      });
      const display = name ? `"${name}"` : profileId;
      ToastManager.success(`${getText("profiles.text.profile")} ${display} ${getText("profiles.text.has_been_saved")}`);
      this.updateProfileLabel(profileId);
      this.updateProfileButtons(profileId);
      this.updateProfileColorShowcase(profileId);
    }
    handleProfilesLoading(profileId) {
      if (!this.profileExists(profileId)) {
        ToastManager.error(`${getText("profiles.text.profile")} ${profileId} ${getText("profiles.text.doesnt_exist")}`);
        return;
      }
      const data = this.settings[profileId].data;
      modStorage.playerStorage = CommonCloneDeep({
        ...modStorage.playerStorage,
        GlobalModule: data.GlobalModule,
        ColorsModule: data.ColorsModule,
        IntegrationModule: data.IntegrationModule
      });
      const name = this.settings[profileId].name;
      const display = name ? `"${name}"` : profileId;
      ToastManager.success(`${getText("profiles.text.profile")} ${display} ${getText("profiles.text.has_been_loaded")}`);
      ColorsModule.reloadTheme();
    }
    handleProfilesDeleting(profileId) {
      if (!this.profileExists(profileId)) {
        ToastManager.info(`${getText("profiles.text.profile")} ${profileId} ${getText("profiles.text.doesnt_exist")}`);
        return;
      }
      const name = this.settings[profileId].name;
      this.settings[profileId] = {
        name: "",
        data: {}
      };
      const display = name ? `"${name}"` : profileId;
      ToastManager.success(`${getText("profiles.text.profile")} ${display} ${getText("profiles.text.has_been_deleted")}`);
      this.updateProfileLabel(profileId);
      this.updateProfileButtons(profileId);
      this.updateProfileColorShowcase(profileId);
    }
    updateProfileButtons(profileId) {
      const profileSaveButton = ElementWrap(`tmd-profiles-profile-save-${profileId}`);
      const profileLoadButton = ElementWrap(`tmd-profiles-profile-load-${profileId}`);
      const profileDeleteButton = ElementWrap(`tmd-profiles-profile-delete-${profileId}`);
      if (!profileSaveButton || !profileLoadButton || !profileDeleteButton) return;
      profileSaveButton.disabled = !this.profileCanBeSaved(profileId);
      profileLoadButton.disabled = !this.profileExists(profileId);
      profileDeleteButton.disabled = !this.profileExists(profileId);
    }
    updateProfileLabel(profileId) {
      const name = this.settings[profileId].name;
      const display = name ? name : `${getText("profiles.text.profile")} ${profileId}`;
      const profileLabel = ElementWrap(`tmd-profile-label-${profileId}`);
      if (!profileLabel) return;
      profileLabel.textContent = display;
    }
    updateProfileColorShowcase(profileId) {
      ElementWrap(`tmd-profile-color-showcase-${profileId}`)?.remove();
      const colorShowcase = this.createColorShowcase(profileId);
      if (colorShowcase) {
        ElementWrap(`tmd-profile-label-${profileId}`)?.after(colorShowcase);
      }
    }
    createColorShowcase(profileId) {
      const exists = this.profileExists(profileId);
      if (!exists) return null;
      const profile = this.settings[profileId];
      const colors = Object.entries(profile.data.ColorsModule.base);
      return ElementCreate({
        tag: "div",
        classList: ["tmd-profile-color-showcase"],
        attributes: {
          id: `tmd-profile-color-showcase-${profileId}`
        },
        children: colors.map(([key, value]) => {
          const isBaseMode = !profile.data.GlobalModule.doUseAdvancedColoring;
          const baseModeKey = /* @__PURE__ */ __name((key2) => ["main", "accent", "text"].includes(key2), "baseModeKey");
          if (isBaseMode && !baseModeKey(key)) {
            return;
          }
          return advElement.createButton({
            id: `tmd-profile-color-showcase-${profileId}-${key}`,
            htmlOptions: {
              button: {
                style: {
                  "--background-color": value
                },
                classList: ["tmd-profile-color-showcase-button"]
              }
            },
            options: {
              noStyling: true,
              tooltip: getText(`colors.setting.${key}.name`)
            }
          });
        })
      });
    }
    isValidProfileId(id) {
      if (id < 1 || id > 3) {
        conWarn(`Invalid profile id ${id}`);
        return false;
      }
      return true;
    }
    profileCanBeSaved(profileId) {
      if (!this.isValidProfileId(profileId)) return false;
      return true;
    }
    profileExists(profileId) {
      if (!this.isValidProfileId(profileId)) return false;
      const data = this.settings[profileId]?.data || {};
      if (!data || Object.keys(data).length === 0) return false;
      return true;
    }
  };
  __name(_GuiProfiles, "GuiProfiles");
  __publicField(_GuiProfiles, "subscreenOptions", {
    name: "profiles",
    icon: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/images/users_group.svg`,
    drawCharacter: false
  });
  var GuiProfiles = _GuiProfiles;

  // src/modules/profiles.ts
  var _ProfilesModule = class _ProfilesModule extends BaseModule {
    get settings() {
      return super.settings;
    }
    set settings(val) {
      super.settings = val;
    }
    get settingsScreen() {
      return GuiProfiles;
    }
    get defaultSettings() {
      const profileDefaults = {
        GlobalModule: getModule("GlobalModule").defaultSettings,
        ColorsModule: getModule("ColorsModule").defaultSettings,
        IntegrationModule: getModule("IntegrationModule").defaultSettings
      };
      const data = modStorage.playerStorage?.ProfilesModule || {};
      for (let i = 0; i < 3; i++) {
        const profileIndex = i + 1;
        if (!data[profileIndex] || Object.keys(data[profileIndex]).length === 0) {
          data[profileIndex] = {
            data: {},
            name: ""
          };
        }
        if (Object.keys(data[profileIndex].data).length > 0)
          data[profileIndex].data = deepMergeMatchingProperties(profileDefaults, data[profileIndex].data);
      }
      return data;
    }
    load() {
    }
  };
  __name(_ProfilesModule, "ProfilesModule");
  var ProfilesModule = _ProfilesModule;

  // src/modules/share.ts
  var _ShareModule = class _ShareModule extends BaseModule {
    constructor() {
      super(...arguments);
      __publicField(this, "channel", null);
    }
    load() {
      this.channel = new EventChannel("share");
      this.channel.registerListener("ThemedTheme", (data, sender) => {
        const theme = data.Theme;
        const version = data.ThemeVersion;
        const settings = data.Settings;
        const senderName = CharacterNickname(sender);
        const prompt = getText("modal.prompt.share").replace("$Sender", `${senderName} (${sender.MemberNumber})`).replace("$SenderPronoun", CharacterPronoun(sender, "Possessive", false)).split("<br>").map((str) => ({
          tag: "span",
          children: [str]
        }));
        const shareNotification = getText("modal.prompt.chat_share_notification").replace("$Sender", `${senderName} (${sender.MemberNumber})`);
        const message = ElementCreate({
          tag: "div",
          classList: ["themed-chat-modal"],
          attributes: {
            "data-time": ChatRoomCurrentTime(),
            "data-sender": sender.MemberNumber?.toString(),
            id: sender.MemberNumber?.toString()
          },
          children: [
            {
              tag: "span",
              classList: ["modal-prompt"],
              children: [
                shareNotification
              ]
            },
            advElement.createButton({
              id: ElementGenerateID(),
              htmlOptions: {
                button: {
                  classList: ["modal-button"]
                }
              },
              options: {
                label: getText("modal.button.show")
              },
              onClick: /* @__PURE__ */ __name(() => {
                if (!version || version !== Player.Themed.Version) {
                  sendLocalMessage("theme-not-up-to-date", `Theme sent by ${senderName} is not up-to-date!`);
                  return;
                }
                Modal.confirm(prompt).then((result) => {
                  if (result) {
                    this.acceptShare(theme, settings);
                  }
                });
              }, "onClick")
            })
          ]
        });
        ChatRoomAppendChat(message);
      });
    }
    acceptShare(data, settings) {
      Player.Themed.ColorsModule = data;
      Player.Themed.GlobalModule.doUseAdvancedColoring = settings.doUseAdvancedColoring;
      modStorage.save();
      ColorsModule.reloadTheme();
    }
    share(target) {
      sendLocalMessage("theme-share", "Shared theme with " + (target ? CharacterNickname(ChatRoomCharacter.find((c) => c.MemberNumber == target)) : "everyone"));
      sendActionMessage(`${CharacterNickname(Player)} shares ${CharacterPronoun(Player, "Possessive", false)} Themed theme!`, target);
      this.channel?.sendEvent("ThemedTheme", {
        Theme: Player.Themed.ColorsModule,
        Settings: Player.Themed.GlobalModule,
        ThemeVersion: Player.Themed.Version
      });
    }
  };
  __name(_ShareModule, "ShareModule");
  var ShareModule = _ShareModule;

  // src/migrators/deeplib_migrator.ts
  var _DeeplibMigrator = class _DeeplibMigrator extends BaseMigrator2 {
    get migrationVersion() {
      return "1.6.0";
    }
    migrate() {
      Player.Themed.GlobalModule.modEnabled = Player.Themed.GlobalModule.themedEnabled;
      delete Player.Themed.GlobalModule.themedEnabled;
      ColorsModule.reloadTheme();
    }
  };
  __name(_DeeplibMigrator, "DeeplibMigrator");
  var DeeplibMigrator = _DeeplibMigrator;

  // src/screens/reset.ts
  var _GuiReset = class _GuiReset extends BaseSubscreen {
    get name() {
      return "reset";
    }
    load() {
      super.load();
      let timeToConfirm = 5;
      ElementCreate({
        tag: "div",
        classList: ["tmd-reset-container"],
        attributes: {
          id: "tmd-reset-container"
        },
        children: [
          advElement.createLabel({
            id: "themed-reset-label-perma_reset_of_mod_data",
            label: getText("reset.label.perma_reset_of_mod_data")
          }),
          {
            tag: "br"
          },
          advElement.createLabel({
            id: "themed-reset-label-warning",
            label: getText("reset.label.warning")
          }),
          advElement.createLabel({
            id: "themed-reset-label-if_u_confirm_perma_reset",
            label: getText("reset.label.if_u_confirm_perma_reset")
          }),
          {
            tag: "br"
          },
          advElement.createLabel({
            id: "themed-reset-label-youll_able_to_use_mod",
            label: getText("reset.label.youll_able_to_use_mod")
          }),
          {
            tag: "br"
          },
          advElement.createLabel({
            id: "themed-reset-label-action_cannot_be_undone",
            label: getText("reset.label.action_cannot_be_undone")
          }),
          {
            tag: "br"
          },
          {
            tag: "div",
            attributes: {
              id: "tmd-reset-buttons-container"
            },
            children: [
              advElement.createButton({
                id: "tmd-reset-button",
                onClick: /* @__PURE__ */ __name(() => {
                  this.confirm();
                  timer?.();
                }, "onClick"),
                options: {
                  label: `${getText("reset.button.confirm")} (${timeToConfirm})`
                },
                disabled: true
              }),
              advElement.createButton({
                id: "tmd-cancel-button",
                onClick: /* @__PURE__ */ __name(() => {
                  this.exit();
                  timer?.();
                }, "onClick"),
                options: {
                  label: getText("reset.button.cancel")
                }
              })
            ]
          }
        ],
        parent: layout.getSubscreen()
      });
      const timer = TimerCreate(() => {
        timeToConfirm--;
        const button = ElementWrap("tmd-reset-button");
        const buttonLabel = button?.querySelector(".button-label");
        if (buttonLabel) {
          buttonLabel.textContent = `${getText("reset.button.confirm")} (${timeToConfirm})`;
        }
        if (timeToConfirm <= 0) {
          if (button && buttonLabel) {
            button.disabled = false;
            buttonLabel.textContent = getText("reset.button.confirm");
          }
          timer();
        }
      }, 1e3, true, "universal");
    }
    resize(onLoad) {
      super.resize(onLoad);
      ElementSetPosition("tmd-reset-container", 500, 175, "top-left");
      ElementSetSize("tmd-reset-container", 1e3, null);
    }
    confirm() {
      settingsReset();
      for (const module of modules()) {
        module.registerDefaultSettings();
      }
      ColorsModule.reloadTheme();
      this.setSubscreen(null);
      PreferenceSubscreenExtensionsClear();
    }
  };
  __name(_GuiReset, "GuiReset");
  __publicField(_GuiReset, "subscreenOptions", {
    drawCharacter: false,
    name: "reset"
  });
  var GuiReset = _GuiReset;

  // src/themed.ts
  (async () => {
    const changelog = await fetch(`${"https://ddeeplb.github.io/Themed-BC/dev/public"}/text/changelog.txt`).then((res) => res.text()).then((text) => text.replace(/\r\n/g, "\n"));
    const modules2 = [
      new GUI({
        buttonText: "Themed",
        identifier: "Themed",
        image: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/images/mod.png`
      }),
      new GlobalModule(),
      new ColorsModule(),
      new GuiRedrawModule(),
      new IntegrationModule(),
      new ProfilesModule(),
      new CommandsModule(),
      new ShareModule(),
      new VersionModule({
        newVersionMessage: changelog
      })
    ];
    const migrators = [
      new V140Migrator(),
      new DeeplibMigrator()
    ];
    return initMod({
      beforeLogin: /* @__PURE__ */ __name(() => loadLoginOptions(), "beforeLogin"),
      modInfo: {
        info: {
          name: "Themed",
          fullName: "Themed",
          version: MOD_VERSION_CAPTION
        }
      },
      mainMenuOptions: {
        importExportSubscreen: new GuiImportExport({
          customFileExtension: ".tmd",
          onImport() {
            modStorage.save();
            ColorsModule.reloadTheme();
          }
        }),
        repoLink: "https://github.com/dDeepLb/Themed-BC",
        wikiLink: "https://github.com/dDeepLb/Themed-BC/wiki",
        resetSubscreen: new GuiReset()
      },
      modules: modules2,
      migrators,
      translationOptions: {
        pathToTranslationsFolder: `${"https://ddeeplb.github.io/Themed-BC/dev/public"}/translations/`
      }
    });
  })();
})();
//# sourceMappingURL=themed.js.map
