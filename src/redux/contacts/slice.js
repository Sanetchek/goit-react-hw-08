import { createSlice } from "@reduxjs/toolkit"
import {
  fetchContacts,
  addContact,
  deleteContact
} from "./operations"

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload
        state.loading = false
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })
      .addCase(addContact.pending, (state, action) => {
        state.loading = true
        state.error = false
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload]
        state.loading = false
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.loading = true
        state.error = false
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload.id)
        state.loading = false
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })
  }
})

export default slice.reducer;