import "./Nav.css";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";

const Nav = (props) => {
  const { currentUser, handleLogout } = props;
  return (
    <>
      <div className="nav-container">
        <nav>
          <div className="brand">
            <Link to="/">
              <img className="logo" src="ChippyLogo.png" alt="Chippy Logo" />
            </Link>
          </div>

          {currentUser ? (
            <>
              <div className="user">
                <p className="greeting-msg">Hello, {currentUser.username}</p>
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
                <br />
                <Link to="/signup">Sign Up</Link>
                <br />
              </div>
            </>
          )}
          {currentUser && <></>}
          <div className="links">
            <Link to="/snacks">
              <ul>Explore All Snacks</ul>
            </Link>
            <Link to="/flavors">
              <ul>Flavors</ul>
            </Link>
          </div>
          <div className="cart">
            <Link to="/carts">
              <ul>
                <IconButton color="primary" aria-label="add to shopping cart">
                  <AddShoppingCartIcon />
                </IconButton>
              </ul>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
