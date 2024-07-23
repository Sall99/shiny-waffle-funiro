import { getServerSession } from "next-auth";
import prisma from "../../../../../libs/prisma.db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const session = await getServerSession();

    if (!session || !session.user || !session.user.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        id: true,
        email: true,
        name: true,
        lname: true,
        fname: true,
      },
    });
    return NextResponse.json(
      {
        message: "success",
        user: user,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error });
  }
}
