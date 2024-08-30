import { NextRequest, NextResponse } from "next/server";

import { prisma, getUserAndSession } from "../../../../../libs";

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
    const { user } = await getUserAndSession();

    const userId = user.id;

    const addressBook = await prisma.addressBoook.findFirst({
      where: { userId },
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
