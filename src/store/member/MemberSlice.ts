import { createSlice } from "@reduxjs/toolkit"

export const MemberSlice = createSlice({
  name: "Member",
  initialState: {
    counter: 0,
  },
  reducers: {
    decrement: (state /* action */) => {
      state.counter -= 1
    },
  },
})

export const { decrement } = MemberSlice.actions
