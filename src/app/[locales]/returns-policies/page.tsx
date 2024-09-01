import { Layout } from "@/components";
import { useTranslations } from "next-intl";
import React from "react";

const ReturnPolicies = () => {
  const t = useTranslations("ReturnPolicies");

  return (
    <Layout className="bg-white text-gray-800 px-5 pt-8">
      <h1 className="mb-6 text-center font-bold text-[#B88E2F]">
        {t("title")}
      </h1>
      <p className="mb-4 text-center">{t("description")}</p>

      <h2 className="mb-4 font-semibold text-[#B88E2F]">{t("returnPeriod")}</h2>
      <p className="mb-6">{t("returnPeriodDescription")}</p>

      <h2 className="mb-4 font-semibold text-[#B88E2F]">
        {t("returnProcess")}
      </h2>
      <p className="mb-6">{t("returnProcessDescription")}</p>

      <h2 className="mb-4 font-semibold text-[#B88E2F]">{t("refunds")}</h2>
      <p className="mb-6">{t("refundsDescription")}</p>

      <h2 className="mb-4 font-semibold text-[#B88E2F]">{t("exchanges")}</h2>
      <p className="mb-6">{t("exchangesDescription")}</p>

      <h2 className="mb-4 font-semibold text-[#B88E2F]">{t("contactUs")}</h2>
      <p className="mb-6">{t("contactDescription")}</p>

      <p className="mt-10 text-center text-[#B88E2F]">{t("thankYou")}</p>
    </Layout>
  );
};

export default ReturnPolicies;
