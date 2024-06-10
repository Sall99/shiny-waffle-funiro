import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const items = [
  {
    img: "quality.png",
    title: "HighQualityTitle",
    description: "HighQuality",
  },
  {
    img: "guarantee.png",
    title: "WarrantyProtectionTitle",
    description: "WarrantyProtection",
  },
  {
    img: "shipping.png",
    title: "FreeShippingTitle",
    description: "FreeShipping",
  },
  {
    img: "customer-support.png",
    title: "Support24_7Title",
    description: "Support24_7",
  },
];

export const Feature = () => {
  const t = useTranslations("feature");
  return (
    <div className="mt-4 flex flex-col gap-14 bg-orange-100 px-14 py-_102 md:flex-row md:justify-center">
      {items.map(({ img, title, description }, key) => (
        <div key={key} className="flex flex-col items-center gap-4 md:flex-row">
          <div className="relative h-_60 w-_60">
            <Image
              src={`/images/${img}`}
              alt="logo"
              fill
              sizes="(max-width: 768px) 50px, (max-width: 1200px) 50px, 50px"
            />
          </div>
          <div className="text-center md:text-start">
            <h2 className=" font-semibold">{t(title)}</h2>
            <p className="text-sm font-medium text-gray-500">
              {t(description)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
