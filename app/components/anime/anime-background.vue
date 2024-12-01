<script setup lang="ts">
defineProps<{ src: string }>()
</script>

<template>
  <div class="anime-background z-[-1] absolute overflow-hidden w-full top-0 left-0 right-0">
    <img class="w-full" :src="src">
  </div>
</template>

<style scoped>
  .anime-background::after {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-image:
      linear-gradient(0deg, transparent 35%, rgba(255, 255, 255, 0.35) 80%, rgba(255, 255, 255, 0.75) 90%, #FFF),
      linear-gradient(90deg, transparent 35%, rgba(255, 255, 255, 0.35) 80%, rgba(255, 255, 255, 0.75) 90%, #FFF),
      linear-gradient(180deg, transparent 35%, rgba(255, 255, 255, 0.35) 80%, rgba(255, 255, 255, 0.75) 90%, #FFF),
      linear-gradient(270deg, transparent 35%, rgba(255, 255, 255, 0.35) 80%, rgba(255, 255, 255, 0.75) 90%, #FFF);
  }
</style>

<!-- /* linear-gradient(0deg, transparent, transparent 85%, white), */ -->
<!-- bg-gradient-to-b from-white/0 to-white -->
