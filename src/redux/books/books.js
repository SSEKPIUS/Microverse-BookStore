import uniqid from 'uniqid';

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
