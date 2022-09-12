
// --------------------
// Request: D:/Aaron/Code/NUXT/beerLibrary/node_modules/nuxt/dist/app/entry
// Parents: 
// - <entry> ($id_x1frnpf8FZ)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - ohmyfetch ($id_4T3an2dV6G)
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/paths.mjs ($id_kBqrOSN9S5)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/css.mjs ($id_UTmLuNoaax)
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/plugins/server.mjs ($id_h7OLHUjIb9)
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/root-component.mjs ($id_9GYgqDHACq)
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/app-component.mjs ($id_01wep3FSAq)
// --------------------
const $id_WyUjsMnbrl = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("ohmyfetch");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/paths.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: vue
// Parents: 
// - D:/Aaron/Code/NUXT/beerLibrary/node_modules/nuxt/dist/app/entry ($id_DtPtL8qAmZ)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/components.plugin.mjs ($id_NmY26seaGr)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_wDImTp8t2G)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_gPQzqsnHwc)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// - /pages/about.vue?macro=true ($id_ndwxjJaUzT)
// - /pages/beer.vue?macro=true ($id_USphOWrETI)
// - /pages/beers/[name].vue?macro=true ($id_t7szSjL6iN)
// - /pages/cart.vue?macro=true ($id_WkoUmBikZP)
// - /pages/fav.vue?macro=true ($id_uBu2dbNsZi)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/about.vue ($id_qTzNC3iToF)
// - /pages/beer.vue ($id_enNPL7Ly8D)
// - /pages/beers/[name].vue ($id_Z2XMKP6fnR)
// - /pages/cart.vue ($id_nyBDqOYyME)
// - /pages/fav.vue ($id_GNJSW9bNJu)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_DFcXpE295m)
// - /node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.mjs ($id_ohfmrleGKz)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/layouts.mjs ($id_cFKZfY3ILw)
// - /components/V-header.vue ($id_2Bz9TpUHLQ)
// - /components/V-footer.vue ($id_4ySGNwul7O)
// - /layouts/default.vue ($id_dononVQSck)
// - /app.vue ($id_K0boQqLzfo)
// Dependencies: 
// - @vue/runtime-dom ($id_xcKel6nH2q)
// --------------------
const $id_G33erDMZ5a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("@vue/runtime-dom");

const __vite_ssr_import_1__ = await __vite_ssr_import__("@vue/runtime-dom");
__vite_ssr_exportAll__(__vite_ssr_import_1__);

function initDev() {
    {
        __vite_ssr_import_0__.initCustomFormatter();
    }
}

