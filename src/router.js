import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import Welcome from "./views/Welcome.vue";
Vue.use(Router);

var router = new Router({
  routes: [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/home",
      component: Home,
      redirect: "/welcome",
      children: [{ path: "/welcome", component: Welcome }]
    }
  ]
});
router.beforeEach((to, from, next) => {
  // 当前用户没有登录系统，并且还在访问非登录路由，就强制执行登录路由
  var token = window.sessionStorage.getItem("token");
  if (!token && to.path !== "/login") {
    return next("/login");
  }
  next(); // 请继续你的旅行
});
export default router;
