<script setup lang="ts">
const props = defineProps<{ title: string, items: Array<{ id: string, name: string, russian: string }> }>()
const genres = defineModel<string[]>()

const { t } = useI18n()

const collapsed = ref(true)

const sortedItems = computed(() => props.items.toSorted((a, b) => {
  const aChecked = genres.value?.includes(a.id)
  const bChecked = genres.value?.includes(b.id)
  return aChecked === bChecked ? 0 : aChecked ? -1 : 1
}))
const list = computed(() => collapsed.value ? sortedItems.value.slice(0, 5) : sortedItems.value)
</script>

<template>
  <h3 class="title">
    {{ title }}
  </h3>
  <ul class="list">
    <li v-for="item in list" :key="item.id">
      <BaseCheckbox :id="item.id" v-model="genres" :label="t(`genre.${item.name}`)" :value="item.id" :name="item.name" />
    </li>
  </ul>
  <button v-if="items.length > 5" @click="collapsed = !collapsed">
    {{ collapsed ? 'Показать все' : 'Свернуть' }}
  </button>
</template>

<style scoped>
.title {
    margin: 0;
  }

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
