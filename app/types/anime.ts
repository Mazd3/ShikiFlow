import type { Kind } from '~/api/animes/get-animes'

export interface ShortAnime {
  id: string
  name: string
  russian: string
  kind: Kind
  poster: {
    preview2xUrl: string
  }
  airedOn: {
    year: number
  }
  genres: {
    id: string
    name: string
    russian: string
  }
}

export interface FullAnime {
  id: string
  name: string
  russian: string
  description: string
  descriptionHtml: string
  kind: string
  episodes: number
  duration: number
  rating: string
  status: string
  airedOn: {
    date: string
  }
  releasedOn: {
    date: string
  }
  genres: {
    id: string
    name: string
  }[]
  poster: {
    id: string
    originalUrl: string
    main2xUrl: string
  }
  screenshots: {
    id: string
    originalUrl: string
    x332Url: string
    x166Url: string
  }[]
  characterRoles: {
    character: {
      id: string
      name: string
      poster: {
        originalUrl: string
        previewUrl: string
        preview2xUrl: string
      }
    }
    rolesEn: string
  }[]
  videos: {
    id: string
    name: string
    kind: string
    imageUrl: string
    playerUrl: string
    url: string
  }[]
}
