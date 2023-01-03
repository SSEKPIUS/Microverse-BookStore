import React from 'react';
import AddNewBook from './AddNewBook';
import Book from './Book';

const Books = () => {
  const books = [{
    id: 1, title: 'title1', author: 'author1', category: 'category1',
  },
  {
    id: 2, title: 'title2', author: 'author2', category: 'category2',
  },
  {
    id: 3, title: 'title3', author: 'author3', category: 'category3',
  },
  {
    id: 4, title: 'title4', author: 'author4', category: 'category4',
  }];
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
