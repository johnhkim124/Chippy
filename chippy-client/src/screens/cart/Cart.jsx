import React from "react";
import SingleSnack from "../../components/singleSnack/SingleSnack";

const Cart = (props) => {
  const { cartSnacks } = props;

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
