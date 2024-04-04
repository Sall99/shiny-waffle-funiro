"use client";
import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import { useTranslations } from "next-intl";

import { Button, Product, ProductSkeleton } from "@/components";
import { getAllProducts } from "@/actions";
import { IProduct } from "@/types";

export function ProductsSection() {
  const [displayCount, setDisplayCount] = useState(9);
  const t = useTranslations("Products");

  const { error, data, isLoading } = useSWR("products", () =>
    getAllProducts(displayCount),
  );

  const fetchMoreProducts = async () => {
    await mutate("products", async () => {
      const newData = await getAllProducts(displayCount);
      return newData;
    });
  };

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 10);
    fetchMoreProducts();
  };

  return (
    <div className="mb-20 mt-14 md:px-_102">
      <h2 className="mb-8 text-center text-lg font-bold capitalize">
        {t("ourProducts")}
      </h2>

      {isLoading ? (
        <ProductSkeleton number={9} />
      ) : (
        <div className="grid grid-cols-1 content-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.products.map(
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
              />
            ),
          )}
        </div>
      )}

      <div className="mt-8 flex w-full items-center justify-center">
        <Button
          label="Show More"
          onClick={handleLoadMore}
          className="w-_245 h-_48 m-auto text-base font-bold uppercase hover:bg-white-100"
          variant="primary"
        />
      </div>
    </div>
  );
}
