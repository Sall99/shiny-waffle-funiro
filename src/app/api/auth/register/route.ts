import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import prisma from "../../../../../libs/prisma.db";

export async function POST(request: Request) {
  const body = await request.json();

  const { email, fname, lname, password } = body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      lname,
      fname,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
