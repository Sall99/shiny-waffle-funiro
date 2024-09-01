import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

import { prisma, getUserAndSession } from "../../../../../libs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
  typescript: true,
});

export async function POST(req: NextRequest) {
  const { amount, orderId } = await req.json();

  const { user } = await getUserAndSession();
  const userId = user.id;

  const email = user.email;

  try {
    const result = await prisma.$transaction(async (prisma) => {
      const order = await prisma.order.findUnique({ where: { id: orderId } });

      const addressBook = await prisma.addressBoook.findMany({
        where: { userId },
      });

      const address = addressBook[0];

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

      const payment = await prisma.payment.create({
        data: {
          orderId: order.id,
          amount: amount,
          currency: "USD",
          status: "PAID",
          paidAt: new Date(),
          paymentMethod: "card",
        },
      });

      await prisma.order.update({
        where: { id: orderId },
        data: {
          status: "PROCESSING",
          paid: true,
          datePaid: new Date(),
          paymentId: payment.id,
        },
      });

      return paymentIntent.client_secret;
    });

    return NextResponse.json({ clientSecret: result }, { status: 200 });
  } catch (error: any) {
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
