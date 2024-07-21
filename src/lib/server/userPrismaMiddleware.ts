import { PrismaClient, Prisma } from '@prisma/client';

export function applyPrismaMiddleware(prisma: PrismaClient) {
  prisma.$use(async (params: Prisma.MiddlewareParams, next: (params: Prisma.MiddlewareParams) => Promise<any>) => {
    if (params.model === 'User' && (params.action === 'create' || params.action === 'update')) {
      if (params.args.data.email) {
        params.args.data.normalized_email = (params.args.data.email as string).toUpperCase();
      }
    }
    return next(params);
  });
}
