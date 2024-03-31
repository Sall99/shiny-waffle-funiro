import { NextResponse } from "next/server";
import prisma from "../../../../libs/prisma.db";
import { NextApiResponse } from "next";

export async function GET(req: Request, res: NextApiResponse) {
  try {
    const products = await prisma.products.findMany();

    return res.status(200).json({
      message: "success",
      products,
    });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
