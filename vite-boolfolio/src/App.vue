<script>
import axios from "axios";
import ProjectCard from "./components/ProjectCard.vue";

export default {
  name: "App",
  components: {
    ProjectCard,
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
};
</script>

<template>
  <div>
    <div class="container">
      <div class="row">
        <ProjectCard />
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
</style>
