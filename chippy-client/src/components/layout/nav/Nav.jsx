import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { currentUser, handleLogout } = props;
  return (
    <>
      <div className="nav-container">
        <nav>
          <div className="brand">
            <Link to="/">
              <img className="logo" src="./ChippyLogo.png" atl="Chippy Logo" />
            </Link>
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
            <Link to="/flavors">
              <ul>Flavors</ul>
            </Link>
            <Link to="/carts">
              <ul>Cart</ul>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
