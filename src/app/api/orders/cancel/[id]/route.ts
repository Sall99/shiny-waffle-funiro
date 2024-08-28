import { getServerSession } from "next-auth";
import prisma from "../../../../../../libs/prisma.db";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest } from "next";

type Params = {
  id: string;
};

export async function POST(
  req: NextApiRequest,
  context: { params: Params },
  res: NextResponse,
) {
  const { id } = context.params;

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

    const order = await prisma.order.findFirst({
      where: { id },
    });

    if (!order) {
      return NextResponse.json(
        {
          message: "Order entry not found",
        },
        { status: 404 },
      );
    }

    await prisma.order.update({
      where: { id: id },
      data: {
        status: "CANCELLED",
      },
    });

    return NextResponse.json(
      {
        message: "Successfully canceled",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error });
  }
}
