"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import convertToSubcurrency from "@/utils";
import { Checkout } from "../checkout";
import { Modal } from "../modal";

interface Props {
  payIsOpen: boolean;
  setPayIsOpen: (isOpen: boolean) => void;
  orderId: string;
  amount: number;
}

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

export const Pay = ({ setPayIsOpen, payIsOpen, orderId, amount }: Props) => {
  return (
    <Modal isOpen={payIsOpen} setIsOpen={setPayIsOpen} variant="tertiary">
      <div className="text-white bg-gradient-to-tr from-blue-500 to-purple-500 m-10 mx-auto max-w-6xl rounded-md border p-10 text-center">
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertToSubcurrency(amount),
            currency: "usd",
          }}
        >
          <Checkout amount={amount} orderId={orderId} />
        </Elements>
      </div>
    </Modal>
  );
};
