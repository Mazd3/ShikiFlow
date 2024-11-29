<script setup lang="ts">
const props = defineProps({ id: String })

const { data } = useAnimeCharacters(props.id as string)
const characters = computed(() => data?.value?.data?.animes[0].characterRoles)
</script>

<template>
  <div class="grid grid-cols-5 gap-4">
    <div v-for="item in characters" :key="item.id">
      <img class="w-full rounded object-cover" :src="item?.character?.poster?.previewUrl" alt="">
      <span>{{ item?.character?.name }}</span>
    </div>
  </div>
</template>
