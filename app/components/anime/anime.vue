<!-- <script setup lang="ts">
import AnimeCharacters from './anime-characters.vue'
import AnimeMain from './anime-main.vue'
import AnimeScreenshots from './anime-screenshots.vue'

const props = defineProps<{ id: string }>()
const { data, status } = useAnime(props.id)

const anime = computed(() => data.value?.data.animes[0])
const screenshots = computed(() => anime.value?.screenshots)
const background = computed(() => screenshots.value?.[Math.floor(Math.random() * screenshots.value?.length)]?.originalUrl)
</script>

<template>
  <div class="anime">
    <div v-if="status === 'pending'">
      Loading...
    </div>

    <AnimeBackground :src="background" />
    <AnimeMain :anime="anime" />
    <AnimeCharacters :characters="anime?.characterRoles" />
    <div class="block">
      <AnimeScreenshots :screenshots="screenshots" />
      <AnimeVideos :videos="anime?.videos" />
    </div>
  </div>
</template>

<style scoped>
.anime {
  position: relative;
}

.block {
  margin: 32px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style> -->
