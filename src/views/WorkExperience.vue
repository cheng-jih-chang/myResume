<!-- File: src/views/WorkExperience.vue -->
<!-- Author: Cheng -->
<!-- Description: This view displays the user's work experience. -->
<template>
  <div class="container">
    <div class="box">
      <img :src="resumeData.picture" alt="My picture" class="picture-img" />

      <h1 class="name">{{ resumeData.name }} / {{ resumeData.license }}</h1>
      <h3 :class="locale === 'en' ? 'education-en' : 'education-zh'" v-if="ntu">
        {{ ntu.school }}
        <span v-if="ntu.degree">{{ ntu.degree }}</span>
      </h3>
      <div class="jobApplication-box">
        <h3>{{ resumeData.targetPosition }}</h3>
      </div>
      <section>
        <h3 class="section-title">{{ $t('resume.work') }}</h3>
        <ul class="workDescription">
          <li v-for="work in resumeData.workDetails" :key="work.project">
            <strong>{{ work.project }}</strong
            ><br />
            {{ work.description }}
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
</script>
