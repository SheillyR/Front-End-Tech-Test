import React, { useEffect, useState } from 'react';
import API from '../../classes/Api/Api';

export default React.createContext({
  cart: [],

  addProductToCart: product => { },
  removeProductFromCart: productId => { }
});
