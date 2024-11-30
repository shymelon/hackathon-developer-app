import prisma from "~/server/database/client";
import type { User } from "@prisma/client";
import type { IUser } from "~/types/IUser";
export async function getUserByEmail(
  emailOrEmail: string,
): Promise<User | null> {
  return await prisma.user.findFirst({
    where: {
      OR: [{ email: emailOrEmail }],
    },
  });
}

export async function createUser(data: IUser) {
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      loginType: data.loginType,
      password: data.password,
    },
  });

  return user;
}

export async function getUserById(id: number) {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      email: true,
    },
  });
}
