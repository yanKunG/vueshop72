import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/global.css";
import "./assets/fonts/iconfont.css";
import axios from "axios";
// axios配置请求公共根地址
axios.defaults.baseURL = "http://127.0.0.1:11333/api/private/v1/";
// 给axios配置成为Vue的成员
Vue.prototype.$http = axios;
import ElementUI from "element-ui";
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
