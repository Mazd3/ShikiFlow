<script setup lang="ts">
const { params } = useRoute()
</script>

<template>
  <Anime :id="params.id as string" />
</template>
