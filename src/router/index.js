import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import JobsView from "@/views/JobsView.vue";
import JobDetailsView from "@/views/JobDetailsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

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
    path: "/jobs",
    name: "jobs",
    component: JobsView,
  },
  {
    path: "/jobs/:id",
    name: "jobDetails",
    component: JobDetailsView,
    props: true,
  },
  //catch all 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
