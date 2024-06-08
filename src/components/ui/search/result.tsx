"use client";
import React from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { Star } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";

import { Button, Rating } from "@/components";
import { IProduct, IReview } from "@/types";

export interface ProductProps {
  name: string;
  defaultImage: string;
  title: string;
  promoPrice?: number;
  price: number;
  reviews: IReview[];
}

interface ResultProps {
  isLoading: boolean;
  data: {
    length: number;
    products: IProduct[];
  };
}

export function Result({ data, isLoading }: ResultProps) {
  const category = data?.products[0].category;

  const t = useTranslations("categoriesSection");
  return (
    <div>
      {data && (
        <>
          <div className="grid grid-cols-4 gap-4">
            {data.products?.map(
              ({
                id,
                name,
                defaultImage,
                title,
                price,
                promoPrice,
                reviews,
              }) => (
                <Product
                  key={id}
                  name={name}
                  defaultImage={defaultImage}
                  title={title}
                  promoPrice={promoPrice}
                  price={price}
                  reviews={reviews}
                />
              ),
            )}
          </div>
          {data.length > 0 && (
            <Button
              className="mt-8 px-4 py-2"
              label={`${t("SeeResultsIn")} ${t(category)} (${data.length})`}
            />
          )}
        </>
      )}
    </div>
  );
}

const Product = ({
  defaultImage,
  name,
  title,
  reviews,
  promoPrice,
  price,
}: ProductProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const priceFormat = useFormatter();
  const imageWidth = 186;
  const imageHeight = isMobile ? 315 : 230;

  const imageStyle = {
    width: `${imageWidth}px`,
    height: `${imageHeight}px`,
    backgroundImage: `url(${defaultImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <div style={imageStyle}></div>
      <div className="pt-1">
        <h2 className="mt-3 text-xs font-semibold">{name}</h2>
        <p className="mt-2 truncate text-xs text-gray-400 ">{title}</p>
        <p className="mt-2 text-xs">
          <span className="text-xs font-semibold">
            {priceFormat.number(promoPrice || 0, {
              style: "currency",
              currency: "EUR",
            })}
          </span>
          <span className="ml-4 text-xs text-gray-200 line-through">
            {priceFormat.number(price || 0, {
              style: "currency",
              currency: "EUR",
            })}
          </span>
        </p>
        <Rating reviews={reviews} />
      </div>
    </div>
  );
};
