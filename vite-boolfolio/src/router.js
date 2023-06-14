import { createRouter, createWebHistory } from "vue-router";

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