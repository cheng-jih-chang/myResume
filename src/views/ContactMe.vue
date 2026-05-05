<!-- File: src/views/Contact.vue -->
<!-- Author: Cheng -->
<!-- Description: This view displays the user's contact information, 
 including phone number, email, and address. -->

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
      <h3 class="section-title">{{ $t('resume.contact') }}</h3>
      <ul class="contact-list">
        <li><Phone size="16" /> {{ resumeData.contact.phone }}</li>
        <li><Mail size="16" /> {{ resumeData.contact.email }}</li>
        <li><MapPin size="16" /> {{ resumeData.contact.address }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import zhresumeData from '../data/resumeData.zh.js'
import enresumeData from '../data/resumeData.en.js'
import { Mail, Phone, MapPin } from 'lucide-vue-next'

import './Views.css'

const { locale } = useI18n()

const resumeData = computed(() =>
  locale.value === 'en' ? enresumeData : zhresumeData
)

const ntu = computed(() =>
  resumeData.value.educationAndWorkExperience.find((item) => item.key === 'ntu')
)
</script>
