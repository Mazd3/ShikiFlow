<script setup lang="ts">
const { params } = useRoute()
</script>

<template>
  <MyHeader />
  <Anime :id="params.id as string" />
</template>
