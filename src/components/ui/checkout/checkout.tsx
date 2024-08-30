"use client";
import { createPaymentIntent } from "@/actions/pay.action";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";

interface Props {
  amount: number;
  orderId: string;
}

export const Checkout = ({ amount, orderId }: Props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setErrorMessage("Stripe is not properly initialized.");
      return;
    }

    try {
      const submitResult = await elements.submit();

      if (submitResult.error) {
        setErrorMessage(
          submitResult.error.message || "Form submission failed.",
        );
        return;
      }

      const {clientSecret} = await createPaymentIntent(amount, orderId);

      console.log(clientSecret, "clientSecret");

      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/payment-confirm",
        },
        clientSecret,
      });

      if (result.error) {
        setErrorMessage(result.error.message || "An unknown error occurred.");
      } else {
        setErrorMessage(null);
      }
    } catch (error) {
      setErrorMessage("Error processing payment: " + (error as Error).message);
      console.error("Error processing payment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <button
        type="submit"
        className="text-white bg-teal-600 mt-4 w-20 rounded-md border p-2 text-sm"
      >
        Submit
      </button>
    </form>
  );
};
