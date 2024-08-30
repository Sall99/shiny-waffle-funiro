import prisma from "../../../../libs/prisma.db";

export async function getUserAndAddress(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
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

  return { user, address: addressBook[0] };
}
