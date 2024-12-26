export default defineEventHandler(async (event) => {
  deleteCookie(event, 'access_token')
  deleteCookie(event, 'refresh_token')

  return {
    status: 'OK',
  }
})
