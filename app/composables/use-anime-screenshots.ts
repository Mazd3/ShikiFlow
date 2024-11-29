export function useAnimeScreenshots(id: string) {
  const res = useFetch('https://shikimori.one/api/graphql', {
    method: 'post',
    body: JSON.stringify({
      query:
      `query ($ids: String) {
        animes(ids: $ids) {
          id
          screenshots { id originalUrl x332Url x166Url }
        }
      }`,
      variables: { ids: id },
    }),
  })
  return res
}
