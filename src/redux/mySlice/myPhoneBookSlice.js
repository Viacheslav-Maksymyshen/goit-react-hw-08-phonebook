import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../contaktsOperation';
import { toast } from 'react-toastify';

const initialState = {
  contacts: [],
  filter: '',
  isLoading: false,
  error: null,
};

export const phoneBookSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    toFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.contacts = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.contacts.unshift(payload);
      toast.success('A new contact has been added !');
    },
    [addContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
      toast.info('Contact deleted !');
    },
    [deleteContact.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const getContacts = state => state.items;
export const { toFilter } = phoneBookSlice.actions;
