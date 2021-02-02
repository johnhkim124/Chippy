import React, { useState, useEffect } from "react";
import SingleSnack from "../../components/singleSnack/SingleSnack";
import { getCart } from "../../sevices/cart";

const Cart = (props) => {
  const [cartSnacks, setCartSnacks] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const cartData = await getCart();
      setCartSnacks(cartData);
    };
    fetchCart();
  }, [props.currentUser]);

  const mappedCartSnacks = cartSnacks.map((snack, index) => {
    return (
      <SingleSnack
        id={snack.id}
        imgURL={snack.img_url}
        name={snack.name}
        price={snack.price}
        origin={snack.origin}
        key={index}
      />
    );
  });

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>{mappedCartSnacks}</div>
    </div>
  );
};

export default Cart;
