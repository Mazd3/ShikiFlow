<script setup lang="ts">
const props = defineProps({ id: String })

const { data } = useAnimeVideos(props.id as string)
const videos = computed(() => data?.value?.data?.animes[0].videos.slice(0, 5))
</script>

<template>
  <div class="grid grid-cols-5 gap-4">
    <div v-for="item in videos" :key="item.id" class="aspect-[16/9]">
      <img class="w-full aspect-[16/9] object-cover" :src="item.imageUrl" alt="">
    </div>
  </div>
</template>
