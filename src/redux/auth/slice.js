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
    loading: false,
    error: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true
        state.error = false
        state.isLoggedIn = false
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoggedIn = true
        state.loading = false
      })
      .addCase(register.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = false
        state.isLoggedIn = false
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isLoggedIn = true
        state.loading = false
      })
      .addCase(login.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      .addCase(logout.pending, (state) => {
        state.loading = true
        state.error = false
        state.isLoggedIn = false
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = []
        state.token = null
        state.isLoggedIn = false
        state.loading = false
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  }
})

export default slice.reducer;