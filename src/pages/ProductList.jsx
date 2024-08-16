import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import Sorting from '../components/Sorting';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async (queryParams = '') => {
    const response = await axios.get(`http://localhost:9000/api/products${queryParams}`);
    setProducts(response.data.products || response.data);
    setTotalPages(response.data.totalPages || 1);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchProducts(`?page=${page}`);
  };

  const handleSearch = (query) => {
    fetchProducts(`/search?q=${query}`);
  };

  const handleFilter = (filterParams) => {
    const query = Object.entries(filterParams)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    fetchProducts(`/filter?${query}`);
  };

  const handleSort = (sortBy) => {
    fetchProducts(`/sort?sortBy=${sortBy}`);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <Filter onFilter={handleFilter} />
      <Sorting onSort={handleSort} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default ProductList;