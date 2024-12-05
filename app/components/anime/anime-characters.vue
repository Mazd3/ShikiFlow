<script setup lang="ts">
interface Props {
  characters: Array<{ id: string, character: { name: string, poster: { preview2xUrl: string } }, rolesEn: Array<string> }>
}

const { characters } = defineProps<Props>()

const mainCharacters = computed(() => characters.filter(item => item.rolesEn[0] === 'Main'))
</script>

<template>
  <BaseRowList title="Main characters" link="/anime" class="anime-characters">
    <div class="anime-characters__list">
      <div v-for="item in mainCharacters" :key="item.id" class="anime-characters__item">
        <img :src="item?.character?.poster?.preview2xUrl" alt="">
        <span>{{ item?.character?.name }}</span>
      </div>
    </div>
  </BaseRowList>
</template>

<style scoped>
.anime-characters {
  margin: 32px 0;
}

.anime-characters__list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1;
  gap: 20px;
}

.anime-characters__item {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  img {
    display: block;
    width: 100%;
    /* aspect-ratio: 2/3; */
    object-fit: cover;
    border-radius: 8px;
  }

  span {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.4;
  }
}
</style>
