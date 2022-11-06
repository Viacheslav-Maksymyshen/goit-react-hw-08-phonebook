import axios from 'axios';

const instanceContacts = axios.create({
  baseURL: 'https://63582160c27556d28937fbfe.mockapi.io/api/contacts',
});

export const getContacts = async () => {
  const { data } = await instanceContacts.get('/');
  return data;
};

export const toAdd = async data => {
  const { data: result } = await instanceContacts.post('/', data);
  return result;
};

export const toDelete = async id => {
  await instanceContacts.delete(`/${id}`);
  return id;
};
