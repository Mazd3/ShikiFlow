<script setup lang="ts">
const props = defineProps<{ id: string }>()
const { data: anime }: { data: any } = useFetch(`https://shikimori.one/api/animes/${props.id}`)
const genresString = computed(() => {
  return anime.value.genres.map((genre: any) => genre.name).join(', ')
})
const tabs = ['characters', 'authors', 'frames', 'videos']
const activeTab = ref(0)

function setActiveTab(index: number) {
  activeTab.value = index
}
</script>

<template>
  <div class="flex flex-row gap-4 mt-16">
    <div class="w-[255px] flex-shrink-0">
      <img class="w-full rounded shadow" :src="`https://shikimori.one${anime.image.original}`" :alt="anime.name">
      <button class="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Просмотрено
      </button>
    </div>
    <div class="flex flex-col">
      <h1 class="text-3xl">
        {{ anime.name }}
      </h1>
      <p class="mt-4">
        {{ anime.kind }} - {{ genresString }}
      </p>
      <p class="mt-4 [&_a]:text-blue-600">
        {{ anime.description }}
      </p>
      <div class="flex flex-row gap-4 mt-4">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          :class="{ 'bg-green-700': activeTab === index }"
          @click="setActiveTab(index)"
        >
          {{ tab }}
        </button>
      </div>
      <AnimeCharacters v-if="activeTab === 0" :id="props.id" />
      <AnimeAuthors v-else-if="activeTab === 1" :id="props.id" />
      <AnimeFrames v-else-if="activeTab === 2" :id="props.id" />
      <AnimeVideos v-else :id="props.id" />
    </div>
  </div>
</template>
