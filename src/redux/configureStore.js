import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

function saveToLocalStorage(store) {
  const serializedStore = JSON.stringify(store);
  window.localStorage.setItem('store', serializedStore);
}

const store = configureStore({
  reducer: { books: booksReducer, categories: categoriesReducer },
});
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
