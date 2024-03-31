import { NextResponse } from "next/server";
import prisma from "../../../../libs/prisma.db";

export async function GET(req: Request, res: NextResponse) {
  try {
    const products = await prisma.products.findMany();

    return NextResponse.json(
      {
        message: "success",
        products,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error });
  }
}
