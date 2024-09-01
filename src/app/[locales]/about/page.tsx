import { Layout } from "@/components";
import { useTranslations } from "next-intl";
import React from "react";

const AboutUs = () => {
  const t = useTranslations("AboutUs");

  return (
    <Layout className="bg-white text-gray-800 px-5 pt-8">
      <h1 className="mb-6 text-center font-bold text-[#B88E2F]">
        {t("title")}
      </h1>
      <p className="mb-4 text-center">{t("description")}</p>

      <h2 className="mb-4 font-semibold text-[#B88E2F]">
        {t("ourVisionTitle")}
      </h2>
      <p className="mb-6">{t("ourVisionDescription")}</p>

      <h2 className="mb-4 font-semibold text-[#B88E2F]">
        {t("whatWeOfferTitle")}
      </h2>
      <ul className="mb-6 list-inside list-disc">
        <li>
          <strong>{t("curatedCollectionsTitle")}:</strong>{" "}
          {t("curatedCollectionsDescription")}
        </li>
        <li>
          <strong>{t("seamlessShoppingExperienceTitle")}:</strong>{" "}
          {t("seamlessShoppingExperienceDescription")}
        </li>
        <li>
          <strong>{t("secureTransactionsTitle")}:</strong>{" "}
          {t("secureTransactionsDescription")}
        </li>
        <li>
          <strong>{t("customerSupportTitle")}:</strong>{" "}
          {t("customerSupportDescription")}
        </li>
      </ul>

      <h2 className="mb-4 font-semibold text-[#B88E2F]">
        {t("whyChooseUsTitle")}
      </h2>
      <ul className="mb-6 list-inside list-disc">
        <li>
          <strong>{t("qualityAndStyleTitle")}:</strong>{" "}
          {t("qualityAndStyleDescription")}
        </li>
        <li>
          <strong>{t("convenienceTitle")}:</strong>{" "}
          {t("convenienceDescription")}
        </li>
        <li>
          <strong>{t("customerCentricApproachTitle")}:</strong>{" "}
          {t("customerCentricApproachDescription")}
        </li>
      </ul>

      <h2 className="mb-4 font-semibold text-[#B88E2F]">{t("joinUsTitle")}</h2>
      <p className="mb-6">{t("joinUsDescription")}</p>

      <h2 className="mb-4 font-semibold text-[#B88E2F]">
        {t("contactUsTitle")}
      </h2>
      <p className="mb-6">{t("contactUsDescription")}</p>
      <p className="mb-2">
        <strong>{t("emailTitle")}:</strong> support@elevatehomespace.com
      </p>
      <p className="mb-6">
        <strong>{t("addressTitle")}:</strong> [Dakar, Senegal]
      </p>

      <p className="mt-10 text-center text-[#B88E2F]">{t("thankYou")}</p>
    </Layout>
  );
};

export default AboutUs;
