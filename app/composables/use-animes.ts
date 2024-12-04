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
  page?: number
  genres?: string
}

export function getAnimes(variables: UseAnimesParams) {
  return $fetch('https://shikimori.one/api/graphql', {
    method: 'post',
    body: JSON.stringify({
      query:
      `query ($limit: Int, $search: String, $order: OrderEnum, $kind: AnimeKindString, $ids: String, $page: Int, $genres: String) {
        animes(limit: $limit, search: $search, order: $order, kind: $kind, ids: $ids, page: $page, genre: $genres) {
          id
          name
          russian
          kind
          poster { preview2xUrl }
          airedOn { year }
          genres { id name russian }
        }
      }`,
      variables,
    }),
  })
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
