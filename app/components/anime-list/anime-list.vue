<script setup lang="ts">
const { query } = useRoute()
const router = useRouter()
const queryModel = ref({ ...query, genres: query.genres || [] })
watchEffect(() => {
  router.replace({ query: { ...queryModel.value } })
})
const { data: anime }: { data: any } = await useAsyncData('animes', () => getAnimes({ ...queryModel.value, limit: Number(query.limit) || 48, page: Number(query.page) || 1, genres: queryModel.value.genres.join(', ') }), { watch: [queryModel.value] })
const { data: genre }: { data: any } = useGenres('Anime')
</script>

<template>
  <h1>Список аниме</h1>
  <div class="container">
    <section class="anime-list">
      <AnimeListItem v-for="item in anime.data.animes" :key="item.id" :anime="item" />
    </section>
    <AnimeListMenu v-model="queryModel" :genres="genre.data.genres" />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
}

.anime-list {
  grid-column: span 4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  height: fit-content;
}
</style>
