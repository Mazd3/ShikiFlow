<script setup lang="ts">
interface Props {
  character: object
}

const { character } = defineProps<Props>()
</script>

<template>
  <div class="character-details">
    <div class="character-details__poster">
      <img src="" alt="">
    </div>
    <div class="character-details__info" />
  </div>
</template>
