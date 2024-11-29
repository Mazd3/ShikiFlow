export function useAnimePersons(id: string) {
  const res = useFetch('https://shikimori.one/api/graphql', {
    method: 'post',
    body: JSON.stringify({
      query:
      `query ($ids: String) {
        animes(ids: $ids) {
          id
          personRoles { person { id, name, poster, { originalUrl, previewUrl } }, rolesRu }
        }
      }`,
      variables: { ids: id },
    }),
  })
  return res
}
