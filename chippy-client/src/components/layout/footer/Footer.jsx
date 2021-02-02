import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <Link to="/snacks" className="browse">
            Browse
          </Link>
          <br />
          <Link to="/signup">Sign Up</Link>
          <br />
          <Link to="/login">Login</Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
