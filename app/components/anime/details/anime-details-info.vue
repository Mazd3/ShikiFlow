<script setup lang="ts">
import type { Anime } from '~/api/graphql/animes/use-anime-by-id'

const { anime } = defineProps<{ anime: Anime }>()
</script>

<template>
  <div class="anime-details-info">
    <h1 class="anime-details-info__title">
      {{ anime.name }}
    </h1>
    <p class="anime-details-info__subtitle">
      {{ anime.russian }}
    </p>
  </div>
</template>

<style scoped>
.anime-details-info__title {
  font-size: var(--fs-h1);
  font-weight: var(--fw-bold);
  margin: 0;
}
.anime-details-info__subtitle {
  font-size: var(--fs-sub);
  font-weight: var(--fw-bold);
  color: rgba(var(--c-text-rgb), .85);
}
</style>
