import { NextResponse } from "next/server";

import { prisma, getUserAndSession } from "../../../../../libs";

export async function POST(req: Request) {
  const body = await req.json();

  const { items, total, addressBookId } = body;

  try {
    const { user } = await getUserAndSession();

    const userId = user.id;

    const order = await prisma.order.create({
      data: {
        userId,
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
