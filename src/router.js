// File: src/router.js
// Author: Cheng
// Description:
//    Defines the routing configuration for the Vue.js app.
//    The file contains all route paths and their associated components,
//    which enable navigation within the app using Vue Router.

import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './views/AppHome.vue'
import FrontendSkills from './views/FrontendSkills.vue'
import BackendSkills from './views/BackendSkills.vue'
import PersonalProjects from './views/PersonalProjects.vue'
import GroupProjects from './views/GroupProjects.vue'
import CadBimAutomation from './views/CadBimAutomation.vue'
import RevitAutomationTools from './views/RevitAutomationTools.vue'
import WorkExperience from './views/WorkExperience.vue'
import EducationBackground from './views/EducationBackground.vue'
import ContactMe from './views/ContactMe.vue'

import Resume from './views/Resume.vue'

// Qrcode redirection view (Only show when user scane the QRcode)
import Landing from './views/Landing.vue'

const routes = [
  { path: '/', component: AppHome },
  { path: '/skills/frontend', component: FrontendSkills },
  { path: '/skills/backend', component: BackendSkills },
  { path: '/projects/personal', component: PersonalProjects },
  { path: '/projects/group', component: GroupProjects },
  { path: '/experience/workExperience', component: WorkExperience },
  {
    path: '/cad-bim-automation',
    name: 'CadBimAutomation',
    component: CadBimAutomation,
  },
  {
    path: '/revit-automation-tools',
    name: 'RevitAutomationTools',
    component: RevitAutomationTools,
  },
  { path: '/education/educationBackground', component: EducationBackground },
  { path: '/contact/contactMe', component: ContactMe },
  { path: '/project-link/:id', name: 'Landing', component: Landing },

  { path: '/aboutMe/resume', component: Resume },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
