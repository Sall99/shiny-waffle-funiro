import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

import prisma from "../../../../../libs/prisma.db";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
  typescript: true,
});

export async function POST(req: NextRequest) {
  const { amount, orderId } = await req.json();

  try {
    const session = await getServerSession();
    if (!session || !session.user || !session.user.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        { status: 404 },
      );
    }

    const userId = user.id;

    const addressBook = await prisma.addressBoook.findMany({
      where: { userId },
    });

    const { fname, lname, street, townCity, zipCode, email, countryRegion } =
      addressBook[0];

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "USD",
      receipt_email: email,
      metadata: {
        order_id: orderId,
      },
      shipping: {
        name: fname + lname,
        address: {
          line1: street,
          postal_code: zipCode,
          country: countryRegion,
          city: townCity,
        },
      },
    });

    return new NextResponse(paymentIntent.client_secret, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, {
      status: 400,
    });
  }
}
