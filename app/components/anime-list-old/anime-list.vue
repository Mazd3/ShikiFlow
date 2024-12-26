<script setup lang="ts">
import { type AnimeParams, useAsyncAnimes } from '~/api/graphql/animes/use-animes'
import { useGenres } from '~/api/graphql/genres/use-genres'

const { query } = useRoute()
const router = useRouter()

const queryModel: Ref<AnimeParams> = ref({ ...query, genres: query.genres ? Array.isArray(query.genres) ? query.genres : [query.genres] : [] })

const { data: animeList, status: animesStatus } = useAsyncAnimes(queryModel)
const { data: genreList } = await useGenres('Anime')

watchEffect(() => {
  router.replace({ query: { ...queryModel.value } })
})
</script>

<template>
  <div class="container">
    <section class="anime-list">
      <template v-if="animesStatus === 'pending'">
        loading..
      </template>
      <template v-else>
        <AnimeListItem v-for="anime in animeList" :key="anime.id" :anime="anime" />
      </template>
    </section>
    <AnimeListMenu v-model="queryModel" :genres="genreList" />
  </div>
</template>

<style scoped>
.container {
  padding-top: 100px;
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
