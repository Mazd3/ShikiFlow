<script setup lang="ts">
const props = defineProps<{ id: string }>()
const { data, status } = useAnime(props.id)

const anime = computed(() => data.value?.data.animes[0])
const screenshots = computed(() => anime.value?.screenshots)
const background = computed(() => screenshots.value?.[Math.floor(Math.random() * screenshots.value?.length)]?.originalUrl)

const { t } = useI18n()

const info = computed(() => [{
  title: t('anime.kind'),
  value: t(`kind.${anime.value?.kind}`),
}, {
  title: t('anime.genres'),
  value: anime.value?.genres.map(genre => t(`genre.${genre.name}`)),
}, {
  title: t('anime.status'),
  value: t(`status.${anime.value?.status}`),
}, {
  title: t('anime.aired'),
  value: `${new Date(anime.value.airedOn.date).toLocaleDateString(t('id'), { month: 'short', day: 'numeric', year: 'numeric' })} - ${new Date(anime.value.releasedOn.date).toLocaleDateString(t('id'), { month: 'short', day: 'numeric', year: 'numeric' })}`,
}, {
  title: t('anime.episodes'),
  value: `${anime.value?.episodes}`,
}, {
  title: t('anime.duration'),
  value: `${anime.value?.duration} ${t('anime.minutes')}`,
}, {
  title: t('anime.rating'),
  value: t(`rating.${anime.value?.rating}`),
}])
</script>

<template>
  <div v-if="status === 'pending'">
    Loading...
  </div>

  <div v-else class="anime">
    <AnimeBackground v-if="background" :src="background" />
    <div class="image-column">
      <img :src="anime?.poster?.main2xUrl" :alt="anime.name">
      <button>
        Просмотрено
      </button>
    </div>
    <div class="info-column">
      <div class="heading">
        <h1 class="title">
          {{ anime.name }}
        </h1>
        <span class="subtitle">{{ anime.russian }}</span>
      </div>
      <AnimeInfo class="info" :info="info" />
      <!-- <div class="description" v-html="anime.description" />
      <AnimeTabs :id="props.id" /> -->
    </div>
  </div>
</template>

<style scoped>
.anime {
  display: grid;
  grid-template-columns: 320px auto;
  gap: 64px;

  .image-column {

    padding-top: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      display: block;
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 4px 24px 0 rgba(8, 9, 10, .1);
    }

    button {
      z-index: 1;
      width: 100%;
      height: 52px;

      margin-top: 16px;
      border-radius: 12px;

      color: #fff;
      background-color: #1a1a1a;
      box-shadow: 0 4px 24px 0 rgba(8, 9, 10, .1);
    }

  }

  .info-column {
    padding-top: 180px;
    display: flex;
    flex-direction: column;

    .heading {
      height: 220px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .title {
      margin: 0;
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 1.2;
      text-wrap: balance;
    }

    .subtitle {
      margin-top: 8px;
      font-weight: 700;
      font-size: 1.25rem;
      color: rgba(var(--text), .75);
      text-wrap: balance;
    }

    .description {
      margin-top: 32px;
      text-wrap: balance;
    }

    .info {
      margin-top: 42px;
    }
  }
}
</style>
