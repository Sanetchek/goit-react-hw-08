import { createSlice } from "@reduxjs/toolkit"
import {
  register,
  login,
  logout,
  refreshUser
} from "./operations"

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        state.loading = true
        state.error = false
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })
  }
})

export default slice.reducer;