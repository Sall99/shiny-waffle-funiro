import Image from "next/image";
import React from "react";

const items = [
  {
    img: "quality.png",
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    img: "guarantee.png",
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    img: "shipping.png",
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    img: "customer-support.png",
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

export const Feature = () => {
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
            <h2 className=" font-semibold">{title}</h2>
            <p className="text-sm font-medium text-gray-500">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
