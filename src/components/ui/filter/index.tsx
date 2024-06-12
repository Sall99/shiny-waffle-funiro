import { GalleryVertical, LayoutGrid, SlidersHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

interface FilterProps {
  setLayout: (layout: string) => void;
}

export const Filter = ({ setLayout }: FilterProps) => {
  const t = useTranslations("Shop");
  return (
    <div className="flex justify-between bg-orange-100 px-_102 py-8">
      <div className="flex items-center gap-6">
        <SlidersHorizontal className="hover:cursor-pointer" />
        <p>{t("Filter")}</p>
        <LayoutGrid
          className="hover:cursor-pointer"
          onClick={() => setLayout("grid")}
        />
        <GalleryVertical
          className="hover:cursor-pointer"
          onClick={() => setLayout("vertical")}
        />
        <div>
          <p className="text-sm">
            {t("Showing")} 1–16 of 32 {t("results")}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <p>{t("Show")}</p>
          <input
            type="number"
            min={0}
            className="w-12 px-1 py-2 text-center text-gray-500"
          />
        </div>
        <div className="flex items-center gap-4">
          <p>{t("Short By")}</p>
          <select name="" id="" className="w-40 px-2 py-2">
            <option value="">{t("Default")}</option>
          </select>
        </div>
      </div>
    </div>
  );
};
