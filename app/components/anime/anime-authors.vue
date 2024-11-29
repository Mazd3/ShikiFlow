<script setup lang="ts">
const props = defineProps({ id: String })

const { data: authors }: { data: any } = useFetch(`https://shikimori.one/api/animes/${props.id}/roles`)
const authorsExisted = computed(() => authors.value.filter((author: any) => author?.person?.name))
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <div v-for="item in authorsExisted" :key="item.id">
      <img class="w-48 rounded object-cover" :src="`https://shikimori.one${item?.person?.image?.original}`" alt="">
      <span>{{ item?.person?.name }}</span>
    </div>
  </div>
</template>
