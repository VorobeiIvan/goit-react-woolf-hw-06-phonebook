import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Inputs/FilterComponent/FilterComponent';
import { formSubmitHandler, deleteContact } from '../utils/contactUtils';
import { changeFilter } from '../utils/filterUtils';
import {
  FilterConstantProps,
  NameInputComponentProps,
  NumberInputComponentProps,
} from '../utils/InputProps';
import Input from './Inputs/NameInputComponent/NameInputComponent';
import NumberInput from './Inputs/NumberInputComponent/NumberInputComponent';
import { useState, useEffect } from 'react';

export {
  Section,
  ContactForm,
  ContactList,
  Filter,
  formSubmitHandler,
  deleteContact,
  changeFilter,
  FilterConstantProps,
  NameInputComponentProps,
  NumberInputComponentProps,
  Input,
  NumberInput,
  useState,
  useEffect,
};
