import Vue from "vue";
import Router from "vue-router";
// import Login from "./views/Login.vue";
// import Home from "./views/Home.vue";
// import Welcome from "./views/Welcome.vue";
// import User from "./views/users/User.vue";
// import Rights from "./views/auth/Rights.vue";
// import Roles from "./views/auth/Roles.vue";
// import Categories from "./views/goods/Categories.vue";
// import Params from "./views/goods/Params.vue";
// import Goods from "./views/goods/Goods.vue";
// import GoodsAdd from "./views/goods/GoodsAdd.vue";
// import Orders from "./views/order/orders.vue";
// import Report from "./views/report/reports.vue";

// const Foo = () => import('./Foo.vue')
const Login = () => import("./views/Login.vue");
const Home = () => import("./views/Home.vue");
const Welcome = () => import("./views/Welcome.vue");
const User = () => import("./views/users/User.vue");
const Rights = () => import("./views/auth/Rights.vue");
const Roles = () => import("./views/auth/Roles.vue");
const Categories = () => import("./views/goods/Categories.vue");
const Params = () => import("./views/goods/Params.vue");
const Goods = () => import("./views/goods/Goods.vue");
const GoodsAdd = () => import("./views/goods/GoodsAdd.vue");
const Orders = () => import("./views/order/orders.vue");
const Report = () => import("./views/report/reports.vue");

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
      children: [
        { path: "/welcome", component: Welcome },
        { path: "/users", component: User },
        { path: "/rights", component: Rights },

        { path: "/roles", component: Roles },
        { path: "/categories", component: Categories },
        { path: "/params", component: Params },
        { path: "/goods", component: Goods },
        { path: "/goods/add", component: GoodsAdd },
        { path: "/roles", component: Roles },
        { path: "/orders", component: Orders },
        { path: "/reports", component: Report }
      ]
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
