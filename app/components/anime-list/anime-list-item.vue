<script setup lang="ts">
interface AnimeListItemProps {
  anime: {
    id: number
    name: string
    russian: string
    poster: {
      preview2xUrl: string
    }
    kind: string
    airedOn: {
      year: number
    }
  }
}
const { anime } = defineProps<AnimeListItemProps>()
const { t, locale } = useI18n()

const name = computed(() => locale.value === 'ru' ? anime.russian : anime.name)
const year = computed(() => anime.airedOn.year)
const kind = computed(() => t(`kind.${anime.kind}`))
const poster = computed(() => anime.poster?.preview2xUrl)
</script>

<template>
  <article>
    <NuxtLink class="anime-item" :to="`/anime/${anime.id}`">
      <img class="anime-image" :src="poster" :alt="anime.name">
      <div class="anime-name">
        {{ name }}
      </div>
      <div class="anime-type">
        <span>{{ kind }}</span>
        <span>{{ year }}</span>
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
  display: block;
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 24px 0 rgba(8, 9, 10, .1);
}

.anime-name {
  margin-top: 10px;

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
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  color: rgba(var(--text), .75);
  font-size: 14px;
  font-weight: 600;
}
</style>
