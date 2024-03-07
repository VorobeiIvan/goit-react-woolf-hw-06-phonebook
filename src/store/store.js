import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import reducer from './reducer';

const store = configureStore({ reducer });
const persistor = persistStore(store);

export { store, persistor };
