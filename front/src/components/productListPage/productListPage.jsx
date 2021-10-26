import React from 'react';
import { Link } from 'react-router-dom';
import ShopContext from "../context/ShopContext";
import MainNavigation from '../mainNavigation/mainNavigation';
import './productListPage.styles.css';

const ProductListPage = (props) => {
  return (
    <ShopContext.Consumer>
      {context => (
        <React.Fragment>
          <MainNavigation
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
          />
          <div className='container'>
              {context.products.map(product => (
                <div className='item'>
                  <Link className='link' to={`/products/${product._id}`}>
                    <div className='imageContainer'>
                      <img className='imageContainer_image' src={`http://localhost:5000/${product.image}`} alt={product.name}/>
                    </div>
                  </Link>
                  <div className='content'>
                    <h2 className='content_brand'>{product.brand}</h2>
                    <h2 className='content_name'>{product.name}</h2>
                    <h3 className='content_price'>$ {product.price}</h3>
                  </div>
                  <div className='selectBtn'>
                    <select className='selectBtn_count'>
                      <option>{product.countInStock}</option>
                    </select>
                    <button 
                      type='button' 
                      className='selectBtn_addCart'
                      onClick={context.addProductToCart.bind(this, product)}
                      >
                      Add item to cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  );
};

export default ProductListPage;
