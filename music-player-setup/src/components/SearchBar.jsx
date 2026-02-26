import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-lg">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for songs, artists, albums..."
        className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
      <button
        type="submit"
        className="px-6 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;