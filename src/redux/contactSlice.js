import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';

const contactSlice = createSlice({
  name: 'contacts',

  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.error]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContacts.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    [addContacts.pending]: state => {
      state.isLoading = true;
    },
    [addContacts.error]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContacts.pending]: state => {
      state.isLoading = true;
    },
    [deleteContacts.error]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactSlice.reducer;
