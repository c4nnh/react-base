import create from 'zustand'
import { persist } from 'zustand/middleware'
import { LoginResponse } from '../models'
import { clearTokens, setTokens } from '../utils'

type AuthState = {
  user?: {
    id: string
    username: string
  }
  login: (response: LoginResponse) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist((set, get) => ({
    login: response => {
      const { user, token } = response
      setTokens(token)
      set({ user })
    },
    logout: () => {
      set({ user: undefined })
      clearTokens()
    },
  }))
)
