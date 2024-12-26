<script setup lang="ts">
import { useAnimeById } from '~/api/graphql/animes/use-anime-by-id'

const { animeId } = defineProps<{ animeId: string }>()

const { anime, status } = useAnimeById(animeId)

const background = computed(() => anime?.screenshots[Math.floor(Math.random() * anime?.screenshots.length)]?.originalUrl)
const poster = computed(() => anime?.poster?.main2xUrl)
</script>

<template>
  <div class="anime-details__container">
    <template v-if="status === 'pending'">
      Loading...
    </template>
    <template v-else-if="anime">
      <AnimeDetailsBackground v-if="background" :src="background" />
      <AnimeDetailsFirst v-if="poster" class="anime-details__first" :poster="poster" />
      <AnimeDetailsLast class="anime-details__last" :anime="anime" />
    </template>
    <template v-else>
      Something went wrong
    </template>
  </div>
</template>

<style scoped>
.anime-details__container {
  padding-top: 128px;
  position: relative;
  width: 100%;

  display: flex;
  gap: var(--spacing-xl);
}

.anime-details__first {
  margin-top: 128px;
  width: 320px;
}

.anime-details__last {
  margin-top: 128px;
}
</style>
