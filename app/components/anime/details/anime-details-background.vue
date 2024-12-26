<script setup lang="ts">
const { src } = defineProps<{ src: string }>()
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
  width: 100%;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);

  && img {
    aspect-ratio: 21/9;
    object-fit: cover;
    width: 100%;
    background: rgb(var(--c-body-rgb));
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
      linear-gradient(0deg, transparent 50%, rgba(var(--c-body-rgb), 0.2) 80%, rgba(var(--c-body-rgb), 0.5) 90%, rgb(var(--c-body-rgb))),
      linear-gradient(90deg, transparent 50%, rgba(var(--c-body-rgb), 0.35) 80%, rgba(var(--c-body-rgb), 0.75) 90%, rgb(var(--c-body-rgb))),
      linear-gradient(180deg, transparent 50%, rgba(var(--c-body-rgb), 0.35) 80%, rgba(var(--c-body-rgb), 0.75) 90%, rgb(var(--c-body-rgb))),
      linear-gradient(270deg, transparent 50%, rgba(var(--c-body-rgb), 0.35) 80%, rgba(var(--c-body-rgb), 0.75) 90%, rgb(var(--c-body-rgb)));
  }
  }
</style>
