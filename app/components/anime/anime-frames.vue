<script setup lang="ts">
const props = defineProps({ id: String })

const { data: frames }: { data: any } = useFetch(`https://shikimori.one/api/animes/${props.id}/screenshots`)
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <div v-for="item in frames.splice(0, 20)" :key="item.id">
      <img class="w-48 rounded object-cover" :src="`https://shikimori.one${item.original}`" alt="">
    </div>
  </div>
</template>
