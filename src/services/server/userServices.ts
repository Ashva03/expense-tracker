import prisma from '@/lib/server/prisma';

// {
//   email: string;
//   name: string;
//   password: string;
//   user_name: string;
//   details: {
//     app_name: string;
//     country_code: string;
//     extra: string;
//     time_zone_id: string;
//   }

class UserServices {
  async create(model: any) {
    try {
      const newUser: any = {
        email: model.email as string,
        name: model.name as string,
        password: model.password as string,
        user_name: model.name as string,
        details: {
          app_name: model.app_name || '',
          country_code: model.country_code || '',
          extra: model.password || '',
          time_zone_id: model.time_zone_id || '',
        },
      };
      const user = await prisma.user.create({
        data: newUser,
      });
      return user;
    } catch (error) {
      throw new Error('Error creating user');
    }
  }
}

const userServices = new UserServices();
export default userServices;
