export function getAnimeType(type: string): string {
  switch (type) {
    case 'tv':
      return 'TV Сериал'
    case 'movie':
      return 'Фильм'
    case 'ova':
      return 'OVA'
    case 'ona':
      return 'ONA'
    case 'special':
      return 'Спецвыпуск'
    case 'tv_special':
      return 'TV Спецвыпуск'
    case 'music':
      return 'Клип'
    case 'pv':
      return 'Проморолик'
    case 'cm':
      return 'Реклама'
    default:
      return ''
  }
}
