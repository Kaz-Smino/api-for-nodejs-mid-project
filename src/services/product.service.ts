import { ProductModel } from "../models/product.model";

export class ProductService {
  static async getAllProducts() {
    return ProductModel.getAllProducts();
  }

  static async getProductById(id: string) {
    return ProductModel.getProductById(id);
  }

  static async createProduct(name: string, description: string) {
    return ProductModel.createProduct(name, description);
  }

  static async updateProduct(id: string, name: string, description: string) {
    return ProductModel.updateProduct(id, name, description);
  }

  static async deleteProduct(id: string) {
    return ProductModel.deleteProduct(id);
  }
}