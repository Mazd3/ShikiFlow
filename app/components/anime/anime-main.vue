<script setup lang="ts">
interface Props {
  anime: {
    id: string
    name: string
    russian: string
    kind: string
    status: string
    episodes: number
    duration: number
    rating: string
    description: string
    poster: {
      main2xUrl: string
    }
    airedOn: {
      year: number
      date: string
    }
    releasedOn: {
      date: string
    }
    genres: [{
      id: string
      name: string
      russian: string
    }]
  }
}

const { anime } = defineProps<Props>()

const { t } = useI18n()

const info = computed(() => [{
  title: t('anime.kind'),
  value: t(`kind.${anime.kind}`),
}, {
  title: t('anime.genres'),
  value: anime.genres.map(genre => t(`genre.${genre.name}`)),
}, {
  title: t('anime.status'),
  value: t(`status.${anime.status}`),
}, {
  title: t('anime.aired'),
  value: `${new Date(anime.airedOn.date).toLocaleDateString(t('id'), { month: 'short', day: 'numeric', year: 'numeric' })} - ${new Date(anime.releasedOn.date).toLocaleDateString(t('id'), { month: 'short', day: 'numeric', year: 'numeric' })}`,
}, {
  title: t('anime.episodes'),
  value: `${anime.episodes}`,
}, {
  title: t('anime.duration'),
  value: `${anime.duration} ${t('anime.minutes')}`,
}, {
  title: t('anime.rating'),
  value: t(`rating.${anime.rating}`),
}])
</script>

<template>
  <div class="anime-main">
    <div class="anime-main__image-column">
      <img class="anime-main__poster" :src="anime?.poster?.main2xUrl" :alt="anime.name">
      <button class="anime-main__watching-button">
        Просмотрено
      </button>
    </div>
    <div class="anime-main__info-column">
      <div class="anime-main__heading">
        <h1 class="anime-main__title">
          {{ anime.name }}
        </h1>
        <span class="anime-main__subtitle">{{ anime.russian }}</span>
      </div>
      <AnimeInfo class="anime-main__info" :info="info" />
    </div>
    <div class="anime-main__description">
      <div class="anime-main__description-title">
        Описание
      </div>
      <div class="anime-main__description-text" v-html="anime.description" />
    </div>
  </div>
</template>

<style scoped>
.anime-main {
  display: grid;
  grid-template-columns: 320px auto;
  padding-top: 180px;
  grid-column-gap: 64px;
  grid-row-gap: 32px;
}
.anime-main__image-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.anime-main__poster {
  display: block;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 24px 0 rgba(8, 9, 10, .1);
}
.anime-main__watching-button {
  z-index: 1;
  width: 100%;
  height: 52px;

  margin-top: 16px;
  border-radius: 12px;

  color: #fff;
  background-color: #1a1a1a;
  box-shadow: 0 4px 24px 0 rgba(8, 9, 10, .1);
}
.anime-main__info-column {
  display: flex;
  flex-direction: column;
}
.anime-main__heading {
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.anime-main__title {
  margin: 0;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1.2;
  text-wrap: balance;
}
.anime-main__subtitle {
  margin-top: 8px;
  font-weight: 700;
  font-size: 1.25rem;
  color: rgba(var(--text), .75);
  text-wrap: balance;
}
.anime-main__info {
  margin-top: 42px;
}
.anime-main__description {
  grid-column: span 2;
}
.anime-main__description-title {
  font-size: 18px;
  font-weight: 700
}
.anime-main__description-text {
  margin-top: 16px;
  font-size: 16px;
}
</style>