// This entry exports the runtime only, and is built as
if ((process.env.NODE_ENV !== 'production')) {
    initDev();
}
const compile = () => {
    if ((process.env.NODE_ENV !== 'production')) {
        __vite_ssr_import_0__.warn(`Runtime compilation is not supported in this build of Vue.` +
            (` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
                ) /* should not happen */);
    }
};


Object.defineProperty(__vite_ssr_exports__, "compile", { enumerable: true, configurable: true, get(){ return compile }});
;
}


// --------------------
// Request: @vue/runtime-dom
// Parents: 
// - vue ($id_VkOCJnUZrn)
// Dependencies: 

// --------------------
const $id_9sriful2d8 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("@vue/runtime-dom")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"@vue/runtime-dom\".")
  })


// --------------------
// Request: ohmyfetch
// Parents: 
// - D:/Aaron/Code/NUXT/beerLibrary/node_modules/nuxt/dist/app/entry ($id_DtPtL8qAmZ)
// Dependencies: 

// --------------------
const $id_kLE5W6MKaY = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("ohmyfetch")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"ohmyfetch\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/paths.mjs
// Parents: 
// - D:/Aaron/Code/NUXT/beerLibrary/node_modules/nuxt/dist/app/entry ($id_DtPtL8qAmZ)
// Dependencies: 
// - ufo ($id_Idgm3MW7hZ)
// --------------------
const $id_d3jpiQzmnF = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("ufo");

const appConfig = {"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":"","head":{"meta":[],"link":[{"rel":"stylesheet","href":"https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"},{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,1,0"},{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"},{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"},{"rel":"stylesheet","href":"//netdna.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"},{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}],"style":[],"script":[],"noscript":[],"charset":"utf-8","viewport":"width=device-width, initial-scale=1"}}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});
globalThis.__buildAssetsURL = buildAssetsURL
globalThis.__publicAssetsURL = publicAssetsURL;
}


// --------------------
// Request: ufo
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/paths.mjs ($id_kBqrOSN9S5)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_KJr7LehhrL = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("ufo")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"ufo\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/index.mjs
// Parents: 
// - D:/Aaron/Code/NUXT/beerLibrary/node_modules/nuxt/dist/app/entry ($id_DtPtL8qAmZ)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_AGPfGxS2fu)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_mHG7oNEQOP)
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/components.plugin.mjs ($id_NmY26seaGr)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /composables/useDarkMode.ts ($id_BBIogYydvh)
// - /pages/beer.vue?macro=true ($id_USphOWrETI)
// - /pages/beers/[name].vue?macro=true ($id_t7szSjL6iN)
// - /pages/cart.vue?macro=true ($id_WkoUmBikZP)
// - /pages/fav.vue?macro=true ($id_uBu2dbNsZi)
// - /pages/beer.vue ($id_enNPL7Ly8D)
// - /pages/beers/[name].vue ($id_Z2XMKP6fnR)
// - /pages/cart.vue ($id_nyBDqOYyME)
// - /pages/fav.vue ($id_GNJSW9bNJu)
// - /node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.mjs ($id_ohfmrleGKz)
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/unocss.mjs ($id_3QQj0owhDj)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_Fhvn5egKy1)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// --------------------
const $id_fgrt3UeQEL = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - hookable ($id_Jqn8E4F5w7)
// - unctx ($id_95GsJqysu7)
// --------------------
const $id_lfCjBrgcte = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("hookable");

const __vite_ssr_import_2__ = await __vite_ssr_import__("unctx");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (true) {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  const unwrappedPlugins = [];
  const legacyInjectPlugins = [];
  const invalidPlugins = [];
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      invalidPlugins.push(plugin);
      return null;
    }
    if (plugin.length > 1) {
      legacyInjectPlugins.push(plugin);
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    if (!isNuxtPlugin(plugin)) {
      unwrappedPlugins.push(plugin);
    }
    return plugin;
  }).filter(Boolean);
  if (true && legacyInjectPlugins.length) {
    console.warn("[warn] [nuxt] You are using a plugin with legacy Nuxt 2 format (context, inject) which is likely to be broken. In the future they will be ignored:", legacyInjectPlugins.map((p) => p.name || p).join(","));
  }
  if (true && invalidPlugins.length) {
    console.warn("[warn] [nuxt] Some plugins are not exposing a function and skipped:", invalidPlugins);
  }
  if (true && unwrappedPlugins.length) {
    console.warn("[warn] [nuxt] You are using a plugin that has not been wrapped in `defineNuxtPlugin`. It is advised to wrap your plugins as in the future this may enable enhancements:", unwrappedPlugins.map((p) => p.name || p).join(","));
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isNuxtPlugin(plugin) {
  return typeof plugin === "function" && NuxtPluginIndicator in plugin;
}
Object.defineProperty(__vite_ssr_exports__, "isNuxtPlugin", { enumerable: true, configurable: true, get(){ return isNuxtPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = __vite_ssr_import_0__.getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: hookable
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// Dependencies: 

// --------------------
const $id_p6x8naIYgL = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("hookable")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"hookable\".")
  })


// --------------------
// Request: unctx
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_Zn9H5zfDIh = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("unctx")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"unctx\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// Dependencies: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_AGPfGxS2fu)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// --------------------
const $id_YvAaozTraC = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "createError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.createError }});
Object.defineProperty(__vite_ssr_exports__, "isNuxtError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.isNuxtError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "showError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.showError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
Object.defineProperty(__vite_ssr_exports__, "setResponseStatus", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.setResponseStatus }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue-router ($id_RGqOect6fq)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// --------------------
const $id_XTtQ30wmO3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue-router");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt), '$BblPDwLpsD');
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: vue-router
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// Dependencies: 

// --------------------
const $id_7dT9jx0uwT = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("vue-router")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"vue-router\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_BHNdDlA1Pk = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = __vite_ssr_import_0__.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating && key in nuxt.payload.data) {
      asyncData.pending.value = false;
    } else if (instance && nuxt.payload.serverRendered && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [key, handler, options] = args;
  return useAsyncData(key, handler, { ...options, lazy: true }, null);
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_6bgT8vIFHQ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_oMJXouc9nw = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_kP3GBeDzaR = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - h3 ($id_ltfhTi4n2w)
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_0OCs51rfoK = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("h3");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useError = () => __vite_ssr_import_1__.toRef(__vite_ssr_import_2__.useNuxtApp().payload, "error");
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "showError", { enumerable: true, configurable: true, get(){ return showError }});
const throwError = showError;
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
const isNuxtError = (err) => err && typeof err === "object" && "__nuxt_error" in err;
Object.defineProperty(__vite_ssr_exports__, "isNuxtError", { enumerable: true, configurable: true, get(){ return isNuxtError }});
const createError = (err) => {
  const _err = __vite_ssr_import_0__.createError(err);
  _err.__nuxt_error = true;
  return _err;
};
Object.defineProperty(__vite_ssr_exports__, "createError", { enumerable: true, configurable: true, get(){ return createError }});
;
}


// --------------------
// Request: h3
// Parents: 
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_K2PnHEPz0m = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("h3")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"h3\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// --------------------
const $id_zYOrYjkwm9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

function useFetch(request, arg1, arg2) {
  const [opts, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || autoKey;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = "$f" + _key;
  const _request = __vite_ssr_import_0__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_0__.isRef(r) ? r.value : r;
  });
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    initialCache,
    ...fetchOptions
  } = opts;
  const _fetchOptions = {
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    initialCache,
    watch: [
      _request,
      ...watch || []
    ]
  };
  const asyncData = __vite_ssr_import_1__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions, '$2Qpjr020wX');
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, arg1, arg2) {
  const [opts, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  return useFetch(
    request,
    {
      ...opts,
      lazy: true
    },
    autoKey
  , '$O2v9FOrXIM');
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - cookie-es ($id_MKm94FqkqC)
// - h3 ($id_ltfhTi4n2w)
// - destr ($id_12yP1cX3Wj)
// - ohash ($id_yEY2As6gE7)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_XUZhFBVStH = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("cookie-es");

const __vite_ssr_import_2__ = await __vite_ssr_import__("h3");

const __vite_ssr_import_3__ = await __vite_ssr_import__("destr");

const __vite_ssr_import_4__ = await __vite_ssr_import__("ohash");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_6__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const nuxtApp = __vite_ssr_import_7__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!__vite_ssr_import_4__.isEqual(cookie.value, cookies[name])) {
        writeServerCookie(__vite_ssr_import_5__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_5__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: cookie-es
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 

// --------------------
const $id_t3HHRMhh7L = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("cookie-es")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"cookie-es\".")
  })


// --------------------
// Request: destr
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 

// --------------------
const $id_ZK3lg3ye5b = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("destr")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"destr\".")
  })


// --------------------
// Request: ohash
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 

// --------------------
const $id_ApQSwD9AXx = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("ohash")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"ohash\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_BjnOCDcfIZ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
function setResponseStatus(code, message) {
  const event = true && useRequestEvent();
  if (event) {
    event.res.statusCode = code;
    if (message) {
      event.res.statusMessage = message;
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "setResponseStatus", { enumerable: true, configurable: true, get(){ return setResponseStatus }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - h3 ($id_ltfhTi4n2w)
// - ufo ($id_Idgm3MW7hZ)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_72OrpZA28S = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("h3");

const __vite_ssr_import_2__ = await __vite_ssr_import__("ufo");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_3__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  if (__vite_ssr_import_0__.getCurrentInstance()) {
    return __vite_ssr_import_0__.inject("_route", __vite_ssr_import_3__.useNuxtApp()._route);
  }
  return __vite_ssr_import_3__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_3__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_3__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (false && isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = __vite_ssr_import_2__.joinURL(__vite_ssr_import_3__.useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => __vite_ssr_import_1__.sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// --------------------
const $id_HRAmKRepZ0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_Fhvn5egKy1)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - ufo ($id_Idgm3MW7hZ)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_aAoWaPsGgE = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("ufo");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(
            __vite_ssr_import_0__.resolveComponent("RouterLink"),
            {
              to: to.value,
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => __vite_ssr_import_2__.navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isActive: false,
            isExactActive: false
          });
        }
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default?.());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /pages/beer.vue?macro=true ($id_USphOWrETI)
// - /pages/beers/[name].vue?macro=true ($id_t7szSjL6iN)
// - /pages/cart.vue?macro=true ($id_WkoUmBikZP)
// - /pages/fav.vue?macro=true ($id_uBu2dbNsZi)
// - /pages/beer.vue ($id_enNPL7Ly8D)
// - /pages/beers/[name].vue ($id_Z2XMKP6fnR)
// - /pages/cart.vue ($id_nyBDqOYyME)
// - /pages/fav.vue ($id_GNJSW9bNJu)
// - /node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.mjs ($id_ohfmrleGKz)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// --------------------
const $id_DBzckdbLOm = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 
// - @vue/shared ($id_FcJYoqIAB0)
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_TG3cDPMBp5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("@vue/shared");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: @vue/shared
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// Dependencies: 

// --------------------
const $id_NOAOzpHkPB = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("@vue/shared")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"@vue/shared\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/css.mjs
// Parents: 
// - D:/Aaron/Code/NUXT/beerLibrary/node_modules/nuxt/dist/app/entry ($id_DtPtL8qAmZ)
// Dependencies: 
// - /node_modules/@nuxt/ui/dist/assets/styles.css ($id_PkQaOa9k0N)
// --------------------
const $id_0SFIwo7yqk = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/ui/dist/assets/styles.css");
;
}


// --------------------
// Request: /node_modules/@nuxt/ui/dist/assets/styles.css
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/css.mjs ($id_UTmLuNoaax)
// Dependencies: 

// --------------------
const $id_uyVtDbuieD = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ":root {\n  --nui-c-context: 125,125,125;\n}\n\nhtml {\n  background-color: white;\n}\n\nhtml.dark {\n  color-scheme: dark;\n  background-color: #222;\n  color: white;\n}\n\n";
}


// --------------------
// Request: /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/plugins/server.mjs
// Parents: 
// - D:/Aaron/Code/NUXT/beerLibrary/node_modules/nuxt/dist/app/entry ($id_DtPtL8qAmZ)
// Dependencies: 
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_mHG7oNEQOP)
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/components.plugin.mjs ($id_NmY26seaGr)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.mjs ($id_ohfmrleGKz)
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/unocss.mjs ($id_3QQj0owhDj)
// --------------------
const $id_g7t2x0oBlA = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/router.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/unocss.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default,
  __vite_ssr_import_6__.default
];
}


// --------------------
// Request: /node_modules/nuxt/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/plugins/server.mjs ($id_h7OLHUjIb9)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_1SAEi7QN5N = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/plugins/server.mjs ($id_h7OLHUjIb9)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_3ueZNCOMeK = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");


const components = {}

__vite_ssr_exports__.default = __vite_ssr_import_1__.defineNuxtPlugin(nuxtApp => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
})
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/plugins/server.mjs ($id_h7OLHUjIb9)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_wDImTp8t2G)
// - vue ($id_VkOCJnUZrn)
// - defu ($id_q1WUEsFSUQ)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_wRsEVKfW1P = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("defu");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => {
      const meta = __vite_ssr_import_0__.renderHeadToString(head);
      return {
        ...meta,
        bodyScripts: meta.bodyTags
      };
    };
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_19kbcSkZ7c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var BODY_TAG_ATTR_NAME = `data-meta-body`;

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    if (key === "body" && attrs.body === true) {
      el.setAttribute(BODY_TAG_ATTR_NAME, "true");
    } else {
      let value = attrs[key];
      if (key === "key" || value === false) {
        continue;
      }
      if (key === "children") {
        el.textContent = value;
      } else {
        el.setAttribute(key, value);
      }
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "noscript",
  "htmlAttrs",
  "bodyAttrs"
];
var renderTemplate = (template, title) => {
  if (template == null)
    return "";
  if (typeof template === "string") {
    return template.replace("%s", title ?? "");
  }
  return template(__vite_ssr_import_0__.unref(title));
};
var headObjToTags = (obj) => {
  const tags = [];
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] == null)
      continue;
    switch (key) {
      case "title":
        tags.push({ tag: key, props: { children: obj[key] } });
        break;
      case "titleTemplate":
        break;
      case "base":
        tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
        break;
      default:
        if (acceptFields.includes(key)) {
          const value = obj[key];
          if (Array.isArray(value)) {
            value.forEach((item) => {
              tags.push({ tag: key, props: item });
            });
          } else if (value) {
            tags.push({ tag: key, props: value });
          }
        }
        break;
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a, _b;
  const head = document.head;
  const body = document.body;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  let bodyMetaElements = body.querySelectorAll(`[${BODY_TAG_ATTR_NAME}]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldHeadElements = [];
  const oldBodyElements = [];
  if (bodyMetaElements) {
    for (let i = 0; i < bodyMetaElements.length; i++) {
      if (bodyMetaElements[i] && ((_a = bodyMetaElements[i].tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldBodyElements.push(bodyMetaElements[i]);
      }
    }
  }
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_b = j == null ? void 0 : j.tagName) == null ? void 0 : _b.toLowerCase()) === type) {
        oldHeadElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => ({
    element: createElement(tag.tag, tag.props, document),
    body: tag.props.body ?? false
  }));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldHeadElements.length; i++) {
      const oldEl = oldHeadElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldHeadElements.splice(i, 1);
        return false;
      }
    }
    for (let i = 0; i < oldBodyElements.length; i++) {
      const oldEl = oldBodyElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldBodyElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldBodyElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  oldHeadElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    if (t.body === true) {
      body.insertAdjacentElement("beforeend", t.element);
    } else {
      head.insertBefore(t.element, headCountEl);
    }
  });
  headCountEl.setAttribute("content", "" + (headCount - oldHeadElements.length + newElements.filter((t) => !t.body).length));
};
var createHead = (initHeadObject) => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  if (initHeadObject) {
    allHeadObjs.push(__vite_ssr_import_0__.shallowRef(initHeadObject));
  }
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      const titleTemplate = allHeadObjs.map((i) => __vite_ssr_import_0__.unref(i).titleTemplate).reverse().find((i) => i != null);
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(__vite_ssr_import_0__.unref(objs));
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          if (titleTemplate && tag.tag === "title") {
            tag.props.children = renderTemplate(titleTemplate, tag.props.children);
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const head = injectHead();
  const headObj = __vite_ssr_import_0__.ref(obj);
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let isBodyTag = false;
  if (tag.props.body) {
    isBodyTag = true;
    delete tag.props.body;
  }
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}${isBodyTag ? `  ${BODY_TAG_ATTR_NAME}="true"` : ""}>`;
  }
  return `<${tag.tag}${attrs}${isBodyTag ? ` ${BODY_TAG_ATTR_NAME}="true"` : ""}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  let bodyTags = [];
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else if (tag.props.body) {
      bodyTags.push(tagToString(tag));
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    },
    get bodyTags() {
      return bodyTags.join("");
    }
  };
};
var addVNodeToHeadObj = (node, obj) => {
  const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
  if (typeof type !== "string" || !(type in obj))
    return;
  const props = __spreadProps(__spreadValues({}, node.props), {
    children: Array.isArray(node.children) ? node.children[0].children : node.children
  });
  if (Array.isArray(obj[type])) {
    ;
    obj[type].push(props);
  } else if (type === "title") {
    obj.title = props.children;
  } else {
    ;
    obj[type] = props;
  }
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: [],
    noscript: []
  };
  for (const node of nodes) {
    if (typeof node.type === "symbol" && Array.isArray(node.children)) {
      for (const childNode of node.children) {
        addVNodeToHeadObj(childNode, obj);
      }
    } else {
      addVNodeToHeadObj(node, obj);
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: defu
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// Dependencies: 

// --------------------
const $id_q6X4BWspBy = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("defu")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"defu\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/plugins/server.mjs ($id_h7OLHUjIb9)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/meta.config.mjs ($id_OLniWVagJ1)
// --------------------
const $id_BL7IqVL2Dw = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/meta.config.mjs");

const metaMixin = {
  created() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_0__.markRaw({ title: "", ...__vite_ssr_import_4__.default.globalMeta }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// --------------------
const $id_PE2LM6mDyc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    fetchpriority: String,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const NoScript = __vite_ssr_import_0__.defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String
  },
  setup: setupForUseMeta((props, { slots }) => {
    const noscript = { ...props };
    const textContent = (slots.default?.() || []).filter(({ children }) => children).map(({ children }) => children).join("");
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "NoScript", { enumerable: true, configurable: true, get(){ return NoScript }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default?.()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 

// --------------------
const $id_8PDEN2vEKQ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"meta":[],"link":[{"rel":"stylesheet","href":"https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"},{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,1,0"},{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"},{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"},{"rel":"stylesheet","href":"//netdna.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"},{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}],"style":[],"script":[],"noscript":[],"charset":"utf-8","viewport":"width=device-width, initial-scale=1"}};
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/plugins/server.mjs ($id_h7OLHUjIb9)
// Dependencies: 
// - unctx ($id_95GsJqysu7)
// - vue ($id_VkOCJnUZrn)
// - vue-router ($id_RGqOect6fq)
// - h3 ($id_ltfhTi4n2w)
// - ufo ($id_Idgm3MW7hZ)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/routes.mjs ($id_wgn8tPmDGx)
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/router.options.mjs ($id_Mi86GBSelC)
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/middleware.mjs ($id_5Y9EBCkCG5)
// --------------------
const $id_DmZ0DuGELI = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("unctx");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue-router");

const __vite_ssr_import_3__ = await __vite_ssr_import__("h3");

const __vite_ssr_import_4__ = await __vite_ssr_import__("ufo");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/routes.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/router.options.mjs");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/middleware.mjs");

function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_4__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_4__.withoutBase(pathname, base);
  return path + search + hash;
}
__vite_ssr_exports__.default = __vite_ssr_import_6__.defineNuxtPlugin(async (nuxtApp) => {let __temp, __restore;
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_5__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_5__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_5__.default);
  const baseURL = __vite_ssr_import_6__.useRuntimeConfig().app.baseURL;
  const routerHistory = false ? __vite_ssr_import_2__.createWebHistory(baseURL) : __vite_ssr_import_2__.createMemoryHistory(baseURL);
  const initialURL = true ? nuxtApp.ssrContext.url : createCurrentLocation(baseURL, window.location);
  const router = __vite_ssr_import_2__.createRouter({
    ...__vite_ssr_import_8__.default,
    history: routerHistory,
    routes: __vite_ssr_import_7__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_1__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = __vite_ssr_import_1__.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = __vite_ssr_import_1__.computed(() => _route.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_1__.reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const error = __vite_ssr_import_6__.useError();
  try {
    if (true) {
      ;(([__temp,__restore]=__vite_ssr_import_0__.executeAsync(()=>router.push(initialURL))),await __temp,__restore());;
    }
    ;(([__temp,__restore]=__vite_ssr_import_0__.executeAsync(()=>router.isReady())),await __temp,__restore());;
  } catch (error2) {
    __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.showError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_1__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...__vite_ssr_import_9__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_9__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (!middleware) {
        if (true) {
          throw new Error(`Unknown route middleware: '${entry}'. Valid middleware: ${Object.keys(__vite_ssr_import_9__.namedMiddleware).map((mw) => `'${mw}'`).join(", ")}.`);
        }
        throw new Error(`Unknown route middleware: '${entry}'.`);
      }
      const result = await __vite_ssr_import_6__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error2 = result || __vite_ssr_import_3__.createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.showError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (false && !nuxtApp.isHydrating && error.value) {
      await __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.clearError);
    }
    if (to.matched.length === 0) {
      __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.showError, [__vite_ssr_import_3__.createError({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (true && to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else if (true) {
      const currentURL = to.fullPath || "/";
      if (!__vite_ssr_import_4__.isEqual(currentURL, initialURL)) {
        await __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.showError, [error2]);
    }
  });
  return { provide: { router } };
},1);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue-router ($id_RGqOect6fq)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_gPQzqsnHwc)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// --------------------
const $id_L9I1eoE7dW = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue-router");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const isNestedKey = Symbol("isNested");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const isNested = __vite_ssr_import_0__.inject(isNestedKey, false);
    __vite_ssr_import_0__.provide(isNestedKey, true);
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps);
          return __vite_ssr_import_4__._wrapIf(
            __vite_ssr_import_0__.Transition,
            routeProps.route.meta.pageTransition ?? defaultPageTransition,
            __vite_ssr_import_2__.wrapInKeepAlive(
              routeProps.route.meta.keepalive,
              isNested && nuxtApp.isHydrating ? __vite_ssr_import_0__.h(Component, { key, routeProps, pageKey: key }) : __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
              }, { default: () => __vite_ssr_import_0__.h(Component, { key, routeProps, pageKey: key }) })
            )
          ).default();
        }
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
const Component = __vite_ssr_import_0__.defineComponent({
  props: ["routeProps", "pageKey"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = __vite_ssr_import_0__.computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    __vite_ssr_import_0__.provide("_route", __vite_ssr_import_0__.reactive(route));
    return () => __vite_ssr_import_0__.h(props.routeProps.Component);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_ZR0LUqwyer = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_NgApSiB2xA = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default?.();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 
// - /pages/about.vue?macro=true ($id_ndwxjJaUzT)
// - /pages/beer.vue?macro=true ($id_USphOWrETI)
// - /pages/beers/[name].vue?macro=true ($id_t7szSjL6iN)
// - /pages/cart.vue?macro=true ($id_WkoUmBikZP)
// - /pages/fav.vue?macro=true ($id_uBu2dbNsZi)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/about.vue ($id_qTzNC3iToF)
// - /pages/beer.vue ($id_enNPL7Ly8D)
// - /pages/beers/[name].vue ($id_Z2XMKP6fnR)
// - /pages/cart.vue ($id_nyBDqOYyME)
// - /pages/fav.vue ($id_GNJSW9bNJu)
// - /pages/index.vue ($id_zKWOlz8EPO)
// --------------------
const $id_mKmcs1a5kw = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/about.vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/beer.vue?macro=true");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/beers/[name].vue?macro=true");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/cart.vue?macro=true");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/fav.vue?macro=true");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "about",
    path: "/about",
    file: "D:/Aaron/Code/NUXT/beerLibrary/pages/about.vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    alias: __vite_ssr_import_0__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/about.vue").then(m => m.default || m)
  },
  {
    name: "beer",
    path: "/beer",
    file: "D:/Aaron/Code/NUXT/beerLibrary/pages/beer.vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    alias: __vite_ssr_import_1__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/beer.vue").then(m => m.default || m)
  },
  {
    name: "beers-name",
    path: "/beers/:name",
    file: "D:/Aaron/Code/NUXT/beerLibrary/pages/beers/[name].vue",
    children: [],
    meta: __vite_ssr_import_2__.meta,
    alias: __vite_ssr_import_2__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/beers/[name].vue").then(m => m.default || m)
  },
  {
    name: "cart",
    path: "/cart",
    file: "D:/Aaron/Code/NUXT/beerLibrary/pages/cart.vue",
    children: [],
    meta: __vite_ssr_import_3__.meta,
    alias: __vite_ssr_import_3__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/cart.vue").then(m => m.default || m)
  },
  {
    name: "fav",
    path: "/fav",
    file: "D:/Aaron/Code/NUXT/beerLibrary/pages/fav.vue",
    children: [],
    meta: __vite_ssr_import_4__.meta,
    alias: __vite_ssr_import_4__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/fav.vue").then(m => m.default || m)
  },
  {
    name: "index",
    path: "/",
    file: "D:/Aaron/Code/NUXT/beerLibrary/pages/index.vue",
    children: [],
    meta: __vite_ssr_import_5__.meta,
    alias: __vite_ssr_import_5__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/index.vue").then(m => m.default || m)
  }
];
}


// --------------------
// Request: /pages/about.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/routes.mjs ($id_wgn8tPmDGx)
// Dependencies: 
// - /composables/useDarkMode.ts ($id_BBIogYydvh)
// - @giphy/js-fetch-api ($id_RIsukrmvsE)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_ZF30YrTp4n = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/composables/useDarkMode.ts");

const __vite_ssr_import_1__ = await __vite_ssr_import__("@giphy/js-fetch-api");

const __default__ = {
    name: 'aaron',

    data() {
        return {
            gif: {},
        }
    },

    async created() {
        await this.loadGif();
    },

    methods: {
        async loadGif() {
            const gf = new __vite_ssr_import_1__.GiphyFetch('9MVlH4Tzh4vNpiYYVHyCz36hhLdVzYng');
            const { data: gif } = await gf.random({ tag: 'hi' })
            this.gif = gif;
            console.log(gif);
            for (i in trendingResponse.data) {
                const image = document.createElement('img');
                image.src = trendingResponse.data[i].images.original.url;

                gifsContainer.append(image);
            }
        }

    },
};



const _sfc_main = /*#__PURE__*/Object.assign(__default__, {
  setup(__props, { expose }) {
  expose();

const { isDarkMode, toggleDarkMode } = __vite_ssr_import_0__.default();

const __returned__ = { isDarkMode, toggleDarkMode, GiphyFetch: __vite_ssr_import_1__.GiphyFetch }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

})
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = __vite_ssr_import_2__.resolveComponent("Head")
  const _component_Title = __vite_ssr_import_2__.resolveComponent("Title")

  _push(`<!--[-->`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Head, null, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Title, null, {
          default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(` About `)
            } else {
              return [
                __vite_ssr_import_2__.createTextVNode(" About ")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_2__.createVNode(_component_Title, null, {
            default: __vite_ssr_import_2__.withCtx(() => [
              __vite_ssr_import_2__.createTextVNode(" About ")
            ]),
            _: 1 /* STABLE */
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<h1 class="display-1">About</h1><section>`)
  if (!Object.keys($data.gif).length) {
    _push(`<div>Loading...</div>`)
  } else {
    _push(`<div><img${
      __vite_ssr_import_3__.ssrRenderAttr("src", $data.gif.images.original.url)
    } alt="" class="gif" style="${
      __vite_ssr_import_3__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: 'rgb(26, 27, 38)' } : null)
    }"></div>`)
  }
  _push(`</section><section style="${
    __vite_ssr_import_3__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: 'rgb(26, 27, 38)' } : null)
  }"><div><p class="lead" style="${
    __vite_ssr_import_3__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: 'rgb(26, 27, 38)', color: 'white' } : null)
  }"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci magna, suscipit vitae pellentesque at, mollis in mauris. Nulla congue felis at nisi posuere eleifend. Etiam eleifend, lacus faucibus auctor dignissim, sem nulla accumsan mauris, auctor ultricies ante leo in sapien. Integer ultrices lorem eget magna pharetra ultricies. Mauris laoreet augue lorem, in congue nunc sagittis ac. Sed at odio vehicula, elementum ante ut, fringilla quam. Donec viverra vestibulum suscipit. Phasellus sed facilisis felis. Aliquam ac neque Donec scelerisque venenatis purus non convallis. Sed nec tincidunt nibh, sed volutpat metus. Donec ultricies, diam tristique laoreet ultricies, elit turpis ullamcorper neque, eu ullamcorper eros erat at risus. Ut in lacinia justo. Mauris dapibus ultricies arcu a ultrices. In eget elit velit. Quisque volutpat erat sed fermentum mattis. Quisque blandit, tellus vel fermentum condimentum, est orci maximus velit, nec ultrices nulla ex ac mi. Cras suscipit pretium metus sit amet aliquet. Integer a nisl sodales, imperdiet ex id, molestie elit. Aenean porttitor justo a mi egestas mattis. Aliquam sit amet felis ut metus elementum feugiat sed in orci. Sed nec dictum libero. Sed sed urna risus. Fusce porttitor enim vehicula, egestas ipsum at, luctus ipsum. Donec arcu augue, malesuada vitae gravida vitae, porta sed mi.</p></div></section><!--]-->`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/about.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Aaron/Code/NUXT/beerLibrary/pages/about.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /composables/useDarkMode.ts
// Parents: 
// - /pages/about.vue?macro=true ($id_ndwxjJaUzT)
// - /pages/beer.vue?macro=true ($id_USphOWrETI)
// - /pages/beers/[name].vue?macro=true ($id_t7szSjL6iN)
// - /pages/cart.vue?macro=true ($id_WkoUmBikZP)
// - /pages/fav.vue?macro=true ($id_uBu2dbNsZi)
// - /pages/about.vue ($id_qTzNC3iToF)
// - /pages/beer.vue ($id_enNPL7Ly8D)
// - /pages/beers/[name].vue ($id_Z2XMKP6fnR)
// - /pages/cart.vue ($id_nyBDqOYyME)
// - /pages/fav.vue ($id_GNJSW9bNJu)
// - /components/V-header.vue ($id_2Bz9TpUHLQ)
// - /components/V-footer.vue ($id_4ySGNwul7O)
// - /app.vue ($id_K0boQqLzfo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_RI8clQpZUm = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useDarkMode = () => {
  const isDarkMode = __vite_ssr_import_0__.useState("darkMode", () => true, '$fFXeTIGNu9');
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
  };
  return {
    isDarkMode,
    toggleDarkMode
  };
};
__vite_ssr_exports__.default = useDarkMode;
;
}


// --------------------
// Request: @giphy/js-fetch-api
// Parents: 
// - /pages/about.vue?macro=true ($id_ndwxjJaUzT)
// - /pages/about.vue ($id_qTzNC3iToF)
// Dependencies: 

// --------------------
const $id_3GUECxw8vY = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("@giphy/js-fetch-api")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"@giphy/js-fetch-api\".")
  })


