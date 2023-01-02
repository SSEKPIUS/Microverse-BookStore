// Actions
const ADD_BOOK = 'bookstore/books/ADD';
const REMOVE_BOOK = 'bookstore/books/REMOVE';

// Reducer
const reducer = (state = [], action = {}) => {
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
