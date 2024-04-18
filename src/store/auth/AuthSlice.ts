import { createSlice } from "@reduxjs/toolkit"

interface User {
  id: string
  name: string
}

interface AuthState {
  status: "checking" | "authenticated" | "not-authenticated"
  user: User | null
  errorMessage?: string | undefined
}

const initialState: AuthState = {
  status: "checking",
  user: null,
  errorMessage: undefined,
}

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,

  reducers: {
    onChecking: (state) => {
      state.status = "checking"
      state.user = null
      state.errorMessage = undefined
    },
    onLogin: (state, { payload }) => {
      state.status = "authenticated"
      state.user = payload
      state.errorMessage = undefined
    },
    onLogout: (state, { payload }) => {
      state.status = "not-authenticated"
      state.user = null
      state.errorMessage = payload
    },
  },
})

export const { onChecking, onLogin, onLogout } = AuthSlice.actions
