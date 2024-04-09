import Vue from "vue";
import VueRouter from "vue-router";
import LayoutView from "../views/layout/index.vue";
import Login from "@/views/Login/Login.vue";
Vue.use(VueRouter);



const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
      icon:"home",
    },
    component: LayoutView,
    children: [
      {
        path: "/statistics",
        name: "Statistics",
        meta: {
          title: "统计",
          icon:"line-chart",
        },
        component: () => import("@/views/page/statistics/statistics.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "登录",
      hidden:true
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
