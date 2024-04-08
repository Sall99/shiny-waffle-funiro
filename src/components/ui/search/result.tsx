"use client";
import { useMediaQuery } from "@react-hook/media-query";
import { Star } from "lucide-react";
import React from "react";

import { Button } from "@/components";

export interface ProductProps {
  name: string;
  defaultImage: string;
  title: string;
}

export function Result() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <Product name={""} defaultImage={""} title={""} />
        <Product name={""} defaultImage={""} title={""} />
        <Product name={""} defaultImage={""} title={""} />
        <Product name={""} defaultImage={""} title={""} />
      </div>
      <Button className="mt-8 px-4 py-2" label="See results in Dinning (98)" />
    </div>
  );
}

const Product = ({ defaultImage }: ProductProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const imageWidth = 186;
  const imageHeight = isMobile ? 315 : 230;

  const imageStyle = {
    width: `${imageWidth}px`,
    height: `${imageHeight}px`,
    // backgroundImage: `url(${defaultImage})`,
    backgroundImage: `url(https://res.cloudinary.com/dx6jhjxpt/image/upload/v1711320643/shiny-waffle-funiro/91xlt73qmhL._AC_SL1500__ayelj8.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <div style={imageStyle}></div>
      <div className="pt-1">
        <h2 className="mt-3 text-xs font-semibold">this is a name</h2>
        <p className="mt-2 truncate text-xs text-gray-400 ">this is a title</p>
        <p className="mt-2 text-xs">
          <span className="text-xs font-semibold">
            {/* {priceFormat.number(promoPrice || 0, {
              style: "currency",
              currency: "EUR",
            })} */}
            99.00 E
          </span>
          <span className="ml-4 text-xs text-gray-200 line-through">
            {" "}
            {/* {priceFormat.number(price || 0, {
              style: "currency",
              currency: "EUR",
            })} */}
            99.00 E
          </span>
        </p>
        <p className="mt-2 flex gap-1">
          <Star size={14} />
          <Star size={14} />
          <Star size={14} />
          <Star size={14} />
        </p>
      </div>
    </div>
  );
};
