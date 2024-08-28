"use client";
import Link from "next/link";
import React, { useState } from "react";
import dayjs from "dayjs";
import { useMediaQuery } from "@react-hook/media-query";
import { useFormatter } from "next-intl";
import { X } from "lucide-react";
import clsx from "clsx";

import { OrderWithItems } from "@/types";
import HorizontalStepper from "../stepper/horizontal";
import { Button } from "../button";
import { CancelOrder } from "./cancel";

export function OrdersCard({
  id,
  status,
  total,
  items,
  createdAt,
  onOrderCancelled,
}: Partial<OrderWithItems>) {
  const priceFormat = useFormatter();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const imageHeight = isMobile ? 200 : 235;
  const orderCreated = dayjs(createdAt).format("YYYY-MM-DD HH:mm:ss");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(
        "order-card rounded-md p-8",
        status === "CANCELLED" && "opacity-40",
      )}
    >
      <div>
        <h2 className="mb-4 text-lg font-semibold">Items</h2>
      </div>
      <div className="mb-4 flex justify-between">
        <p>Nombre de produits : {items?.length}</p>
        <div>
          {" "}
          <p className="text-sm font-semibold text-gray-200">Order #{id}</p>
          <p className="mt-2 text-sm font-semibold text-gray-200">
            Creer le : {orderCreated}
          </p>
        </div>
      </div>
      <div className="py-8">
        <HorizontalStepper status={`${status}`} />
      </div>
      <div className="flex gap-4">
        {items?.map(
          ({
            id,
            product: { id: productId, defaultImage, name, price, promoPrice },
          }) => (
            <div key={id} className="bg-gray-100 px-2 pb-4 pt-2">
              {" "}
              <div
                style={{
                  width: "200px",
                  height: `${imageHeight}px`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(${defaultImage})`,
                }}
                className="mb-4"
              ></div>
              <h2 className="mt-4 text-sm font-semibold">{name}</h2>
              <p className="mt-2 text-sm">
                <span className="font-semibold">
                  {priceFormat.number(promoPrice || 0, {
                    style: "currency",
                    currency: "EUR",
                  })}
                </span>
                <span className="ml-4 text-gray-200 line-through">
                  {" "}
                  {priceFormat.number(price || 0, {
                    style: "currency",
                    currency: "EUR",
                  })}
                </span>
              </p>
              <Link
                href={`/shop/product/${productId}`}
                className="text-xs text-orange-500"
              >
                View details
              </Link>
            </div>
          ),
        )}
      </div>
      <div className="flex justify-end">
        <p className="mt-2 flex gap-4 text-sm">
          <span>Total price:</span>
          <span className="font-semibold">
            {priceFormat.number(total || 0, {
              style: "currency",
              currency: "EUR",
            })}
          </span>
        </p>
      </div>
      <div className="mt-8 flex justify-end">
        {status !== "CANCELLED" ? (
          <div className="flex gap-4">
            <Button
              label="Pay"
              className="rounded-xl px-8 py-2"
              variant="primary"
            />
            <Button
              label="Cancel"
              className="px-4 py-2"
              variant="cancel"
              onClick={() => setIsOpen(true)}
            />
          </div>
        ) : (
          <p className="flex items-center justify-center gap-2 font-semibold text-red-500">
            <p> This order is cancelled</p> <X size={20} />
          </p>
        )}
      </div>

      <CancelOrder
        id={`${id}`}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onOrderCancelled={onOrderCancelled || (() => {})}
      />
    </div>
  );
}
