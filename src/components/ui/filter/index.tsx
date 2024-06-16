import { GalleryVertical, LayoutGrid, SlidersHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

interface FilterProps {
  setLayout: (layout: string) => void;
}

export const Filter = ({ setLayout }: FilterProps) => {
  const t = useTranslations("Shop");
  return (
    <div className="flex justify-between bg-orange-100 px-5 py-8 md:px-_102">
      <div className="flex items-center gap-6">
        <SlidersHorizontal />
        <LayoutGrid
          className="hover:cursor-pointer"
          onClick={() => setLayout("grid")}
        />
        <GalleryVertical
          className="hover:cursor-pointer"
          onClick={() => setLayout("vertical")}
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <p className="hidden md:block">{t("Short By")}</p>
          <select name="" id="" className="w-40 px-2 py-2">
            <option value="">{t("Default")}</option>
          </select>
        </div>
      </div>
    </div>
  );
};
