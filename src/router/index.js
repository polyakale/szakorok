import { createRouter, createWebHistory } from 'vue-router'
import StudyGroups from '../views/StudyGroups.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'studygroups',
      component: StudyGroups
    },
  ]
})

export default router
