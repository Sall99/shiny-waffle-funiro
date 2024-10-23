import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { prisma } from "../../../../../libs";

export async function POST(request: Request) {
  const body = await request.json();

  const { email, fname, lname, password } = body;

  // Basic input validation checks
  if (!email || !fname || !lname || !password) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 },
    );
  }

  if (password.length < 8) {
    return NextResponse.json(
      { error: "Password must be at least 8 characters" },
      { status: 400 },
    );
  }

  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 409 });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user
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
