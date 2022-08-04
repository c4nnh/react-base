// Auth
export type Token = {
  accessToken: string
  refreshToken: string
}

export type LoginPayload = {
  username: string
  password: string
}

export type LoginResponse = {
  user: User
  token: Token
}

// Model
export type User = {
  id: string
  username: string
}
