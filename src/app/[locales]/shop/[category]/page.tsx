"use client";
import { getRelatedProducts } from "@/actions";
import { Button, HeroSection, Product, ProductSkeleton } from "@/components";
import { IProduct } from "@/types";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import useSWR, { mutate } from "swr";

export function Category() {
  const { category } = useParams<{ category: string }>();

  const [displayCount, setDisplayCount] = useState(16);

  const { error, data, isLoading } = useSWR("products", () =>
    getRelatedProducts(displayCount, category),
  );

  const fetchMoreProducts = async () => {
    await mutate("products", async () => {
      const newData = await getRelatedProducts(displayCount, category);
      return newData;
    });
  };

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 4);
    fetchMoreProducts();
  };
  return (
    <div>
      <HeroSection title={category} />
      <div className="mb-28 mt-40 px-4 md:px-_102">
        {isLoading ? (
          <ProductSkeleton number={8} />
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
    </div>
  );
}

export default Category;
