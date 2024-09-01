import { useTranslations } from "next-intl";
import React from "react";

const PrivacyPolicies = () => {
  const t = useTranslations("PrivacyPolicies");

  return (
    <div className="bg-white text-gray-800 p-8">
      <h1 className="mb-6 text-center text-3xl font-bold text-[#B88E2F]">
        {t("title")}
      </h1>
      <p className="mb-4">
        <strong>{t("effectiveDate")}</strong> [01/09/2024]
      </p>
      <p className="mb-4">
        <strong>{t("lastUpdated")}</strong> [01/09/2024]
      </p>

      <p className="mb-6">{t("welcomeMessage")}</p>

      <h2 className="mb-4 text-2xl font-semibold text-[#B88E2F]">
        {t("informationWeCollect")}
      </h2>
      <ul className="mb-6 list-inside list-disc">
        <li>{t("personalInformation")}</li>
        <li>{t("usageData")}</li>
        <li>{t("deviceInformation")}</li>
        <li>{t("cookies")}</li>
      </ul>

      <h2 className="mb-4 text-2xl font-semibold text-[#B88E2F]">
        {t("howWeUseInformation")}
      </h2>
      <ul className="mb-6 list-inside list-disc">
        <li>{t("provideAndImprove")}</li>
        <li>{t("communicate")}</li>
        <li>{t("personalize")}</li>
        <li>{t("security")}</li>
      </ul>

      <h2 className="mb-4 text-2xl font-semibold text-[#B88E2F]">
        {t("howWeShareInformation")}
      </h2>
      <p className="mb-6">{t("shareInfoParagraph")}</p>
      <ul className="mb-6 list-inside list-disc">
        <li>{t("serviceProviders")}</li>
        <li>{t("legalObligations")}</li>
        <li>{t("businessTransfers")}</li>
      </ul>

      <h2 className="mb-4 text-2xl font-semibold text-[#B88E2F]">
        {t("dataSecurity")}
      </h2>
      <p className="mb-6">{t("dataSecurityParagraph")}</p>

      <h2 className="mb-4 text-2xl font-semibold text-[#B88E2F]">
        {t("rightsAndChoices")}
      </h2>
      <ul className="mb-6 list-inside list-disc">
        <li>{t("accessAndUpdate")}</li>
        <li>{t("optOut")}</li>
        <li>{t("requestDeletion")}</li>
      </ul>

      <h2 className="mb-4 text-2xl font-semibold text-[#B88E2F]">
        {t("thirdPartyLinks")}
      </h2>
      <p className="mb-6">{t("thirdPartyLinksParagraph")}</p>

      <h2 className="mb-4 text-2xl font-semibold text-[#B88E2F]">
        {t("childrensPrivacy")}
      </h2>
      <p className="mb-6">{t("childrensPrivacyParagraph")}</p>

      <h2 className="mb-4 text-2xl font-semibold text-[#B88E2F]">
        {t("changesPolicy")}
      </h2>
      <p className="mb-6">{t("changesPolicyParagraph")}</p>

      <h2 className="mb-4 text-2xl font-semibold text-[#B88E2F]">
        {t("contactUs")}
      </h2>
      <p className="mb-6">{t("contactUsParagraph")}</p>
      <p className="mb-2">
        <strong>Email:</strong> sallaboudaouda@gmail.com
      </p>
      <p className="mb-6">
        <strong>Address:</strong> Dakar, Senegal
      </p>

      <p className="mt-10 text-center text-[#B88E2F]">{t("thankYou")}</p>
    </div>
  );
};
export default PrivacyPolicies;
