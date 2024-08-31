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
import { Pay } from "./pay";

interface ActionButtonsProps {
  onPayClick: () => void;
  onCancelClick: () => void;
}

const ActionButtons = ({ onPayClick, onCancelClick }: ActionButtonsProps) => (
  <div className="flex gap-4">
    <Button
      label="Pay"
      className="rounded-xl px-8 py-2"
      variant="primary"
      onClick={onPayClick}
    />
    <Button
      label="Cancel"
      className="px-4 py-2"
      variant="cancel"
      onClick={onCancelClick}
    />
  </div>
);

export function OrdersCard({
  id,
  status,
  total,
  items,
  createdAt,
  onOrderCancelled,
  paid,
  datePaid,
}: Partial<OrderWithItems>) {
  const priceFormat = useFormatter();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const orderCreated = dayjs(createdAt).format("YYYY-MM-DD HH:mm:ss");
  const [isOpen, setIsOpen] = useState(false);
  const [payIsOpen, setPayIsOpen] = useState(false);
  const isCancelled = status === "CANCELLED";
  const isPaid = Boolean(paid);

  const handlePayClick = () => setPayIsOpen(true);

  const handleCancelClick = () => setIsOpen(true);

  const renderCancelledMessage = () => (
    <p className="flex items-center justify-center gap-2 font-semibold text-red-500">
      This order is cancelled <X size={20} />
    </p>
  );

  const renderPaidDate = () => (
    <p className="text-sm font-semibold text-green-500">
      You paid this order on :{" "}
      {datePaid ? dayjs(datePaid).format("YYYY-MM-DD HH:mm:ss") : "N/A"}
    </p>
  );

  return (
    <div className={clsx("order-card rounded-md px-2 py-8 md:p-8")}>
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
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items?.map(
          ({
            id,
            product: { id: productId, defaultImage, name, price, promoPrice },
          }) => (
            <div key={id} className="m-auto w-_224 bg-gray-100 px-2 pb-4 pt-2">
              {" "}
              <div
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(${defaultImage})`,
                }}
                className="mb-4 h-_305 md:h-_208 md:w-_208"
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
        {isCancelled ? (
          renderCancelledMessage()
        ) : isPaid ? (
          renderPaidDate()
        ) : (
          <ActionButtons
            onPayClick={handlePayClick}
            onCancelClick={handleCancelClick}
          />
        )}
      </div>

      <CancelOrder
        id={`${id}`}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onOrderCancelled={onOrderCancelled || (() => {})}
      />
      <Pay
        payIsOpen={payIsOpen}
        setPayIsOpen={setPayIsOpen}
        orderId={id ?? ""}
        amount={total ?? 0}
      />
    </div>
  );
}
