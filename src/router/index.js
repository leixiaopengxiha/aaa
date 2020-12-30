import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // 首页
  {
    path: "/",
    name: "home",
    label: "查看企业信息",
    // 写子组件的时候必须要有 import("../views/routrs.vue"), 不然子路由加载不出来
    component: () => import("../views/routrs.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        label: "补全企业信息",
        // component: () => import("../views/routrs.vue"),
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/home2",
        name: "Home2",
        label: "补全企业信息",
        // component: () => import("../views/routrs.vue"),
        component: () => import("../views/Home2.vue"),
      },
      // 三级联动
      // {
      //   path: "/home",
      //   name: "Home",
      //   label: "查看企业信息",
      //   component: () => import("../views/routrs.vue"),
      //   children: [
      //     {
      //       path: "/home/homes",
      //       name: "Home",
      //       label: "补全企业信息",
      //       component: () => import("../views/Home.vue"),
      //     },
      //   ],
      // },
    ],
  },
  // 新建入网申请
  {
    path: "/apply",
    name: "Apply",
    label: "新建入网申请",
    component: () => import("../views/Apply.vue"),
  },
  // // 补全企业信息
  // {
  //   path: "/Home",
  //   name: "Home",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  // },
  // // 查看企业信息
  // {
  //   path: "/Home2",
  //   name: "Home2",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Home2.vue"),
  // },
  // // 新建入网申请
  // {
  //   path: "/apply",
  //   name: "Apply",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Apply.vue"),
  // },
  // // 变更企业名称申请
  // {
  //   path: "/Changeneme",
  //   name: "Changeneme",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Changeneme.vue"),
  // },
  // // 新建入网申请
  // {
  //   path: "/Networkaccess",
  //   name: "Networkaccess",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Networkaccess.vue"),
  // },
  // // 新建申请查看
  // {
  //   path: "/lookNetworkaccess",
  //   name: "lookNetworkaccess",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/lookNetworkaccess.vue"),
  // },
  // // 终止变更
  // {
  //   path: "/termination",
  //   name: "termination",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/termination.vue"),
  // },
  // // 变更企业名称申请
  // {
  //   path: "/Namechange",
  //   name: "Namechange",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Namechange.vue"),
  // },
  // // 我的代理企业管理
  // {
  //   path: "/agent",
  //   name: "agent",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/agent.vue"),
  // },
  // {
  //   path: "/Four",
  //   name: "Four",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Four.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
