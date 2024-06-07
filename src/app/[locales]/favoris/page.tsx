import React from "react";

import { Feature, HeroSection, Layout } from "@/components";
import { X } from "lucide-react";

export default function Favoris() {
  const imageWidth = 90;
  const imageHeight = 90;
  const imageStyle = {
    width: `${imageWidth}px`,
    height: `${imageHeight}px`,
    // backgroundImage: `url(${defaultImage})`,
    backgroundImage: `url(https://res.cloudinary.com/dx6jhjxpt/image/upload/v1711320643/shiny-waffle-funiro/91xlt73qmhL._AC_SL1500__ayelj8.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section>
      <HeroSection title="Favoris" />
      <Layout className="px-5 pb-20 pt-10 lg:pb-40">
        <h2 className="mb-9 text-lg font-semibold">My favorites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="mt-4 flex items-center gap-4">
            <div style={imageStyle}></div>
            <p>Casual footwear (43)</p>
            <div className="flex h-8 w-8 items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-600">
              <X size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div style={imageStyle}></div>
            <p>Casual footwear (43)</p>
            <div className="flex h-8 w-8 items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-600">
              <X size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div style={imageStyle}></div>
            <p>Casual footwear (43)</p>
            <div className="flex h-8 w-8 items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-600">
              <X size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div style={imageStyle}></div>
            <p>Casual footwear (43)</p>
            <div className="flex h-8 w-8 items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-600">
              <X size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div style={imageStyle}></div>
            <p>Casual footwear (43)</p>
            <div className="flex h-8 w-8 items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-600">
              <X size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div style={imageStyle}></div>
            <p>Casual footwear (43)</p>
            <div className="flex h-8 w-8 items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-600">
              <X size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div style={imageStyle}></div>
            <p>Casual footwear (43)</p>
            <div className="flex h-8 w-8 items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-600">
              <X size={20} />
            </div>
          </div>
        </div>
      </Layout>
      <Feature />
    </section>
  );
}
