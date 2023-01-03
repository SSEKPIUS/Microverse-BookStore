import uniqid from 'uniqid';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const books = [{
  id: uniqid(), title: 'title1', author: 'author1', category: 'category1',
},
{
  id: uniqid(), title: 'title2', author: 'author2', category: 'category2',
}];

// Reducer
const reducer = (state = books, action = {}) => {
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
