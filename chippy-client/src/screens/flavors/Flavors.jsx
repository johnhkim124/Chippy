import { Link } from "react-router-dom";
import "./flavors.css";

export default function Flavor(props) {
  const { flavors } = props;
  return (
    <div className="flavors-div">
      <h1>Flavors</h1>

      {flavors.map((flavor) => (
        <div className="flavors">
          <Link to={`/flavors/${flavor.id}`}>
            <div className="flavor-pic-div">{flavor.name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
