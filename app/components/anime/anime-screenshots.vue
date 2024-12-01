<script setup lang="ts">
const props = defineProps({ id: String })

const { data } = useAnimeScreenshots(props.id as string)
const screenshots = computed(() => data.value?.data?.animes[0].screenshots.slice(0, 5))
</script>

<template>
  <div class="grid grid-cols-5 gap-4">
    <div v-for="item in screenshots" :key="item.id">
      <img class="w-full rounded object-cover" :src="item.x332Url" alt="">
    </div>
  </div>
</template>
