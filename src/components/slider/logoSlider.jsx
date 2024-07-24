import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import logo1 from "../../images/Frame 38.svg";
import logo2 from "../../images/Frame 41.svg";
import logo3 from "../../images/Frame 42.svg";
import logo4 from "../../images/Frame 60.svg";
import logo5 from "../../images/Frame 69.svg";
import logo6 from "../../images/Frame 70.svg";
import logo7 from "../../images/pfizer 1.svg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const LogoSlider = () => {
  return (
    <div className="companies-container">
      <h1>Trusted by leading companies worldwide</h1>
      <Slider {...settings} className="logos">
        {logos.map((logo, index) => (
          <div key={index} className="logo-slide">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