// --------------------
// Request: vue/server-renderer
// Parents: 
// - /pages/about.vue?macro=true ($id_ndwxjJaUzT)
// - /pages/beer.vue?macro=true ($id_USphOWrETI)
// - /pages/beers/[name].vue?macro=true ($id_t7szSjL6iN)
// - /pages/cart.vue?macro=true ($id_WkoUmBikZP)
// - /pages/fav.vue?macro=true ($id_uBu2dbNsZi)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/about.vue ($id_qTzNC3iToF)
// - /pages/beer.vue ($id_enNPL7Ly8D)
// - /pages/beers/[name].vue ($id_Z2XMKP6fnR)
// - /pages/cart.vue ($id_nyBDqOYyME)
// - /pages/fav.vue ($id_GNJSW9bNJu)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /components/V-header.vue ($id_2Bz9TpUHLQ)
// - /components/V-footer.vue ($id_4ySGNwul7O)
// - /layouts/default.vue ($id_dononVQSck)
// - /app.vue ($id_K0boQqLzfo)
// Dependencies: 

// --------------------
const $id_aRHphPzMpI = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("vue/server-renderer")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"vue/server-renderer\".")
  })


// --------------------
// Request: /@id/__x00__plugin-vue:export-helper
// Parents: 
// - /pages/about.vue?macro=true ($id_ndwxjJaUzT)
// - /pages/beer.vue?macro=true ($id_USphOWrETI)
// - /pages/beers/[name].vue?macro=true ($id_t7szSjL6iN)
// - /pages/cart.vue?macro=true ($id_WkoUmBikZP)
// - /pages/fav.vue?macro=true ($id_uBu2dbNsZi)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/about.vue ($id_qTzNC3iToF)
// - /pages/beer.vue ($id_enNPL7Ly8D)
// - /pages/beers/[name].vue ($id_Z2XMKP6fnR)
// - /pages/cart.vue ($id_nyBDqOYyME)
// - /pages/fav.vue ($id_GNJSW9bNJu)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /components/V-header.vue ($id_2Bz9TpUHLQ)
// - /components/V-footer.vue ($id_4ySGNwul7O)
// - /layouts/default.vue ($id_dononVQSck)
// - /app.vue ($id_K0boQqLzfo)
// Dependencies: 

