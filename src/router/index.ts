import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Home from "../components/Home.vue";
import { useAuthStore } from "../store/auth";

const routes = [
  {
    path: "/login",
    component: Login,
  },
  { path: "/register", component: Register },
  {
    path: "/",
    component: Home,
    beforeEnter: (to: any, from: any, next: any) => {
      const authStore = useAuthStore();
      if (authStore.authenticate === false) {
        next("/login");
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
