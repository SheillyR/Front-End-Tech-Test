import React, { useContext } from "react";
import ShopContext from "../context/ShopContext";
import MainNavigation from "../../shared/mainNavigation/mainNavigation";
import "./cartPage.styles.css";

function CartPage(props) {
  const context = useContext(ShopContext);

  return (
    <React.Fragment>
      <MainNavigation
        cartItemNumber={context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <section className="cart">
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {context.cart.map((cartItem, i) => (
            <li key={i}>
              <div className='img-container'>
                <img className='img' src={`http://localhost:5000/${cartItem.image}`} alt={cartItem.name} />
              </div>
              <div>
                <strong>{cartItem.name}</strong>   ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  className="remove-btn"
                  onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </React.Fragment>
  );
};

export default CartPage;