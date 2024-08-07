import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

export class ProductsController {
  static async getAllProducts(req: Request, res: Response) {
    try {
      const products = await ProductService.getAllProducts();
      res.json(products);
    } catch (error: any) {
      console.error('Database query error:', error);
      res.status(500).json({ error: error.message });
    }
  }

  static async getProductById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const product = await ProductService.getProductById(id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error: any) {
      console.error('Database query error:', error);
      res.status(500).json({ error: error.message });
    }
  }

  static async createProduct(req: Request, res: Response) {
    const { name, description } = req.body;
    try {
      const product = await ProductService.createProduct(name, description);
      res.status(201).json(product);
    } catch (error: any) {
      console.error('Database query error:', error);
      res.status(500).json({ error: error.message });
    }
  }

  static async updateProduct(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
      const product = await ProductService.updateProduct(id, name, description);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error: any) {
      console.error('Database query error:', error);
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const product = await ProductService.deleteProduct(id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error: any) {
      console.error('Database query error:', error);
      res.status(500).json({ error: error.message });
    }
  }
}