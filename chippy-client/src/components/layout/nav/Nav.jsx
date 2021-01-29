import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { currentUser, handleLogout } = props;
  return (
    <>
      <div className="nav-container">
        <nav>
          <h1>Brand</h1>
          {currentUser ? (
            <>
              <p>{currentUser.username}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
          {currentUser && <></>}
          <Link to="/snacks">
            <ul>Explore</ul>
          </Link>
          <Link to="/countries">
            <ul>Countries</ul>
          </Link>
          <Link to="/flavors">
            <ul>Flavors</ul>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Nav;
