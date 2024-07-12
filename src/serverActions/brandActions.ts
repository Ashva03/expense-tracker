'use server';
import { prisma } from '../../prisma/client';

export const saveBrand = async (userId: string, brandId: string) => {
  const savedBrand = await prisma.saveBrand.findFirst({ where: { user_id: userId, brand_id: brandId } });
  if (savedBrand) return savedBrand;

  const payload = {
    brand_id: brandId,
    user_id: userId,
    created_by: userId,
  };

  return await prisma.saveBrand.create({ data: payload });
};

export const removeSaveBrand = async (userId: string, brandId: string) => {
  return await prisma.saveBrand.deleteMany({ where: { user_id: userId, brand_id: brandId } });
};

export const getSavedBrands = async (userId: string) => {
  const savedBrands = (await prisma.saveBrand.findMany({ where: { user_id: userId }, select: { brand_id: true } })).map(
    (x) => x.brand_id,
  );
  return savedBrands;
};

export const removeAllSaveBrands = async (userId: string) => {
  return await prisma.saveBrand.deleteMany({ where: { user_id: userId } });
};
