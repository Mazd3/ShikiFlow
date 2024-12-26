<script setup lang="ts">
const { poster } = defineProps<{ poster: string }>()
</script>

<template>
  <div class="anime-details-poster">
    <img class="anime-details-poster__img" :src="poster" alt="poster">
  </div>
</template>

<style scoped>
.anime-details-poster__img {
  border-radius: var(--radius-md);
  width: 100%;
}
</style>
