import persistStore from 'redux-persist/es/persistStore';
import reducer from './reduser';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer });
const persistor = persistStore(store);

export { store, persistor };
