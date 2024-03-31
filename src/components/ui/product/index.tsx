"use client";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@react-hook/media-query";
import { useFormatter } from "next-intl";

interface ProductProps {
  name: string;
  defaultImage: string;
  title: string;
  promoPrice?: number;
  price: number;
}

export function Product({
  name,
  defaultImage,
  title,
  price,
  promoPrice,
}: ProductProps) {
  const priceFormat = useFormatter();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const imageWidth = 285;
  const imageHeight = isMobile ? 315 : 305;

  const imageStyle = {
    width: `${imageWidth}px`,
    height: `${imageHeight}px`,
    backgroundImage: `url(${defaultImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="w-_285 bg-gray-100 m-auto h-_443">
      <div style={imageStyle}></div>
      <div className="px-5 py-4">
        <h2 className="mt-4 text-sm font-semibold">{name}</h2>
        <p className="text-gray-400 mt-2 truncate text-xs ">{title}</p>
        <p className="mt-2 text-sm">
          <span className="font-semibold">
            {priceFormat.number(promoPrice || 0, {
              style: "currency",
              currency: "EUR",
            })}
          </span>
          <span className="text-gray-200 ml-4 line-through">
            {" "}
            {priceFormat.number(price || 0, {
              style: "currency",
              currency: "EUR",
            })}
          </span>
        </p>
      </div>
    </div>
  );
}
