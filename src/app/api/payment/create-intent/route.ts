import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

import prisma from "../../../../../libs/prisma.db";
import { getUserAndAddress } from "../../user/get-user";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
  typescript: true,
});

export async function POST(req: NextRequest) {
  const { amount, orderId } = await req.json();

  const session = await getServerSession();
  if (!session || !session.user || !session.user.email) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const email = session.user.email;

  try {
    const result = await prisma.$transaction(async (prisma) => {
      const { user, address } = await getUserAndAddress(email);

      console.log(user, address, orderId);
      const order = await prisma.order.findUnique({ where: { id: orderId } });

      if (!order) {
        throw new Error("Order not found");
      }

      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100),
        currency: "USD",
        receipt_email: email,
        metadata: { order_id: orderId },
        shipping: {
          name: `${address.fname} ${address.lname}`,
          address: {
            line1: address.street,
            postal_code: address.zipCode,
            country: address.countryRegion,
            city: address.townCity,
          },
        },
      });

      await prisma.order.update({
        where: { id: orderId },
        data: { status: "PROCESSING" },
      });

      return paymentIntent.client_secret;
    });

    return NextResponse.json({ clientSecret: result }, { status: 200 });
  } catch (error: any) {
    console.error("Payment processing error:", error);

    try {
      await prisma.order.update({
        where: { id: orderId },
        data: { status: "PENDING" },
      });
    } catch (updateError) {
      console.error("Failed to update order status to CANCELLED:", updateError);
    }

    return NextResponse.json(
      {
        message: error.message || "An error occurred during payment processing",
      },
      { status: 400 },
    );
  }
}
