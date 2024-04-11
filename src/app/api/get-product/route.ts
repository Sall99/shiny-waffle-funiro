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
    const products = await prisma.products.findMany({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        message: "success",
        length: products.length,
        products,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error });
  }
}
