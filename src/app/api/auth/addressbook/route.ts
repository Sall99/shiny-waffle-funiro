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
