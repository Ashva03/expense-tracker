'use server';

import { LoginInterface, SignupInterface } from '@/interfaces/userInterfaces';
import { prisma } from '../../prisma/client';
import { isEmpty } from '@/helper/common';
import { UserUpdatePayloadInterface } from '@/app/Interface/userInterface';

// import { UserAddPayloadInterface, UserUpdatePayloadInterface } from '@/app/Interface/userInterface';
// import { prisma } from '../../prisma/client';

export const getUserDetails: any = async ({ id }: { id: string }) => {
  const userDetails = await prisma.user.findFirst({ where: { id: id } });
  return userDetails;
};

export const updateUser = async (id: string, user: UserUpdatePayloadInterface) => {
  return await prisma.user.update({ where: { id }, data: user });
};

export const signupUserDetails = async ({ email, name, password }: SignupInterface) => {
  const allUsers = await prisma.user.findMany();
  const isUserExist = allUsers?.find((user) => user?.email?.toLowerCase() === email?.toLowerCase());
  if (isUserExist) {
    throw new Error('Email already exist!');
  }
  const newUser: any = {
    email: email.toLowerCase(),
    name,
    password,
    user_name: name,
    details: {
      app_name: 'expense-web',
      country_code: '+91',
      extra: password,
      time_zone_id: '',
    },
    normalized_email: email,
  };
  const user = await prisma.user.create({
    data: newUser,
  });
  return user;
};

export const loginUserDetails = async ({ email, password }: LoginInterface) => {
  const user = await prisma.user.findFirst({
    where: { email: email.toLowerCase(), password },
  });
  if (isEmpty(user)) {
    throw new Error('Invalid email or password!');
  } else {
    return user;
  }
};

// export const getUserByUid = async (uid: string) => {
//   const user = await prisma.user.findFirst({ where: { uid } });
//   return user;
// };

// export const getUserByEmail = async (email: string) => {
//   const user = await prisma.user.findFirst({ where: { email } });
//   return user;
// };

// export const createUser = async ({ uid, email, name, profile_image }: UserAddPayloadInterface) => {
//   const newUser: any = { created_by: uid, uid, email, updated_by: uid };

//   if (name && typeof name === 'string') {
//     newUser.name = name;
//   }

//   if (profile_image && typeof profile_image === 'string') {
//     newUser.profile_image = profile_image;
//   }

//   return await prisma.user.create({ data: newUser });
// };

// export const updateUser = async (id: string, user: UserUpdatePayloadInterface) => {
//   return await prisma.user.update({ where: { id }, data: user });
// };

// export const deleteUser = async (uid: string) => {
//   await prisma.saveBrand.deleteMany({ where: { user_id: uid } })
//   return await prisma.user.delete({ where: { uid } });
// };
