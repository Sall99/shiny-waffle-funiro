import React from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components";

export function HomeHeroSection() {
  const t = useTranslations();
  return (
    <section className="h-_716 w-full bg-home-hero-pattern bg-cover bg-center bg-no-repeat">
      <div className="flex h-full w-full items-center justify-end px-4 md:pr-14">
        <div className="h-_443 w-_643 bg-orange-100 px-10 pt-16">
          <p className="mb-2 text-base font-semibold">
            {" "}
            {t("HerroSection.newArrival")}
          </p>
          <p className="text-3xl font-bold text-orange-500 md:text-5xl">
            {t("HerroSection.discover")}
            <br /> {t("HerroSection.newCollection")}
          </p>
          <p className="mt-2 text-sm font-medium">
            {t("HerroSection.indulge")}
          </p>
          <Button
            label={t("Common.buyNow")}
            className="mt-11 px-16 py-6 font-bold uppercase text-accent"
          />
        </div>
      </div>
    </section>
  );
}
