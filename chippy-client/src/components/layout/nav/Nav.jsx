import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <nav>
          <ul>
            <Link to="/snacks">
              <li>Explore</li>
            </Link>
            <Link to="/countries">
              <li>Countries</li>
            </Link>
            <Link to="/flavors">
              <li>Flavors</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
