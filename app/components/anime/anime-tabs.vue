<script setup lang="ts">
const props = defineProps({ id: String })

const tabs = ['characters', 'authors', 'frames', 'videos']
const activeTab = ref(0)

function setActiveTab(index: number) {
  activeTab.value = index
}
</script>

<template>
  <div>
    <div class="flex flex-row gap-4 mt-4">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        :class="{ 'bg-green-700': activeTab === index }"
        @click="setActiveTab(index)"
      >
        {{ tab }}
      </button>
    </div>
    <AnimeCharacters v-if="activeTab === 0" :id="props.id" />
    <AnimePersons v-else-if="activeTab === 1" :id="props.id" />
    <AnimeScreenshots v-else-if="activeTab === 2" :id="props.id" />
    <AnimeVideos v-else :id="props.id" />
  </div>
</template>
