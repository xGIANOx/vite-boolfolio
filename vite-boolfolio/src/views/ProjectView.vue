<script>
import axios from "axios";
export default {
    name: "ProjectView",
    components: {
},
    data() {
    return {
      base_URL: "http://127.0.0.1:8000/",
      projects_path: "api/projects",
      loading: true,
      project: [],
    };
  },
  mounted() {
    axios
      .get(this.base_URL + this.projects_path + '/' + this.$route.params.title)
      .then((response) => {
        this.project = response.data.project;
        console.log(this.project);
      })
      .catch((error) => {
        console.error(error);
      });
  },
}
</script>


    

 <template>
  <div class="container py-5" v-if="project">
    <h1 class="text-center">{{ project.title }}</h1>
  </div>
</template>
    

