<script>
import { RouterLink, RouterView } from "vue-router";
export default {};
</script>


<template>
  <div class="container-fluid my-container">
    <div class="my-border p-2">
      <h1>StudyGroups</h1>
      <nav>
        <RouterLink to="/"></RouterLink>
      </nav>
    </div>

    <div class="my-border p-2">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
