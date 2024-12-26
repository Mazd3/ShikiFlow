<script setup lang="ts">
const { query } = useRoute()

async function login() {
  if (query.code) {
    const res = await $fetch('http://localhost:3000/api/login', { method: 'POST', query: { code: query.code } })

    if (res.status === 'OK') {
      return navigateTo('/animes')
    }
    else {
      console.log('Ошибка авторизации')
      return navigateTo('/')
    }
  }
}

onMounted(() => {
  login()
})
</script>

<template>
  <div />
</template>
