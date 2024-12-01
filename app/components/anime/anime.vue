<script setup lang="ts">
const props = defineProps<{ id: string }>()
const { data, status } = useAnime(props.id)

const anime = computed(() => data.value?.data.animes[0])
const genres = computed(() => anime.value?.genres.map((genre: any) => genre.name))
const screenshots = computed(() => anime.value?.screenshots)
const background = computed(() => screenshots.value?.[Math.floor(Math.random() * screenshots.value?.length)].originalUrl)
</script>

<template>
  <div v-if="status === 'pending'">
    Loading...
  </div>

  <div v-else class="relative flex flex-row gap-12 pt-64">
    <AnimeBackground :src="background" />
    <div class="w-[320px] flex-shrink-0">
      <img class="w-full rounded shadow" :src="anime?.poster?.originalUrl" :alt="anime.name">
      <button class="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
        Просмотрено
      </button>
    </div>
    <div class="flex pt-24 flex-col">
      <span class="text-xl">{{ anime.russian }}</span>
      <h1 class="text-5xl mt-1 font-bold text-gray-950">
        {{ anime.name }}
      </h1>
      <p class="mt-4">
        {{ anime.kind }}  -  {{ genres.join(', ') }}
      </p>
      <p class="mt-4 [&_a]:text-blue-600" v-html="anime.description" />
      <AnimeTabs :id="props.id" />
    </div>
  </div>
</template>
