"use client";
import React from "react";
import { useMediaQuery } from "@react-hook/media-query";

import "./index.css";
import clsx from "clsx";

interface ProductSkeletonProps {
  number: number;
  layout?: string;
}

export function ProductSkeleton({
  number,
  layout = "grid",
}: ProductSkeletonProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const imageWidth = 285;
  const imageHeight = isMobile ? 315 : 305;
  const imageStyle = {
    width: `${imageWidth}px`,
    height: `${imageHeight}px`,
  };

  return (
    <div
      className={clsx(
        "grid w-full content-center gap-8",
        layout === "vertical" && "grid-cols-1",
        layout === "grid" && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {Array(number)
        .fill(0)
        .map((el, index) => (
          <div
            key={index}
            className={clsx(
              "c-item m-auto w-_285 bg-gray-100",
              layout === "vertical" && "flex  h-_305 w-full items-center",
              layout === "grid" && "h-_443",
            )}
          >
            <div style={imageStyle} className="c-skeleton-image"></div>
            <div>
              <div className="flex flex-col px-5 pt-2">
                <h2 className="c-skeleton-name"></h2>
                <p className="c-skeleton-title mt-4"></p>
                <p className="mt-2 flex gap-3 text-sm">
                  <span className="c-skeleton-promo-price"></span>
                  <span className="c-skeleton-price"></span>
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
