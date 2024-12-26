export const QUERY
= `query ($limit: Int, $search: String, $order: OrderEnum, $kind: AnimeKindString, $ids: String, $page: Int, $genres: String) {
    animes(limit: $limit, search: $search, order: $order, kind: $kind, ids: $ids, page: $page, genre: $genres) {
      id
      name
      russian
      kind
      poster { preview2xUrl }
      airedOn { year }
      genres { id name russian }
      userRate { episodes }
    }
  }`

export interface ShortAnime {
  id: string
  name: string
  russian: string
  kind: string
  poster: { preview2xUrl: string }
  airedOn: { year: number }
  genres: { id: string, name: string, russian: string }[]
}

export interface UseAnimesResponse {
  data: {
    animes: ShortAnime[]
  }
}

export interface AnimeParams {
  limit?: number
  search?: string
  order?: string
  kind?: string
  ids?: string
  page?: number
  genres?: string
}

export function useAnimes(params: AnimeParams) {
  const response = useGqlApi<UseAnimesResponse>({
    method: 'post',
    body: JSON.stringify({ query: QUERY, variables: params }),
  })

  const animes = response.data.value?.data.animes || []

  return { ...response, animes }
}

export function useAsyncAnimes(params: Ref<AnimeParams>) {
  const limit = computed(() => Number(params.value.limit) || 48)
  const page = computed(() => Number(params.value.page) || 1)
  const genres = computed(() => params.value.genres?.join(', '))

  const formattedParams = computed(() => ({ ...params.value, limit: limit.value, page: page.value, genres: genres.value }))

  return useAsyncData<UseAnimesResponse>(
    `animes`,
    () => useNuxtApp().$api('graphql', { method: 'post', body: JSON.stringify({ query: QUERY, variables: formattedParams.value }) }),
    { watch: [params.value], transform: data => data.data.animes || [] },
  )
}
