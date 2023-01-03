/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import uniqid from 'uniqid';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBooks, addBooks, delBooks } from '../../api/Api';

const initialState = {
  booksList: [],
  msg: '',
  currentRequestId: '',
  loading: 'fin',
  error: '',
};

export const fetchBooksList = createAsyncThunk(
  'books/fetchBooksList',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await getBooks();
      return resp;
    } catch (err) {
      return rejectWithValue([], err);
    }
  },
);

export const addBooksList = createAsyncThunk(
  'books/addBooksList',
  async (book, { rejectWithValue }) => {
    try {
      const resp = await addBooks(book);
      return resp;
    } catch (err) {
      return rejectWithValue([], err);
    }
  },
);

export const delBooksList = createAsyncThunk(
  'books/delBooksList',
  async (book, { rejectWithValue }) => {
    try {
      const resp = await delBooks(book);
      return resp;
    } catch (err) {
      return rejectWithValue([], err);
    }
  },
);

const { actions, reducer } = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooksList.fulfilled]: (state, { meta, payload }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.booksList = payload;
        state.loading = 'fin';
        state.currentRequestId = '';
      }
    },
    [fetchBooksList.pending]: (state, { meta }) => {
      state.currentRequestId = meta;
      state.loading = 'pending';
    },
    [fetchBooksList.rejected]: (state, { meta, payload, error }) => {
      if (state.currentRequestId === meta) {
        state.currentRequestId = meta;
        state.loading = 'fin';
        state.booksList = payload;
        state.error = error;
      }
    },
    [addBooksList.fulfilled]: (state, { meta, payload }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.resp = payload;
        state.loading = 'fin';
        state.currentRequestId = '';
      }
    },
    [addBooksList.pending]: (state, { meta }) => {
      state.currentRequestId = meta;
      state.loading = 'pending';
    },
    [addBooksList.rejected]: (state, { meta, payload, error }) => {
      if (state.currentRequestId === meta) {
        state.currentRequestId = meta;
        state.loading = 'fin';
        state.msg = payload;
        state.error = error;
      }
    },
    [delBooksList.fulfilled]: (state, { meta, payload }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.msg = payload;
        state.loading = 'fin';
        state.currentRequestId = '';
      }
    },
    [delBooksList.pending]: (state, { meta }) => {
      state.currentRequestId = meta;
      state.loading = 'pending';
    },
    [delBooksList.rejected]: (state, { meta, payload, error }) => {
      if (state.currentRequestId === meta) {
        state.currentRequestId = meta;
        state.loading = 'fin';
        state.msg = payload;
        state.error = error;
      }
    },
  },
});

export default reducer;

/*
// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const loadFromLocalStorage = () => {
  const serializedStore = window.localStorage.getItem('store');
  if (serializedStore === null) return undefined;
  return JSON.parse(serializedStore);
};

const books = [{
  id: uniqid(), title: 'Good Reads', author: 'Paul Walker', category: 'Science Fiction',
}];

const getBooks = () => {
  const storage = loadFromLocalStorage();
  return storage ? storage.books : books;
};

// Reducer
const reducer = (state = getBooks(), action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book !== action.book);
    default: return state;
  }
};
export default reducer;

// Actions
const addBook = (book) => ({ type: ADD_BOOK, book });

const removeBook = (book) => ({ type: REMOVE_BOOK, book });

export { addBook, removeBook };
*/