// --------------------
const $id_mHD6riC5ol = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /pages/beer.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/routes.mjs ($id_wgn8tPmDGx)
// Dependencies: 
// - /composables/useDarkMode.ts ($id_BBIogYydvh)
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_4xp2JYRNAG = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/composables/useDarkMode.ts");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "beer",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const { isDarkMode, toggleDarkMode } = __vite_ssr_import_0__.default();
    let pgNo = __vite_ssr_import_1__.ref(1);
    const search = __vite_ssr_import_1__.ref("hello");
    const input = __vite_ssr_import_1__.ref("");
    const { data: beers, refresh, error } = ([__temp, __restore] = __vite_ssr_import_4__.withAsyncContext(() => __vite_ssr_import_2__.useFetch(
      () => `https://api.punkapi.com/v2/beers?page=${pgNo.value}&per_page=12`
    , '$Kmn0Mby3sG')), __temp = await __temp, __restore(), __temp);
    const searchBeer = async () => {
      await __vite_ssr_import_2__.useFetch(() => `https://api.punkapi.com/v2/beers?beer_name=${input.value}`, '$AErT264Jhr');
      refresh();
      const formattedSearch = input.value.trim().split(" ").join("+");
      if (input.value !== "") {
        const { data: beers2, error: error2 } = __vite_ssr_import_2__.useAsyncData(
          "beers",
          async () => {
            const response = await __vite_ssr_import_2__.useFetch(
              `https://api.punkapi.com/v2/beers?beer_name=${formattedSearch}`
            , '$GLffmY7K6l');
          }
        , '$fkkHJ42v0O');
      }
    };
    const { data: cart } = __vite_ssr_import_2__.useAsyncData("cart", () => {
      return $fetch("/api/cart");
    }, '$0gS6SY3Weq');
    const addCart = async (data) => {
      if (!data)
        return;
      console.log(data);
      alert("Added to cart");
      await $fetch("/api/cart", { method: "post", body: { item: beers.value[data] } });
      refresh();
    };
    const addFav = async (data) => {
      if (!data)
        return;
      console.log(data);
      alert("Added to WishList");
      await $fetch("/api/fav", { method: "post", body: { item: beers.value[data] } });
      refresh();
    };
    const nextPage = () => {
      pgNo.value++;
      console.log(pgNo);
      refresh();
    };
    const prevPage = () => {
      if (pgNo.value == 1) {
        refresh();
      } else {
        pgNo.value--;
        console.log(pgNo);
        refresh();
      }
    };
    __vite_ssr_import_3__.useHead({
      title: "Beer Api",
      meta: [
        {
          name: "viewport"
        }
      ]
    });
    const __returned__ = { isDarkMode, toggleDarkMode, pgNo, search, input, beers, refresh, error, searchBeer, cart, addCart, addFav, nextPage, prevPage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_5__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->${__vite_ssr_import_5__.ssrInterpolate($setup.input)} <div class="header" style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: "rgb(22, 22, 30)", color: "white" } : null)}"><h1 class="header__main">Beer</h1><h3 class="header__submain">Search for your favourite beer</h3><div class="icons"><a href="./fav"><span class="material-symbols-outlined" style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { color: "rgb(255,192,203)" } : null)}">favorite</span></a><a href="./cart"><span class="material-symbols-outlined" style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { color: "rgb(212,175,55)" } : null)}">shopping_cart</span></a></div></div><div class="pagination"><a href="#" class="previous" style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: "rgb(27, 29, 33)", color: "white" } : null)}">\xAB Previous</a><a href="#" class="next active">Next \xBB</a></div> <br><div class="search"><input type="text" placeholder="Search Beers e.g. Pale Ale"${__vite_ssr_import_5__.ssrRenderAttr("value", $setup.input)}><button>search</button></div><div class="container" style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: "rgb(22, 22, 30)" } : null)}"><!--[-->`);
  __vite_ssr_import_5__.ssrRenderList($setup.beers, (beer, index) => {
    _push(`<div class="card" style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: "rgb(15, 15, 19)" } : null)}"><div class="star">\u{1F9E1}</div><div class="card-header"><img${__vite_ssr_import_5__.ssrRenderAttr("src", beer.image_url)} alt="rover"></div><div class="card-body" style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: "rgb(27, 29, 33)", color: "white" } : null)}"><span class="tag tag-teal">Ph: ${__vite_ssr_import_5__.ssrInterpolate(beer.ph)}</span><h4><a${__vite_ssr_import_5__.ssrRenderAttr("href", `/beers/${beer.name}`)} style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: "rgb(27, 29, 33)", color: "white" } : null)}">${__vite_ssr_import_5__.ssrInterpolate(beer.name)}</a></h4><p>${__vite_ssr_import_5__.ssrInterpolate(beer.description)}</p><p> Tagline: <br> ${__vite_ssr_import_5__.ssrInterpolate(beer.tagline)}</p><div class="beer"><div class="beer-info"><h5>${__vite_ssr_import_5__.ssrInterpolate(beer.first_brewed)}</h5><small>${__vite_ssr_import_5__.ssrInterpolate(beer.tagline)}</small> <br><small><span class="material-symbols-outlined addBeer" style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { color: "rgb(255,255,255)" } : null)}"> add_shopping_cart </span></small></div></div></div></div>`);
  });
  _push(`<!--]--></div><div class="pagination"><a href="#" class="previous" style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: "rgb(27, 29, 33)", color: "white" } : null)}">\xAB Previous</a><a href="#" class="next active">Next \xBB</a></div><!--]-->`);
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/beer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_7__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/Aaron/Code/NUXT/beerLibrary/pages/beer.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/beers/[name].vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/routes.mjs ($id_wgn8tPmDGx)
// Dependencies: 
// - /composables/useDarkMode.ts ($id_BBIogYydvh)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_cns8bS54AQ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/composables/useDarkMode.ts");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_3__.defineComponent({
  __name: "[name]",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const { isDarkMode, toggleDarkMode } = __vite_ssr_import_0__.default();
    const route = __vite_ssr_import_1__.useRoute();
    const name = route.params.name;
    const { data: beer, refresh, error } = ([__temp, __restore] = __vite_ssr_import_3__.withAsyncContext(() => __vite_ssr_import_1__.useFetch(
      () => `https://api.punkapi.com/v2/beers?beer_name=${name}`
    , '$to40iwWwuB')), __temp = await __temp, __restore(), __temp);
    const { data: cart } = __vite_ssr_import_1__.useAsyncData("cart", () => {
      return $fetch("~/api/cart");
    }, '$KrUnP60a21');
    const addCart = async (data) => {
      if (!data)
        return;
      console.log(data);
      alert("Added to cart");
      await $fetch("/api/cart", { method: "post", body: { item: beer.value[data] } });
      refresh();
    };
    const addFav = async (data) => {
      if (!data)
        return;
      console.log(data);
      alert("Added to WishList");
      await $fetch("/api/fav", { method: "post", body: { item: beer.value[data] } });
      refresh();
    };
    __vite_ssr_import_2__.useHead({
      title: name,
      meta: [
        {
          name: "viewport"
        }
      ]
    });
    const __returned__ = { isDarkMode, toggleDarkMode, route, name, beer, refresh, error, cart, addCart, addFav };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({
    id: "container",
    style: $setup.isDarkMode ? { backgroundColor: "rgb(22, 22, 30)", color: "white" } : null
  }, _attrs))}><!--[-->`);
  __vite_ssr_import_5__.ssrRenderList($setup.beer, (item, index) => {
    _push(`<div class="loop"><div class="product-details"><h1 style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: "rgb(22, 22, 30)", color: "white" } : null)}">${__vite_ssr_import_5__.ssrInterpolate(item.name)}</h1> <br><span class="hint-star star"><i aria-hidden="true">${__vite_ssr_import_5__.ssrInterpolate(item.ph)}</i></span><p class="information">${__vite_ssr_import_5__.ssrInterpolate(item.description)}</p></div><div class="product-image"><img${__vite_ssr_import_5__.ssrRenderAttr("src", item.image_url)} alt=""></div><div class="wish">\u{1F9E1}</div><small><span class="material-symbols-outlined addBeer" style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { color: "rgb(255,255,255)" } : null)}"> add_shopping_cart </span></small></div>`);
  });
  _push(`<!--]--></div>`);
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/beers/[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_7__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/Aaron/Code/NUXT/beerLibrary/pages/beers/[name].vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/cart.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/routes.mjs ($id_wgn8tPmDGx)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /composables/useDarkMode.ts ($id_BBIogYydvh)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_JAad9jUssh = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/composables/useDarkMode.ts");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'cart',
  setup(__props, { expose }) {
  expose();

const { data: cart, refresh } = __vite_ssr_import_0__.useAsyncData("cart", () => {
    return $fetch("/api/cart"); 
    refresh();
}, '$4KwYnQQSz8');
const { isDarkMode, toggleDarkMode } = __vite_ssr_import_1__.default();

const deleteItem = async (id) => {
    alert("Removed to cart");
    await $fetch(`/api/cart/${id}`, { method: "delete" });
    refresh();
}
__vite_ssr_import_2__.useHead({
    title: 'Cart',
    meta: [
        {
            name: 'viewport',
        },
    ]
})

const __returned__ = { cart, refresh, isDarkMode, toggleDarkMode, deleteItem }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><!-- {{cart}} --><div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({
    class: "shopping-cart",
    style: $setup.isDarkMode ? { backgroundColor: 'rgb(255,255,255)' } : null
  }, _attrs))}><!-- Title --><div class="title"> Cart </div><!-- Product #1 --><!--[-->`)
  __vite_ssr_import_4__.ssrRenderList($setup.cart, (cartItem, index) => {
    _push(`<div class="item"><div class="buttons"><span class="delete-btn"></span><span class="like-btn"></span></div><div class="image"><img${
      __vite_ssr_import_4__.ssrRenderAttr("src", cartItem.item.image_url)
    } alt="" style="${
      __vite_ssr_import_4__.ssrRenderStyle({"width":"25px","padding-top":"1em","cursor":"pointer"})
    }"></div><div class="description"><span>${
      __vite_ssr_import_4__.ssrInterpolate(cartItem.item.name)
    }</span><span>${
      __vite_ssr_import_4__.ssrInterpolate(cartItem.item.first_brewed)
    }</span><span>${
      __vite_ssr_import_4__.ssrInterpolate(cartItem.item.tagline)
    }</span></div><div class="quantity"><button class="plus-btn" type="button" name="button"> + </button><input type="text" name="name" value="1"><button class="minus-btn" type="button" name="button"> - </button></div><div class="total-price">\$${
      __vite_ssr_import_4__.ssrInterpolate(cartItem.item.ebc)
    }</div><button type="button" class="remove">x</button></div>`)
  })
  _push(`<!--]--><!-- END OF PRODUCT --></div><!--]-->`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/cart.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Aaron/Code/NUXT/beerLibrary/pages/cart.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/fav.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/routes.mjs ($id_wgn8tPmDGx)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /composables/useDarkMode.ts ($id_BBIogYydvh)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_5w6ZgSpJui = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/composables/useDarkMode.ts");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'fav',
  setup(__props, { expose }) {
  expose();

    const { data: cart, refresh } = __vite_ssr_import_0__.useAsyncData("cart", () => {
        return $fetch("/api/cart"); 
        refresh();
    }, '$coHE9QC9bO');
    const { isDarkMode, toggleDarkMode } = __vite_ssr_import_1__.default();
    
    const deleteItem = async (id) => {
        alert("Removed to cart");
        await $fetch(`/api/cart/${id}`, { method: "delete" });
        refresh();
    }
    __vite_ssr_import_2__.useHead({
        title: 'Cart',
        meta: [
            {
                name: 'viewport',
            },
        ]
    })
    
const __returned__ = { cart, refresh, isDarkMode, toggleDarkMode, deleteItem }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><!-- {{cart}} --><div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({
    class: "shopping-cart",
    style: $setup.isDarkMode ? { backgroundColor: 'rgb(255,255,255)' } : null
  }, _attrs))}><!-- Title --><div class="title"> WishList </div><!-- Product #1 --><!--[-->`)
  __vite_ssr_import_4__.ssrRenderList($setup.cart, (cartItem, index) => {
    _push(`<div class="item"><div class="buttons"><span class="delete-btn"></span><span class="like-btn"></span></div><div class="image"><img${
      __vite_ssr_import_4__.ssrRenderAttr("src", cartItem.item.image_url)
    } alt="" style="${
      __vite_ssr_import_4__.ssrRenderStyle({"width":"25px","padding-top":"1em","cursor":"pointer"})
    }"></div><div class="description"><span>${
      __vite_ssr_import_4__.ssrInterpolate(cartItem.item.name)
    }</span><span>${
      __vite_ssr_import_4__.ssrInterpolate(cartItem.item.first_brewed)
    }</span><span>${
      __vite_ssr_import_4__.ssrInterpolate(cartItem.item.tagline)
    }</span></div><div class="total-price">\$${
      __vite_ssr_import_4__.ssrInterpolate(cartItem.item.ebc)
    }</div><button type="button" class="remove">x</button></div>`)
  })
  _push(`<!--]--><!-- END OF PRODUCT --></div><!--]-->`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/fav.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Aaron/Code/NUXT/beerLibrary/pages/fav.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/routes.mjs ($id_wgn8tPmDGx)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_i7GBo78qxv = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Head = __vite_ssr_import_0__.resolveComponent("Head")
  const _component_Title = __vite_ssr_import_0__.resolveComponent("Title")

  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_Head, null, {
    default: __vite_ssr_import_0__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_1__.ssrRenderComponent(_component_Title, null, {
          default: __vite_ssr_import_0__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(` Index `)
            } else {
              return [
                __vite_ssr_import_0__.createTextVNode(" Index ")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_0__.createVNode(_component_Title, null, {
            default: __vite_ssr_import_0__.withCtx(() => [
              __vite_ssr_import_0__.createTextVNode(" Index ")
            ]),
            _: 1 /* STABLE */
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<div><h1>Hello</h1></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Aaron/Code/NUXT/beerLibrary/pages/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/about.vue
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/routes.mjs ($id_wgn8tPmDGx)
// Dependencies: 
// - /composables/useDarkMode.ts ($id_BBIogYydvh)
// - @giphy/js-fetch-api ($id_RIsukrmvsE)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /pages/about.vue?vue&type=style&index=0&lang.css ($id_F2gjLJI0nP)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_ScA0NSy8hI = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/composables/useDarkMode.ts");

const __vite_ssr_import_1__ = await __vite_ssr_import__("@giphy/js-fetch-api");

const __default__ = {
    name: 'aaron',

    data() {
        return {
            gif: {},
        }
    },

    async created() {
        await this.loadGif();
    },

    methods: {
        async loadGif() {
            const gf = new __vite_ssr_import_1__.GiphyFetch('9MVlH4Tzh4vNpiYYVHyCz36hhLdVzYng');
            const { data: gif } = await gf.random({ tag: 'hi' })
            this.gif = gif;
            console.log(gif);
            for (i in trendingResponse.data) {
                const image = document.createElement('img');
                image.src = trendingResponse.data[i].images.original.url;

                gifsContainer.append(image);
            }
        }

    },
};



const _sfc_main = /*#__PURE__*/Object.assign(__default__, {
  setup(__props, { expose }) {
  expose();

const { isDarkMode, toggleDarkMode } = __vite_ssr_import_0__.default();

const __returned__ = { isDarkMode, toggleDarkMode, GiphyFetch: __vite_ssr_import_1__.GiphyFetch }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

})
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = __vite_ssr_import_2__.resolveComponent("Head")
  const _component_Title = __vite_ssr_import_2__.resolveComponent("Title")

  _push(`<!--[-->`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Head, null, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Title, null, {
          default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(` About `)
            } else {
              return [
                __vite_ssr_import_2__.createTextVNode(" About ")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_2__.createVNode(_component_Title, null, {
            default: __vite_ssr_import_2__.withCtx(() => [
              __vite_ssr_import_2__.createTextVNode(" About ")
            ]),
            _: 1 /* STABLE */
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<h1 class="display-1">About</h1><section>`)
  if (!Object.keys($data.gif).length) {
    _push(`<div>Loading...</div>`)
  } else {
    _push(`<div><img${
      __vite_ssr_import_3__.ssrRenderAttr("src", $data.gif.images.original.url)
    } alt="" class="gif" style="${
      __vite_ssr_import_3__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: 'rgb(26, 27, 38)' } : null)
    }"></div>`)
  }
  _push(`</section><section style="${
    __vite_ssr_import_3__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: 'rgb(26, 27, 38)' } : null)
  }"><div><p class="lead" style="${
    __vite_ssr_import_3__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: 'rgb(26, 27, 38)', color: 'white' } : null)
  }"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orci magna, suscipit vitae pellentesque at, mollis in mauris. Nulla congue felis at nisi posuere eleifend. Etiam eleifend, lacus faucibus auctor dignissim, sem nulla accumsan mauris, auctor ultricies ante leo in sapien. Integer ultrices lorem eget magna pharetra ultricies. Mauris laoreet augue lorem, in congue nunc sagittis ac. Sed at odio vehicula, elementum ante ut, fringilla quam. Donec viverra vestibulum suscipit. Phasellus sed facilisis felis. Aliquam ac neque Donec scelerisque venenatis purus non convallis. Sed nec tincidunt nibh, sed volutpat metus. Donec ultricies, diam tristique laoreet ultricies, elit turpis ullamcorper neque, eu ullamcorper eros erat at risus. Ut in lacinia justo. Mauris dapibus ultricies arcu a ultrices. In eget elit velit. Quisque volutpat erat sed fermentum mattis. Quisque blandit, tellus vel fermentum condimentum, est orci maximus velit, nec ultrices nulla ex ac mi. Cras suscipit pretium metus sit amet aliquet. Integer a nisl sodales, imperdiet ex id, molestie elit. Aenean porttitor justo a mi egestas mattis. Aliquam sit amet felis ut metus elementum feugiat sed in orci. Sed nec dictum libero. Sed sed urna risus. Fusce porttitor enim vehicula, egestas ipsum at, luctus ipsum. Donec arcu augue, malesuada vitae gravida vitae, porta sed mi.</p></div></section><!--]-->`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/about.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/about.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Aaron/Code/NUXT/beerLibrary/pages/about.vue"]]);
}


// --------------------
// Request: /pages/about.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /pages/about.vue ($id_qTzNC3iToF)
// Dependencies: 

// --------------------
const $id_h9jBSPnwwi = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".gif{\r\n    min-height: 100%;\r\n    min-width: 1024px;      \r\n    /* Set up proportionate scaling */\r\n    width: 100%;\r\n    height: auto;\n}\nsection{\r\n    background-color: white;\n}\n.display-1{\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    color: white;\r\n    font-weight: bolder;\r\n    z-index: 1;\n}\n.lead{\r\n    line-height: 2.6em;\r\n    text-align: center;\r\n    background-color: white;\r\n    color: black;\r\n    text-decoration:none;\r\n    margin: 0 5em;\r\n    z-index: -1;\r\n    overflow: 0;\n}\r\n";
}


// --------------------
// Request: /pages/beer.vue
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/routes.mjs ($id_wgn8tPmDGx)
// Dependencies: 
// - /composables/useDarkMode.ts ($id_BBIogYydvh)
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue/server-renderer ($id_UyJffsox60)
// - /pages/beer.vue?vue&type=style&index=0&lang.css ($id_Nz0MWzsC9L)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_koA5nKJPX8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/composables/useDarkMode.ts");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "beer",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const { isDarkMode, toggleDarkMode } = __vite_ssr_import_0__.default();
    let pgNo = __vite_ssr_import_1__.ref(1);
    const search = __vite_ssr_import_1__.ref("hello");
    const input = __vite_ssr_import_1__.ref("");
    const { data: beers, refresh, error } = ([__temp, __restore] = __vite_ssr_import_4__.withAsyncContext(() => __vite_ssr_import_2__.useFetch(
      () => `https://api.punkapi.com/v2/beers?page=${pgNo.value}&per_page=12`
    , '$lwP790FbCg')), __temp = await __temp, __restore(), __temp);
    const searchBeer = async () => {
      await __vite_ssr_import_2__.useFetch(() => `https://api.punkapi.com/v2/beers?beer_name=${input.value}`, '$O0wml0LTGa');
      refresh();
      const formattedSearch = input.value.trim().split(" ").join("+");
      if (input.value !== "") {
        const { data: beers2, error: error2 } = __vite_ssr_import_2__.useAsyncData(
          "beers",
          async () => {
            const response = await __vite_ssr_import_2__.useFetch(
              `https://api.punkapi.com/v2/beers?beer_name=${formattedSearch}`
            , '$qgOFtE5Dzi');
          }
        , '$ofoqWbX3ud');
      }
    };
    const { data: cart } = __vite_ssr_import_2__.useAsyncData("cart", () => {
      return $fetch("/api/cart");
    }, '$saiMueXW6m');
    const addCart = async (data) => {
      if (!data)
        return;
      console.log(data);
      alert("Added to cart");
      await $fetch("/api/cart", { method: "post", body: { item: beers.value[data] } });
      refresh();
    };
    const addFav = async (data) => {
      if (!data)
        return;
      console.log(data);
      alert("Added to WishList");
      await $fetch("/api/fav", { method: "post", body: { item: beers.value[data] } });
      refresh();
    };
    const nextPage = () => {
      pgNo.value++;
      console.log(pgNo);
      refresh();
    };
    const prevPage = () => {
      if (pgNo.value == 1) {
        refresh();
      } else {
        pgNo.value--;
        console.log(pgNo);
        refresh();
      }
    };
    __vite_ssr_import_3__.useHead({
      title: "Beer Api",
      meta: [
        {
          name: "viewport"
        }
      ]
    });
    const __returned__ = { isDarkMode, toggleDarkMode, pgNo, search, input, beers, refresh, error, searchBeer, cart, addCart, addFav, nextPage, prevPage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_5__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->${__vite_ssr_import_5__.ssrInterpolate($setup.input)} <div class="header" style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: "rgb(22, 22, 30)", color: "white" } : null)}"><h1 class="header__main">Beer</h1><h3 class="header__submain">Search for your favourite beer</h3><div class="icons"><a href="./fav"><span class="material-symbols-outlined" style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { color: "rgb(255,192,203)" } : null)}">favorite</span></a><a href="./cart"><span class="material-symbols-outlined" style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { color: "rgb(212,175,55)" } : null)}">shopping_cart</span></a></div></div><div class="pagination"><a href="#" class="previous" style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: "rgb(27, 29, 33)", color: "white" } : null)}">\xAB Previous</a><a href="#" class="next active">Next \xBB</a></div> <br><div class="search"><input type="text" placeholder="Search Beers e.g. Pale Ale"${__vite_ssr_import_5__.ssrRenderAttr("value", $setup.input)}><button>search</button></div><div class="container" style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: "rgb(22, 22, 30)" } : null)}"><!--[-->`);
  __vite_ssr_import_5__.ssrRenderList($setup.beers, (beer, index) => {
    _push(`<div class="card" style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: "rgb(15, 15, 19)" } : null)}"><div class="star">\u{1F9E1}</div><div class="card-header"><img${__vite_ssr_import_5__.ssrRenderAttr("src", beer.image_url)} alt="rover"></div><div class="card-body" style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: "rgb(27, 29, 33)", color: "white" } : null)}"><span class="tag tag-teal">Ph: ${__vite_ssr_import_5__.ssrInterpolate(beer.ph)}</span><h4><a${__vite_ssr_import_5__.ssrRenderAttr("href", `/beers/${beer.name}`)} style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: "rgb(27, 29, 33)", color: "white" } : null)}">${__vite_ssr_import_5__.ssrInterpolate(beer.name)}</a></h4><p>${__vite_ssr_import_5__.ssrInterpolate(beer.description)}</p><p> Tagline: <br> ${__vite_ssr_import_5__.ssrInterpolate(beer.tagline)}</p><div class="beer"><div class="beer-info"><h5>${__vite_ssr_import_5__.ssrInterpolate(beer.first_brewed)}</h5><small>${__vite_ssr_import_5__.ssrInterpolate(beer.tagline)}</small> <br><small><span class="material-symbols-outlined addBeer" style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { color: "rgb(255,255,255)" } : null)}"> add_shopping_cart </span></small></div></div></div></div>`);
  });
  _push(`<!--]--></div><div class="pagination"><a href="#" class="previous" style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: "rgb(27, 29, 33)", color: "white" } : null)}">\xAB Previous</a><a href="#" class="next active">Next \xBB</a></div><!--]-->`);
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/pages/beer.vue?vue&type=style&index=0&lang.css");

const __vite_ssr_import_7__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/beer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/Aaron/Code/NUXT/beerLibrary/pages/beer.vue"]]);
;
}


// --------------------
// Request: /pages/beer.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /pages/beer.vue ($id_enNPL7Ly8D)
// Dependencies: 

// --------------------
const $id_0WNmeepSwh = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "@import url(\"https://fonts.googleapis.com/css2?family=Raleway&display=swap\");\n.header {\n  text-align: center;\n  padding: 0 6em;\n}\n.addBeer{\n  padding-top: .5em;\n  cursor: pointer;\n}\n\n/* start of pagination */\n.pagination {\n  display: inline-block;\n  margin-left: 41%;\n  align-items: center;\n  padding-top: 2em;\n}\n.pagination a {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n  transition: background-color .3s;\n}\n.pagination a.active {\n  background-color: #2a2965;\n  color: white;\n}\n.pagination a.active:hover {\n  background-color: white;\n  color: #2a2965;\n}\n.pagination previous:hover:not(.active) {background-color: rgb(121, 57, 57);}\n\n/* end of pagination */\n.input-group{\n  margin:auto;\n  max-width:300px;\n  padding-top:2em;\n}\n.star{\n  cursor: pointer;\n}\n.search > input{\nbackground: #fdfdfd;\nalign-items: center;\npadding-right: 1em;\n}\n.search > button {\n  padding-right: 1em;\n  color: white;\n}\n.container {\n  background-color: #ffffff;\n  font-family: \"Raleway\", sans-serif;\n  color: #10182f;\n  display: flex;\n  width: 3040px;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n.card {\n  margin: 10px;\n  background-color: #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  width: 300px;\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n}\n.card:hover {\n  transform: translate(10px, -10px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);\n}\n.card-header img {\n  width: 40%;\n  height: 400px;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n.card-body {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 20px;\n  min-height: 250px;\n}\n.tag {\n  background: #cccccc;\n  border-radius: 50px;\n  font-size: 12px;\n  margin: 0;\n  color: #fff;\n  padding: 2px 10px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.tag-teal {\n  background-color: #47bcd4;\n}\n.tag-purple {\n  background-color: #5e76bf;\n}\n.tag-pink {\n  background-color: #cd5b9f;\n}\n.card-body p {\n  font-size: 15px;\n  margin: 0 0 40px;\n}\n.card-body h4 {\n  padding: 1em 0 1.6em 0;\n}\n.beer {\n  display: flex;\n  margin-top: auto;\n}\n.beer-info h5 {\n  margin: 0;\n}\n.beer-info small {\n  color: #545d7a;\n}";
}


// --------------------
// Request: /pages/beers/[name].vue
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/routes.mjs ($id_wgn8tPmDGx)
// Dependencies: 
// - /composables/useDarkMode.ts ($id_BBIogYydvh)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /pages/beers/[name].vue?vue&type=style&index=0&lang.css ($id_WbfvUpqhIf)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_hdbHAUAxw1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/composables/useDarkMode.ts");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_3__.defineComponent({
  __name: "[name]",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const { isDarkMode, toggleDarkMode } = __vite_ssr_import_0__.default();
    const route = __vite_ssr_import_1__.useRoute();
    const name = route.params.name;
    const { data: beer, refresh, error } = ([__temp, __restore] = __vite_ssr_import_3__.withAsyncContext(() => __vite_ssr_import_1__.useFetch(
      () => `https://api.punkapi.com/v2/beers?beer_name=${name}`
    , '$qgK8w7YhPa')), __temp = await __temp, __restore(), __temp);
    const { data: cart } = __vite_ssr_import_1__.useAsyncData("cart", () => {
      return $fetch("~/api/cart");
    }, '$tdfV488nxl');
    const addCart = async (data) => {
      if (!data)
        return;
      console.log(data);
      alert("Added to cart");
      await $fetch("/api/cart", { method: "post", body: { item: beer.value[data] } });
      refresh();
    };
    const addFav = async (data) => {
      if (!data)
        return;
      console.log(data);
      alert("Added to WishList");
      await $fetch("/api/fav", { method: "post", body: { item: beer.value[data] } });
      refresh();
    };
    __vite_ssr_import_2__.useHead({
      title: name,
      meta: [
        {
          name: "viewport"
        }
      ]
    });
    const __returned__ = { isDarkMode, toggleDarkMode, route, name, beer, refresh, error, cart, addCart, addFav };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({
    id: "container",
    style: $setup.isDarkMode ? { backgroundColor: "rgb(22, 22, 30)", color: "white" } : null
  }, _attrs))}><!--[-->`);
  __vite_ssr_import_5__.ssrRenderList($setup.beer, (item, index) => {
    _push(`<div class="loop"><div class="product-details"><h1 style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { backgroundColor: "rgb(22, 22, 30)", color: "white" } : null)}">${__vite_ssr_import_5__.ssrInterpolate(item.name)}</h1> <br><span class="hint-star star"><i aria-hidden="true">${__vite_ssr_import_5__.ssrInterpolate(item.ph)}</i></span><p class="information">${__vite_ssr_import_5__.ssrInterpolate(item.description)}</p></div><div class="product-image"><img${__vite_ssr_import_5__.ssrRenderAttr("src", item.image_url)} alt=""></div><div class="wish">\u{1F9E1}</div><small><span class="material-symbols-outlined addBeer" style="${__vite_ssr_import_5__.ssrRenderStyle($setup.isDarkMode ? { color: "rgb(255,255,255)" } : null)}"> add_shopping_cart </span></small></div>`);
  });
  _push(`<!--]--></div>`);
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/pages/beers/[name].vue?vue&type=style&index=0&lang.css");

