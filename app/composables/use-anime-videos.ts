export function useAnimeVideos(id: string) {
  const res = useFetch('https://shikimori.one/api/graphql', {
    method: 'post',
    body: JSON.stringify({
      query:
      `query ($ids: String) {
        animes(ids: $ids) {
          id
          videos { id imageUrl }
        }
      }`,
      variables: { ids: id },
    }),
  })
  return res
}
