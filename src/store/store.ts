import { configureStore } from "@reduxjs/toolkit"
import { MemberSlice, AuthSlice } from "./"
import { TeamSlice } from "./team/TeamSlice"

const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    member: MemberSlice.reducer,
    team: TeamSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export type RootState = ReturnType<typeof store.getState>

export default store
