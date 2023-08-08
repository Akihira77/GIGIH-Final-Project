import UserCommentModel from "../../models/userComment.model.js";
import { BaseService } from "./base.service.js";
class UserCommentService extends BaseService {
    submitComment = async (input) => {
        return this._model.create(input);
    };
    getAllByProductId = async (productId) => {
        return this._model.find({ productId: productId });
    };
}
export default new UserCommentService(UserCommentModel);
