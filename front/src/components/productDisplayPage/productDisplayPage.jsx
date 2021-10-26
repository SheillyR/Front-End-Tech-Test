import React from 'react';
import { ProductDisplayPageService } from './productDisplayPage.module';
import ShopContext from '../context/ShopContext';
import './productDisplayPage.styles.css';
import NavBar from '../../shared/navBar/navBar';


const ProductDisplayPage = ({ match }) => {
  const { product } = ProductDisplayPageService({ match });

  return(
    <ShopContext.Consumer>
      {context => (
        <React.Fragment>
          <NavBar
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
          />
          <div>

          {product.filter((item) => item._id == match.params.id).map((item) => {
            return (
              <div className='product-container' key={item._id}>
                <div className='image-container'>
                  <img className='image' src={`http://localhost:5000/${item.image}`} alt={item.name} />
                </div>
                <div className='info-container'>
                  <div className='info'>
                    <h2 className='brand'>{item.brand}</h2>
                    <h2>{item.name}</h2>
                    <p className='description'>{item.description}</p>
                    <p className='price'>
                      <strong>Price:</strong> $ {item.price}
                    </p>
                  </div>
                  <div className='select-button'>
                    <button type='button' className='selectBtn_addCart'>
                      Add item to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  );
};

export default ProductDisplayPage;