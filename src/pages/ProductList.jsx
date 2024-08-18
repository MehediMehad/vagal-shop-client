import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import Sorting from '../components/Sorting';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [queryParams, setQueryParams] = useState('');

  const fetchProducts = async (page = 1) => {
    const response = await axios.get(`https://vogal-shop-server.vercel.app/api/products?page=${page}${queryParams}`);
    // const response = await axios.get(`http://localhost:9000/api/products?page=${page}${queryParams}`);
    setProducts(response.data.products || response.data);
    setTotalPages(response.data.totalPages || 1);
  };

  useEffect(() => {
    fetchProducts();
  }, [queryParams]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchProducts(page);
  };

  const handleSearch = (query) => {
    const newQuery = query ? `&q=${query}` : '';
    setQueryParams(newQuery);
    setCurrentPage(1);
  };

  const handleFilter = (filterParams) => {
    const filterQuery = Object.entries(filterParams)
      .filter(([_, value]) => value)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    
    const newQuery = filterQuery ? `&${filterQuery}` : '';
    setQueryParams(newQuery);
    setCurrentPage(1);
  };

  const handleSort = (sortBy) => {
    const newQuery = sortBy ? `&sortBy=${sortBy}` : '';
    setQueryParams(newQuery);
    setCurrentPage(1);
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
