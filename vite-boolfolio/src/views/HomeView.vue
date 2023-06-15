<script>
import ProjectCard from "../components/ProjectCard.vue";
import axios from "axios";
export default {
    name: "HomeView",
components: {
    ProjectCard,
},
   
}
</script>

<template>
    <h1>YOU ARE IN THE HOME PAGE</h1>
    <ProjectCard></ProjectCard>
</template>