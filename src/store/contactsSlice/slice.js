import { combineReducers, createSlice } from '@reduxjs/toolkit';

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

const { addContact, deleteContact } = contactsSlice.actions;

const contactsReducers = combineReducers({
  contacts: contactsSlice.reducer,
});

export { contactsSlice, contactsReducers, addContact, deleteContact };
