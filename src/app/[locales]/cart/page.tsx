import React from "react";

import { CartTotals, HeroSection, Layout } from "@/components";

export default function page() {
  return (
    <div>
      <HeroSection title="Cart" />
      <Layout>
        <CartTotals />
      </Layout>
    </div>
  );
}
