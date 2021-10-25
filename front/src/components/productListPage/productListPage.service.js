import { useEffect, useState } from 'react';
import API from '../../classes/Api/Api';

const ProductListPageService = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const api = new API(`http://localhost:5000/api/products`);
      const response = await api.get();
      const { data } = response;
      setProducts(data);
    };
    getProducts();
  }, []);

  return {
    products,
  };
};

export default ProductListPageService;