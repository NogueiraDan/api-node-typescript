import { Request, Response } from 'express';
import { UserService } from '../services/UserService';


export class UserController {
  constructor(private readonly userService: UserService) {}

  createUser = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: 'Não foi possível criar um usuário' });
    }
  };

  getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await this.userService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error.' });
    }
  };

  getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await this.userService.getUserById(id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error.' });
    }
  };

  updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await this.userService.updateUser(id, req.body);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found.' });
      }
    } catch (error) {
      res.status(400).json({ error: 'Could not update user.' });
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await this.userService.deleteUser(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: 'Could not delete user.' });
    }
  };
}