const __vite_ssr_import_7__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/beers/[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/Aaron/Code/NUXT/beerLibrary/pages/beers/[name].vue"]]);
;
}


// --------------------
// Request: /pages/beers/[name].vue?vue&type=style&index=0&lang.css
// Parents: 
// - /pages/beers/[name].vue ($id_Z2XMKP6fnR)
// Dependencies: 

// --------------------
const $id_OcQRcmFX60 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "@import url(\"https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bree+Serif&family=EB+Garamond:ital,wght@0,500;1,800&display=swap\");\n#container {\r\n  box-shadow: 0 15px 30px 1px grey;\r\n  background: rgba(255, 255, 255, 0.9);\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n  margin: 5em auto;\r\n  height: auto;\r\n  width: 700px;\n}\n.wish,\r\nsmall {\r\n  padding-top: 2em;\r\n  cursor: pointer;\n}\n.product-details {\r\n  position: relative;\r\n  text-align: left;\r\n  overflow: hidden;\r\n  padding: 30px;\r\n  height: 100%;\r\n  float: left;\r\n  width: 40%;\n}\n#container .product-details h1 {\r\n  font-family: \"Bebas Neue\", cursive;\r\n  display: inline-block;\r\n  position: relative;\r\n  font-size: 30px;\r\n  color: #344055;\r\n  margin: 0;\n}\n#container .product-details h1:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  right: 0%;\r\n  top: 0%;\r\n  transform: translate(25px, -15px);\r\n  font-family: \"Bree Serif\", serif;\r\n  display: inline-block;\r\n  background: #ffe6e6;\r\n  border-radius: 5px;\r\n  font-size: 14px;\r\n  padding: 5px;\r\n  color: white;\r\n  margin: 0;\r\n  -webkit-animation: chan-sh 6s ease infinite;\r\n          animation: chan-sh 6s ease infinite;\n}\n.hint-star {\r\n  display: inline-block;\r\n  margin-left: 0.5em;\r\n  color: gold;\r\n  width: 50%;\n}\n#container .product-details > p {\r\n  font-family: \"EB Garamond\", serif;\r\n  padding-top: 2em;\r\n  text-align: left;\r\n  font-size: 18px;\r\n  color: #7d7d7d;\n}\n.product-image {\r\n  transition: all 0.3s ease-out;\r\n  display: inline-block;\r\n  position: relative;\r\n  overflow: hidden;\r\n  float: right;\r\n  display: inline-block;\r\n  padding-top: 2em;\n}\n#container img {\r\n  width: 45%;\r\n  height: auto;\n}\n.product-image:hover img {\r\n  transition: all 0.3s ease-out;\n}\n.product-image:hover img {\r\n  transform: scale(1.2, 1.2);\n}\r\n";
}


// --------------------
// Request: /pages/cart.vue
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/routes.mjs ($id_wgn8tPmDGx)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /composables/useDarkMode.ts ($id_BBIogYydvh)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /pages/cart.vue?vue&type=style&index=0&lang.css ($id_g9ACfnb37y)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_1mUUyQVKFc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/composables/useDarkMode.ts");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'cart',
  setup(__props, { expose }) {
  expose();

const { data: cart, refresh } = __vite_ssr_import_0__.useAsyncData("cart", () => {
    return $fetch("/api/cart"); 
    refresh();
}, '$0qHVSrtFrD');
const { isDarkMode, toggleDarkMode } = __vite_ssr_import_1__.default();

const deleteItem = async (id) => {
    alert("Removed to cart");
    await $fetch(`/api/cart/${id}`, { method: "delete" });
    refresh();
}
__vite_ssr_import_2__.useHead({
    title: 'Cart',
    meta: [
        {
            name: 'viewport',
        },
    ]
})

const __returned__ = { cart, refresh, isDarkMode, toggleDarkMode, deleteItem }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><!-- {{cart}} --><div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({
    class: "shopping-cart",
    style: $setup.isDarkMode ? { backgroundColor: 'rgb(255,255,255)' } : null
  }, _attrs))}><!-- Title --><div class="title"> Cart </div><!-- Product #1 --><!--[-->`)
  __vite_ssr_import_4__.ssrRenderList($setup.cart, (cartItem, index) => {
    _push(`<div class="item"><div class="buttons"><span class="delete-btn"></span><span class="like-btn"></span></div><div class="image"><img${
      __vite_ssr_import_4__.ssrRenderAttr("src", cartItem.item.image_url)
    } alt="" style="${
      __vite_ssr_import_4__.ssrRenderStyle({"width":"25px","padding-top":"1em","cursor":"pointer"})
    }"></div><div class="description"><span>${
      __vite_ssr_import_4__.ssrInterpolate(cartItem.item.name)
    }</span><span>${
      __vite_ssr_import_4__.ssrInterpolate(cartItem.item.first_brewed)
    }</span><span>${
      __vite_ssr_import_4__.ssrInterpolate(cartItem.item.tagline)
    }</span></div><div class="quantity"><button class="plus-btn" type="button" name="button"> + </button><input type="text" name="name" value="1"><button class="minus-btn" type="button" name="button"> - </button></div><div class="total-price">\$${
      __vite_ssr_import_4__.ssrInterpolate(cartItem.item.ebc)
    }</div><button type="button" class="remove">x</button></div>`)
  })
  _push(`<!--]--><!-- END OF PRODUCT --></div><!--]-->`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("/pages/cart.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/cart.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Aaron/Code/NUXT/beerLibrary/pages/cart.vue"]]);
}


// --------------------
// Request: /pages/cart.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /pages/cart.vue ($id_nyBDqOYyME)
// Dependencies: 

// --------------------
const $id_9JLhpM8jLv = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".shopping-cart {\r\n  width: 750px;\r\n  height: 423px;\r\n  margin: 80px auto;\r\n  background: #ffffff;\r\n  box-shadow: 1px 20px 30px 0px rgba(0, 0, 0, 0.1);\r\n  border-radius: 6px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\n}\n.icons{\r\n  padding: 1em  0 0 0 ;\n}\n.icons a {\r\n  padding: 0 .5em;\n}\n.title {\r\n  height: 60px;\r\n  border-bottom: 1px solid #e1e8ee;\r\n  padding: 20px 30px;\r\n  color: #5e6977;\r\n  font-size: 18px;\r\n  font-weight: 400;\n}\n.item {\r\n  padding: 20px 30px;\r\n  display: flex;\n}\n.item:nth-child(3) {\r\n  border-top: 1px solid #e1e8ee;\r\n  border-bottom: 1px solid #e1e8ee;\n}\n.buttons {\r\n  position: relative;\r\n  padding-top: 30px;\r\n  margin-right: 60px;\n}\n.delete-btn,\r\n.like-btn {\r\n  display: inline-block;\r\n  cursor: pointer;\n}\n.delete-btn {\r\n  width: 18px;\r\n  height: 17px;\r\n  background: url() no-repeat center;\n}\n.like-btn {\r\n  position: absolute;\r\n  top: 9px;\r\n  left: 15px;\r\n  width: 60px;\r\n  height: 60px;\r\n  background-size: 2900%;\r\n  background-repeat: no-repeat;\n}\n.is-active {\r\n  -webkit-animation-name: animate;\r\n          animation-name: animate;\r\n  -webkit-animation-duration: 0.8s;\r\n          animation-duration: 0.8s;\r\n  -webkit-animation-iteration-count: 1;\r\n          animation-iteration-count: 1;\r\n  -webkit-animation-timing-function: steps(28);\r\n          animation-timing-function: steps(28);\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes animate {\n0% {\r\n    background-position: left;\n}\n50% {\r\n    background-position: right;\n}\n100% {\r\n    background-position: right;\n}\n}\n@keyframes animate {\n0% {\r\n    background-position: left;\n}\n50% {\r\n    background-position: right;\n}\n100% {\r\n    background-position: right;\n}\n}\n.image {\r\n  margin-right: 50px;\n}\n.description {\r\n  padding-top: 10px;\r\n  margin-right: 60px;\r\n  width: 115px;\n}\n.description span {\r\n  display: block;\r\n  font-size: 14px;\r\n  color: #43484d;\r\n  font-weight: 400;\n}\n.description span:first-child {\r\n  margin-bottom: 5px;\n}\n.description span:last-child {\r\n  font-weight: 300;\r\n  margin-top: 8px;\r\n  color: #86939e;\n}\n.quantity {\r\n  padding-top: 20px;\r\n  margin-right: 60px;\n}\n.quantity input {\r\n  -webkit-appearance: none;\r\n  border: none;\r\n  text-align: center;\r\n  width: 32px;\r\n  font-size: 16px;\r\n  color: #43484d;\r\n  font-weight: 300;\n}\nbutton[class*=\"btn\"] {\r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: #e1e8ee;\r\n  border-radius: 6px;\r\n  border: none;\r\n  cursor: pointer;\n}\n.minus-btn img {\r\n  margin-bottom: 3px;\n}\n.plus-btn img {\r\n  margin-top: 2px;\n}\nbutton:focus,\r\ninput:focus {\r\n  outline: 0;\n}\n.total-price {\r\n  width: 83px;\r\n  padding-top: 27px;\r\n  text-align: center;\r\n  font-size: 16px;\r\n  color: #43484d;\r\n  font-weight: 300;\n}\n@media (max-width: 800px) {\n.shopping-cart {\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: hidden;\n}\n.item {\r\n    height: auto;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\n}\n.image img {\r\n    width: 20px;\n}\n.image,\r\n  .quantity,\r\n  .description {\r\n    width: 100%;\r\n    text-align: center;\r\n    margin: 6px 0;\n}\n.buttons {\r\n    margin-right: 20px;\n}\n.remove{\r\n    color: red;\r\n    padding-bottom: 2em;\n}\n}\r\n";
}


// --------------------
// Request: /pages/fav.vue
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/routes.mjs ($id_wgn8tPmDGx)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /composables/useDarkMode.ts ($id_BBIogYydvh)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /pages/fav.vue?vue&type=style&index=0&lang.css ($id_uj28GakfrD)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_Z1I58W9dI8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/composables/useDarkMode.ts");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'fav',
  setup(__props, { expose }) {
  expose();

    const { data: cart, refresh } = __vite_ssr_import_0__.useAsyncData("cart", () => {
        return $fetch("/api/cart"); 
        refresh();
    }, '$Nu5vvcCWPo');
    const { isDarkMode, toggleDarkMode } = __vite_ssr_import_1__.default();
    
    const deleteItem = async (id) => {
        alert("Removed to cart");
        await $fetch(`/api/cart/${id}`, { method: "delete" });
        refresh();
    }
    __vite_ssr_import_2__.useHead({
        title: 'Cart',
        meta: [
            {
                name: 'viewport',
            },
        ]
    })
    
const __returned__ = { cart, refresh, isDarkMode, toggleDarkMode, deleteItem }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><!-- {{cart}} --><div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({
    class: "shopping-cart",
    style: $setup.isDarkMode ? { backgroundColor: 'rgb(255,255,255)' } : null
  }, _attrs))}><!-- Title --><div class="title"> WishList </div><!-- Product #1 --><!--[-->`)
  __vite_ssr_import_4__.ssrRenderList($setup.cart, (cartItem, index) => {
    _push(`<div class="item"><div class="buttons"><span class="delete-btn"></span><span class="like-btn"></span></div><div class="image"><img${
      __vite_ssr_import_4__.ssrRenderAttr("src", cartItem.item.image_url)
    } alt="" style="${
      __vite_ssr_import_4__.ssrRenderStyle({"width":"25px","padding-top":"1em","cursor":"pointer"})
    }"></div><div class="description"><span>${
      __vite_ssr_import_4__.ssrInterpolate(cartItem.item.name)
    }</span><span>${
      __vite_ssr_import_4__.ssrInterpolate(cartItem.item.first_brewed)
    }</span><span>${
      __vite_ssr_import_4__.ssrInterpolate(cartItem.item.tagline)
    }</span></div><div class="total-price">\$${
      __vite_ssr_import_4__.ssrInterpolate(cartItem.item.ebc)
    }</div><button type="button" class="remove">x</button></div>`)
  })
  _push(`<!--]--><!-- END OF PRODUCT --></div><!--]-->`)
}

const __vite_ssr_import_5__ = await __vite_ssr_import__("/pages/fav.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/fav.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Aaron/Code/NUXT/beerLibrary/pages/fav.vue"]]);
}


