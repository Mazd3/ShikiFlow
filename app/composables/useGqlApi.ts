import type { UseFetchOptions } from 'nuxt/app'

export function useGqlApi<T>(options?: UseFetchOptions<T>) {
  return useFetch('graphql', {
    ...options,
    $fetch: useNuxtApp().$api as typeof $fetch,
  })
}
