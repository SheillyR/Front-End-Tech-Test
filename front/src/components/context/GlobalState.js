import React, { useReducer, useEffect, useState } from 'react';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducers';
import ShopContext from './ShopContext';
import API from '../../classes/Api/Api';

function GlobalState(props) {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const api = new API(`http://localhost:5000/api/products`);
      const response = await api.get();
      const { data } = response;
      setData(data);
    };
    getProducts();
  }, []);


  const products = [...data];

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = productId => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

export default GlobalState;