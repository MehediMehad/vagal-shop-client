import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex justify-center ">
      <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 border rounded-md border-gray-400"
        placeholder="Search products..."
      />
      <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 rounded-md text-white ml-2">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
