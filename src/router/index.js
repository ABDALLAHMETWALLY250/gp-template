import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import DoctorsView from "../views/DoctorsView.vue";
import NewsView from "../views/NewsView.vue";
import ProtectView from "../views/ProtectView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/doctors",
    name: "doctors",
    component: DoctorsView,
  },
  {
    path: "/news",
    name: "news",
    component: NewsView,
  },
  {
    path: "/protect",
    name: "protect",
    component: ProtectView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
