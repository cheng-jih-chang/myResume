<!-- File: src/views/Resume.vue -->
<!-- Author: Cheng -->
<!-- Description: This view displays the user's complete resume. -->
<template>
  <div class="container">
    <div class="box-left">
      <img :src="resumeData.picture" alt="My picture" class="picture-img" />

      <h1 :class="locale === 'en' ? 'name-en' : 'name-zh'">
        {{ resumeData.name }}
      </h1>
      <h1>{{ resumeData.License }}</h1>

      <h3 class="section-title">{{ $t('resume.contact') }}</h3>
      <ul class="contact-list">
        <li><Phone size="16" /> {{ resumeData.contact.phone }}</li>
        <li><Mail size="16" /> {{ resumeData.contact.email }}</li>
        <li><MapPin size="16" /> {{ resumeData.contact.address }}</li>
      </ul>

      <h3 class="section-title">{{ $t('resume.skills') }}</h3>

      <ul class="contact-list">
        <li>
          <strong>{{ $t('resume.skillsFields.computer') }}:</strong><br />
          {{ resumeData.BIM_engineer_resume.progarmming.join(', ') }}
        </li>
        <br />
        <li>
          <strong>{{ $t('resume.languages') }}:</strong>
          <br />
          {{ resumeData.BIM_engineer_resume.languages.join(', ') }}
        </li>
        <br />
        <li>
          <strong>{{ $t('resume.softskills') }}:</strong>
          <br />
          {{ resumeData.BIM_engineer_resume.softskills.join(', ') }}
        </li>
      </ul>
    </div>

    <div class="right-view">
      <div class="jobApplication-right-box">
        <h3>{{ resumeData.BIM_engineer_resume.jobApplication }}</h3>
      </div>
      <section>
        <h3>{{ $t('resume.StudyWorkExperience') }}</h3>
        <ul>
          <li v-for="item in resumeData.education" :key="item.school">
            {{ item.school }}
            <span v-if="item.degree"
              >{{ item.degree }}（{{ item.duration }}）</span
            >
            <span v-else>（{{ item.duration }}）</span>
          </li>
        </ul>
      </section>

      <section>
        <h3>{{ $t('resume.participateProject') }}</h3>
        <ul>
          <li
            v-for="work in resumeData.BIM_engineer_resume.workDetails"
            :key="work.project"
          >
            <strong>{{ work.project }}</strong
            ><br />
            {{ work.description }}
          </li>
        </ul>
      </section>

      <section>
        <h3>{{ $t('resume.thesis') }}</h3>
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
          <li>{{ resumeData.research.tools.join('、') }}</li>
        </ul>
      </section>

      <section>
        <h3>{{ $t('resume.experience') }}</h3>
        <ul>
          <li v-for="exp in resumeData.experiences" :key="exp.title">
            <strong>{{ exp.title }}</strong
            >（{{ exp.duration }}）<br />
            {{ exp.description }}
          </li>
        </ul>
      </section>

      <section>
        <h3>{{ $t('Home.selfIntroduction') }}</h3>
        <p class="paragraph">
          {{ resumeData.BIM_engineer_resume.selfIntro }}
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import zhResume from '../data/resumeData.zh.js'
import enResume from '../data/resumeData.en.js'
import { Mail, Phone, MapPin } from 'lucide-vue-next'

import './Views.css'

const { locale } = useI18n()

const resumeData = computed(() => (locale.value === 'en' ? enResume : zhResume))
const resumeProjects = computed(() =>
  resumeData.value.projects.filter((p) => p.type.includes('resume'))
)
</script>
