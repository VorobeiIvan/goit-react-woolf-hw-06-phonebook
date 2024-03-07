import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducer: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

const contactsReducers = contactsSlice.reducer;

const { addContact, deleteContact } = contactsSlice.actions;

export { contactsSlice, contactsReducers, addContact, deleteContact };
