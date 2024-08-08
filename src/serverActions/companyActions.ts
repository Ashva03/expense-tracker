'use server';

import { prisma } from '../../prisma/client';
import { getUniqueObjectId, isEmpty } from '@/helper/common';

export const getCompanyInvitedUsers = async (companyId: string) => {
  try {
    const users = await prisma.invitedUsers.findMany({
      where: {
        companies: {
          has: companyId,
        },
      },
    });
    return users;
  } catch (error) {
    console.error('Error fetching users by company:', error);
    throw error;
  }
};

export const createCompany = async ({
  name,
  users,
  userId,
}: {
  name: string;
  users: { id: string; email: string }[];
  userId: string;
}) => {
  const allUsers = await prisma.user.findMany();
  const companyId = getUniqueObjectId();
  let existUsers: string[] = [],
    invitedUsers: any[] = [],
    invitedIds = [];
  const userPromises = users?.map(async (user) => {
    const isUserExist = allUsers?.find((x) => x?.email?.toLowerCase() === user?.email?.toLowerCase());
    if (!isEmpty(isUserExist) && isUserExist?.id) {
      existUsers.push(isUserExist?.id);
    } else {
      const invitedUserExist = await prisma.invitedUsers.findFirst({ where: { email: user?.email } });
      console.log('invitedUserExist', invitedUserExist);
      if (!isEmpty(invitedUserExist)) {
        await prisma.invitedUsers.update({
          where: { id: invitedUserExist?.id },
          data: { companies: [...(invitedUserExist?.companies || []), companyId] },
        });
        invitedIds.push(invitedUserExist?.id);
      } else {
        invitedUsers.push({
          id: getUniqueObjectId(),
          email: user?.email,
          companies: [companyId],
          created_at: new Date(),
          updated_at: new Date(),
        });
      }
    }
  });

  // Wait for all promises to resolve
  await Promise.all(userPromises);

  console.log('invitedUsers', invitedUsers);
  if (invitedUsers?.length > 0) {
    const invitedResponse = await prisma.invitedUsers.createMany({
      data: invitedUsers,
    });
    console.log('invitedResponse====', invitedResponse);
  }

  const invitedUsersFinal =
    invitedUsers?.length === 0 && invitedIds?.length === 0 ? [] : await getCompanyInvitedUsers(companyId);

  const companyPayload: any = {
    profile_image: '',
    name,
    users: [...new Set([...(existUsers || []), userId])],
    invited_users: [...new Set(invitedUsersFinal?.map((x) => x.id) || [])],
    id: companyId,
    created_by: userId,
    created_time: new Date(),
    favourite: [],
    updated_time: new Date(),
  };
  const workspace = await prisma.company.create({
    data: companyPayload,
  });
  console.log('workspace =-=-=- ', workspace);
  return workspace;
};
