import React from 'react';
import { ProductDisplayPageService } from './productDisplayPage.module';
import './productDisplayPage.styles.css';

const ProductDisplayPage = ({ match }) => {
  const { product } = ProductDisplayPageService({ match });

  return(
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
                <select className='selectBtn_count'>
                  <option>{item.countInStock}</option>
                </select>
                <button type='button' className='selectBtn_addCart'>
                  Add item to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDisplayPage;