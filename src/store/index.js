import reducer from './reducer';
import { store, persistor } from './store';
import {
  contactsSlice,
  contactsReducers,
  addContact,
  deleteContact,
} from './contactsSlice/slice';

export {
  store,
  persistor,
  reducer,
  contactsSlice,
  contactsReducers,
  addContact,
  deleteContact,
};
