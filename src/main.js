import Vue from "vue";

import Meta from "vue-meta";
import VueAnalytics from "vue-analytics";
import VuePageTransition from "vue-page-transition";
import { ValidationProvider } from "vee-validate";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const CONFIG_VUE_META = {
  refreshOnceOnNavigation: true
};

const CONFIG_VUE_ANALYTICS = {
  id: "UA-XXXXXXXXX-X",
  router
};

Vue.use(Meta, CONFIG_VUE_META);
Vue.use(VueAnalytics, CONFIG_VUE_ANALYTICS);

Vue.use(VuePageTransition);
Vue.component("ValidationProvider", ValidationProvider);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
