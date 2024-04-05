import {
  CategoriesSection,
  HomeHeroSection,
  ProductsSection,
  Layout,
  Inspiration,
} from "@/components";

export default function Home() {
  return (
    <Layout>
      <HomeHeroSection />
      <CategoriesSection />
      <ProductsSection />
      {/* <Inspiration /> */}
    </Layout>
  );
}
