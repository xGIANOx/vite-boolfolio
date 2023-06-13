<script>
import axios from "axios"
  
export default{
  name: "App",
  data(){
    return{
      base_URL: 'http://127.0.0.1:8000/',
      projects_path: 'api/projects',
      loading: true,
      projects: [],
    }
  },
  methods:{
    // getProjects(url){
    //   axios
    //   .get(url)
    //   .then(response => {
    //     this.projects= response.data;
    //     console.log(this.projects)
    //   })
    // }
  },
  mounted(){
    const completeUrl = this.base_URL + this.projects_path;
        axios.get(completeUrl)
        .then(response => {
            this.projects = response.data.projects.data;
            console.log(this.projects);
        })
        .catch(error => {
            console.error(error);
        })
  }
}
      
</script>

<template>
  <div>
   
    <div class="container">
      <div class="row">
        <div class="col g-4" v-for="project in projects">
          <div class="card h-100">
            <div class="card-header h-100">
              {{ project.title }}
            </div>
            <img class="w-100" :src="project.img" :alt="project.title">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">

</style>
