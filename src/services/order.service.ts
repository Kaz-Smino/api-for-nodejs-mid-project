import { OrderModel } from '../models/order.model';

export class OrderService {
  static async getAllOrders() {
    return await OrderModel.getAllOrders();
  }

  static async getOrderById(id: string) {
    const order = await OrderModel.getOrderById(id);
    if (!order) {
      throw new Error('Order not found');
    }
    return order;
  }

  static async createOrder(user_id: string, product_id: string, order_date: string) {
    return await OrderModel.createOrder(user_id, product_id, order_date);
  }

  static async updateOrder(id: string, user_id: string, product_id: string, order_date: string) {
    const order = await OrderModel.updateOrder(id, user_id, product_id, order_date);
    if (!order) {
      throw new Error('Order not found');
    }
    return order;
  }

  static async deleteOrder(id: string) {
    const order = await OrderModel.deleteOrder(id);
    if (!order) {
      throw new Error('Order not found');
    }
    return order;
  }
}