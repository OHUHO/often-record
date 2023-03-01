import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";

import store from "@/state/store";
import routes from "./routes";

Vue.use(VueRouter);
Vue.use(VueMeta, {
  keyName: "page",
});

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((routeTo, routeFrom, next) => {
  if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
    const authRequired = routeTo.matched.some(
      (route) => route.meta.authRequired
    );

    if (!authRequired) return next();

    if (store.getters["auth/loggedIn"]) {
      return store.dispatch("auth/validate").then((validUser) => {
        validUser ? next() : redirectToLogin();
      });
    }

    redirectToLogin();

    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line no-inner-declarations
    function redirectToLogin() {
      next({ name: "login", query: { redirectFrom: routeTo.fullPath } });
    }
  } else {
    const publicPages = ["/login", "/register", "/forgot-password"];
    const authpage = !publicPages.includes(routeTo.path);
    const loggeduser = localStorage.getItem("user");

    if (authpage && !loggeduser) {
      return next("/login");
    }

    next();
  }
});

router.beforeResolve(async (routeTo, routeFrom, next) => {
  try {
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
            if (args.length) {
              next(...args);
              reject(new Error("Redirected"));
            } else {
              resolve();
            }
          });
        } else {
          resolve();
        }
      });
    }
  } catch (error) {
    return;
  }

  next();
});

export default router;
