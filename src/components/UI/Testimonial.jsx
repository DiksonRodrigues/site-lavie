import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Com o selo e a certificação da melhor da região.

        Uno 2012 vendido !!

      “ Não é sobre vender carros , é sobre realizar sonhos”
        </p>

        <div className="mt-1 d-flex align-items-center gap-1">
          <img src={ava01} alt="" className="w-75 h-75 rounded-2" />

          <div>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Com o selo e a certificação da melhor da região.

        Prisma 2016 vendido.

        “ Não é sobre vender carros , é sobre realizar sonhos”
        </p>

        <div className="md-15 align-items-center gap-1">
          <img src={ava02} alt="" className="w-75 h-75 rounded-2" />

          <div>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Com o selo e a certificação da melhor da região.

        Clio 2015 vendido.

      “ Não é sobre vender carros , é sobre realizar sonhos”
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-75 h-75 rounded-2" />

          <div>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Com o selo e a certificação da melhor da região.

        Gol 2014 vendido.

        “ Não é sobre vender carros , é sobre realizar sonhos”

        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-75 h-75 rounded-2" />

          <div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
