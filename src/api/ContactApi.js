import axios from 'axios';

const instanceContacts = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = {
  set(token) {
    instanceContacts.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instanceContacts.defaults.headers.common.Authorization = '';
  },
};

const setCurrentToken = token => {
  if (token) {
    setToken.set(token);
    return;
  }
  setToken.unset();
};

// user

export async function register(signupData) {
  const { data } = await instanceContacts.post('/users/signup', signupData);
  setToken.set(data.token);
  return data;
}

export async function login(signupData) {
  const { data } = await instanceContacts.post('/users/login', signupData);
  setToken.set(data.token);
  return data;
}

export async function fetchCurrent(token) {
  try {
    setCurrentToken(token);
    const data = await instanceContacts.get('/users/current');
    return data.data;
  } catch (error) {
    setCurrentToken();
    throw error;
  }
}

export async function logout() {
  const data = await instanceContacts.post('/users/logout');
  setToken.unset();
  return data.data;
}

// contacts
export const getContacts = async () => {
  const { data } = await instanceContacts.get('/contacts');
  return data;
};

export const toAdd = async data => {
  const { data: result } = await instanceContacts.post('/contacts', data);
  return result;
};

export const toDelete = async id => {
  await instanceContacts.delete(`/contacts/${id}`);
  return id;
};
