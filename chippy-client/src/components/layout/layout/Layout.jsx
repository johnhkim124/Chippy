import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

const Layout = (props) => {
  return (
    <div className="layout">
      <Nav className="layout" />
      <div>{props.children}</div>
      <Footer className="footer" />
    </div>
  );
};

export default Layout;
