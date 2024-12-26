export interface LoginResponse {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token: string
  scope: string
  created_at: number
}

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event)
  const { shikiClientId, shikiClientSecret } = useRuntimeConfig()

  console.log(`code${code}`)

  if (!code) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }

  const response: LoginResponse = await fetch('https://shikimori.one/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'ShikiFlow',
    },
    body: JSON.stringify({
      grant_type: 'authorization_code',
      client_id: shikiClientId,
      client_secret: shikiClientSecret,
      code,
      redirect_uri: 'http://localhost:3000/login',
    }),
  }).then(res => res.json())

  if (!response.access_token || !response.refresh_token) {
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

  return { status: 'OK' }
})
