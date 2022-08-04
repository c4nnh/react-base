import { Token } from '../models'

const KEYS = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
}

export const setTokens = (token: Token) => {
  localStorage.setItem(KEYS.ACCESS_TOKEN, token.accessToken)
  localStorage.setItem(KEYS.REFRESH_TOKEN, token.refreshToken)
}

export const clearTokens = () => {
  localStorage.removeItem(KEYS.ACCESS_TOKEN)
  localStorage.removeItem(KEYS.REFRESH_TOKEN)
}
