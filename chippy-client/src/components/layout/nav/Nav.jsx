import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { currentUser, handleLogout } = props;
  return (
    <>
      <div className="nav-container">
        <nav>
          <div className="brand">
            <h1>Brand</h1>
          </div>

          {currentUser ? (
            <>
              <div className="user">
                <p>Hello, {currentUser.username}</p>
                <button onClick={handleLogout}>Logout</button>
                <Link to="/new-snack">
                  <button>Create</button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="user">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
              </div>
            </>
          )}
          {currentUser && <></>}
          <div className="links">
            <Link to="/snacks">
              <ul>Explore</ul>
            </Link>
            <Link to="/countries">
              <ul>Countries</ul>
            </Link>
            <Link to="/flavors">
              <ul>Flavors</ul>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
