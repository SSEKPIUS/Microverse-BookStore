import React from 'react';
import { useSelector } from 'react-redux';
import AddNewBook from './AddNewBook';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <ul className="books">
        {books.map((book) => <li key={book.id}><Book book={book} /></li>)}
      </ul>
      <div className="horizontal-divider" />
      <AddNewBook />
    </div>
  );
};

export default Books;
