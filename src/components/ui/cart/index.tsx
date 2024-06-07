import React from "react";
import Link from "next/link";

import { X } from "lucide-react";

interface CartProps {
  setIsOpen: (isOpen: boolean) => void;
}

export const Cart = ({ setIsOpen }: CartProps) => {
  return (
    <div className="h-[90%]">
      <div className="mt-4 flex h-full flex-col justify-between">
        <div className="flex items-center justify-between gap-5">
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dx6jhjxpt/image/upload/v1710423310/shiny-waffle-funiro/image_1_kc869j.png)`,
              backgroundSize: "contain",
            }}
            className="h-20 w-20"
          ></div>
          <div>
            <h2 className="font-semibold">Stylish cafe chair</h2>
            <p className="mt-2">
              <span className="mr-2 text-sm">1</span> x{" "}
              <span className="ml-2 text-sm text-orange-500">900.00</span>
            </p>
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-gray-200">
            <X size={18} className="hover:text-white-100" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between border-b border-b-gray-300 pb-4">
            <h2 className="font-medium">Sub Total</h2>
            <p>
              {" "}
              <span className="ml-2 text-orange-500">900.00 USD </span>
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <Link
              href="/cart"
              className="rounded-2xl border border-black-500 px-8 py-1 text-xs font-medium"
              onClick={() => setIsOpen(false)}
            >
              Cart
            </Link>
            <Link
              href="/checkout"
              className="rounded-2xl border border-black-500 px-8 py-1 text-xs font-medium"
              onClick={() => setIsOpen(false)}
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
