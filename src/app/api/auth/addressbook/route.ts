import prisma from "../../../../../libs/prisma.db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();

    const {
      fname,
      lname,
      companyName,
      countryRegion,
      street,
      townCity,
      province,
      zipCode,
      phone,
      email,
      additionalInfo,
    } = body;

    const session = await getServerSession();

    if (!session || !session.user || !session.user.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        { status: 404 },
      );
    }

    const userId = user.id;

    const addressBook = await prisma.addressBoook.create({
      data: {
        fname,
        lname,
        companyName,
        countryRegion,
        street,
        townCity,
        province,
        zipCode,
        phone,
        email,
        additionalInfo,
        userId,
      },
    });
    return NextResponse.json({
      data: addressBook,
    });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
