import { Router } from "express";
import { router as productsRouter } from "./products.router";
import { router as usersRouter } from "./users.router";
import { router as ordersRouter } from "./orders.router";

export const apiRouter = Router();

const ROUTER = [
  { url: "/products", router: productsRouter },
  { url: "/users", router: usersRouter },
  { url: "/orders", router: ordersRouter }
];

ROUTER.forEach(({ url, router }) => {
  apiRouter.use(url, router);
});