<script setup lang="ts">
interface Props { videos: Array<{ id: string, name: string, kind: string, imageUrl: string, playerUrl: string, url: string }> }

const { videos } = defineProps<Props>()

const slicedVideos = computed(() => videos.slice(0, 2))
</script>

<template>
  <BaseRowList title="Videos" link="/anime">
    <div class="anime-videos">
      <div v-for="item in slicedVideos" :key="item.id" class="anime-videos__item">
        <img :src="item?.imageUrl" alt="">
      </div>
    </div>
  </BaseRowList>
</template>

<style scoped>
.anime-videos {
  display: flex;
  gap: 20px;
}

.anime-videos__item {
  img {
    aspect-ratio: 16/9;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
}
</style>
