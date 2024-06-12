"use client";
import React, { useState, useEffect } from "react";
import useSWR, { mutate } from "swr";
import { useTranslations } from "next-intl";

import { Button, Product, ProductSkeleton } from "@/components";
import { getAllProducts } from "@/actions";
import { IProduct } from "@/types";
import clsx from "clsx";

interface ProductsSectionProps {
  layout?: string;
}

export function ProductsSection({ layout = "grid" }: ProductsSectionProps) {
  const [displayCount, setDisplayCount] = useState(9);
  const t = useTranslations("Products");

  const { error, data, isLoading } = useSWR(
    ["products", displayCount],
    () => getAllProducts(displayCount),
    { revalidateOnFocus: false },
  );

  useEffect(() => {
    mutate(["products", displayCount]);
  }, [displayCount]);

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 10);
  };

  const gridClass =
    layout === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-1";

  return (
    <section className="mb-20 mt-14 md:px-_102">
      <h2 className="mb-8 text-center text-lg font-bold capitalize">
        {t("ourProducts")}
      </h2>

      {isLoading ? (
        <ProductSkeleton number={9} />
      ) : (
        <div
          className={clsx("grid grid-cols-1 content-center gap-8", gridClass)}
        >
          {data?.products?.map(
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
                layout={layout}
              />
            ),
          )}
        </div>
      )}

      <div className="mt-8 flex w-full items-center justify-center">
        <Button
          label={t("showMore")}
          onClick={handleLoadMore}
          className="m-auto h-_48 w-_245 text-base font-bold uppercase hover:bg-white-100"
          variant="primary"
        />
      </div>
    </section>
  );
}
