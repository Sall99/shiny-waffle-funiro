import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../libs/prisma.db";

export async function GET(req: NextRequest, res: NextResponse) {
  const count = req.nextUrl.searchParams.get("count");
  const category = req.nextUrl.searchParams.get("category");

  try {
    if (!category) {
      return NextResponse.json(
        { error: "Category parameter is missing" },
        { status: 400 },
      );
    }

    const products = await prisma.products.findMany({
      take: parseInt(count as string),
      where: {
        category,
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
