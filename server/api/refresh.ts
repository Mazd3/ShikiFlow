export interface RefreshResponse {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token: string
  scope: string
  created_at: number
}

export default defineEventHandler(async (event) => {
  const refreshToken = getCookie(event, 'refresh_token')

  if (!refreshToken) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }

  const response: RefreshResponse = await fetch('https://shikimori.one/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'ShikiFlow',
    },
    body: JSON.stringify({
      grant_type: 'refresh_token',
      client_id: 'Ye3E9pvypStsldfmCXmHgT0y8CsuzeG7EdnDXPEI7IA',
      client_secret: 'MtvqIwzKIs_mHnqf0k5WIxCq6219xPh2BaV-9dufCRc',
      refresh_token: refreshToken,
    }),
  }).then(res => res.json())

  if (!response.access_token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }

  setCookie(event, 'refresh_token', response.refresh_token, {
    httpOnly: true,
    path: '/',
  })

  setCookie(event, 'access_token', response.access_token, {
    maxAge: response.expires_in * 1000,
    path: '/',
  })
})
