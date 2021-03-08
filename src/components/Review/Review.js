import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import happyImage from "../../images/giphy.gif";
const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setCart([]);
    setOrderPlaced(true);
    processOrder();
  };

  const removeProduct = (productKeys) => {
    const newCart = cart.filter((pd) => pd.key !== productKeys);
    setCart(newCart);
    removeFromDatabaseCart(productKeys);
  };

  useEffect(() => {
    //cart data
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);

    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = saveCart[key];
      return product;
    });

    setCart(cartProducts);
  }, []);

  let thankyou;
  if (orderPlaced) {
    thankyou = <img src={happyImage} alt="" />;
  }

  return (
    <div className="ema-container">
      <div className="ema-product-container">
        {cart.map((pd) => (
          <ReviewItem
            key={pd.key}
            removeProduct={removeProduct}
            product={pd}
          ></ReviewItem>
        ))}
        {thankyou}
      </div>
      <div className="ema-cart-container">
        <Cart cart={cart}>
          <button className="product-button" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
