import { useTranslations } from "next-intl";
import React from "react";

const PaymentOptions = () => {
  const t = useTranslations("PaymentOptions");

  return (
    <div className="bg-white text-gray-800 p-8">
      <h1 className="mb-6 text-center text-3xl font-bold text-[#B88E2F]">
        {t("title")}
      </h1>
      <p className="mb-4 text-center text-lg">{t("description")}</p>

      <h2 className="mb-4 text-2xl font-semibold text-[#B88E2F]">
        {t("onlyCardAvailable")}
      </h2>

      <h2 className="mb-4 text-2xl font-semibold text-[#B88E2F]">
        {t("howToPay")}
      </h2>
      <ul className="mb-6 list-inside list-disc">
        <li className="mb-2">{t("step1")}</li>
        <li className="mb-2">{t("step2")}</li>
        <li className="mb-2">{t("step3")}</li>
        <li className="mb-2">{t("step4")}</li>
      </ul>

      <h2 className="mb-4 text-2xl font-semibold text-[#B88E2F]">
        {t("securityInfo")}
      </h2>
      <p className="mb-6">{t("securityDescription")}</p>

      <h2 className="mb-4 text-2xl font-semibold text-[#B88E2F]">
        {t("contactUs")}
      </h2>
      <p className="mb-6">{t("contactDescription")}</p>

      <p className="mt-10 text-center text-[#B88E2F]">{t("thankYou")}</p>
    </div>
  );
};

export default PaymentOptions;
