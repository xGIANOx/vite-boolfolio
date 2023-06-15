<script>
export default {
  name: "AppHeader",
}
</script>

<template>
<header>
  <nav class="navbar navbar-dark bg-black">
    <div class="container">
      <router-link class="text-decoration-none text-white" :to="{ name: 'home' }">
        HOME
      </router-link>
    </div>
  </nav>
</header>
</template>