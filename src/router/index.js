import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import Posts from '../views/PostsView.vue'
// import postDetails from '../views/postDetails.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/post",
    name: "post",
    component: () => import("@/views/PostsView.vue"),
  },
  {
    path: "/post/:postId",
    name: "postDetails",
    component: () => import("../views/postDetails.vue"),
    props: true,
  },
  {
    path: "/post/:postId",
    name: "postDetails",
    component: () => import("../views/postDetails.vue"),
    props: true,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
