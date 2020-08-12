import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import router from "./router";
import VueMarkdown from "vue-markdown";

Vue.use(VueMarkdown);
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
