<script setup lang="ts">
interface SearchItemProps {
  item: {
    id: string
    name: string
    russian: string
    poster: {
      previewUrl: string
      preview2xUrl: string
    }
    genres: [{ id: string, name: string, russian: string }]
  }
}

const { item } = defineProps<SearchItemProps>()

const genresString = computed(() => item.genres.map(genre => genre.name).join(', '))
</script>

<template>
  <div class="search-item">
    <img class="search-item__image" :src="item.poster?.preview2xUrl" alt="">
    <div class="search-item__info">
      <div class="search-item__name">
        {{ item.name }}
      </div>
      <div class="search-item__russian">
        {{ item.russian }}
      </div>
      <div class="search-item__genres">
        Жанры:
        <template v-for="genre in item.genres" :key="genre.id">
          <span>{{ genre.name }}</span>{{ genre !== item.genres[item.genres.length - 1] ? ', ' : '' }}
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-item {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.search-item__image {
  border-radius: 8px;
  aspect-ratio: 2/3;
  object-fit: cover;
  height: 200px;
}

.search-item__info {
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.search-item__name {
  font-size: 18px;
  font-weight: 700;
}

.search-item__genres {
  text-wrap: balance;
  line-height: 1.5;

  span {
    display: inline-block;
  }
}
</style>
