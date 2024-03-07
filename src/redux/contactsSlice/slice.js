import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

// Отримання редуктора з срізу
const contactsReducers = contactsSlice.reducer;

// Отримання екшенів з срізу
const { addContact, deleteContact } = contactsSlice.actions;

// Експортування срізу, редуктора та екшенів
export { contactsSlice, contactsReducers, addContact, deleteContact };
