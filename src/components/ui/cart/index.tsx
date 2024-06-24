import React from "react";
import Link from "next/link";

import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, selectCartItems, selectCartSubtotal } from "@/store";
import { truncateTitle } from "@/utils";

import "./style.css";

interface CartProps {
  setIsOpen: (isOpen: boolean) => void;
}

export const Cart = ({ setIsOpen }: CartProps) => {
  const dispatch = useDispatch();
  const t = useTranslations("Cart");
  const items = useSelector(selectCartItems);
  const subTotal = useSelector(selectCartSubtotal);

  const handleRemove = (id: string) => {
    const message = t("itemRemovedFromCart");
    dispatch(removeFromCart({ id, message }));
  };

  return (
    <div className="h-[90%]">
      {items.length > 0 ? (
        <div className="mt-4 flex h-full flex-col justify-between">
          <div className="car-overflow-bar mt-4 flex h-full flex-col gap-8 overflow-y-auto">
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
                  <h2 className="text-xs font-semibold">
                    {truncateTitle(title, 24)}
                  </h2>
                  <p className="mt-2">
                    <span className="mr-2 text-xs">{amount}</span> x{" "}
                    <span className="ml-2 text-xs text-orange-500">
                      {promoPrice}
                    </span>
                  </p>
                </div>
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-gray-200"
                  onClick={() => handleRemove(id)}
                >
                  <X size={18} className="hover:text-white-100" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
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
