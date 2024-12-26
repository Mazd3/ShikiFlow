<script setup lang="ts">
import type { Genre } from '~/types/genre'

const props = defineProps<{ genres: Genre[] }>()
const model = defineModel<{ order: string, genres: string[] }>()

const demographic = computed(() => props.genres.filter(genre => genre.kind === 'demographic'))
const theme = computed(() => props.genres.filter(genre => genre.kind === 'theme'))
const genre = computed(() => props.genres.filter(genre => genre.kind === 'genre'))

const orderKeys = ['ranked', 'popularity', 'aired_on', 'name', 'random']
</script>

<template>
  <aside v-if="model" class="anime-list-menu">
    <section class="section">
      <h3 class="title">
        Сортировка
      </h3>
      <ul>
        <li v-for="item in orderKeys" :key="item">
          <UiRadio v-model="model.order" :value="item" :label="$t(`order.${item}`)" />
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

    .title {
      margin: 0;
      font-size: 18px;
      font-weight: 700;
      color: var(--text);
    }
  }
</style>
