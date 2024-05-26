"use client";
import React from "react";
import { Trash } from "lucide-react";

import "./index.css";
import Link from "next/link";

export const CartTotals = () => {
  return (
    <div className="px-4 py-10 md:py-20 lg:px-14">
      <div className="gap-7 lg:flex">
        <div className="w-full overflow-auto">
          <table className="w-full min-w-max">
            <thead className="h-14 bg-orange-100 text-center font-semibold">
              <tr>
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Subtotal</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <div className="flex items-center gap-4 md:gap-8">
                    <div
                      style={{
                        backgroundImage: `url(https://res.cloudinary.com/dx6jhjxpt/image/upload/v1710423310/shiny-waffle-funiro/image_1_kc869j.png)`,
                      }}
                      className="cart-product-image"
                    ></div>
                    <p className="text-gray-400">Asgaard sofa</p>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center text-gray-400">
                    <p>USD. 250.00</p>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    <select name="quantity" className="px-4">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </td>
                <td>
                  <p className="flex items-center justify-center gap-4">
                    <span>USD. 250.00</span>
                    <span className="hover:cursor-pointer">
                      <Trash color="#B88E2F" />
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lg:w-_390 lg:h-_390 mt-8 flex flex-col bg-orange-100 px-2 py-4 lg:mt-0 lg:px-8">
          <h2 className="text-center font-semibold">Cart Totals</h2>

          <div className="mt-4 lg:mt-16">
            <div className="flex justify-between lg:items-center">
              <p className="text-base font-semibold">Total:</p>
              <span className="text-xs font-semibold text-orange-500">
                250 USD
              </span>
            </div>

            <div className="mt-4 text-center lg:mt-10">
              <Link
                href="/checkout"
                className="inline-block w-full rounded-2xl border border-black-500 px-10 py-2 text-xs font-medium"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
