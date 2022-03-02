import Vue from "vue";
import Router from "vue-router";
import Agenda from "./views/AgendaViews.vue";
import LoginViews from "./views/LoginViews.vue";
import SignupViews from "./views/SignupViews.vue";
import ToutRdv from "./views/ToutRdv.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "SignupViews",
      component: SignupViews,
    },
    {
      path: "/ToutRdv",
      name: "ToutRdv",
      component: ToutRdv,
    },
    {
      path: "/LoginViews",
      name: "LoginViews",
      component: LoginViews,
    },

    {
      path: "/Agenda",
      name: "Agenda",
      component: Agenda,
    },
    {
      path: "/FormulaireRdv",
      name: "FormulaireRdv",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/FormulaireRdv.vue"),
    },
  ],
});
