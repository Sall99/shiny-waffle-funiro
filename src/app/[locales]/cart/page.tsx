import React from "react";

import { CartTotals, Feature, HeroSection, Layout } from "@/components";

export default function page() {
  return (
    <section>
      <HeroSection title="Cart" />
      <Layout>
        <CartTotals />
      </Layout>
      <Feature />
    </section>
  );
}
