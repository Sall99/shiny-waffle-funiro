"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@react-hook/media-query";

const categories = [
  {
    title: "Dinning",
    imageUrl:
      "https://res.cloudinary.com/dx6jhjxpt/image/upload/v1710347652/shiny-waffle-funiro/dinning_dmrmw0.png",
    path: "/dinning",
  },
  {
    title: "Living",
    imageUrl:
      "https://res.cloudinary.com/dx6jhjxpt/image/upload/v1710347652/shiny-waffle-funiro/living_ccm3p2.png",
    path: "/living",
  },
  {
    title: "Bedroom",
    imageUrl:
      "https://res.cloudinary.com/dx6jhjxpt/image/upload/v1710347653/shiny-waffle-funiro/bedroom_iartde.png",
    path: "/bedroom",
  },
];

export function Categories() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const imageWidth = isMobile ? 250 : 381;
  const imageHeight = isMobile ? 315 : 480;
  return (
    <section className="px-4 md:px-32">
      <div className="my-14 text-center">
        <h2 className="text-lg font-bold capitalize">Browse the range</h2>
        <p>Discover an exquisite selection tailored just for you.</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        {categories.map(({ title, imageUrl, path }, index) => (
          <Link href={path} key={index}>
            <div className="relative">
              <Image
                src={imageUrl}
                alt={title}
                width={imageWidth}
                height={imageHeight}
                layout="fixed"
              />
            </div>
            <p className="mt-8 text-center font-semibold">{title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
