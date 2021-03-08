import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, prd) => total + prd.price, 0);

  let shipping = 0;

  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }
  const tax = total / 10;
  const grandTotal = total + shipping + tax;

  const formateNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };

  return (
    <div>
      <h4>Order Summery</h4>
      <p>Items Ordered: {cart.length}</p>
      <p>Product Price: {formateNumber(total)}</p>
      <p>
        <small>Shipping Cost: $ {shipping}</small>
      </p>
      <p>
        <small>Tax + Vat: {formateNumber(tax)}</small>
      </p>
      <p> Total Price: $ {formateNumber(grandTotal)}</p>
      <br />
      {props.children}
    </div>
  );
};

export default Cart;
