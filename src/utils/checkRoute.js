import router from "@/router/index";
import store from "@/store";
import routesArr from "./permission.js";
import LayoutView from "../views/layout/index.vue";
const dynamicRoutes = [
  {
    path: "/product",
    name: "Product",
    meta: {
      title: "项目",
      icon: "calendar",
    },
    component: LayoutView,
    children: [
      {
        path: "/productList",
        name: "ProductList",
        meta: {
          title: "项目列表",
          icon: "folder",
        },
        component: () => import("@/views/page/productList/productList.vue"),
      },
      {
        path: "/productAdd",
        name: "ProductAdd",
        meta: {
          title: "添加项目",
          icon: "folder-add",
        },
        component: () => import("@/views/page/productAdd/productAdd.vue"),
      },
      {
        path: "/category",
        name: "Category",
        meta: {
          title: "项目类别",
          icon: "folder-open",
        },
        component: () => import("@/views/page/category/category.vue"),
      },
    ],
  },
];

let isRoutes = false;
router.beforeEach((to, from, next) => {
  console.log(to, from);
  console.log(store.getters.getUserInfo.appkey);
  if (to.name !== "login") {
    if (store.getters.getUserInfo.appkey) {
      if (!isRoutes) {
        const routes = routesArr(store.getters.getUserInfo.role, dynamicRoutes);
        store
          .dispatch("setMenuRoutes", router.options.routes.concat(routes))
          .then((res) => {
            routes.forEach((item) => {
              router.addRoute(item);
            });
            return next();
          });
        isRoutes = true;
      }
      console.log(router);
      return next();
    } else {
      return next("/login");
    }
  } else {
    return next();
  }
});
