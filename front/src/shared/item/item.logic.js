import { useState, useEffect } from 'react';

const ItemLogic = () => {
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart([...cart])
  };

  useEffect(() => {
    addToCart();
  }, []);

  return {
    cart,
  }

};

export default ItemLogic;