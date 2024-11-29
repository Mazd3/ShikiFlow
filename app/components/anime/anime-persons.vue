<script setup lang="ts">
const props = defineProps({ id: String })

const { data } = useAnimePersons(props.id as string)
const persons = computed(() => data?.value?.data?.animes[0].personRoles)
</script>

<template>
  <div class="grid grid-cols-5 gap-4">
    <div v-for="item in persons" :key="item.id">
      <img class="w-full rounded object-cover" :src="item.person?.poster?.previewUrl" alt="">
      <span>{{ item?.person?.name }}</span>
    </div>
  </div>
</template>
