import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { contactsReducers } from './contactsSlice/slice';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducers);

const reducer = {
  contacts: persistedReducer,
};

export default combineReducers(reducer);
