<template>
  <div class="row justify-content-center">
    <div class="col-6 d-flex p-2 table-decor">
      <table>
        <thead class="my-table-header">
          <tr>
            <th class="th-decor" scope="col">Name</th>
            <th class="th-decor" scope="col">Class</th>
            <th class="th-decor" scope="col">Study Group</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, i) in students" :key="i">
            <td class="td-decor">{{ student.name }}</td>
            <td class="td-decor">{{ student.class }}</td>
            <td class="td-decor">
              <select
                class="form-select"
                aria-label="Default select example"
                v-model="student.studyGroupId"
              >
                <option
                  v-for="(studyGroup, i) in studyGroups"
                  :key="i"
                  :value="studyGroup.id"
                >
                  {{ studyGroup.name }}
                </option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-6">
      <StudyGroupCard
      v-for="studyGroup in studyGroups" :key="studyGroup.id"
      :studyGroup="studyGroup"
      :students="students"
      />
    </div>
  </div>
</template>

<script>
import StudyGroupCard from '../components/StudyGroupCard.vue';
export default {

  data() {
    return {
      students: [
        { id: 1, name: "Tom Stephen", class: "3a", studyGroupId: 1 },
        { id: 2, name: "Sara Johnson", class: "1b", studyGroupId: 1 },
        { id: 3, name: "Mike Brown", class: "5c", studyGroupId: 1 },
        { id: 4, name: "Lisa White", class: "2d", studyGroupId: 1 },
        { id: 5, name: "James Smith", class: "7a", studyGroupId: 1 },
        { id: 6, name: "Emma Davis", class: "12b", studyGroupId: 1 },
        { id: 7, name: "David Wilson", class: "6c", studyGroupId: 1 },
        { id: 8, name: "Olivia Taylor", class: "11d", studyGroupId: 1 },
        { id: 9, name: "Sophia Martinez", class: "4a", studyGroupId: 1 },
        { id: 10, name: "Daniel Anderson", class: "9b", studyGroupId: 1 },
        { id: 11, name: "Emily Thomas", class: "1c", studyGroupId: 1 },
        { id: 12, name: "Jacob Jackson", class: "3d", studyGroupId: 1 },
        { id: 13, name: "Ava White", class: "8a", studyGroupId: 1 },
        { id: 14, name: "Isabella Harris", class: "2b", studyGroupId: 1 },
        { id: 15, name: "Mason Clark", class: "10c", studyGroupId: 1 },
        { id: 16, name: "Liam Lewis", class: "4d", studyGroupId: 1 },
        { id: 17, name: "Charlotte Lee", class: "7b", studyGroupId: 1 },
        { id: 18, name: "Noah Hall", class: "5a", studyGroupId: 1 },
        { id: 19, name: "Lucas Allen", class: "12c", studyGroupId: 1 },
        { id: 20, name: "Mia Young", class: "9d", studyGroupId: 1 },
        { id: 21, name: "Ella King", class: "10a", studyGroupId: 1 },
        { id: 22, name: "Aiden Wright", class: "11b", studyGroupId: 1 },
        { id: 23, name: "Sofia Scott", class: "6c", studyGroupId: 1 },
        { id: 24, name: "Jack Green", class: "3a", studyGroupId: 1 },
        { id: 25, name: "Grace Adams", class: "4b", studyGroupId: 1 },
        { id: 26, name: "Benjamin Baker", class: "5d", studyGroupId: 1 },
        { id: 27, name: "Chloe Nelson", class: "8c", studyGroupId: 1 },
        { id: 28, name: "Ethan Carter", class: "6a", studyGroupId: 1 },
        { id: 29, name: "Zoe Mitchell", class: "1b", studyGroupId: 1 },
        { id: 30, name: "Alexander Perez", class: "2d", studyGroupId: 1 },
        { id: 31, name: "Lily Roberts", class: "7c", studyGroupId: 1 },
        { id: 32, name: "Logan Turner", class: "3b", studyGroupId: 1 },
        { id: 33, name: "Avery Phillips", class: "4a", studyGroupId: 1 },
        { id: 34, name: "William Campbell", class: "10b", studyGroupId: 1 },
        { id: 35, name: "Abigail Parker", class: "9c", studyGroupId: 1 },
        { id: 36, name: "James Edwards", class: "11d", studyGroupId: 1 },
        { id: 37, name: "Ella Collins", class: "12a", studyGroupId: 1 },
        { id: 38, name: "Samuel Stewart", class: "5b", studyGroupId: 1 },
        { id: 39, name: "Harper Sanchez", class: "8d", studyGroupId: 1 },
        { id: 40, name: "Oliver Rivera", class: "6c", studyGroupId: 1 },
        { id: 41, name: "Luna Cooper", class: "1a", studyGroupId: 1 },
        { id: 42, name: "Henry Rogers", class: "3c", studyGroupId: 1 },
        { id: 43, name: "Scarlett Reed", class: "2b", studyGroupId: 1 },
        { id: 44, name: "Sebastian Cook", class: "4d", studyGroupId: 1 },
        { id: 45, name: "Aiden Bailey", class: "5a", studyGroupId: 1 },
        { id: 46, name: "Nora Rivera", class: "10c", studyGroupId: 1 },
        { id: 47, name: "Isaac Bell", class: "11a", studyGroupId: 1 },
        { id: 48, name: "Violet Murphy", class: "12b", studyGroupId: 1 },
        { id: 49, name: "Grayson Wood", class: "7d", studyGroupId: 1 },
        { id: 50, name: "Aria Hughes", class: "2c", studyGroupId: 1 },
        { id: 51, name: "David Martinez", class: "6a", studyGroupId: 1 },
        { id: 52, name: "Madison Foster", class: "3b", studyGroupId: 1 },
        { id: 53, name: "Nicholas Kelly", class: "4c", studyGroupId: 1 },
        { id: 54, name: "Hannah Price", class: "8a", studyGroupId: 1 },
        { id: 55, name: "Zachary Sanders", class: "1d", studyGroupId: 1 },
        { id: 56, name: "Ella Ward", class: "5b", studyGroupId: 1},
        { id: 57, name: "Aaron Bennett", class: "10d", studyGroupId: 1 },
        { id: 58, name: "Nina Rivera", class: "11c", studyGroupId: 1 },
        { id: 59, name: "Oliver Gray", class: "2a", studyGroupId: 1 },
        { id: 60, name: "Zoe Black", class: "4b", studyGroupId: 1 },
        { id: 61, name: "Ella White", class: "1c", studyGroupId: 1 },
        { id: 62, name: "Max Green", class: "12d", studyGroupId: 1 },
        { id: 63, name: "Anna Blue", class: "3a", studyGroupId: 1 },
        { id: 64, name: "Ben Red", class: "6b", studyGroupId: 1 },
        { id: 65, name: "Leah Brown", class: "5c", studyGroupId: 1 },
        { id: 66, name: "James Black", class: "7d", studyGroupId: 1 },
        { id: 67, name: "Sophie Green", class: "10a", studyGroupId: 1 },
        { id: 68, name: "Lucas Blue", class: "9b", studyGroupId: 1 },
        { id: 69, name: "Daniel Yellow", class: "11d", studyGroupId: 1 },
        { id: 70, name: "Mia Pink", class: "3c", studyGroupId: 1 },
        { id: 71, name: "Liam Purple", class: "5a", studyGroupId: 1 },
        { id: 72, name: "Ava Orange", class: "12b", studyGroupId: 1 },
        { id: 73, name: "Emily Violet", class: "8c", studyGroupId: 1 },
        { id: 74, name: "Jack Indigo", class: "2d", studyGroupId: 1 },
        { id: 75, name: "Sophia Grey", class: "6a", studyGroupId: 1 },
        { id: 76, name: "Daniel Brown", class: "1a", studyGroupId: 1 },
        { id: 77, name: "Grace Smith", class: "9c", studyGroupId: 1 },
        { id: 78, name: "Zara King", class: "10d", studyGroupId: 1 },
        { id: 79, name: "Sam Taylor", class: "4a", studyGroupId: 1 },
        { id: 80, name: "Ella Wilson", class: "12c", studyGroupId: 1 },
        { id: 81, name: "Jaxon Garcia", class: "2b", studyGroupId: 1 },
        { id: 82, name: "Charlotte Martinez", class: "7c", studyGroupId: 1 },
        { id: 83, name: "Leo Thomas", class: "8d", studyGroupId: 1 },
        { id: 84, name: "Savannah Robinson", class: "11a", studyGroupId: 1 },
        { id: 85, name: "Owen Lee", class: "5b", studyGroupId: 1 },
        { id: 86, name: "Chloe Hall", class: "9d", studyGroupId: 1 },
        { id: 87, name: "Mila Scott", class: "4c", studyGroupId: 1 },
        { id: 88, name: "Henry Evans", class: "3a", studyGroupId: 1 },
        { id: 89, name: "Layla Young", class: "6d", studyGroupId: 1 },
        { id: 90, name: "Mason Torres", class: "1c", studyGroupId: 1 },
        { id: 91, name: "Ella Garcia", class: "5a", studyGroupId: 1 },
        { id: 92, name: "Sebastian Martinez", class: "2b", studyGroupId: 1 },
        { id: 93, name: "Aria Gonzalez", class: "12d", studyGroupId: 1 },
        { id: 94, name: "Isaac Moore", class: "4b", studyGroupId: 1 },
        { id: 95, name: "Ava Ramirez", class: "3c", studyGroupId: 1 },
        { id: 96, name: "Daniel Nguyen", class: "7d", studyGroupId: 1 },
        { id: 97, name: "Ella Patel", class: "8a", studyGroupId: 1 },
        { id: 98, name: "Lucas Lee", class: "11b", studyGroupId: 1 },
        { id: 99, name: "Sophia Walker", class: "1d", studyGroupId: 1 },
        { id: 100, name: "Aiden Turner", class: "10c", studyGroupId: 1 },
      ],
      studyGroups: [
        {
          id: 1,
          name: "No study group",
        },
        {
          id: 2,
          name: "Reading",
        },
        {
          id: 3,
          name: "Data Science",
        },
        {
          id: 4,
          name: "Soccer",
        },
        {
          id: 5,
          name: "Robotics",
        },
      ],
    };
  },
  components: {
    StudyGroupCard
  },
};
</script>

<style>
</style>