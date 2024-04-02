"use client";
import React from "react";
import useSWR from "swr";
import { useTranslations } from "next-intl";

import { Product, ProductSkeleton } from "@/components";
import { getAllProducts } from "@/actions";
import { IProduct } from "@/types";

export function ProductsSection() {
  const t = useTranslations("Products");
  const { error, data, isLoading } = useSWR("products", getAllProducts);

  return (
    <div className="mt-14 md:px-_102">
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
    </div>
  );
}
