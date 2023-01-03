import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Books = () => {
  const options = [
    'Action', 'Science Fiction', 'Economy',
  ];
  const defaultOption = options[0];
  return (
    <section>
      <h2 className="form-title ">add new book</h2>
      <form onSubmit={() => true} className="add-form">
        <input
          type="text"
          name="title"
          className="input title-input"
          placeholder="Add title"
          value=""
          onChange={() => true}
        />
        <input
          type="text"
          name="author"
          className="input author-input"
          placeholder="Add author"
          value=""
          onChange={() => true}
        />
        <Dropdown
          options={options}
          onChange={() => true}
          value={defaultOption}
          placeholder="Select an option"
          className="input option-input"
        />
        <button type="submit" className="primary-button-big">
          add book
        </button>
      </form>
    </section>
  );
};

export default Books;
