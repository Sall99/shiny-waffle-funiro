import { getServerSession } from "next-auth";
import { prisma } from "./prisma.db";

export async function getUserAndSession() {
  const session = await getServerSession();

  if (!session || !session.user || !session.user.email) {
    throw new Error("Unauthorized");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const addressBook = await prisma.addressBoook.findMany({
    where: { userId: user.id },
  });

  if (!addressBook || addressBook.length === 0) {
    throw new Error("Address not found");
  }

  const address = addressBook[0];

  return { session, user, address };
}
