import { useTranslations } from "next-intl";
import React from "react";

import Link from "next/link";
import { MoveRight } from "lucide-react";

export const AccountOrders = () => {
  const t = useTranslations("Orders");

  return (
    <div className="w-full pt-10">
      <h2 className="mb-4 font-semibold">{t("Orders")}</h2>
      <div className="flex h-96 items-center justify-center gap-4 border border-gray-300 px-8 py-16 text-center md:p-16">
        <Link
          href={"/orders"}
          className="group/link relative block gap-1 overflow-hidden font-montserrat text-orange-500 delay-75 md:text-2xl lg:text-2xl"
        >
          <span className="block text-lg tracking-[0.01em] transition-transform duration-500 group-hover/link:translate-y-[-100%]">
            {t("ViewOrders")}
          </span>
          <span className="absolute left-0 block text-lg tracking-[0.01em] transition-transform duration-500 group-hover/link:translate-y-[-100%]">
            {t("ViewOrders")}
          </span>
        </Link>
        <MoveRight color="#B88E2F" size={20} />
      </div>
    </div>
  );
};
