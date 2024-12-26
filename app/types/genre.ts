import type { Kind } from '~/api/animes/get-animes'

export interface Genre {
  id: number
  name: string
  russian: string
  kind: Kind
}
