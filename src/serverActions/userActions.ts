'use server';

import { UserAddPayloadInterface, UserUpdatePayloadInterface } from '@/app/Interface/userInterface';
import { prisma } from '../../prisma/client';

export const getAllUsers = async () => {
  const allUsers = await prisma.user.findMany();
  return allUsers;
};

export const getUserByUid = async (uid: string) => {
  const user = await prisma.user.findFirst({ where: { uid } });
  return user;
};

export const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findFirst({ where: { email } });
  return user;
};

export const createUser = async ({ uid, email, name, profile_image }: UserAddPayloadInterface) => {
  const newUser: any = { created_by: uid, uid, email, updated_by: uid };

  if (name && typeof name === 'string') {
    newUser.name = name;
  }

  if (profile_image && typeof profile_image === 'string') {
    newUser.profile_image = profile_image;
  }

  return await prisma.user.create({ data: newUser });
};

export const updateUser = async (id: string, user: UserUpdatePayloadInterface) => {
  return await prisma.user.update({ where: { id }, data: user });
};

export const deleteUser = async (uid: string) => {
  await prisma.saveBrand.deleteMany({ where: { user_id: uid } })
  return await prisma.user.delete({ where: { uid } });
};
