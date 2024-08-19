import { getServerSession } from "next-auth";
import prisma from "../../../../../libs/prisma.db";
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

    const addressBook = await prisma.addressBoook.findFirst({
      where: { userId: user.id },
    });

    if (!addressBook) {
      return NextResponse.json(
        {
          message: "AddressBook entry not found",
        },
        { status: 404 },
      );
    }

    await prisma.addressBoook.update({
      where: { id: addressBook.id },
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
