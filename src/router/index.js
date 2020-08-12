import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home";
import About from "../pages/About";
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
    }
  ]
});
