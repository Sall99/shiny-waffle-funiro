import {
  CategoriesSection,
  HomeHeroSection,
  ProductsSection,
  Layout,
  Inspiration,
  Gallery,
} from "@/components";

const GallerySection = () => {
  return (
    <div className="mb-8 text-center">
      <p className="text-xs font-semibold">Share your setup with</p>
      <h2 className="text-lg font-bold">Gallery</h2>
      <Gallery />
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Layout>
        <HomeHeroSection />
        <CategoriesSection />
        <ProductsSection />
        <Inspiration />
      </Layout>
      <GallerySection />
    </>
  );
}
