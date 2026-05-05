<!-- File: src/components/topbar/SubMenu.vue-->
<!-- Author: Cheng -->
<!-- Description: This component renders a list of submenu items in a dropdown. It receives the 
 list of items via props and emits a 'select' event when an item is clicked. 
 The items are displayed dynamically with translation support using vue-i18n.-->

<template>
  <ul role="menu" :class="className">
    <li v-for="(item, index) in items" :key="index">
      <button role="menuitem" type="button" @click="$emit('select', item)">
        {{ $t(item.key) }}
      </button>
    </li>
  </ul>
</template>

<script setup>
import './Topbar.css'

defineProps({
  items: Array,
  className: {
    type: String,
    default: 'dropdown-content',
  },
})

defineEmits(['select'])
</script>

<style scoped src="./Topbar.css"></style>
