import { NextRequest, NextResponse } from "next/server";
import requestIp from "request-ip";

import { prisma } from "../../../../libs";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  const { name, email, subject, message, phone, source = "Website" } = body;

  try {
    const ipAddress = requestIp.getClientIp(req as any) || "Unknown";

    const userAgent = req.headers.get("user-agent") || "Unknown";

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required" },
        { status: 404 },
      );
    }

    const newContactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        subject,
        message,
        phone,
        ipAddress,
        userAgent,
        source,
        status: "UNREAD",
      },
    });

    return NextResponse.json({
      newContactMessage,
    });
  } catch (error) {
    console.log(error, "error");
    return NextResponse.json({ error });
  }
}
