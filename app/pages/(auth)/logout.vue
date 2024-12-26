<script setup lang="ts">
async function logout() {
  const res = await $fetch('http://localhost:3000/api/logout', { method: 'POST' })

  if (res.status === 'OK') {
    return navigateTo('/animes')
  }
  else {
    console.log('Ошибка авторизации')
    return navigateTo('/')
  }
}

onMounted(() => {
  logout()
})
</script>

<template>
  <div />
</template>
