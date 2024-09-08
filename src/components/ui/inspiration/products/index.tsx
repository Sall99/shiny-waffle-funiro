"use client";
import React from "react";
import Slider from "react-slick";

import "./index.css";
import { homeProductsSlider } from "@/constants/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMediaQuery } from "react-responsive";

export default function Products() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <ChevronRight color="#B88E2F" width={10} height={10} />,
    prevArrow: <ChevronLeft color="#B88E2F" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
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
            }}
          >
            <div className="slider-content-overlay">
              <p className="flex items-center gap-4 text-xs">
                <span>0 {id}</span>{" "}
                <span className="w-8 border-t border-black-500"> </span>
                <span>{description}</span>
              </p>
              <h3 className="slider-title">{title}</h3>
              <p className="slider-description">{description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
