<script setup lang="ts">
const props = defineProps({ id: String })

const { data: videos }: { data: any } = useFetch(`https://shikimori.one/api/animes/${props.id}/videos`)
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <div v-for="item in videos.splice(0, 20)" :key="item.id">
      <img class="w-48 aspect-[16/9] rounded object-cover" :src="item.image_url" alt="">
    </div>
  </div>
</template>
