import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma.db";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const categoryParam = req.nextUrl.searchParams.get("category");

    if (!categoryParam) {
      return NextResponse.json(
        { error: "Category parameter is missing" },
        { status: 400 },
      );
    }
    const categoryQuery = categoryParam.toLowerCase().replace(/[\s-]/g, "");
    console.log(categoryQuery);
    const products = await prisma.products.findMany({
      where: {
        category: {
          equals: categoryQuery,
          mode: "insensitive",
        },
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
