import { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleFilter = () => {
    onFilter({ brand, category, priceRange });
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center mt-4 space-y-2 sm:space-y-0 sm:space-x-2">
      <input 
        type="text"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        className="px-4 py-2 border border-gray-400 rounded-md sm:mb-0 mb-2"
        placeholder="Brand"
      />
      <input 
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 border border-gray-400 rounded-md sm:mb-0 mb-2"
        placeholder="Category"
      />
      <input 
        type="text"
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        className="px-4 py-2 border border-gray-400 rounded-md sm:mb-0 mb-2"
        placeholder="Price Range(100-500)"
      />
      <button 
        onClick={handleFilter} 
        className="px-4 py-2 bg-blue-500 text-white rounded-md sm:mt-0 mt-2"
      >
        Filter
      </button>
    </div>
  );
};

export default Filter;

