<script setup lang="ts">
defineProps<{ src: string }>()
</script>

<template>
  <div class="anime-background">
    <img :src="src">
  </div>
</template>

<style scoped>
.anime-background {
  z-index: -1;
  position: absolute;
  width: 1200px;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);

  && img {
    aspect-ratio: 21/9;
    object-fit: cover;
    width: 100%;
    background: rgb(var(--background));
  }

  &&::after {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-image:
      linear-gradient(0deg, transparent 35%, rgba(var(--background), 0.35) 80%, rgba(var(--background), 0.75) 90%, rgb(var(--background))),
      linear-gradient(90deg, transparent 50%, rgba(var(--background), 0.35) 80%, rgba(var(--background), 0.75) 90%, rgb(var(--background))),
      linear-gradient(180deg, transparent 35%, rgba(var(--background), 0.35) 70%, rgba(var(--background), 0.75) 80%, rgb(var(--background))),
      linear-gradient(270deg, transparent 50%, rgba(var(--background), 0.35) 80%, rgba(var(--background), 0.75) 90%, rgb(var(--background)));
  }
  }
</style>
