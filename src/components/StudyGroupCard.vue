<template>
    <div class="card my-card bg-dark text-white card-border-dark">
      <div class="card-header">{{ studyGroup.name }}</div>
      <div class="card-body text-dark text-white mb-2">
        <span
          class="my-span"
          v-for="(student, index) in StudentsStudyGroup"
          :key="student.id">
          {{ student.name }}<span v-if="index < StudentsStudyGroup.length - 1">, </span>
        </span>
      </div>
    </div>
  </template>
   
  <script>
  export default {
    props: [
      "studyGroup",
      "students"
    ],
    computed: {
        StudentsStudyGroup() {
        return this.students
          .filter((t) => t.studyGroupId == this.studyGroup.id)
          .sort((a, b) => a.name.localeCompare(b.name));
      }
    }
  }
  </script>

<style>
</style>