import { UserModel } from "../models/user.model";
import bcrypt from 'bcrypt';
import validator from 'validator';

export class UserService {
  static async getAllUsers() {
    return await UserModel.getAllUsers();
  }

  static async getUserById(id: string) {
    return await UserModel.getUserById(id);
  }

  static async createUser(name: string, email: string, password: string) {
    if (!validator.isEmail(email)) {
      throw new Error('Invalid email format');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    return await UserModel.createUser(name, email, hashedPassword);
  }

  static async updateUser(id: string, name: string, email: string, password: string) {
    if (!validator.isEmail(email)) {
      throw new Error('Invalid email format');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    return await UserModel.updateUser(id, name, email, hashedPassword);
  }

  static async deleteUser(id: string) {
    const user = await UserModel.getUserById(id);
    if (!user) {
      throw new Error('User not found');
    }

    return await UserModel.deleteUser(id);
  }
}