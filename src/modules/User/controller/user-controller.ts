import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

class UserController {
  public async create(req: Request, res: Response) {
    const prisma = new PrismaClient();

    await prisma.user.create({
      data: {
        name: 'Mario Bros',
        email: 'teste@emailteste.com',
      },
    });

    return res.json({ data: 'User created' });
  }

  public read(req: Request, res: Response) {
    return res.json({ data: 'Surprise Mother F#@k' });
  }
}
export const userController = new UserController();
