<script>
export default {
  name: "AppHeader",
}
</script>

<template>
<header>
  <nav class="navbar navbar-expand-md navbar-dark bg-black">
    <div class="container">
      <router-link class="text-decoration-none" :to="{ name: 'home' }">
        HOME
      </router-link>
      <router-link class="text-decoration-none" :to="{ name: 'project-view' }">
        PROJECTS
      </router-link>
    </div>
  </nav>
</header>
</template>