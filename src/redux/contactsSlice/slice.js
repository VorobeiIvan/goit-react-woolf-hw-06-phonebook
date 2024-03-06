import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contact: { name: '', number: '' } },
  reducers: {
    createContact: (state, { payload }) => {
      state.contact = payload;
    },
    deleteContact: (state, { payload }) => {
      state.contact = payload;
    },
    updateContact: (state, { payload }) => {
      state.contact = payload;
    },
  },
});

export const contactsReducers = contactsSlice.reducer;

export const { createContact, deleteContact, updateContact } =
  contactsSlice.actions;
