<script setup lang="ts">
const { data: anime }: { data: any } = useAnimes({ ids: '1' })
</script>

<template>
  <!-- {{ anime }} -->
  <div class="grid grid-cols-5 gap-4">
    <div v-for="item in anime.data.animes" :key="item.id">
      <AnimeListItem :anime="item" />
    </div>
  </div>
</template>
