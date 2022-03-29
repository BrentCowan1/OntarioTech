import Vue from "vue";
import App from "./App.vue";
import store from "@/store";
import { BaklavaVuePlugin } from "@baklavajs/plugin-renderer-vue";
import "@baklavajs/plugin-renderer-vue/dist/styles.css";
import "./style.css";

Vue.config.productionTip = false;

Vue.use(BaklavaVuePlugin);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
