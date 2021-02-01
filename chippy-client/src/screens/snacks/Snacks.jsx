import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllSnacks } from "../../sevices/snacks";
import "./snacks.css";
import SingleSnack from "../../components/singleSnack/SingleSnack";

export default function Snacks(props) {
  const { snacks } = props;

  const mappedSnacks = snacks.map((snack, index) => {
    <SingleSnack
      id={snack.id}
      imgURL={snack.img_url}
      name={snack.name}
      price={snack.price}
      origin={snack.origin}
      key={index}
    />;
  });

  return (
    <div className="snacks-div">
      <h3 className="title">All Snacks</h3>

      <div className="single-snack-div">{mappedSnacks}</div>

      <div className="promo">PROMO</div>
    </div>
  );
}
