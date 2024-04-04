"use client";
import React, { useState } from "react";
import Slider from "react-slick";

import "./index.css";
import { homeProductsSlider } from "@/constants/data";

export default function Products() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {homeProductsSlider.map(({ title, description, id, imageUrl }) => (
        <div key={id} className="home-slider-container">
          {" "}
          <div
            className="home-slider-image"
            style={{
              backgroundImage: `url(${imageUrl})`,
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      ))}
    </Slider>
  );
}
