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
        <Slider {...settings}>
          <div className="carousel carousel1">
            <img
              className="carousel carousel1-img"
              src="https://m.media-amazon.com/images/I/91uejKhatXL._AC_UL320_.jpg"
              alt="chips variety"
            />
          </div>
          <div className="carousel carousel2">
            <img
              className="carousel2-img"
              src="https://m.media-amazon.com/images/I/816flmsx1JL._AC_UL320_.jpg"
              alt="candy variety"
            />
          </div>
          <div className="carousel carousel3">
            <img
              className="carousel3-img"
              src="https://m.media-amazon.com/images/I/91TKOKJe2zL._AC_UL320_.jpg"
              alt="lays variety"
            />
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
            <img
              className="carousel6-img"
              src="https://m.media-amazon.com/images/I/81wxWMZdhuL._AC_UL320_.jpg"
              alt="kisses valentine"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

//Code from https://react-slick.neostack.com/docs/get-started
