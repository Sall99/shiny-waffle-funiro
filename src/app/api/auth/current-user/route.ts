import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

import { getUserAndSession, prisma } from "../../../../../libs";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { user } = await getUserAndSession();

    const userData = await prisma.user.findUnique({
      where: { email: user.email },
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
        user: userData,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error });
  }
}
