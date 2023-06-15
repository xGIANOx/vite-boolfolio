import { createRouter, createWebHistory } from "vue-router";
import ProjectView from "./views/ProjectView.vue";
import HomeView from "./views/HomeView.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/project/:title",
        name: "project-view",
        component: ProjectView,
      },
    ]
  });
  
  export { router };