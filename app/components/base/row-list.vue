<script setup lang="ts">
const { title, link } = defineProps<{ title: string, link: string }>()
</script>

<template>
  <div class="row-list">
    <div class="row-list__header">
      <div class="row-list__title">
        {{ title }}
      </div>
      <NuxtLink class="row-list__link" :to="link">
        View all
      </NuxtLink>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.row-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.row-list__header {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.row-list__title {
  font-size: 18px;
  font-weight: 700;
}

.row-list__link {
  cursor: pointer;
  font-weight: 700;
  color: var(--accent);
  text-decoration: none;
  font-size: 16px;
}
</style>
