import { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleFilter = () => {
    onFilter({ brand, category, priceRange });
  };

  return (
    <div className="flex justify-center mt-4 space-x-4">
      <input 
        type="text"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        className="px-4 py-2 border border-gray-400"
        placeholder="Brand"
      />
      <input 
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 border border-gray-400"
        placeholder="Category"
      />
      <input 
        type="text"
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        className="px-4 py-2 border border-gray-400"
        placeholder="Price Range"
      />
      <button onClick={handleFilter} className="px-4 py-2 bg-blue-500 text-white">
        Filter
      </button>
    </div>
  );
};

export default Filter;
