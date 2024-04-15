import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma.db";

export async function GET(req: NextRequest, res: NextResponse) {
  const id = req.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "id parameter is missing" },
      { status: 400 },
    );
  }
  try {
    const product = await prisma.products.findUnique({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        message: "success",
        product,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error });
  }
}
