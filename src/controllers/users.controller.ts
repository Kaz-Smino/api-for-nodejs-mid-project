import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UsersController {
  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error('Database query error:', error as any);
      res.status(500).json({ error: (error as any).message });
    }
  }

  static async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await UserService.getUserById(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error('Database query error:', error as any);
      res.status(500).json({ error: (error as any).message });
    }
  }

  static async createUser(req: Request, res: Response) {
    const { name, email, password } = req.body;
    try {
      const user = await UserService.createUser(name, email, password);
      res.status(201).json(user);
    } catch (error) {
      console.error('Database query error:', error as any);
      res.status(500).json({ error: (error as any).message });
    }
  }

  static async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
      const user = await UserService.updateUser(id, name, email, password);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error('Database query error:', error as any);
      res.status(500).json({ error: (error as any).message });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await UserService.deleteUser(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error('Database query error:', error as any);
      res.status(500).json({ error: (error as any).message });
    }
  }
}