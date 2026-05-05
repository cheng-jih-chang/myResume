<!-- File: src/views/PersonalProjects.vue -->
<!-- Author: Cheng -->
<!-- Description: This view showcases all of the user's personal projects. -->

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
        <h3>{{ resumeData.jobApplication }}</h3>
      </div>

      <section>
        <h3 class="section-title">{{ $t('Home.myPortfolio') }}</h3>
        <ul class="scroll-window">
          <li
            class="project-box"
            v-for="project in AllProjects"
            :key="project.name"
          >
            <div class="project-left">
              <a :href="project.url" target="_blank" rel="noopener noreferrer">
                <strong>{{ project.name }}</strong> </a
              ><br />
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
            </div>

            <!-- YT iframe -->
            <div v-if="showQRCode" class="project-right qr-box">
              <img
                v-if="qrMap[project.slug]"
                :src="qrMap[project.slug]"
                alt="QR Code"
                class="qr-code"
              />
              <div v-else class="qr-warning">No QR code available</div>
            </div>
            <iframe
              v-else-if="project.youtubeLink"
              width="180"
              height="130"
              :src="project.youtubeLink"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import zhresumeData from '../data/resumeData.zh.js'
import enresumeData from '../data/resumeData.en.js'
import qrMap from '../data/qrMap.js'

import './Views.css'

const { locale } = useI18n()

const resumeData = computed(() =>
  locale.value === 'en' ? enresumeData : zhresumeData
)

const showQRCode = inject('showQRCode')

const ntu = computed(() =>
  resumeData.value.education.find((item) => item.key === 'ntu')
)

const AllProjects = computed(() => {
  const filtered = resumeData.value.projects.filter((p) =>
    p.type.includes('project')
  )
  if (showQRCode.value) {
    for (const project of filtered) {
      console.log(project.slug, qrMap[project.slug])
      console.log('QR MAP Keys:', Object.keys(qrMap))
    }
  }
  return filtered
})
</script>
