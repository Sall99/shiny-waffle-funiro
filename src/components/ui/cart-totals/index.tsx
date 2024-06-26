"use client";
import React from "react";
import { Trash } from "lucide-react";

import "./index.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  selectCart,
  selectCartItems,
  setAmount,
} from "@/store";
import { truncateTitle } from "@/utils";

export const CartTotals = () => {
  const t = useTranslations("Cart");
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const cart = useSelector(selectCart);

  const handleQuantityChange = (id: string, amount: string) => {
    dispatch(setAmount({ id, amount: parseInt(amount, 10) }));
  };

  const handleRemoveItem = (id: string) => {
    const message = t("itemRemovedFromCart");
    dispatch(removeFromCart({ id, message }));
  };

  return (
    <div className="px-4 py-10 md:py-20 lg:px-14">
      <div className="gap-7 lg:flex">
        <div className="w-full overflow-auto">
          <table className="w-full min-w-max">
            <thead className="h-14 bg-orange-100 text-center font-semibold">
              <tr>
                <td>{t("Product")}</td>
                <td>{t("Price")}</td>
                <td>{t("Quantity")}</td>
                <td>{t("Subtotal")}</td>
              </tr>
            </thead>

            <tbody>
              {items.map(({ id, defaultImage, title, promoPrice, amount }) => (
                <tr key={id}>
                  <td>
                    <div className="flex items-center gap-4 md:gap-8">
                      <div className="flex items-center gap-4">
                        <div
                          style={{
                            backgroundImage: `url(${defaultImage})`,
                          }}
                          className="cart-product-image"
                        ></div>
                        <p className="text-gray-400">
                          {truncateTitle(title, 24)}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center text-gray-400">
                      <p>USD. {promoPrice}</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      <select
                        name="quantity"
                        className="px-4"
                        value={amount}
                        onChange={(e) =>
                          handleQuantityChange(id, e.target.value)
                        }
                      >
                        {[1, 2, 3, 4].map((qty) => (
                          <option key={qty} value={qty}>
                            {qty}
                          </option>
                        ))}
                      </select>
                    </div>
                  </td>
                  <td>
                    <p className="flex items-center justify-center gap-4">
                      <span>
                        USD. {promoPrice && amount && promoPrice * amount}
                      </span>
                      <span
                        className="hover:cursor-pointer"
                        onClick={() => handleRemoveItem(id)}
                      >
                        <Trash color="#B88E2F" />
                      </span>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-col bg-orange-100 px-2 py-4 lg:mt-0 lg:h-_390 lg:w-_390 lg:px-8">
          <h2 className="text-center font-semibold">{t("cartTotals")}</h2>

          <div className="mt-4 lg:mt-16">
            <div className="flex justify-between lg:items-center">
              <p className="text-base font-semibold">Total:</p>
              <span className="text-xs font-semibold text-orange-500">
                {cart.subTotal} USD
              </span>
            </div>

            <div className="mt-4 text-center lg:mt-10">
              <Link
                href="/checkout"
                className="inline-block w-full rounded-2xl border border-black-500 px-10 py-2 text-xs font-medium"
              >
                {t("Checkout")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
