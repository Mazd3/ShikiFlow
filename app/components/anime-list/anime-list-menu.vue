<script setup lang="ts">
const props = defineProps<{ genres: Array<{ id: string, name: string, russian: string, kind: string }> }>()
const model = defineModel<{ order: string, genres: string[] }>()

const demographic = computed(() => props.genres.filter(genre => genre.kind === 'demographic'))
const theme = computed(() => props.genres.filter(genre => genre.kind === 'theme'))
const genre = computed(() => props.genres.filter(genre => genre.kind === 'genre'))

const orderList = computed(() => ['ranked', 'popularity'])
</script>

<template>
  <aside v-if="model" class="anime-list-menu">
    <section class="section">
      <h3 class="title">
        Сортировка
      </h3>
      <ul>
        <li v-for="item in orderList" :key="item">
          <BaseRadio v-model="model.order" name="order" :value="item" :checked="model.order === item">
            {{ item }}
          </BaseRadio>
        </li>
      </ul>
    </section>

    <section class="section">
      <AnimeListMenuCollapsable v-model="model.genres" title="Аудитория" :items="demographic" />
    </section>
    <section class="section">
      <AnimeListMenuCollapsable v-model="model.genres" title="Жанры" :items="genre" />
    </section>
    <section class="section">
      <AnimeListMenuCollapsable v-model="model.genres" title="Темы" :items="theme" />
    </section>
  </aside>
</template>

<style scoped>
  .anime-list-menu {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: 16px;

    ul {
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 6px;
      list-style: none;
    }

    label {
      font-size: 16px;
      display: flex;
      gap: 12px;
    }

    .title {
      margin: 0;
      font-size: 18px;
      font-weight: 700;
      color: var(--text);
    }
  }
</style>
