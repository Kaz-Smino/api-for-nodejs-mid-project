import { pool } from "../db";

export class ProductModel {
  static async getAllProducts() {
    const result = await pool.query('SELECT * FROM products');
    return result.rows;
  }

  static async getProductById(id: string) {
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async createProduct(name: string, description: string) {
    const result = await pool.query(
      'INSERT INTO products (name, description) VALUES ($1, $2) RETURNING *',
      [name, description]
    );
    return result.rows[0];
  }

  static async updateProduct(id: string, name: string, description: string) {
    const result = await pool.query(
      'UPDATE products SET name = $1, description = $2 WHERE id = $3 RETURNING *',
      [name, description, id]
    );
    return result.rows[0];
  }

  static async deleteProduct(id: string) {
    const result = await pool.query(
      'DELETE FROM products WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }
}