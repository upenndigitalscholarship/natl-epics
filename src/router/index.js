import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Teaching from "@/views/Teaching.vue";
import Posts from "@/views/Posts.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/teaching",
    name: "Teaching",
    component: Teaching,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
