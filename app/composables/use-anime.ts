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
          genres { id name }
          poster { id originalUrl mainUrl }
          screenshots { id originalUrl x332Url x166Url }
        }
      }`,
      variables: { ids: id },
    }),
  })
  return res
}
