import Input from './Input/Input';
import NameInput from './NameInputComponent/NameInputComponent';
import NumberInput from './NumberInputComponent/NumberInputComponent';
import Filter from './FilterComponent/FilterComponent';
import {
  FilterConstantProps,
  NameInputComponentProps,
  NumberInputComponentProps,
} from 'utils/InputProps';
import { formSubmitHandler, deleteContact } from 'utils/contactUtils';
import { changeFilter } from 'utils/filterUtils';

export {
  Input,
  NameInput,
  NumberInput,
  Filter,
  formSubmitHandler,
  deleteContact,
  changeFilter,
  FilterConstantProps,
  NameInputComponentProps,
  NumberInputComponentProps,
};
