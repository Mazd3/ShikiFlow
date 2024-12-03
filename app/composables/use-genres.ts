export function useGenres(entryType: 'Anime' | 'Manga' = 'Anime') {
  const res = useFetch('https://shikimori.one/api/graphql', {
    method: 'post',
    body: JSON.stringify({
      query:
      `query ($entryType: GenreEntryTypeEnum!) {
        genres(entryType: $entryType) {
          id
          name
          russian
          kind
        }
      }`,
      variables: { entryType },
    }),
  })
  return res
}
