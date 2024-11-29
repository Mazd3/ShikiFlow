export type Order =
  | 'id'
  | 'id_desc'
  | 'ranked'
  | 'kind'
  | 'kind_desc'
  | 'popularity'
  | 'name'
  | 'aired_on'
  | 'episodes'
  | 'status'
  | 'random'
  | 'ranked_random'
  | 'ranked_shiki'
  | 'created_at'
  | 'created_at_desc'

export type Kind =
  | 'tv'
  | 'movie'
  | 'ova'
  | 'ona'
  | 'special'
  | 'tv_special'
  | 'music'
  | 'pv'
  | 'cm'

export interface UseAnimesParams {
  ids?: string
  limit?: number
  order?: Order
  search?: string
  kind?: Kind
}

export function useAnimes({ ids, limit = 20, order = 'ranked', search, kind }: UseAnimesParams) {
  const res = useFetch('https://shikimori.one/api/graphql', {
    method: 'post',
    body: JSON.stringify({
      query:
      `query ($limit: Int, $search: String, $order: OrderEnum, $kind: AnimeKindString, $ids: String) {
        animes(limit: $limit, search: $search, order: $order, kind: $kind, ids: $ids) {
          id
          name
          russian
          kind
          poster { id originalUrl mainUrl }
        }
      }`,
      variables: { ids, limit, order, search, kind },
    }),
  })
  return res
}

// main2xUrl
// mainAlt2xUrl
// mainAltUrl
// mainUrl
// mini2xUrl
// miniAlt2xUrl
// miniAltUrl
// miniUrl
// originalUrl
// preview2xUrl
// previewAlt2xUrl
// previewAltUrl
// previewUrl
