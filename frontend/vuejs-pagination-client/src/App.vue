<template>
  <div class="container mt-4">
    <h1>VueJs Pagination Client</h1>
    <Articles />
  </div>
</template>

<script>
import Articles from "./components/Articles.vue";

export default {
  name: "App",

  components: {
    Articles
  }
};
</script>

<style>
</style>
