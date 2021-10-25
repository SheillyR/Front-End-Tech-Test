import React from 'react';
import './productListPage.styles.css';
import Item from '../../shared/item/item';
import { ProductListPageService } from './productListPage.module';

const ProductListPage = () => {
  const { products } = ProductListPageService();
  return(
    <div className='container'>
      { products 
        ?
        products.map((product, i) => {
          return(
              <Item
                key={i} 
                {...product}
              />
          );
        })
        :
        null  
      }
    </div>
  );
};

export default ProductListPage;
