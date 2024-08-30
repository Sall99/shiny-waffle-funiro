import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

import { prisma, getUserAndSession } from "../../../../../../libs";

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
    await getUserAndSession();

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
