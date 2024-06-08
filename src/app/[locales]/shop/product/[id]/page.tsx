"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import useSWR from "swr";
import { useParams } from "next/navigation";

import {
  Layout,
  ProductDetails,
  ProductDetailsSkeleton,
  RelatedProducts,
} from "@/components";

import { getProduct } from "@/actions";
import { useTranslations } from "next-intl";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const t = useTranslations("ProductDetails");

  const { error, data, isLoading } = useSWR("product", () => getProduct(id));

  return (
    <section>
      <Layout>
        <div className="flex gap-4 bg-orange-300 px-4 py-8 text-sm lg:px-_102">
          <Link href="/" className="tex-sm flex items-center gap-2">
            <span>{t("Home")}</span>
            <ChevronRight size={20} />
          </Link>
          <Link href="/shop" className="flex items-center gap-2">
            <span>{t("Shop")}</span>
            <ChevronRight size={20} />
          </Link>
          <p className="flex items-center gap-2">
            <span>{data?.product?.name}</span>
          </p>
        </div>
      </Layout>

      {error ? (
        <div>{t("errorFetching")}</div>
      ) : isLoading || !data.product ? (
        <ProductDetailsSkeleton />
      ) : (
        <ProductDetails product={data.product} />
      )}

      {data?.product && <RelatedProducts category={data.product.category} />}
    </section>
  );
}
