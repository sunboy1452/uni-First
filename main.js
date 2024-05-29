import App from "./App";
import fui from "./common/fui-app";
import http from "./components/firstui/fui-request";
import store from "./store";

// #ifndef VUE3
import Vue from "vue";

Vue.config.productionTip = false;
Vue.prototype.$store = store;
Vue.prototype.fui = fui;
Vue.prototype.http = http;

// 引入路由
import { router, RouterMount } from "./common/router.js";
Vue.use(router);

// 全局引入vuex
let vuexStore = require("@/store/$u.mixin.js");
Vue.mixin(vuexStore);
import zhouWeiNavBar from "@/components/zhouWei-navBar/components/zhouWei-navBar/zhouWei-navBar";
Vue.component("nav-bar", zhouWeiNavBar);

App.mpType = "app";

const app = new Vue({
    store,
    ...App,
});
import httpApi from "@/apis/http.api.js";
Vue.use(httpApi, app);
import tools from "@/common/tools.js";
Vue.use(tools, app);
import * as filters from "./filters"; // global filters
Object.keys(filters).forEach((key) => {
    Vue.prototype[key] = filters[key];
});
Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key]);
});
//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
RouterMount(app, router, "#app");
// #endif
// #ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
// #endif

// #ifdef VUE3
import { createSSRApp } from "vue";
/*
  在 Vue3 中，如果 nvue 使用了 Vuex 的相关 API，
  需要在 main.js 的 createApp 的返回值中 return 一下 Vuex
*/
import Vuex from "vuex";
export function createApp() {
    const app = createSSRApp(App);
    app.use(store);
    app.config.globalProperties.fui = fui;
    app.config.globalProperties.http = http;
    return {
        Vuex,
        app,
    };
}
// #endif
