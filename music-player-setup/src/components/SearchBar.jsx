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
        <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for songs, artists, albums..."
                className="border border-gray-300 rounded px-4 py-2 w-full"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                    Search
                </button>
        </form>
    );
};
export default SearchBar;