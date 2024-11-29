export function useAnimeCharacters(id: string) {
  const res = useFetch('https://shikimori.one/api/graphql', {
    method: 'post',
    body: JSON.stringify({
      query:
      `query ($ids: String) {
        animes(ids: $ids) {
          id
          characterRoles { character { id, name, poster, { originalUrl, previewUrl } }, rolesEn }
        }
      }`,
      variables: { ids: id },
    }),
  })
  return res
}
