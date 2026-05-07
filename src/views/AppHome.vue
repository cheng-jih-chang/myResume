<!-- File: src/views/AppHome.vue -->
<!-- Author: Cheng -->
<!-- Description: This is the main view of the portfolio website. 
The content is dynamically updated based on the selected language using Vue i18n. -->

<template>
  <div class="container">
    <div class="box">
      <img :src="resumeData.picture" alt="My picture" class="picture-img" />

      <h1 :class="locale === 'en' ? 'name-en' : 'name-zh'">
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
        <h3 class="section-title">{{ $t('Home.skills') }}</h3>
        <ul>
          <li>
            {{ resumeData.skills.technicalSkills.join(', ') }}
          </li>
        </ul>
      </section>

      <section>
        <h3 class="section-title">{{ $t('Home.selfIntroduction') }}</h3>
        <p class="paragraph">{{ resumeData.selfIntro.selfIntroSimple }}</p>
      </section>

      <section>
        <h3 class="section-title">{{ $t('Home.myPortfolio') }}</h3>
        <ul>
          <li v-for="project in homeProjects" :key="project.name">
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
            {{ project.descriptionSimple }}<br /><br />
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
const homeProjects = computed(() =>
  resumeData.value.projects.filter((p) => p.type.includes('Home'))
)
</script>
