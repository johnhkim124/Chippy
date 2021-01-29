import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <nav>
          <ul>
            <Link to="/snacks">
              <ul>Explore</ul>
            </Link>
            <Link to="/countries">
              <ul>Countries</ul>
            </Link>
            <Link to="/flavors">
              <ul>Flavors</ul>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
