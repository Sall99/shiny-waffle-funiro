"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@react-hook/media-query";

const categories = [
  { title: "Dinning", imageUrl: "dinning.png", path: "/dinning" },
  { title: "Living", imageUrl: "living.png", path: "/living" },
  { title: "Bedroom", imageUrl: "bedroom.png", path: "/bedroom" },
];

export function Categories() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const imageWidth = isMobile ? 250 : 381;
  const imageHeight = isMobile ? 315 : 480;
  return (
    <section className="px-4">
      <div className="my-14 text-center">
        <h2 className="text-lg font-bold capitalize">Browse the range</h2>
        <p>Discover an exquisite selection tailored just for you.</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        {categories.map(({ title, imageUrl, path }, index) => (
          <Link href={path} key={index}>
            <div className="relative">
              <Image
                src={`/images/${imageUrl}`}
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
