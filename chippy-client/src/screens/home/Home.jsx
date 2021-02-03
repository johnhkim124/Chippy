import React from "react";
import Carousel from "../../components/carousel/Carousel";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Carousel />

      <div className="container">
        <div id="block-one" className="description">
          <h2>Snacks Around The Globe!</h2>
          <hr />
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis
          </div>
        </div>

        <div id="block-two" className="description">
          <h2>Free Shipping! </h2>
          <hr />
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis
          </div>
        </div>
      </div>

      <div className="container-two">
        <div id="container-two-pic1">
          <h1>Find Your Flavor</h1>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.omnomnomad.com%2Fwp-content%2Fuploads%2F2015%2F11%2FDSC_0086.jpg&f=1&nofb=1"
            alt="kit kat flavors"
          />
          <Link to="/flavors">
            <button className="promotion-button">Flavors</button>
          </Link>
        </div>

        <div id="container-two-pic2">
          <h1>Snack On!</h1>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpartycity6.scene7.com%2Fis%2Fimage%2FPartyCity%2F_pdp_sq_%3F%24_1000x1000_%24%26%24product%3DPartyCity%2F863438_01&f=1&nofb=1"
            alt="browse snacks"
          />
          <Link to="/snacks">
            <button className="promotion-button">Browse All Snacks</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
