import { Router } from "express";
import { ProductsController } from "../../controllers/products.controller";

export const router = Router();

router.get("/", ProductsController.getAllProducts);
router.get("/:id", ProductsController.getProductById);
router.post("/", ProductsController.createProduct);
router.put("/:id", ProductsController.updateProduct);
router.delete("/:id", ProductsController.deleteProduct);