import { PrismaClient } from '@prisma/client';
import { applyPrismaMiddleware } from './userPrismaMiddleware';

const prisma = new PrismaClient();
applyPrismaMiddleware(prisma);

export default prisma;
