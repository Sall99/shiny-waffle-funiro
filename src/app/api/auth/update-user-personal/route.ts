import { NextRequest, NextResponse } from "next/server";

import { prisma, getUserAndSession } from "../../../../../libs";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();

    const { fname, lname } = body;
    const { user } = await getUserAndSession();

    const email = user.email;
    await prisma.user.update({
      where: { email },
      data: {
        lname,
        fname,
      },
    });

    return NextResponse.json(
      {
        message: "success",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error });
  }
}
