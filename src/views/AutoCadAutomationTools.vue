<!-- File: src/views/AutoCadAutomationTools.vue -->
<!-- Author: Cheng -->
<!-- Description: AutoCAD automation tools portfolio page -->

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
        <h3 class="section-title">{{ pageData.pageTitle }}</h3>

        <div
          v-for="(section, index) in sections"
          :key="section.projectTitle"
          class="automation-section"
        >
          <ul class="scroll-window">
            <li class="project-box" :class="{ 'project-box--no-video': !section.youtubeLink }">
              <div class="project-left">
                <strong>{{ section.projectTitle }}</strong
                ><br />
                {{ section.subtitle }}<br /><br />
                <span
                  v-for="(paragraph, pIndex) in section.descriptionParagraphs"
                  :key="pIndex"
                >
                  {{ paragraph }}<br /><br />
                </span>
              </div>

              <iframe
                v-if="section.youtubeLink"
                width="180"
                height="130"
                :src="section.youtubeLink"
                frameborder="0"
                :title="iframeTitles[index] ?? `${section.projectTitle} Project Demo`"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import zhresumeData from '../data/resumeData.zh.js'
import enresumeData from '../data/resumeData.en.js'
import zhAutoCadData from '../data/autoCadAutomationTools.zh.js'
import enAutoCadData from '../data/autoCadAutomationTools.en.js'

import './Views.css'

const { locale } = useI18n()

const resumeData = computed(() =>
  locale.value === 'en' ? enresumeData : zhresumeData
)

const pageData = computed(() =>
  locale.value === 'en' ? enAutoCadData : zhAutoCadData
)

const sections = computed(() => {
  const data = pageData.value
  if (data.sections) return data.sections
  return [data]
})

const iframeTitles = [
  'Batch Block Export Demo',
  'Similar Symbol Processing Demo',
  'Automatic Pipe Size Recognition Demo',
  'Automatic Legend Block Builder Demo',
]

const ntu = computed(() =>
  resumeData.value.educationAndWorkExperience.find((item) => item.key === 'ntu')
)
</script>

<style scoped>
.automation-section + .automation-section {
  margin-top: 1.25rem;
}

.project-box--no-video .project-left {
  flex: 1 1 100%;
}
</style>
