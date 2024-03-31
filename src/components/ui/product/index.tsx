"use client";
import React, { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { useFormatter } from "next-intl";
import { ArrowLeftRight, Heart, Share2 } from "lucide-react";
import { Button } from "..";

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
  const [hovered, setHovered] = useState(false);
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
    <div
      className="relative m-auto h-_443 w-_285 bg-gray-100"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={imageStyle}></div>
      <div className="px-5 pt-2">
        <h2 className="mt-4 text-sm font-semibold">{name}</h2>
        <p className="mt-2 truncate text-xs text-gray-400 ">{title}</p>
        <p className="mt-2 text-sm">
          <span className="font-semibold">
            {priceFormat.number(promoPrice || 0, {
              style: "currency",
              currency: "EUR",
            })}
          </span>
          <span className="ml-4 text-gray-200 line-through">
            {" "}
            {priceFormat.number(price || 0, {
              style: "currency",
              currency: "EUR",
            })}
          </span>
        </p>
      </div>
      <div
        className={`absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform bg-black-500 px-4 ${
          hovered ? "opacity-100" : "pointer-events-none opacity-0"
        } transition-opacity duration-500`}
      >
        <div className="flex h-full flex-col items-center justify-center">
          <Button
            label="Add to cart"
            variant="secondary"
            className="h-12 w-_208 font-semibold"
          />
          <div className="mt-6 flex w-full items-center justify-between">
            <p className="flex items-center font-semibold hover:cursor-pointer">
              <Share2 color="#fff" size={18} />
              <span className="font-semibold text-white-100 ">
                <span className="group/link relative block overflow-hidden delay-75">
                  <span className="block text-base tracking-[0.01em] transition-transform duration-500 group-hover/link:translate-y-[-100%]">
                    Share
                  </span>
                  <span className="absolute left-0 block text-base tracking-[0.01em] transition-transform duration-500 group-hover/link:translate-y-[-100%]">
                    Share
                  </span>
                </span>
              </span>
            </p>
            <p className="flex items-center font-semibold text-white-100 hover:cursor-pointer">
              <ArrowLeftRight color="#fff" size={18} />
              <span className="group/link relative block overflow-hidden delay-75">
                <span className="block text-base tracking-[0.01em] transition-transform duration-500 group-hover/link:translate-y-[-100%]">
                  Compare
                </span>
                <span className="absolute left-0 block text-base tracking-[0.01em] transition-transform duration-500 group-hover/link:translate-y-[-100%]">
                  Compare
                </span>
              </span>
            </p>
            <p className="flex items-center font-semibold text-white-100 hover:cursor-pointer">
              <Heart color="#fff" size={18} />
              <span className="group/link relative block overflow-hidden delay-75">
                <span className="block text-base tracking-[0.01em] transition-transform duration-500 group-hover/link:translate-y-[-100%]">
                  Like
                </span>
                <span className="absolute left-0 block text-base tracking-[0.01em] transition-transform duration-500 group-hover/link:translate-y-[-100%]">
                  Like
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
