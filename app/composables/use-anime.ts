export function useAnime(id: string) {
  const res = useFetch<{ data: { animes: any[] } }>('https://shikimori.one/api/graphql', {
    method: 'post',
    body: JSON.stringify({
      query:
      `query ($ids: String) {
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
          genres { id name }
          poster { id originalUrl main2xUrl }
          screenshots { id originalUrl x332Url x166Url }
          characterRoles { character { id, name, poster, { originalUrl, previewUrl, preview2xUrl } }, rolesEn }
          videos { id, name, kind, imageUrl, playerUrl, url }
        }
      }`,
      variables: { ids: id },
    }),
  })
  return res
}
