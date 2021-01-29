import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <Link to="/snacks">
            <ul>Browse</ul>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
