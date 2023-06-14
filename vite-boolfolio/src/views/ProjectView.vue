<script>
import ProjectCard from "../components/ProjectCard.vue";
import ProjectCard from "../components/ProjectCard.vue";
import axios from "axios";
export default {
    name: "ProjectView",
    components: {
    ProjectCard,
    ProjectCard
},
    data() {
    return {
      base_URL: "http://127.0.0.1:8000/",
      projects_path: "api/projects",
      loading: true,
      projects: [],
    };
  },
  mounted() {
    const completeUrl = this.base_URL + this.projects_path;
    axios
      .get(completeUrl)
      .then((response) => {
        this.projects = response.data.projects.data;
        console.log(this.projects);
      })
      .catch((error) => {
        console.error(error);
      });
  },
}
</script>

<template>
    <ProjectCard></ProjectCard>
</template>