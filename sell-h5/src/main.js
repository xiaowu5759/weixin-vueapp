// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App"; // App.vue
import router from "./router";
import axios from 'axios';
import VueAxios from 'vue-axios';

import './common/stylus/index.styl';
// import VueRouter from "vue-router";

Vue.config.productionTip = false;

// 全局注册
Vue.use(VueAxios, axios);
// Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  // 挂载点
  el: "#app",
  router,
  // 注册组件
  components: { App },
  template: "<App/>"
});
