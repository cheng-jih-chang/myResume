// File : src/topbar/SharedMenus.js
// Author: Cheng
// Description: This file contains the configuration for the shared menu items
// in the application, including links to different sections.

const sharedMenus = [
  {
    type: 'logo',
    id: 'logo',
    href: '/',
  },
  {
    labelKey: 'menu.about',
    aria: 'About Me section',
    id: 'aboutMenu',
    items: [
      //{ key: 'submenu.profile', type: 'route', route: 'aboutMe/resume' },
      //{ key: '土木工程', type: 'route', route: 'aboutMe/civil_resume' },
      {
        key: 'submenu.profile',
        type: 'route',
        route: 'aboutMe/bim_engineer_resume',
      },
    ],
    hidePriority: 1,
  },
  {
    labelKey: 'menu.experience',
    aria: 'Work Experience section',
    id: 'experienceMenu',
    items: [
      {
        key: 'submenu.jobs',
        type: 'route',
        route: 'experience/workExperience',
      },
    ],
    hidePriority: 2,
  },
  {
    labelKey: 'menu.education',
    aria: 'Education section',
    id: 'educationMenu',
    items: [
      {
        key: 'submenu.schooling',
        type: 'route',
        route: 'education/educationBackground',
      },
    ],
    hidePriority: 3,
  },
  {
    labelKey: 'menu.skills',
    aria: 'Skills section',
    id: 'skillsMenu',
    items: [
      { key: 'submenu.frontend', type: 'route', route: 'skills/frontend' },
      { key: 'submenu.backend', type: 'route', route: 'skills/backend' },
    ],
    hidePriority: 4,
  },
  {
    labelKey: 'menu.projects',
    aria: 'Projects section',
    id: 'projectsMenu',
    items: [
      {
        key: 'submenu.personalProjects',
        type: 'route',
        route: 'projects/personal',
      },
      {
        key: 'submenu.groupProjects',
        type: 'route',
        route: 'projects/group',
      },
    ],
    hidePriority: 5,
  },
  {
    labelKey: 'menu.contact',
    aria: 'Contact section',
    id: 'contactMenu',
    items: [
      { key: 'submenu.contactForm', type: 'route', route: 'contact/contactMe' },
    ],
    hidePriority: 6,
  },
  {
    labelKey: 'menu.settings',
    aria: 'Settings',
    id: 'settingsMenu',
    items: [
      { key: 'submenu.language', type: 'language' },
      { key: 'submenu.download', type: 'download' },
    ],
    hidePriority: 10,
  },
]

export default sharedMenus
