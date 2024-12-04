<script setup>
import { ref } from 'vue'
import SearchItem from './search-item.vue'

const searchInput = ref('')
const isResults = ref(false)

const { data: result } = await useAsyncData('search', () => getAnimes({ search: searchInput.value, limit: 10 }), { watch: [searchInput], delay: 500 })
const list = computed(() => result.value?.data.animes)
watch(isResults, () => {
  if (isResults.value === true) {
    document.body.style.overflow = 'hidden'
  }
  else {
    document.body.style.overflow = 'auto'
  }
})
</script>

<template>
  <div class="search">
    <div v-if="isResults" class="search__layout" @click.stop="isResults = false" />

    <div v-if="isResults" class="search__results">
      <div class="search__results__list">
        <SearchItem v-for="item in list" :key="item.id" :item="item" />
      </div>
      <div v-if="list.length === 0">
        <div class="search__results__empty">
          Ничего не найдено
        </div>
      </div>
    </div>

    <input v-model="searchInput" class="search__input" type="text" :placeholder="isResults" @click="isResults = true">
  </div>
</template>

<style scoped>
.search__results__list {
  overflow-y: auto;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
  max-height: calc(100vh - 25vh);
}

.search {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search__layout {
  z-index: 1;
  display: block;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(var(--text), .25);
}

.search__input {
  z-index: 102;
  display: block;
  width: 100%;
  height: 40px;
  padding: 10px;
  color: rgb(var(--text));
  background-color: rgba(var(--background), .75);
  border: 1px solid var(--border);
  border-radius: 8px;
}

.search__input:focus {
  outline: none;
  border-color: var(--accent);

  & + .search__results {
    display: flex;
  }
}

.search__results {

  z-index: 101;
  display: block;

  position: fixed;
  width: 722px;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);

  padding-top: 50px;

  background-color: rgb(var(--background));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  -moz-backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 4px 24px 0 rgba(8, 9, 10, .1);
  border: 1px solid var(--border);
}
</style>
