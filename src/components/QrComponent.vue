<template>
  <div class="qr-container">
      <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import {getLinkStore} from "../store/linkStore.ts";
import {ref, watch} from "vue";
import QRCode from "qrcode";

const linkStore = getLinkStore()

const canvas = ref<HTMLCanvasElement | null>(null);
watch(
    ()=>linkStore.link,
    (newValue) => {
  if (canvas.value) {
    QRCode.toCanvas(canvas.value, newValue || '').catch(
          (error) => {
             console.error("Error generating qr code")
          }
      )
  }
},{ immediate: true })

</script>

<style scoped>
.qr-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full page height */
}
canvas {
  width: 100%; /* Canvas display size */
  height: 100%;
}
</style>