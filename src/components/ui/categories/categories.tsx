"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@react-hook/media-query";
import { useTranslations } from "next-intl";

const categories = [
  {
    title: "dining",
    imageUrl:
      "https://res.cloudinary.com/dx6jhjxpt/image/upload/v1710347652/shiny-waffle-funiro/dinning_dmrmw0.png",
    path: "/shop/diningroom",
  },
  {
    title: "living",
    imageUrl:
      "https://res.cloudinary.com/dx6jhjxpt/image/upload/v1710347652/shiny-waffle-funiro/living_ccm3p2.png",
    path: "/shop/livingroom",
  },
  {
    title: "bedroom",
    imageUrl:
      "https://res.cloudinary.com/dx6jhjxpt/image/upload/v1710347653/shiny-waffle-funiro/bedroom_iartde.png",
    path: "/shop/bedroom",
  },
];

export function CategoriesSection() {
  const t = useTranslations("categoriesSection");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const imageWidth = isMobile ? 250 : 280;
  const imageHeight = isMobile ? 315 : 380;
  return (
    <section className="px-4 md:px-32">
      <div className="my-14 text-center">
        <h2 className="text-lg font-bold capitalize">{t("browse")}</h2>
        <p>{t("discover")}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        {categories.map(({ title, imageUrl, path }, index) => (
          <Link href={path} key={index}>
            <div className="relative">
              <Image
                src={imageUrl}
                alt={""}
                width={imageWidth}
                height={imageHeight}
              />
            </div>
            <p className="mt-8 text-center font-semibold">{t(title)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
