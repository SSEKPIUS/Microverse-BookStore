import React from 'react';
import PropTypes from 'prop-types';
import Chart from './Chart';

const Book = ({ book }) => {
  const { id, title, author } = book;
  return (
    <div>
      <span>{id}</span>
      <div>
        <span>action</span>
        <h3>{title}</h3>
        <span>{author}</span>
        <div>
          <ul>
            <li>
              <button type="button">comments</button>
            </li>
            <li>
              <button type="button">remove</button>
            </li>
            <li>
              <button type="button">edit</button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Chart />
        <div>
          <span>64%</span>
          <span>completed</span>
        </div>
      </div>
      <div>
        <h4>current chapter</h4>
        <span>chapter 17</span>
        <button type="button">update progress</button>
      </div>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.string.isRequired,
};
export default Book;
