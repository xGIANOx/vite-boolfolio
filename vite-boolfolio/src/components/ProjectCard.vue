<script>
import axios from "axios";

  export default {
    name: "ProjectCard",
    // props: {
    //   project: {
    //     type: Object,
    //   },
    // },
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
  
  <style scoped lang="scss">
  </style>


<template>

<header>



</header>

    <div>
      <div class="container">
        <div class="row">
          <div class="col g-4" v-for="project in projects" :key="project.id">
            <div class="card h-100">
              <div class="card-header h-100">
                {{ project.title }}
              </div>
              <img class="w-100" :src="project.img" :alt="project.title">
              <div class="card-footer">
                <router-link class="text-decoration-none" :to="{ name: 'project-view', params: {title: project.title}}">VIEW PROJECT</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>



