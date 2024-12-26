<script setup lang="ts">
import type { Anime } from '~/api/graphql/animes/use-anime-by-id'

const { anime } = defineProps<{ anime: Anime }>()
</script>

<template>
  <div class="anime-details-last">
    <AnimeDetailsInfo :anime="anime" />
  </div>
</template>

<style scoped>
.anime-details-last {
  padding-top: 128px;
}
</style>
