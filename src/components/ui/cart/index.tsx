import React from "react";
import Link from "next/link";

import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { selectCart, selectCartItems, selectCartSubtotal } from "@/store";

interface CartProps {
  setIsOpen: (isOpen: boolean) => void;
}

export const Cart = ({ setIsOpen }: CartProps) => {
  const t = useTranslations("Cart");
  const cart = useSelector(selectCart);
  const items = useSelector(selectCartItems);
  const subTotal = useSelector(selectCartSubtotal);

  console.log(items, "items");

  return (
    <div className="h-[90%]">
      {items.length > 0 ? (
        <div className="mt-4 flex h-full flex-col justify-between">
          {items.map(({ id, amount, promoPrice, defaultImage, title }) => (
            <div className="flex items-center justify-between gap-5" key={id}>
              <div
                style={{
                  backgroundImage: `url(${defaultImage})`,
                  backgroundSize: "contain",
                }}
                className="h-20 w-20"
              ></div>
              <div>
                <h2 className="font-semibold">{title}</h2>
                <p className="mt-2">
                  <span className="mr-2 text-sm">{amount}</span> x{" "}
                  <span className="ml-2 text-sm text-orange-500">
                    {promoPrice}
                  </span>
                </p>
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-gray-200">
                <X size={18} className="hover:text-white-100" />
              </div>
            </div>
          ))}

          <div>
            <div className="flex items-center justify-between border-b border-b-gray-300 pb-4">
              <h2 className="font-medium">{t("subTotal")}</h2>
              <p>
                {" "}
                <span className="ml-2 text-orange-500">{subTotal} USD </span>
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <Link
                href="/cart"
                className="rounded-2xl border border-black-500 px-8 py-1 text-xs font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t("Cart")}
              </Link>
              <Link
                href="/checkout"
                className="rounded-2xl border border-black-500 px-8 py-1 text-xs font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t("Checkout")}
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-full items-center justify-center">
          <h2>{t("cartEmpty")}</h2>
        </div>
      )}
    </div>
  );
};
