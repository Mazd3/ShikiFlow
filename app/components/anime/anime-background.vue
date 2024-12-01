<script setup lang="ts">
defineProps<{ src: string }>()
</script>

<template>
  <div class="z-[-1] absolute overflow-hidden w-full top-0 left-0 right-0 aspect-[16/9]">
    <div class="absolute top-0 left-0 right-0 h-full w-full bg-gradient-to-b from-white/10 to-white" />
    <img class="w-full" :src="src">
  </div>
</template>
