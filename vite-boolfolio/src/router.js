import { createRouter, createWebHistory } from "vue-router";
import ProjectView from "./views/ProjectView.vue";
import HomeView from "./views/HomeView.vue";
import AllProjectsView from "./views/AllProjectsView.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/projects",
        name: "projects",
        component: AllProjectsView,
      },
      {
        path: "/project/:title",
        name: "project-view",
        component: ProjectView,
      },
    ]
  });
  
  export { router };