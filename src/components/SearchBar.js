import React, { useState } from 'react';
import './SearchBar.css';
import { redirect } from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
