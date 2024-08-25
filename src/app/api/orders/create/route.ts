import { NextResponse } from "next/server";
import prisma from "../../../../../libs/prisma.db";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  const body = await req.json();

  const { items, total, addressBookId } = body;

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

    const order = await prisma.order.create({
      data: {
        userId: user.id,
        addressBookId,
        total,
        items: {
          create: items.map((item: any) => ({
            productId: item.id,
            quantity: 1,
            price: item.promoPrice,
          })),
        },
      },
    });

    return NextResponse.json({
      data: order,
    });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