// --------------------
// Request: /pages/fav.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /pages/fav.vue ($id_GNJSW9bNJu)
// Dependencies: 

// --------------------
const $id_C3LdSCfULQ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".shopping-cart {\r\n  width: 750px;\r\n  height: 423px;\r\n  margin: 80px auto;\r\n  background: #ffffff;\r\n  box-shadow: 1px 20px 30px 0px rgba(0, 0, 0, 0.1);\r\n  border-radius: 6px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\n}\n.icons{\r\n  padding: 1em  0 0 0 ;\n}\n.icons a {\r\n  padding: 0 .5em;\n}\n.title {\r\n  height: 60px;\r\n  border-bottom: 1px solid #e1e8ee;\r\n  padding: 20px 30px;\r\n  color: #5e6977;\r\n  font-size: 18px;\r\n  font-weight: 400;\n}\n.item {\r\n  padding: 20px 30px;\r\n  display: flex;\n}\n.item:nth-child(3) {\r\n  border-top: 1px solid #e1e8ee;\r\n  border-bottom: 1px solid #e1e8ee;\n}\n.buttons {\r\n  position: relative;\r\n  padding-top: 30px;\r\n  margin-right: 60px;\n}\n.delete-btn,\r\n.like-btn {\r\n  display: inline-block;\r\n  cursor: pointer;\n}\n.delete-btn {\r\n  width: 18px;\r\n  height: 17px;\r\n  background: url() no-repeat center;\n}\n.like-btn {\r\n  position: absolute;\r\n  top: 9px;\r\n  left: 15px;\r\n  width: 60px;\r\n  height: 60px;\r\n  background-size: 2900%;\r\n  background-repeat: no-repeat;\n}\n.is-active {\r\n  -webkit-animation-name: animate;\r\n          animation-name: animate;\r\n  -webkit-animation-duration: 0.8s;\r\n          animation-duration: 0.8s;\r\n  -webkit-animation-iteration-count: 1;\r\n          animation-iteration-count: 1;\r\n  -webkit-animation-timing-function: steps(28);\r\n          animation-timing-function: steps(28);\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes animate {\n0% {\r\n    background-position: left;\n}\n50% {\r\n    background-position: right;\n}\n100% {\r\n    background-position: right;\n}\n}\n@keyframes animate {\n0% {\r\n    background-position: left;\n}\n50% {\r\n    background-position: right;\n}\n100% {\r\n    background-position: right;\n}\n}\n.image {\r\n  margin-right: 50px;\n}\n.description {\r\n  padding-top: 10px;\r\n  margin-right: 60px;\r\n  width: 115px;\n}\n.description span {\r\n  display: block;\r\n  font-size: 14px;\r\n  color: #43484d;\r\n  font-weight: 400;\n}\n.description span:first-child {\r\n  margin-bottom: 5px;\n}\n.description span:last-child {\r\n  font-weight: 300;\r\n  margin-top: 8px;\r\n  color: #86939e;\n}\n.quantity {\r\n  padding-top: 20px;\r\n  margin-right: 60px;\n}\n.quantity input {\r\n  -webkit-appearance: none;\r\n  border: none;\r\n  text-align: center;\r\n  width: 32px;\r\n  font-size: 16px;\r\n  color: #43484d;\r\n  font-weight: 300;\n}\nbutton[class*=\"btn\"] {\r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: #e1e8ee;\r\n  border-radius: 6px;\r\n  border: none;\r\n  cursor: pointer;\n}\n.minus-btn img {\r\n  margin-bottom: 3px;\n}\n.plus-btn img {\r\n  margin-top: 2px;\n}\nbutton:focus,\r\ninput:focus {\r\n  outline: 0;\n}\n.total-price {\r\n  width: 83px;\r\n  padding-top: 27px;\r\n  text-align: center;\r\n  font-size: 16px;\r\n  color: #43484d;\r\n  font-weight: 300;\n}\n@media (max-width: 800px) {\n.shopping-cart {\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: hidden;\n}\n.item {\r\n    height: auto;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\n}\n.image img {\r\n    width: 20px;\n}\n.image,\r\n  .quantity,\r\n  .description {\r\n    width: 100%;\r\n    text-align: center;\r\n    margin: 6px 0;\n}\n.buttons {\r\n    margin-right: 20px;\n}\n.remove{\r\n    color: red;\r\n    padding-bottom: 2em;\n}\n}\r\n    ";
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/routes.mjs ($id_wgn8tPmDGx)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_RD71Sepf4k = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Head = __vite_ssr_import_0__.resolveComponent("Head")
  const _component_Title = __vite_ssr_import_0__.resolveComponent("Title")

  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_Head, null, {
    default: __vite_ssr_import_0__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_1__.ssrRenderComponent(_component_Title, null, {
          default: __vite_ssr_import_0__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(` Index `)
            } else {
              return [
                __vite_ssr_import_0__.createTextVNode(" Index ")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_0__.createVNode(_component_Title, null, {
            default: __vite_ssr_import_0__.withCtx(() => [
              __vite_ssr_import_0__.createTextVNode(" Index ")
            ]),
            _: 1 /* STABLE */
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<div><h1>Hello</h1></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Aaron/Code/NUXT/beerLibrary/pages/index.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_B9lJ7CXUZU = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,
};
}


// --------------------
// Request: /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_k3VJ9HNHaS = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/plugins/server.mjs ($id_h7OLHUjIb9)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_qBEL58R1ls)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/color-mode-options.mjs ($id_mArzs9QS7j)
// --------------------
const $id_MmttJ77NZm = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/color-mode-options.mjs");

const addScript = (head) => {
  head.script = head.script || [];
  head.script.push({
    hid: __vite_ssr_import_4__.hid,
    innerHTML: __vite_ssr_import_4__.script
  });
  const serializeProp = "__dangerouslyDisableSanitizersByTagID";
  head[serializeProp] = head[serializeProp] || {};
  head[serializeProp][__vite_ssr_import_4__.hid] = ["innerHTML"];
};
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  const colorMode = __vite_ssr_import_0__.useState("color-mode", () => __vite_ssr_import_3__.reactive({
    preference: __vite_ssr_import_4__.preference,
    value: __vite_ssr_import_4__.preference,
    unknown: true,
    forced: false
  }), '$LHDClCOF8Q').value;
  const htmlAttrs = {};
  if (__vite_ssr_import_1__.isVue2) {
    const app = nuxtApp.nuxt2Context.app;
    if (typeof app.head === "function") {
      const originalHead = app.head;
      app.head = function() {
        const head = originalHead.call(this) || {};
        addScript(head);
        head.htmlAttrs = htmlAttrs;
        return head;
      };
    } else {
      addScript(app.head);
      app.head.htmlAttrs = htmlAttrs;
    }
  }
  if (__vite_ssr_import_1__.isVue3) {
    __vite_ssr_import_2__.useHead({
      htmlAttrs,
      script: [{ children: __vite_ssr_import_4__.script }]
    });
  }
  __vite_ssr_import_0__.useRouter().afterEach((to) => {
    const forcedColorMode = __vite_ssr_import_1__.isVue2 ? to.matched[0]?.components.default?.options.colorMode : to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      if (__vite_ssr_import_4__.dataValue) {
        htmlAttrs[`data-${__vite_ssr_import_4__.dataValue}`] = colorMode.value;
      }
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/vue-demi.mjs
// Parents: 
// - /node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.mjs ($id_ohfmrleGKz)
// Dependencies: 
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_DFcXpE295m)
// --------------------
const $id_fVRhALlhiQ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/capi.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const Vue2 = void 0;
Object.defineProperty(__vite_ssr_exports__, "Vue2", { enumerable: true, configurable: true, get(){ return Vue2 }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/capi.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_qBEL58R1ls)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_XtvF5a66h7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const install = () => {
};
Object.defineProperty(__vite_ssr_exports__, "install", { enumerable: true, configurable: true, get(){ return install }});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
Object.defineProperty(__vite_ssr_exports__, "set", { enumerable: true, configurable: true, get(){ return set }});
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
Object.defineProperty(__vite_ssr_exports__, "del", { enumerable: true, configurable: true, get(){ return del }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/color-mode-options.mjs
// Parents: 
// - /node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.mjs ($id_ohfmrleGKz)
// Dependencies: 

// --------------------
const $id_ClzSgX4Q9N = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const preference = "system"
Object.defineProperty(__vite_ssr_exports__, "preference", { enumerable: true, configurable: true, get(){ return preference }});
      
const fallback = "light"
Object.defineProperty(__vite_ssr_exports__, "fallback", { enumerable: true, configurable: true, get(){ return fallback }});
      
const hid = "nuxt-color-mode-script"
Object.defineProperty(__vite_ssr_exports__, "hid", { enumerable: true, configurable: true, get(){ return hid }});
      
const globalName = "__NUXT_COLOR_MODE__"
Object.defineProperty(__vite_ssr_exports__, "globalName", { enumerable: true, configurable: true, get(){ return globalName }});
      
const componentName = "ColorScheme"
Object.defineProperty(__vite_ssr_exports__, "componentName", { enumerable: true, configurable: true, get(){ return componentName }});
      
const classPrefix = ""
Object.defineProperty(__vite_ssr_exports__, "classPrefix", { enumerable: true, configurable: true, get(){ return classPrefix }});
      
const classSuffix = ""
Object.defineProperty(__vite_ssr_exports__, "classSuffix", { enumerable: true, configurable: true, get(){ return classSuffix }});
      
const dataValue = ""
Object.defineProperty(__vite_ssr_exports__, "dataValue", { enumerable: true, configurable: true, get(){ return dataValue }});
      
const storageKey = "nuxt-color-mode"
Object.defineProperty(__vite_ssr_exports__, "storageKey", { enumerable: true, configurable: true, get(){ return storageKey }});
      
const script = "const w=window,de=document.documentElement,knownColorSchemes=[\"dark\",\"light\"],preference=window.localStorage.getItem(\"nuxt-color-mode\")||\"system\";let value=preference===\"system\"?getColorScheme():preference;const forcedColorMode=de.getAttribute(\"data-color-mode-forced\");forcedColorMode&&(value=forcedColorMode),addColorScheme(value),w[\"__NUXT_COLOR_MODE__\"]={preference,value,getColorScheme,addColorScheme,removeColorScheme};function addColorScheme(e){const o=\"\"+e+\"\",t=\"\";de.classList?de.classList.add(o):de.className+=\" \"+o,de.setAttribute(\"data-\"+t,e)}function removeColorScheme(e){const o=\"\"+e+\"\",t=\"\";de.classList?de.classList.remove(o):de.className=de.className.replace(new RegExp(o,\"g\"),\"\"),de.removeAttribute(\"data-\"+t)}function prefersColorScheme(e){return w.matchMedia(\"(prefers-color-scheme\"+e+\")\")}function getColorScheme(){if(w.matchMedia&&prefersColorScheme(\"\").media!==\"not all\"){for(const e of knownColorSchemes)if(prefersColorScheme(\":\"+e).matches)return e}return\"light\"}\n"
Object.defineProperty(__vite_ssr_exports__, "script", { enumerable: true, configurable: true, get(){ return script }});
      ;
}


// --------------------
// Request: /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/unocss.mjs
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/plugins/server.mjs ($id_h7OLHUjIb9)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/@unocss/reset/tailwind.css ($id_wsQzEZdPeR)
// - /__uno.css ($id_cXTy3s1wTW)
// --------------------
const $id_0nYVVaGOR2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@unocss/reset/tailwind.css");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/__uno.css");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin(() => {});
}


// --------------------
// Request: /node_modules/@unocss/reset/tailwind.css
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/unocss.mjs ($id_3QQj0owhDj)
// Dependencies: 

// --------------------
const $id_GrZezAk3Oo = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n";
}


// --------------------
// Request: /__uno.css
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/unocss.mjs ($id_3QQj0owhDj)
// Dependencies: 

// --------------------
const $id_CBQSNM2Rgd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/*68eca1*//* layer: preflights */*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::-webkit-backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}/* layer: shortcuts */.container{max-width:100%;}@media (min-width: 640px){\n.container{max-width:640px;}\n}@media (min-width: 768px){\n.container{max-width:768px;}\n}@media (min-width: 1024px){\n.container{max-width:1024px;}\n}@media (min-width: 1280px){\n.container{max-width:1280px;}\n}@media (min-width: 1536px){\n.container{max-width:1536px;}\n}/* layer: default */.fixed{position:fixed;}.-bottom-1\\/2{bottom:-50%;}.left-0{left:0rem;}.right-0{right:0rem;}.z-10{z-index:10;}.z-20{z-index:20;}.grid{display:grid;}.mb-16{margin-bottom:4rem;}.mb-6{margin-bottom:1.5rem;}.mb-8{margin-bottom:2rem;}.display-1{display:1;}.h-1\\/2{height:50%;}.h-auto{height:auto;}.h1,\n[h1=\"\"]{height:0.25rem;}.max-w-520px{max-width:520px;}.min-h-screen{min-height:100vh;}.w-full{width:100%;}[h3=\"\"]{height:0.75rem;}.flex{display:flex;}.flex-1{flex:1 1 0%;}.flex-col{flex-direction:column;}.cursor-pointer{cursor:pointer;}.place-content-center{place-content:center;}.items-center{align-items:center;}.justify-center{justify-content:center;}.overflow-hidden{overflow:hidden;}.overflow-y-auto{overflow-y:auto;}.rounded-t-md{border-top-left-radius:0.375rem;border-top-right-radius:0.375rem;}.bg-black\\/5{background-color:rgba(0,0,0,0.05);}.bg-white{--un-bg-opacity:1;background-color:rgba(255,255,255,var(--un-bg-opacity));}.dark .dark\\:bg-black{--un-bg-opacity:1;background-color:rgba(0,0,0,var(--un-bg-opacity));}.dark .dark\\:bg-white\\/10{background-color:rgba(255,255,255,0.1);}.p-8{padding:2rem;}.px-10{padding-left:2.5rem;padding-right:2.5rem;}.px-4{padding-left:1rem;padding-right:1rem;}.px-8{padding-left:2rem;padding-right:2rem;}.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}.pt-14{padding-top:3.5rem;}.text-center{text-align:center;}.font-sans{font-family:Avenir, Helvetica, Arial, sans-serif;}.text-6xl{font-size:3.75rem;line-height:1;}.text-8xl{font-size:6rem;line-height:1;}.text-xl{font-size:1.25rem;line-height:1.75rem;}.font-light{font-weight:300;}.font-medium{font-weight:500;}.leading-tight{line-height:1.25;}.dark .dark\\:text-white{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity));}.text-black{--un-text-opacity:1;color:rgba(0,0,0,var(--un-text-opacity));}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale;}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}@media (min-width: 640px){\n.sm\\:px-0{padding-left:0rem;padding-right:0rem;}\n.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem;}\n.sm\\:py-3{padding-top:0.75rem;padding-bottom:0.75rem;}\n.sm\\:text-2xl{font-size:1.5rem;line-height:2rem;}\n.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem;}\n.sm\\:text-8xl{font-size:6rem;line-height:1;}\n.sm\\:text-xl{font-size:1.25rem;line-height:1.75rem;}\n}";
}


// --------------------
// Request: /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/root-component.mjs
// Parents: 
// - D:/Aaron/Code/NUXT/beerLibrary/node_modules/nuxt/dist/app/entry ($id_DtPtL8qAmZ)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// --------------------
const $id_Tp9wicbmTU = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/root-component.mjs ($id_9GYgqDHACq)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/error-component.mjs ($id_BfVxbAU9Xe)
// --------------------
const $id_nnVglb8RC0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");



const _sfc_main = {
  __name: 'nuxt-root',
  setup(__props, { expose }) {
  expose();

const ErrorComponent = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/error-component.mjs"))

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// Inject default route (outside of pages) as active route
__vite_ssr_import_0__.provide('_route', __vite_ssr_import_1__.useRoute())

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true || (__vite_ssr_import_1__.isNuxtError(err) && (err.fatal || err.unhandled))) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.showError, [err])
  }
})

