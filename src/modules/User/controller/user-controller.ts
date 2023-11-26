import { Request, Response } from 'express';
import { z } from 'zod';
import { userService } from '../service/user-service';

class UserController {
  public async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
      const ZUserSchema = z.object({
        name: z.string().optional(),
        email: z.string().email({ message: 'Email mandatory' }),
        password: z
          .string()
          .min(6, { message: 'Password is mandatory' })
          .max(255),
      });
      ZUserSchema.parse({ name, email, password });
    } catch (err: any) {
      return res
        .status(400)
        .json({ message: 'Invalid data', error: err.errors });
    }

    try {
      return res.json({
        message: 'User created!',
        data: await userService.create(name, email, password),
      });
    } catch (err: any) {
      return res.status(409).json({
        message: err.message,
      });
    }
  }
}
export const userController = new UserController();
