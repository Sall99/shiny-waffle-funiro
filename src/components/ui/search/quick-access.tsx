"use client";
import React, { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { useTranslations } from "next-intl";
import Link from "next/link";

import "./index.css";

const categories = [
  {
    title: "dinning",
    imageUrl:
      "https://res.cloudinary.com/dx6jhjxpt/image/upload/v1710794780/shiny-waffle-funiro/8150qMb040L._AC_SL1500__xbhwgp.jpg",
    path: "/dinning",
  },
  {
    title: "living",
    imageUrl:
      "https://res.cloudinary.com/dx6jhjxpt/image/upload/v1711316529/shiny-waffle-funiro/81Y-bLzDF2L._AC_SL1500__rrr7ug.jpg",
    path: "/living",
  },
  {
    title: "bedroom",
    imageUrl:
      "https://res.cloudinary.com/dx6jhjxpt/image/upload/v1712231437/shiny-waffle-funiro/81hToDpaK3S._AC_SL1500__fsb455.jpg",
    path: "/bedroom",
  },
];

export function QuickAccess() {
  const [hoveredTitle, setHoveredTitle] = useState("");

  const handleMouseEnter = (title: string) => {
    setHoveredTitle(title);
  };

  const handleMouseLeave = () => {
    setHoveredTitle("");
  };
  const t = useTranslations("categoriesSection");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const imageWidth = isMobile ? 250 : 186;
  const imageHeight = isMobile ? 315 : 332;
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
      {categories.map(({ title, imageUrl, path }, index) => (
        <Link href={path} key={index}>
          <div
            className="category-item"
            style={{
              width: imageWidth,
              height: imageHeight,
              backgroundImage: `url(${imageUrl})`,
              objectFit: "fill",
              backgroundSize: "cover",
            }}
            onMouseEnter={() => handleMouseEnter(title)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredTitle === title && (
              <div className="category-title text-center">{t(title)}</div>
            )}
          </div>
        </Link>
      ))}
      <div
        style={{ width: imageWidth, height: imageHeight }}
        className="bg-orange-500 p-4 text-white-100"
      >
        <h2 className=" font-medium">
          {t("howCan")} <br /> {t("weHelp")}
        </h2>

        <ul className="mt-6 text-sm">
          <li className="mb-2">
            <Link href="/my-order">{t("trackOrder")}</Link>
          </li>
          <li className="mb-2">
            <Link href="/develivery">{t("deliverReturn")}</Link>
          </li>
          <li className="mb-2">
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
