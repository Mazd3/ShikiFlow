const QUERY
= `query ($entryType: GenreEntryTypeEnum!) {
  genres(entryType: $entryType) {
    id
    name
    russian
    kind
  }
}`

interface Genre {
  id: string
  name: string
  russian: string
  kind: string
}

interface GenreResponse {
  data: {
    genres: Genre[]
  }
}

export function useGenres(entryType: 'Anime' | 'Manga') {
  return useGqlApi<GenreResponse>({
    method: 'post',
    body: JSON.stringify({ query: QUERY, variables: { entryType } }),
    transform: data => data.data.genres || [],
  })
}
