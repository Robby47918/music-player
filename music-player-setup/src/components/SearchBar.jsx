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
        <form onSubmit={handleSubmit} className=" flex items-center gap-4 p-20">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for songs, artists, albums..."
                className="w-full px-50 py-2 rounded-lg bg-gray-300 text-indigo-900 placeholder-white focus:placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-purple-400 px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Search
                </button>
        </form>
    );
};
export default SearchBar;