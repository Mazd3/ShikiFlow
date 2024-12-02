export function getAnimeStatus(type: string): string {
  switch (type) {
    case 'ongoing':
      return 'Онгоинг'
    case 'released':
      return 'Вышло'
    case 'anons':
      return 'Анонсировано'
    default:
      return ''
  }
}
