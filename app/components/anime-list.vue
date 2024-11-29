<script setup lang="ts">
const { data: anime }: { data: any } = useFetch('https://shikimori.one/api/animes?limit=20&order=ranked')
</script>

<template>
  <div class="grid grid-cols-5 gap-4">
    <div v-for="item in anime" :key="item.id">
      <AnimeListItem :anime="item" />
    </div>
  </div>
</template>
