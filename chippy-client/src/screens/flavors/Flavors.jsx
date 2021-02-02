import { Link } from "react-router-dom";

export default function Flavor(props) {
  const { flavors } = props;
  return (
    <div>
      <h1>Flavors</h1>
      {flavors.map((flavor) => (
        <Link>
          <div>{flavor.name}</div>
        </Link>
      ))}
    </div>
  );
}
