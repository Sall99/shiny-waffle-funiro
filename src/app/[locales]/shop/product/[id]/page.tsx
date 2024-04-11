"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { Layout } from "@/components";
import { useParams } from "next/navigation";

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <section>
      <Layout>
        <div className="bg-orange-300 flex gap-4 px-_102 py-8">
          <Link href="/" className="flex items-center gap-2">
            <span>Home</span>
            <ChevronRight size={20} />
          </Link>
          <Link href="/shop" className="flex items-center gap-2">
            <span>Shop</span>
            <ChevronRight size={20} />
          </Link>
          <p className="flex items-center gap-2">
            <span>Shop</span>
          </p>
        </div>
      </Layout>
    </section>
  );
}
