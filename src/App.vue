<script setup>
// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <the-header title="Remember Resources"></the-header>
  <the-resource></the-resource>

  <!-- <RouterView /> -->
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue'
import TheResource from './components/learning-resources/TheResource.vue'

export default {
  componentes: {
    'the-header': TheHeader,
    'the-resources': TheResource
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
