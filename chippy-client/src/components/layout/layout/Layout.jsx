import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import "./Layout.css";

const Layout = (props) => {
  const { currentUser, handleLogout } = props;

  return (
    <div className="layout">
      <Nav
        className="layout"
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <div>{props.children}</div>
      <Footer className="footer" />
    </div>
  );
};

export default Layout;
