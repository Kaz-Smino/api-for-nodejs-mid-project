import { Router } from 'express';
import { OrdersController } from '../../controllers/orders.controller';

export const router = Router();

router.get("/", OrdersController.getAllOrders);
router.get("/:id", OrdersController.getOrderById);
router.post("/", OrdersController.createOrder);
router.put("/:id", OrdersController.updateOrder);
router.delete("/:id", OrdersController.deleteOrder);