import { useEffect, useState } from 'react';
import URL from '../../classes/Url/URL';
import API from '../../classes/Api/Api';

const ProductListPageService = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const api = new API(`${URL.URL_SERVER}api/products`);
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