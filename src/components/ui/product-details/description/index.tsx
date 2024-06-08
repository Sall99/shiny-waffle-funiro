"use client";
import React, { useState } from "react";
import { IReview } from "@/types";
import { useFormatter, useTranslations } from "next-intl";
import { Button, QuantityPicker, Rating } from "@/components";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

interface DescriptionProps {
  id: string;
  name: string;
  title: string;
  category: string;
  description: string;
  price: number;
  promoPrice?: number;
  additionalInformation: string[];
  reviews: IReview[];
}

const Description = ({
  name,
  title,
  price,
  promoPrice,
  reviews,
  additionalInformation,
  category,
}: DescriptionProps) => {
  const t = useTranslations("ProductDetails");
  const priceFormat = useFormatter();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="mt-7 w-full md:mt-14 md:w-_600">
      <div className="border-b border-gray-300 pb-10">
        <h2 className="mb-4 text-base font-medium">{title}</h2>
        <h2 className="text-sm font-medium">{name}</h2>
        <p className="my-4 text-sm">
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
        <div>{reviews && <Rating reviews={reviews} count />}</div>
        <div className="my-8 flex flex-col gap-1 text-sm">
          {additionalInformation?.map((text, key) => <p key={key}>{text}</p>)}
        </div>

        <div className="flex gap-4">
          <QuantityPicker value={quantity} onChange={setQuantity} />
          <Button label={t("addToCart")} variant="tertiary" />
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-10 text-sm text-gray-500">
        <div className="flex">
          <p className="w-28">{t("Category")}</p>:{" "}
          <p className="ml-4">{category}</p>
        </div>
        <div className="flex">
          <p className="w-28">{t("Tags")}</p>:{" "}
          <p className="ml-4 flex gap-3">
            <span>home,</span>
            <span>{category},</span>
            <span>shop</span>
          </p>
        </div>
        <div className="flex">
          <p className="w-28">{t("Share")}</p>:{" "}
          <div className="ml-4 flex gap-2">
            <FaFacebookF color="#B88E2F" />
            <FaTwitter color="#B88E2F" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
