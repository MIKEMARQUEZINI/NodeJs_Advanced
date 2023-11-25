import { prismaConnect } from 'prismaConn';

class UserService {
  public async create(name: string, email: string, password: string) {
    const findUser = await prismaConnect.user.findUnique({
      where: {
        email,
      },
    });

    if (findUser) {
      throw new Error('User already exists');
    }

    const createUser = await prismaConnect.user.create({
      data: {
        name,
        email,
        password,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }
}

export const userService = new UserService();
