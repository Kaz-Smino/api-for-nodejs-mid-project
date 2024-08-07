import { Request, Response } from 'express';
import { OrderService } from '../services/order.service';

export class OrdersController {
  static async getAllOrders(req: Request, res: Response) {
    try {
      const orders = await OrderService.getAllOrders();
      res.json(orders);
    } catch (error: any) {
      console.error('Database query error:', error);
      res.status(500).json({ error: error.message });
    }
  }

  static async getOrderById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const order = await OrderService.getOrderById(id);
      res.json(order);
    } catch (error: any) {
      if (error.message === 'Order not found') {
        return res.status(404).json({ error: error.message });
      }
      console.error('Database query error:', error);
      res.status(500).json({ error: error.message });
    }
  }

  static async createOrder(req: Request, res: Response) {
    const { user_id, product_id, order_date } = req.body;
    try {
      const order = await OrderService.createOrder(user_id, product_id, order_date);
      res.status(201).json(order);
    } catch (error: any) {
      console.error('Database query error:', error);
      res.status(500).json({ error: error.message });
    }
  }

  static async updateOrder(req: Request, res: Response) {
    const { id } = req.params;
    const { user_id, product_id, order_date } = req.body;
    try {
      const order = await OrderService.updateOrder(id, user_id, product_id, order_date);
      res.json(order);
    } catch (error: any) {
      if (error.message === 'Order not found') {
        return res.status(404).json({ error: error.message });
      }
      console.error('Database query error:', error);
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteOrder(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const order = await OrderService.deleteOrder(id);
      res.json(order);
    } catch (error: any) {
      if (error.message === 'Order not found') {
        return res.status(404).json({ error: error.message });
      }
      console.error('Database query error:', error);
      res.status(500).json({ error: error.message });
    }
  }
}