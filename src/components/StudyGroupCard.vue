<!-- <template>
  <div class="card my-card">
    <div class="card-title">{{ studyGroups.name }}</div>
    <span v-for="(student,i) in StudentsStudyGroups" :key="i">{{ student.name }}</span>
  </div>
</template>

<script>
export default {
  props: ["students", "studyGroups"],
  computed: {
    StudentsStudyGroups() {
        return this.students.filter((o) => o.studyGroupId == this.studyGroups.id)
        .sort((a,b) => a.name.localeCompare(b.name));
    }
  },
};
</script> -->
<template>
    <div class="card my-card card-border-dark">
      <div class="card-header">{{ studyGroup.name }}</div>
      <div class="card-body text-dark mb-2">
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