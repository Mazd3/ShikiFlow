<script setup lang="ts">
interface Props {
  background?: {
    src: string
    alt: string
  }
}

const { background } = defineProps<Props>()
</script>

<template>
  <section class="media-info-layout">
    <div v-if="background" class="media-info-layout__background">
      <img
        :src="background.src"
        :alt="background.alt"
        class="media-info-layout__background-image"
      >
    </div>
    <div class="media-info-layout__poster">
      <slot name="info" />
    </div>
    <div class="media-info-layout__content">
      <slot name="content" />
    </div>
  </section>
</template>

<style scoped>
.media-info-layout {
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
  padding: 32px 0;
}
</style>
