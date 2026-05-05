<!-- File: src/topbar/DownloadPopup.vue -->
<!-- Author: Cheng -->
<!-- Description: Allows the user to download the page content (excluding top bar) as a PDF -->

<template>
  <div class="popup-backdrop" @click.self="$emit('close')">
    <div class="popup">
      <h3>{{ $t('download.select') }}</h3>
      <label
        v-if="
          route.path === '/projects/personal' ||
          route.path === '/projects/group'
        "
      >
        <input type="checkbox" v-model="showQRCode" />
        {{ $t('download.YtToQrcode') }}
      </label>

      <button @click="downloadPDF">PDF</button>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import html2pdf from 'html2pdf.js'
import { useRoute } from 'vue-router'
const route = useRoute()

const showQRCode = inject('showQRCode')

// Define PDF options
const options = {
  margin: 0,
  filename: 'resume.pdf',
  image: { type: 'jpeg', quality: 1 },
  html2canvas: {
    scale: 2,
    useCORS: true,
    backgroundColor: null,
  },
  jsPDF: {
    unit: 'mm',
    format: 'a4',
    orientation: 'portrait',
  },
}

// Download PDF
const downloadPDF = () => {
  console.log('Downloading...')
  // Select the content inside the container class (excluding top bar)
  const content = document.querySelector('.container')

  // Generate and download the PDF with scaling options
  html2pdf()
    .set(options) // Apply the predefined options
    .from(content) // Convert the content inside the container to PDF
    .save() // Trigger the download
}
</script>

<style scoped>
.popup-backdrop {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
.popup h3 {
  margin-bottom: 10px;
  font-size: 18px;
}
.popup button {
  display: flex;
  flex-direction: column;
  background: rgb(221, 240, 248);
  align-items: center;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
}
.popup button:hover {
  background-color: #f5f5f5;
}
</style>
