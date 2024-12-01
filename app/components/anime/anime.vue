<script setup lang="ts">
import AnimeBackground from './anime-background.vue'

const props = defineProps<{ id: string }>()
const { data, status } = useAnime(props.id)

const anime = computed(() => data.value?.data.animes[0])
const genres = computed(() => anime.value?.genres.map((genre: any) => genre.name))
// random screenshot
const screenshots = computed(() => anime.value?.screenshots)
const background = computed(() => screenshots.value?.[Math.floor(Math.random() * screenshots.value?.length)].originalUrl)
</script>

<template>
  <div v-if="status === 'pending'">
    Loading...
  </div>

  <div v-else class="flex flex-row gap-12 mt-64">
    <AnimeBackground :src="background" />
    <div class="w-[255px] flex-shrink-0">
      <img class="w-full rounded shadow" :src="anime?.poster?.originalUrl" :alt="anime.name">
      <button class="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Просмотрено
      </button>
    </div>
    <div class="flex flex-col">
      <h1 class="text-3xl">
        {{ anime.name }}
      </h1>
      <subtitle>{{ anime.russian }}</subtitle>
      <p class="mt-4">
        {{ anime.kind }}  -  {{ genres.join(', ') }}
      </p>
      <p class="mt-4 [&_a]:text-blue-600" v-html="anime.description" />
      <AnimeTabs :id="props.id" />
    </div>
  </div>
</template>
