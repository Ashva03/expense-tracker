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

export const getCompanyList = async (userId: string) => {
  try {
    const companies = await prisma.company.findMany({
      where: {
        users: {
          has: userId,
        },
      },
    });

    const companyIds = companies.map((company) => company.id);

    const invitedUsers = await prisma.invitedUsers.findMany({
      where: {
        companies: {
          hasSome: companyIds,
        },
      },
    });

    const companiesWithInvitedUsers = await Promise.all(
      companies.map(async (company) => {
        // Fetch user details for each user in the company
        const updatedUsers = await Promise.all(
          company.users?.map(async (userId) => {
            const userDetails = await prisma.user.findFirst({ where: { id: userId } });
            return userDetails;
          }) || [], // Ensure it's an empty array if company.users is undefined or null
        );

        // Filter invited users related to this company
        const companyInvitedUsers = invitedUsers.filter((user) => user.companies.includes(company.id));

        return {
          ...company,
          users: updatedUsers,
          invitedUsers: companyInvitedUsers,
        };
      }),
    );

    return companiesWithInvitedUsers;
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

  if (invitedUsers?.length > 0) {
    await prisma.invitedUsers.createMany({
      data: invitedUsers,
    });
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
  return workspace;
};
