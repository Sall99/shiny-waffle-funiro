"use client";
import React from "react";

export const NoResult = () => {
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
    <div className="w-full">
      <h2 className="font-medium">
        Sorry, we didn’t find any matches for “addydasss”
      </h2>
      <div className="mt-8 flex w-full gap-4">
        <div className="search w-80">
          <div>
            <h2 className="text-sm font-medium">Try the following:</h2>
            <ul className="ml-4 mt-4 list-disc text-xs">
              <li className="mb-2">Double check your spelling</li>
              <li className="mb-2">Use fewer keywords</li>{" "}
              <li className="mb-2">
                Search fo an item that is less specific and refine results
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="text-sm font-medium">Search instead</h2>
            <ul className="mt-4 grid grid-cols-3 gap-4">
              <li className="bg-gray-100 px-2 py-2 text-xs">low sneakers</li>
              <li className="bg-gray-100 px-2 py-2 text-xs">low sneakers</li>
              <li className="bg-gray-100 px-2 py-2 text-xs">low sneakers</li>
              <li className="bg-gray-100 px-2 py-2 text-xs">low sneakers</li>
            </ul>
          </div>
        </div>
        <div className="">
          <h2 className="text-sm font-medium">Popular products</h2>

          <div className="mt-4 flex items-center gap-4">
            <div style={imageStyle}></div>
            <p>Casual footwear (43)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
