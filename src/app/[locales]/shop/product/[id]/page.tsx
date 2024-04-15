"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import useSWR from "swr";
import { useParams } from "next/navigation";

import { Layout, ProductDetails, RelatedProducts } from "@/components";

import { getProduct } from "@/actions";

export default function Product() {
  const { id } = useParams<{ id: string }>();

  const { error, data, isLoading } = useSWR("products", () => getProduct(id));

  return (
    <section>
      <Layout>
        <div className="flex gap-4 bg-orange-300 px-_102 py-8 text-sm">
          <Link href="/" className="tex-sm flex items-center gap-2">
            <span>Home</span>
            <ChevronRight size={20} />
          </Link>
          <Link href="/shop" className="flex items-center gap-2">
            <span>Shop</span>
            <ChevronRight size={20} />
          </Link>
          <p className="flex items-center gap-2">
            <span>{data?.product?.name}</span>
          </p>
        </div>
      </Layout>
      {data?.product && <ProductDetails product={data.product} />}

      {data?.product && <RelatedProducts category={data.product.category} />}
    </section>
  );
}
