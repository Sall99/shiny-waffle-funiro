import { NextRequest, NextResponse } from "next/server";

import { prisma, getUserAndSession } from "../../../../../libs";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { user } = await getUserAndSession();

    const userId = user.id;

    const orders = await prisma.order.findMany({
      where: {
        userId,
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
        addressBook: true,
      },
    });

    return NextResponse.json(
      {
        orders,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error });
  }
}
