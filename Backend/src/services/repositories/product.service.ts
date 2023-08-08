import ProductModel from "../../models/product.model.js";
import { BaseService } from "./base.service.js";

class ProductService extends BaseService {
  getAllById = async (productId: string) => {
    return await this._model.find({ _id: productId });
  };
}

export default new ProductService(ProductModel);
