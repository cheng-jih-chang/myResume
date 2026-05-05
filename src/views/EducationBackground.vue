<!-- File: src/views/EducationBackground.vue -->
<!-- Author: Cheng -->
<!-- Description: This view displays the user's education background, 
 including schools attended, degrees earned, study/work experience, research publications, and thesis. -->

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
        <h3 class="section-title">{{ $t('resume.StudyWorkExperience') }}</h3>
        <ul>
          <li v-for="item in resumeData.educationAndWorkExperience" :key="item.school">
            {{ item.school }}
            <span v-if="item.degree"
              >{{ item.degree }}（{{ item.duration }}）</span
            >
            <span v-else>（{{ item.duration }}）</span><br /><br />
          </li>
        </ul>

        <h3 class="section-title">{{ $t('resume.thesis') }}</h3>
        <ul>
          <li
            v-if="
              resumeData.research.publish && resumeData.research.publish.url
            "
          >
            <a
              :href="resumeData.research.publish.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ resumeData.research.publish.title }}
            </a>
          </li>
          <li v-else>
            {{
              resumeData.research.publish.title || resumeData.research.publish
            }}
          </li>
          <br />
          <li
            v-if="resumeData.research.thesis && resumeData.research.thesis.url"
          >
            <a
              :href="resumeData.research.thesis.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ resumeData.research.thesis.title }}
            </a>
          </li>
          <li v-else>
            {{
              resumeData.research.thesis.title ||
              resumeData.research.pubthesisish
            }}
          </li>
          <br />
          <li>{{ resumeData.research.tools.join('、') }}</li>
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
