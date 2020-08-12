import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Agb from "../pages/Agb";
import Agbundlb from "../pages/Agbundlb";
import Aagbundlb from "../pages/Aagbundlb";
Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      component: Home,
      props: (route) => ({ name: route.query.name })
    },
    {
      path: "/about",
      component: About,
      props: (route) => ({ name: route.query.name })
    },
    {
      path: "/agb",
      component: Agb,
      props: (route) => ({ name: route.query.name })
    },
    {
      path: "/agbundlb",
      component: Agbundlb,
      props: (route) => ({ name: route.query.name })
    },
    {
      path: "/150agbundlb",
      component: Aagbundlb,
      props: (route) => ({ name: route.query.name })
    }
  ]
});
