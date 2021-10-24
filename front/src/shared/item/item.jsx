import React from 'react';
import { ItemProject } from './item.module';

const Item = (props) => {
  const { values } = ItemProject(props);

  return(
    <div className='item'>
      <div className='item-image'>
        <img src={values.image}/>
      </div>
      <div className='item-content'>
        <h2 className='item-content_brand'>{values.brand}</h2>
        <h2 className='item-content_name'>{values.name}</h2>
        <h3>
          <span className='item-content_price'>{values.price}</span>
        </h3>
      </div>
      <div className='item-selectBtn'>
        <select className='item-selectBtn_count'>
          <option>{values.countInStock}</option>
        </select>
        <button type='button' className='item-selectBtn_addCart'>
          Add item to cart
        </button>
      </div>
    </div>
  );
};

export default Item;