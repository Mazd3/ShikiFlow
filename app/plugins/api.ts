export default defineNuxtPlugin((nuxtApp) => {
  // const { session } = useUserSession()

  const api = $fetch.create({
    baseURL: 'https://shikimori.one/api',
    onRequest({ request, options, error }) {
      const access_token = useCookie('access_token').value
      options.headers.set('Content-Type', 'application/json')
      if (!access_token)
        return
      options.headers.set('Authorization', `Bearer ${access_token}`)
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        const res = await api('/api/refresh', { method: 'POST' })
        if (res.status !== 'OK') {
          await api('/api/logout', { method: 'POST' })
        }
      }
    },
  })

  return {
    provide: {
      api,
    },
  }
})
