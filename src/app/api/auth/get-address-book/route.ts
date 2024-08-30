import { NextRequest, NextResponse } from "next/server";

import { prisma, getUserAndSession } from "../../../../../libs";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { user } = await getUserAndSession();

    const userId = user.id;

    const addressBook = await prisma.addressBoook.findMany({
      where: { userId },
    });

    return NextResponse.json({
      data: addressBook,
    });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
