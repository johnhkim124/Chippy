import { Link } from "react-router-dom";

export default function Snacks(props) {
  const { snacks } = props;
  return (
    <div>
      <h3>All Snacks</h3>
      {snacks.map((snack) => (
        <p>{snack.name}</p>
      ))}
      <Link to="/foods/new">
        <button>Create</button>
      </Link>
    </div>
  );
}
