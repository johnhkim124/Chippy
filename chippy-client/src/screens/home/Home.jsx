import React from "react";
import Carousel from "../../components/carousel/Carousel";

const Home = () => {
  return (
    <div>
      {/* <Carousel /> */}

      <div className="container">
        <div id="block-one" className="description">
          <h2>Snacks from Around the Globe!</h2>
          <hr />
          <div className="text">
            orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
            eros, pulvinar facilisis
          </div>
        </div>

        <div id="block-two" className="description">
          <h2>Free Shipping!</h2>
          <hr />
          <div className="text">
            orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
            eros, pulvinar facilisis
          </div>
        </div>
      </div>

      <div className="container-two">
        <div id="container-two-pic1">
          <h1>Find you Flavor</h1>
          <button className="promotion-button">Flavors</button>
        </div>

        <div id="container-two-pic2">
          <h1>Snack On!</h1>
          <button className="promotion-button">Browse All Snacks</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
