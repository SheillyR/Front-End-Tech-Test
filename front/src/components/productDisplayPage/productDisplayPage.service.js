import { useState, useEffect } from 'react';
import API from '../../classes/Api/Api';

const ProductDisplayPageService = ({ match }) => {
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    const api = new API(`http://localhost:5000/api/products/?id=?id=${match.params.id}`);
    api.get()
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);


  return {
    product,
  };
};

export default ProductDisplayPageService;