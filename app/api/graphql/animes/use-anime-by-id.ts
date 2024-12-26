const QUERY
= `query ($ids: String) {
    animes(ids: $ids) {
      id
      name
      russian
      description
      descriptionHtml
      kind
      episodes
      duration
      rating
      status
      airedOn { date }
      releasedOn { date }
      genres { id name russian }
      poster { id originalUrl main2xUrl }
      screenshots { id originalUrl x332Url x166Url }
      characterRoles { character { id, name, poster, { originalUrl, previewUrl, preview2xUrl } }, rolesEn }
      videos { id, name, kind, imageUrl, playerUrl, url }
    }
  }`

export interface Anime {
  id: number
  name: string
  russian: string
  description: string
  descriptionHtml: string
  kind: string
  episodes: number
  duration: number
  rating: number
  status: string
  airedOn: { date: string }
  releasedOn: { date: string }
  genres: { id: number, name: string, russian: string }[]
  poster: { id: number, originalUrl: string, main2xUrl: string }
  screenshots: { id: number, originalUrl: string, x332Url: string, x166Url: string }[]
  characterRoles: { character: { id: number, name: string, poster: { originalUrl: string, previewUrl: string, preview2xUrl: string } }, rolesEn: string }[]
  videos: { id: number, name: string, kind: string, imageUrl: string, playerUrl: string, url: string }[]
}

interface AnimeResponse {
  data: {
    animes: Anime[]
  }
}

export function useAnimeById(id: string) {
  const response = useGqlApi<AnimeResponse>({
    method: 'post',
    body: JSON.stringify({ query: QUERY, variables: { ids: id } }),
  })

  const anime = response.data.value?.data.animes[0] || null

  return { ...response, anime }
}
