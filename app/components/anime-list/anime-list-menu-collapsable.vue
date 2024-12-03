<script setup lang="ts">
const props = defineProps<{ title: string, items: Array<{ id: string, name: string, russian: string }> }>()
const genres = defineModel<{ genres: string[] }>()
const { t } = useI18n()

const collapsed = ref(true)
const collapsedList = computed(() => collapsed.value ? props.items.slice(0, 5) : props.items)
</script>

<template>
  <h3 class="title">
    {{ title }}
  </h3>
  <ul class="list">
    <li v-for="item in collapsedList" :key="item.id">
      <BaseCheckbox v-model="genres" :label="t(`genre.${item.name}`)" :value="item.id" />
    </li>
  </ul>
  <button v-if="items.length > 5" @click="collapsed = !collapsed">
    {{ collapsed ? 'Показать еще' : 'Скрыть' }}
  </button>
</template>

<style scoped>
  .list {
    overflow-y: auto;
    max-height: 400px;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding: 4px 0;
    }
  }
</style>
