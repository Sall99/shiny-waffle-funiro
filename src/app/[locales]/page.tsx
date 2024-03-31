import {
  CategoriesSection,
  HomeHeroSection,
  ProductsSection,
  Layout,
} from "@/components";

export default function Home() {
  return (
    <Layout>
      <HomeHeroSection />
      <CategoriesSection />
      <ProductsSection />
    </Layout>
  );
}
