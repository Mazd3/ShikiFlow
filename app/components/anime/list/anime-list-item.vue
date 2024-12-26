<script setup lang="ts">
import type { ShortAnime } from '~/types/anime'

interface Props {
  anime: ShortAnime
}

const { anime } = defineProps<Props>()

const { t, locale } = useI18n()

const name = computed(() => locale.value === 'ru' ? anime.russian : anime.name)
const year = computed(() => anime.airedOn.year)
const kind = computed(() => t(`kind.${anime.kind}`))
const poster = computed(() => anime.poster?.preview2xUrl)
</script>

<template>
  <article class="anime-list-item">
    <NuxtLink class="image" :to="`/animes/${anime.id}`">
      <img class="image__img" :src="poster" :alt="anime.name">
      <div class="image__foreground" />
    </NuxtLink>
    <div class="info">
      <NuxtLink class="info__name" :to="`/animes/${anime.id}`">
        {{ name }}
      </NuxtLink>
      <div class="info__type">
        <span>{{ kind }}</span>
        <span>{{ year }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.anime-list-item {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.image {
  position: relative;

  .image__img {
    overflow: hidden;
    object-fit: cover;
    width: 100%;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
  }

  .image__foreground {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.info {
  margin-top: 8px;
  display: flex;
  flex-direction: column;

  .info__name {
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    word-break: break-all;
    -webkit-box-orient: vertical;
  }

  .info__type {
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
