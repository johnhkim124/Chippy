import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div className="carousel1">
            <img
              className="carousel carousel1-img"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-ErRTzpZKQ2UiCfA9lxBWQHaHa%26pid%3DApi&f=1"
              alt="chips variety"
            />
          </div>
          <div className="carousel carousel2">
            <img
              className="carousel2-img"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.y6kRTv7zQdS7IwuTS0WOXwAAAA%26pid%3DApi&f=1"
              alt="candy variety"
            />
          </div>
          <div className="carousel carousel3">
            <img />
          </div>
          <div className="carousel carousel4">
            <img
              className="carousel4-img"
              src="https://m.media-amazon.com/images/I/81IiZskCBZL._AC_UL320_.jpg"
              alt="valentine assorted chocolate"
            />
          </div>
          <div className="carousel carousel5">
            <img
              className="carousel5-img"
              src="https://m.media-amazon.com/images/I/81zkBbZZawL._AC_UL320_.jpg"
              alt="popcorn valentine"
            />
          </div>
          <div className="carousel carousel6">
            <img />
          </div>
        </Slider>
      </div>
    );
  }
}

//Code from https://react-slick.neostack.com/docs/get-started
