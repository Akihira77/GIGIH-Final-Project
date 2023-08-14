import ProductModel from "../../models/product.model.js";
import { BaseService } from "./base.service.js";
class ProductService extends BaseService {
    getAllById = async (productId) => {
        return await this._model.find({ _id: productId });
    };
    getAllByUserId = async (userId) => {
        return await this._model.find({ userId: userId });
    };
}
export default new ProductService(ProductModel);