const __returned__ = { ErrorComponent, nuxtApp, onResolve, results, error, defineAsyncComponent: __vite_ssr_import_0__.defineAsyncComponent, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, provide: __vite_ssr_import_0__.provide, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, isNuxtError: __vite_ssr_import_1__.isNuxtError, showError: __vite_ssr_import_1__.showError, useError: __vite_ssr_import_1__.useError, useRoute: __vite_ssr_import_1__.useRoute, useNuxtApp: __vite_ssr_import_1__.useNuxtApp }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_2__.resolveComponent("App")

  __vite_ssr_import_3__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_3__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_3__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Aaron/Code/NUXT/beerLibrary/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// --------------------
const $id_9pv517vyHv = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/error-component.mjs ($id_BfVxbAU9Xe)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// --------------------
const $id_EKe0rmvtSd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");



const _sfc_main = {
  __name: 'nuxt-error-page',
  props: {
  error: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props



const error = props.error

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
        line.includes('internal') ||
        line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = Number(error.statusCode || 500)
const is404 = statusCode === 404

const statusMessage = error.statusMessage ?? (is404 ? 'Page Not Found' : 'Internal Server Error')
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

// TODO: Investigate side-effect issue with imports
const _Error404 = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"))
const _Error = true
  ? __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"))
  : __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"))

const ErrorTemplate = is404 ? _Error404 : _Error

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, _Error404, _Error, ErrorTemplate, defineAsyncComponent: __vite_ssr_import_0__.defineAsyncComponent }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_2__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_1__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Aaron/Code/NUXT/beerLibrary/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css ($id_UH106zs9IT)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_dFuiXM9cET = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'error-404',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: Number,
    default: 404
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_1__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-bc8852ab><div class="fixed left-0 right-0 spotlight z-10" data-v-bc8852ab></div><div class="max-w-520px text-center z-20" data-v-bc8852ab><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-bc8852ab>${
    __vite_ssr_import_3__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-bc8852ab>${
    __vite_ssr_import_3__.ssrInterpolate($props.description)
  }</p><div class="w-full flex items-center justify-center" data-v-bc8852ab>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-bc8852ab"],['__file',"D:/Aaron/Code/NUXT/beerLibrary/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// Dependencies: 

// --------------------
const $id_jIbUn0IkCP = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-bc8852ab]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh);height:40vh;bottom:-30vh}.gradient-border[data-v-bc8852ab]{position:relative;border-radius:0.5rem;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}@media (prefers-color-scheme: light){.gradient-border[data-v-bc8852ab]{background-color:rgba(255, 255, 255, 0.3)}.gradient-border[data-v-bc8852ab]::before{background:linear-gradient(90deg, #e2e2e2 0%, #e2e2e2 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)}}@media (prefers-color-scheme: dark){.gradient-border[data-v-bc8852ab]{background-color:rgba(20, 20, 20, 0.3)}.gradient-border[data-v-bc8852ab]::before{background:linear-gradient(90deg, #303030 0%, #303030 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)}}.gradient-border[data-v-bc8852ab]::before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:0.5rem;padding:2px;width:100%;background-size:400% auto;opacity:0.5;transition:background-position 0.3s ease-in-out, opacity 0.2s ease-in-out;-webkit-mask:linear-gradient(#fff 0 0) content-box,\n            linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,\n                    linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude}.gradient-border[data-v-bc8852ab]:hover::before{background-position:-50% 0;opacity:1}.bg-white[data-v-bc8852ab]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-bc8852ab]{cursor:pointer}.flex[data-v-bc8852ab]{display:flex}.grid[data-v-bc8852ab]{display:grid}.place-content-center[data-v-bc8852ab]{place-content:center}.items-center[data-v-bc8852ab]{align-items:center}.justify-center[data-v-bc8852ab]{justify-content:center}.font-sans[data-v-bc8852ab]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-bc8852ab]{font-weight:500}.font-light[data-v-bc8852ab]{font-weight:300}.text-8xl[data-v-bc8852ab]{font-size:6rem;line-height:1}.text-xl[data-v-bc8852ab]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-bc8852ab]{line-height:1.25}.mb-8[data-v-bc8852ab]{margin-bottom:2rem}.mb-16[data-v-bc8852ab]{margin-bottom:4rem}.max-w-520px[data-v-bc8852ab]{max-width:520px}.min-h-screen[data-v-bc8852ab]{min-height:100vh}.overflow-hidden[data-v-bc8852ab]{overflow:hidden}.px-8[data-v-bc8852ab]{padding-left:2rem;padding-right:2rem}.py-2[data-v-bc8852ab]{padding-top:.5rem;padding-bottom:.5rem}.px-4[data-v-bc8852ab]{padding-left:1rem;padding-right:1rem}.fixed[data-v-bc8852ab]{position:fixed}.left-0[data-v-bc8852ab]{left:0px}.right-0[data-v-bc8852ab]{right:0px}.text-center[data-v-bc8852ab]{text-align:center}.text-black[data-v-bc8852ab]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-bc8852ab]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-bc8852ab]{width:100%}.z-10[data-v-bc8852ab]{z-index:10}.z-20[data-v-bc8852ab]{z-index:20}@media (min-width: 640px){.sm\\:text-4xl[data-v-bc8852ab]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-bc8852ab]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-bc8852ab]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-bc8852ab]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-bc8852ab]{padding-top:.75rem;padding-bottom:.75rem}.sm\\:px-6[data-v-bc8852ab]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-bc8852ab]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-bc8852ab]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css ($id_qcoFgmhGJ5)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_ZTCrhdVQqw = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'error-dev',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: Number,
    default: 500
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-6b2d7187><div class="fixed left-0 right-0 spotlight" data-v-6b2d7187></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-6b2d7187>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-6b2d7187>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-6b2d7187><pre class="text-xl font-light leading-tight z-10 p-8" data-v-6b2d7187>${
    $props.stack
  }</pre></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-6b2d7187"],['__file',"D:/Aaron/Code/NUXT/beerLibrary/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// Dependencies: 

// --------------------
const $id_zU3KktJDTV = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-6b2d7187]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}.bg-white[data-v-6b2d7187]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-6b2d7187]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-6b2d7187]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-6b2d7187]{display:flex}.flex-col[data-v-6b2d7187]{flex-direction:column}.flex-1[data-v-6b2d7187]{flex:1 1 0%}.font-sans[data-v-6b2d7187]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-6b2d7187]{font-weight:500}.font-light[data-v-6b2d7187]{font-weight:300}.h-auto[data-v-6b2d7187]{height:auto}.text-xl[data-v-6b2d7187]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-6b2d7187]{font-size:3.75rem;line-height:1}.leading-tight[data-v-6b2d7187]{line-height:1.25}.mb-8[data-v-6b2d7187]{margin-bottom:2rem}.mb-6[data-v-6b2d7187]{margin-bottom:1.5rem}.min-h-screen[data-v-6b2d7187]{min-height:100vh}.overflow-y-auto[data-v-6b2d7187]{overflow-y:auto}.p-8[data-v-6b2d7187]{padding:2rem}.px-10[data-v-6b2d7187]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-6b2d7187]{padding-top:3.5rem}.fixed[data-v-6b2d7187]{position:fixed}.left-0[data-v-6b2d7187]{left:0px}.right-0[data-v-6b2d7187]{right:0px}.text-black[data-v-6b2d7187]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-6b2d7187]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-6b2d7187]{z-index:10}@media (min-width: 640px){.sm\\:text-8xl[data-v-6b2d7187]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-6b2d7187]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-6b2d7187]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-6b2d7187]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-6b2d7187]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css ($id_anXr5LNAH3)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_iOTAwOwsPw = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'error-500',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: Number,
    default: 500
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-f37408fc><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-f37408fc></div><div class="max-w-520px text-center" data-v-f37408fc><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-f37408fc>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-f37408fc>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-f37408fc"],['__file',"D:/Aaron/Code/NUXT/beerLibrary/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// Dependencies: 

// --------------------
const $id_aNL2Q0cdkg = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-f37408fc]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh)}.bg-white[data-v-f37408fc]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-f37408fc]{display:grid}.place-content-center[data-v-f37408fc]{place-content:center}.font-sans[data-v-f37408fc]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-f37408fc]{font-weight:500}.font-light[data-v-f37408fc]{font-weight:300}.h-1\\/2[data-v-f37408fc]{height:50%}.text-8xl[data-v-f37408fc]{font-size:6rem;line-height:1}.text-xl[data-v-f37408fc]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-f37408fc]{line-height:1.25}.mb-8[data-v-f37408fc]{margin-bottom:2rem}.mb-16[data-v-f37408fc]{margin-bottom:4rem}.max-w-520px[data-v-f37408fc]{max-width:520px}.min-h-screen[data-v-f37408fc]{min-height:100vh}.overflow-hidden[data-v-f37408fc]{overflow:hidden}.px-8[data-v-f37408fc]{padding-left:2rem;padding-right:2rem}.fixed[data-v-f37408fc]{position:fixed}.left-0[data-v-f37408fc]{left:0px}.right-0[data-v-f37408fc]{right:0px}.-bottom-1\\/2[data-v-f37408fc]{bottom:-50%}.text-center[data-v-f37408fc]{text-align:center}.text-black[data-v-f37408fc]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-f37408fc]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width: 640px){.sm\\:text-4xl[data-v-f37408fc]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-f37408fc]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-f37408fc]{padding-left:0;padding-right:0}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-f37408fc]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-f37408fc]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/app-component.mjs
// Parents: 
// - D:/Aaron/Code/NUXT/beerLibrary/node_modules/nuxt/dist/app/entry ($id_DtPtL8qAmZ)
// Dependencies: 
// - /app.vue ($id_K0boQqLzfo)
// --------------------
const $id_3UNaEcKKya = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /app.vue
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/app-component.mjs ($id_01wep3FSAq)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// - /composables/useDarkMode.ts ($id_BBIogYydvh)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_NM1lRbDjku = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/composables/useDarkMode.ts");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_2__.defineComponent({
  __name: "app",
  setup(__props, { expose }) {
    expose();
    const { isDarkMode } = __vite_ssr_import_1__.default();
    const __returned__ = { isDarkMode };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default;
  const _component_NuxtPage = __vite_ssr_import_3__.resolveComponent("NuxtPage");
  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({
    style: $setup.isDarkMode ? { backgroundColor: "rgb(22, 22, 30)" } : null
  }, _attrs))}>`);
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLayout, null, {
    default: __vite_ssr_import_3__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_3__.createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/Aaron/Code/NUXT/beerLibrary/app.vue"]]);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/layout.mjs
// Parents: 
// - /app.vue ($id_K0boQqLzfo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/layouts.mjs ($id_cFKZfY3ILw)
// --------------------
const $id_U04gjib51w = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/layouts.mjs");

const defaultLayoutTransition = { name: "layout", mode: "out-in" };
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = __vite_ssr_import_2__.useRoute();
    return () => {
      const layout = (__vite_ssr_import_0__.isRef(props.name) ? props.name.value : props.name) ?? route.meta.layout ?? "default";
      const hasLayout = layout && layout in __vite_ssr_import_3__.default;
      if (true && layout && !hasLayout && layout !== "default") {
        console.warn(`Invalid layout \`${layout}\` selected.`);
      }
      return __vite_ssr_import_1__._wrapIf(
        __vite_ssr_import_0__.Transition,
        hasLayout && (route.meta.layoutTransition ?? defaultLayoutTransition),
        __vite_ssr_import_1__._wrapIf(__vite_ssr_import_3__.default[layout], hasLayout, context.slots)
      ).default();
    };
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /layouts/default.vue ($id_dononVQSck)
// --------------------
const $id_S2FmQAqxY3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = {
  default: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/layouts/default.vue"))
};
}


// --------------------
// Request: /layouts/default.vue
// Parents: 
// - /@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/layouts.mjs ($id_cFKZfY3ILw)
// Dependencies: 
// - /components/V-header.vue ($id_2Bz9TpUHLQ)
// - /components/V-footer.vue ($id_4ySGNwul7O)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_BwL152dpNp = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/V-header.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/V-footer.vue");

const _sfc_main = {}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_V_header = __vite_ssr_import_0__.default
  const _component_V_footer = __vite_ssr_import_1__.default

  _push(`<!--[-->`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_V_header, null, null, _parent))
  __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_V_footer, null, null, _parent))
  _push(`<!--]-->`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/default.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Aaron/Code/NUXT/beerLibrary/layouts/default.vue"]]);
}


// --------------------
// Request: /components/V-header.vue
// Parents: 
// - /layouts/default.vue ($id_dononVQSck)
// Dependencies: 
// - /composables/useDarkMode.ts ($id_BBIogYydvh)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/V-header.vue?vue&type=style&index=0&lang.css ($id_idTUnRyme2)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_GQGeMQqO66 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/composables/useDarkMode.ts");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "V-header",
  setup(__props, { expose }) {
    expose();
    const { isDarkMode, toggleDarkMode } = __vite_ssr_import_0__.default();
    const __returned__ = { isDarkMode, toggleDarkMode };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({
    class: "site-header",
    style: $setup.isDarkMode ? { backgroundColor: "rgb(22,22,30)" } : null
  }, _attrs))}><div class="site-identity" style="${__vite_ssr_import_3__.ssrRenderStyle($setup.isDarkMode ? { color: "white" } : null)}"><h1><a href="/" style="${__vite_ssr_import_3__.ssrRenderStyle($setup.isDarkMode ? { color: "white" } : null)}">Aaron </a></h1></div><nav class="site-navigation"><ul class="nav"><li><a href="/" style="${__vite_ssr_import_3__.ssrRenderStyle($setup.isDarkMode ? { color: "white" } : null)}"> Home </a></li><li><a href="/about" style="${__vite_ssr_import_3__.ssrRenderStyle($setup.isDarkMode ? { color: "white" } : null)}"> About </a></li><li><p><a href="/beer" style="${__vite_ssr_import_3__.ssrRenderStyle($setup.isDarkMode ? { color: "white" } : null)}"> Beer API </a><!-- \xB7
            <a href="/cart">About</a>
            \xB7
            <a href="/beer">Beer API</a> --></p></li><li><label class="switch"><input type="checkbox"${__vite_ssr_import_3__.ssrIncludeBooleanAttr(Array.isArray($setup.isDarkMode) ? __vite_ssr_import_3__.ssrLooseContain($setup.isDarkMode, null) : $setup.isDarkMode) ? " checked" : ""}><span class="slider round"></span></label></li></ul></nav></header>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/V-header.vue?vue&type=style&index=0&lang.css");

const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/V-header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "D:/Aaron/Code/NUXT/beerLibrary/components/V-header.vue"]]);
;
}


// --------------------
// Request: /components/V-header.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /components/V-header.vue ($id_2Bz9TpUHLQ)
// Dependencies: 

