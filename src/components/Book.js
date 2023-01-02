import React from 'react';
import PropTypes from 'prop-types';
import Chart from './Chart';

const Book = ({ book }) => {
  const {
    id, title, author, action,
  } = book;
  return (
    <div className="book">
      <div className="book-content">
        <div className="book-info">
          <span style={{ display: 'none' }}>{id}</span>
          <div>
            <span className="book-category">{action}</span>
            <h3 className="book-title">{title}</h3>
            <span className="book-author">{author}</span>
            <div className="action-buttons">
              <button className="button-outline" type="button">Comments</button>
              <div className="vertical-divider" />
              <button className="button-outline" type="button">Remove</button>
              <div className="vertical-divider" />
              <button className="button-outline" type="button">Edit</button>
            </div>
          </div>
        </div>
        <div className="progress-container">
          <div className="circular-progress-container">
            <Chart />
          </div>
          <div className="progress-stat">
            <p className="percent-complete">64%</p>
            <p className="completed">completed</p>
          </div>
          <div className="progress-divider" />
          <div className="current-chapter-container">
            <div>
              <p className="current-chapter-label">CURRENT CHAPTER</p>
              <p className="current-chapter">Chapter 17</p>
            </div>
            <div>
              <button className="primary-button" type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.object.isRequired,
};
export default Book;
