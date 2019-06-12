import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/global.css";
import "./assets/fonts/iconfont.css";
import axios from "./http";
// 给axios配置成为Vue的成员
Vue.prototype.$http = axios;
import ElementUI from "element-ui";
Vue.use(ElementUI);

Vue.config.productionTip = false;
import MyBread from "./components/MyBread.vue";
Vue.component("my-bread", MyBread);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
