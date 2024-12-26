<script setup lang="ts">
const { params } = useRoute()
</script>

<template>
  <AnimeDetails :anime-id="params.id" />
</template>
