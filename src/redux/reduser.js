import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { contactsReducers } from './contactsSlice/slice';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducers);

const reducer = {
  contacts: persistedReducer,
};

export default combineReducers(reducer);
