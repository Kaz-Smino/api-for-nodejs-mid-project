import { pool } from "../db";

export class UserModel {
  static async getAllUsers() {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  }

  static async getUserById(id: string) {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async createUser(name: string, email: string, password: string) {
    try {
      const result = await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [name, email, password]
      );
      return result.rows[0];
    } catch (error: any) {
      if (error.code === '23505') { // PostgreSQL error code for unique violation
        throw new Error('Email already exists');
      }
      throw error;
    }
  }

  static async updateUser(id: string, name: string, email: string, password: string) {
    const result = await pool.query(
      'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
      [name, email, password, id]
    );
    return result.rows[0];
  }

  static async deleteUser(id: string) {
    const result = await pool.query(
      'DELETE FROM users WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }
}