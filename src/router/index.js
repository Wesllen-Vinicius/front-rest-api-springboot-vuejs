import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "../components/NotFound.vue";

const router = createRouter({
  mode: "history",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Loginview.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Registerview.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/BoardAdmin.vue"),
    },

    {
      path: "/user",
      name: "user",
      component: () => import("../views/BoardUser.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path: "/unauthorized",
      name: "unauthorized",
      component: () => import("../components/NotAuthorized.vue"),
    },
    { path: "/:catchAll(.*)", component: NotFound },
  ],
});

export default router;

router.beforeEach((to, _from, next) => {
  const publicPages = ["/login", "/register", "/home", "/admin"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");
  const userData = JSON.parse(loggedIn);
  const isAdmin = userData?.roles.includes("ROLE_ADMIN");

  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    if (["/admin"].includes(to.path) && !isAdmin) {
      next("/unauthorized");
    }
    next();
  }
});
