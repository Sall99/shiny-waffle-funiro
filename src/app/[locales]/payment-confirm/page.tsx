import Link from "next/link";
import React from "react";

function PaymentConfirm() {
  return (
    <div className="bg-gray-900 text-white flex min-h-screen flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-[24px]">Payment Successful !</h2>
        <h2 className="text-center text-[17px] text-gray-200">
          We sent an email with your order confirmation along with Digital
          Content
        </h2>
      </div>
      <Link
        href="/"
        className="bg-teal-600 text-white hover:bg-teal-700 block rounded px-5 py-3 text-sm transition"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default PaymentConfirm;
