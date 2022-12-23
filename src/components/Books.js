import React from 'react';
import AddNewBook from './AddNewBook';
import Book from './Book';

const Books = () => {
  const books = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <div>
      <div>
        {books.map((book) => <Book key={book.id} book={book} />)}
      </div>
      <AddNewBook />
    </div>
  );
};

export default Books;
