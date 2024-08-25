import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../libs/prisma.db";
import { getServerSession } from "next-auth";

export async function GET(req: NextRequest, res: NextResponse) {
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

    const orders = await prisma.order.findMany({
      where: {
        userId: user.id,
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
