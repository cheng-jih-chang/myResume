<!-- File: src/views/FrontendSkills.vue -->
<!-- Author: Cheng -->
<!-- Description: This view displays the user's frontend development projects. -->

<template>
  <div class="container">
    <div class="box">
      <img :src="resumeData.picture" alt="My picture" class="picture-img" />

      <h1 class="name">
        {{ resumeData.name }}
      </h1>
      <h3 :class="locale === 'en' ? 'education-en' : 'education-zh'" v-if="ntu">
        {{ ntu.school }}
        <span v-if="ntu.degree">{{ ntu.degree }}</span>
      </h3>
      <div class="jobApplication-box">
        <h3>{{ resumeData.targetPosition }}</h3>
      </div>
      <section>
        <h3 class="section-title">{{ $t('FontendSkill') }}</h3>
        <ul>
          <li v-for="project in frontProjects" :key="project.name">
            <template v-if="project.url.startsWith('/')">
              <router-link :to="project.url">
                <strong>{{ project.name }}</strong>
              </router-link>
            </template>
            <template v-else>
              <a :href="project.url" target="_blank" rel="noopener noreferrer">
                <strong>{{ project.name }}</strong>
              </a>
            </template>
            <br />
            {{ project.descriptionComplete }}<br />
            <a
              v-if="project.githubLink"
              :href="project.githubLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>{{ $t('githubLink') }}</div>
              <br />
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import zhresumeData from '../data/resumeData.zh.js'
import enresumeData from '../data/resumeData.en.js'

import './Views.css'

const { locale } = useI18n()

const resumeData = computed(() =>
  locale.value === 'en' ? enresumeData : zhresumeData
)

const ntu = computed(() =>
  resumeData.value.educationAndWorkExperience.find((item) => item.key === 'ntu')
)
const frontProjects = computed(() =>
  resumeData.value.projects.filter((p) => p.type.includes('front'))
)
</script>
