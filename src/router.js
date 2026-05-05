// File: src/router.js
// Author: Cheng
// Description:
//    Defines the routing configuration for the Vue.js app.
//    The file contains all route paths and their associated components,
//    which enable navigation within the app using Vue Router.

import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './views/AppHome.vue'
import Resume from './views/Resume.vue'
import FrontendSkills from './views/FrontendSkills.vue'
import BackendSkills from './views/BackendSkills.vue'
import PersonalProjects from './views/PersonalProjects.vue'
import GroupProjects from './views/GroupProjects.vue'
import WorkExperience from './views/WorkExperience.vue'
import EducationBackground from './views/EducationBackground.vue'
import ContactMe from './views/ContactMe.vue'

import Civil_Resume from './views/Civil_Resume.vue'
import BIM_Engineer_Resume from './views/BIM_Engineer_Resume.vue'

// Qrcode redirection view (Only show when user scane the QRcode)
import Landing from './views/Landing.vue'

const routes = [
  { path: '/', component: AppHome },
  { path: '/aboutMe/resume', component: Resume },
  { path: '/skills/frontend', component: FrontendSkills },
  { path: '/skills/backend', component: BackendSkills },
  { path: '/projects/personal', component: PersonalProjects },
  { path: '/projects/group', component: GroupProjects },
  { path: '/experience/workExperience', component: WorkExperience },
  { path: '/education/educationBackground', component: EducationBackground },
  { path: '/contact/contactMe', component: ContactMe },
  { path: '/project-link/:id', name: 'Landing', component: Landing },

  { path: '/aboutMe/civil_resume', component: Civil_Resume },
  { path: '/aboutMe/bim_engineer_resume', component: BIM_Engineer_Resume },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
