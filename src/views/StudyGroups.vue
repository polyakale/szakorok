<template>
  <h1>Study Groups</h1>

  <div class="row col-6 table-decor">
    <table class="table">
      <tr>
        <th>Name</th>
        <th>Class</th>
        <th>Study Group</th>
      </tr>
      <tr v-for="(student, i) in students" :key="i">
        <td>{{ student.name }}</td>
        <td>{{ student.class }}</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [
        { id: 1, name: "Tom Stephen", class: "1a", studyGroupId: 1 },
        { id: 2, name: "Alice Johnson", class: "2b", studyGroupId: 2 },
        { id: 3, name: "Bob Smith", class: "3c", studyGroupId: 3 },
        { id: 4, name: "Carol White", class: "4d", studyGroupId: 4 },
        { id: 5, name: "David Brown", class: "5a", studyGroupId: 1 },
        { id: 6, name: "Eve Black", class: "6b", studyGroupId: 2 },
        { id: 7, name: "Frank Green", class: "7c", studyGroupId: 3 },
        { id: 8, name: "Grace Blue", class: "8d", studyGroupId: 4 },
        { id: 9, name: "Hank Red", class: "9a", studyGroupId: 1 },
        { id: 10, name: "Ivy Yellow", class: "10b", studyGroupId: 2 },
        { id: 11, name: "Jack Purple", class: "11c", studyGroupId: 3 },
        { id: 12, name: "Kara Orange", class: "12d", studyGroupId: 4 },
        { id: 13, name: "Leo Pink", class: "13a", studyGroupId: 1 },
        { id: 14, name: "Mia Gray", class: "1b", studyGroupId: 2 },
        { id: 15, name: "Nina Silver", class: "2c", studyGroupId: 3 },
        { id: 16, name: "Oscar Gold", class: "3d", studyGroupId: 4 },
        { id: 17, name: "Paul Violet", class: "4a", studyGroupId: 1 },
        { id: 18, name: "Quinn Cyan", class: "5b", studyGroupId: 2 },
        { id: 19, name: "Rita Magenta", class: "6c", studyGroupId: 3 },
        { id: 20, name: "Sam Indigo", class: "7d", studyGroupId: 4 },
        { id: 21, name: "Tina Teal", class: "8a", studyGroupId: 1 },
        { id: 22, name: "Uma Maroon", class: "9b", studyGroupId: 2 },
        { id: 23, name: "Vince Olive", class: "10c", studyGroupId: 3 },
        { id: 24, name: "Wendy Lime", class: "11d", studyGroupId: 4 },
        { id: 25, name: "Xander Peach", class: "12a", studyGroupId: 1 },
        { id: 26, name: "Yara Mint", class: "13b", studyGroupId: 2 },
        { id: 27, name: "Zane Coral", class: "1c", studyGroupId: 3 },
        { id: 28, name: "Amy Lavender", class: "2d", studyGroupId: 4 },
        { id: 29, name: "Ben Plum", class: "3a", studyGroupId: 1 },
        { id: 30, name: "Cathy Rose", class: "4b", studyGroupId: 2 },
        { id: 31, name: "Dan Sage", class: "5c", studyGroupId: 3 },
        { id: 32, name: "Ella Jade", class: "6d", studyGroupId: 4 },
        { id: 33, name: "Finn Ruby", class: "7a", studyGroupId: 1 },
        { id: 34, name: "Gina Amber", class: "8b", studyGroupId: 2 },
        { id: 35, name: "Hugo Pearl", class: "9c", studyGroupId: 3 },
        { id: 36, name: "Iris Onyx", class: "10d", studyGroupId: 4 },
        { id: 37, name: "Jake Quartz", class: "11a", studyGroupId: 1 },
        { id: 38, name: "Kara Topaz", class: "12b", studyGroupId: 2 },
        { id: 39, name: "Liam Opal", class: "13c", studyGroupId: 3 },
        { id: 40, name: "Mona Garnet", class: "1d", studyGroupId: 4 },
        { id: 41, name: "Nate Sapphire", class: "2a", studyGroupId: 1 },
        { id: 42, name: "Olivia Emerald", class: "3b", studyGroupId: 2 },
        { id: 43, name: "Pete Diamond", class: "4c", studyGroupId: 3 },
        { id: 44, name: "Quinn Amethyst", class: "5d", studyGroupId: 4 },
        { id: 45, name: "Rita Citrine", class: "6a", studyGroupId: 1 },
        { id: 46, name: "Sam Jasper", class: "7b", studyGroupId: 2 },
        { id: 47, name: "Tina Turquoise", class: "8c", studyGroupId: 3 },
        { id: 48, name: "Uma Coral", class: "9d", studyGroupId: 4 },
        { id: 49, name: "Vince Peridot", class: "10a", studyGroupId: 1 },
        { id: 50, name: "Wendy Moonstone", class: "11b", studyGroupId: 2 },
        { id: 51, name: "Xander Sunstone", class: "12c", studyGroupId: 3 },
        { id: 52, name: "Yara Bloodstone", class: "13d", studyGroupId: 4 },
        { id: 53, name: "Zane Agate", class: "1a", studyGroupId: 1 },
        { id: 54, name: "Amy Beryl", class: "2b", studyGroupId: 2 },
        { id: 55, name: "Ben Carnelian", class: "3c", studyGroupId: 3 },
        { id: 56, name: "Cathy Chalcedony", class: "4d", studyGroupId: 4 },
        { id: 57, name: "Dan Chrysoprase", class: "5a", studyGroupId: 1 },
        { id: 58, name: "Ella Citrine", class: "6b", studyGroupId: 2 },
        { id: 59, name: "Finn Fluorite", class: "7c", studyGroupId: 3 },
        { id: 60, name: "Gina Garnet", class: "8d", studyGroupId: 4 },
        { id: 61, name: "Hugo Hematite", class: "9a", studyGroupId: 1 },
        { id: 62, name: "Iris Iolite", class: "10b", studyGroupId: 2 },
        { id: 63, name: "Jake Jade", class: "11c", studyGroupId: 3 },
        { id: 64, name: "Kara Kyanite", class: "12d", studyGroupId: 4 },
        { id: 65, name: "Liam Labradorite", class: "13a", studyGroupId: 1 },
        { id: 66, name: "Mona Lapis", class: "1b", studyGroupId: 2 },
        { id: 67, name: "Nate Malachite", class: "2c", studyGroupId: 3 },
        { id: 68, name: "Olivia Moonstone", class: "3d", studyGroupId: 4 },
        { id: 69, name: "Pete Obsidian", class: "4a", studyGroupId: 1 },
      ],
      studyGroups: [
        {
          id: 1,
          name: "Robotics",
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
          name: "Does not attend a study group",
        },
      ],
      selectedStudent: null,
      selectedStudyGroup: null,
    };
  },
};
</script>

<style>
.table-decor {
  max-width: 100%;
  max-height: 400px;
  overflow-y: auto;
}
</style>