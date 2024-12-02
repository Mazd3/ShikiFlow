<script setup lang="ts">
import { getAnimeStatus } from '~/utils/helpers/anime-status'
import { getAnimeType } from '~/utils/helpers/anime-type'

const props = defineProps<{ id: string }>()
const { data, status } = useAnime(props.id)

const anime = computed(() => data.value?.data.animes[0])
const genres = computed(() => anime.value?.genres.map((genre: any) => genre.name))
const screenshots = computed(() => anime.value?.screenshots)
const background = computed(() => screenshots.value?.[Math.floor(Math.random() * screenshots.value?.length)]?.originalUrl)
const type = computed(() => getAnimeType(anime.value?.kind))
</script>

<template>
  <div v-if="status === 'pending'">
    Loading...
  </div>

  <div v-else class="relative flex flex-row gap-12 pt-64">
    <AnimeBackground v-if="background" :src="background" />
    <div class="w-[320px] flex-shrink-0">
      <img class="w-full rounded shadow" :src="anime?.poster?.originalUrl" :alt="anime.name">
      <button class="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
        Просмотрено
      </button>
    </div>
    <div class="flex pt-24 flex-col">
      <h1 class="text-5xl mt-2 font-bold text-black">
        {{ anime.name }}
      </h1>
      <span class="text-xl font-bold text-black mt-2">{{ anime.russian }}</span>
      <div class="mt-6 flex flex-col gap-1">
        <div>
          <div class="inline-block w-32">
            Тип:
          </div>
          <NuxtLink :to="`/anime?kind=${anime.kind}`" class="hover:text-blue-800 font-bold">
            {{ type }}
          </NuxtLink>
        </div>
        <div>
          <div class="inline-block w-32">
            Жанры:
          </div>
          <template
            v-for="genre in genres"
            :key="genre"
          >
            <NuxtLink :to="`/anime?genre=${genre}`" class="hover:text-blue-800 font-bold">
              {{ genre }}
            </NuxtLink>{{ genre === genres[genres.length - 1] ? '' : ', ' }}
          </template>
        </div>
        <div>
          <div class="inline-block w-32">
            Статус:
          </div>
          <span class="font-bold">{{ getAnimeStatus(anime.status) }}</span>
        </div>
        <div>
          <div class="inline-block w-32">
            Время выхода:
          </div>
          <span v-if="anime.status === 'released'" class="font-bold">с {{ new Date(anime.airedOn.date).toLocaleDateString([], { day: 'numeric', month: 'long', year: 'numeric' }) }} до {{ new Date(anime.releasedOn.date).toLocaleDateString([], { day: 'numeric', month: 'long', year: 'numeric' }) }}</span>
          <span v-else-if="anime.status === 'ongoing'" class="font-bold">c {{ new Date(anime.airedOn.date).toLocaleDateString([], { day: 'numeric', month: 'long', year: 'numeric' }) }}</span>
        </div>
        <div>
          <div class="inline-block w-32">
            Эпизоды:
          </div>
          <span class="font-bold">{{ anime.episodes }} шт.</span>
        </div>
        <div>
          <div class="inline-block w-32">
            Длительность:
          </div>
          <span class="font-bold">{{ anime.duration }} мин.</span>
        </div>
        <div>
          <div class="inline-block w-32">
            Рейтинг:
          </div>
          <span class="font-bold">{{ anime.rating.toUpperCase() }}</span>
        </div>
      </div>
      <div class="mt-4 [&_a]:text-blue-600" v-html="anime.description" />
      <AnimeTabs :id="props.id" />
    </div>
  </div>
</template>
