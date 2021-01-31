import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./snacks.css";

export default function Snacks(props) {
  const { snacks } = props;

  return (
    <div className="snacks-div">
      <h3 className="title">All Snacks</h3>

      {snacks.map((snack) => (
        <div className="single-snack-div">
          <Link to={`/snacks/${snack.id}`}>
            <div>
              <img src={snack.img_url}></img>
              <p>{snack.name}</p>
              <p>{snack.price}</p>
              <p>{snack.origin}</p>
            </div>
          </Link>
        </div>
      ))}
      <div className="promo">PROMO</div>
    </div>
  );
}
