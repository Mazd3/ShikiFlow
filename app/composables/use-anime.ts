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
          kind
          genres { id name }
          poster { id originalUrl mainUrl }
        }
      }`,
      variables: { ids: id },
    }),
  })
  return res
}
