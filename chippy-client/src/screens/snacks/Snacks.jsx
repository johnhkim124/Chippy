import { Link } from "react-router-dom";

export default function Snacks(props) {
  const { snacks } = props;
  return (
    <div>
      <h3>All Snacks</h3>
      {snacks.map((snack) => (
        <div>
          <img src={snack.img_url}></img>
          <p>{snack.name}</p>
          <p>{snack.price}</p>
          <p>{snack.origin}</p>
        </div>
      ))}
    </div>
  );
}