// --------------------
const $id_DiaVBTNTbs = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\");\n:root {\r\n  --primary-color: rgb(22, 22, 30);\r\n  --secondary-color: rgb(0, 18, 217);\n};\nbody {\r\n  font-family: \"Open Sans\", sans-serif;\r\n  margin: 0;\r\n  background-color: white;\n}\r\n/* slider */\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 34px;\n}\n.switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\n}\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  transition: 0.4s;\n}\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 26px;\r\n  width: 26px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  transition: 0.4s;\n}\ninput:checked + .slider {\r\n  background-color: #2196f3;\n}\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px #2196f3;\n}\ninput:checked + .slider:before {\r\n  transform: translateX(26px);\n}\r\n/* Rounded sliders */\n.slider.round {\r\n  border-radius: 34px;\n}\n.slider.round:before {\r\n  border-radius: 50%;\n}\r\n/* end of slider */\na {\r\n  text-decoration: none;\r\n  color: #000;\n}\na:hover {\r\n  color: rgb(179, 179, 179);\n}\n.site-header {\r\n  border-bottom: 1px solid #ccc;\r\n  padding: 0.5em 1em;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  position: -webkit-sticky;\r\n  position: sticky;\n}\n.site-identity h1 {\r\n  font-size: 1.5em;\r\n  margin: 0.6em 0;\r\n  display: inline-block;\n}\n.site-navigation ul,\r\n.site-navigation li {\r\n  margin: 0;\r\n  padding: 0;\n}\n.site-navigation li {\r\n  display: inline-block;\r\n  margin: 1.4em 1em 1em 1em;\n}\r\n";
}


// --------------------
// Request: /components/V-footer.vue
// Parents: 
// - /layouts/default.vue ($id_dononVQSck)
// Dependencies: 
// - /composables/useDarkMode.ts ($id_BBIogYydvh)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/V-footer.vue?vue&type=style&index=0&lang.css ($id_sOdIBdVTgX)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_JKhT5bKTjM = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/composables/useDarkMode.ts");

const _sfc_main = {
  __name: 'V-footer',
  setup(__props, { expose }) {
  expose();

    const { isDarkMode } = __vite_ssr_import_0__.default();
const submitHandler = async (data) => {
    $fetch('~server/api/notion', {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer secret_QtysD1bGY6vxtOLFqNjB90XikeOasmYiHjdByr4nRK2'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    await new Promise((r) => setTimeout(r, 1000))
    submitted.value = true
    if (submitted.value == true) {
        alert('Submitted');
        await new Promise((r) => setTimeout(r, 1000));
        location.reload();
    }
}

const __returned__ = { isDarkMode, submitHandler }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
    class: "footer-distributed",
    style: $setup.isDarkMode ? {backgroundColor:'rgb(22,22,30)'} : null
  }, _attrs))}><div class="footer-left"><h3>Aaron<span>Royan</span></h3><p class="footer-links"><a href="/">Home</a> · <a href="/about">About</a> · <a href="/beer">Beer API</a></p><p class="footer-company-name">Copy</p></div><div class="footer-right"><p>Contact Me</p><form onsubmit="submitHandler(content)"><input type="text" name="Uname" placeholder="Name"><input type="text" name="email" placeholder="Email"><textarea name="message" placeholder="Message"></textarea><button type="submit">Send</button></form></div></footer>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/V-footer.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/V-footer.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"D:/Aaron/Code/NUXT/beerLibrary/components/V-footer.vue"]]);
}


// --------------------
// Request: /components/V-footer.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /components/V-footer.vue ($id_4ySGNwul7O)
// Dependencies: 

// --------------------
const $id_BK0G3Nzjk4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);\n* {\r\n  font-family: Roboto;\n}\n.footer-distributed{\r\n\tbackground: rgb(0, 0, 0);\r\n\tbox-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n\tbox-sizing: border-box;\r\n\twidth: 100%;\r\n\tfont: bold 16px sans-serif;\r\n\ttext-align: left;\r\n\tpadding: 50px 60px 40px;\r\n\toverflow: hidden;\r\n  \tbottom: 0;\n}\nsection {\r\n  width: 100%;\r\n  display: inline-block;\r\n  background: #ccc;\r\n  height: 60vh;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  font-weight: 700;\r\n  text-decoration: underline;\n}\r\n\r\n/* Footer left */\n.footer-distributed .footer-left{\r\n\tfloat: left;\n}\r\n\r\n/* The company logo */\n.footer-distributed h3{\r\n\tcolor:  #ffffff;\r\n\tfont: normal 36px 'Roboto', cursive;\r\n\tmargin: 0 0 10px;\n}\n.footer-distributed h3 span{\r\n\tcolor:  #5383d3;\n}\r\n\r\n/* Footer links */\n.footer-distributed .footer-links{\r\n\tcolor:  #ffffff;\r\n\tmargin: 0 0 10px;\r\n\tpadding: 0;\n}\n.footer-distributed .footer-links a{\r\n\tdisplay:inline-block;\r\n\tline-height: 1.8;\r\n\ttext-decoration: none;\r\n\tcolor:  inherit;\n}\n.footer-distributed .footer-company-name{\r\n\tcolor:  #8f9296;\r\n\tfont-size: 14px;\r\n\tfont-weight: normal;\r\n\tmargin: 0;\n}\r\n\r\n/* Footer social icons */\n.footer-distributed .footer-icons{\r\n\tmargin-top: 40px;\n}\n.footer-distributed .footer-icons a{\r\n\tdisplay: inline-block;\r\n\twidth: 35px;\r\n\theight: 35px;\r\n\tcursor: pointer;\r\n\tbackground-color:  #33383b;\r\n\tborder-radius: 2px;\r\n\r\n\tfont-size: 20px;\r\n\tcolor: #ffffff;\r\n\ttext-align: center;\r\n\tline-height: 35px;\r\n\r\n\tmargin-right: 3px;\r\n\tmargin-bottom: 5px;\n}\r\n\r\n/* Footer Right */\n.footer-distributed .footer-right{\r\n\tfloat: right;\n}\n.footer-distributed .footer-right p{\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n\tmargin: 15px 42px 0 0;\r\n\tcolor: #ffffff;\n}\r\n\r\n/* The contact form */\n.footer-distributed form{\r\n\tdisplay: inline-block;\n}\n.footer-distributed form input,\r\n.footer-distributed form textarea{\r\n\tdisplay: block;\r\n\tborder-radius: 3px;\r\n\tbox-sizing: border-box;\r\n\tbackground-color:  #1f2022;\r\n\tbox-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);\r\n\tborder: none;\r\n\tresize: none;\r\n\r\n\tfont: inherit;\r\n\tfont-size: 14px;\r\n\tfont-weight: normal;\r\n\tcolor:  #d1d2d2;\r\n\r\n\twidth: 400px;\r\n\tpadding: 18px;\n}\n.footer-distributed ::-webkit-input-placeholder {\r\n\tcolor:  #5c666b;\n}\n.footer-distributed ::-moz-placeholder {\r\n\tcolor:  #5c666b;\r\n\topacity: 1;\n}\n.footer-distributed :-ms-input-placeholder{\r\n\tcolor:  #5c666b;\n}\n.footer-distributed form input{\r\n\theight: 55px;\r\n\tmargin-bottom: 15px;\n}\n.footer-distributed form textarea{\r\n\theight: 100px;\r\n\tmargin-bottom: 20px;\n}\n.footer-distributed form button{\r\n\tborder-radius: 3px;\r\n\tbackground-color:  #33383b;\r\n\tcolor: #ffffff;\r\n\tborder: 0;\r\n\tfont-weight: bold;\r\n\tpadding: 15px 50px;\r\n\tfloat: right;\n}\r\n\r\n/* If you don't want the footer to be responsive, remove these media queries */\n@media (max-width: 1000px) {\n.footer-distributed {\r\n\t\tfont: bold 14px sans-serif;\n}\n.footer-distributed .footer-company-name{\r\n\t\tfont-size: 12px;\n}\n.footer-distributed form input,\r\n\t.footer-distributed form textarea{\r\n\t\twidth: 250px;\n}\n.footer-distributed form button{\r\n\t\tpadding: 10px 35px;\n}\n}\n@media (max-width: 800px) {\n.footer-distributed{\r\n\t\tpadding: 30px;\n}\n.footer-distributed .footer-left,\r\n\t.footer-distributed .footer-right{\r\n\t\tfloat: none;\r\n\t\tmax-width: 300px;\r\n\t\tmargin: 0 auto;\n}\n.footer-distributed .footer-left{\r\n\t\tmargin-bottom: 40px;\n}\n.footer-distributed form{\r\n\t\tmargin-top: 30px;\n}\n.footer-distributed form{\r\n\t\tdisplay: block;\n}\n.footer-distributed form button{\r\n\t\tfloat: none;\n}\n}\r\n";
}


const __modules__ = {
  "D:/Aaron/Code/NUXT/beerLibrary/node_modules/nuxt/dist/app/entry": $id_WyUjsMnbrl,
  vue: $id_G33erDMZ5a,
  "@vue/runtime-dom": $id_9sriful2d8,
  ohmyfetch: $id_kLE5W6MKaY,
  "/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/paths.mjs": $id_d3jpiQzmnF,
  ufo: $id_KJr7LehhrL,
  "/node_modules/nuxt/dist/app/index.mjs": $id_fgrt3UeQEL,
  "/node_modules/nuxt/dist/app/nuxt.mjs": $id_lfCjBrgcte,
  hookable: $id_p6x8naIYgL,
  unctx: $id_Zn9H5zfDIh,
  "/node_modules/nuxt/dist/app/composables/index.mjs": $id_YvAaozTraC,
  "/node_modules/nuxt/dist/app/composables/component.mjs": $id_XTtQ30wmO3,
  "vue-router": $id_7dT9jx0uwT,
  "/node_modules/nuxt/dist/app/composables/asyncData.mjs": $id_BHNdDlA1Pk,
  "/node_modules/nuxt/dist/app/composables/utils.mjs": $id_6bgT8vIFHQ,
  "/node_modules/nuxt/dist/app/composables/hydrate.mjs": $id_oMJXouc9nw,
  "/node_modules/nuxt/dist/app/composables/state.mjs": $id_kP3GBeDzaR,
  "/node_modules/nuxt/dist/app/composables/error.mjs": $id_0OCs51rfoK,
  h3: $id_K2PnHEPz0m,
  "/node_modules/nuxt/dist/app/composables/fetch.mjs": $id_zYOrYjkwm9,
  "/node_modules/nuxt/dist/app/composables/cookie.mjs": $id_XUZhFBVStH,
  "cookie-es": $id_t3HHRMhh7L,
  destr: $id_ZK3lg3ye5b,
  ohash: $id_ApQSwD9AXx,
  "/node_modules/nuxt/dist/app/composables/ssr.mjs": $id_BjnOCDcfIZ,
  "/node_modules/nuxt/dist/app/composables/router.mjs": $id_72OrpZA28S,
  "/node_modules/nuxt/dist/app/components/index.mjs": $id_HRAmKRepZ0,
  "/node_modules/nuxt/dist/app/components/nuxt-link.mjs": $id_aAoWaPsGgE,
  "/node_modules/nuxt/dist/head/runtime/index.mjs": $id_DBzckdbLOm,
  "/node_modules/nuxt/dist/head/runtime/composables.mjs": $id_TG3cDPMBp5,
  "@vue/shared": $id_NOAOzpHkPB,
  "/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/css.mjs": $id_0SFIwo7yqk,
  "/node_modules/@nuxt/ui/dist/assets/styles.css": $id_uyVtDbuieD,
  "/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/plugins/server.mjs": $id_g7t2x0oBlA,
  "/node_modules/nuxt/dist/app/plugins/preload.server.mjs": $id_1SAEi7QN5N,
  "/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/components.plugin.mjs": $id_3ueZNCOMeK,
  "/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_wRsEVKfW1P,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_19kbcSkZ7c,
  defu: $id_q6X4BWspBy,
  "/node_modules/nuxt/dist/head/runtime/plugin.mjs": $id_BL7IqVL2Dw,
  "/node_modules/nuxt/dist/head/runtime/components.mjs": $id_PE2LM6mDyc,
  "/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/meta.config.mjs": $id_8PDEN2vEKQ,
  "/node_modules/nuxt/dist/pages/runtime/router.mjs": $id_DmZ0DuGELI,
  "/node_modules/nuxt/dist/pages/runtime/page.mjs": $id_L9I1eoE7dW,
  "/node_modules/nuxt/dist/pages/runtime/utils.mjs": $id_ZR0LUqwyer,
  "/node_modules/nuxt/dist/app/components/utils.mjs": $id_NgApSiB2xA,
  "/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/routes.mjs": $id_mKmcs1a5kw,
  "/pages/about.vue?macro=true": $id_ZF30YrTp4n,
  "/composables/useDarkMode.ts": $id_RI8clQpZUm,
  "@giphy/js-fetch-api": $id_3GUECxw8vY,
  "vue/server-renderer": $id_aRHphPzMpI,
  "/@id/__x00__plugin-vue:export-helper": $id_mHD6riC5ol,
  "/pages/beer.vue?macro=true": $id_4xp2JYRNAG,
  "/pages/beers/[name].vue?macro=true": $id_cns8bS54AQ,
  "/pages/cart.vue?macro=true": $id_JAad9jUssh,
  "/pages/fav.vue?macro=true": $id_5w6ZgSpJui,
  "/pages/index.vue?macro=true": $id_i7GBo78qxv,
  "/pages/about.vue": $id_ScA0NSy8hI,
  "/pages/about.vue?vue&type=style&index=0&lang.css": $id_h9jBSPnwwi,
  "/pages/beer.vue": $id_koA5nKJPX8,
  "/pages/beer.vue?vue&type=style&index=0&lang.css": $id_0WNmeepSwh,
  "/pages/beers/[name].vue": $id_hdbHAUAxw1,
  "/pages/beers/[name].vue?vue&type=style&index=0&lang.css": $id_OcQRcmFX60,
  "/pages/cart.vue": $id_1mUUyQVKFc,
  "/pages/cart.vue?vue&type=style&index=0&lang.css": $id_9JLhpM8jLv,
  "/pages/fav.vue": $id_Z1I58W9dI8,
  "/pages/fav.vue?vue&type=style&index=0&lang.css": $id_C3LdSCfULQ,
  "/pages/index.vue": $id_RD71Sepf4k,
  "/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/router.options.mjs": $id_B9lJ7CXUZU,
  "/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/middleware.mjs": $id_k3VJ9HNHaS,
  "/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.mjs": $id_MmttJ77NZm,
  "/node_modules/nuxt/dist/app/compat/vue-demi.mjs": $id_fVRhALlhiQ,
  "/node_modules/nuxt/dist/app/compat/capi.mjs": $id_XtvF5a66h7,
  "/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/color-mode-options.mjs": $id_ClzSgX4Q9N,
  "/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/unocss.mjs": $id_0nYVVaGOR2,
  "/node_modules/@unocss/reset/tailwind.css": $id_GrZezAk3Oo,
  "/__uno.css": $id_CBQSNM2Rgd,
  "/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/root-component.mjs": $id_Tp9wicbmTU,
  "/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_nnVglb8RC0,
  "/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/error-component.mjs": $id_9pv517vyHv,
  "/node_modules/nuxt/dist/app/components/nuxt-error-page.vue": $id_EKe0rmvtSd,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_dFuiXM9cET,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css": $id_jIbUn0IkCP,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_ZTCrhdVQqw,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css": $id_zU3KktJDTV,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_iOTAwOwsPw,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css": $id_aNL2Q0cdkg,
  "/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/app-component.mjs": $id_3UNaEcKKya,
  "/app.vue": $id_NM1lRbDjku,
  "/node_modules/nuxt/dist/app/components/layout.mjs": $id_U04gjib51w,
  "/@id/virtual:nuxt:D:/Aaron/Code/NUXT/beerLibrary/.nuxt/layouts.mjs": $id_S2FmQAqxY3,
  "/layouts/default.vue": $id_BwL152dpNp,
  "/components/V-header.vue": $id_GQGeMQqO66,
  "/components/V-header.vue?vue&type=style&index=0&lang.css": $id_DiaVBTNTbs,
  "/components/V-footer.vue": $id_JKhT5bKTjM,
  "/components/V-footer.vue?vue&type=style&index=0&lang.css": $id_BK0G3Nzjk4
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("D:/Aaron/Code/NUXT/beerLibrary/node_modules/nuxt/dist/app/entry")