"use client";
import React, { ReactNode, useState } from "react";

import { IProduct, IReview } from "@/types";
import { Layout, Rating, Tabs, Avatar } from "@/components";
import Images from "./images";
import Description from "./description";
import "./index.css";
import { useTranslations } from "next-intl";

export interface ProductDetailsProps {
  product: IProduct;
}

interface RenderDescriptionProps {
  description: string;
  images: string[];
}

interface RenderAdditionalInformationProps {
  additionalInformation: string[];
  images: string[];
}

interface RenderReviewsProps {
  reviews: IReview[];
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const t = useTranslations("Tabs");
  const {
    description,
    defaultImage,
    imageUrl,
    additionalInformation,
    id,
    title,
    category,
    name,
    price,
    promoPrice,
    reviews,
  } = product;

  let [tabs] = useState<{ [key: string]: ReactNode }>({
    Description: (
      <RenderDescription description={description} images={imageUrl} />
    ),
    [t("additionalInformation")]: (
      <RenderAdditionalInformation
        additionalInformation={additionalInformation}
        images={imageUrl}
      />
    ),
    [`${t("Reviews")} [${product.reviews.length}]`]: (
      <RenderReviews reviews={reviews} />
    ),
  });

  return (
    <div className="product-details mt-8 pb-14">
      <Layout className="px-4 lg:px-_102">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between">
          <Images
            defaultImage={defaultImage}
            images={imageUrl}
            additionalInformation={additionalInformation}
          />
          <Description
            id={id}
            name={name}
            title={title}
            category={category}
            description={description}
            price={price}
            promoPrice={promoPrice}
            additionalInformation={additionalInformation}
            reviews={reviews}
          />
        </div>
      </Layout>

      <div className="mt-7 border-t border-gray-300 pt-12 md:mt-28">
        <Layout className="px-4 lg:px-_102">
          <div>
            <Tabs tabs={tabs} />
          </div>
        </Layout>
      </div>
    </div>
  );
}

function RenderDescription({ description, images }: RenderDescriptionProps) {
  return (
    <div>
      <div className="lg:px-52">{description}</div>
      <div className="mt-14 flex flex-col justify-between gap-4 md:flex-row">
        <div className="description-product-image-container">
          <div
            className="description-product-image"
            style={{
              backgroundImage: `url(${images[0]})`,
            }}
          />
        </div>
        <div className="description-product-image-container">
          <div
            className="description-product-image"
            style={{
              backgroundImage: `url(${images[1]})`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function RenderAdditionalInformation({
  additionalInformation,
  images,
}: RenderAdditionalInformationProps) {
  return (
    <div>
      <div className="lg:px-52">
        {additionalInformation.map((text, key) => (
          <p key={key}>{text}</p>
        ))}
      </div>

      <div className="mt-14 flex justify-between gap-4">
        <div className="description-product-image-container">
          <div
            className="description-product-image"
            style={{
              backgroundImage: `url(${images[0]})`,
            }}
          />
        </div>
        <div className="description-product-image-container">
          <div
            className="description-product-image"
            style={{
              backgroundImage: `url(${images[1]})`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function RenderReviews({ reviews }: RenderReviewsProps) {
  const t = useTranslations("ProductDetails");
  return (
    <div>
      <div className="lg:px-52">
        {reviews.map(({ author, rating, comment }, key) => (
          <div key={key}>
            <div className="my-4 flex items-center gap-2">
              <Avatar
                src={
                  "https://res.cloudinary.com/dx6jhjxpt/image/upload/v1713107971/shiny-waffle-funiro/user_hicfmb.png"
                }
                size={34}
              />
              <h2 className="font-medium">{author}</h2>
            </div>
            <Rating count={false} number={rating} />
            <p className="mt-2 text-xs">{t("Reviewed")} in May 12, 2021</p>
            <p className="mt-4 text-xs font-bold uppercase text-green-500">
              {t("verifiedPurchase")}
            </p>
            <p className="mt-4 text-sm">{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
