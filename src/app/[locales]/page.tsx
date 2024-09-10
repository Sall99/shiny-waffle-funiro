import {
  CategoriesSection,
  HomeHeroSection,
  ProductsSection,
  Layout,
  Inspiration,
  Gallery,
} from "@/components";
import { useTranslations } from "next-intl";

const GallerySection = () => {
  const t = useTranslations("Home");
  return (
    <div className="mb-8 text-center">
      <p className="text-xs font-semibold">{t("Share")}</p>
      <h2 className="text-lg font-bold">{t("Gallery")}</h2>
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
