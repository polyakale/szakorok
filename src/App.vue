<script>
import { RouterLink, RouterView } from "vue-router";
export default {};
</script>


<template>
  <div class="container-fluid my-container">
    <div class="p-2">
      <div class="my-title">
        <h1>StudyGroups</h1>
      </div>
      <nav>
        <RouterLink to="/"></RouterLink>
      </nav>
    </div>

    <div class="p-2">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
