import React from "react";
import { Layout } from "@/components/layout";
import "./index.css";

export const ProductDetailsSkeleton = () => {
  return (
    <Layout className="px-4 lg:px-_102">
      <div className="product-details-skeleton mt-8 w-full pb-14">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row  lg:justify-between">
          <div className="w-full">
            <div className="flex flex-col-reverse  gap-8 md:flex-row xl:w-_553">
              <div className="grid grid-cols-4  gap-2 md:flex md:flex-col">
                <div className="small-image-container c-small-image-container">
                  <div className="small-image"></div>
                </div>
                <div className="small-image-container c-small-image-container">
                  <div className="small-image"></div>
                </div>
                <div className="small-image-container c-small-image-container">
                  <div className="small-image"></div>
                </div>
                <div className="small-image-container c-small-image-container">
                  <div className="small-image"></div>
                </div>
              </div>
              <div className="c-image image"></div>
            </div>
          </div>

          <div className="w-full  md:w-_600">
            <div>
              <h2 className="c-product-details-name"></h2>
              <h2 className="c-product-details-title"></h2>
              <p className="my-4 text-sm">
                <span className="c-product-details-promo-price"></span>
                <span className="c-product-details-price ml-4"></span>
              </p>
              <div></div>
              <div className="my-8 flex flex-col gap-1 text-sm">
                <span className="c-product-details-star"></span>
              </div>

              <div className="flex gap-4"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
