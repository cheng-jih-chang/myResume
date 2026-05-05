<!-- Name: src/topbar/Topbar.vue -->
<!-- Author: Cheng -->
<!-- Description: 
        This component handles the top navigation bar of the app, including the logo, main menus, and responsive behavior.
        It displays different menus and submenus, provides a burger menu for smaller screens, and includes language selection functionality. 
        The component uses Vue's reactivity system to dynamically show and hide menus based on user interaction and screen size. -->

<template>
  <nav class="topBarWrapper" ref="wrapperRef">
    <ul>
      <!-- Logo -->
      <li v-for="menu in logoMenus" :key="menu.id">
        <a class="logo-img" :href="menu.href"></a>
      </li>

      <!-- Visible Menus -->
      <li
        v-for="menu in visibleMenus"
        :key="menu.id"
        class="dropdown"
        @mouseenter="openMenu && (openMenu = menu.id)"
      >
        <button
          class="dropBtn"
          :aria-label="menu.aria"
          :aria-expanded="openMenu === menu.id"
          @click="openMenu = openMenu === menu.id ? null : menu.id"
        >
          {{ $t(menu.labelKey) }}
        </button>
        <SubMenu
          v-if="openMenu === menu.id"
          :items="menu.items"
          @select="handleSubmenuSelect"
        />
      </li>

      <!-- Burger Overflow -->
      <li
        v-if="overflowMenus.length > 0"
        class="dropdown"
        @mouseenter="openMenu && (openMenu = 'burgerMenu')"
      >
        <button
          class="dropBtn"
          :aria-expanded="openMenu === 'burgerMenu'"
          @click="openMenu = openMenu === 'burgerMenu' ? null : 'burgerMenu'"
        >
          ☰
        </button>
        <ul
          v-if="openMenu === 'burgerMenu'"
          class="dropdown-content"
          id="burgerMenu"
        >
          <li
            v-for="menu in overflowMenus"
            :key="menu.id"
            class="has-submenu"
            @mouseenter="openSubmenu = menu.id"
            @mouseleave="openSubmenu = null"
          >
            <button class="dropBtn">
              {{ $t(menu.labelKey) }}
            </button>
            <SubMenu
              v-if="openSubmenu === menu.id"
              :items="menu.items"
              :className="'dropdown-submenu left'"
              @select="handleSubmenuSelect"
            />
          </li>
        </ul>
      </li>
    </ul>

    <!-- Language Popup -->
    <LanguagePopup
      v-if="showLanguagePopup"
      @select="changeLanguage"
      @close="showLanguagePopup = false"
    />

    <!-- Download Popup -->
    <DownloadPopup
      v-if="showDownloadPopup"
      @close="showDownloadPopup = false"
    />
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import sharedMenus from './SharedMenus'
import SubMenu from './SubMenu.vue'
import LanguagePopup from './LanguagePopup.vue'
import DownloadPopup from './DownloadPopup.vue'

const openSubmenu = ref(null)
const props = defineProps({
  onSelectMenuItem: Function,
})

const { locale } = useI18n()
const wrapperRef = ref(null)
const openMenu = ref(null)
const visibleCount = ref(7)
const showLanguagePopup = ref(false)
const showDownloadPopup = ref(false)

// Responsive menu logic
const updateVisibleCount = () => {
  const breakpoints = [
    { max: 620, count: 1 },
    { max: 810, count: 4 },
    { max: 1024, count: 6 },
    { max: 1150, count: 7 },
  ]

  let count = 7
  for (const bp of breakpoints) {
    if (window.innerWidth < bp.max) {
      count = bp.count
      break
    }
  }
  visibleCount.value = count
}

onMounted(() => {
  updateVisibleCount()
  window.addEventListener('resize', updateVisibleCount)
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateVisibleCount)
  document.removeEventListener('click', handleClickOutside)
})

function handleClickOutside(event) {
  if (wrapperRef.value && !wrapperRef.value.contains(event.target)) {
    openMenu.value = null
  }
}

// Menu rendering
const logoMenus = computed(() => sharedMenus.filter((m) => m.type === 'logo'))
const menuItems = computed(() => sharedMenus.filter((m) => m.type !== 'logo'))
const visibleMenus = computed(() =>
  menuItems.value.slice(0, visibleCount.value)
)
const overflowMenus = computed(() => menuItems.value.slice(visibleCount.value))

// Submenu interaction
function handleSubmenuSelect(item) {
  if (item.type === 'language') {
    showLanguagePopup.value = true
  } else if (item.type === 'download') {
    showDownloadPopup.value = true
  } else if (item.type === 'route' && props.onSelectMenuItem) {
    props.onSelectMenuItem(item.route)
  }
  openMenu.value = null // close menu
  openSubmenu.value = null
}

function changeLanguage(lang) {
  locale.value = lang
  localStorage.setItem('language', lang)
  showLanguagePopup.value = false
}
</script>

<style scoped src="./Topbar.css"></style>
