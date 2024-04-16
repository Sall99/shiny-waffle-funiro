"use client";
import React, { useState } from "react";
import useSWR, { mutate } from "swr";

import { getRelatedProducts } from "@/actions";
import { ProductSkeleton } from "../skeletons";
import { IProduct } from "@/types";
import { Button, Product } from "@/components";

interface RelatedProductsProps {
  category: string;
}

export const RelatedProducts = ({ category }: RelatedProductsProps) => {
  const [displayCount, setDisplayCount] = useState(4);

  const { error, data, isLoading } = useSWR("related-products", () =>
    getRelatedProducts(displayCount, category),
  );

  const fetchMoreProducts = async () => {
    await mutate("related-products", async () => {
      const newData = await getRelatedProducts(displayCount, category);
      return newData;
    });
  };

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 4);
    fetchMoreProducts();
  };

  return (
    <div className="mb-28 px-4 md:px-_102">
      <h2 className="mb-14 text-center text-lg font-bold capitalize">
        Related Products
      </h2>

      {isLoading ? (
        <ProductSkeleton number={4} />
      ) : (
        <div className="grid grid-cols-1 content-center gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.products?.map(
            ({
              id,
              name,
              defaultImage,
              title,
              promoPrice,
              price,
            }: IProduct) => (
              <Product
                key={id}
                name={name}
                defaultImage={defaultImage}
                title={title}
                promoPrice={promoPrice}
                price={price}
                id={id}
              />
            ),
          )}
        </div>
      )}
      <div className="mt-8 flex w-full items-center justify-center">
        <Button
          label="Show More"
          onClick={handleLoadMore}
          className="m-auto h-_48 w-_245 text-base font-bold uppercase hover:bg-white-100"
          variant="primary"
        />
      </div>
    </div>
  );
};
