import { Categories, HomeHeroSection } from "@/components";
import Layout from "@/components/layout/layout";

export default function Home() {
  return (
    <Layout>
      <HomeHeroSection />
      <Categories />
    </Layout>
  );
}
