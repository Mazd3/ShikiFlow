<script setup lang="ts">
defineProps<{ info: Array<{ title: string, value: string | string[] }> }>()
</script>

<template>
  <div class="info">
    <template v-for="(item, idx) in info" :key="idx">
      <div class="title">
        {{ item.title }}:
      </div>
      <!-- if -->
      <div v-if="Array.isArray(item.value)">
        <NuxtLink v-for="(i, index) in item.value" :key="index" to="/" class="hover:text-blue-800 font-bold">
          {{ i }}{{ index !== item.value.length - 1 ? ', ' : '' }}
        </NuxtLink>
      </div>
      <!-- else -->
      <NuxtLink v-else to="/" class="hover:text-blue-800 font-bold">
        {{ item.value }}
      </NuxtLink>
    </template>
  </div>
</template>

<style scoped>
.info {
  display: grid;
  grid-template-columns: auto 1fr;
  margin-top: 24px;
  grid-column-gap: 24px;
  grid-row-gap: 8px;
  text-wrap: balance;

  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;

    &:hover {
      color: var(--accent);
    }
  }
}
</style>
