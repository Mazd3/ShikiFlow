<script setup lang="ts">
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
</script>

<template>
  <div class="relative aspect-[3/4] w-full rounded-xl overflow-hidden text-white shadow-md">
    <NuxtLink :to="`/anime/${anime.id}`">
      <div class="absolute h-full w-full bg-gradient-to-b from-transparent via-transparent via-70% to-black/75" />
      <span class="absolute bottom-9 left-3 right-3 text-base font-bold truncate">{{ anime.name }}</span>
      <div class="absolute bottom-3 left-3 right-3 flex justify-between">
        <span>{{ anime.kind }}</span>
        <!-- <span>{{ anime.year }}</span> -->
      </div>
      <img class="w-full h-full object-cover" :src="anime.poster?.originalUrl" :alt="anime.name">
    </NuxtLink>
  </div>
</template>
