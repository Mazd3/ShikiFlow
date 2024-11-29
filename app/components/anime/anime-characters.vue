<script setup lang="ts">
const props = defineProps({ id: String })

const { data: characters }: { data: any } = useFetch(`https://shikimori.one/api/animes/${props.id}/roles`)
const charactersExisted = computed(() => characters.value.filter((character: any) => character?.character?.name))
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <div v-for="item in charactersExisted" :key="item.id">
      <img class="w-48 rounded object-cover" :src="`https://shikimori.one${item?.character?.image?.original}`" alt="">
      <span>{{ item?.character?.name }}</span>
    </div>
  </div>
</template>
