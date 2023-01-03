import axios from 'axios';
import env from 'react-dotenv';

const instance = axios.create({
  baseURL: env.API_URL,
});

export const getBooks = async () => {
  const { data } = await instance.get('/books');
  return data;
};

export const addBooks = async (book) => {
  const { data } = await instance.post('/books', { book });
  return data;
};

export const delBooks = async (itemId) => {
  const { data } = await instance.delete(`/books/${itemId}`);
  return data;
};
