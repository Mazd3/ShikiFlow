<script setup lang="ts">
import { useAsyncAnimes } from '~/api/graphql/animes/use-animes'
import MediaListLayout from '~/components/media/media-list-layout.vue'

const params = ref({})

const { data: animes, status: animesStatus } = await useAsyncAnimes(params)
</script>

<template>
  <MediaListLayout>
    <template #header>
      header
    </template>
    <template #main>
      <template v-if="animesStatus === 'pending'">
        loading..
      </template>
      <template v-else>
        <div class="anime-list">
          <AnimeListItem v-for="anime in animes" :key="anime.id" class="anime-list-item" :anime="anime" />
        </div>
      </template>
    </template>
    <template #sidebar>
      sidebar
    </template>
  </MediaListLayout>
</template>

<style scoped>
.anime-list {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
}

.anime-list-item {
  width: 100%;
}
</style>
