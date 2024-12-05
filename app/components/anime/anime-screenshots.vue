<script setup lang="ts">
interface Props { screenshots: Array<{ id: string, x332Url: string, originalUrl: string }> }

const { screenshots } = defineProps<Props>()

const slicedScreenshots = computed(() => screenshots.slice(0, 2))
</script>

<template>
  <BaseRowList title="Screenshots" link="/anime">
    <div class="anime-screenshots">
      <div v-for="item in slicedScreenshots" :key="item.id" class="anime-screenshots__item">
        <img :src="item?.x332Url" alt="">
      </div>
    </div>
  </BaseRowList>
</template>

<style scoped>
.anime-screenshots {
  display: flex;
  gap: 20px;
}

.anime-screenshots__item {

  img {
    display: block;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
}
</style>
