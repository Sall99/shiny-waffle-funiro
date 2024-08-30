import { allProducts } from "@/constants/data";
import { prisma } from "../../../../../libs";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
  if (req.method === "POST") {
    try {
      await prisma.products.deleteMany();

      const sanitizedProducts = allProducts.map((product) => ({
        ...product,
        imageUrl: product.imageUrl.filter(
          (url) => typeof url === "string",
        ) as string[],
      }));

      await prisma.products.createMany({
        data: sanitizedProducts,
      });

      return NextResponse.json({
        message: "Data imported successfully",
        status: 200,
      });
    } catch (error) {
      console.error("Error importing data:", error);
      return NextResponse.json({ error: "Internal Server Error", status: 500 });
    }
  } else {
    return NextResponse.json({ error: "Method Not Allowed" });
  }
}
