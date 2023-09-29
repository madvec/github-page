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
  <stored-resources :resources="storedResources"></stored-resources>

  <!-- <RouterView /> -->
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue';
import TheHeader from './components/layouts/TheHeader.vue';
export default {
  componentes: {
    'stored-resources': StoredResources,
    'the-header': TheHeader
  },
  data() {
    return {
      storedResources: [
        {
          id: 'id-1',
          title: 'Official Vue Guide',
          description: 'This is the official guide.',
          link: 'https://vuejs.org'
        },
        {
          id: 'id-2',
          title: 'Google',
          description: 'Just learn to Google',
          link: 'https://google.org'
        }
      ]
    }
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