const Sorting = ({ onSort }) => {
    return (
      <div className="flex justify-center mt-4 space-x-4">
        <button onClick={() => onSort('price-asc')} className="px-4 py-2 bg-blue-500 text-white">
          Price: Low to High
        </button>
        <button onClick={() => onSort('price-desc')} className="px-4 py-2 bg-blue-500 text-white">
          Price: High to Low
        </button>
        <button onClick={() => onSort('date')} className="px-4 py-2 bg-blue-500 text-white">
          Newest First
        </button>
      </div>
    );
  };
  
  export default Sorting;
  