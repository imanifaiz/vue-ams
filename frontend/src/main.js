import Vue from "vue";
import router from "./router";
import store from "./store";
import Portal from "portal-vue";

Vue.use(Portal);

import "@/assets/css/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "animate.css";

import { _axios } from "./lib/lib";
import Alert from "@/components/Alert";
import Spinner from "@/components/Spinner";

Vue.prototype.$axios = _axios;
Vue.prototype.$alert = Alert;
Vue.prototype.$spinner = Spinner;

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
