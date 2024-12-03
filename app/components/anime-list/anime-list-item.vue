<script setup lang="ts">
import { getAnimeType } from '~/utils/helpers/anime-type'

interface AnimeListItemProps {
  anime: {
    id: number
    name: string
    poster: {
      originalUrl: string
    }
    kind: string
  }
}
const { anime } = defineProps<AnimeListItemProps>()
const type = computed(() => getAnimeType(anime.kind))
</script>

<template>
  <article>
    <NuxtLink class="anime-item" :to="`/anime/${anime.id}`">
      <img class="anime-image" :src="anime.poster?.originalUrl" :alt="anime.name">
      <div class="anime-name">
        {{ anime.name }}
      </div>
      <div class="anime-type">
        <span>{{ type }}</span>
      <!-- <span>{{ anime.year }}</span> -->
      </div>
    </NuxtLink>
  </article>
</template>

<style scoped>
.anime-item {
  text-decoration: none;
  color: var(--text);

  &:hover {
    color: var(--accent);
  }
}

.anime-image {
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 24px 0 rgba(8, 9, 10, .1);
}

.anime-name {
  margin-top: 8px;

  color: inherit;
  font-size: 16px;
  font-weight: 700;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  word-break: break-all;
  -webkit-box-orient: vertical;
}

.anime-type {
  margin-top: 8px;
  color: rgba(var(--text), .75);
  font-size: 14px;
  font-weight: 600;
}
</style>
