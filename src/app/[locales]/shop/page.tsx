"use client";
import {
  Feature,
  Filter,
  HeroSection,
  Layout,
  ProductsSection,
} from "@/components";
import React, { useState } from "react";

export default function Shop() {
  const [layout, setLayout] = useState("grid");
  return (
    <section>
      <HeroSection title={"Shop"} />
      <Filter setLayout={setLayout} />
      <Layout>
        <ProductsSection layout={layout} />
      </Layout>
      <Feature />
    </section>
  );
}
