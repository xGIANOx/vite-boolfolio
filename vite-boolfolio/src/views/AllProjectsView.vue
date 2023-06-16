<script>
import ProjectCard from "../components/ProjectCard.vue";
import HeaderComponent from "../components/HeaderComponent.vue";


export default {
    name: "AllProjectsView",
components: {
    ProjectCard,
    HeaderComponent,
    
},
   
}
</script>

<template>
    <HeaderComponent></HeaderComponent>
    <ProjectCard></ProjectCard>
</template>