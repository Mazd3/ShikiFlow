<script setup lang="ts">
const { query } = useRoute()
const router = useRouter()
const queryModel = ref({ ...query, genres: query.genres ? Array.isArray(query.genres) ? query.genres : [query.genres] : [] })
watchEffect(() => {
  router.replace({ query: { ...queryModel.value } })
})
const { data: anime, status } = await useAsyncData('animes', () => getAnimes({ ...queryModel.value, limit: Number(query.limit) || 48, page: Number(query.page) || 1, genres: queryModel.value.genres.join(', ') }), { watch: [queryModel.value] })
const { data: genres }: { data: any } = useGenres('Anime')
</script>

<template>
  <div class="container">
    <section class="anime-list">
      <template v-if="status === 'pending'">
        loading..
      </template>
      <template v-else>
        <AnimeListItem v-for="item in anime.data.animes" :key="item.id" :anime="item" />
      </template>
    </section>
    <AnimeListMenu v-model="queryModel" :genres="genres.data.genres" />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.anime-list {
  grid-column: span 4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  height: fit-content;
}
</style>
