/* eslint-disable react/prop-types */
import React from 'react';
import Chart from './Chart';

const Book = ({ book }) => {
  // eslint-disable-next-line no-unused-vars
  const x = book;
  return (
    <div>
      <div>
        <span>action</span>
        <h3>the hunger games</h3>
        <span>suzanne collins</span>
        <div>
          <ul>
            <li>comments</li>
            <li>remove</li>
            <li>edit</li>
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

export default Book;
