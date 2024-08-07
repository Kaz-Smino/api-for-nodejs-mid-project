import { pool } from "../db";

export class OrderModel {
  static async getAllOrders() {
    const result = await pool.query('SELECT * FROM orders');
    return result.rows;
  }

  static async getOrderById(id: string) {
    const result = await pool.query('SELECT * FROM orders WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async createOrder(user_id: string, product_id: string, order_date: string) {
    const result = await pool.query(
      'INSERT INTO orders (user_id, product_id, order_date) VALUES ($1, $2, $3) RETURNING *',
      [user_id, product_id, order_date]
    );
    return result.rows[0];
  }

  static async updateOrder(id: string, user_id: string, product_id: string, order_date: string) {
    const result = await pool.query(
      'UPDATE orders SET user_id = $1, product_id = $2, order_date = $3 WHERE id = $4 RETURNING *',
      [user_id, product_id, order_date, id]
    );
    return result.rows[0];
  }

  static async deleteOrder(id: string) {
    const result = await pool.query(
      'DELETE FROM orders WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0];
  }
}