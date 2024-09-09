"use client";
import React, { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { useFormatter, useTranslations } from "next-intl";
import { ArrowLeftRight, Heart, Share2 } from "lucide-react";
import { Button } from "@/components";
import Link from "next/link";
import clsx from "clsx";
import {
  addToCart,
  addToFavoris,
  selectCartItems,
  selectFavorisItems,
} from "@/store";
import { IProduct } from "@/types";
import { useDispatch, useSelector } from "react-redux";

export interface ProductProps {
  id: string;
  name: string;
  defaultImage: string;
  title: string;
  promoPrice?: number;
  price: number;
  layout?: string;
}

export function Product({
  name,
  defaultImage,
  title,
  price,
  promoPrice,
  id,
  layout = "grid",
}: ProductProps) {
  const t = useTranslations("Products");
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);
  const priceFormat = useFormatter();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const imageWidth = isMobile ? 384 : 285;
  const imageHeight = isMobile ? 315 : 305;
  const cartItems = useSelector(selectCartItems);
  const favorisItems = useSelector(selectFavorisItems);

  const imageStyle = {
    width: `${imageWidth}px`,
    height: `${imageHeight}px`,
    backgroundImage: `url(${defaultImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "0 auto",
  };

  const product: IProduct = {
    id,
    name,
    title,
    price,
    promoPrice,
    defaultImage,
    imageUrl: [],
    category: "",
    description: "",
    additionalInformation: [],
    reviews: [],
  };

  const handleAddToCart = () => {
    const itemInCart = cartItems.find((item) => item.id === id);
    let message;
    if (itemInCart) {
      message = t("increased_quantity_of");
    } else {
      message = t("addedToCart");
    }

    dispatch(addToCart({ product, message }));
  };

  const handleAddToFavoris = () => {
    const itemInFavoris = favorisItems.find((item) => item.id === id);

    let message;
    if (itemInFavoris?.id) {
      message = t("itemExist");
    } else {
      message = t("addedToFavoris");
    }

    dispatch(addToFavoris({ product, message }));
  };

  return (
    <div
      className={clsx(
        "relative m-auto bg-gray-100 pb-4 sm:pb-0 md:w-_285",
        layout === "vertical" && "flex h-_305 w-full items-center",
        layout === "grid" && "sm:h-_450",
      )}
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
        {layout === "vertical" && (
          <div className="mt-8 flex flex-col gap-10">
            <div className="flex gap-10">
              <div>
                <p className="flex items-center gap-3 font-semibold hover:cursor-pointer">
                  <Share2 color="#000" size={18} />

                  <span className="font-semibold text-black-800 ">
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
              </div>
              <div>
                <p className="text-white-800 flex items-center gap-3 font-semibold hover:cursor-pointer">
                  <ArrowLeftRight color="#000" size={18} />
                  <Link href={`/shop/product/${id}`}>
                    <span className="group/link relative block overflow-hidden delay-75">
                      <span className="block text-base tracking-[0.01em] transition-transform duration-500 group-hover/link:translate-y-[-100%]">
                        Details
                      </span>
                      <span className="absolute left-0 block text-base tracking-[0.01em] transition-transform duration-500 group-hover/link:translate-y-[-100%]">
                        Details
                      </span>
                    </span>
                  </Link>
                </p>
              </div>
              <div>
                <p className="text-white-800 flex items-center gap-3 font-semibold hover:cursor-pointer">
                  <Heart color="#000" size={18} />
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
            <Button
              label="Add to cart"
              variant="secondary"
              className="h-12 w-_208 font-semibold"
              onClick={handleAddToCart}
            />
          </div>
        )}
      </div>

      {layout === "grid" && (
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
              onClick={handleAddToCart}
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
                <Link href={`/shop/product/${id}`}>
                  <span className="group/link relative block overflow-hidden delay-75">
                    <span className="block text-base tracking-[0.01em] transition-transform duration-500 group-hover/link:translate-y-[-100%]">
                      Details
                    </span>
                    <span className="absolute left-0 block text-base tracking-[0.01em] transition-transform duration-500 group-hover/link:translate-y-[-100%]">
                      Details
                    </span>
                  </span>
                </Link>
              </p>
              <p
                className="flex items-center font-semibold text-white-100 hover:cursor-pointer"
                onClick={handleAddToFavoris}
              >
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
      )}
    </div>
  );
}
