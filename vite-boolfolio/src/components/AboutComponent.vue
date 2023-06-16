<script>
import ExpandingComponent from "./ExpandingComponent.vue"

  export default {
    
    name: "AboutComponent",
    components:{
    ExpandingComponent
    },
    
  
    data() {
      return {
        current: 0,
        roles: [
          "a web developer.",
          "an aspiring individual.",
          "a student.",
          "creativity."
        ]
      };
    },
    mounted() {
      setInterval(this.changeRole, 3000);
    },
    methods: {
      changeRole() {
        this.current = (this.current + 1) % this.roles.length;
      }
    }
  };
  </script>


<template>
    <div class="container_my d-flex  flex-column align-items-center">

        <div class="wrapper">
      <transition name="fade" mode="out-in">
        <div class="role" :key="current">
         I am {{ roles[current] }}
        </div>
      </transition>
    </div>
    <ExpandingComponent></ExpandingComponent>

    </div>
  </template>
  
  <style scoped>
  .conatiner_my{
    height: 600px !important;
  }
  .wrapper {
    padding: 100px;
    width: 100%;
    display: block;
    text-align: center;
    margin: 0 auto;
  }
  
  .role {
    font-size: 3rem;
    color: black;
    height: 50px;
    transition: opacity 0.5s;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  