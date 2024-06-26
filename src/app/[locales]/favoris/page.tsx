"use client";
import React from "react";

import { Feature, HeroSection, Layout } from "@/components";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavoris, selectFavorisItems } from "@/store";
import Link from "next/link";

export default function Favoris() {
  const dispatch = useDispatch();
  const t = useTranslations("Favorites");
  const items = useSelector(selectFavorisItems);
  const imageWidth = 90;
  const imageHeight = 90;

  const handleRemove = (id: string) => {
    const message = t("itemRemovedFromFavoris");
    dispatch(removeFromFavoris({ id, message }));
  };

  return (
    <section>
      <HeroSection title="Favoris" />
      <Layout className="px-5 pb-20 pt-10 lg:pb-40">
        <h2 className="mb-9 text-lg font-semibold">{t("MyFavorites")}</h2>
        {items.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map(({ id, defaultImage, title }) => (
              <div className="mt-4 flex items-center gap-4" key={id}>
                <div
                  style={{
                    backgroundImage: `url(${defaultImage})`,
                    width: `${imageWidth}px`,
                    height: `${imageHeight}px`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <p>{title}</p>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-600"
                  onClick={() => handleRemove(id)}
                >
                  <X size={20} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="m-auto w-80 text-center">
            <h1 className="font-medium">{t("favorisIsEmpty")}</h1>
            <p className="mt-4">
              {t("goToThe")}{" "}
              <Link href="/" className="font-semibold text-orange-500">
                {t("Home")}
              </Link>{" "}
              {t("addFavorites")}
            </p>
          </div>
        )}
      </Layout>
      <Feature />
    </section>
  );
}
