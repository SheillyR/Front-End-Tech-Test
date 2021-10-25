import React from 'react';
import { Link } from 'react-router-dom';
import './item.styles.css';

const Item = (props) => {

  return(
    <div className='item'>
      <Link className='link' to={`/products/${props._id}`}>
        <div className='imageContainer'>
          <img className='imageContainer_image' src={`http://localhost:5000/${props.image}`} alt={props.name}/>
        </div>
      </Link>
      <div className='content'>
        <h2 className='content_brand'>{props.brand}</h2>
        <h2 className='content_name'>{props.name}</h2>
        <h3 className='content_price'>$ {props.price}</h3>
      </div>
      <div className='selectBtn'>
        <select className='selectBtn_count'>
          <option>{props.countInStock}</option>
        </select>
        <button type='button' className='selectBtn_addCart'>
          Add item to cart
        </button>
      </div>
    </div>
  );
};

export default Item;